#include <stdio.h>
#include <string.h>
#include <quirc.h>
#include <jpeglib.h>
#include </usr/include/setjmp.h>

static void dump_info(struct quirc *q) {
    int count = quirc_count(q);
    int i;

    printf("%d QR-codes found:\n\n", count);
    for (i = 0; i < count; i++) {
        struct quirc_code code;
        struct quirc_data data;
        quirc_decode_error_t err;

        quirc_extract(q, i, &code);
        err = quirc_decode(&code, &data);
        printf("\n");

        if (err) {
            printf("  Decoding FAILED: %s\n", quirc_strerror(err));
        } else {
            printf("  Decoding successful:\n");
            printf("    Payload: %s\n", data.payload);
        }

        printf("\n");
    }
}

typedef struct __jmp_buf_tag jmp_buf[1];

struct my_jpeg_error {
    struct jpeg_error_mgr base;
    jmp_buf env;
};

static void my_output_message(struct jpeg_common_struct *com) {
    struct my_jpeg_error *err = (struct my_jpeg_error *) com->err;
    char buf[JMSG_LENGTH_MAX];

    err->base.format_message(com, buf);
    fprintf(stderr, "JPEG error: %s\n", buf);
}


static void my_error_exit(struct jpeg_common_struct *com) {
    struct my_jpeg_error *err = (struct my_jpeg_error *) com->err;

    my_output_message(com);
    longjmp(err->env, 0);
}

static struct jpeg_error_mgr *my_error_mgr(struct my_jpeg_error *err) {
    jpeg_std_error(&err->base);

    err->base.error_exit = my_error_exit;
    err->base.output_message = my_output_message;

    return &err->base;
}


int load_jpeg(struct quirc *q, const char *filename) {
    FILE *infile = fopen(filename, "rb");
    struct jpeg_decompress_struct dinfo;
    struct my_jpeg_error err;
    uint8_t *image;
    int y;

    if (!infile) {
        perror("can't open input file");
        return -1;
    }

    memset(&dinfo, 0, sizeof(dinfo));
    dinfo.err = my_error_mgr(&err);

    if (setjmp(err.env))
        goto fail;

    jpeg_create_decompress(&dinfo);
    jpeg_stdio_src(&dinfo, infile);

    jpeg_read_header(&dinfo, TRUE);
    dinfo.output_components = 1;
    dinfo.out_color_space = JCS_GRAYSCALE;
    jpeg_start_decompress(&dinfo);

    if (dinfo.output_components != 1) {
        fprintf(stderr, "Unexpected number of output components: %d",
                dinfo.output_components);
        goto fail;
    }

    if (quirc_resize(q, dinfo.output_width, dinfo.output_height) < 0)
        goto fail;

    image = quirc_begin(q, NULL, NULL);

    for (y = 0; y < dinfo.output_height; y++) {
        JSAMPROW row_pointer = image + y * dinfo.output_width;

        jpeg_read_scanlines(&dinfo, &row_pointer, 1);
    }

    jpeg_finish_decompress(&dinfo);
    fclose(infile);
    jpeg_destroy_decompress(&dinfo);
    return 0;

    fail:
    fclose(infile);
    jpeg_destroy_decompress(&dinfo);
    return -1;
}

int main(int argc, char **argv) {
    struct quirc *q;

    q = quirc_new();

    load_jpeg(q, argv[1]);

    quirc_end(q);
    dump_info(q);

    quirc_destroy(q);
    return 0;
}

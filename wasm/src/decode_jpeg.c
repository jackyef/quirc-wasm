#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <quirc.h>
#include <jpeglib.h>
#include </usr/include/setjmp.h>

struct Image {
    uint8_t *buffer;
    int width;
    int height;
};

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


struct Image load_jpeg(const char *filename) {
    struct Image img;

    FILE *infile = fopen(filename, "rb");
    struct jpeg_decompress_struct dinfo;
    struct my_jpeg_error err;
    int y;

    memset(&dinfo, 0, sizeof(dinfo));
    dinfo.err = my_error_mgr(&err);

    jpeg_create_decompress(&dinfo);
    jpeg_stdio_src(&dinfo, infile);

    jpeg_read_header(&dinfo, TRUE);
    dinfo.output_components = 1;
    dinfo.out_color_space = JCS_GRAYSCALE;
    jpeg_start_decompress(&dinfo);

    int imageArea = dinfo.image_width * dinfo.image_height;
    uint8_t *buffer = malloc(sizeof(uint8_t) * imageArea);

    for (y = 0; y < dinfo.output_height; y++) {
        JSAMPROW row_pointer = buffer + y * dinfo.output_width;

        jpeg_read_scanlines(&dinfo, &row_pointer, 1);
    }

    jpeg_finish_decompress(&dinfo);
    fclose(infile);
    jpeg_destroy_decompress(&dinfo);

    img.width = dinfo.image_width;
    img.height = dinfo.image_height;
    img.buffer = buffer;

    return img;
}

char *decode_qr(uint8_t *buffer, int width, int height) {
    /*
     * To decode images, you'll need to instantiate a ``struct quirc`object,
     * which is done with the ``quirc_new`` function.
     *
     * quirc_begin() must first be called to obtain access to a buffer into
     * which the input image should be placed. Optionally, the current width and height may be returned.
     */
    struct quirc *q;
    q = quirc_new();

    /*
     * Load png image file by filename,
     * convert to grayscale image,
     * feed grayscale image ke buffer using quirc_end and quirc_begin.
     * */
    printf("img width: %d\n", width);
    printf("img height: %d\n", height);
    printf("img buffer: %p\n", buffer);

    /*
     * Having obtained a decoder object,
     * you need to set the image size that you'll be working with,
     * which is done using ``quirc_resize``.
     */
    quirc_resize(q, width, height);

    /*
     * These functions are used to process images for QR-code recognition.
     * quirc_begin() must first be called to obtain access to a buffer into
     * which the input image should be placed. Optionally, the current
     * width and height may be returned.
     * */
    uint8_t *quircBuffer;
    quircBuffer = quirc_begin(q, &width, &height);

    uint8_t *p;
    p = buffer;

    unsigned int image_area = height * width;


    /*check value and copy elements*/
    for (int i = 0; i < image_area; ++i) {
        /*printf("Value of image[%d] = %d\n", i, *p);*/
        *quircBuffer = *p;
        p++;
        quircBuffer++;
    }

    /*
     * After filling the buffer, quirc_end() should be called to process
     * the image for QR-code recognition. The locations and content of each
     * code may be obtained using accessor functions described below.
     */
    quirc_end(q);

    /* This structure is used to return information about detected QR codes in the input image. */
    struct quirc_code code;

    /* This structure holds the decoded QR-code data */
    struct quirc_data data;

    /* Extract the QR-code specified by the given index. */
    quirc_extract(q, 0, &code);
    /* Decode a QR-code, returning the payload data. */
    quirc_decode(&code, &data);

    /* Copy data payload from quirc_data to dataPayloadBuffer */
    uint8_t *dataPayloadBuffer = malloc(sizeof(uint8_t) * QUIRC_MAX_PAYLOAD);
    uint8_t *dataPayloadBufferPtr = dataPayloadBuffer;

    uint8_t *dataPayloadPtr = data.payload;
    for (int j = 0; j < QUIRC_MAX_PAYLOAD; ++j) {
        *dataPayloadBufferPtr = *dataPayloadPtr;
        dataPayloadBufferPtr++;
        dataPayloadPtr++;
    }

    /*
     * Later, when you no longer need to decode anything,
     * you should release the allocated memory with ``quirc_destroy``
     * */
    quirc_destroy(q);

    /* Return data payload in char pointer form (string in c) */
    return (char *) dataPayloadBuffer;
}

void decoder(char **argv) {
    /*
     * Print input filename
     * */
    printf("Filename is %s \n", (const char *) argv[1]);

    /*
     * Load png and assign the returned object to Image struct
     * */
    struct Image img = load_jpeg(argv[1]);

    /*
     * Print returned data payload from decode_qr function
     * */
    char *dataPayload;
    dataPayload = decode_qr(img.buffer, img.width, img.height);
    printf("Data payload is %s \n", dataPayload);
}


int main(int argc, char **argv) {
    decoder(argv);
}

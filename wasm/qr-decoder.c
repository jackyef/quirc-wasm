#include <stdio.h>
#include <string.h>
#include "dbgutil.h"

static void dump_info(struct quirc *q)
{
    int count = quirc_count(q);
    int i;

    printf("%d QR-codes found:\n\n", count);
    for (i = 0; i < count; i++) {
        struct quirc_code code;
        struct quirc_data data;
        quirc_decode_error_t err;

        quirc_extract(q, i, &code);
        err = quirc_decode(&code, &data);

        dump_cells(&code);
        printf("\n");

        if (err) {
            printf("  Decoding FAILED: %s\n", quirc_strerror(err));
        } else {
            printf("  Decoding successful:\n");
            dump_data(&data);
        }

        printf("\n");
    }
}

int main(int argc, char **argv)
{
    struct quirc *q;

    printf("quirc inspection program\n");
    printf("Copyright (C) 2010-2012 Daniel Beer <dlbeer@gmail.com>\n");
    printf("Library version: %s\n", quirc_version());
    printf("\n");

    if (argc < 2) {
        fprintf(stderr, "Usage: %s <testfile.jpg|testfile.png>\n", argv[0]);
        return -1;
    }

    q = quirc_new();
    if (!q) {
        perror("can't create quirc object");
        return -1;
    }

    int status = -1;
    if (check_if_png(argv[1])) {
        status = load_png(q, argv[1]);
    } else {
        status = load_jpeg(q, argv[1]);
    }
    if (status < 0) {
        quirc_destroy(q);
        return -1;
    }

    quirc_end(q);
    dump_info(q);

    quirc_destroy(q);
    return 0;
}

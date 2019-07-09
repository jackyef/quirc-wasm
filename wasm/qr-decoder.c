#include <stdio.h>
#include <string.h>
#include "dbgutil.h"

static void decode_qr(struct quirc *q) {
    struct quirc_code code;
    struct quirc_data data;

    quirc_extract(q, 0, &code);
    quirc_decode(&code, &data);

    printf("%s \n", (const char *) &data.payload);
}

int main(int argc, char **argv) {
    struct quirc *q;

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
    decode_qr(q);

    quirc_destroy(q);
    return 0;
}

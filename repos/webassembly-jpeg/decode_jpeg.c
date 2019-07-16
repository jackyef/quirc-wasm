#include <fcntl.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "quirc/quirc.h"
#include <sys/stat.h>
#include <setjmp.h>
#include "zconf.h"
#include "emscripten/emscripten.h"
#include "libjpeg/jpeglib.h"

/*
 * Decode qr-code loaded from buffer array
 * */
char * EMSCRIPTEN_KEEPALIVE decode_qr(uint8_t *buffer, int width, int height, unsigned long size) {
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
    unsigned int image_area = width * height;


    /*check value and copy elements*/
    for (int i = 0; i < image_area; ++i) {
        /*printf("Value of image[%d] = %d\n", i, *p);*/
        *quircBuffer = *buffer;
        buffer++;
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

    printf("Data payload is %s \n", data.payload);

    /*
     * Later, when you no longer need to decode anything,
     * you should release the allocated memory with ``quirc_destroy``
     * */
    quirc_destroy(q);

    /* Return data payload in char pointer form (string in c) */
    return (char *) dataPayloadBuffer;
}

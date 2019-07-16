#include <fcntl.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "quirc/quirc.h"
#include <sys/stat.h>
//#include </usr/include/setjmp.h>
#include "zconf.h"
#include "emscripten/emscripten.h"
#include "libjpeg/jpeglib.h"

/*
 * Object that contain image data information
 * */
struct Image {
    uint8_t *buffer;
    int width;
    int height;
    unsigned long size;
};

/*
 * Load image file and return image object that contain image data buffer pointer and file size
 * */
struct Image load_jpeg(const char *filename) {
    struct Image img;

    int rc, i;

    struct stat file_info;
    unsigned long jpg_size;
    unsigned char *jpg_buffer;

    stat(filename, &file_info);
    jpg_size = file_info.st_size;
    jpg_buffer = (unsigned char *) malloc(jpg_size + 100);

    int fd = open(filename, O_RDONLY);
    i = 0;
    while (i < jpg_size) {
        rc = read(fd, jpg_buffer + i, jpg_size - i);
        printf("Input: Read %d/%lu bytes\n", rc, jpg_size - i);
        i += rc;
    }
    close(fd);

    img.buffer = jpg_buffer;
    img.size = jpg_size;

    return img;
}

/*
 * Load image from buffer and return the grayscaled image data in form of a struct image
 * */
struct Image decompress_image(uint8_t *jpg_buffer, unsigned long jpg_size) {
    struct Image img;

    unsigned long output_size;
    unsigned char *output_buffer;

    struct jpeg_decompress_struct cinfo;
    struct jpeg_error_mgr jerr;

    int row_stride, width, height, pixel_size;

    printf("Proc: Create Decompress struct\n");
    cinfo.err = jpeg_std_error(&jerr);
    jpeg_create_decompress(&cinfo);

    printf("Proc: Set memory buffer as source\n");
    jpeg_mem_src(&cinfo, jpg_buffer, jpg_size);

    printf("Proc: Read the JPEG header\n");
    jpeg_read_header(&cinfo, TRUE);
    cinfo.output_components = 1;
    cinfo.out_color_space = JCS_GRAYSCALE;

    printf("Proc: Initiate JPEG decompression\n");
    jpeg_start_decompress(&cinfo);

    width = cinfo.output_width;
    height = cinfo.output_height;
    pixel_size = cinfo.output_components;

    printf("Proc: Image is %d by %d with %d components\n",
           width, height, pixel_size);

    output_size = width * height * pixel_size;
    output_buffer = (unsigned char *) malloc(output_size);
    row_stride = width * pixel_size;

    printf("Proc: Start reading scanlines\n");
    while (cinfo.output_scanline < cinfo.output_height) {
        unsigned char *buffer_array[1];
        buffer_array[0] = output_buffer + \
                           (cinfo.output_scanline) * row_stride;

        jpeg_read_scanlines(&cinfo, buffer_array, 1);
    }

    printf("Proc: Done reading scanlines\n");
    jpeg_finish_decompress(&cinfo);

    jpeg_destroy_decompress(&cinfo);

    free(jpg_buffer);

    printf("End of decompression\n");

    img.width = width;
    img.height = height;
    img.buffer = output_buffer;

    return img;
}

/*
 * Decode qr-code loaded from buffer array
 * */
char * EMSCRIPTEN_KEEPALIVE decode_qr(uint8_t *buffer, unsigned long size) {
    /*
     * To decode images, you'll need to instantiate a ``struct quirc`object,
     * which is done with the ``quirc_new`` function.
     *
     * quirc_begin() must first be called to obtain access to a buffer into
     * which the input image should be placed. Optionally, the current width and height may be returned.
     */
    struct quirc *q;
    struct Image decompressedImage;
    q = quirc_new();

    decompressedImage = decompress_image(buffer, size);

    int decompressedImageWidth;
    int decompressedImageHeight;
    uint8_t *decompressedImageBuffer;
    decompressedImageHeight = decompressedImage.height;
    decompressedImageWidth = decompressedImage.width;
    decompressedImageBuffer = decompressedImage.buffer;

    /*
     * Load png image file by filename,
     * convert to grayscale image,
     * feed grayscale image ke buffer using quirc_end and quirc_begin.
     * */
    printf("img width: %d\n", decompressedImageHeight);
    printf("img height: %d\n", decompressedImageWidth);
    printf("img buffer: %p\n", decompressedImageBuffer);

    /*
     * Having obtained a decoder object,
     * you need to set the image size that you'll be working with,
     * which is done using ``quirc_resize``.
     */
    quirc_resize(q, decompressedImageWidth, decompressedImageHeight);

    /*
     * These functions are used to process images for QR-code recognition.
     * quirc_begin() must first be called to obtain access to a buffer into
     * which the input image should be placed. Optionally, the current
     * width and height may be returned.
     * */
    uint8_t *quircBuffer;
    quircBuffer = quirc_begin(q, &decompressedImageWidth, &decompressedImageHeight);

    uint8_t *decompressedImageBufferPtr;
    decompressedImageBufferPtr = decompressedImageBuffer;

    unsigned int image_area = decompressedImageWidth * decompressedImageHeight;


    /*check value and copy elements*/
    for (int i = 0; i < image_area; ++i) {
        /*printf("Value of image[%d] = %d\n", i, *p);*/
        *quircBuffer = *decompressedImageBufferPtr;
        decompressedImageBufferPtr++;
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

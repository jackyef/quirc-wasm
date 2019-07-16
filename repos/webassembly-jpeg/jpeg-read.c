#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "libjpeg/jpeglib.h"
#include <setjmp.h>
#include "webassembly-jpeg.h"

struct my_error_mgr
{
    struct jpeg_error_mgr pub; /* "public" fields */
    jmp_buf setjmp_buffer;     /* for return to caller */
};

typedef struct my_error_mgr *my_error_ptr;

METHODDEF(void)
my_error_exit(j_common_ptr cinfo)
{
    my_error_ptr myerr = (my_error_ptr)cinfo->err;
    (*cinfo->err->output_message)(cinfo);
    longjmp(myerr->setjmp_buffer, 1);
}

GLOBAL(Image *)
readJpeg(unsigned char *jpegData, ULONG dataSize)
{
    printf("Proc: Create Decompress struct\n");
    struct jpeg_decompress_struct cinfo;
    struct my_error_mgr jerr;
    int row_stride;

    cinfo.err = jpeg_std_error(&jerr.pub);
    jerr.pub.error_exit = my_error_exit;
    if (setjmp(jerr.setjmp_buffer))
    {
        jpeg_destroy_decompress(&cinfo);
        return 0;
    }
    jpeg_create_decompress(&cinfo);

    printf("Proc: Set memory buffer as source\n");
    jpeg_mem_src(&cinfo, (BYTE *)jpegData, dataSize);

    printf("Proc: Read the JPEG header\n");
    (void)jpeg_read_header(&cinfo, TRUE);
    cinfo.output_components = 1;
    cinfo.out_color_space = JCS_GRAYSCALE;

    printf("Proc: Initiate JPEG decompression\n");
    (void)jpeg_start_decompress(&cinfo);
    ULONG width = cinfo.output_width;
    ULONG height = cinfo.output_height;
    int pixelSize = cinfo.output_components;

    printf("Proc: Image is %d by %d with %d components\n",
           width, height, pixelSize);

    Image *pImage = (Image *)malloc(sizeof(Image));
    pImage->width = width;
    pImage->height = height;
    pImage->data = (BYTE *)malloc(width * height * pixelSize);
    row_stride = cinfo.output_width * cinfo.output_components;

    printf("Proc: Start reading scanlines\n");
    while (cinfo.output_scanline < cinfo.output_height)
    {
        BYTE *buffer_array[1];
        buffer_array[0] = pImage->data + (cinfo.output_scanline) * row_stride;
        jpeg_read_scanlines(&cinfo, buffer_array, 1);
    }

    printf("Proc: Done reading scanlines\n");
    (void)jpeg_finish_decompress(&cinfo);
    jpeg_destroy_decompress(&cinfo);
    return pImage;
}

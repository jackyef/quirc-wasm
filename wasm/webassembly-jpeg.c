#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "emscripten/emscripten.h"
#include "webassembly-jpeg.h"

Image *pSrcImage;

Image *EMSCRIPTEN_KEEPALIVE setSrcImage(unsigned char *jpegData, ULONG size)
{
    pSrcImage = readJpeg(jpegData, size);
/*
    EM_ASM({ console.log('setSrcImage done'); });
*/
    return pSrcImage;
}
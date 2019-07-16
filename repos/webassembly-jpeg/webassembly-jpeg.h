typedef unsigned char BYTE;  // 1 byte
typedef unsigned long ULONG; // 4 bytes

typedef struct Image
{
    int width;
    int height;
    int compressedSize;
    unsigned char *data;
} Image;

extern Image *readJpeg(BYTE *jpegData, ULONG dataSize);
extern Image *writeJpeg(BYTE *bmp, ULONG width, ULONG height, ULONG quality);
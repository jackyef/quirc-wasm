typedef unsigned char BYTE;  // 1 byte
typedef unsigned long ULONG; // 4 bytes

typedef struct Image
{
    int width;
    int height;
    unsigned char *data;
} Image;

extern Image *readJpeg(BYTE *jpegData, ULONG dataSize);
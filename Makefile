CC ?= gcc
PREFIX ?= /usr/local
SDL_CFLAGS != pkg-config --cflags sdl
SDL_LIBS != pkg-config --libs sdl

LIB_VERSION = 1.0

CFLAGS ?= -O3 -Wall -fPIC
QUIRC_CFLAGS = -Ilib $(CFLAGS) $(SDL_CFLAGS)
LIB_OBJ = \
    lib/decode.o \
    lib/identify.o \
    lib/quirc.o \
    lib/version_db.o
DEMO_OBJ = \
    demo/camera.o \
    demo/mjpeg.o \
    demo/convert.o \
    demo/dthash.o \
    demo/demoutil.o

all: decode_png decode_jpeg

decode_png: wasm/src/decode_png.o libquirc.a
	$(CC) -o $@ wasm/src/decode_png.o libquirc.a $(LDFLAGS) -lm -lpng

decode_jpeg: wasm/src/decode_jpeg.o libquirc.a
	$(CC) -o $@ wasm/src/decode_jpeg.o libquirc.a $(LDFLAGS) -lm -ljpeg

memdjpeg: resources/gists/memdjpeg.o
	$(CC) -o $@ resources/gists/memdjpeg.o -lm -ljpeg

libquirc.a: $(LIB_OBJ)
	rm -f $@
	ar cru $@ $(LIB_OBJ)
	ranlib $@

.PHONY: libquirc.so
libquirc.so: libquirc.so.$(LIB_VERSION)

libquirc.so.$(LIB_VERSION): $(LIB_OBJ)
	$(CC) -shared -o $@ $(LIB_OBJ) $(LDFLAGS) -lm

.c.o:
	$(CC) $(QUIRC_CFLAGS) -o $@ -c $<

clean:
	rm -f */*.o
	rm -f */*.lo
	rm -f libquirc.a
	rm -f libquirc.so.$(LIB_VERSION)
	rm -f decode_png
	rm -f decode_jpeg
	rm -f memdjpeg
	rm -f output.ppm
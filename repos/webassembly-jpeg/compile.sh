#!/usr/bin/env bash
emcc -o webassembly-jpeg.js decode_jpeg.c quirc/*.c jpeg-read.c jpeg-write.c webassembly-jpeg.c libjpeg/.libs/libjpeg.a -O3 -s WASM=1 -s NO_EXIT_RUNTIME=1 -s 'EXTRA_EXPORTED_RUNTIME_METHODS=["writeArrayToMemory","getValue", "cwrap"]'
#emcc  decode_jpeg.c quirc/*.c libjpeg/.libs/libjpeg.a -s WASM=1 -s NO_EXIT_RUNTIME=1 -s 'EXTRA_EXPORTED_RUNTIME_METHODS=["writeArrayToMemory","getValue", "cwrap"]'
ls -l -h | grep wasm
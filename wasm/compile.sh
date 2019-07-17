#!/usr/bin/env bash
rm ./quirc.js ./quirc.wasm
emcc -o quirc.js decode_jpeg.c quirc/*.c jpeg-read.c webassembly-jpeg.c libjpeg/.libs/libjpeg.a -O3 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1 -s NO_EXIT_RUNTIME=1 -s 'EXTRA_EXPORTED_RUNTIME_METHODS=["writeArrayToMemory","getValue", "cwrap"]'
ls -l -h | grep quirc.wasm
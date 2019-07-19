#!/usr/bin/env bash
rm ./quirc.js ./quirc.wasm
source ~/Documents/emsdk/emsdk_env.sh
# compile quirc js glue code without pre js source code and modularized instance
emcc -o quirc.js decode_jpeg.c quirc/*.c jpeg-read.c webassembly-jpeg.c libjpeg/.libs/libjpeg.a -O3 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1 -s NO_EXIT_RUNTIME=1 -s 'EXTRA_EXPORTED_RUNTIME_METHODS=["writeArrayToMemory","getValue", "cwrap"]'
# compile quirc js glue code with pre js source code and modularized instance
emcc -o quirc.js decode_jpeg.c quirc/*.c jpeg-read.c webassembly-jpeg.c libjpeg/.libs/libjpeg.a -O3 -s --pre-js quirc-js.js -s MODULARIZE_INSTANCE=1 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1 -s NO_EXIT_RUNTIME=1 -s 'EXTRA_EXPORTED_RUNTIME_METHODS=["writeArrayToMemory","getValue", "cwrap"]'
./compress.sh
./size.sh
#!/usr/bin/env bash
rm -rf ./build
mkdir -p ./build
source /Users/jacky/Personal/Projects/emsdk/emsdk_env.sh

# compile quirc js glue code without pre js source code and modularized instance
# emcc -o quirc.js decode_jpeg.c quirc/*.c jpeg-read.c webassembly-jpeg.c libjpeg/.libs/libjpeg.a \
#   -O3 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1 -s NO_EXIT_RUNTIME=1 \
#   -s 'EXTRA_EXPORTED_RUNTIME_METHODS=["writeArrayToMemory","getValue", "cwrap"]' \
#   -s 'EXPORTED_FUNCTIONS=["_malloc", "_free"]'

# compile to asm.js
emcc -o build/quirc.asm.js decode_jpeg.c quirc/*.c jpeg-read.c webassembly-jpeg.c libjpeg/.libs/libjpeg.a \
  -O3 -s --pre-js quirc-js.js -s MODULARIZE_INSTANCE=1 -s WASM=0 -s ALLOW_MEMORY_GROWTH=1 -s NO_EXIT_RUNTIME=1 \
  -s 'EXTRA_EXPORTED_RUNTIME_METHODS=["writeArrayToMemory","getValue", "cwrap"]' \
  -s 'EXPORTED_FUNCTIONS=["_malloc", "_free"]'

# compile quirc js glue code with pre js source code and modularized instance
emcc -o build/quirc.js decode_jpeg.c quirc/*.c jpeg-read.c webassembly-jpeg.c libjpeg/.libs/libjpeg.a \
  -O3 -s --pre-js quirc-js.js -s MODULARIZE_INSTANCE=1 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1 -s NO_EXIT_RUNTIME=1 \
  -s 'EXTRA_EXPORTED_RUNTIME_METHODS=["writeArrayToMemory","getValue", "cwrap"]' \
  -s 'EXPORTED_FUNCTIONS=["_malloc", "_free"]'

# compile another one with worker support
emcc -o build/quirc.worker.js decode_jpeg.c quirc/*.c jpeg-read.c webassembly-jpeg.c \
  -O3 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1 -s NO_EXIT_RUNTIME=1 \
  -s BUILD_AS_WORKER=1 -s ENVIRONMENT='worker' \
  -s STRICT_JS=1 -s RUNNING_JS_OPTS=1 \
  -s USE_LIBJPEG=1 -s --pre-js quirc-js.js -s MODULARIZE_INSTANCE=1 \
  -s 'EXTRA_EXPORTED_RUNTIME_METHODS=["writeArrayToMemory","getValue", "cwrap"]' \
  -s 'EXPORTED_FUNCTIONS=["_malloc", "_free"]'

# ./compress.sh
./size.sh
node ./copy-to-publish-dir.js
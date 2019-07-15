#!/usr/bin/env bash
emcc -s WASM=1 -s EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap"]' -s ERROR_ON_MISSING_LIBRARIES=0 -s ALLOW_MEMORY_GROWTH=1 -s ASSERTIONS=1 \
    -I decode_jpeg.c \
    lib/*.c
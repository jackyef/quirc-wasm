#!/usr/bin/env bash
emcc -O3 decode_jpeg.c -o decode_jpeg.js -s WASM=1 -I quirc/*.c libjpeg/*.c
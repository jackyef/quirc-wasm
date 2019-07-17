cmake_minimum_required(VERSION 2.6.0)

project(quirc)

add_executable(${PROJECT_NAME} wasm/src/decode_png.c wasm/src/decode_jpeg.c resources/gists/memdjpeg.c wasm/decode_jpeg.c wasm/jpeg-read.c wasm/webassembly-jpeg.c)
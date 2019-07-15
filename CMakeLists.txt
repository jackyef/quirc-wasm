cmake_minimum_required(VERSION 2.6.0)

project(quirc)

add_executable(${PROJECT_NAME} demo/demo.c demo/demoutil.c tests/qrtest.c tests/inspect.c demo/scanner.c wasm/src/decode_png.c wasm/src/decode_jpeg.c tests/dbgutil.c wasm/emcc/decode_jpeg.c wasm/emcc/decode_png.c)
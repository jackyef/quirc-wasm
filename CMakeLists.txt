cmake_minimum_required(VERSION 2.6.0)

project(quirc)

add_executable(${PROJECT_NAME} demo/demo.c demo/demoutil.c tests/qrtest.c tests/inspect.c)
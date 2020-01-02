#!/usr/bin/env bash
printf "Quirc Wasm\n"
ls -l -h | grep build/quirc.wasm
printf "Quirc Glue Js Code\n"
ls -l -h | grep build/quirc.js

printf "Quirc Wasm Worker\n"
ls -l -h | grep build/quirc.worker.wasm
printf "Quirc Worker Glue Js Code\n"
ls -l -h | grep build/quirc.worker.js
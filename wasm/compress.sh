#!/usr/bin/env bash
gzip -k -f -- ./build/quirc.wasm
gzip -k -f -- ./build/quirc.js
gzip -k -f -- ./build/quirc.worker.wasm
gzip -k -f -- ./build/quirc.worker.js
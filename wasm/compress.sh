#!/usr/bin/env bash
gzip -k -f -- ./quirc.wasm
gzip -k -f -- ./quirc.js
gzip -k -f -- ./quirc.worker.wasm
gzip -k -f -- ./quirc.worker.js
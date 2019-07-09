#!/usr/bin/env bash
sudo make clean
sudo make qr-decoder
reset
./test-qr-decoder.sh
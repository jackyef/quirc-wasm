#!/usr/bin/env bash
printf "Make Clean\n"
sudo make clean
printf "Make qr-decoder\n"
sudo make qr-decoder
printf "Execute qr-decoder\n"
./test-qr-decoder.sh
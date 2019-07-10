#!/usr/bin/env bash
sudo make clean
printf "\n"
sudo make qr-decoder
printf "\n"
#reset
printf "\n"
./test-qr-decoder.sh
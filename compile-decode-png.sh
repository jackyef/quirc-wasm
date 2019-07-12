#!/usr/bin/env bash
printf "Make Clean\n"
sudo make clean
printf "Make decode_png\n"
sudo make decode_png
printf "Execute decode_png\n"
./decode_png ./qrcodes/tokopedia.png
./decode_png ./qrcodes/pdp-tokopedia.png
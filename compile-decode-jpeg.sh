#!/usr/bin/env bash
printf "Make Clean\n"
sudo make clean
printf "Make decode_jpeg\n"
sudo make decode_jpeg
printf "Execute decode_jpeg\n"
./decode_jpeg ./qrcodes/tokopedia.jpg
./decode_jpeg ./qrcodes/pdp-tokopedia.jpg
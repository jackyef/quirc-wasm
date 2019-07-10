#!/usr/bin/env bash
printf "Make Clean\n"
sudo make clean
printf "Make decode_qr\n"
sudo make decode_qr
printf "Execute decode_qr\n"
./decode_qr ./qrcodes/tokopedia.png
./decode_qr ./qrcodes/pdp-tokopedia.png
#!/usr/bin/env bash
printf "Make Clean\n";
sudo make clean
printf "Make memdpeg\n"
sudo make memdjpeg
printf "Execute memdjpeg\n"
./memdjpeg ./qrcodes/tokopedia.jpg
./memdjpeg ./qrcodes/pdp-tokopedia.jpg
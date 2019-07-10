#!/usr/bin/env bash
printf "Make Clean\n"
sudo make clean
printf "Make quirc-scanner\n"
sudo make quirc-scanner
printf "Make install\n"
sudo make install
printf "Execute quirc-scanner\n"
quirc-scanner
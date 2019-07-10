#!/usr/bin/env bash
printf "Make Clean\n"
sudo make clean
printf "Make quirc-demo\n"
sudo make quirc-demo
printf "Make install\n"
sudo make install
printf "Execute quirc-demo\n"
quirc-demo
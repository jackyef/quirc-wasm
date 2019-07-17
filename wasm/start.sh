#!/usr/bin/env bash
fuser -k 8080/tcp
sleep 0.5
./compile.sh && yarn start
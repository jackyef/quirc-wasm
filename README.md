# Quirc-JpegLib WASM
## Wasm Module to decode qr code image based on quirc and jpeglib. Source codes written in C and WASM module compiled using Emscripten.

### References
Quirc Library - https://github.com/dlbeer/quirc,
Jpeg Library - https://github.com/libjpeg-turbo/libjpeg-turbo, and 
Emscripten JpegLib - https://github.com/AntoineViau/webassembly-jpeg

### What does it do ? 
When index.html is launched in your browser, a Jpeg image is fetched() and processed as raw data,
 it will decode the qr code and print data payload to console.

### Install, build and run
Install Emscripten from https://kripken.github.io/emscripten-site/index.html  

Change to wasm directory : 

    cd wasm

Install dependencies : 

    yarn install 

Download the JPEG lib from the Independant Jpeg Group website to project directory :

    http://www.ijg.org/files/

Let's say you downloaded `jpegsrc.v9b.tar.gz`

Untar & unzip the jpeg lib : 

    mkdir libjpeg
    tar xvzf jpegsrc.v9b.tar.gz -C ./libjpeg --strip-components=1

The first step is to configure the Jpeg lib build environment. Usually, you would launch the `configure` script, but since our target is not the host architecture/operating system but WASM, we use `emconfigure` to wrap this process : 

    cd libjpeg
    emconfigure ./configure
    # You may have an error message about the dynamic linker. Just ignore it.

We can now build the library in WASM format. We use the `emmake` wrapper : 
    
    emmake make

We have now a WASM Jpeg library ready to be included into our project.  
Let's build our app :

    cd ..
    ./compile.sh

Launch a local server : 

    yarn start

And play with the app on `localhost:8080/index.html`


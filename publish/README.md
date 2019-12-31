# Quirc-JpegLib WASM
## Wasm Module (compiled using Emscripten) to decode qr code image based on quirc and jpeglib.

### Size of the WASM module
The size of the raw WASM module is 250 KB, the gzipped version is 74 KB. The Javascript glue code size is 24 KB, the gzipped version is 7.4 KB.

### How to install on your Node JS Application?
Install the package and peer dependencies using your favorite Node Js package manager.

    yarn add quirc-wasm-emcc memory-fs fs-extra
    
Add the webpack plugin to your webpack configuration

    const QuircWasmPclugin = require('quirc-wasm-emcc/dist/webpack-plugins');
    
    webpackConfig = {
      plugins: [
        // other plugins
        new QuircWasmPclugin(), // put this last
      ],
    }

Import the function.

    import {decodeQrCode} from "quirc-wasm-emcc";

Take the jpeg blob, read that blob as array buffer, and pass that array buffer to decodeQrCode function.

    canvas.toBlob(blob => {
        const reader = new FileReader();
        reader.addEventListener("loadend", () => {
            const arrayBuffer = reader.result;
            const result = decodeQrCode(arrayBuffer);
            console.log(result);
        });
        reader.readAsArrayBuffer(blob);
    }, 'image/jpeg');import {decodeQrCode} from "quirc-wasm-emcc";
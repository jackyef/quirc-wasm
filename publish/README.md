# Quirc-JpegLib WASM
## Wasm Module (compiled using Emscripten) to decode qr code image based on quirc and jpeglib.

### Size of the WASM module
The size of the raw WASM module is 250 KB, the gzipped version is 74 KB. The Javascript glue code size is 24 KB, the gzipped version is 7.4 KB.

### How to install on your Node JS Application?
Install the package and peer dependencies using your favorite Node Js package manager.

    yarn add quirc-wasm-emcc memory-fs fs-extra
    
Add the webpack plugin to your webpack configuration

    const QuircWasmPlugin = require('quirc-wasm-module/dist/webpack-plugins');
    
    webpackConfig = {
      plugins: [
        // other plugins
        new QuircWasmPlugin(), // put this last
      ],
    }

Import the function.

    import {decodeQrCode} from "quirc-wasm-module";

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


### Using inside a worker
There is a version that works in worker scope under `/worker`. You would need to provide `self.publicPath` inside the worker scope to work.

An example of using the worker module with `comlink` is as follows:
```js
// QuircWorker.js
self.publicPath = __PUBLIC_PATH__;

const { QRWorker } = require('quirc-wasm-module/worker');

const QRDecoder = new QRWorker();

export const isReady = QRDecoder.isReady;
export const terminate = QRDecoder.terminate;
export const decodeQrCode = QRDecoder.decodeQrCode;



// OurModule.js
const QuircWorker = await import('comlink-loader?multi&inline!../utils/QuircWrapper').then(m => m.default);

const worker = await new QuircWorker();

await worker.isReady();

// byte array representation of an image containing QR code
const imageByteArray = getImageFromSomewhere();

// the decoded QR code string
const string = await worker.decodeQrCode(imageByteArray);
```

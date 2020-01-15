const Module = require("./quirc.worker.js");

const isEmptyObject = obj => {
  return Object.entries(obj).length === 0 && typeof obj === "object";
};

// this file is meant to be used using comlink-loader
export class QRWorker {
  terminate() {
    self.close();
  }

  isReady() {
    return new Promise(resolve => {
      setInterval(() => {
        let asmModule = Module.asm;
        if (!isEmptyObject(asmModule)) resolve();
      }, 100);
    });
  }

  decodeQrCode(rawJpeg) {
    let rawJpegObj = {};

    /*
     * Create new unsigned int array of rawJpeg
     * */
    rawJpegObj.asTypedArray = new Uint8Array(rawJpeg);

    /*
     * Allocate memory to store the rawJpegAsTypedArray
     * */
    let srcBuf = Module._malloc(
      rawJpegObj.asTypedArray.length * rawJpegObj.asTypedArray.BYTES_PER_ELEMENT
    );

    /*
     * Write rawJpegAsTypedArray to allocated memory
     * */
    Module.writeArrayToMemory(rawJpegObj.asTypedArray, srcBuf);

    /*
     * Load image from allocated memory buffer
     * */
    let pImage = Module._setSrcImage(srcBuf, rawJpegObj.asTypedArray.length);

    /*
     * Get the image data such as width, height, and image
     * */
    let width = Module.getValue(pImage + 0, "i32");
    let height = Module.getValue(pImage + 4, "i32");
    let image = Module.getValue(pImage + 8, "i32");

    /*
     * Decode image data and return the result
     * */
    const QUIRC_MAX_PAYLOAD = 8896;
    let resultPtr = Module._decode_qr(image, width, height);
    const strArray = [];
    for (let pointer = 0; pointer < QUIRC_MAX_PAYLOAD; pointer++) {
      let char =
        Module.HEAP8[resultPtr / Uint8Array.BYTES_PER_ELEMENT + pointer];
      if (char !== 0) {
        strArray.push(char);
      } else {
        break;
      }
    }
    let resultStr = String.fromCharCode.apply(null, strArray);

    /*
     * Clean the buffer
     * */
    Module._free(srcBuf);
    Module._free(image);
    Module._free(pImage);
    delete rawJpegObj.asTypedArray;

    return resultStr;
  }
}

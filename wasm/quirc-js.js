Module = {
    onRuntimeInitialized: () => {
        setSrcImage = Module.cwrap('setSrcImage', 'number', ['number', 'number']);
        decode_qr = Module.cwrap('decode_qr', 'string', ['number', 'number', 'number']);
    }
};
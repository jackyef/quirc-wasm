const path = require('path');
const MemoryFs = require('memory-fs');
const realFs = require('fs-extra');

function Index() {
    const operationName = 'Copying the wasm file to output path...';

    this.apply = function (compiler) {
        compiler.plugin('done', function () {
            let fs = compiler.outputFileSystem;

            if (!(fs instanceof MemoryFs)) {
                // https://github.com/webpack/webpack/blob/master/lib/node/NodeOutputFileSystem.js
                // This means we are writing directly to disk.
                // Since NodeOutputFileSystem doesn't implement readdirSync()
                // let's just use fs-extra
                
                fs = require('fs-extra');
            }

            const webpackOutputPath = compiler.options.output.path;
            /*const craPath = path.join(compiler.options.output.path, './static/js');*/
            const sourcePath = path.resolve(__dirname, '../../dist');
            const fileList = realFs.readdirSync(sourcePath);
            const wasmFiles = fileList.filter(value => /\.wasm$/.test(value));

            const srcs = wasmFiles.map(wasmFile => path.join(sourcePath, wasmFile));
            const dests = wasmFiles.map(wasmFile => path.join(webpackOutputPath, 'quirc-wasm-emcc', wasmFile));

            if (srcs.length && dests.length) {
                try {
                    console.log(`[QuircWasmPlugin] Doing operation: "${operationName}"`);
                    srcs.forEach((src, i) => {
                        const dirname = path.dirname(dests[i]);
                        const data = realFs.readFileSync(src);
    
                        if (!fs.existsSync(dirname)) {
                            fs.mkdirSync(dirname);
                        }
    
                        fs.writeFileSync(dests[i], data);
                        /*
                            fs.writeFileSync(path.join(craPath, wasmFile), data);
                        */
                    })
                    console.log(`[QuircWasmPlugin] Successfully finished operation: "${operationName}"`);
                } catch (err) {
                    console.error(`[QuircWasmPlugin] An error occured while doing operation: "${operationName}"`, err);
                    throw new Error(`[QuircWasmPlugin] An error occured while doing operation: "${operationName}"`);
                }
            }
        });
    }
}

module.exports = Index;
const path = require('path');
const MemoryFs = require('memory-fs');
const realFs = require('fs-extra');

function Index() {
    const operationName = 'Copying the wasm file to output path...';

    this.apply = function(compiler) {
        compiler.plugin('done', function() {
            let fs = compiler.outputFileSystem;

            if (!(fs instanceof MemoryFs)) {
                // https://github.com/webpack/webpack/blob/master/lib/node/NodeOutputFileSystem.js
                // This means we are writing directly to disk.
                // Since NodeOutputFileSystem doesn't implement readdirSync()
                // let's just use fs-extra

                fs = require('fs-extra');
            }

            const webpackOutputPath = compiler.options.output.path;
            const sourcePath = path.resolve(__dirname, '../../dist');
            const fileList = realFs.readdirSync(sourcePath);
            const wasmFile = fileList.find(value => /\.wasm$/.test(value));

            const src = path.join(sourcePath, wasmFile);
            const dest =  path.join(webpackOutputPath, wasmFile);

            if (src && dest) {
                try {
                    console.log(`[QuircWasmPlugin] Doing operation: "${operationName}"`);

                    const dirname = path.dirname(dest);
                    const data = realFs.readFileSync(src);

                    if (!fs.existsSync(dirname)){
                        fs.mkdirSync(dirname);
                    }

                    fs.writeFileSync(dest, data);

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

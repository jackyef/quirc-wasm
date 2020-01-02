const fs = require('fs');
const childProcess = require('child_process');

const md5Sum = childProcess.execSync('openssl dgst -md5 ./build/quirc.worker.wasm').toString('utf-8').trim().split('= ')[1];

fs.copyFileSync('./build/quirc.worker.wasm', `../publish/dist/${md5Sum}.wasm`);

let workerContent = fs.readFileSync('./build/quirc.worker.js', 'utf-8');

workerContent = workerContent.replace('\"quirc.worker.wasm\"', `self.publicPath+\"quirc-wasm-emcc/${md5Sum}.wasm\"`);

fs.writeFileSync('../publish/worker/quirc.worker.js', workerContent);

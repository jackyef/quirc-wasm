import QRWorker from 'comlink-loader?inline!./wrapper';

import '../vendor/fpsmeter';

// setup an FPS meter
const fpsMeter = new FPSMeter();
fpsMeter.tickStart();

const nextTick = () => {
  fpsMeter.tick();
  requestAnimationFrame(nextTick);
};

requestAnimationFrame(nextTick);

(async () => {
  const worker = await new QRWorker();

  const $output = document.getElementById("output");
  const video = document.getElementById("video");
  const toggle = document.getElementById("toggle");
  const scale = 0.25;
  let shouldRedirect = true;
  const constraints = {
    video: {
      facingMode: "environment"
    }
  };

  const decodeQr = async (byteArray) => {
    const start = new Date().getTime();

    const output = await worker.decodeQrCode(byteArray);
    const usedOutput = output.includes("]") ? "N/A" : output;
    const timeTaken = new Date().getTime() - start;

    requestAnimationFrame(() => {
      $output.innerHTML = usedOutput;
      document.getElementById("time").innerHTML = timeTaken + " ms";
    });
    console.log({ output: usedOutput, timeTaken });

    if (shouldRedirect) {
      if (/^https?:/.test(usedOutput)) {
        toggle.dispatchEvent(new Event("click"));
        window.open(usedOutput);
      }
    }

    window.decoded = output;
  };

  const captureImage = () => {
    let canvas = document.createElement("canvas");
    canvas.width = video.videoWidth * scale;
    canvas.height = video.videoHeight * scale;
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);

    window.myCanvas = canvas;

    canvas.toBlob(blob => {
      const reader = new FileReader();

      reader.addEventListener("loadend", () => {
        const arrayBuffer = reader.result;
        window.ab = arrayBuffer;

        decodeQr(new Uint8Array(arrayBuffer));
      });
      reader.readAsArrayBuffer(blob);
    }, "image/jpeg");
  };

  const initialize = function() {
    navigator.mediaDevices.getUserMedia(constraints).then(stream => {
      video.srcObject = stream;
    });

    toggle.addEventListener("click", () => {
      shouldRedirect = !shouldRedirect;
      if (shouldRedirect) {
        toggle.style = "";
        toggle.innerText = "Redirect: true";
      } else {
        toggle.style = "background: red";
        toggle.innerText = "Redirect: false";
      }
    });

    setInterval(captureImage, 300);
  };

  initialize();
})();
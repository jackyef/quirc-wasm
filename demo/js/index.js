import jsqr from "jsqr";
import '../vendor/fpsmeter';

// setup an FPS meter
const fpsMeter = new FPSMeter();
fpsMeter.tickStart();

const nextTick = () => {
  fpsMeter.tick();
  requestAnimationFrame(nextTick);
};

requestAnimationFrame(nextTick);

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

const decodeQr = ({ data: byteArray, width, height }) => {
  const start = new Date().getTime();

  console.log({ byteArray, width, height });
  const output = jsqr(byteArray, width, height);

  console.log({ output });
  const usedOutput = output ? output.data : 'N/A';
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

  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  window.myCanvas = canvas;

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  decodeQr(imageData);
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

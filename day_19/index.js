const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      console.log(localMediaStream);
      video.src = window.URL.createObjectURL(localMediaStream);
      video.play();
    })
    .catch(err => {
      console.error(`OH NO!!!`, err);
    });
}

/**
 * 將 webcam 拍攝影像繪製到 canvas 上
 */
function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
  }, 16);
}

/**
 * 攝像頭截圖
 */
function takePhoto() {
  // played the sound
  snap.currentTime = 0;
  snap.play();
}

getVideo();

video.addEventListener("canplay", paintToCanvas);

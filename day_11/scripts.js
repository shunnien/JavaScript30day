/* Get Our Elements */
// player container div
const player = document.querySelector(".player");
// video
const video = player.querySelector(".player__video.viewer");
// progress container div
const progress = player.querySelector(".progress");
// now progress bar
const progressBar = player.querySelector(".progress__filled");
// play button
const toggle = player.querySelector(".toggle");
// go back 25s or turn back 10s
const skipButtons = player.querySelectorAll("button[data-skip]");
// change volume or change play rate
const ranges = player.querySelectorAll(".player__slider");

/* Build out functions */
/**
 * 啟動按鈕功能
 * 觸發播放或是暫停
 */
function togglePlay() {
  const method = video.paused ? "play" : "pause";
  // equal video.method()
  video[method]();
}

/**
 * 變換按鈕的顯示圖案
 *
 */
function updateButton() {
  toggle.textContent = this.paused ? "►" : "❚❚";
}

/**
 * 添加目前播放的 progress bar
 * 就是播放進度條
 */
function handleProgress() {
  const percent = video.currentTime / video.duration * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

/**
 * 跳轉功能
 */
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

/* Hook up the event listners */
toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

// go back 25s or turn back 10s event handler
skipButtons.forEach(button => button.addEventListener("click", skip));

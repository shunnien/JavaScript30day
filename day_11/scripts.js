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

/**
 * volume and play rate event
 * 利用 html 的 name 來輸入其屬性與值
 */
function handleRangeUpdate() {
  //console.log(this);
  video[this.name] = this.value;
}

/**
 * 跳轉至目前指定時間
 * @param {*} e 滑鼠事件
 */
function scrub(e) {
  // 滑鼠在進度條的位置 / 進度條容器的長度 = 進度條的比例
  // 進度條的比例 * 影片時間長度
  const scrubTime = e.offsetX / progress.offsetWidth * video.duration;
  video.currentTime = scrubTime;
}

/* Hook up the event listners */
toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

// go back 25s or turn back 10s event handler
skipButtons.forEach(button => button.addEventListener("click", skip));

// change volume or change play rate
ranges.forEach(range => {
  range.addEventListener("change", handleRangeUpdate);
  // 滑鼠拉著移動的時候
  range.addEventListener("mousemove", handleRangeUpdate);
  range.addEventListener("click", handleRangeUpdate);
});
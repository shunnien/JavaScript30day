// 取得 speed div
const speed = document.querySelector(".speed");
// 取得 speed bar div
const bar = speed.querySelector(".speed-bar");
// 取得播放器 DOM
const video = document.querySelector("video");
/**
 * 速度條上滑鼠移動
 * @param {*} e window.event
 */
function handleMove(e) {
  // 取得滑鼠在速度條上的位置
  const mousePoint = e.pageY - this.offsetTop;
  // 計算移動的速度條百分比
  const mousePercent = mousePoint / this.offsetHeight;
  // 速度條的最小倍速與最大倍速
  const min = 0.4, max = 4;
  // 播放速度計算
  const playSpeed = mousePercent * (max - min) + min;
  // 速度條的樣式
  bar.style.height = `${Math.round(mousePercent * 100)}%`;
  // 速度條的內容文字更新
  bar.textContent = `${playSpeed.toFixed(2)}X`;
  // 調整播放速度
  video.playbackRate = playSpeed;
}

speed.addEventListener("mousemove", handleMove);
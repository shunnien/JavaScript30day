// 取得所有 buttons
const buttons = document.querySelectorAll("[data-time]");

// 倒數計時的顯示元素
const timerDisplay = document.querySelector(".display__time-left");
// 結束時間的顯示元素
const endTime = document.querySelector(".display__end-time");
// 建立計時器
let countdown;

/**
 * 顯示倒數計時
 * @param {*} seconds 秒數
 */
function displayTimeLeft(seconds) {
  // 計算幾分鐘
  const minutes = Math.floor(seconds / 60);
  // 計算剩餘秒數
  const remainderSeconds = seconds % 60;
  // 組合顯示文字(剩餘時間)
  const display = `${paddingLeft(minutes.toString(), 2)}:${paddingLeft(
    remainderSeconds.toString(),
    2
  )}`;
  // 變更網頁標題
  document.title = display;
  // 顯示倒數計時
  timerDisplay.textContent = display;
}

/**
 * 顯示結束時刻
 * @param {*} timestamp
 */
function displayEndTime(timestamp) {
  // 轉換為時間
  const end = new Date(timestamp);
  const hour = end.getHours().toString();
  const minute = end.getMinutes().toString();
  const second = end.getSeconds().toString();
  // 顯示結束時間
  endTime.textContent = `Be Back At ${paddingLeft(hour, 2)}:${paddingLeft(
    minute,
    2
  )}:${paddingLeft(second, 2)}`;
}

/**
 * 按鈕事件，啟動計時器
 */
function startTimer() {
  // dataset 轉換數值
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

/**
 * 倒數計時器
 * @param {*} seconds
 */
function timer(seconds) {
  // 先清除其他計時器，避免相互影響
  clearInterval(countdown);
  // 計算倒數計時完成的時刻(使用毫秒)
  const then = Date.now() + seconds * 1000;
  // 顯示倒數計時
  displayTimeLeft(seconds);
  // 顯示完成時刻
  displayEndTime(then);

  countdown = setInterval(() => {
    // 每秒鐘執行，所以直接每次減 1 就好
    seconds--;
    // 小於 0 時，清除計時器
    if (seconds < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(seconds);
  }, 1000);
}

/**
 * 文字在指定長度中左邊補 0
 * @param {*} str 輸入文字
 * @param {*} lenght 補 0 的長度
 */
function paddingLeft(str, lenght) {
  if (str.length >= lenght) return str;
  else return paddingLeft("0" + str, lenght);
}
/**
 * 文字在指定長度中右邊邊補 0
 * @param {*} str 
 * @param {*} lenght 
 */
function paddingRight(str, lenght) {
  if (str.length >= lenght) return str;
  else return paddingRight(str + "0", lenght);
}

buttons.forEach(button => button.addEventListener("click", startTimer));

document.customForm.addEventListener("submit", function(e) {
  // 取消事件
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  // 表單清單
  this.reset();
});

// 取得所有 buttons
const buttons = document.querySelectorAll("[data-time]");

// 倒數計時的顯示元素
const timerDisplay = document.querySelector(".display__time-left");
// 結束時間的顯示元素
const endTime = document.querySelector(".display__end-time");

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
  const display = `${minutes}:${remainderSeconds}`;
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
    // 顯示結束時間
    endTime.textContent = `Be Back At ${end.getHours()}:${end.getMinutes()}:${end.getSeconds()}`;
}

/**
 * 
 * @param {any} params 
 */
function startTimer(params) {
    
}

buttons.forEach(button => button.addEventListener('click', startTimer));
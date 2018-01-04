const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");

// 讓 items 讀取 localStorage 的資料，沒有的話給予空陣列
const items = JSON.parse(localStorage.getItem("items")) || [];

/**
 * 事件停止冒泡
 * @param {*} event 
 */
function stopPopup(event) {
  if (!event) event = window.event;
  event.cancelBubble = true;
  event.returnValue = false;
  if (event.stopPropagation) {
    event.preventDefault();
    event.stopPropagation();
  }
  return false;
}

/**
 * 將小吃資料新增到 items 中
 * @param {*} e 
 */
function addItem(e) {
  // 事件停止冒泡  
  stopPopup(e);

  // 取得輸入值
  const text = (this.querySelector('[name=item]')).value;

}

addItems.addEventListener('submit', addItem);
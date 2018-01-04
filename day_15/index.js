const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");

// 讓 items 讀取 localStorage 的資料，沒有的話給予空陣列
const items = JSON.parse(localStorage.getItem("items")) || [];

/**
 * 將小吃資料新增到 items 中
 * @param {*} e 
 */
function addItem(event) {
  // 事件停止冒泡  
  e.preventDefault();
}

addItems.addEventListener('submit', addItem);
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

  const item = {
    text,
    done: false
  };
  items.push(item);
  localStorage.setItem('items', JSON.stringify(items));
}

/**
 * 將 localStorage 的資料項目呈現到 HTML 上
 * @param {*} plates     array data
 * @param {*} platesList html container 
 */
function populateList(plates = [],platesList){
  platesList.innerHTML = '';
  
  plates.forEach((plate,i) =>{
    const li = document.createElement('li');
    const input = document.createElement('input');
    const label = document.createElement('label');

    input.setAttribute("type", "checkbox");
    input.setAttribute("data-index", `${i}`);
    input.setAttribute("id", `item${i}`);
    if(plate.done) input.setAttribute("checked");
    li.appendChild(input);
    label.setAttribute("for", `item${i}`);
    label.appendChild(document.createTextNode(plate.text));
    li.appendChild(label);
    platesList.appendChild(li);
  });
}

addItems.addEventListener('submit', addItem);
populateList(items,itemsList);
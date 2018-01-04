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
  const text = this.querySelector("[name=item]").value;

  const item = {
    text,
    done: false
  };
  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));
  populateItem(item, items.findIndex(element => element === item));

  // 重置 form
  this.reset();
}

/**
 * 將 localStorage 的資料項目呈現到 HTML 上
 * @param {*} plates     array data
 * @param {*} platesList html container
 */
function populateList(plates = [], platesList = itemsList) {
  platesList.innerHTML = "";

  plates.forEach((plate, i) => populateItem(plate, i, platesList));

  // 範例的解法
  // platesList.innerHTML = plates.map((plate, i) => {
  //   return `
  //     <li>
  //       <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
  //       <label for="item${i}">${plate.text}</label>
  //     </li>
  //   `;
  // }).join('');
}

/**
 * 將 localStorage 的資料項目呈現到 HTML 上 (單筆)
 * @param {*} plate 要顯示的項目
 * @param {*} i index(索引)
 */
function populateItem(plate, i, container = itemsList) {
  const li = document.createElement("li");
  const input = document.createElement("input");
  const label = document.createElement("label");
  input.setAttribute("type", "checkbox");
  input.setAttribute("data-index", `${i}`);
  input.setAttribute("id", `item${i}`);
  if (plate.done) input.setAttribute("checked",'checked');
  li.appendChild(input);
  label.setAttribute("for", `item${i}`);
  label.appendChild(document.createTextNode(plate.text));
  li.appendChild(label);
  container.appendChild(li);
}

/**
 * Check 選擇
 * @param {*} e 
 */
function toggleDone(e) {
  // skip this unless it's an input
  if (!e.target.matches('input')) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
}

addItems.addEventListener("submit", addItem);
populateList(items);
itemsList.addEventListener('click', toggleDone);

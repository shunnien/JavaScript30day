const divs = document.querySelectorAll("div");
//const button = document.querySelector('button');
const button = document.querySelector('button[name="once"]');
const capture = document.querySelector('#capture');
const bubble = document.querySelector('#bubble');

/**
 * 顯示目前觸發的 DOM 
 * 
 * @param {any} e 
 */
function logText(e) {
  console.log(this.classList.value);
  const p = document.createElement("p");
  p.textContent = this.classList.value;
  document.body.appendChild(p);
  // 停止冒泡
  //e.stopPropagation(); // stop bubbling!
  //console.log(this); // 顯示 DOM 
}

// body 的順序在最外層
//document.body.addEventListener('click',logText);


divs.forEach(div => div.addEventListener("click", logText,{
    capture: false,
    once: true
}));

// 捕獲
capture.addEventListener('click',() => {
    divs.forEach(div => div.addEventListener("click", logText,{
        capture: true
    }));
});

// 冒泡
capture.addEventListener('click',() => {
    divs.forEach(div => div.addEventListener("click", logText));
});

// 使用 button 觀察 console 次數
button.addEventListener('click', () => {
    console.log('Click!!!');
  }, {
    once: true
});
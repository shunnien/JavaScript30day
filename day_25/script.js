const divs = document.querySelectorAll("div");

/**
 * 顯示目前觸發的 DOM 
 * 
 * @param {any} e 
 */
function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation(); // stop bubbling!
  //console.log(this); // 顯示 DOM 
}

// body 的順序在最外層
//document.body.addEventListener('click',logText);

// 變更為捕獲
divs.forEach(div => div.addEventListener("click", logText,{
    capture: true
}));
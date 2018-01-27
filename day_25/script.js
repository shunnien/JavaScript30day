const divs = document.querySelectorAll("div");

/**
 * 顯示目前觸發的 DOM 
 * 
 * @param {any} e 
 */
function logText(e) {
  console.log(this.classList.value);
  //console.log(this); // 顯示 DOM 
}

divs.forEach(div => div.addEventListener("click", logText));
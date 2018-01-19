const nav = document.querySelector("#main");

// 取得選單 top
let topOfNav = nav.offsetTop;

// 修正選單
function fixNav() {
}

// 建立卷軸移動事件
window.addEventListener("scroll", fixNav);
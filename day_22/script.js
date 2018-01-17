// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀
// 取得所有超連結
const triggers = document.querySelectorAll("a");

//建立 highlight 元素
const highlight = document.createElement("span");
// 設定 CSS
highlight.classList.add("highlight");
// 加入到 body
document.body.appendChild(highlight);

// create function highlight link
function highlightLink(params) {

}

// 對所有超連結綁定事件
triggers.forEach(a => a.addEventListener("mouseenter", highlightLink));

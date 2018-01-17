// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀 💛 

// 取得所有超連結
const triggers = document.querySelectorAll("a");

//建立 highlight 元素
const highlight = document.createElement("span");
// 設定 CSS
highlight.classList.add("highlight");
// 加入到 body
document.body.appendChild(highlight);

// create function highlight link 
function highlightLink() {
    // 取得元素的大小與位置
    const domRect = this.getBoundingClientRect();
    console.dir(domRect);

    // 設定 highlight 寬度等於目前元素寬度
    highlight.style.width = domRect.width;
}

// 對所有超連結綁定事件
triggers.forEach(a => a.addEventListener("mouseenter", highlightLink));

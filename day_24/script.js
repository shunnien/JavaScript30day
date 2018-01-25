const nav = document.querySelector("#main");

// 取得選單 top
 topOfNav = nav.offsetTop;

// 修正選單
function fixNav() {
  if (window.scrollY >= topOfNav) {

    // 增加內文 padding 避免內文因為凍結標題列而被遮蔽
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add("fixed-nav");
    
  } else {
    document.body.classList.remove("fixed-nav");
    document.body.style.paddingTop = 0;
  }
}

// 建立卷軸移動事件
window.addEventListener("scroll", fixNav);

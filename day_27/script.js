// 取得最外層的 div items
const slider = document.querySelector(".items");


/**
 * 滑鼠按鍵按下
 */
slider.addEventListener("mousedown", () => {
  slider.classList.add("active");
});

/**
 * 滑鼠按鍵鬆開
 */
slider.addEventListener("mouseup", () => {
  slider.classList.remove("active");
});

/**
 * 滑鼠離開元素
 */
slider.addEventListener("mouseleave", () => {
    slider.classList.remove("active");
  });
// hero 等同滿版畫面
const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
// walk 是固定移動距離
const walk = 100;
/**
 * 滑鼠移動變動的陰影
 * @param {*} e
 */
function shadow(e) {
  //console.count(e);
  //console.log(e);
  // 取得 hero 滿版畫面的長與寬
  const { offsetWidth: width, offsetHeight: height } = hero;
  //console.log([width, height]);

  // equal let mouseX = e.offsetX, mouseY = e.offsetY;
  let { offsetX: mouseX, offsetY: mouseY } = e;
  //console.log([mouseX, mouseY]);

  // 當滑鼠移動到文字上的時候
  // 利用目前滑鼠在文字上的位置 X 加上該文字容器的 offsetLeft
  if (e.target !== this) {
    mouseX += e.target.offsetLeft;
    mouseY += e.target.offsetTop;
  }

  // 移動的位置 
  // 添加 rount 來四捨五入
  const xWalk = Math.round(mouseX / width * walk);
  const yWalk = Math.round(mouseY / height * walk);
  text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(0, 0, 0, 1)`;
}

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

hero.addEventListener("mousemove", shadow);

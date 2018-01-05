const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
/**
 * 滑鼠移動變動的陰影
 * @param {*} e
 */
function shadow(e) {
  console.count(e);
  // equal let mouseX = e.offsetX, mouseY = e.offsetY;
  let { offsetX: mouseX, offsetY: mouseY } = e;
  //console.log([mouseX, mouseY]);
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

const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
/**
 * 滑鼠移動變動的陰影
 * @param {*} e
 */
function shadow(e) {
  //console.log(e);
  // equal let mouseX = e.offsetX, mouseY = e.offsetY;
  let { offsetX: mouseX, offsetY: mouseY } = e;
  //console.log([mouseX, mouseY]);
}

hero.addEventListener("mousemove", shadow);

const pressed = [];
const secretCode = "wesbos";

window.addEventListener("keyup", e => {
  console.log(e.key);
  pressed.push(e.key);
  if (pressed.length > secretCode.length) {
    pressed.shift(); // 移除首位元素
  }
  console.log(pressed);
});

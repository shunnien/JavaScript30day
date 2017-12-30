const pressed = [];
const secretCode = "wesbos";

window.addEventListener("keyup", e => {
  console.log(e.key);
  pressed.push(e.key);
  if (pressed.length > secretCode.length) {
    pressed.shift(); // 移除首位元素

    if (pressed.join('').includes(secretCode)) {
        console.log('DING DING!');
        cornify_add();
      }
  }
  console.log(pressed);
});

const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// 畫筆的顏色
ctx.strokeStyle = "#BADA55";
// 線條連結樣式
ctx.lineJoin = "round";
ctx.lineCap = "round";
// 線條的寬度
ctx.lineWidth = 100;

// ctx.beginPath();
// // start from
// ctx.moveTo(100, 100);
// // go to
// ctx.lineTo(200, 200);
// ctx.stroke();

//
let isDrawing = false;
let startPointX = 0;
let startPointY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  //console.log(e);
  if (isDrawing) {
    // 設定畫筆樣式
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    ctx.beginPath();
    // start from
    ctx.moveTo(startPointX, startPointY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    startPointX = e.offsetX;
    startPointY = e.offsetY;
    //console.log([startPointX, startPointY]);
    hue++;
    if (hue >= 360) {
      hue = 0;
    }
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
      direction = !direction;
    }

    if (direction) {
      ctx.lineWidth++;
    } else {
      ctx.lineWidth--;
    }
  }
}

canvas.addEventListener("mousedown", e => {
  isDrawing = true;
  startPointX = e.offsetX;
  startPointY = e.offsetY;
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));

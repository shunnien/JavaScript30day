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

function draw(e) {
  //console.log(e);
  if (isDrawing) {
    ctx.beginPath();
    // start from
    ctx.moveTo(startPointX, startPointY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [startPointX, startPointY] = [e.offsetX, e.offsetY];
    //console.log([startPointX, startPointY]);
  }
}

canvas.addEventListener("mousedown", e => {
  isDrawing = true;
  startPointX = e.offsetX;
  startPointY = e.offsetY;
  console.log([startPointX, startPointY]);
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));

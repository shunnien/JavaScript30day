// 取得方向 DOM
const arrow = document.querySelector(".arrow");
// 取得速度 DOM
const speed = document.querySelector(".speed-value");

// navigator.geolocation.watchPosition(
//   data => {
//     //console.log(data);
//     if(data.coords.speed) speed.textContent = data.coords.speed;
//     if(data.coords.heading) arrow.style.transform = `rotate(${data.coords.heading}deg)`;
//   },
//   err => {
//     console.error(err);
//   }
// );

function reLocation() {
  speed.textContent = Math.floor(Math.random() * 100);
  arrow.style.transform = `rotate(${Math.floor(Math.random() * 361)}deg)`;
}
setInterval(reLocation,1000);
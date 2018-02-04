const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");

/**
 * 地鼠出現的時間
 * @param {*} min
 * @param {*} max
 */
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

/**
 * 隨機出現地鼠的地洞
 * @param {*} holes 
 */
function randomHole(holes) {
  // holes 是陣列，由 0 開始，所以利用 random 直接設定 random 範圍
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
}

const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
// 紀錄上次隨機的地洞
let lastHole;
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
  // 隨機有可能重複的地洞，所以建立變數排除重複
  if (hole === lastHole) {
    console.log("Ah nah thats the same one bud");
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

/**
 * 地鼠出現
 */
function peep() {
  // 地鼠出現的隨機時間
  const time = randomTime(200, 1000);
  // 地鼠出現的隨機地洞
  const hole = randomHole(holes);
}
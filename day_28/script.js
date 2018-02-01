// 取得 speed div
const speed = document.querySelector(".speed");
// 取得 speed bar div
const bar = speed.querySelector(".speed-bar");

/**
 * 速度條上滑鼠移動
 * @param {*} e window.event
 */
function handleMove(e) {
    // 取得滑鼠在速度條上的位置
    const mousePoint = e.pageY - this.offsetTop;
    // 計算移動的速度條百分比
    const mousePercent = mousePoint / this.offsetHeight;
    

}

speed.addEventListener('mousemove', handleMove);
const triggers = document.querySelectorAll('.cool > li');
// arrow container
const background = document.querySelector('.dropdownBackground');

/**
 * 移動到元素上的觸發事件
 */
function handleEnter() {
    this.classList.add('trigger-enter','trigger-enter-active');
    background.classList.add('open');

    // 取得下拉選單內容 DOM
    const dropdown = this.querySelector('.dropdown');
    // 取得位置資料
    const dropCoords = dropdown.getBoundingClientRect();

    // 設定指向框大小為下拉選單大小
    background.style.width = `${dropCoords.width}px`;
    background.style.height = `${dropCoords.height}px`;
    // background.style.setProperty('width', `${dropCoords.width}px`);
    // background.style.setProperty('height', `${dropCoords.height}px`);
}

/**
 * 離開元素的觸發事件
 */
function handleLeave() {
    this.classList.remove('trigger-enter','trigger-enter-active');
    background.classList.remove('open');
}

// 移動到元素上的觸發事件
triggers.forEach(trigger => trigger.addEventListener('mouseenter',handleEnter));
// 離開元素的觸發事件
triggers.forEach(trigger => trigger.addEventListener('mouseleave',handleLeave));
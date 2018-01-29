const triggers = document.querySelectorAll('.cool > li');

/**
 * 移動到元素上的觸發事件
 */
function handleEnter() {
    
}

/**
 * 離開元素的觸發事件
 */
function handleLeave() {
    
}

// 移動到元素上的觸發事件
triggers.forEach(trigger => trigger.addEventListener('mouseenter',handleEnter));
// 離開元素的觸發事件
triggers.forEach(trigger => trigger.addEventListener('mouseleave',handleLeave));
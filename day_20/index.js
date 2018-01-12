// 將全域環境中的 SpeechRecognition 指定
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// 建立一個變數recognition來放為語音識別功能
const recognition = new SpeechRecognition();

// 讓語音識別回傳識別後的資訊（預設為false)
recognition.interimResults = true;

// 建立元素 p ，等下識別後的文字將塞入
let p = document.createElement("p");

// 取得 .words 
const words = document.querySelector('.words');
// 將 p 塞入 .words DOM
words.appendChild(p);



// 開始識別
recognition.start();
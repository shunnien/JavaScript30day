// 將全域環境中的 SpeechRecognition 指定
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// 建立一個變數recognition來放為語音識別功能
const recognition = new SpeechRecognition();

// 讓語音識別回傳識別後的資訊（預設為false)
recognition.interimResults = true;

// 建立元素 p ，等下識別後的文字將塞入
let p = document.createElement("p");

// 取得 .words
const words = document.querySelector(".words");
// 將 p 塞入 .words DOM
words.appendChild(p);

// 開始識別
recognition.start();

// 當識別結束，重複開始識別
recognition.addEventListener("end", recognition.start);

// 識別產生結果
recognition.addEventListener("result", e => {
  // 識別結果為 SpeechRecognitionResultList 取得 transcript 屬性，就是辨識文字
  // console.log(e.results);
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join("");

    // 輸出辨識文字內容
    // p.textContent = transcript;

    // 特殊內容使用符號文字取代
    const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
    p.textContent = poopScript;

  // 確認辨識結束，就產生新的 p 元素
  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }
});

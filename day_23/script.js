const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");

// 語音內容為畫面文字
msg.text = document.querySelector('[name="text"]').value;

// 填充下拉選單
function populateVoices() {
  // 取得目前支援的所有語音
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .filter(voice => voice.lang.includes("en"))
    .map(
      voice =>
        `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
    )
    .join("");
}

speechSynthesis.addEventListener("voiceschanged", populateVoices);

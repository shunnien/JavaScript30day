const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

// 取得 json 資料
fetch(endpoint)
  .then(blob => blob.json()) // response , blob.json() 為 Promise
  .then(data => cities.push(...data));

// 將數字每三碼使用逗號區分
function numberWithCommas(str) {
  return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 關鍵字框查詢建議訊息 function
function displayMatches() {
  console.log("hello");
  // 先將 cities 全部塞到 suggestions
  const html = cities
    .map(obj => {
      return `<li><span class="name">${obj.city}, ${
        obj.state
      }</span><span class="population">${obj.population}</span></li>`;
    })
    .join("");
  const suggestions = document.querySelector(".suggestions");
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");

// 關鍵字框綁定 change 與 keyup
searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);

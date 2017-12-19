const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

// 取得 json 資料
fetch(endpoint)
  .then(blob => blob.json()) // response , blob.json() 為 Promise
  .then(data => cities.push(...data));
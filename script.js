// get post data
const postDatas = [];
// blog url
const blogUrl = "https://shunnien.github.io/";
// github url
const githubUrl = "https://github.com/shunnien/JavaScript30day/tree/master/";

const couseList = document.querySelector(".courseList");

fetch("postData.json")
  .then(blob => blob.json())
  .then(data => {
    postDatas.push(...data);
    createView();
  });

/** 畫面建立 */
function createView() {
  let view = [];
  postDatas.forEach(data => {
    view.push(`<li>
                <div class="course">
                  <h2 class="course__title">第 ${data.no} 天 - ${
      data.title
    }</h2>
                  <div class="course__desc">${data.desc}</div>
                  <a class="course__btn" href="${blogUrl}JavaScript30day/${data.github}" target="_blank" >Demo</a>
                  <a class="course__btn" href="${blogUrl +
                    data.blog}" target="_blank" >筆記</a>
                  <a class="course__btn" href="${githubUrl +
                    data.github}" target="_blank">Source Code</a>
                </div>
              </li>`);
  });
  document.querySelector(".courseList").innerHTML = view.join("");
}

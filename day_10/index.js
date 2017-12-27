const checkboxes = Array.from(
  document.querySelectorAll('.inbox input[type="checkbox"]')
);

let checkEle = null;
function handleCheck(e) {
  // e is MouseEvent
  //console.log(e);
  const self = this;
  if (e.shiftKey && e.target.checked) {
    //console.info("this is shift & checked");
    let isBetween = false;
    checkboxes.map(ele => {
      if ((self === ele || checkEle === ele) && checkEle && checkEle !== self) {
        //   console.info("slef equal ele");
        //   console.dir(ele);
        isBetween = !isBetween;
      }
      if (isBetween) ele.checked = true;
    });
  }
  checkEle = self.checked ? self : null;
}

/**
 * 延伸部分
 *
 * @param {any} e
 */
function extenCheck(e) {
  const self = this;
  if (!e.target.checked) return;

  // 目前的選取元素
  const nowSelIndex = checkboxes.findIndex(ele => ele === self);

  if (!e.shiftKey) return;

  const nearMinCheckboxIndex = checkboxes.findIndex(
    (ele, index) =>
      index !== nowSelIndex && index < nowSelIndex && ele.checked === true
  );
  const nearMaxCheckboxIndex = checkboxes.findIndex(
    (ele, index) =>
      index !== nowSelIndex && index > nowSelIndex && ele.checked === true
  );

  if (nearMaxCheckboxIndex !== -1) {
    setCheckbox(nowSelIndex, nearMaxCheckboxIndex);
  }

  if (nearMinCheckboxIndex !== -1) {
    setCheckbox(nearMinCheckboxIndex, nowSelIndex);
  }
}

/**
 * 設定 checkboxes 為選取
 *
 * @param {any} initIndex 索引初始
 * @param {any} aryLength 迴圈長度
 */
function setCheckbox(initIndex, aryLength) {
  for (let index = initIndex; index < aryLength; index++) {
    checkboxes[index].checked = true;
  }
}

checkboxes.map(ele => ele.addEventListener("click", extenCheck));

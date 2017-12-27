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

checkboxes.map(ele => ele.addEventListener("click", handleCheck));

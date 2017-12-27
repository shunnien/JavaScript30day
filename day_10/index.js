const checkboxes = Array.from(
  document.querySelectorAll('.inbox input[type="checkbox"]')
);

function handleCheck(e) {
  // e is MouseEvent
  //console.log(e);
  const self = this;
  if (e.shiftKey && e.target.checked) {
    console.info("this is shift & checked");
    checkboxes.map(ele => {
      if (self === ele) {
        //   console.info("slef equal ele");
        //   console.dir(ele);
      }
    });
  }
}

checkboxes.map(ele => ele.addEventListener("click", handleCheck));

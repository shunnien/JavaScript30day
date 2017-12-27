const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

function handleCheck(e) {
    // e is MouseEvent
    //console.log(e);
    if(e.shiftKey && e.target.checked){
        console.info("this is shift & checked");
    }
}

Array.from(checkboxes).map(ele => ele.addEventListener("click", handleCheck));
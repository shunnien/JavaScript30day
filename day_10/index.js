const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

function handleCheck(e) {
    // e is MouseEvent
    console.log(e);
}

Array.from(checkboxes).map(ele => ele.addEventListener("click", handleCheck));
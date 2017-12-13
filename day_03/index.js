const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  console.log(this);
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));

// Selecting elements from HTML
const btnGenerate = document.getElementById("btn-generate");
const inputTextAmount = document.getElementById("text-amount");
const inputRadios = document.querySelectorAll('input[name="output-type"]');

// Function when button clicked
function handleClick() {
  let selectedValue;
  for (const radio of inputRadios) {
    if (radio.checked) {
      selectedValue = radio.value;
      break;
    }
  }
  alert("You selected: " + inputTextAmount.value + " " + selectedValue);
}

// Set up event listener
btnGenerate.addEventListener("click", handleClick);

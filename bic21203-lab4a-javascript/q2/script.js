// Q2 - Smart Number Validator

const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

function checkInput() {
  const rawValue = userInput.value.trim(); // trim handles whitespace-only input

  // Empty or whitespace-only -> invalid
  if (rawValue === "") {
    result.textContent = "Please enter a valid number!";
    return;
  }

  const number = Number(rawValue); // "abc" -> NaN, "10.5" -> 10.5

  // Non-numeric (NaN) or Infinity -> invalid
  if (!Number.isFinite(number)) {
    result.textContent = "Please enter a valid number!";
    return;
  }

  if (number < 10) {
    result.textContent = "The number is lower than 10";
  } else if (number > 10) {
    result.textContent = "The number is higher than 10";
  } else {
    result.textContent = "The number is equal to 10";
  }
}

checkBtn.addEventListener("click", checkInput);

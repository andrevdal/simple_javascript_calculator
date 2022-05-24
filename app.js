let tdEl = document.querySelectorAll("td");
let resultEl = document.querySelector(".result");
let methodUsed = false;
let firstNumber = "";
let secondNumber = "";
let calcMethod = "";

function addNum(digit) {
  if (methodUsed === false) {
    firstNumber = firstNumber + digit;
    displayNumbers(firstNumber);
  } else {
    secondNumber = secondNumber + digit;
    displayNumbers(secondNumber);
  }
}
function calculate() {
  displayNumbers(eval(firstNumber + calcMethod + secondNumber));
  methodUsed = false;
  firstNumber = "";
  secondNumber = "";
  calcMethod = "";
}
function displayNumbers(numbersDisplayed) {
  resultEl.innerHTML = numbersDisplayed;
}
tdEl.forEach((el) => {
el.addEventListener("click", (e) => {
    let char = e.target.innerText;
    if (isNaN(char)) {
      if (char == "=") {
        calculate();
      } else {
        if (char == "C") {
          methodUsed = false;
          firstNumber = "";
          secondNumber = "";
          calcMethod = "";
          displayNumbers("")
        } else {
          if (!methodUsed) {
            calcMethod = char;
            methodUsed = true;
          }
        }
      }
    } else {
      addNum(char);
    }
  });
});

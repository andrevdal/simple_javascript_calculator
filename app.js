let tdEl = document.querySelectorAll("td");
let methodUsed = false
let firstNumber = ""
let secondNumber = ""
let calcMethod = ""

function addNum(digit){
  if(methodUsed === false){
    firstNumber = firstNumber + digit
  } else {
    secondNumber = secondNumber + digit
  }
}
function calculate (){
  console.log(eval(firstNumber + calcMethod + secondNumber));
  methodUsed = false
  firstNumber = ""
  secondNumber = ""
  calcMethod = ""
}
tdEl.forEach((el) => {
  el.addEventListener("click", (e) => {
    let char = e.target.innerText;
    if (isNaN(char)) {
      if (char == "=") {
        calculate();
      } else {
        if(!methodUsed){
          calcMethod = char
          methodUsed = true
        }
      }
    } else {
      addNum(char);
    }
  });
});
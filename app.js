let tdEl = document.querySelectorAll("td");

tdEl.forEach((el) => {
    el.addEventListener("click", (e) => {
    let firstNr = ""
    let calcMeth = ""
    let secondNr = ""
    let char = e.target.innerText
    console.log(isNaN(char));
  });
});

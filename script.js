const input = document.getElementById("numbero")
const searchButton = document.querySelector(".search-button")
const randomButton = document.querySelector(".random-button")
const factField = document.querySelector(".fact")
let number = input.value

let fetchFact = (num) => {
  let Url = `http://numbersapi.com/${num}`;
  fetch(Url)
    .then((resp) => resp.text())
    .then((data) => {
      factField.style.display = "block";
      factField.innerHTML = `<h2>${num}</h2>
      <p>${data}</p>`;
    });
};
let fetchFactAuto = (num) => {
  let Url = `http://numbersapi.com/${num}`;
  fetch(Url)
    .then((resp) => resp.text())
    .then((data) => {
      factField.style.display = "block";
      factField.innerHTML = `<h2>${num}</h2>
      <p>${data}</p>
      <h3>(generated automaticaly)</h3>`;
    });
};
function randomNumber(){
    let numbers = Math.trunc(Math.random()*300)
    return numbers
}
function searchFact(){
    let number = input.value
    if(+number < 0 || +number > 300){
        factField.innerHTML = `<h1>Number must be from 0 to 300</h1>`
    }
    else if(number==""){
        factField.innerHTML = `<h1>Input can't be empty!</h1>`
    }
    else{
        fetchFact(+number)
    }
}
function randomFact(){
    let numbers = Math.trunc(Math.random()*300)
    fetchFact(numbers)
}
function autoRandomFact(){
    let numbers = Math.trunc(Math.random()*300)
    fetchFactAuto(numbers)
}
searchButton.addEventListener("click", searchFact)
randomButton.addEventListener("click", randomFact)
window.addEventListener("load", autoRandomFact)
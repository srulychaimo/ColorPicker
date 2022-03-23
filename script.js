//***** Elements From The Dom */

const inp1 = document.querySelector("#inp1");
const inp2 = document.querySelector("#inp2");
const inp3 = document.querySelector("#inp3");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const div1 = document.querySelector("#color-display");
const div2 = document.querySelector("#color-display2");
const div3 = document.querySelector("#color-display3");
const favDiv = document.querySelector("#favorites-div");
const selectFavorites = document.querySelector("#favorites");
const errMassage = document.querySelector("#errMassage");

//***** Variables */

let numberCounter = 1;

//***** Add Event Listener */

btn1.addEventListener("click", colorChange1);
btn2.addEventListener("click", colorChange2);
btn3.addEventListener("click", addToFavorites);
selectFavorites.addEventListener("click", myFavorite);

//***** My Functions */

function checkInput() {
  let numberInp1 = Number(inp1.value);
  let numberInp2 = Number(inp2.value);
  let numberInp3 = Number(inp3.value);
  if (
    isNaN(numberInp1) ||
    numberInp1 < 0 ||
    numberInp1 > 255 ||
    isNaN(numberInp2) ||
    numberInp2 < 0 ||
    numberInp2 > 255 ||
    isNaN(numberInp3) ||
    numberInp3 < 0 ||
    numberInp3 > 255
  ) {
    errMassage.innerHTML =
      "The input must be a number that is between 0 to 255";
    div1.style.backgroundColor = "";
    div1.innerHTML = "";
    div2.style.backgroundColor = "";
    div2.innerHTML = "";
    return false;
  } else {
    return true;
  }
}

function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function colorChange1() {
  if (!checkInput()) {
    return;
  }

  let a = rgbToHex(Number(inp1.value), Number(inp2.value), Number(inp3.value));
  div1.style.backgroundColor = a;
  div1.innerHTML = a;
  errMassage.innerHTML = "";
  emptyInput();
}

function colorChange2() {
  if (!checkInput()) {
    return;
  }

  let a = rgbToHex(Number(inp1.value), Number(inp2.value), Number(inp3.value));
  div2.style.backgroundColor = a;
  div2.innerHTML = a;
  emptyInput();
}

function emptyInput() {
  inp1.value = "";
  inp2.value = "";
  inp3.value = "";
}

function addToFavorites() {
  if (!checkInput()) {
    return;
  }
  let a = rgbToHex(Number(inp1.value), Number(inp2.value), Number(inp3.value));

  const selectFavorites = document.querySelector("#favorites");
  for (const color of colors) {
    if (a === color.code.hex.toLowerCase()) {
      selectFavorites.innerHTML += `<option value=${a}>${color.color}</option>`;
      return;
    }
  }

  selectFavorites.innerHTML += `<option value=${a}>fav ${numberCounter++} - ${a}</option>`;
  emptyInput();
}

function myFavorite() {
  if (!selectFavorites.value) {
    return;
  }
  div3.style.backgroundColor = selectFavorites.value;
}

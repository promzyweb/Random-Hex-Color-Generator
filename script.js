const hex = document.querySelector(".color");
const button = document.querySelector(".generate");

function generateColor() {
  const randomColor = Math.random().toString(16).substring(2, 8);
  document.body.style.backgroundColor = "#" + randomColor;
  hex.innerHTML = "#" + randomColor;
}

button.addEventListener("click", generateColor);

const currentColor = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  const randomHexColor = getRandomHexColor();
  document.body.style.backgroundColor = randomHexColor;
  currentColor.innerHTML = randomHexColor;
}

btnChangeColor.addEventListener("click", changeColor);
changeColor();

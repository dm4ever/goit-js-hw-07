const currentColor = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", changeColor);
changeColor();

function changeColor() {
  const randomHexColor = getRandomHexColor();
  document.body.style.backgroundColor = randomHexColor;
  currentColor.textContent = randomHexColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector("#controls input[type='number']");
const createButton = document.querySelector("#controls button[data-create]");
const destroyButton = document.querySelector("#controls button[data-destroy]");
const boxes = document.querySelector("#boxes");

createButton.addEventListener("click", createBoxes);
createBoxes();

function createBoxes(amount) {
  amount = inputNumber.value;
  
  if (amount >= 1 && amount <= 100) {
    boxes.innerHTML = '';

    let width = 30;
    let height = 30;

    for (let i = 0; i < amount; i++) {
      const element = document.createElement('div');
      element.style.width = `${width}px`;
      element.style.height = `${height}px`;
      element.style.backgroundColor = getRandomHexColor();
      boxes.appendChild(element);

      width += 10;
      height += 10;
    }

    inputNumber.value = '';
  }

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

destroyButton.addEventListener("click", destroyElements);

function destroyElements() {
  boxes.innerHTML = '';
}
console.log(`Task 8`);

const inputRef = document.querySelector('input[type="number"]');
const renderRef = document.querySelector('button[data-action="render"]');
const destroyRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('div[id="boxes"]');

renderRef.addEventListener("click", inputValue);
destroyRef.addEventListener("click", destroyBoxes);

function inputValue() {
  createBoxes(Number(inputRef.value));
}

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.setAttribute("id", "square");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = randomRGB();
    box.style.margin = "5px";
    box.style.display = "inline-block";
    boxesRef.appendChild(box);
  }
}

function randomRGB() {
  const r = Math.random() * 256;
  const g = Math.random() * 256;
  const b = Math.random() * 256;
  return `rgb(${r}, ${g}, ${b})`;
}

function destroyBoxes() {
  const divBox = document.querySelectorAll("#square");
  divBox.forEach(div => div.remove());
}

// ==================================

// function createBoxes(amount) {
//   const boxes = [];
//   for (let i = 0; i < amount; i += 1) {
//     const box = `<div class="square"></div>`;
//     boxes.push(box);
//   }
//   const markup = boxes.reduce((acc, box) => acc + box, "");
//   boxesRef.innerHTML = markup;
// }

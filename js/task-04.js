console.log(`Task 4`);

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let counterValue = document.querySelector('span[id="value"]');

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);

function decrement() {
  counterValue.textContent -= 1;
}

function increment() {
  counterValue.textContent = Number(counterValue.textContent) + 1;
}

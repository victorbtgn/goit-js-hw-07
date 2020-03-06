console.log(`Task 7`);

const inputRef = document.querySelector('input[id="font-size-control"]');
const spanRef = document.querySelector('span[id="text"]');

inputRef.addEventListener("input", onRange);
spanRef.classList.add("fsize");

function onRange(event) {
  spanRef.style.fontSize = event.target.value + "px";
  return;
}

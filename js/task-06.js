console.log(`Task 6`);

const inputRef = document.querySelector('input[id="validation-input"]');

inputRef.addEventListener("focus", onFocus);
inputRef.addEventListener("blur", onblur);

function onFocus(event) {
  inputRef.classList.remove("valid", "invalid");
}

function onblur(event) {
  if (event.target.value.length === Number(event.target.dataset.length)) {
    inputRef.classList.add("valid");
    return;
  }
  if (event.target.value.length === 0) {
    return onFocus();
  }
  inputRef.classList.add("invalid");
  return;
}

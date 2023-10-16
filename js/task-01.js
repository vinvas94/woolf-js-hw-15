// Варіант 1

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInput);

function onInput(event) {
  const dataInput = Number(event.target.dataset.length);
  const inputTotal = event.currentTarget.value.length;
  inputEl.classList.remove("valid", "invalid");

  if (inputTotal === dataInput) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
}

// Варіант 2

// const inputEl = document.querySelector("input");
// inputEl.addEventListener("blur", onInput);
// const inputLength = Number(inputEl.dataset.length);

// inputEl.classList.remove("valid", "invalid");

// function onInput(event) {
//   if (inputEl.value.length === inputLength) {
//     inputEl.classList.add("valid");
//   } else {
//     inputEl.classList.add("invalid");
//   }
// }

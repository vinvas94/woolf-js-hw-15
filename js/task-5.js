function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("input"),
  buttonCreate: document.querySelector("button[data-create]"),
  buttonDestroy: document.querySelector("button[data-destroy]"),
  boxEl: document.querySelector("#boxes"),
};

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    refs.boxEl.appendChild(box);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

refs.buttonCreate.addEventListener("click", () => {
  const amount = parseInt(refs.input.value);
  createBoxes(amount);
});

refs.buttonDestroy.addEventListener("click", destroyBoxes);

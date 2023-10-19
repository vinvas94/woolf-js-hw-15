const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

span.style.fontSize = input.value + "px";

input.addEventListener("input", onInput);

function onInput(event) {
  const sizeEl = event.currentTarget.value;
  span.style.fontSize = sizeEl + "px";
}

const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener("input", (evt) => {
  const trimmedValue = evt.currentTarget.value.trim();
  if (trimmedValue) {
    span.textContent = trimmedValue;
  } else {
    span.textContent = "Anonymous";
  }
});
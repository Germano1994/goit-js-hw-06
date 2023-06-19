const input = document.querySelector('#validation-input');

input.addEventListener('blur', (e) => {
  const desiredLength = parseInt(input.dataset.length);
  const enteredValue = input.value.trim();
  
  if (enteredValue.length === desiredLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});
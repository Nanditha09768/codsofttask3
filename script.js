let currentInput = "";
const buttons = document.querySelectorAll('.calc-button');

buttons.forEach(button => {
  button.addEventListener('click', event => {
    const value = event.target.innerHTML;
    const display = document.querySelector('.calculator-input');

    if (value === '=') {
      currentInput = eval(currentInput).toString();
      display.value = currentInput;
    } else if (value === 'C') {
      currentInput = "";
      display.value = currentInput;
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

let string = "";
let buttons = document.querySelectorAll('.button');
let equalButton = document.querySelectorAll('.equalButton');
let resetButton = document.querySelectorAll('.resetButton');

buttons.forEach(button => {
  button.addEventListener('click', e => {
    switch (e.target.innerHTML) {
      case '=':
        string = eval(string);
        break;
      case 'RESET':
        string = "";
        break;
      case 'DEL':
        string = string.slice(0, -1);
        break;
      default:
        string += e.target.innerHTML;
        break;
    }
    document.querySelector('input').value = string;
  });
},);

resetButton.forEach(rstbutton => {
  rstbutton.addEventListener('click', e => {
    switch (e.target.innerHTML) {
      case 'RESET':
        string = "";
        break;
      default:
        string += e.target.innerHTML;
        break;
    }
    document.querySelector('input').value = string;
  });
},);

equalButton.forEach(eqButton => {
  eqButton.addEventListener('click', e => {
    switch (e.target.innerHTML) {
      case '=':
        string = eval(string);
        break;
      
      default:
        string += e.target.innerHTML;
        break;
    }
    document.querySelector('input').value = string;
  });
},);

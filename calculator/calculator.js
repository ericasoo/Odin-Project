function add(a, b) {return a+b;}

function subtract(a, b) {return a-b;}

function multiply(a, b) {return a*b;}

function divide(a, b) {return a/b;}

function percent(a) {return a/100;}

function plusminus(a) {return -1*a;}


// Handles numbers
function handleNumbers(num) {
  currentValue += num;
  display.innerHTML = `${currentValue}`;
}


// Handles operator
function handleOperator(button) {
  if (!currentValue) {
    return;
  }

  if (!previousValue) {
    history.innerHTML = `${currentValue} ${button.textContent} `;
  } else {
    history.innerHTML += `${currentValue} ${button.textContent} `;
  }

  previousValue = Number(currentValue);
  operation.push(previousValue);
  operation.push(button.id);
  currentValue = '';
  display.innerHTML = '';
}


// Handles function
function handleFunction(button) {
  switch(button.id) {
    case '%':
      currentValue = percent(currentValue);
      display.innerHTML = `${currentValue}`;
      break;
    case '+/-':
      currentValue = plusminus(currentValue);
      display.innerHTML = `${currentValue}`;
      break;
    case '.':
      if (currentValue.includes('.')) {
        return;
      }
      currentValue += '.';
      display.innerHTML = `${currentValue}`;
      break;
    default:
      break;
  }
}

// Handles operation
function handleOperation() {
  if (!previousValue) {
    return;
  }
  operation.push(parseInt(currentValue));
  history.innerHTML += currentValue;

  // while (operation.length > 1) {
    let o = ''
    while (!(operation.indexOf("×") == -1) ) {
      o = operation.indexOf('×')
      console.log('operation: ' + operation);
      operation.splice(o-1, 3, multiply(operation[o-1], operation[o+1]));
    }
    while (!(operation.indexOf("÷") == -1) ) {
      o = operation.indexOf('÷')
      console.log('operation: ' + operation);
      operation.splice(o-1, 3, divide(operation[o-1], operation[o+1]));
    }
    while (!(operation.indexOf("+") == -1) ) {
      o = operation.indexOf('+')
      console.log('operation: ' + operation);
      operation.splice(o-1, 3, add(operation[o-1], operation[o+1]));
    }
    while (!(operation.indexOf("-") == -1) ) {
      o = operation.indexOf('-')
      console.log('operation: ' + operation);
      operation.splice(o-1, 3, subtract(operation[o-1], operation[o+1]));
    }

  currentValue = operation[0];
  previousValue = '';
  operation = [];

  if (Number.isInteger(currentValue)) {
    display.innerHTML = currentValue
  } else {
    display.innerHTML = parseFloat(currentValue.toFixed(4));
  }

}




const display = document.querySelector('#display');
const history = document.querySelector('#history');
const buttons = document.querySelectorAll('button')

let currentValue = '';
let previousValue = '';
let operation = [];

function init() {
  previousValue = '';
  currentValue = '';
  operation = [];
  display.innerHTML = '0';
  history.innerHTML = '';
  buttons.forEach(attachListener)
  console.log('clear')
}

function attachListener(button) {
  button.addEventListener('click', handleClick)
}

function handleClick(event) {
  let e = event.currentTarget;
  if (e.id === 'c') {
    init();
  } else if (e.id === '=') {
    handleOperation();
  } else if (e.classList.contains('opbtn')) {
    handleOperator(e);
  } else if (e.classList.contains('funcbtn')) {
    handleFunction(e);
  } else {
    handleNumbers(e.value);
  }
}

init();

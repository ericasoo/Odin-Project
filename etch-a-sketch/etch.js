const container = document.querySelector('#container');

let size = 525;
let cells = 16;

const buttons = document.querySelectorAll('button');

let mode = 1;

function createGrid(cells) {

  container.textContent = "";
  
  let cellSize = size/cells;

  for (let i = 0; i < cells; i++) {
    container.style.border = '5px solid deeppink';

      const row = document.createElement('div');
      row.classList.add('row');

      for (let j = 0; j < cells; j++) {

          let cell = document.createElement('div');

          cell.classList.add('cell');
          cell.style.width = `${cellSize}px`;
          cell.style.height = `${cellSize}px`;
          cell.style.backgroundColor = 'lightgrey';
          cell.setAttribute("counter", 10);

          fillGrid(cell);

          row.appendChild(cell);
          container.appendChild(row);

        }

      }
};

function fillGrid(cell) {
  cell.onmouseover = function() {
    if (mode === 1) {
      cell.style.backgroundColor = 'black';
    } else if (mode === 2) {
      cell.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
    } else if (mode === 3) {
      let counter = cell.getAttribute("counter");
      counter -= 1;
      cell.style.filter= `brightness(${counter*10}%)`;
      cell.setAttribute("counter",counter);
    }
  }
}

createGrid(cells);


function handleClick(event) {
  let e = event.currentTarget;
  if (e.id === 'reset') {
    createGrid(cells);
  }
  else if (e.id === 'normal') {mode = 1}
  else if (e.id === 'colourful') {mode = 2}
  else if (e.id === 'gradual') {mode = 3}
}

buttons.forEach((button) => {
  button.addEventListener('click', handleClick)
});

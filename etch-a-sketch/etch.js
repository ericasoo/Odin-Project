const container = document.querySelector('#container');

let size = 525;
let cells = 16;


function createGrid(cells) {
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

          cell.onmouseover = function() {
            cell.style.backgroundColor = 'black';
          }
          row.appendChild(cell);
          container.appendChild(row);

        }

      }
};

createGrid(cells);




const reset = document.querySelector('#reset');
const normal = document.querySelector('#normal');
const colourful = document.querySelector('#colourful');
const gradual = document.querySelector('#gradual');

// Devlare variables
let playerScore = 0;
let computerScore = 0;
let rounds = 0;

// DOM nodes
const buttons = document.querySelectorAll('button');
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

const message = document.querySelector('#message')
const playChoice = document.querySelector('#playChoice')
const compChoiceImg = document.querySelector('#compChoiceImg')
const compChoice = document.querySelector('#compChoice')
const result = document.querySelector('#result')
const score = document.querySelector('#score')


function computerPlay() {
  const moves = ['rock', 'paper', 'scissors'];
  const choice = Math.floor(Math.random()*3);
  return moves[choice];
}

function playRound(playerSelection) {
  var computerSelection = computerPlay();
  message.textContent = "round " + Number(rounds+1) + "."
  playChoice.textContent = "you chose: " + playerSelection
  compChoice.textContent = "computer chose: " + computerSelection


  if (computerSelection == 'rock') {
    var img = document.createElement('img');
    img.src = 'pics/rock.png';
    img.style.width = '100px';
    document.getElementById('compChoiceImg').appendChild(img);
  } else if (computerSelection == 'paper') {
    var img = document.createElement('img');
    img.src = 'pics/paper.png';
    img.style.width = '100px';
    document.getElementById('compChoiceImg').appendChild(img);
  } else if (computerSelection == 'scissors') {
    var img = document.createElement('img');
    img.src = 'pics/scissors.png';
    img.style.width = '100px';

    document.getElementById('compChoiceImg').appendChild(img);
  }


  if (playerSelection == 'rock' && computerSelection == 'rock'
    || playerSelection == 'paper' && computerSelection == 'paper'
    || playerSelection == 'scissors' && computerSelection == 'scissors') {
    result.textContent = "draw! you both chose " + playerSelection;

  } else {
    if (playerSelection == 'rock' && computerSelection == 'scissors'
      || playerSelection == 'scissors' && computerSelection == 'paper'
      || playerSelection == 'paper' && computerSelection == 'rock') {
      playerScore += 1;
      rounds += 1;
      result.textContent = "you win! " + playerSelection + " beats " + computerSelection;
    } else {
      computerScore += 1;
      rounds += 1;
      result.textContent = "you lose! " + computerSelection + " beats " + playerSelection;
    }
  }

  score.textContent = "wins: " + playerScore + " losses: " + computerScore
  document.getElementById('compChoiceImg').removeChild(document.getElementById('compChoiceImg').childNodes[0]);

}


function playerChoice() {
  var playerSelection = this.getAttribute("choice")
  var game = playRound(playerSelection);

}

buttons.forEach((button) => {
  button.addEventListener('click', playerChoice)
});

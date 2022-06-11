const buttons = document.querySelectorAll('button');
const scores = document.querySelector('.computer-selection');
const computerScore = document.querySelector('#computerScore');
const yourScore = document.querySelector('#yourScore');

const selections = [
  {
    name: 'rock',
    image: './images/rock.png',
    beats: 'scissors'
  },
  {
    name: 'paper',
    image: './images/paper.ico',
    beats: 'rock'
  },
  {
    name: 'scissors',
    image: './images/scissors.png',
    beats: 'paper'
  }
]


buttons.forEach(button => {
  button.addEventListener('click', () => {
    const selectionName = button.id
    const selection = selections.find(selection => selection.name === selectionName)
    makeSelection(selection)
  })
})

function makeSelection(selection) {
  const computerSelection = randomSelection();
  const yourWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection);
  
  addSelectionResult(computerSelection, computerWinner);
  addSelectionResult(selection, yourWinner);

  if(yourWinner) {
    incrementScore(yourScore)
  }

  if(computerWinner) {
    incrementScore(computerScore)
  }
}

function incrementScore(score) {
  score.innerText = parseInt(score.innerText) + 1;
}

function addSelectionResult(selection, winner) {
  const img = document.createElement('img')
  img.src = selection.image
  if(winner) {
    img.classList.add('winner')
  }
  scores.after(img)
}

function isWinner(selection, opponentSelection) {
  return selection.beats == opponentSelection.name
}

function randomSelection() {
  const random = selections[Math.floor(Math.random() * selections.length)]
  return random
}

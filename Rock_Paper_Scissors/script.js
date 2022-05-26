const computerChoiceDisplay = document.getElementById('computer-choice') //
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (event) => {
    userChoice = event.target.id
    userChoiceDisplay.innerHTML = userChoice
    if(userChoice === 'rock') {
        userChoiceDisplay.style.color = 'gray'
    }
    if(userChoice === 'scissors') {
        userChoiceDisplay.style.color = 'red'
    }
    if(userChoice === 'paper') {
        userChoiceDisplay.style.color = 'violet'
    }

    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    
    if (randomNumber === 0) {
        computerChoice = 'rock'
        computerChoiceDisplay.style.color = 'gray'
    }
    if (randomNumber === 1) {
        computerChoice = 'scissors'
        computerChoiceDisplay.style.color = 'red'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
        computerChoiceDisplay.style.color = 'violet'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if(computerChoice === userChoice) {
        result = 'It\'s a DRAW!!!'
    }
    if(computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you win!!'
    }
    if(computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'you lost'
    }
    if(computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'you win'
    }
    if(computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you lost'
    }
    if(computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'you win'
    }
    if(computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'you lose'
    }

    resultDisplay.innerHTML = result
}

//should add a tally to keep score

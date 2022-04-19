// create a variable that recognizes choices for rock paper and scissors

const rps = ['Rock', 'Paper', 'Scissors']

// create a function called computerPlay that randomly returns an item in the array

function computerPlay() {
    return rps[Math.floor(Math.random() * rps.length)]
}

// writing a function that plays a single round of RPS


function currentRound(playerSelection, computerSelection) {
    if(playerSelection === 'Rock' && computerSelection === 'Paper') {
        return "You lose! Paper beats Rock"
    } else if(playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return "You lose! Scissors beats Paper"
    } else if(playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return "You lose! Rock beats Scissors"
    } else if(playerSelection === 'Paper' && computerSelection === 'Rock') {
        return "You win! Paper beats Rock"
    } else if(playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return "You Win! Rock beats Scissors"
    } else if(playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return "You Win! Scissors beats Paper"
    } else if(playerSelection === computerSelection) {
        return "Its a Draw! Go Again"
    }
      else {
          return "Unknown Error"
      }
}

const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(currentRound(playerSelection, computerSelection));
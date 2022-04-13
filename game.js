function computerPlay() {
    const play = ['Rock', 'Paper', 'Scissors'];
    return play [Math.floor(Math.random() * play.length)];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === 'Rock' && computerSelection === 'Paper') {
        return ("You Lose! Paper beats Rock");
    } else if(playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return ("You Lose! Scissors beats Paper");
    } else if(playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return ("You Lose! Rock beats Scissors");
    } else if(playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return ("You Win! Scissors beats Paper");
    } else if(playerSelection === 'Paper' && computerSelection === 'Rock') {
        return ("You Win! Paper beats Rock");
    } else if(playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return ("You Win! Rock beats Scissors");
    } else if (playerSelection === computerSelection)
        return ("Go Again");
     else {
        return ("Error");
    }
}

const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));


   
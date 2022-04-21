const choices = ['rock', 'paper', 'scissors']

function game() {
    //play the game
    // play 5 rounds
    for(let i = 0; i <= 5; i++){
        playRound();
    }
}

function playRound() {
    //playRound takes two parameters
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection)
    console.log(winner);
}

function playerChoice () {
    //get input from player
    let input = prompt('Rock, Paper or Scissors');
    while(input == null) {
        input = prompt('Rock, Paper, or Scissors');
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    if(check == true){
    }
    return input;
}


function computerChoice() {
    //get random choice for  computer
    return choices [Math.floor(Math.random() * choices.length)]
}

function validateInput(choice){
    if(choices.includes(choice)){
        return true;
    } else {
        return false;
    }
}

function checkWinner(choiceP, choiceC){
    if(choiceP === choiceC){
        return 'Tie';
    } else if(choiceP === 'rock' && choiceC === 'scissors'){
        return 'Player'
    } else if(choiceP === 'paper' && choiceC === 'rock'){
        return 'Player'
    } else if(choiceP === 'scissors' && choiceC === 'paper'){
        return 'Player'
    } else {
        return 'Computer'
    }
}

game();



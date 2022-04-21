const choices = ['rock', 'paper', 'scissors']
const winners = [];
function game() {
    //play the game
    // play 5 rounds
    for(let i = 1; i <= 5; i++){
        //in game function playRound is increasing by 1 each time the game is played
        playRound(i);

    }
    logWins();
}
//playRounds parameter is round. console.log round will run into this parameter
function playRound(round) {
    //playRound takes two parameters
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection)
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round)
}

function playerChoice () {
    //get input from player
    let input = prompt('Rock, Paper or Scissors');
    while(input == null) {
        input = prompt('Rock, Paper, or Scissors');
    }
    //makes sure player input is being correctly read from choices
    input = input.toLowerCase();
    let check = validateInput(input);
    while(check == false) {
      input = prompt('Remember spelling matters!');

        while(input == null) {
            input = prompt('Rock, Paper, or Scissors');
    }

        input = input.toLowerCase();
        check = validateInput(input)
}

return input;
    }



function computerChoice() {
    //get random choice for  computer
    return choices [Math.floor(Math.random() * choices.length)]
}

//make sure that it successfully returns choices variable. If it does not return anything in the choice variable, return nothing
function validateInput(choice){
    if(choices.includes(choice)){
        return true;
    } else {
        return false;
    }
}
//logs the possible outcomes of game
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

// logging how many times player computer or tie occured
function logWins() {
    let playerWins = winners.filter(item => item == 'Player').length;
    let computerWins = winners.filter(item => item == 'Computer' ).length;
    let ties = winners.filter(item => item == 'Tie').length;
    console.log('Reults:');
    console.log('Player Wins', playerWins);
    console.log('Computer Wins:', computerWins);
    console.log('Ties:', ties);


}
//show who won each round
function logRound(playerChoice, computerChoice, winner, round) {
    //Round: will display the Round while the parameter round is being ran through the function playRound
console.log('Round:',round);
console.log('Player Choose:' ,playerChoice);
console.log('Computer Choose:',computerChoice);
console.log(winner, 'Won the Round');
}


game();

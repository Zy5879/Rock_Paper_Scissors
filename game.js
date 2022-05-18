const choices = ['rock', 'paper', 'scissors']
const winners = []; 

function resetGame() {
    //reset game
}

function game() {
//play the game until someone wins 5 times
let imgs = document.querySelectorAll('img');
imgs.forEach((img) => 
img.addEventListener('click', () => {
    if(img.id) {
        playRound(img.id);
    }
}));

   // playRound();

   // logWins();
}

function playRound(playerChoice) {
    let wins = checkWins()
    if(wins >= 5) {
        return;
    }
    const computerSelection = computerChoice();
    const winner = checkWinner(playerChoice, computerChoice)
    winners.push(winner);
    countWins();
    displayRound(playerChoice, computerChoice, winner);
}

function displayRound(playerChoice, computerChoice, winner) {
    document.querySelector('.playerChoice').textContent = `You Chose: ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`
    document.querySelector('.computerChoice').textContent = `Computer Chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`

};

function countWins () {
    let playerWins = winners.filter(item => item == 'Player').length;
    let computerWins = winners.filter(item => item == 'Computer' ).length;
    let ties = winners.filter(item => item == 'Tie').length;
    document.querySelector('.playerScore').textContent = `Score: ${playerWins}`;
    document.querySelector('.computerScore').textContent = `Score: ${computerWins}`;
}

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function checkWins() {
    let playerWins = winners.filter(item => item == 'Player').length;
    let computerWins = winners.filter(item => item == 'Computer' ).length;
    return Math.max(playerWins, computerWins);
}

function checkWinner(choiceP, choiceC) {
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

function logWins() {
    let playerWins = winners.filter(item => item == 'Player').length;
    let computerWins = winners.filter(item => item == 'Computer' ).length;
    let ties = winners.filter(item => item == 'Tie').length;
}


/*function resetGame() {
    //reset game
}

function game() { 

    let imgs = document.querySelectorAll('img');
    imgs.forEach((img) => 
    img.addEventListener(('click'), () =>{
        if (img.id) {
            playRound(img.id);
        }
    }));
}
function playRound(playerChoice) {
   
    if(wins >= 5) {
        return;
    }
    const computerSelection = computerChoice();

    const winner = checkWinner(playerChoice, computerChoice);

    winners.push(winner);
    
    checkRound();

    logRound(playerChoice, computerChoice, winner);

    wins = checkWins();
    if(wins == 5) {
        //display end results
        //make reset button visible
        //display winner
        displayEnd()
    }
}

function displayEnd () {
    let playerWins = winners.filter(item => item == 'Player').length;
    if(playerWins == 5) {
        document.querySelector('.winner').textContent = 'You Won 5 Games, Congratulations!';
    } else {
        document.querySelector('.winner').textContent = 'Sorry the Computer Won!';
    }
    document.querySelector('.reset').style.display = 'flex'
}

function checkRound () {
    let playerWins = winners.filter(item => item == 'Player').length;
    let computerWins = winners.filter(item => item == 'Computer' ).length;
    let ties = winners.filter(item => item == 'Tie').length;
    document.querySelector('.playerScore').textContent = `Score: ${playerWins}`;
    document.querySelector('.computerScore').textContent = `Score: ${computerWins}`;
    document.querySelector('.ties').textContent = `Score: ${ties}`;
} 



function computerChoice() {
    //get random choice for  computer
    //update the dom with computer selection
    return choices [Math.floor(Math.random() * choices.length)]
}

function checkWins() {
    let playerWins = winners.filter(item => item == 'Player').length;
    let computerWins = winners.filter(item => item == 'Computer' ).length;
    return Math.max(pWins,cWins);
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


}
//show who won each round
function logRound(playerChoice, computerChoice, winners) {
    //Round: will display the Round while the parameter round is being ran through the function playRound
    document.querySelector('.playerChoice').textContent = `You Chose ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
    document.querySelector('.computerChoice').textContent = `The Computer Chose ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
    document.querySelector('.winner').textContent = `Round Winner ${winner}`;

}


game();
*/
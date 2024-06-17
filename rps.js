
function getComputerChoice() {
    /*get a RandomInt between 0 and 2 inclusive*/
    let a = getRandomInt(3);
    console.log(a);
    if (a === 0) {

        return 'Rock';
    }
    else if (a === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

//if getrandomint(3) returns 0,1 or 2
function getRandomInt(max) {
    return Math.floor(Math.random()*max);
}

/*Write a function that plays a single round of Rock Paper
Scissors. The function should take two parameters - the
playerSelection and computerSelection - and then return a 
string that declares the winner of the round like so: "You
Lose! Paper beats Rock"*/

function playRound(playerSelection, computerSelection) {
    //propt player to insert rock, paper or scissors

    //normalize case
    playerSelection = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase();
    console.log(typeof(playerSelection));
    //winning scenerios 
    if (((playerSelection ==='Rock') && (computerSelection ==='Scissors'))
    || ((playerSelection === 'Paper') && (computerSelection === 'Rock'))
    || ((playerSelection === 'Scissors') && (computerSelection === 'Paper'))) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } 
    if (playerSelection === computerSelection) {
        return `It is a Tie! No one wins!`;    
    } else {
        return `You Lose! ${playerSelection} beats ${computerSelection}`;
    }
}

/*Write a NEW function called game(). Use the previous 
function inside of this one to play a 5 round game that
keeps score and reports a winner or loser at the end.*/

function game() {
    
    let playerwins = 0;
    let computerWins = 0;
        
    let playerSelection = prompt("Rock, Paper or Scissors?");
    x = playRound(playerSelection,getComputerChoice());
    
    console.log(x);
    outcome = x.slice(4,5);
    console.log(outcome);
    if (outcome === 'W') {
        playerwins++;
    } if (outcome === 'L') {
        computerWins++;
    } else {
        //do nothing
    }

    if (playerwins > computerWins) {
        return `You win ${playerwins} to ${computerWins}`;
    } 
    if (computerWins > playerwins) {
        return `You Lose ${computerWins} to ${playerwins}`;
    } 
    
}

console.log(game());
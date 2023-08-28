
function getComputerChoice() {
    /*get a RandomInt between 0 and 2 inclusive*/
    let a = getRandomInt(3);
    console.log(a);
    if (a === 0) {
        console.log('Rock');
        return 'Rock';
    }
    else if (a === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

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


let playerSelection = prompt("Rock, Paper or Scissors?");
let computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection,computerSelection));



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

    //let 0 = lose, 1 = win, 2 = tie
    let outcome = 1;
    //winning scenerios 
    if ((playerSelection.toLowerCase() ==='rock'&&computerSelection.toLowerCase()==='sissors')||
    (playerSelection.toLowerCase()==='paper'&&computerSelection.toLowerCase()==='rock')||
    (playerSelection.toLowerCase()==='scissors'&&computerSelection.toLowerCase()==='paper') ) {
        outcome = 1;
    } 
    if (playerSelection.toLowerCase()===computerSelection.toLowerCase()) {
        outcome = 2;       
    } else {
        outcome = 0;
    }

    if (outcome === 1) {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } if (outcome ===0) {
        return `You Lose! ${playerSelection} beats ${computerSelection}`
    } else {
        return `It is a Tie! No one wins!`
    }
}


let playerSelection = prompt("Rock, Paper or Scissors?");
console.log(getComputerChoice());


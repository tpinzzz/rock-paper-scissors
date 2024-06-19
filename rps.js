function getComputerChoice() {
    let a = getRandomInt(3);
    if (a === 0) {
        return 'Rock';
    } else if (a === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (((playerSelection === 'Rock') && (computerSelection === 'Scissors')) ||
        ((playerSelection === 'Paper') && (computerSelection === 'Rock')) ||
        ((playerSelection === 'Scissors') && (computerSelection === 'Paper'))) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } 
    if (playerSelection === computerSelection) {
        return `It is a Tie! No one wins!`;    
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// Score variables
let player_score = 0;
let computer_score = 0;
let rounds = 0;

// Creating buttons and attaching them to the body
const rock = document.createElement("button");
rock.textContent = "Rock";
const scissors = document.createElement("button");
scissors.textContent = "Scissors";
const paper = document.createElement("button");
paper.textContent = "Paper";

const body = document.querySelector("body");
body.append(rock, paper, scissors);

// Results div
const results_div = document.createElement("div");
results_div.classList.add("results");
results_div.style.paddingTop = "15px";
body.appendChild(results_div);

const round_result = document.createElement("p");
results_div.appendChild(round_result);

const score_board = document.createElement("p");
score_board.textContent = `Player Score: ${player_score}, Computer Score: ${computer_score}, Rounds: ${rounds}`;
results_div.appendChild(score_board);

// Adding event listeners to buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (player_score < 5 && computer_score < 5) {
            const playerSelection = e.target.textContent;
            const computerSelection = getComputerChoice();
            const result = playRound(playerSelection, computerSelection);

            round_result.textContent = result;
            score_board.textContent = update_score(result);

            if (player_score === 5 || computer_score === 5) {
                announce_winner();
            }
        }
    });
    button.addEventListener("click", function (e) {
        e.target.style.background = "blue";
    });
});

// Function to update scores
function update_score(result) {
    rounds++;
    if (result.includes('Win')) {
        player_score++;
    } else if (result.includes('Lose')) {
        computer_score++;
    }
    return `Player Score: ${player_score}, Computer Score: ${computer_score}, Rounds: ${rounds}`;
}

// Function to announce the winner
function announce_winner() {
    if (player_score === 5) {
        round_result.textContent = "Congratulations! You won the game!";
    } else if (computer_score === 5) {
        round_result.textContent = "Sorry, the computer won the game!";
    }
    
    // Disable buttons
    buttons.forEach((button) => {
        button.disabled = true;
    });
}

// Initial display of scores
console.log(`Player Score: ${player_score}, Computer Score: ${computer_score}, Rounds: ${rounds}`);

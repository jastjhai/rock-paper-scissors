// At the beginning of the game, both human and computer score starts at 0
let humanScore = 0;
let computerScore = 0;
let currentRound = 1;
const totalRound = 5;

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

// Let the computer randomly select between rock, paper, and scissors
function getComputerChoice (i) {
    if (i >= 0 && i <= 0.33){
        return "rock";
    } else if (i >= 0.34 && i <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Prompt an input from human, between rock, paper, and scissors
function getHumanChoice () {
    return prompt("Rock/Paper/Scissors? What's your pick?").toLowerCase();
}

// Write a function that takes human and computer choice as arguments
function playRound (humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        "It's a tie! Try again!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")) {
            `You Win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
    } else {
        `You Lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    };
    }

function playGame () {
    if (currentRound >= 0 && currentRound <= 5) {

        currentRound++;
        console.log(currentRound +  ":" + totalRound);
        playRound(humanChoice, computerChoice);

    } else if (currentRound === totalRound) {
        gameEnds();
    }
}

function gameEnds() {
    let finalResult = "";

    if (humanScore > computerScore) {
        finalResult = "Congratulations! You won the game!"
    } else if (humanScore < computerScore) {
        finalResult = "You lost! Try again next time!"
    }

    return finalResult;
}

playGame();
console.log(humanScore + ":" + computerScore);
// At the beginning of the game, both human and computer score starts at 0
let humanScore = 0;
let computerScore = 0;

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
        return "It's a tie! Try again!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")) {
            humanScore++;
            return `You Win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You Lose! ${computerChoice} beats ${humanChoice}`;
    };
    }   

function playGame () {
    const totalRounds = 5;

    for (let currentRound = 1; currentRound <= totalRounds; currentRound++){
        // humanChoice and computerChoice needs to be declared within the loop to be called
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice(Math.random(0,1));  
        
        const roundResult = playRound(humanChoice,computerChoice);
        console.log(roundResult);
        console.log(humanScore + ":" + computerScore);
    }

    const gameResult = gameEnds();
    console.log(gameResult);
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
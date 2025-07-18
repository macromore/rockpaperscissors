console.log("Hello world!");

function getComputerChoice() {
    let x = Math.random();
    if (x <= 0.333) {
        return "rock";
    } else if (x >= 0.666) {
        return "paper"; 
    } else {
        return "scissors";
    }
}

function getHumanChoice () {
    let x = prompt("Choose: rock, paper, or scissors:");
    console.log("You chose "+x+".");
    return x;
}


function playRound(humanSelection, computerSelection) {
    console.log("... computer chooses "+computerSelection+".");
    switch (humanSelection.toLowerCase()) {
        case "rock":
            if (computerSelection == "rock") {
                console.log("It's a TIE!");
            } else if (computerSelection == "paper") {
                console.log("Computer wins! You LOSE!");
                computerScore++;
            } else {
                console.log("You win! How could you?");
                humanScore++;
            }
            break;
        case "paper":
            if (computerSelection == "rock") {
                console.log("You win! How could you?");
                humanScore++;
            } else if (computerSelection == "paper") {
                console.log("It's a TIE!");
            } else {
                console.log("Computer wins! You LOSE!");
                computerScore++;
            }
            break;
        case "scissors":
            if (computerSelection == "rock") {
                console.log("Computer wins! You LOSE!");
                computerScore++;
            } else if (computerSelection == "paper") {
                console.log("It's a TIE!");
            } else {
                console.log("You win! How could you?");
                humanScore++;
            }
            break;
    }
}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


playRound(humanSelection, computerSelection);
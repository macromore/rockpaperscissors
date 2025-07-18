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
    return prompt("Choose: rock, paper, or scissors:");
}

let humanScore = 0;
let computerScore = 0;
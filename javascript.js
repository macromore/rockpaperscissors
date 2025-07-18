console.log("Hello world!");

// Get computer choice

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
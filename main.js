let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choice[randomIndex];
}

function getHumanChoice() {
    const userChoice = prompt("Please enter your choice");
    return userChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let result = checkWinner(humanChoice, computerChoice);
    if (result == 1) {
        humanScore++;
    } else if (result == 0) {
        computerScore++;
    }

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

function checkWinner(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Draw");
        return -1;
    }

    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("You lose! Paper beats Rock");
            return 0;
        } else if (computerChoice == "scissors") {
            console.log("You win! Rock beats Scissours");
            return 1;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("You win! Paper beats Rock");
            return 1;
        } else if (computerChoice == "scissors") {
            console.log("You lose! Scissors beats Paper");
            return 0;
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            console.log("You win! Scissors beats Paper");
            return 1;
        }
        if (computerChoice == "rock") {
            console.log("You lose! Rock beats Scissors");
            return 0;
        }
    }

}

function playGame() {
    let roundsToPlay = 5;
    for (let i = 0; i < roundsToPlay; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

playGame();
let elements = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return elements[Math.floor(Math.random() * elements.length)];
}

function playRound(playerSelection, computerSelection) {

    // Check if player's selection is valid
    while (!elements.includes(playerSelection)) {
        console.log("Invalid selection. Please choose rock, paper, or scissors.");
        playerSelection = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    }

    // Determine the winner of the round
    if (playerSelection === computerSelection) {
        return "It's a tie! Replay the round.";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}:`);

        // Get player and computer selections
        let playerSelection = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
        let computerSelection = getComputerChoice();

        // Play the round and update scores
        let result = playRound(playerSelection, computerSelection);

        if (result.includes('Win')) {
            playerScore++;
        } else if (result.includes('Lose')) {
            computerScore++;
        } else {
            // It's a tie, so replay the round
            console.log(result);
            round--; // Decrement round to replay the same round
            continue; // Skip the score update and end the current iteration
        }

        console.log(result);
        console.log(`Score - Player: ${playerScore}, Computer: ${computerScore}\n`);
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
        console.log("Sorry, you lose the game. Better luck next time!");
    } else {
        console.log("It's a tie. The game ends in a draw.");
    }
}

game();
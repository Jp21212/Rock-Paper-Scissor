let playerScore = 0;
let computerScore = 0;

const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const resultElement = document.getElementById('result');
const computerChoiceElement = document.getElementById('computer-choice');
const buttons = document.querySelectorAll('.choice');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = getComputerChoice();
        const winner = getWinner(playerChoice, computerChoice);

        updateScore(winner);
        displayResults(playerChoice, computerChoice, winner);
    });
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'tie';
    }

    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

function updateScore(winner) {
    if (winner === 'player') {
        playerScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
    playerScoreElement.textContent = `Player: ${playerScore}`;
    computerScoreElement.textContent = `Computer: ${computerScore}`;
}

// Display the results
function displayResults(playerChoice, computerChoice, winner) {
    resultElement.textContent = `You chose ${playerChoice}.`;
    computerChoiceElement.textContent = `Computer chose ${computerChoice}.`;

    if (winner === 'tie') {
        resultElement.textContent += " It's a tie!";
    } else if (winner === 'player') {
        resultElement.textContent += " You win!";
    } else {
        resultElement.textContent += " Computer wins!";
    }
}

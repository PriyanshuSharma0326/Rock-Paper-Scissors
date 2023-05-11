let computerScore = 0;
let playerScore = 0;
let highestScore = 0;

function drawResult(computerChoice, playerChoice) {
    if(computerChoice === 'rock' && playerChoice === 'paper') {
        playerScore += 1;
    }
    else if(computerChoice === 'rock' && playerChoice === 'scissors') {
        computerScore += 1;
    }
    else if(computerChoice === 'paper' && playerChoice === 'scissors') {
        playerScore += 1;
    }
    else if(computerChoice === 'paper' && playerChoice === 'rock') {
        computerScore += 1;
    }
    else if(computerChoice === 'scissors' && playerChoice === 'rock') {
        playerScore += 1;
    }
    else if(computerChoice === 'scissors' && playerChoice === 'paper') {
        computerScore += 1;
    }
    else if(computerChoice === 'rock' && playerChoice === 'rock') {}
    else if (computerChoice === 'paper' && playerChoice === 'paper') {}
    else if (computerChoice === 'scissors' && playerChoice === 'scissors') {}
}

function changeImage(selection) {
    const computerImage = document.querySelector('.computer-choice-image');
    computerImage.src = `./media/${selection}.png`;
}

function simulateMatch(computerChoice, playerChoice) {
    let choices = ['rock', 'paper', 'scissors'];
    let computerSelects = choices[Math.floor(Math.random()*3)];
    changeImage(computerSelects);
    console.log(computerSelects);
    drawResult(computerSelects, 'rock');
}

simulateMatch('paper', 'rock');
console.log(`Computer : ${computerScore}\nPlayer : ${playerScore}`);

function getComputerChoice (){
    let compChoice = Math.floor(Math.random() * 3);
    
    if (compChoice === 0) {
        return 'rock';
    } else if (compChoice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


function gameplay (playerSelection, pcSelection) {
    
    if (playerSelection === pcSelection) {
        return "Tie! You both chose " + pcSelection;
    } else if (playerSelection === 'rock' && pcSelection === 'paper') {
        return 0;
    } else if (playerSelection === 'paper' && pcSelection === 'rock') {
        return 1;
    } else if (playerSelection === 'scissors' && pcSelection === 'rock') {
        return 0;
    } else if (playerSelection === 'scissors' && pcSelection === 'paper') {
        return 1;
    } else if (playerSelection === 'rock' && pcSelection === 'scissors') {
        return 1;
    } else {
        return 0;
    }
}

function game() {

    let pcScore = 0;
    let gamerScore = 0;
    let canWin = 0; // boolean: default is false

    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");


    rock.addEventListener("click", function() {
        canWin = gameplay("rock", getComputerChoice());
        if (canWin){
            playerScore.textContent = "Player Score: " + ++gamerScore;
        } else {
            aiScore.textContent = "Computer Score: " + ++pcScore;
        }

        if (pcScore > 4 || gamerScore > 4) {
            showFinalScore(gamerScore, pcScore);
        }
    });
    
    paper.addEventListener("click", function() {
        canWin = gameplay("paper", getComputerChoice());
        if (canWin){
            playerScore.textContent = "Player Score: " + ++gamerScore;
        } else {
            aiScore.textContent = "Computer Score: " + ++pcScore;
        }

        if (pcScore > 4 || gamerScore > 4) {
            showFinalScore(gamerScore, pcScore);
        }
    });
    
    scissors.addEventListener("click", function() {
        canWin = gameplay("scissor", getComputerChoice())
        if (canWin){
            playerScore.textContent = "Player Score: " + ++gamerScore;
        } else {
            aiScore.textContent = "Computer Score: " + ++pcScore;
        }

        if (pcScore > 4 || gamerScore > 4) {
            showFinalScore(gamerScore, pcScore);
        }
    });
        
}

function showFinalScore(gamerScore, pcScore) {

    if (pcScore > gamerScore) {
        finalScore.textContent = "After 5 rounds, you've lost " + pcScore + " to " + gamerScore;

    } else if (gamerScore > pcScore) {
        finalScore.textContent = "After 5 rounds, you've won " + gamerScore + " to " + pcScore;
    } else {
        finalScore.textContent = "After 5 rounds, you've tied " + pcScore + " to " + gamerScore;
    }

}


const container = document.querySelector('#container');
const div = document.createElement('div');
const playerScore = document.createElement('div');
const aiScore = document.createElement('div');
const finalScore = document.createElement('div');

div.classList.add("Scoreboard");
playerScore.classList.add("score");
aiScore.classList.add("score");
finalScore.classList.add("score");

container.appendChild(div);
div.appendChild(playerScore);
div.appendChild(aiScore);
div.appendChild(finalScore);

game();
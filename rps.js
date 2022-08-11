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

const aiChoice = getComputerChoice();
const gamerChoice = 'rock';

function gameplay (playerSelection, pcSelection) {
    let playerChoice = playerSelection.toLowerCase();

    if (playerChoice === pcSelection) {
        return "Tie! You both chose " + pcSelection;
    } else if (playerChoice === 'rock' && pcSelection === 'paper') {
        return "You lose! rock loses to paper";
    } else if (playerChoice === 'paper' && pcSelection === 'rock') {
        return "Congrats! rock beats paper"
    } else if (playerChoice === 'scissors' && pcSelection === 'rock') {
        return "You lose! scissors loses to rock";
    } else if (playerChoice === 'scissors' && pcSelection === 'paper') {
        return "Congrats! scissors beats paper";
    } else if (playerChoice === 'rock' && pcSelection === 'scissors') {
        return "Congrats! rock beats scissors";
    } else {
        return "You lose! paper loses to scissors";
    }
}

console.log(gameplay(gamerChoice, aiChoice));
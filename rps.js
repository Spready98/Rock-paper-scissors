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

function game() {

    let pcScore = 0;
    let gamerScore = 0;

    for (let i = 0; i < 5; i++) {

        let ai = getComputerChoice();
        let gamer = prompt("Rock, paper or scissors?");

        let result = gameplay(gamer, ai);
        console.log(result);
        
        let char = result.charAt(0);

        if (char === 'C') {
            gamerScore++;
        } else if (char === 'Y') {
            pcScore++;
        }

    }

    if (pcScore > gamerScore) {
        console.log("After 5 rounds, you've lost " + pcScore + " to " + gamerScore);
    } else if (gamerScore > pcScore) {
        console.log("After 5 rounds, you've won " + gamerScore + " to " + pcScore);
    } else {
        console.log("After 5 rounds, you've tied " + pcScore + " to " + gamerScore);
    }
}

game();
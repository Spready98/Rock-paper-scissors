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
        return "You lose! rock loses to paper";
    } else if (playerSelection === 'paper' && pcSelection === 'rock') {
        return "Congrats! rock beats paper"
    } else if (playerSelection === 'scissors' && pcSelection === 'rock') {
        return "You lose! scissors loses to rock";
    } else if (playerSelection === 'scissors' && pcSelection === 'paper') {
        return "Congrats! scissors beats paper";
    } else if (playerSelection === 'rock' && pcSelection === 'scissors') {
        return "Congrats! rock beats scissors";
    } else {
        return "You lose! paper loses to scissors";
    }
}

function game() {

    let pcScore = 0;
    let gamerScore = 0;

    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");

    

    // add these ^ event listeners into the 5 round for-loop and 2 children 'divs' of .scoreboard that display each persons current score?
    while (pcScore < 5 && gamerScore < 5) {

        rock.addEventListener("click", function() {
            gameplay("rock", getComputerChoice());
        });
    
        paper.addEventListener("click", function() {
            gameplay("paper", getComputerChoice());
        });
    
        scissors.addEventListener("click", function() {
            gameplay("scissor", getComputerChoice())
        });
        
        
    }

    if (pcScore > gamerScore) {
        console.log("After 5 rounds, you've lost " + pcScore + " to " + gamerScore);


    } else if (gamerScore > pcScore) {
        console.log("After 5 rounds, you've won " + gamerScore + " to " + pcScore);
    } else {
        console.log("After 5 rounds, you've tied " + pcScore + " to " + gamerScore);
    }
}
const container = document.querySelector('#container');
const div = document.createElement('div');

div.classList.add("Scoreboard");

container.appendChild(div);
game();
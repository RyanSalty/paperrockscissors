
//Get computers selection. Generate random number 0-2 and assign selection based on random number.
function getComputerChoice(){
    let selection;
    let computerChoice = document.getElementById('computer-choice');
    switch(Math.floor(Math.random() * 3)){
        case 0:
            selection = "paper";
            break;
        case 1:
            selection = "rock";
            break;
        case 2:
            selection = "scissors";
            break;
    }
    computerChoice.innerHTML = "The computer has selected " + selection + ".";
    return selection;
}

//Play round. Take playerSelection and computerSelection and determine results after comparison
function playRound(playerSelection, computerSelection){
    let results = "Invalid Input"; //Default to invalid input

    //If player choice matches computer choice return draw and skip switch block
    if (playerSelection.toLowerCase() == computerSelection){
        results = "Draw!";
    } else {
        switch(playerSelection.toLowerCase()){
            case "paper":
                if(computerSelection == "rock"){
                    results = "You win! Paper covers Rock!";
                } else if(computerSelection == "scissors"){
                    results = "You lose! Scissors cut Paper!";
                }
                break;
            case "rock":
                if(computerSelection == "paper"){
                    results = "You lose! Paper covers Rock!";
                } else if (computerSelection == "scissors"){
                    results = "You win! Rock beats Scissors!";
                }
                break;
            case "scissors":
                if(computerSelection == "paper"){
                    results = "You win! Scissors cut Paper!";
                } else if (computerSelection == "rock"){
                    results = "You lose! Rock beats Scissors!";
                }
                break;
        }
    }
    return results;

}

function game(){
    let btns = document.querySelectorAll('button');
    let results = document.getElementById('results');
    let game = document.getElementById('game');
    let roundResults = "";
    let playerWins = 0;
    let computerWins = 0;
    let roundCount = 0;

    for (i of btns) { //Add event listeners to each button on page and plays a round when you click one
        i.addEventListener('click', function() {
            if (roundCount === 0) game.innerHTML = ""; //Remove last games results upon pressing a new selection
            roundResults = playRound(this.innerHTML, getComputerChoice());
            results.innerHTML = roundResults;
            if (roundResults.startsWith("You win!")){
                playerWins++;
            } else if (roundResults.startsWith("You lose!")){
                computerWins++;
            }
            roundCount++;

            if (playerWins === 5 || computerWins === 5){ //End game after 5 rounds, declare winner and reset wins and round count to 0
                if (playerWins > computerWins){
                    game.innerHTML = "You won the game with " + playerWins + " wins!";
                } else {
                    game.innerHTML = "The computer won the game with " + computerWins + " wins!";
                } 
                playerWins = 0;
                computerWins = 0;
                roundCount = 0;
            }
        });
    }
}

game();
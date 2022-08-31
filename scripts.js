
//Get computers selection. Generate random number 0-2 and assign selection based on random number.
function getComputerChoice(){
    let selection;
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
    console.log("The computer has selected " + selection + ".");
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

//Loops playRound() five times prompting user input and getComputerChoice() before each round
function game(){
    let playerSelection;
    let computerSelection;
    for (let i = 0; i <5; i++){
        playerSelection = prompt("Please make a selection (Rock/Paper/Scissors)");
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

//Initialize game
game();
function beginGame(){
    let decision = prompt("do you want to play a game?");
    decision.toLowerCase();
    if(decision === "yes"){
        //singleRound(isValidInput(), getComputerChoice(3));
        game();
    }
    else if(decision === "no"){
        alert("have a nice day :)");
    }
}

function getComputerChoice (max){
    let ranNum = 0;
    //let ranNum = Math.floor(Math.random() * max);
    if (ranNum === 0){
        return "rock";
    }
    else if (ranNum === 1){
        return "paper";
    }
    else if (ranNum === 2){
        return "scissors";
    }
}

function isValidInput(){
    let playerSelection = prompt("rock, paper, or scissors?");
    playerSelection.toLowerCase();
    if(playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors"){
        return playerSelection;
    }
    else{
        alert("not valid input, try again");
        isValidInput();
    }
}

function singleRound (playerSelection, computerSelection){
    //console.log(playerSelection);
    //console.log(computerSelection);
    if(playerSelection === computerSelection){
        alert("It was a draw. Rematch!");
        return singleRound(isValidInput(), getComputerChoice(3));
    }
    else if(playerSelection === "rock" && computerSelection === "paper"){
        console.log("Inside singleRound function. You Lose");
        return 1;
    }
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        console.log("Inside singleRound function. You Lose");
        return 1;
    }
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        console.log("Inside singleRound function. You Lose");
        return 1;
    }
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        console.log("Inside singleRound function. You Win");
        return 2;
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        console.log("Inside singleRound function. You Win");
        return 2;
    }
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        console.log("Inside singleRound function. You Win");
        return 2;
    }
}

//breaks whenever a tie happens
function game(){
    let wins = 0;
    let losses = 0;
    let i=0;
    for(i=0; i<6; i++){
        let value = (singleRound(isValidInput(), getComputerChoice(3)));
        //console.log("Inside Game Function. Here is the value of i: " + i);
        if(value === 2){
            wins++;
            //console.log(wins);
            //console.log(losses);
            console.log("Score is: " + wins + "-" + losses);
        }
        else if(value === 1){
            losses++;
            //console.log(wins);
            //console.log(losses);
            console.log("Score is: " + wins + "-" + losses);
        }
    }
    if(wins > losses){
        console.log("You win!");
    }
    else if(wins < losses){
        console.log("You lose");
    }
}
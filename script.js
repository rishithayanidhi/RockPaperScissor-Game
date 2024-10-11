const prompt= require("prompt-sync")()
const name = prompt("What is your name ?: ")
console.log("Hello", name, "Welcome to our game!")
const shouldweplay= prompt("Would you like to play? ")
if(shouldweplay.toLowerCase()==="yes"){
  //Game logic
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      return "You win! Rock beats Scissors.";
    } else {
      return "You lose! Paper beats Rock.";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "You win! Paper beats Rock.";
    } else {
      return "You lose! Scissors beat Paper.";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      return "You win! Scissors beat Paper.";
    } else {
      return "You lose! Rock beats Scissors.";
    }
  } else {
    return "Invalid input. Please choose rock, paper, or scissors.";
  }
}

const playerSelection = prompt("Enter your choice (rock, paper, or scissors): ");
const computerSelection = getComputerChoice();
console.log(`Computer chose: ${computerSelection}`);

const result = playRound(playerSelection, computerSelection);
console.log(result);

}else if(shouldweplay.toLowerCase()==="no"){
  console.log("Okay :( ")
}else{
  console.log("Invalid Input :(")
}


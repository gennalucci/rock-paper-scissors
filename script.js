// Function to randomly generate the computer's choice of rock, paper, or scissors based on 1/3 probability
function getComputerChoice() {
	let computerChoice;
	let prob = Math.random();
	if (prob <= 0.33) {
		computerChoice = "Rock";
	} else if (prob > 0.33 && prob <= 0.66) {
		computerChoice = "Paper";
	}    
	else if (prob > 0.66) {
		computerChoice = "Scissors";
	}
	return computerChoice;
}

// Function to prompt player for their choice and return it with the first letter capitalized only
function getHumanChoice() {
	let humanChoice = prompt("Input your choice: rock, paper or scissors");
	humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
	return humanChoice;
}

// Function to run the entire game, which is 5 rounds of the playRound function, plus declaring a winner based on the outcome
function playGame() {
	let computerScore = 0;
  let humanScore = 0;

// Function to play 1 round out of 5
	function playRound(humanChoice, computerChoice) {
		// 3x3 = 9 combinations of outcomes per round
		if (humanChoice === "Rock" && computerChoice === "Paper") {
			computerScore++;
			console.log("Paper covers rock: 1 point for the machine race!");
		} else if (humanChoice === "Rock" && computerChoice === "Scissors") {
			humanScore++;	
			console.log("Rock smashes scissors: 1 point for humanity!");
		} else if (humanChoice === "Paper" && computerChoice === "Rock") {
			humanScore++;
			console.log("Paper covers rock: 1 point for humanity!");
		} else if (humanChoice === "Paper" && computerChoice === "Scissors") {
			computerScore++;
			console.log("Scissors chop paper: 1 point for the machine race!");
		} else if (humanChoice === "Scissors" && computerChoice === "Rock") {
			computerScore++;
			console.log("Rock smashes scissors: 1 point for the machine race!");
		} else if (humanChoice ==="Scissors" && computerChoice === "Paper") {
			humanScore++;
			console.log("Scissors chop paper: 1 point for humanity!");
		} else { // Only 3 possible combinations left are draws
			console.log("Draw!")
		}
		console.log("Human Score: " + humanScore);
		console.log("Machine Score: " + computerScore);
	}
  // This will play 5 rounds which equals one game
	for (let i = 0; i < 5; i++) {
		const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
	  playRound(humanSelection, computerSelection);
	}
	if (computerScore > humanScore) {
		console.log("The Machine Race won :-(");
	} else if (humanScore > computerScore) {
		console.log("The Human Race is victorious!");
	} else {
		console.log("It's a draw!");
  }
}

playGame();
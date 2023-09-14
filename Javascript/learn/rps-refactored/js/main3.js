//rock paper scissor refactored with functions
const initGame = () => {
  const startGame = confirm("Shall we play rock, paper or scissors?");
  startGame ? playGame() : alert("Ok, maybe next time");
};

//game flow
const playGame = () => {
  while (true) {
    let playerChoice = getPlayerChoice();
    playerChoice = formatPlayerChoice(playerChoice);
    if (playerChoice === "") {
      invalidChoice();
      continue;
    }
    if (!playerChoice) {
      decideNotToPlay();
      break;
    }

    playerChoice = evaluatePlayerChoice(playerChoice);
    if (!playerChoice) {
      invalidChoice();
      continue;
    }

    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(result);
    if (askToPLayAgain()) {
      continue;
    } else {
      thanksForPLaying();
      break;
    }
  }
};

function getPlayerChoice() {
  return prompt("Please enter rock, paper or scissors.");
}

function formatPlayerChoice(playerChoice) {
  if (playerChoice || playerChoice === "") {
    return playerChoice.trim().toLowerCase();
  } else {
    return false;
  }
}

function invalidChoice() {
  alert("You didnt enter rock, paper or scissors");
}

function evaluatePlayerChoice(playerChoice) {
  if (
    playerChoice == "rock" ||
    playerChoice == "paper" ||
    playerChoice == "scissors"
  ) {
    return playerChoice;
  } else {
    return false;
  }
}

function decideNotToPlay() {
  alert("I guess you changed your mind. Maybe next time!");
}

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  const rpsArray = ["rock", "paper", "scissors"];
  return rpsArray[computerChoice];
}

function determineWinner(player, computer) {
  const winner =
    player === computer
      ? "Tie game!"
      : player === "rock" && computer === "paper"
      ? `player One: ${player}\nComputer: ${computer}\ncomputer Wins!!`
      : player === "paper" && computer === "scissors"
      ? `player One: ${player}\nComputer: ${computer}\ncomputer Wins!!`
      : player === "scissors" && computer === "rock"
      ? `player One: ${player}\nComputer: ${computer}\ncomputer Wins!!`
      : `player One: ${player}\nComputer: ${computer}\nplayer one Wins!!`;
  return winner;
}

const displayResult = (result) => {
  alert(result);
};

const askToPLayAgain = () => {
  return confirm("Play Again?");
};

const thanksForPLaying = () => {
  alert("Ok, thanks for playing");
};

initGame();

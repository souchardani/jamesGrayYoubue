//first interactive game
let playGame = confirm("Shall we play rock, paper or scissors?");
if (playGame) {
  //play
  let playerChoice = prompt("Please enter rock, paper or scissors.");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne == "rock" ||
      playerOne == "paper" ||
      playerOne == "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";

      let result =
        playerOne === computer
          ? "Tie game!"
          : playerOne === "rock" && computer === "paper"
          ? `player One: ${playerOne}\nComputer: ${computer}\ncomputer Wins!!`
          : playerOne === "paper" && computer === "scissors"
          ? `player One: ${playerOne}\nComputer: ${computer}\ncomputer Wins!!`
          : playerOne === "scissors" && computer === "rock"
          ? `player One: ${playerOne}\nComputer: ${computer}\ncomputer Wins!!`
          : `player One: ${playerOne}\nComputer: ${computer}\nplayer one Wins!!`;
      alert(result);
      let playAgain = confirm("Play Again?");
      playAgain ? location.reload() : alert("ok, thanks for playing!");
    } else {
      alert("You didnt enter rock, paper or scissors");
    }
  } else {
    alert("I guess you changed your mind. Maybe next time!");
  }
} else {
  alert("Ok, maybe next time!");
}

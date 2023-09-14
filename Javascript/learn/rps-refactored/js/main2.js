//first interactive game
let playGame = confirm("Shall we play rock, paper or scissors?");
if (playGame) {
  //play
  while (playGame) {
    let playerChoice = prompt("Please enter rock, paper or scissors.");
    if (playerChoice || playerChoice === "") {
      let playerOne = playerChoice.trim().toLowerCase();
      if (
        playerOne == "rock" ||
        playerOne == "paper" ||
        playerOne == "scissors"
      ) {
        let computerChoice = Math.floor(Math.random() * 3 + 1);
        const rpsArray = ["rock", "paper", "scissors"];
        const computer = rpsArray[computerChoice];

        const result =
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
        playGame = confirm("Play Again?");
        if (!playGame) alert("Ok, thanks for playing");
        continue;
      } else {
        alert("You didnt enter rock, paper or scissors");
        continue;
      }
    } else {
      alert("I guess you changed your mind. Maybe next time!");
      break;
    }
  }
} else {
  alert("Ok, maybe next time!");
}

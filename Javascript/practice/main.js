alert("This is the guess game");

let choice = prompt("Enter the best player in the world");

let message = choice
  ? choice.trim().toLowerCase() === "leo messi"
    ? "your answer is correct\nCongrats!!"
    : choice.trim().toLowerCase() === "cristiano ronaldo"
    ? "this is DEFINETLEY not the best player in the world"
    : "This is not the best player in the world"
  : "you didn't write a player";

alert(message);

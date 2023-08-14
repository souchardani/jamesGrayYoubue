//conditional ternaty operator

//sytax
//condition ? iftrue : ifFalse;
let soup = "Chicken noodle soup";
//let response = soup ? "yes We Have Soup." : "Sorry, no soup today.";
let isCustomerBanned = false;
let soupAccess = isCustomerBanned
  ? "Sorry, no soup for you"
  : soup
  ? `yes, we have ${soup} today`
  : "sorry, no soup today";
console.log(soupAccess);

//************ANOTHER EXAMPLE */
let testScore = 88;
let myGrade =
  testScore > 89
    ? "A"
    : testScore > 79
    ? "B"
    : testScore > 69
    ? "C"
    : testScore > 59
    ? "D"
    : "F";

console.log(`my test grade is ${myGrade}.`);

//************Rock paper Scissors */
let playerOne = "scissors";
let computer = "rock";

let result =
  playerOne === computer
    ? "Tie game"
    : playerOne === "rock" && computer === "paper"
    ? "Computer wins"
    : playerOne === "paper" && computer === "scissors"
    ? "computer wins"
    : playerOne === "scissors" && computer === "rock"
    ? "computer wins"
    : "player One wins";

console.log(result);

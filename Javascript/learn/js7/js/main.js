let customerIsBanned = false;
let soup = "Chichen soup";
let reply;
let crackers = "";
if (customerIsBanned) {
  reply = "No soup for you!";
} else if (soup && crackers) {
  reply = `here's your order of ${soup} & crackers`;
} else if (soup) {
  reply = `here's your order of ${soup}`;
} else {
  reply = "Sorry, were out of soup";
}
//console.log(reply);

//Second example
let testScore = 89;
let grade;
let collegeStudent = true;

if (testScore >= 90) {
  grade = "A";
} else if (testScore >= 80) {
  grade = "B";
} else if (testScore >= 70) {
  grade = "C";
} else if (testScore >= 60) {
  grade = "D";
} else {
  if (collegeStudent) {
    grade = "U";
  } else {
    grade = "F";
  }
}
//console.log(grade);

//third Example
if (playerOne === computer) {
  //tie Game!
} else if ((playerOne = "rock")) {
  if (computer === "paper") {
    //computer Wins
  } else {
    //player one wins
  }
} else if ((playerOne = "paper")) {
  if (computer === "scissors") {
    //computer Wins
  } else {
    //player one wins
  }
} else {
  if (computer === "rock") {
    //computer Wins
  } else {
    //player one wins
  }
}

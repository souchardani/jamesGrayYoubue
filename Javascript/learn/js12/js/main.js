//loops
let name = "Dave";
let counter = 0;
let myLetter;
while (counter <= 3) {
  myLetter = name[counter];
  console.log(myLetter);
  if (counter === 1) {
    counter += 2;
    continue;
  }
  if (myLetter === "v") break;
  counter++;
}

console.log(counter);

//dont create endless loops

// let myNumber = 50;
// while (myNumber < 50) {
//   myNumber += 2;
//   console.log(myNumber);
// }

// do {
//   myNumber += 5;
//   console.log(myNumber);
// } while (myNumber < 50);

// let name = "Daniel";
// for (let i = 0; i <= name.length; i++) {
//   console.log(name.charAt(i));
// }

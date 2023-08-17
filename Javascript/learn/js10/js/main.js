//User input

// let myBoolean = confirm("ok===true\nCancel===false");
// console.log(myBoolean);

let name = prompt("please enter your name");
if (name) {
  console.log(name.length);
  console.log(name.trim().length);
  console.log(name.trim());
} else {
  console.log("you didn't enter a name");
}

let test = "";
if (test) {
  console.log(true);
} else {
  console.log(false);
}

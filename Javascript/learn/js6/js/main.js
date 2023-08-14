//write a prgram that return a rando letter from your name

let myName = "Daniel";
let letters = myName.split("");
console.log(letters);
console.log(letters.length);
console.log(letters[Math.floor(Math.random() * letters.length)]);

//Otra solucion
console.log("---------------");
console.log(myName.charAt(Math.floor(Math.random() * myName.length)));
console.log(myName.charAt(Math.floor(Math.random() * myName.length)));
console.log(myName.charAt(Math.floor(Math.random() * myName.length)));
console.log(myName.charAt(Math.floor(Math.random() * myName.length)));

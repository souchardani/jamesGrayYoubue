//Arrays

const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);
//or
console.log(clothesShelfB[0]);

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

const sportStore = [equipDept, clothesDept];

console.log(equipDept[0][1]);
console.log(clothesDept[1][0]);

console.log(sportStore[0][0][1]);
console.log(sportStore[1][1][0]);
//add elements to an array

// const myArrayA = ["A", "B", "C"];
// const myArrayB = ["D", "E", "F"];
// //const newArray = myArray.slice(2, 5);

// //const newString = myArray.join();
// //const newArray = newString.split(",");

// //const newArray = myArrayB.concat(myArrayA);

// const newArray = [...myArrayA, ...myArrayB];

// console.log(newArray);

// myArray[0] = "Dave";
// myArray[1] = 1001;
// myArray[2] = false;

// myArray.splice(1, 0, 42); //puede usarse para borrar o remplazar incluso añadir
// console.log(myArray);

// delete myArray[1]; //no elimina la posicion, convierte el dato en undefined

// myArray.push("school"); //push añade al final del array
// //myArray.unshift(42); //unshift añade al inicio del array
// const firstItem = myArray.shift(); //shift elimina del inicio del array

// console.log(myArray);

// console.log(firstItem);
// const lastItem = myArray.pop(); //pop borra el ultimo elemento del array(devuelve el ultimo elemento)
// console.log(myArray[1]);
// console.log(myArray[2]);
//console.log(lastItem);

// //refer to an array
// console.log(myArray);

// //lenght property
// console.log(myArray.length);

// //last element in an array
// console.log(myArray[myArray.length - 1]);

// console.log(myArray[1]);

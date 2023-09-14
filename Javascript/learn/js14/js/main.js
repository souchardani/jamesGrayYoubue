//var, let and const
//global scope

var x = 1;
let y = 2;
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc() {
  var x = 10;
  const z = 5;

  {
    var x = 11; //function scope(aunque sea en un bloque, esta dentro del block pero en function scope)
    const z = 6; //block scope

    console.log(`block: ${x}`);
    console.log(`block: ${y}`);
    console.log(`block: ${z}`);
  }
  console.log(`function: ${x}`);
  console.log(`function: ${y}`);
  console.log(`function: ${z}`);
}

myFunc();

// //scope global
// //es cuando definimos una variable a nivel de script
// var x = 1;
// let y = 2;
// const z = 3;

// //local scope
// //cuando definimos una variable dentro de un bloque {} o funcion

// function myFunc() {
//   const z = 5;
//   console.log(y);

//   //local scope
//   {
//     let y = 4;
//     console.LOG(y);
//   }
// }

// myFunc();

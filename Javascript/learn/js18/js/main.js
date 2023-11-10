//JSon = Javascript object notation
/*
Se usa para enviar y recibir datos
json es un formato texto que es completamente independiente del lenguaje
lo que indica que json se usa para enviar y recibir data en muchos
lenguajes, no solo en js
*/
const myObj = {
  name: "Dave",
  hobbies: ["eat", "sleep", "code"],
  hello: function () {
    console.log("Hello!");
  },
};

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);
console.log(sendJSON.name);

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);

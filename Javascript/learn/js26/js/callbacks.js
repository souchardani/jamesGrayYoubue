//Fetch api
//antes, hay que repasar callbacks, promises, thenables, async await

// //Callback (son funciones que se pasan a otras funciones como parametros)
// //Ej
// function firstFunction(parameters, callback) {
//   //do stuff
//   callback();
//   //se ejecuta lo que esta dentro de la funcion y luego se llama al callback, lo que crea en este caso una cadena de eventos
// }

// //AKA "callback hell"
// firstFunction(para, function () {
//   //do stufff
//   secondFunction(para, function () {
//     //do stuff
//     thirdFunction(para, function () {
//       //.....
//     });
//   });
// });

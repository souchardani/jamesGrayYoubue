//Fetch api
//antes, hay que repasar callbacks, promises, thenables, async await

//async / await

const myUsers = {
  userList: [],
};

// async function myCoolFunction() {
// }

//Nota: para usar el keyword await, debe
//usarse dentro de una funcion async
const myCoolFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  return jsonUserData;
};

const anotherFunc = async () => {
  const data = await myCoolFunction();
  myUsers.userList = data;
  console.log(myUsers.userList);
};

anotherFunc();
console.log(myUsers.userList);

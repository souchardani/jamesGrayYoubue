//Fetch api
//antes, hay que repasar callbacks, promises, thenables, async await

//Promises

//3 states: Pending, Fullfilled, Rejected
// const users = fetch("https://jsonplaceholder.typicode.com/users");

// //pending
// console.log(users);

const users = fetch("https://jsonplaceholder.typicode.com/users")
  .then((Response) => {
    return Response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      console.log(user);
    });
  });

console.log(users);

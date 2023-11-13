//Fetch api
//antes, hay que repasar callbacks, promises, thenables, async await

//Promises

//3 states: Pending, Fullfilled, Rejected

const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Yes!, resolve the promise");
  } else reject("No!, rejected the promise");
});

const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("My next promise resolved!");
  }, 3000);
});

myNextPromise.then((value) => {
  console.log(value);
});

myPromise.then((value) => {
  console.log(value);
});

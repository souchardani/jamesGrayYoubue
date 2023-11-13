//Fetch api
//antes, hay que repasar callbacks, promises, thenables, async await

//2cond parameter of fetch is a object
//abstract into funcitons
//maybe from a form
const getDatafromForm = () => {
  const requestObject = {
    firstName: "bruce",
    lastName: "lee",
    //categories: ["nerdy"],
  };
  return requestObject;
};

const buildRequestUrl = (requestData) => {
  return `https://api.chucknorris.io/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}`;
};

const requestJoke = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value;
  postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
  console.log(joke);
};

//Procedural workflow function
const processJokeRequest = async () => {
  const requestData = getDatafromForm();
  const requestUrl = buildRequestUrl(requestData);
  await requestJoke(requestUrl);
  console.log("finish");
};

processJokeRequest();

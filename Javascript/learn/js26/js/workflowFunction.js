//Fetch api
//antes, hay que repasar callbacks, promises, thenables, async await

//async / await workflow function

const getAllUsersEmails = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();

  const userEmailArray = jsonUserData.map((user) => {
    return user.email;
  });

  postToWebPage(userEmailArray);
};

const postToWebPage = (data) => {
  console.log(data);
};

getAllUsersEmails();

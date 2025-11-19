async function apiResponse() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log("Todo object", data);
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}
apiResponse();

async function getUser() {
  try {
    const responseGetUser = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const dataGetUser = await responseGetUser.json();
    console.log("User object", dataGetUser);
    return dataGetUser;
  } catch (error) {
    console.log("Error", error);
  }
}
getUser();

const promiseFirst = apiResponse();
const promiseSecond = getUser();
const promisesUnion = Promise.all([promiseFirst, promiseSecond]);
promisesUnion
  .then((result) => console.log("PromisesUnion result", result))
  .catch((error) => console.log("PromisesUnion error", error));

Promise.race([promiseFirst, promiseSecond])
  .then((result) => console.log("PromisesRace result", result))
  .catch((error) => console.log("PromisesRace error", error));

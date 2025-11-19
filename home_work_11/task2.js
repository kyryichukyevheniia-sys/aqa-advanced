function apiResponse() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

apiResponse()
  .then((result) => console.log("Todo object:", result))
  .catch((error) => console.log("Todo object error:", error));

function getUser() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
getUser()
  .then((result) => console.log("User object:", result))
  .catch((error) => console.log("User object error:", error));

const promiseA = apiResponse();
const promiseB = getUser();
const promisesCollection = Promise.all([promiseA, promiseB]);

promisesCollection.then((result) =>
  console.log("PromisesCollection result:", result)
);

Promise.race([promiseA, promiseB])
  .then((result) => console.log("Promise race result:", result))
  .catch((error) => console.log(error));

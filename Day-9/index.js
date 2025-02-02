Callback
Promise
Async await
fetch api


setTimeout
setInterval

setTimeout(() => {
  console.log("Hello");
}, 1000);

var counter = 0;
const intervalId = setInterval(() => {
  counter++;
  console.log(counter, "counter");
  if (counter == 5) {
    // console.log(intervalId,"intervalId")
    clearInterval(intervalId);
  }
}, 2000);

Callback fucntion -
function getData(swaraj) {
  setTimeout(() => {
    console.log("Inside settimeout.");
    swaraj();
  }, 5000);
}

function greet() {
  console.log("hELLO EVERYONE.");
}
getData(greet);

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const response = true;
    if (response) {
      resolve("Data fetched successfully!");
    } else {
      reject("Data fetch failed!");
    }
  }, 5000);
});

myPromise
  .then((msg) => {
    console.log(msg, "msg inside then");
  })
  .catch((msg) => console.log(msg, "msg inside catch"))
  .finally(() => console.log("Finally done."));

function myPromise() {
  return new Promise((resolve, reject) => {
    resolve("Hello");
  });
}

myPromise().then((msg) => console.log(msg));

Async await

function myPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Reject");
    }, 1000);
  });
}

async function myExuction() {
  console.log("Before");
  const result = await myPromise()
    .then((msg) => {
      return msg;
    })
    .catch((error) => {
      return error;
    }); // execution will not wait here for 5 sec

  console.log(result, "After");
}

myExuction();

function getData() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((jsversionresponse) => console.log(jsversionresponse));
}

getData();





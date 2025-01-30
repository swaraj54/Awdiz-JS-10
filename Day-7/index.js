Object - to store mutliple data

syntax
var myObject = { key : value , key2 : value2 }

var userData = {
  name: "Awdiz",
  age: 10,
  address: "Vashi",
  courses: ["Full Stack", "CCNA", "Linux"],
  time: { monday: "9 AM" },
};

console.log(userData, "userData");
console.log(userData["name"], "userData['name']");
console.log(userData["age"], "userData['name']");
console.log(userData["address"], "userData['name']");
console.log(userData["courses"], "userData['name']");
console.log(userData["time"], "userData['name']");
console.log(userData.name, "userData.name");
console.log(userData.age, "userData.age");
console.log(userData.address, "userData.address");
console.log(userData.courses, "userData.courses");
console.log(userData.time, "userData.time");
console.log(userData.time.monday, "userData.time.monday");

const myObject = {
  age: 10,
  name: "Awdiz",
  greet: function () {
    console.log("Hello everyone.");
  },
};
console.log(myObject.greet);
myObject.greet()




var name = "Awdiz";
var age = 10;

var institute = { name, age };
console.log(institute, "institute");

var institute = {
  name: "Awdiz Institute",
  age: 10,
  greet: function () {
    console.log(`Hello, Im ${this.name} and my age is ${this.age}.`);
  },
};
institute.greet();

// template literals   ->            ` ${} `
let myName = "Awdiz";
let age = 10;
console.log("Hello", myName);
console.log(`Hello ${myName} ${age}`);



var institute = {
  name: "Awdiz",
  age: 10,
};
// console.log(institute.name);
const { name, age } = institute;
console.log(name, age);

var instituteName = {
  name: "Awdiz",
  name1: "Awdiz",
  name2: "Awdiz",
};
var instituteAge = {
  age: 10,
  age1: 10,
  age2: 10,
};

const combinedObject = { ...instituteName, ...instituteAge };
console.log(combinedObject, "combinedObject");

var instituteData = {
  name: "Awdiz",
  age: 10,
};

console.log(Object.keys(instituteData));
console.log(Object.values(instituteData));
console.log(Object.entries(instituteData));

var instituteData = {
  name: "Awdiz",
  age: 10,
};

console.log("name" in instituteData);
console.log("name2" in instituteData);

const myNumbers = [1, 2, 3, 4];
const myNewNumbers = [...myNumbers, 5, 6, 7, 8];
console.log(myNewNumbers, "myNewNumbers");

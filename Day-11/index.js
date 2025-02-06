ternary operator

condition ? true value1 : false value2

let age = 20;

let isAllowForDl =
  age > 30 ? "You are allow for dl" : "You are NOT allow for dl.";
console.log(isAllowForDl, "isAllowForDl");

let marks = 81;

let grade = marks >= 90 ? "A" : (marks >= 80 ? (marks >= 83 ? "B+" : "B-") : (marks >= 70 ? "C" : "D" ));
console.log(grade, "grade");






do while loop

do {

} while()

let num = 1;

do {
  console.log(num, "num");
  num++;
} while (num > 5);








// for in

let data = { name: "Awdiz", age: 10, location: "Vashi" };

for (key in data) {
  console.log(key, "key", data[key], "value");
  if (key == "age") {
    console.log(data[key] >= 18 ? "Allow" : "Not allow");
  }
}





let data = ["Hi", "Hello", 3];

for (let index in data) {
  console.log(index, ":", data[index]);
}




// for of

var data = ["Hi", "Hello", 3];
for (let num of data) {
  console.log(num);
}

function applyOperation(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const multi = (x, y) => x * y;

console.log(applyOperation(10, 20, add));
console.log(applyOperation(10, 20, multi));





const person = {
  name: "Alice",
  greet: () => {
    console.log(`Hello, Im ${this.name}.`);
  },
  regularFunctionGreeet: function () {
    console.log(`Hello, Im ${this.name}.`);
  },
};

person.greet();
person.regularFunctionGreeet();




(function () {
  console.log("Hello");
})();




class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hi, Im ${this.name} and my age is ${this.age}`;
  }
}

const newPerson = new Person("Awdiz", 10);
console.log(newPerson.greet());

async function getData() {
  //   fetch("https://fakestoreapi.com/produc")
  //     .then((res) => res.json())
  //     .then((parsedRes) => console.log(parsedRes))

  try {
    const res = await axios("https://fakestoreapi.com/produc");
    console.log(res);
    if (res === "xyz") {
      throw new Error("res is xyz");
    }
  } catch (error) {
    console.log(error, "for custom error throw user -> error.message");
  } finally {
    console.log("Loading false.");
  }
}
getData();

function outerFunction() {
  const greet = "Welcome.";
  function innerFunction() {
    console.log(greet);
  }

  return innerFunction;
}

const myUserCaseFunc = outerFunction();
myUserCaseFunc();

function add(a) {
  return function (b) {
    return a + b;
  };
}

const addFive = add(5);
console.log(addFive(3));

call apply bind -
 use methods/data from one object to other object

 call

const myData = {
  name: "Awdiz",
  greet: function (age) {
    console.log(this.name, age);
  },
};
// myData.greet(20);

const anotherData = { name: "Swaraj" };

myData.greet.call(anotherData, 20);

apply;

const myData = {
  name: "Awdiz",
  greet: function (age) {
    console.log(this.name, age);
  },
};
// myData.greet(20);

const anotherData = { name: "Swaraj" };

myData.greet.apply(anotherData, [20]);

bind;

const myData = {
  name: "Awdiz",
  greet: function (age) {
    console.log(this.name, age);
  },
};
// myData.greet(20);

const anotherData = { name: "Swaraj" };

const result = myData.greet.bind(anotherData, 20);
result();

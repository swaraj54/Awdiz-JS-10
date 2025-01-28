Arrow function

function tradFunction(props) {
  console.log(props);
}
tradFunction();

const myFuction = (props) => {
  console.log(props);
};

const myFuction = props => console.log(props);

// myFuction(123);

Q Find out odd and even number from given range

const findOddEvenNumbersCount = (starting, ending) => {
  var evenCount = 0;
  var oddCount = 0;
  while (starting <= ending) {
    if (starting % 2 == 0) {
      evenCount++;
    } else {
      oddCount++;
    }
    starting++;
  }
  console.log(evenCount, "evenCount");
  console.log(oddCount, "oddCount");
};

findOddEvenNumbersCount(1, 10);

Array , Object
to store multiple data

var myName = "Awdiz" , "vashi", 123, true ;

Array;
var myName = "Awdiz";

var myNumbers = ["hello", true, false, myName, 1, 2, 3, 4, 5, 5, 6, 7];
console.log(myNumbers);

console.log(myNumbers[0], "myNumbers[0]");
console.log(myNumbers[1], "myNumbers[1]");
console.log(myNumbers[2], "myNumbers[2]");
console.log(myNumbers[3], "myNumbers[3]");
console.log(myNumbers.length);
console.log(myNumbers[10], "myNumbers[10]");
console.log(myNumbers[myNumbers.length - 1])
console.log((myNumbers.length - 1) / 2);
console.log(myNumbers[(myNumbers.length - 1) / 2]);

console.log(Math.floor(5.5));
console.log(Math.ceil(5.5));
console.log(Math.ceil((myNumbers.length - 1) / 2));
console.log(myNumbers[Math.ceil((myNumbers.length - 1) / 2)]);

Q Given an array print all data from it.

var myData = [1, 2, 3, 4, "hello", "hi", true,23,34,53,"sedfea"];

const printAllElements = (array) => {
    console.log(array, "array");
    let i = 0;
    while (i < array.length) {}

  for (var i = 0; i < array.length; i++) {
    console.log(i, "i", array[i]);
  }
};
printAllElements(myData);

Q Given an array find out total count of eligible users age, not eligible users age, and learning license

var usersAge = [23, 12, 23, 44, 5, 76, 12, 33, 22, 18, 17, 23, 34, 89];

const findEligibleUsers = (array) => {
  console.log(array, "array");
  var eligibleUsersCount = 0;
  var notEligibleUsersCount = 0;
  var learningUserCount = 0;

  for (var i = 0; i < array.length; i++) {
    // console.log(i, array[i]);
    if (array[i] > 18) {
      eligibleUsersCount++;
    } else if (array[i] == 18) {
      learningUserCount++;
    } else {
      notEligibleUsersCount++;
    }
  }
  console.log(eligibleUsersCount,"eligibleUsersCount")
  console.log(notEligibleUsersCount,"notEligibleUsersCount")
  console.log(learningUserCount,"learningUserCount")
};
findEligibleUsers(usersAge);

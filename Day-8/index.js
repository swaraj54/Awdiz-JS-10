var myNumbers = ["a", "b", "c", "d", "e"];
console.log(myNumbers, "myNumbers 1");
myNumbers.push(4, 5, "Helo");
myNumbers.push(6, 7);

console.log(myNumbers, "myNumbers 2");

myNumbers.unshift(0)
myNumbers.unshift(6)
console.log(myNumbers, "myNumbers 2");

myNumbers.shift()
console.log(myNumbers, "myNumbers 2");

myNumbers.pop()
console.log(myNumbers, "myNumbers 2");

const newArray = myNumbers.slice(1, 3);
console.log(newArray, "newArray");

console.log(myNumbers.splice(1, 2));

// aallows to iterate a element to return
var nums = [1, 2, 3];

var newNums = nums.map((ele) => ele * 2);
console.log(newNums);

// aallows to perform a  new task excution

var nums = [1, 2, 3];

nums.forEach((ele) => {
  if (ele % 2 == 0) {
    console.log(`Even number is ${ele}`);
  } else {
    console.log(`Odd number is ${ele}`);
  }
});


// return a filtered array

var nums = [1, 2, 3, 4];

const evenNums = nums.filter((ele) => ele % 2 == 0);

console.log(evenNums, "evenNums");

return a value


var nums = [1, 2, 3];

var inititalValue = 0;
const additionOfNumbers = nums.reduce((a, cv) => a + cv, inititalValue);
console.log(additionOfNumbers, "additionOfNumbers");




its return only passed single element
var nums = [1, 2, 3];
const isExists = nums.find((ele) => ele > 1);
console.log(isExists,"isExists")



its return only passed single elements indec
var nums = [1, 2, 3];
var myFunctionToFindNumber = (ele) => ele > 0;
console.log(nums.findIndex(myFunctionToFindNumber));  0

var myArray = ["a", "b", "c", "d"]; //  array.length  = 4

function reverseElements(array) {
  //   console.log(array, "array");
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    console.log(array[i], i, "array[i]");
    console.log(array.length - i - 1, "array.length - i -1");
    newArray[array.length - i - 1] = array[i];
    console.log(newArray, "newArray");
  }
  return newArray;
}
const result = reverseElements(myArray);
console.log(result, "result");

// array.length  = 4 ;

// 1 st iteration :
// i = array.length - 1 ; 4 - 1 = 3
// i >= 0 ; 3 >=0 ; true
// console.log(array.length - i - 1, array[i])
// 4 - 3 - 1 => 0, array[i] =? array[3] => "d"
// 0 "d"
// newArray[array.length - i - 1] = array[i];
// newArray[4 - 3 - 1 => 0 ] =  "d"
// ["d"]
// [ empty , empty ,empty  , "a"]
// 3 => i-- => 2

// 2nd iteration :
// i = 2;
// i >= 0 ; 2 >= 0 true
// console.log(array.length - i - 1, array[i])
// 4 - 2 - 1 => 1 , array[i] => array[2] => "c"
// newArray[1] = 'c'
// ["d" , "c"]
// i--
// 2 => 1

// 3 rd iteration :

// i = 1;
// i >= 0 ; 1 >=0 ; true
// console.log(array.length - i - 1, array[i])
// 4 - 1 - 1 => 2 , array[i] , array[1],  "b"
// newArray[array.length - i - 1] = array[i];
// newArray[2] = "b";
// ["d" , "c", "b"]
// i--;
//  1 =. 0

//  4 th iteration :

//  i = 0
//  i >= 0 ; 0 >=0 ; true
//  console.log(array.length - i -1, array[i])
//  4 - 0 - 1 => 3  , "a"
//  newArray[3] = "a";

// ["d" , "c", "b", "a"]
// i--;
// 0 = -1

// 5 th iteration
// i >= 0;
// -1 >= 0 -> false

function greet() {
  console.log("Hello");
  return "Hello"; 
  console.log("Hello");
}
console.log(greet());

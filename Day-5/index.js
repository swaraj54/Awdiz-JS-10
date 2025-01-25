while loop

concept same - change in syntax

for(starting ; ending ; sequence){
    multiple lines of code
}

starting
while(ending){
    sequence
    multiple lines of code
    sequence
}

Prints number from 1 - 10

var number = 1;
while (number <= 10) {
  console.log(number);
  number++;
}

Prints number from 10 - 1

var number = 10;
while( number > 0 ){
    console.log(number)
    number--;
}

Given an range from 34 - 67 ;
find out total count of
 even numbers and odd numbers use while loop only

var number = 1;
var evenCount = 0;
var oddCount = 0;
while (number <= 11) {
  if (number % 2 == 0) {
    evenCount++;
  } else {
    oddCount++;
  }
  number++;
}

// // console.log(evenCount, "evenCount", oddCount, "oddCount");

var number = 1;
while (number <= 20) {
  if (number % 2 == 0) {
    number++;
  } else {
    console.log(number, "before");
    number += 2;
    console.log(number, "after");
  }

}

function
traditional function
arrow function

varible -> to store data
function -> to store lines of code

function functionName(props){
    multiple lines of code
}

functionName()
function kuchbhi() {
  console.log("Inside function kuchbhi.");
}

kuchbhi();
console.log("Outside of function");

var number1 = 234;
var number2 = 345;

function additionNumbers() {
  console.log(number1 + number2);
}
additionNumbers();

var number1 = 234;
var number2 = 345;

function additionNumbers(num1, num2) {
  console.log(num1, num2);
}
additionNumbers(number2, 234);



var myName;
console.log(myName, typeof myName);

// break, continue

for (var i = 1; i <= 10; i++) {
    if (i == 5) {
      break;
    }
  console.log(i);
}

for (var i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

// Q Given an range from starting = 23,
// ending = 45,  find out count of even number by using
// function, while loop and conditional statement

var starting = 1;
var ending = 10;

function evenCount(starting, ending) {
  //   console.log(starting, ending);
  var evenCount = 0;
  while (starting <= ending) {
    if (starting % 2 == 0) {
      //   console.log(starting);
      evenCount++;
    }
    starting++;
  }
  console.log(evenCount);
}
evenCount(starting, ending);

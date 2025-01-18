 Data types

 String  -> '23435' "awdwa" `@#$%^&`
 Number 23 4 23.342 100000
 Boolean true false

//  'Awdiz'
//  '20'

console.log(typeof "Awdiz", "Awdiz");
console.log(typeof "Awdiz", "Awdiz");
console.log(typeof `Awdiz`, `Awdiz`);

console.log(typeof 12.21, 12.21);

console.log(typeof true, true);

console.log(12 + 12)

varibles

var
let
const

// var

varibleType varibleName = Data

var myUserName = "Awdiz";

console.log(myUserName, typeof myUserName);

var myAge = 25;
console.log(myAge, "myAge");

var isOpen = true;
console.log(isOpen, "isOpen");

var number1 = 100;
var number2 = 101;
console.log(number1 + number2);

var number = 20;
// declare + assign;
console.log(number);
number = 21;
// re - assign;
console.log(number);
var number = 22; // re - declare
console.log(number);




let

let myNumber = 30; // declare and assign

console.log(myNumber);

myNumber = 31; // re-assign

console.log(myNumber);

let myNumber = 32; // re declare

console.log(myNumber);




const myNumber = 20;

console.log(myNumber);

myNumber = 21;

console.log(myNumber);

const myNumber = 22;
console.log(myNumber)





            re-assign       re-declare    block scoped     globla scoped   hoisting
var            true             true                           true         true
let            true             false       true                            false
const          false            false       true                            false

{
  {
    // let myNumber = 10;
    // const myNumber = 10;
    var myNumber = 10;
  }
}
console.log(myNumber);

Hoisting

myAge = 20;

console.log(myAge);

const myAge;
let myAge;
var myAge;

comaprision operators
=    -> assign
==   -> compare data
===  -> compare data + datatype -  strict checking

console.log(2 == '2');
console.log(2 === 2);

console.log(2 != 3); //left side is NOT equal to right side  -> false
console.log(2 == 2); // left side is equal to right side -> true

console.log(2 != 3);
console.log("3" != 3);// left side is NOT equal to right side
console.log("3" !== 3);// left side is NOT equal to right side

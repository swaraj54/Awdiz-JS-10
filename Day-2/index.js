// Datatypes - string, number, boolean
// varibles - var , let , const
// hoisting
// scopes
// operators comprision

Logical Operators

&&
||

console.log(2 == 2 && 2 == 2 && 2 == 2);

all conditions must true then only it'll return true
if single condition is false then it'll return false

console.log(2 == 3 || 2 == 3 || 2 == 3);
if single condition is true then it'll return true
if all conditions are false then only it'll return false

// true false

// arthemtic operator

var number = 100;
number++;
number = number + 1;
number += 34;
console.log(number);

var number = 100;
number = number - 1;
number--;
number -= 1;
console.log(number);

// 45

// 4 / 2  = 2
// 10 / 2 = 5

// 4 % 2 = 0  even
// 17 % 2 = 1 odd

//    ___ 8    Q
// 2 /  17
//      16
//       1   R

console.log(16 % 2 == 0);

Conditional sTATEMENET
if else
switch

if else
condition => true false
if(condition) { 2 == 3
    print statement 1
} else if(condition){ 2 == 3
    print statement 2
} else if(condition){
    print statement 3
} else {
    print statement 4
}

if (2 == 2) {
  console.log("Given numbers are same, inside if.");
} else if (2 == 3) {
  console.log("Given numbers are same, inside else if.");
} else {
  console.log("None of conditions are same, inside else.");
}

console.log("Outside of conditional statement")

var userEnteredNumber = 3234;

if (userEnteredNumber % 2 == 1) {
  console.log("Provided Number is odd.");
} else {
  console.log("Provided Number is even.");
}

Driving lisence

user age must be greter than 18 to 80
user age if equal to 18 then learning
less than 18 and more than 80  no liscene

var userAge = 14;

if (userAge > 18 && userAge <= 80) {
  console.log("You are allowed for DL.");
} else if (userAge < 18 || userAge > 80) {
  console.log("You are NOt allowed for DL and LL.");
} else {
  console.log("LL.");
}

if (userAge == 18) {
  console.log("LL.");
} else if (userAge > 18 && userAge <= 80) {
  console.log("You are allowed for DL.");
} else {
  console.log("You are NOt allowed for DL and LL.");
}

if (userAge > 18) {
  console.log("You are allowed for DL.");
} else if (userAge == 18) {
  console.log("You are allowed for LL.");
} else {
  console.log("You are not allowed for LL and DL.");
}

console.log(2 <= 2);

console.log(2 >= 2);

switch - matching    apple == apple

switch( key  ){
    case 1:
        statement 1
    case 2:
        statement 2
    case 3:
        statement 3
    default :
        statement last
}

var userSelectedFruit = "Strawberry";

switch (userSelectedFruit) {
  case "Apple":
    console.log("User selected fruit is Apple.");
    break;
  case "Strawberry":
    console.log("User selected fruit is Strawberry.");
    break;
  case "Banana":
    console.log("User selected fruit is Banana.");
    break;
  default:
    console.log("None of fruit is available..");
}




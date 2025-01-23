// Loop  -> for

Print numbers from 10 - 1

for (var number = 1; number <= 10; number++) {
  console.log(number); // 10  9 8 7 6 5 4 3 2 1
}

for (var number = 10; number > 0; number--) {
  console.log(number); // 10  9 8 7 6 5 4 3 2 1
}

for (var i = 100; i >= 0; i -= 10) {
  console.log(i);
}

for (var i = 5; i > 0; i -= 1) {
  console.log(i);
}

1st iteration :
i = 5
i > 0 -> 5 > 0  -> true
console.log(i); -> 5
i -= 1 -> 5 -> 4

2nd Iteration
i = 4 ;
i > 0; 4 > 0 -> true
console.log(i); -> 4
i -= 1 -> 4 -> 3

3rd iteration -> 3
4th iteration _> 2
5th iteration -> 1
i = 1;
i > 0 ; 1 > 0 -> true
console.log(i); -> 1
i -= 1 -> 1 -> 0

6 th iteration
i = 0;
i > 0; ; 0 > 0 ; false

Q.  Given an range 23 - 56,
Print even number from range.

for (var i = 23; i <= 56; i += 1 ) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

Q.  Given an range 23 - 56,
Print total count for odd numbers

var count = 0;
for (var i = 23; i <= 56; i++) {
  if (i % 2 == 1) {
    console.log("Found odd number", i);
    count++;
  }
}
console.log(count, "count");



Q.  Given an range 43 - 11,
Print count of even numbers

var count = 0;
for (var i = 10; i >= 1; i--) {
  if (i % 2 == 0) {
    count++;
  }
}
console.log(count);

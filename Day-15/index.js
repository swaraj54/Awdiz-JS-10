// Q. Find a number from given array,

// var nums = [1, 2, 3, 4, 5];
// var target = 6;

// for (var i = 0; i < nums.length; i++) {
//   if (nums[i] == target) {
//     console.log(i);
//   }
// }
// var nums = [1, 2, 3, 4, 5, 6];
// var target = 6;

// let left = 0;
// let right = nums.length - 1; // 5

// console.log(Math.floor(left + right / 2), "indec"); /// 2
// console.log(nums[Math.floor(left + right / 2)], "element"); // 3

// console.log(target == nums[Math.floor(left + right / 2)]); // 6 == 3 false
// console.log(target < nums[Math.floor(left + right / 2)]); // 6 < 3 false
// console.log(target > nums[Math.floor(left + right / 2)]); // 6 > 3 true

// [4, 5, 6]; // 3 4 5

// left = 0 + Math.floor(left + right / 2) + 1;  -> 3
// right = 5;

// console.log(Math.floor(left + right / 2), "indec"); 4
// console.log(nums[Math.floor(left + right / 2)], "element");  5

// console.log(target == nums[Math.floor(left + right / 2)]); // 6 == 5 false
// console.log(target < nums[Math.floor(left + right / 2)]); // 6 < 5 false
// console.log(target > nums[Math.floor(left + right / 2)]); // 6 > 5 true

// left = 0 + Math.floor(left + right / 2) -> 4 + 1;  ->  5
// right = 5;

// [6]

// console.log(Math.floor(left + right / 2), "indec"); 5
// console.log(nums[Math.floor(left + right / 2)], "element");  6

// console.log(target == nums[Math.floor(left + right / 2)]); // 6 == 6 true

var nums = [1, 2, 3, 4, 5, 6];
var target = 6;

function binaryTarget(nums, target) {
  let left = 0; // 3 // 5
  let right = nums.length - 1; // 5

  while (left <= right) {
    let midIndec = Math.floor((left + right) / 2); //-> 2  , 3 + 5 -> 4 , 5 + 5  / 2, 5
    let midEle = nums[midIndec]; //  -> 3 -> 5 -> 6

    if (target == midEle) {
      // 6 == 3 -> false 6 == 5 false  , 6 == 6 true
      return "Element found.";
    } else if (target < midEle) {
      //6 < 3 false  6 < 5 false
      right = midIndec - 1;
    } else {
      // 6 > 3 true  , 6 > 5
      left = midIndec + 1; // 4 + 1 -> 5
    }
  }
  return "Not found";
  //   for( 0 ; lenght - 1;  i++)
}

console.log(binaryTarget(nums, target));




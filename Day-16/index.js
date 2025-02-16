// function* kuchbhi() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// const res = kuchbhi();
// console.log(res.next()); // 1
// console.log(res.next()); // 2
// console.log(res.next()); // 3

// async function* getProducts() {
//   let page = 1;
//   while (true) {
//     const res = await fetch("https://fakestoreapi.com/products");
//     const parsedData = await res.json();
//     yield parsedData;
//     page++;
//   }
// }
// const output = getProducts()

// document.getElementById("loadmore").addEventListener("click", () => {
//   const res = output.next();

//   res.products
// });

// function kuchbhi2(){
//     return 1;
// }
// kuchbhi2()

// let obj = { name: "John" };
// let weakMap = new WeakMap();
// weakMap.set(obj, "some value");
// console.log(weakMap.get(obj));

// function memoize(fn) {
//   const cache = {};
//   return function (...args) {
//     const key = JSON.stringify(args);
//     console.log(cache[key], "cache[key] is exist ?");
//     if (cache[key]) {
//       console.log("cache[key] :", cache[key]);
//       return cache[key];
//     }
//     const result = fn(...args);
//     cache[key] = result;
//     return result;
//   };
// }

// const slowFunction = (n) => {
//   console.log("Calculating...");
//   return n * 2;
// };

// const fastFunction = memoize(slowFunction);

// console.log(fastFunction(5)); // Output: Calculating... 10
// console.log(fastFunction(5)); // Output: 10 (cached result)

// function memoize(fn) {
//   const data = {};
//   return function (...args) {
//     if (data[args]) {
//       console.log("Returning before calling function");
//       return data[args];
//     }
//     const res = fn(args); // 10
//     data[args] = res;
//     console.log("Returning afer calling function");
//     return res;
//   };
// }

// const slowFunction = (n) => {
//   console.log("Inside slowfunction");
//   return n * 2;
// };

// const fastFunction = memoize(slowFunction);
// console.log(fastFunction(5)); // 10
// console.log(fastFunction(6));
// console.log(fastFunction(6)); // 10
// console.log(fastFunction(5));

// const myObj = { name: "Awdiz" };
// console.log(myObj["name"]);



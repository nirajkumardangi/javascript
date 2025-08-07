// Strictly Equality -->

// const num = 0;
// const obj = new String("0");
// const str = "0";

// console.log(num === num); // true
// console.log(obj === obj); // true
// console.log(str === str); // true

// console.log(num === obj); // false
// console.log(num === str); // false
// console.log(obj === str); // false
// console.log(null === undefined); // false
// console.log(obj === null); // false
// console.log(obj === undefined); // false




// Loosely Equality -->

const num = 0;
const big = 0n;
const str = "0";
const obj = new String("0");

console.log(num == str); // true
console.log(big == num); // true
console.log(str == big); // true

console.log(num == obj); // true
console.log(big == obj); // true
console.log(str == obj); // true




// Object.is -->
console.log(Object.is(5, 5)); // true
console.log(Object.is(5, "5")); // false
console.log(Object.is(0, -0)); // false
console.log(Object.is(NaN, NaN)); // true

let obj1 = { key: "value" };
let obj2 = { key: "value" };

console.log(Object.is(obj1, obj1)); // true (same reference)
console.log(Object.is(obj1, obj2)); // false (different references)


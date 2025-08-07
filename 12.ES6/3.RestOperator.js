/* The rest parameter (...) is used in function parameters to collect all remaining arguments into a single array */ 

// 1. Rest in Function Parameters:------------------------------------------
function add(...numbers){
    return numbers.reduce((total, num) => total + num, 0)
}

const total = add(1, 2, 3, 4, 5);
console.log(total);


// 2. Rest in Array Destructuring:------------------------------------------
const [first, second, ...rest] = [1, 2, 3, 4, 5];

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest);   // Output: [3, 4, 5]


// Rest in Object Destructuring:--------------------------------------------
const { a, b, ...restProps } = { a: 1, b: 2, c: 3, d: 4 };

console.log(a);     	// Output: 1
console.log(b);     	// Output: 2
console.log(restProps); // Output: { c: 3, d: 4 }


// Combining Spread and Rest:-----------------------------------------------
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];

const [a1, b2, ...rest1] = combinedArray;

console.log(a1);  // Output: 1
console.log(b2);  // Output: 2
console.log(rest1);  // Output: [3, 4, 5, 6]




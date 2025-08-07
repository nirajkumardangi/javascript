// 1. All numbers in javascript represented as floating point numbers.
let num = 10; // 10
let num1 = 10.05; // 10.05


// 2. Computer use binary to represent numbers, some decimal numbers (like - 0.1, 0.2, 0.3) cannot be represent exactly in binary.
let num2 = 0.1 + 0.2; // 0.30000000000000004;


// to fix this issue use toFixed(2) function;
let num3 = (0.1 + 0.2).toFixed(2); // 0.30


// 3. Bigint
let bigNum = 345n; // 235n
// console.log(typeof bigNum); // bigint


// 4. Storing Binary Numbers
let binaryNumber = 0b011; // 3


// 5. Storing Octal Numbers
let octalNumbers = 0o745; // 485


// 6. Storing Hexadecimal Numbers
let hexadecimalNumbers = 0x7ff; // 2047
console.log(hexadecimalNumbers);


// 7. JavaScript Numeric Separator
let amount = 1_000_000;
console.log(amount); // 1000000

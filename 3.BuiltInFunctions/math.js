let num = 42.567;

// Math.round: Rounds a number to the nearest integer
console.log(Math.round(num)); // Output: 43

// Math.floor: Rounds a number down to the nearest integer
console.log(Math.floor(num)); // Output: 42

// Math.ceil: Rounds a number up to the nearest integer
console.log(Math.ceil(num)); // Output: 43

// Math.abs: Returns the absolute value of a number
console.log("Absolute Value: " + Math.abs(-42.567)); // Output: 42.567

// Math.random: Returns a random floating-point number between 0 (inclusive) and 1 (exclusive)
console.log("Random value: " + Math.random());

// Math.min and Math.max: Returns the minimum or maximum value among a set of numbers
console.log("Minimum value: " + Math.min(10, 20, 30)); // Output: 10
console.log("Maximum value: " + Math.max(10, 20, 30)); // Output: 30

// Math.pow: Raises a number to the power of another number
console.log("Power: " + Math.pow(2, 3)); // Output: 8

// Math.sqrt: Returns the square root of a number
console.log("Square Root: " + Math.sqrt(16)); // Output: 4

// Math.cbrt: Return the cube root ofa number
console.log("Cube Root: " + Math.cbrt(27)); //

// Math.PI: Mathematical constant representing the ratio of a circle's circumference to its diameter
console.log("Value of PI: " + Math.PI); // Output: 3.141592653589793


// Random Value 1 to 10
let random = Math.floor((Math.random() * 10) + 1);
// console.log(random);

// Random Value with custom range 10 to 20
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min + 1)) + min);



/* 
// Math.E: Mathematical constant representing the base of natural logarithms (Euler's number)
let eulerNumber = Math.E;
console.log(eulerNumber); // Output: 2.718281828459045

// Math.sin, Math.cos, Math.tan: Trigonometric functions (input in radians)
let sineValue = Math.sin(Math.PI / 2);
let cosineValue = Math.cos(Math.PI);
let tangentValue = Math.tan(Math.PI / 4);
console.log(sineValue); // Output: 1
console.log(cosineValue); // Output: -1
console.log(tangentValue); // Output: 1

// Math.atan2: Returns the arctangent of the quotient of its arguments
let arctangentValue = Math.atan2(1, 1);
console.log(arctangentValue); // Output: 0.7853981633974483 (approximately)

// Math.log: Returns the natural logarithm (base E) of a number
let naturalLogarithm = Math.log(10);
console.log(naturalLogarithm); // Output: 2.302585092994046

// Math.exp: Returns E raised to the power of a number
let exponentialValue = Math.exp(2);
console.log(exponentialValue); // Output: 7.3890560989306495 
*/

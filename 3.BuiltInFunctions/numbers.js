let exampleNumber = 42.567;

// toFixed: Formats a number using fixed-point notation with a specified number of digits after the decimal point
let fixedNumber = exampleNumber.toFixed(2);
console.log(fixedNumber); // Output: "42.57"

// toPrecision: Formats a number to a specified precision
let precisionNumber = exampleNumber.toPrecision(4);
console.log(precisionNumber); // Output: "42.57"

// toString: Converts a number to a string
let stringNumber = exampleNumber.toString();
console.log(stringNumber); // Output: "42.567"

// toExponential: Formats a number using exponential notation with a specified number of digits after the decimal point
let exponentialNumber = exampleNumber.toExponential(2);
console.log(exponentialNumber); // Output: "4.26e+1"


// toLocalString
let hundreds = 1000000;
let num1 = hundreds.toLocaleString();
console.log('Indian Style: ' + num1);
let num2 = hundreds.toLocaleString('en-US');
console.log('American Style: ' + num2);

console.log(typeof num1); // string


// parseInt: Parses a string and returns an integer
let integerFromFloat = parseInt("42.567");
console.log(integerFromFloat); // Output: 42

// parseFloat: Parses a string and returns a floating-point number
let floatFromString = parseFloat("42.567");
console.log(floatFromString); // Output: 42.567

// isNaN: Checks if a value is NaN (Not a Number)
let isNaNCheck = isNaN("Not a Number");
console.log(isNaNCheck); // Output: true

// isFinite: Checks if a value is a finite number
let isFiniteCheck = isFinite(42.567);
console.log(isFiniteCheck); // Output: true
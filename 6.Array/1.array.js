/* Creating Arrays:---------------------------------------------------------------- */

/* // Creating an array with literal notation
let fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log(fruits);

// Creating an array with the Array constructor
let colors = new Array("Red", "Green", "Blue");
console.log(colors);

// Creating an empty array
let emptyArray = []; */


/* Accessing Elements:---------------------------------------------------------------- */

/* // Accessing elements by index
console.log(fruits[0]); // Output: "Apple"
console.log(colors[2]); // Output: "Blue"

// Modifying elements by index
fruits[1] = "Grapes";
console.log(fruits); // Output: ["Apple", "Grapes", "Orange", "Mango"] */


// Array Methods

let fruits = ["Apple", "Banana", "Orange", "Mango"];
let colors = ["Red", "Green", "Blue"];

// fruits.push(colors) // [ 'Apple', 'Banana', 'Orange', 'Mango', [ 'Red', 'Green', 'Blue' ] ]

// colors.fill('hii', 0, 2); // [ 'hii', 'hii', 'Blue' ]

// console.log(colors);


// Array Flat:
let num = [1, 2, 3, [4, 5], 6, [7, [8, 9], 5]];

// let newArray = num.flat(Infinity);
let newArray = num.flat(1);
console.log(num);
console.log(newArray);
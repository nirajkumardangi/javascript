
// Array.length: Property that returns the number of elements in an array.
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits.length); // Output: 3


// Array.toString() : Converts an array to a string by joining its elements with commas.
let colors = ["Red", "Green", "Blue"];
let colorsString = colors.toString();
console.log(colorsString); // Output: "Red,Green,Blue"


// Array.join() : Joins all elements of an array into a single string using a specified separator.
let joinedColors = colors.join(" || ")
console.log(joinedColors); // Output: "Red - Green - Blue"


// delete Array : Operator used to delete elements at a specified index in an array.
delete fruits[0];
console.log(fruits); // Output: [ <1 empty item>, 'Banana', 'Orange' ]


// Array.concat() : Combines two or more arrays, returning a new array.
let fruits1 = ["Orange", "Grapes"]
let moreFruits = ["Mango", "Grapes"];
let allFruits = fruits1.concat(moreFruits);
console.log(allFruits); // Output: [ 'Orange', 'Grapes', 'Mango', 'Grapes' ]


// Array.flat() : Creates a new array with all sub-array elements concatenated recursively up to the specified depth.
let nestedArray = [1, [2, [3, [4]]]];
let flatArray = nestedArray.flat(2);
console.log(flatArray); // Output: [1, 2, 3, 4]


// Array.push() : Adds one or more elements to the end of an array and returns the new length.
fruits.push("Pineapple");
console.log(fruits); // Output: ["Apple", "Orange", "Pineapple"]


// Array.unshift() : Adds one or more elements to the beginning of an array and returns the new length.
fruits.unshift("Strawberry");
console.log(fruits); // Output: ["Strawberry", "Apple", "Orange", "Pineapple"]


// Array.pop() : Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let removedFruit = fruits.pop();
console.log(removedFruit); // Output: "Pineapple"


// Array.shift() : Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let removedFirstFruit = fruits.shift();
console.log(removedFirstFruit); // Output: "Strawberry"


// Array.splice() : Changes the contents of an array by removing or replacing existing elements or adding new elements.
const colors3 = ["red", "green", "blue"];
// colors3.splice(0, 0, "white", "Sky Blue"); // [ 'white', 'Sky Blue', 'red', 'green', 'blue' ]
// colors3.splice(0, 2, "white", "sky blue");  // [ 'white', 'sky blue', 'blue' ]
// colors3.splice(0, "white", "sky blue");  // [ 'sky blue', 'red', 'green', 'blue' ]
console.log(colors3); 

const colors4 = ["red", "green", "blue", 1, 3, 4, 5];
colors4.splice(2, 3, "gold", "brown");  
console.log(colors4); // [ 'red', 'green', 'gold', 'brown', 4, 5 ]


// Array.slice() : Extracts a portion of an array and returns a new array.
const colors5 = ["red", "green", "blue", 1, 3, 4, 5];
let slicedFruits = colors5.slice(1, 3);
console.log(slicedFruits); // [ 'green', 'blue' ]


// Array.some() : Tests whether at least one element in the array passes the provided function.
let hasGrapes = fruits.some((fruit) => fruit === "Grapes");
console.log(hasGrapes); // Output: true


// Array.reduce() : Applies a function against an accumulator and each element in the array to reduce it to a single value.
const numbers = [4, 4, 4, 4, 4];
let sum = numbers.reduce((acc, current) => acc + current, 0);
console.log(sum); // Output: 20;


// Array.map() : Creates a new array by applying a function to each element in the array.
let num1 = [2, 4, 6, 8, 10];
let doubledNumbers = num1.map((num) => num * 2);
console.log(doubledNumbers); // Output: [ 4, 8, 12, 16, 20 ]



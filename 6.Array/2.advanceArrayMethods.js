// Array some() Method: Tests whether at least one element in the array passes the provided function.
let numbers = [1, 2, 3, 4, 5];
let hasEvenNumber = numbers.some((num) => num % 2 === 0);
console.log(hasEvenNumber); // Output: true


// Array reduce() Method: Applies a function against an accumulator and each element in the array to reduce it to a single value.
let sum = numbers.reduce((acc, current) => acc + current, 0);
console.log(sum); // Output: 15


// Array map() Method: Creates a new array by applying a function to each element in the array.
let doubledNumbers = numbers.map((num) => [num * 2, num*3]);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


// Array every() Method: Tests whether all elements in the array pass the provided function.
let allEvenNumbers = numbers.every((num) => num % 2 === 0);
console.log(allEvenNumbers); // Output: false


// Array flat() Method: Creates a new array with all sub-array elements concatenated recursively up to the specified depth.
let nestedArray = [1, [2, [3, [4]]]];
let flatArray = nestedArray.flat(2);
console.log(flatArray); // Output: [1, 2, 3, 4]


// Array flatMap() Method: Creates a new array by applying a function to each element in the array, then flattening the result by one level.
let mappedAndFlattened = numbers.flatMap((num) => [num * 2, num * 3]);
console.log(mappedAndFlattened); // Output: [2, 3, 4, 6, 6, 9, 8, 12, 10, 15]


// Array filter() Method: Creates a new array with all elements that pass the provided function's test.
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]


// Array findindex() Method: Returns the index of the first element in the array that satisfies the provided testing function.
let indexOfFirstEvenNumber = numbers.findIndex((num) => num % 2 === 0);
console.log(indexOfFirstEvenNumber); // Output: 1


// Array find() Method: Returns the first element in the array that satisfies the provided testing function.
let firstEvenNumber = numbers.find((num) => num % 2 === 0);
console.log(firstEvenNumber); // Output: 2


// Array fill() Method: Fills all the elements of an array with a static value from a start index to an end index.
let filledArray = new Array(5).fill(0);
console.log(filledArray); // Output: [0, 0, 0, 0, 0]


// Array forEach() Method: Calls a function for each element in the array.
numbers.forEach((num) => {
    console.log(num);
});


// Array sort() Method: Sorts the elements of an array in place.
let sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers); // Output: [1, 2, 3, 4, 5]

/* If (a - b) is negative, it means a should come before b.
If (a - b) is zero, it means a and b are equal.
If (a - b) is positive, it means a should come after b. */


// Array concat() Method: Combines two or more arrays, returning a new array.
let moreNumbers = [6, 7, 8];
let allNumbers = numbers.concat(moreNumbers);
console.log(allNumbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8]


// Array includes() Method: Determines whether an array includes a certain element, returning true or false.
let includesNumber = numbers.includes(3);
console.log(includesNumber); // Output: true


// Array reverse() Method: Reverses the elements of an array in place.
let reversedNumbers = numbers.reverse();
console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]

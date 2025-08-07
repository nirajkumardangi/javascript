/* Function Parameters --------------------------------------------------------------*/

// Defining function
function sum(a, b) {
  console.log(a + b);
}

// Calling function
sum(10, 20);



/* Default Parameters: Assign default values to the parameters ---------------------*/

function guest(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}

// guest('Niraj');



/* Rest Parameters: Accept infinite number of parameters ---------------------------*/

function sum(...num) {
  return num.reduce((sum, num) => sum + num, 0);
}

const sum1 = sum(1, 2, 3, 4, 5);
const sum2 = sum(1, 4, 5);
const sum3 = sum();

console.log(sum1);
console.log(sum2);
console.log(sum3);




/* Object as parameters: object is a reference type -------------------------------*/

// Function that modifies properties of an object
function modifyObject(obj) {
	obj.name = "John";
	obj.age = 25;
	console.log("Inside function: " + JSON.stringify(obj));
}

let person = {
	name: "Alice",
	age: 30
};

// Calling the function with an object 'person' as a parameter
modifyObject(person);

// console.log("Outside function: " + JSON.stringify(person));





/* Array as parameters: array is a reference type ---------------------------------*/

/* // Original Array
let originalArray = [1, 2, 3, 4];

// Creating a reference to the original array
let referenceArray = originalArray;

// Modifying the reference array
referenceArray.push(5);

console.log("Original Array:", originalArray);
console.log("Reference Array:", referenceArray); */

/* Array as parameters: array is a reference type ---------------------------------*/

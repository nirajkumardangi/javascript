// Destructuring: makes it possible to unpack values from arrays, or properties from objects, into distinct variables

// Array Destructuring -------------------------------------------------------------
let [a, b] = [10, 20, 30, 40];
console.log(a, b); // 10 20


// 1. Extracting specific item-------------------
let array = [10, 20, 30, 40, 50, 60];
let [a0, ,c2, ,e4] = array;
console.log([a0, ,c2, ,e4]);  // [ 10, <1 empty item>, 30, <1 empty item>, 50 ]


// 2. Default values-----------------------------
const numbers = [10, 100];
let [num1, num2 = 20, num3 = 30] = numbers;
console.log(num1, num2, num3); // 10 100 30


// Object Destructuring -------------------------------------------------------------

const person = { 
    name: "Bob", 
    age: 35, 
    city: "Ranchi" 
};

const { name, age } = person; 
console.log(name, age); // Bob 35


// 1. Assigning to new variable names ---------------------
const {name: fullName, age: currentAge} = person;
console.log(fullName, currentAge); // Bob 35

// 2. Assigning to new variable names and providing default values
const person1 = {name: 'john', age: 25, city: "ranchi"} 
const {name: fName = "Niraj", age: currAge = 30, city = "unknown" } = person1;
console.log(fName, currAge, city); // john 25 ranchi



// 3. Default value of object -----------------------------
const person2 = { name1: 'John' };

// Destructuring assignment with default values
const { name1, age1 = 30, city1 = 'Unknown' } = person2;

console.log(name1); // Output: 'John'
console.log(age1);  // Output: 30 (default value)
console.log(city1); // Output: 'Unknown' (default value)



// Handling undefined values ------------------------------

/* const person = { name: 'Jane' };

// Destructuring without default values
const { name, age, city } = person;

console.log(name); // Output: 'Jane'
console.log(age);  // Output: undefined
console.log(city); // Output: undefined */



// Using Default Values with Function Parameters ----------

function printInfo({name, age=25, city="Null"}) {
    console.log(`Name: ${name}, Age: ${age}, city: ${city}`);
}

const p1 = {name: "Niraj", age: 22, city: "Ranchi"}; // Name: Niraj, Age: 22, city: Ranchi
const p2 = {name: "John Doe"}; // Name: John Doe, Age: 25, city: Null

printInfo(p1);
printInfo(p2);


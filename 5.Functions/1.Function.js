/* Function Parameter -------------------------------------------------------------*/

function square(number) {
    return number * number;
}

console.log(square(5));




/* 1.Simple Parameter -------------------------------------------------------------*/
// Function that takes a parameter and adds 5 to it

function addFive(num) {
    num += 5;
    console.log("Inside function: " + num);
}

let number = 10;

// Calling the function with a number as a argument
addFive(number);

console.log("Outside function: " + number);




/* 2.Object as Parameter ----------------------------------------------------------*/
// Function that modifies properties of an object

function modifyObject(obj) {
    console.log(obj);
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

console.log("Outside function: " + JSON.stringify(person)); 

/* the modifyObject function modifies the properties of the person object passed to it, and these changes are reflected when you log the person object outside the function. This happens because objects are passed by reference in JavaScript, so modifications made within the function affect the original object. */




/* 3.Array as Parameter ---------------------------------------------------------- */
// Function that modifies the array

function modifyArray(arr) {
    arr.pop(); // Removes the last item
    arr.push("New Item");
    console.log("Modified Array:", myArray);
}

let myArray = ["Item 1", "Item 2", "Item 3"];

modifyArray(myArray);

console.log("Original Array:", myArray);
// OUTPUT:::
// Modified Array: [ 'Item 1', 'Item 2', 'New Item' ]
// Original Array: [ 'Item 1', 'Item 2', 'New Item' ] 



/* Nested Function --------------------------------------------------------------*/
//==> A function can call itself --

function factorial(n) {
    console.log(n);
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(4));



/* Nested Function --------------------------------------------------------------*/

 function outer() {
    console.log("Outer function");
    function inner() {
        console.log("Inner function");
    }
    inner()
}

outer();



/* Closer Function --------------------------------------------------------------*/

/* function outer(x) {
    function inner(y) {
        return x + y;
    }
    return inner; 
}

const outerReturn = outer(10);

console.log(outerReturn);
console.log(outerReturn());

console.log(outerReturn(3));
console.log(outerReturn(4)); */



// Returning a value
function checkAge(age) {
    if(age >= 18) {
        console.log(age);
        return age;
    } else {
        let x = 'permission required!';
        return x;
    }
    // return age;
}

let x = checkAge(19);

console.log(x);



function checkAge(age) {
  return (age > 18) ?? console.log('Did parents allow you?');
}

checkAge(19);
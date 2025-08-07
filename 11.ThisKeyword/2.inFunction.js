// in Function

"use strict";

function sayHello() {
    console.log(`Hello, ${this.name}!`);
}

const obj = {
    name: "Alice",
    speak: sayHello
};

// obj.speak(); // Output: Hello, Alice!


function myFunction() {
    console.log(this); // In most browsers, this will print the window object
}

myFunction();
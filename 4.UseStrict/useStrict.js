"use strict";

// Strict mode is applied to the code from this point onward


// Example 1: Variables must be declared with "var", "let", or "const"
undeclaredVar = "This will throw an error in strict mode";


// Example 2: Octal literals are not allowed
var octalLiteral = 0123; // Error in strict mode


// Example 3: Deleting variables, functions, or function arguments is not allowed
var x = 10;
delete x; // Error in strict mode



// Example 4: Duplicate parameter names in function declarations are not allowed
function duplicateParameters(x, x) {
  "use strict";
  // Error in strict mode
}



// Example 5: The "with" statement is not allowed
with ({ prop: 10 }) {
  console.log(prop); // Error in strict mode
}



// Example 6: The "this" value is undefined in functions that are not methods
function strictFunction() {
  console.log(this); // Output: undefined in strict mode
}

strictFunction();
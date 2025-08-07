// LET, CONST, VAR -->
let fname = "Niraj Kumar";
var city = "Ranchi";

function add() {
   if(true) {
    var x = 10;
    let y = 20;
   }
   console.log(x);
   console.log(y);
}

// console.table([fname, city]);
// var add = x + y; 
console.log(add());

/*******************************************************************************************/

//==> HOISTED ->
console.log(a); // undefined
var a = 5;

// console.log(b); // ReferenceError: b is not defined
// let b = 10;

/*******************************************************************************************/

//== SCOPE ->
function example() {
   if (true) {
      var x = 10; // Function-scoped with var
      let y = 20; // Block-scoped with let
   }
   console.log(x); // 10
   console.log(y); // ReferenceError: y is not defined
}
// example();

/*******************************************************************************************/

// Declare a variable without initial value assignment 
let name;

// Declare a variable with initial value assignment 
const age = 30;

// Declare multiple variables on a single line 
let firstName = "Jane", lastName = "Doe";

// Assign value to the variable declared without initial value 
fname = "John";

// Use descriptive variable names following camelCase and snake_case conventions 
const userFirstName = "John"; const user_last_name = "Doe";

console.log(fname, age, firstName, lastName, userFirstName, user_last_name); 
// Output: John 30 Jane Doe John Doe


/*******************************************************************************************/
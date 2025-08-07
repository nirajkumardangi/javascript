/* Function stack / Call stack --------------------------------------------------------
The JS call stack is a data structure that keeps track information of the functions being called and executed */

function firstFunction() {
    console.log("Inside firstFunction");
    secondFunction();
    console.log("Back inside firstFunction");
}

function secondFunction() {
    console.log("Inside secondFunction");
}

firstFunction();


/* Explanation:--------------------------------------------------

1. When you execute the script, the JavaScript engine creates a global execution context and pushes it onto the call stack. The global execution context represents the entire script.

2. The script starts executing, and when it encounters the ‘firstFunction()’ call, a new execution context for ‘firstFunction’ is created and pushed onto the call stack.

Call Stack:
- firstFunction
- Global


3. Inside ‘firstFunction’, the ‘console.log("Inside firstFunction")’ is executed, and then ‘secondFunction()’ is called. This triggers the creation of a new execution context for secondFunction, and it is pushed onto the call stack.

Call Stack:
- secondFunction
- firstFunction
- Global


4. Inside ‘secondFunction’, the ‘console.log("Inside secondFunction")’ is executed. Once the function completes, its execution context is popped off the stack.

Call Stack:
- firstFunction
- Global


5. Control returns to ‘firstFunction’, and the line ‘console.log("Back inside firstFunction")’ is executed. Once ‘firstFunction’ completes, its execution context is popped off the stack.

Call Stack:
- Global

6. The script execution is complete, and the global execution context is popped off the stack.
Call Stack: (Empty) */




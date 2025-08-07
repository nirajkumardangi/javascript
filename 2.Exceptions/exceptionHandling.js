// 1. Throw statement -->

// Example of using throw statement
// function divideNumber(a, b){
//     if (b === 0){
//         throw new Error("Can't divide by zero!");
//     }
//     return a / b;
// }

// // Using the function with try...catch to handel the thrown error
// try {
//     // console.log(divideNumber(0, 1));
// } catch (error) {
//     console.error('Error: ', error.message);
// }




// try..catch..finally statement -->
try {
    // code that might throw an exception
    let result = undefinedVariable + 5;
    console.log("This line will not be executed if an exception occurs");
} catch(error) {
    // code to handel the exception
    console.error("An Error Occurred: ", error.message);
} finally {
    // code that will be executed regardless of wether an exception is occurred or not
    console.log("This will always be executed"); 
}

// OUTPUT:::
// An Error Occurred:  undefinedVariable is not defined
// This will always be executed
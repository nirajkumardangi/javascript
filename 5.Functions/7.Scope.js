// Global scope -----------------------------------------------------------------
/* var globalVar = "I am global";

function exampleFunction() {
    console.log(globalVar); // Accessible in any function
}

exampleFunction(); */


// Function scope ----------------------------------------------------------------

/* function exampleFunction() {
    var localVar = "I am local";
    console.log(localVar); // Accessible only in exampleFunction
}

exampleFunction();
// console.log(localVar); // This would result in an error */


// Block scope -------------------------------------------------------------------

/* if (true) {
    let blockVar = "I am block-scoped";
    console.log(blockVar); // Accessible only in this block
}

// console.log(blockVar); // This would result in an error */


// Nested scope ------------------------------------------------------------------

/* function outer() {
    var outerVar = "I am outer";

    function inner() {
        var innerVar = "I am inner";
        console.log(outerVar + " and " + innerVar);
    }

    inner();
}

outer(); */

function outerFunction() {
    var outerVariable = "I am outer!";

    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from the outer scope
    }

    innerFunction();
}

outerFunction();


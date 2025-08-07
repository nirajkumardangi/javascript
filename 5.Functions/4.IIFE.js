/* Traditional IIFE -----------------------------------------------------*/
// (function(){
//     var greet = 'Good Morning!';
//     console.log(greet);
// })();


/* ES6 IIFE -------------------------------------------------------------*/
// (()=>{console.log("Hello World!")})();


/* Anonymous IIFE -------------------------------------------------------*/
// (function () {
//     var message = "Good Morning!";
//     console.log(message);
// })();



/* Named IIFE -----------------------------------------------------------*/
// (function greet() {
//     var name = "Alice";
//     console.log("Hello, " + name + "!");
// })();
// // Output: Hello, Alice!



/* Return Value ---------------------------------------------------------*/
// var result = (function () {
//     var x = 10;
//     var y = 20;
//     return x + y;
// })();

// console.log(result); // Output: 30


var MyModule = (function () {
    var privateVariable = "I'm private!";
    function privateFunction() {
        //...
    }
    return {
        publicFunction: function () {
            //...
        }
    };
})();

console.log(MyModule);




/* 1. Isolating Code ----------------------------------------------------------------
When integrating third-party scripts or libraries, you can wrap them in an IIFE to isolate their functionality and avoid conflicts with your code. */


// // Aapki application code (MyApp)
// var MyApp = (function () {
// 	// Aap Ki application ka logic yahaan hota hai

// 	return {
//     	// Sirf wohi kuch functions expose karo jo public hone chahiye
// 	};
// })();

// // Third-party library wrapped in IIFE (ThirdPartyLibrary)
// var ThirdPartyLibrary = (function () {
// 	// Third-party library ka logic yahaan hota hai

// 	return {
//     	// Sirf wohi kuch functions expose karo jo public hone chahiye
// 	};
// })(); 




/* 2. Reducing Global Variables -------------------------------------------------------
To minimize the number of global variables in your application, you can use IIFE to define modules or components, exposing only a limited interface to the global scope. */

// var MyModule = (function () {
//     var privateCounter = 0;

//     function incrementCounter() {
//         privateCounter++;
//     }

//     return {
//         increment: function () {
//             incrementCounter();
//             incrementCounter();
//             incrementCounter();
//             incrementCounter();
//         },
//         getCounter: function () {
//             return privateCounter;
//         }
//     };
// })();

// MyModule.increment();
// console.log(MyModule.getCounter()); // Output: 4





/* 3. Managing Initialization ---------------------------------------------------------
IIFE is useful for initializing your application by configuring settings, setting up event listeners, or bootstrapping the application. */


/* var MyApp = (function () {
    // Private variables
    var config = {
        apiUrl: "https://api.example.com",
        debugMode: false
    };

    // Private functions
    function initialize() {
        // Perform initialization tasks, such as setting up event listeners
        if (config.debugMode) {
            console.log("Debug mode is enabled");
        }
    }

    // Public interface
    return {
        start: function () {
            initialize();
            // Additional logic to start the application
        },
        getConfig: function () {
            return config;
        }
    };
})();

// Start the application
MyApp.start();

// Access configuration
console.log(MyApp.getConfig()); */




/* 3. Managing Initialization ---------------------------------------------------------
IIFE is useful for initializing your application by configuring settings, setting up event listeners, or bootstrapping the application. */


/* var GharBananeWala = (function () {
    // Private variables
    var design = {
        kamre: 3,
        size: 'bada'
    };

    // Private functions
    function initialize() {
        // Design aur configuration set karo
        console.log("Ghar ka design set ho gaya!");
    }

    // Public interface
    return {
        start: function () {
            initialize();
            // Aur baki kaam start karo
        },
        getDesign: function () {
            return design;
        }
    };
})();

// Ghar banane ka kaam shuru karo
GharBananeWala.start();

// Design check karo
console.log(GharBananeWala.getDesign()); */


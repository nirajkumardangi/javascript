// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }

// const myFunc = makeFunc();
// myFunc();



// Closure

// function x() {
//     let a = 7;
//     return function y() {
//         console.log(a);
//     }
//     // a = 100;
//     // return y;
// }

// let z = x();
// // console.log(z);
// z();




// Closure - level 2

/* function z() {
    let b = 900;
    function x() {
        let a = 7;
        function y() {
            console.log(a, b);
        }
        y();
    }
    x();
}

z(); */

// Scope:::
/**
 * Local
 *  - this: Windows
 * Closure (x)
 *  - a: 7
 * Closure (z)
 *  - b: 900
 * Global
 */


/* const counter = (function () {
    let privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }

    return {
        increment() {
            changeBy(1);
        },

        decrement() {
            changeBy(-1);
        },

        value() {
            return privateCounter;
        },
    };
})();

console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1. */



/* // loop in closure: with var keyword
for (var i = 1; i <= 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, i * 1000);
}


// loop in closure: with let keyword
for (var i = 1; i <= 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, i * 1000);
} */

// loop in closure: with var keyword (IIFE)
for (var i = 1; i <= 5; i++) {
    (function(j) {
      setTimeout(function() {
        console.log(j); // Outputs: 1, 2, 3, 4, 5
      }, i * 1000);
    })(i);
}
  
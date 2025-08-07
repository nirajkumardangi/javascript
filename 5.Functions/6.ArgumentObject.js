/* Argument Objects ---------------------------------------------------------- */
// function argumentObj(a, b) {
//     console.log(arguments);
//     console.log(arguments[1]);
//     console.log(arguments[3]);

// }

// argumentObj(1, 2, 3, 'four');

/* Accessing Argument one by one like array --------------------------------- */

// function sum() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return total;
// }

// console.log(sum(5, 5, 5 , 5));

/* Convert Argument to Array ------------------------------------------------*/

// function myNames() {
//   console.log(Array.from(arguments));
//   console.log([...arguments]);
// }

// myNames('niraj', 'dangi', 'kumar');

/* Example-1: sum of all number --------------------------------------------*/

function sum() {
  const myNum = [...arguments];
  return myNum.reduce((acc, current) => {
    acc + current;
    console.log(acc);
  }, 0);
}

const total = sum(10, 20, 30, 40, 50);
console.log(total);

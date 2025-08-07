/* Recursion -----------------------------------------------------------------------------------
Recursion is a process of calling itself again and again. A function that calls itself is called a recursive function.  */

// Recursion Basic Example:
function countDown(fromNumber) {
  console.log(fromNumber);

  let nextNumber = fromNumber - 1;

  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}

//// function call
// countDown(3);

//:: OUTPUT:
// 3;
// 2;
// 1;

// Calculate the sum of n natural numbers
function sum(n) {
  if (n < 1) {
    // 2 < 1 - false
    return n;
  }
  return n + sum(n - 1);
}

//:: Output
console.log(sum(3)); //:: Output: 6

// Find Factorial Using Recursive Function
function factorial(n) {
  // Base case: factorial of 0 or 1 is 1
  if (n === 0 || n === 1) {
    return 1;
  } else {
    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
  }
}

//// function call
console.log(factorial(5)); // Outputs: 120

// Infinite called function -------------------------------------------------------------
let num = 0;
function show() {
  console.log('Hii', num);
  num++;
  show();
}

//// function call
// show();

/* Output:::
Hii 0
...
...
Hii 10350

RangeError: Maximum call stack size exceeded */

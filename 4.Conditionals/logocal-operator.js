// Short-circuit evaluation. ----------------

// OR: first operand is falsy then return second operand
true || console.log('Not printed'); //
false || console.log('Printed'); // Printed

// AND: first operand is truthy then return second operand;
console.log(1 && 0); // 0
console.log(1 && 5); // 5
console.log(0 && 5); // 0


/***
 *
 * Nullish coalescing operator '??' ---------
 * a ?? b : when a is defined then return a otherwise b.
 * In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.
 *
 * */

let age;
let user = 'niraj dangi';
let isLoggedIn;

console.log(age ?? 'age not defined');   // age not defined
console.log(user ?? 'user not defined'); // niraj dangi
console.log(isLoggedIn ?? 'logged in');  // logged in
console.log(isLoggedIn && "logged in");  // undefined
console.log(isLoggedIn || "logged in");  // logged in
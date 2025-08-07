// TYPE CONVERSION

//*** TO STRING -->
let number = '23';
let toString = String(number); 

// console.log(number);
// console.log(toString);
// console.log(typeof toString);

//*** TO NUMBER -->
let fname = 'Niraj87';
let toNumber = Number(fname);

// console.log(fname);
// console.log(toNumber);
// console.log(typeof toNumber);

//*** TO BOOLEAN -->

let isLoggedIn = 1;
let toBoolean = Boolean(isLoggedIn);

// console.log(isLoggedIn);
// console.log(toBoolean);
// console.log(typeof toBoolean);


// *** TYPE CONVERSION ->
console.log('5' + 1);   // 51
console.log(1 + '5');   // 15
console.log(1 + 5 + 'a');   // 6a
console.log('a' + 1 + 5);   // a15
console.log('a' + (1 + 5));   // a6


//*** USING NEW OPERATOR ->
const str = new String("Niraj");
const num = new Number(100);  

// console.log(typeof str);
// console.log(typeof num);

const numX = (1+3, 3+1); 
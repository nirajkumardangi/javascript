/* Spread: The spread operator (...) is used to spread the elements of an iterable */

//==> ARRAY SPREAD ===================================================

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const spreadArray = [...array1, ...array2];
// console.log(spreadArray); // [ 1, 2, 3, 4, 5, 6 ]


//==> OBJECT SPREAD ===================================================
const obj1 = {a: 1, b: 2};
const obj2 = {c: 1, d: 2};
const obj3 = {...obj1, ...obj2};

console.log(obj3); // { a: 1, b: 2, c: 1, d: 2 }


// // Example : Only strings have enumerable own properties ---------
// const obj = { ...true, ..."test", ...10 };
// console.log(obj);
// // { '0': 't', '1': 'e', '2': 's', '3': 't' }


// Copying an array ----------------------------------------------
// const arr = [1, 2, 3];
// const arr2 = [...arr]; // like arr.slice()

// arr2.push(4);

// console.log(arr);
// console.log(arr2);



// Position varying ----------------------------------------------
// let arr1 = [0, 1, 2];
// const arr2 = [3, 4, 5];

// arr3 = [...arr2, ...arr1];
// console.log(arr3); // [3, 4, 5, 0, 1, 2]
// console.log(...arr1, ...arr2); // 0 1 2 3 4 5


// String character spread ---------------------------------------
// let str = 'niraj';
// console.log(...str); // n i r a j
// console.log(Array.from(str));


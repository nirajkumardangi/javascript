// Dates

let myDate = new Date;
console.log(myDate.toString()); // Fri Dec 29 2023 14:51:33 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Fri Dec 29 2023
console.log(myDate.toLocaleString()); // 29/12/2023, 2:51:33 pm
console.log(myDate.toLocaleDateString()); // 29/12/2023
console.log(myDate.toJSON()); // 2023-12-29T09:21:33.191Z
console.log(myDate.toISOString()); // 2023-12-29T09:21:33.191Z

console.log(typeof myDate); // object

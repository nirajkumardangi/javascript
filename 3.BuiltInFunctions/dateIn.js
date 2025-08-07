// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


/* ------------------------------------------------------------------------- */


let myCreatedDate1 = new Date(2023, 0, 23);
console.log(myCreatedDate1.toLocaleString()); // 23/1/2023, 12:00:00 am

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate2.toLocaleString()); // 23/1/2023, 5:03:00 am

let myCreatedDate3 = new Date("2023-01-14")
console.log(myCreatedDate3.toLocaleString()); // 14/1/2023, 5:30:00 am

let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate3.toLocaleString()); // 14/1/2023, 5:30:00 am


/* ------------------------------------------------------------------------- */


console.log(Date.now()); // 1703842272828
console.log(myCreatedDate.getTime()); // 1673634600000 
console.log(Math.floor(Date.now() / 1000)); // 1703842272


/* ------------------------------------------------------------------------- */


let newDate = new Date()
console.log(newDate); // 2023-12-29T09:33:18.445Z
console.log(newDate.getMonth() + 1);  // 12 
console.log(newDate.getDay()); // 5


console.log(`${newDate.getDay()} and the time `);


let obj = newDate.toLocaleString('default', {
    // year: "numeric",  // 2023
    year: "2-digit",  // 23

    // weekday:  "short",  // Fri
    // weekday: "narrow",  // F
    weekday: "long",  // Friday 

})

console.log(obj);


// UTC : Universal time
const today = new Date();
const year = today.toUTCString();
console.log(year);

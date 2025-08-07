// promises methods -> promise.all()

// 1. Resolved Promises Example

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('first promise has resolved');
//         resolve(10);
//     }, 1 * 1000);
// });

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('second promise has resolved');
//         resolve(20);
//     }, 2 * 1000);
// });

// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('third promise has resolved');
//         resolve(30);
//     }, 3 * 1000);
// });

// let total = 0;
// Promise.all([p1, p2, p3])
//     .then((result) => {

//         for (var i in result) {
//             total += result[i];
//         }

//         console.log(`Result ${result}`);
//         console.log(`Total ${total}`);
//     })
//     .catch((error) => {
//         console.log(error);
//     })



// 1. Rejected Promises Example

let promiseCall = function (data, message) {
    return function (resolve, reject) {
        setTimeout(() => {
            console.log(`${message} promise has resolved`);
            resolve(data);
        }, data * 100);
    }
}

const p1 = new Promise(promiseCall(10, "first"));
const p2 = new Promise(promiseCall(20, "second"));
const p3 = new Promise(promiseCall(30, "third"));
const p4 = new Promise(function (resolve, reject) {
    reject("4th promise rejected");
});

let total = 0;
Promise.all([p1, p2, p3, p4])
    .then(console.log)  // never execute
    .catch(console.log);
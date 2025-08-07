/** Scenario
 * 1. register user
 * 2. send email
 * 3. login user
 * 4. get user data
 * 5. display user data
 */

/* function register() {
    console.log('register end');
};
function sendEmail() {
    setTimeout(function(){
        console.log('email send');
    }, 2000)
};
function loginUser() {
    console.log('user logged-in');
};
function getUserData() {
    console.log('user data get it');
};
function displayUserData() {
    console.log('user data displayed');
};

register();
sendEmail();
loginUser();
getUserData();
displayUserData();

console.log('other application work'); */

// by using traditional functions this not possible to solve this scenario.

/* ************************************************************************ */
// CALLBACKS

// function register(callback) {
//     setTimeout(function () {
//         console.log('register end');
//         callback();
//     }, 1000)
// };

// function sendEmail(callback) {
//     setTimeout(function () {
//         console.log('email send');
//         callback();
//     }, 5000)
// };

// function loginUser(callback) {
//     setTimeout(function () {
//         console.log('user logged-in');
//         callback();
//     }, 1000)
// };

// function getUserData(callback) {
//     setTimeout(function () {
//         console.log('user data get it');
//         callback();
//     }, 1000)
// };

// function displayUserData() {
//     console.log('user data displayed');
// };

// // callback hell
// register(function () {
//     sendEmail(function () {
//         loginUser(function () {
//             getUserData(function () {
//                 displayUserData();
//             });
//         });
//     });
// });

// console.log('other application work');

// by using callbacks solve this problem but this is not efficient way. efficient way to solve this problem (asynchronous code) by using promises or async/await

// EXAMPLE 2: CALLBACK HELL ----------------------------------------------------------------------

console.log('Start!');

setTimeout(() => {
  console.log('Executing Function 1');
  setTimeout(() => {
    console.log('Executing Function 2');
    setTimeout(() => {
      console.log('Executing Function 3');
      setTimeout(() => {
        console.log('Executing Function 4');
      }, 1000);
    }, 3000);
  }, 1000);
}, 1000);

console.log('End!');

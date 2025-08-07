function register() {
    // promises creation
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // console.log('register end');
            resolve('Registration successful');
        }, 1000)
    })
};

function sendEmail() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // return reject("error while sending email");
            console.log('email send');
            resolve();
        }, 1000)
    })
};

function loginUser() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('user logged-in');
            resolve();
        }, 2000)
    })
};

function getUserData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('user data got it');
            resolve();
        }, 2000)
    })
};

function displayUserData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('user data displayed');
            resolve();
        }, 1000)
    })
};

// promise chain / consumption --------------

// register()
//     .then(sendEmail)
//     .then(loginUser)
//     .then(getUserData)
//     .then(displayUserData)
//     .catch((err) => {
//         console.log('Error:' + err);
//     })




// async/await: syntactic sugar of promises, help us to write modular code ----------------------------

// async function authenticate() {
//     try {
//         const registrationMessage = await register();
//         console.log(registrationMessage); // log the message from register
//         await sendEmail();
//         await loginUser();
//         await getUserData();
//         await displayUserData();
        
//         // by default return promises 
//     } catch (error) {
//         console.log('Error: '+ error);
//         // throw new Error();
//     }
// }

// authenticate()
//     .then(() => {
//         console.log('✔ All Done');
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// console.log('other application work');




// Real world use case ---------------------------------------------------------------------------------

// function loadImage(url) {
//   return new Promise((resolve, reject) => {
//     const img = new Image();
//     img.src = url;

//     img.onload = () => {
//       console.log(img);
//       resolve(img);
//     };

//     img.onerror = () => {
//       reject(new Error(`Failed to load image from ${url}`));
//     };
//   });
// }

// function displayImage(img) {
//   console.log(img);
//   document.body.appendChild(img);
//   console.log('Image displayed successfully');
// }

// // Using Promises to load and display the image
// loadImage(
//   'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp'
// )
//   .then((img) => {
//     displayImage(img);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });

console.log("start");

function function1(){
    console.log("function 1 called");
}

function function2(callback){
    console.log("function 2 called");
    callback();
}

function2(function1);

console.log('End');
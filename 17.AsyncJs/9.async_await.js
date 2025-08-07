// return promise
function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('data '+ dataId);
            resolve('success');
        }, 2000);
    });
}

// async/await
// async function getAllData(){
//     console.log('getting data 1....');
//     await getData(1);
//     console.log('getting data 2....');
//     await getData(2);
//     console.log('getting data 3....');
//     await getData(3);
//     console.log('getting data 4....');
//     await getData(4);
//     console.log('getting data 5....');
//     await getData(5);
// }
// getAllData();

// IIFE (immediately invoked function expression)
(async function(){
    console.log('getting data 1....');
    await getData(1);
    console.log('getting data 2....');
    await getData(2);
    console.log('getting data 3....');
    await getData(3);
    console.log('getting data 4....');
    await getData(4);
    console.log('getting data 5....');
    await getData(5);
})();
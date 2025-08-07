// traditional way ---------------------------------------------------------------------
const arr = [2, 2, 2];

function findSum(arr) {
    let sum = 0
    for (let i=0; i < arr.length ; i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(findSum(arr));


// By using reduce() method to sum of all array elements --------------------------------
const arr1 = [2, 2, 2, 2, 2];
const output = arr1.reduce((acc, curr) => {
    return acc = acc + curr;
}, 0);

console.log(output);
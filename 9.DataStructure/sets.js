// Creating a set
let mySet = new Set();

// adding element 
mySet.add("niraj");
mySet.add("rani");
mySet.add("raju");
mySet.add("raju");
console.log([...mySet]);
console.log(mySet);

// delete element
mySet.delete("niraj");
console.log(mySet);

// element is available or not
console.log(mySet.has("raju"));

// remove all element 
mySet.clear();
console.log(mySet);

// iterate over a sets
let fruits = new Set(["apple", "mango", "grapes", 1, 2, 2, 3, 3]);
// console.log([fruits]);
fruits.forEach((value) => {
    console.log(value);
})

// find size of the set
console.log(`Size of the set is ${fruits.size}`);
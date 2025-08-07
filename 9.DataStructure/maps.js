// Map creation *****************************************************************
const myMap = new Map([
    ["apple", "red"],
    ["banana","yellow"],
    ["grape","purple"],
]);

// console.log(myMap);

// output:::
// Map(3) { 'apple' => 'red', 'banana' => 'yellow', 'grape' => 'purple' }


// set and delete element 
myMap.set("apple", "red");
myMap.delete("apple");
console.log(myMap);


// Iterate 
myMap.forEach((value, key) => {
    console.log(`Keys ${key}, value ${value}`);
})


// Adding Values *****************************************************************

// Adding a key-value pair to the map
myMap.set("name", "John");
// console.log(myMap); // Output: Map(4) {...}

// Retrieving a value using a key
// console.log(myMap.get("name")); // Output: John


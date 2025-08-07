/* 1. Map.clear():
Definition: The clear() method removes all key-value pairs from the Map object. */

// let myMap = new Map();
// myMap.set('key1', 'value1');
// myMap.set('key2', 'value2');
// myMap.clear();
// console.log(myMap);

// Output:::
// Map(0) {} 


/* 2. Map.delete():
Definition: The delete(key) method removes the element associated with the specified key from the Map object. */

// let myMap = new Map();
// myMap.set('key1', 'value1');
// myMap.delete('key1');
// console.log(myMap);

// Output:::
// Map(0) {}
// Now myMap does not contain 'key1'


/* 3. Map.entries():
Definition: The entries() method returns a new Iterator object that contains an array of [key, value] for each element in the Map object, in insertion order. */

// const myMap = new Map([
//     ["apple", "red"],
//     ["banana","yellow"],
//     ["grape","purple"],
// ]);
// let iterator = myMap.entries();
// console.log(iterator);
// for (let entry of iterator) {
//   console.log(entry[0], entry[1]);
// }

// Output::: 
// apple red 
// banana yellow
// grape purple



/* 4. Map.forEach():
Definition: The forEach(callbackFn [, thisArg]) method executes a provided function once for each key-value pair present in the Map object, in insertion order. */

// const myMap = new Map([
//     ["apple", "red"],
//     ["banana","yellow"],
//     ["grapes","purple"],
// ]);

// myMap.forEach((value, key) => {
//     console.log(key, value);
// });



/* 5. Map.get():
// Definition: The get(key) method returns the value associated with the specified key in the Map object, or undefined if the key is not found. */

// const myMap = new Map([
//     ["apple", "red"],
//     ["banana","yellow"],
//     ["grapes","purple"],
// ]);

// console.log(myMap.get('apple')); // Output: value1
// console.log(myMap.get('mango')); // Output: undefined



/* 6. Map.has():
Definition: The has(key) method returns a boolean indicating whether the Map object contains a key. */

// const myMap = new Map([
//     ["apple", "red"],
//     ["banana","yellow"],
//     ["grapes","purple"],
// ]);

// console.log(myMap.has('apple')); // true
// console.log(myMap.has('mango')); // false



/* 7. Map.keys():
Definition: The keys() method returns a new Iterator object that contains the keys for each element in the Map object, in insertion order. */

// const myMap = new Map([
//     ["apple", "red"],
//     ["banana","yellow"],
//     ["grapes","purple"],
// ]);

// let iterator =  myMap.keys();

// for (let key of iterator) {
//     console.log(key);
// }



/* 8. Map.set():
Definition: The set(key, value) method adds or updates an element with a specified key and value to a Map object. */

// const myMap = new Map();
// myMap.set('apple', 'red');
// myMap.set('banana', 'orange');
// myMap.set('grapes', 'purple');
// console.log(myMap);


/* 9. Map.values():
Definition: The values() method returns a new Iterator object that contains the values for each element in the Map object, in insertion order. */

// const myMap = new Map([
//     ["apple", "red"],
//     ["banana","yellow"],
//     ["grapes","purple"],
// ]);

// let iterator = myMap.values(); 
// for (let value of iterator) {
//     console.log(value);
// }
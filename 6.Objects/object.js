// define object
let obj = new Object(); // object constructor syntax
let user = {} // object literal syntax

// add properties
user = {
  name: 'Niraj',
  age: 22
}

user.isAdmin = true; // add value
delete user.age; // delete value
user["like birds"] = true; // add multi-word property name
let key = prompt("my name is niraj", "name");

console.log(user[key]);


console.log(user);

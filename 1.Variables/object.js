// 1. An object is a collection of key-value pairs.
let address = {
  village: 'Chatakpur',
  city: 'Ranchi'
}

// 2. Use the dot notation (.) or array-like notation ([]) to access the property of an object.
let address1 = {
  village: 'Damdoiya',
  city: 'Chatra',
  'pin code': 825401,
};

// console.log(address1); // { village: 'Damdoiya', city: 'Chatra', 'pin code': 825401 }
// console.log(address1['pin code']); // 825401
// console.log(address1['Pin code']); // undefined


// 3. Use the delete operator to remove a property from an object.
let address2 = {
  village: 'Damdoiya',
  city: 'Chatra',
  'pin code': 825401,
};

delete address2['pin code'];

console.log(address2);


// 4. Use the in operator to check if a property exists in an object.
let address3 = {
  village: 'Damdoiya',
  city: 'Chatra',
  'pin code': 825401,
};

console.log('pin code' in address3);

const text = "Hello, 123 World";

// Any one character between the characters.
const pattern1 = /[0-9]/;
const pattern2 = /[4-9]/;
console.log(pattern1.test(text)); // true
console.log(pattern2.test(text)); // false

// Any one character not between the bracket.
const pattern3 = /[^0-9]/;
console.log(pattern3.test(text)); // true

// It matches any decimal digit from 0 through 9
const pattern4 = /[0-9]/g;
console.log(text.match(pattern4)); // [ '1', '2', '3' ]

// It matches any character from lowercase a through lowercase z
const pattern5 = /[a-z]/g;
console.log(text.match(pattern5)); // ['e', 'l', 'l', 'o', 'o', 'r', 'l', 'd' ]

// It matches any character from uppercase A through uppercase Z
const pattern6 = /[A-Z]/g;
console.log(text.match(pattern6)); // [ 'H', 'W' ]

// It matches any character from lowercase a through uppercase Z
const pattern7 = /[a-zA-Z]/g;
console.log(text.match(pattern7)); // error
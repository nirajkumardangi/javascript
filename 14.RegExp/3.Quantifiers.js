// Sample text
const texts = ["apple", "peach", "pineapple", "p", "pp", "ppp", "pppp", "orange", "grape"];

// Regular expression patterns
const pattern1 = /p+/;       // Matches any string containing at least one p
const pattern2 = /p*/;       // Matches any string containing zero or more p's
const pattern3 = /p?/;       // Matches any string containing one or more p's
const pattern4 = /p{2}/;     // Matches any string containing a sequence of 2 p's
const pattern5 = /p{2,3}/;   // Matches any string containing a sequence of 2 or 3 p's
const pattern6 = /p{2,}/;    // Matches any string containing a sequence of at least 2 p's
const pattern7 = /p$/;       // Matches any string with p at the end
const pattern8 = /^p/;       // Matches any string with p at the beginning

// Function to test and display matches
console.log(pattern1.test(texts));  // true
console.log(pattern2.test(texts));  // true
console.log(pattern3.test(texts));  // true
console.log(pattern4.test(texts));  // true
console.log(pattern5.test(texts));  // true
console.log(pattern6.test(texts));  // true
console.log(pattern7.test(texts));  // false
console.log(pattern8.test(texts));  // false

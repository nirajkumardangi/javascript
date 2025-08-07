// 1. test() -> Checks if a pattern is present in a string. Returns true if a match is found, false otherwise.
const pattern = /world/;
console.log(pattern.test('Hello, world!')); // Output: true

// 2. exec() -> Searches a string for a match and returns the result as an array. If no match is found, it returns null.
const pattern1 = /world/;
console.log(pattern1.exec('Hello, world!')); // Output: [ 'world', index: 7, input: 'Hello, world!', groups: undefined ]

// 3. match() -> Returns an array containing all matches. If no matches are found, it returns null.
const text = 'Hello, 123 world!';
const pattern2 = /\d+/g; // Matches one or more digits
console.log(text.match(pattern2)); // Output: [ '123' ]

// 4. search() -> Returns the index of the first match. Returns -1 if not found.
const pattern3 = /world/;
console.log('Hello, world! world!'.search(pattern3)); // Output: 7

// 5. replace() -> Replaces matches with a specified replacement.
const pattern4 = /world/;
console.log('Hello, world!'.replace(pattern4, 'Universe')); // Output: Hello, Universe!

// 6.splits() -> Splits a string into an array of substrings based on matches.
const pattern5 = /,/;
console.log('apple,orange,banana'.split(pattern5)); // Output: [ 'apple', 'orange', 'banana' ]
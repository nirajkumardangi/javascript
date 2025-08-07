// Sample text
const texts = [
    "apple",
    "123",
    "Hello World",
    "12 34",
    "special@character",
    "pumpkin",
    "p at the beginning",
];

// Regular expression patterns
const pattern1 = /./;  // Matches any single character
const pattern2 = /\s/; // Matches a whitespace character (space, tab, newline)
const pattern3 = /\S/; // Matches a non-whitespace character
const pattern4 = /\d/; // Matches a digit (0-9)
const pattern5 = /\D/; // Matches a non-digit
const pattern6 = /\w/; // Matches a word character (a-z, A-Z, 0-9, _)
const pattern7 = /\W/; // Matches a non-word character
const pattern8 = /^p/; // Matches any string with p at the beginning

// Function to test and display matches
function matchPattern(pattern, textArray) {
    return textArray.map(text => text.match(pattern));
}

// Testing match pattern
console.log("First: "+ pattern1 , matchPattern(pattern1, texts));
console.log("Second: "+ pattern2 , matchPattern(pattern2, texts));
console.log("Third: "+ pattern3 , matchPattern(pattern3, texts));
console.log("Fourth: "+ pattern4 , matchPattern(pattern4, texts));
console.log("Fifth: "+ pattern5 , matchPattern(pattern5, texts));
console.log("Sixth: "+ pattern6 , matchPattern(pattern7, texts));
console.log("Seventh: "+ pattern7 , matchPattern(pattern8, texts));

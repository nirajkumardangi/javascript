/* // Unicode characters
let unicodeString = "\u03A9"; // Represents the Greek letter Omega
console.log(unicodeString);

// Escape sequences
let escapeSequence = "This is a line break \n and a tab \t character.";
console.log(escapeSequence);
 */



/* let exampleString1 = "Hello, World!";

// Convert to uppercase
let uppercaseString = exampleString1.toUpperCase();
console.log(uppercaseString); // Output: "HELLO, WORLD!"

// Convert to lowercase
let lowercaseString = exampleString1.toLowerCase();
console.log(lowercaseString); // Output: "hello, world!"

// Get character at a specific index
let charAtIndex = exampleString1.charAt(7);
console.log(charAtIndex); // Output: "W"

// Find the index of a substring
let indexOfComma = exampleString1.indexOf(",");
console.log(indexOfComma); // Output: 5

// Get a substring
let substring = exampleString1.substring(0, 5);
console.log(substring); // Output: "Hello"

// Replace a substring
let replacedString = exampleString1.replace("World", "Universe");
console.log(replacedString); // Output: "Hello, Universe!"

// Replace all 
let replacedAllString = exampleString1.replaceAll(/World/g, "Universe");
console.log(replacedAllString); // Output: "Hello, Universe!"

// Split the string into an array
let fruitsString = "apple,orange,banana";
let fruitsArray = fruitsString.split(",");
console.log(fruitsArray); // Output: ["apple", "orange", "banana"]

// Trim whitespace from both ends and also only start or end
let stringWithWhitespace = "   Hello, World!   ";
let trimmedString1 = stringWithWhitespace.trim();
let trimmedString2 = stringWithWhitespace.trimStart();
let trimmedString3 = stringWithWhitespace.trimEnd();
console.table([stringWithWhitespace, trimmedString1, trimmedString2, trimmedString3]); 

// Output: '   Hello, World!   '
//         'Hello, World!'
//         'Hello, World!   ' 
//         '   Hello, World!' */ 




let exampleString2 = "JavaScript is a powerful programming language.  ";

// Repeat a string
let repeatedString = "abc".repeat(3);
console.log(repeatedString); // Output: "abcabcabc"

// Concatenate strings
let stringConcatenation = "Hello".concat(" ", "World");
console.log(stringConcatenation); // Output: "Hello World"

// Check if a string starts with/ends with a specific substring
let startsWithCheck = exampleString2.startsWith("JavaScript");
let endsWithCheck = exampleString2.endsWith("language.");
console.log(startsWithCheck); // Output: true
console.log(endsWithCheck); // Output: false

// Includes: Check if a string contains a specific substring
let includesCheck = exampleString2.includes("powerful");
console.log(includesCheck); // Output: true

// PadStart and PadEnd: Add padding to the beginning or end of a string
let paddedStart = "5".padStart(3, "0"); // Output: "005"
let paddedEnd = "42".padEnd(5, "*"); // Output: "42***"
console.log(paddedStart);
console.log(paddedEnd);

// Repeat whitespace for formatting
let whitespaceForFormatting = " ".repeat(10);
console.log(`[${whitespaceForFormatting}Content${whitespaceForFormatting}]`);

// Template literals with expressions
let firstName = "John";
let lastName = "Doe";
let fullName = `${firstName} ${lastName}`;
console.log(fullName); // Output: "John Doe"

// String.fromCharCode: Create a string from Unicode values
let unicodeString2 = String.fromCharCode(72, 101, 108, 108, 111);
console.log(unicodeString2); // Output: "Hello"

// String.raw: Return the raw string form of a template literal
let rawString = String.raw`This is a raw \n string.`;
console.log(rawString); // Output: "This is a raw \n string."

// Match: Find matches in a string using a regular expression
let regex = /[a-zA-Z]+/g;
let matches = exampleString2.match(regex);
console.log(matches); // Output: ["JavaScript", "is", "a", "powerful", "programming", "language"]

// Search: Find the index of a pattern in a string using a regular expression
let searchIndex = exampleString2.search(/powerful/);
console.log(searchIndex); // Output: 28





let exampleString = "JavaScript is a versatile scripting language.";

// charCodeAt: Get the Unicode value of a character at a specific index
let unicodeValue = exampleString.charCodeAt(0);
console.log(unicodeValue); // Output: 74 (Unicode value of 'J')

// slice with negative index: Extract a portion of a string using negative index
let slicedStringNegative = exampleString.slice(-8, -1);
console.log(slicedStringNegative); // Output: "language"

// slice: Extract a portion of a string
let slicedString = exampleString.slice(0, 10);
console.log(slicedString); // Output: "JavaScript" 
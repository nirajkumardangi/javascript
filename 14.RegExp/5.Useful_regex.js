const texts = [
    "john.doe@example.com",
    "Visit our website at https://www.example.com",
    "The price is $25.99",
    "Date: 11/12/2022",
    "Password123!",
    "<p>This is a paragraph.</p>",
    "123-456-7890",
    "RGB Color: #FF4500",
];

// Matching Email Addresses
const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;

// Matching URLs
const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

// Extracting Numbers from a String
const numberPattern = /\d+/g;

// Matching Dates in MM/DD/YYYY Format
const datePattern = /^(0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])[-/.](19|20)\d\d$/;

// Validating Passwords (At least 8 characters, one uppercase, one lowercase, one digit, and one special character)
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Matching HTML Tags
const htmlTagPattern = /<[^>]*>/g;

// Extracting Words from a Sentence
const wordPattern = /\b\w+\b/g;

// Matching Hexadecimal Color Codes
const hexColorPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

// Function to test and display matches
function testPattern(pattern, textArray) {
    console.log(`Pattern: ${pattern}`);
    textArray.forEach(text => {
        console.log(`${text}: ${pattern.test(text)}`);
    });
    console.log('---------------------');
}

// Testing patterns
testPattern(emailPattern, texts);
testPattern(urlPattern, texts);
testPattern(numberPattern, texts);
testPattern(datePattern, texts);
testPattern(passwordPattern, texts);
testPattern(htmlTagPattern, texts);
testPattern(wordPattern, texts);
testPattern(hexColorPattern, texts);

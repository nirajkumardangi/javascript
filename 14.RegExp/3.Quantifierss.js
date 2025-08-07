// Sample text
const texts = ["apple", "123", "Pineapple", "pap", "pmp", "papap", "<b>bold text</b>", "php", "phphph",];


// Regular expression patterns --->
// Matches any string not containing any of the characters ranging from a through z and A through Z.
const pattern1 = /[^a-zA-Z]/;    

// Matches any string containing p, followed by any character, in turn followed by another p.
const pattern2 = /p.p/;          

// Matches any string containing exactly two characters.
const pattern3 = /^.{2}$/;        

// Matches any string enclosed within <b> and </b>.
const pattern4 = /<b>(.*)<\/b>/; 

// Matches any string containing a p followed by zero or more instances of the sequence hp.
const pattern5 = /p(hp)*/;       

// Function to test and display matches
// console.log(pattern1.test(texts));
// console.log(texts.match(pattern1));

function matchPattern(pattern, textArray) {
    return textArray.map(text => text.match(pattern));
}

// Testing match pattern
console.log("First: "+ pattern1 , matchPattern(pattern1, texts));
console.log("Second: "+ pattern2 , matchPattern(pattern2, texts));
console.log("Third: "+ pattern3 , matchPattern(pattern3, texts));
console.log("Fourth: "+ pattern4 , matchPattern(pattern4, texts));
console.log("Fifth: "+ pattern5 , matchPattern(pattern5, texts));

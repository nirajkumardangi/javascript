/* const mySymbol = Symbol("key1");

const myString = {
    name: "abc",
    age : 34,
    "full Name" : "Niraj Kumar", // multiWord property
    [mySymbol]: "myKey" // symbol data type
}

console.log(myString.age); // 34
console.log(myString["full Name"]); // Niraj Kumar 
console.log(typeof myString[mySymbol]); // mySym */

/* ********************************************************************************* */

/* // Javascript Nested Object
const student = {
    name : 'Niraj',
    age : 22,
    marks : {
        science : 56,
        math : 98
    }
}

// accessing nested objects
console.log(student.marks);

// accessing object of object key and value
console.log(student.marks.math); */

/* ********************************************************************************* */

let student = {
    name: "Niraj",
    age :38,
}

student.greeting = function(){
    console.log("Good Morning");
}

// student = myfun;

console.log(student.greeting());
// let fname = "Niraj kumar";
// student[fname];
// console.log(student);  

/* ********************************************************************************* */
// Object Destructuring

let personInfo = { firstName: "John", lastName: "Doe" };
let additionalInfo = { age: 30, city: "Ranchi", occupation: "Developer" };

const objConcat = {...personInfo, ...additionalInfo};

console.log(objConcat);

// Output:::
// {
//     firstName: 'John',
//     lastName: 'Doe',  
//     age: 30,
//     city: 'Ranchi',   
//     occupation: 'Developer'
// }





// Convert Objects to JSON 

let person = {
    name: "John Doe",
    age: 30,
    city: "Ranchi"
};

const objToJSON = JSON.stringify(person);
console.log(objToJSON);

// Output: {"name":"John Doe","age":30,"city":"Ranchi"}
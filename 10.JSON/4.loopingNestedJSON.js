// Looping Nested JSON Data
let data = {
    "students": [
        { "name": "Alice", "grades": [90, 95, 88] },
        { "name": "Bob", "grades": [78, 85, 92] }
    ]
};

for (let student of data.students) {
    for (let grade of student.grades) {
        console.log(grade);
    }
}

// JSON parse
let jsonString = '{"name": "John", "age": 30}';
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject); // Output: { name: 'John', age: 30 }
console.log(jsonObject.name); // Output: John

// Parsing Date: Convert a String into a Date
let jsonString1 = '{"dateOfBirth": "1990-01-15"}';
let jsonObject1 = JSON.parse(jsonString1);
let dateOfBirth = new Date(jsonObject1.dateOfBirth);
console.log(dateOfBirth.getFullYear()); // Output: 1990

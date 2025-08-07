// Example-1
const student = {
    name: "Niraj",
    printName: function (age, city) {
        // console.log(this);
        console.log(`Name: ${this.name}, Age: ${age}, City: ${city}`);
    }
}

student.printName(22, "Ranchi"); 
// Output: Name: Niraj, Age: 22, City: Ranchi

const student2 = {
    name: "Simon"
}

// using call method - value of this = student2
student.printName.call(student2, 20, "Palamu"); 

// Output: Name: Simon, Age: 20, City: Palamu



// Example-2

/* const person1 = { name: "John" };
const person2 = { name: "Alice" };

function greet() {
    console.log(`Hello, ${this.name}!`);
}

greet(); // Output: Hello, undefined!
greet.call(person1); // Output: Hello, John!
greet.call(person2); // Output: Hello, Alice! */
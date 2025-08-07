function Person(name, age) {
    // Within the constructor, "this" refers to the newly created object
    this.name = name;
    this.age = age;

    // You can also define methods using "this"
    this.sayHello = function () {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    };
}

// Creating instances of the Person constructor
let person1 = new Person('Alice', 25);
let person2 = new Person('Bob', 30);

// Accessing properties and invoking methods
console.log(person1.name); // Output: Alice
console.log(person2.age);   // Output: 30

person1.sayHello(); // Output: Hello, my name is Alice and I'm 25 years old.
person2.sayHello(); // Output: Hello, my name is Bob and I'm 30 years old.

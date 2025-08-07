// Arrow function
const person = {
    name: "Niraj",
    age: 22,
    greet: () => {
        console.log(`My name is ${this.name} and age is ${this.age}`);
        console.log(this);
    }
}

person.greet(); 
// Output: My name is undefined and age is undefined


// traditional function
const person1 = {
    name: "Niraj",
    age: 22,
    greet: function() {
        console.log(`My name is ${this.name} and age is ${this.age}`);
    }
}

person1.greet(); 
// Output: My name is Niraj and age is 22
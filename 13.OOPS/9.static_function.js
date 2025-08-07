class Person{
    constructor(userName, userAge){
        this.name = userName
        this.age = userAge
    }

    // prototype method
    greet(){
        console.log(`Good Morning ${this.name}`);
    }

    // static method
    static sayHi(name){
        console.log(`Hii ${name}`);
    }

    // static property
    static property = "address";
}

// prototype method available from object prototype and call it using - object.method()
const niraj = new Person("Niraj", 22);
niraj.greet(); // Good Morning Niraj

// static property and method only accessible in Class. call it using - class.method()
Person.sayHi("Niraj"); // Hii Niraj
Person.sayHi("Ratan"); // Hii Ratan
console.log(Person.property); // address
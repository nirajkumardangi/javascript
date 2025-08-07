// Multi-level inheritance / Chain of inheritance
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayHi(){
        console.log("hii" + this.name);
    }
}

class Ratan extends Person {
    constructor(name, age, rollNo){
        super(name, age) ;
        this.rollNo = rollNo;
    }

    sayBye() {
        console.log("Bye...");
    }
}

class Prince extends Ratan{
    constructor(name, age, rollNo){
        super(name, age, rollNo);
    }
}

const obj = new Prince("Niraj", 22, 11);
console.log(obj);

obj.sayHi();
obj.sayBye()
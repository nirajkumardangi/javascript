// Multiple Inheritance achieved by mixin.

object1 = {
    sayHi() {
        console.log("Hii...");
    },
    sayBye() {
        console.log("Bye...");
    }
}

object2 = {
    greet1() {
        console.log("Ram-Ram");
    },
    greet2() {
        console.log("Good Morning");
    }
}

class user{
    constructor(name) {
        this.name = name;
    }

    getName(){
        console.log(this.name);
    }
}

class admin extends user {

}

// mixin
Object.assign(admin.prototype, object1);
Object.assign(admin.prototype, object2);

// object creation 
const obj1 = new admin("Niraj");
console.log(obj1);
obj1.getName(); // Niraj

obj1.sayHi(); // Hii...
obj1.sayBye(); // Bye...
obj1.greet1(); // Ram-Ram
obj1.greet2(); // Good Morning
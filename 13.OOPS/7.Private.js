class Person {
    #name = "";
    constructor(n) {
        this.#name = n;
    }

    #getName() {
        console.log(this.#name);
    }

    publicGetName() {
        this.#getName();
    }
}

const obj = new Person("Niraj Kumar");
obj.publicGetName();
console.log(obj);
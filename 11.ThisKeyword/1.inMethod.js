// in method -->

const person = {
    name : "Niraj Kumar",
    greet: function() {
        console.log(`Hello ${this.name}`);
    }
}

person.greet();
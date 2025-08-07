// The `apply` method is similar to `call`, but it takes an array of arguments instead of individual arguments.
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
student.printName.apply(student2, [20, "Palamu"]); 
// Prototype facts
function multiplyBy5(num) {
    return num*num;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

/* **************************************************************************** */
// Prototype Creation 

const heros = ["Thor", "Spider Man", "Hulk"];

const student = {
    name: "Niraj",
    age: 22,
}

// create prototype
Object.prototype.niraj = function(){
    console.log("Niraj prototype is available");
}

// prototype accessing
student.niraj();
heros.niraj();
// this inside nested arrow function
const student = {
    name: "Niraj",
    x: function() {
        const y = () => {
            console.log(this);
        }
        y();
    }
}

student.x(); // Output: { name: 'Niraj', x: [Function: x] }
const add = (a, b) => a + b;
const multiply = (a, b) => (a * b);

// exporting function
export {add, multiply};

// Only one default export is allowed per module
const subtract = (a, b) => a - b;

export default subtract;
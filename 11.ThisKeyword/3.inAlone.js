console.log(this === global); // Output: false (if in a node.js environment)

function logThis() {
  console.log(this === global);
}

logThis(); // Output: true (if in a node.js environment)
// Function Expression: way to define a function in any variable.
/* Anonymous Function Expression: function expression without any name --------------------*/
let sum = function (a, b) {
  console.log(a + b);
};

// sum(2, 2);



// EXAMPLE
const ask = function (question, yes, no) {
  if (confirm(question)) yes();
  else no();
};

ask(
  "Are You Agreed",
  function(){alert("Yes Agreed");},
  function(){alert("Disagreed!");}
)


/* Named Function Expression: function expression with function name ----------------------*/

let findSquare = function square(x) {
  console.log(x * x);
};

// findSquare(4);

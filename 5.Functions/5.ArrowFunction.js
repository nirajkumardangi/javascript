/* No Arguments -----------------------------------------------------------*/
// let greetArrow = () => "Hello, World!";

/* One Argument -----------------------------------------------------------*/
// let squareArrow = x => x * x;

/* Returning an Object ----------------------------------------------------*/
//===> Arrow function

// let createPersonArrow = (name, age) => ({ name: name, age: age });
// console.log(createPersonArrow('India', 20039));

// let myObj = (name, age, yourClass, pinCode) => ({name: name, age: age, yourClass: yourClass, pinCode: pinCode});

// console.log(myObj("Niraj", 22, "BSC-IT", 825401));

//==> Return object using traditional function expression

// let createPerson = function (name, age) {
// 	return {
// 		name: name,
// 		age: age
// 	};
// };

// console.log(createPerson('Niraj', 22));

/* Arrow Function as an Expression ----------------------------------------*/

// let age = 19;
// let welcome = (age <= 18) ? () => console.log('Baby') : () => console.log('Adult');
// welcome();

/* Function can call itself ----------------------------------------*/

// function factorial(n) {
// 	if (n === 0 || n === 1) {
// 		return 1;
// 	} else {
// 		return n * factorial(n - 1);
// 	}
// }
// console.log(factorial(4));

/* Lexical this Binding --------------------------------------------------*/

// var age = 45;
// function Person() {
// 	this.name = 'Jack',
// 	this.age = 25,
// 	this.sayName = function () {

// 		// this is accessible
// 		console.log(this.age);

// 		function innerFunc() {
// 			age = 45;
// 			// this refers to the global object
// 			console.log(this.age);
// 			// console.log(this);
// 		}

// 		innerFunc();

// 	}
// }

// let x = new Person();
// x.sayName();

// Output:::
// 25
// undefined
// Object [global]

/* Arguments Binding  -------------------------------------------------------*/
/* why when you pass arguments to a regular function, you can access them using the arguments keyword. */

//=> Regular Function: have argument binding --

/* let x = function() {
	console.log(arguments);
}
x(1, 2, 3, 4); */

//==> Arrow Function: Do not have argument binding --

/* let x = () => {
	console.log(arguments);
}

x(1, 2, 3, 4, 5); */

//==> Arrow Function: solve argument binding in arrow function --

/* let x = (...n) => {
	console.log(n);
}

x(1, 2, 3, 4, 5, 6); */

/* Things You Should Avoid With Arrow Functions -------------------------------*/

//==> 1. You should not use arrow functions to create methods inside objects --

/* let person = {
	name: 'Jack',
	age: 25,
	sayName: () => {

		// this refers to the global .....
		console.log(this.age);
	}
}

person.sayName(); // undefined */

//==> 2. You cannot use an arrow function as a constructor. For example --

/* let Foo = () => {};
let foo = new Foo(); // TypeError: Foo is not a constructor */

const ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

ask(
  'Are You Agreed',
  () => alert('Yes Agreed'),
  () => alert('Disagreed!')
);

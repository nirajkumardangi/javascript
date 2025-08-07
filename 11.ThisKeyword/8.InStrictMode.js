'use strict';
this.name = 'Jack';
function greet() {
	// this refers to undefined
	console.log(this.name);
}
greet(); // undefined
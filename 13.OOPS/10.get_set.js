class user {
	#password = ""; // private field: not be directly accessed or modified from outside the class.
	constructor(email, password) {
		this.email = email
		this.#password = password
	}

	set password(value) {
		this.#password = value
	}

	get password() {
		return this.#password.toUpperCase();
	}

}

const niraj = new user("nk@gmail.com", "abc");
console.log(niraj.password);

/* Example 2: Validation and Error Checking ---------------------------------------*/

class Person {
	// #name;
	#age;

	constructor(name, age) {
		this.name = name;
		this.#age = age; // Use the setter for validation
	}

	get getAge() {
		return this.#age;
	}

	set setAge(value) {
		if (typeof value !== "number") {
			throw new Error("Age must be a number");
		} else if(value < 0){
			throw new Error("Age must be a positive number");
		}
		this.#age = value;
	}
}

// The following line will now throw an error during object creation
const Niraj = new Person("Niraj", 33);
Niraj.setAge = 55;
console.log(Niraj.getAge);
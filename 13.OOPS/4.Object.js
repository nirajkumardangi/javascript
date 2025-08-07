// Car class
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

// Garage class composed of Car objects
class Garage {
    constructor(location) {
        this.location = location;
        this.cars = []; // Array to store Car objects
    }

    addCar(car) {
        this.cars.push(car);
    }
}

// Create instances of Car
const car1 = new Car("Toyota", "Camry", 2022);
const car2 = new Car("Honda", "Civic", 2021);
const car3 = new Car("Honda", "Civic", 2021);

// Each time you call new, a different instance is created.
console.log(car2 === car3); // false

console.log(car1); // Car { make: 'Toyota', model: 'Camry', year: 2022 }
console.log(car2); // Car { make: 'Honda', model: 'Civic', year: 2021 }

// Create instances of Garage
const garage = new Garage("City Center");
garage.addCar(car1);
garage.addCar(car2);

console.log(garage);

/* Output: 
    Garage {
    location: 'City Center',
    cars: [
        Car { make: 'Toyota', model: 'Camry', year: 2022 },
        Car { make: 'Honda', model: 'Civic', year: 2021 }  
    ]
    } */
class Person{
    // properties -> variables -> data members

    // if we create an object of "Person" class constructor function called automatically. 
    constructor(n, p, r){
        console.log("calling the constructor");
        
        // this -> refers to calling site or (now, this is a empty plan object { }, and name->key, n->value, so on)
        this.name = n;
        this.price = p;
        this.rating = r;
        // return 10; // if we return primitive then it be avoided in constructor
        // return {a: 10, b: 20} // if we return non primitive then it will be returned
    }

    // behaviors -> function -> member function
    display(){
        // console.log(this); // this -> refers to calling site (p1 object)
        console.log("display the current product: ", this.name, this.price, this.rating);
    }
}

const p1 = new Person("iPhone", 87000, 5); // new -> creates an empty plain object 
// -> in above piece of code we are calling the constructor method
console.log(p1);

p1.display() 
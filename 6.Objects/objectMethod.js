// Object Method

const person = {
  first_name: 'Niraj',
  last_name: 'Dangi',
  greet() {
    console.log('Good Morning', this.first_name);
  },
  getFullName: function () {
    console.log(this.first_name + this.last_name);
  },
};

console.log(person);
person.greet();
person.getFullName();

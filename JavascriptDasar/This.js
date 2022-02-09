const person = {
  name: 'Yelly',
  age: 21,
  sayHello(name) {
    console.log(`Hello ${name}, i'm ${this.name}`);
  },
};

person.sayHello('Putri');

// Arrow function tidak memiliki this
const user = {
  sayName: (name) => {
    console.log(`Hello ${name}, i'm ${this.name}`); // Error || Undefined
  },
};

user.sayName('Putri');

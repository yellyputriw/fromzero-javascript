// Function di dalam object disebut Method
const person = {
  name: 'Yelly',
  age: 21,
  sayHello: (name) => {
    console.log(`Hello ${name}!`);
  },
};

person.sayHello(person.name);

// cara ke 2
const users = {
  name: 'Satomi',
  age: 22,
  sayHello(name) {
    return `Hello ${name}!`;
  },
};

console.log(users.sayHello(users.name));

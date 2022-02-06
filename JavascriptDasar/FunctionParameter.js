/*
  Parameter : data yg dibutuhkan saat function dibuat (function sayHello(params) {})
  Argumen : data yg dibutuhkan saat function di panggil (sayHello(args))
*/

function sayHello(name) {
  console.log(`Hello ${name}!`);
}

sayHello('Yelly');

const lastName = 'Putri';
sayHello(lastName);

// 2 Parameter
function intro(name, age) {
  console.log(`Hello my name is ${name}, i'm ${age} years old.`);
}

intro('Yelly', 21);

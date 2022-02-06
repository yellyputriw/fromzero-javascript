// Function Default Parameter
// klo param ga di isi : di isi default bukan undefined

function sayName(firstName, gender = 'female') {
  console.log(`Hello, my name is ${firstName}. I'm a ${gender}`);
}

sayName('Putri');
sayName('Putra', 'male');

function sayHello(name = 'World') {
  return `Hello ${name}!`;
}

// Jika param tidak di isi
console.log(sayHello());

// Jika di isi
const nama = 'Yelly';
console.log(sayHello(nama));

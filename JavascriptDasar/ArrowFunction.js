/*
  () => {} : arrow function mirip seperti Anonymous function
*/

const intro = (name, age) => {
  console.log(`Nama saya ${name}, saya ${age} tahun`);
};

intro('Yelly', 21);

// arrow function return value 1 baris
const sayName = (name) => `Hello ${name}!`;
console.log(sayName('Putri'));

// arrow function return value lebih dari 1 baris
const greet = (firstName, lastName) => {
  return `Nama : ${firstName} ${lastName}`;
};

console.log(greet('Wahyu', 'Ningsih'));

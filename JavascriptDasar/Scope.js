// Global Scope
const nama = 'Yelly Putri';

const sayName = (name) => {
  //Local Scope
  const age = 21;
  return `My name is ${name}, i'm ${age} years old`;
};

// Global scope bisa di akses dimana saja
console.log(nama);

// Local Scope hanya bisa di akses di dalam function
// console.log(age); //error

console.log(sayName('yelly'));

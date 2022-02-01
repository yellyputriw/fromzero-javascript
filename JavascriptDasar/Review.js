// null & Undefined
let scholl = null;
console.log(scholl);

let nama;
console.log(nama);

// Variable Number
const fruit = 10000;
const sushi = '20000';

const total = fruit + parseInt(sushi);
console.log(total);

// Variable string
const firstName = 'yelly';
const lastName = 'putri';
const age = 22;

console.log(`Nama : ${firstName} ${lastName}`);
console.log(`I'm a ${age > 18 ? 'adult' : 'kids'}`);

// Gong Xi Fa Cai
// Array
const vegetables = ['carrot', 'chili', 'cabage'];
console.log(vegetables[1]);

// memanggil data ke-1 array
vegetables[0] = 'spinach';
console.table(vegetables);

// menghitung panjang array
console.log(vegetables.length);

// menambahkan data ke akhir array
vegetables.push('seaweed');
console.table(vegetables);

// Split
const fullName = 'Yelly Putri Wahyu Ningsih';
console.log(`Hello, ${fullName.split(' ')[1]}!`);

//
// const date = new Date();
// console.log(tanggal);
// console.log(date.toString().split('T')[0]);

// Perbandingan
const a = 10;
const b = 20;

console.log(a > b);
console.log(`nilai ${a > b ? 'good' : 'bad'}`);

// Boolean
const isAdult = false;
console.log(!isAdult);

// Object
const person = {
  name: 'yelly putri',
  age: 22,
  gender: 'female',
  address: {
    village: 'Cikambuy',
    city: 'Soreang',
  },
  favorites: ['read', 'eat', 'sleep'],
  isBeauty: true,
};

const introduce = `
  Hello! My Name is ${person.name}.
  I'm ${person.age} years old.
  You can call me ${person.gender === 'female' ? 'Sis' : 'Bro'}.
  I'm live in ${person.address.village}, ${person.address.city}.
  My hobby is ${person.favorites.join(', ')}.
  My face is so ${person.isBeauty ? 'Beauty' : 'Ugly'}.
`;

console.log(introduce);

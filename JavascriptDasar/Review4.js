// Anonymous function
const greet = function (inisial) {
  return `hallo ${inisial}!`;
};

console.log(greet('sir'));

// Arrow function
const intro = (name) => {
  console.log(`Hello, my name is ${name}.`);
};

intro('yelly');

// Break

// Continue
let users = ['yelly', 'putri', 'wahyu', 'ningsih'];
for (let u = 0; u < users.length; u++) {
  if (u % 2 === 0) {
    continue;
  }
  console.log(users[u]);
}

// function luas lingkaran
const luasLingkaran = (r, phi = 22 / 7) => {
  const lingkaran = phi * r * r;
  return lingkaran;
};

console.log(luasLingkaran(7));

// Ternary Operator
const invite = true;
console.log(`kamu ${invite ? 'diundang' : 'tidak diundang'}!`);

// Switch Expression
const size = 'M';
switch (size) {
  case 'S':
    console.log('Small');
    break;
  case 'M':
    console.log('Medium');
    break;
  case 'L':
    console.log('Large');
    break;
  case 'XL':
    console.log('Extra Large');
}

// Split
const japaneseName = 'Kaino Satomi';
console.log(`Hello ${japaneseName.split(' ')[1]}!`);

// For
let persons = [
  {
    nama: 'Yelly',
    kelas: 7,
    ekskul: 'pramuka',
  },
  {
    nama: 'Putri',
    kelas: 8,
    ekskul: 'paskibra',
  },
  {
    nama: 'Wahyu',
    kelas: 9,
    ekskul: 'futsal',
  },
];

// For Of
// for (const dataDiri of persons) {
//   let sayHello = `
//     Nama : ${dataDiri.nama}
//     Kelas : ${dataDiri.kelas}
//     Ekskul : ${dataDiri.ekskul}
//   `;
//   console.log(sayHello);
// }

// For Each
persons.forEach((index, person) => {
  let sayHello = `
    No. ${index + 1}
    Nama : ${person.nama}
  `;
});

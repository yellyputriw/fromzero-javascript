const laptop = {
  brand: 'ASUS',
  type: 'TUF Gaming',
  isKeyboardNumeric: true,
  isKeyboardRGB: true,
};

// Destructuring Object
const { brand, type, isKeyboardNumeric, isKeyboardRGB } = laptop;
const info = `
  Merk: ${brand}
  Model: ${type}
  Numerik Key : ${isKeyboardNumeric ? 'Yes' : 'No'}
  RGB Keyboard : ${isKeyboardRGB ? 'Yes' : 'No'}
`;

console.log(info);

// Tidak destructuring
// const info = `
//   Merk: ${laptop.brand}
//   Model: ${laptop.type}
//   Numerik Key : ${laptop.isKeyboardNumeric ? 'Yes' : 'No'}
//   RGB Keyboard : ${laptop.isKeyboardRGB ? 'Yes' : 'No'}
// `;

// console.log(info);

// Destructuring Array
const nama = ['Yelly', 'Putri', 'Wahyu'];

const [firstName, middleName, lastName] = nama;
const fullName = `
  Nama Depan = ${firstName}
  Nama Tengah = ${middleName}
  Nama Belakang = ${lastName}
`;

console.log(fullName);

// Manual tanpa Destructuring
// Jadi kaya : const firstName = nama[0];
const sayName = `
  Nama Depan = ${nama[0]}
  Nama Tengah = ${nama[1]}
  Nama Belakang = ${nama[2]}
`;

console.log(sayName);

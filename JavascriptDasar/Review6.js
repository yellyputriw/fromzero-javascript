// Anonymous function
const sayHello = (namaPanggilan) => {
  return `Hello ${namaPanggilan}!`;
};

console.log(sayHello('yell'));

// Break & Continue
for (let i = 1; i <= 100; i++) {
  if (i === 10) {
    break;
  } else if (i % 3 === 0) {
    continue;
  } else if (i % 2 === 0) {
    console.log('Kelipatan 2');
  } else {
    console.log(i);
  }
}

// Menghitung luas lingkaran
const lingkaran = (r, phi = 3.14) => {
  const luasLingkaran = phi * r ** 2;
  return luasLingkaran;
};

console.log(lingkaran(2));

// pangkat
const duaPangkatDua = Math.pow(2, 2);
console.log(duaPangkatDua);

const tigaPangkatDua = 3 ** 2;
console.log(tigaPangkatDua);

// Decrement
let satu = 1;
satu--;
console.log(satu);

// Increment
let dua = 2;
dua++;
console.log(dua);

// if Expression
let time = new Date().getHours();
let greet;

if (time < 12) {
  greet = 'Ohayou Gozaimasu';
} else if (time >= 12 && time < 17) {
  greet = 'Konnichiwa';
} else if (time >= 17 < 24) {
  greet = 'Konbanwa';
}

console.log(greet);

// string to number
const juice = 10000;
const mieAyam = '15000';
const harga = juice + parseInt(mieAyam);

console.log(harga);

// number to string
const nis = 2015093169;
console.log(typeof nis.toString());

// Null & Nullish
let description = null;
console.log(`Jawaban ${description ?? 'kosong'}`);

// Ternary Operator
let gender = 'male';
console.log(`Hello ${gender === 'male' ? 'bro' : 'sis'}!`);

// Switch Statment
let day;

switch (new Date().getDay()) {
  case 0:
    day = 'Minggu';
    break;
  case 1:
    day = 'Senin';
    break;
  case 2:
    day = 'Selasa';
    break;
  case 3:
    day = 'Rabu';
    break;
  case 4:
    day = 'Kamis';
    break;
  case 5:
    day = 'Jumat';
    break;
  case 6:
    day = 'Sabtu';
    break;
}

console.log(`Sekarang hari ${day}`);

/*
  Nullish Coalescing (??) : untuk memberikan nilai default jika suatu variabel bernilai null
*/

let nama = null;
// nama = 'yell';

// if (nama !== null) {
//   console.log(`Hello, ${nama}`);
// } else {
//   console.log('Hello World');
// }

console.log(`Hello, ${nama ?? 'World'}`);

let gender = null;
gender = 'male';
const greet = `Jenis kelamin saya ${gender ?? 'Tidak mau disebukan'}`;

console.log(greet);

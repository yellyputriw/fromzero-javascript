/*
 Template Literals (`) menggunakan backtick
 untuk memanggil varible di string template / 
 template literals gunakan ${}
*/

const firstName = 'Yelly';
const lastName = 'Putri';
const age = 22;

console.log(`Nama ${firstName} ${lastName}`);

const multiline = `
  ini merupakan string dengan
  lebih dari satu baris
  menggunakan template literals
`;

console.log(multiline);

// Expression(If else/ ternary operator) di dalam template literals
console.log(`Apakah saya di atas 18 tahun : ${age > 18}`);

const gender = 'male';
const text = `Halo ${gender === 'male' ? 'Bro' : 'Sis'}`;
console.log(text);

/*
  
*/

const nilaiAbsen = 70;
const nilaiRapor = 75;

// Klo salah satu false = false
if (nilaiAbsen >= 70 && nilaiRapor > 80) {
  console.log('Kamu Lulus!');
}

// Klo salah satu true = true
// if (nilaiAbsen >= 70 || nilaiRapor > 80) {
//   console.log('Kamu Lulus!');
// }

// Else Expression
// if (nilaiAbsen >= 70 && nilaiRapor > 80) {
//   console.log('Kamu Lulus!');
// } else {
//   console.log('Mohon Maaf!');
// }

// Else If Expression
if (nilaiAbsen >= 80 && nilaiRapor > 80) {
  console.log('Kamu Lulus dengan A!');
} else if (nilaiAbsen >= 70 && nilaiRapor > 70) {
  console.log('Kamu lulus dengan B!');
} else {
  console.log('Mohon Maaf!');
}

let info;
console.log(info);

if (nilaiAbsen >= 80 && nilaiRapor > 80) {
  info = 'Kamu Lulus dengan A!';
} else if (nilaiAbsen >= 70 && nilaiRapor > 70) {
  info = 'Kamu lulus dengan B!';
} else {
  info = 'Mohon Maaf!';
}

console.log(info);

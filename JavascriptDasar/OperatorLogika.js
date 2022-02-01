/*
&& = and
|| = or
! = not (kebalikan)
*/

const isOnline = false;

console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(false || false);
console.log(!isOnline);

const nilaiPengetahuan = 80;
const nilaiAbsen = 75;

const lolosPengetahuan = nilaiPengetahuan > 85;
const lolosAbsen = nilaiAbsen > 70;

const lolos = lolosAbsen && lolosPengetahuan;
console.log(`${lolos ? 'Selamat kamu lolos' : 'Mohon maaf Anda belum lolos'}`);

/*
  Switch digunakan saat perbandingan menggunakan ===
*/

const lampu = 'green';

switch (lampu) {
  case 'red':
    console.log('Berhenti!');
    break;
  case 'yellow':
    console.log('Pelan-Pelan!');
    break;
  case 'green':
    console.log('Go!');
    break;
  default:
    console.log('Hati-Hati');
}

if (lampu === 'red') {
  console.log('Berhenti');
} else if (lampu === 'yellow') {
  console.log('Pelan-Pelan!');
} else if (lampu === 'green') {
  console.log('Go!');
} else {
  console.log('Hati-Hati!');
}

/*
    Break :  untuk menghentikan perulangan
    continue: melewati perulangan

*/

// // menampilkan angka ganjil
// for (let a = 1; a <= 20; a++) {
//   if (a % 2 === 0) {
//     continue;
//   } else {
//     console.log(a);
//   }
// }

// // menampilkan angka genap
// for (let a = 1; a <= 20; a++) {
//   if (a % 2 === 1) {
//     continue;
//   } else {
//     console.log(a);
//   }
// }

// for (let b = 1; b <= 10; b++) {
//   console.log(b);
//   if (b >= 5) {
//     break;
//     console.log('halo yelly');
//   }
// }

let nama = ['yelly', 'putri', 'wahyu', 'ningsih'];

for (let n = 0; n < nama.length; n++) {
  if (n % 2 === 0) {
    continue;
  }
  console.log(nama[n]);
}

let nilai = [
  {
    mapel: 'matematika',
    angka: 90,
  },
  {
    mapel: 'b.inggris',
    angka: null,
  },
  {
    mapel: 'ips',
    angka: 75,
  },
];

for (let nilaiYelli = 0; nilaiYelli < nilai.length; nilaiYelli++) {
  if (nilai[nilaiYelli].angka === null) {
    continue;
  }
  console.log(nilai[nilaiYelli]);
}

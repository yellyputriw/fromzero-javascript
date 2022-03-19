// Anonymous function
const greet = (nama) => {
  console.log(`hello ${nama}!`);
};

greet('yelly');

// Break and continue
for (let i = 0; i < 20; i++) {
  if (i % 3 === 0) {
    continue;
  } else if (i === 10) {
    break;
  } else {
    console.log(i);
  }
}

// Increment i++
// Decrement i--

// For Each
let dataOSIS = [
  {
    nama: 'yelly',
    kelas: 'VIII-A',
    jabatan: 'Ketua Osis',
  },
  {
    nama: 'Putri',
    kelas: 'VIII-B',
    jabatan: 'Wakil Ketua',
  },
  {
    nama: 'wahyu',
    kelas: 'VIII-C',
    jabatan: 'sekretaris',
  },
  {
    nama: 'Ningsih',
    kelas: 'VIII-D',
    jabatan: 'bendahara',
  },
];

dataOSIS.forEach((data, index) => {
  let pengurusOSIS = `
    No. ${index + 1}
    Nama : ${data.nama}
    Kelas : ${data.kelas}
    Jabatan : ${data.jabatan}
  `;
  console.log(pengurusOSIS);
});

// For Loop
for (let j = 1; j <= 50; j++) {
  if (j % 3 === 0) {
    console.log('FIZZ');
  } else if (j % 5 == 0) {
    console.log('BUZZ');
  } else {
    console.log(j);
  }
}

// Anonymous Function
const intro = (name, age) => {
  return `Hello my name is ${name}. I'm ${age} years old.`;
};

console.log(intro('yelly', 22));

// Destructuring
const breakfastFood = {
  categories: 'Bread',
  brand: 'Sari Roti',
  filling: 'Strawberry Jam',
};

const { categories, brand, filling } = breakfastFood;

const roti = `
  Kategori : ${categories}
  Merk : ${brand}
  Isian : ${filling}
`;

console.log(roti);

// For Loop
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
    console.log('Ini kelipatan 3');
  } else {
    console.log('Ini bukan');
  }
}

// For each
const employee = [
  {
    nama: 'Yelly',
    position: 'Frond-End Developer',
    divisi: 'Web',
  },
  {
    nama: 'Putri',
    position: 'UI Designer',
    divisi: 'Mobile App',
  },
  {
    nama: 'Wahyu',
    position: 'Back-End Developer',
    divisi: 'Web',
  },
];

employee.forEach((pegawai) => {
  let karyawan = `
    nama : ${pegawai.nama}
    posisi : ${pegawai.position}
    divisi : ${pegawai.divisi}
  `;
  console.log(karyawan);
});

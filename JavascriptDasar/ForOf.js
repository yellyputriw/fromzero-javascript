let persons = [
  {
    nama: 'yelly',
    age: 20,
    jobs: 'Developer',
  },
  {
    nama: 'putri',
    age: 21,
    jobs: 'Designer',
  },
  {
    nama: 'wahyu',
    age: 22,
    jobs: 'IT Support',
  },
  {
    nama: 'ningsih',
    age: 23,
    jobs: 'QA Analyst',
  },
];

// Pakai for
// for (let p = 0; p < persons.length; p++) {
//   let intro = `
//     No. ${p + 1}
//     Nama : ${persons[p].nama}
//     Umur : ${persons[p].age}
//     Jabatan : ${persons[p].jobs}
//   `;
//   console.log(intro);
// }

// Pakai For Of
for (const value of persons) {
  let intro = `
    Nama : ${value.nama}
    Umur : ${value.age}
    Jabatan : ${value.jobs}
  `;
  console.log(intro);
}

// mendapatkan  index
for (const [index, value] of persons.entries()) {
  let intro = `
    No. ${index + 1}
    Nama : ${value.nama}
    Umur : ${value.age}
    Jabatan : ${value.jobs}
  `;
  console.log(intro);
}

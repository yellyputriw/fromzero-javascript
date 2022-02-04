let users = [
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
for (let u = 0; u < users.length; u++) {
  let intro = `
    No. ${u + 1}
    Nama : ${users[u].nama}
    Umur : ${users[u].age}
    Jabatan : ${users[u].jobs}
  `;

  console.log(intro);
}

// Pakai ForEach
users.forEach((user, index) => {
  let intro = `
  No. ${index + 1}
  Nama : ${user.nama}
  Umur : ${user.age}
  Jabatan : ${user.jobs}
  `;
  console.log(intro);
});

const person = {
  name: 'Yelly Putri',
  age: 22,
  hobby: ['Cooking', 'Traveling'],
  address: {
    city: 'Bandung',
    country: 'Indonesia',
  },
  isMarried: true,
};

console.log(`Nama : ${person.name}`);
console.log(`Umur : ${person.age}`);
console.log(`Alamat : ${person.address.city}, ${person.address.country}`);
console.log(`Hobi : ${person.hobby.join(', ')}`);
console.log(`Status : ${person.isMarried ? 'Menikah' : 'Lajang'}`);

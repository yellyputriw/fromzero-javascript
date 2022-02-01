/*
 array memiliki index,
 index selalu dimulai dari 0
*/

const fruits = ['Apple', 'Banana', 'Melon'];
console.table(fruits);

// Menghitung panjang array
console.log(fruits.length);

// mengambil value array no 2 : array[index]
console.log(fruits[1]);

// menambah data ke akhir array
fruits.push('Avocado');
console.table(fruits);

// mengubah data di dalam array
fruits[2] = 'Mango';
console.table(fruits);

//menghapus data di akhir array
fruits.pop();
console.table(fruits);

/* 
  For Loop => 
*/

for (let x = 1; x <= 10; x++) {
  console.log(x);
}

let count = 1;
const total = 5;
for (count; count <= total; count++) {
  console.log(`Ini perulangan ke ${count}`);
}

for (let j = 1; j <= 50; j++) {
  if (j % 3 === 0 && j % 5 === 0) {
    console.log('FizzBuzz');
  } else if (j % 3 === 0) {
    console.log('Fizz');
  } else if (j % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(j);
  }
}

// For loop
const donats = ['Peanut Ring', 'Choco Ring', 'Mochido Choco', 'Choco Pie'];
for (let i = 0; i < donats.length; i++) {
  console.log(donats[i]);
}

let seafood = ['udang', 'cumi-cumi', 'ikan', 'gurita'];
for (let i = 0; i < seafood.length; i++) console.log(seafood[i]);

let coffee = [
  {
    name: 'Mochacino',
    stock: 4,
  },
  {
    name: 'Americano',
    stock: 2,
  },
  {
    name: 'Chocolate',
    stock: 0,
  },
];

for (let c = 0; c < coffee.length; c++) {
  if (coffee[c].stock === 0) {
    console.log(`Maaf ${coffee[c].name} Habis!`);
  } else if (coffee[c].stock <= 3) {
    console.log(`${coffee[c].name} segera habis!`);
  } else {
    console.log(`${coffee[c].name} tersedia!`);
  }
}

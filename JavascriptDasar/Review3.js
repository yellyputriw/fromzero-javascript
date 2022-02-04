// Ternary Operator
let gender = 'male';
console.log(`Halo ${gender === 'male' ? 'Bro' : 'Sis'}!`);

//for loop
let seafood = ['udang', 'cumi-cumi', 'ikan', 'gurita'];

for (let i = 0; i < seafood.length; i++) console.log(seafood[i]);

// switch expression
let date = new Date().getDay();
switch (date) {
  case 0:
    console.log('Minggu');
    break;
  case 1:
    console.log('Senin');
    break;
  case 2:
    console.log('Selasa');
    break;
  case 3:
    console.log('Rabu');
    break;
  case 4:
    console.log('Kamis');
    break;
  case 5:
    console.log("Jum'at");
    break;
  case 6:
    console.log('Sabtu');
}

// for
for (let j = 0; j < 5; j++);

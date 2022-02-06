// function yg mengembalikan nilai string

function intro(name, age) {
  return `Hello my name is ${name}, i'm ${age} years old.`;
}

// tidak menampilkan output
intro('yelly', 21);

// menampilkan output
console.log(intro('yelly', 21));

// disimpen di variable
const greet = intro('Putri', 22);
console.log(greet);

// function dengan switch expression
function getScore(score) {
  switch (score) {
    case 'A':
      return 'Kamu lulus dengan nilai sangat baik';
      break;
    case 'B':
      return 'Kamu lulus dengan nilai baik';
      break;
    case 'C':
      return 'Kamu lulus dengan nilai cukup';
      break;
    default:
      return 'Maaf kamu belum lulus';
  }
}

const result = getScore('B');
console.log(result);

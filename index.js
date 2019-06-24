// Code your solutions in this file
// const names = [ 'Lisa', 'Kaitlin', 'Jan' ], event = 'surprise';

function writeCards(names, event) {
  let arr = [];
  for (let i = 0; i < names.length; i++) {
    arr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return arr;
}

function countdown(number) {
  while (0 < number) {
      console.log(number--);
  }
  console.log(0);
}

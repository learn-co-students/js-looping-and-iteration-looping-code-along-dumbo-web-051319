// Code your solutions in this file
function writeCards(names, events) {
  let array = [];
  for (let i = 0; i < names.length; i++) {
    array.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);

  }
  return array;
}

function countdown(number) {
  while (number > -1) {
    console.log(number);
    number= number - 1;
  }
}

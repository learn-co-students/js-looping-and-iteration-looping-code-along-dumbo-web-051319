function writeCards(array, event) {
  let greeting = [];
  for (let i = 0; i < array.length; i++) {
    greeting.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
  }
  return greeting;
}

function countdown(integer) {
  while (integer > 0) {
    console.log(integer);
    integer -= 1;
  }
  console.log(integer);
}

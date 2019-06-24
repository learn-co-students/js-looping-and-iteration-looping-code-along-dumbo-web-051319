// Code your solutions in this file
function writeCards(array, word) {
  var new_array = [];
  for (var i = 0; i < array.length; i++) {
    new_array.push(`Thank you, ${array[i]}, for the wonderful ${word} gift!`);
  }
  return new_array;
}

function countdown(number) {
  for (var i = number; i >= 0; i--) {
    console.log(i);
  }
}

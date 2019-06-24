


function writeCards(names, day) {
  let newArray = [];
  for(let i = 0; i < names.length; i++){
    newArray.push( `Thank you, ${names[i]}, for the wonderful ${day} gift!`);
  }
  return newArray;
}

function countdown(num){
let counter = num;
while (counter >= 0){
  console.log(counter--);
}
}

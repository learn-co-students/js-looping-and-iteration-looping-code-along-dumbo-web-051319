// Code your solutions in this file
function writeCards(nameArray, eventName) {
  let outArray = [];
  for(let i = 0; i < nameArray.length; i++) {
    outArray.push(`Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`);
  }
  return outArray;
}

function countdown(num) {
  let i = 0;
  while(i <= 10) {
    console.log(i);
    i++;
  }
}

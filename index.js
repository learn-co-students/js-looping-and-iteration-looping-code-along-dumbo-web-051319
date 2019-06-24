// Code your solutions in this file
function writeCards(namesArray, event){
  let cardArray = [];
    for(let i=0; i< namesArray.length; i++){

      cardArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
  return cardArray;
}



function countdown(num){
  while (num > -1){
    console.log(num)
    num -= 1
  }
}

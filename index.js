// Code your solutions in this file
function writeCards(names,event){
  const arr = []
  for(let i = 0; i < names.length; i++){
    arr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return arr
}

function countdown(num){
  while(num >= 0){
    console.log(num)
    num -= 1
  }
}

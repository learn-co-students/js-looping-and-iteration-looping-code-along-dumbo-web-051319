// Code your solutions in this file

// "Thank you, Ali, for the wonderful birthday gift."

const writeCards = (array, eventName) => {
  let result = [];
  for (let i = 0; i < array.length; i++){
    let message = `Thank you, ${array[i]}, for the wonderful ${eventName} gift!`
    result.push(message);
  }
  return result
}

const countdown = (num) => {
  while (num >= 0){
    console.log(num);
    num--
  }
}
countdown(5);

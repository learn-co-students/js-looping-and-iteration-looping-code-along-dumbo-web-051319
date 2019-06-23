function writeCards(names, event) {
  const messages = [];
  for(let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages;
}

function countdown(n) {
  let count = n;
  while(count >= 0) {
    console.log(count);
    count--;
  }
}

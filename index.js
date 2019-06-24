function writeCards(names, event) {
  const thankYouCards = []
  for (let i = 0; i < names.length; i++) {
    thankYouCards.push(`Thank you ${names[i]} for the wonderful ${event} gift`);
  }
  return thankYouCards;
}

function countdown(num) {
  while (num >= 0 ) {
    console.log( num);
    num-= 1;
  }
  return (num);
}

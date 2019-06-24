// Code your solutions in this file

function writeCards(names){
    let thankYouCards = []
    for (let i = 0; i < names.length; i++) {
    thankYouCards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return thankYouCards;
  }

  function countdown( countdown ) {
    while ( countdown > 0 ) {
      console.log( countdown );
      countdown -= 1;
    }
    console.log( countdown );
  }

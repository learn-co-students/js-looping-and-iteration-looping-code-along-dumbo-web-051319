function writeCards( namesArray, event ) {
  let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ )  {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
}

  function countdown (number) {
    for (let countup = number; countup >= 0; countup--) {
      console.log(countup);
    }
  }

// Code your solutions in this file

// const cards = ['Lisa', 'Kaitlin', 'Jan' ]; 

function writeCards (namesArr, num) {
    let cards = []; 
    for (let i = 0; i < namesArr.length; i++) {
    cards.push(`Thank you, ${namesArr[i]}, for the wonderful ${num} gift!`)
    }
    return cards; 
}  



function countdown(countdown) {
    // let donuts = 10;     
    while ( countdown >= 0 ) {
      console.log( countdown--);
    }
  }
  countdown(10);


  
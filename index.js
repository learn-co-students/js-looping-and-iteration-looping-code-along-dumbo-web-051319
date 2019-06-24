// Code your solutions in this file
// const writeCards = (["Ada", "Brendan", "Ali"], "birthday");
function writeCards(name, event){
  const cardArr = [];
  // debugger
  // console.log("NAME", name)
  // console.log("EVENT", event)
  for (let i = 0; i < name.length; i++){
  cardArr.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
  }
  return cardArr;
}

function countdown(num){
  while(num >= 0) {
    console.log(num);
    num -= 1
  }
  return countdown;

}

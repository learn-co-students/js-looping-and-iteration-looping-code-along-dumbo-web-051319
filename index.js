// Code your solutions in this file

const given = ["Ada", "Brendan", "Ali"];
const string = "birthday";

function writeCards(names, string) {
    arr = [];
    for (let i = 0; i < names.length; i++) {
       arr.push(`Thank you, ${names[i]}, for the wonderful ${string} gift!`);
    }
    return arr;
}

writeCards(given, string);


function countdown(number) {
    while (number >= 0) {
        console.log(number)
        number--;
    }
}

countdown(10);
/*
let myString1 = "Hello";
let myString2 = "World";

console.log(myString1 + myString2 + "!"); //HelloWorld!
console.log(myString1 + " " + myString2 + "!"); //Hello World!
console.log(myString1 + ", " + myString2 + "!"); //Hello, World!

let i = 200;
console.log(i);
*/

//Learning Exercise about Variables

function pockerGame() {

    const STARTING_POKER_CHIPS = 100; // points
    const PLAYERS = 3;
    const NO_OF_STARTER_CARDS = 2;

    let playerOnePoints = STARTING_POKER_CHIPS;
    let playerTwoPoints = STARTING_POKER_CHIPS;
    let playerThreePoints = STARTING_POKER_CHIPS;

    playerOnePoints -= 50;
    playerTwoPoints -= 25;
    playerThreePoints += 75;

    let playerOneName = "Chloe";
    let playerTwoName = "Jasmine";
    let playerThreeName = "Jen";

    console.log(`Welcome to Texas Hold'em. The championship title will be awarded to one of these three players: 
            ${playerOneName}, ${playerTwoName} and ${playerThreeName}. 
            Each player has ${STARTING_POKER_CHIPS} in their pot. 
            We have an exciting game ahead of us. May the best player win!`)

    let gameHasEnded = false;

    gameHasEnded = ((playerOnePoints + playerTwoPoints) == 0) || // three has won
        ((playerTwoPoints + playerThreePoints) == 0) ||  // one has won
        ((playerOnePoints + playerThreePoints) == 0);  // two has won 

    console.log("Game has ended: ", gameHasEnded);
}

pockerGame();

let array = [2, 5, 7, 5, 12, 9, 7, 5, 4, 3, 5, 2, 4, 15]

let newArray = array.reduce(function (accumulator, curValue) {
  if (accumulator.indexOf(curValue) === -1) {
    accumulator.push(curValue)
  }
  return accumulator
}, [])

console.log(newArray)
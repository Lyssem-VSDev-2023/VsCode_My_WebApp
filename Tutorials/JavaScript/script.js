
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

//pockerGame();

let array = [2, 5, 7, 5, 12, 9, 7, 5, 4, 3, 5, 2, 4, 15]

let newArray = array.reduce(function (accumulator, curValue) {
  if (accumulator.indexOf(curValue) === -1) {
    accumulator.push(curValue)
  }
  return accumulator
}, [])

//console.log(newArray)

function testNumbers() {
  let num1 = '150';
  let flo1 = '1.50';

  console.log("********Converting strings to integers********");
  //Converting strings to integers
  console.log(parseInt('100'));
  console.log(parseInt(num1));
  console.log(parseInt('ABC'));
  console.log(parseInt('0xF')); //Hexadecimal number

  console.log("********Converting strings to float********");
  //Converting strings to float
  console.log(parseFloat('1.00'));
  console.log(parseFloat(flo1));
  console.log(parseFloat('ABC'));

  console.log("********More Conversion Examples********");
  //More Conversion Examples
  //Numbers after special characters are ignored
  console.log(parseInt('1.5'));
  console.log(parseInt('1 + 1'));

  //Using Template Literals
  console.log(parseInt(`${1 + 1}`));

  console.log("********Converting numbers to strings********");
  //Converting numbers to strings
  console.log(num1.toString());
  console.log(flo1.toString());
  console.log((100).toString());

}

//testNumbers();

function doMaths() {
  let num1 = 100;

  //Basic Math
  console.log("********Basic Math********");
  console.log(num1 + 25);
  console.log(num1 - 100);
  console.log(num1 * 100);
  console.log(num1 / 1500);

  console.log("********Additional Mathematical Operations********");
  //Additional Mathematical Operations
  console.log(num1 % 1500); // Remainder
  console.log(++num1); //Increment
  console.log(--num1); //Decrement

  console.log("********Using the Math Object********");
  //Using the Math Object
  console.log(Math.PI); //Pi 
  console.log(Math.sqrt(num1)); //Square root
}

//doMaths();

function doDtaes() {
  const now = new Date();
  const win95Launch = new Date(1995, 7, 24);

  console.log(now);
  console.log(win95Launch);

  const demoDate = new Date();
  demoDate.setMonth(0);
  console.log(demoDate);

  console.log(`Day of week: ${demoDate.getDay()}`);
  console.log(`Date: ${demoDate.getDate()}`);
}

//doDtaes();


function doArrays() {
  let arr1 = ["A", true, 2];

//Push and pop
console.log("\n********Push and pop********\n");
console.log(arr1.push("new value"));
console.log(arr1);
console.log(arr1.pop()); //Remove last value
console.log(arr1);

//Shift and unshift
console.log("\n********Shift and unshift********\n");
console.log(arr1.unshift("new value"));
console.log(arr1);
console.log(arr1.shift()); //Remove first value
console.log(arr1);

//Concat
console.log("\n********Concat********\n");
let arr2 = ["B", false, 3];
let newArr = arr1.concat(arr2);
let newArr2 = arr2.concat([1,2,3]);
console.log(newArr);
console.log(newArr2);

}

//doArrays();

function doForOf(){
  let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip"];

  for (let flavor of iceCreamFlavors) {
    console.log(flavor);
  } 

}

//doForOf();


function doJson() {
/***************************************************
 * JavaScript for Beginners
 * JS101 - JSON Demo
 *
 * BASICS    : JSON Format
 * STRINGIFY : Javascript to JSON
 * PARSE     : JSON to JavaScript
 ****************************************************/


// Think of a simple JavaScript object with data (property values)
const book = new Object({ title : "1984", author: "George Orwell"});
console.log("\n -------- ")
console.log(typeof book);
console.log(book);



// You can also have a collection of these objects
const myBooks = [
    new Object({ title : "1984", author: "George Orwell"}),
    new Object({ title : "Becoming", author: "Michelle Obama"}),
    new Object({ title : "Snow Crash", author: "Neal Stephenson"}),
    new Object({ title : "Predictably Irrational", author: "Dan Ariely"})
];
console.log("\n -------- ")
console.log(typeof myBooks);
console.log(myBooks);


// What if you had a Library service that you need to send the
// data to - e.g., myBooks is the list of books being checked out
// 
// Or you want to store the data to a remote database, or to the
// local filesystem - many networking and file transfer protocols 
// rely on simple text formats for request/response
//
// JSON = JavaScript Object Notation
// Convert JavaScript objects and arrays 
// to/from text (string) format



// JSON.stringify - object input
console.log("\n -------- ")
let bookJSON = JSON.stringify(book);
console.log(typeof bookJSON);
console.log(bookJSON);



// JSON.stringify - collection input
console.log("\n -------- ")
let myBooksJSON = JSON.stringify(myBooks);
console.log(myBooksJSON);



// JSON.parse - string input
let data = bookJSON;
let parsed = JSON.parse(data);
console.log("\n -------- ")
console.log(parsed);
console.log(Array.isArray(parsed));
console.log("Num items: "+parsed.length);



// JSON.parse - string input
data = myBooksJSON;
parsed = JSON.parse(data);
console.log("\n -------- ")
console.log(parsed);
console.log(Array.isArray(parsed));
console.log("Num items: "+parsed.length);
console.log("Author of 2nd book: "+parsed[1].author);
  
}

doJson();


function doObject() {
  /***************************************************
 * JavaScript for Beginners
 * JS101 - Objects Demo
 *
 * BASICS    : What are Objects?
 * SYNTAX    : Defining Objects
 * CREATION  : Object Literals & Constructors
 * PROPERTIES: Associated Variables
 * METHODS   : Associated Functions
 * "this"    : Associated Context
 ****************************************************/
 
/* START */

// How can you represent real-world objects in code?
// They have associated attributes = object PROPERTIES
// They have associated actions = object METHODS
// They have associated context = "this"

/*
// First:
// Let's define a simple object (with no properties or methods)
const blank = {};
console.log("Blank type:",typeof blank);
console.log("Blank value",blank);
*/

/*
// Next:
// Let's define an object with PROPERTIES (attributes)
// Objects are just a collection of name-value pairs
// separated by commas
const book = {
    title : "1984",
    author: "George Orwell",
    isAvailable: false
};
console.log("Book type:",typeof book);
console.log("Book value:\n",book);
*/

/*

// Next:
// Let's add actions we can take on it
// Note that these are properties too - defined as functions
const book = {
    title : "1984",
    author: "George Orwell",
    isAvailable: false,
    checkIn: function(){ this.isAvailable = true; },
    checkOut: function(){ this.isAvailable = false; }
};
console.log("Book type:",typeof book);
console.log("Book value:\n",book);
*/


// Next:
// We created objects above using OBJECT LITERALS
// (it is literally defined and created at once)
// Now we can look at using CONSTRUCTORS
// Constructors are like "templates" for an object
//  - they explain HOW the object is created
//  - to actually create an instance use "new"
//
// We'll look at using a base constructor called ..
// Object

/*
const book = new Object();
console.log("\n--- Define book");
console.log("Book type:",typeof book);
console.log("Book value:\n",book);
*/

/*
const data = {title:"1984",author:"George Orwell"};
const book1 = new Object(data);
console.log("\n--- Define book1 with data");
console.log("Book1 type:",typeof book1);
console.log("Book1 value:\n",book1);
*/


const dataFunc = {
  title:"1984",
  author:"George Orwell",
  isAvailable: true,
  checkIn: function(){ this.isAvailable = true; },
  checkOut: function(){ this.isAvailable = false; }
};
const book2 = new Object(dataFunc);
console.log("\n--- Define book2 with data and functions");
console.log("Book2 type:",typeof book2);
console.log("Book2 value:\n",book2);


// Next:
// Let's talk about PROPERTIES and METHODS
// How to accesss them
// How to use them

/*
// Dot Notation
console.log(book2.author);
book2.author="G. Orwell";
console.log(book2);

// Brackets Notation
console.log(book2["author"]);
book2["author"]="G. Orwell";
console.log(book2);


// Dot Notation
console.log(book2.isAvailable);
book2.checkOut();
console.log(book2);

// bracket Notation
console.log(book2.isAvailable);
book2["checkOut"]();
console.log(book2);

*/


// Last:
// Let's talk about "this"

const bookObj = {
   checkIn: function(){
       return this;
   }
}
console.log("\n\nthis is: ", bookObj.checkIn());
console.log(bookObj.checkIn() === bookObj);

function anotherCheckIn(){
  return this;
}
console.log("\n\nthis is: ", anotherCheckIn());
console.log(anotherCheckIn() === globalThis);


/* END */
}

doObject();

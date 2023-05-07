<style>
    r { color: Red }
    o { color: Orange }
    g { color: Green }
    bl { color: blue; text-decoration:underline }
</style>

<br><HR>

# **Intro to Javascript**

<br>
<br>

# Table of Content

1. [Variables Declaration](#1-variables-declaration)
1. [Numbers](#2-numbers)
1. [Strings](#3-strings)
1. [Booleans](#4-booleans)
1. [Functions](#5-functions)
1. [Anonymous functions](#6-anonymous-functions)
1. [Making Decisions](#7-making-decisions)
    - [Comparison operators and Booleans](#comparison-operators-and-booleans)
    - [If statement](#if-statement)
    - [If...else statements](#ifelse-statements)
    - [Logical operators and Booleans](#logical-operators-and-booleans)
    - [Ternary expressions (codensed if else)](#ternary-expressions-codensed-if-else) 
1. [Arrays and Loops](#8-arrays-and-loops)
    - [Manipulate arrays](#manipulate-arrays)
    - [Work with Loops](#work-with-loops)
    - [Query Arrays](#query-arrays)

<br>
<br>

<!---------------------Variables Declaration----------------------------->

# 1. Variables Declaration
[&#9650;](#table-of-content)
## <bl>var and let</bl>

```javascript
var aVariable; // Visible outside Code Block {}
aVariable = 321;

let myVariable; // only accessible within Code Block {}
myVariable = 123;
let myVariable2 = 123; //let cannot be reassigne
```

## <bl>const</bl>

```javascript
const MY_VARIABLE = 123; // Fixed value at declaration
const PI = 3;
PI = 4; // not allowed

const obj = { a: 3 };
obj = { b: 5 } // not allowed

const obj2 = { a: 3 };
obj.a = 5;  // allowed
```

## <bl>Data Types</bl>

- string, 
- number, 
- bigint, 
- boolean, 
- undefined, 
- and symbol

<br>

<!---------------------Numbers----------------------------->

# 2. Numbers
[&#9650;](#table-of-content)
Those are the allowed operations:

|Symbol|	Description|
|:-:|-|
|+	|Addition: Calculates the sum of two numbers.|
|-	|Subtraction: Calculates the difference of two numbers.|
|*	|Multiplication: Calculates the product of two numbers.	|
|/	|Division: Calculates the quotient of two numbers.	1|
|%	|Remainder: Calculates the remainder from the division of two numbers.|

<!---------------------Strings----------------------------->

# 3. Strings
[&#9650;](#table-of-content)
- 'This is a string'
- "This is also a string"
- let myString = 'This is a string value stored in a variable';

```cs
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!

//String Literals
let myString3 = "Hello";
let myString4 = "World";

`${myString3} ${myString4}!` //Hello World!
`${myString3}, ${myString4}!` //Hello, World!
```
<!---------------------Booleans----------------------------->

# 4. Booleans
[&#9650;](#table-of-content)
```cs
let myTrueBool = true
let myFalseBool = false

//This code resolves to false
let age = 1; 
let Age = 2; 
age == Age
```

<!---------------------Functions----------------------------->

# 5. Functions
[&#9650;](#table-of-content)
## Overview
- A function is free floating
- A method is attached to an object (console, in the example console.log)
- Use descriptive names to avoid ambiguity
- Use camelCasing to combine words
- Focused on specific 

```js
//Basic function
function displayGreeting() {
  console.log('Hello, world!');
}
displayGreeting();
```
- Use function and task comment through:  

```js
/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */
function pow(x, n) {
  ...
}
```
## function params
```js
function displayGreeting(name) { 
    const message = `Hello, ${name}!`; 
    console.log(message);
}
displayGreeting('Christopher');
```
With optional params
```js
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
displayGreeting('Christopher', 'Hi');
```

## return value
```js
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
let greetingMessage = createGreetingMessage('Christopher');
```

## Simple JS function test in a web page
```js
<!DOCTYPE html>
<html>
<head>
    <title>Message</title>
</head>
<body>
    <script>
        // TODO: Add hello code
        function getMessage(name) {
            return 'Hello, ' + name + '...';
        }
        const message = getMessage('Ornella');
        document.write(message);

        // TODO: Add setTimeout code

    </script>
</body>
</html>
```

<!---------------------Anonymous functions----------------------------->

# 6. Anonymous functions
[&#9650;](#table-of-content)
## Use a callback
```js
function displayDone() {
    console.log('Done!');
}

// timer value is in milliseconds
setTimeout(displayDone, 3000);
```
- The function is executed at a given time,
- Should not include perentheses () in the parameter, otherwise the function excutes immediately, or throw an error

## Anonymous functions
```js
setTimeout(
    function() { // anonymous function
        console.log('Done!');
    },
    3000 // 3000 milliseconds (3 seconds)
)
```
- The function is without a given name, and created inline
- avoid namespace population and help when being out of naming ideas

## Arrow functions (=>)
```js
setTimeout(
    () => { // anonymous function
        console.log('Done!');
    },
    3000 // 3000 milliseconds (3 seconds)
)
```
- indicate the start of the body of the function
- More consize

<!---------------------Making Decisions----------------------------->

# 7. Making Decisions
[&#9650;](#table-of-content)
## Comparison operators and Booleans
[&#9650;](#table-of-content)
|Symbol|	Description|	Example|
|-|-|-|
|<|	Less than: Compares two values and returns the true Boolean data type if the value on the left side is less than the right	|5 < 6 // true|
|<=|	Less than or equal to: Compares two values and returns the true Boolean data type if the value on the left side is less than or equal to the right	|5 <= 6 // true|
|>|	Greater than: Compares two values and returns the true Boolean data type if the value on the left side is larger than the right	|5 > 6 // false|
|>=|	Greater than or equal to: Compares two values and returns the true Boolean data type if the value on the left side is larger than or equal to the right	|5 >= 6 // false|
|===|	Strict equality: Compares two values and returns the true Boolean data type if values on the right and left are equal and are the same data type	|5 === 6 // false|
|!==|	Inequality: Compares two values and returns the opposite Boolean value of what a strict equality operator would return	|5 !== 6 // true|

## If statement
[&#9650;](#table-of-content)
```js
let isTrue = true;
if (isTrue) {
  // run code if true
}

//Exmaple:
let currentMoney = 1000;
let laptopPrice = 1500;

if (currentMoney >= laptopPrice){
    //Condition was true. Code in this block will run.
    console.log("Getting a new laptop!");
}
```
- The function is executed at a given time,
- Should not include perentheses () in the parameter, otherwise the function excutes immediately, or throw an error

## If...else statements
[&#9650;](#table-of-content)
```js
let currentMoney = 1000;
let laptopPrice = 1500;

if (currentMoney >= laptopPrice) {
    //Condition was true. Code in this block will run.
    console.log("Getting a new laptop!");
} else{
    //Condition was true. Code in this block will run.
    console.log("Can't afford a new laptop, yet!");
}
```

## Logical operators and Booleans
[&#9650;](#table-of-content)
|Symbol	|Description	|Example|
|-|-|-|
|&&	|Logical AND: Compares two Boolean expressions. Returns true only if both sides are true.	|(5 > 6) && (5 < 6 ) //One side is false, other is true. Returns false|
| &#124;&#124; |	Logical OR: Compares two Boolean expressions. Returns true if at least one side is true.	|(5 > 6) &#124;&#124; (5 < 6) //One side is false, other is true. Returns true|
|!|	Logical NOT: Returns the opposite value of a Boolean expression.	|!(5 > 6) // 5 is not greater than 6, but "!" will return true|

**using ligical operators in a declaration/assignement**
```js
let isHoliday = true;
let isMember = true;
let hasDiscount = isHoliday || isMember;
```

**using ligical operators in an if statement**
```js
let currentMoney= 800;
let laptopPrice = 1000;
let laptopDiscountPrice = laptopPrice - (laptopPrice * .20) //Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice){
    //Condition was true. Code in this block will run.
    console.log("Getting a new laptop!");
}
else {
    //Condition was true. Code in this block will run.
    console.log("Can't afford a new laptop, yet!");
}
```
**Negation operator**
```js
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```
## Ternary expressions (codensed if else)
[&#9650;](#table-of-content)

Syntax:
```html
let variable = condition ?  <return this if true> : <return this if false>
```

Exmaple:
```js
let firstNumber = 20;
let secondNumber = 10
let biggestNumber = firstNumber > secondNumber ? firstNumber: secondNumber;
```
replaces the following code:
```js
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```
## Full exmaple
```js
let cardOne = 7;
let cardTwo = 5;
let sum = cardOne + cardTwo; // 15
let cardOneBank = 7;
let cardTwoBank = 5;
let cardThreeBank = 6;
let cardFourBank = 4;

let cardThree = 7;
sum += cardThree;
if (sum > 21) {
  console.log('You lost');
}
console.log(`You have ${sum} points`);

let bankSum = cardOneBank + cardTwoBank + cardThreeBank + cardFourBank;

if (bankSum > 21 || (sum <= 21 && sum > bankSum)) {
  console.log('You win');
  process.exit(1); // exit program
} else {
  console.log('Bank wins');
}
```

<!---------------------Arrays and Loops----------------------------->

# 8. Arrays and Loops
## Manipulate arrays
[&#9650;](#table-of-content)

**Declare an array:**
```js
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan"];
```
**Access an array element**
```js
iceCreamFlavors[3] // Pistachio
```
**Change a value**
```js
iceCreamFlavors[4] = "Butter Pecan"; //Changes "Neapolitan" to "Butter Pecan"
```
**Add more values**
```js
iceCreamFlavors.push("Mint Chip");
```
**Array length**
```js
iceCreamFlavors.length // 6 flavors, because you recently added "Mint Chip"
```
**Remove a value**
```js
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip"];
delete iceCreamFlavors[iceCreamFlavors.length-1];
console.log(iceCreamFlavors[length-1]) // undefined

iceCreamFlavor[iceCreamFlavor.length-1] = "your choice";
```
**Remove an item**

>Syntax:
>```js
>array.splice(<position index, <number of elements to remove>)
>```
>Exmaple:
>```js
>iceCreamFlavor.splice(2,1); 
>// iceCreamFlavor is now [ 'Chocolate', 'Strawberry', 'Pistachio', 'Neapolitan', 'Mint Chip' ]
>// "Vanilla" removed
>```

## Work with Loops
[&#9650;](#table-of-content)

**For loop**
```js
for (let i = 0; i < 10; i++ ) { // i +=2 would work too and increases by 2
  console.log(i);
}
```

**While loops**

Require a condition
```js
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}
```

**Loops and arrays**
```js
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} // Ends when all flavors are printed
```

**The forEach() loop**
```js
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => console.log(number)); // 1 2 3 4 5
// or the following to access the index
numbers.forEach((number, index) => console.log(`Number ${number} ${index}`));
```
**Exit a loop (breack;)**
```js
let numbers = [1, 2, -1, 4, 5];
for(let i = 0; i< numbers.length; i++>) {
  if (numbers[i] < 0) {
    break;
  }
  console.log(numbers[i]);
}
```
## Query Arrays
[&#9650;](#table-of-content)

**find()**
```js
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip"];
iceCreamFlavors.find(flavor => flavor === "Chocolate") // "Chocolate"
```
**filter()**
```js
let iceCreamFlavors = [
  { name: "Chocolate", type: "Chocolate" }, 
  { name: "Strawberry", type: "fruit"}, 
  { name: "Vanilla", type: "Vanilla"}, 
  { name: "Pistachio", type: "Nuts"}, 
  { name: "Neapolitan", type: "Chocolate"}, 
  { name: "Mint Chip", type: "Chocolate"}
];

iceCreamFlavors.filter(flavor => flavor.type === "Chocolate") 
// [{ name: "Chocolate", type: "Chocolate" }, 
//  { name: "Neapolitan", type: "Chocolate"}, 
//  { name: "Mint Chip", type: "Chocolate"}]
```

**some() (Check a condition)**

```js
iceCreamFlavors.some(flavor => flavor.type === "Nuts") // true

iceCreamFlavors.filter(flavor => flavor.type !== "Nuts") // returns everything except for Pistachio.
```

**Projections map**
```js
let iceCreamFlavors = [
  { name: "Chocolate", type: "Chocolate" }, 
  { name: "Strawberry", type: "fruit"}, 
  { name: "Vanilla", type: "Vanilla"}, 
  { name: "Pistachio", type: "Nuts"}, 
  { name: "Neapolitan", type: "Chocolate"}, 
  { name: "Mint Chip", type: "Chocolate"}
];
iceCreamFlavors.map(flavor => {
  flavor.price = 1;
  return flavor;
}) // every item now has a new property price: 1 
```

**Aggregations (Accumulator and Reducer)**
```js
let sales = [{
 date : '2021-05-01',
 amount: 2
},
{
 date : '2021-05-01',
 amount: 1
}
// and so on...
]

let sum = 0;
for( let i =0; i< sales.length; i++) {
  sum += sales[i].amount; 
}

//or - more elegant and concise
sales.reduce((acc, curr) => acc + curr.amount, 0);

```
**Full Aggregation Example**

[See Advanced reduce(); exmaples](ReadMeAdvancedJS.md#1-reduce)

```js
// { scoops: [], total: }
let transactions = []

transactions.push({ scoops: ["Chocolate", "Vanilla", "Mint Chip"], total: 5.5 })
transactions.push({ scoops: ["Raspberry", "StrawBerry"], total: 2 })
transactions.push({ scoops: ["Vanilla", "Vanilla"], total: 4 })

const total = transactions.reduce((acc, curr) => acc + curr.total, 0);
console.log(`You've made ${total} $ today`); // You've made 11.5 $ today

let flavorDistribution = transactions.reduce((accumulator, currValue) => {
    currValue.scoops.forEach(scoop => {
      if (!accumulator[scoop]) {
        accumulator[scoop] = 0;
      }
      accumulator[scoop]++;
    })
    return accumulator;
  }, {}) // { Chocolate: 1, Vanilla: 3, Mint Chip: 1, Raspberry: 1, StrawBerry: 1 }

  console.log(transactions);
  console.log(flavorDistribution);
```








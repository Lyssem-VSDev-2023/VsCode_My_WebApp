# **Making Decisions in Javascript**

- [**Making Decisions in Javascript**](#making-decisions-in-javascript)
  - [Comparison operators and Booleans](#comparison-operators-and-booleans)
  - [If statement](#if-statement)
  - [If...else statements](#ifelse-statements)
  - [Implicit False values](#implicit-false-values)
  - [Switch (case)](#switch-case)
  - [Logical operators and Booleans](#logical-operators-and-booleans)
  - [Ternary expressions (codensed if else)](#ternary-expressions-codensed-if-else)
  - [Managing Exceptions (try... catch... finally...)](#managing-exceptions-try-catch-finally)
    - [Throwing Exceptions](#throwing-exceptions)
    - [`try...catch` block](#trycatch-block)
    - [`try...catch...finally` block](#trycatchfinally-block)

<!---------------------Making Decisions----------------------------->

---

## Comparison operators and Booleans

[&#9650;](#making-decisions-in-javascript)

|Symbol|Description|Example|
|-|-|-|
|<|Less than: Compares two values and returns the true Boolean data type if the value on the left side is less than the right|5 < 6 // true|
|<=|Less than or equal to: Compares two values and returns the true Boolean data type if the value on the left side is less than or equal to the right|5 <= 6 // true|
|>|Greater than: Compares two values and returns the true Boolean data type if the value on the left side is larger than the right|5 > 6 // false|
|>=|Greater than or equal to: Compares two values and returns the true Boolean data type if the value on the left side is larger than or equal to the right|5 >= 6 // false|
|===|Strict equality: Compares two values and returns the true Boolean data type if values on the right and left are equal and are the same data type|5 === 6 // false|
|!==|Inequality: Compares two values and returns the opposite Boolean value of what a strict equality operator would return|5 !== 6 // true|

## If statement

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

if only one line per statement, curly brakets could be removed:

```js
let currentMoney = 1000;
let laptopPrice = 1500;

if (currentMoney >= laptopPrice) 
    console.log("Getting a new laptop!");
else
    console.log("Can't afford a new laptop, yet!");
```

## Implicit False values

- Strings: **Empty String** evaluate to false
- Object: **null** or **undefined** evaluate to false
- Numbers: **0** evaluate to false

```js
const x = 0;
if (x) {
  console.log('x contain a value');
}

//or

const name = '';
if (name) {
    console.log('We have a name!');
} else {
    console.log('No name provided');
}

```

## Switch (case)

- Switch checks only for eaqulity (no <,>,<=,>=)

```js
const status = 500;

switch (status) {
    case 200:
        console.log('OK!');
        break;
    case 400: // or
    case 500: // or
        console.log('Error!');
        break;
    default: // else
        console.log('Unknown status');
        break;
}
```

## Logical operators and Booleans

|Symbol|Description|Example|
|-|-|-|
|&&|Logical AND: Compares two Boolean expressions. Returns true only if both sides are true.|(5 > 6) && (5 < 6 ) //One side is false, other is true. Returns false|
| &#124;&#124; |Logical OR: Compares two Boolean expressions. Returns true if at least one side is true.|(5 > 6) &#124;&#124; (5 < 6) //One side is false, other is true. Returns true|
|!|Logical NOT: Returns the opposite value of a Boolean expression.|!(5 > 6) // 5 is not greater than 6, but "!" will return true|
|==|check equality regardless of data type|'42' == 42 is true|
|===|check equality for value and data type|'42' === 42 is false|
|!=|check non-equality regardless of data type|'42' != 42 is false|
|!==|check non-equality for value and data type|'42' !== 42 is true|

**using logical operators in a declaration/assignement**:

```js
let isHoliday = true;
let isMember = true;
let hasDiscount = isHoliday || isMember;
```

**using logical operators in an if statement**:

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

**Negation operator**:
  
```js
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

## Ternary expressions (codensed if else)

**Syntax**:

```html
let variable = condition ?  <return this if true> : <return this if false>
```

**Exmaple**:

```js
let firstNumber = 20;
let secondNumber = 10
let biggestNumber = firstNumber > secondNumber ? firstNumber: secondNumber;
```

**replaces the following code**:

```js
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

**if … else if … else if … else**:

```js
function example() {
  return condition1 ? value1
        : condition2 ? value2
        : condition3 ? value3
        : value4;
}
```

Equivalent to:

```js
function example() {
  if (condition1) {
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition3) {
    return value3;
  } else {
    return value4;
  }
}
```

**Complete exmaple about conditions**:

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
<!---------------------Managing traffic ----------------------------->

## Managing Exceptions (try... catch... finally...)

### Throwing Exceptions

```js
console.log("\n********Throwing Exceptions********\n");

throw 'myException';
throw true;
```

### `try...catch` block

```js
console.log("\n********Try..Catch********\n");

function criticalCode() {
  throw "throwing an exception";
}

function logError(theException) {
  console.log(theException);
}

try {
  criticalCode();
} catch (ex) {
  console.log("Got an error");
  logError(ex);
}
```

### `try...catch...finally` block

```js
function criticalCode() {
  throw "throwing an exception";
}

function logError(theException) {
  console.log(theException);
}

console.log("\n********Try..Catch..Finally********\n");

try {
  criticalCode();
} catch (ex) {
  console.log("Got an error");
  logError(ex);
} finally {
  console.log("Code that always will run");
}
```

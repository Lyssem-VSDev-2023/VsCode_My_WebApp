# **Functions**

- [**Functions**](#functions)
  - [Named functions](#named-functions)
  - [Anonymous functions](#anonymous-functions)
  - [Arrow Functions](#arrow-functions)
  - [Required parameters](#required-parameters)
  - [Optional parameters](#optional-parameters)
  - [Default parameters](#default-parameters)
  - [Rest parameters](#rest-parameters)
  - [Deconstructed object parameters](#deconstructed-object-parameters)
  - [Define function types](#define-function-types)
  - [Function type inference](#function-type-inference)
  - [Exercise 1: Sort Function](#exercise-1-sort-function)
  - [Exercise 2: Update Calculator Function](#exercise-2-update-calculator-function)
  
---

<!---------------------Named functions-------------------------->

## Named functions

[&#9650;](#functions)

- A named function could be used before it is declared, as it is prelaoded in the context.

```ts
function addNumbers (x: number, y: number): number {
   return x + y;
}
addNumbers(1, 2);
```

## Anonymous functions

[&#9650;](#functions)

- An anonymous function couldn't be used before it is declared.
- It is executed when it is encoutred in the code.
- Anonymous function does not have a name, they have a value, usually assigned to a variable or passed to other functions

```ts
let addNumbers = function (x: number, y: number): number {
   return x + y;
}
addNumbers(1, 2);
```

**Example:**

```ts
let sum = function (input: number[]): number {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}

console.log(sum([1, 2, 3]));
```

## Arrow Functions

[&#9650;](#functions)

- Also called Lambda or fat arrow functions
- Often used with simple functions and in some event handling

```ts
let addNumbers2 = (x: number, y: number): number => x + y;
```

**Example:**

```ts
let total2 = (input: number[]): number => {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}
```

## Required parameters

[&#9650;](#functions)

- All function parameters are required, unless otherwise specified
- Number of arguments passed to a function must match the number of required function parameters.

```ts
function addNumbers (x: number, y: number): number {
   return x + y;
}

addNumbers(1, 2); // Returns 3
addNumbers(1);    // Returns an error
```

## Optional parameters

[&#9650;](#functions)

- Can be define by appending a question mark (?)
- The optional parameter must come after any required parameters
- Must address the possibility that y may be passed in as undefined

```ts
function addNumbers (x: number, y?: number): number {
    if (y === undefined) {
        return x;
    } else {
        return x + y;
    }
}

addNumbers(1, 2); // Returns 3
addNumbers(1);    // Returns 1
```

## Default parameters

[&#9650;](#functions)

- Assign default values to **optional** parameters
- must come after required parameters

```ts
function addNumbers (x: number, y = 25): number {
   return x + y;
}

addNumbers(1, 2);  // Returns 3
addNumbers(1);     // Returns 26
```

## Rest parameters

[&#9650;](#functions)

- When working  with multiple parameters as a group (for example, passing them in an array)
- If you don't know how many parameters a function will ultimately take
- The ellipsis `(...)` before the parameter is used to specify that multiple parameters may be passed

```ts
let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
   let total: number =  firstNumber;
   for(let counter = 0; counter < restOfNumbers.length; counter++) {
      if(isNaN(restOfNumbers[counter])){
         continue;
      }
      total += Number(restOfNumbers[counter]);
   }
   return total;
}
```

**Possible Outputs:**

```text
addAllNumbers(1, 2, 3, 4, 5, 6, 7);  // returns 28
addAllNumbers(2);                    // returns 2
addAllNumbers(2, 3, "three");        // flags error due to data type at design time, returns 5
```

## Deconstructed object parameters

[&#9650;](#functions)

- Function parameters are positional and must be passed in order
- To enable named parameters (deconstructed object parameters), use an interface to defined named rather than positional parameters

```ts
interface Message {
   text: string;
   sender: string;
}

function displayMessage({text, sender}: Message) {
    console.log(`Message from ${sender}: ${text}`);
}

displayMessage({sender: 'Christopher', text: 'hello, world'});
```

**Outputs:**

`Message from Christopher: hello, world`

## Define function types

[&#9650;](#functions)

- Type definition

```ts
type calculator = (x: number, y: number) => number;
```

- Use the Type as a signature of the function

```ts
let addNumbers: calculator = (x: number, y: number): number => x + y;
let subtractNumbers: calculator = (x: number, y: number): number => x - y;

console.log(addNumbers(1, 2));
console.log(subtractNumbers(1, 2));
```

- Could be used in other functions

```ts
let doCalculation = (operation: 'add' | 'subtract'): calculator => {
    if (operation === 'add') {
        return addNumbers;
    } else {
        return subtractNumbers;
    }
}
```

- The Type could be replaced by an interface

```ts
// type calculator = (x: number, y: number) => number;
interface Calculator {
    (x: number, y: number): number;
}
```

## Function type inference

[&#9650;](#functions)

- the following function are the same thanks to Type Inference

```ts
let addNumbers: Calculator = (x: number, y: number): number => x + y;
let addNumbers: Calculator = (number1: number, number2: number): number => number1 + number2;
let addNumbers: Calculator = (num1, num2) => num1 + num2;
```

## Exercise 1: Sort Function

[&#9650;](#functions)

- Convert the folloing JS Function to TS

```js
function sortDescending(a, b) {
    if (a > b) {
        return -1;
    } else if (b > a) {
        return 1;
    } else {
        return 0;
    }
}
    

function sortAscending(a, b) {
    if (a > b) {
        return 1;
    } else if (b > a) {
        return -1;
    } else {
        return 0;
    }
}
    
function buildArray(items, sortOrder) {
    let randomNumbers = [];
    let nextNumber;
    for (let counter = 0; counter < items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
            randomNumbers.push(nextNumber);
        } else {
            counter--;
        }
    }
    if (sortOrder === 'ascending') {
        return randomNumbers.sort(sortAscending);
    } else {
        return randomNumbers.sort(sortDescending);
    }
}
    
let myArray1 = buildArray(12, 'ascending');
let myArray2 = buildArray(8, 'descending');

console.log(myArray1);
console.log("-------------");
console.log(myArray2);
```

**Converted to TypeScript**:

```ts
type compareFunctionType = (a: number, b:number) => number;

let sortDescending: compareFunctionType = (a, b) => {
if (a > b) {
    return -1;
} else if (b > a) {
    return 1;
} else {
    return 0;
}
}

let sortAscending: compareFunctionType = (a, b) => {
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    } else {
      return 0;
    }
  }

function buildArray(items: number, sortOrder: 'ascending' | 'descending'): number[] {
    let randomNumbers: number[] = [];
    let nextNumber: number;
    for (let counter = 0; counter < items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
          randomNumbers.push(nextNumber);
        } else {
          counter--;
        }
    }
    if (sortOrder === 'ascending') {
      return randomNumbers.sort(sortAscending);
    } else {
      return randomNumbers.sort(sortDescending);
    }
}

let myArray1 = buildArray(12, 'ascending');
let myArray2 = buildArray(8, 'descending');
console.log(myArray1);
console.log("-----------");
console.log(myArray2);
```

**Output**:

```text
[
  12, 16, 24, 31, 34,'
  41, 51, 66, 70, 71,'
  84, 98
]
-----------
[
  87, 68, 62, 60,
  58, 54, 51,  6
]
```

## Exercise 2: Update Calculator Function

[&#9650;](#functions)

- Convert the folloing JS Function to TS

```js
function loanCalculator (principle, interestRate, months) {
    let interest = interestRate / 1200;  
    let payment;
    payment = principle * interest / (1 - (Math.pow(1/(1 + interest), months)));
    return payment.toFixed(2);
}
```

**Converted to TypeScript**:

```ts
function loanCalculator (principle: number, interestRate: number, months = 12): string {
    let interest: number = interestRate / 1200;   
    let payment: number;
    payment = principle * interest / (1 - (Math.pow(1/(1 + interest), months)));
    return payment.toFixed(2);
}

let myLoan: string = loanCalculator(1000, 5);
console.log(myLoan);
```

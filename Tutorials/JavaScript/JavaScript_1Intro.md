# **Intro to Javascript**

- [**Intro to Javascript**](#intro-to-javascript)
  - [Variables Declaration](#variables-declaration)
    - [var and let](#var-and-let)
    - [const](#const)
    - [Data Types](#data-types)
  - [Numbers](#numbers)
    - [Math operations](#math-operations)
    - [Conversions](#conversions)
  - [Strings](#strings)
  - [Booleans](#booleans)
  - [Dates](#dates)

<!---------------------Variables Declaration----------------------------->

---

## Variables Declaration

[&#9650;](#intro-to-javascript)

### var and let

```javascript
var aVariable; // Visible outside Code Block {}
aVariable = 321;

let myVariable; // only accessible within Code Block {}
myVariable = 123;
let myVariable2 = 123; //let cannot be reassigne
```

### const

```javascript
const MY_VARIABLE = 123; // Fixed value at declaration
const PI = 3;
PI = 4; // not allowed

const obj = { a: 3 };
obj = { b: 5 } // not allowed

const obj2 = { a: 3 };
obj.a = 5;  // allowed
```

### Data Types

- string,
- number,
- bigint,
- boolean,
- undefined,
- and symbol

---

<!---------------------Numbers----------------------------->

## Numbers

[&#9650;](#intro-to-javascript)

Those are the allowed operations:

|Symbol|Description|
|:-:|-|
|**`+`**|Addition: Calculates the sum of two numbers.|
|**`-`**|Subtraction: Calculates the difference of two numbers.|
|**`*`**|Multiplication: Calculates the product of two numbers.|
|**`/`**|Division: Calculates the quotient of two numbers.|
|**`%`**|Remainder: Calculates the remainder from the division of two numbers.|
|**`++num`**|Increment a number.|
|**`--num`**|Decrement a number.|

### Math operations

**Declaration**:

```js
let num1 = 100;
```

**Basic Math**:

```js
//Basic Math
console.log("********Basic Math********");
console.log(num1 + 25);
console.log(num1 - 100);
console.log(num1 * 100);
console.log(num1 / 1500);
```

Output

```text
********Basic Math********
125
0
10000
0.06666666666666667
```

**Additional Mathematical Operations**:

```js
console.log("********Additional Mathematical Operations********");
//Additional Mathematical Operations
console.log(num1 % 1500); // Remainder
console.log(++num1); //Increment
console.log(--num1); //Decrement
```

Output

```text
********Additional Mathematical Operations********
100
101
100
```

**Using the Math Object**:

```js
console.log("********Using the Math Object********");
//Using the Math Object
console.log(Math.PI); //Pi 
console.log(Math.sqrt(num1)); //Square root
```

Output

```text
********Using the Math Object********
3.141592653589793
10
```

### Conversions

**Declaration**:

```js
let num1 = '150';
let flo1 = '1.50';
```

**Converting strings to integers**:

```js
console.log("********Converting strings to integers********");
//Converting strings to integers
console.log(parseInt('100'));
console.log(parseInt(num1));
console.log(parseInt('ABC'));
console.log(parseInt('0xF')); //Hexadecimal number
```

Output

```text
********Converting strings to integers********
100
150
NaN
15
```

**Converting strings to float**:

```js
console.log("********Converting strings to float********");
//Converting strings to float
console.log(parseFloat('1.00'));
console.log(parseFloat(flo1));
console.log(parseFloat('ABC'));
```

Output

```text
********Converting strings to float********
1
1.5
NaN
```

**More Conversion Examples**:

```js
console.log("********More Conversion Examples********");
//More Conversion Examples
//Numbers after special characters are ignored
console.log(parseInt('1.5')); 
console.log(parseInt('1 + 1'));
//Using Template Literals
console.log(parseInt(`${1 + 1}`));
```

Output:

```text
********More Conversion Examples********
1
1
2
```

**Converting numbers to strings**:

```js
console.log("********Converting numbers to strings********");
//Converting numbers to strings
console.log(num1.toString());
console.log(flo1.toString());
console.log((100).toString());
```

Output

```text
********Converting numbers to strings********
150
1.50
100
```

<!---------------------Strings----------------------------->

---

## Strings

[&#9650;](#intro-to-javascript)

- 'This is a string'
- "This is also a string"
- `let myString = 'This is a string value stored in a variable'`;

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
`${myString3}, ${ 1 + 2 }!` //Hello, 3!
```
<!---------------------Booleans----------------------------->

---

## Booleans

[&#9650;](#intro-to-javascript)

```js
let myTrueBool = true
let myFalseBool = false

//This code resolves to false
let age = 1; 
let Age = 2; 
age == Age
```

## Dates

[&#9650;](#intro-to-javascript)

- Months and dates are 0 dased indexes (0 => Jan || 0 => Monday)

```js
const now = new Date();
const win95Launch = new Date(1995, 7, 24);

console.log(now);
console.log(win95Launch);

const demoDate = new Date();
demoDate.setMonth(0);
console.log(demoDate);

console.log(`Day of week: ${demoDate.getDay()}`);
console.log(`Date: ${demoDate.getDate()}`);
```

Output

```text
2023-05-08T13:30:58.750Z
1995-08-23T23:00:00.000Z
2023-01-08T13:30:58.755Z
Day of week: 0
Date: 8
```

**Date operations**:

|Component|Get|Set|
|-|-|-|
|Year|getFullYear()|setFullYear()|
|Month|getMonth()|setMonth()|
|Date (of month)|getDate()|setDate()|
|Hours|getHours()|setHours()|
|Minutes|getMinutes()|setMinutes()|
|Seconds|getSeconds()|setSeconds()|
|Milliseconds|getMilliseconds()|setMilliseconds()|
|Day (of week)|getDay()||

**Date formating**:

- `YYYY-MM-DDTHH:mm:ss.sssZ`
- Date-only form: `YYYY, YYYY-MM, YYYY-MM-DD`
- Date-time form: Date only followed by T followed by `HH:mm, HH:mm:ss, or HH:mm:ss.sss.` For example, **`2011-10-10`** (date-only form), **`2011-10-10T14:48:00`**(date-time form)

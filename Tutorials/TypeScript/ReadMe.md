# **TypeScript**

- [**TypeScript**](#typescript)
  - [1. Type inference in TypeScript](#1-type-inference-in-typescript)
    - [Variables Declaration](#variables-declaration)
    - [Types and subtypes](#types-and-subtypes)
  - [2. Primitive types](#2-primitive-types)
    - [Booleans](#booleans)
    - [Number and BigInteger](#number-and-biginteger)
    - [Strings](#strings)
    - [enums](#enums)
  - [3. Any and unknown types](#3-any-and-unknown-types)
    - [Any type](#any-type)
    - [Unknown type](#unknown-type)
    - [Type assertion](#type-assertion)
    - [Type guards](#type-guards)
  - [4. Union and intersection](#4-union-and-intersection)
    - [Union types](#union-types)
    - [Intersection types](#intersection-types)
  - [5. Literal types](#5-literal-types)
    - [literals narrowing](#literals-narrowing)
  - [6. Collection types](#6-collection-types)
    - [Arrays](#arrays)
    - [Tuples](#tuples)
  - [7. Implement interfaces in TypeScript](#7-implement-interfaces-in-typescript)
    - [The Interface](#the-interface)
    - [Using the type alias](#using-the-type-alias)
    - [Extend an interface](#extend-an-interface)
    - [Create indexable types](#create-indexable-types)
    - [Describe a JavaScript API](#describe-a-javascript-api)

---

<!---------------------Type inference in TypeScript----------------------------->

## 1. Type inference in TypeScript

[&#9650;](#typescript)

### TypeScript features

- Interfaces
- Namespaces
- Generics
- Abstract classes
- Data modifiers
- Optionals
- Function overloading
- Decorators
- Type utils
- readonly keyword

### Variables Declaration

Declare explicit types with annotation (optional)

```ts
let myVariable: number
let myVariable: number = 10
let myVariable = 10
```

Exmaples

```ts
let x: number;        //* Explicitly declares x as a number type
let x: number = 10;   //* Explicitly declares x as a number type and assign it
let y = 1;            //* Implicitly declares y as a number type
let z;                //* Declares z without initializing it, can accept any type assigned to it
```

### Types and subtypes

- any
  - Primitive Types
    - boolean
    - number
    - string
    - undefined *(cannot be referenced)*
    - null *(cannot be referenced)*
    - void *(Indicate that nothing is returned)*
    - enum *(user defined)*
  - Object Types
    - class
    - interface
    - array
    - literals
  - Parameter Types

<!---------------------Primitive types----------------------------->

## 2. Primitive types

[&#9650;](#typescript)

### Booleans

```ts
let flag: boolean;
let yes = true;
let no = false;
```

### Number and BigInteger

```ts
let x: number;
let y = 0;
let z: number = 123.456;
let big: bigint = 100n;
```

### Strings

```ts
let s: string;
let empty = "";
let abc = 'abc';
```

```ts
let firstName: string = "Lyes";
let sentence: string = `My name is ${firstName}.
    I am new to TypeScript.`;
console.log(sentence);
```

### enums

```ts
enum ContractStatus {
     Permanent,
     Temp,
     Apprentice
}
let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);
```

**output: ```1```**

By default, enum index strats at **0**, but we can alter that as follows

```ts
enum ContractStatus {
     Permanent = 1,
     Temp,
     Apprentice
}
let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);
```

**output: ```2```**

<!---------------------Any and unknown types----------------------------->

## 3. Any and unknown types

[&#9650;](#typescript)

### Any type

Can represent any type, usefull when expecting a return value from a 3rd party library

```ts
let randomValue: any = 10;
randomValue = 'Mateo';   // OK
randomValue = true;      // OK

console.log(randomValue.name);  // Logs "undefined" to the console
randomValue();                  // Returns "randomValue is not a function" error
randomValue.toUpperCase();      // Returns "randomValue is not a function" error
```

### Unknown type

Can represent any type, usefull when expecting a return value from a 3rd party library

```ts
let randomValue: unknown = 10;
randomValue = true;
randomValue = 'Mateo';

console.log(randomValue.name);  // Error: Object is of type unknown
randomValue();                  // Error: Object is of type unknown
randomValue.toUpperCase();      // Error: Object is of type unknown
```

### Type assertion

- Basically perfrom special checks before calling the statement  

For Example:

```ts
(randomValue as string).toUpperCase();
(<string>randomValue).toUpperCase();

// the complete example:

let randomValue: unknown = 10;

randomValue = true;
randomValue = 'Mateo';

if (typeof randomValue === "string") {
    console.log((randomValue as string).toUpperCase());    //* Returns MATEO to the console.
} else {
    console.log("Error - A string was expected here.");    //* Returns an error message.
}

```

### Type guards

|Type|Predicate|
|-|-|
|string|typeof s === "string"|
|number|typeof n === "number"|
|boolean|typeof b === "boolean"|
|undefined|typeof undefined === "undefined"|
|function|typeof f === "function"|
|array|Array.isArray(a)|

<!---------------------Union and intersection----------------------------->

## 4. Union and intersection

[&#9650;](#typescript)

### Union types

- Describes a value that can be one of several types, usefull when values are returned from an API or 3PP library.
- While **```any```** type has no restrictions, **```union```** type restricts the specified types.

```ts
let multiType: number | boolean;
multiType = 20;         //* Valid
multiType = true;       //* Valid
multiType = "twenty";   //* Invalid
```

```ts
function add(x: number | string, y: number | string) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two'));  //* Returns "onetwo"
console.log(add(1, 2));          //* Returns 3
console.log(add('one', 2));      //* Returns error
```

### Intersection types

- `Intersection` types are similar to `union` types, but they rather allow to group the properties of the declared types.
- `Intersection` are usualy used with interfaces  

```ts
interface Employee {
  employeeID: number;
  age: number;
}
interface Manager {
  stockPlan: boolean;
}
type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};
```
<!---------------------Literal types----------------------------->

## 5. Literal types

[&#9650;](#typescript)

- A literal is a more specific subtype of a collective type
- The types of literals are: `string`, `number`, and `boolean`.

### literals narrowing

- `var` or `let` when used to declar a type, the possibilties are undelimited within the specied type
- `const` is however restrictive to a unique value of the specied type
- The process of going from a large number of possibilities to limited possible values is called **narrowing**
- Literal types are written as object, array, function, or constructor type literals and are used to compose new types from other types.

```ts
type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";    //* Valid
myResult = "pass";          //* Valid
myResult = "failure";     
```

```ts
type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1;    //* Valid
diceRoll = 2;    //* Valid
diceRoll = 7;    //* Invalid

```

<!---------------------Collection types----------------------------->

## 6. Collection types

[&#9650;](#typescript)

- A literal is a more specific subtype of a collective type
- The types of literals are: `string`, `number`, and `boolean`.

### Arrays

- could be declared in two ways

```ts
let list: number[] = [1, 2, 3];
```

```ts
let list: Array<number> = [1, 2, 3];
```

### Tuples

- Array that contains values of mixed types.

```ts
let person1: [string, number] = ['Marcia', 35];
let person1: [string, number] = ['Marcia', 35, true]; // throws an error
let person1: [string, number] = [35, 'Marcia']; // throws an error
```

<!---------------------Implement interfaces in TypeScript-------------------------->

## 7. Implement interfaces in TypeScript

[&#9650;](#typescript)

Implement interfaces in TypeScript

### The Interface

- The interface describes the object you will work with, when it comes to names and data types.
- Could be reopened to add new propoerties (extendable)
- Should be declared in **PascalCase**
- The properties (or members) could be:
  - **Required :** `firstName: string;`
  - **Optional :** `firstName?: string;`
  - **Read only :** `readonly firstName: string;`
  
```ts
interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string;
}
```

```ts
let employee: Employee = {
    firstName : "Emil",
    lastName: "Andersson",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}
employee.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string'
```

### Using the type alias

- A type alias is a definition of a type of data
- Could be used with union, primitive, intersection, tuple, or others
- Type aliases can act like interfaces
- Type alias cannot be reopened to add new properties

```ts
type Employee = {
    firstName: string;
    lastName: string;
    fullName(): string;
}
```

**Complete Exmaple:**

```ts
interface IceCream {
   flavor: string;
   scoops: number;
   instructions?: string;
}

let myIceCream: IceCream = {
   flavor: 'vanilla',
   scoops: 2
}

console.log(myIceCream.flavor);

function tooManyScoops(dessert: IceCream) {
   if (dessert.scoops >= 4) {
      return dessert.scoops + ' is too many scoops!';
   } else {
      return 'Your order will be ready soon!';
   }
}

console.log(tooManyScoops({flavor: 'vanilla', scoops: 5}));
```

### Extend an interface

To allow reusability, interfaces could be extended by comying its propoerties and creating new ones. the following apply thoough:

- All required properties must be implemented
- Two interfaces can have the same property name and type

```ts
interface Sundae extends IceCream {
    sauce: 'chocolate' | 'caramel' | 'strawberry';
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: string;
}

let myIceCream2: Sundae = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: true
}

function tooManyScoops2(dessert: Sundae) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    } else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops2(myIceCream2));
console.log(tooManyScoops2({flavor: 'vanilla', scoops: 5, sauce: 'caramel'}));
```

### Create indexable types

```ts
interface IceCreamArray {
    [index: number]: string;
}

let myIceCream: IceCreamArray;
myIceCream = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream[0];
console.log(myStr); 
```

### Describe a JavaScript API

```ts
const fetchURL = 'https://jsonplaceholder.typicode.com/posts'
// Interface describing the shape of our json data
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
async function fetchPosts(url: string) {
    let response = await fetch(url);
    let body = await response.json();
    return body as Post[];
}
async function showPost() {
    let posts = await fetchPosts(fetchURL);
    // Display the contents of the first item in the response
    let post = posts[0];
    console.log('Post #' + post.id)
    // If the userId is 1, then display a note that it's an administrator
    console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()))
    console.log('Title: ' + post.title)
    console.log('Body: ' + post.body)
}

showPost();
```
# **Interfaces in TypeScript**

- [**Interfaces in TypeScript**](#interfaces-in-typescript)
  - [The Interface](#the-interface)
  - [Using the type alias](#using-the-type-alias)
  - [Extend an interface](#extend-an-interface)
  - [Create indexable types](#create-indexable-types)
  - [Describe a JavaScript API](#describe-a-javascript-api)
  - [Exercise: Implement Interfaces](#exercise-implement-interfaces)
  
---

<!---------------------Implement interfaces in TypeScript-------------------------->

## The Interface

[&#9650;](#interfaces-in-typescript)

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

## Using the type alias

[&#9650;](#interfaces-in-typescript)

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

## Extend an interface

[&#9650;](#interfaces-in-typescript)

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

## Create indexable types

[&#9650;](#interfaces-in-typescript)

```ts
interface IceCreamArray {
    [index: number]: string;
}

let myIceCream: IceCreamArray;
myIceCream = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream[0];
console.log(myStr); 
```

## Describe a JavaScript API

[&#9650;](#interfaces-in-typescript)

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

## Exercise: Implement Interfaces

[&#9650;](#interfaces-in-typescript)

Update the Locan Interest caalcultaion function to implement interfaces.

**Original Javascript**:

```js
function calculateInterestOnlyLoanPayment(principle, interestRate) {
    let interest = interestRate / 1200; 
    let payment;
    payment = principle * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}

function calculateConventionalLoanPayment(principle, interestRate, months) {
    let interest = interestRate / 1200; 
    let payment;
    payment = principle * interest / (1 - (Math.pow(1 / (1 + interest), months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}

let interestOnlyPayment = calculateInterestOnlyLoanPayment(30000, 5);
let conventionalPayment = calculateConventionalLoanPayment(30000, 5, 180);

console.log(interestOnlyPayment);
console.log(conventionalPayment);
```

**Output**:

`The interest only loan payment is 125.00`  
`The conventional loan payment is 237.24`

**Converted to TypeScript**:

```ts
interface Loan {
    principle: number,
    interestRate: number
}

interface ConventionalLoan extends Loan {
    months: number      
}

function calculateInterestOnlyLoanPayment(loanTerms: Loan): string {
    let interest: number = loanTerms.interestRate / 1200; 
    let payment: number;
    payment = loanTerms.principle * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}

function calculateConventionalLoanPayment(loanTerms: ConventionalLoan): string {
    let interest: number = loanTerms.interestRate / 1200;
    let payment: number;
    payment = loanTerms.principle * interest / (1 - (Math.pow(1/(1 + interest), loanTerms.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}

let interestOnlyPayment = calculateInterestOnlyLoanPayment({principle: 30000, interestRate: 5});
let conventionalPayment = calculateConventionalLoanPayment({principle: 30000, interestRate: 5, months: 180});

console.log(interestOnlyPayment); 
console.log(conventionalPayment); 
```

**Output**:

`The interest only loan payment is 125.00`
`The conventional loan payment is 237.24`

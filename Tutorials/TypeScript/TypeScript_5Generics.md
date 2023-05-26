# **Using Generics**

- [**Using Generics**](#using-generics)
  - [Using generics](#using-generics-1)
  - [Using multiple type variables](#using-multiple-type-variables)
  - [Using methods and properties of a generic type](#using-methods-and-properties-of-a-generic-type)
  - [Using type guards with generics](#using-type-guards-with-generics)
  - [Declare a generic interface](#declare-a-generic-interface)
  - [Declare a generic interface as a function type](#declare-a-generic-interface-as-a-function-type)
  - [Declare a generic interface as a class type](#declare-a-generic-interface-as-a-class-type)
  - [Define a generic class](#define-a-generic-class)
  - [Implement generics with custom types and classes](#implement-generics-with-custom-types-and-classes)
  - [Exercise: Declare a class by using a generic](#exercise-declare-a-class-by-using-a-generic)

---

<!---------------------Named functions-------------------------->

## Using generics

[&#9650;](#using-generics)

- Generics are code templates that you can define and reuse throughout your codebase
- They provide a way to tell functions, classes, or interfaces what type you want to use
- Create generic functions when your code is a function or class that:
  - Works with a variety of data types.
  - Uses that data type in several places.
- Generics can:
  - Provide more flexibility when working with types.
  - Enable code reuse.
  - Reduce the need to use the any type.

The getArray function generates an array of items of any type.

```ts
function getArray(items : any[]) : any[] {
    return new Array().concat(items);
}

let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(['Cats', 'Dogs', 'Birds']);
numberArray.push(25);                       // OK
stringArray.push('Rabbits');                // OK
numberArray.push('This is not a number');   // OK
stringArray.push(30);                       // OK
console.log(numberArray);                   // [5, 10, 15, 20, 25, "This is not a number"]
console.log(stringArray);                   // ["Cats", "Dogs", "Birds", "Rabbits", 30]
```

- **the problem**: with the `any` type, numbers could be passed an array of strings, and a string could be passed to an array of numbers
- Generics determine the type of the values that the array will contain.
- Generics define one or more type variables to identify the type or types that you will be passed
- Generics are enclosed in angle brackets (< >)
- &lt;T&gt; is a commonly used name for a generic, but you can name it however you wish
- the generic type is passed when calling the function, then it used whenever the generic is used in teh body of the function

```ts
function getArray<T>(items : T[]) : T[] {
    return new Array<T>().concat(items);
}

let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);                      // OK
numberArray.push('This is not a number');  // Generates a compile time type check error

let stringArray = getArray<string>(['Cats', 'Dogs', 'Birds']);
stringArray.push('Rabbits');               // OK
stringArray.push(30);                      // Generates a compile time type check error
```

## Using multiple type variables

[&#9650;](#using-generics)

- multiples types could be passed in the generics

```ts
function identity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let returnNumber = identity<number, string>(100, 'Hello!');
let returnString = identity<string, string>('100', 'Hola!');
let returnBoolean = identity<boolean, string>(true, 'Bonjour!');

returnNumber = returnNumber * 100;   // OK
returnString = returnString * 100;   // Error: Type 'number' not assignable to type 'string'
returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'
```

## Using methods and properties of a generic type

[&#9650;](#using-generics)

```ts
type ValidTypes = string | number;

function identity<T extends ValidTypes, U> (value: T, message: U) : T {
    let result: T = value;    // Error
    console.log(message);
    return result
}

let returnNumber = identity<number, string>(100, 'Hello!');      // OK
let returnString = identity<string, string>('100', 'Hola!');     // OK
let returnBoolean = identity<boolean, string>(true, 'Bonjour!'); // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.
```

```ts
function getPets<T, K extends keyof T>(pet: T, key: K) {
    return pet[key];
  }
  
  let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
  let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish"}
  
  console.log(getPets(pets1, "fish"));  // Returns 6
  console.log(getPets(pets2, 1));       // retutn cats
  console.log(getPets(pets2, "1"));     // error
```

## Using type guards with generics

[&#9650;](#using-generics)

```ts
type ValidTypes = string | number;
function identity<T extends ValidTypes, U> (value: T, message: U) {   // Return type is inferred
    let result: ValidTypes = '';
    let typeValue: string = typeof value;

    if (typeof value === 'number') {           // Is it a number?
        result = value + value;                // OK
    } else if (typeof value === 'string') {    // Is it a string?
        result = value + value;                // OK
    }

    console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);

    return result
}

let numberValue = identity<number, string>(100, 'Hello');
let stringValue = identity<string, string>('100', 'Hello');

console.log(numberValue);       // Returns 200
console.log(stringValue);       // Returns 100100
```

## Declare a generic interface

[&#9650;](#using-generics)

```ts
interface Identity<T, U> {
    value: T;
    message: U;
}

let returnNumber: Identity<number, string> = {
    value: 25,
    message: 'Hello!'
}
let returnString: Identity<string, number> = {
    value: 'Hello!',
    message: 25
}
```

## Declare a generic interface as a function type

[&#9650;](#using-generics)

```ts
interface ProcessIdentity<T, U> {
    //Function does not have a name, so it can apply to any function
    //with the same signature
    (value: T, message: U): T; 
}

function processIdentity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber1 = processor(100, 'Hello!');   // OK
let returnString1 = processor('Hello!', 100);   // Type check error
```

## Declare a generic interface as a class type

[&#9650;](#using-generics)

```ts
interface ProcessIdentity<T, U> {
    value: T;
    message: U;
    process(): T;
}

class processIdentity<X, Y> implements ProcessIdentity<X, Y> {
    value: X;
    message: Y;
    constructor(val: X, msg: Y) {
        this.value = val;
        this.message = msg;
    }
    process() : X {
        console.log(this.message);
        return this.value
    }
}

let processor = new processIdentity<number, string>(100, 'Hello');
processor.process();            // Displays 'Hello'
processor.value = 100;          // OK
processor.value = '100';        // Type check error
```

## Define a generic class

[&#9650;](#using-generics)

```ts
class processIdentity<T, U> {
    private _value: T;
    private _message: U;
    constructor(value: T, message: U) {
        this._value = value;
        this._message = message;
    }
    getIdentity() : T {
        console.log(this._message);
        return this._value
    }
}
let processor = new processIdentity<number, string>(100, 'Hello');
console.log(processor.getIdentity()); // Displays 'Hello' 100
```

## Implement generics with custom types and classes

[&#9650;](#using-generics)

Using generics with primitive types, like number, string, or boolean, illustrate the concepts of generics well, but the most powerful uses come from using them with custom types and classes.

This example has a base class called Car and two subclasses, ElectricCar and Truck. The accelerate function accepts a generic instance of Car and then returns it. By telling the accelerate function that T must extend Car, TypeScript knows which functions and properties you can call within the function. The generic also returns the specific type of car (ElectricCar or Truck) passed into the function, rather than a non-specific Car object.

```ts
class Car {
    make: string = 'Generic Car';
    doors: number = 4;
}
class ElectricCar extends Car {
    make = 'Electric Car';
    doors = 4
}
class Truck extends Car {
    make = 'Truck';
    doors = 2
}
function accelerate<T extends Car> (car: T): T {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`)
    return car
}

let myElectricCar = new ElectricCar;
accelerate<ElectricCar>(myElectricCar);
let myTruck = new Truck;
accelerate<Truck>(myTruck);

```

The output to the console is:

```test
Copy
"All 4 doors are closed."
"The Electric Car is now accelerating!"
"All 2 doors are closed."
"The Truck is now accelerating!"
```

## Exercise: Declare a class by using a generic

[&#9650;](#using-generics)

DataStore is a utility function that can store up to 10 string values in an array.  
Rewrite the DataStore class so the array can store items of any type.

```ts
class DataStore {

    private _data = new Array(10);
    
    AddOrUpdate(index: number, item: string) {
        if(index >=0 && index <10) {
            this._data[index] = item;
        } else {
            alert('Index is greater than 10')
        }
    }
    GetData(index: number) {
        if(index >=0 && index < 10) {
            return this._data[index];
        } else {
            return
        }
    }
}

let cities = new DataStore();

cities.AddOrUpdate(0, "Mumbai");
cities.AddOrUpdate(1, "Chicago");
cities.AddOrUpdate(11, "London");       // item not added

console.log(cities.GetData(1));         // returns 'Chicago'
console.log(cities.GetData(12));        // returns 'undefined'
```

**Reviewed Code:**

```ts
class DataStore<T> {

    private _data: Array<T> = new Array(10);

    AddOrUpdate(index: number, item: T) {
        if(index >=0 && index <10) {
            this._data[index] = item;
        }
    }
    GetData(index: number) {
        if(index >=0 && index < 10) {
            return this._data[index];
        } else {
            return
        }
    }

}

let cities = new DataStore<string>();
cities.AddOrUpdate(0, "Mumbai");
cities.AddOrUpdate(1, "Chicago");
cities.AddOrUpdate(2, "London");
cities.AddOrUpdate(11, "New York");
console.log(cities.GetData(11));        // returns 'undefined'

// TODO Test items as numbers.
let empIDs = new DataStore<number>();
empIDs.AddOrUpdate(0, 50);
empIDs.AddOrUpdate(1, 65);
empIDs.AddOrUpdate(2, 89);                  
console.log(empIDs.GetData(0));         // returns 50

// TODO Test items as objects.
type Pets = {
    name: string;
    breed: string;
    age: number
}
let pets = new DataStore<Pets>();
pets.AddOrUpdate(0, { name: 'Rex', breed: 'Golden Retriever', age: 5});
pets.AddOrUpdate(1, { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3});
console.log(pets.GetData(1));         // returns { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3}
```

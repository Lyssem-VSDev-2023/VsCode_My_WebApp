# **Declare and Instantiate Classes**

- [**Declare and Instantiate Classes**](#declare-and-instantiate-classes)
  - [Class components](#class-components)
  - [Full Class Example](#full-class-example)
  - [Access modifiers](#access-modifiers)
  - [Static Properties \& Methods](#static-properties--methods)
  - [Extend a class using inheritance](#extend-a-class-using-inheritance)
  - [Declare an interface to ensure class shape](#declare-an-interface-to-ensure-class-shape)
  - [Interfaces Design considerations](#interfaces-design-considerations)
    - [When to use interfaces](#when-to-use-interfaces)
    - [When to use classes](#when-to-use-classes)
  - [Exercise: Imporve the Sort Class](#exercise-imporve-the-sort-class)
  
---

<!---------------------Named functions-------------------------->

## Class components

[&#9650;](#declare-and-instantiate-classes)

- **Properties**: (or fields) are the data or attributes of the Calss Object
- **Contructor**: used to initialize an object or creates an instance of the object. We can declare one constructor function in a class definition. If omitted, an automatic constructor will be provided for you
- **Accessors**: used to `get` or `set` a property value, it could be `ReadOnly` if the set attribute is ignored.
- **Methods**: or the functions that define the behavior and actions of the object.  
  **`function` keyword** could be skipped in classes

## Full Class Example

[&#9650;](#declare-and-instantiate-classes)

```ts
class Car {
    // Properties
    _make: string;
    _color: string;
    _doors: number;

    // Constructor
    // doors has a default value of 4
    constructor(make: string, color: string, doors = 4) {
        this._make = make;
        this._color = color;
        if ((doors % 2) === 0) {
            this._doors = doors;
        } else {
            throw new Error('Doors must be an even number');
        }
    }

    // Accessors
    get make() {
        return this._make;
    }
    set make(make) {
        this._make = make;
    }

    get color() {
        return 'The color of the car is ' + this._color;
    }
    set color(color) {
        this._color = color;
    }

    get doors() {
        return this._doors;
    }
    set doors(doors) {
        if ((doors % 2) === 0) {
            this._doors = doors;
        } else {
            throw new Error('Doors must be an even number');
        }
    }

    // Methods
    accelerate(speed: number): string {
        return `${this.worker()} is accelerating to ${speed} MPH.`
    }
    brake(): string {
        return `${this.worker()} is braking with the standard braking system.`
    }
    turn(direction: 'left' | 'right'): string {
        return `${this.worker()} is turning ${direction}`;
    }
    // This function performs work for the other method functions
    worker(): string {
        return this._make;
    }
}
```

```ts
// Instantiates the Car object with all parameters
let myCar1 = new Car('Cool Car Company', 'blue', 2);  
// return the object
console.log(myCar1);
// // return the property through the set/get
console.log(myCar1.color);
// // return the raw data passed to the property
console.log(myCar1._color);
```

```ts
// Will generate an error since the doors is even
// to validate that the nbre of door is not even, the check need to be done both in the ctor and the Property setter
let myCar2 = new Car('Galaxy Motors', 'red', 3);
console.log(myCar2._doors);
```

```ts
// returns 4, the default value
let myCar3 = new Car('Galaxy Motors', 'gray');
console.log(myCar3.doors);  
```

```ts
// //Accessing the methods
console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn('right'));
```

## Access modifiers

[&#9650;](#declare-and-instantiate-classes)

- All class members are public by default
- To control the access, use the modifiers, to leave the **`set`** and **`get`** for the access
- private members are not visible in **Intellisence**

|Access modifier|Description|
|-|-|
|`public`|members are public by the default, but can also be explicitly set to public|
|`private`|if the private keyword is used, it cannot be accessed from outside of its containing class|
|`protected`|protected acts like private, except that it can  be accessed within deriving classes.
|`readonly`|Readonly properties may only be set when initialized at their declaration or in the constructor|

As an example, we can alter the previous example:

```ts
// Properties
private _make: string;
private _color: string;
private _doors: number;
// ...
private worker(): string {
    return this._make;
}
```

## Static Properties & Methods

[&#9650;](#declare-and-instantiate-classes)

- Regular members are instantiated and called on each instance of the class object
- Static properties and methods are shared by all instances of a class
- **`className.propertyName`** instead of this. when accessing the static property (**`Car.numberOfCars`**)

Add the following property to the **`Car`** Class

```ts
// Properties
private static numberOfCars: number = 0;  // New static property
```

Add the following instruction to the Constructor of the **`Car`** Class

```ts
Car.numberOfCars++; // Increments the value of the static property
```

Define a statis method in the **`Car`** Class

```ts
public static getNumberOfCars(): number {
    return Car.numberOfCars;
}
```

to test the static memebers

```ts
// Instantiate the Car object with all parameters
let myCar1 = new Car('Cool Car Company', 'blue', 2);
// Returns 1
console.log(Car.getNumberOfCars());
// Instantiates the Car object with all parameters
let myCar2 = new Car('Galaxy Motors', 'blue', 2);
// Returns 2
console.log(Car.getNumberOfCars());
```

## Extend a class using inheritance

[&#9650;](#declare-and-instantiate-classes)

- Use the `extends` keyword to derive from the Car base class
- Code reusability, develop once and reuse it in many places, avoiding code redundency
- Changes in code are done in single place
- Override a method of the base class by creating a method with the same name, but doing a different action

```ts
class ElectricCar extends Car {
    // Properties unique to ElectricCar
    private _range: number;

    // Constructor
    constructor(make: string, color: string, range: number, doors = 2) {
        super(make, color, doors);
        this._range = range;
    }
    // Accessors
    get range() {
        return this._range;
    }
    set range(range) {
        this._range = range;
    }
    // Methods
    charge() {
        console.log(this.worker() + " is charging.")
    }
    // Overrides the brake method of the Car class
    brake(): string {
        return `${this.worker()} is braking with the regenerative braking system.`
    }
}
```

```ts
let spark = new ElectricCar('Spark Motors','silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log(eCar.doors);         // returns the default, 2
spark.charge(); 
console.log(spark.brake());  // returns "Spark Motors is braking with the regenerative braking system"
```

## Declare an interface to ensure class shape

[&#9650;](#declare-and-instantiate-classes)

- An interface is used to establish a "code contract" that describe the required properties of an object and their types
- An interface will describe the properties and methods of a class
- The interface includes the parameters of the constructor, not the properties

```ts
interface Vehicle {
    make: string;
    color: string;
    doors: number;
    accelerate(speed: number): string;
    brake(): string;
    turn(direction: 'left' | 'right'): string;
}
```

 then it used through the **`implements`** keyword

```ts
class Car implements Vehicle {
    // ...
}
```

## Interfaces Design considerations

[&#9650;](#declare-and-instantiate-classes)

### When to use interfaces

- Interfaces are a TypeScript design-time construct.
- As JavaScript does not support interfaces, they are removed when TypeScript is transpiled to JavaScript.
- TypeScript allows to use an interface to define a data structure without the need for a class.
- interfaces are used to define parameter objects for functions, define the structure for various framework properties, and define how objects look from remote services or APIs.
- When creating a full-stack application with both client and server implementations, Interfaces define how data will be structured.

```ts
interface Dog {
    id?: number;
    name: string;
    age: number;
    description: string;
}
```

- This interface could be used in a shared module for both your client and server code, ensuring the data structure is the same on both sides.
- On the client, you might have code to retrieve the dog from the server API you define.
- By using the interface, `loadDog` will let TypeScript know the structure of the object. You don't need to create a class to ensure this works.

```ts
async loadDog(id: number): Dog {
    return await (await fetch('demoUrl')).json() as Dog;
}
```

### When to use classes

- Classes allow to define implementation details, while Interfaces solely define how data is structured.
- Classes allow to define methods, fields, and properties.
- Classes also provide a way to template objects, defining default values.
- A common technique for managing data in a database is to use what's known as the **"active record pattern"**, meaning the object itself has **`save`**, **`load`** and similar methods

```ts
class DogRecord implements Dog {
    id: number;
    name: string;
    age: number;
    description: string;

    constructor({name, age, description, id = 0}: Dog) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.description = description;
    }

    static load(id: number): DogRecord {
        // code to load dog from database
        return dog;
    }

    save() {
        // code to save dog to database
    }
}
```

## Exercise: Imporve the Sort Class

[&#9650;](#declare-and-instantiate-classes)

```ts
class BuildArray {
    // TODO Define the properties
    private _items: number;
    private _sortOrder: 'ascending' | 'descending';

    // TODO Define the constructor
    constructor (items: number, sortOrder: 'ascending' | 'descending') {
        this._items = items;
        this._sortOrder = sortOrder;
    }

    // TODO Define the accessors
    get items() {
        return this._items;
    }
    set items(items) {
        this._items = items;
    }
    get sortOrder() {
        return this._sortOrder;
    }
    set sortOrder(sortOrder) {
        this._sortOrder = sortOrder;
    }

    // TODO Define the methods.
    private sortDescending = (a: number, b: number) => {
        if (a > b) {
            return -1;
        } else if (b > a) {
            return 1;
        } else {
            return 0;}
     }
    private sortAscending = (a: number, b: number) => {
        if (a > b) {
            return 1;
        } else if (b > a) {
            return -1;
        } else {
            return 0; }
    }
    buildArray(): number[] {
        let randomNumbers: number[] = [];
        let nextNumber: number;
        for (let counter = 0; counter < this.items; counter++) {
            nextNumber = Math.ceil(Math.random() * (100 - 1));
            if (randomNumbers.indexOf(nextNumber) === -1) {
                randomNumbers.push(nextNumber);
            } else {
                counter--;
            }
        }
        if (this._sortOrder === 'ascending') {
            return randomNumbers.sort(this.sortAscending);
        } else {
            return randomNumbers.sort(this.sortDescending);
        } 
    }
}

/*  TODO: Instantiate the BuildArray objects. */

let testArray1 = new BuildArray(12, 'ascending');
let testArray2 = new BuildArray(8, 'descending');

console.log(testArray1.buildArray());
console.log(testArray2.buildArray());
```

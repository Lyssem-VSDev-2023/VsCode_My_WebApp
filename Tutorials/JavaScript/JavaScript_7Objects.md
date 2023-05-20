# **Javascript and Objects**

- [**Javascript and Objects**](#javascript-and-objects)
  - [Creating Objects using Literals](#creating-objects-using-literals)
    - [Define a simple Object](#define-a-simple-object)
    - [Add Object Attibutes](#add-object-attibutes)
    - [Add Object Functions (Actions)](#add-object-functions-actions)
  - [Creating Objects using Constructors](#creating-objects-using-constructors)
    - [Define a simple Object (new)](#define-a-simple-object-new)
    - [Add Object Attibutes (pass data)](#add-object-attibutes-pass-data)
    - [Add Object Functions (data with Actions)](#add-object-functions-data-with-actions)
  - [Access Objects Attributes and Functions](#access-objects-attributes-and-functions)
    - [Access Attributes with Dot Notation](#access-attributes-with-dot-notation)
    - [Access Attributes with Brackets Notation](#access-attributes-with-brackets-notation)
    - [Access Methods with Dot Notation](#access-methods-with-dot-notation)
    - [Access Methods with bracket Notation](#access-methods-with-bracket-notation)
  - ["this" context](#this-context)
    - [From within the Object](#from-within-the-object)
    - [From outside the Object (globalThis)](#from-outside-the-object-globalthis)

<!---------------------Variables Declaration----------------------------->

---

## Creating Objects using Literals

[&#9650;](#javascript-and-objects)

- Objects have associated attributes = **object PROPERTIES**
- Objects have associated actions = **object METHODS**
- Objects have associated context = **"this"**

### Define a simple Object

```js
const blank = {};
console.log("Blank type:",typeof blank);
console.log("Blank value",blank);
```

**Output:**

```text
Blank type: object
Blank value {}
```

### Add Object Attibutes

```js
const book = {
    title : "1984",
    author: "George Orwell",
    isAvailable: false
};
console.log("Book type:",typeof book);
console.log("Book value:\n",book);
```

**Output:**

```text
Book type: object
Book value:
 { title: '1984', author: 'George Orwell', isAvailable: false }
```

### Add Object Functions (Actions)

```js
const book = {
    title : "1984",
    author: "George Orwell",
    isAvailable: false,
    checkIn: function(){ this.isAvailable = true; },
    checkOut: function(){ this.isAvailable = false; }
};
console.log("Book type:",typeof book);
console.log("Book value:\n",book);
```

**Output:**

```text
Book type: object
Book value:
 {
  title: '1984',
  author: 'George Orwell',
  isAvailable: false,
  checkIn: [Function: checkIn],
  checkOut: [Function: checkOut]
}
```

## Creating Objects using Constructors

We created objects above using OBJECT LITERALS (it is literally defined and created at once). Now we can look at using CONSTRUCTORS.  
**Constructors** are like "templates" for an object:

- they explain HOW the object is created
- to actually create an instance use "new"

### Define a simple Object (new)

```js
const book = new Object();
console.log("\n--- Define book");
console.log("Book type:",typeof book);
console.log("Book value:\n",book);
```

**Output:**

```text
--- Define book
Book type: object
Book value:
 {}
```

### Add Object Attibutes (pass data)

```js
const data = {title:"1984",author:"George Orwell"};
const book1 = new Object(data);
console.log("\n--- Define book1 with data");
console.log("Book1 type:",typeof book1);
console.log("Book1 value:\n",book1);
```

**Output:**

```text
Book type: object
Book value:
 { title: '1984', author: 'George Orwell', isAvailable: false }
```

### Add Object Functions (data with Actions)

```js
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
```

**Output:**

```text
--- Define book2 with data and functions
Book2 type: object
Book2 value:
 {
  title: '1984',
  author: 'George Orwell',
  isAvailable: true,
  checkIn: [Function: checkIn],
  checkOut: [Function: checkOut]
}
```

## Access Objects Attributes and Functions

### Access Attributes with Dot Notation

```js
console.log(book2.author);
book2.author="G. Orwell";
console.log(book2);
```

### Access Attributes with Brackets Notation

```js
console.log(book2["author"]);
book2["author"]="G. Orwell";
console.log(book2);
```

### Access Methods with Dot Notation

```js
console.log(book2.isAvailable);
book2.checkOut();
console.log(book2);
```

### Access Methods with bracket Notation

```js
console.log(book2.isAvailable);
book2["checkOut"]();
console.log(book2);
```

## "this" context

### From within the Object

```js
const bookObj = {
   checkIn: function(){
       return this;
   }
}
console.log("\n\nthis is: ", bookObj.checkIn());
console.log(bookObj.checkIn() === bookObj);
```

**Output:**

```text
this is:  { checkIn: [Function: checkIn] }
true
```

### From outside the Object (globalThis)

```js
function anotherCheckIn(){
  return this;
}
console.log("\n\nthis is: ", anotherCheckIn());
console.log(anotherCheckIn() === globalThis);
```

**Output:**

```text
this is:  <ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 37.72159993648529,
      nodeStart: 2.96969997882843,
      v8Start: 9.291200041770935,
      bootstrapComplete: 28.5764000415802,
      environment: 17.00909996032715,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1684577138553.662
  },
  fetch: [AsyncFunction: fetch]
}
```

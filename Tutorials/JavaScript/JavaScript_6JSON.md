# **Javascript and JSON**

- [**Javascript and JSON**](#javascript-and-json)
  - [Javascript Objects/Data](#javascript-objectsdata)
  - [Stringify - Convert Objects to JSON](#stringify---convert-objects-to-json)
    - [JSON.stringify - Object Input](#jsonstringify---object-input)
    - [JSON.stringify - Collection Input](#jsonstringify---collection-input)
  - [Parse JSON - Convert back to Obejcts](#parse-json---convert-back-to-obejcts)
    - [JSON.parse - string Input](#jsonparse---string-input)
    - [JSON.parse - collection string Input](#jsonparse---collection-string-input)

<!---------------------Variables Declaration----------------------------->

---

## Javascript Objects/Data

[&#9650;](#javascript-and-json)

Simple JavaScript object with data (property values)

```js
const book = new Object({ title : "1984", author: "George Orwell"});
console.log(typeof book);
console.log(book);
```

**Output:**

```text
object
{ title: '1984', author: 'George Orwell' }
```

You can also have a collection of these objects

```js
const myBooks = [
    new Object({ title : "1984", author: "George Orwell"}),
    new Object({ title : "Becoming", author: "Michelle Obama"}),
    new Object({ title : "Snow Crash", author: "Neal Stephenson"}),
    new Object({ title : "Predictably Irrational", author: "Dan Ariely"})
];
console.log(typeof myBooks);
console.log(myBooks);
```

**Output:**

```text
object
[
  { title: '1984', author: 'George Orwell' },
  { title: 'Becoming', author: 'Michelle Obama' },
  { title: 'Snow Crash', author: 'Neal Stephenson' },
  { title: 'Predictably Irrational', author: 'Dan Ariely' }
]
```

## Stringify - Convert Objects to JSON

[&#9650;](#javascript-and-json)

What if you had a Library service that you need to send the
data Or you want to store the data to a remote database, or to the
local filesystem - many networking and file transfer protocols
rely on simple text formats for request/response

**JSON = JavaScript Object Notation**  
Convert JavaScript objects and arrays to/from text (string) format

### JSON.stringify - Object Input

```js
const book = new Object({ title : "1984", author: "George Orwell"});
let bookJSON = JSON.stringify(book);
console.log(typeof bookJSON);
console.log(bookJSON);
```

**Output:**

```text
string
{"title":"1984","author":"George Orwell"}
```

### JSON.stringify - Collection Input

```js
const myBooks = [
  new Object({ title : "1984", author: "George Orwell"}),
  new Object({ title : "Becoming", author: "Michelle Obama"}),
  new Object({ title : "Snow Crash", author: "Neal Stephenson"}),
  new Object({ title : "Predictably Irrational", author: "Dan Ariely"})
];
let myBooksJSON = JSON.stringify(myBooks);
console.log(typeof myBooksJSON);
console.log(myBooksJSON);
```

**Output:**

```text
string
[
  {"title":"1984","author":"George Orwell"},
  {"title":"Becoming","author":"Michelle Obama"},
  {"title":"Snow Crash","author":"Neal Stephenson"},
  {"title":"Predictably Irrational","author":"Dan Ariely"}
]
```

## Parse JSON - Convert back to Obejcts

[&#9650;](#javascript-and-json)

### JSON.parse - string Input

```js
let data = bookJSON;
let parsed = JSON.parse(data);
console.log(parsed);
console.log("parsed type is: " + typeof parsed);
console.log("isArray: " + Array.isArray(parsed));
console.log("Num items: "+parsed.length);
```

**Output:**

```text
{ title: '1984', author: 'George Orwell' }
parsed type is: object
isArray: false
Num items: undefined
```

### JSON.parse - collection string Input

```js
data = myBooksJSON;
parsed = JSON.parse(data);
console.log(parsed);
console.log("parsed type is: " + typeof parsed);
console.log("Num items: "+parsed.length);
console.log("Author of 2nd book: "+parsed[1].author);
```

**Output:**

```text
[  
  { title: '1984', author: 'George Orwell' },
  { title: 'Becoming', author: 'Michelle Obama' },
  { title: 'Snow Crash', author: 'Neal Stephenson' },
  { title: 'Predictably Irrational', author: 'Dan Ariely' }
]
parsed type is: object
Num items: 4
Author of 2nd book: Michelle Obama
```

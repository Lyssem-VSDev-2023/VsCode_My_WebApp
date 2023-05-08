# **Javascript Functions**

- [**Javascript Functions**](#javascript-functions)
  - [Functions](#functions)
    - [Overview](#overview)
    - [function parameters](#function-parameters)
    - [return value](#return-value)
    - [Simple JS function tested in a web page](#simple-js-function-tested-in-a-web-page)
  - [Using Anonymous functions](#using-anonymous-functions)
    - [Use a callback](#use-a-callback)
    - [Anonymous functions](#anonymous-functions)
    - [Arrow functions](#arrow-functions)

<!---------------------Variables Declaration----------------------------->

---

## Functions

[&#9650;](#javascript-functions)

### Overview

- A function is free floating
- A method is attached to an object (console, in the example console.log)
- Use descriptive names to avoid ambiguity
- Use camelCasing to combine words
- Focused on specific scope or concept

```js
//Basic function
function displayGreeting() {
  console.log('Hello, world!');
}
displayGreeting();
```

- Use function and **task comment** to describe and summarize the function:  

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

### function parameters

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

### return value

```js
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
let greetingMessage = createGreetingMessage('Christopher');
```

### Simple JS function tested in a web page

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

---

## Using Anonymous functions

[&#9650;](#javascript-functions)

### Use a callback

```js
function displayDone() {
    console.log('Done!');
}

// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

- The function is executed at a given time,
- Should not include perentheses () for the parameter, otherwise the function excutes immediately, or throw an error.

### Anonymous functions

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

### Arrow functions

```js
setTimeout(
    () => { // anonymous function
        console.log('Done!');
    },
    3000 // 3000 milliseconds (3 seconds)
)
```

```js
const add = (a, b) => a + b;
console.log(add(1, 2));

const subtract = (a, b) => {
  const result = a - b;
  return result;
};
console.log(subtract(1, 1));
```

- indicate the start of the body of the function
- More consize
- it is not mandotory to state the **`return`** in in a single line

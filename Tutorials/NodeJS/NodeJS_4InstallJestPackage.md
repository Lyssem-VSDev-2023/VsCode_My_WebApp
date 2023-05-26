# **Install Jest Package**

- [**Install Jest Package**](#install-jest-package)
  - [Add Jest through npm](#add-jest-through-npm)

---

Jest is widely  used and Test Framework for Javascript, and promises to be a zero-config test framework. We will install Jest, write a couple tests, and run them to see how Jest delivers.

## Add Jest through npm

[&#9650;](#install-jest-package)

1 . Create the the **`address-parser.js`** file, This function takes a string and parses out information about what is a customer order, where it should be delivered, and how it will be paid for.

**`address-parser.js`**

```js
exports.parse = function parseOrder(order) {
  const match = order.match(/order:\s(?<order>\w+\s\w+).*address:\s(?<address>\w+\s\w+\s\w+).*payment info:\s(?<payment>\w+)/)
  return match.groups;
}
```

2 . add the `package.json` file, by adding the **`jest`** as under the test scrit

```json
"test": "jest"
```

**`package.json`**

```json
{
  "name": "tailwind-trader-api",
  "version": "1.0.0",
  "description": "HTTP API to manage items from the Tailwind Traders database",
  "main": "address-parser.js",
  "dependencies": {},
  "devDependencies": {},
  "scripts": {
    "start": "node ./address-parser.js",
    "test": "jest"
  },
  "keywords": ["api", "database"],
  "author": "Sam",
  "license": "ISC"
}
```

3 . Install the Jest library by running this command **(as a dev dependency)**, it should done in the **root of the app**

```text
npm install jest --save-dev
```

We will then see the dev-dependencies added to the `global` **`package.json`**

```json
"devDependencies": {
   "jest": "^28.0.0"
 }
```

4 . Add a **`__tests__`** folder and create a file named **`address-parser.js`**

**`address-parser.js`**

```js
const { parse } = require("../address-parser");

describe('Address parser', () => {
  test('should parse correctly', () => {
    expect(
      parse(
         "I want to to order: 3 books to address: 112 street city here is my payment info: cardnumber"
      )
      ).toEqual({
        order: "3 books",
        address: "112 street city",
        payment: "cardnumber",
      });
  })
})
```

5 . Run the tests by entering this command in the terminal:

```text
npm run test
```

6 . Rusult should be:

```text
PS > npm run test

> tailwind-trader-api@1.0.0 test
> jest
 PASS  __tests__/address-parser.js
  Address parser
    √ should parse correctly (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.831 s
Ran all test suites.
```

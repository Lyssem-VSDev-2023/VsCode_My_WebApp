# **Faced Errors**

- [**Faced Errors**](#faced-errors)
  - [Javascript](#javascript)
    - [**\_\_dirname is not defined in ES module scope**](#__dirname-is-not-defined-in-es-module-scope)
    - [**Error \[ERR\_REQUIRE\_ESM\]: require() of ES Module not supported**](#error-err_require_esm-require-of-es-module-not-supported)

---

## Javascript

### **__dirname is not defined in ES module scope**

[&#9650;](#faced-errors)

|Language|Description|
|-|-|
|JS|if you use it inside an ES module, you can’t use this, as the infamous “__dirname is not defined in ES module scope” error shows up|

**Solution:**

```js
import path from 'path';
import { fileURLToPath } from 'url';

//Then you can replicate the functionality of __dirname in this way:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

### **Error [ERR_REQUIRE_ESM]: require() of ES Module not supported**

[&#9650;](#faced-errors)

|Language|Description|
|-|-|
|JS|The error "[ERR_REQUIRE_ESM]: require() of ES Module not supported. Instead change the **`require`** of `index.js` to a **`dynamic`** `import()` which is available in all `CommonJS` modules" occurs because a package you are importing has **been converted** to an **ESM-only** package, which means that the package **cannot be imported** with **`require()`** anymore.|

**Solution:**

- Use ESM - use **`import foo from 'foo'`**, instead of **`const foo = require('foo')`**
- add the following line to your **`package.json`** file: **`"type": "module"`**.

> **`package.json`**

```json
{
  "type": "module",
  // ...
  "scripts": {},
  "dependencies": {},
}
```

> **`index.js`**

```js
{
// 👇️ for default imports
import foo from 'foo';

// 👇️ for named imports
import {bar} from 'bar';
}
```

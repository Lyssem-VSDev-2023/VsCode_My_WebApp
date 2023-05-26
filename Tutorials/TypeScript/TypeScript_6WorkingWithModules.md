# **Working with modules (import/export)**

- [**Working with modules (import/export)**](#working-with-modules-importexport)
  - [Organize code with modules](#organize-code-with-modules)
  - [Export components: Simulation Exercise](#export-components-simulation-exercise)
  - [Import a module component](#import-a-module-component)
  - [Import Modules: Simulation Exercise](#import-modules-simulation-exercise)
  - [Compiling the modules](#compiling-the-modules)
    - [If compilation for use with NodeJS (console)](#if-compilation-for-use-with-nodejs-console)
    - [If compilation for use in WebBrowser](#if-compilation-for-use-in-webbrowser)

---

<!---------------------Named functions-------------------------->

## Organize code with modules

[&#9650;](#working-with-modules-importexport)

- Modules provide a way to organize and **categorize** your code
- When code is inside a module, it is pulled from the **global** scope and into the scope of the **module**
- Avoid **naming conflicts** between components in the global namespace
- You can export any declaration (such as a variable, function, class, type alias, or interface) by adding the **`export`** keyword or **`import`** it by using the import keyword
- The **`export`** statement explicitly makes a component in one module **available to other modules**, while the **`import`** statement allows you to **consume that component** from another module

![ImportExport](/Tutorials/TypeScript/Images/ImportExport.png)

## Export components: Simulation Exercise

[&#9650;](#working-with-modules-importexport)

1 . Create a new file `greetings_module.ts` and add the the function `returnGreeting`, consider adding the `export` keyword

```ts
export function returnGreeting (greeting: string) {
    console.log(`The message from Greetings_module is ${greeting}.`);
}
```

2 . Create a second file `greetings-utilities_module.ts` with two functions:

>- `returnGreeting` and Add `export` keyword
>- `getLength` to the new file, not exported because it is only used within the scope of the module.

```ts
export function returnGreeting (greeting: string) {
    let greetingLength = getLength(greeting);
    console.log(`The message from GreetingsLength_module is ${greeting}. It is ${greetingLength} characters long.`);
}
function getLength(message: string): number {
    return message.length
}
```

## Import a module component

[&#9650;](#working-with-modules-importexport)

- To use the exported components from a module, use the import statement. The import statement can take several forms depending on the need.

1 . To import a single export from a module:

>- `import { <component name> } from '<module name>'`
  
2 .To rename an import, use the `as` keyword:

>- `import { <component name> as <new name> } from '<module name>'`
  
3 . To import the entire module into a single variable:

>- `import * as <variable name> from '<module name>'`

## Import Modules: Simulation Exercise

[&#9650;](#working-with-modules-importexport)

1 . Create a file `main.ts`, that will contain the main code of the application, including the import statements.

2 . `Import` the `returnGreeting` function from `greetings_module.ts`

```ts
// imports a single function in the module
import { returnGreeting } from './greetings_module.js';
```

3 . If `greetings_module.ts` had multiple components, you could import the entire module into a single variable (for example: `allGreetingFunctions`)

```ts
// imports all exported components in the module
import * as allGreetingFunctions from './greetings_module.js';  
```

4 . if the `returnGreeting` function from `greetings-utilities_module.ts` using the statement, an error will occue due to naming conflict.

```ts
//Naming Conflict Error
import { returnGreeting } from './greetings-utilities_module.js'
```

Correct the naming conflict by assigning the second instance of `returnGreeting` a new name. Replace `{ returnGreeting }` with `{ returnGreeting as returnGreetingLength }`.

```ts
//Import with Alias
import { returnGreeting as returnGreetingLength } from './greetings-utilities_module.js';
```

Now using the Modules imports

```ts
returnGreeting('Hola!')  
// Displays 'The message from Greetings_module is Hola!'

allGreetingFunctions.returnGreeting('Bonjour');  
// Displays 'The message from Greetings_module is Bonjour!'

returnGreetingLength('Ciao!');  
// Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'
```

## Compiling the modules

[&#9650;](#working-with-modules-importexport)

- At runtime, the module loader locates and executes all dependencies of a module before executing it

### If compilation for use with NodeJS (console)

- Depending on the module target that you specify during compilation, the compiler will generate appropriate code for:
  - Node.js (CommonJS),
  - require.js (AMD),
  - UMD,
  - SystemJS,
  - or ECMAScript 2015 native modules (ES6) module-loading systems.

- This is the `command` for NodeJS

>`tsc --module commonjs main.ts`

- The .js files for the main.ts module and its dependencies are now created, and you can run the code to check teh result

### If compilation for use in WebBrowser

- This is the `command` for ES6 to be used in web browser.

>`tsc --module es6 main.ts`

- The .js files for the main.ts module and its dependencies are now created, and you can use it in a browser
- Need to be open through a **web server**, not as an HTML File.

```html
<script type="module" src=".\main.js"></script>
```

**`PS:`**  
Exercise stored under **src** folder of **TypeScript Tutorial** folder

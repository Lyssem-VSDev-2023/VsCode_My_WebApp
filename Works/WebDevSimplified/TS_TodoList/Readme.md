# TypeScript ToDo List example

1 . `npm init -y`  

2 . `npm i --save-dev typescript`  

3 . `npx tsc --init`  

4 . Create `src` folder  

5 . Create `dest` folder  

6 . Update the `package.json` file for automatic TS compilation

```json
"scripts": {
    "start": "tsc --watch"
  },
```

To use it in teh console: `npm start`

7 . Change the `dest` folder in the `tsconfig.json`

```json
"outDir": "./dest",
```

8 . In case some `imports` are needed, we have to convert the module type to **`ES6`** in the `tsconfig.json`

```json
//Change from:
"module": "commonjs"

//to:
"module": "ES6"
```

9 . But to get the `browser` to access **`NodeJS`** modules folder, we need to use a **`Bundler`** (snowpack, webpack...).  
To create a snowpack typescript template:

```text
npx create-snowpack-app . --template @snowpack/app-template-blank-typescript --force
```

The **`.`** is meant to create the `app` with the designated `template` in the **`current folder`** of the `terminal`

10 . Install the **`uuid`** library needed for the example

```text
npm i uuid
```

Potentially upgrade it to `@latest`

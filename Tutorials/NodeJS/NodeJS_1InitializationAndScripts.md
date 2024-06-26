# **Initialize package.json & Scripts** 

- [**Initialize package.json \& Scripts**](#initialize-packagejson--scripts)
  - [Initialize a package.json](#initialize-a-packagejson)
  - [package.json file contents](#packagejson-file-contents)
  - [Scripts for managing your project](#scripts-for-managing-your-project)
  - [Script naming](#script-naming)

---

The `package.json` file is a manifest file for your `Node.js` project. It contains metadata information on your project. It also governs things like how your dependencies are managed, what files go into a package meant for npm...

## Initialize a package.json

[&#9650;](#initialize-packagejson--scripts)

A `package.json` file isn't something you author by hand. It's the result of running the `npm init` command. There are two main ways to run this command:

- **`npm init:`** This command **starts a wizard** that prompts you for information about a project's name, version, description, entry point, test command, Git repository, keywords, author, and license.
  
- **`npm init -y:`** This command uses the **`-y`** flag, and is a faster version of the `npm init` command because it's not interactive. Instead, this command **automatically assigns default values** for all values you're prompted to enter by using the npm init.

- **`npm install:`** if a **`package.json`** file has dependencies **not installed**, this command will install them.

The `npm init` and `npm init -y` commands both generate a `package.json` file. Here's an example:

```json
{
  "name": "my project",
  "version": "1.0.0",
  "description": "",
  "main": "script.js",
  "dependencies": {},
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

## package.json file contents

[&#9650;](#initialize-packagejson--scripts)

3 main groups:

- **Meta-information:** The properties in this group define the meta-information about the project. Properties include the project name, description, author, keywords, and so on.
- **Dependencies:** There are two properties that describe the libraries being used: `dependencies` and `devDependencies`. Later in the module, you'll learn how to use these properties to install, update, and separate dependencies.
- **Scripts:** In this section, you can list scripts for project tasks, such as start, build, test, and lint.

## Scripts for managing your project

[&#9650;](#initialize-packagejson--scripts)

You should set up four scripts and name them in a specific way. The following specific names are expected by the developer community and various tools:

- **start:** Invokes the node command with the entry file as an argument. An example might be `node ./src/index.js`. This action invokes the node command and uses the entry file `index.js`.

- **build:** Describes how to build your project. The build process should produce something that you can ship. For example, a build command could run a TypeScript compiler to produce the JavaScript version of the project that you want to ship.

- **test:** Runs the tests for your project. If you're using a third-party test library, the command should invoke the library's executable file.

- **lint:** Invokes a linter program like ESLint. Linting finds inconsistencies in code. A linter usually offers a way to correct inconsistencies as well. Having consistent code can greatly increase readability, which speeds up the development of features and additions to the code.

## Script naming

[&#9650;](#initialize-packagejson--scripts)

The syntax of a scripts section typically looks like this:

```json
"scripts" : {
  "<action>" : "<command>"
}
```

```json
"scripts" : {
  "start" : "node ./dist/index.js",
  "test": "jest",
  "build": "tsc",
  "lint": "eslint"
}
```

- First, you have the `start` action that starts the application.
- Second, the `test` action runs tests by using the `jest` testing framework.
- Then you have the `build` action that uses the `TypeScript` compiler `tsc`. This command compiles the code from TypeScript into a form the browser can interpret, such as ES6.
- Finally, you have the `eslint` linting tool that looks for inconsistencies and possible errors in the code.

You invoke actions by entering the command npm `run <action>`. For example, `npm run lint`.

The `start` and `test` action are **special** in that you can omit the word `run` in the command. Rather than entering the command `npm run start`, you can enter `npm start`.

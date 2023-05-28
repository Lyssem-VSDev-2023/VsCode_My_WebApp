# **Work with files and directories in NodeJS**

- [**Work with files and directories in NodeJS**](#work-with-files-and-directories-in-nodejs)
  - [Include the fs module](#include-the-fs-module)
  - [List contents in a directory](#list-contents-in-a-directory)
  - [Determine content type](#determine-content-type)
  - [Recursion through directories](#recursion-through-directories)
  - [Exercise: find sales.json in the different folders](#exercise-find-salesjson-in-the-different-folders)
  - [Work with file paths in Node.js](#work-with-file-paths-in-nodejs)
    - [Determine the current directory](#determine-the-current-directory)
    - [Work with paths](#work-with-paths)
    - [Join paths](#join-paths)
    - [Determine filename extensions](#determine-filename-extensions)
    - [Parse: Get all data about a file or path](#parse-get-all-data-about-a-file-or-path)
  - [Exercise: Working with paths](#exercise-working-with-paths)
  - [Create files and directories](#create-files-and-directories)
    - [Create directories](#create-directories)
    - [Check if directories exist](#check-if-directories-exist)
    - [Create files](#create-files)
  - [Exercise: Create files and directories](#exercise-create-files-and-directories)
  - [Read and write to files](#read-and-write-to-files)
    - [Read data from files](#read-data-from-files)
    - [Parse data in files](#parse-data-in-files)
    - [Write data to files](#write-data-to-files)
  - [Exercise - Read and write to files](#exercise---read-and-write-to-files)

---

## Include the fs module

[&#9650;](#work-with-files-and-directories-in-nodejs)

- `Node.js` provides a built-in module for working with the file system. It's called the **`fs`** module. The name is short for **`file system`**.

- The fs module is included by default in `Node.js`, so you don't need to install it from `npm`.

- **Include** the fs module in a project by **referencing** it just as you would any other dependency.

- The fs module has a **`promises namespace`** that has promise versions of all methods. Using the promise namespace is **the preferred** way to work with the fs module because it allows you to use **`async`**. It avoids the messiness of callbacks or the blocking of synchronous methods.

```js
const fs = require("fs").promises;
```

## List contents in a directory

[&#9650;](#work-with-files-and-directories-in-nodejs)

**`PS:`**  
Refer to the following folder for the exercise files:

> **exercise6_FileSystem_1**

Consider a Folder Structure as follow

```text
📂 stores
    📄 total_sales.json
    📄 totals.txt
    📂 201
    📂 202
    📂 203
    📂 204
```

To read through the contents of the folder, you can use the `readdir` method. Most operations on the `fs` module have both synchronous and asynchronous options.

The `readdir` method returns a list of items:

```js
async function getDirs() {
  const items = await fs.readdir("stores");
  console.log(items); 
}

getDirs();
```

**Output:**

```text
[ '201', '202', '203', '204', 'totals.txt', 'total_sales.json' ]
```

The `readdir` and `readdirsync` methods return results in alphabetical order.

## Determine content type

[&#9650;](#work-with-files-and-directories-in-nodejs)

Passing the **`withFileTypes`** Option will return a `Dirent` Object, allowing to use the **`isDirectory`** method to assess the object type

```js
async function getDirsWithFileTypes() {
  const items = await fs.rea.readdir("stores", { withFileTypes: true });
  console.log(items); 
  for (let item of items) {
    const type = item.isDirectory() ? "folder" : "file";
    console.log(`${item.name}: ${type}`);
  }
}

getDirsWithFileTypes();
```

**Output:**

```text
[
  Dirent { name: '201', [Symbol(type)]: 2 },       
  Dirent { name: '202', [Symbol(type)]: 2 },       
  Dirent { name: '203', [Symbol(type)]: 2 },       
  Dirent { name: '204', [Symbol(type)]: 2 },       
  Dirent { name: 'totals.txt', [Symbol(type)]: 1 },
  Dirent { name: 'total_sales.json', [Symbol(type)]: 1 }
]
201: folder
202: folder
203: folder
204: folder
totals.txt: file
total_sales.json: file
```

## Recursion through directories

[&#9650;](#work-with-files-and-directories-in-nodejs)

```js
async function findFiles(folderName) {
  const items = await fs.readdir(folderName, { withFileTypes: true });
  items.forEach((item) => {
    if (item.isDirectory()) {
      findFiles(`${folderName}/${item.name}`);
    } else {
      console.log(`Found file: ${item.name} in folder: ${folderName}`);
    }
  });
}

findFiles("stores");
```

**Output:**

```text
Found file: totals.txt in folder: stores
Found file: total_sales.json in folder: stores
Found file: sales.json in folder: stores/201
Found file: sales.json in folder: stores/202
Found file: sales.json in folder: stores/203
Found file: sales.json in folder: stores/204
```

## Exercise: find sales.json in the different folders

[&#9650;](#work-with-files-and-directories-in-nodejs)

```js
async function findSalesFiles(folderName) {
  // this array will hold sales files as they are found
  let salesFiles = [];

  async function findFiles(folderName) {
    // read all the items in the current folder
    const items = await fs.readdir(folderName, { withFileTypes: true });

    // iterate over each found item
    for (item of items) {
      // if the item is a directory, it will need to be searched for files
      if (item.isDirectory()) {
        // search this directory for files (this is recursion!)
        await findFiles(`${folderName}/${item.name}`);
      } else {
        // Make sure the discovered file is a sales.json file
        if (item.name === "sales.json") {
          // store the file path in the salesFiles array
          await salesFiles.push(`${folderName}/${item.name}`);
        }
      }
    }
  }

  // find the sales files
  await findFiles(folderName);

  // return the array of found file paths
  return salesFiles;
}

async function main() {
  const salesFiles = await findSalesFiles("stores");
  console.log(salesFiles);
}

main();
```

## Work with file paths in Node.js

[&#9650;](#work-with-files-and-directories-in-nodejs)

- `Node.js` has a built-in mechanism for working with file system paths.

- If you have many files or folders, manually building paths can get tedious. `Node.js` provides some built-in constants and utilities to make file paths easier. **`Node.js path module`** and the **`__dirname`** constant make the program smarter and more resilient.

### Determine the current directory

- To get the path of the **current directory**. `Node.js` exposes the full path to the current directory via the constant **`__dirname`**.

```js
console.log(__dirname);
```

If you run that code from the **sales folder** in the following folder structure, the _dirname value is **`/stores/201/sales`**.

```text
Copy
📂 stores
    📂 201
        📂 sales
```

### Work with paths

- **Paths** are a subject that comes up so frequently that `Node.js` includes a **module** called **`path`** specifically for working with paths.

- Just like the **`fs module`**, the path module ships with `Node.js` and doesn't need to be installed. You just need to reference it at the top of your file.

```js
const path = require("path");
```

### Join paths

- The path module works with the concept of file and folder paths, which are just strings. For instance, if you want to get the path to the **`stores/201`** folder, you can use the path module to do that.

```js
console.log(path.join("stores", "201")); // stores/201
```

- The reason why you would use the path module instead of concatenating strings is that your program might run on Windows or Linux. The path module formats paths correctly for whatever operating system it's running on. In the preceding example, path.join would return stores\201 on Windows, with a backslash instead of a slash.

### Determine filename extensions

- The path module can also identify the **extension of a filename**. If you have a file and you want to identify if it's a JSON file, you can use the **`path.extname`** method.

- The path module **doesn't care** whether or not things **actually exist**. Paths are **conceptual**, **not physical**. It's just building and parsing strings for you.

```ts
console.log(path.extname("sales.json"));
```

### Parse: Get all data about a file or path

- The `path module` offers most of the **information** that you need about a **path or file** by using the **`parse`** method. This method returns an object containing:
  - the current directory you're in,
  - the name of the file,
  - the filename extension,
  - and even the name of the file without the extension.

```js
console.log(path.parse("stores/201/sales.json"));
// { root: '', dir: 'stores/201', base: 'sales.json', ext: '.json', name: 'sales' }
```

## Exercise: Working with paths

[&#9650;](#work-with-files-and-directories-in-nodejs)

```js
const path = require("path");

async function findSalesFiles(folderName) {
  // this array will hold sales files as they are found
  let salesFiles = [];

  async function findFiles(folderName) {
    // read all the items in the current folder
    const items = await fs.readdir(folderName, { withFileTypes: true });

    // iterate over each found item
    for (item of items) {
      // if the item is a directory, it will need to be searched
      if (item.isDirectory()) {
        // call this method recursively, appending the folder name to make a new path
        await findFiles(path.join(folderName, item.name));
      } else {
        // Make sure the discovered file is a .json file
        if (path.extname(item.name) === ".json") {
          // store the file path in the salesFiles array
          await salesFiles.push(path.join(folderName, item.name));
        }
      }
    }
  }

  await findFiles(folderName);

  return salesFiles;
}

async function main() {
  const salesDir = path.join(__dirname, "stores");

  // find paths to all the sales files
  const salesFiles = await findSalesFiles(salesDir);
  console.log(salesFiles);
}

main();
```

**Output:**

```text
[
  'C:\\Code\\VsCode_My_WebApp\\Tutorials\\NodeJS\\exercise6_FileSystem_1\\stores\\201\\sales.json',
  'C:\\Code\\VsCode_My_WebApp\\Tutorials\\NodeJS\\exercise6_FileSystem_1\\stores\\202\\sales.json',
  'C:\\Code\\VsCode_My_WebApp\\Tutorials\\NodeJS\\exercise6_FileSystem_1\\stores\\203\\sales.json',
  'C:\\Code\\VsCode_My_WebApp\\Tutorials\\NodeJS\\exercise6_FileSystem_1\\stores\\204\\sales.json',
  'C:\\Code\\VsCode_My_WebApp\\Tutorials\\NodeJS\\exercise6_FileSystem_1\\stores\\total_sales.json'
]

```

## Create files and directories

[&#9650;](#work-with-files-and-directories-in-nodejs)

### Create directories

- The **`mkdir`** method allows creation of directories. The following method creates a folder called newDir inside the **`201`** **folder**.

```js
const fs = require("fs").promises;
const path = require("path");
await fs.mkdir(path.join(__dirname, "stores", "201", "newDir"));
```

- The file structure `/stores/201` **must already exist**, or this method **fails**. You can pass in an optional **`recursive flag`** if the file structure doesn't exist and you want **the operation to create it**.

```js
await fs.mkdir(path.join(__dirname, "newDir", "stores", "201", "newDir"), {
  recursive: true
});
```

### Check if directories exist

- `mkdir` method throws an error if a directory already exist, it is recommended to use `try/catch` when handling directories.

- const pathToCreate = path.join(__dirname, "stores", "201", "newDirectory");

```js
// create the salesTotal directory if it doesn't exist
try {
  await fs.mkdir(salesTotalsDir);
} catch {
  console.log(`${salesTotalsDir} already exists.`);
}
```

### Create files

- You can create files by using the **`fs.writeFile`** method. This method takes in a **path to the file**, and **the data** that you want to write to the file.

- If the file already exists, it's overwritten.

```js
await fs.writeFile(path.join(__dirname, "greeting.txt", "Hello World!"));
```

To create and empty file

```js
await fs.writeFile(path.join(__dirname, "greeting.txt", String()));
```

## Exercise: Create files and directories

[&#9650;](#work-with-files-and-directories-in-nodejs)

```js
const fs = require("fs").promises;
const path = require("path");

async function findSalesFiles(folderName) {
  // this array will hold sales files as they are found
  let salesFiles = [];

  async function findFiles(folderName) {
    // read all the items in the current folder
    const items = await fs.readdir(folderName, { withFileTypes: true });

    // iterate over each found item
    for (item of items) {
      // if the item is a directory, it will need to be searched
      if (item.isDirectory()) {
        // call this method recursively, appending the folder name to make a new path
        await findFiles(path.join(folderName, item.name));
      } else {
        // Make sure the discovered file is a .json file
        if (path.extname(item.name) === ".json") {
          // store the file path in the salesFiles array
           await salesFiles.push(path.join(folderName, item.name));
        }
      }
    }
  }

  await findFiles(folderName);

  return salesFiles;
}

async function main() {
  const salesDir = path.join(__dirname, "stores");
  const salesTotalsDir = path.join(__dirname, "salesTotals");

  // create the salesTotal directory if it doesn't exist
  try {
    await fs.mkdir(salesTotalsDir);
  } catch {
    console.log(`${salesTotalsDir} already exists.`);
  }

  // find paths to all the sales files
  const salesFiles = await findSalesFiles(salesDir);

  // write the total to the "totals.txt" file
  await fs.writeFile(path.join(salesTotalsDir, "totals.txt"), String());
  console.log(`Wrote sales totals to ${salesTotalsDir}`);
}

main();
```

## Read and write to files

[&#9650;](#work-with-files-and-directories-in-nodejs)

### Read data from files

Files are read through the **`readFile`** method on the fs module.

```js
await fs.readFile("stores/201/sales.json");
```

The return object a **Buffer object**.

if the file to read content is:

```json
{
  "total": 22385.32
}
```

The result will be:

```js
console.log(await fs.readFile("stores/201/sales.json"));
// <Buffer 7b 0a 20 20 22 74 6f 74 61 6c 22 3a 20 32 32 33 38 35 2e 33 32 0a 7d>
```

to read the **`buffer`** object as **`string`**

```js
const bufferData = await fs.readFile("stores/201/sales.json");
console.log(String(bufferData));
// {
//   "total": 22385.32
// }
```

### Parse data in files

The **`JSON.parse`** method can parse the `buffer`.

```js
const data = JSON.parse(await fs.readFile("stores/201/sales.json"));
console.log(data.total);
// 22385.32
```

### Write data to files

You can append data by passing **a flag** to the **`writeFile`** method. By **default**, the flag is set to **`w`**, which means **"replace the file."** To **append** to the file instead, pass the **`a`** flag, which means **"append."**

```js
const data = JSON.parse(await fs.readFile("stores/201/sales.json"));

// write the total to the "totals.json" file
await fs.writeFile(path.join("salesTotals/totals.txt"), `${data.total}\r\n`, {
  flag: "a"
});

// totals.json
// 22385.32
// 22385.32
```

- **`\r\n`** tells JavaScript to put the value on its **own line**. *(carriage return line feed)*.

## Exercise - Read and write to files

[&#9650;](#work-with-files-and-directories-in-nodejs)

```js
const fs = require("fs").promises;
const path = require("path");

async function calculateSalesTotal(salesFiles) {
  let salesTotal = 0;
  // loop over each file path in the salesFiles array
  for (file of salesFiles) {
    // read the file and parse the contents as JSON
    const data = JSON.parse(await fs.readFile(file));
    // Add the amount in the data.total field to the salesTotal variable
    salesTotal += data.total;
  }
  return salesTotal;
}

async function findSalesFiles(folderName) {
  // this array will hold sales files as they are found
  let salesFiles = [];

  async function findFiles(folderName) {
    // read all the items in the current folder
    const items = await fs.readdir(folderName, { withFileTypes: true });

    // iterate over each found item
    for (item of items) {
      // if the item is a directory, it will need to be searched
      if (item.isDirectory()) {
        // call this method recursively, appending the folder name to make a new path
        await findFiles(path.join(folderName, item.name));
      } else {
        // Make sure the discovered file is a .json file
        if (path.extname(item.name) === ".json") {
          // store the file path in the salesFiles array
          await salesFiles.push(path.join(folderName, item.name));
        }
      }
    }
  }

  await findFiles(folderName);

  return salesFiles;
}

async function main() {
  const salesDir = path.join(__dirname, "stores");
  const salesTotalsDir = path.join(__dirname, "salesTotals");

  // create the salesTotal directory if it doesn't exist
  try {
    await fs.mkdir(salesTotalsDir);
  } catch {
    console.log(`${salesTotalsDir} already exists.`);
  }

  // find paths to all the sales files
  const salesFiles = await findSalesFiles(salesDir);

  // read through each sales file to calculate the sales total
  const salesTotal = await calculateSalesTotal(salesFiles);

  // write the total to the "totals.json" file
  await fs.writeFile(
    path.join(salesTotalsDir, "totals.txt"),
    `${salesTotal}\r\n`,
    { flag: "a" }
  );
  console.log(`Wrote sales totals to ${salesTotalsDir}`);
}

main();
```

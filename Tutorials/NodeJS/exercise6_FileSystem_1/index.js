const fs = require("fs").promises;

// /////////Part 1/////////////

// async function getDirs() {
//   const items = await fs.readdir("stores");
//   console.log(items); 
// }

// getDirs();

// /////////Part 2/////////////

// async function getDirsWithFileTypes() {
//   const items = await fs.rea.readdir("stores", { withFileTypes: true });
//   console.log(items); 
//   for (let item of items) {
//     const type = item.isDirectory() ? "folder" : "file";
//     console.log(`${item.name}: ${type}`);
//   }
// }

// getDirsWithFileTypes();

// /////////Part 3/////////////

// async function findFiles(folderName) {
//   const items = await fs.readdir(folderName, { withFileTypes: true });
//   items.forEach((item) => {
//     if (item.isDirectory()) {
//       findFiles(`${folderName}/${item.name}`);
//     } else {
//       console.log(`Found file: ${item.name} in folder: ${folderName}`);
//     }
//   });
// }

// findFiles("stores");

// ///////Part 4/////////////

// async function findSalesFiles(folderName) {
//   // this array will hold sales files as they are found
//   let salesFiles = [];

//   async function findFiles(folderName) {
//     // read all the items in the current folder
//     const items = await fs.readdir(folderName, { withFileTypes: true });

//     // iterate over each found item
//     for (item of items) {
//       // if the item is a directory, it will need to be searched for files
//       if (item.isDirectory()) {
//         // search this directory for files (this is recursion!)
//         await findFiles(`${folderName}/${item.name}`);
//       } else {
//         // Make sure the discovered file is a sales.json file
//         if (item.name === "sales.json") {
//           // store the file path in the salesFiles array
//           await salesFiles.push(`${folderName}/${item.name}`);
//         }
//       }
//     }
//   }

//   // find the sales files
//   await findFiles(folderName);

//   // return the array of found file paths
//   return salesFiles;
// }

// async function main() {
//   const salesFiles = await findSalesFiles("stores");
//   console.log(salesFiles);
// }

// main();

///////Part 5/////////////

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

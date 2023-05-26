# **Manage Packages Dependencies**

- [**Manage Packages Dependencies**](#manage-packages-dependencies)
  - [When to update](#when-to-update)
  - [Use semantic versioning](#use-semantic-versioning)
  - [Update a package by using npm](#update-a-package-by-using-npm)
  - [Configure the package.json for update](#configure-the-packagejson-for-update)
  - [package-lock.json](#package-lockjson)
  - [Find and update outdated packages](#find-and-update-outdated-packages)
  - [Manage security issues](#manage-security-issues)
  - [Exercise: Manage dependency updates](#exercise-manage-dependency-updates)

---

## When to update

[&#9650;](#manage-packages-dependencies)

Sooner or later, a version of a library has to be updated because:

- a function is marked as deprecated.
- a new feature in a later version.

before updating a library, we need to assess:

- **The type of update**. What type of update is available? Is it a small bug fix? Is it adding a new feature you need? Will it break your code? **`semantic versioning`** need to be followed for **`version number`** of the library, to communicates to developers the type of update.
- **Whether the project is configured correctly**. You can configure your **`Node.js`** project so that you get **only** the types of updates you want.
- **Security problems**. Problems arise as vulnerabilities are detected. Ideally, patches will be released that you can download. The **`npm`** tool helps you **run an audit** on your libraries to find out if you have packages that should be updated.

## Use semantic versioning

[&#9650;](#manage-packages-dependencies)

|Type|What happens|Impact|
|-|-|-|
|**Major version**|1.0.0 changes to **2**.0.0|expect breaking changes in the code. You might need to rewrite part of your code|
|**Minor version**|1.2.9 changes to 1.**3**.0|features have been added. Your code should still work. It's generally safe to accept the update|
|**Patch version**|1.0.7 changes to 1.0.**8**|a change has been applied that fixes something in the code that should have worked. It should be safe to accept the update|

## Update a package by using npm

[&#9650;](#manage-packages-dependencies)

**`npm install`** and **`npm update`** act the same, but here is a typical update command:

```text
npm update <name of package>@<optional argument with version number>.
```

An npm package is updated if:

- An **argument** is supplied to the npm update command
- A **patern** is supplied in the manifest file in the form of `"<name of dependency>": "1.1.x"`

## Configure the package.json for update

[&#9650;](#manage-packages-dependencies)

We can automate the approach that will be used by the `npm update <name of dependency>` command in the manifest file

|Pattern|Update level|
|-|-|
|x.0.0 or * (asterisk)|Update to the highest major version.|
|1.x.1 or ^ (insert)|Update to only the minor version.|
|1.1.x or ~ (tilde)|Update to the latest patch version. You can use the pattern "~1.0.0" to update only the patch version. The pattern causes an update to the value "equal to or greater than in the same range." |

## package-lock.json

[&#9650;](#manage-packages-dependencies)

- In addition to the **`package.json`** manifest file, you also have the **`package-lock.json`** file.

- This file is generated when you **do something** that modifies the **`node_modules`** directory **or anything** that changes the dependencies in the **`package-lock.json`** file. This file isn't created when you run the `npm init` command. The file is **created when you install a package**, for example.

- The package-lock.json file should be committed to your repository.

- One reason to commit this file to your repository is that **it guarantees exact installations**. Remember how in the `package.json` file, you define patterns for the types of installations you want, such as patches, minor versions, or major versions. Patterns aren't exact. If you use a 1.x pattern, you won't know if you installed version 1.4 or 1.5.

- You might need to know which version you installed. Consider the scenario where you specify the pattern 1.x, you're specifically using version 1.2 in your code, and then version 1.4 is released. The new version ends up breaking your code. Someone installing your app will get a non-functioning app at that point. But, if there's a `package-lock.json` file that states version 1.2 is used, then version 1.2 will be installed. So, who cares about this behavior? People who use your app and continuous integration (CI) tools.

- It's important to understand the process, and also which file determines when an installation occurs. It works like this:

  - If the `package.json` and the `package-lock.json` files **agree on a semantic-rule** level, **there's no conflict**. If the pattern says 1.x in `the package.json` file and the `package-lock.json` file specifies version 1.4 is installed, then version 1.4 will be installed.
  - If the `package.json` file **specifies** a pattern like 1.8.x, then the instructions in the `package-lock.json` file **won't be implemented**. Minor version 1.8.0 or later will be installed, or a later patch version if one is available.
  
- The `package-lock.json` file also provides other features. It makes it easy to see what has changed between commits and helps to optimize the installation process.

## Find and update outdated packages

[&#9650;](#manage-packages-dependencies)

The `npm outdated` command lists outdated packages

**Output Exmaple:**

```text
Package       Current    Wanted   Latest     Location     Depended by
lodash        1.0.0      1.0.0    4.17.19    lock-test    main-code-file
node-fetch    1.2.0      1.2.0    2.6.0      lock-test    function-code-file
```

The columns in the output include:

- **Package:** The outdated package.
- **Current:** The current installed version of the package.
- **Wanted:** The latest version that matches the semantic pattern you specified in the package.json file.
- **Latest:** The latest version of the package.
- **Location:** The location of the package dependency. The outdated command crawls through all installed packages in the various node_modules folders.
- **Depended by:** The package that has the dependency.

The recommended workflow is to run these commands in this order:

- Run the **`npm outdated`** command to list all the outdated packages. This command provides information in the Wanted, Latest, and Location columns.
- Run the **`npm update <optional package name>`** command to update the installed packages. If you run this command **with a package name** specified, the command tries to update only the **specified package**. If you **don't specify** a package, the command tries **to update all the packages** in the package.json file.

## Manage security issues

[&#9650;](#manage-packages-dependencies)

Every time you update or install a package, you get a log response after the installation completes. The response tells you what version was installed and whether there are any vulnerabilities. A log might look like this example:

```text
+ lodash@1.3.1
added 1 package from 4 contributors and audited 1 package in 0.949s
found 3 vulnerabilities (1 low, 2 high)
  run `npm audit fix` to fix them, or `npm audit` for details
```

To fix an issue and apply an update, you can run the `npm audit` command.

```text
# Run  npm install lodash@4.17.15  to resolve 3 vulnerabilities

| Low            | Prototype Pollution               |
|----------------|-----------------------------------|
| Package        | lodash                            |
| Dependency of  | lodash                            |
| Path           | lodash                            |
| More info      | https://npmjs.com/advisories/577  |  
```

- The `npm audit fix` command tries to fix the problem. It tries to upgrade to a minor version where the problem doesn't exist.

- That action might not be enough. You might be prompted you to run the `npm audit fix --force` command to fix the problem. This action involves a **breaking change**. That is, the **major version** of your package will be updated.
  
- If the output shows a **critical vulnerability**, run the **`npm audit fix --force`** command to resolve the vulnerabilities.

## Exercise: Manage dependency updates

[&#9650;](#manage-packages-dependencies)

**`PS:`**  
Refer to the following folder for the exercise files:

> **exercise3_manage_dependency_updates**

**1 . Add** the following **`depend_index.js`** file

**`depend_index.js`**

```js
const fetch = require('node-fetch')
const _ = require('lodash');
const path = require('path');
const fs = require('fs');

async function run() {
  const response = await fetch("https://dev.to/api/articles?state=rising");
  const json = await response.json();
  const sorted = _.sortBy(json, ["public_reactions_count"], ['desc']);
  const top5 = _.take(sorted, 3);

  const filePrefix = new Date().toISOString().split('T')[0];
  fs.writeFileSync(path.join(__dirname, `${filePrefix}-feed.json`), JSON.stringify(top5, null, 2));
}

run();
```

**2 . Add** the following **`package.json`** file, **note the dependencies**, the patterns specify the **insert (^) character**, which indicates **updates to the minor version** to support dependencies

```json
  "dependencies": {
    "lodash": "^1.1.0",
    "node-fetch": "^2.6.1"
```

**`package.json`**

```json
{
  "name": "tailwind-trader-api",
  "version": "1.0.0",
  "description": "HTTP API to manage items from the Tailwind Traders database",
  "main": "depend_index.js",
  "scripts": {
    "start": "node ./depend_index.js",
    "test": "jest"
  },
  "keywords": [
    "api",
    "database"
  ],
  "author": "Sam",
  "license": "ISC",
  "dependencies": {
    "lodash": "^1.1.0",
    "node-fetch": "^2.6.1"
  }
}
```

**3 . If not** installed, proceed with installing the **`loadash`** and the **`node-fetch`** packages with the versions indicated in the **`package.json`**

```text
npm install node-fetch@1.0.2
npm install lodash@1.1.0
```

**4 . In the terminal**, run this command to check for outdated dependencies:

```text
npm outdated
```

You should see output similar to this example:

```text
> npm outdated
Package     Current  Wanted   Latest  Location                 Depended by
lodash        1.1.0   1.3.1  4.17.21  node_modules/lodash      VsCode_My_WebApp
node-fetch    1.0.2   1.7.3    3.3.1  node_modules/node-fetch  VsCode_My_WebApp
```

**5 . Update** the outdated packages to the Wanted version. This level of update ensures the dependencies get the latest features and patches in the minor version.

```text
npm update
```

Output of the `npm outdated` is:

```text
Package     Current  Wanted   Latest  Location                 Depended by
lodash        1.3.1   1.3.1  4.17.21  node_modules/lodash      VsCode_My_WebApp
node-fetch    1.7.3   1.7.3    3.3.1  node_modules/node-fetch  VsCode_My_WebApp
```

**6 . Update** to the latest version by running the **`npm install <name of package>@<known latest version>`** command or use the **latest** keyword: **`npm install <name of package>@latest`**.

```text
npm install node-fetch@latest lodash@latest
```

>**No outdated is resulting from the command now**.

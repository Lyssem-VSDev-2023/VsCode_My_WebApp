
[top]: #table-of-content



# **Misc VSCode Hints**

# Table of Content

- [**Misc VSCode Hints**](#misc-vscode-hints)
- [Table of Content](#table-of-content)
- [1. Create a Code Snippet](#1-create-a-code-snippet)
- [2. Add to Source Code Control (Github)](#2-add-to-source-code-control-github)
- [3. Install MarkDown Compiler](#3-install-markdown-compiler)
- [4. Automatic Markdown compilation](#4-automatic-markdown-compilation)
- [5. Install TypeScript](#5-install-typescript)
- [6. Uninstall an npm package](#6-uninstall-an-npm-package)


<br>

<!---------------------Create a Code Snippet----------------------------->
---
# 1. Create a Code Snippet
[&#9650;](#top)
Go to the following menu:
- File
- Preferences
- Configure Uer Snippets
- Select the language (or a global snippet)
- Type you code under the "language".json

```json
"Print String to console": {
    "prefix": "log_String",
    "body": [
        "let $1 = \"$2\";",
        "console.log($1);",
    ],
    "description": "Log Declaration output to console"
},
"Print Number to console": {
    "prefix": "log_Number",
    "body": [
        "let $1 = $2;",
        "console.log($1);",
    ],
    "description": "Log Declaration output to console"
},
```
![Snippet Menu](/Images/Snippet_1.png)

<!-----------------Add to Source Code Control (Github) -------------------------->
<hr>

# 2. Add to Source Code Control (Github)
[&#9650;](#top)
* Open Source Control

![Source Control Menu](/Images/SourceCode_1.png)
* Select **Publish to GitHub** Button
* Confim the proposed Name (Git Hub need to be logged in)
* Confirm teh selected Folders to be synched

<!-----------------Install MarkDown Compiler -------------------------->
<hr>


# 3. Install MarkDown Compiler
[&#9650;](#top)
1. Install the markdown-it compiler: ``` npm install -g markdown-it ```

2. Create a tasks.json file: 
    - In VsCode, go to **Terminal** Menu
	- Select **Configure Tasks...**
	- Select **Create tasks.json file from template**
	- Select **Others...**
 
3. In the created tasks file, update the label and the task action, then save the file:
```json
{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Compile Markdown single file",
            "type": "shell",
            "command": "markdown-it Readme.md -o Readme.html"
        }
    ]
}
```
4. Run the build task
    - In VsCode, go to **Terminal** Menu
	- Select **Run Tasks...**
	- Select the task as per the name you just created
	- Select the Default option *(continue without scanning)* or select any other suitable option.

![MarkDown Menu](/Images/markdwon1.png)

<!---------------------Automatic Markdown compilation----------------------------->
---
# 4. Automatic Markdown compilation
[&#9650;](#top)
1. Install gulp globally: ``` npm install -g gulp ```
2. Install gulp locally: ```  npm install gulp gulp-markdown-it ```
3. Create gulp task script: 
    - Create a **gulpfile.js** file under root folder of the project  where the md files have to be processed
	- Part the following **Javascript** code under the created file:
```js
//Script that watches any change on the .md files, in order to recompile them in .html at save
var gulp = require('gulp');
var markdown = require('gulp-markdown-it');
gulp.task('markdown', function () {
    return gulp
        .src('**/*.md')
        .pipe(markdown())
        .pipe(
            gulp.dest(function (f) {
                return f.base;
            })
        );
});
gulp.task('default', function () {
    return gulp.watch('**/*.md', gulp.series(['markdown']));
});
```
4. Create the batch task: 
```json
{
    // See https://go.microsoft.com/fwlink/?Link...
    // for the documentation about the tasks.json format
    "version": "2.0.0",
    "tasks": [
        {
            "type": "gulp",
            "task": "default",
            "problemMatcher": [],
            "group": {
                "kind": "build",
                "isDefault": true
            }
        }
    ]
}
```
5. Run the build task
    - Go to **Terminal** Menu
	- Select **Run Tasks...**
	- Select the task as per the name you just created
6. The task will be lauched and **watching** for any change to the **.md** files, and proceed with their **complation** to **.html** 
7. To stop the task:
	- Go to **Terminal** Menu
	- Select Terminate Task
`

<!---------------------Install TypeScript----------------------------->
---
# 5. Install TypeScript
[&#9650;](#top)
To install TypeScript Package:
- Open a teminal
- Run the following npm commande: ```npm install -g typescript``` (-g if for installing the package globally in the computer)
- Run the following npm commande: ```npm install -g ts-node```

If the following errors are faced:
   - PowerShell - Running scripts is disabled on this system
   - PowerShell Script cannot be loaded because running scripts is disabled on this system error

run the following command in the terminal: 

 - ```Set-ExecutionPolicy -Scope CurrentUser Unrestricted```

# 5.Compile TypeScript

Check if compiler is installed

- Open a **teminal**
- Run the following npm commande: ```tsc```

Run TypeScript compilation in the **terminal**:

- **```tsc```** if the **`tsconfig.config`** file exists, or **`tcs file-name.ts`** if not

```cs
tsc utility_functions.ts --noImplicitAny
tsc utility_functions.ts --target "ES2015"
```

**`tsconfig.config`** file need to be in the TypeScript Project directory

run **`tsc --init`** to create the default **`tsconfig.json file`**

the following a config file with more options

```json
{
    "compilerOptions": {
        "target": "es5",
        "noImplicitAny": true,
        "removeComments": true,
        "noEmitOnError": true,
        "preserveConstEnums": true,
        "sourceMap": true,
        "allowJs": true,
        "outDir": "dist",
    },
    "exclude": [
        "mslearn-typescript"
    ],
    "scripts": {
        "build": "tsc --build",
        "clean": "tsc --build --clean"
      },
}

```

this a more elaborated list of TS compiler otpions

```json
{
  "compilerOptions": {
    /* Basic Options */
    // "incremental": true,                   /* Enable incremental compilation */
    "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
    // "lib": [],                             /* Specify library files to be included in the compilation. */
    // "allowJs": true,                       /* Allow javascript files to be compiled. */
    // "checkJs": true,                       /* Report errors in .js files. */
    // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    // "outDir": "./",                        /* Redirect output structure to the directory. */
    // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "composite": true,                     /* Enable project compilation */
    // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
    // "removeComments": true,                /* Do not emit comments to output. */
    // "noEmit": true,                        /* Do not emit outputs. */
    // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
    "strict": true,                           /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,              /* Enable strict null checks. */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. */
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */

    /* Module Resolution Options */
    // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
    // "types": [],                           /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */

    /* Source Map Options */
    // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */

    /* Advanced Options */
    "forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */
  }
}

```
<!---------------------Uninstall an npm package----------------------------->
---
# 6. Uninstall an npm package
[&#9650;](#top)
To install an npm Package:
- Open a **teminal**
- Run the following npm commande: ```npm uninstall -g package-name```

# VSCode - Main Shortcuts

|Function|Shortcut|Standard|Comment|
|-|-|-|-|
|Comment|Ctl K + Ctl C|Yes||
|Uncomment|Ctl K + Ctl U|Yes||
|Format Code|Ctl K + Ctl F|Yes|Javascript / C#|
|Inline Code|Ctl M + Ctl I|MardonwIt|MarkDown|
|Block Code|Ctl M + Ctl C|MardonwIt|MarkDown|
|Indent Line|Ctl I + Ctl I|Manual|All|
|Outdent Line|Ctl O + Ctl O|Manual|All|


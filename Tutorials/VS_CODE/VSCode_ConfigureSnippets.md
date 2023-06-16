# **VSCode Snippets**

- [**VSCode Snippets**](#vscode-snippets)
  - [Create a Code Snippet](#create-a-code-snippet)
  - [Create a Global Code Snippet (Multi-language)](#create-a-global-code-snippet-multi-language)

---

## Create a Code Snippet

[&#9650;](#vscode-snippets)

Go to the following menu:

- File
- Preferences
- Configure Uer Snippets
- Select the language (or a global snippet)
- Type you code under the **`"language".json`**

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

![Snippet Menu](/Tutorials/VS_CODE/Images/Snippet_1.png)

Or you can go to the following:

`Ctl + Shift + P` to show the console the select **`Snippets: Configure User Snippets`**

## Create a Global Code Snippet (Multi-language)

[&#9650;](#vscode-snippets)

- Ctl+P
- Configure User Snippets
- New Global Snippet file

Use the following code for scope

```json
"div": {
    "scope": "javascript,javascriptreact,html,typescript,typescriptreact",
    "prefix": ".div",
    "body": ["<div>$TM_SELECTED_TEXT$1</div>"],
    "description": ""
  },
```

- [List of scope languages](https://code.visualstudio.com/docs/languages/identifiers)

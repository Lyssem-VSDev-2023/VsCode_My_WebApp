# **Add packages to NodeJS project**

- [**Add packages to NodeJS project**](#add-packages-to-nodejs-project)
  - [Determine whether you need a package](#determine-whether-you-need-a-package)
  - [Evaluate a package](#evaluate-a-package)
  - [Install a package](#install-a-package)
  - [Find a package](#find-a-package)
  - [npm commands](#npm-commands)
  - [Production vs. development dependencies](#production-vs-development-dependencies)
  - [How to install a package](#how-to-install-a-package)
  - [After installation](#after-installation)
  - [Clean up dependencies](#clean-up-dependencies)

---

- **`Node.js`** comes with many core libraries that handle everything from managing files to HTTP to compressing files and more.
- There is, however, a huge ecosystem of third-party libraries. Thanks to **`npm`**, the Node Package Manager, you can easily install these libraries and use them in your application.
- **`Node.js`** and its ecosystem use the word **dependency** a lot. A dependency is a **third-party library**, that can be added to your application.
- The **third-party library** can be thought of as a package and stored in a registry. A package consists of one or more modules that you can **import** into your application so you can take advantage of its features.

## Determine whether you need a package

[&#9650;](#add-packages-to-nodejs-project)

- **`Get better code:`** Does your program need to support a specific task, such as **security**, where you need to implement **authentication** and **authorization**?. There are standard security patterns and libraries used by many developers. These libraries implement features that you most likely will always need, and issues are patched in the libraries as they arise.
- **`Save time:`** You could probably code most of your program yourself and create utility or UI component libraries. But the programming takes time.
- **`Maintenance:`** All libraries and apps need maintenance sooner or later. Maintenance involves adding new features and correcting bugs. Is it a good use of your or your team's time to maintain a library? Or, is it better to let an open-source software team handle it?

## Evaluate a package

[&#9650;](#add-packages-to-nodejs-project)

Before you install a library, you might want to inspect the dependencies it relies on. These dependencies might encourage you to use the package, or they might deter you. Here are some factors to consider when you select a dependency for your project:

- **`Size:`** The number of dependencies can create a large footprint. If you're on a limited bandwidth or have other hardware limitations, size can be a significant factor.
- **`Licensing:`** Licensing might be a factor if you're producing software that you intend to sell. If you have a license on a third-party library, and the creator of the library doesn't allow it to be included in software that's for sale, you might encounter into a legal situation.
**`Active maintenance:`** If your package relies on a dependency that's deprecated or hasn't been updated for a long time, maintaining your program might be difficult.

To get details about a package, use the following command:

```text
npm view <package name>
```

## Install a package

[&#9650;](#add-packages-to-nodejs-project)

You install a package by using a built-in command-line tool called `npm`. You can **add a package to your `Node.js`** project by invoking a command in the terminal.

A typical installation command looks like this one:

```text
npm install <name of package>.
```

When you run the `install` command, the command-line tool connects to a global registry, fetches the code, and places it in a node_modules folder for your project. After the installation, your project directory looks something like this:

**Output:**

```text
-| node_modules/
---| <name of dependency>/
------| <files included in the dependency>
```

## Find a package

[&#9650;](#add-packages-to-nodejs-project)

Individual developers might use the global registry at npm to find and download packages they need for their apps. A company might have a strategy in place for what packages are OK to use and where to find them. Packages might be located in many different places. Some of these sources might be publicly available. Some might be restricted and accessible only to employees of a specific company. Here are some places where packages might reside:

- **Registries:** An example of a registry might be a global registry like the **`npm registry`** ([http://npmjs.org](http://npmjs.org)). You can host your own registries that can be either private or public.

- **Repositories**: Instead of pointing to a registry, it's possible to point to a **`GitHub URL`** and install a package from there.

- **Files:** You can install a package from a local folder or zipped file.
  
- **Directories:** You can install right from a directory as well.

## npm commands

[&#9650;](#add-packages-to-nodejs-project)

So far, you've learned how you can install dependencies by using the npm tool. But this tool can do a lot more. The commands help you with tasks like installing packages, authoring packages, and initializing Node.js projects.

- **Manage dependencies:** There are many commands that cover installation, removal, and cleaning up after package installations. There are commands for updating packages as well.

- **Run scripts:** The npm tool can help you manage flows in your application development. Examples of application flows are running tests, building code, or running quality improvement tools to lint your code.

- **Configure the environment:** There are many things you can configure, like where your installations end up and where packages should be installed from. It's common to have a setup that allows you to install packages from the global npm registry and also from a company-specific registry.

- **Author and publish packages:** There are several commands that can help you with tasks like creating a compressed package and pushing the package to a registry.

If you want a detailed list of all commands, enter the following command in the terminal:

**`npm --help`**

## Production vs. development dependencies

[&#9650;](#add-packages-to-nodejs-project)

Dependencies belong to one of two categories:

- **Production dependencies:** Production dependencies are dependencies that you need to run when your application is in production. A production dependency must be built into your application so the functionality is available when the application is running. Examples include a web framework with which you can build a web application.
  
- **Development dependencies:** Development dependencies are dependencies that you need only when you develop your application. Think of these dependencies as you'd think of scaffolding for a building. When you're done building, you don't need them anymore. Examples of development dependencies are test libraries, linting tools, or bundling tools. These dependencies are an important part of ensuring your application works well, but you don't need to ship your application with them.

This **separation** of different types of dependencies is built into the npm command-line tool as well. If you specify the **`--production`** flag when you install a dependency, only production dependencies will be installed. For example, this flag is used by continuous integration and continuous deployment (CI/CD) pipelines to ensure that only the dependencies needed to run the app are installed.

## How to install a package

[&#9650;](#add-packages-to-nodejs-project)

- You run the **`npm install <dependency name>`** command to install a **normal dependency** that's meant to be used as part of your application.  

- The developer dependency is something that's not meant to be shipped to production. To install a developer dependency, add the **`--save-dev`** flag.

- There are also packages that you can install **`globally`**. These packages **aren't usually meant to be imported into your project**. For that reason, many global packages are CLI tools. Some of these packages do allow themselves to be imported, like http-server.

- If you install something globally, it's not installed in a project's node_modules folder. Instead, it's installed in a computer-specific directory, so it's available for all Node.js projects on the computer. To install a global package, add the **`-g`** flag to the install command, so the command looks like this one: **`npm install <dependency name> -g`**.

- However, the **`npx`** tool was created in part to address the fact that globally installed dependencies take up space after many of them have been installed over time. Also, on many operating systems, a globally installed tool needs elevated permissions for installation. The main point is that global dependencies complete tasks that you most likely want to perform infrequently. So there's little need for these tools to be on your computer for more than a temporary period of time.

- The **`npx`** tool allows you to load the dependency into the **`Node.js`** process and run the command from there. After the command is run, the dependency is cleaned up and removed from your system. The npx tool has been shipped with all major versions of npm since version 5.2. This tool is the preferred way to use dependencies that are meant to be run infrequently. To use the npx tool, enter **`npx <name of package>`**. It will fetch the dependency, run the command, and clean up.

## After installation

[&#9650;](#add-packages-to-nodejs-project)

- The packages **listed in the dependencies** section of your **`package.json`** file **will differ** from the ones listed in the **`node_modules`** folder.

- If you want to see what packages are in the folder, you can enter the **`npm list`** command. But this command might produce a long list.

- It might be hard to get a sense of what you have in the folder. To help with this problem, you can list packages at different depths. When you do so, the list command looks like this one:

```text
npm list --depth=<depth>
```

**At depth 0**, the command lists the same content that you have in the dependencies section of your package.json. If you installed the Jest package, npm list --depth=0 will produce output similar to this output:

```text
├── jest@26.0.1
```

The **`npm list`** command lists all the packages in the **`node_modules`** directory that were installed. Each installed package has also installed all of the dependencies that it relies on.

**Depth 1** allows you to see one level down in your installation with your installed packages and the primary dependencies that they consist of. If you run the **`npm list --depth=1`** command, you might see this output with more dependent packages:

```text
├─┬ jest@26.0.1
│ ├── @jest/core@26.0.1
│ ├── import-local@3.0.2
│ └── jest-cli@26.0.1
```

## Clean up dependencies

[&#9650;](#add-packages-to-nodejs-project)

- Sooner or later, you're likely to realize that you no longer need a package. Or you might realize that the package you installed isn't the one you need. Maybe you found one that will accomplish a task better. Whatever the reason, you should remove dependencies that you aren't using. Doing so keeps things clean. Also, dependencies take up space.

- The space argument becomes more important if you're building an SPA application by using a framework like Angular, React, or Vue. These applications are also Node.js projects. Building these apps involves a bundling and minification process in which different Node.js modules are concatenated and the source code is compressed. The resulting bundle or bundles end up being served from a browser. The larger the bundle is, the longer it takes to send over the network before it becomes something customers can interact with. The longer customers have to wait, the more likely they might avoid using an app.

There are two ways to clean up dependencies you no longer need:

- **Uninstall:** To uninstall a package, run the npm **`uninstall <name of dependency>`**. This command removes the package from the manifest file and from the node_modules folder.
  
- **Prune:** You can also run the **`npm prune`** command. This command removes all dependencies in the **`node_modules`** folder that aren't listed as dependencies in the **manifest file**. This command is a **good choice** if you want to remove **more than one dependency** and you don't want to run the uninstall command for each dependency. To use this command to remove unused dependencies, **first** remove the entries from the dependencies or devDependencies section of the manifest file, **and then** run the npm prune command.

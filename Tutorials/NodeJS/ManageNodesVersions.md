# **Manage Node Versions - With or Without NVM**

## [&#128281;](ReadMe.md)

## Without NVM

- Download and Install the latest version of Node.js from the official website ([Node.js](https://nodejs.org/en/download)).
- Node.js version will be refreshed

or Manually

- **`npm cache clean -f`**
- **`npm install -g n`** or **`- n stable`** and also you can specify a desired version:
**`n 0.8.21`**

## With NVM

- Download and Install the NVM from the official website ([NVM](https://github.com/coreybutler/nvm-windows/releases)) / ([NVM GitHub](https://github.com/coreybutler/nvm-windows)).
- Run **`CMD`**
- run **`nvm -v`**
- Install latest version of Node **`nvm install latest`**
- install a specific Node version **`nvm install <version>`**
- Check the available versions of Node **`nvm list`**
- Use a specific version of Node **`nvm use <version>`**
- Update npm **`npm install -g npm`**
- Make a version the default version **`nvm alias default vX.Y.Z`**

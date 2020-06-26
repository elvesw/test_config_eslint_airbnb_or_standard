
[Yarn](https://classic.yarnpkg.com/en/docs/install) was used as a package manager
### commands are
```bash

# create a directory for the new project
$ mkdir test_eslint

# enter the new directory
$ cd test_eslint

# start a new project
$ yarn init -y

# open the new project with vscode
$ code .

# Install TypeScript
$ yarn add -D typescript

# start TypeScript compiler, to create the file "tsconfig.json"
$ yarn tsc --init

# Install express
$ yarn add express

# Install other devDependencies
$ yarn add -D @types/express ts-node-dev tsconfig-paths

# Install eslint version 7.2.0
$ yarn add  -D eslint@7.2.0

# start eslint, config and create file ".eslintrc.js"
$ yarn eslint --init
```
**How would you like to use ESLint ?** To check syntax, find problems, and enforce code style
**What type of modules does your project use ?** JavaScript modules (import/export)
**Which framework does your project use ?** None of these
**Does your project use TypeScript ?** Yes
**Where does your code run ?** Node
**How would you like to define a style for your project ?** Use a popular style guide
**Which style guide do you want to follow ?** Airbnb: https://github.com/airbnb/javascript
**What format do you want your config file to be in ?** (Use arrow keys)

```bash
# Install other devDependencies eslint
yarn add -D @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.21.2 @typescript-eslint/parser@latest
```


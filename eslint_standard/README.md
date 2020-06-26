
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

# Install eslint #
$ yarn add -D eslint

# start eslint, config and create file ".eslintrc.js"
$ yarn eslint --init
```
**How would you like to use ESLint?** · style       
**What type of modules does your project use?** · esm
**Which framework does your project use?** · none
**Does your project use TypeScript?** · No / Yes
**Where does your code run?** · node
**How would you like to define a style for your project?** · guide
**Which style guide do you want to follow?** · standard
**What format do you want your config file to be in?** · JavaScript

**Would you like to install them now with npm?** · No / Yes

```bash
# Install peerDependencies eslint
yarn add -D @typescript-eslint/eslint-plugin@latest eslint-config-standard@latest eslint-plugin-import@>=2.18.0 eslint-plugin-node@>=9.1.0 eslint-plugin-promise@>=4.2.1 eslint-plugin-standard@>=4.0.0 @typescript-eslint/parser@latest
```


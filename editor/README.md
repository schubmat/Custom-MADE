# Visualisation of a Domain-Specfic Language
This is the IDE which is supposed to visualize a FlexDRMetaModel-based DSL. It uses Theia (and Sprotty)
for putting up the IDE (with Theia) and add visual support (with Sprotty).

## Software Versions
The following versions were used while developing this solution.
```
node 12.22.5
npm 7.16.0 (and newer)
yarn 1.22.5 (and newer)
nvm 0.35.1 (and newer)
```

## Getting started

Install [nvm](https://github.com/creationix/nvm#install-script). E.g., write:

    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash

Install npm and node.

    nvm install 12.22.5
    nvm use 12.22.5

Install yarn.

    npm install -g yarn

Install the VSCode dependencies. See [VSCode Prequisites](https://github.com/Microsoft/vscode/wiki/How-to-Contribute#prerequisites).

## Running the Editor

From the root directory, compile the plugins:

    yarn --cwd plugins/dsl-extension

Then, compile the editor and run it on port 3001:

    yarn && yarn start --port 3001

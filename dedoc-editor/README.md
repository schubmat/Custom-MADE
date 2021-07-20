# Visualisation of a Domain-Specfic Language
This is the IDE which is supposed to visualize a FlexDRMetaModel-based DSL. It uses Theia (and Sprotty)
for putting up the IDE (with Theia) and add visual support (with Sprotty).

## Software Versions
The following versions were used while developing this solution.
```
node 10.11.0
npm 7.16.0
yarn 1.22.5
nvm 0.35.1
```

## Getting started

Install [nvm](https://github.com/creationix/nvm#install-script).

    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash

Install npm and node.

    nvm install 10.11.0
    nvm use 10.11.0

Install yarn.

    npm install -g yarn

## Quickstart
To run the software, simply execute
```shell
bash ./build_and_run_theia.sh
```
The shell file uses the commands below.

### Adding a custom language server
For using a language, Theia needs a language server file, it can start (typically a .jar file). The file `àssemble_custommade.sh` is
responsible for copying a freshly compiled language server to Theia. To do so, **have a look in the file and
configure its variables**. Afterwards, one can run:
```shell
bash ./assemble_custommade.sh
```
The language server, which is used for development is referenced [in this repository](https://github.com/rrcomtech/Visualization_of_DSL_Families).

## Running the browser example

    yarn rebuild:browser
    cd browser-app
    yarn start

Open http://localhost:3001 in the browser.

## Running the Electron example

    yarn rebuild:electron
    cd electron-app
    yarn start

## Developing with the browser example

Start watching of mdr-dsl.

    cd mdr-dsl
    yarn watch

Start watching of the browser example.

    yarn rebuild:browser
    cd browser-app
    yarn watch

Launch `Start Browser Backend` configuration from VS code.

Open http://localhost:3000 in the browser.

## Developing with the Electron example

Start watching of mdr-dsl.

    cd mdr-dsl
    yarn watch

Start watching of the electron example.

    yarn rebuild:electron
    cd electron-app
    yarn watch

Launch `Start Electron Backend` configuration from VS code.
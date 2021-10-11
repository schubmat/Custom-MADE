//@ts-check
'use strict';

const path = require('path');

const packageJson = require("./package.json");
const name = packageJson.contributes.languages[0].id;

/**@type {import('webpack').Configuration}*/
const config = {
    target: 'node', 

    entry: path.resolve(__dirname, 'src/extension.ts'),
    output: { 
        path: path.resolve(__dirname, 'pack'),
        filename: name + '-extension.js',
        libraryTarget: "commonjs2",
        devtoolModuleFilenameTemplate: "../[resource-path]",
    },
    devtool: 'source-map',
    externals: {
        vscode: "commonjs vscode"
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        compilerOptions: {
                            "module": "es6" // override `tsconfig.json` so that TypeScript emits native JavaScript modules.
                        }
                    }
                }]
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            }
        ]
    },
}

module.exports = config;

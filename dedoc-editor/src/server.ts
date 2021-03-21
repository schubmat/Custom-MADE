/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2018 TypeFox GmbH (http://www.typefox.io). All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import * as express from "express";

process.on('uncaughtException', function (err: any) {
    console.error('Uncaught Exception: ', err.toString());
    if (err.stack) {
        console.error(err.stack);
    }
});

// create the express application
const app = express();

// set proxy
const proxy = require('http-proxy-middleware');
app.use(proxy('/files', { target: 'http://localhost:8080' }));
app.use(proxy('/lsps', { target: 'http://localhost:8080' }));

// server the static content, i.e. index.html
app.use(express.static(__dirname));
// start the server
app.listen(3001);
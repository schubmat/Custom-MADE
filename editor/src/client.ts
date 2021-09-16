/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2018 TypeFox GmbH (http://www.typefox.io). All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import {listen, MessageConnection} from "vscode-ws-jsonrpc";
import {CloseAction, createConnection, ErrorAction, MonacoLanguageClient, MonacoServices} from "monaco-languageclient";
import normalizeUrl = require("normalize-url");

const ReconnectingWebSocket = require("reconnecting-websocket");

export enum Action {READY, SET_CONTENT}
interface Message {
    action: Action,
    data: any
}
let dedocWeb = undefined;
let editor;
let fileId = undefined;

window.addEventListener("message", receiveMessage, false);

sendMessage({action: Action.READY, data: true});

interface InitData {
    lspPort: number
}
interface SetContentData {
    fileContent: string,
    fileId: number
}

function sendMessage(message: Message) {
    if (dedocWeb === undefined) {
        window.parent.postMessage(message, '*');
        return;
    }
    dedocWeb.postMessage(message, '*');
}

function receiveMessage(event) {
    const message = event.data;

    if (message.action === Action.READY) {
        dedocWeb = event.source;
        init(message.data);
        return;
    }
    if (message.action == Action.SET_CONTENT) {
        setFileContent(message.data);
    }
}

function setFileContent(data: SetContentData) {
    fileId = data.fileId;
    editor.getModel().setValue(data.fileContent);
}

function sendFileContent() {
    if (!fileId)
        return;
    sendMessage({
        action: Action.SET_CONTENT,
        data: {
            fileId: fileId,
            content: editor.model.getValue()
        }
    });
}

function init(data: InitData) {
    if (data.lspPort == undefined)
        return;

    const lspPort = data.lspPort;
    // register Monaco languages
    monaco.languages.register({
        id: "myDsl",
        extensions: [".mydsl"],
        aliases: ["MYDSL", "myDsl"],
        mimetypes: ["application/myDsl"]
    });

    // create Monaco dslFiles
    editor = monaco.editor.create(document.getElementById("container")!, {
        model: monaco.editor.createModel(
            "",
            "myDsl",
            monaco.Uri.parse(
                "https://git.informatik.tu-cottbus.de/schubmat/monaco-client/raw/master/demo/a.mydsl"
            )
        ),
        glyphMargin: true,
        lightbulb: {
            enabled: true
        },
        automaticLayout: true,
    });
    editor.model.onDidChangeContent(sendFileContent);

    // setTheme

    // monaco.editor.setTheme('hc-black');

    // install Monaco language client services
    MonacoServices.install(editor);

    // create the web socket
    const url = createUrl("localhost:" + lspPort);
    const webSocket = createWebSocket(url);
    // listen when the web socket is opened
    listen({
        webSocket,
        onConnection: connection => {
            // create and start the language client
            const languageClient = createLanguageClient(connection);
            const disposable = languageClient.start();
            connection.onClose(() => disposable.dispose());
        }
    });

}

function createLanguageClient(
    connection: MessageConnection
): MonacoLanguageClient {
    return new MonacoLanguageClient({
        name: "Sample Language Client",
        clientOptions: {
            // use a language id as a document selector
            documentSelector: ["myDsl"],
            // disable the default error handler
            errorHandler: {
                error: () => ErrorAction.Continue,
                closed: () => CloseAction.DoNotRestart
            }
        },
        // create a language client connection from the JSON RPC connection on demand
        connectionProvider: {
            get: (errorHandler, closeHandler) => {
                return Promise.resolve(
                    createConnection(connection, errorHandler, closeHandler)
                );
            }
        }
    });
}

function createUrl(path: string): string {
    const protocol = location.protocol === "https:" ? "wss" : "ws";
    return normalizeUrl(`${protocol}://${path}`);
}

function createWebSocket(url: string): WebSocket {
    const socketOptions = {
        maxReconnectionDelay: 10000,
        minReconnectionDelay: 1000,
        reconnectionDelayGrowFactor: 1.3,
        connectionTimeout: 10000,
        maxRetries: Infinity,
        debug: false
    };
    return new ReconnectingWebSocket(url, [], socketOptions);
}



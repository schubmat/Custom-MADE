/********************************************************************************
 * Copyright (c) 2018 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/

import * as path from 'path';
import * as vscode from 'vscode';
import { LanguageClient, LanguageClientOptions, ServerOptions } from 'vscode-languageclient';
import { LspLabelEditActionHandler, WorkspaceEditActionHandler, SprottyLspEditVscodeExtension } from "sprotty-vscode/lib/lsp/editing";
import { SprottyDiagramIdentifier, SprottyLspWebview } from 'sprotty-vscode/lib/lsp';
import { SprottyWebview } from 'sprotty-vscode/lib/sprotty-webview';

export class LspVscodeExtension extends SprottyLspEditVscodeExtension {

    constructor(context: vscode.ExtensionContext) {
        /*
         The name of the extension.
         It is necessary to perform calls on the IDE, e.g., dslextension.diagram.open.
         These calls will not work if this name is not confirming to the calls in package.json.
         */
        super('dslextension', context);
    }

    protected getDiagramType(commandArgs: any[]): string | undefined {
        if (commandArgs.length === 0
            || commandArgs[0] instanceof vscode.Uri && commandArgs[0].path.endsWith('.mydsl')) {
            /*
             This name MUST match those in sprotty-extension & the diagram server. Otherwise
             Otherwise one of those will not process diagrams, because it does not recognize
             the extension.
             */
            return 'flexdr-diagram';
        }
    }

    createWebView(identifier: SprottyDiagramIdentifier): SprottyWebview {
        const webview = new SprottyLspWebview({
            extension: this,
            identifier,
            localResourceRoots: [
                this.getExtensionFileUri('pack')
            ],
            scriptUri: this.getExtensionFileUri('pack', 'webview.js'),
            singleton: false // Change this to `true` to enable a singleton view
        });
        webview.addActionHandler(WorkspaceEditActionHandler);
        webview.addActionHandler(LspLabelEditActionHandler);
        return webview;
    }

    protected activateLanguageClient(context: vscode.ExtensionContext): LanguageClient {
        /**
         * Path to language server. To use diagrams it has to support the graphical
         * Sprotty LSP.
         */
        const executable = process.platform === 'win32' ? 'mydsl-socket.bat' : 'mydsl-socket';
        const languageServerPath =  path.join('..', '..', '..', 'backend', 'target', 'xtext-lsp', 'LSP_BUILDS',
            'simple_decision_record_language-_-1.0.0-SNAPSHOT', 'bin',  executable);
        const serverLauncher = context.asAbsolutePath(languageServerPath);
        const serverOptions: ServerOptions = {
            run: {
                command: serverLauncher,
                args: ['-trace']
            },
            debug: {
                command: serverLauncher,
                args: ['-trace']
            }
        };
        const clientOptions: LanguageClientOptions = {
            documentSelector: [{ scheme: 'file', language: 'dslextension' }],
        };
        // The name will be displayed in the IDE.
        const languageClient = new LanguageClient('statesLanguageClient', 'DSL Language Server', serverOptions, clientOptions);
        languageClient.start();
        return languageClient;
    }
}

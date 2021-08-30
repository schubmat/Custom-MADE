import { isWindows } from '@theia/core/lib/common/os';
import { BaseLanguageServerContribution, IConnection } from '@theia/languages/lib/node';
import { injectable } from 'inversify';
import * as net from 'net';
import { join, resolve } from 'path';
import { createSocketConnection } from 'vscode-ws-jsonrpc/lib/server';
import { MDR_LANGUAGE_SERVER_ID, MDR_LANGUAGE_SERVER_NAME } from '../common';

const EXECUTABLE_NAME = isWindows ? 'mydsl-socket.bat' : 'mydsl-socket';
const EXECUTABLE_PATH = resolve(join(__dirname, '..', '..', '..', '..', 'ls', 'bin', EXECUTABLE_NAME));

@injectable()
export class MdrLanguageServerContribution extends BaseLanguageServerContribution {

    readonly id = MDR_LANGUAGE_SERVER_ID;
    readonly name = MDR_LANGUAGE_SERVER_NAME;

    getPort(): number | undefined {
        let arg = process.argv.filter(arg => arg.startsWith('--MDR_LSP='))[0];
        if (!arg) {
            return undefined;
        } else {
            return Number.parseInt(arg.substring('--MDR_LSP='.length), 10);
        }
    }

    start(clientConnection: IConnection): void {
        let socketPort = this.getPort();
        if (socketPort) {
            const socket = new net.Socket();
            socket.connect(socketPort);
            const serverConnection = createSocketConnection(socket, socket, () => {
                socket.destroy();
            });
            this.forward(clientConnection, serverConnection);
        } else {
            const args: string[] = ["9804"];
            const serverConnection = this.createProcessStreamConnection(EXECUTABLE_PATH, args);
            this.forward(clientConnection, serverConnection);
        }
    }
}

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var os_1 = require("@theia/core/lib/common/os");
var node_1 = require("@theia/languages/lib/node");
var inversify_1 = require("inversify");
var net = require("net");
var path_1 = require("path");
var server_1 = require("vscode-ws-jsonrpc/lib/server");
var common_1 = require("../common");
var EXECUTABLE_NAME = os_1.isWindows ? 'mydsl-socket.bat' : 'mydsl-socket';
var EXECUTABLE_PATH = path_1.resolve(path_1.join(__dirname, '..', '..', 'build', 'mdr-language', 'bin', EXECUTABLE_NAME));
var MdrLanguageServerContribution = /** @class */ (function (_super) {
    __extends(MdrLanguageServerContribution, _super);
    function MdrLanguageServerContribution() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = common_1.MDR_LANGUAGE_SERVER_ID;
        _this.name = common_1.MDR_LANGUAGE_SERVER_NAME;
        return _this;
    }
    MdrLanguageServerContribution.prototype.getPort = function () {
        var arg = process.argv.filter(function (arg) { return arg.startsWith('--MDR_LSP='); })[0];
        if (!arg) {
            return undefined;
        }
        else {
            return Number.parseInt(arg.substring('--MDR_LSP='.length), 10);
        }
    };
    MdrLanguageServerContribution.prototype.start = function (clientConnection) {
        var socketPort = this.getPort();
        if (socketPort) {
            var socket_1 = new net.Socket();
            socket_1.connect(socketPort);
            var serverConnection = server_1.createSocketConnection(socket_1, socket_1, function () {
                socket_1.destroy();
            });
            this.forward(clientConnection, serverConnection);
        }
        else {
            var args = [];
            var serverConnection = this.createProcessStreamConnection(EXECUTABLE_PATH, args);
            this.forward(clientConnection, serverConnection);
        }
    };
    MdrLanguageServerContribution = __decorate([
        inversify_1.injectable()
    ], MdrLanguageServerContribution);
    return MdrLanguageServerContribution;
}(node_1.BaseLanguageServerContribution));
exports.MdrLanguageServerContribution = MdrLanguageServerContribution;
//# sourceMappingURL=mdr-dsl-language-server-contribution.js.map
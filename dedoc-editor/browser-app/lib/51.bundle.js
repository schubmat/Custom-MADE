(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "../node_modules/@theia/monaco/lib/browser/textmate/index.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/textmate/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./textmate-registry */ "../node_modules/@theia/monaco/lib/browser/textmate/textmate-registry.js"));
__export(__webpack_require__(/*! ./textmate-contribution */ "../node_modules/@theia/monaco/lib/browser/textmate/textmate-contribution.js"));
__export(__webpack_require__(/*! ./monaco-textmate-service */ "../node_modules/@theia/monaco/lib/browser/textmate/monaco-textmate-service.js"));
__export(__webpack_require__(/*! ./monaco-textmate-frontend-bindings */ "../node_modules/@theia/monaco/lib/browser/textmate/monaco-textmate-frontend-bindings.js"));


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/sprotty-theia/css/theia-sprotty.css":
/*!**************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/sprotty-theia/css/theia-sprotty.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (c) 2017-2018 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.sprotty {\n    display: flex;\n    height:100%;\n}\n\n.sprotty svg {\n    width: 100%;\n    flex: 1;\n    border-style: solid;\n    border-width: 0px;\n}\n\n.sprotty svg:focus {\n    border-width: 0;\n    outline: none;\n}\n\n.sprotty-status {\n    position: absolute;\n    top: 5px;\n    left: 10px;\n    display: flex;\n    align-items: center;\n}\n\n.sprotty-status .fatal {\n    color: var(--theia-inputValidation-errorBorder)\n}\n\n.sprotty-status .error {\n    color: var(--theia-errorForeground)\n}\n\n.sprotty-status .warning {\n    color: var(--theia-editorWarning-foreground)\n}\n\n.sprotty-status .info { \n    color: var(--theia-editorInfo-foreground)\n}\n\n.sprotty-error {\n    fill: var(--theia-inputValidation-errorBackground);\n    color: var(--theia-errorForeground);\n}\n\n.sprotty-warning {\n    fill: var(--theia-inputValidation-warningBackground);\n    color: var(--theia-editorWarning-foreground);\n}\n\n.sprotty-info {\n    fill: var(--theia-info-color0);\n    color: var(--theia-inputValidation-infoBackground);\n}\n\n.sprotty-infoRow .fa {\n    margin-right: 8px;\n}\n.sprotty-status .ok {\n    visibility: hidden;\n}\n\n.sprotty-status-message {\n    visibility: hidden;\n    padding-left: 10px;\n}\n\n.sprotty-status-message.fatal {\n    visibility: visible;\n    padding-left: 10px;\n}\n\n.sprotty-status:hover .sprotty-status-message {\n    visibility: visible;\n}\n\n.sprotty-popup {\n    position: absolute;\n    background: #FFE9BE;\n\tcolor: black;\n    border-radius: 0px;\n    border: none;\n    max-width: initial;\n    min-width: initial;\n    z-index: 1;\n    padding: 8px;\n}\n\n.sprotty-infoRow {\n    font-size: small;\n    margin-bottom: 8px;\n}\n\n.sprotty-infoTitle {\n    display: block;\n    font-weight: bold;\n}\n\n.sprotty-edge > .sprotty-routing-handle {\n    r: 5px;\n    fill: var(--theia-foreground);\n    stroke: none;\n    z-index: 1000;\n}\n\n.sprotty-edge > .sprotty-routing-handle[data-kind='line'] {\n    opacity: 0.35;\n}\n\n.sprotty-edge > .sprotty-routing-handle.selected {\n    fill: var(--theia-button-background);\n}\n\n.sprotty-edge > .sprotty-routing-handle.mouseover {\n    stroke: var(--theia-button-hoverBackground);\n    stroke-width: 1;\n}\n\n.sprotty-edge.mouseover:not(.selected) {\n    stroke-width: 3px;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/sprotty/css/sprotty.css":
/*!**************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/sprotty/css/sprotty.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (c) 2017-2018 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.sprotty {\n    padding: 0px;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.sprotty-hidden {\n    display: block;\n    position: absolute;\n    width: 0px;\n    height: 0px;\n}\n\n.sprotty-popup {\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    position: absolute;\n    background: white;\n    border-radius: 5px;\n    border: 1px solid;\n    max-width: 400px;\n    min-width: 100px;\n}\n\n.sprotty-popup > div {\n    margin: 10px;\n}\n\n.sprotty-popup-closed {\n    display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/sprotty-theia/css/theia-sprotty.css":
/*!***********************************************************!*\
  !*** ../node_modules/sprotty-theia/css/theia-sprotty.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader!./theia-sprotty.css */ "../node_modules/css-loader/index.js!../node_modules/sprotty-theia/css/theia-sprotty.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../node_modules/sprotty-theia/lib/index.js":
/*!**************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (c) 2017-2018 TypeFox and others.
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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./sprotty/theia-diagram-server */ "../node_modules/sprotty-theia/lib/sprotty/theia-diagram-server.js"));
__export(__webpack_require__(/*! ./sprotty/theia-file-saver */ "../node_modules/sprotty-theia/lib/sprotty/theia-file-saver.js"));
__export(__webpack_require__(/*! ./sprotty/theia-key-tool */ "../node_modules/sprotty-theia/lib/sprotty/theia-key-tool.js"));
__export(__webpack_require__(/*! ./sprotty/theia-sprotty-selection-forwarder */ "../node_modules/sprotty-theia/lib/sprotty/theia-sprotty-selection-forwarder.js"));
__export(__webpack_require__(/*! ./sprotty/theia-sprotty-context-menu-service */ "../node_modules/sprotty-theia/lib/sprotty/theia-sprotty-context-menu-service.js"));
__export(__webpack_require__(/*! ./sprotty/languageserver/index */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/index.js"));
__export(__webpack_require__(/*! ./theia/diagram-commands */ "../node_modules/sprotty-theia/lib/theia/diagram-commands.js"));
__export(__webpack_require__(/*! ./theia/diagram-configuration */ "../node_modules/sprotty-theia/lib/theia/diagram-configuration.js"));
__export(__webpack_require__(/*! ./theia/diagram-keybinding */ "../node_modules/sprotty-theia/lib/theia/diagram-keybinding.js"));
__export(__webpack_require__(/*! ./theia/diagram-manager */ "../node_modules/sprotty-theia/lib/theia/diagram-manager.js"));
__export(__webpack_require__(/*! ./theia/diagram-module */ "../node_modules/sprotty-theia/lib/theia/diagram-module.js"));
__export(__webpack_require__(/*! ./theia/diagram-widget */ "../node_modules/sprotty-theia/lib/theia/diagram-widget.js"));
__export(__webpack_require__(/*! ./theia/languageserver/index */ "../node_modules/sprotty-theia/lib/theia/languageserver/index.js"));


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/sprotty/languageserver/code-action-palette.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/sprotty/languageserver/code-action-palette.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = __webpack_require__(/*! @theia/languages/lib/browser */ "../node_modules/@theia/languages/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var ls_theia_diagram_server_1 = __webpack_require__(/*! ./ls-theia-diagram-server */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/ls-theia-diagram-server.js");
var traceable_1 = __webpack_require__(/*! ./traceable */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/traceable.js");
var workspace_edit_command_1 = __webpack_require__(/*! ./workspace-edit-command */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/workspace-edit-command.js");
var edit_diagram_locker_1 = __webpack_require__(/*! ./edit-diagram-locker */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/edit-diagram-locker.js");
var CodeActionProvider = /** @class */ (function () {
    function CodeActionProvider() {
    }
    CodeActionProvider.prototype.getCodeActions = function (range, codeActionKind) {
        return __awaiter(this, void 0, void 0, function () {
            var diagramServer, connector, languageClient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.diagramServerProvider()];
                    case 1:
                        diagramServer = _a.sent();
                        connector = diagramServer.connector;
                        return [4 /*yield*/, connector.getLanguageClient()];
                    case 2:
                        languageClient = _a.sent();
                        return [2 /*return*/, languageClient.sendRequest(browser_1.CodeActionRequest.type, {
                                textDocument: {
                                    uri: diagramServer.sourceUri
                                },
                                range: range,
                                context: {
                                    diagnostics: [],
                                    only: [codeActionKind]
                                }
                            })];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(ls_theia_diagram_server_1.LSTheiaDiagramServerProvider),
        __metadata("design:type", Function)
    ], CodeActionProvider.prototype, "diagramServerProvider", void 0);
    CodeActionProvider = __decorate([
        inversify_1.injectable()
    ], CodeActionProvider);
    return CodeActionProvider;
}());
exports.CodeActionProvider = CodeActionProvider;
/**
 * A popup-palette based on code actions.
 */
var CodeActionPalettePopupProvider = /** @class */ (function () {
    function CodeActionPalettePopupProvider() {
    }
    CodeActionPalettePopupProvider.prototype.getPopupModel = function (action, rootElement) {
        return __awaiter(this, void 0, void 0, function () {
            var range, codeActions, buttons_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        range = traceable_1.getRange(rootElement);
                        if (!(this.editDiagramLocker.allowEdit && range !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.codeActionProvider.getCodeActions(range, 'sprotty.create')];
                    case 1:
                        codeActions = _a.sent();
                        if (codeActions) {
                            buttons_1 = [];
                            codeActions.forEach(function (codeAction) {
                                if (browser_1.CodeAction.is(codeAction)) {
                                    buttons_1.push({
                                        id: codeAction.title,
                                        type: 'button:create',
                                        codeActionKind: codeAction.kind,
                                        range: range
                                    });
                                }
                            });
                            return [2 /*return*/, {
                                    id: "palette",
                                    type: "palette",
                                    classes: ['sprotty-palette'],
                                    children: buttons_1,
                                    canvasBounds: action.bounds
                                }];
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, undefined];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(CodeActionProvider),
        __metadata("design:type", CodeActionProvider)
    ], CodeActionPalettePopupProvider.prototype, "codeActionProvider", void 0);
    __decorate([
        inversify_1.inject(edit_diagram_locker_1.EditDiagramLocker),
        __metadata("design:type", edit_diagram_locker_1.EditDiagramLocker)
    ], CodeActionPalettePopupProvider.prototype, "editDiagramLocker", void 0);
    CodeActionPalettePopupProvider = __decorate([
        inversify_1.injectable()
    ], CodeActionPalettePopupProvider);
    return CodeActionPalettePopupProvider;
}());
exports.CodeActionPalettePopupProvider = CodeActionPalettePopupProvider;
var PaletteButton = /** @class */ (function (_super) {
    __extends(PaletteButton, _super);
    function PaletteButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PaletteButton;
}(sprotty_1.SButton));
exports.PaletteButton = PaletteButton;
var PaletteMouseListener = /** @class */ (function (_super) {
    __extends(PaletteMouseListener, _super);
    function PaletteMouseListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaletteMouseListener.prototype.mouseDown = function (target, event) {
        if (target instanceof PaletteButton) {
            return [this.getWorkspaceEditAction(target)];
        }
        return [];
    };
    PaletteMouseListener.prototype.getWorkspaceEditAction = function (target) {
        return __awaiter(this, void 0, void 0, function () {
            var diagramServer, workspace, codeActions, _i, codeActions_1, codeAction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.diagramServerProvider()];
                    case 1:
                        diagramServer = _a.sent();
                        workspace = diagramServer.connector.workspace;
                        if (!workspace) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.codeActionProvider.getCodeActions(target.range, target.codeActionKind)];
                    case 2:
                        codeActions = _a.sent();
                        if (codeActions) {
                            for (_i = 0, codeActions_1 = codeActions; _i < codeActions_1.length; _i++) {
                                codeAction = codeActions_1[_i];
                                if (browser_1.CodeAction.is(codeAction) && codeAction.edit)
                                    return [2 /*return*/, new workspace_edit_command_1.WorkspaceEditAction(codeAction.edit)];
                            }
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, new sprotty_1.SetPopupModelAction(sprotty_1.EMPTY_ROOT)];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(CodeActionProvider),
        __metadata("design:type", CodeActionProvider)
    ], PaletteMouseListener.prototype, "codeActionProvider", void 0);
    __decorate([
        inversify_1.inject(ls_theia_diagram_server_1.LSTheiaDiagramServerProvider),
        __metadata("design:type", Function)
    ], PaletteMouseListener.prototype, "diagramServerProvider", void 0);
    PaletteMouseListener = __decorate([
        inversify_1.injectable()
    ], PaletteMouseListener);
    return PaletteMouseListener;
}(sprotty_1.PopupHoverMouseListener));
exports.PaletteMouseListener = PaletteMouseListener;


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/sprotty/languageserver/completion-label-edit.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/sprotty/languageserver/completion-label-edit.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var ls_theia_diagram_server_1 = __webpack_require__(/*! ./ls-theia-diagram-server */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/ls-theia-diagram-server.js");
var browser_1 = __webpack_require__(/*! @theia/languages/lib/browser */ "../node_modules/@theia/languages/lib/browser/index.js");
var traceable_1 = __webpack_require__(/*! ./traceable */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/traceable.js");
var CompletionLabelEditor = /** @class */ (function () {
    function CompletionLabelEditor() {
    }
    CompletionLabelEditor.prototype.edit = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            var range, diagramServer, connector, languageClient, uri, completions, completionItems, quickPickItems, pick, changes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        range = traceable_1.getRange(element);
                        return [4 /*yield*/, this.diagramServerProvider()];
                    case 1:
                        diagramServer = _a.sent();
                        connector = diagramServer.connector;
                        if (!(connector.quickPickService && connector.workspace)) return [3 /*break*/, 6];
                        return [4 /*yield*/, connector.getLanguageClient()];
                    case 2:
                        languageClient = _a.sent();
                        uri = diagramServer.sourceUri;
                        return [4 /*yield*/, languageClient.sendRequest(browser_1.CompletionRequest.type, {
                                textDocument: { uri: uri },
                                position: range.start
                            })];
                    case 3:
                        completions = _a.sent();
                        if (!completions) return [3 /*break*/, 6];
                        completionItems = (completions["items"])
                            ? completions.items
                            : completions;
                        quickPickItems = this.filterCompletionItems(completionItems)
                            .map(function (i) {
                            return {
                                label: i.textEdit.newText,
                                value: i
                            };
                        });
                        return [4 /*yield*/, connector.quickPickService.show(quickPickItems)];
                    case 4:
                        pick = _a.sent();
                        if (!(pick && pick.textEdit)) return [3 /*break*/, 6];
                        changes = {};
                        changes[uri] = [__assign(__assign({}, pick.textEdit), { range: range })];
                        return [4 /*yield*/, connector.workspace.applyEdit({
                                changes: changes
                            })];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    CompletionLabelEditor.prototype.filterCompletionItems = function (items) {
        return items.filter(function (item) { return item.kind === browser_1.CompletionItemKind.Reference; });
    };
    __decorate([
        inversify_1.inject(ls_theia_diagram_server_1.LSTheiaDiagramServerProvider),
        __metadata("design:type", Function)
    ], CompletionLabelEditor.prototype, "diagramServerProvider", void 0);
    CompletionLabelEditor = __decorate([
        inversify_1.injectable()
    ], CompletionLabelEditor);
    return CompletionLabelEditor;
}());
exports.CompletionLabelEditor = CompletionLabelEditor;


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/sprotty/languageserver/delete.js":
/*!**************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/sprotty/languageserver/delete.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var workspace_edit_command_1 = __webpack_require__(/*! ./workspace-edit-command */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/workspace-edit-command.js");
var traceable_1 = __webpack_require__(/*! ./traceable */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/traceable.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var DeleteWithWorkspaceEditAction = /** @class */ (function () {
    // TODO: consider URIs from individual element traces
    function DeleteWithWorkspaceEditAction(workspace, sourceUri) {
        this.workspace = workspace;
        this.sourceUri = sourceUri;
        this.kind = DeleteWithWorkspaceEditAction.KIND;
    }
    DeleteWithWorkspaceEditAction.KIND = 'deleteWithWorkspaceEdit';
    return DeleteWithWorkspaceEditAction;
}());
exports.DeleteWithWorkspaceEditAction = DeleteWithWorkspaceEditAction;
var DeleteWithWorkspaceEditCommand = /** @class */ (function (_super) {
    __extends(DeleteWithWorkspaceEditCommand, _super);
    function DeleteWithWorkspaceEditCommand(action) {
        var _this = _super.call(this) || this;
        _this.action = action;
        return _this;
    }
    DeleteWithWorkspaceEditCommand.prototype.createWorkspaceEdit = function (context) {
        var _this = this;
        var elements = new Set();
        var index = context.root.index;
        index.all().forEach(function (e) {
            if (e && _this.shouldDelete(e))
                elements.add(e);
            else if (e instanceof sprotty_1.SEdge && traceable_1.isTraceable(e)) {
                var source = index.getById(e.sourceId);
                var target = index.getById(e.targetId);
                if (_this.shouldDeleteParent(source)
                    || _this.shouldDeleteParent(target))
                    elements.add(e);
            }
        });
        var uri2ranges = new Map();
        elements.forEach(function (element) {
            var uri = traceable_1.getURI(element).withoutFragment().toString(true);
            var range = traceable_1.getRange(element);
            var ranges = uri2ranges.get(uri);
            if (!ranges) {
                ranges = [];
                uri2ranges.set(uri, ranges);
            }
            var mustAdd = true;
            for (var i = 0; i < ranges.length; ++i) {
                var r = ranges[i];
                if (_this.containsRange(r, range)) {
                    mustAdd = false;
                    break;
                }
                else if (_this.containsRange(range, r)) {
                    mustAdd = false;
                    ranges[i] = range;
                    break;
                }
            }
            if (mustAdd)
                ranges.push(range);
        });
        var changes = {};
        uri2ranges.forEach(function (ranges, uri) {
            changes[uri] = ranges.map(function (range) {
                return {
                    range: range,
                    newText: ''
                };
            });
        });
        var workspaceEdit = {
            changes: changes
        };
        return workspaceEdit;
    };
    DeleteWithWorkspaceEditCommand.prototype.containsRange = function (range, otherRange) {
        if (otherRange.start.line < range.start.line || otherRange.end.line < range.start.line) {
            return false;
        }
        if (otherRange.start.line > range.end.line || otherRange.end.line > range.end.line) {
            return false;
        }
        if (otherRange.start.line === range.start.line && otherRange.start.character < range.start.character) {
            return false;
        }
        if (otherRange.end.line === range.end.line && otherRange.end.character > range.end.character) {
            return false;
        }
        return true;
    };
    DeleteWithWorkspaceEditCommand.prototype.shouldDelete = function (e) {
        return sprotty_1.isSelectable(e) && e.selected && traceable_1.isTraceable(e);
    };
    DeleteWithWorkspaceEditCommand.prototype.shouldDeleteParent = function (source) {
        while (source) {
            if (this.shouldDelete(source)) {
                return true;
            }
            source = (source instanceof sprotty_1.SChildElement) ? source.parent : undefined;
        }
        return false;
    };
    DeleteWithWorkspaceEditCommand.KIND = DeleteWithWorkspaceEditAction.KIND;
    DeleteWithWorkspaceEditCommand = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(sprotty_1.TYPES.Action)),
        __metadata("design:paramtypes", [DeleteWithWorkspaceEditAction])
    ], DeleteWithWorkspaceEditCommand);
    return DeleteWithWorkspaceEditCommand;
}(workspace_edit_command_1.AbstractWorkspaceEditCommand));
exports.DeleteWithWorkspaceEditCommand = DeleteWithWorkspaceEditCommand;


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/sprotty/languageserver/edit-diagram-locker.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/sprotty/languageserver/edit-diagram-locker.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (c) 2019 TypeFox and others.
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
/**
 * An `IDiagramLocker` for language-server based editable diagrams.
 *
 * Prevents displatching of edit actions when editing is disallowed, e.g.
 * because the LS's status is fatal.
 */
var EditDiagramLocker = /** @class */ (function () {
    function EditDiagramLocker() {
        this.nonEditActions = [
            sprotty_1.SetModelAction.KIND, sprotty_1.UpdateModelAction.KIND,
            sprotty_1.CenterAction.KIND, sprotty_1.FitToScreenAction.KIND, sprotty_1.SetViewportAction.KIND,
            sprotty_1.SelectAction.KIND, sprotty_1.SelectAllAction.KIND,
            sprotty_1.HoverFeedbackAction.KIND, sprotty_1.RequestPopupModelAction.KIND, sprotty_1.SetPopupModelAction.KIND,
            sprotty_1.ServerStatusAction.KIND
        ];
        this.allowEdit = true;
    }
    EditDiagramLocker.prototype.isAllowed = function (action) {
        return this.allowEdit || this.nonEditActions.indexOf(action.kind) >= 0;
    };
    EditDiagramLocker = __decorate([
        inversify_1.injectable()
    ], EditDiagramLocker);
    return EditDiagramLocker;
}());
exports.EditDiagramLocker = EditDiagramLocker;


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/sprotty/languageserver/index.js":
/*!*************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/sprotty/languageserver/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./code-action-palette */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/code-action-palette.js"));
__export(__webpack_require__(/*! ./completion-label-edit */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/completion-label-edit.js"));
__export(__webpack_require__(/*! ./delete */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/delete.js"));
__export(__webpack_require__(/*! ./edit-diagram-locker */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/edit-diagram-locker.js"));
__export(__webpack_require__(/*! ./ls-theia-sprotty-connector */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/ls-theia-sprotty-connector.js"));
__export(__webpack_require__(/*! ./ls-theia-diagram-server */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/ls-theia-diagram-server.js"));
__export(__webpack_require__(/*! ./rename-label-edit */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/rename-label-edit.js"));
__export(__webpack_require__(/*! ./traceable */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/traceable.js"));
__export(__webpack_require__(/*! ./workspace-edit-command */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/workspace-edit-command.js"));


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/sprotty/languageserver/ls-theia-diagram-server.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/sprotty/languageserver/ls-theia-diagram-server.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (c) 2019 TypeFox and others.
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var theia_diagram_server_1 = __webpack_require__(/*! ../theia-diagram-server */ "../node_modules/sprotty-theia/lib/sprotty/theia-diagram-server.js");
var edit_diagram_locker_1 = __webpack_require__(/*! ./edit-diagram-locker */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/edit-diagram-locker.js");
exports.LSTheiaDiagramServerProvider = Symbol('LSTheiaDiagramServerProvider');
var LSTheiaDiagramServer = /** @class */ (function (_super) {
    __extends(LSTheiaDiagramServer, _super);
    function LSTheiaDiagramServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LSTheiaDiagramServer.prototype.connect = function (connector) {
        _super.prototype.connect.call(this, connector);
    };
    Object.defineProperty(LSTheiaDiagramServer.prototype, "workspace", {
        get: function () {
            if (this.connector)
                return this.connector.workspace;
            else
                return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LSTheiaDiagramServer.prototype, "connector", {
        get: function () {
            return this._connector;
        },
        enumerable: true,
        configurable: true
    });
    LSTheiaDiagramServer.prototype.handleServerStateAction = function (action) {
        this.diagramLocker.allowEdit = action.severity !== 'FATAL';
        return _super.prototype.handleServerStateAction.call(this, action);
    };
    __decorate([
        inversify_1.inject(edit_diagram_locker_1.EditDiagramLocker),
        __metadata("design:type", edit_diagram_locker_1.EditDiagramLocker)
    ], LSTheiaDiagramServer.prototype, "diagramLocker", void 0);
    LSTheiaDiagramServer = __decorate([
        inversify_1.injectable()
    ], LSTheiaDiagramServer);
    return LSTheiaDiagramServer;
}(theia_diagram_server_1.TheiaDiagramServer));
exports.LSTheiaDiagramServer = LSTheiaDiagramServer;


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/sprotty/languageserver/ls-theia-sprotty-connector.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/sprotty/languageserver/ls-theia-sprotty-connector.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (c) 2019 TypeFox and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var diagram_widget_1 = __webpack_require__(/*! ../../theia/diagram-widget */ "../node_modules/sprotty-theia/lib/theia/diagram-widget.js");
/**
 * Connects sprotty DiagramServers to a Theia LanguageClientContribution.
 *
 * Used to tunnel sprotty actions to and from the sprotty server through
 * the LSP.
 *
 * Instances bridge the gap between the sprotty DI containers (one per
 * diagram) and a specific language client from the Theia DI container
 * (one per application).
 */
var LSTheiaSprottyConnector = /** @class */ (function () {
    function LSTheiaSprottyConnector(services) {
        this.servers = [];
        Object.assign(this, services);
        this.diagramLanguageClient.connect(this);
    }
    LSTheiaSprottyConnector.prototype.connect = function (diagramServer) {
        this.servers.push(diagramServer);
        diagramServer.connect(this);
    };
    LSTheiaSprottyConnector.prototype.disconnect = function (diagramServer) {
        var index = this.servers.indexOf(diagramServer);
        if (index >= 0)
            this.servers.splice(index, 1);
        diagramServer.disconnect();
        this.diagramLanguageClient.didClose(diagramServer.clientId);
    };
    LSTheiaSprottyConnector.prototype.save = function (uri, action) {
        this.fileSaver.save(uri, action);
    };
    LSTheiaSprottyConnector.prototype.showStatus = function (clientId, status) {
        var widget = this.widgetManager
            .getWidgets(this.diagramManager.id)
            .find(function (w) { return w instanceof diagram_widget_1.DiagramWidget && w.clientId === clientId; });
        if (widget instanceof diagram_widget_1.DiagramWidget)
            widget.setStatus(status);
    };
    LSTheiaSprottyConnector.prototype.sendMessage = function (message) {
        this.diagramLanguageClient.sendThroughLsp(message);
    };
    LSTheiaSprottyConnector.prototype.getLanguageClient = function () {
        return this.diagramLanguageClient.languageClient;
    };
    LSTheiaSprottyConnector.prototype.onMessageReceived = function (message) {
        this.servers.forEach(function (element) {
            element.messageReceived(message);
        });
    };
    return LSTheiaSprottyConnector;
}());
exports.LSTheiaSprottyConnector = LSTheiaSprottyConnector;


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/sprotty/languageserver/rename-label-edit.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/sprotty/languageserver/rename-label-edit.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = __webpack_require__(/*! @theia/languages/lib/browser */ "../node_modules/@theia/languages/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var ls_theia_diagram_server_1 = __webpack_require__(/*! ./ls-theia-diagram-server */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/ls-theia-diagram-server.js");
var traceable_1 = __webpack_require__(/*! ./traceable */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/traceable.js");
var RenameLabelEditor = /** @class */ (function () {
    function RenameLabelEditor() {
    }
    RenameLabelEditor.prototype.edit = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            var range, diagramServer, connector, initialValue_1, dialog, newName, languageClient, workspaceEdit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        range = traceable_1.getRange(element);
                        return [4 /*yield*/, this.diagramServerProvider()];
                    case 1:
                        diagramServer = _a.sent();
                        connector = diagramServer.connector;
                        if (!connector.workspace) return [3 /*break*/, 6];
                        initialValue_1 = element.text;
                        dialog = new browser_2.SingleTextInputDialog({
                            title: 'Rename Element',
                            initialValue: initialValue_1,
                            initialSelectionRange: {
                                start: 0,
                                end: element.text.length
                            },
                            validate: function (name, mode) {
                                if (initialValue_1 === name && mode === 'preview') {
                                    return false;
                                }
                                return true;
                            }
                        });
                        return [4 /*yield*/, dialog.open()];
                    case 2:
                        newName = _a.sent();
                        if (!newName) return [3 /*break*/, 6];
                        return [4 /*yield*/, connector.getLanguageClient()];
                    case 3:
                        languageClient = _a.sent();
                        return [4 /*yield*/, languageClient.sendRequest(browser_1.RenameRequest.type, {
                                textDocument: { uri: diagramServer.sourceUri },
                                position: range.start,
                                newName: newName
                            })];
                    case 4:
                        workspaceEdit = _a.sent();
                        if (!workspaceEdit) return [3 /*break*/, 6];
                        return [4 /*yield*/, connector.workspace.applyEdit(workspaceEdit)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(ls_theia_diagram_server_1.LSTheiaDiagramServerProvider),
        __metadata("design:type", Function)
    ], RenameLabelEditor.prototype, "diagramServerProvider", void 0);
    RenameLabelEditor = __decorate([
        inversify_1.injectable()
    ], RenameLabelEditor);
    return RenameLabelEditor;
}());
exports.RenameLabelEditor = RenameLabelEditor;


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/sprotty/languageserver/traceable.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/sprotty/languageserver/traceable.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
function isTraceable(element) {
    return !!element.trace && !!getRange(element.trace);
}
exports.isTraceable = isTraceable;
function getRange(thing) {
    var trace = typeof thing === 'string'
        ? thing
        : thing.trace;
    if (!trace)
        return undefined;
    var query = new uri_1.default(trace).query;
    var numbers = query.split(/[:-]/).map(function (s) { return parseInt(s, 10); });
    if (numbers.length !== 4 || numbers.find(isNaN) !== undefined)
        return undefined;
    return {
        start: {
            line: numbers[0],
            character: numbers[1]
        },
        end: {
            line: numbers[2],
            character: numbers[3]
        }
    };
}
exports.getRange = getRange;
function getURI(traceable) {
    return new uri_1.default(traceable.trace).withoutQuery();
}
exports.getURI = getURI;
var TraceableMouseListener = /** @class */ (function (_super) {
    __extends(TraceableMouseListener, _super);
    function TraceableMouseListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TraceableMouseListener.prototype.doubleClick = function (target, event) {
        var traceable = sprotty_1.findParent(target, function (element) { return isTraceable(element); });
        if (traceable)
            return [new sprotty_1.OpenAction(traceable.id)];
        else
            return [];
    };
    return TraceableMouseListener;
}(sprotty_1.MouseListener));
exports.TraceableMouseListener = TraceableMouseListener;


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/sprotty/languageserver/workspace-edit-command.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/sprotty/languageserver/workspace-edit-command.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var ls_theia_diagram_server_1 = __webpack_require__(/*! ./ls-theia-diagram-server */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/ls-theia-diagram-server.js");
var AbstractWorkspaceEditCommand = /** @class */ (function (_super) {
    __extends(AbstractWorkspaceEditCommand, _super);
    function AbstractWorkspaceEditCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AbstractWorkspaceEditCommand.prototype, "workspace", {
        get: function () {
            return this.diagramServer.connector.workspace;
        },
        enumerable: true,
        configurable: true
    });
    AbstractWorkspaceEditCommand.prototype.execute = function (context) {
        this.workspaceEdit = this.createWorkspaceEdit(context);
        this.workspace.applyEdit(this.workspaceEdit, { mode: 'open' });
        return context.root;
    };
    AbstractWorkspaceEditCommand.prototype.undo = function (context) {
        // TODO implement revert workspace edit
        return context.root;
    };
    AbstractWorkspaceEditCommand.prototype.redo = function (context) {
        // TODO implement revert workspace edit
        return context.root;
    };
    __decorate([
        inversify_1.inject(ls_theia_diagram_server_1.LSTheiaDiagramServer),
        __metadata("design:type", ls_theia_diagram_server_1.LSTheiaDiagramServer)
    ], AbstractWorkspaceEditCommand.prototype, "diagramServer", void 0);
    AbstractWorkspaceEditCommand = __decorate([
        inversify_1.injectable()
    ], AbstractWorkspaceEditCommand);
    return AbstractWorkspaceEditCommand;
}(sprotty_1.Command));
exports.AbstractWorkspaceEditCommand = AbstractWorkspaceEditCommand;
/**
 * This is a client only action, so it does not have to be serializable
 */
var WorkspaceEditAction = /** @class */ (function () {
    function WorkspaceEditAction(workspaceEdit) {
        this.workspaceEdit = workspaceEdit;
        this.kind = WorkspaceEditAction.KIND;
    }
    WorkspaceEditAction.KIND = 'workspaceEdit';
    return WorkspaceEditAction;
}());
exports.WorkspaceEditAction = WorkspaceEditAction;
var WorkspaceEditCommand = /** @class */ (function (_super) {
    __extends(WorkspaceEditCommand, _super);
    function WorkspaceEditCommand(action) {
        var _this = _super.call(this) || this;
        _this.action = action;
        return _this;
    }
    WorkspaceEditCommand.prototype.createWorkspaceEdit = function (context) {
        return this.action.workspaceEdit;
    };
    WorkspaceEditCommand.KIND = WorkspaceEditAction.KIND;
    WorkspaceEditCommand = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(sprotty_1.TYPES.Action)),
        __metadata("design:paramtypes", [WorkspaceEditAction])
    ], WorkspaceEditCommand);
    return WorkspaceEditCommand;
}(AbstractWorkspaceEditCommand));
exports.WorkspaceEditCommand = WorkspaceEditCommand;


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/sprotty/theia-key-tool.js":
/*!*******************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/sprotty/theia-key-tool.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (c) 2017-2018 TypeFox and others.
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var TheiaKeyTool = /** @class */ (function (_super) {
    __extends(TheiaKeyTool, _super);
    function TheiaKeyTool(keyListeners) {
        if (keyListeners === void 0) { keyListeners = []; }
        var _this = _super.call(this, []) || this;
        _this.keyListeners = keyListeners;
        return _this;
    }
    TheiaKeyTool.prototype.decorate = function (vnode, element) {
        return vnode;
    };
    TheiaKeyTool = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.multiInject(sprotty_1.TYPES.KeyListener)), __param(0, inversify_1.optional()),
        __metadata("design:paramtypes", [Array])
    ], TheiaKeyTool);
    return TheiaKeyTool;
}(sprotty_1.KeyTool));
exports.TheiaKeyTool = TheiaKeyTool;


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/sprotty/theia-sprotty-context-menu-service.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/sprotty/theia-sprotty-context-menu-service.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/********************************************************************************
 * Copyright (c) 2019 EclipseSource and others.
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
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var TheiaSprottyContextMenu;
(function (TheiaSprottyContextMenu) {
    TheiaSprottyContextMenu.CONTEXT_MENU = ['theia-sprotty-context-menu'];
})(TheiaSprottyContextMenu = exports.TheiaSprottyContextMenu || (exports.TheiaSprottyContextMenu = {}));
var TheiaContextMenuService = /** @class */ (function () {
    function TheiaContextMenuService() {
    }
    TheiaContextMenuService.prototype.connect = function (actionDispatcher) {
        this.actionDispatcher = actionDispatcher;
    };
    TheiaContextMenuService.prototype.show = function (items, anchor, onHide) {
        var _this = this;
        this.cleanUpNow();
        this.disposables = this.register(TheiaSprottyContextMenu.CONTEXT_MENU, items);
        var renderOptions = {
            menuPath: TheiaSprottyContextMenu.CONTEXT_MENU, anchor: anchor,
            onHide: function () { if (onHide)
                onHide(); _this.scheduleCleanup(); }
        };
        this.contextMenuRenderer.render(renderOptions);
    };
    TheiaContextMenuService.prototype.register = function (menuPath, items) {
        var disposables = [];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            if (item.children && item.children.length > 0) {
                var menuPathOfItem = item.group ? __spreadArrays(menuPath, [item.group]) : menuPath;
                disposables.push(this.registerSubmenu(menuPathOfItem, item));
                disposables.push.apply(disposables, this.register(__spreadArrays(menuPathOfItem, [item.id]), item.children));
            }
            else {
                disposables.push(this.registerCommand(menuPath, item));
                disposables.push(this.registerMenuAction(menuPath, item));
            }
        }
        return disposables;
    };
    TheiaContextMenuService.prototype.registerSubmenu = function (menuPath, item) {
        return this.menuProvider.registerSubmenu(__spreadArrays(menuPath, [item.id]), item.label);
    };
    TheiaContextMenuService.prototype.registerCommand = function (menuPath, item) {
        var command = { id: commandId(menuPath, item), label: item.label, iconClass: item.icon };
        var disposable = this.commandRegistry.registerCommand(command, new SprottyCommandHandler(item, this.actionDispatcher));
        return new DisposableCommand(command, disposable);
    };
    TheiaContextMenuService.prototype.registerMenuAction = function (menuPath, item) {
        var menuAction = { label: item.label, order: item.sortString, commandId: commandId(menuPath, item) };
        var menuPathOfItem = item.group ? __spreadArrays(menuPath, [item.group]) : menuPath;
        var disposable = this.menuProvider.registerMenuAction(menuPathOfItem, menuAction);
        return new DisposableMenuAction(menuAction, disposable);
    };
    TheiaContextMenuService.prototype.cleanUpNow = function () {
        window.clearTimeout(this.timeout);
        this.cleanUp();
    };
    TheiaContextMenuService.prototype.scheduleCleanup = function () {
        var _this = this;
        this.timeout = window.setTimeout(function () {
            _this.cleanUp();
        }, 200);
    };
    TheiaContextMenuService.prototype.cleanUp = function () {
        var _this = this;
        if (this.disposables) {
            this.disposables.forEach(function (disposable) { return disposable.dispose(_this.menuProvider, _this.commandRegistry); });
            this.disposables = undefined;
        }
    };
    __decorate([
        inversify_1.inject(browser_1.ContextMenuRenderer),
        __metadata("design:type", Object)
    ], TheiaContextMenuService.prototype, "contextMenuRenderer", void 0);
    __decorate([
        inversify_1.inject(core_1.MenuModelRegistry),
        __metadata("design:type", core_1.MenuModelRegistry)
    ], TheiaContextMenuService.prototype, "menuProvider", void 0);
    __decorate([
        inversify_1.inject(core_1.CommandRegistry),
        __metadata("design:type", core_1.CommandRegistry)
    ], TheiaContextMenuService.prototype, "commandRegistry", void 0);
    TheiaContextMenuService = __decorate([
        inversify_1.injectable()
    ], TheiaContextMenuService);
    return TheiaContextMenuService;
}());
exports.TheiaContextMenuService = TheiaContextMenuService;
var SprottyCommandHandler = /** @class */ (function () {
    function SprottyCommandHandler(menuItem, actionDispatcher) {
        this.menuItem = menuItem;
        this.actionDispatcher = actionDispatcher;
    }
    SprottyCommandHandler.prototype.execute = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.actionDispatcher && this.menuItem.actions) {
            this.actionDispatcher.dispatchAll(this.menuItem.actions);
        }
    };
    SprottyCommandHandler.prototype.isEnabled = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return getBooleanValue(this.menuItem.isEnabled, true);
    };
    SprottyCommandHandler.prototype.isVisible = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return getBooleanValue(this.menuItem.isVisible, true);
    };
    SprottyCommandHandler.prototype.isToggled = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return getBooleanValue(this.menuItem.isToggled, false);
    };
    return SprottyCommandHandler;
}());
var DisposableMenuAction = /** @class */ (function () {
    function DisposableMenuAction(menuAction, disposable) {
        this.menuAction = menuAction;
        this.disposable = disposable;
    }
    DisposableMenuAction.prototype.dispose = function (menuProvider, commandRegistry) {
        menuProvider.unregisterMenuAction(this.menuAction);
        this.disposable.dispose();
    };
    return DisposableMenuAction;
}());
var DisposableCommand = /** @class */ (function () {
    function DisposableCommand(command, disposable) {
        this.command = command;
        this.disposable = disposable;
    }
    DisposableCommand.prototype.dispose = function (menuProvider, commandRegistry) {
        commandRegistry.unregisterCommand(this.command);
        this.disposable.dispose();
    };
    return DisposableCommand;
}());
function commandId(menuPath, item) {
    return menuPath.join(".") + "." + item.id;
}
function getBooleanValue(value, defaultValue) {
    var returnVal = defaultValue;
    if (isFunction(value)) {
        returnVal = value();
    }
    else if (isBoolean(value)) {
        returnVal = value;
    }
    return returnVal;
}
function isFunction(value) {
    return !!(value && value.constructor && value.call && value.apply);
}
function isBoolean(value) {
    return typeof value === "boolean";
}


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/sprotty/theia-sprotty-selection-forwarder.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/sprotty/theia-sprotty-selection-forwarder.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/********************************************************************************
 * Copyright (c) 2018 EclipseSource and others.
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
function isSprottySelection(object) {
    return object !== undefined && object.selectedElementsIDs !== undefined
        && object.widgetId !== undefined;
}
exports.isSprottySelection = isSprottySelection;
var TheiaSprottySelectionForwarder = /** @class */ (function () {
    function TheiaSprottySelectionForwarder() {
    }
    TheiaSprottySelectionForwarder.prototype.initialize = function (registry) {
        registry.register(sprotty_1.RequestModelAction.KIND, this);
        registry.register(sprotty_1.SelectAction.KIND, this);
    };
    TheiaSprottySelectionForwarder.prototype.handle = function (action) {
        if (action instanceof sprotty_1.SelectAction) {
            this.selectionService.selection = {
                selectedElementsIDs: action.selectedElementsIDs,
                widgetId: this.viewerOptions.baseDiv,
                sourceUri: this.sourceUri
            };
        }
        else if (action instanceof sprotty_1.RequestModelAction && action.options !== undefined) {
            this.sourceUri = action.options.sourceUri;
        }
    };
    __decorate([
        inversify_1.inject(sprotty_1.TYPES.ViewerOptions),
        __metadata("design:type", Object)
    ], TheiaSprottySelectionForwarder.prototype, "viewerOptions", void 0);
    __decorate([
        inversify_1.inject(core_1.SelectionService),
        __metadata("design:type", core_1.SelectionService)
    ], TheiaSprottySelectionForwarder.prototype, "selectionService", void 0);
    TheiaSprottySelectionForwarder = __decorate([
        inversify_1.injectable()
    ], TheiaSprottySelectionForwarder);
    return TheiaSprottySelectionForwarder;
}());
exports.TheiaSprottySelectionForwarder = TheiaSprottySelectionForwarder;


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/theia/languageserver/diagram-language-client-contribution.js":
/*!******************************************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/theia/languageserver/diagram-language-client-contribution.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = __webpack_require__(/*! @theia/languages/lib/browser */ "../node_modules/@theia/languages/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var diagram_manager_1 = __webpack_require__(/*! ../diagram-manager */ "../node_modules/sprotty-theia/lib/theia/diagram-manager.js");
var DiagramLanguageClientContribution = /** @class */ (function (_super) {
    __extends(DiagramLanguageClientContribution, _super);
    function DiagramLanguageClientContribution(workspace, languages, languageClientFactory, diagramManagerProviders) {
        var _this = _super.call(this, workspace, languages, languageClientFactory) || this;
        _this.diagramManagerProviders = diagramManagerProviders;
        return _this;
    }
    DiagramLanguageClientContribution.prototype.waitForActivation = function (app) {
        return Promise.race([
            _super.prototype.waitForActivation.call(this, app),
            this.waitForOpenDiagrams()
        ]);
    };
    DiagramLanguageClientContribution.prototype.waitForOpenDiagrams = function () {
        return Promise.race(this.diagramManagerProviders.map(function (diagramManagerProvider) {
            return diagramManagerProvider().then(function (diagramManager) {
                return new Promise(function (resolve) {
                    var disposable = diagramManager.onCreated(function (widget) {
                        disposable.dispose();
                        resolve();
                    });
                });
            });
        }));
    };
    DiagramLanguageClientContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_1.Workspace)),
        __param(1, inversify_1.inject(browser_1.Languages)),
        __param(2, inversify_1.inject(browser_1.LanguageClientFactory)),
        __param(3, inversify_1.multiInject(diagram_manager_1.DiagramManagerProvider)),
        __metadata("design:paramtypes", [Object, Object, browser_1.LanguageClientFactory, Array])
    ], DiagramLanguageClientContribution);
    return DiagramLanguageClientContribution;
}(browser_1.BaseLanguageClientContribution));
exports.DiagramLanguageClientContribution = DiagramLanguageClientContribution;


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/theia/languageserver/diagram-language-client.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/theia/languageserver/diagram-language-client.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var browser_3 = __webpack_require__(/*! @theia/languages/lib/browser */ "../node_modules/@theia/languages/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var diagram_widget_1 = __webpack_require__(/*! ../diagram-widget */ "../node_modules/sprotty-theia/lib/theia/diagram-widget.js");
var acceptMessageType = new browser_3.NotificationType('diagram/accept');
var didCloseMessageType = new browser_3.NotificationType('diagram/didClose');
var openInTextEditorMessageType = new browser_3.NotificationType('diagram/openInTextEditor');
var DiagramLanguageClient = /** @class */ (function () {
    function DiagramLanguageClient(languageClientContribution, editorManager) {
        var _this = this;
        this.languageClientContribution = languageClientContribution;
        this.editorManager = editorManager;
        this.actionMessageReceivers = [];
        this.languageClientContribution.languageClient.then(function (lc) {
            lc.onNotification(acceptMessageType, _this.onMessageReceived.bind(_this));
            lc.onNotification(openInTextEditorMessageType, _this.openInTextEditor.bind(_this));
        }).catch(function (err) { return console.error(err); });
    }
    DiagramLanguageClient.prototype.openInTextEditor = function (message) {
        var uri = new uri_1.default(message.location.uri);
        if (!message.forceOpen) {
            this.editorManager.all.forEach(function (editorWidget) {
                var currentTextEditor = editorWidget.editor;
                if (editorWidget.isVisible && uri.toString(true) === currentTextEditor.uri.toString(true)) {
                    currentTextEditor.cursor = message.location.range.start;
                    currentTextEditor.revealRange(message.location.range);
                    currentTextEditor.selection = message.location.range;
                }
            });
        }
        else {
            var widgetOptions = {
                area: 'main'
            };
            var activeWidget = this.shell.activeWidget;
            if (activeWidget instanceof diagram_widget_1.DiagramWidget) {
                widgetOptions.ref = activeWidget;
                widgetOptions.mode = 'open-to-left';
            }
            this.editorManager.open(uri, { widgetOptions: widgetOptions }).then(function (editorWidget) {
                var editor = editorWidget.editor;
                editor.cursor = message.location.range.start;
                editor.revealRange(message.location.range);
                editor.selection = message.location.range;
            });
        }
    };
    DiagramLanguageClient.prototype.sendThroughLsp = function (message) {
        this.languageClientContribution.languageClient.then(function (lc) {
            return lc.onReady().then(function () {
                return lc.sendNotification(acceptMessageType, message);
            });
        });
    };
    DiagramLanguageClient.prototype.onMessageReceived = function (message) {
        this.actionMessageReceivers.forEach(function (client) {
            client.onMessageReceived(message);
        });
    };
    Object.defineProperty(DiagramLanguageClient.prototype, "languageClient", {
        get: function () {
            return this.languageClientContribution.languageClient;
        },
        enumerable: true,
        configurable: true
    });
    DiagramLanguageClient.prototype.didClose = function (clientId) {
        this.languageClientContribution.languageClient.then(function (lc) { return lc.sendNotification(didCloseMessageType, clientId); });
    };
    DiagramLanguageClient.prototype.connect = function (client) {
        this.actionMessageReceivers.push(client);
    };
    DiagramLanguageClient.prototype.disconnect = function (client) {
        var index = this.actionMessageReceivers.indexOf(client);
        if (index >= 0) {
            this.actionMessageReceivers.splice(index);
        }
    };
    __decorate([
        inversify_1.inject(browser_1.ApplicationShell),
        __metadata("design:type", browser_1.ApplicationShell)
    ], DiagramLanguageClient.prototype, "shell", void 0);
    DiagramLanguageClient = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [Object, browser_2.EditorManager])
    ], DiagramLanguageClient);
    return DiagramLanguageClient;
}());
exports.DiagramLanguageClient = DiagramLanguageClient;


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/theia/languageserver/index.js":
/*!***********************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/theia/languageserver/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./diagram-language-client */ "../node_modules/sprotty-theia/lib/theia/languageserver/diagram-language-client.js"));
__export(__webpack_require__(/*! ./diagram-language-client-contribution */ "../node_modules/sprotty-theia/lib/theia/languageserver/diagram-language-client-contribution.js"));
__export(__webpack_require__(/*! ./ls-diagram-contributions */ "../node_modules/sprotty-theia/lib/theia/languageserver/ls-diagram-contributions.js"));
__export(__webpack_require__(/*! ./ls-diagram-module */ "../node_modules/sprotty-theia/lib/theia/languageserver/ls-diagram-module.js"));


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/theia/languageserver/ls-diagram-contributions.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/theia/languageserver/ls-diagram-contributions.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var delete_1 = __webpack_require__(/*! ../../sprotty/languageserver/delete */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/delete.js");
var diagram_commands_1 = __webpack_require__(/*! ../diagram-commands */ "../node_modules/sprotty-theia/lib/theia/diagram-commands.js");
var diagram_keybinding_1 = __webpack_require__(/*! ../diagram-keybinding */ "../node_modules/sprotty-theia/lib/theia/diagram-keybinding.js");
var diagram_widget_1 = __webpack_require__(/*! ../diagram-widget */ "../node_modules/sprotty-theia/lib/theia/diagram-widget.js");
var ls_theia_sprotty_connector_1 = __webpack_require__(/*! ../../sprotty/languageserver/ls-theia-sprotty-connector */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/ls-theia-sprotty-connector.js");
var LSDiagramCommandContribution = /** @class */ (function () {
    function LSDiagramCommandContribution() {
    }
    LSDiagramCommandContribution.prototype.registerCommands = function (registry) {
        registry.registerCommand({
            id: diagram_commands_1.DiagramCommands.DELETE,
            label: 'Delete selected'
        });
        registry.registerHandler(diagram_commands_1.DiagramCommands.DELETE, new diagram_commands_1.DiagramCommandHandler(this.shell, function (widget) {
            if (widget instanceof diagram_widget_1.DiagramWidget) {
                var workspace = widget.connector instanceof ls_theia_sprotty_connector_1.LSTheiaSprottyConnector ? widget.connector.workspace : undefined;
                if (workspace) {
                    var action = new delete_1.DeleteWithWorkspaceEditAction(workspace, widget.uri.toString(true));
                    widget.actionDispatcher.dispatch(action);
                }
            }
        }));
    };
    __decorate([
        inversify_1.inject(browser_1.ApplicationShell),
        __metadata("design:type", browser_1.ApplicationShell)
    ], LSDiagramCommandContribution.prototype, "shell", void 0);
    LSDiagramCommandContribution = __decorate([
        inversify_1.injectable()
    ], LSDiagramCommandContribution);
    return LSDiagramCommandContribution;
}());
exports.LSDiagramCommandContribution = LSDiagramCommandContribution;
var LSDiagramKeybindingContribution = /** @class */ (function () {
    function LSDiagramKeybindingContribution() {
    }
    LSDiagramKeybindingContribution.prototype.registerKeybindings = function (registry) {
        registry.registerKeybinding({
            command: diagram_commands_1.DiagramCommands.DELETE,
            context: this.diagramKeybindingContext.id,
            keybinding: 'del'
        });
        registry.registerKeybinding({
            command: diagram_commands_1.DiagramCommands.DELETE,
            context: this.diagramKeybindingContext.id,
            keybinding: 'backspace'
        });
    };
    __decorate([
        inversify_1.inject(diagram_keybinding_1.DiagramKeybindingContext),
        __metadata("design:type", diagram_keybinding_1.DiagramKeybindingContext)
    ], LSDiagramKeybindingContribution.prototype, "diagramKeybindingContext", void 0);
    LSDiagramKeybindingContribution = __decorate([
        inversify_1.injectable()
    ], LSDiagramKeybindingContribution);
    return LSDiagramKeybindingContribution;
}());
exports.LSDiagramKeybindingContribution = LSDiagramKeybindingContribution;


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/theia/languageserver/ls-diagram-module.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/theia/languageserver/ls-diagram-module.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var ls_diagram_contributions_1 = __webpack_require__(/*! ./ls-diagram-contributions */ "../node_modules/sprotty-theia/lib/theia/languageserver/ls-diagram-contributions.js");
/**
 * Standard DI config for languageserver aware diagrams.
 */
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(common_1.CommandContribution).to(ls_diagram_contributions_1.LSDiagramCommandContribution).inSingletonScope();
    bind(browser_1.KeybindingContribution).to(ls_diagram_contributions_1.LSDiagramKeybindingContribution).inSingletonScope();
});


/***/ }),

/***/ "../node_modules/sprotty/css/sprotty.css":
/*!***********************************************!*\
  !*** ../node_modules/sprotty/css/sprotty.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader!./sprotty.css */ "../node_modules/css-loader/index.js!../node_modules/sprotty/css/sprotty.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);
//# sourceMappingURL=51.bundle.js.map
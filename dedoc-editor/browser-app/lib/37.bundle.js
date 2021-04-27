(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "../node_modules/@theia/plugin-ext/lib/common/disposable-util.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/common/disposable-util.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
function dispose(first) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    if (Array.isArray(first)) {
        first.forEach(function (d) { return d && d.dispose(); });
        return [];
    }
    else if (rest.length === 0) {
        if (first) {
            first.dispose();
            return first;
        }
        return undefined;
    }
    else {
        dispose(first);
        dispose(rest);
        return [];
    }
}
exports.dispose = dispose;


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/common/index.js":
/*!*************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/common/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
// Here we expose types from @theia/plugin, so it becomes a direct dependency
__export(__webpack_require__(/*! ./plugin-protocol */ "../node_modules/@theia/plugin-ext/lib/common/plugin-protocol.js"));
__export(__webpack_require__(/*! ./plugin-api-rpc */ "../node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc.js"));
__export(__webpack_require__(/*! ./plugin-ext-api-contribution */ "../node_modules/@theia/plugin-ext/lib/common/plugin-ext-api-contribution.js"));


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/common/plugin-ext-api-contribution.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/common/plugin-ext-api-contribution.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtPluginApiProvider = 'extPluginApi';
exports.MainPluginApiProvider = Symbol('mainPluginApi');


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/common/plugin-protocol.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/common/plugin-protocol.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.hostedServicePath = '/services/hostedPlugin';
var PluginPackage;
(function (PluginPackage) {
    function toPluginUrl(pck, relativePath) {
        return "hostedPlugin/" + getPluginId(pck) + "/" + encodeURIComponent(relativePath);
    }
    PluginPackage.toPluginUrl = toPluginUrl;
})(PluginPackage = exports.PluginPackage || (exports.PluginPackage = {}));
exports.PluginScanner = Symbol('PluginScanner');
/**
 * A plugin resolver is handling how to resolve a plugin link into a local resource.
 */
exports.PluginDeployerResolver = Symbol('PluginDeployerResolver');
exports.PluginDeployerDirectoryHandler = Symbol('PluginDeployerDirectoryHandler');
exports.PluginDeployerFileHandler = Symbol('PluginDeployerFileHandler');
exports.PluginDeployer = Symbol('PluginDeployer');
exports.PluginDeployerParticipant = Symbol('PluginDeployerParticipant');
var PluginDeployerEntryType;
(function (PluginDeployerEntryType) {
    PluginDeployerEntryType[PluginDeployerEntryType["FRONTEND"] = 0] = "FRONTEND";
    PluginDeployerEntryType[PluginDeployerEntryType["BACKEND"] = 1] = "BACKEND";
})(PluginDeployerEntryType = exports.PluginDeployerEntryType || (exports.PluginDeployerEntryType = {}));
/**
 * Whether a plugin installed by a user or system.
 */
var PluginType;
(function (PluginType) {
    PluginType[PluginType["System"] = 0] = "System";
    PluginType[PluginType["User"] = 1] = "User";
})(PluginType = exports.PluginType || (exports.PluginType = {}));
;
exports.MetadataProcessor = Symbol('MetadataProcessor');
function getPluginId(plugin) {
    return (plugin.publisher + "_" + plugin.name).replace(/\W/g, '_');
}
exports.getPluginId = getPluginId;
function buildFrontendModuleName(plugin) {
    return (plugin.publisher + "_" + plugin.name).replace(/\W/g, '_');
}
exports.buildFrontendModuleName = buildFrontendModuleName;
exports.HostedPluginClient = Symbol('HostedPluginClient');
exports.PluginDeployerHandler = Symbol('PluginDeployerHandler');
exports.HostedPluginServer = Symbol('HostedPluginServer');
/**
 * The JSON-RPC workspace interface.
 */
exports.pluginServerJsonRpcPath = '/services/plugin-ext';
exports.PluginServer = Symbol('PluginServer');
exports.ServerPluginRunner = Symbol('ServerPluginRunner');
exports.PluginHostEnvironmentVariable = Symbol('PluginHostEnvironmentVariable');


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/common/uri-components.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/common/uri-components.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
// some well known URI schemas
var Schemes;
(function (Schemes) {
    Schemes.FILE = 'file';
    Schemes.UNTITLED = 'untitled';
    Schemes.HTTP = 'http';
    Schemes.HTTPS = 'https';
    Schemes.MAILTO = 'mailto';
    Schemes.DATA = 'data';
    /**
     * A schema is used for models that exist in memory
     * only and that have no correspondence on a server or such.
     */
    Schemes.IN_MEMORY = 'inmemory';
    /** A schema is used for settings files. */
    Schemes.VSCODE = 'vscode';
    /** A schema is used for internal private files. */
    Schemes.INTERNAL = 'private';
    Schemes.COMMAND = 'command';
})(Schemes = exports.Schemes || (exports.Schemes = {}));
function theiaUritoUriComponents(uri) {
    return {
        scheme: uri.scheme,
        authority: uri.authority,
        path: uri.path.toString(),
        query: uri.query,
        fragment: uri.fragment
    };
}
exports.theiaUritoUriComponents = theiaUritoUriComponents;


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/main/browser/documents-main.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/main/browser/documents-main.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
var plugin_api_rpc_1 = __webpack_require__(/*! ../../common/plugin-api-rpc */ "../node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var vscode_uri_1 = __webpack_require__(/*! vscode-uri */ "../node_modules/vscode-uri/lib/esm/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var disposable_util_1 = __webpack_require__(/*! ../../common/disposable-util */ "../node_modules/@theia/plugin-ext/lib/common/disposable-util.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var ModelReferenceCollection = /** @class */ (function () {
    function ModelReferenceCollection(maxAge, maxLength) {
        if (maxAge === void 0) { maxAge = 1000 * 60 * 3; }
        if (maxLength === void 0) { maxLength = 1024 * 1024 * 80; }
        this.maxAge = maxAge;
        this.maxLength = maxLength;
        this.data = new Array();
        this.length = 0;
    }
    ModelReferenceCollection.prototype.dispose = function () {
        this.data = disposable_util_1.dispose(this.data) || [];
    };
    ModelReferenceCollection.prototype.add = function (ref) {
        var length = ref.object.textEditorModel.getValueLength();
        var handle = setTimeout(_dispose, this.maxAge);
        var entry = { length: length, dispose: _dispose };
        var self = this;
        function _dispose() {
            var idx = self.data.indexOf(entry);
            if (idx >= 0) {
                self.length -= length;
                ref.dispose();
                clearTimeout(handle);
                self.data.splice(idx, 1);
            }
        }
        ;
        this.data.push(entry);
        this.length += length;
        this.cleanup();
    };
    ModelReferenceCollection.prototype.cleanup = function () {
        while (this.length > this.maxLength) {
            this.data[0].dispose();
        }
    };
    return ModelReferenceCollection;
}());
exports.ModelReferenceCollection = ModelReferenceCollection;
var DocumentsMainImpl = /** @class */ (function () {
    function DocumentsMainImpl(editorsAndDocuments, modelService, rpc, editorManager, openerService, shell, untitledResourceResolver, fileResourceResolver) {
        var _this = this;
        this.modelService = modelService;
        this.editorManager = editorManager;
        this.openerService = openerService;
        this.shell = shell;
        this.untitledResourceResolver = untitledResourceResolver;
        this.fileResourceResolver = fileResourceResolver;
        this.syncedModels = new Map();
        this.modelReferenceCache = new ModelReferenceCollection();
        this.saveTimeout = 1750;
        this.toDispose = new core_1.DisposableCollection(this.modelReferenceCache);
        this.proxy = rpc.getProxy(plugin_api_rpc_1.MAIN_RPC_CONTEXT.DOCUMENTS_EXT);
        this.toDispose.push(editorsAndDocuments);
        this.toDispose.push(editorsAndDocuments.onDocumentAdd(function (documents) { return documents.forEach(_this.onModelAdded, _this); }));
        this.toDispose.push(editorsAndDocuments.onDocumentRemove(function (documents) { return documents.forEach(_this.onModelRemoved, _this); }));
        this.toDispose.push(modelService.onModelModeChanged(this.onModelChanged, this));
        this.toDispose.push(modelService.onModelSaved(function (m) {
            _this.proxy.$acceptModelSaved(m.textEditorModel.uri);
        }));
        this.toDispose.push(modelService.onModelWillSave(function (onWillSaveModelEvent) {
            onWillSaveModelEvent.waitUntil(new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                var edits, editOperations, edits_1, edits_1_1, edit, range, text;
                var e_1, _a;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            setTimeout(function () { return reject(new Error("Aborted onWillSaveTextDocument-event after " + _this.saveTimeout + "ms")); }, this.saveTimeout);
                            return [4 /*yield*/, this.proxy.$acceptModelWillSave(onWillSaveModelEvent.model.textEditorModel.uri, onWillSaveModelEvent.reason, this.saveTimeout)];
                        case 1:
                            edits = _b.sent();
                            editOperations = [];
                            try {
                                for (edits_1 = __values(edits), edits_1_1 = edits_1.next(); !edits_1_1.done; edits_1_1 = edits_1.next()) {
                                    edit = edits_1_1.value;
                                    range = edit.range, text = edit.text;
                                    if (!range && !text) {
                                        continue;
                                    }
                                    if (range && range.startLineNumber === range.endLineNumber && range.startColumn === range.endColumn && !edit.text) {
                                        continue;
                                    }
                                    editOperations.push({
                                        range: range ? monaco.Range.lift(range) : onWillSaveModelEvent.model.textEditorModel.getFullModelRange(),
                                        /* eslint-disable-next-line no-null/no-null */
                                        text: text || null,
                                        forceMoveMarkers: edit.forceMoveMarkers
                                    });
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (edits_1_1 && !edits_1_1.done && (_a = edits_1.return)) _a.call(edits_1);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                            resolve(editOperations);
                            return [2 /*return*/];
                    }
                });
            }); }));
        }));
        this.toDispose.push(modelService.onModelDirtyChanged(function (m) {
            _this.proxy.$acceptDirtyStateChanged(m.textEditorModel.uri, m.dirty);
        }));
    }
    DocumentsMainImpl.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    DocumentsMainImpl.prototype.onModelChanged = function (event) {
        var modelUrl = event.model.textEditorModel.uri;
        if (this.syncedModels.has(modelUrl.toString())) {
            this.proxy.$acceptModelModeChanged(modelUrl, event.oldModeId, event.model.languageId);
        }
    };
    DocumentsMainImpl.prototype.onModelAdded = function (model) {
        var _this = this;
        var modelUri = model.textEditorModel.uri;
        var key = modelUri.toString();
        var toDispose = new core_1.DisposableCollection(model.textEditorModel.onDidChangeContent(function (e) {
            return _this.proxy.$acceptModelChanged(modelUri, {
                eol: e.eol,
                versionId: e.versionId,
                changes: e.changes.map(function (c) {
                    return ({
                        text: c.text,
                        range: c.range,
                        rangeLength: c.rangeLength,
                        rangeOffset: c.rangeOffset
                    });
                })
            }, model.dirty);
        }), core_1.Disposable.create(function () { return _this.syncedModels.delete(key); }));
        this.syncedModels.set(key, toDispose);
        this.toDispose.push(toDispose);
    };
    DocumentsMainImpl.prototype.onModelRemoved = function (url) {
        var model = this.syncedModels.get(url.toString());
        if (model) {
            model.dispose();
        }
    };
    DocumentsMainImpl.prototype.$tryCreateDocument = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var language, content, resource;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        language = options && options.language;
                        content = options && options.content;
                        return [4 /*yield*/, this.untitledResourceResolver.createUntitledResource(this.fileResourceResolver, content, language)];
                    case 1:
                        resource = _a.sent();
                        return [2 /*return*/, monaco.Uri.parse(resource.uri.toString())];
                }
            });
        });
    };
    DocumentsMainImpl.prototype.$tryShowDocument = function (uri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var editorOptions, uriArg, opener_1, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        editorOptions = DocumentsMainImpl.toEditorOpenerOptions(this.shell, options);
                        uriArg = new uri_1.default(vscode_uri_1.default.revive(uri));
                        return [4 /*yield*/, this.openerService.getOpener(uriArg, editorOptions)];
                    case 1:
                        opener_1 = _a.sent();
                        return [4 /*yield*/, opener_1.open(uriArg, editorOptions)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        throw new Error(err_1);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DocumentsMainImpl.prototype.$trySaveDocument = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.editorManager.getByUri(new uri_1.default(vscode_uri_1.default.revive(uri)))];
                    case 1:
                        widget = _a.sent();
                        if (!widget) return [3 /*break*/, 3];
                        return [4 /*yield*/, browser_1.Saveable.save(widget)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/, false];
                }
            });
        });
    };
    DocumentsMainImpl.prototype.$tryOpenDocument = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var ref;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modelService.createModelReference(new uri_1.default(vscode_uri_1.default.revive(uri)))];
                    case 1:
                        ref = _a.sent();
                        if (ref.object) {
                            this.modelReferenceCache.add(ref);
                            return [2 /*return*/, true];
                        }
                        else {
                            ref.dispose();
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DocumentsMainImpl.prototype.$tryCloseDocument = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.editorManager.getByUri(new uri_1.default(vscode_uri_1.default.revive(uri)))];
                    case 1:
                        widget = _a.sent();
                        if (!widget) return [3 /*break*/, 3];
                        return [4 /*yield*/, browser_1.Saveable.save(widget)];
                    case 2:
                        _a.sent();
                        widget.close();
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/, false];
                }
            });
        });
    };
    DocumentsMainImpl.toEditorOpenerOptions = function (shell, options) {
        if (!options) {
            return undefined;
        }
        var range;
        if (options.selection) {
            var selection = options.selection;
            range = {
                start: { line: selection.startLineNumber - 1, character: selection.startColumn - 1 },
                end: { line: selection.endLineNumber - 1, character: selection.endColumn - 1 }
            };
        }
        /* fall back to side group -> split relative to the active widget */
        var widgetOptions = { mode: 'split-right' };
        var viewColumn = options.viewColumn;
        if (viewColumn === undefined || viewColumn === -1) {
            /* active group -> skip (default behaviour) */
            widgetOptions = undefined;
        }
        else if (viewColumn > 0) {
            var tabBars = shell.mainAreaTabBars;
            // convert to zero-based index
            var tabBar = tabBars[viewColumn - 1];
            if (tabBar && tabBar.currentTitle) {
                widgetOptions = { ref: tabBar.currentTitle.owner };
            }
        }
        return {
            selection: range,
            mode: options.preserveFocus ? 'reveal' : 'activate',
            preview: options.preview,
            widgetOptions: widgetOptions
        };
    };
    return DocumentsMainImpl;
}());
exports.DocumentsMainImpl = DocumentsMainImpl;


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/main/browser/editor/untitled-resource.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/main/browser/editor/untitled-resource.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../node_modules/@theia/core/lib/common/event.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var uri_components_1 = __webpack_require__(/*! ../../../common/uri-components */ "../node_modules/@theia/plugin-ext/lib/common/uri-components.js");
var browser_1 = __webpack_require__(/*! @theia/filesystem/lib/browser */ "../node_modules/@theia/filesystem/lib/browser/index.js");
var index = 0;
var UntitledResourceResolver = /** @class */ (function () {
    function UntitledResourceResolver() {
        this.resources = new Map();
    }
    UntitledResourceResolver.prototype.resolve = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var untitledResource;
            return __generator(this, function (_a) {
                if (uri.scheme !== uri_components_1.Schemes.UNTITLED) {
                    throw new Error('The given uri is not untitled file uri: ' + uri);
                }
                else {
                    untitledResource = this.resources.get(uri.toString());
                    if (!untitledResource) {
                        return [2 /*return*/, this.createUntitledResource(this.fileResourceResolver, '', '', uri)];
                    }
                    else {
                        return [2 /*return*/, untitledResource];
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    UntitledResourceResolver.prototype.createUntitledResource = function (fileResourceResolver, content, language, uri) {
        return __awaiter(this, void 0, void 0, function () {
            var extension, _a, _b, lang;
            var e_1, _c;
            return __generator(this, function (_d) {
                if (language) {
                    try {
                        for (_a = __values(monaco.languages.getLanguages()), _b = _a.next(); !_b.done; _b = _a.next()) {
                            lang = _b.value;
                            if (lang.id === language) {
                                if (lang.extensions) {
                                    extension = lang.extensions[0];
                                    break;
                                }
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                return [2 /*return*/, new UntitledResource(this.resources, uri ? uri : new uri_1.default().withScheme(uri_components_1.Schemes.UNTITLED).withPath("/Untitled-" + index++ + (extension ? extension : '')), fileResourceResolver, content)];
            });
        });
    };
    __decorate([
        inversify_1.inject(browser_1.FileResourceResolver),
        __metadata("design:type", browser_1.FileResourceResolver)
    ], UntitledResourceResolver.prototype, "fileResourceResolver", void 0);
    UntitledResourceResolver = __decorate([
        inversify_1.injectable()
    ], UntitledResourceResolver);
    return UntitledResourceResolver;
}());
exports.UntitledResourceResolver = UntitledResourceResolver;
var UntitledResource = /** @class */ (function () {
    function UntitledResource(resources, uri, fileResourceResolver, content) {
        this.resources = resources;
        this.uri = uri;
        this.fileResourceResolver = fileResourceResolver;
        this.content = content;
        this.onDidChangeContentsEmitter = new event_1.Emitter();
        this.onDidChangeContents = this.onDidChangeContentsEmitter.event;
        this.resources.set(this.uri.toString(), this);
    }
    UntitledResource.prototype.dispose = function () {
        this.resources.delete(this.uri.toString());
        this.onDidChangeContentsEmitter.dispose();
        if (this.fileResource) {
            this.fileResource.dispose();
        }
    };
    UntitledResource.prototype.readContents = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.fileResource) {
                    return [2 /*return*/, this.fileResource.readContents(options)];
                }
                else if (this.content) {
                    return [2 /*return*/, this.content];
                }
                else {
                    return [2 /*return*/, ''];
                }
                return [2 /*return*/];
            });
        });
    };
    UntitledResource.prototype.saveContents = function (content, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.fileResource) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.fileResourceResolver.resolve(new uri_1.default(this.uri.path.toString()))];
                    case 1:
                        _a.fileResource = _b.sent();
                        if (this.fileResource.onDidChangeContents) {
                            this.fileResource.onDidChangeContents(function () { return _this.fireDidChangeContents(); });
                        }
                        _b.label = 2;
                    case 2: return [4 /*yield*/, this.fileResource.saveContents(content, options)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UntitledResource.prototype.saveContentChanges = function (changes, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.fileResource) {
                            throw new Error('FileResource is not available for: ' + this.uri.path.toString());
                        }
                        return [4 /*yield*/, this.fileResource.saveContentChanges(changes, options)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UntitledResource.prototype.guessEncoding = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.fileResource) {
                    return [2 /*return*/, this.fileResource.guessEncoding()];
                }
                return [2 /*return*/];
            });
        });
    };
    UntitledResource.prototype.fireDidChangeContents = function () {
        this.onDidChangeContentsEmitter.fire(undefined);
    };
    Object.defineProperty(UntitledResource.prototype, "version", {
        get: function () {
            if (this.fileResource) {
                return this.fileResource.version;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    return UntitledResource;
}());
exports.UntitledResource = UntitledResource;
function createUntitledURI(language) {
    var e_2, _a;
    var extension;
    if (language) {
        try {
            for (var _b = __values(monaco.languages.getLanguages()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var lang = _c.value;
                if (lang.id === language) {
                    if (lang.extensions) {
                        extension = lang.extensions[0];
                        break;
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    return new uri_1.default().withScheme(uri_components_1.Schemes.UNTITLED).withPath("/Untitled-" + index++ + (extension ? extension : ''));
}
exports.createUntitledURI = createUntitledURI;


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/main/browser/menus/menus-contribution-handler.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/main/browser/menus/menus-contribution-handler.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../node_modules/@theia/core/lib/common/event.js");
var tab_bar_toolbar_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/tab-bar-toolbar */ "../node_modules/@theia/core/lib/browser/shell/tab-bar-toolbar.js");
var navigator_contribution_1 = __webpack_require__(/*! @theia/navigator/lib/browser/navigator-contribution */ "../node_modules/@theia/navigator/lib/browser/navigator-contribution.js");
var quick_command_service_1 = __webpack_require__(/*! @theia/core/lib/browser/quick-open/quick-command-service */ "../node_modules/@theia/core/lib/browser/quick-open/quick-command-service.js");
var tree_view_widget_1 = __webpack_require__(/*! ../view/tree-view-widget */ "../node_modules/@theia/plugin-ext/lib/main/browser/view/tree-view-widget.js");
var common_2 = __webpack_require__(/*! ../../../common */ "../node_modules/@theia/plugin-ext/lib/common/index.js");
var debug_stack_frames_widget_1 = __webpack_require__(/*! @theia/debug/lib/browser/view/debug-stack-frames-widget */ "../node_modules/@theia/debug/lib/browser/view/debug-stack-frames-widget.js");
var debug_threads_widget_1 = __webpack_require__(/*! @theia/debug/lib/browser/view/debug-threads-widget */ "../node_modules/@theia/debug/lib/browser/view/debug-threads-widget.js");
var tree_widget_selection_1 = __webpack_require__(/*! @theia/core/lib/browser/tree/tree-widget-selection */ "../node_modules/@theia/core/lib/browser/tree/tree-widget-selection.js");
var scm_widget_1 = __webpack_require__(/*! @theia/scm/lib/browser/scm-widget */ "../node_modules/@theia/scm/lib/browser/scm-widget.js");
var scm_service_1 = __webpack_require__(/*! @theia/scm/lib/browser/scm-service */ "../node_modules/@theia/scm/lib/browser/scm-service.js");
var scm_repository_1 = __webpack_require__(/*! @theia/scm/lib/browser/scm-repository */ "../node_modules/@theia/scm/lib/browser/scm-repository.js");
var scm_main_1 = __webpack_require__(/*! ../scm-main */ "../node_modules/@theia/plugin-ext/lib/main/browser/scm-main.js");
var resource_context_key_1 = __webpack_require__(/*! @theia/core/lib/browser/resource-context-key */ "../node_modules/@theia/core/lib/browser/resource-context-key.js");
var plugin_view_widget_1 = __webpack_require__(/*! ../view/plugin-view-widget */ "../node_modules/@theia/plugin-ext/lib/main/browser/view/plugin-view-widget.js");
var view_context_key_service_1 = __webpack_require__(/*! ../view/view-context-key-service */ "../node_modules/@theia/plugin-ext/lib/main/browser/view/view-context-key-service.js");
var webview_1 = __webpack_require__(/*! ../webview/webview */ "../node_modules/@theia/plugin-ext/lib/main/browser/webview/webview.js");
var navigatable_1 = __webpack_require__(/*! @theia/core/lib/browser/navigatable */ "../node_modules/@theia/core/lib/browser/navigatable.js");
var context_key_service_1 = __webpack_require__(/*! @theia/core/lib/browser/context-key-service */ "../node_modules/@theia/core/lib/browser/context-key-service.js");
var CodeEditorWidget;
(function (CodeEditorWidget) {
    function is(arg) {
        return arg instanceof browser_1.EditorWidget || arg instanceof webview_1.WebviewWidget;
    }
    CodeEditorWidget.is = is;
    function getResourceUri(editor) {
        var resourceUri = navigatable_1.Navigatable.is(editor) && editor.getResourceUri();
        return resourceUri ? resourceUri['codeUri'] : undefined;
    }
    CodeEditorWidget.getResourceUri = getResourceUri;
})(CodeEditorWidget = exports.CodeEditorWidget || (exports.CodeEditorWidget = {}));
var MenusContributionPointHandler = /** @class */ (function () {
    function MenusContributionPointHandler() {
    }
    MenusContributionPointHandler_1 = MenusContributionPointHandler;
    MenusContributionPointHandler.prototype.handle = function (contributions) {
        var _this = this;
        var allMenus = contributions.menus;
        if (!allMenus) {
            return core_1.Disposable.NULL;
        }
        var toDispose = new core_1.DisposableCollection();
        var _loop_1 = function (location_1) {
            var e_1, _a, e_2, _b, e_3, _c, e_4, _d, e_5, _e, e_6, _f, e_7, _g, e_8, _h, e_9, _j;
            if (location_1 === 'commandPalette') {
                try {
                    for (var _k = (e_1 = void 0, __values(allMenus[location_1])), _l = _k.next(); !_l.done; _l = _k.next()) {
                        var menu = _l.value;
                        if (menu.when) {
                            toDispose.push(this_1.quickCommandService.pushCommandContext(menu.command, menu.when));
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_l && !_l.done && (_a = _k.return)) _a.call(_k);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            else if (location_1 === 'editor/title') {
                var _loop_2 = function (action) {
                    toDispose.push(this_1.registerTitleAction(location_1, action, {
                        execute: function (widget) { return CodeEditorWidget.is(widget) && _this.commands.executeCommand(action.command, CodeEditorWidget.getResourceUri(widget)); },
                        isEnabled: function (widget) { return CodeEditorWidget.is(widget) && _this.commands.isEnabled(action.command, CodeEditorWidget.getResourceUri(widget)); },
                        isVisible: function (widget) { return CodeEditorWidget.is(widget) && _this.commands.isVisible(action.command, CodeEditorWidget.getResourceUri(widget)); }
                    }));
                };
                try {
                    for (var _m = (e_2 = void 0, __values(allMenus[location_1])), _o = _m.next(); !_o.done; _o = _m.next()) {
                        var action = _o.value;
                        _loop_2(action);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_o && !_o.done && (_b = _m.return)) _b.call(_m);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            else if (location_1 === 'view/title') {
                var _loop_3 = function (action) {
                    toDispose.push(this_1.registerTitleAction(location_1, __assign({}, action, { when: undefined }), {
                        execute: function (widget) { return widget instanceof plugin_view_widget_1.PluginViewWidget && _this.commands.executeCommand(action.command); },
                        isEnabled: function (widget) { return widget instanceof plugin_view_widget_1.PluginViewWidget &&
                            _this.viewContextKeys.with({ view: widget.options.viewId }, function () {
                                return _this.commands.isEnabled(action.command) && _this.viewContextKeys.match(action.when);
                            }); },
                        isVisible: function (widget) { return widget instanceof plugin_view_widget_1.PluginViewWidget &&
                            _this.viewContextKeys.with({ view: widget.options.viewId }, function () {
                                return _this.commands.isVisible(action.command) && _this.viewContextKeys.match(action.when);
                            }); }
                    }));
                };
                try {
                    for (var _p = (e_3 = void 0, __values(allMenus[location_1])), _q = _p.next(); !_q.done; _q = _p.next()) {
                        var action = _q.value;
                        _loop_3(action);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_q && !_q.done && (_c = _p.return)) _c.call(_p);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
            else if (location_1 === 'view/item/context') {
                try {
                    for (var _r = (e_4 = void 0, __values(allMenus[location_1])), _s = _r.next(); !_s.done; _s = _r.next()) {
                        var menu = _s.value;
                        var inline = menu.group && /^inline/.test(menu.group) || false;
                        var menuPath = inline ? tree_view_widget_1.VIEW_ITEM_INLINE_MENU : tree_view_widget_1.VIEW_ITEM_CONTEXT_MENU;
                        toDispose.push(this_1.registerTreeMenuAction(menuPath, menu));
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_s && !_s.done && (_d = _r.return)) _d.call(_r);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
            else if (location_1 === 'scm/title') {
                try {
                    for (var _t = (e_5 = void 0, __values(allMenus[location_1])), _u = _t.next(); !_u.done; _u = _t.next()) {
                        var action = _u.value;
                        toDispose.push(this_1.registerScmTitleAction(location_1, action));
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (_u && !_u.done && (_e = _t.return)) _e.call(_t);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
            }
            else if (location_1 === 'scm/resourceGroup/context') {
                try {
                    for (var _v = (e_6 = void 0, __values(allMenus[location_1])), _w = _v.next(); !_w.done; _w = _v.next()) {
                        var menu = _w.value;
                        var inline = menu.group && /^inline/.test(menu.group) || false;
                        var menuPath = inline ? scm_widget_1.ScmWidget.RESOURCE_GROUP_INLINE_MENU : scm_widget_1.ScmWidget.RESOURCE_GROUP_CONTEXT_MENU;
                        toDispose.push(this_1.registerScmMenuAction(menuPath, menu));
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (_w && !_w.done && (_f = _v.return)) _f.call(_v);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
            }
            else if (location_1 === 'scm/resourceState/context') {
                try {
                    for (var _x = (e_7 = void 0, __values(allMenus[location_1])), _y = _x.next(); !_y.done; _y = _x.next()) {
                        var menu = _y.value;
                        var inline = menu.group && /^inline/.test(menu.group) || false;
                        var menuPath = inline ? scm_widget_1.ScmWidget.RESOURCE_INLINE_MENU : scm_widget_1.ScmWidget.RESOURCE_CONTEXT_MENU;
                        toDispose.push(this_1.registerScmMenuAction(menuPath, menu));
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (_y && !_y.done && (_g = _x.return)) _g.call(_x);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
            }
            else if (location_1 === 'debug/callstack/context') {
                try {
                    for (var _z = (e_8 = void 0, __values(allMenus[location_1])), _0 = _z.next(); !_0.done; _0 = _z.next()) {
                        var menu = _0.value;
                        try {
                            for (var _1 = (e_9 = void 0, __values([debug_stack_frames_widget_1.DebugStackFramesWidget.CONTEXT_MENU, debug_threads_widget_1.DebugThreadsWidget.CONTEXT_MENU])), _2 = _1.next(); !_2.done; _2 = _1.next()) {
                                var menuPath = _2.value;
                                toDispose.push(this_1.registerMenuAction(menuPath, menu, function (command) { return ({
                                    execute: function () {
                                        var args = [];
                                        for (var _i = 0; _i < arguments.length; _i++) {
                                            args[_i] = arguments[_i];
                                        }
                                        return _this.commands.executeCommand(command, args[0]);
                                    },
                                    isEnabled: function () {
                                        var args = [];
                                        for (var _i = 0; _i < arguments.length; _i++) {
                                            args[_i] = arguments[_i];
                                        }
                                        return _this.commands.isEnabled(command, args[0]);
                                    },
                                    isVisible: function () {
                                        var args = [];
                                        for (var _i = 0; _i < arguments.length; _i++) {
                                            args[_i] = arguments[_i];
                                        }
                                        return _this.commands.isVisible(command, args[0]);
                                    }
                                }); }));
                            }
                        }
                        catch (e_9_1) { e_9 = { error: e_9_1 }; }
                        finally {
                            try {
                                if (_2 && !_2.done && (_j = _1.return)) _j.call(_1);
                            }
                            finally { if (e_9) throw e_9.error; }
                        }
                    }
                }
                catch (e_8_1) { e_8 = { error: e_8_1 }; }
                finally {
                    try {
                        if (_0 && !_0.done && (_h = _z.return)) _h.call(_z);
                    }
                    finally { if (e_8) throw e_8.error; }
                }
            }
            else if (allMenus.hasOwnProperty(location_1)) {
                var menuPaths_1 = MenusContributionPointHandler_1.parseMenuPaths(location_1);
                if (!menuPaths_1.length) {
                    this_1.logger.warn("Plugin contributes items to a menu with invalid identifier: " + location_1);
                    return "continue";
                }
                var menus = allMenus[location_1];
                menus.forEach(function (menu) {
                    var e_10, _a;
                    try {
                        for (var menuPaths_2 = (e_10 = void 0, __values(menuPaths_1)), menuPaths_2_1 = menuPaths_2.next(); !menuPaths_2_1.done; menuPaths_2_1 = menuPaths_2.next()) {
                            var menuPath = menuPaths_2_1.value;
                            toDispose.push(_this.registerGlobalMenuAction(menuPath, menu));
                        }
                    }
                    catch (e_10_1) { e_10 = { error: e_10_1 }; }
                    finally {
                        try {
                            if (menuPaths_2_1 && !menuPaths_2_1.done && (_a = menuPaths_2.return)) _a.call(menuPaths_2);
                        }
                        finally { if (e_10) throw e_10.error; }
                    }
                });
            }
        };
        var this_1 = this;
        for (var location_1 in allMenus) {
            _loop_1(location_1);
        }
        return toDispose;
    };
    MenusContributionPointHandler.parseMenuPaths = function (value) {
        switch (value) {
            case 'editor/context': return [browser_1.EDITOR_CONTEXT_MENU];
            case 'explorer/context': return [navigator_contribution_1.NAVIGATOR_CONTEXT_MENU];
        }
        return [];
    };
    MenusContributionPointHandler.prototype.registerTreeMenuAction = function (menuPath, menu) {
        var _this = this;
        return this.registerMenuAction(menuPath, menu, function (command) { return ({
            execute: function () {
                var _a;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return (_a = _this.commands).executeCommand.apply(_a, __spread([command], _this.toTreeArgs.apply(_this, __spread(args))));
            },
            isEnabled: function () {
                var _a;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return (_a = _this.commands).isEnabled.apply(_a, __spread([command], _this.toTreeArgs.apply(_this, __spread(args))));
            },
            isVisible: function () {
                var _a;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return (_a = _this.commands).isVisible.apply(_a, __spread([command], _this.toTreeArgs.apply(_this, __spread(args))));
            }
        }); });
    };
    MenusContributionPointHandler.prototype.toTreeArgs = function () {
        var e_11, _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var treeArgs = [];
        try {
            for (var args_1 = __values(args), args_1_1 = args_1.next(); !args_1_1.done; args_1_1 = args_1.next()) {
                var arg = args_1_1.value;
                if (common_2.TreeViewSelection.is(arg)) {
                    treeArgs.push(arg);
                }
            }
        }
        catch (e_11_1) { e_11 = { error: e_11_1 }; }
        finally {
            try {
                if (args_1_1 && !args_1_1.done && (_a = args_1.return)) _a.call(args_1);
            }
            finally { if (e_11) throw e_11.error; }
        }
        return treeArgs;
    };
    MenusContributionPointHandler.prototype.registerTitleAction = function (location, action, handler) {
        var _this = this;
        var toDispose = new core_1.DisposableCollection();
        var id = this.createSyntheticCommandId(action.command, { prefix: "__plugin." + location.replace('/', '.') + ".action." });
        var command = { id: id };
        toDispose.push(this.commands.registerCommand(command, handler));
        var when = action.when;
        var whenKeys = when && this.contextKeyService.parseKeys(when);
        var onDidChange;
        if (whenKeys && whenKeys.size) {
            var onDidChangeEmitter_1 = new event_1.Emitter();
            toDispose.push(onDidChangeEmitter_1);
            onDidChange = onDidChangeEmitter_1.event;
            this.contextKeyService.onDidChange.maxListeners = this.contextKeyService.onDidChange.maxListeners + 1;
            toDispose.push(this.contextKeyService.onDidChange(function (event) {
                if (event.affects(whenKeys)) {
                    onDidChangeEmitter_1.fire(undefined);
                }
            }));
            toDispose.push(core_1.Disposable.create(function () {
                _this.contextKeyService.onDidChange.maxListeners = _this.contextKeyService.onDidChange.maxListeners - 1;
            }));
        }
        // handle group and priority
        // if group is empty or white space is will be set to navigation
        // ' ' => ['navigation', 0]
        // 'navigation@1' => ['navigation', 1]
        // '1_rest-client@2' => ['1_rest-client', 2]
        // if priority is not a number it will be set to 0
        // navigation@test => ['navigation', 0]
        var _a = __read((action.group || 'navigation').split('@'), 2), group = _a[0], sort = _a[1];
        var item = { id: id, command: id, group: group.trim() || 'navigation', priority: ~~sort || undefined, when: when, onDidChange: onDidChange };
        toDispose.push(this.tabBarToolbar.registerItem(item));
        toDispose.push(this.onDidRegisterCommand(action.command, function (pluginCommand) {
            command.category = pluginCommand.category;
            item.tooltip = pluginCommand.label;
            if (group === 'navigation') {
                command.iconClass = pluginCommand.iconClass;
            }
        }));
        return toDispose;
    };
    MenusContributionPointHandler.prototype.registerScmTitleAction = function (location, action) {
        var _this = this;
        var selectedRepository = function () { return _this.toScmArgs(_this.scmService.selectedRepository); };
        return this.registerTitleAction(location, action, {
            execute: function (widget) { return widget instanceof scm_widget_1.ScmWidget && _this.commands.executeCommand(action.command, selectedRepository()); },
            isEnabled: function (widget) { return widget instanceof scm_widget_1.ScmWidget && _this.commands.isEnabled(action.command, selectedRepository()); },
            isVisible: function (widget) { return widget instanceof scm_widget_1.ScmWidget && _this.commands.isVisible(action.command, selectedRepository()); }
        });
    };
    MenusContributionPointHandler.prototype.registerScmMenuAction = function (menuPath, menu) {
        var _this = this;
        return this.registerMenuAction(menuPath, menu, function (command) { return ({
            execute: function () {
                var _a;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return (_a = _this.commands).executeCommand.apply(_a, __spread([command], _this.toScmArgs.apply(_this, __spread(args))));
            },
            isEnabled: function () {
                var _a;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return (_a = _this.commands).isEnabled.apply(_a, __spread([command], _this.toScmArgs.apply(_this, __spread(args))));
            },
            isVisible: function () {
                var _a;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return (_a = _this.commands).isVisible.apply(_a, __spread([command], _this.toScmArgs.apply(_this, __spread(args))));
            }
        }); });
    };
    MenusContributionPointHandler.prototype.toScmArgs = function () {
        var e_12, _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var scmArgs = [];
        try {
            for (var args_2 = __values(args), args_2_1 = args_2.next(); !args_2_1.done; args_2_1 = args_2.next()) {
                var arg = args_2_1.value;
                var scmArg = this.toScmArg(arg);
                if (scmArg) {
                    scmArgs.push(scmArg);
                }
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (args_2_1 && !args_2_1.done && (_a = args_2.return)) _a.call(args_2);
            }
            finally { if (e_12) throw e_12.error; }
        }
        return scmArgs;
    };
    MenusContributionPointHandler.prototype.toScmArg = function (arg) {
        if (arg instanceof scm_repository_1.ScmRepository && arg.provider instanceof scm_main_1.PluginScmProvider) {
            return {
                sourceControlHandle: arg.provider.handle
            };
        }
        if (arg instanceof scm_main_1.PluginScmResourceGroup) {
            return {
                sourceControlHandle: arg.provider.handle,
                resourceGroupHandle: arg.handle
            };
        }
        if (arg instanceof scm_main_1.PluginScmResource) {
            return {
                sourceControlHandle: arg.group.provider.handle,
                resourceGroupHandle: arg.group.handle,
                resourceStateHandle: arg.handle
            };
        }
    };
    MenusContributionPointHandler.prototype.registerGlobalMenuAction = function (menuPath, menu) {
        var _this = this;
        var selectedResource = function () {
            var selection = _this.selectionService.selection;
            if (tree_widget_selection_1.TreeWidgetSelection.is(selection) && selection.source instanceof tree_view_widget_1.TreeViewWidget && selection[0]) {
                return selection.source.toTreeViewSelection(selection[0]);
            }
            var uri = _this.resourceContextKey.get();
            return uri ? uri['codeUri'] : undefined;
        };
        return this.registerMenuAction(menuPath, menu, function (command) { return ({
            execute: function () { return _this.commands.executeCommand(command, selectedResource()); },
            isEnabled: function () { return _this.commands.isEnabled(command, selectedResource()); },
            isVisible: function () { return _this.commands.isVisible(command, selectedResource()); }
        }); });
    };
    MenusContributionPointHandler.prototype.registerMenuAction = function (menuPath, menu, handler) {
        var toDispose = new core_1.DisposableCollection();
        var commandId = this.createSyntheticCommandId(menu.command, { prefix: '__plugin.menu.action.' });
        var command = { id: commandId };
        toDispose.push(this.commands.registerCommand(command, handler(menu.command)));
        toDispose.push(this.quickCommandService.pushCommandContext(commandId, 'false'));
        var altId;
        if (menu.alt) {
            altId = this.createSyntheticCommandId(menu.alt, { prefix: '__plugin.menu.action.' });
            var alt_1 = { id: altId };
            toDispose.push(this.commands.registerCommand(alt_1, handler(menu.alt)));
            toDispose.push(this.quickCommandService.pushCommandContext(altId, 'false'));
            toDispose.push(this.onDidRegisterCommand(menu.alt, function (pluginCommand) {
                alt_1.category = pluginCommand.category;
                alt_1.label = pluginCommand.label;
                if (inline) {
                    alt_1.iconClass = pluginCommand.iconClass;
                }
            }));
        }
        var when = menu.when;
        var _a = __read((menu.group || '').split('@'), 2), _b = _a[0], group = _b === void 0 ? '' : _b, _c = _a[1], order = _c === void 0 ? undefined : _c;
        var action = { commandId: commandId, alt: altId, order: order, when: when };
        var inline = /^inline/.test(group);
        menuPath = inline ? menuPath : __spread(menuPath, [group]);
        toDispose.push(this.menuRegistry.registerMenuAction(menuPath, action));
        toDispose.push(this.onDidRegisterCommand(menu.command, function (pluginCommand) {
            command.category = pluginCommand.category;
            command.label = pluginCommand.label;
            if (inline) {
                command.iconClass = pluginCommand.iconClass;
            }
        }));
        return toDispose;
    };
    MenusContributionPointHandler.prototype.createSyntheticCommandId = function (command, _a) {
        var prefix = _a.prefix;
        var id = prefix + command;
        var index = 0;
        while (this.commands.getCommand(id)) {
            id = prefix + command + ':' + index;
            index++;
        }
        return id;
    };
    MenusContributionPointHandler.prototype.onDidRegisterCommand = function (id, cb) {
        var _this = this;
        var command = this.commands.getCommand(id);
        if (command) {
            cb(command);
            return core_1.Disposable.NULL;
        }
        var toDispose = new core_1.DisposableCollection();
        // Registering a menu action requires the related command to be already registered.
        // But Theia plugin registers the commands dynamically via the Commands API.
        // Let's wait for ~2 sec. It should be enough to finish registering all the contributed commands.
        // FIXME: remove this workaround (timer) once the https://github.com/theia-ide/theia/issues/3344 is fixed
        var handle = setTimeout(function () { return toDispose.push(_this.onDidRegisterCommand(id, cb)); }, 2000);
        toDispose.push(core_1.Disposable.create(function () { return clearTimeout(handle); }));
        return toDispose;
    };
    var MenusContributionPointHandler_1;
    __decorate([
        inversify_1.inject(common_1.MenuModelRegistry),
        __metadata("design:type", common_1.MenuModelRegistry)
    ], MenusContributionPointHandler.prototype, "menuRegistry", void 0);
    __decorate([
        inversify_1.inject(core_1.CommandRegistry),
        __metadata("design:type", core_1.CommandRegistry)
    ], MenusContributionPointHandler.prototype, "commands", void 0);
    __decorate([
        inversify_1.inject(core_1.ILogger),
        __metadata("design:type", Object)
    ], MenusContributionPointHandler.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(scm_service_1.ScmService),
        __metadata("design:type", scm_service_1.ScmService)
    ], MenusContributionPointHandler.prototype, "scmService", void 0);
    __decorate([
        inversify_1.inject(quick_command_service_1.QuickCommandService),
        __metadata("design:type", quick_command_service_1.QuickCommandService)
    ], MenusContributionPointHandler.prototype, "quickCommandService", void 0);
    __decorate([
        inversify_1.inject(tab_bar_toolbar_1.TabBarToolbarRegistry),
        __metadata("design:type", tab_bar_toolbar_1.TabBarToolbarRegistry)
    ], MenusContributionPointHandler.prototype, "tabBarToolbar", void 0);
    __decorate([
        inversify_1.inject(core_1.SelectionService),
        __metadata("design:type", core_1.SelectionService)
    ], MenusContributionPointHandler.prototype, "selectionService", void 0);
    __decorate([
        inversify_1.inject(resource_context_key_1.ResourceContextKey),
        __metadata("design:type", resource_context_key_1.ResourceContextKey)
    ], MenusContributionPointHandler.prototype, "resourceContextKey", void 0);
    __decorate([
        inversify_1.inject(view_context_key_service_1.ViewContextKeyService),
        __metadata("design:type", view_context_key_service_1.ViewContextKeyService)
    ], MenusContributionPointHandler.prototype, "viewContextKeys", void 0);
    __decorate([
        inversify_1.inject(context_key_service_1.ContextKeyService),
        __metadata("design:type", context_key_service_1.ContextKeyService)
    ], MenusContributionPointHandler.prototype, "contextKeyService", void 0);
    MenusContributionPointHandler = MenusContributionPointHandler_1 = __decorate([
        inversify_1.injectable()
    ], MenusContributionPointHandler);
    return MenusContributionPointHandler;
}());
exports.MenusContributionPointHandler = MenusContributionPointHandler;


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/main/browser/plugin-shared-style.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/main/browser/plugin-shared-style.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
var theming_1 = __webpack_require__(/*! @theia/core/lib/browser/theming */ "../node_modules/@theia/core/lib/browser/theming.js");
var reference_1 = __webpack_require__(/*! @theia/core/lib/common/reference */ "../node_modules/@theia/core/lib/common/reference.js");
var PluginSharedStyle = /** @class */ (function () {
    function PluginSharedStyle() {
        var _this = this;
        this.rules = [];
        this.toUpdate = new disposable_1.DisposableCollection();
        this.icons = new reference_1.SyncReferenceCollection(function (key) { return _this.createPluginIcon(key); });
        this.iconSequence = 0;
        this.update();
        theming_1.ThemeService.get().onThemeChange(function () { return _this.update(); });
    }
    PluginSharedStyle.prototype.update = function () {
        var e_1, _a;
        this.toUpdate.dispose();
        var style = this.style = document.createElement('style');
        style.type = 'text/css';
        style.media = 'screen';
        document.getElementsByTagName('head')[0].appendChild(style);
        this.toUpdate.push(disposable_1.Disposable.create(function () {
            return document.getElementsByTagName('head')[0].removeChild(style);
        }));
        try {
            for (var _b = __values(this.rules), _c = _b.next(); !_c.done; _c = _b.next()) {
                var rule = _c.value;
                this.doInsertRule(rule);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    PluginSharedStyle.prototype.insertRule = function (selector, body) {
        var _this = this;
        var rule = { selector: selector, body: body };
        this.rules.push(rule);
        this.doInsertRule(rule);
        return disposable_1.Disposable.create(function () {
            var index = _this.rules.indexOf(rule);
            if (index !== -1) {
                _this.rules.splice(index, 1);
                _this.deleteRule(selector);
            }
        });
    };
    PluginSharedStyle.prototype.doInsertRule = function (_a) {
        var selector = _a.selector, body = _a.body;
        var sheet = this.style.sheet;
        var cssBody = body(theming_1.ThemeService.get().getCurrentTheme());
        sheet.insertRule(selector + ' {\n' + cssBody + '\n}', 0);
    };
    PluginSharedStyle.prototype.deleteRule = function (selector) {
        var sheet = this.style.sheet;
        var rules = sheet.rules || sheet.cssRules || [];
        for (var i = rules.length - 1; i >= 0; i--) {
            var rule = rules[i];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (rule.selectorText.indexOf(selector) !== -1) {
                sheet.deleteRule(i);
            }
        }
    };
    PluginSharedStyle.prototype.toIconClass = function (url, _a) {
        var size = (_a === void 0 ? { size: 16 } : _a).size;
        return this.icons.acquire({ url: url, size: size });
    };
    PluginSharedStyle.prototype.createPluginIcon = function (key) {
        var iconUrl = key.url;
        var size = key.size;
        var darkIconUrl = typeof iconUrl === 'object' ? iconUrl.dark : iconUrl;
        var lightIconUrl = typeof iconUrl === 'object' ? iconUrl.light : iconUrl;
        var iconClass = 'plugin-icon-' + this.iconSequence++;
        var toDispose = new disposable_1.DisposableCollection();
        toDispose.push(this.insertRule('.' + iconClass, function (theme) { return "\n                display: inline-block;\n                background-position: 2px;\n                width: " + size + "px;\n                height: " + size + "px;\n                background: no-repeat url(\"" + (theme.type === 'light' ? lightIconUrl : darkIconUrl) + "\");\n                background-size: " + size + "px;\n            "; }));
        return {
            iconClass: iconClass,
            dispose: function () { return toDispose.dispose(); }
        };
    };
    PluginSharedStyle = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], PluginSharedStyle);
    return PluginSharedStyle;
}());
exports.PluginSharedStyle = PluginSharedStyle;


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/main/browser/scm-main.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/main/browser/scm-main.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var plugin_api_rpc_1 = __webpack_require__(/*! ../../common/plugin-api-rpc */ "../node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc.js");
var scm_service_1 = __webpack_require__(/*! @theia/scm/lib/browser/scm-service */ "../node_modules/@theia/scm/lib/browser/scm-service.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../node_modules/@theia/core/lib/common/event.js");
var cancellation_1 = __webpack_require__(/*! @theia/core/lib/common/cancellation */ "../node_modules/@theia/core/lib/common/cancellation.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var color_registry_1 = __webpack_require__(/*! @theia/core/lib/browser/color-registry */ "../node_modules/@theia/core/lib/browser/color-registry.js");
var ScmMainImpl = /** @class */ (function () {
    function ScmMainImpl(rpc, container) {
        var _this = this;
        this.scmRepositoryMap = new Map();
        this.toDispose = new disposable_1.DisposableCollection();
        this.proxy = rpc.getProxy(plugin_api_rpc_1.MAIN_RPC_CONTEXT.SCM_EXT);
        this.scmService = container.get(scm_service_1.ScmService);
        this.colors = container.get(color_registry_1.ColorRegistry);
        this.toDispose.push(this.scmService.onDidChangeSelectedRepository(function (repository) { return _this.updateSelectedRepository(repository); }));
    }
    ScmMainImpl.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    ScmMainImpl.prototype.updateSelectedRepository = function (repository) {
        var sourceControlHandle = repository ? this.getSourceControlHandle(repository) : undefined;
        if (sourceControlHandle !== undefined) {
            this.proxy.$setSourceControlSelection(sourceControlHandle, true);
        }
        if (this.lastSelectedSourceControlHandle !== undefined && this.lastSelectedSourceControlHandle !== sourceControlHandle) {
            this.proxy.$setSourceControlSelection(this.lastSelectedSourceControlHandle, false);
        }
        this.lastSelectedSourceControlHandle = sourceControlHandle;
    };
    ScmMainImpl.prototype.getSourceControlHandle = function (repository) {
        var _this = this;
        return Array.from(this.scmRepositoryMap.keys()).find(function (key) {
            var scmRepository = _this.scmRepositoryMap.get(key);
            return scmRepository !== undefined && scmRepository.provider.rootUri === repository.provider.rootUri;
        });
    };
    ScmMainImpl.prototype.$registerSourceControl = function (sourceControlHandle, id, label, rootUri) {
        return __awaiter(this, void 0, void 0, function () {
            var provider, repository;
            var _this = this;
            return __generator(this, function (_a) {
                provider = new PluginScmProvider(this.proxy, sourceControlHandle, id, label, rootUri, this.colors);
                repository = this.scmService.registerScmProvider(provider);
                repository.input.onDidChange(function () {
                    return _this.proxy.$updateInputBox(sourceControlHandle, repository.input.value);
                });
                this.scmRepositoryMap.set(sourceControlHandle, repository);
                if (this.scmService.repositories.length === 1) {
                    this.updateSelectedRepository(repository);
                }
                this.toDispose.push(disposable_1.Disposable.create(function () { return _this.$unregisterSourceControl(sourceControlHandle); }));
                return [2 /*return*/];
            });
        });
    };
    ScmMainImpl.prototype.$updateSourceControl = function (sourceControlHandle, features) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, provider;
            return __generator(this, function (_a) {
                repository = this.scmRepositoryMap.get(sourceControlHandle);
                if (repository) {
                    provider = repository.provider;
                    provider.updateSourceControl(features);
                }
                return [2 /*return*/];
            });
        });
    };
    ScmMainImpl.prototype.$unregisterSourceControl = function (sourceControlHandle) {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            return __generator(this, function (_a) {
                repository = this.scmRepositoryMap.get(sourceControlHandle);
                if (repository) {
                    repository.dispose();
                    this.scmRepositoryMap.delete(sourceControlHandle);
                }
                return [2 /*return*/];
            });
        });
    };
    ScmMainImpl.prototype.$setInputBoxPlaceholder = function (sourceControlHandle, placeholder) {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            return __generator(this, function (_a) {
                repository = this.scmRepositoryMap.get(sourceControlHandle);
                if (repository) {
                    repository.input.placeholder = placeholder;
                }
                return [2 /*return*/];
            });
        });
    };
    ScmMainImpl.prototype.$setInputBoxValue = function (sourceControlHandle, value) {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            return __generator(this, function (_a) {
                repository = this.scmRepositoryMap.get(sourceControlHandle);
                if (repository) {
                    repository.input.value = value;
                }
                return [2 /*return*/];
            });
        });
    };
    ScmMainImpl.prototype.$registerGroup = function (sourceControlHandle, groupHandle, id, label) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, provider;
            return __generator(this, function (_a) {
                repository = this.scmRepositoryMap.get(sourceControlHandle);
                if (repository) {
                    provider = repository.provider;
                    provider.registerGroup(groupHandle, id, label);
                }
                return [2 /*return*/];
            });
        });
    };
    ScmMainImpl.prototype.$unregisterGroup = function (sourceControlHandle, groupHandle) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, provider;
            return __generator(this, function (_a) {
                repository = this.scmRepositoryMap.get(sourceControlHandle);
                if (repository) {
                    provider = repository.provider;
                    provider.unregisterGroup(groupHandle);
                }
                return [2 /*return*/];
            });
        });
    };
    ScmMainImpl.prototype.$updateGroup = function (sourceControlHandle, groupHandle, features) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, provider;
            return __generator(this, function (_a) {
                repository = this.scmRepositoryMap.get(sourceControlHandle);
                if (repository) {
                    provider = repository.provider;
                    provider.updateGroup(groupHandle, features);
                }
                return [2 /*return*/];
            });
        });
    };
    ScmMainImpl.prototype.$updateGroupLabel = function (sourceControlHandle, groupHandle, label) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, provider;
            return __generator(this, function (_a) {
                repository = this.scmRepositoryMap.get(sourceControlHandle);
                if (repository) {
                    provider = repository.provider;
                    provider.updateGroupLabel(groupHandle, label);
                }
                return [2 /*return*/];
            });
        });
    };
    ScmMainImpl.prototype.$updateResourceState = function (sourceControlHandle, groupHandle, resources) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, provider;
            return __generator(this, function (_a) {
                repository = this.scmRepositoryMap.get(sourceControlHandle);
                if (repository) {
                    provider = repository.provider;
                    provider.updateGroupResourceStates(sourceControlHandle, groupHandle, resources);
                }
                return [2 /*return*/];
            });
        });
    };
    return ScmMainImpl;
}());
exports.ScmMainImpl = ScmMainImpl;
var PluginScmProvider = /** @class */ (function () {
    function PluginScmProvider(proxy, handle, id, label, rootUri, colors) {
        this.proxy = proxy;
        this.handle = handle;
        this.id = id;
        this.label = label;
        this.rootUri = rootUri;
        this.colors = colors;
        this.onDidChangeEmitter = new event_1.Emitter();
        this.onDidChangeCommitTemplateEmitter = new event_1.Emitter();
        this.onDidChangeStatusBarCommandsEmitter = new event_1.Emitter();
        this.features = {};
        this.groupsMap = new Map();
        this.disposableCollection = new disposable_1.DisposableCollection();
        this.disposableCollection.push(this.onDidChangeEmitter);
        this.disposableCollection.push(this.onDidChangeCommitTemplateEmitter);
        this.disposableCollection.push(this.onDidChangeStatusBarCommandsEmitter);
    }
    PluginScmProvider.prototype.fireDidChange = function () {
        this.onDidChangeEmitter.fire(undefined);
    };
    Object.defineProperty(PluginScmProvider.prototype, "groups", {
        get: function () {
            return Array.from(this.groupsMap.values());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PluginScmProvider.prototype, "commitTemplate", {
        get: function () {
            return this.features.commitTemplate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PluginScmProvider.prototype, "acceptInputCommand", {
        get: function () {
            var command = this.features.acceptInputCommand;
            if (command) {
                var scmCommand = command;
                scmCommand.command = command.id;
                return command;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PluginScmProvider.prototype, "statusBarCommands", {
        get: function () {
            var commands = this.features.statusBarCommands;
            if (commands) {
                return commands.map(function (command) {
                    var scmCommand = command;
                    scmCommand.command = command.id;
                    return scmCommand;
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PluginScmProvider.prototype, "count", {
        get: function () {
            return this.features.count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PluginScmProvider.prototype, "onDidChangeCommitTemplate", {
        get: function () {
            return this.onDidChangeCommitTemplateEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PluginScmProvider.prototype, "onDidChangeStatusBarCommands", {
        get: function () {
            return this.onDidChangeStatusBarCommandsEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PluginScmProvider.prototype, "onDidChange", {
        get: function () {
            return this.onDidChangeEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    PluginScmProvider.prototype.dispose = function () {
        this.disposableCollection.dispose();
    };
    PluginScmProvider.prototype.updateSourceControl = function (features) {
        if (features.acceptInputCommand) {
            this.features.acceptInputCommand = features.acceptInputCommand;
        }
        if (features.commitTemplate) {
            this.features.commitTemplate = features.commitTemplate;
        }
        if (features.count) {
            this.features.count = features.count;
        }
        if (features.hasQuickDiffProvider !== undefined) {
            this.features.hasQuickDiffProvider = features.hasQuickDiffProvider;
        }
        if (features.statusBarCommands) {
            this.features.statusBarCommands = features.statusBarCommands;
        }
        this.fireDidChange();
        if (features.commitTemplate) {
            this.onDidChangeCommitTemplateEmitter.fire(features.commitTemplate);
        }
        if (features.statusBarCommands) {
            this.onDidChangeStatusBarCommandsEmitter.fire(features.statusBarCommands);
        }
    };
    PluginScmProvider.prototype.getOriginalResource = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.features.hasQuickDiffProvider) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.proxy.$provideOriginalResource(this.handle, uri.toString(), cancellation_1.CancellationToken.None)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            return [2 /*return*/, new uri_1.default(result.path)];
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    PluginScmProvider.prototype.registerGroup = function (groupHandle, id, label) {
        var group = new PluginScmResourceGroup(groupHandle, this, { hideWhenEmpty: undefined }, label, id);
        this.groupsMap.set(groupHandle, group);
        this.fireDidChange();
    };
    PluginScmProvider.prototype.unregisterGroup = function (groupHandle) {
        var group = this.groupsMap.get(groupHandle);
        if (group) {
            group.dispose();
            this.groupsMap.delete(groupHandle);
            this.fireDidChange();
        }
    };
    PluginScmProvider.prototype.updateGroup = function (groupHandle, features) {
        var group = this.groupsMap.get(groupHandle);
        if (group) {
            group.updateGroup(features);
            this.fireDidChange();
        }
    };
    PluginScmProvider.prototype.updateGroupLabel = function (groupHandle, label) {
        var group = this.groupsMap.get(groupHandle);
        if (group) {
            group.updateGroupLabel(label);
            this.fireDidChange();
        }
    };
    PluginScmProvider.prototype.updateGroupResourceStates = function (sourceControlHandle, groupHandle, resources) {
        return __awaiter(this, void 0, void 0, function () {
            var group, _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        group = this.groupsMap.get(groupHandle);
                        if (!group) return [3 /*break*/, 2];
                        _b = (_a = group).updateResources;
                        return [4 /*yield*/, Promise.all(resources.map(function (resource) { return __awaiter(_this, void 0, void 0, function () {
                                var resourceUri, scmDecorations, decorations, colorVariable;
                                return __generator(this, function (_a) {
                                    resourceUri = new uri_1.default(resource.resourceUri);
                                    decorations = resource.decorations;
                                    if (decorations) {
                                        colorVariable = resource.colorId && this.colors.toCssVariableName(resource.colorId);
                                        scmDecorations = {
                                            tooltip: decorations.tooltip,
                                            letter: resource.letter,
                                            color: colorVariable && "var(" + colorVariable + ")"
                                        };
                                    }
                                    return [2 /*return*/, new PluginScmResource(this.proxy, resource.handle, group, resourceUri, group, scmDecorations)];
                                });
                            }); }))];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        this.fireDidChange();
                        _c.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    return PluginScmProvider;
}());
exports.PluginScmProvider = PluginScmProvider;
var PluginScmResourceGroup = /** @class */ (function () {
    function PluginScmResourceGroup(handle, provider, features, label, id) {
        this.handle = handle;
        this.provider = provider;
        this.features = features;
        this.label = label;
        this.id = id;
        this._resources = [];
    }
    Object.defineProperty(PluginScmResourceGroup.prototype, "resources", {
        get: function () {
            return this._resources;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PluginScmResourceGroup.prototype, "hideWhenEmpty", {
        get: function () {
            return this.features.hideWhenEmpty;
        },
        enumerable: true,
        configurable: true
    });
    PluginScmResourceGroup.prototype.updateGroup = function (features) {
        this.features = features;
    };
    PluginScmResourceGroup.prototype.updateGroupLabel = function (label) {
        this.label = label;
    };
    PluginScmResourceGroup.prototype.updateResources = function (resources) {
        this._resources = resources;
    };
    PluginScmResourceGroup.prototype.dispose = function () { };
    return PluginScmResourceGroup;
}());
exports.PluginScmResourceGroup = PluginScmResourceGroup;
var PluginScmResource = /** @class */ (function () {
    function PluginScmResource(proxy, handle, group, sourceUri, resourceGroup, decorations) {
        this.proxy = proxy;
        this.handle = handle;
        this.group = group;
        this.sourceUri = sourceUri;
        this.resourceGroup = resourceGroup;
        this.decorations = decorations;
    }
    PluginScmResource.prototype.open = function () {
        return this.proxy.$executeResourceCommand(this.group.provider.handle, this.group.handle, this.handle);
    };
    return PluginScmResource;
}());
exports.PluginScmResource = PluginScmResource;


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/main/browser/view/plugin-view-widget.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/main/browser/view/plugin-view-widget.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var widgets_1 = __webpack_require__(/*! @phosphor/widgets */ "../node_modules/@phosphor/widgets/lib/index.js");
var menu_1 = __webpack_require__(/*! @theia/core/lib/common/menu */ "../node_modules/@theia/core/lib/common/menu.js");
var command_1 = __webpack_require__(/*! @theia/core/lib/common/command */ "../node_modules/@theia/core/lib/common/command.js");
var view_context_key_service_1 = __webpack_require__(/*! ./view-context-key-service */ "../node_modules/@theia/plugin-ext/lib/main/browser/view/view-context-key-service.js");
var tree_view_widget_1 = __webpack_require__(/*! ./tree-view-widget */ "../node_modules/@theia/plugin-ext/lib/main/browser/view/tree-view-widget.js");
var PluginViewWidgetIdentifier = /** @class */ (function () {
    function PluginViewWidgetIdentifier() {
    }
    PluginViewWidgetIdentifier = __decorate([
        inversify_1.injectable()
    ], PluginViewWidgetIdentifier);
    return PluginViewWidgetIdentifier;
}());
exports.PluginViewWidgetIdentifier = PluginViewWidgetIdentifier;
var PluginViewWidget = /** @class */ (function (_super) {
    __extends(PluginViewWidget, _super);
    function PluginViewWidget() {
        var _this = _super.call(this) || this;
        _this._suppressUpdateViewVisibility = false;
        _this.updatingViewVisibility = false;
        _this.node.tabIndex = -1;
        _this.node.style.height = '100%';
        return _this;
    }
    PluginViewWidget.prototype.init = function () {
        this.id = this.options.id;
    };
    PluginViewWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        var widget = this.widgets[0];
        if (widget) {
            widget.activate();
            this.updateWidgetMessage();
        }
        else {
            this.node.focus();
        }
    };
    PluginViewWidget.prototype.storeState = function () {
        return {
            label: this.title.label,
            message: this.message,
            widgets: this.widgets
        };
    };
    PluginViewWidget.prototype.restoreState = function (state) {
        var e_1, _a;
        this.title.label = state.label;
        this.message = state.message;
        try {
            for (var _b = __values(state.widgets), _c = _b.next(); !_c.done; _c = _b.next()) {
                var widget = _c.value;
                this.addWidget(widget);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Object.defineProperty(PluginViewWidget.prototype, "suppressUpdateViewVisibility", {
        set: function (suppressUpdateViewVisibility) {
            this._suppressUpdateViewVisibility = !this.updatingViewVisibility && suppressUpdateViewVisibility;
        },
        enumerable: true,
        configurable: true
    });
    PluginViewWidget.prototype.updateViewVisibility = function (cb) {
        if (this._suppressUpdateViewVisibility) {
            return;
        }
        try {
            this.updatingViewVisibility = true;
            cb();
        }
        finally {
            this.updatingViewVisibility = false;
        }
    };
    Object.defineProperty(PluginViewWidget.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (message) {
            this._message = message;
            this.updateWidgetMessage();
        },
        enumerable: true,
        configurable: true
    });
    PluginViewWidget.prototype.updateWidgetMessage = function () {
        var widget = this.widgets[0];
        if (widget) {
            if (widget instanceof tree_view_widget_1.TreeViewWidget) {
                widget.message = this._message;
            }
        }
    };
    PluginViewWidget.prototype.addWidget = function (widget) {
        _super.prototype.addWidget.call(this, widget);
        this.updateWidgetMessage();
    };
    PluginViewWidget.prototype.insertWidget = function (index, widget) {
        _super.prototype.insertWidget.call(this, index, widget);
        this.updateWidgetMessage();
    };
    __decorate([
        inversify_1.inject(menu_1.MenuModelRegistry),
        __metadata("design:type", menu_1.MenuModelRegistry)
    ], PluginViewWidget.prototype, "menus", void 0);
    __decorate([
        inversify_1.inject(command_1.CommandRegistry),
        __metadata("design:type", command_1.CommandRegistry)
    ], PluginViewWidget.prototype, "commands", void 0);
    __decorate([
        inversify_1.inject(view_context_key_service_1.ViewContextKeyService),
        __metadata("design:type", view_context_key_service_1.ViewContextKeyService)
    ], PluginViewWidget.prototype, "contextKeys", void 0);
    __decorate([
        inversify_1.inject(PluginViewWidgetIdentifier),
        __metadata("design:type", PluginViewWidgetIdentifier)
    ], PluginViewWidget.prototype, "options", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PluginViewWidget.prototype, "init", null);
    PluginViewWidget = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], PluginViewWidget);
    return PluginViewWidget;
}(widgets_1.Panel));
exports.PluginViewWidget = PluginViewWidget;


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/main/browser/view/tree-view-widget.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/main/browser/view/tree-view-widget.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018-2019 Red Hat, Inc. and others.
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vscode_uri_1 = __webpack_require__(/*! vscode-uri */ "../node_modules/vscode-uri/lib/esm/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var plugin_api_rpc_1 = __webpack_require__(/*! ../../../common/plugin-api-rpc */ "../node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc.js");
var menu_1 = __webpack_require__(/*! @theia/core/lib/common/menu */ "../node_modules/@theia/core/lib/common/menu.js");
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var plugin_shared_style_1 = __webpack_require__(/*! ../plugin-shared-style */ "../node_modules/@theia/plugin-ext/lib/main/browser/plugin-shared-style.js");
var view_context_key_service_1 = __webpack_require__(/*! ./view-context-key-service */ "../node_modules/@theia/plugin-ext/lib/main/browser/view/view-context-key-service.js");
var widget_1 = __webpack_require__(/*! @theia/core/lib/browser/widgets/widget */ "../node_modules/@theia/core/lib/browser/widgets/widget.js");
var command_1 = __webpack_require__(/*! @theia/core/lib/common/command */ "../node_modules/@theia/core/lib/common/command.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../node_modules/@theia/core/lib/common/event.js");
var message_service_1 = __webpack_require__(/*! @theia/core/lib/common/message-service */ "../node_modules/@theia/core/lib/common/message-service.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
exports.TREE_NODE_HYPERLINK = 'theia-TreeNodeHyperlink';
exports.VIEW_ITEM_CONTEXT_MENU = ['view-item-context-menu'];
exports.VIEW_ITEM_INLINE_MENU = ['view-item-inline-menu'];
var TreeViewNode;
(function (TreeViewNode) {
    function is(arg) {
        return !!arg && browser_1.SelectableTreeNode.is(arg) && !browser_1.ExpandableTreeNode.is(arg) && !browser_1.CompositeTreeNode.is(arg);
    }
    TreeViewNode.is = is;
})(TreeViewNode = exports.TreeViewNode || (exports.TreeViewNode = {}));
var CompositeTreeViewNode;
(function (CompositeTreeViewNode) {
    function is(arg) {
        return !!arg && browser_1.SelectableTreeNode.is(arg) && browser_1.ExpandableTreeNode.is(arg) && browser_1.CompositeTreeNode.is(arg);
    }
    CompositeTreeViewNode.is = is;
})(CompositeTreeViewNode = exports.CompositeTreeViewNode || (exports.CompositeTreeViewNode = {}));
var TreeViewWidgetIdentifier = /** @class */ (function () {
    function TreeViewWidgetIdentifier() {
    }
    TreeViewWidgetIdentifier = __decorate([
        inversify_1.injectable()
    ], TreeViewWidgetIdentifier);
    return TreeViewWidgetIdentifier;
}());
exports.TreeViewWidgetIdentifier = TreeViewWidgetIdentifier;
var PluginTree = /** @class */ (function (_super) {
    __extends(PluginTree, _super);
    function PluginTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PluginTree.prototype, "proxy", {
        set: function (proxy) {
            this._proxy = proxy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PluginTree.prototype, "viewInfo", {
        set: function (viewInfo) {
            this._viewInfo = viewInfo;
        },
        enumerable: true,
        configurable: true
    });
    PluginTree.prototype.resolveChildren = function (parent) {
        return __awaiter(this, void 0, void 0, function () {
            var children;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._proxy) {
                            return [2 /*return*/, _super.prototype.resolveChildren.call(this, parent)];
                        }
                        return [4 /*yield*/, this.fetchChildren(this._proxy, parent)];
                    case 1:
                        children = _a.sent();
                        return [2 /*return*/, children.map(function (value) { return _this.createTreeNode(value, parent); })];
                }
            });
        });
    };
    PluginTree.prototype.fetchChildren = function (proxy, parent) {
        return __awaiter(this, void 0, void 0, function () {
            var children, e_1, label;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, proxy.$getChildren(this.identifier.id, parent.id)];
                    case 1:
                        children = _a.sent();
                        return [2 /*return*/, children || []];
                    case 2:
                        e_1 = _a.sent();
                        if (e_1) {
                            console.error("Failed to fetch children for '" + this.identifier.id + "'", e_1);
                            label = this._viewInfo ? this._viewInfo.name : this.identifier.id;
                            this.notification.error(label + ": " + e_1.message);
                        }
                        return [2 /*return*/, []];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PluginTree.prototype.createTreeNode = function (item, parent) {
        var icon = this.toIconClass(item);
        var resourceUri = item.resourceUri && vscode_uri_1.default.revive(item.resourceUri).toString();
        var themeIconId = item.themeIconId ? item.themeIconId : item.collapsibleState !== plugin_api_rpc_1.TreeViewItemCollapsibleState.None ? 'folder' : 'file';
        var update = {
            name: item.label,
            icon: icon,
            description: item.description,
            themeIconId: themeIconId,
            resourceUri: resourceUri,
            tooltip: item.tooltip,
            contextValue: item.contextValue
        };
        var node = this.getNode(item.id);
        if (item.collapsibleState !== undefined && item.collapsibleState !== plugin_api_rpc_1.TreeViewItemCollapsibleState.None) {
            if (CompositeTreeViewNode.is(node)) {
                return Object.assign(node, update);
            }
            return Object.assign({
                id: item.id,
                parent: parent,
                visible: true,
                selected: false,
                expanded: plugin_api_rpc_1.TreeViewItemCollapsibleState.Expanded === item.collapsibleState,
                children: []
            }, update);
        }
        if (TreeViewNode.is(node)) {
            return Object.assign(node, update, { command: item.command });
        }
        return Object.assign({
            id: item.id,
            parent: parent,
            visible: true,
            selected: false,
            command: item.command
        }, update);
    };
    PluginTree.prototype.toIconClass = function (item) {
        if (item.icon) {
            return 'fa ' + item.icon;
        }
        if (item.iconUrl) {
            var reference = this.sharedStyle.toIconClass(item.iconUrl);
            this.toDispose.push(reference);
            return reference.object.iconClass;
        }
        return undefined;
    };
    __decorate([
        inversify_1.inject(plugin_shared_style_1.PluginSharedStyle),
        __metadata("design:type", plugin_shared_style_1.PluginSharedStyle)
    ], PluginTree.prototype, "sharedStyle", void 0);
    __decorate([
        inversify_1.inject(TreeViewWidgetIdentifier),
        __metadata("design:type", TreeViewWidgetIdentifier)
    ], PluginTree.prototype, "identifier", void 0);
    __decorate([
        inversify_1.inject(message_service_1.MessageService),
        __metadata("design:type", message_service_1.MessageService)
    ], PluginTree.prototype, "notification", void 0);
    PluginTree = __decorate([
        inversify_1.injectable()
    ], PluginTree);
    return PluginTree;
}(browser_1.TreeImpl));
exports.PluginTree = PluginTree;
var PluginTreeModel = /** @class */ (function (_super) {
    __extends(PluginTreeModel, _super);
    function PluginTreeModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PluginTreeModel.prototype, "proxy", {
        set: function (proxy) {
            this.tree.proxy = proxy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PluginTreeModel.prototype, "viewInfo", {
        set: function (viewInfo) {
            this.tree.viewInfo = viewInfo;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        inversify_1.inject(PluginTree),
        __metadata("design:type", PluginTree)
    ], PluginTreeModel.prototype, "tree", void 0);
    PluginTreeModel = __decorate([
        inversify_1.injectable()
    ], PluginTreeModel);
    return PluginTreeModel;
}(browser_1.TreeModelImpl));
exports.PluginTreeModel = PluginTreeModel;
var TreeViewWidget = /** @class */ (function (_super) {
    __extends(TreeViewWidget, _super);
    function TreeViewWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._contextSelection = false;
        _this.onDidChangeVisibilityEmitter = new event_1.Emitter();
        _this.onDidChangeVisibility = _this.onDidChangeVisibilityEmitter.event;
        return _this;
    }
    TreeViewWidget.prototype.init = function () {
        _super.prototype.init.call(this);
        this.id = this.identifier.id;
        this.addClass('theia-tree-view');
        this.node.style.height = '100%';
        this.toDispose.push(this.onDidChangeVisibilityEmitter);
    };
    TreeViewWidget.prototype.renderIcon = function (node, props) {
        var icon = this.toNodeIcon(node);
        if (icon) {
            return React.createElement("div", { className: icon + ' theia-tree-view-icon' });
        }
        return undefined;
    };
    TreeViewWidget.prototype.renderCaption = function (node, props) {
        var classes = [browser_1.TREE_NODE_SEGMENT_CLASS];
        if (!this.hasTrailingSuffixes(node)) {
            classes.push(browser_1.TREE_NODE_SEGMENT_GROW_CLASS);
        }
        var className = classes.join(' ');
        var title = node.tooltip ||
            (node.resourceUri && this.labelProvider.getLongName(new uri_1.default(node.resourceUri)))
            || this.toNodeName(node);
        var attrs = this.decorateCaption(node, {
            className: className, id: node.id,
            title: title
        });
        var children = this.getCaption(node);
        return React.createElement.apply(React, __spread(['div', attrs], children));
    };
    TreeViewWidget.prototype.getCaption = function (node) {
        var nodes = [];
        var name = this.toNodeName(node) || '';
        var description = this.toNodeDescription(node);
        var work = name;
        var regex = /\[([^\[]+)\]\(([^\)]+)\)/g;
        var matchResult = work.match(regex);
        if (matchResult) {
            matchResult.forEach(function (match, index) {
                nodes.push(React.createElement("span", { key: "m" + index }, work.substring(0, work.indexOf(match))));
                var execResult = regex.exec(name);
                nodes.push(React.createElement("a", { key: "l" + index, href: execResult[2], target: '_blank', className: exports.TREE_NODE_HYPERLINK, onClick: function (e) { return e.stopPropagation(); } }, execResult[1]));
                work = work.substring(work.indexOf(match) + match.length);
            });
        }
        return React.createElement("div", { className: 'noWrapInfo' },
            nodes,
            work && React.createElement("span", null, work),
            description && React.createElement("span", { className: 'theia-tree-view-description' }, description));
    };
    TreeViewWidget.prototype.renderTailDecorations = function (node, props) {
        var _this = this;
        if (this.model.selectedNodes.every(function (selected) { return selected.id !== node.id; }) && node.id !== this.hoverNodeId) {
            return false;
        }
        return this.contextKeys.with({ view: this.id, viewItem: node.contextValue }, function () {
            var menu = _this.menus.getMenu(exports.VIEW_ITEM_INLINE_MENU);
            var arg = _this.toTreeViewSelection(node);
            return React.createElement(React.Fragment, null, menu.children.map(function (item, index) { return item instanceof menu_1.ActionMenuNode && _this.renderInlineCommand(item, index, arg); }));
        });
    };
    TreeViewWidget.prototype.toTreeViewSelection = function (node) {
        return { treeViewId: this.id, treeItemId: node.id };
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    TreeViewWidget.prototype.renderInlineCommand = function (node, index, arg) {
        var _this = this;
        var icon = node.icon;
        if (!icon || !this.commands.isVisible(node.action.commandId, arg) || !this.contextKeys.match(node.action.when)) {
            return false;
        }
        var className = [browser_1.TREE_NODE_SEGMENT_CLASS, browser_1.TREE_NODE_TAIL_CLASS, icon, 'theia-tree-view-inline-action'].join(' ');
        return React.createElement("div", { key: index, className: className, title: node.label, onClick: function (e) {
                e.stopPropagation();
                _this.commands.executeCommand(node.action.commandId, arg);
            } });
    };
    TreeViewWidget.prototype.setHoverNodeId = function (hoverNodeId) {
        this.hoverNodeId = hoverNodeId;
        this.update();
    };
    TreeViewWidget.prototype.createNodeAttributes = function (node, props) {
        var _this = this;
        return __assign({}, _super.prototype.createNodeAttributes.call(this, node, props), { onMouseOver: function () { return _this.setHoverNodeId(node.id); }, onMouseOut: function () { return _this.setHoverNodeId(undefined); } });
    };
    TreeViewWidget.prototype.toContextMenuArgs = function (node) {
        return [this.toTreeViewSelection(node)];
    };
    TreeViewWidget.prototype.setFlag = function (flag) {
        _super.prototype.setFlag.call(this, flag);
        if (flag === widget_1.Widget.Flag.IsVisible) {
            this.onDidChangeVisibilityEmitter.fire(this.isVisible);
        }
    };
    TreeViewWidget.prototype.clearFlag = function (flag) {
        _super.prototype.clearFlag.call(this, flag);
        if (flag === widget_1.Widget.Flag.IsVisible) {
            this.onDidChangeVisibilityEmitter.fire(this.isVisible);
        }
    };
    TreeViewWidget.prototype.handleEnter = function (event) {
        _super.prototype.handleEnter.call(this, event);
        this.tryExecuteCommand();
    };
    TreeViewWidget.prototype.handleClickEvent = function (node, event) {
        _super.prototype.handleClickEvent.call(this, node, event);
        this.tryExecuteCommand(node);
    };
    // execute TreeItem.command if present
    TreeViewWidget.prototype.tryExecuteCommand = function (node) {
        var e_2, _a, _b;
        var treeNodes = (node ? [node] : this.model.selectedNodes);
        try {
            for (var treeNodes_1 = __values(treeNodes), treeNodes_1_1 = treeNodes_1.next(); !treeNodes_1_1.done; treeNodes_1_1 = treeNodes_1.next()) {
                var treeNode = treeNodes_1_1.value;
                if (treeNode && treeNode.command) {
                    (_b = this.commands).executeCommand.apply(_b, __spread([treeNode.command.id], (treeNode.command.arguments || [])));
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (treeNodes_1_1 && !treeNodes_1_1.done && (_a = treeNodes_1.return)) _a.call(treeNodes_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    Object.defineProperty(TreeViewWidget.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (message) {
            this._message = message;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    TreeViewWidget.prototype.render = function () {
        return React.createElement('div', this.createContainerAttributes(), this.renderSearchInfo(), this.renderTree(this.model));
    };
    TreeViewWidget.prototype.renderSearchInfo = function () {
        if (this._message) {
            return React.createElement("div", { className: 'theia-TreeViewInfo' }, this._message);
        }
        return undefined;
    };
    __decorate([
        inversify_1.inject(menu_1.MenuModelRegistry),
        __metadata("design:type", menu_1.MenuModelRegistry)
    ], TreeViewWidget.prototype, "menus", void 0);
    __decorate([
        inversify_1.inject(command_1.CommandRegistry),
        __metadata("design:type", command_1.CommandRegistry)
    ], TreeViewWidget.prototype, "commands", void 0);
    __decorate([
        inversify_1.inject(view_context_key_service_1.ViewContextKeyService),
        __metadata("design:type", view_context_key_service_1.ViewContextKeyService)
    ], TreeViewWidget.prototype, "contextKeys", void 0);
    __decorate([
        inversify_1.inject(TreeViewWidgetIdentifier),
        __metadata("design:type", TreeViewWidgetIdentifier)
    ], TreeViewWidget.prototype, "identifier", void 0);
    __decorate([
        inversify_1.inject(PluginTreeModel),
        __metadata("design:type", PluginTreeModel)
    ], TreeViewWidget.prototype, "model", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeViewWidget.prototype, "init", null);
    TreeViewWidget = __decorate([
        inversify_1.injectable()
    ], TreeViewWidget);
    return TreeViewWidget;
}(browser_1.TreeWidget));
exports.TreeViewWidget = TreeViewWidget;


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/main/browser/view/view-context-key-service.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/main/browser/view/view-context-key-service.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var context_key_service_1 = __webpack_require__(/*! @theia/core/lib/browser/context-key-service */ "../node_modules/@theia/core/lib/browser/context-key-service.js");
var ViewContextKeyService = /** @class */ (function () {
    function ViewContextKeyService() {
    }
    Object.defineProperty(ViewContextKeyService.prototype, "view", {
        get: function () {
            return this._view;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewContextKeyService.prototype, "viewItem", {
        get: function () {
            return this._viewItem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewContextKeyService.prototype, "activeViewlet", {
        /**
         * Viewlet is a tab in the left area in VS Code. Active means visible in this context.
         *
         * In VS Code there can be only one visible viewlet at any time.
         * It is not true for Theia, since views can be layed-out again to different areas.
         * So only last visible view will be an active viewlet.
         */
        get: function () {
            return this._activeViewlet;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewContextKeyService.prototype, "activePanel", {
        /**
         * Panel is a tab in the bottom area in VS Code. Active means visible in this context.
         *
         * In VS Code there can be only one visible panel at any time.
         * It is not true for Theia, since views can be layed-out again to different areas.
         * So only last visible view will be an active panel.
         */
        get: function () {
            return this._activePanel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewContextKeyService.prototype, "focusedView", {
        get: function () {
            return this._focusedView;
        },
        enumerable: true,
        configurable: true
    });
    ViewContextKeyService.prototype.init = function () {
        this._view = this.contextKeyService.createKey('view', '');
        this._viewItem = this.contextKeyService.createKey('viewItem', '');
        this._activeViewlet = this.contextKeyService.createKey('activeViewlet', '');
        this._activePanel = this.contextKeyService.createKey('activePanel', '');
        this._focusedView = this.contextKeyService.createKey('focusedView', '');
    };
    ViewContextKeyService.prototype.match = function (expression) {
        return !expression || this.contextKeyService.match(expression);
    };
    ViewContextKeyService.prototype.with = function (input, cb) {
        var view = this.view.get();
        var viewItem = this.viewItem.get();
        this.view.set(input.view);
        this.viewItem.set(input.viewItem);
        try {
            return cb();
        }
        finally {
            this.view.set(view);
            this.viewItem.set(viewItem);
        }
    };
    __decorate([
        inversify_1.inject(context_key_service_1.ContextKeyService),
        __metadata("design:type", context_key_service_1.ContextKeyService)
    ], ViewContextKeyService.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ViewContextKeyService.prototype, "init", null);
    ViewContextKeyService = __decorate([
        inversify_1.injectable()
    ], ViewContextKeyService);
    return ViewContextKeyService;
}());
exports.ViewContextKeyService = ViewContextKeyService;


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/main/browser/webview/webview-environment.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/main/browser/webview/webview-environment.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var endpoint_1 = __webpack_require__(/*! @theia/core/lib/browser/endpoint */ "../node_modules/@theia/core/lib/browser/endpoint.js");
var promise_util_1 = __webpack_require__(/*! @theia/core/lib/common/promise-util */ "../node_modules/@theia/core/lib/common/promise-util.js");
var env_variables_1 = __webpack_require__(/*! @theia/core/lib/common/env-variables */ "../node_modules/@theia/core/lib/common/env-variables/index.js");
var webview_protocol_1 = __webpack_require__(/*! ../../common/webview-protocol */ "../node_modules/@theia/plugin-ext/lib/main/common/webview-protocol.js");
var WebviewEnvironment = /** @class */ (function () {
    function WebviewEnvironment() {
        this.externalEndpointHost = new promise_util_1.Deferred();
    }
    WebviewEnvironment.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var variable, value, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.environments.getValue(webview_protocol_1.WebviewExternalEndpoint.pattern)];
                    case 1:
                        variable = _a.sent();
                        value = variable && variable.value || webview_protocol_1.WebviewExternalEndpoint.defaultPattern;
                        this.externalEndpointHost.resolve(value.replace('{{hostname}}', window.location.host || 'localhost'));
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        this.externalEndpointHost.reject(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    WebviewEnvironment.prototype.externalEndpointUrl = function () {
        return __awaiter(this, void 0, void 0, function () {
            var host;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.externalEndpointHost.promise];
                    case 1:
                        host = _a.sent();
                        return [2 /*return*/, new endpoint_1.Endpoint({
                                host: host,
                                path: '/webview'
                            }).getRestUrl()];
                }
            });
        });
    };
    WebviewEnvironment.prototype.externalEndpoint = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.externalEndpointUrl()];
                    case 1: return [2 /*return*/, (_a.sent()).toString(true)];
                }
            });
        });
    };
    WebviewEnvironment.prototype.resourceRoot = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.externalEndpointUrl()];
                    case 1: return [2 /*return*/, (_a.sent()).resolve('theia-resource/{{resource}}').toString(true)];
                }
            });
        });
    };
    WebviewEnvironment.prototype.cspSource = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.externalEndpointUrl()];
                    case 1: return [2 /*return*/, (_a.sent()).withPath('').withQuery('').withFragment('').toString(true).replace('{{uuid}}', '*')];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(env_variables_1.EnvVariablesServer),
        __metadata("design:type", Object)
    ], WebviewEnvironment.prototype, "environments", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], WebviewEnvironment.prototype, "init", null);
    WebviewEnvironment = __decorate([
        inversify_1.injectable()
    ], WebviewEnvironment);
    return WebviewEnvironment;
}());
exports.WebviewEnvironment = WebviewEnvironment;


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/main/browser/webview/webview-preferences.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/main/browser/webview/webview-preferences.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
var preferences_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences */ "../node_modules/@theia/core/lib/browser/preferences/index.js");
exports.WebviewConfigSchema = {
    'type': 'object',
    'properties': {
        'webview.trace': {
            'type': 'string',
            'enum': ['off', 'on', 'verbose'],
            'description': 'Controls communication tracing with webviews.',
            'default': 'off'
        }
    }
};
exports.WebviewPreferences = Symbol('WebviewPreferences');
function createWebviewPreferences(preferences) {
    return preferences_1.createPreferenceProxy(preferences, exports.WebviewConfigSchema);
}
exports.createWebviewPreferences = createWebviewPreferences;
function bindWebviewPreferences(bind) {
    bind(exports.WebviewPreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(preferences_1.PreferenceService);
        return createWebviewPreferences(preferences);
    });
    bind(preferences_1.PreferenceContribution).toConstantValue({ schema: exports.WebviewConfigSchema });
}
exports.bindWebviewPreferences = bindWebviewPreferences;


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/main/browser/webview/webview-resource-cache.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/main/browser/webview/webview-resource-cache.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var promise_util_1 = __webpack_require__(/*! @theia/core/lib/common/promise-util */ "../node_modules/@theia/core/lib/common/promise-util.js");
/**
 * Browser based cache of webview resources across all instances.
 */
var WebviewResourceCache = /** @class */ (function () {
    function WebviewResourceCache() {
        this.cache = new promise_util_1.Deferred();
        this.resolveCache();
    }
    WebviewResourceCache.prototype.resolveCache = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, e_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        _b = (_a = this.cache).resolve;
                        return [4 /*yield*/, caches.open('webview:v1')];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _c.sent();
                        console.error('Failed to enable webview caching: ', e_1);
                        this.cache.resolve(undefined);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    WebviewResourceCache.prototype.match = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var cache, response;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cache.promise];
                    case 1:
                        cache = _a.sent();
                        if (!cache) {
                            return [2 /*return*/, undefined];
                        }
                        return [4 /*yield*/, cache.match(url)];
                    case 2:
                        response = _a.sent();
                        if (!response) {
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, {
                                eTag: response.headers.get('ETag') || undefined,
                                body: function () { return __awaiter(_this, void 0, void 0, function () {
                                    var buffer;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, response.arrayBuffer()];
                                            case 1:
                                                buffer = _a.sent();
                                                return [2 /*return*/, new Uint8Array(buffer)];
                                        }
                                    });
                                }); }
                            }];
                }
            });
        });
    };
    WebviewResourceCache.prototype.delete = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var cache;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cache.promise];
                    case 1:
                        cache = _a.sent();
                        if (!cache) {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, cache.delete(url)];
                }
            });
        });
    };
    WebviewResourceCache.prototype.put = function (url, response) {
        return __awaiter(this, void 0, void 0, function () {
            var cache, body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!response.eTag) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.cache.promise];
                    case 1:
                        cache = _a.sent();
                        if (!cache) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, response.body()];
                    case 2:
                        body = _a.sent();
                        return [4 /*yield*/, cache.put(url, new Response(body, {
                                status: 200,
                                headers: { 'ETag': response.eTag }
                            }))];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WebviewResourceCache = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], WebviewResourceCache);
    return WebviewResourceCache;
}());
exports.WebviewResourceCache = WebviewResourceCache;


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/main/browser/webview/webview-theme-data-provider.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/main/browser/webview/webview-theme-data-provider.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// copied and modified from https://github.com/microsoft/vscode/blob/ba40bd16433d5a817bfae15f3b4350e18f144af4/src/vs/workbench/contrib/webview/common/themeing.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../node_modules/@theia/core/lib/common/event.js");
var editor_preferences_1 = __webpack_require__(/*! @theia/editor/lib/browser/editor-preferences */ "../node_modules/@theia/editor/lib/browser/editor-preferences.js");
var theming_1 = __webpack_require__(/*! @theia/core/lib/browser/theming */ "../node_modules/@theia/core/lib/browser/theming.js");
var color_registry_1 = __webpack_require__(/*! @theia/core/lib/browser/color-registry */ "../node_modules/@theia/core/lib/browser/color-registry.js");
var color_application_contribution_1 = __webpack_require__(/*! @theia/core/lib/browser/color-application-contribution */ "../node_modules/@theia/core/lib/browser/color-application-contribution.js");
var WebviewThemeDataProvider = /** @class */ (function () {
    function WebviewThemeDataProvider() {
        this.onDidChangeThemeDataEmitter = new event_1.Emitter();
        this.onDidChangeThemeData = this.onDidChangeThemeDataEmitter.event;
        this.editorStyles = new Map([
            ['editor.fontFamily', 'editor-font-family'],
            ['editor.fontWeight', 'editor-font-weight'],
            ['editor.fontSize', 'editor-font-size']
        ]);
    }
    WebviewThemeDataProvider.prototype.init = function () {
        var _this = this;
        this.colorContribution.onDidChange(function () { return _this.reset(); });
        this.editorPreferences.onPreferenceChanged(function (e) {
            if (_this.editorStyles.has(e.preferenceName)) {
                _this.reset();
            }
        });
    };
    WebviewThemeDataProvider.prototype.reset = function () {
        if (this.themeData) {
            this.themeData = undefined;
            this.onDidChangeThemeDataEmitter.fire(undefined);
        }
    };
    WebviewThemeDataProvider.prototype.getThemeData = function () {
        if (!this.themeData) {
            this.themeData = this.computeThemeData();
        }
        return this.themeData;
    };
    WebviewThemeDataProvider.prototype.computeThemeData = function () {
        var e_1, _a;
        var _this = this;
        var styles = {};
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var addStyle = function (id, rawValue) {
            if (rawValue) {
                var value = typeof rawValue === 'number' || typeof rawValue === 'string' ? rawValue : String(rawValue);
                styles[_this.colors.toCssVariableName(id).substr(2)] = value;
                styles[_this.colors.toCssVariableName(id, 'vscode').substr(2)] = value;
            }
        };
        addStyle('font-family', '-apple-system, BlinkMacSystemFont, "Segoe WPC", "Segoe UI", "Ubuntu", "Droid Sans", sans-serif');
        addStyle('font-weight', 'normal');
        addStyle('font-size', '13px');
        this.editorStyles.forEach(function (value, key) { return addStyle(value, _this.editorPreferences[key]); });
        try {
            for (var _b = __values(this.colors.getColors()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var id = _c.value;
                var color = this.colors.getCurrentColor(id);
                if (color) {
                    addStyle(id, color.toString());
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var activeTheme = this.getActiveTheme();
        return { styles: styles, activeTheme: activeTheme };
    };
    WebviewThemeDataProvider.prototype.getActiveTheme = function () {
        var theme = theming_1.ThemeService.get().getCurrentTheme();
        switch (theme.type) {
            case 'light': return 'vscode-light';
            case 'dark': return 'vscode-dark';
            default: return 'vscode-high-contrast';
        }
    };
    __decorate([
        inversify_1.inject(editor_preferences_1.EditorPreferences),
        __metadata("design:type", Object)
    ], WebviewThemeDataProvider.prototype, "editorPreferences", void 0);
    __decorate([
        inversify_1.inject(color_registry_1.ColorRegistry),
        __metadata("design:type", color_registry_1.ColorRegistry)
    ], WebviewThemeDataProvider.prototype, "colors", void 0);
    __decorate([
        inversify_1.inject(color_application_contribution_1.ColorApplicationContribution),
        __metadata("design:type", color_application_contribution_1.ColorApplicationContribution)
    ], WebviewThemeDataProvider.prototype, "colorContribution", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], WebviewThemeDataProvider.prototype, "init", null);
    WebviewThemeDataProvider = __decorate([
        inversify_1.injectable()
    ], WebviewThemeDataProvider);
    return WebviewThemeDataProvider;
}());
exports.WebviewThemeDataProvider = WebviewThemeDataProvider;


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/main/browser/webview/webview.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/main/browser/webview/webview.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
/*---------------------------------------------------------------------------------------------
*  Copyright (c) Microsoft Corporation. All rights reserved.
*  Licensed under the MIT License. See License.txt in the project root for license information.
*--------------------------------------------------------------------------------------------*/
// copied and modified from https://github.com/microsoft/vscode/blob/ba40bd16433d5a817bfae15f3b4350e18f144af4/src/vs/workbench/contrib/webview/browser/baseWebviewElement.ts
// copied and modified from https://github.com/microsoft/vscode/blob/ba40bd16433d5a817bfae15f3b4350e18f144af4/src/vs/workbench/contrib/webview/browser/webviewElement.ts#
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mime = __webpack_require__(/*! mime */ "../node_modules/mime/index.js");
var json_1 = __webpack_require__(/*! @phosphor/coreutils/lib/json */ "../node_modules/@phosphor/coreutils/lib/json.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var widget_1 = __webpack_require__(/*! @theia/core/lib/browser/widgets/widget */ "../node_modules/@theia/core/lib/browser/widgets/widget.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
var application_shell_mouse_tracker_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/application-shell-mouse-tracker */ "../node_modules/@theia/core/lib/browser/shell/application-shell-mouse-tracker.js");
var promise_util_1 = __webpack_require__(/*! @theia/core/lib/common/promise-util */ "../node_modules/@theia/core/lib/common/promise-util.js");
var webview_environment_1 = __webpack_require__(/*! ./webview-environment */ "../node_modules/@theia/plugin-ext/lib/main/browser/webview/webview-environment.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../node_modules/@theia/core/lib/common/event.js");
var opener_service_1 = __webpack_require__(/*! @theia/core/lib/browser/opener-service */ "../node_modules/@theia/core/lib/browser/opener-service.js");
var keybinding_1 = __webpack_require__(/*! @theia/core/lib/browser/keybinding */ "../node_modules/@theia/core/lib/browser/keybinding.js");
var uri_components_1 = __webpack_require__(/*! ../../../common/uri-components */ "../node_modules/@theia/plugin-ext/lib/common/uri-components.js");
var plugin_shared_style_1 = __webpack_require__(/*! ../plugin-shared-style */ "../node_modules/@theia/plugin-ext/lib/main/browser/plugin-shared-style.js");
var webview_theme_data_provider_1 = __webpack_require__(/*! ./webview-theme-data-provider */ "../node_modules/@theia/plugin-ext/lib/main/browser/webview/webview-theme-data-provider.js");
var external_uri_service_1 = __webpack_require__(/*! @theia/core/lib/browser/external-uri-service */ "../node_modules/@theia/core/lib/browser/external-uri-service.js");
var output_channel_1 = __webpack_require__(/*! @theia/output/lib/common/output-channel */ "../node_modules/@theia/output/lib/common/output-channel.js");
var webview_preferences_1 = __webpack_require__(/*! ./webview-preferences */ "../node_modules/@theia/plugin-ext/lib/main/browser/webview/webview-preferences.js");
var webview_protocol_1 = __webpack_require__(/*! ../../common/webview-protocol */ "../node_modules/@theia/plugin-ext/lib/main/common/webview-protocol.js");
var webview_resource_cache_1 = __webpack_require__(/*! ./webview-resource-cache */ "../node_modules/@theia/plugin-ext/lib/main/browser/webview/webview-resource-cache.js");
var endpoint_1 = __webpack_require__(/*! @theia/core/lib/browser/endpoint */ "../node_modules/@theia/core/lib/browser/endpoint.js");
// Style from core
var TRANSPARENT_OVERLAY_STYLE = 'theia-transparent-overlay';
var WebviewWidgetIdentifier = /** @class */ (function () {
    function WebviewWidgetIdentifier() {
    }
    WebviewWidgetIdentifier = __decorate([
        inversify_1.injectable()
    ], WebviewWidgetIdentifier);
    return WebviewWidgetIdentifier;
}());
exports.WebviewWidgetIdentifier = WebviewWidgetIdentifier;
exports.WebviewWidgetExternalEndpoint = Symbol('WebviewWidgetExternalEndpoint');
var WebviewWidget = /** @class */ (function (_super) {
    __extends(WebviewWidget, _super);
    function WebviewWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewState = {
            visible: false,
            active: false,
            position: 0
        };
        _this.html = '';
        _this._contentOptions = {};
        _this.options = {};
        _this.ready = new promise_util_1.Deferred();
        _this.onMessageEmitter = new event_1.Emitter();
        _this.onMessage = _this.onMessageEmitter.event;
        _this.pendingMessages = [];
        _this.toHide = new disposable_1.DisposableCollection();
        _this.toDisposeOnIcon = new disposable_1.DisposableCollection();
        return _this;
    }
    WebviewWidget_1 = WebviewWidget;
    Object.defineProperty(WebviewWidget.prototype, "contentOptions", {
        get: function () {
            return this._contentOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebviewWidget.prototype, "state", {
        get: function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    WebviewWidget.prototype.init = function () {
        var _this = this;
        this.node.tabIndex = 0;
        this.id = WebviewWidget_1.FACTORY_ID + ':' + this.identifier.id;
        this.title.closable = true;
        this.addClass(WebviewWidget_1.Styles.WEBVIEW);
        this.toDispose.push(this.onMessageEmitter);
        this.transparentOverlay = document.createElement('div');
        this.transparentOverlay.classList.add(TRANSPARENT_OVERLAY_STYLE);
        this.transparentOverlay.style.display = 'none';
        this.node.appendChild(this.transparentOverlay);
        this.toDispose.push(this.mouseTracker.onMousedown(function () {
            if (_this.element && _this.element.style.display !== 'none') {
                _this.transparentOverlay.style.display = 'block';
            }
        }));
        this.toDispose.push(this.mouseTracker.onMouseup(function () {
            if (_this.element && _this.element.style.display !== 'none') {
                _this.transparentOverlay.style.display = 'none';
            }
        }));
    };
    WebviewWidget.prototype.onBeforeAttach = function (msg) {
        var _this = this;
        _super.prototype.onBeforeAttach.call(this, msg);
        this.doShow();
        // iframe has to be reloaded when moved to another DOM element
        this.toDisposeOnDetach.push(disposable_1.Disposable.create(function () { return _this.forceHide(); }));
    };
    WebviewWidget.prototype.onBeforeShow = function (msg) {
        _super.prototype.onBeforeShow.call(this, msg);
        this.doShow();
    };
    WebviewWidget.prototype.onAfterHide = function (msg) {
        _super.prototype.onAfterHide.call(this, msg);
        this.doHide();
    };
    WebviewWidget.prototype.doHide = function () {
        var _this = this;
        if (this.options.retainContextWhenHidden !== true) {
            if (this.hideTimeout === undefined) {
                // avoid removing iframe if a widget moved quickly
                this.hideTimeout = setTimeout(function () { return _this.forceHide(); }, 50);
            }
        }
    };
    WebviewWidget.prototype.forceHide = function () {
        clearTimeout(this.hideTimeout);
        this.hideTimeout = undefined;
        this.toHide.dispose();
    };
    WebviewWidget.prototype.doShow = function () {
        var _this = this;
        clearTimeout(this.hideTimeout);
        this.hideTimeout = undefined;
        if (!this.toHide.disposed) {
            return;
        }
        this.toDispose.push(this.toHide);
        var element = document.createElement('iframe');
        element.className = 'webview';
        element.sandbox.add('allow-scripts', 'allow-forms', 'allow-same-origin');
        element.setAttribute('src', this.externalEndpoint + "/index.html?id=" + this.identifier.id);
        element.style.border = 'none';
        element.style.width = '100%';
        element.style.height = '100%';
        this.element = element;
        this.node.appendChild(this.element);
        this.toHide.push(disposable_1.Disposable.create(function () {
            if (_this.element) {
                _this.element.remove();
                _this.element = undefined;
            }
        }));
        var oldReady = this.ready;
        var ready = new promise_util_1.Deferred();
        ready.promise.then(function () { return oldReady.resolve(); });
        this.ready = ready;
        this.toHide.push(disposable_1.Disposable.create(function () { return _this.ready = new promise_util_1.Deferred(); }));
        var subscription = this.on("webview-ready" /* webviewReady */, function () {
            subscription.dispose();
            ready.resolve();
        });
        this.toHide.push(subscription);
        this.toHide.push(this.on("onmessage" /* onmessage */, function (data) { return _this.onMessageEmitter.fire(data); }));
        this.toHide.push(this.on("did-click-link" /* didClickLink */, function (uri) { return _this.openLink(new uri_1.default(uri)); }));
        this.toHide.push(this.on("do-update-state" /* doUpdateState */, function (state) {
            _this._state = state;
        }));
        this.toHide.push(this.on("did-focus" /* didFocus */, function () {
            // emulate the webview focus without actually changing focus
            return _this.node.dispatchEvent(new FocusEvent('focus'));
        }));
        this.toHide.push(this.on("did-blur" /* didBlur */, function () {
            /* no-op: webview loses focus only if another element gains focus in the main window */
        }));
        this.toHide.push(this.on("do-reload" /* doReload */, function () { return _this.reload(); }));
        this.toHide.push(this.on("load-resource" /* loadResource */, function (entry) { return _this.loadResource(entry.path); }));
        this.toHide.push(this.on("load-localhost" /* loadLocalhost */, function (entry) {
            return _this.loadLocalhost(entry.origin);
        }));
        this.toHide.push(this.on("did-keydown" /* didKeydown */, function (data) {
            // Electron: workaround for https://github.com/electron/electron/issues/14258
            // We have to detect keyboard events in the <webview> and dispatch them to our
            // keybinding service because these events do not bubble to the parent window anymore.
            _this.dispatchKeyDown(data);
        }));
        this.style();
        this.toHide.push(this.themeDataProvider.onDidChangeThemeData(function () { return _this.style(); }));
        this.doUpdateContent();
        while (this.pendingMessages.length) {
            this.sendMessage(this.pendingMessages.shift());
        }
    };
    WebviewWidget.prototype.loadLocalhost = function (origin) {
        return __awaiter(this, void 0, void 0, function () {
            var redirect;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRedirect(origin)];
                    case 1:
                        redirect = _a.sent();
                        return [2 /*return*/, this.doSend('did-load-localhost', { origin: origin, location: redirect })];
                }
            });
        });
    };
    WebviewWidget.prototype.getRedirect = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, localhost, _a, _b, mapping;
            var e_1, _c;
            return __generator(this, function (_d) {
                uri = new uri_1.default(url);
                localhost = this.externalUriService.parseLocalhost(uri);
                if (!localhost) {
                    return [2 /*return*/, undefined];
                }
                if (this._contentOptions.portMapping) {
                    try {
                        for (_a = __values(this._contentOptions.portMapping), _b = _a.next(); !_b.done; _b = _a.next()) {
                            mapping = _b.value;
                            if (mapping.webviewPort === localhost.port) {
                                if (mapping.webviewPort !== mapping.extensionHostPort) {
                                    return [2 /*return*/, this.toRemoteUrl(uri.withAuthority(localhost.address + ":" + mapping.extensionHostPort))];
                                }
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                return [2 /*return*/, this.toRemoteUrl(uri)];
            });
        });
    };
    WebviewWidget.prototype.toRemoteUrl = function (localUri) {
        return __awaiter(this, void 0, void 0, function () {
            var remoteUri, remoteUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.externalUriService.resolve(localUri)];
                    case 1:
                        remoteUri = _a.sent();
                        remoteUrl = remoteUri.toString();
                        if (remoteUrl[remoteUrl.length - 1] === '/') {
                            return [2 /*return*/, remoteUrl.slice(0, remoteUrl.length - 1)];
                        }
                        return [2 /*return*/, remoteUrl];
                }
            });
        });
    };
    WebviewWidget.prototype.setContentOptions = function (contentOptions) {
        if (json_1.JSONExt.deepEqual(this.contentOptions, contentOptions)) {
            return;
        }
        this._contentOptions = contentOptions;
        this.doUpdateContent();
    };
    WebviewWidget.prototype.setIconUrl = function (iconUrl) {
        if ((this.iconUrl && iconUrl && json_1.JSONExt.deepEqual(this.iconUrl, iconUrl)) || (this.iconUrl === iconUrl)) {
            return;
        }
        this.toDisposeOnIcon.dispose();
        this.toDispose.push(this.toDisposeOnIcon);
        this.iconUrl = iconUrl;
        if (iconUrl) {
            var darkIconUrl_1 = typeof iconUrl === 'object' ? iconUrl.dark : iconUrl;
            var lightIconUrl_1 = typeof iconUrl === 'object' ? iconUrl.light : iconUrl;
            var iconClass = "webview-" + this.identifier.id + "-file-icon";
            this.toDisposeOnIcon.push(this.sharedStyle.insertRule(".theia-webview-icon." + iconClass + "::before", function (theme) { return "background-image: url(" + (theme.type === 'light' ? lightIconUrl_1 : darkIconUrl_1) + ");"; }));
            this.title.iconClass = "theia-webview-icon " + iconClass;
        }
        else {
            this.title.iconClass = '';
        }
    };
    WebviewWidget.prototype.setHTML = function (value) {
        this.html = this.preprocessHtml(value);
        this.doUpdateContent();
    };
    WebviewWidget.prototype.preprocessHtml = function (value) {
        var _this = this;
        return value
            .replace(/(["'])(?:vscode|theia)-resource:(\/\/([^\s\/'"]+?)(?=\/))?([^\s'"]+?)(["'])/gi, function (_, startQuote, _1, scheme, path, endQuote) {
            if (scheme) {
                return "" + startQuote + _this.externalEndpoint + "/theia-resource/" + scheme + path + endQuote;
            }
            return "" + startQuote + _this.externalEndpoint + "/theia-resource/file" + path + endQuote;
        });
    };
    WebviewWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this.focus();
    };
    WebviewWidget.prototype.focus = function () {
        this.node.focus();
        if (this.element) {
            this.doSend('focus');
        }
    };
    WebviewWidget.prototype.reload = function () {
        this.doUpdateContent();
    };
    WebviewWidget.prototype.style = function () {
        var _a = this.themeDataProvider.getThemeData(), styles = _a.styles, activeTheme = _a.activeTheme;
        this.doSend('styles', { styles: styles, activeTheme: activeTheme });
    };
    WebviewWidget.prototype.dispatchKeyDown = function (event) {
        var _this = this;
        // Create a fake KeyboardEvent from the data provided
        var emulatedKeyboardEvent = new KeyboardEvent('keydown', event);
        // Force override the target
        Object.defineProperty(emulatedKeyboardEvent, 'target', {
            get: function () { return _this.element; },
        });
        // And re-dispatch
        this.keybindings.run(emulatedKeyboardEvent);
    };
    WebviewWidget.prototype.openLink = function (link) {
        var supported = this.toSupportedLink(link);
        if (supported) {
            opener_service_1.open(this.openerService, supported);
        }
    };
    WebviewWidget.prototype.toSupportedLink = function (link) {
        var e_2, _a;
        if (WebviewWidget_1.standardSupportedLinkSchemes.has(link.scheme)) {
            var linkAsString = link.toString();
            try {
                for (var _b = __values([this.externalEndpoint + '/theia-resource', this.externalEndpoint + '/vscode-resource']), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var resourceRoot = _c.value;
                    if (linkAsString.startsWith(resourceRoot + '/')) {
                        return this.normalizeRequestUri(linkAsString.substr(resourceRoot.length));
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return link;
        }
        if (!!this.contentOptions.enableCommandUris && link.scheme === uri_components_1.Schemes.COMMAND) {
            return link;
        }
        return undefined;
    };
    WebviewWidget.prototype.loadResource = function (requestPath) {
        return __awaiter(this, void 0, void 0, function () {
            var normalizedUri, cacheUrl, _loop_1, this_1, _a, _b, root, state_1, e_3_1, _c;
            var e_3, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        normalizedUri = this.normalizeRequestUri(requestPath);
                        cacheUrl = new endpoint_1.Endpoint({ path: normalizedUri.path.toString() }).getRestUrl().toString();
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 10, , 11]);
                        if (!this.contentOptions.localResourceRoots) return [3 /*break*/, 9];
                        _loop_1 = function (root) {
                            var cached, response, buffer_1, eTag, data;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!new uri_1.default(root).path.isEqualOrParent(normalizedUri.path)) {
                                            return [2 /*return*/, "continue"];
                                        }
                                        return [4 /*yield*/, this_1.resourceCache.match(cacheUrl)];
                                    case 1:
                                        cached = _a.sent();
                                        return [4 /*yield*/, this_1.resourceLoader.load({ uri: normalizedUri.toString(), eTag: cached && cached.eTag })];
                                    case 2:
                                        response = _a.sent();
                                        if (response) {
                                            buffer_1 = response.buffer, eTag = response.eTag;
                                            cached = { body: function () { return new Uint8Array(buffer_1); }, eTag: eTag };
                                            this_1.resourceCache.put(cacheUrl, cached);
                                        }
                                        if (!cached) return [3 /*break*/, 4];
                                        return [4 /*yield*/, cached.body()];
                                    case 3:
                                        data = _a.sent();
                                        return [2 /*return*/, { value: this_1.doSend('did-load-resource', {
                                                    status: 200,
                                                    path: requestPath,
                                                    mime: mime.getType(normalizedUri.path.toString()) || 'application/octet-stream',
                                                    data: data
                                                }) }];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _e.label = 2;
                    case 2:
                        _e.trys.push([2, 7, 8, 9]);
                        _a = __values(this.contentOptions.localResourceRoots), _b = _a.next();
                        _e.label = 3;
                    case 3:
                        if (!!_b.done) return [3 /*break*/, 6];
                        root = _b.value;
                        return [5 /*yield**/, _loop_1(root)];
                    case 4:
                        state_1 = _e.sent();
                        if (typeof state_1 === "object")
                            return [2 /*return*/, state_1.value];
                        _e.label = 5;
                    case 5:
                        _b = _a.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_3_1 = _e.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        _c = _e.sent();
                        return [3 /*break*/, 11];
                    case 11:
                        this.resourceCache.delete(cacheUrl);
                        return [2 /*return*/, this.doSend('did-load-resource', {
                                status: 404,
                                path: requestPath
                            })];
                }
            });
        });
    };
    WebviewWidget.prototype.normalizeRequestUri = function (requestPath) {
        var normalizedPath = decodeURIComponent(requestPath);
        var requestUri = new uri_1.default(normalizedPath.replace(/^\/(\w+)\/(.+)$/, function (_, scheme, path) { return scheme + ':/' + path; }));
        if (requestUri.scheme !== 'theia-resource' && requestUri.scheme !== 'vscode-resource') {
            return requestUri;
        }
        // Modern vscode-resources uris put the scheme of the requested resource as the authority
        if (requestUri.authority) {
            return new uri_1.default(requestUri.authority + ':' + requestUri.path);
        }
        // Old style vscode-resource uris lose the scheme of the resource which means they are unable to
        // load a mix of local and remote content properly.
        return requestUri.withScheme('file');
    };
    WebviewWidget.prototype.sendMessage = function (data) {
        if (this.element) {
            this.doSend('message', data);
        }
        else {
            this.pendingMessages.push(data);
        }
    };
    WebviewWidget.prototype.doUpdateContent = function () {
        this.doSend('content', {
            contents: this.html,
            options: this.contentOptions,
            state: this.state
        });
    };
    WebviewWidget.prototype.storeState = function () {
        return {
            viewType: this.viewType,
            title: this.title.label,
            iconUrl: this.iconUrl,
            options: this.options,
            contentOptions: this.contentOptions,
            state: this.state
        };
    };
    WebviewWidget.prototype.restoreState = function (oldState) {
        var viewType = oldState.viewType, title = oldState.title, iconUrl = oldState.iconUrl, options = oldState.options, contentOptions = oldState.contentOptions, state = oldState.state;
        this.viewType = viewType;
        this.title.label = title;
        this.setIconUrl(iconUrl);
        this.options = options;
        this._contentOptions = contentOptions;
        this._state = state;
    };
    WebviewWidget.prototype.doSend = function (channel, data) {
        return __awaiter(this, void 0, void 0, function () {
            var e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.element) {
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.ready.promise];
                    case 2:
                        _a.sent();
                        this.postMessage(channel, data);
                        return [3 /*break*/, 4];
                    case 3:
                        e_4 = _a.sent();
                        console.error(e_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    WebviewWidget.prototype.postMessage = function (channel, data) {
        if (this.element) {
            this.trace('out', channel, data);
            this.element.contentWindow.postMessage({ channel: channel, args: data }, '*');
        }
    };
    WebviewWidget.prototype.on = function (channel, handler) {
        var _this = this;
        var listener = function (e) {
            if (!e || !e.data || e.data.target !== _this.identifier.id) {
                return;
            }
            if (e.data.channel === channel) {
                _this.trace('in', e.data.channel, e.data.data);
                handler(e.data.data);
            }
        };
        window.addEventListener('message', listener);
        return disposable_1.Disposable.create(function () {
            return window.removeEventListener('message', listener);
        });
    };
    WebviewWidget.prototype.trace = function (kind, channel, data) {
        var value = this.preferences['webview.trace'];
        if (value === 'off') {
            return;
        }
        var output = this.outputManager.getChannel('webviews');
        output.append('\n' + this.identifier.id);
        output.append(kind === 'out' ? ' => ' : ' <= ');
        output.append(channel);
        if (value === 'verbose') {
            if (data) {
                output.append('\n' + JSON.stringify(data, undefined, 2));
            }
        }
    };
    var WebviewWidget_1;
    WebviewWidget.standardSupportedLinkSchemes = new Set([
        uri_components_1.Schemes.HTTP,
        uri_components_1.Schemes.HTTPS,
        uri_components_1.Schemes.MAILTO,
        uri_components_1.Schemes.VSCODE
    ]);
    WebviewWidget.FACTORY_ID = 'plugin-webview';
    __decorate([
        inversify_1.inject(WebviewWidgetIdentifier),
        __metadata("design:type", WebviewWidgetIdentifier)
    ], WebviewWidget.prototype, "identifier", void 0);
    __decorate([
        inversify_1.inject(exports.WebviewWidgetExternalEndpoint),
        __metadata("design:type", String)
    ], WebviewWidget.prototype, "externalEndpoint", void 0);
    __decorate([
        inversify_1.inject(application_shell_mouse_tracker_1.ApplicationShellMouseTracker),
        __metadata("design:type", application_shell_mouse_tracker_1.ApplicationShellMouseTracker)
    ], WebviewWidget.prototype, "mouseTracker", void 0);
    __decorate([
        inversify_1.inject(webview_environment_1.WebviewEnvironment),
        __metadata("design:type", webview_environment_1.WebviewEnvironment)
    ], WebviewWidget.prototype, "environment", void 0);
    __decorate([
        inversify_1.inject(opener_service_1.OpenerService),
        __metadata("design:type", Object)
    ], WebviewWidget.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(keybinding_1.KeybindingRegistry),
        __metadata("design:type", keybinding_1.KeybindingRegistry)
    ], WebviewWidget.prototype, "keybindings", void 0);
    __decorate([
        inversify_1.inject(plugin_shared_style_1.PluginSharedStyle),
        __metadata("design:type", plugin_shared_style_1.PluginSharedStyle)
    ], WebviewWidget.prototype, "sharedStyle", void 0);
    __decorate([
        inversify_1.inject(webview_theme_data_provider_1.WebviewThemeDataProvider),
        __metadata("design:type", webview_theme_data_provider_1.WebviewThemeDataProvider)
    ], WebviewWidget.prototype, "themeDataProvider", void 0);
    __decorate([
        inversify_1.inject(external_uri_service_1.ExternalUriService),
        __metadata("design:type", external_uri_service_1.ExternalUriService)
    ], WebviewWidget.prototype, "externalUriService", void 0);
    __decorate([
        inversify_1.inject(output_channel_1.OutputChannelManager),
        __metadata("design:type", output_channel_1.OutputChannelManager)
    ], WebviewWidget.prototype, "outputManager", void 0);
    __decorate([
        inversify_1.inject(webview_preferences_1.WebviewPreferences),
        __metadata("design:type", Object)
    ], WebviewWidget.prototype, "preferences", void 0);
    __decorate([
        inversify_1.inject(webview_protocol_1.WebviewResourceLoader),
        __metadata("design:type", Object)
    ], WebviewWidget.prototype, "resourceLoader", void 0);
    __decorate([
        inversify_1.inject(webview_resource_cache_1.WebviewResourceCache),
        __metadata("design:type", webview_resource_cache_1.WebviewResourceCache)
    ], WebviewWidget.prototype, "resourceCache", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], WebviewWidget.prototype, "init", null);
    WebviewWidget = WebviewWidget_1 = __decorate([
        inversify_1.injectable()
    ], WebviewWidget);
    return WebviewWidget;
}(widget_1.BaseWidget));
exports.WebviewWidget = WebviewWidget;
(function (WebviewWidget) {
    var Styles;
    (function (Styles) {
        Styles.WEBVIEW = 'theia-webview';
    })(Styles = WebviewWidget.Styles || (WebviewWidget.Styles = {}));
})(WebviewWidget = exports.WebviewWidget || (exports.WebviewWidget = {}));
exports.WebviewWidget = WebviewWidget;


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/main/common/webview-protocol.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/main/common/webview-protocol.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
/**
 * Each webview should be deployed on a unique origin (https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)
 * to ensure isolation from browser shared state as cookies, local storage and so on.
 *
 * Use `THEIA_WEBVIEW_EXTERNAL_ENDPOINT` to customize the hostname pattern of a origin.
 * By default is `{{uuid}}.webview.{{hostname}}`. Where `{{uuid}}` is a placeholder for a webview global id.
 */
var WebviewExternalEndpoint;
(function (WebviewExternalEndpoint) {
    WebviewExternalEndpoint.pattern = 'THEIA_WEBVIEW_EXTERNAL_ENDPOINT';
    WebviewExternalEndpoint.defaultPattern = '{{uuid}}.webview.{{hostname}}';
})(WebviewExternalEndpoint = exports.WebviewExternalEndpoint || (exports.WebviewExternalEndpoint = {}));
exports.WebviewResourceLoader = Symbol('WebviewResourceLoader');
exports.WebviewResourceLoaderPath = '/services/webview-resource-loader';


/***/ }),

/***/ "../node_modules/mime/Mime.js":
/*!************************************!*\
  !*** ../node_modules/mime/Mime.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @param typeMap [Object] Map of MIME type -> Array[extensions]
 * @param ...
 */
function Mime() {
  this._types = Object.create(null);
  this._extensions = Object.create(null);

  for (var i = 0; i < arguments.length; i++) {
    this.define(arguments[i]);
  }

  this.define = this.define.bind(this);
  this.getType = this.getType.bind(this);
  this.getExtension = this.getExtension.bind(this);
}

/**
 * Define mimetype -> extension mappings.  Each key is a mime-type that maps
 * to an array of extensions associated with the type.  The first extension is
 * used as the default extension for the type.
 *
 * e.g. mime.define({'audio/ogg', ['oga', 'ogg', 'spx']});
 *
 * If a type declares an extension that has already been defined, an error will
 * be thrown.  To suppress this error and force the extension to be associated
 * with the new type, pass `force`=true.  Alternatively, you may prefix the
 * extension with "*" to map the type to extension, without mapping the
 * extension to the type.
 *
 * e.g. mime.define({'audio/wav', ['wav']}, {'audio/x-wav', ['*wav']});
 *
 *
 * @param map (Object) type definitions
 * @param force (Boolean) if true, force overriding of existing definitions
 */
Mime.prototype.define = function(typeMap, force) {
  for (var type in typeMap) {
    var extensions = typeMap[type].map(function(t) {return t.toLowerCase()});
    type = type.toLowerCase();

    for (var i = 0; i < extensions.length; i++) {
      var ext = extensions[i];

      // '*' prefix = not the preferred type for this extension.  So fixup the
      // extension, and skip it.
      if (ext[0] == '*') {
        continue;
      }

      if (!force && (ext in this._types)) {
        throw new Error(
          'Attempt to change mapping for "' + ext +
          '" extension from "' + this._types[ext] + '" to "' + type +
          '". Pass `force=true` to allow this, otherwise remove "' + ext +
          '" from the list of extensions for "' + type + '".'
        );
      }

      this._types[ext] = type;
    }

    // Use first extension as default
    if (force || !this._extensions[type]) {
      var ext = extensions[0];
      this._extensions[type] = (ext[0] != '*') ? ext : ext.substr(1)
    }
  }
};

/**
 * Lookup a mime type based on extension
 */
Mime.prototype.getType = function(path) {
  path = String(path);
  var last = path.replace(/^.*[/\\]/, '').toLowerCase();
  var ext = last.replace(/^.*\./, '').toLowerCase();

  var hasPath = last.length < path.length;
  var hasDot = ext.length < last.length - 1;

  return (hasDot || !hasPath) && this._types[ext] || null;
};

/**
 * Return file extension associated with a mime type
 */
Mime.prototype.getExtension = function(type) {
  type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
  return type && this._extensions[type.toLowerCase()] || null;
};

module.exports = Mime;


/***/ }),

/***/ "../node_modules/mime/index.js":
/*!*************************************!*\
  !*** ../node_modules/mime/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Mime = __webpack_require__(/*! ./Mime */ "../node_modules/mime/Mime.js");
module.exports = new Mime(__webpack_require__(/*! ./types/standard */ "../node_modules/mime/types/standard.js"), __webpack_require__(/*! ./types/other */ "../node_modules/mime/types/other.js"));


/***/ }),

/***/ "../node_modules/mime/types/other.js":
/*!*******************************************!*\
  !*** ../node_modules/mime/types/other.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"application/prs.cww":["cww"],"application/vnd.3gpp.pic-bw-large":["plb"],"application/vnd.3gpp.pic-bw-small":["psb"],"application/vnd.3gpp.pic-bw-var":["pvb"],"application/vnd.3gpp2.tcap":["tcap"],"application/vnd.3m.post-it-notes":["pwn"],"application/vnd.accpac.simply.aso":["aso"],"application/vnd.accpac.simply.imp":["imp"],"application/vnd.acucobol":["acu"],"application/vnd.acucorp":["atc","acutc"],"application/vnd.adobe.air-application-installer-package+zip":["air"],"application/vnd.adobe.formscentral.fcdt":["fcdt"],"application/vnd.adobe.fxp":["fxp","fxpl"],"application/vnd.adobe.xdp+xml":["xdp"],"application/vnd.adobe.xfdf":["xfdf"],"application/vnd.ahead.space":["ahead"],"application/vnd.airzip.filesecure.azf":["azf"],"application/vnd.airzip.filesecure.azs":["azs"],"application/vnd.amazon.ebook":["azw"],"application/vnd.americandynamics.acc":["acc"],"application/vnd.amiga.ami":["ami"],"application/vnd.android.package-archive":["apk"],"application/vnd.anser-web-certificate-issue-initiation":["cii"],"application/vnd.anser-web-funds-transfer-initiation":["fti"],"application/vnd.antix.game-component":["atx"],"application/vnd.apple.installer+xml":["mpkg"],"application/vnd.apple.keynote":["keynote"],"application/vnd.apple.mpegurl":["m3u8"],"application/vnd.apple.numbers":["numbers"],"application/vnd.apple.pages":["pages"],"application/vnd.apple.pkpass":["pkpass"],"application/vnd.aristanetworks.swi":["swi"],"application/vnd.astraea-software.iota":["iota"],"application/vnd.audiograph":["aep"],"application/vnd.blueice.multipass":["mpm"],"application/vnd.bmi":["bmi"],"application/vnd.businessobjects":["rep"],"application/vnd.chemdraw+xml":["cdxml"],"application/vnd.chipnuts.karaoke-mmd":["mmd"],"application/vnd.cinderella":["cdy"],"application/vnd.citationstyles.style+xml":["csl"],"application/vnd.claymore":["cla"],"application/vnd.cloanto.rp9":["rp9"],"application/vnd.clonk.c4group":["c4g","c4d","c4f","c4p","c4u"],"application/vnd.cluetrust.cartomobile-config":["c11amc"],"application/vnd.cluetrust.cartomobile-config-pkg":["c11amz"],"application/vnd.commonspace":["csp"],"application/vnd.contact.cmsg":["cdbcmsg"],"application/vnd.cosmocaller":["cmc"],"application/vnd.crick.clicker":["clkx"],"application/vnd.crick.clicker.keyboard":["clkk"],"application/vnd.crick.clicker.palette":["clkp"],"application/vnd.crick.clicker.template":["clkt"],"application/vnd.crick.clicker.wordbank":["clkw"],"application/vnd.criticaltools.wbs+xml":["wbs"],"application/vnd.ctc-posml":["pml"],"application/vnd.cups-ppd":["ppd"],"application/vnd.curl.car":["car"],"application/vnd.curl.pcurl":["pcurl"],"application/vnd.dart":["dart"],"application/vnd.data-vision.rdz":["rdz"],"application/vnd.dece.data":["uvf","uvvf","uvd","uvvd"],"application/vnd.dece.ttml+xml":["uvt","uvvt"],"application/vnd.dece.unspecified":["uvx","uvvx"],"application/vnd.dece.zip":["uvz","uvvz"],"application/vnd.denovo.fcselayout-link":["fe_launch"],"application/vnd.dna":["dna"],"application/vnd.dolby.mlp":["mlp"],"application/vnd.dpgraph":["dpg"],"application/vnd.dreamfactory":["dfac"],"application/vnd.ds-keypoint":["kpxx"],"application/vnd.dvb.ait":["ait"],"application/vnd.dvb.service":["svc"],"application/vnd.dynageo":["geo"],"application/vnd.ecowin.chart":["mag"],"application/vnd.enliven":["nml"],"application/vnd.epson.esf":["esf"],"application/vnd.epson.msf":["msf"],"application/vnd.epson.quickanime":["qam"],"application/vnd.epson.salt":["slt"],"application/vnd.epson.ssf":["ssf"],"application/vnd.eszigno3+xml":["es3","et3"],"application/vnd.ezpix-album":["ez2"],"application/vnd.ezpix-package":["ez3"],"application/vnd.fdf":["fdf"],"application/vnd.fdsn.mseed":["mseed"],"application/vnd.fdsn.seed":["seed","dataless"],"application/vnd.flographit":["gph"],"application/vnd.fluxtime.clip":["ftc"],"application/vnd.framemaker":["fm","frame","maker","book"],"application/vnd.frogans.fnc":["fnc"],"application/vnd.frogans.ltf":["ltf"],"application/vnd.fsc.weblaunch":["fsc"],"application/vnd.fujitsu.oasys":["oas"],"application/vnd.fujitsu.oasys2":["oa2"],"application/vnd.fujitsu.oasys3":["oa3"],"application/vnd.fujitsu.oasysgp":["fg5"],"application/vnd.fujitsu.oasysprs":["bh2"],"application/vnd.fujixerox.ddd":["ddd"],"application/vnd.fujixerox.docuworks":["xdw"],"application/vnd.fujixerox.docuworks.binder":["xbd"],"application/vnd.fuzzysheet":["fzs"],"application/vnd.genomatix.tuxedo":["txd"],"application/vnd.geogebra.file":["ggb"],"application/vnd.geogebra.tool":["ggt"],"application/vnd.geometry-explorer":["gex","gre"],"application/vnd.geonext":["gxt"],"application/vnd.geoplan":["g2w"],"application/vnd.geospace":["g3w"],"application/vnd.gmx":["gmx"],"application/vnd.google-apps.document":["gdoc"],"application/vnd.google-apps.presentation":["gslides"],"application/vnd.google-apps.spreadsheet":["gsheet"],"application/vnd.google-earth.kml+xml":["kml"],"application/vnd.google-earth.kmz":["kmz"],"application/vnd.grafeq":["gqf","gqs"],"application/vnd.groove-account":["gac"],"application/vnd.groove-help":["ghf"],"application/vnd.groove-identity-message":["gim"],"application/vnd.groove-injector":["grv"],"application/vnd.groove-tool-message":["gtm"],"application/vnd.groove-tool-template":["tpl"],"application/vnd.groove-vcard":["vcg"],"application/vnd.hal+xml":["hal"],"application/vnd.handheld-entertainment+xml":["zmm"],"application/vnd.hbci":["hbci"],"application/vnd.hhe.lesson-player":["les"],"application/vnd.hp-hpgl":["hpgl"],"application/vnd.hp-hpid":["hpid"],"application/vnd.hp-hps":["hps"],"application/vnd.hp-jlyt":["jlt"],"application/vnd.hp-pcl":["pcl"],"application/vnd.hp-pclxl":["pclxl"],"application/vnd.hydrostatix.sof-data":["sfd-hdstx"],"application/vnd.ibm.minipay":["mpy"],"application/vnd.ibm.modcap":["afp","listafp","list3820"],"application/vnd.ibm.rights-management":["irm"],"application/vnd.ibm.secure-container":["sc"],"application/vnd.iccprofile":["icc","icm"],"application/vnd.igloader":["igl"],"application/vnd.immervision-ivp":["ivp"],"application/vnd.immervision-ivu":["ivu"],"application/vnd.insors.igm":["igm"],"application/vnd.intercon.formnet":["xpw","xpx"],"application/vnd.intergeo":["i2g"],"application/vnd.intu.qbo":["qbo"],"application/vnd.intu.qfx":["qfx"],"application/vnd.ipunplugged.rcprofile":["rcprofile"],"application/vnd.irepository.package+xml":["irp"],"application/vnd.is-xpr":["xpr"],"application/vnd.isac.fcs":["fcs"],"application/vnd.jam":["jam"],"application/vnd.jcp.javame.midlet-rms":["rms"],"application/vnd.jisp":["jisp"],"application/vnd.joost.joda-archive":["joda"],"application/vnd.kahootz":["ktz","ktr"],"application/vnd.kde.karbon":["karbon"],"application/vnd.kde.kchart":["chrt"],"application/vnd.kde.kformula":["kfo"],"application/vnd.kde.kivio":["flw"],"application/vnd.kde.kontour":["kon"],"application/vnd.kde.kpresenter":["kpr","kpt"],"application/vnd.kde.kspread":["ksp"],"application/vnd.kde.kword":["kwd","kwt"],"application/vnd.kenameaapp":["htke"],"application/vnd.kidspiration":["kia"],"application/vnd.kinar":["kne","knp"],"application/vnd.koan":["skp","skd","skt","skm"],"application/vnd.kodak-descriptor":["sse"],"application/vnd.las.las+xml":["lasxml"],"application/vnd.llamagraphics.life-balance.desktop":["lbd"],"application/vnd.llamagraphics.life-balance.exchange+xml":["lbe"],"application/vnd.lotus-1-2-3":["123"],"application/vnd.lotus-approach":["apr"],"application/vnd.lotus-freelance":["pre"],"application/vnd.lotus-notes":["nsf"],"application/vnd.lotus-organizer":["org"],"application/vnd.lotus-screencam":["scm"],"application/vnd.lotus-wordpro":["lwp"],"application/vnd.macports.portpkg":["portpkg"],"application/vnd.mcd":["mcd"],"application/vnd.medcalcdata":["mc1"],"application/vnd.mediastation.cdkey":["cdkey"],"application/vnd.mfer":["mwf"],"application/vnd.mfmp":["mfm"],"application/vnd.micrografx.flo":["flo"],"application/vnd.micrografx.igx":["igx"],"application/vnd.mif":["mif"],"application/vnd.mobius.daf":["daf"],"application/vnd.mobius.dis":["dis"],"application/vnd.mobius.mbk":["mbk"],"application/vnd.mobius.mqy":["mqy"],"application/vnd.mobius.msl":["msl"],"application/vnd.mobius.plc":["plc"],"application/vnd.mobius.txf":["txf"],"application/vnd.mophun.application":["mpn"],"application/vnd.mophun.certificate":["mpc"],"application/vnd.mozilla.xul+xml":["xul"],"application/vnd.ms-artgalry":["cil"],"application/vnd.ms-cab-compressed":["cab"],"application/vnd.ms-excel":["xls","xlm","xla","xlc","xlt","xlw"],"application/vnd.ms-excel.addin.macroenabled.12":["xlam"],"application/vnd.ms-excel.sheet.binary.macroenabled.12":["xlsb"],"application/vnd.ms-excel.sheet.macroenabled.12":["xlsm"],"application/vnd.ms-excel.template.macroenabled.12":["xltm"],"application/vnd.ms-fontobject":["eot"],"application/vnd.ms-htmlhelp":["chm"],"application/vnd.ms-ims":["ims"],"application/vnd.ms-lrm":["lrm"],"application/vnd.ms-officetheme":["thmx"],"application/vnd.ms-outlook":["msg"],"application/vnd.ms-pki.seccat":["cat"],"application/vnd.ms-pki.stl":["*stl"],"application/vnd.ms-powerpoint":["ppt","pps","pot"],"application/vnd.ms-powerpoint.addin.macroenabled.12":["ppam"],"application/vnd.ms-powerpoint.presentation.macroenabled.12":["pptm"],"application/vnd.ms-powerpoint.slide.macroenabled.12":["sldm"],"application/vnd.ms-powerpoint.slideshow.macroenabled.12":["ppsm"],"application/vnd.ms-powerpoint.template.macroenabled.12":["potm"],"application/vnd.ms-project":["mpp","mpt"],"application/vnd.ms-word.document.macroenabled.12":["docm"],"application/vnd.ms-word.template.macroenabled.12":["dotm"],"application/vnd.ms-works":["wps","wks","wcm","wdb"],"application/vnd.ms-wpl":["wpl"],"application/vnd.ms-xpsdocument":["xps"],"application/vnd.mseq":["mseq"],"application/vnd.musician":["mus"],"application/vnd.muvee.style":["msty"],"application/vnd.mynfc":["taglet"],"application/vnd.neurolanguage.nlu":["nlu"],"application/vnd.nitf":["ntf","nitf"],"application/vnd.noblenet-directory":["nnd"],"application/vnd.noblenet-sealer":["nns"],"application/vnd.noblenet-web":["nnw"],"application/vnd.nokia.n-gage.data":["ngdat"],"application/vnd.nokia.n-gage.symbian.install":["n-gage"],"application/vnd.nokia.radio-preset":["rpst"],"application/vnd.nokia.radio-presets":["rpss"],"application/vnd.novadigm.edm":["edm"],"application/vnd.novadigm.edx":["edx"],"application/vnd.novadigm.ext":["ext"],"application/vnd.oasis.opendocument.chart":["odc"],"application/vnd.oasis.opendocument.chart-template":["otc"],"application/vnd.oasis.opendocument.database":["odb"],"application/vnd.oasis.opendocument.formula":["odf"],"application/vnd.oasis.opendocument.formula-template":["odft"],"application/vnd.oasis.opendocument.graphics":["odg"],"application/vnd.oasis.opendocument.graphics-template":["otg"],"application/vnd.oasis.opendocument.image":["odi"],"application/vnd.oasis.opendocument.image-template":["oti"],"application/vnd.oasis.opendocument.presentation":["odp"],"application/vnd.oasis.opendocument.presentation-template":["otp"],"application/vnd.oasis.opendocument.spreadsheet":["ods"],"application/vnd.oasis.opendocument.spreadsheet-template":["ots"],"application/vnd.oasis.opendocument.text":["odt"],"application/vnd.oasis.opendocument.text-master":["odm"],"application/vnd.oasis.opendocument.text-template":["ott"],"application/vnd.oasis.opendocument.text-web":["oth"],"application/vnd.olpc-sugar":["xo"],"application/vnd.oma.dd2+xml":["dd2"],"application/vnd.openofficeorg.extension":["oxt"],"application/vnd.openxmlformats-officedocument.presentationml.presentation":["pptx"],"application/vnd.openxmlformats-officedocument.presentationml.slide":["sldx"],"application/vnd.openxmlformats-officedocument.presentationml.slideshow":["ppsx"],"application/vnd.openxmlformats-officedocument.presentationml.template":["potx"],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":["xlsx"],"application/vnd.openxmlformats-officedocument.spreadsheetml.template":["xltx"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":["docx"],"application/vnd.openxmlformats-officedocument.wordprocessingml.template":["dotx"],"application/vnd.osgeo.mapguide.package":["mgp"],"application/vnd.osgi.dp":["dp"],"application/vnd.osgi.subsystem":["esa"],"application/vnd.palm":["pdb","pqa","oprc"],"application/vnd.pawaafile":["paw"],"application/vnd.pg.format":["str"],"application/vnd.pg.osasli":["ei6"],"application/vnd.picsel":["efif"],"application/vnd.pmi.widget":["wg"],"application/vnd.pocketlearn":["plf"],"application/vnd.powerbuilder6":["pbd"],"application/vnd.previewsystems.box":["box"],"application/vnd.proteus.magazine":["mgz"],"application/vnd.publishare-delta-tree":["qps"],"application/vnd.pvi.ptid1":["ptid"],"application/vnd.quark.quarkxpress":["qxd","qxt","qwd","qwt","qxl","qxb"],"application/vnd.realvnc.bed":["bed"],"application/vnd.recordare.musicxml":["mxl"],"application/vnd.recordare.musicxml+xml":["musicxml"],"application/vnd.rig.cryptonote":["cryptonote"],"application/vnd.rim.cod":["cod"],"application/vnd.rn-realmedia":["rm"],"application/vnd.rn-realmedia-vbr":["rmvb"],"application/vnd.route66.link66+xml":["link66"],"application/vnd.sailingtracker.track":["st"],"application/vnd.seemail":["see"],"application/vnd.sema":["sema"],"application/vnd.semd":["semd"],"application/vnd.semf":["semf"],"application/vnd.shana.informed.formdata":["ifm"],"application/vnd.shana.informed.formtemplate":["itp"],"application/vnd.shana.informed.interchange":["iif"],"application/vnd.shana.informed.package":["ipk"],"application/vnd.simtech-mindmapper":["twd","twds"],"application/vnd.smaf":["mmf"],"application/vnd.smart.teacher":["teacher"],"application/vnd.solent.sdkm+xml":["sdkm","sdkd"],"application/vnd.spotfire.dxp":["dxp"],"application/vnd.spotfire.sfs":["sfs"],"application/vnd.stardivision.calc":["sdc"],"application/vnd.stardivision.draw":["sda"],"application/vnd.stardivision.impress":["sdd"],"application/vnd.stardivision.math":["smf"],"application/vnd.stardivision.writer":["sdw","vor"],"application/vnd.stardivision.writer-global":["sgl"],"application/vnd.stepmania.package":["smzip"],"application/vnd.stepmania.stepchart":["sm"],"application/vnd.sun.wadl+xml":["wadl"],"application/vnd.sun.xml.calc":["sxc"],"application/vnd.sun.xml.calc.template":["stc"],"application/vnd.sun.xml.draw":["sxd"],"application/vnd.sun.xml.draw.template":["std"],"application/vnd.sun.xml.impress":["sxi"],"application/vnd.sun.xml.impress.template":["sti"],"application/vnd.sun.xml.math":["sxm"],"application/vnd.sun.xml.writer":["sxw"],"application/vnd.sun.xml.writer.global":["sxg"],"application/vnd.sun.xml.writer.template":["stw"],"application/vnd.sus-calendar":["sus","susp"],"application/vnd.svd":["svd"],"application/vnd.symbian.install":["sis","sisx"],"application/vnd.syncml+xml":["xsm"],"application/vnd.syncml.dm+wbxml":["bdm"],"application/vnd.syncml.dm+xml":["xdm"],"application/vnd.tao.intent-module-archive":["tao"],"application/vnd.tcpdump.pcap":["pcap","cap","dmp"],"application/vnd.tmobile-livetv":["tmo"],"application/vnd.trid.tpt":["tpt"],"application/vnd.triscape.mxs":["mxs"],"application/vnd.trueapp":["tra"],"application/vnd.ufdl":["ufd","ufdl"],"application/vnd.uiq.theme":["utz"],"application/vnd.umajin":["umj"],"application/vnd.unity":["unityweb"],"application/vnd.uoml+xml":["uoml"],"application/vnd.vcx":["vcx"],"application/vnd.visio":["vsd","vst","vss","vsw"],"application/vnd.visionary":["vis"],"application/vnd.vsf":["vsf"],"application/vnd.wap.wbxml":["wbxml"],"application/vnd.wap.wmlc":["wmlc"],"application/vnd.wap.wmlscriptc":["wmlsc"],"application/vnd.webturbo":["wtb"],"application/vnd.wolfram.player":["nbp"],"application/vnd.wordperfect":["wpd"],"application/vnd.wqd":["wqd"],"application/vnd.wt.stf":["stf"],"application/vnd.xara":["xar"],"application/vnd.xfdl":["xfdl"],"application/vnd.yamaha.hv-dic":["hvd"],"application/vnd.yamaha.hv-script":["hvs"],"application/vnd.yamaha.hv-voice":["hvp"],"application/vnd.yamaha.openscoreformat":["osf"],"application/vnd.yamaha.openscoreformat.osfpvg+xml":["osfpvg"],"application/vnd.yamaha.smaf-audio":["saf"],"application/vnd.yamaha.smaf-phrase":["spf"],"application/vnd.yellowriver-custom-menu":["cmp"],"application/vnd.zul":["zir","zirz"],"application/vnd.zzazz.deck+xml":["zaz"],"application/x-7z-compressed":["7z"],"application/x-abiword":["abw"],"application/x-ace-compressed":["ace"],"application/x-apple-diskimage":["*dmg"],"application/x-arj":["arj"],"application/x-authorware-bin":["aab","x32","u32","vox"],"application/x-authorware-map":["aam"],"application/x-authorware-seg":["aas"],"application/x-bcpio":["bcpio"],"application/x-bdoc":["*bdoc"],"application/x-bittorrent":["torrent"],"application/x-blorb":["blb","blorb"],"application/x-bzip":["bz"],"application/x-bzip2":["bz2","boz"],"application/x-cbr":["cbr","cba","cbt","cbz","cb7"],"application/x-cdlink":["vcd"],"application/x-cfs-compressed":["cfs"],"application/x-chat":["chat"],"application/x-chess-pgn":["pgn"],"application/x-chrome-extension":["crx"],"application/x-cocoa":["cco"],"application/x-conference":["nsc"],"application/x-cpio":["cpio"],"application/x-csh":["csh"],"application/x-debian-package":["*deb","udeb"],"application/x-dgc-compressed":["dgc"],"application/x-director":["dir","dcr","dxr","cst","cct","cxt","w3d","fgd","swa"],"application/x-doom":["wad"],"application/x-dtbncx+xml":["ncx"],"application/x-dtbook+xml":["dtb"],"application/x-dtbresource+xml":["res"],"application/x-dvi":["dvi"],"application/x-envoy":["evy"],"application/x-eva":["eva"],"application/x-font-bdf":["bdf"],"application/x-font-ghostscript":["gsf"],"application/x-font-linux-psf":["psf"],"application/x-font-pcf":["pcf"],"application/x-font-snf":["snf"],"application/x-font-type1":["pfa","pfb","pfm","afm"],"application/x-freearc":["arc"],"application/x-futuresplash":["spl"],"application/x-gca-compressed":["gca"],"application/x-glulx":["ulx"],"application/x-gnumeric":["gnumeric"],"application/x-gramps-xml":["gramps"],"application/x-gtar":["gtar"],"application/x-hdf":["hdf"],"application/x-httpd-php":["php"],"application/x-install-instructions":["install"],"application/x-iso9660-image":["*iso"],"application/x-java-archive-diff":["jardiff"],"application/x-java-jnlp-file":["jnlp"],"application/x-latex":["latex"],"application/x-lua-bytecode":["luac"],"application/x-lzh-compressed":["lzh","lha"],"application/x-makeself":["run"],"application/x-mie":["mie"],"application/x-mobipocket-ebook":["prc","mobi"],"application/x-ms-application":["application"],"application/x-ms-shortcut":["lnk"],"application/x-ms-wmd":["wmd"],"application/x-ms-wmz":["wmz"],"application/x-ms-xbap":["xbap"],"application/x-msaccess":["mdb"],"application/x-msbinder":["obd"],"application/x-mscardfile":["crd"],"application/x-msclip":["clp"],"application/x-msdos-program":["*exe"],"application/x-msdownload":["*exe","*dll","com","bat","*msi"],"application/x-msmediaview":["mvb","m13","m14"],"application/x-msmetafile":["*wmf","*wmz","*emf","emz"],"application/x-msmoney":["mny"],"application/x-mspublisher":["pub"],"application/x-msschedule":["scd"],"application/x-msterminal":["trm"],"application/x-mswrite":["wri"],"application/x-netcdf":["nc","cdf"],"application/x-ns-proxy-autoconfig":["pac"],"application/x-nzb":["nzb"],"application/x-perl":["pl","pm"],"application/x-pilot":["*prc","*pdb"],"application/x-pkcs12":["p12","pfx"],"application/x-pkcs7-certificates":["p7b","spc"],"application/x-pkcs7-certreqresp":["p7r"],"application/x-rar-compressed":["rar"],"application/x-redhat-package-manager":["rpm"],"application/x-research-info-systems":["ris"],"application/x-sea":["sea"],"application/x-sh":["sh"],"application/x-shar":["shar"],"application/x-shockwave-flash":["swf"],"application/x-silverlight-app":["xap"],"application/x-sql":["sql"],"application/x-stuffit":["sit"],"application/x-stuffitx":["sitx"],"application/x-subrip":["srt"],"application/x-sv4cpio":["sv4cpio"],"application/x-sv4crc":["sv4crc"],"application/x-t3vm-image":["t3"],"application/x-tads":["gam"],"application/x-tar":["tar"],"application/x-tcl":["tcl","tk"],"application/x-tex":["tex"],"application/x-tex-tfm":["tfm"],"application/x-texinfo":["texinfo","texi"],"application/x-tgif":["obj"],"application/x-ustar":["ustar"],"application/x-virtualbox-hdd":["hdd"],"application/x-virtualbox-ova":["ova"],"application/x-virtualbox-ovf":["ovf"],"application/x-virtualbox-vbox":["vbox"],"application/x-virtualbox-vbox-extpack":["vbox-extpack"],"application/x-virtualbox-vdi":["vdi"],"application/x-virtualbox-vhd":["vhd"],"application/x-virtualbox-vmdk":["vmdk"],"application/x-wais-source":["src"],"application/x-web-app-manifest+json":["webapp"],"application/x-x509-ca-cert":["der","crt","pem"],"application/x-xfig":["fig"],"application/x-xliff+xml":["xlf"],"application/x-xpinstall":["xpi"],"application/x-xz":["xz"],"application/x-zmachine":["z1","z2","z3","z4","z5","z6","z7","z8"],"audio/vnd.dece.audio":["uva","uvva"],"audio/vnd.digital-winds":["eol"],"audio/vnd.dra":["dra"],"audio/vnd.dts":["dts"],"audio/vnd.dts.hd":["dtshd"],"audio/vnd.lucent.voice":["lvp"],"audio/vnd.ms-playready.media.pya":["pya"],"audio/vnd.nuera.ecelp4800":["ecelp4800"],"audio/vnd.nuera.ecelp7470":["ecelp7470"],"audio/vnd.nuera.ecelp9600":["ecelp9600"],"audio/vnd.rip":["rip"],"audio/x-aac":["aac"],"audio/x-aiff":["aif","aiff","aifc"],"audio/x-caf":["caf"],"audio/x-flac":["flac"],"audio/x-m4a":["*m4a"],"audio/x-matroska":["mka"],"audio/x-mpegurl":["m3u"],"audio/x-ms-wax":["wax"],"audio/x-ms-wma":["wma"],"audio/x-pn-realaudio":["ram","ra"],"audio/x-pn-realaudio-plugin":["rmp"],"audio/x-realaudio":["*ra"],"audio/x-wav":["*wav"],"chemical/x-cdx":["cdx"],"chemical/x-cif":["cif"],"chemical/x-cmdf":["cmdf"],"chemical/x-cml":["cml"],"chemical/x-csml":["csml"],"chemical/x-xyz":["xyz"],"image/prs.btif":["btif"],"image/prs.pti":["pti"],"image/vnd.adobe.photoshop":["psd"],"image/vnd.airzip.accelerator.azv":["azv"],"image/vnd.dece.graphic":["uvi","uvvi","uvg","uvvg"],"image/vnd.djvu":["djvu","djv"],"image/vnd.dvb.subtitle":["*sub"],"image/vnd.dwg":["dwg"],"image/vnd.dxf":["dxf"],"image/vnd.fastbidsheet":["fbs"],"image/vnd.fpx":["fpx"],"image/vnd.fst":["fst"],"image/vnd.fujixerox.edmics-mmr":["mmr"],"image/vnd.fujixerox.edmics-rlc":["rlc"],"image/vnd.microsoft.icon":["ico"],"image/vnd.ms-modi":["mdi"],"image/vnd.ms-photo":["wdp"],"image/vnd.net-fpx":["npx"],"image/vnd.tencent.tap":["tap"],"image/vnd.valve.source.texture":["vtf"],"image/vnd.wap.wbmp":["wbmp"],"image/vnd.xiff":["xif"],"image/vnd.zbrush.pcx":["pcx"],"image/x-3ds":["3ds"],"image/x-cmu-raster":["ras"],"image/x-cmx":["cmx"],"image/x-freehand":["fh","fhc","fh4","fh5","fh7"],"image/x-icon":["*ico"],"image/x-jng":["jng"],"image/x-mrsid-image":["sid"],"image/x-ms-bmp":["*bmp"],"image/x-pcx":["*pcx"],"image/x-pict":["pic","pct"],"image/x-portable-anymap":["pnm"],"image/x-portable-bitmap":["pbm"],"image/x-portable-graymap":["pgm"],"image/x-portable-pixmap":["ppm"],"image/x-rgb":["rgb"],"image/x-tga":["tga"],"image/x-xbitmap":["xbm"],"image/x-xpixmap":["xpm"],"image/x-xwindowdump":["xwd"],"message/vnd.wfa.wsc":["wsc"],"model/vnd.collada+xml":["dae"],"model/vnd.dwf":["dwf"],"model/vnd.gdl":["gdl"],"model/vnd.gtw":["gtw"],"model/vnd.mts":["mts"],"model/vnd.opengex":["ogex"],"model/vnd.parasolid.transmit.binary":["x_b"],"model/vnd.parasolid.transmit.text":["x_t"],"model/vnd.usdz+zip":["usdz"],"model/vnd.valve.source.compiled-map":["bsp"],"model/vnd.vtu":["vtu"],"text/prs.lines.tag":["dsc"],"text/vnd.curl":["curl"],"text/vnd.curl.dcurl":["dcurl"],"text/vnd.curl.mcurl":["mcurl"],"text/vnd.curl.scurl":["scurl"],"text/vnd.dvb.subtitle":["sub"],"text/vnd.fly":["fly"],"text/vnd.fmi.flexstor":["flx"],"text/vnd.graphviz":["gv"],"text/vnd.in3d.3dml":["3dml"],"text/vnd.in3d.spot":["spot"],"text/vnd.sun.j2me.app-descriptor":["jad"],"text/vnd.wap.wml":["wml"],"text/vnd.wap.wmlscript":["wmls"],"text/x-asm":["s","asm"],"text/x-c":["c","cc","cxx","cpp","h","hh","dic"],"text/x-component":["htc"],"text/x-fortran":["f","for","f77","f90"],"text/x-handlebars-template":["hbs"],"text/x-java-source":["java"],"text/x-lua":["lua"],"text/x-markdown":["mkd"],"text/x-nfo":["nfo"],"text/x-opml":["opml"],"text/x-org":["*org"],"text/x-pascal":["p","pas"],"text/x-processing":["pde"],"text/x-sass":["sass"],"text/x-scss":["scss"],"text/x-setext":["etx"],"text/x-sfv":["sfv"],"text/x-suse-ymp":["ymp"],"text/x-uuencode":["uu"],"text/x-vcalendar":["vcs"],"text/x-vcard":["vcf"],"video/vnd.dece.hd":["uvh","uvvh"],"video/vnd.dece.mobile":["uvm","uvvm"],"video/vnd.dece.pd":["uvp","uvvp"],"video/vnd.dece.sd":["uvs","uvvs"],"video/vnd.dece.video":["uvv","uvvv"],"video/vnd.dvb.file":["dvb"],"video/vnd.fvt":["fvt"],"video/vnd.mpegurl":["mxu","m4u"],"video/vnd.ms-playready.media.pyv":["pyv"],"video/vnd.uvvu.mp4":["uvu","uvvu"],"video/vnd.vivo":["viv"],"video/x-f4v":["f4v"],"video/x-fli":["fli"],"video/x-flv":["flv"],"video/x-m4v":["m4v"],"video/x-matroska":["mkv","mk3d","mks"],"video/x-mng":["mng"],"video/x-ms-asf":["asf","asx"],"video/x-ms-vob":["vob"],"video/x-ms-wm":["wm"],"video/x-ms-wmv":["wmv"],"video/x-ms-wmx":["wmx"],"video/x-ms-wvx":["wvx"],"video/x-msvideo":["avi"],"video/x-sgi-movie":["movie"],"video/x-smv":["smv"],"x-conference/x-cooltalk":["ice"]};

/***/ }),

/***/ "../node_modules/mime/types/standard.js":
/*!**********************************************!*\
  !*** ../node_modules/mime/types/standard.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomsvc+xml":["atomsvc"],"application/bdoc":["bdoc"],"application/ccxml+xml":["ccxml"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["ecma","es"],"application/emma+xml":["emma"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/font-tdpfr":["pfr"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/n-quads":["nq"],"application/n-triples":["nt"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/patch-ops-error+xml":["xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf","owl"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/sieve":["siv","sieve"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-diff+xml":["xdf"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["woff"],"font/woff2":["woff2"],"image/aces":["exr"],"image/apng":["apng"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/dicom-rle":["drle"],"image/emf":["emf"],"image/fits":["fits"],"image/g3fax":["g3"],"image/gif":["gif"],"image/heic":["heic"],"image/heic-sequence":["heics"],"image/heif":["heif"],"image/heif-sequence":["heifs"],"image/ief":["ief"],"image/jls":["jls"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/jxr":["jxr"],"image/ktx":["ktx"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/t38":["t38"],"image/tiff":["tif","tiff"],"image/tiff-fx":["tfx"],"image/webp":["webp"],"image/wmf":["wmf"],"message/disposition-notification":["disposition-notification"],"message/global":["u8msg"],"message/global-delivery-status":["u8dsn"],"message/global-disposition-notification":["u8mdn"],"message/global-headers":["u8hdr"],"message/rfc822":["eml","mime"],"model/3mf":["3mf"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/stl":["stl"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["*x3db","x3dbz"],"model/x3d+fastinfoset":["x3db"],"model/x3d+vrml":["*x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"model/x3d-vrml":["x3dv"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/mdx":["mdx"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]};

/***/ })

}]);
//# sourceMappingURL=37.bundle.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "../node_modules/@theia/workspace/lib/browser/workspace-preferences.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@theia/workspace/lib/browser/workspace-preferences.js ***!
  \*****************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var preferences_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences */ "../node_modules/@theia/core/lib/browser/preferences/index.js");
exports.workspacePreferenceSchema = {
    type: 'object',
    properties: {
        'workspace.preserveWindow': {
            description: 'Enable opening workspaces in current window.',
            type: 'boolean',
            default: false
        },
        'workspace.supportMultiRootWorkspace': {
            description: 'Controls whether multi-root workspace support is enabled.',
            type: 'boolean',
            default: true
        }
    }
};
exports.WorkspacePreferences = Symbol('WorkspacePreferences');
function createWorkspacePreferences(preferences) {
    return preferences_1.createPreferenceProxy(preferences, exports.workspacePreferenceSchema);
}
exports.createWorkspacePreferences = createWorkspacePreferences;
function bindWorkspacePreferences(bind) {
    bind(exports.WorkspacePreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(preferences_1.PreferenceService);
        return createWorkspacePreferences(preferences);
    }).inSingletonScope();
    bind(preferences_1.PreferenceContribution).toConstantValue({ schema: exports.workspacePreferenceSchema });
}
exports.bindWorkspacePreferences = bindWorkspacePreferences;


/***/ }),

/***/ "../node_modules/@theia/workspace/lib/browser/workspace-service.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@theia/workspace/lib/browser/workspace-service.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var common_1 = __webpack_require__(/*! @theia/filesystem/lib/common */ "../node_modules/@theia/filesystem/lib/common/index.js");
var filesystem_watcher_1 = __webpack_require__(/*! @theia/filesystem/lib/browser/filesystem-watcher */ "../node_modules/@theia/filesystem/lib/browser/filesystem-watcher.js");
var common_2 = __webpack_require__(/*! ../common */ "../node_modules/@theia/workspace/lib/common/index.js");
var window_service_1 = __webpack_require__(/*! @theia/core/lib/browser/window/window-service */ "../node_modules/@theia/core/lib/browser/window/window-service.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var promise_util_1 = __webpack_require__(/*! @theia/core/lib/common/promise-util */ "../node_modules/@theia/core/lib/common/promise-util.js");
var env_variables_1 = __webpack_require__(/*! @theia/core/lib/common/env-variables */ "../node_modules/@theia/core/lib/common/env-variables/index.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var workspace_preferences_1 = __webpack_require__(/*! ./workspace-preferences */ "../node_modules/@theia/workspace/lib/browser/workspace-preferences.js");
var jsoncparser = __webpack_require__(/*! jsonc-parser */ "../node_modules/jsonc-parser/lib/esm/main.js");
var Ajv = __webpack_require__(/*! ajv */ "../node_modules/ajv/lib/ajv.js");
var frontend_application_config_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/frontend-application-config-provider */ "../node_modules/@theia/core/lib/browser/frontend-application-config-provider.js");
/**
 * The workspace service.
 */
var WorkspaceService = /** @class */ (function () {
    function WorkspaceService() {
        this._roots = [];
        this.deferredRoots = new promise_util_1.Deferred();
        this.onWorkspaceChangeEmitter = new core_1.Emitter();
        this.onWorkspaceLocationChangedEmitter = new core_1.Emitter();
        this.toDisposeOnWorkspace = new core_1.DisposableCollection();
        this.rootWatchers = new Map();
    }
    WorkspaceService.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var wsUriString, wsStat;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.applicationName = frontend_application_config_provider_1.FrontendApplicationConfigProvider.get().applicationName;
                        return [4 /*yield*/, this.getDefaultWorkspaceUri()];
                    case 1:
                        wsUriString = _a.sent();
                        return [4 /*yield*/, this.toFileStat(wsUriString)];
                    case 2:
                        wsStat = _a.sent();
                        return [4 /*yield*/, this.setWorkspace(wsStat)];
                    case 3:
                        _a.sent();
                        this.watcher.onFilesChanged(function (event) {
                            if (_this._workspace && filesystem_watcher_1.FileChangeEvent.isAffected(event, new uri_1.default(_this._workspace.uri))) {
                                _this.updateWorkspace();
                            }
                        });
                        this.preferences.onPreferenceChanged(function (event) {
                            var multiRootPrefName = 'workspace.supportMultiRootWorkspace';
                            if (event.preferenceName === multiRootPrefName) {
                                _this.updateWorkspace();
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Resolves to the default workspace URI as string.
     *
     * The default implementation tries to extract the default workspace location
     * from the `window.location.hash`, then falls-back to the most recently
     * used workspace root from the server.
     *
     * It is not ensured that the resolved workspace URI is valid, it can point
     * to a non-existing location.
     */
    WorkspaceService.prototype.getDefaultWorkspaceUri = function () {
        // Prefer the workspace path specified as the URL fragment, if present.
        if (window.location.hash.length > 1) {
            // Remove the leading # and decode the URI.
            var wpPath = decodeURI(window.location.hash.substring(1));
            return new uri_1.default().withPath(wpPath).withScheme('file').toString();
        }
        else {
            // Else, ask the server for its suggested workspace (usually the one
            // specified on the CLI, or the most recent).
            return this.server.getMostRecentlyUsedWorkspace();
        }
    };
    /**
     * Get the path of the workspace to use initially.
     * @deprecated use `WorkspaceService#getDefaultWorkspaceUri` instead.
     */
    WorkspaceService.prototype.getDefaultWorkspacePath = function () {
        return this.getDefaultWorkspaceUri();
    };
    /**
     * Set the URL fragment to the given workspace path.
     */
    WorkspaceService.prototype.setURLFragment = function (workspacePath) {
        window.location.hash = workspacePath;
    };
    Object.defineProperty(WorkspaceService.prototype, "roots", {
        get: function () {
            return this.deferredRoots.promise;
        },
        enumerable: true,
        configurable: true
    });
    WorkspaceService.prototype.tryGetRoots = function () {
        return this._roots;
    };
    Object.defineProperty(WorkspaceService.prototype, "workspace", {
        get: function () {
            return this._workspace;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkspaceService.prototype, "onWorkspaceChanged", {
        get: function () {
            return this.onWorkspaceChangeEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkspaceService.prototype, "onWorkspaceLocationChanged", {
        get: function () {
            return this.onWorkspaceLocationChangedEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    WorkspaceService.prototype.setWorkspace = function (workspaceStat) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (common_1.FileStat.equals(this._workspace, workspaceStat)) {
                            return [2 /*return*/];
                        }
                        this.toDisposeOnWorkspace.dispose();
                        this._workspace = workspaceStat;
                        if (!this._workspace) return [3 /*break*/, 2];
                        uri = new uri_1.default(this._workspace.uri);
                        _b = (_a = this.toDisposeOnWorkspace).push;
                        return [4 /*yield*/, this.watcher.watchFileChanges(uri)];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        this.setURLFragment(uri.path.toString());
                        return [3 /*break*/, 3];
                    case 2:
                        this.setURLFragment('');
                        _c.label = 3;
                    case 3:
                        this.updateTitle();
                        return [4 /*yield*/, this.updateWorkspace()];
                    case 4:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkspaceService.prototype.updateWorkspace = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._workspace) {
                            this.toFileStat(this._workspace.uri).then(function (stat) { return _this._workspace = stat; });
                        }
                        return [4 /*yield*/, this.updateRoots()];
                    case 1:
                        _a.sent();
                        this.watchRoots();
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkspaceService.prototype.updateRoots = function () {
        return __awaiter(this, void 0, void 0, function () {
            var newRoots, rootsChanged, _loop_1, this_1, newRoots_1, newRoots_1_1, newRoot, state_1;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.computeRoots()];
                    case 1:
                        newRoots = _b.sent();
                        rootsChanged = false;
                        if (newRoots.length !== this._roots.length || newRoots.length === 0) {
                            rootsChanged = true;
                        }
                        else {
                            _loop_1 = function (newRoot) {
                                if (!this_1._roots.some(function (r) { return r.uri === newRoot.uri; })) {
                                    rootsChanged = true;
                                    return "break";
                                }
                            };
                            this_1 = this;
                            try {
                                for (newRoots_1 = __values(newRoots), newRoots_1_1 = newRoots_1.next(); !newRoots_1_1.done; newRoots_1_1 = newRoots_1.next()) {
                                    newRoot = newRoots_1_1.value;
                                    state_1 = _loop_1(newRoot);
                                    if (state_1 === "break")
                                        break;
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (newRoots_1_1 && !newRoots_1_1.done && (_a = newRoots_1.return)) _a.call(newRoots_1);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                        }
                        if (rootsChanged) {
                            this._roots = newRoots;
                            this.deferredRoots.resolve(this._roots); // in order to resolve first
                            this.deferredRoots = new promise_util_1.Deferred();
                            this.deferredRoots.resolve(this._roots);
                            this.onWorkspaceChangeEmitter.fire(this._roots);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkspaceService.prototype.computeRoots = function () {
        return __awaiter(this, void 0, void 0, function () {
            var roots, workspaceData, _a, _b, path, valid, e_2_1;
            var e_2, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        roots = [];
                        if (!this._workspace) return [3 /*break*/, 9];
                        if (this._workspace.isDirectory) {
                            return [2 /*return*/, [this._workspace]];
                        }
                        return [4 /*yield*/, this.getWorkspaceDataFromFile()];
                    case 1:
                        workspaceData = _d.sent();
                        if (!workspaceData) return [3 /*break*/, 9];
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 7, 8, 9]);
                        _a = __values(workspaceData.folders), _b = _a.next();
                        _d.label = 3;
                    case 3:
                        if (!!_b.done) return [3 /*break*/, 6];
                        path = _b.value.path;
                        return [4 /*yield*/, this.toValidRoot(path)];
                    case 4:
                        valid = _d.sent();
                        if (valid) {
                            roots.push(valid);
                        }
                        else {
                            roots.push({
                                uri: path,
                                lastModification: Date.now(),
                                isDirectory: true
                            });
                        }
                        _d.label = 5;
                    case 5:
                        _b = _a.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_2_1 = _d.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/, roots];
                }
            });
        });
    };
    WorkspaceService.prototype.getWorkspaceDataFromFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, stat, content, strippedContent, data;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this._workspace;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fileSystem.exists(this._workspace.uri)];
                    case 1:
                        _a = (_c.sent());
                        _c.label = 2;
                    case 2:
                        if (!_a) return [3 /*break*/, 4];
                        if (this._workspace.isDirectory) {
                            return [2 /*return*/, {
                                    folders: [{ path: this._workspace.uri }]
                                }];
                        }
                        return [4 /*yield*/, this.fileSystem.resolveContent(this._workspace.uri)];
                    case 3:
                        _b = _c.sent(), stat = _b.stat, content = _b.content;
                        strippedContent = jsoncparser.stripComments(content);
                        data = jsoncparser.parse(strippedContent);
                        if (data && WorkspaceData.is(data)) {
                            return [2 /*return*/, WorkspaceData.transformToAbsolute(data, stat)];
                        }
                        this.logger.error("Unable to retrieve workspace data from the file: '" + this._workspace.uri + "'. Please check if the file is corrupted.");
                        _c.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    WorkspaceService.prototype.formatTitle = function (title) {
        var name = this.applicationName;
        return title ? title + " \u2014 " + name : name;
    };
    WorkspaceService.prototype.updateTitle = function () {
        var title;
        if (this._workspace) {
            var uri = new uri_1.default(this._workspace.uri);
            var displayName = uri.displayName;
            if (!this._workspace.isDirectory &&
                (displayName.endsWith("." + common_2.THEIA_EXT) || displayName.endsWith("." + common_2.VSCODE_EXT))) {
                title = displayName.slice(0, displayName.lastIndexOf('.'));
            }
            else {
                title = displayName;
            }
        }
        document.title = this.formatTitle(title);
    };
    /**
     * on unload, we set our workspace root as the last recently used on the backend.
     */
    WorkspaceService.prototype.onStop = function () {
        this.server.setMostRecentlyUsedWorkspace(this._workspace ? this._workspace.uri : '');
    };
    WorkspaceService.prototype.recentWorkspaces = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.server.getRecentWorkspaces()];
            });
        });
    };
    Object.defineProperty(WorkspaceService.prototype, "opened", {
        /**
         * Returns `true` if theia has an opened workspace or folder
         * @returns {boolean}
         */
        get: function () {
            return !!this._workspace;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkspaceService.prototype, "isMultiRootWorkspaceOpened", {
        /**
         * Returns `true` if a multiple-root workspace is currently open.
         * @returns {boolean}
         */
        get: function () {
            return !!this.workspace && !this.workspace.isDirectory;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkspaceService.prototype, "isMultiRootWorkspaceEnabled", {
        /**
         * Returns `true` if there is an opened workspace, and multi root workspace support is enabled.
         * @returns {boolean}
         */
        get: function () {
            return this.opened && this.preferences['workspace.supportMultiRootWorkspace'];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens directory, or recreates a workspace from the file that `uri` points to.
     */
    WorkspaceService.prototype.open = function (uri, options) {
        this.doOpen(uri, options);
    };
    WorkspaceService.prototype.doOpen = function (uri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var rootUri, stat, preserveWindow;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rootUri = uri.toString();
                        return [4 /*yield*/, this.toFileStat(rootUri)];
                    case 1:
                        stat = _a.sent();
                        if (!stat) return [3 /*break*/, 4];
                        // The same window has to be preserved too (instead of opening a new one), if the workspace root is not yet available and we are setting it for the first time.
                        // Option passed as parameter has the highest priority (for api developers), then the preference, then the default.
                        return [4 /*yield*/, this.roots];
                    case 2:
                        // The same window has to be preserved too (instead of opening a new one), if the workspace root is not yet available and we are setting it for the first time.
                        // Option passed as parameter has the highest priority (for api developers), then the preference, then the default.
                        _a.sent();
                        preserveWindow = __assign({ preserveWindow: this.preferences['workspace.preserveWindow'] || !this.opened }, options).preserveWindow;
                        return [4 /*yield*/, this.server.setMostRecentlyUsedWorkspace(rootUri)];
                    case 3:
                        _a.sent();
                        if (preserveWindow) {
                            this._workspace = stat;
                        }
                        this.openWindow(stat, { preserveWindow: preserveWindow });
                        return [2 /*return*/];
                    case 4: throw new Error('Invalid workspace root URI. Expected an existing directory location.');
                }
            });
        });
    };
    /**
     * Adds a root folder to the workspace
     * @param uri URI of the root folder being added
     */
    WorkspaceService.prototype.addRoot = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.spliceRoots(this._roots.length, 0, uri)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Removes root folder(s) from workspace.
     */
    WorkspaceService.prototype.removeRoots = function (uris) {
        return __awaiter(this, void 0, void 0, function () {
            var workspaceData, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.opened) {
                            throw new Error('Folder cannot be removed as there is no active folder in the current workspace.');
                        }
                        if (!this._workspace) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getWorkspaceDataFromFile()];
                    case 1:
                        workspaceData = _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.writeWorkspaceFile(this._workspace, WorkspaceData.buildWorkspaceData(this._roots.filter(function (root) { return uris.findIndex(function (u) { return u.toString() === root.uri; }) < 0; }), workspaceData.settings))];
                    case 2:
                        _a._workspace = _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    WorkspaceService.prototype.spliceRoots = function (start, deleteCount) {
        var rootsToAdd = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            rootsToAdd[_i - 2] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var dedup, roots, toAdd, rootsToAdd_1, rootsToAdd_1_1, root, uri, toRemove, untitledWorkspace, currentData, newData;
            var e_3, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this._workspace) {
                            throw new Error('There is not active workspace');
                        }
                        dedup = new Set();
                        roots = this._roots.map(function (root) { return (dedup.add(root.uri), root.uri); });
                        toAdd = [];
                        try {
                            for (rootsToAdd_1 = __values(rootsToAdd), rootsToAdd_1_1 = rootsToAdd_1.next(); !rootsToAdd_1_1.done; rootsToAdd_1_1 = rootsToAdd_1.next()) {
                                root = rootsToAdd_1_1.value;
                                uri = root.toString();
                                if (!dedup.has(uri)) {
                                    dedup.add(uri);
                                    toAdd.push(uri);
                                }
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (rootsToAdd_1_1 && !rootsToAdd_1_1.done && (_a = rootsToAdd_1.return)) _a.call(rootsToAdd_1);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        toRemove = roots.splice.apply(roots, __spread([start, deleteCount || 0], toAdd));
                        if (!toRemove.length && !toAdd.length) {
                            return [2 /*return*/, []];
                        }
                        if (!this._workspace.isDirectory) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getUntitledWorkspace()];
                    case 1:
                        untitledWorkspace = _b.sent();
                        if (!untitledWorkspace) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.save(untitledWorkspace)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3: return [4 /*yield*/, this.getWorkspaceDataFromFile()];
                    case 4:
                        currentData = _b.sent();
                        newData = WorkspaceData.buildWorkspaceData(roots, currentData && currentData.settings);
                        return [4 /*yield*/, this.writeWorkspaceFile(this._workspace, newData)];
                    case 5:
                        _b.sent();
                        return [2 /*return*/, toRemove.map(function (root) { return new uri_1.default(root); })];
                }
            });
        });
    };
    WorkspaceService.prototype.getUntitledWorkspace = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, common_2.getTemporaryWorkspaceFileUri(this.envVariableServer)];
            });
        });
    };
    WorkspaceService.prototype.writeWorkspaceFile = function (workspaceFile, workspaceData) {
        return __awaiter(this, void 0, void 0, function () {
            var data, edits, result, stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!workspaceFile) return [3 /*break*/, 2];
                        data = JSON.stringify(WorkspaceData.transformToRelative(workspaceData, workspaceFile));
                        edits = jsoncparser.format(data, undefined, { tabSize: 3, insertSpaces: true, eol: '' });
                        result = jsoncparser.applyEdits(data, edits);
                        return [4 /*yield*/, this.fileSystem.setContent(workspaceFile, result)];
                    case 1:
                        stat = _a.sent();
                        return [2 /*return*/, stat];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Clears current workspace root.
     */
    WorkspaceService.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._workspace = undefined;
                        this._roots.length = 0;
                        return [4 /*yield*/, this.server.setMostRecentlyUsedWorkspace('')];
                    case 1:
                        _a.sent();
                        this.reloadWindow();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * returns a FileStat if the argument URI points to an existing directory. Otherwise, `undefined`.
     */
    WorkspaceService.prototype.toValidRoot = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var fileStat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toFileStat(uri)];
                    case 1:
                        fileStat = _a.sent();
                        if (fileStat && fileStat.isDirectory) {
                            return [2 /*return*/, fileStat];
                        }
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    /**
     * returns a FileStat if the argument URI points to a file or directory. Otherwise, `undefined`.
     */
    WorkspaceService.prototype.toFileStat = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var uriStr, fileStat, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!uri) {
                            return [2 /*return*/, undefined];
                        }
                        uriStr = uri.toString();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        if (uriStr.endsWith('/')) {
                            uriStr = uriStr.slice(0, -1);
                        }
                        return [4 /*yield*/, this.fileSystem.getFileStat(uriStr)];
                    case 2:
                        fileStat = _a.sent();
                        if (!fileStat) {
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, fileStat];
                    case 3:
                        error_1 = _a.sent();
                        return [2 /*return*/, undefined];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    WorkspaceService.prototype.openWindow = function (uri, options) {
        var _this = this;
        var workspacePath = new uri_1.default(uri.uri).path.toString();
        if (this.shouldPreserveWindow(options)) {
            this.reloadWindow();
        }
        else {
            try {
                this.openNewWindow(workspacePath);
            }
            catch (error) {
                // Fall back to reloading the current window in case the browser has blocked the new window
                this._workspace = uri;
                this.logger.error(error.toString()).then(function () { return _this.reloadWindow(); });
            }
        }
    };
    WorkspaceService.prototype.reloadWindow = function () {
        // Set the new workspace path as the URL fragment.
        if (this._workspace !== undefined) {
            this.setURLFragment(new uri_1.default(this._workspace.uri).path.toString());
        }
        else {
            this.setURLFragment('');
        }
        window.location.reload(true);
    };
    WorkspaceService.prototype.openNewWindow = function (workspacePath) {
        var url = new URL(window.location.href);
        url.hash = workspacePath;
        this.windowService.openNewWindow(url.toString());
    };
    WorkspaceService.prototype.shouldPreserveWindow = function (options) {
        return options !== undefined && !!options.preserveWindow;
    };
    /**
     * Return true if one of the paths in paths array is present in the workspace
     * NOTE: You should always explicitly use `/` as the separator between the path segments.
     */
    WorkspaceService.prototype.containsSome = function (paths) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, root, uri, paths_1, paths_1_1, path, fileUri, exists, e_4_1, e_5_1;
            var e_5, _c, e_4, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.roots];
                    case 1:
                        _e.sent();
                        if (!this.opened) return [3 /*break*/, 15];
                        _e.label = 2;
                    case 2:
                        _e.trys.push([2, 13, 14, 15]);
                        _a = __values(this._roots), _b = _a.next();
                        _e.label = 3;
                    case 3:
                        if (!!_b.done) return [3 /*break*/, 12];
                        root = _b.value;
                        uri = new uri_1.default(root.uri);
                        _e.label = 4;
                    case 4:
                        _e.trys.push([4, 9, 10, 11]);
                        paths_1 = (e_4 = void 0, __values(paths)), paths_1_1 = paths_1.next();
                        _e.label = 5;
                    case 5:
                        if (!!paths_1_1.done) return [3 /*break*/, 8];
                        path = paths_1_1.value;
                        fileUri = uri.resolve(path).toString();
                        return [4 /*yield*/, this.fileSystem.exists(fileUri)];
                    case 6:
                        exists = _e.sent();
                        if (exists) {
                            return [2 /*return*/, exists];
                        }
                        _e.label = 7;
                    case 7:
                        paths_1_1 = paths_1.next();
                        return [3 /*break*/, 5];
                    case 8: return [3 /*break*/, 11];
                    case 9:
                        e_4_1 = _e.sent();
                        e_4 = { error: e_4_1 };
                        return [3 /*break*/, 11];
                    case 10:
                        try {
                            if (paths_1_1 && !paths_1_1.done && (_d = paths_1.return)) _d.call(paths_1);
                        }
                        finally { if (e_4) throw e_4.error; }
                        return [7 /*endfinally*/];
                    case 11:
                        _b = _a.next();
                        return [3 /*break*/, 3];
                    case 12: return [3 /*break*/, 15];
                    case 13:
                        e_5_1 = _e.sent();
                        e_5 = { error: e_5_1 };
                        return [3 /*break*/, 15];
                    case 14:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_5) throw e_5.error; }
                        return [7 /*endfinally*/];
                    case 15: return [2 /*return*/, false];
                }
            });
        });
    };
    Object.defineProperty(WorkspaceService.prototype, "saved", {
        get: function () {
            return !!this._workspace && !this._workspace.isDirectory;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Save workspace data into a file
     * @param uri URI or FileStat of the workspace file
     */
    WorkspaceService.prototype.save = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var uriStr, workspaceData, _a, _b, p, preferences, stat, _c, _d, _e;
            var e_6, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        uriStr = uri instanceof uri_1.default ? uri.toString() : uri.uri;
                        return [4 /*yield*/, this.fileSystem.exists(uriStr)];
                    case 1:
                        if (!!(_g.sent())) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.fileSystem.createFile(uriStr)];
                    case 2:
                        _g.sent();
                        _g.label = 3;
                    case 3:
                        workspaceData = { folders: [], settings: {} };
                        if (!this.saved) {
                            try {
                                for (_a = __values(Object.keys(this.schemaProvider.getCombinedSchema().properties)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                    p = _b.value;
                                    if (this.schemaProvider.isValidInScope(p, browser_1.PreferenceScope.Folder)) {
                                        continue;
                                    }
                                    preferences = this.preferenceImpl.inspect(p);
                                    if (preferences && preferences.workspaceValue) {
                                        workspaceData.settings[p] = preferences.workspaceValue;
                                    }
                                }
                            }
                            catch (e_6_1) { e_6 = { error: e_6_1 }; }
                            finally {
                                try {
                                    if (_b && !_b.done && (_f = _a.return)) _f.call(_a);
                                }
                                finally { if (e_6) throw e_6.error; }
                            }
                        }
                        return [4 /*yield*/, this.toFileStat(uriStr)];
                    case 4:
                        stat = _g.sent();
                        _d = (_c = Object).assign;
                        _e = [workspaceData];
                        return [4 /*yield*/, this.getWorkspaceDataFromFile()];
                    case 5:
                        _d.apply(_c, _e.concat([_g.sent()]));
                        return [4 /*yield*/, this.writeWorkspaceFile(stat, WorkspaceData.buildWorkspaceData(this._roots, workspaceData ? workspaceData.settings : undefined))];
                    case 6:
                        stat = _g.sent();
                        return [4 /*yield*/, this.server.setMostRecentlyUsedWorkspace(uriStr)];
                    case 7:
                        _g.sent();
                        return [4 /*yield*/, this.setWorkspace(stat)];
                    case 8:
                        _g.sent();
                        this.onWorkspaceLocationChangedEmitter.fire(stat);
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkspaceService.prototype.watchRoots = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rootUris, _a, _b, _c, uri, watcher, _d, _e, root;
            var e_7, _f, e_8, _g;
            return __generator(this, function (_h) {
                rootUris = new Set(this._roots.map(function (r) { return r.uri; }));
                try {
                    for (_a = __values(this.rootWatchers.entries()), _b = _a.next(); !_b.done; _b = _a.next()) {
                        _c = __read(_b.value, 2), uri = _c[0], watcher = _c[1];
                        if (!rootUris.has(uri)) {
                            watcher.dispose();
                        }
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_f = _a.return)) _f.call(_a);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
                try {
                    for (_d = __values(this._roots), _e = _d.next(); !_e.done; _e = _d.next()) {
                        root = _e.value;
                        this.watchRoot(root);
                    }
                }
                catch (e_8_1) { e_8 = { error: e_8_1 }; }
                finally {
                    try {
                        if (_e && !_e.done && (_g = _d.return)) _g.call(_d);
                    }
                    finally { if (e_8) throw e_8.error; }
                }
                return [2 /*return*/];
            });
        });
    };
    WorkspaceService.prototype.watchRoot = function (root) {
        return __awaiter(this, void 0, void 0, function () {
            var uriStr, watcher;
            var _this = this;
            return __generator(this, function (_a) {
                uriStr = root.uri;
                if (this.rootWatchers.has(uriStr)) {
                    return [2 /*return*/];
                }
                watcher = this.watcher.watchFileChanges(new uri_1.default(uriStr));
                this.rootWatchers.set(uriStr, core_1.Disposable.create(function () {
                    watcher.then(function (disposable) { return disposable.dispose(); });
                    _this.rootWatchers.delete(uriStr);
                }));
                return [2 /*return*/];
            });
        });
    };
    /**
     * Returns the workspace root uri that the given file belongs to.
     * In case that the file is found in more than one workspace roots, returns the root that is closest to the file.
     * If the file is not from the current workspace, returns `undefined`.
     * @param uri URI of the file
     */
    WorkspaceService.prototype.getWorkspaceRootUri = function (uri) {
        var e_9, _a;
        if (!uri) {
            var root = this.tryGetRoots()[0];
            if (root) {
                return new uri_1.default(root.uri);
            }
            return undefined;
        }
        var rootUris = [];
        try {
            for (var _b = __values(this.tryGetRoots()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var root = _c.value;
                var rootUri = new uri_1.default(root.uri);
                if (rootUri && rootUri.isEqualOrParent(uri)) {
                    rootUris.push(rootUri);
                }
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_9) throw e_9.error; }
        }
        return rootUris.sort(function (r1, r2) { return r2.toString().length - r1.toString().length; })[0];
    };
    WorkspaceService.prototype.areWorkspaceRoots = function (uris) {
        if (!uris.length) {
            return false;
        }
        var rootUris = new Set(this.tryGetRoots().map(function (root) { return root.uri; }));
        return uris.every(function (uri) { return rootUris.has(uri.toString()); });
    };
    __decorate([
        inversify_1.inject(common_1.FileSystem),
        __metadata("design:type", Object)
    ], WorkspaceService.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(filesystem_watcher_1.FileSystemWatcher),
        __metadata("design:type", filesystem_watcher_1.FileSystemWatcher)
    ], WorkspaceService.prototype, "watcher", void 0);
    __decorate([
        inversify_1.inject(common_2.WorkspaceServer),
        __metadata("design:type", Object)
    ], WorkspaceService.prototype, "server", void 0);
    __decorate([
        inversify_1.inject(window_service_1.WindowService),
        __metadata("design:type", Object)
    ], WorkspaceService.prototype, "windowService", void 0);
    __decorate([
        inversify_1.inject(core_1.ILogger),
        __metadata("design:type", Object)
    ], WorkspaceService.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(workspace_preferences_1.WorkspacePreferences),
        __metadata("design:type", Object)
    ], WorkspaceService.prototype, "preferences", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceServiceImpl),
        __metadata("design:type", browser_1.PreferenceServiceImpl)
    ], WorkspaceService.prototype, "preferenceImpl", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceSchemaProvider),
        __metadata("design:type", browser_1.PreferenceSchemaProvider)
    ], WorkspaceService.prototype, "schemaProvider", void 0);
    __decorate([
        inversify_1.inject(env_variables_1.EnvVariablesServer),
        __metadata("design:type", Object)
    ], WorkspaceService.prototype, "envVariableServer", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], WorkspaceService.prototype, "init", null);
    WorkspaceService = __decorate([
        inversify_1.injectable()
    ], WorkspaceService);
    return WorkspaceService;
}());
exports.WorkspaceService = WorkspaceService;
var WorkspaceData;
(function (WorkspaceData) {
    var validateSchema = new Ajv().compile({
        type: 'object',
        properties: {
            folders: {
                description: 'Root folders in the workspace',
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        path: {
                            type: 'string',
                        }
                    },
                    required: ['path']
                }
            },
            settings: {
                description: 'Workspace preferences',
                type: 'object'
            }
        },
        required: ['folders']
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function is(data) {
        return !!validateSchema(data);
    }
    WorkspaceData.is = is;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function buildWorkspaceData(folders, settings) {
        var roots = [];
        if (folders.length > 0) {
            if (typeof folders[0] !== 'string') {
                roots = folders.map(function (folder) { return folder.uri; });
            }
            else {
                roots = folders;
            }
        }
        var data = {
            folders: roots.map(function (folder) { return ({ path: folder }); })
        };
        if (settings) {
            data.settings = settings;
        }
        return data;
    }
    WorkspaceData.buildWorkspaceData = buildWorkspaceData;
    function transformToRelative(data, workspaceFile) {
        var e_10, _a;
        var folderUris = [];
        var workspaceFileUri = new uri_1.default(workspaceFile ? workspaceFile.uri : '').withScheme('file');
        try {
            for (var _b = __values(data.folders), _c = _b.next(); !_c.done; _c = _b.next()) {
                var path = _c.value.path;
                var folderUri = new uri_1.default(path).withScheme('file');
                var rel = workspaceFileUri.parent.relative(folderUri);
                if (rel) {
                    folderUris.push(rel.toString());
                }
                else {
                    folderUris.push(folderUri.toString());
                }
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_10) throw e_10.error; }
        }
        return buildWorkspaceData(folderUris, data.settings);
    }
    WorkspaceData.transformToRelative = transformToRelative;
    function transformToAbsolute(data, workspaceFile) {
        var e_11, _a;
        if (workspaceFile) {
            var folders = [];
            try {
                for (var _b = __values(data.folders), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var folder = _c.value;
                    var path = folder.path;
                    if (path.startsWith('file:///')) {
                        folders.push(path);
                    }
                    else {
                        folders.push(new uri_1.default(workspaceFile.uri).withScheme('file').parent.resolve(path).toString());
                    }
                }
            }
            catch (e_11_1) { e_11 = { error: e_11_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_11) throw e_11.error; }
            }
            return Object.assign(data, buildWorkspaceData(folders, data.settings));
        }
        return data;
    }
    WorkspaceData.transformToAbsolute = transformToAbsolute;
})(WorkspaceData = exports.WorkspaceData || (exports.WorkspaceData = {}));


/***/ }),

/***/ "../node_modules/@theia/workspace/lib/common/index.js":
/*!************************************************************!*\
  !*** ../node_modules/@theia/workspace/lib/common/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
__export(__webpack_require__(/*! ./workspace-protocol */ "../node_modules/@theia/workspace/lib/common/workspace-protocol.js"));
__export(__webpack_require__(/*! ./utils */ "../node_modules/@theia/workspace/lib/common/utils.js"));


/***/ }),

/***/ "../node_modules/@theia/workspace/lib/common/utils.js":
/*!************************************************************!*\
  !*** ../node_modules/@theia/workspace/lib/common/utils.js ***!
  \************************************************************/
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
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
exports.THEIA_EXT = 'theia-workspace';
exports.VSCODE_EXT = 'code-workspace';
function getTemporaryWorkspaceFileUri(envVariableServer) {
    return __awaiter(this, void 0, void 0, function () {
        var configDirUri;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, envVariableServer.getConfigDirUri()];
                case 1:
                    configDirUri = _a.sent();
                    return [2 /*return*/, new uri_1.default(configDirUri).resolve("Untitled." + exports.THEIA_EXT)];
            }
        });
    });
}
exports.getTemporaryWorkspaceFileUri = getTemporaryWorkspaceFileUri;


/***/ }),

/***/ "../node_modules/@theia/workspace/lib/common/workspace-protocol.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@theia/workspace/lib/common/workspace-protocol.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
exports.workspacePath = '/services/workspace';
/**
 * The JSON-RPC workspace interface.
 */
exports.WorkspaceServer = Symbol('WorkspaceServer');


/***/ })

}]);
//# sourceMappingURL=5.bundle.js.map
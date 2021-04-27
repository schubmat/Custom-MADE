(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "../node_modules/@theia/preferences/lib/browser/abstract-resource-preference-provider.js":
/*!***********************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/abstract-resource-preference-provider.js ***!
  \***********************************************************************************************/
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
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-null/no-null */
var jsoncparser = __webpack_require__(/*! jsonc-parser */ "../node_modules/jsonc-parser/lib/esm/main.js");
var json_1 = __webpack_require__(/*! @phosphor/coreutils/lib/json */ "../node_modules/@phosphor/coreutils/lib/json.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var message_service_1 = __webpack_require__(/*! @theia/core/lib/common/message-service */ "../node_modules/@theia/core/lib/common/message-service.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var preference_configurations_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences/preference-configurations */ "../node_modules/@theia/core/lib/browser/preferences/preference-configurations.js");
var monaco_text_model_service_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-text-model-service */ "../node_modules/@theia/monaco/lib/browser/monaco-text-model-service.js");
var monaco_workspace_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-workspace */ "../node_modules/@theia/monaco/lib/browser/monaco-workspace.js");
var promise_util_1 = __webpack_require__(/*! @theia/core/lib/common/promise-util */ "../node_modules/@theia/core/lib/common/promise-util.js");
var AbstractResourcePreferenceProvider = /** @class */ (function (_super) {
    __extends(AbstractResourcePreferenceProvider, _super);
    function AbstractResourcePreferenceProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.preferences = {};
        _this.loading = new promise_util_1.Deferred();
        return _this;
    }
    AbstractResourcePreferenceProvider.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uri, reference;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = this.getUri();
                        this.toDispose.push(disposable_1.Disposable.create(function () { return _this.loading.reject(new Error("preference provider for '" + uri + "' was disposed")); }));
                        this._ready.resolve();
                        return [4 /*yield*/, this.textModelService.createModelReference(uri)];
                    case 1:
                        reference = _a.sent();
                        if (this.toDispose.disposed) {
                            reference.dispose();
                            return [2 /*return*/];
                        }
                        this.model = reference.object;
                        this.loading.resolve();
                        this.toDispose.push(reference);
                        this.toDispose.push(disposable_1.Disposable.create(function () { return _this.model = undefined; }));
                        this.readPreferences();
                        this.toDispose.push(this.model.onDidChangeContent(function () { return _this.readPreferences(); }));
                        this.toDispose.push(this.model.onDirtyChanged(function () { return _this.readPreferences(); }));
                        this.toDispose.push(this.model.onDidChangeValid(function () { return _this.readPreferences(); }));
                        this.toDispose.push(disposable_1.Disposable.create(function () { return _this.reset(); }));
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(AbstractResourcePreferenceProvider.prototype, "valid", {
        get: function () {
            return this.model && this.model.valid || false;
        },
        enumerable: true,
        configurable: true
    });
    AbstractResourcePreferenceProvider.prototype.getConfigUri = function (resourceUri) {
        if (!resourceUri) {
            return this.getUri();
        }
        return this.valid && this.contains(resourceUri) ? this.getUri() : undefined;
    };
    AbstractResourcePreferenceProvider.prototype.contains = function (resourceUri) {
        if (!resourceUri) {
            return true;
        }
        var domain = this.getDomain();
        if (!domain) {
            return true;
        }
        var resourcePath = new uri_1.default(resourceUri).path;
        return domain.some(function (uri) { return new uri_1.default(uri).path.relativity(resourcePath) >= 0; });
    };
    AbstractResourcePreferenceProvider.prototype.getPreferences = function (resourceUri) {
        return this.valid && this.contains(resourceUri) ? this.preferences : {};
    };
    AbstractResourcePreferenceProvider.prototype.setPreference = function (key, value, resourceUri) {
        return __awaiter(this, void 0, void 0, function () {
            var path, content, textModel, editOperations, _a, insertSpaces, tabSize, defaultEOL, _b, _c, edit, start, end, e_1, message;
            var e_2, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.loading.promise];
                    case 1:
                        _e.sent();
                        if (!this.model) {
                            return [2 /*return*/, false];
                        }
                        if (!this.contains(resourceUri)) {
                            return [2 /*return*/, false];
                        }
                        path = this.getPath(key);
                        if (!path) {
                            return [2 /*return*/, false];
                        }
                        _e.label = 2;
                    case 2:
                        _e.trys.push([2, 4, , 5]);
                        content = this.model.getText().trim();
                        if (!content && value === undefined) {
                            return [2 /*return*/, true];
                        }
                        textModel = this.model.textEditorModel;
                        editOperations = [];
                        if (path.length || value !== undefined) {
                            _a = textModel.getOptions(), insertSpaces = _a.insertSpaces, tabSize = _a.tabSize, defaultEOL = _a.defaultEOL;
                            try {
                                for (_b = __values(jsoncparser.modify(content, path, value, {
                                    formattingOptions: {
                                        insertSpaces: insertSpaces,
                                        tabSize: tabSize,
                                        eol: defaultEOL === monaco.editor.DefaultEndOfLine.LF ? '\n' : '\r\n'
                                    }
                                })), _c = _b.next(); !_c.done; _c = _b.next()) {
                                    edit = _c.value;
                                    start = textModel.getPositionAt(edit.offset);
                                    end = textModel.getPositionAt(edit.offset + edit.length);
                                    editOperations.push({
                                        range: monaco.Range.fromPositions(start, end),
                                        text: edit.content || null,
                                        forceMoveMarkers: false
                                    });
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                        }
                        else {
                            editOperations.push({
                                range: textModel.getFullModelRange(),
                                text: null,
                                forceMoveMarkers: false
                            });
                        }
                        return [4 /*yield*/, this.workspace.applyBackgroundEdit(this.model, editOperations)];
                    case 3:
                        _e.sent();
                        return [2 /*return*/, true];
                    case 4:
                        e_1 = _e.sent();
                        message = "Failed to update the value of '" + key + "' in '" + this.getUri() + "'.";
                        this.messageService.error(message + " Please check if it is corrupted.");
                        console.error("" + message, e_1);
                        return [2 /*return*/, false];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AbstractResourcePreferenceProvider.prototype.getPath = function (preferenceName) {
        return [preferenceName];
    };
    /**
     * It HAS to be sync to ensure that `setPreference` returns only when values are updated
     * or any other operation modifying the monaco model content.
     */
    AbstractResourcePreferenceProvider.prototype.readPreferences = function () {
        var model = this.model;
        if (!model || model.dirty) {
            return;
        }
        try {
            var preferences = void 0;
            if (model.valid) {
                var content = model.getText();
                preferences = this.getParsedContent(content);
            }
            else {
                preferences = {};
            }
            this.handlePreferenceChanges(preferences);
        }
        catch (e) {
            console.error("Failed to load preferences from '" + this.getUri() + "'.", e);
        }
    };
    AbstractResourcePreferenceProvider.prototype.getParsedContent = function (content) {
        var jsonData = this.parse(content);
        var preferences = {};
        if (typeof jsonData !== 'object') {
            return preferences;
        }
        // eslint-disable-next-line guard-for-in
        for (var preferenceName in jsonData) {
            var preferenceValue = jsonData[preferenceName];
            if (this.schemaProvider.testOverrideValue(preferenceName, preferenceValue)) {
                // eslint-disable-next-line guard-for-in
                for (var overriddenPreferenceName in preferenceValue) {
                    var overriddenValue = preferenceValue[overriddenPreferenceName];
                    preferences[preferenceName + "." + overriddenPreferenceName] = overriddenValue;
                }
            }
            else {
                preferences[preferenceName] = preferenceValue;
            }
        }
        return preferences;
    };
    AbstractResourcePreferenceProvider.prototype.parse = function (content) {
        content = content.trim();
        if (!content) {
            return undefined;
        }
        var strippedContent = jsoncparser.stripComments(content);
        return jsoncparser.parse(strippedContent);
    };
    AbstractResourcePreferenceProvider.prototype.handlePreferenceChanges = function (newPrefs) {
        var e_3, _a;
        var oldPrefs = Object.assign({}, this.preferences);
        this.preferences = newPrefs;
        var prefNames = new Set(__spread(Object.keys(oldPrefs), Object.keys(newPrefs)));
        var prefChanges = [];
        var uri = this.getUri();
        try {
            for (var _b = __values(prefNames.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var prefName = _c.value;
                var oldValue = oldPrefs[prefName];
                var newValue = newPrefs[prefName];
                var schemaProperties = this.schemaProvider.getCombinedSchema().properties[prefName];
                if (schemaProperties) {
                    var scope = schemaProperties.scope;
                    // do not emit the change event if the change is made out of the defined preference scope
                    if (!this.schemaProvider.isValidInScope(prefName, this.getScope())) {
                        console.warn("Preference " + prefName + " in " + uri + " can only be defined in scopes: " + browser_1.PreferenceScope.getScopeNames(scope).join(', ') + ".");
                        continue;
                    }
                }
                if (newValue === undefined && oldValue !== newValue
                    || oldValue === undefined && newValue !== oldValue // JSONExt.deepEqual() does not support handling `undefined`
                    || !json_1.JSONExt.deepEqual(oldValue, newValue)) {
                    prefChanges.push({
                        preferenceName: prefName, newValue: newValue, oldValue: oldValue, scope: this.getScope(), domain: this.getDomain()
                    });
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        if (prefChanges.length > 0) { // do not emit the change event if the pref value is not changed
            this.emitPreferencesChangedEvent(prefChanges);
        }
    };
    AbstractResourcePreferenceProvider.prototype.reset = function () {
        var e_4, _a;
        var preferences = this.preferences;
        this.preferences = {};
        var changes = [];
        try {
            for (var _b = __values(Object.keys(preferences)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var prefName = _c.value;
                var value = preferences[prefName];
                if (value !== undefined) {
                    changes.push({
                        preferenceName: prefName, newValue: undefined, oldValue: value, scope: this.getScope(), domain: this.getDomain()
                    });
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        if (changes.length > 0) {
            this.emitPreferencesChangedEvent(changes);
        }
    };
    __decorate([
        inversify_1.inject(browser_1.PreferenceService),
        __metadata("design:type", Object)
    ], AbstractResourcePreferenceProvider.prototype, "preferenceService", void 0);
    __decorate([
        inversify_1.inject(message_service_1.MessageService),
        __metadata("design:type", message_service_1.MessageService)
    ], AbstractResourcePreferenceProvider.prototype, "messageService", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceSchemaProvider),
        __metadata("design:type", browser_1.PreferenceSchemaProvider)
    ], AbstractResourcePreferenceProvider.prototype, "schemaProvider", void 0);
    __decorate([
        inversify_1.inject(preference_configurations_1.PreferenceConfigurations),
        __metadata("design:type", preference_configurations_1.PreferenceConfigurations)
    ], AbstractResourcePreferenceProvider.prototype, "configurations", void 0);
    __decorate([
        inversify_1.inject(monaco_text_model_service_1.MonacoTextModelService),
        __metadata("design:type", monaco_text_model_service_1.MonacoTextModelService)
    ], AbstractResourcePreferenceProvider.prototype, "textModelService", void 0);
    __decorate([
        inversify_1.inject(monaco_workspace_1.MonacoWorkspace),
        __metadata("design:type", monaco_workspace_1.MonacoWorkspace)
    ], AbstractResourcePreferenceProvider.prototype, "workspace", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AbstractResourcePreferenceProvider.prototype, "init", null);
    AbstractResourcePreferenceProvider = __decorate([
        inversify_1.injectable()
    ], AbstractResourcePreferenceProvider);
    return AbstractResourcePreferenceProvider;
}(browser_1.PreferenceProvider));
exports.AbstractResourcePreferenceProvider = AbstractResourcePreferenceProvider;


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/folder-preference-provider.js":
/*!************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/folder-preference-provider.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var abstract_resource_preference_provider_1 = __webpack_require__(/*! ./abstract-resource-preference-provider */ "../node_modules/@theia/preferences/lib/browser/abstract-resource-preference-provider.js");
var workspace_service_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-service */ "../node_modules/@theia/workspace/lib/browser/workspace-service.js");
exports.FolderPreferenceProviderFactory = Symbol('FolderPreferenceProviderFactory');
exports.FolderPreferenceProviderOptions = Symbol('FolderPreferenceProviderOptions');
var FolderPreferenceProvider = /** @class */ (function (_super) {
    __extends(FolderPreferenceProvider, _super);
    function FolderPreferenceProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FolderPreferenceProvider.prototype, "folderUri", {
        get: function () {
            if (!this._folderUri) {
                this._folderUri = new uri_1.default(this.options.folder.uri);
            }
            return this._folderUri;
        },
        enumerable: true,
        configurable: true
    });
    FolderPreferenceProvider.prototype.getUri = function () {
        return this.options.configUri;
    };
    FolderPreferenceProvider.prototype.getScope = function () {
        if (!this.workspaceService.isMultiRootWorkspaceOpened) {
            // when FolderPreferenceProvider is used as a delegate of WorkspacePreferenceProvider in a one-folder workspace
            return browser_1.PreferenceScope.Workspace;
        }
        return browser_1.PreferenceScope.Folder;
    };
    FolderPreferenceProvider.prototype.getDomain = function () {
        return [this.folderUri.toString()];
    };
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], FolderPreferenceProvider.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(exports.FolderPreferenceProviderOptions),
        __metadata("design:type", Object)
    ], FolderPreferenceProvider.prototype, "options", void 0);
    FolderPreferenceProvider = __decorate([
        inversify_1.injectable()
    ], FolderPreferenceProvider);
    return FolderPreferenceProvider;
}(abstract_resource_preference_provider_1.AbstractResourcePreferenceProvider));
exports.FolderPreferenceProvider = FolderPreferenceProvider;


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/folders-preferences-provider.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/folders-preferences-provider.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
/* eslint-disable @typescript-eslint/no-explicit-any */
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var preference_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences/preference-provider */ "../node_modules/@theia/core/lib/browser/preferences/preference-provider.js");
var workspace_service_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-service */ "../node_modules/@theia/workspace/lib/browser/workspace-service.js");
var preference_configurations_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences/preference-configurations */ "../node_modules/@theia/core/lib/browser/preferences/preference-configurations.js");
var folder_preference_provider_1 = __webpack_require__(/*! ./folder-preference-provider */ "../node_modules/@theia/preferences/lib/browser/folder-preference-provider.js");
var FoldersPreferencesProvider = /** @class */ (function (_super) {
    __extends(FoldersPreferencesProvider, _super);
    function FoldersPreferencesProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.providers = new Map();
        return _this;
    }
    FoldersPreferencesProvider.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var readyPromises, _a, _b, provider;
            var e_1, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.workspaceService.roots];
                    case 1:
                        _d.sent();
                        this.updateProviders();
                        this.workspaceService.onWorkspaceChanged(function () { return _this.updateProviders(); });
                        readyPromises = [];
                        try {
                            for (_a = __values(this.providers.values()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                provider = _b.value;
                                readyPromises.push(provider.ready.catch(function (e) { return console.error(e); }));
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        Promise.all(readyPromises).then(function () { return _this._ready.resolve(); });
                        return [2 /*return*/];
                }
            });
        });
    };
    FoldersPreferencesProvider.prototype.updateProviders = function () {
        var e_2, _a, e_3, _b, e_4, _c, e_5, _d;
        var roots = this.workspaceService.tryGetRoots();
        var toDelete = new Set(this.providers.keys());
        try {
            for (var roots_1 = __values(roots), roots_1_1 = roots_1.next(); !roots_1_1.done; roots_1_1 = roots_1.next()) {
                var folder = roots_1_1.value;
                try {
                    for (var _e = (e_3 = void 0, __values(this.configurations.getPaths())), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var configPath = _f.value;
                        try {
                            for (var _g = (e_4 = void 0, __values(__spread(this.configurations.getSectionNames(), [this.configurations.getConfigName()]))), _h = _g.next(); !_h.done; _h = _g.next()) {
                                var configName = _h.value;
                                var configUri = this.configurations.createUri(new uri_1.default(folder.uri), configPath, configName);
                                var key = configUri.toString();
                                toDelete.delete(key);
                                if (!this.providers.has(key)) {
                                    var provider = this.createProvider({ folder: folder, configUri: configUri });
                                    this.providers.set(key, provider);
                                }
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (_h && !_h.done && (_c = _g.return)) _c.call(_g);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (roots_1_1 && !roots_1_1.done && (_a = roots_1.return)) _a.call(roots_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        try {
            for (var toDelete_1 = __values(toDelete), toDelete_1_1 = toDelete_1.next(); !toDelete_1_1.done; toDelete_1_1 = toDelete_1.next()) {
                var key = toDelete_1_1.value;
                var provider = this.providers.get(key);
                if (provider) {
                    this.providers.delete(key);
                    provider.dispose();
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (toDelete_1_1 && !toDelete_1_1.done && (_d = toDelete_1.return)) _d.call(toDelete_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
    };
    FoldersPreferencesProvider.prototype.getConfigUri = function (resourceUri) {
        var e_6, _a;
        try {
            for (var _b = __values(this.getFolderProviders(resourceUri)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var provider = _c.value;
                var configUri = provider.getConfigUri(resourceUri);
                if (this.configurations.isConfigUri(configUri)) {
                    return configUri;
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return undefined;
    };
    FoldersPreferencesProvider.prototype.getContainingConfigUri = function (resourceUri) {
        var e_7, _a;
        try {
            for (var _b = __values(this.getFolderProviders(resourceUri)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var provider = _c.value;
                var configUri = provider.getConfigUri();
                if (this.configurations.isConfigUri(configUri) && provider.contains(resourceUri)) {
                    return configUri;
                }
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return undefined;
    };
    FoldersPreferencesProvider.prototype.getDomain = function () {
        return this.workspaceService.tryGetRoots().map(function (root) { return root.uri; });
    };
    FoldersPreferencesProvider.prototype.resolve = function (preferenceName, resourceUri) {
        var e_8, _a, e_9, _b;
        var result = {};
        var groups = this.groupProvidersByConfigName(resourceUri);
        try {
            for (var _c = __values(groups.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var group = _d.value;
                try {
                    for (var group_1 = (e_9 = void 0, __values(group)), group_1_1 = group_1.next(); !group_1_1.done; group_1_1 = group_1.next()) {
                        var provider = group_1_1.value;
                        var _e = provider.resolve(preferenceName, resourceUri), value = _e.value, configUri = _e.configUri;
                        if (configUri && value !== undefined) {
                            result.configUri = configUri;
                            result.value = preference_provider_1.PreferenceProvider.merge(result.value, value);
                            break;
                        }
                    }
                }
                catch (e_9_1) { e_9 = { error: e_9_1 }; }
                finally {
                    try {
                        if (group_1_1 && !group_1_1.done && (_b = group_1.return)) _b.call(group_1);
                    }
                    finally { if (e_9) throw e_9.error; }
                }
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_8) throw e_8.error; }
        }
        return result;
    };
    FoldersPreferencesProvider.prototype.getPreferences = function (resourceUri) {
        var e_10, _a, e_11, _b;
        var result = {};
        var groups = this.groupProvidersByConfigName(resourceUri);
        try {
            for (var _c = __values(groups.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var group = _d.value;
                try {
                    for (var group_2 = (e_11 = void 0, __values(group)), group_2_1 = group_2.next(); !group_2_1.done; group_2_1 = group_2.next()) {
                        var provider = group_2_1.value;
                        if (provider.getConfigUri(resourceUri)) {
                            var preferences = provider.getPreferences();
                            result = preference_provider_1.PreferenceProvider.merge(result, preferences);
                            break;
                        }
                    }
                }
                catch (e_11_1) { e_11 = { error: e_11_1 }; }
                finally {
                    try {
                        if (group_2_1 && !group_2_1.done && (_b = group_2.return)) _b.call(group_2);
                    }
                    finally { if (e_11) throw e_11.error; }
                }
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_10) throw e_10.error; }
        }
        return result;
    };
    FoldersPreferencesProvider.prototype.setPreference = function (preferenceName, value, resourceUri) {
        return __awaiter(this, void 0, void 0, function () {
            var sectionName, configName, providers, configPath, iterator, _loop_1, this_1, providers_1, providers_1_1, provider, next, provider;
            var e_12, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        sectionName = preferenceName.split('.', 1)[0];
                        configName = this.configurations.isSectionName(sectionName) ? sectionName : this.configurations.getConfigName();
                        providers = this.getFolderProviders(resourceUri);
                        iterator = [];
                        _loop_1 = function (provider) {
                            if (configPath === undefined) {
                                var configUri = provider.getConfigUri(resourceUri);
                                if (configUri) {
                                    configPath = this_1.configurations.getPath(configUri);
                                }
                            }
                            if (this_1.configurations.getName(provider.getConfigUri()) === configName) {
                                iterator.push(function () {
                                    if (provider.getConfigUri(resourceUri)) {
                                        return provider;
                                    }
                                    iterator.push(function () {
                                        if (_this.configurations.getPath(provider.getConfigUri()) === configPath) {
                                            return provider;
                                        }
                                        iterator.push(function () { return provider; });
                                    });
                                });
                            }
                        };
                        this_1 = this;
                        try {
                            for (providers_1 = __values(providers), providers_1_1 = providers_1.next(); !providers_1_1.done; providers_1_1 = providers_1.next()) {
                                provider = providers_1_1.value;
                                _loop_1(provider);
                            }
                        }
                        catch (e_12_1) { e_12 = { error: e_12_1 }; }
                        finally {
                            try {
                                if (providers_1_1 && !providers_1_1.done && (_a = providers_1.return)) _a.call(providers_1);
                            }
                            finally { if (e_12) throw e_12.error; }
                        }
                        next = iterator.shift();
                        _b.label = 1;
                    case 1:
                        if (!next) return [3 /*break*/, 4];
                        provider = next();
                        if (!provider) return [3 /*break*/, 3];
                        return [4 /*yield*/, provider.setPreference(preferenceName, value, resourceUri)];
                    case 2:
                        if (_b.sent()) {
                            return [2 /*return*/, true];
                        }
                        _b.label = 3;
                    case 3:
                        next = iterator.shift();
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, false];
                }
            });
        });
    };
    FoldersPreferencesProvider.prototype.groupProvidersByConfigName = function (resourceUri) {
        var e_13, _a, e_14, _b;
        var groups = new Map();
        var providers = this.getFolderProviders(resourceUri);
        try {
            for (var _c = __values(__spread([this.configurations.getConfigName()], this.configurations.getSectionNames())), _d = _c.next(); !_d.done; _d = _c.next()) {
                var configName = _d.value;
                var group = [];
                try {
                    for (var providers_2 = (e_14 = void 0, __values(providers)), providers_2_1 = providers_2.next(); !providers_2_1.done; providers_2_1 = providers_2.next()) {
                        var provider = providers_2_1.value;
                        if (this.configurations.getName(provider.getConfigUri()) === configName) {
                            group.push(provider);
                        }
                    }
                }
                catch (e_14_1) { e_14 = { error: e_14_1 }; }
                finally {
                    try {
                        if (providers_2_1 && !providers_2_1.done && (_b = providers_2.return)) _b.call(providers_2);
                    }
                    finally { if (e_14) throw e_14.error; }
                }
                groups.set(configName, group);
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_13) throw e_13.error; }
        }
        return groups;
    };
    FoldersPreferencesProvider.prototype.getFolderProviders = function (resourceUri) {
        var e_15, _a;
        if (!resourceUri) {
            return [];
        }
        var resourcePath = new uri_1.default(resourceUri).path;
        var folder = { relativity: Number.MAX_SAFE_INTEGER };
        var providers = new Map();
        try {
            for (var _b = __values(this.providers.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var provider = _c.value;
                var uri = provider.folderUri.toString();
                var folderProviders = (providers.get(uri) || []);
                folderProviders.push(provider);
                providers.set(uri, folderProviders);
                var relativity = provider.folderUri.path.relativity(resourcePath);
                if (relativity >= 0 && folder.relativity > relativity) {
                    folder = { relativity: relativity, uri: uri };
                }
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_15) throw e_15.error; }
        }
        return folder.uri && providers.get(folder.uri) || [];
    };
    FoldersPreferencesProvider.prototype.createProvider = function (options) {
        var _this = this;
        var provider = this.folderPreferenceProviderFactory(options);
        this.toDispose.push(provider);
        this.toDispose.push(provider.onDidPreferencesChanged(function (change) { return _this.onDidPreferencesChangedEmitter.fire(change); }));
        return provider;
    };
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], FoldersPreferencesProvider.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(folder_preference_provider_1.FolderPreferenceProviderFactory),
        __metadata("design:type", Function)
    ], FoldersPreferencesProvider.prototype, "folderPreferenceProviderFactory", void 0);
    __decorate([
        inversify_1.inject(preference_configurations_1.PreferenceConfigurations),
        __metadata("design:type", preference_configurations_1.PreferenceConfigurations)
    ], FoldersPreferencesProvider.prototype, "configurations", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], FoldersPreferencesProvider.prototype, "init", null);
    FoldersPreferencesProvider = __decorate([
        inversify_1.injectable()
    ], FoldersPreferencesProvider);
    return FoldersPreferencesProvider;
}(preference_provider_1.PreferenceProvider));
exports.FoldersPreferencesProvider = FoldersPreferencesProvider;


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/user-preference-provider.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/user-preference-provider.js ***!
  \**********************************************************************************/
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var abstract_resource_preference_provider_1 = __webpack_require__(/*! ./abstract-resource-preference-provider */ "../node_modules/@theia/preferences/lib/browser/abstract-resource-preference-provider.js");
var browser_1 = __webpack_require__(/*! @theia/userstorage/lib/browser */ "../node_modules/@theia/userstorage/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
exports.USER_PREFERENCE_URI = new uri_1.default().withScheme(browser_1.UserStorageUri.SCHEME).withPath('settings.json');
var UserPreferenceProvider = /** @class */ (function (_super) {
    __extends(UserPreferenceProvider, _super);
    function UserPreferenceProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserPreferenceProvider.prototype.getUri = function () {
        return exports.USER_PREFERENCE_URI;
    };
    UserPreferenceProvider.prototype.getScope = function () {
        return browser_2.PreferenceScope.User;
    };
    UserPreferenceProvider = __decorate([
        inversify_1.injectable()
    ], UserPreferenceProvider);
    return UserPreferenceProvider;
}(abstract_resource_preference_provider_1.AbstractResourcePreferenceProvider));
exports.UserPreferenceProvider = UserPreferenceProvider;


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/workspace-file-preference-provider.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/workspace-file-preference-provider.js ***!
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
var preferences_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences */ "../node_modules/@theia/core/lib/browser/preferences/index.js");
var workspace_service_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-service */ "../node_modules/@theia/workspace/lib/browser/workspace-service.js");
var abstract_resource_preference_provider_1 = __webpack_require__(/*! ./abstract-resource-preference-provider */ "../node_modules/@theia/preferences/lib/browser/abstract-resource-preference-provider.js");
var WorkspaceFilePreferenceProviderOptions = /** @class */ (function () {
    function WorkspaceFilePreferenceProviderOptions() {
    }
    WorkspaceFilePreferenceProviderOptions = __decorate([
        inversify_1.injectable()
    ], WorkspaceFilePreferenceProviderOptions);
    return WorkspaceFilePreferenceProviderOptions;
}());
exports.WorkspaceFilePreferenceProviderOptions = WorkspaceFilePreferenceProviderOptions;
exports.WorkspaceFilePreferenceProviderFactory = Symbol('WorkspaceFilePreferenceProviderFactory');
var WorkspaceFilePreferenceProvider = /** @class */ (function (_super) {
    __extends(WorkspaceFilePreferenceProvider, _super);
    function WorkspaceFilePreferenceProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WorkspaceFilePreferenceProvider.prototype.getUri = function () {
        return this.options.workspaceUri;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    WorkspaceFilePreferenceProvider.prototype.parse = function (content) {
        var data = _super.prototype.parse.call(this, content);
        if (workspace_service_1.WorkspaceData.is(data)) {
            return data.settings || {};
        }
        return {};
    };
    WorkspaceFilePreferenceProvider.prototype.getPath = function (preferenceName) {
        return ['settings', preferenceName];
    };
    WorkspaceFilePreferenceProvider.prototype.getScope = function () {
        return preferences_1.PreferenceScope.Workspace;
    };
    WorkspaceFilePreferenceProvider.prototype.getDomain = function () {
        // workspace file is treated as part of the workspace
        return this.workspaceService.tryGetRoots().map(function (r) { return r.uri; }).concat([this.options.workspaceUri.toString()]);
    };
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], WorkspaceFilePreferenceProvider.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(WorkspaceFilePreferenceProviderOptions),
        __metadata("design:type", WorkspaceFilePreferenceProviderOptions)
    ], WorkspaceFilePreferenceProvider.prototype, "options", void 0);
    WorkspaceFilePreferenceProvider = __decorate([
        inversify_1.injectable()
    ], WorkspaceFilePreferenceProvider);
    return WorkspaceFilePreferenceProvider;
}(abstract_resource_preference_provider_1.AbstractResourcePreferenceProvider));
exports.WorkspaceFilePreferenceProvider = WorkspaceFilePreferenceProvider;


/***/ }),

/***/ "../node_modules/@theia/preferences/lib/browser/workspace-preference-provider.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@theia/preferences/lib/browser/workspace-preference-provider.js ***!
  \***************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
var preferences_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences */ "../node_modules/@theia/core/lib/browser/preferences/index.js");
var workspace_service_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-service */ "../node_modules/@theia/workspace/lib/browser/workspace-service.js");
var workspace_file_preference_provider_1 = __webpack_require__(/*! ./workspace-file-preference-provider */ "../node_modules/@theia/preferences/lib/browser/workspace-file-preference-provider.js");
var WorkspacePreferenceProvider = /** @class */ (function (_super) {
    __extends(WorkspacePreferenceProvider, _super);
    function WorkspacePreferenceProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toDisposeOnEnsureDelegateUpToDate = new disposable_1.DisposableCollection();
        return _this;
    }
    WorkspacePreferenceProvider.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._ready.resolve();
                this.ensureDelegateUpToDate();
                this.workspaceService.onWorkspaceLocationChanged(function () { return _this.ensureDelegateUpToDate(); });
                return [2 /*return*/];
            });
        });
    };
    WorkspacePreferenceProvider.prototype.getConfigUri = function (resourceUri) {
        if (resourceUri === void 0) { resourceUri = this.ensureResourceUri(); }
        var delegate = this.delegate;
        return delegate && delegate.getConfigUri(resourceUri);
    };
    Object.defineProperty(WorkspacePreferenceProvider.prototype, "delegate", {
        get: function () {
            if (!this._delegate) {
                this.ensureDelegateUpToDate();
            }
            return this._delegate;
        },
        enumerable: true,
        configurable: true
    });
    WorkspacePreferenceProvider.prototype.ensureDelegateUpToDate = function () {
        var _this = this;
        var delegate = this.createDelegate();
        if (this._delegate !== delegate) {
            this.toDisposeOnEnsureDelegateUpToDate.dispose();
            this.toDispose.push(this.toDisposeOnEnsureDelegateUpToDate);
            this._delegate = delegate;
            if (delegate instanceof workspace_file_preference_provider_1.WorkspaceFilePreferenceProvider) {
                this.toDisposeOnEnsureDelegateUpToDate.pushAll([
                    delegate,
                    delegate.onDidPreferencesChanged(function (changes) { return _this.onDidPreferencesChangedEmitter.fire(changes); })
                ]);
            }
        }
    };
    WorkspacePreferenceProvider.prototype.createDelegate = function () {
        var workspace = this.workspaceService.workspace;
        if (!workspace) {
            return undefined;
        }
        if (!this.workspaceService.isMultiRootWorkspaceOpened) {
            return this.folderPreferenceProvider;
        }
        return this.workspaceFileProviderFactory({
            workspaceUri: new uri_1.default(workspace.uri)
        });
    };
    WorkspacePreferenceProvider.prototype.get = function (preferenceName, resourceUri) {
        if (resourceUri === void 0) { resourceUri = this.ensureResourceUri(); }
        var delegate = this.delegate;
        return delegate ? delegate.get(preferenceName, resourceUri) : undefined;
    };
    WorkspacePreferenceProvider.prototype.resolve = function (preferenceName, resourceUri) {
        if (resourceUri === void 0) { resourceUri = this.ensureResourceUri(); }
        var delegate = this.delegate;
        return delegate ? delegate.resolve(preferenceName, resourceUri) : {};
    };
    WorkspacePreferenceProvider.prototype.getPreferences = function (resourceUri) {
        if (resourceUri === void 0) { resourceUri = this.ensureResourceUri(); }
        var delegate = this.delegate;
        return delegate ? delegate.getPreferences(resourceUri) : {};
    };
    WorkspacePreferenceProvider.prototype.setPreference = function (preferenceName, value, resourceUri) {
        if (resourceUri === void 0) { resourceUri = this.ensureResourceUri(); }
        return __awaiter(this, void 0, void 0, function () {
            var delegate;
            return __generator(this, function (_a) {
                delegate = this.delegate;
                if (delegate) {
                    return [2 /*return*/, delegate.setPreference(preferenceName, value, resourceUri)];
                }
                return [2 /*return*/, false];
            });
        });
    };
    WorkspacePreferenceProvider.prototype.ensureResourceUri = function () {
        if (this.workspaceService.workspace && !this.workspaceService.isMultiRootWorkspaceOpened) {
            return this.workspaceService.workspace.uri;
        }
        return undefined;
    };
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], WorkspacePreferenceProvider.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(workspace_file_preference_provider_1.WorkspaceFilePreferenceProviderFactory),
        __metadata("design:type", Function)
    ], WorkspacePreferenceProvider.prototype, "workspaceFileProviderFactory", void 0);
    __decorate([
        inversify_1.inject(preferences_1.PreferenceProvider), inversify_1.named(preferences_1.PreferenceScope.Folder),
        __metadata("design:type", preferences_1.PreferenceProvider)
    ], WorkspacePreferenceProvider.prototype, "folderPreferenceProvider", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], WorkspacePreferenceProvider.prototype, "init", null);
    WorkspacePreferenceProvider = __decorate([
        inversify_1.injectable()
    ], WorkspacePreferenceProvider);
    return WorkspacePreferenceProvider;
}(preferences_1.PreferenceProvider));
exports.WorkspacePreferenceProvider = WorkspacePreferenceProvider;


/***/ }),

/***/ "../node_modules/@theia/userstorage/lib/browser/index.js":
/*!***************************************************************!*\
  !*** ../node_modules/@theia/userstorage/lib/browser/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
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
__export(__webpack_require__(/*! ./user-storage-service */ "../node_modules/@theia/userstorage/lib/browser/user-storage-service.js"));
__export(__webpack_require__(/*! ./user-storage-resource */ "../node_modules/@theia/userstorage/lib/browser/user-storage-resource.js"));
__export(__webpack_require__(/*! ./user-storage-uri */ "../node_modules/@theia/userstorage/lib/browser/user-storage-uri.js"));
__export(__webpack_require__(/*! ./user-storage-service-filesystem */ "../node_modules/@theia/userstorage/lib/browser/user-storage-service-filesystem.js"));
__export(__webpack_require__(/*! ./user-storage-frontend-module */ "../node_modules/@theia/userstorage/lib/browser/user-storage-frontend-module.js"));


/***/ })

}]);
//# sourceMappingURL=39.bundle.js.map
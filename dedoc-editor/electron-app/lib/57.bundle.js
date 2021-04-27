(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extension-editor-manager.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@theia/vsx-registry/lib/browser/vsx-extension-editor-manager.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var vsx_extension_uri_1 = __webpack_require__(/*! ../common/vsx-extension-uri */ "../node_modules/@theia/vsx-registry/lib/common/vsx-extension-uri.js");
var vsx_extension_editor_1 = __webpack_require__(/*! ./vsx-extension-editor */ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extension-editor.js");
var VSXExtensionEditorManager = /** @class */ (function (_super) {
    __extends(VSXExtensionEditorManager, _super);
    function VSXExtensionEditorManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = vsx_extension_editor_1.VSXExtensionEditor.ID;
        return _this;
    }
    VSXExtensionEditorManager.prototype.canHandle = function (uri) {
        var id = vsx_extension_uri_1.VSXExtensionUri.toId(uri);
        return !!id ? 500 : 0;
    };
    VSXExtensionEditorManager.prototype.createWidgetOptions = function (uri) {
        var id = vsx_extension_uri_1.VSXExtensionUri.toId(uri);
        if (!id) {
            throw new Error('Invalid URI: ' + uri.toString());
        }
        return { id: id };
    };
    VSXExtensionEditorManager = __decorate([
        inversify_1.injectable()
    ], VSXExtensionEditorManager);
    return VSXExtensionEditorManager;
}(browser_1.WidgetOpenHandler));
exports.VSXExtensionEditorManager = VSXExtensionEditorManager;


/***/ }),

/***/ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extension-editor.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@theia/vsx-registry/lib/browser/vsx-extension-editor.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var vsx_extension_1 = __webpack_require__(/*! ./vsx-extension */ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extension.js");
var vsx_extensions_model_1 = __webpack_require__(/*! ./vsx-extensions-model */ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-model.js");
var VSXExtensionEditor = /** @class */ (function (_super) {
    __extends(VSXExtensionEditor, _super);
    function VSXExtensionEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VSXExtensionEditor_1 = VSXExtensionEditor;
    VSXExtensionEditor.prototype.init = function () {
        var _this = this;
        this.addClass('theia-vsx-extension-editor');
        this.id = VSXExtensionEditor_1.ID + ':' + this.extension.id;
        this.title.closable = true;
        this.updateTitle();
        this.title.iconClass = 'fa fa-puzzle-piece';
        this.node.tabIndex = -1;
        this.update();
        this.toDispose.push(this.model.onDidChange(function () { return _this.update(); }));
    };
    VSXExtensionEditor.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this.node.focus();
    };
    VSXExtensionEditor.prototype.onUpdateRequest = function (msg) {
        _super.prototype.onUpdateRequest.call(this, msg);
        this.updateTitle();
    };
    VSXExtensionEditor.prototype.updateTitle = function () {
        var label = 'Extension: ' + (this.extension.displayName || this.extension.name);
        this.title.label = label;
        this.title.caption = label;
    };
    VSXExtensionEditor.prototype.render = function () {
        return this.extension.renderEditor();
    };
    var VSXExtensionEditor_1;
    VSXExtensionEditor.ID = 'vsx-extension-editor';
    __decorate([
        inversify_1.inject(vsx_extension_1.VSXExtension),
        __metadata("design:type", vsx_extension_1.VSXExtension)
    ], VSXExtensionEditor.prototype, "extension", void 0);
    __decorate([
        inversify_1.inject(vsx_extensions_model_1.VSXExtensionsModel),
        __metadata("design:type", vsx_extensions_model_1.VSXExtensionsModel)
    ], VSXExtensionEditor.prototype, "model", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], VSXExtensionEditor.prototype, "init", null);
    VSXExtensionEditor = VSXExtensionEditor_1 = __decorate([
        inversify_1.injectable()
    ], VSXExtensionEditor);
    return VSXExtensionEditor;
}(browser_1.ReactWidget));
exports.VSXExtensionEditor = VSXExtensionEditor;


/***/ }),

/***/ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extension.js":
/*!************************************************************************!*\
  !*** ../node_modules/@theia/vsx-registry/lib/browser/vsx-extension.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var opener_service_1 = __webpack_require__(/*! @theia/core/lib/browser/opener-service */ "../node_modules/@theia/core/lib/browser/opener-service.js");
var hosted_plugin_1 = __webpack_require__(/*! @theia/plugin-ext/lib/hosted/browser/hosted-plugin */ "../node_modules/@theia/plugin-ext/lib/hosted/browser/hosted-plugin.js");
var plugin_protocol_1 = __webpack_require__(/*! @theia/plugin-ext/lib/common/plugin-protocol */ "../node_modules/@theia/plugin-ext/lib/common/plugin-protocol.js");
var vsx_extension_uri_1 = __webpack_require__(/*! ../common/vsx-extension-uri */ "../node_modules/@theia/vsx-registry/lib/common/vsx-extension-uri.js");
var progress_service_1 = __webpack_require__(/*! @theia/core/lib/common/progress-service */ "../node_modules/@theia/core/lib/common/progress-service.js");
var endpoint_1 = __webpack_require__(/*! @theia/core/lib/browser/endpoint */ "../node_modules/@theia/core/lib/browser/endpoint.js");
var vsx_environment_1 = __webpack_require__(/*! ../common/vsx-environment */ "../node_modules/@theia/vsx-registry/lib/common/vsx-environment.js");
var vsx_extensions_search_model_1 = __webpack_require__(/*! ./vsx-extensions-search-model */ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-search-model.js");
var VSXExtensionData = /** @class */ (function () {
    function VSXExtensionData() {
    }
    VSXExtensionData.KEYS = new Set([
        'version',
        'iconUrl',
        'publisher',
        'name',
        'displayName',
        'description',
        'averageRating',
        'downloadCount',
        'readmeUrl',
        'licenseUrl',
        'repository',
        'license',
        'readme',
        'preview',
        'namespaceAccess',
        'publishedBy'
    ]);
    VSXExtensionData = __decorate([
        inversify_1.injectable()
    ], VSXExtensionData);
    return VSXExtensionData;
}());
exports.VSXExtensionData = VSXExtensionData;
var VSXExtensionOptions = /** @class */ (function () {
    function VSXExtensionOptions() {
    }
    VSXExtensionOptions = __decorate([
        inversify_1.injectable()
    ], VSXExtensionOptions);
    return VSXExtensionOptions;
}());
exports.VSXExtensionOptions = VSXExtensionOptions;
exports.VSXExtensionFactory = Symbol('VSXExtensionFactory');
var VSXExtension = /** @class */ (function () {
    function VSXExtension() {
        this.data = {};
        this._busy = 0;
    }
    Object.defineProperty(VSXExtension.prototype, "uri", {
        get: function () {
            return vsx_extension_uri_1.VSXExtensionUri.toUri(this.id);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "id", {
        get: function () {
            return this.options.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "visible", {
        get: function () {
            return !!this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "plugin", {
        get: function () {
            return this.pluginSupport.getPlugin(this.id);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "installed", {
        get: function () {
            return !!this.plugin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "builtin", {
        get: function () {
            var plugin = this.plugin;
            var type = plugin && plugin.type;
            return type === plugin_protocol_1.PluginType.System;
        },
        enumerable: true,
        configurable: true
    });
    VSXExtension.prototype.update = function (data) {
        var e_1, _a, _b;
        try {
            for (var _c = __values(VSXExtensionData.KEYS), _d = _c.next(); !_d.done; _d = _c.next()) {
                var key = _d.value;
                if (key in data) {
                    Object.assign(this.data, (_b = {}, _b[key] = data[key], _b));
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    VSXExtension.prototype.getData = function (key) {
        var plugin = this.plugin;
        var model = plugin && plugin.metadata.model;
        if (model && key in model) {
            return model[key];
        }
        return this.data[key];
    };
    Object.defineProperty(VSXExtension.prototype, "iconUrl", {
        get: function () {
            var plugin = this.plugin;
            var iconUrl = plugin && plugin.metadata.model.iconUrl;
            if (iconUrl) {
                return new endpoint_1.Endpoint({ path: iconUrl }).getRestUrl().toString();
            }
            return this.data['iconUrl'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "publisher", {
        get: function () {
            return this.getData('publisher');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "name", {
        get: function () {
            return this.getData('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "displayName", {
        get: function () {
            return this.getData('displayName') || this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "description", {
        get: function () {
            return this.getData('description');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "version", {
        get: function () {
            return this.getData('version');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "averageRating", {
        get: function () {
            return this.getData('averageRating');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "downloadCount", {
        get: function () {
            return this.getData('downloadCount');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "readmeUrl", {
        get: function () {
            var plugin = this.plugin;
            var readmeUrl = plugin && plugin.metadata.model.readmeUrl;
            if (readmeUrl) {
                return new endpoint_1.Endpoint({ path: readmeUrl }).getRestUrl().toString();
            }
            return this.data['readmeUrl'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "licenseUrl", {
        get: function () {
            var plugin = this.plugin;
            var licenseUrl = plugin && plugin.metadata.model.licenseUrl;
            if (licenseUrl) {
                return new endpoint_1.Endpoint({ path: licenseUrl }).getRestUrl().toString();
            }
            return this.data['licenseUrl'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "repository", {
        get: function () {
            return this.getData('repository');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "license", {
        get: function () {
            return this.getData('license');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "readme", {
        get: function () {
            return this.getData('readme');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "preview", {
        get: function () {
            return this.getData('preview');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "namespaceAccess", {
        get: function () {
            return this.getData('namespaceAccess');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "publishedBy", {
        get: function () {
            return this.getData('publishedBy');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "busy", {
        get: function () {
            return !!this._busy;
        },
        enumerable: true,
        configurable: true
    });
    VSXExtension.prototype.install = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._busy++;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        return [4 /*yield*/, this.progressService.withProgress("\"Installing '" + this.id + "' extension...", 'extensions', function () {
                                return _this.pluginServer.deploy(_this.uri.toString());
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this._busy--;
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    VSXExtension.prototype.uninstall = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._busy++;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        return [4 /*yield*/, this.progressService.withProgress("Uninstalling '" + this.id + "' extension...", 'extensions', function () {
                                return _this.pluginServer.undeploy(_this.id);
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this._busy--;
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    VSXExtension.prototype.open = function (options) {
        if (options === void 0) { options = { mode: 'reveal' }; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.doOpen(this.uri, options)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VSXExtension.prototype.doOpen = function (uri, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, opener_service_1.open(this.openerService, uri, options)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VSXExtension.prototype.render = function () {
        return React.createElement(VSXExtensionComponent, { extension: this });
    };
    VSXExtension.prototype.renderEditor = function () {
        return React.createElement(VSXExtensionEditorComponent, { extension: this });
    };
    __decorate([
        inversify_1.inject(VSXExtensionOptions),
        __metadata("design:type", VSXExtensionOptions)
    ], VSXExtension.prototype, "options", void 0);
    __decorate([
        inversify_1.inject(opener_service_1.OpenerService),
        __metadata("design:type", Object)
    ], VSXExtension.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(hosted_plugin_1.HostedPluginSupport),
        __metadata("design:type", hosted_plugin_1.HostedPluginSupport)
    ], VSXExtension.prototype, "pluginSupport", void 0);
    __decorate([
        inversify_1.inject(plugin_protocol_1.PluginServer),
        __metadata("design:type", Object)
    ], VSXExtension.prototype, "pluginServer", void 0);
    __decorate([
        inversify_1.inject(progress_service_1.ProgressService),
        __metadata("design:type", progress_service_1.ProgressService)
    ], VSXExtension.prototype, "progressService", void 0);
    __decorate([
        inversify_1.inject(vsx_environment_1.VSXEnvironment),
        __metadata("design:type", vsx_environment_1.VSXEnvironment)
    ], VSXExtension.prototype, "environment", void 0);
    __decorate([
        inversify_1.inject(vsx_extensions_search_model_1.VSXExtensionsSearchModel),
        __metadata("design:type", vsx_extensions_search_model_1.VSXExtensionsSearchModel)
    ], VSXExtension.prototype, "search", void 0);
    VSXExtension = __decorate([
        inversify_1.injectable()
    ], VSXExtension);
    return VSXExtension;
}());
exports.VSXExtension = VSXExtension;
var AbstractVSXExtensionComponent = /** @class */ (function (_super) {
    __extends(AbstractVSXExtensionComponent, _super);
    function AbstractVSXExtensionComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.install = function () { return __awaiter(_this, void 0, void 0, function () {
            var pending;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.forceUpdate();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        pending = this.props.extension.install();
                        this.forceUpdate();
                        return [4 /*yield*/, pending];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.forceUpdate();
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.uninstall = function () { return __awaiter(_this, void 0, void 0, function () {
            var pending;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, , 2, 3]);
                        pending = this.props.extension.uninstall();
                        this.forceUpdate();
                        return [4 /*yield*/, pending];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.forceUpdate();
                        return [7 /*endfinally*/];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    AbstractVSXExtensionComponent.prototype.renderAction = function () {
        var extension = this.props.extension;
        var builtin = extension.builtin, busy = extension.busy, installed = extension.installed;
        if (builtin) {
            return undefined;
        }
        if (busy) {
            if (installed) {
                return React.createElement("button", { className: "theia-button action theia-mod-disabled" }, "Uninstalling");
            }
            return React.createElement("button", { className: "theia-button action prominent theia-mod-disabled" }, "Installing");
        }
        if (installed) {
            return React.createElement("button", { className: "theia-button action", onClick: this.uninstall }, "Uninstall");
        }
        return React.createElement("button", { className: "theia-button prominent action", onClick: this.install }, "Install");
    };
    return AbstractVSXExtensionComponent;
}(React.Component));
exports.AbstractVSXExtensionComponent = AbstractVSXExtensionComponent;
var downloadFormatter = new Intl.NumberFormat();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var downloadCompactFormatter = new Intl.NumberFormat(undefined, { notation: 'compact', compactDisplay: 'short' });
var VSXExtensionComponent = /** @class */ (function (_super) {
    __extends(VSXExtensionComponent, _super);
    function VSXExtensionComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VSXExtensionComponent.prototype.render = function () {
        var _a = this.props.extension, iconUrl = _a.iconUrl, publisher = _a.publisher, displayName = _a.displayName, description = _a.description, version = _a.version, downloadCount = _a.downloadCount, averageRating = _a.averageRating;
        return React.createElement("div", { className: 'theia-vsx-extension' },
            iconUrl ?
                React.createElement("img", { className: 'theia-vsx-extension-icon', src: iconUrl }) :
                React.createElement("div", { className: 'theia-vsx-extension-icon placeholder' }),
            React.createElement("div", { className: 'theia-vsx-extension-content' },
                React.createElement("div", { className: 'title' },
                    React.createElement("div", { className: 'noWrapInfo' },
                        React.createElement("span", { className: 'name' }, displayName),
                        " ",
                        React.createElement("span", { className: 'version' }, version)),
                    React.createElement("div", { className: 'stat' },
                        downloadCount && React.createElement("span", { className: 'download-count' },
                            React.createElement("i", { className: 'fa fa-download' }),
                            downloadCompactFormatter.format(downloadCount)),
                        averageRating && React.createElement("span", { className: 'average-rating' },
                            React.createElement("i", { className: 'fa fa-star' }),
                            averageRating.toFixed(1)))),
                React.createElement("div", { className: 'noWrapInfo theia-vsx-extension-description' }, description),
                React.createElement("div", { className: 'theia-vsx-extension-action-bar' },
                    React.createElement("span", { className: 'noWrapInfo theia-vsx-extension-publisher' }, publisher),
                    this.renderAction())));
    };
    return VSXExtensionComponent;
}(AbstractVSXExtensionComponent));
exports.VSXExtensionComponent = VSXExtensionComponent;
var VSXExtensionEditorComponent = /** @class */ (function (_super) {
    __extends(VSXExtensionEditorComponent, _super);
    function VSXExtensionEditorComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // TODO replace with webview
        _this.openLink = function (event) {
            if (!_this.body) {
                return;
            }
            var target = event.nativeEvent.target;
            if (!(target instanceof HTMLElement)) {
                return;
            }
            var node = target;
            while (node.tagName.toLowerCase() !== 'a') {
                if (node === _this.body) {
                    return;
                }
                if (!(node.parentElement instanceof HTMLElement)) {
                    return;
                }
                node = node.parentElement;
            }
            var href = node.getAttribute('href');
            if (href && !href.startsWith('#')) {
                event.preventDefault();
                _this.props.extension.doOpen(new uri_1.default(href));
            }
        };
        _this.openExtension = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var extension, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.stopPropagation();
                        e.preventDefault();
                        extension = this.props.extension;
                        return [4 /*yield*/, extension.environment.getRegistryUri()];
                    case 1:
                        uri = _a.sent();
                        extension.doOpen(uri.resolve('extension/' + extension.id.replace('.', '/')));
                        return [2 /*return*/];
                }
            });
        }); };
        _this.searchPublisher = function (e) {
            e.stopPropagation();
            e.preventDefault();
            var extension = _this.props.extension;
            if (extension.publisher) {
                extension.search.query = extension.publisher;
            }
        };
        _this.openPublishedBy = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var extension, homepage;
            return __generator(this, function (_a) {
                e.stopPropagation();
                e.preventDefault();
                extension = this.props.extension;
                homepage = extension.publishedBy && extension.publishedBy.homepage;
                if (homepage) {
                    extension.doOpen(new uri_1.default(homepage));
                }
                return [2 /*return*/];
            });
        }); };
        _this.openAverageRating = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var extension, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.stopPropagation();
                        e.preventDefault();
                        extension = this.props.extension;
                        return [4 /*yield*/, extension.environment.getRegistryUri()];
                    case 1:
                        uri = _a.sent();
                        extension.doOpen(uri.resolve('extension/' + extension.id.replace('.', '/') + '/reviews'));
                        return [2 /*return*/];
                }
            });
        }); };
        _this.openRepository = function (e) {
            e.stopPropagation();
            e.preventDefault();
            var extension = _this.props.extension;
            if (extension.repository) {
                extension.doOpen(new uri_1.default(extension.repository));
            }
        };
        _this.openLicense = function (e) {
            e.stopPropagation();
            e.preventDefault();
            var extension = _this.props.extension;
            var licenseUrl = extension.licenseUrl;
            if (licenseUrl) {
                extension.doOpen(new uri_1.default(licenseUrl));
            }
        };
        return _this;
    }
    VSXExtensionEditorComponent.prototype.render = function () {
        var _this = this;
        var _a = this.props.extension, builtin = _a.builtin, preview = _a.preview, id = _a.id, iconUrl = _a.iconUrl, publisher = _a.publisher, displayName = _a.displayName, description = _a.description, averageRating = _a.averageRating, downloadCount = _a.downloadCount, repository = _a.repository, license = _a.license, readme = _a.readme;
        return React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'header' },
                iconUrl ?
                    React.createElement("img", { className: 'icon-container', src: iconUrl }) :
                    React.createElement("div", { className: 'icon-container placeholder' }),
                React.createElement("div", { className: 'details' },
                    React.createElement("div", { className: 'title' },
                        React.createElement("span", { title: 'Extension name', className: 'name', onClick: this.openExtension }, displayName),
                        React.createElement("span", { title: 'Extension identifier', className: 'identifier' }, id),
                        preview && React.createElement("span", { className: 'preview' }, "Preview"),
                        builtin && React.createElement("span", { className: 'builtin' }, "Built-in")),
                    React.createElement("div", { className: 'subtitle' },
                        React.createElement("span", { title: 'Publisher name', className: 'publisher', onClick: this.searchPublisher },
                            this.renderNamespaceAccess(),
                            publisher),
                        downloadCount && React.createElement("span", { className: 'fa fa-download download-count', onClick: this.openExtension }, downloadFormatter.format(downloadCount)),
                        averageRating && React.createElement("span", { className: 'average-rating', onClick: this.openAverageRating }, this.renderStars()),
                        repository && React.createElement("span", { className: 'repository', onClick: this.openRepository }, "Repository"),
                        license && React.createElement("span", { className: 'license', onClick: this.openLicense }, license)),
                    React.createElement("div", { className: 'description noWrapInfo' }, description),
                    this.renderAction())),
            readme && React.createElement("div", { className: 'body', ref: function (body) { return _this.body = (body || undefined); }, onClick: this.openLink, dangerouslySetInnerHTML: { __html: readme } }));
    };
    VSXExtensionEditorComponent.prototype.renderNamespaceAccess = function () {
        var _a = this.props.extension, publisher = _a.publisher, namespaceAccess = _a.namespaceAccess, publishedBy = _a.publishedBy;
        if (namespaceAccess === undefined) {
            return undefined;
        }
        var tooltip = publishedBy ? " Published by \"" + publishedBy.loginName + "\"." : '';
        var icon;
        if (namespaceAccess === 'public') {
            icon = 'globe';
            tooltip = "Everyone can publish to \"" + publisher + "\" namespace." + tooltip;
        }
        else {
            icon = 'shield';
            tooltip = "Only verified owners can publish to \"" + publisher + "\" namespace." + tooltip;
        }
        return React.createElement("i", { className: "fa fa-" + icon + " namespace-access", title: tooltip, onClick: this.openPublishedBy });
    };
    VSXExtensionEditorComponent.prototype.renderStars = function () {
        var rating = this.props.extension.averageRating;
        if (typeof rating !== 'number') {
            return undefined;
        }
        var renderStarAt = function (position) { return position <= rating ?
            React.createElement("i", { className: 'fa fa-star' }) :
            position > rating && position - rating < 1 ?
                React.createElement("i", { className: 'fa fa-star-half-o' }) :
                React.createElement("i", { className: 'fa fa-star-o' }); };
        return React.createElement(React.Fragment, null,
            renderStarAt(1),
            renderStarAt(2),
            renderStarAt(3),
            renderStarAt(4),
            renderStarAt(5));
    };
    return VSXExtensionEditorComponent;
}(AbstractVSXExtensionComponent));
exports.VSXExtensionEditorComponent = VSXExtensionEditorComponent;


/***/ }),

/***/ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-contribution.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-contribution.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
var view_contribution_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/view-contribution */ "../node_modules/@theia/core/lib/browser/shell/view-contribution.js");
var vsx_extensions_view_container_1 = __webpack_require__(/*! ./vsx-extensions-view-container */ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-view-container.js");
var vsx_extensions_model_1 = __webpack_require__(/*! ./vsx-extensions-model */ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-model.js");
var color_registry_1 = __webpack_require__(/*! @theia/core/lib/browser/color-registry */ "../node_modules/@theia/core/lib/browser/color-registry.js");
var VSXExtensionsCommands;
(function (VSXExtensionsCommands) {
    VSXExtensionsCommands.CLEAR_ALL = {
        id: 'vsxExtensions.clearAll',
        category: 'Extensions',
        label: 'Clear Search Results',
        iconClass: 'clear-all'
    };
})(VSXExtensionsCommands = exports.VSXExtensionsCommands || (exports.VSXExtensionsCommands = {}));
var VSXExtensionsContribution = /** @class */ (function (_super) {
    __extends(VSXExtensionsContribution, _super);
    function VSXExtensionsContribution() {
        return _super.call(this, {
            widgetId: vsx_extensions_view_container_1.VSXExtensionsViewContainer.ID,
            widgetName: vsx_extensions_view_container_1.VSXExtensionsViewContainer.LABEL,
            defaultWidgetOptions: {
                area: 'left',
                rank: 500
            },
            toggleCommandId: 'vsxExtensions.toggle',
            toggleKeybinding: 'ctrlcmd+shift+x'
        }) || this;
    }
    VSXExtensionsContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        _super.prototype.registerCommands.call(this, commands);
        commands.registerCommand(VSXExtensionsCommands.CLEAR_ALL, {
            execute: function (w) { return _this.withWidget(w, function () { return _this.model.search.query = ''; }); },
            isEnabled: function (w) { return _this.withWidget(w, function () { return !!_this.model.search.query; }); },
            isVisible: function (w) { return _this.withWidget(w, function () { return true; }); }
        });
    };
    VSXExtensionsContribution.prototype.registerToolbarItems = function (registry) {
        registry.registerItem({
            id: VSXExtensionsCommands.CLEAR_ALL.id,
            command: VSXExtensionsCommands.CLEAR_ALL.id,
            tooltip: VSXExtensionsCommands.CLEAR_ALL.label,
            priority: 1,
            onDidChange: this.model.onDidChange
        });
    };
    VSXExtensionsContribution.prototype.registerColors = function (colors) {
        // VS Code colors should be aligned with https://code.visualstudio.com/api/references/theme-color#extensions
        colors.register({
            id: 'extensionButton.prominentBackground', defaults: {
                dark: '#327e36',
                light: '#327e36'
            }, description: 'Button background color for actions extension that stand out (e.g. install button).'
        }, {
            id: 'extensionButton.prominentForeground', defaults: {
                dark: color_registry_1.Color.white,
                light: color_registry_1.Color.white
            }, description: 'Button foreground color for actions extension that stand out (e.g. install button).'
        }, {
            id: 'extensionButton.prominentHoverBackground', defaults: {
                dark: '#28632b',
                light: '#28632b'
            }, description: 'Button background hover color for actions extension that stand out (e.g. install button).'
        });
    };
    VSXExtensionsContribution.prototype.withWidget = function (widget, fn) {
        if (widget === void 0) { widget = this.tryGetWidget(); }
        if (widget instanceof vsx_extensions_view_container_1.VSXExtensionsViewContainer && widget.id === vsx_extensions_view_container_1.VSXExtensionsViewContainer.ID) {
            return fn(widget);
        }
        return false;
    };
    __decorate([
        inversify_1.inject(vsx_extensions_model_1.VSXExtensionsModel),
        __metadata("design:type", vsx_extensions_model_1.VSXExtensionsModel)
    ], VSXExtensionsContribution.prototype, "model", void 0);
    VSXExtensionsContribution = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], VSXExtensionsContribution);
    return VSXExtensionsContribution;
}(view_contribution_1.AbstractViewContribution));
exports.VSXExtensionsContribution = VSXExtensionsContribution;


/***/ }),

/***/ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-model.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-model.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var p_debounce_1 = __webpack_require__(/*! p-debounce */ "../node_modules/p-debounce/index.js");
var showdown = __webpack_require__(/*! showdown */ "../node_modules/showdown/dist/showdown.js");
var sanitize = __webpack_require__(/*! sanitize-html */ "../node_modules/sanitize-html/dist/sanitize-html.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../node_modules/@theia/core/lib/common/event.js");
var cancellation_1 = __webpack_require__(/*! @theia/core/lib/common/cancellation */ "../node_modules/@theia/core/lib/common/cancellation.js");
var vsx_registry_api_1 = __webpack_require__(/*! ../common/vsx-registry-api */ "../node_modules/@theia/vsx-registry/lib/common/vsx-registry-api.js");
var hosted_plugin_1 = __webpack_require__(/*! @theia/plugin-ext/lib/hosted/browser/hosted-plugin */ "../node_modules/@theia/plugin-ext/lib/hosted/browser/hosted-plugin.js");
var vsx_extension_1 = __webpack_require__(/*! ./vsx-extension */ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extension.js");
var progress_service_1 = __webpack_require__(/*! @theia/core/lib/common/progress-service */ "../node_modules/@theia/core/lib/common/progress-service.js");
var vsx_extensions_search_model_1 = __webpack_require__(/*! ./vsx-extensions-search-model */ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-search-model.js");
var promise_util_1 = __webpack_require__(/*! @theia/core/lib/common/promise-util */ "../node_modules/@theia/core/lib/common/promise-util.js");
var VSXExtensionsModel = /** @class */ (function () {
    function VSXExtensionsModel() {
        var _this = this;
        this.onDidChangeEmitter = new event_1.Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
        this.initialized = new promise_util_1.Deferred();
        /**
         * single source of all extensions
         */
        this.extensions = new Map();
        this._installed = new Set();
        this._searchResult = new Set();
        this.searchCancellationTokenSource = new cancellation_1.CancellationTokenSource();
        this.updateSearchResult = p_debounce_1.default(function () {
            _this.searchCancellationTokenSource.cancel();
            _this.searchCancellationTokenSource = new cancellation_1.CancellationTokenSource();
            var query = _this.search.query;
            return _this.doUpdateSearchResult({ query: query }, _this.searchCancellationTokenSource.token);
        }, 150);
    }
    VSXExtensionsModel.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.initInstalled(),
                            this.initSearchResult()
                        ])];
                    case 1:
                        _a.sent();
                        this.initialized.resolve();
                        return [2 /*return*/];
                }
            });
        });
    };
    VSXExtensionsModel.prototype.initInstalled = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.pluginSupport.willStart];
                    case 1:
                        _a.sent();
                        this.pluginSupport.onDidChangePlugins(function () { return _this.updateInstalled(); });
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.updateInstalled()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    VSXExtensionsModel.prototype.initSearchResult = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.search.onDidChangeQuery(function () { return _this.updateSearchResult(); });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.updateSearchResult()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        console.error(e_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(VSXExtensionsModel.prototype, "installed", {
        get: function () {
            return this._installed.values();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VSXExtensionsModel.prototype, "searchResult", {
        get: function () {
            return this._searchResult.values();
        },
        enumerable: true,
        configurable: true
    });
    VSXExtensionsModel.prototype.getExtension = function (id) {
        return this.extensions.get(id);
    };
    VSXExtensionsModel.prototype.setExtension = function (id) {
        var extension = this.extensions.get(id);
        if (!extension) {
            extension = this.extensionFactory({ id: id });
            this.extensions.set(id, extension);
        }
        return extension;
    };
    VSXExtensionsModel.prototype.doChange = function (task, token) {
        var _this = this;
        if (token === void 0) { token = cancellation_1.CancellationToken.None; }
        return this.progressService.withProgress('', 'extensions', function () { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (token && token.isCancellationRequested) {
                            return [2 /*return*/, undefined];
                        }
                        return [4 /*yield*/, task()];
                    case 1:
                        result = _a.sent();
                        if (token && token.isCancellationRequested) {
                            return [2 /*return*/, undefined];
                        }
                        this.onDidChangeEmitter.fire(undefined);
                        return [2 /*return*/, result];
                }
            });
        }); });
    };
    VSXExtensionsModel.prototype.doUpdateSearchResult = function (param, token) {
        var _this = this;
        return this.doChange(function () { return __awaiter(_this, void 0, void 0, function () {
            var result, searchResult, _a, _b, data, id;
            var e_3, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.api.search(param)];
                    case 1:
                        result = _d.sent();
                        if (token.isCancellationRequested) {
                            return [2 /*return*/];
                        }
                        searchResult = new Set();
                        try {
                            for (_a = __values(result.extensions), _b = _a.next(); !_b.done; _b = _a.next()) {
                                data = _b.value;
                                id = data.namespace.toLowerCase() + '.' + data.name.toLowerCase();
                                this.setExtension(id).update(Object.assign(data, {
                                    publisher: data.namespace,
                                    downloadUrl: data.files.download,
                                    iconUrl: data.files.icon,
                                    readmeUrl: data.files.readme,
                                    licenseUrl: data.files.license,
                                }));
                                searchResult.add(id);
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        this._searchResult = searchResult;
                        return [2 /*return*/];
                }
            });
        }); }, token);
    };
    VSXExtensionsModel.prototype.updateInstalled = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.doChange(function () { return __awaiter(_this, void 0, void 0, function () {
                        var plugins, installed, refreshing, plugins_1, plugins_1_1, plugin, id, extension, _a, _b, id, installedSorted;
                        var e_4, _c, e_5, _d;
                        var _this = this;
                        return __generator(this, function (_e) {
                            plugins = this.pluginSupport.plugins;
                            installed = new Set();
                            refreshing = [];
                            try {
                                for (plugins_1 = __values(plugins), plugins_1_1 = plugins_1.next(); !plugins_1_1.done; plugins_1_1 = plugins_1.next()) {
                                    plugin = plugins_1_1.value;
                                    if (plugin.model.engine.type === 'vscode') {
                                        id = plugin.model.id;
                                        this._installed.delete(id);
                                        extension = this.setExtension(id);
                                        installed.add(extension.id);
                                        refreshing.push(this.refresh(id));
                                    }
                                }
                            }
                            catch (e_4_1) { e_4 = { error: e_4_1 }; }
                            finally {
                                try {
                                    if (plugins_1_1 && !plugins_1_1.done && (_c = plugins_1.return)) _c.call(plugins_1);
                                }
                                finally { if (e_4) throw e_4.error; }
                            }
                            try {
                                for (_a = __values(this._installed), _b = _a.next(); !_b.done; _b = _a.next()) {
                                    id = _b.value;
                                    refreshing.push(this.refresh(id));
                                }
                            }
                            catch (e_5_1) { e_5 = { error: e_5_1 }; }
                            finally {
                                try {
                                    if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                                }
                                finally { if (e_5) throw e_5.error; }
                            }
                            Promise.all(refreshing);
                            installedSorted = Array.from(installed).sort(function (a, b) { return _this.compareExtensions(a, b); });
                            this._installed = new Set(installedSorted.values());
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    VSXExtensionsModel.prototype.resolve = function (id) {
        var _this = this;
        return this.doChange(function () { return __awaiter(_this, void 0, void 0, function () {
            var extension, rawReadme, readme, e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initialized.promise];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.refresh(id)];
                    case 2:
                        extension = _a.sent();
                        if (!extension) {
                            throw new Error("Failed to resolve " + id + " extension.");
                        }
                        if (!extension.readmeUrl) return [3 /*break*/, 6];
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.api.fetchText(extension.readmeUrl)];
                    case 4:
                        rawReadme = _a.sent();
                        readme = this.compileReadme(rawReadme);
                        extension.update({ readme: readme });
                        return [3 /*break*/, 6];
                    case 5:
                        e_6 = _a.sent();
                        if (!vsx_registry_api_1.VSXResponseError.is(e_6) || e_6.statusCode !== 404) {
                            console.error("[" + id + "]: failed to compile readme, reason:", e_6);
                        }
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/, extension];
                }
            });
        }); });
    };
    VSXExtensionsModel.prototype.compileReadme = function (readmeMarkdown) {
        var markdownConverter = new showdown.Converter({
            noHeaderId: true,
            strikethrough: true,
            headerLevelStart: 2
        });
        var readmeHtml = markdownConverter.makeHtml(readmeMarkdown);
        return sanitize(readmeHtml, {
            allowedTags: sanitize.defaults.allowedTags.concat(['h1', 'h2', 'img'])
        });
    };
    VSXExtensionsModel.prototype.refresh = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data, extension, e_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.api.getExtension(id)];
                    case 1:
                        data = _a.sent();
                        if (data.error) {
                            return [2 /*return*/, this.onDidFailRefresh(id, data.error)];
                        }
                        extension = this.setExtension(id);
                        extension.update(Object.assign(data, {
                            publisher: data.namespace,
                            downloadUrl: data.files.download,
                            iconUrl: data.files.icon,
                            readmeUrl: data.files.readme,
                            licenseUrl: data.files.license,
                        }));
                        return [2 /*return*/, extension];
                    case 2:
                        e_7 = _a.sent();
                        return [2 /*return*/, this.onDidFailRefresh(id, e_7)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    VSXExtensionsModel.prototype.onDidFailRefresh = function (id, error) {
        var cached = this.getExtension(id);
        if (cached && cached.installed) {
            return cached;
        }
        console.error("[" + id + "]: failed to refresh, reason:", error);
        return undefined;
    };
    /**
     * Compare two extensions based on their display name, and publisher if applicable.
     * @param a the first extension id for comparison.
     * @param b the second extension id for comparison.
     */
    VSXExtensionsModel.prototype.compareExtensions = function (a, b) {
        var extensionA = this.getExtension(a);
        var extensionB = this.getExtension(b);
        if (!extensionA || !extensionB) {
            return 0;
        }
        if (extensionA.displayName && extensionB.displayName) {
            return extensionA.displayName.localeCompare(extensionB.displayName);
        }
        if (extensionA.publisher && extensionB.publisher) {
            return extensionA.publisher.localeCompare(extensionB.publisher);
        }
        return 0;
    };
    __decorate([
        inversify_1.inject(vsx_registry_api_1.VSXRegistryAPI),
        __metadata("design:type", vsx_registry_api_1.VSXRegistryAPI)
    ], VSXExtensionsModel.prototype, "api", void 0);
    __decorate([
        inversify_1.inject(hosted_plugin_1.HostedPluginSupport),
        __metadata("design:type", hosted_plugin_1.HostedPluginSupport)
    ], VSXExtensionsModel.prototype, "pluginSupport", void 0);
    __decorate([
        inversify_1.inject(vsx_extension_1.VSXExtensionFactory),
        __metadata("design:type", Function)
    ], VSXExtensionsModel.prototype, "extensionFactory", void 0);
    __decorate([
        inversify_1.inject(progress_service_1.ProgressService),
        __metadata("design:type", progress_service_1.ProgressService)
    ], VSXExtensionsModel.prototype, "progressService", void 0);
    __decorate([
        inversify_1.inject(vsx_extensions_search_model_1.VSXExtensionsSearchModel),
        __metadata("design:type", vsx_extensions_search_model_1.VSXExtensionsSearchModel)
    ], VSXExtensionsModel.prototype, "search", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], VSXExtensionsModel.prototype, "init", null);
    VSXExtensionsModel = __decorate([
        inversify_1.injectable()
    ], VSXExtensionsModel);
    return VSXExtensionsModel;
}());
exports.VSXExtensionsModel = VSXExtensionsModel;


/***/ }),

/***/ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-search-bar.js":
/*!************************************************************************************!*\
  !*** ../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-search-bar.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var widgets_1 = __webpack_require__(/*! @theia/core/lib/browser/widgets */ "../node_modules/@theia/core/lib/browser/widgets/index.js");
var vsx_extensions_search_model_1 = __webpack_require__(/*! ./vsx-extensions-search-model */ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-search-model.js");
var VSXExtensionsSearchBar = /** @class */ (function (_super) {
    __extends(VSXExtensionsSearchBar, _super);
    function VSXExtensionsSearchBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.updateQuery = function (e) { return _this.model.query = e.target.value; };
        return _this;
    }
    VSXExtensionsSearchBar.prototype.init = function () {
        var _this = this;
        this.id = 'vsx-extensions-search-bar';
        this.addClass('theia-vsx-extensions-search-bar');
        this.model.onDidChangeQuery(function () { return _this.update(); });
    };
    VSXExtensionsSearchBar.prototype.render = function () {
        var _this = this;
        return React.createElement("input", { type: 'text', ref: function (input) { return _this.input = input || undefined; }, value: this.model.query, className: 'theia-input', placeholder: 'Search Extensions in Open VSX Registry', onChange: this.updateQuery });
    };
    VSXExtensionsSearchBar.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        if (this.input) {
            this.input.focus();
        }
    };
    VSXExtensionsSearchBar.prototype.onAfterAttach = function (msg) {
        _super.prototype.onAfterAttach.call(this, msg);
        this.update();
    };
    __decorate([
        inversify_1.inject(vsx_extensions_search_model_1.VSXExtensionsSearchModel),
        __metadata("design:type", vsx_extensions_search_model_1.VSXExtensionsSearchModel)
    ], VSXExtensionsSearchBar.prototype, "model", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], VSXExtensionsSearchBar.prototype, "init", null);
    VSXExtensionsSearchBar = __decorate([
        inversify_1.injectable()
    ], VSXExtensionsSearchBar);
    return VSXExtensionsSearchBar;
}(widgets_1.ReactWidget));
exports.VSXExtensionsSearchBar = VSXExtensionsSearchBar;


/***/ }),

/***/ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-search-model.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-search-model.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../node_modules/@theia/core/lib/common/event.js");
var VSXExtensionsSearchModel = /** @class */ (function () {
    function VSXExtensionsSearchModel() {
        this.onDidChangeQueryEmitter = new event_1.Emitter();
        this.onDidChangeQuery = this.onDidChangeQueryEmitter.event;
        this._query = '';
    }
    Object.defineProperty(VSXExtensionsSearchModel.prototype, "query", {
        get: function () {
            return this._query;
        },
        set: function (query) {
            if (this._query === query) {
                return;
            }
            this._query = query;
            this.onDidChangeQueryEmitter.fire(this._query);
        },
        enumerable: true,
        configurable: true
    });
    VSXExtensionsSearchModel = __decorate([
        inversify_1.injectable()
    ], VSXExtensionsSearchModel);
    return VSXExtensionsSearchModel;
}());
exports.VSXExtensionsSearchModel = VSXExtensionsSearchModel;


/***/ }),

/***/ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-source.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-source.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var source_tree_1 = __webpack_require__(/*! @theia/core/lib/browser/source-tree */ "../node_modules/@theia/core/lib/browser/source-tree/index.js");
var vsx_extensions_model_1 = __webpack_require__(/*! ./vsx-extensions-model */ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-model.js");
var VSXExtensionsSourceOptions = /** @class */ (function () {
    function VSXExtensionsSourceOptions() {
    }
    VSXExtensionsSourceOptions.INSTALLED = 'installed';
    VSXExtensionsSourceOptions.BUILT_IN = 'builtin';
    VSXExtensionsSourceOptions.SEARCH_RESULT = 'searchResult';
    VSXExtensionsSourceOptions = __decorate([
        inversify_1.injectable()
    ], VSXExtensionsSourceOptions);
    return VSXExtensionsSourceOptions;
}());
exports.VSXExtensionsSourceOptions = VSXExtensionsSourceOptions;
var VSXExtensionsSource = /** @class */ (function (_super) {
    __extends(VSXExtensionsSource, _super);
    function VSXExtensionsSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VSXExtensionsSource.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.fireDidChange();
                this.toDispose.push(this.model.onDidChange(function () { return _this.fireDidChange(); }));
                return [2 /*return*/];
            });
        });
    };
    VSXExtensionsSource.prototype.getElements = function () {
        var _a, _b, id, extension, e_1_1;
        var e_1, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 8, 9, 10]);
                    _a = __values(this.doGetElements()), _b = _a.next();
                    _d.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 7];
                    id = _b.value;
                    extension = this.model.getExtension(id);
                    if (!extension) {
                        return [3 /*break*/, 6];
                    }
                    if (!(this.options.id === VSXExtensionsSourceOptions.BUILT_IN)) return [3 /*break*/, 4];
                    if (!extension.builtin) return [3 /*break*/, 3];
                    return [4 /*yield*/, extension];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3: return [3 /*break*/, 6];
                case 4:
                    if (!!extension.builtin) return [3 /*break*/, 6];
                    return [4 /*yield*/, extension];
                case 5:
                    _d.sent();
                    _d.label = 6;
                case 6:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 7: return [3 /*break*/, 10];
                case 8:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 10];
                case 9:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 10: return [2 /*return*/];
            }
        });
    };
    VSXExtensionsSource.prototype.doGetElements = function () {
        if (this.options.id === VSXExtensionsSourceOptions.SEARCH_RESULT) {
            return this.model.searchResult;
        }
        return this.model.installed;
    };
    __decorate([
        inversify_1.inject(VSXExtensionsSourceOptions),
        __metadata("design:type", VSXExtensionsSourceOptions)
    ], VSXExtensionsSource.prototype, "options", void 0);
    __decorate([
        inversify_1.inject(vsx_extensions_model_1.VSXExtensionsModel),
        __metadata("design:type", vsx_extensions_model_1.VSXExtensionsModel)
    ], VSXExtensionsSource.prototype, "model", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], VSXExtensionsSource.prototype, "init", null);
    VSXExtensionsSource = __decorate([
        inversify_1.injectable()
    ], VSXExtensionsSource);
    return VSXExtensionsSource;
}(source_tree_1.TreeSource));
exports.VSXExtensionsSource = VSXExtensionsSource;


/***/ }),

/***/ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-view-container.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-view-container.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
 *******************************************************************************‚*/
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
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var vsx_extensions_search_bar_1 = __webpack_require__(/*! ./vsx-extensions-search-bar */ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-search-bar.js");
var vsx_extensions_widget_1 = __webpack_require__(/*! ./vsx-extensions-widget */ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-widget.js");
var vsx_extensions_model_1 = __webpack_require__(/*! ./vsx-extensions-model */ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-model.js");
var VSXExtensionsViewContainer = /** @class */ (function (_super) {
    __extends(VSXExtensionsViewContainer, _super);
    function VSXExtensionsViewContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentMode = VSXExtensionsViewContainer_1.InitialMode;
        _this.lastModeState = new Map();
        return _this;
    }
    VSXExtensionsViewContainer_1 = VSXExtensionsViewContainer;
    VSXExtensionsViewContainer.prototype.init = function () {
        _super.prototype.init.call(this);
        this.id = VSXExtensionsViewContainer_1.ID;
        this.addClass('theia-vsx-extensions-view-container');
        this.setTitleOptions({
            label: VSXExtensionsViewContainer_1.LABEL,
            iconClass: 'theia-vsx-extensions-icon',
            closeable: true
        });
    };
    VSXExtensionsViewContainer.prototype.onActivateRequest = function (msg) {
        this.searchBar.activate();
    };
    VSXExtensionsViewContainer.prototype.onAfterAttach = function (msg) {
        var _this = this;
        _super.prototype.onBeforeAttach.call(this, msg);
        this.updateMode();
        this.toDisposeOnDetach.push(this.model.search.onDidChangeQuery(function () { return _this.updateMode(); }));
    };
    VSXExtensionsViewContainer.prototype.configureLayout = function (layout) {
        layout.addWidget(this.searchBar);
        _super.prototype.configureLayout.call(this, layout);
    };
    VSXExtensionsViewContainer.prototype.updateMode = function () {
        var e_1, _a;
        var currentMode = !this.model.search.query ? VSXExtensionsViewContainer_1.DefaultMode : VSXExtensionsViewContainer_1.SearchResultMode;
        if (currentMode === this.currentMode) {
            return;
        }
        if (this.currentMode !== VSXExtensionsViewContainer_1.InitialMode) {
            this.lastModeState.set(this.currentMode, _super.prototype.doStoreState.call(this));
        }
        this.currentMode = currentMode;
        var lastState = this.lastModeState.get(currentMode);
        if (lastState) {
            _super.prototype.doRestoreState.call(this, lastState);
        }
        else {
            try {
                for (var _b = __values(this.getParts()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var part = _c.value;
                    this.applyModeToPart(part);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        if (this.currentMode === VSXExtensionsViewContainer_1.SearchResultMode) {
            var searchPart = this.getParts().find(function (part) { return part.wrapped.id === vsx_extensions_widget_1.VSXExtensionsWidget.SEARCH_RESULT_ID; });
            if (searchPart) {
                searchPart.collapsed = false;
                searchPart.show();
            }
        }
    };
    VSXExtensionsViewContainer.prototype.registerPart = function (part) {
        _super.prototype.registerPart.call(this, part);
        this.applyModeToPart(part);
    };
    VSXExtensionsViewContainer.prototype.applyModeToPart = function (part) {
        var partMode = (part.wrapped.id === vsx_extensions_widget_1.VSXExtensionsWidget.SEARCH_RESULT_ID ? VSXExtensionsViewContainer_1.SearchResultMode : VSXExtensionsViewContainer_1.DefaultMode);
        if (this.currentMode === partMode) {
            part.show();
        }
        else {
            part.hide();
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    VSXExtensionsViewContainer.prototype.doStoreState = function () {
        var e_2, _a;
        var modes = {};
        try {
            for (var _b = __values(this.lastModeState.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var mode = _c.value;
                modes[mode] = this.lastModeState.get(mode);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return {
            query: this.model.search.query,
            modes: modes
        };
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    VSXExtensionsViewContainer.prototype.doRestoreState = function (state) {
        // eslint-disable-next-line guard-for-in
        for (var key in state.modes) {
            var mode = Number(key);
            var modeState = state.modes[mode];
            if (modeState) {
                this.lastModeState.set(mode, modeState);
            }
        }
        this.model.search.query = state.query;
    };
    var VSXExtensionsViewContainer_1;
    VSXExtensionsViewContainer.ID = 'vsx-extensions-view-container';
    VSXExtensionsViewContainer.LABEL = 'Extensions';
    __decorate([
        inversify_1.inject(vsx_extensions_search_bar_1.VSXExtensionsSearchBar),
        __metadata("design:type", vsx_extensions_search_bar_1.VSXExtensionsSearchBar)
    ], VSXExtensionsViewContainer.prototype, "searchBar", void 0);
    __decorate([
        inversify_1.inject(vsx_extensions_model_1.VSXExtensionsModel),
        __metadata("design:type", vsx_extensions_model_1.VSXExtensionsModel)
    ], VSXExtensionsViewContainer.prototype, "model", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], VSXExtensionsViewContainer.prototype, "init", null);
    VSXExtensionsViewContainer = VSXExtensionsViewContainer_1 = __decorate([
        inversify_1.injectable()
    ], VSXExtensionsViewContainer);
    return VSXExtensionsViewContainer;
}(browser_1.ViewContainer));
exports.VSXExtensionsViewContainer = VSXExtensionsViewContainer;
(function (VSXExtensionsViewContainer) {
    VSXExtensionsViewContainer.InitialMode = 0;
    VSXExtensionsViewContainer.DefaultMode = 1;
    VSXExtensionsViewContainer.SearchResultMode = 2;
})(VSXExtensionsViewContainer = exports.VSXExtensionsViewContainer || (exports.VSXExtensionsViewContainer = {}));
exports.VSXExtensionsViewContainer = VSXExtensionsViewContainer;


/***/ }),

/***/ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-widget.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-widget.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
var source_tree_1 = __webpack_require__(/*! @theia/core/lib/browser/source-tree */ "../node_modules/@theia/core/lib/browser/source-tree/index.js");
var vsx_extensions_source_1 = __webpack_require__(/*! ./vsx-extensions-source */ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-source.js");
var VSXExtensionsWidgetOptions = /** @class */ (function (_super) {
    __extends(VSXExtensionsWidgetOptions, _super);
    function VSXExtensionsWidgetOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VSXExtensionsWidgetOptions = __decorate([
        inversify_1.injectable()
    ], VSXExtensionsWidgetOptions);
    return VSXExtensionsWidgetOptions;
}(vsx_extensions_source_1.VSXExtensionsSourceOptions));
exports.VSXExtensionsWidgetOptions = VSXExtensionsWidgetOptions;
var VSXExtensionsWidget = /** @class */ (function (_super) {
    __extends(VSXExtensionsWidget, _super);
    function VSXExtensionsWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VSXExtensionsWidget_1 = VSXExtensionsWidget;
    VSXExtensionsWidget.createWidget = function (parent, options) {
        var child = source_tree_1.SourceTreeWidget.createContainer(parent, {
            virtualized: false,
            scrollIfActive: true
        });
        child.bind(vsx_extensions_source_1.VSXExtensionsSourceOptions).toConstantValue(options);
        child.bind(vsx_extensions_source_1.VSXExtensionsSource).toSelf();
        child.unbind(source_tree_1.SourceTreeWidget);
        child.bind(VSXExtensionsWidgetOptions).toConstantValue(options);
        child.bind(VSXExtensionsWidget_1).toSelf();
        return child.get(VSXExtensionsWidget_1);
    };
    VSXExtensionsWidget.prototype.init = function () {
        _super.prototype.init.call(this);
        this.addClass('theia-vsx-extensions');
        this.id = VSXExtensionsWidget_1.ID + ':' + this.options.id;
        var title = this.computeTitle();
        this.title.label = title;
        this.title.caption = title;
        this.toDispose.push(this.extensionsSource);
        this.source = this.extensionsSource;
    };
    VSXExtensionsWidget.prototype.computeTitle = function () {
        if (this.id === VSXExtensionsWidget_1.INSTALLED_ID) {
            return 'Installed';
        }
        if (this.id === VSXExtensionsWidget_1.BUILT_IN_ID) {
            return 'Built-in';
        }
        return 'Open VSX Registry';
    };
    var VSXExtensionsWidget_1;
    VSXExtensionsWidget.ID = 'vsx-extensions';
    VSXExtensionsWidget.INSTALLED_ID = VSXExtensionsWidget_1.ID + ':' + vsx_extensions_source_1.VSXExtensionsSourceOptions.INSTALLED;
    VSXExtensionsWidget.SEARCH_RESULT_ID = VSXExtensionsWidget_1.ID + ':' + vsx_extensions_source_1.VSXExtensionsSourceOptions.SEARCH_RESULT;
    VSXExtensionsWidget.BUILT_IN_ID = VSXExtensionsWidget_1.ID + ':' + vsx_extensions_source_1.VSXExtensionsSourceOptions.BUILT_IN;
    __decorate([
        inversify_1.inject(VSXExtensionsWidgetOptions),
        __metadata("design:type", VSXExtensionsWidgetOptions)
    ], VSXExtensionsWidget.prototype, "options", void 0);
    __decorate([
        inversify_1.inject(vsx_extensions_source_1.VSXExtensionsSource),
        __metadata("design:type", vsx_extensions_source_1.VSXExtensionsSource)
    ], VSXExtensionsWidget.prototype, "extensionsSource", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], VSXExtensionsWidget.prototype, "init", null);
    VSXExtensionsWidget = VSXExtensionsWidget_1 = __decorate([
        inversify_1.injectable()
    ], VSXExtensionsWidget);
    return VSXExtensionsWidget;
}(source_tree_1.SourceTreeWidget));
exports.VSXExtensionsWidget = VSXExtensionsWidget;


/***/ }),

/***/ "../node_modules/@theia/vsx-registry/lib/browser/vsx-registry-frontend-module.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@theia/vsx-registry/lib/browser/vsx-registry-frontend-module.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ../../src/browser/style/index.css */ "../node_modules/@theia/vsx-registry/src/browser/style/index.css");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var vsx_extensions_view_container_1 = __webpack_require__(/*! ./vsx-extensions-view-container */ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-view-container.js");
var vsx_extensions_contribution_1 = __webpack_require__(/*! ./vsx-extensions-contribution */ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-contribution.js");
var vsx_extensions_search_bar_1 = __webpack_require__(/*! ./vsx-extensions-search-bar */ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-search-bar.js");
var vsx_registry_api_1 = __webpack_require__(/*! ../common/vsx-registry-api */ "../node_modules/@theia/vsx-registry/lib/common/vsx-registry-api.js");
var vsx_extensions_model_1 = __webpack_require__(/*! ./vsx-extensions-model */ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-model.js");
var color_application_contribution_1 = __webpack_require__(/*! @theia/core/lib/browser/color-application-contribution */ "../node_modules/@theia/core/lib/browser/color-application-contribution.js");
var vsx_extensions_widget_1 = __webpack_require__(/*! ./vsx-extensions-widget */ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-widget.js");
var tab_bar_toolbar_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/tab-bar-toolbar */ "../node_modules/@theia/core/lib/browser/shell/tab-bar-toolbar.js");
var vsx_extension_1 = __webpack_require__(/*! ./vsx-extension */ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extension.js");
var vsx_extension_editor_1 = __webpack_require__(/*! ./vsx-extension-editor */ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extension-editor.js");
var vsx_extension_editor_manager_1 = __webpack_require__(/*! ./vsx-extension-editor-manager */ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extension-editor-manager.js");
var vsx_extensions_source_1 = __webpack_require__(/*! ./vsx-extensions-source */ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-source.js");
var vsx_environment_1 = __webpack_require__(/*! ../common/vsx-environment */ "../node_modules/@theia/vsx-registry/lib/common/vsx-environment.js");
var vsx_extensions_search_model_1 = __webpack_require__(/*! ./vsx-extensions-search-model */ "../node_modules/@theia/vsx-registry/lib/browser/vsx-extensions-search-model.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(vsx_environment_1.VSXEnvironment).toSelf().inRequestScope();
    bind(vsx_registry_api_1.VSXRegistryAPI).toSelf().inSingletonScope();
    bind(vsx_extension_1.VSXExtension).toSelf();
    bind(vsx_extension_1.VSXExtensionFactory).toFactory(function (ctx) { return function (option) {
        var child = ctx.container.createChild();
        child.bind(vsx_extension_1.VSXExtensionOptions).toConstantValue(option);
        return child.get(vsx_extension_1.VSXExtension);
    }; });
    bind(vsx_extensions_model_1.VSXExtensionsModel).toSelf().inSingletonScope();
    bind(vsx_extension_editor_1.VSXExtensionEditor).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (ctx) { return ({
        id: vsx_extension_editor_1.VSXExtensionEditor.ID,
        createWidget: function (options) { return __awaiter(_this, void 0, void 0, function () {
            var extension, child;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ctx.container.get(vsx_extensions_model_1.VSXExtensionsModel).resolve(options.id)];
                    case 1:
                        extension = _a.sent();
                        child = ctx.container.createChild();
                        child.bind(vsx_extension_1.VSXExtension).toConstantValue(extension);
                        return [2 /*return*/, child.get(vsx_extension_editor_1.VSXExtensionEditor)];
                }
            });
        }); }
    }); }).inSingletonScope();
    bind(vsx_extension_editor_manager_1.VSXExtensionEditorManager).toSelf().inSingletonScope();
    bind(browser_1.OpenHandler).toService(vsx_extension_editor_manager_1.VSXExtensionEditorManager);
    bind(browser_1.WidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return ({
            id: vsx_extensions_widget_1.VSXExtensionsWidget.ID,
            createWidget: function (options) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, vsx_extensions_widget_1.VSXExtensionsWidget.createWidget(container, options)];
            }); }); }
        });
    }).inSingletonScope();
    bind(browser_1.WidgetFactory).toDynamicValue(function (ctx) { return ({
        id: vsx_extensions_view_container_1.VSXExtensionsViewContainer.ID,
        createWidget: function () { return __awaiter(_this, void 0, void 0, function () {
            var child, viewContainer, widgetManager, _a, _b, id, widget, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        child = ctx.container.createChild();
                        child.bind(browser_1.ViewContainerIdentifier).toConstantValue({
                            id: vsx_extensions_view_container_1.VSXExtensionsViewContainer.ID,
                            progressLocationId: 'extensions'
                        });
                        child.bind(vsx_extensions_view_container_1.VSXExtensionsViewContainer).toSelf();
                        viewContainer = child.get(vsx_extensions_view_container_1.VSXExtensionsViewContainer);
                        widgetManager = child.get(browser_1.WidgetManager);
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 6, 7, 8]);
                        _a = __values([vsx_extensions_source_1.VSXExtensionsSourceOptions.SEARCH_RESULT, vsx_extensions_source_1.VSXExtensionsSourceOptions.INSTALLED, vsx_extensions_source_1.VSXExtensionsSourceOptions.BUILT_IN]), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 5];
                        id = _b.value;
                        return [4 /*yield*/, widgetManager.getOrCreateWidget(vsx_extensions_widget_1.VSXExtensionsWidget.ID, { id: id })];
                    case 3:
                        widget = _d.sent();
                        viewContainer.addWidget(widget, {
                            initiallyCollapsed: id === vsx_extensions_source_1.VSXExtensionsSourceOptions.BUILT_IN
                        });
                        _d.label = 4;
                    case 4:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/, viewContainer];
                }
            });
        }); }
    }); }).inSingletonScope();
    bind(vsx_extensions_search_model_1.VSXExtensionsSearchModel).toSelf().inSingletonScope();
    bind(vsx_extensions_search_bar_1.VSXExtensionsSearchBar).toSelf().inSingletonScope();
    browser_1.bindViewContribution(bind, vsx_extensions_contribution_1.VSXExtensionsContribution);
    bind(browser_1.FrontendApplicationContribution).toService(vsx_extensions_contribution_1.VSXExtensionsContribution);
    bind(color_application_contribution_1.ColorContribution).toService(vsx_extensions_contribution_1.VSXExtensionsContribution);
    bind(tab_bar_toolbar_1.TabBarToolbarContribution).toService(vsx_extensions_contribution_1.VSXExtensionsContribution);
});


/***/ }),

/***/ "../node_modules/@theia/vsx-registry/lib/common/vsx-environment.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@theia/vsx-registry/lib/common/vsx-environment.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
var env_variables_1 = __webpack_require__(/*! @theia/core/lib/common/env-variables */ "../node_modules/@theia/core/lib/common/env-variables/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var VSXEnvironment = /** @class */ (function () {
    function VSXEnvironment() {
    }
    VSXEnvironment.prototype.getRegistryUri = function () {
        return __awaiter(this, void 0, void 0, function () {
            var vsxRegistryUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this._registryUri) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.environments.getValue('VSX_REGISTRY_URL')];
                    case 1:
                        vsxRegistryUrl = _a.sent();
                        this._registryUri = new uri_1.default(vsxRegistryUrl && vsxRegistryUrl.value || 'https://open-vsx.org');
                        _a.label = 2;
                    case 2: return [2 /*return*/, this._registryUri];
                }
            });
        });
    };
    VSXEnvironment.prototype.getRegistryApiUri = function () {
        return __awaiter(this, void 0, void 0, function () {
            var registryUri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRegistryUri()];
                    case 1:
                        registryUri = _a.sent();
                        return [2 /*return*/, registryUri.resolve('api')];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(env_variables_1.EnvVariablesServer),
        __metadata("design:type", Object)
    ], VSXEnvironment.prototype, "environments", void 0);
    VSXEnvironment = __decorate([
        inversify_1.injectable()
    ], VSXEnvironment);
    return VSXEnvironment;
}());
exports.VSXEnvironment = VSXEnvironment;


/***/ }),

/***/ "../node_modules/@theia/vsx-registry/lib/common/vsx-extension-uri.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@theia/vsx-registry/lib/common/vsx-extension-uri.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var VSXExtensionUri;
(function (VSXExtensionUri) {
    function toUri(id) {
        return new uri_1.default("vscode:extension/" + id);
    }
    VSXExtensionUri.toUri = toUri;
    function toId(uri) {
        if (uri.scheme === 'vscode' && uri.path.dir.toString() === 'extension') {
            return uri.path.base;
        }
        return undefined;
    }
    VSXExtensionUri.toId = toId;
})(VSXExtensionUri = exports.VSXExtensionUri || (exports.VSXExtensionUri = {}));


/***/ }),

/***/ "../node_modules/@theia/vsx-registry/lib/common/vsx-registry-api.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@theia/vsx-registry/lib/common/vsx-registry-api.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
var bent = __webpack_require__(/*! bent */ "../node_modules/bent/src/browser.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var vsx_environment_1 = __webpack_require__(/*! ./vsx-environment */ "../node_modules/@theia/vsx-registry/lib/common/vsx-environment.js");
var fetchText = bent('GET', 'string', 200);
var fetchJson = bent('GET', 'json', 200);
var VSXResponseError;
(function (VSXResponseError) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function is(error) {
        return !!error && typeof error === 'object'
            && 'statusCode' in error && typeof error['statusCode'] === 'number';
    }
    VSXResponseError.is = is;
})(VSXResponseError = exports.VSXResponseError || (exports.VSXResponseError = {}));
var VSXRegistryAPI = /** @class */ (function () {
    function VSXRegistryAPI() {
    }
    VSXRegistryAPI.prototype.search = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var apiUri, searchUri, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.environment.getRegistryApiUri()];
                    case 1:
                        apiUri = _a.sent();
                        searchUri = apiUri.resolve('-/search').toString();
                        if (param) {
                            query = '';
                            if (param.query) {
                                query += 'query=' + encodeURIComponent(param.query);
                            }
                            if (param.category) {
                                query += 'category=' + encodeURIComponent(param.category);
                            }
                            if (param.size) {
                                query += 'size=' + param.size;
                            }
                            if (param.offset) {
                                query += 'offset=' + param.offset;
                            }
                            if (query) {
                                searchUri += '?' + query;
                            }
                        }
                        return [2 /*return*/, this.fetchJson(searchUri)];
                }
            });
        });
    };
    VSXRegistryAPI.prototype.getExtension = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var apiUri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.environment.getRegistryApiUri()];
                    case 1:
                        apiUri = _a.sent();
                        return [2 /*return*/, this.fetchJson(apiUri.resolve(id.replace('.', '/')).toString())];
                }
            });
        });
    };
    VSXRegistryAPI.prototype.fetchJson = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetchJson(url)];
                    case 1:
                        result = _a.sent();
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        return [2 /*return*/, result];
                }
            });
        });
    };
    VSXRegistryAPI.prototype.fetchText = function (url) {
        return fetchText(url);
    };
    __decorate([
        inversify_1.inject(vsx_environment_1.VSXEnvironment),
        __metadata("design:type", vsx_environment_1.VSXEnvironment)
    ], VSXRegistryAPI.prototype, "environment", void 0);
    VSXRegistryAPI = __decorate([
        inversify_1.injectable()
    ], VSXRegistryAPI);
    return VSXRegistryAPI;
}());
exports.VSXRegistryAPI = VSXRegistryAPI;


/***/ }),

/***/ "../node_modules/@theia/vsx-registry/src/browser/style/defaultIcon.png":
/*!*****************************************************************************!*\
  !*** ../node_modules/@theia/vsx-registry/src/browser/style/defaultIcon.png ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dc40ddb3b11b95bbf1a577d599c9ff19.png";

/***/ }),

/***/ "../node_modules/@theia/vsx-registry/src/browser/style/extensions.svg":
/*!****************************************************************************!*\
  !*** ../node_modules/@theia/vsx-registry/src/browser/style/extensions.svg ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE5IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgZmlsbD0iI0Y2RjZGNiIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI4IDI4IiB3aWR0aD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI0Y2RjZGNiI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMyAzaDEwdjRoLTZ2NiAyIDZoNnY0aC0xMHptMTggMTJ2NmgtNnY0aDEwdi0xMHptNC0ydi0xMGgtMTB2NGgzdi0xaDR2NGgtMXYzeiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0ibTkgOWgxMHYxMGgtMTB6Ii8+PC9nPjwvc3ZnPgo="

/***/ }),

/***/ "../node_modules/@theia/vsx-registry/src/browser/style/index.css":
/*!***********************************************************************!*\
  !*** ../node_modules/@theia/vsx-registry/src/browser/style/index.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/@theia/vsx-registry/src/browser/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../node_modules/bent/src/browser.js":
/*!*******************************************!*\
  !*** ../node_modules/bent/src/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global fetch, btoa, Headers */
const core = __webpack_require__(/*! ./core */ "../node_modules/bent/src/core.js")

class StatusError extends Error {
  constructor (res, ...params) {
    super(...params)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, StatusError)
    }

    this.message = `Incorrect statusCode: ${res.status}`
    this.statusCode = res.status
    this.res = res
    this.responseBody = res.arrayBuffer()
  }
}

const mkrequest = (statusCodes, method, encoding, headers, baseurl) => async (_url, body, _headers = {}) => {
  _url = baseurl + (_url || '')
  let parsed = new URL(_url)

  if (!headers) headers = {}
  if (parsed.username) {
    headers.Authorization = 'Basic ' + btoa(parsed.username + ':' + parsed.password)
    parsed = new URL(parsed.protocol + '//' + parsed.host + parsed.pathname + parsed.search)
  }
  if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
    throw new Error(`Unknown protocol, ${parsed.protocol}`)
  }

  if (body) {
    if (body instanceof ArrayBuffer ||
      ArrayBuffer.isView(body) ||
      typeof body === 'string'
    ) {
      // noop
    } else if (typeof body === 'object') {
      body = JSON.stringify(body)
      headers['Content-Type'] = 'application/json'
    } else {
      throw new Error('Unknown body type.')
    }
  }

  _headers = new Headers({ ...(headers || {}), ..._headers })

  const resp = await fetch(parsed, { method, headers: _headers, body })
  resp.statusCode = resp.status

  if (!statusCodes.has(resp.status)) {
    throw new StatusError(resp)
  }

  if (encoding === 'json') return resp.json()
  else if (encoding === 'buffer') return resp.arrayBuffer()
  else if (encoding === 'string') return resp.text()
  else return resp
}

module.exports = core(mkrequest)


/***/ }),

/***/ "../node_modules/bent/src/core.js":
/*!****************************************!*\
  !*** ../node_modules/bent/src/core.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const encodings = new Set(['json', 'buffer', 'string'])

module.exports = mkrequest => (...args) => {
  const statusCodes = new Set()
  let method
  let encoding
  let headers
  let baseurl = ''

  args.forEach(arg => {
    if (typeof arg === 'string') {
      if (arg.toUpperCase() === arg) {
        if (method) {
          const msg = `Can't set method to ${arg}, already set to ${method}.`
          throw new Error(msg)
        } else {
          method = arg
        }
      } else if (arg.startsWith('http:') || arg.startsWith('https:')) {
        baseurl = arg
      } else {
        if (encodings.has(arg)) {
          encoding = arg
        } else {
          throw new Error(`Unknown encoding, ${arg}`)
        }
      }
    } else if (typeof arg === 'number') {
      statusCodes.add(arg)
    } else if (typeof arg === 'object') {
      if (headers) {
        throw new Error('Cannot set headers twice.')
      }
      headers = arg
    } else {
      throw new Error(`Unknown type: ${typeof arg}`)
    }
  })

  if (!method) method = 'GET'
  if (statusCodes.size === 0) {
    statusCodes.add(200)
  }

  return mkrequest(statusCodes, method, encoding, headers, baseurl)
}


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@theia/vsx-registry/src/browser/style/index.css":
/*!**************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@theia/vsx-registry/src/browser/style/index.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../css-loader/lib/url/escape.js */ "../node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2020 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n:root {\n  --theia-vsx-extension-icon-size: calc(var(--theia-ui-icon-font-size)*3);\n  --theia-vsx-extension-editor-icon-size: calc(var(--theia-vsx-extension-icon-size)*3);\n}\n\n.theia-vsx-extensions-icon {\n    -webkit-mask: url(" + escape(__webpack_require__(/*! ./extensions.svg */ "../node_modules/@theia/vsx-registry/src/browser/style/extensions.svg")) + ");\n    mask: url(" + escape(__webpack_require__(/*! ./extensions.svg */ "../node_modules/@theia/vsx-registry/src/browser/style/extensions.svg")) + ");\n}\n\n.theia-vsx-extensions {\n    height: 100%;\n}\n\n.theia-vsx-extension,\n.theia-vsx-extensions-view-container .part > .body {\n    min-height: calc(var(--theia-content-line-height)*3)\n}\n\n.theia-vsx-extensions-search-bar {\n    padding: var(--theia-ui-padding);\n    display: flex;\n    align-content: center;\n}\n\n.theia-vsx-extensions-search-bar .theia-input {\n    line-height: var(--theia-content-line-height);\n    flex: 1;\n    padding-top: calc(var(--theia-ui-padding)/2);\n    padding-bottom: calc(var(--theia-ui-padding)/2);\n}\n\n.theia-vsx-extension {\n    display: flex;\n    flex-direction: row;\n    line-height: calc(var(--theia-content-line-height)*17/22);\n    align-items: center;\n}\n\n.theia-vsx-extension-icon {\n    height: var(--theia-vsx-extension-icon-size);\n    width: var(--theia-vsx-extension-icon-size);\n    align-self: center;\n    padding-right: calc(var(--theia-ui-padding)*2.5);\n    flex-shrink: 0;\n    object-fit: contain;\n}\n\n.theia-vsx-extension-icon.placeholder {\n    background-size: var(--theia-vsx-extension-icon-size);\n    background-repeat: no-repeat;\n    background-image: url(" + escape(__webpack_require__(/*! ./defaultIcon.png */ "../node_modules/@theia/vsx-registry/src/browser/style/defaultIcon.png")) + ");\n}\n\n.theia-vsx-extension-content {\n    display: flex;\n    flex-direction: column;\n    width: calc(100% - var(--theia-vsx-extension-icon-size) - var(--theia-ui-padding)*2.5);\n}\n\n.theia-vsx-extension-content .title {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    white-space: nowrap;\n}\n\n.theia-vsx-extension-content .title .name {\n    font-weight: bold;\n}\n\n.theia-vsx-extension-content .title .version,\n.theia-vsx-extension-content .title .stat {\n    opacity: .85;\n    font-size: 80%;\n}\n\n\n.theia-vsx-extension-content .title .stat .average-rating > i {\n    color: #ff8e00;\n}\n\n.theia-vsx-extension-content .title .stat .average-rating > i,\n.theia-vsx-extension-content .title .stat .download-count > i {\n    padding-right: calc(var(--theia-ui-padding)/2);\n}\n\n.theia-vsx-extension-content .title .stat .average-rating,\n.theia-vsx-extension-content .title .stat .download-count {\n    padding-left: var(--theia-ui-padding);\n}\n\n.theia-vsx-extension-description {\n    padding-right: calc(var(--theia-ui-padding)*2);\n}\n\n.theia-vsx-extension-publisher {\n    font-weight: 600;\n    font-size: 90%;\n}\n\n.theia-vsx-extension-action-bar {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.theia-vsx-extension-action-bar .action {\n    font-size: 80%;\n    min-width: auto !important;\n    padding: 2px var(--theia-ui-padding) !important;\n    margin-top: 2px;\n}\n\n/* Editor Section */\n\n.theia-vsx-extension-editor {\n    height: 100%;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    padding: var(--theia-ui-padding);\n}\n\n.theia-vsx-extension-editor .header {\n    display: flex;\n    padding: calc(var(--theia-ui-padding)*3) calc(var(--theia-ui-padding)*3) calc(var(--theia-ui-padding)*2);\n    overflow: hidden;\n    flex-shrink: 0;\n}\n\n.theia-vsx-extension-editor .body {\n    flex: 1;\n}\n\n.theia-vsx-extension-editor .header .icon-container {\n    height: var(--theia-vsx-extension-editor-icon-size);\n    width: var(--theia-vsx-extension-editor-icon-size);\n    align-self: center;\n    padding-right: calc(var(--theia-ui-padding)*2.5);\n    flex-shrink: 0;\n    object-fit: contain;\n}\n\n.theia-vsx-extension-editor .header .icon-container.placeholder {\n    background-size: var(--theia-vsx-extension-editor-icon-size);\n    background-repeat: no-repeat;\n    background-image: url(" + escape(__webpack_require__(/*! ./defaultIcon.png */ "../node_modules/@theia/vsx-registry/src/browser/style/defaultIcon.png")) + ");\n}\n\n.theia-vsx-extension-editor .header .details {\n    overflow: hidden;\n    user-select: text;\n    -webkit-user-select: text;\n}\n\n.theia-vsx-extension-editor .header .details .title,\n.theia-vsx-extension-editor .header .details .subtitle {\n    display: flex;\n    align-items: center;\n}\n\n.theia-vsx-extension-editor .header .details .title .name {\n    flex: 0;\n    font-size: calc(var(--theia-ui-font-size1)*2);\n    font-weight: 600;\n    white-space: nowrap;\n    cursor: pointer;\n}\n\n.theia-vsx-extension-editor .header .details .title .identifier {\n    margin-left: calc(var(--theia-ui-padding)*5/3);\n    opacity: .6;\n    background: hsla(0,0%,68%,.31);\n    user-select: text;\n    -webkit-user-select: text;\n    white-space: nowrap;\n}\n\n.theia-vsx-extension-editor .header .details .title .preview {\n    background: #d63f26;\n}\n\n.vs .theia-vsx-extension-editor .header .details .title .preview {\n    color: white;\n}\n\n.theia-vsx-extension-editor .header .details .title .identifier,\n.theia-vsx-extension-editor .header .details .title .preview,\n.theia-vsx-extension-editor .header .details .title .builtin {\n    line-height: var(--theia-code-line-height);\n}\n\n.theia-vsx-extension-editor .header .details .title .identifier,\n.theia-vsx-extension-editor .header .details .title .preview {\n    padding: calc(var(--theia-ui-padding)*2/3);\n    padding-top: 0px;\n    padding-bottom: 0px;\n    border-radius: calc(var(--theia-ui-padding)*2/3);\n}\n\n\n.theia-vsx-extension-editor .header .details .title .preview,\n.theia-vsx-extension-editor .header .details .title .builtin {\n    font-size: var(--theia-ui-font-size0);\n    font-style: italic;\n    margin-left: calc(var(--theia-ui-padding)*5/3);\n}\n\n.theia-vsx-extension-editor .header .details .subtitle {\n    padding-top: var(--theia-ui-padding);\n    white-space: nowrap;\n}\n\n.theia-vsx-extension-editor .header .details .subtitle > span {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    padding-right: var(--theia-ui-padding);\n    line-height: var(--theia-content-line-height);\n    height: var(--theia-content-line-height);\n}\n\n.theia-vsx-extension-editor .header .details .subtitle > span:not(:first-child):not(:empty) {\n    border-left: 1px solid hsla(0,0%,50%,.7);\n    padding-left: var(--theia-ui-padding);\n}\n\n.theia-vsx-extension-editor .header .details .subtitle .publisher {\n    font-size: var(--theia-ui-font-size3);\n}\n\n.theia-vsx-extension-editor .header .details .subtitle .publisher .namespace-access,\n.theia-vsx-extension-editor .header .details .subtitle .download-count::before {\n    padding-right: var(--theia-ui-padding);\n}\n\n.theia-vsx-extension-editor .header .details .subtitle .average-rating > i {\n    color: #ff8e00;\n}\n\n.theia-vsx-extension-editor .header .details .subtitle .average-rating > i:not(:first-child) {\n    padding-left: calc(var(--theia-ui-padding)/2);\n}\n\n\n.theia-vsx-extension-editor .header .details .description {\n    margin-top: calc(var(--theia-ui-padding)*5/3);\n}\n\n.theia-vsx-extension-editor .action {\n    font-weight: 600;\n    margin-top: calc(var(--theia-ui-padding)*5/3);\n    margin-left: 0px;\n    padding: 1px var(--theia-ui-padding);\n}\n\n/** Theming */\n\n.theia-vsx-extension-editor .action.prominent,\n.theia-vsx-extension-action-bar .action.prominent {\n    color: var(--theia-extensionButton-prominentForeground);\n    background-color: var(--theia-extensionButton-prominentBackground);\n}\n\n.theia-vsx-extension-editor .action.prominent:hover,\n.theia-vsx-extension-action-bar .action.prominent:hover {\n    background-color: var(--theia-extensionButton-prominentHoverBackground);\n}\n\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/sanitize-html/dist/sanitize-html.js":
/*!***********************************************************!*\
  !*** ../node_modules/sanitize-html/dist/sanitize-html.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}(function(f){if(( false?undefined:_typeof(exports))==="object"&&typeof module!=="undefined"){module.exports=f();}else if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else{ var g; }})(function(){var define,module,exports;return function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return require(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a;}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r);},p,p.exports,r,e,n,t);}return n[i].exports;}for(var u="function"==typeof require&&require,i=0;i<t.length;i++){o(t[i]);}return o;}return r;}()({1:[function(require,module,exports){'use strict';exports.byteLength=byteLength;exports.toByteArray=toByteArray;exports.fromByteArray=fromByteArray;var lookup=[];var revLookup=[];var Arr=typeof Uint8Array!=='undefined'?Uint8Array:Array;var code='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';for(var i=0,len=code.length;i<len;++i){lookup[i]=code[i];revLookup[code.charCodeAt(i)]=i;}// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)]=62;revLookup['_'.charCodeAt(0)]=63;function getLens(b64){var len=b64.length;if(len%4>0){throw new Error('Invalid string. Length must be a multiple of 4');}// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var validLen=b64.indexOf('=');if(validLen===-1)validLen=len;var placeHoldersLen=validLen===len?0:4-validLen%4;return[validLen,placeHoldersLen];}// base64 is 4/3 + up to two characters of the original data
function byteLength(b64){var lens=getLens(b64);var validLen=lens[0];var placeHoldersLen=lens[1];return(validLen+placeHoldersLen)*3/4-placeHoldersLen;}function _byteLength(b64,validLen,placeHoldersLen){return(validLen+placeHoldersLen)*3/4-placeHoldersLen;}function toByteArray(b64){var tmp;var lens=getLens(b64);var validLen=lens[0];var placeHoldersLen=lens[1];var arr=new Arr(_byteLength(b64,validLen,placeHoldersLen));var curByte=0;// if there are placeholders, only get up to the last complete 4 chars
var len=placeHoldersLen>0?validLen-4:validLen;var i;for(i=0;i<len;i+=4){tmp=revLookup[b64.charCodeAt(i)]<<18|revLookup[b64.charCodeAt(i+1)]<<12|revLookup[b64.charCodeAt(i+2)]<<6|revLookup[b64.charCodeAt(i+3)];arr[curByte++]=tmp>>16&0xFF;arr[curByte++]=tmp>>8&0xFF;arr[curByte++]=tmp&0xFF;}if(placeHoldersLen===2){tmp=revLookup[b64.charCodeAt(i)]<<2|revLookup[b64.charCodeAt(i+1)]>>4;arr[curByte++]=tmp&0xFF;}if(placeHoldersLen===1){tmp=revLookup[b64.charCodeAt(i)]<<10|revLookup[b64.charCodeAt(i+1)]<<4|revLookup[b64.charCodeAt(i+2)]>>2;arr[curByte++]=tmp>>8&0xFF;arr[curByte++]=tmp&0xFF;}return arr;}function tripletToBase64(num){return lookup[num>>18&0x3F]+lookup[num>>12&0x3F]+lookup[num>>6&0x3F]+lookup[num&0x3F];}function encodeChunk(uint8,start,end){var tmp;var output=[];for(var i=start;i<end;i+=3){tmp=(uint8[i]<<16&0xFF0000)+(uint8[i+1]<<8&0xFF00)+(uint8[i+2]&0xFF);output.push(tripletToBase64(tmp));}return output.join('');}function fromByteArray(uint8){var tmp;var len=uint8.length;var extraBytes=len%3;// if we have 1 byte left, pad 2 bytes
var parts=[];var maxChunkLength=16383;// must be multiple of 3
// go through the array every three bytes, we'll deal with trailing stuff later
for(var i=0,len2=len-extraBytes;i<len2;i+=maxChunkLength){parts.push(encodeChunk(uint8,i,i+maxChunkLength>len2?len2:i+maxChunkLength));}// pad the end with zeros, but make sure to not forget the extra bytes
if(extraBytes===1){tmp=uint8[len-1];parts.push(lookup[tmp>>2]+lookup[tmp<<4&0x3F]+'==');}else if(extraBytes===2){tmp=(uint8[len-2]<<8)+uint8[len-1];parts.push(lookup[tmp>>10]+lookup[tmp>>4&0x3F]+lookup[tmp<<2&0x3F]+'=');}return parts.join('');}},{}],2:[function(require,module,exports){},{}],3:[function(require,module,exports){(function(Buffer){/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */'use strict';var base64=require('base64-js');var ieee754=require('ieee754');var customInspectSymbol=typeof Symbol==='function'&&typeof Symbol["for"]==='function'?Symbol["for"]('nodejs.util.inspect.custom'):null;exports.Buffer=Buffer;exports.SlowBuffer=SlowBuffer;exports.INSPECT_MAX_BYTES=50;var K_MAX_LENGTH=0x7fffffff;exports.kMaxLength=K_MAX_LENGTH;/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */Buffer.TYPED_ARRAY_SUPPORT=typedArraySupport();if(!Buffer.TYPED_ARRAY_SUPPORT&&typeof console!=='undefined'&&typeof console.error==='function'){console.error('This browser lacks typed array (Uint8Array) support which is required by '+'`buffer` v5.x. Use `buffer` v4.x if you require old browser support.');}function typedArraySupport(){// Can typed array instances can be augmented?
try{var arr=new Uint8Array(1);var proto={foo:function foo(){return 42;}};Object.setPrototypeOf(proto,Uint8Array.prototype);Object.setPrototypeOf(arr,proto);return arr.foo()===42;}catch(e){return false;}}Object.defineProperty(Buffer.prototype,'parent',{enumerable:true,get:function get(){if(!Buffer.isBuffer(this))return undefined;return this.buffer;}});Object.defineProperty(Buffer.prototype,'offset',{enumerable:true,get:function get(){if(!Buffer.isBuffer(this))return undefined;return this.byteOffset;}});function createBuffer(length){if(length>K_MAX_LENGTH){throw new RangeError('The value "'+length+'" is invalid for option "size"');}// Return an augmented `Uint8Array` instance
var buf=new Uint8Array(length);Object.setPrototypeOf(buf,Buffer.prototype);return buf;}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function Buffer(arg,encodingOrOffset,length){// Common case.
if(typeof arg==='number'){if(typeof encodingOrOffset==='string'){throw new TypeError('The "string" argument must be of type string. Received type number');}return allocUnsafe(arg);}return from(arg,encodingOrOffset,length);}// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if(typeof Symbol!=='undefined'&&Symbol.species!=null&&Buffer[Symbol.species]===Buffer){Object.defineProperty(Buffer,Symbol.species,{value:null,configurable:true,enumerable:false,writable:false});}Buffer.poolSize=8192;// not used by this implementation
function from(value,encodingOrOffset,length){if(typeof value==='string'){return fromString(value,encodingOrOffset);}if(ArrayBuffer.isView(value)){return fromArrayLike(value);}if(value==null){throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, '+'or Array-like Object. Received type '+_typeof(value));}if(isInstance(value,ArrayBuffer)||value&&isInstance(value.buffer,ArrayBuffer)){return fromArrayBuffer(value,encodingOrOffset,length);}if(typeof value==='number'){throw new TypeError('The "value" argument must not be of type number. Received type number');}var valueOf=value.valueOf&&value.valueOf();if(valueOf!=null&&valueOf!==value){return Buffer.from(valueOf,encodingOrOffset,length);}var b=fromObject(value);if(b)return b;if(typeof Symbol!=='undefined'&&Symbol.toPrimitive!=null&&typeof value[Symbol.toPrimitive]==='function'){return Buffer.from(value[Symbol.toPrimitive]('string'),encodingOrOffset,length);}throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, '+'or Array-like Object. Received type '+_typeof(value));}/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/Buffer.from=function(value,encodingOrOffset,length){return from(value,encodingOrOffset,length);};// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype,Uint8Array.prototype);Object.setPrototypeOf(Buffer,Uint8Array);function assertSize(size){if(typeof size!=='number'){throw new TypeError('"size" argument must be of type number');}else if(size<0){throw new RangeError('The value "'+size+'" is invalid for option "size"');}}function alloc(size,fill,encoding){assertSize(size);if(size<=0){return createBuffer(size);}if(fill!==undefined){// Only pay attention to encoding if it's a string. This
// prevents accidentally sending in a number that would
// be interpretted as a start offset.
return typeof encoding==='string'?createBuffer(size).fill(fill,encoding):createBuffer(size).fill(fill);}return createBuffer(size);}/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/Buffer.alloc=function(size,fill,encoding){return alloc(size,fill,encoding);};function allocUnsafe(size){assertSize(size);return createBuffer(size<0?0:checked(size)|0);}/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */Buffer.allocUnsafe=function(size){return allocUnsafe(size);};/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */Buffer.allocUnsafeSlow=function(size){return allocUnsafe(size);};function fromString(string,encoding){if(typeof encoding!=='string'||encoding===''){encoding='utf8';}if(!Buffer.isEncoding(encoding)){throw new TypeError('Unknown encoding: '+encoding);}var length=byteLength(string,encoding)|0;var buf=createBuffer(length);var actual=buf.write(string,encoding);if(actual!==length){// Writing a hex string, for example, that contains invalid characters will
// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
buf=buf.slice(0,actual);}return buf;}function fromArrayLike(array){var length=array.length<0?0:checked(array.length)|0;var buf=createBuffer(length);for(var i=0;i<length;i+=1){buf[i]=array[i]&255;}return buf;}function fromArrayBuffer(array,byteOffset,length){if(byteOffset<0||array.byteLength<byteOffset){throw new RangeError('"offset" is outside of buffer bounds');}if(array.byteLength<byteOffset+(length||0)){throw new RangeError('"length" is outside of buffer bounds');}var buf;if(byteOffset===undefined&&length===undefined){buf=new Uint8Array(array);}else if(length===undefined){buf=new Uint8Array(array,byteOffset);}else{buf=new Uint8Array(array,byteOffset,length);}// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(buf,Buffer.prototype);return buf;}function fromObject(obj){if(Buffer.isBuffer(obj)){var len=checked(obj.length)|0;var buf=createBuffer(len);if(buf.length===0){return buf;}obj.copy(buf,0,0,len);return buf;}if(obj.length!==undefined){if(typeof obj.length!=='number'||numberIsNaN(obj.length)){return createBuffer(0);}return fromArrayLike(obj);}if(obj.type==='Buffer'&&Array.isArray(obj.data)){return fromArrayLike(obj.data);}}function checked(length){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(length>=K_MAX_LENGTH){throw new RangeError('Attempt to allocate Buffer larger than maximum '+'size: 0x'+K_MAX_LENGTH.toString(16)+' bytes');}return length|0;}function SlowBuffer(length){if(+length!=length){// eslint-disable-line eqeqeq
length=0;}return Buffer.alloc(+length);}Buffer.isBuffer=function isBuffer(b){return b!=null&&b._isBuffer===true&&b!==Buffer.prototype;// so Buffer.isBuffer(Buffer.prototype) will be false
};Buffer.compare=function compare(a,b){if(isInstance(a,Uint8Array))a=Buffer.from(a,a.offset,a.byteLength);if(isInstance(b,Uint8Array))b=Buffer.from(b,b.offset,b.byteLength);if(!Buffer.isBuffer(a)||!Buffer.isBuffer(b)){throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');}if(a===b)return 0;var x=a.length;var y=b.length;for(var i=0,len=Math.min(x,y);i<len;++i){if(a[i]!==b[i]){x=a[i];y=b[i];break;}}if(x<y)return-1;if(y<x)return 1;return 0;};Buffer.isEncoding=function isEncoding(encoding){switch(String(encoding).toLowerCase()){case'hex':case'utf8':case'utf-8':case'ascii':case'latin1':case'binary':case'base64':case'ucs2':case'ucs-2':case'utf16le':case'utf-16le':return true;default:return false;}};Buffer.concat=function concat(list,length){if(!Array.isArray(list)){throw new TypeError('"list" argument must be an Array of Buffers');}if(list.length===0){return Buffer.alloc(0);}var i;if(length===undefined){length=0;for(i=0;i<list.length;++i){length+=list[i].length;}}var buffer=Buffer.allocUnsafe(length);var pos=0;for(i=0;i<list.length;++i){var buf=list[i];if(isInstance(buf,Uint8Array)){buf=Buffer.from(buf);}if(!Buffer.isBuffer(buf)){throw new TypeError('"list" argument must be an Array of Buffers');}buf.copy(buffer,pos);pos+=buf.length;}return buffer;};function byteLength(string,encoding){if(Buffer.isBuffer(string)){return string.length;}if(ArrayBuffer.isView(string)||isInstance(string,ArrayBuffer)){return string.byteLength;}if(typeof string!=='string'){throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. '+'Received type '+_typeof(string));}var len=string.length;var mustMatch=arguments.length>2&&arguments[2]===true;if(!mustMatch&&len===0)return 0;// Use a for loop to avoid recursion
var loweredCase=false;for(;;){switch(encoding){case'ascii':case'latin1':case'binary':return len;case'utf8':case'utf-8':return utf8ToBytes(string).length;case'ucs2':case'ucs-2':case'utf16le':case'utf-16le':return len*2;case'hex':return len>>>1;case'base64':return base64ToBytes(string).length;default:if(loweredCase){return mustMatch?-1:utf8ToBytes(string).length;// assume utf8
}encoding=(''+encoding).toLowerCase();loweredCase=true;}}}Buffer.byteLength=byteLength;function slowToString(encoding,start,end){var loweredCase=false;// No need to verify that "this.length <= MAX_UINT32" since it's a read-only
// property of a typed array.
// This behaves neither like String nor Uint8Array in that we set start/end
// to their upper/lower bounds if the value passed is out of range.
// undefined is handled specially as per ECMA-262 6th Edition,
// Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
if(start===undefined||start<0){start=0;}// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if(start>this.length){return'';}if(end===undefined||end>this.length){end=this.length;}if(end<=0){return'';}// Force coersion to uint32. This will also coerce falsey/NaN values to 0.
end>>>=0;start>>>=0;if(end<=start){return'';}if(!encoding)encoding='utf8';while(true){switch(encoding){case'hex':return hexSlice(this,start,end);case'utf8':case'utf-8':return utf8Slice(this,start,end);case'ascii':return asciiSlice(this,start,end);case'latin1':case'binary':return latin1Slice(this,start,end);case'base64':return base64Slice(this,start,end);case'ucs2':case'ucs-2':case'utf16le':case'utf-16le':return utf16leSlice(this,start,end);default:if(loweredCase)throw new TypeError('Unknown encoding: '+encoding);encoding=(encoding+'').toLowerCase();loweredCase=true;}}}// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer=true;function swap(b,n,m){var i=b[n];b[n]=b[m];b[m]=i;}Buffer.prototype.swap16=function swap16(){var len=this.length;if(len%2!==0){throw new RangeError('Buffer size must be a multiple of 16-bits');}for(var i=0;i<len;i+=2){swap(this,i,i+1);}return this;};Buffer.prototype.swap32=function swap32(){var len=this.length;if(len%4!==0){throw new RangeError('Buffer size must be a multiple of 32-bits');}for(var i=0;i<len;i+=4){swap(this,i,i+3);swap(this,i+1,i+2);}return this;};Buffer.prototype.swap64=function swap64(){var len=this.length;if(len%8!==0){throw new RangeError('Buffer size must be a multiple of 64-bits');}for(var i=0;i<len;i+=8){swap(this,i,i+7);swap(this,i+1,i+6);swap(this,i+2,i+5);swap(this,i+3,i+4);}return this;};Buffer.prototype.toString=function toString(){var length=this.length;if(length===0)return'';if(arguments.length===0)return utf8Slice(this,0,length);return slowToString.apply(this,arguments);};Buffer.prototype.toLocaleString=Buffer.prototype.toString;Buffer.prototype.equals=function equals(b){if(!Buffer.isBuffer(b))throw new TypeError('Argument must be a Buffer');if(this===b)return true;return Buffer.compare(this,b)===0;};Buffer.prototype.inspect=function inspect(){var str='';var max=exports.INSPECT_MAX_BYTES;str=this.toString('hex',0,max).replace(/(.{2})/g,'$1 ').trim();if(this.length>max)str+=' ... ';return'<Buffer '+str+'>';};if(customInspectSymbol){Buffer.prototype[customInspectSymbol]=Buffer.prototype.inspect;}Buffer.prototype.compare=function compare(target,start,end,thisStart,thisEnd){if(isInstance(target,Uint8Array)){target=Buffer.from(target,target.offset,target.byteLength);}if(!Buffer.isBuffer(target)){throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. '+'Received type '+_typeof(target));}if(start===undefined){start=0;}if(end===undefined){end=target?target.length:0;}if(thisStart===undefined){thisStart=0;}if(thisEnd===undefined){thisEnd=this.length;}if(start<0||end>target.length||thisStart<0||thisEnd>this.length){throw new RangeError('out of range index');}if(thisStart>=thisEnd&&start>=end){return 0;}if(thisStart>=thisEnd){return-1;}if(start>=end){return 1;}start>>>=0;end>>>=0;thisStart>>>=0;thisEnd>>>=0;if(this===target)return 0;var x=thisEnd-thisStart;var y=end-start;var len=Math.min(x,y);var thisCopy=this.slice(thisStart,thisEnd);var targetCopy=target.slice(start,end);for(var i=0;i<len;++i){if(thisCopy[i]!==targetCopy[i]){x=thisCopy[i];y=targetCopy[i];break;}}if(x<y)return-1;if(y<x)return 1;return 0;};// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer,val,byteOffset,encoding,dir){// Empty buffer means no match
if(buffer.length===0)return-1;// Normalize byteOffset
if(typeof byteOffset==='string'){encoding=byteOffset;byteOffset=0;}else if(byteOffset>0x7fffffff){byteOffset=0x7fffffff;}else if(byteOffset<-0x80000000){byteOffset=-0x80000000;}byteOffset=+byteOffset;// Coerce to Number.
if(numberIsNaN(byteOffset)){// byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
byteOffset=dir?0:buffer.length-1;}// Normalize byteOffset: negative offsets start from the end of the buffer
if(byteOffset<0)byteOffset=buffer.length+byteOffset;if(byteOffset>=buffer.length){if(dir)return-1;else byteOffset=buffer.length-1;}else if(byteOffset<0){if(dir)byteOffset=0;else return-1;}// Normalize val
if(typeof val==='string'){val=Buffer.from(val,encoding);}// Finally, search either indexOf (if dir is true) or lastIndexOf
if(Buffer.isBuffer(val)){// Special case: looking for empty string/buffer always fails
if(val.length===0){return-1;}return arrayIndexOf(buffer,val,byteOffset,encoding,dir);}else if(typeof val==='number'){val=val&0xFF;// Search for a byte value [0-255]
if(typeof Uint8Array.prototype.indexOf==='function'){if(dir){return Uint8Array.prototype.indexOf.call(buffer,val,byteOffset);}else{return Uint8Array.prototype.lastIndexOf.call(buffer,val,byteOffset);}}return arrayIndexOf(buffer,[val],byteOffset,encoding,dir);}throw new TypeError('val must be string, number or Buffer');}function arrayIndexOf(arr,val,byteOffset,encoding,dir){var indexSize=1;var arrLength=arr.length;var valLength=val.length;if(encoding!==undefined){encoding=String(encoding).toLowerCase();if(encoding==='ucs2'||encoding==='ucs-2'||encoding==='utf16le'||encoding==='utf-16le'){if(arr.length<2||val.length<2){return-1;}indexSize=2;arrLength/=2;valLength/=2;byteOffset/=2;}}function read(buf,i){if(indexSize===1){return buf[i];}else{return buf.readUInt16BE(i*indexSize);}}var i;if(dir){var foundIndex=-1;for(i=byteOffset;i<arrLength;i++){if(read(arr,i)===read(val,foundIndex===-1?0:i-foundIndex)){if(foundIndex===-1)foundIndex=i;if(i-foundIndex+1===valLength)return foundIndex*indexSize;}else{if(foundIndex!==-1)i-=i-foundIndex;foundIndex=-1;}}}else{if(byteOffset+valLength>arrLength)byteOffset=arrLength-valLength;for(i=byteOffset;i>=0;i--){var found=true;for(var j=0;j<valLength;j++){if(read(arr,i+j)!==read(val,j)){found=false;break;}}if(found)return i;}}return-1;}Buffer.prototype.includes=function includes(val,byteOffset,encoding){return this.indexOf(val,byteOffset,encoding)!==-1;};Buffer.prototype.indexOf=function indexOf(val,byteOffset,encoding){return bidirectionalIndexOf(this,val,byteOffset,encoding,true);};Buffer.prototype.lastIndexOf=function lastIndexOf(val,byteOffset,encoding){return bidirectionalIndexOf(this,val,byteOffset,encoding,false);};function hexWrite(buf,string,offset,length){offset=Number(offset)||0;var remaining=buf.length-offset;if(!length){length=remaining;}else{length=Number(length);if(length>remaining){length=remaining;}}var strLen=string.length;if(length>strLen/2){length=strLen/2;}for(var i=0;i<length;++i){var parsed=parseInt(string.substr(i*2,2),16);if(numberIsNaN(parsed))return i;buf[offset+i]=parsed;}return i;}function utf8Write(buf,string,offset,length){return blitBuffer(utf8ToBytes(string,buf.length-offset),buf,offset,length);}function asciiWrite(buf,string,offset,length){return blitBuffer(asciiToBytes(string),buf,offset,length);}function latin1Write(buf,string,offset,length){return asciiWrite(buf,string,offset,length);}function base64Write(buf,string,offset,length){return blitBuffer(base64ToBytes(string),buf,offset,length);}function ucs2Write(buf,string,offset,length){return blitBuffer(utf16leToBytes(string,buf.length-offset),buf,offset,length);}Buffer.prototype.write=function write(string,offset,length,encoding){// Buffer#write(string)
if(offset===undefined){encoding='utf8';length=this.length;offset=0;// Buffer#write(string, encoding)
}else if(length===undefined&&typeof offset==='string'){encoding=offset;length=this.length;offset=0;// Buffer#write(string, offset[, length][, encoding])
}else if(isFinite(offset)){offset=offset>>>0;if(isFinite(length)){length=length>>>0;if(encoding===undefined)encoding='utf8';}else{encoding=length;length=undefined;}}else{throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');}var remaining=this.length-offset;if(length===undefined||length>remaining)length=remaining;if(string.length>0&&(length<0||offset<0)||offset>this.length){throw new RangeError('Attempt to write outside buffer bounds');}if(!encoding)encoding='utf8';var loweredCase=false;for(;;){switch(encoding){case'hex':return hexWrite(this,string,offset,length);case'utf8':case'utf-8':return utf8Write(this,string,offset,length);case'ascii':return asciiWrite(this,string,offset,length);case'latin1':case'binary':return latin1Write(this,string,offset,length);case'base64':// Warning: maxLength not taken into account in base64Write
return base64Write(this,string,offset,length);case'ucs2':case'ucs-2':case'utf16le':case'utf-16le':return ucs2Write(this,string,offset,length);default:if(loweredCase)throw new TypeError('Unknown encoding: '+encoding);encoding=(''+encoding).toLowerCase();loweredCase=true;}}};Buffer.prototype.toJSON=function toJSON(){return{type:'Buffer',data:Array.prototype.slice.call(this._arr||this,0)};};function base64Slice(buf,start,end){if(start===0&&end===buf.length){return base64.fromByteArray(buf);}else{return base64.fromByteArray(buf.slice(start,end));}}function utf8Slice(buf,start,end){end=Math.min(buf.length,end);var res=[];var i=start;while(i<end){var firstByte=buf[i];var codePoint=null;var bytesPerSequence=firstByte>0xEF?4:firstByte>0xDF?3:firstByte>0xBF?2:1;if(i+bytesPerSequence<=end){var secondByte,thirdByte,fourthByte,tempCodePoint;switch(bytesPerSequence){case 1:if(firstByte<0x80){codePoint=firstByte;}break;case 2:secondByte=buf[i+1];if((secondByte&0xC0)===0x80){tempCodePoint=(firstByte&0x1F)<<0x6|secondByte&0x3F;if(tempCodePoint>0x7F){codePoint=tempCodePoint;}}break;case 3:secondByte=buf[i+1];thirdByte=buf[i+2];if((secondByte&0xC0)===0x80&&(thirdByte&0xC0)===0x80){tempCodePoint=(firstByte&0xF)<<0xC|(secondByte&0x3F)<<0x6|thirdByte&0x3F;if(tempCodePoint>0x7FF&&(tempCodePoint<0xD800||tempCodePoint>0xDFFF)){codePoint=tempCodePoint;}}break;case 4:secondByte=buf[i+1];thirdByte=buf[i+2];fourthByte=buf[i+3];if((secondByte&0xC0)===0x80&&(thirdByte&0xC0)===0x80&&(fourthByte&0xC0)===0x80){tempCodePoint=(firstByte&0xF)<<0x12|(secondByte&0x3F)<<0xC|(thirdByte&0x3F)<<0x6|fourthByte&0x3F;if(tempCodePoint>0xFFFF&&tempCodePoint<0x110000){codePoint=tempCodePoint;}}}}if(codePoint===null){// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
codePoint=0xFFFD;bytesPerSequence=1;}else if(codePoint>0xFFFF){// encode to utf16 (surrogate pair dance)
codePoint-=0x10000;res.push(codePoint>>>10&0x3FF|0xD800);codePoint=0xDC00|codePoint&0x3FF;}res.push(codePoint);i+=bytesPerSequence;}return decodeCodePointsArray(res);}// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH=0x1000;function decodeCodePointsArray(codePoints){var len=codePoints.length;if(len<=MAX_ARGUMENTS_LENGTH){return String.fromCharCode.apply(String,codePoints);// avoid extra slice()
}// Decode in chunks to avoid "call stack size exceeded".
var res='';var i=0;while(i<len){res+=String.fromCharCode.apply(String,codePoints.slice(i,i+=MAX_ARGUMENTS_LENGTH));}return res;}function asciiSlice(buf,start,end){var ret='';end=Math.min(buf.length,end);for(var i=start;i<end;++i){ret+=String.fromCharCode(buf[i]&0x7F);}return ret;}function latin1Slice(buf,start,end){var ret='';end=Math.min(buf.length,end);for(var i=start;i<end;++i){ret+=String.fromCharCode(buf[i]);}return ret;}function hexSlice(buf,start,end){var len=buf.length;if(!start||start<0)start=0;if(!end||end<0||end>len)end=len;var out='';for(var i=start;i<end;++i){out+=hexSliceLookupTable[buf[i]];}return out;}function utf16leSlice(buf,start,end){var bytes=buf.slice(start,end);var res='';for(var i=0;i<bytes.length;i+=2){res+=String.fromCharCode(bytes[i]+bytes[i+1]*256);}return res;}Buffer.prototype.slice=function slice(start,end){var len=this.length;start=~~start;end=end===undefined?len:~~end;if(start<0){start+=len;if(start<0)start=0;}else if(start>len){start=len;}if(end<0){end+=len;if(end<0)end=0;}else if(end>len){end=len;}if(end<start)end=start;var newBuf=this.subarray(start,end);// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(newBuf,Buffer.prototype);return newBuf;};/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function checkOffset(offset,ext,length){if(offset%1!==0||offset<0)throw new RangeError('offset is not uint');if(offset+ext>length)throw new RangeError('Trying to access beyond buffer length');}Buffer.prototype.readUIntLE=function readUIntLE(offset,byteLength,noAssert){offset=offset>>>0;byteLength=byteLength>>>0;if(!noAssert)checkOffset(offset,byteLength,this.length);var val=this[offset];var mul=1;var i=0;while(++i<byteLength&&(mul*=0x100)){val+=this[offset+i]*mul;}return val;};Buffer.prototype.readUIntBE=function readUIntBE(offset,byteLength,noAssert){offset=offset>>>0;byteLength=byteLength>>>0;if(!noAssert){checkOffset(offset,byteLength,this.length);}var val=this[offset+--byteLength];var mul=1;while(byteLength>0&&(mul*=0x100)){val+=this[offset+--byteLength]*mul;}return val;};Buffer.prototype.readUInt8=function readUInt8(offset,noAssert){offset=offset>>>0;if(!noAssert)checkOffset(offset,1,this.length);return this[offset];};Buffer.prototype.readUInt16LE=function readUInt16LE(offset,noAssert){offset=offset>>>0;if(!noAssert)checkOffset(offset,2,this.length);return this[offset]|this[offset+1]<<8;};Buffer.prototype.readUInt16BE=function readUInt16BE(offset,noAssert){offset=offset>>>0;if(!noAssert)checkOffset(offset,2,this.length);return this[offset]<<8|this[offset+1];};Buffer.prototype.readUInt32LE=function readUInt32LE(offset,noAssert){offset=offset>>>0;if(!noAssert)checkOffset(offset,4,this.length);return(this[offset]|this[offset+1]<<8|this[offset+2]<<16)+this[offset+3]*0x1000000;};Buffer.prototype.readUInt32BE=function readUInt32BE(offset,noAssert){offset=offset>>>0;if(!noAssert)checkOffset(offset,4,this.length);return this[offset]*0x1000000+(this[offset+1]<<16|this[offset+2]<<8|this[offset+3]);};Buffer.prototype.readIntLE=function readIntLE(offset,byteLength,noAssert){offset=offset>>>0;byteLength=byteLength>>>0;if(!noAssert)checkOffset(offset,byteLength,this.length);var val=this[offset];var mul=1;var i=0;while(++i<byteLength&&(mul*=0x100)){val+=this[offset+i]*mul;}mul*=0x80;if(val>=mul)val-=Math.pow(2,8*byteLength);return val;};Buffer.prototype.readIntBE=function readIntBE(offset,byteLength,noAssert){offset=offset>>>0;byteLength=byteLength>>>0;if(!noAssert)checkOffset(offset,byteLength,this.length);var i=byteLength;var mul=1;var val=this[offset+--i];while(i>0&&(mul*=0x100)){val+=this[offset+--i]*mul;}mul*=0x80;if(val>=mul)val-=Math.pow(2,8*byteLength);return val;};Buffer.prototype.readInt8=function readInt8(offset,noAssert){offset=offset>>>0;if(!noAssert)checkOffset(offset,1,this.length);if(!(this[offset]&0x80))return this[offset];return(0xff-this[offset]+1)*-1;};Buffer.prototype.readInt16LE=function readInt16LE(offset,noAssert){offset=offset>>>0;if(!noAssert)checkOffset(offset,2,this.length);var val=this[offset]|this[offset+1]<<8;return val&0x8000?val|0xFFFF0000:val;};Buffer.prototype.readInt16BE=function readInt16BE(offset,noAssert){offset=offset>>>0;if(!noAssert)checkOffset(offset,2,this.length);var val=this[offset+1]|this[offset]<<8;return val&0x8000?val|0xFFFF0000:val;};Buffer.prototype.readInt32LE=function readInt32LE(offset,noAssert){offset=offset>>>0;if(!noAssert)checkOffset(offset,4,this.length);return this[offset]|this[offset+1]<<8|this[offset+2]<<16|this[offset+3]<<24;};Buffer.prototype.readInt32BE=function readInt32BE(offset,noAssert){offset=offset>>>0;if(!noAssert)checkOffset(offset,4,this.length);return this[offset]<<24|this[offset+1]<<16|this[offset+2]<<8|this[offset+3];};Buffer.prototype.readFloatLE=function readFloatLE(offset,noAssert){offset=offset>>>0;if(!noAssert)checkOffset(offset,4,this.length);return ieee754.read(this,offset,true,23,4);};Buffer.prototype.readFloatBE=function readFloatBE(offset,noAssert){offset=offset>>>0;if(!noAssert)checkOffset(offset,4,this.length);return ieee754.read(this,offset,false,23,4);};Buffer.prototype.readDoubleLE=function readDoubleLE(offset,noAssert){offset=offset>>>0;if(!noAssert)checkOffset(offset,8,this.length);return ieee754.read(this,offset,true,52,8);};Buffer.prototype.readDoubleBE=function readDoubleBE(offset,noAssert){offset=offset>>>0;if(!noAssert)checkOffset(offset,8,this.length);return ieee754.read(this,offset,false,52,8);};function checkInt(buf,value,offset,ext,max,min){if(!Buffer.isBuffer(buf))throw new TypeError('"buffer" argument must be a Buffer instance');if(value>max||value<min)throw new RangeError('"value" argument is out of bounds');if(offset+ext>buf.length)throw new RangeError('Index out of range');}Buffer.prototype.writeUIntLE=function writeUIntLE(value,offset,byteLength,noAssert){value=+value;offset=offset>>>0;byteLength=byteLength>>>0;if(!noAssert){var maxBytes=Math.pow(2,8*byteLength)-1;checkInt(this,value,offset,byteLength,maxBytes,0);}var mul=1;var i=0;this[offset]=value&0xFF;while(++i<byteLength&&(mul*=0x100)){this[offset+i]=value/mul&0xFF;}return offset+byteLength;};Buffer.prototype.writeUIntBE=function writeUIntBE(value,offset,byteLength,noAssert){value=+value;offset=offset>>>0;byteLength=byteLength>>>0;if(!noAssert){var maxBytes=Math.pow(2,8*byteLength)-1;checkInt(this,value,offset,byteLength,maxBytes,0);}var i=byteLength-1;var mul=1;this[offset+i]=value&0xFF;while(--i>=0&&(mul*=0x100)){this[offset+i]=value/mul&0xFF;}return offset+byteLength;};Buffer.prototype.writeUInt8=function writeUInt8(value,offset,noAssert){value=+value;offset=offset>>>0;if(!noAssert)checkInt(this,value,offset,1,0xff,0);this[offset]=value&0xff;return offset+1;};Buffer.prototype.writeUInt16LE=function writeUInt16LE(value,offset,noAssert){value=+value;offset=offset>>>0;if(!noAssert)checkInt(this,value,offset,2,0xffff,0);this[offset]=value&0xff;this[offset+1]=value>>>8;return offset+2;};Buffer.prototype.writeUInt16BE=function writeUInt16BE(value,offset,noAssert){value=+value;offset=offset>>>0;if(!noAssert)checkInt(this,value,offset,2,0xffff,0);this[offset]=value>>>8;this[offset+1]=value&0xff;return offset+2;};Buffer.prototype.writeUInt32LE=function writeUInt32LE(value,offset,noAssert){value=+value;offset=offset>>>0;if(!noAssert)checkInt(this,value,offset,4,0xffffffff,0);this[offset+3]=value>>>24;this[offset+2]=value>>>16;this[offset+1]=value>>>8;this[offset]=value&0xff;return offset+4;};Buffer.prototype.writeUInt32BE=function writeUInt32BE(value,offset,noAssert){value=+value;offset=offset>>>0;if(!noAssert)checkInt(this,value,offset,4,0xffffffff,0);this[offset]=value>>>24;this[offset+1]=value>>>16;this[offset+2]=value>>>8;this[offset+3]=value&0xff;return offset+4;};Buffer.prototype.writeIntLE=function writeIntLE(value,offset,byteLength,noAssert){value=+value;offset=offset>>>0;if(!noAssert){var limit=Math.pow(2,8*byteLength-1);checkInt(this,value,offset,byteLength,limit-1,-limit);}var i=0;var mul=1;var sub=0;this[offset]=value&0xFF;while(++i<byteLength&&(mul*=0x100)){if(value<0&&sub===0&&this[offset+i-1]!==0){sub=1;}this[offset+i]=(value/mul>>0)-sub&0xFF;}return offset+byteLength;};Buffer.prototype.writeIntBE=function writeIntBE(value,offset,byteLength,noAssert){value=+value;offset=offset>>>0;if(!noAssert){var limit=Math.pow(2,8*byteLength-1);checkInt(this,value,offset,byteLength,limit-1,-limit);}var i=byteLength-1;var mul=1;var sub=0;this[offset+i]=value&0xFF;while(--i>=0&&(mul*=0x100)){if(value<0&&sub===0&&this[offset+i+1]!==0){sub=1;}this[offset+i]=(value/mul>>0)-sub&0xFF;}return offset+byteLength;};Buffer.prototype.writeInt8=function writeInt8(value,offset,noAssert){value=+value;offset=offset>>>0;if(!noAssert)checkInt(this,value,offset,1,0x7f,-0x80);if(value<0)value=0xff+value+1;this[offset]=value&0xff;return offset+1;};Buffer.prototype.writeInt16LE=function writeInt16LE(value,offset,noAssert){value=+value;offset=offset>>>0;if(!noAssert)checkInt(this,value,offset,2,0x7fff,-0x8000);this[offset]=value&0xff;this[offset+1]=value>>>8;return offset+2;};Buffer.prototype.writeInt16BE=function writeInt16BE(value,offset,noAssert){value=+value;offset=offset>>>0;if(!noAssert)checkInt(this,value,offset,2,0x7fff,-0x8000);this[offset]=value>>>8;this[offset+1]=value&0xff;return offset+2;};Buffer.prototype.writeInt32LE=function writeInt32LE(value,offset,noAssert){value=+value;offset=offset>>>0;if(!noAssert)checkInt(this,value,offset,4,0x7fffffff,-0x80000000);this[offset]=value&0xff;this[offset+1]=value>>>8;this[offset+2]=value>>>16;this[offset+3]=value>>>24;return offset+4;};Buffer.prototype.writeInt32BE=function writeInt32BE(value,offset,noAssert){value=+value;offset=offset>>>0;if(!noAssert)checkInt(this,value,offset,4,0x7fffffff,-0x80000000);if(value<0)value=0xffffffff+value+1;this[offset]=value>>>24;this[offset+1]=value>>>16;this[offset+2]=value>>>8;this[offset+3]=value&0xff;return offset+4;};function checkIEEE754(buf,value,offset,ext,max,min){if(offset+ext>buf.length)throw new RangeError('Index out of range');if(offset<0)throw new RangeError('Index out of range');}function writeFloat(buf,value,offset,littleEndian,noAssert){value=+value;offset=offset>>>0;if(!noAssert){checkIEEE754(buf,value,offset,4,3.4028234663852886e+38,-3.4028234663852886e+38);}ieee754.write(buf,value,offset,littleEndian,23,4);return offset+4;}Buffer.prototype.writeFloatLE=function writeFloatLE(value,offset,noAssert){return writeFloat(this,value,offset,true,noAssert);};Buffer.prototype.writeFloatBE=function writeFloatBE(value,offset,noAssert){return writeFloat(this,value,offset,false,noAssert);};function writeDouble(buf,value,offset,littleEndian,noAssert){value=+value;offset=offset>>>0;if(!noAssert){checkIEEE754(buf,value,offset,8,1.7976931348623157E+308,-1.7976931348623157E+308);}ieee754.write(buf,value,offset,littleEndian,52,8);return offset+8;}Buffer.prototype.writeDoubleLE=function writeDoubleLE(value,offset,noAssert){return writeDouble(this,value,offset,true,noAssert);};Buffer.prototype.writeDoubleBE=function writeDoubleBE(value,offset,noAssert){return writeDouble(this,value,offset,false,noAssert);};// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy=function copy(target,targetStart,start,end){if(!Buffer.isBuffer(target))throw new TypeError('argument should be a Buffer');if(!start)start=0;if(!end&&end!==0)end=this.length;if(targetStart>=target.length)targetStart=target.length;if(!targetStart)targetStart=0;if(end>0&&end<start)end=start;// Copy 0 bytes; we're done
if(end===start)return 0;if(target.length===0||this.length===0)return 0;// Fatal error conditions
if(targetStart<0){throw new RangeError('targetStart out of bounds');}if(start<0||start>=this.length)throw new RangeError('Index out of range');if(end<0)throw new RangeError('sourceEnd out of bounds');// Are we oob?
if(end>this.length)end=this.length;if(target.length-targetStart<end-start){end=target.length-targetStart+start;}var len=end-start;if(this===target&&typeof Uint8Array.prototype.copyWithin==='function'){// Use built-in when available, missing from IE11
this.copyWithin(targetStart,start,end);}else if(this===target&&start<targetStart&&targetStart<end){// descending copy from end
for(var i=len-1;i>=0;--i){target[i+targetStart]=this[i+start];}}else{Uint8Array.prototype.set.call(target,this.subarray(start,end),targetStart);}return len;};// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill=function fill(val,start,end,encoding){// Handle string cases:
if(typeof val==='string'){if(typeof start==='string'){encoding=start;start=0;end=this.length;}else if(typeof end==='string'){encoding=end;end=this.length;}if(encoding!==undefined&&typeof encoding!=='string'){throw new TypeError('encoding must be a string');}if(typeof encoding==='string'&&!Buffer.isEncoding(encoding)){throw new TypeError('Unknown encoding: '+encoding);}if(val.length===1){var code=val.charCodeAt(0);if(encoding==='utf8'&&code<128||encoding==='latin1'){// Fast path: If `val` fits into a single byte, use that numeric value.
val=code;}}}else if(typeof val==='number'){val=val&255;}else if(typeof val==='boolean'){val=Number(val);}// Invalid ranges are not set to a default, so can range check early.
if(start<0||this.length<start||this.length<end){throw new RangeError('Out of range index');}if(end<=start){return this;}start=start>>>0;end=end===undefined?this.length:end>>>0;if(!val)val=0;var i;if(typeof val==='number'){for(i=start;i<end;++i){this[i]=val;}}else{var bytes=Buffer.isBuffer(val)?val:Buffer.from(val,encoding);var len=bytes.length;if(len===0){throw new TypeError('The value "'+val+'" is invalid for argument "value"');}for(i=0;i<end-start;++i){this[i+start]=bytes[i%len];}}return this;};// HELPER FUNCTIONS
// ================
var INVALID_BASE64_RE=/[^+/0-9A-Za-z-_]/g;function base64clean(str){// Node takes equal signs as end of the Base64 encoding
str=str.split('=')[0];// Node strips out invalid characters like \n and \t from the string, base64-js does not
str=str.trim().replace(INVALID_BASE64_RE,'');// Node converts strings with length < 2 to ''
if(str.length<2)return'';// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
while(str.length%4!==0){str=str+'=';}return str;}function utf8ToBytes(string,units){units=units||Infinity;var codePoint;var length=string.length;var leadSurrogate=null;var bytes=[];for(var i=0;i<length;++i){codePoint=string.charCodeAt(i);// is surrogate component
if(codePoint>0xD7FF&&codePoint<0xE000){// last char was a lead
if(!leadSurrogate){// no lead yet
if(codePoint>0xDBFF){// unexpected trail
if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD);continue;}else if(i+1===length){// unpaired lead
if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD);continue;}// valid lead
leadSurrogate=codePoint;continue;}// 2 leads in a row
if(codePoint<0xDC00){if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD);leadSurrogate=codePoint;continue;}// valid surrogate pair
codePoint=(leadSurrogate-0xD800<<10|codePoint-0xDC00)+0x10000;}else if(leadSurrogate){// valid bmp char, but last char was a lead
if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD);}leadSurrogate=null;// encode utf8
if(codePoint<0x80){if((units-=1)<0)break;bytes.push(codePoint);}else if(codePoint<0x800){if((units-=2)<0)break;bytes.push(codePoint>>0x6|0xC0,codePoint&0x3F|0x80);}else if(codePoint<0x10000){if((units-=3)<0)break;bytes.push(codePoint>>0xC|0xE0,codePoint>>0x6&0x3F|0x80,codePoint&0x3F|0x80);}else if(codePoint<0x110000){if((units-=4)<0)break;bytes.push(codePoint>>0x12|0xF0,codePoint>>0xC&0x3F|0x80,codePoint>>0x6&0x3F|0x80,codePoint&0x3F|0x80);}else{throw new Error('Invalid code point');}}return bytes;}function asciiToBytes(str){var byteArray=[];for(var i=0;i<str.length;++i){// Node's code seems to be doing this and not & 0x7F..
byteArray.push(str.charCodeAt(i)&0xFF);}return byteArray;}function utf16leToBytes(str,units){var c,hi,lo;var byteArray=[];for(var i=0;i<str.length;++i){if((units-=2)<0)break;c=str.charCodeAt(i);hi=c>>8;lo=c%256;byteArray.push(lo);byteArray.push(hi);}return byteArray;}function base64ToBytes(str){return base64.toByteArray(base64clean(str));}function blitBuffer(src,dst,offset,length){for(var i=0;i<length;++i){if(i+offset>=dst.length||i>=src.length)break;dst[i+offset]=src[i];}return i;}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj,type){return obj instanceof type||obj!=null&&obj.constructor!=null&&obj.constructor.name!=null&&obj.constructor.name===type.name;}function numberIsNaN(obj){// For IE11 support
return obj!==obj;// eslint-disable-line no-self-compare
}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var hexSliceLookupTable=function(){var alphabet='0123456789abcdef';var table=new Array(256);for(var i=0;i<16;++i){var i16=i*16;for(var j=0;j<16;++j){table[i16+j]=alphabet[i]+alphabet[j];}}return table;}();}).call(this,require("buffer").Buffer);},{"base64-js":1,"buffer":3,"ieee754":32}],4:[function(require,module,exports){module.exports={"elementNames":{"altglyph":"altGlyph","altglyphdef":"altGlyphDef","altglyphitem":"altGlyphItem","animatecolor":"animateColor","animatemotion":"animateMotion","animatetransform":"animateTransform","clippath":"clipPath","feblend":"feBlend","fecolormatrix":"feColorMatrix","fecomponenttransfer":"feComponentTransfer","fecomposite":"feComposite","feconvolvematrix":"feConvolveMatrix","fediffuselighting":"feDiffuseLighting","fedisplacementmap":"feDisplacementMap","fedistantlight":"feDistantLight","fedropshadow":"feDropShadow","feflood":"feFlood","fefunca":"feFuncA","fefuncb":"feFuncB","fefuncg":"feFuncG","fefuncr":"feFuncR","fegaussianblur":"feGaussianBlur","feimage":"feImage","femerge":"feMerge","femergenode":"feMergeNode","femorphology":"feMorphology","feoffset":"feOffset","fepointlight":"fePointLight","fespecularlighting":"feSpecularLighting","fespotlight":"feSpotLight","fetile":"feTile","feturbulence":"feTurbulence","foreignobject":"foreignObject","glyphref":"glyphRef","lineargradient":"linearGradient","radialgradient":"radialGradient","textpath":"textPath"},"attributeNames":{"definitionurl":"definitionURL","attributename":"attributeName","attributetype":"attributeType","basefrequency":"baseFrequency","baseprofile":"baseProfile","calcmode":"calcMode","clippathunits":"clipPathUnits","diffuseconstant":"diffuseConstant","edgemode":"edgeMode","filterunits":"filterUnits","glyphref":"glyphRef","gradienttransform":"gradientTransform","gradientunits":"gradientUnits","kernelmatrix":"kernelMatrix","kernelunitlength":"kernelUnitLength","keypoints":"keyPoints","keysplines":"keySplines","keytimes":"keyTimes","lengthadjust":"lengthAdjust","limitingconeangle":"limitingConeAngle","markerheight":"markerHeight","markerunits":"markerUnits","markerwidth":"markerWidth","maskcontentunits":"maskContentUnits","maskunits":"maskUnits","numoctaves":"numOctaves","pathlength":"pathLength","patterncontentunits":"patternContentUnits","patterntransform":"patternTransform","patternunits":"patternUnits","pointsatx":"pointsAtX","pointsaty":"pointsAtY","pointsatz":"pointsAtZ","preservealpha":"preserveAlpha","preserveaspectratio":"preserveAspectRatio","primitiveunits":"primitiveUnits","refx":"refX","refy":"refY","repeatcount":"repeatCount","repeatdur":"repeatDur","requiredextensions":"requiredExtensions","requiredfeatures":"requiredFeatures","specularconstant":"specularConstant","specularexponent":"specularExponent","spreadmethod":"spreadMethod","startoffset":"startOffset","stddeviation":"stdDeviation","stitchtiles":"stitchTiles","surfacescale":"surfaceScale","systemlanguage":"systemLanguage","tablevalues":"tableValues","targetx":"targetX","targety":"targetY","textlength":"textLength","viewbox":"viewBox","viewtarget":"viewTarget","xchannelselector":"xChannelSelector","ychannelselector":"yChannelSelector","zoomandpan":"zoomAndPan"}};},{}],5:[function(require,module,exports){/*
  Module dependencies
*/var ElementType=require('domelementtype');var entities=require('entities');/* mixed-case SVG and MathML tags & attributes
   recognized by the HTML parser, see
   https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inforeign
*/var foreignNames=require('./foreignNames.json');foreignNames.elementNames.__proto__=null;/* use as a simple dictionary */foreignNames.attributeNames.__proto__=null;var unencodedElements={__proto__:null,style:true,script:true,xmp:true,iframe:true,noembed:true,noframes:true,plaintext:true,noscript:true};/*
  Format attributes
*/function formatAttrs(attributes,opts){if(!attributes)return;var output='';var value;// Loop through the attributes
for(var key in attributes){value=attributes[key];if(output){output+=' ';}if(opts.xmlMode==='foreign'){/* fix up mixed-case attribute names */key=foreignNames.attributeNames[key]||key;}output+=key;if(value!==null&&value!==''||opts.xmlMode){output+='="'+(opts.decodeEntities?entities.encodeXML(value):value.replace(/\"/g,'&quot;'))+'"';}}return output;}/*
  Self-enclosing tags (stolen from node-htmlparser)
*/var singleTag={__proto__:null,area:true,base:true,basefont:true,br:true,col:true,command:true,embed:true,frame:true,hr:true,img:true,input:true,isindex:true,keygen:true,link:true,meta:true,param:true,source:true,track:true,wbr:true};var render=module.exports=function(dom,opts){if(!Array.isArray(dom)&&!dom.cheerio)dom=[dom];opts=opts||{};var output='';for(var i=0;i<dom.length;i++){var elem=dom[i];if(elem.type==='root')output+=render(elem.children,opts);else if(ElementType.isTag(elem))output+=renderTag(elem,opts);else if(elem.type===ElementType.Directive)output+=renderDirective(elem);else if(elem.type===ElementType.Comment)output+=renderComment(elem);else if(elem.type===ElementType.CDATA)output+=renderCdata(elem);else output+=renderText(elem,opts);}return output;};var foreignModeIntegrationPoints=['mi','mo','mn','ms','mtext','annotation-xml','foreignObject','desc','title'];function renderTag(elem,opts){// Handle SVG / MathML in HTML
if(opts.xmlMode==='foreign'){/* fix up mixed-case element names */elem.name=foreignNames.elementNames[elem.name]||elem.name;/* exit foreign mode at integration points */if(elem.parent&&foreignModeIntegrationPoints.indexOf(elem.parent.name)>=0)opts=Object.assign({},opts,{xmlMode:false});}if(!opts.xmlMode&&['svg','math'].indexOf(elem.name)>=0){opts=Object.assign({},opts,{xmlMode:'foreign'});}var tag='<'+elem.name;var attribs=formatAttrs(elem.attribs,opts);if(attribs){tag+=' '+attribs;}if(opts.xmlMode&&(!elem.children||elem.children.length===0)){tag+='/>';}else{tag+='>';if(elem.children){tag+=render(elem.children,opts);}if(!singleTag[elem.name]||opts.xmlMode){tag+='</'+elem.name+'>';}}return tag;}function renderDirective(elem){return'<'+elem.data+'>';}function renderText(elem,opts){var data=elem.data||'';// if entities weren't decoded, no need to encode them back
if(opts.decodeEntities&&!(elem.parent&&elem.parent.name in unencodedElements)){data=entities.encodeXML(data);}return data;}function renderCdata(elem){return'<![CDATA['+elem.children[0].data+']]>';}function renderComment(elem){return'<!--'+elem.data+'-->';}},{"./foreignNames.json":4,"domelementtype":6,"entities":20}],6:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});/**
 * Tests whether an element is a tag or not.
 *
 * @param elem Element to test
 */function isTag(elem){return elem.type==="tag"/* Tag */||elem.type==="script"/* Script */||elem.type==="style"/* Style */;}exports.isTag=isTag;// Exports for backwards compatibility
exports.Text="text"/* Text */;//Text
exports.Directive="directive"/* Directive */;//<? ... ?>
exports.Comment="comment"/* Comment */;//<!-- ... -->
exports.Script="script"/* Script */;//<script> tags
exports.Style="style"/* Style */;//<style> tags
exports.Tag="tag"/* Tag */;//Any tag
exports.CDATA="cdata"/* CDATA */;//<![CDATA[ ... ]]>
exports.Doctype="doctype"/* Doctype */;},{}],7:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var node_1=require("./node");exports.Node=node_1.Node;exports.Element=node_1.Element;exports.DataNode=node_1.DataNode;exports.NodeWithChildren=node_1.NodeWithChildren;var reWhitespace=/\s+/g;// Default options
var defaultOpts={normalizeWhitespace:false,withStartIndices:false,withEndIndices:false};var DomHandler=/** @class */function(){/**
     * Initiate a new DomHandler.
     *
     * @param callback Called once parsing has completed.
     * @param options Settings for the handler.
     * @param elementCB Callback whenever a tag is closed.
     */function DomHandler(callback,options,elementCB){/** The constructed DOM */this.dom=[];/** Indicated whether parsing has been completed. */this._done=false;/** Stack of open tags. */this._tagStack=[];/** A data node that is still being written to. */this._lastNode=null;/** Reference to the parser instance. Used for location information. */this._parser=null;// Make it possible to skip arguments, for backwards-compatibility
if(typeof options==="function"){elementCB=options;options=defaultOpts;}if(_typeof(callback)==="object"){options=callback;callback=undefined;}this._callback=callback||null;this._options=options||defaultOpts;this._elementCB=elementCB||null;}DomHandler.prototype.onparserinit=function(parser){this._parser=parser;};// Resets the handler back to starting state
DomHandler.prototype.onreset=function(){this.dom=[];this._done=false;this._tagStack=[];this._lastNode=null;this._parser=this._parser||null;};// Signals the handler that parsing is done
DomHandler.prototype.onend=function(){if(this._done)return;this._done=true;this._parser=null;this.handleCallback(null);};DomHandler.prototype.onerror=function(error){this.handleCallback(error);};DomHandler.prototype.onclosetag=function(){this._lastNode=null;// If(this._tagStack.pop().name !== name) this.handleCallback(Error("Tagname didn't match!"));
var elem=this._tagStack.pop();if(!elem||!this._parser){return;}if(this._options.withEndIndices){elem.endIndex=this._parser.endIndex;}if(this._elementCB)this._elementCB(elem);};DomHandler.prototype.onopentag=function(name,attribs){var element=new node_1.Element(name,attribs);this.addNode(element);this._tagStack.push(element);};DomHandler.prototype.ontext=function(data){var normalize=this._options.normalizeWhitespace;var _lastNode=this._lastNode;if(_lastNode&&_lastNode.type==="text"/* Text */){if(normalize){_lastNode.data=(_lastNode.data+data).replace(reWhitespace," ");}else{_lastNode.data+=data;}}else{if(normalize){data=data.replace(reWhitespace," ");}var node=new node_1.DataNode("text"/* Text */,data);this.addNode(node);this._lastNode=node;}};DomHandler.prototype.oncomment=function(data){if(this._lastNode&&this._lastNode.type==="comment"/* Comment */){this._lastNode.data+=data;return;}var node=new node_1.DataNode("comment"/* Comment */,data);this.addNode(node);this._lastNode=node;};DomHandler.prototype.oncommentend=function(){this._lastNode=null;};DomHandler.prototype.oncdatastart=function(){var text=new node_1.DataNode("text"/* Text */,"");var node=new node_1.NodeWithChildren("cdata"/* CDATA */,[text]);this.addNode(node);text.parent=node;this._lastNode=text;};DomHandler.prototype.oncdataend=function(){this._lastNode=null;};DomHandler.prototype.onprocessinginstruction=function(name,data){var node=new node_1.ProcessingInstruction(name,data);this.addNode(node);};DomHandler.prototype.handleCallback=function(error){if(typeof this._callback==="function"){this._callback(error,this.dom);}else if(error){throw error;}};DomHandler.prototype.addNode=function(node){var parent=this._tagStack[this._tagStack.length-1];var siblings=parent?parent.children:this.dom;var previousSibling=siblings[siblings.length-1];if(this._parser){if(this._options.withStartIndices){node.startIndex=this._parser.startIndex;}if(this._options.withEndIndices){node.endIndex=this._parser.endIndex;}}siblings.push(node);if(previousSibling){node.prev=previousSibling;previousSibling.next=node;}if(parent){node.parent=parent;}this._lastNode=null;};DomHandler.prototype.addDataNode=function(node){this.addNode(node);this._lastNode=node;};return DomHandler;}();exports.DomHandler=DomHandler;exports["default"]=DomHandler;},{"./node":8}],8:[function(require,module,exports){"use strict";var __extends=this&&this.__extends||function(){var _extendStatics=function extendStatics(d,b){_extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b){if(b.hasOwnProperty(p))d[p]=b[p];}};return _extendStatics(d,b);};return function(d,b){_extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();Object.defineProperty(exports,"__esModule",{value:true});var nodeTypes=new Map([["tag"/* Tag */,1],["script"/* Script */,1],["style"/* Style */,1],["directive"/* Directive */,1],["text"/* Text */,3],["cdata"/* CDATA */,4],["comment"/* Comment */,8]]);// This object will be used as the prototype for Nodes when creating a
// DOM-Level-1-compliant structure.
var Node=/** @class */function(){/**
     *
     * @param type The type of the node.
     */function Node(type){this.type=type;/** Parent of the node */this.parent=null;/** Previous sibling */this.prev=null;/** Next sibling */this.next=null;/** The start index of the node. Requires `withStartIndices` on the handler to be `true. */this.startIndex=null;/** The end index of the node. Requires `withEndIndices` on the handler to be `true. */this.endIndex=null;}Object.defineProperty(Node.prototype,"nodeType",{// Read-only aliases
get:function get(){return nodeTypes.get(this.type)||1;},enumerable:true,configurable:true});Object.defineProperty(Node.prototype,"parentNode",{// Read-write aliases for properties
get:function get(){return this.parent||null;},set:function set(parent){this.parent=parent;},enumerable:true,configurable:true});Object.defineProperty(Node.prototype,"previousSibling",{get:function get(){return this.prev||null;},set:function set(prev){this.prev=prev;},enumerable:true,configurable:true});Object.defineProperty(Node.prototype,"nextSibling",{get:function get(){return this.next||null;},set:function set(next){this.next=next;},enumerable:true,configurable:true});return Node;}();exports.Node=Node;var DataNode=/** @class */function(_super){__extends(DataNode,_super);/**
     *
     * @param type The type of the node
     * @param data The content of the data node
     */function DataNode(type,data){var _this=_super.call(this,type)||this;_this.data=data;return _this;}Object.defineProperty(DataNode.prototype,"nodeValue",{get:function get(){return this.data;},set:function set(data){this.data=data;},enumerable:true,configurable:true});return DataNode;}(Node);exports.DataNode=DataNode;var ProcessingInstruction=/** @class */function(_super){__extends(ProcessingInstruction,_super);function ProcessingInstruction(name,data){var _this=_super.call(this,"directive"/* Directive */,data)||this;_this.name=name;return _this;}return ProcessingInstruction;}(DataNode);exports.ProcessingInstruction=ProcessingInstruction;var NodeWithChildren=/** @class */function(_super){__extends(NodeWithChildren,_super);/**
     *
     * @param type Type of the node.
     * @param children Children of the node. Only certain node types can have children.
     */function NodeWithChildren(type,children){var _this=_super.call(this,type)||this;_this.children=children;return _this;}Object.defineProperty(NodeWithChildren.prototype,"firstChild",{// Aliases
get:function get(){return this.children[0]||null;},enumerable:true,configurable:true});Object.defineProperty(NodeWithChildren.prototype,"lastChild",{get:function get(){return this.children[this.children.length-1]||null;},enumerable:true,configurable:true});Object.defineProperty(NodeWithChildren.prototype,"childNodes",{get:function get(){return this.children;},set:function set(children){this.children=children;},enumerable:true,configurable:true});return NodeWithChildren;}(Node);exports.NodeWithChildren=NodeWithChildren;var Element=/** @class */function(_super){__extends(Element,_super);/**
     *
     * @param name Name of the tag, eg. `div`, `span`
     * @param attribs Object mapping attribute names to attribute values
     */function Element(name,attribs){var _this=_super.call(this,name==="script"?"script"/* Script */:name==="style"?"style"/* Style */:"tag"/* Tag */,[])||this;_this.name=name;_this.attribs=attribs;_this.attribs=attribs;return _this;}Object.defineProperty(Element.prototype,"tagName",{// DOM Level 1 aliases
get:function get(){return this.name;},set:function set(name){this.name=name;},enumerable:true,configurable:true});return Element;}(NodeWithChildren);exports.Element=Element;},{}],9:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var tagtypes_1=require("./tagtypes");/**
 * Given an array of nodes, remove any member that is contained by another.
 *
 * @param nodes — Nodes to filter.
 */function removeSubsets(nodes){var idx=nodes.length;// Check if each node (or one of its ancestors) is already contained in the
// array.
while(--idx>=0){var node=nodes[idx];// Remove the node if it is not unique.
// We are going through the array from the end, so we only
// have to check nodes that preceed the node under consideration in the array.
if(idx>0&&nodes.lastIndexOf(node,idx-1)>=0){nodes.splice(idx,1);continue;}for(var ancestor=node.parent;ancestor;ancestor=ancestor.parent){if(nodes.indexOf(ancestor)>-1){nodes.splice(idx,1);break;}}}return nodes;}exports.removeSubsets=removeSubsets;/***
 * Compare the position of one node against another node in any other document.
 * The return value is a bitmask with the following values:
 *
 * document order:
 * > There is an ordering, document order, defined on all the nodes in the
 * > document corresponding to the order in which the first character of the
 * > XML representation of each node occurs in the XML representation of the
 * > document after expansion of general entities. Thus, the document element
 * > node will be the first node. Element nodes occur before their children.
 * > Thus, document order orders element nodes in order of the occurrence of
 * > their start-tag in the XML (after expansion of entities). The attribute
 * > nodes of an element occur after the element and before its children. The
 * > relative order of attribute nodes is implementation-dependent./
 *
 * Source:
 * http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
 * @argument nodaA The first node to use in the comparison
 * @argument nodeB The second node to use in the comparison
 *
 * @return A bitmask describing the input nodes' relative position.
 *
 *        See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
 *        a description of these values.
 */function compareDocumentPosition(nodeA,nodeB){var aParents=[];var bParents=[];if(nodeA===nodeB){return 0;}var current=tagtypes_1.hasChildren(nodeA)?nodeA:nodeA.parent;while(current){aParents.unshift(current);current=current.parent;}current=tagtypes_1.hasChildren(nodeB)?nodeB:nodeB.parent;while(current){bParents.unshift(current);current=current.parent;}var idx=0;while(aParents[idx]===bParents[idx]){idx++;}if(idx===0){return 1/* DISCONNECTED */;}var sharedParent=aParents[idx-1];var siblings=sharedParent.children;var aSibling=aParents[idx];var bSibling=bParents[idx];if(siblings.indexOf(aSibling)>siblings.indexOf(bSibling)){if(sharedParent===nodeB){return 4/* FOLLOWING */|16/* CONTAINED_BY */;}return 4/* FOLLOWING */;}else{if(sharedParent===nodeA){return 2/* PRECEDING */|8/* CONTAINS */;}return 2/* PRECEDING */;}}exports.compareDocumentPosition=compareDocumentPosition;/***
 * Sort an array of nodes based on their relative position in the document and
 * remove any duplicate nodes. If the array contains nodes that do not belong
 * to the same document, sort order is unspecified.
 *
 * @argument nodes Array of DOM nodes
 * @returns collection of unique nodes, sorted in document order
 */function uniqueSort(nodes){nodes=nodes.filter(function(node,i,arr){return!arr.includes(node,i+1);});nodes.sort(function(a,b){var relative=compareDocumentPosition(a,b);if(relative&2/* PRECEDING */){return-1;}else if(relative&4/* FOLLOWING */){return 1;}return 0;});return nodes;}exports.uniqueSort=uniqueSort;},{"./tagtypes":15}],10:[function(require,module,exports){"use strict";function __export(m){for(var p in m){if(!exports.hasOwnProperty(p))exports[p]=m[p];}}Object.defineProperty(exports,"__esModule",{value:true});__export(require("./stringify"));__export(require("./traversal"));__export(require("./manipulation"));__export(require("./querying"));__export(require("./legacy"));__export(require("./helpers"));__export(require("./tagtypes"));},{"./helpers":9,"./legacy":11,"./manipulation":12,"./querying":13,"./stringify":14,"./tagtypes":15,"./traversal":16}],11:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var querying_1=require("./querying");var tagtypes_1=require("./tagtypes");function isTextNode(node){return node.type==="text"/* Text */;}/* eslint-disable @typescript-eslint/camelcase */var Checks={tag_name:function tag_name(name){if(typeof name==="function"){return function(elem){return tagtypes_1.isTag(elem)&&name(elem.name);};}else if(name==="*"){return tagtypes_1.isTag;}else{return function(elem){return tagtypes_1.isTag(elem)&&elem.name===name;};}},tag_type:function tag_type(type){if(typeof type==="function"){return function(elem){return type(elem.type);};}else{return function(elem){return elem.type===type;};}},tag_contains:function tag_contains(data){if(typeof data==="function"){return function(elem){return isTextNode(elem)&&data(elem.data);};}else{return function(elem){return isTextNode(elem)&&elem.data===data;};}}};/* eslint-enable @typescript-eslint/camelcase */function getAttribCheck(attrib,value){if(typeof value==="function"){return function(elem){return tagtypes_1.isTag(elem)&&value(elem.attribs[attrib]);};}else{return function(elem){return tagtypes_1.isTag(elem)&&elem.attribs[attrib]===value;};}}function combineFuncs(a,b){return function(elem){return a(elem)||b(elem);};}function compileTest(options){var funcs=Object.keys(options).map(function(key){var value=options[key];// @ts-ignore
return key in Checks?Checks[key](value):getAttribCheck(key,value);});return funcs.length===0?null:funcs.reduce(combineFuncs);}function testElement(options,element){var test=compileTest(options);return test?test(element):true;}exports.testElement=testElement;function getElements(options,element,recurse,limit){if(limit===void 0){limit=Infinity;}var test=compileTest(options);return test?querying_1.filter(test,element,recurse,limit):[];}exports.getElements=getElements;function getElementById(id,element,recurse){if(recurse===void 0){recurse=true;}if(!Array.isArray(element))element=[element];return querying_1.findOne(getAttribCheck("id",id),element,recurse);}exports.getElementById=getElementById;function getElementsByTagName(name,element,recurse,limit){if(limit===void 0){limit=Infinity;}return querying_1.filter(Checks.tag_name(name),element,recurse,limit);}exports.getElementsByTagName=getElementsByTagName;function getElementsByTagType(type,element,recurse,limit){if(recurse===void 0){recurse=true;}if(limit===void 0){limit=Infinity;}return querying_1.filter(Checks.tag_type(type),element,recurse,limit);}exports.getElementsByTagType=getElementsByTagType;},{"./querying":13,"./tagtypes":15}],12:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});/***
 * Remove an element from the dom
 *
 * @argument elem The element to be removed
 */function removeElement(elem){if(elem.prev)elem.prev.next=elem.next;if(elem.next)elem.next.prev=elem.prev;if(elem.parent){var childs=elem.parent.children;childs.splice(childs.lastIndexOf(elem),1);}}exports.removeElement=removeElement;/***
 * Replace an element in the dom
 *
 * @argument elem The element to be replaced
 * @argument replacement The element to be added
 */function replaceElement(elem,replacement){var prev=replacement.prev=elem.prev;if(prev){prev.next=replacement;}var next=replacement.next=elem.next;if(next){next.prev=replacement;}var parent=replacement.parent=elem.parent;if(parent){var childs=parent.children;childs[childs.lastIndexOf(elem)]=replacement;}}exports.replaceElement=replaceElement;/***
 * Append a child to an element
 *
 * @argument elem The element to append to
 * @argument child The element to be added as a child
 */function appendChild(elem,child){child.parent=elem;if(elem.children.push(child)!==1){var sibling=elem.children[elem.children.length-2];sibling.next=child;child.prev=sibling;child.next=null;}}exports.appendChild=appendChild;/***
 * Append an element after another
 *
 * @argument elem The element to append to
 * @argument next The element be added
 */function append(elem,next){var parent=elem.parent,currNext=elem.next;next.next=currNext;next.prev=elem;elem.next=next;next.parent=parent;if(currNext){currNext.prev=next;if(parent){var childs=parent.children;childs.splice(childs.lastIndexOf(currNext),0,next);}}else if(parent){parent.children.push(next);}}exports.append=append;/***
 * Prepend an element before another
 *
 * @argument elem The element to append to
 * @argument prev The element be added
 */function prepend(elem,prev){var parent=elem.parent;if(parent){var childs=parent.children;childs.splice(childs.lastIndexOf(elem),0,prev);}if(elem.prev){elem.prev.next=prev;}prev.parent=parent;prev.prev=elem.prev;prev.next=elem;elem.prev=prev;}exports.prepend=prepend;},{}],13:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var tagtypes_1=require("./tagtypes");function filter(test,element,recurse,limit){if(recurse===void 0){recurse=true;}if(limit===void 0){limit=Infinity;}if(!Array.isArray(element))element=[element];return find(test,element,recurse,limit);}exports.filter=filter;function find(test,elems,recurse,limit){var result=[];for(var i=0;i<elems.length;i++){var elem=elems[i];if(test(elem)){result.push(elem);if(--limit<=0)break;}if(recurse&&tagtypes_1.hasChildren(elem)&&elem.children.length>0){var children=find(test,elem.children,recurse,limit);result=result.concat(children);limit-=children.length;if(limit<=0)break;}}return result;}exports.find=find;function findOneChild(test,elems){for(var i=0;i<elems.length;i++){if(test(elems[i]))return elems[i];}return null;}exports.findOneChild=findOneChild;function findOne(test,elems,recurse){if(recurse===void 0){recurse=true;}var elem=null;for(var i=0;i<elems.length&&!elem;i++){var checked=elems[i];if(!tagtypes_1.isTag(checked)){continue;}else if(test(checked)){elem=checked;}else if(recurse&&checked.children.length>0){elem=findOne(test,checked.children);}}return elem;}exports.findOne=findOne;function existsOne(test,elems){for(var i=0;i<elems.length;i++){var checked=elems[i];if(tagtypes_1.isTag(checked)&&(test(checked)||checked.children.length>0&&existsOne(test,checked.children))){return true;}}return false;}exports.existsOne=existsOne;function findAll(test,rootElems){var result=[];var stack=rootElems.slice();while(stack.length){var elem=stack.shift();if(!elem||!tagtypes_1.isTag(elem))continue;if(elem.children&&elem.children.length>0){stack.unshift.apply(stack,elem.children);}if(test(elem))result.push(elem);}return result;}exports.findAll=findAll;},{"./tagtypes":15}],14:[function(require,module,exports){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod};};Object.defineProperty(exports,"__esModule",{value:true});var tagtypes_1=require("./tagtypes");var dom_serializer_1=__importDefault(require("dom-serializer"));exports.getOuterHTML=dom_serializer_1["default"];function getInnerHTML(node,options){return tagtypes_1.hasChildren(node)?node.children.map(function(node){return exports.getOuterHTML(node,options);}).join(""):"";}exports.getInnerHTML=getInnerHTML;function getText(node){if(Array.isArray(node))return node.map(getText).join("");if(tagtypes_1.isTag(node))return node.name==="br"?"\n":getText(node.children);if(tagtypes_1.isCDATA(node))return getText(node.children);if(tagtypes_1.isText(node))return node.data;return"";}exports.getText=getText;},{"./tagtypes":15,"dom-serializer":5}],15:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var domelementtype_1=require("domelementtype");function isTag(node){return domelementtype_1.isTag(node);}exports.isTag=isTag;function isCDATA(node){return"cdata"/* CDATA */===node.type;}exports.isCDATA=isCDATA;function isText(node){return node.type==="text"/* Text */;}exports.isText=isText;function isComment(node){return node.type==="comment"/* Comment */;}exports.isComment=isComment;function hasChildren(node){return Object.prototype.hasOwnProperty.call(node,"children");}exports.hasChildren=hasChildren;},{"domelementtype":6}],16:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});function getChildren(elem){// @ts-ignore
return elem.children||null;}exports.getChildren=getChildren;function getParent(elem){return elem.parent||null;}exports.getParent=getParent;function getSiblings(elem){var parent=getParent(elem);return parent?getChildren(parent):[elem];}exports.getSiblings=getSiblings;function getAttributeValue(elem,name){return elem.attribs&&elem.attribs[name];}exports.getAttributeValue=getAttributeValue;function hasAttrib(elem,name){return!!getAttributeValue(elem,name);}exports.hasAttrib=hasAttrib;/***
 * Returns the name property of an element
 *
 * @argument elem The element to get the name for
 */function getName(elem){return elem.name;}exports.getName=getName;},{}],17:[function(require,module,exports){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod};};Object.defineProperty(exports,"__esModule",{value:true});var entities_json_1=__importDefault(require("./maps/entities.json"));var legacy_json_1=__importDefault(require("./maps/legacy.json"));var xml_json_1=__importDefault(require("./maps/xml.json"));var decode_codepoint_1=__importDefault(require("./decode_codepoint"));exports.decodeXML=getStrictDecoder(xml_json_1["default"]);exports.decodeHTMLStrict=getStrictDecoder(entities_json_1["default"]);function getStrictDecoder(map){var keys=Object.keys(map).join("|");var replace=getReplacer(map);keys+="|#[xX][\\da-fA-F]+|#\\d+";var re=new RegExp("&(?:"+keys+");","g");return function(str){return String(str).replace(re,replace);};}var sorter=function sorter(a,b){return a<b?1:-1;};exports.decodeHTML=function(){var legacy=Object.keys(legacy_json_1["default"]).sort(sorter);var keys=Object.keys(entities_json_1["default"]).sort(sorter);for(var i=0,j=0;i<keys.length;i++){if(legacy[j]===keys[i]){keys[i]+=";?";j++;}else{keys[i]+=";";}}var re=new RegExp("&(?:"+keys.join("|")+"|#[xX][\\da-fA-F]+;?|#\\d+;?)","g");var replace=getReplacer(entities_json_1["default"]);function replacer(str){if(str.substr(-1)!==";")str+=";";return replace(str);}//TODO consider creating a merged map
return function(str){return String(str).replace(re,replacer);};}();function getReplacer(map){return function replace(str){if(str.charAt(1)==="#"){if(str.charAt(2)==="X"||str.charAt(2)==="x"){return decode_codepoint_1["default"](parseInt(str.substr(3),16));}return decode_codepoint_1["default"](parseInt(str.substr(2),10));}return map[str.slice(1,-1)];};}},{"./decode_codepoint":18,"./maps/entities.json":22,"./maps/legacy.json":23,"./maps/xml.json":24}],18:[function(require,module,exports){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod};};Object.defineProperty(exports,"__esModule",{value:true});var decode_json_1=__importDefault(require("./maps/decode.json"));// modified version of https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
function decodeCodePoint(codePoint){if(codePoint>=0xd800&&codePoint<=0xdfff||codePoint>0x10ffff){return"\uFFFD";}if(codePoint in decode_json_1["default"]){// @ts-ignore
codePoint=decode_json_1["default"][codePoint];}var output="";if(codePoint>0xffff){codePoint-=0x10000;output+=String.fromCharCode(codePoint>>>10&0x3ff|0xd800);codePoint=0xdc00|codePoint&0x3ff;}output+=String.fromCharCode(codePoint);return output;}exports["default"]=decodeCodePoint;},{"./maps/decode.json":21}],19:[function(require,module,exports){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod};};Object.defineProperty(exports,"__esModule",{value:true});var xml_json_1=__importDefault(require("./maps/xml.json"));var inverseXML=getInverseObj(xml_json_1["default"]);var xmlReplacer=getInverseReplacer(inverseXML);exports.encodeXML=getInverse(inverseXML,xmlReplacer);var entities_json_1=__importDefault(require("./maps/entities.json"));var inverseHTML=getInverseObj(entities_json_1["default"]);var htmlReplacer=getInverseReplacer(inverseHTML);exports.encodeHTML=getInverse(inverseHTML,htmlReplacer);function getInverseObj(obj){return Object.keys(obj).sort().reduce(function(inverse,name){inverse[obj[name]]="&"+name+";";return inverse;},{});}function getInverseReplacer(inverse){var single=[];var multiple=[];Object.keys(inverse).forEach(function(k){return k.length===1?// Add value to single array
single.push("\\"+k):// Add value to multiple array
multiple.push(k);});//TODO add ranges
multiple.unshift("["+single.join("")+"]");return new RegExp(multiple.join("|"),"g");}var reNonASCII=/[^\0-\x7F]/g;var reAstralSymbols=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g;function singleCharReplacer(c){return"&#x"+c.charCodeAt(0).toString(16).toUpperCase()+";";}// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
function astralReplacer(c,_){// http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
var high=c.charCodeAt(0);var low=c.charCodeAt(1);var codePoint=(high-0xd800)*0x400+low-0xdc00+0x10000;return"&#x"+codePoint.toString(16).toUpperCase()+";";}function getInverse(inverse,re){return function(data){return data.replace(re,function(name){return inverse[name];}).replace(reAstralSymbols,astralReplacer).replace(reNonASCII,singleCharReplacer);};}var reXmlChars=getInverseReplacer(inverseXML);function escape(data){return data.replace(reXmlChars,singleCharReplacer).replace(reAstralSymbols,astralReplacer).replace(reNonASCII,singleCharReplacer);}exports.escape=escape;},{"./maps/entities.json":22,"./maps/xml.json":24}],20:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var decode_1=require("./decode");var encode_1=require("./encode");function decode(data,level){return(!level||level<=0?decode_1.decodeXML:decode_1.decodeHTML)(data);}exports.decode=decode;function decodeStrict(data,level){return(!level||level<=0?decode_1.decodeXML:decode_1.decodeHTMLStrict)(data);}exports.decodeStrict=decodeStrict;function encode(data,level){return(!level||level<=0?encode_1.encodeXML:encode_1.encodeHTML)(data);}exports.encode=encode;var encode_2=require("./encode");exports.encodeXML=encode_2.encodeXML;exports.encodeHTML=encode_2.encodeHTML;exports.escape=encode_2.escape;// Legacy aliases
exports.encodeHTML4=encode_2.encodeHTML;exports.encodeHTML5=encode_2.encodeHTML;var decode_2=require("./decode");exports.decodeXML=decode_2.decodeXML;exports.decodeHTML=decode_2.decodeHTML;exports.decodeHTMLStrict=decode_2.decodeHTMLStrict;// Legacy aliases
exports.decodeHTML4=decode_2.decodeHTML;exports.decodeHTML5=decode_2.decodeHTML;exports.decodeHTML4Strict=decode_2.decodeHTMLStrict;exports.decodeHTML5Strict=decode_2.decodeHTMLStrict;exports.decodeXMLStrict=decode_2.decodeXML;},{"./decode":17,"./encode":19}],21:[function(require,module,exports){module.exports={"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376};},{}],22:[function(require,module,exports){module.exports={"Aacute":"\xC1","aacute":"\xE1","Abreve":"\u0102","abreve":"\u0103","ac":"\u223E","acd":"\u223F","acE":"\u223E\u0333","Acirc":"\xC2","acirc":"\xE2","acute":"\xB4","Acy":"\u0410","acy":"\u0430","AElig":"\xC6","aelig":"\xE6","af":"\u2061","Afr":"\uD835\uDD04","afr":"\uD835\uDD1E","Agrave":"\xC0","agrave":"\xE0","alefsym":"\u2135","aleph":"\u2135","Alpha":"\u0391","alpha":"\u03B1","Amacr":"\u0100","amacr":"\u0101","amalg":"\u2A3F","amp":"&","AMP":"&","andand":"\u2A55","And":"\u2A53","and":"\u2227","andd":"\u2A5C","andslope":"\u2A58","andv":"\u2A5A","ang":"\u2220","ange":"\u29A4","angle":"\u2220","angmsdaa":"\u29A8","angmsdab":"\u29A9","angmsdac":"\u29AA","angmsdad":"\u29AB","angmsdae":"\u29AC","angmsdaf":"\u29AD","angmsdag":"\u29AE","angmsdah":"\u29AF","angmsd":"\u2221","angrt":"\u221F","angrtvb":"\u22BE","angrtvbd":"\u299D","angsph":"\u2222","angst":"\xC5","angzarr":"\u237C","Aogon":"\u0104","aogon":"\u0105","Aopf":"\uD835\uDD38","aopf":"\uD835\uDD52","apacir":"\u2A6F","ap":"\u2248","apE":"\u2A70","ape":"\u224A","apid":"\u224B","apos":"'","ApplyFunction":"\u2061","approx":"\u2248","approxeq":"\u224A","Aring":"\xC5","aring":"\xE5","Ascr":"\uD835\uDC9C","ascr":"\uD835\uDCB6","Assign":"\u2254","ast":"*","asymp":"\u2248","asympeq":"\u224D","Atilde":"\xC3","atilde":"\xE3","Auml":"\xC4","auml":"\xE4","awconint":"\u2233","awint":"\u2A11","backcong":"\u224C","backepsilon":"\u03F6","backprime":"\u2035","backsim":"\u223D","backsimeq":"\u22CD","Backslash":"\u2216","Barv":"\u2AE7","barvee":"\u22BD","barwed":"\u2305","Barwed":"\u2306","barwedge":"\u2305","bbrk":"\u23B5","bbrktbrk":"\u23B6","bcong":"\u224C","Bcy":"\u0411","bcy":"\u0431","bdquo":"\u201E","becaus":"\u2235","because":"\u2235","Because":"\u2235","bemptyv":"\u29B0","bepsi":"\u03F6","bernou":"\u212C","Bernoullis":"\u212C","Beta":"\u0392","beta":"\u03B2","beth":"\u2136","between":"\u226C","Bfr":"\uD835\uDD05","bfr":"\uD835\uDD1F","bigcap":"\u22C2","bigcirc":"\u25EF","bigcup":"\u22C3","bigodot":"\u2A00","bigoplus":"\u2A01","bigotimes":"\u2A02","bigsqcup":"\u2A06","bigstar":"\u2605","bigtriangledown":"\u25BD","bigtriangleup":"\u25B3","biguplus":"\u2A04","bigvee":"\u22C1","bigwedge":"\u22C0","bkarow":"\u290D","blacklozenge":"\u29EB","blacksquare":"\u25AA","blacktriangle":"\u25B4","blacktriangledown":"\u25BE","blacktriangleleft":"\u25C2","blacktriangleright":"\u25B8","blank":"\u2423","blk12":"\u2592","blk14":"\u2591","blk34":"\u2593","block":"\u2588","bne":"=\u20E5","bnequiv":"\u2261\u20E5","bNot":"\u2AED","bnot":"\u2310","Bopf":"\uD835\uDD39","bopf":"\uD835\uDD53","bot":"\u22A5","bottom":"\u22A5","bowtie":"\u22C8","boxbox":"\u29C9","boxdl":"\u2510","boxdL":"\u2555","boxDl":"\u2556","boxDL":"\u2557","boxdr":"\u250C","boxdR":"\u2552","boxDr":"\u2553","boxDR":"\u2554","boxh":"\u2500","boxH":"\u2550","boxhd":"\u252C","boxHd":"\u2564","boxhD":"\u2565","boxHD":"\u2566","boxhu":"\u2534","boxHu":"\u2567","boxhU":"\u2568","boxHU":"\u2569","boxminus":"\u229F","boxplus":"\u229E","boxtimes":"\u22A0","boxul":"\u2518","boxuL":"\u255B","boxUl":"\u255C","boxUL":"\u255D","boxur":"\u2514","boxuR":"\u2558","boxUr":"\u2559","boxUR":"\u255A","boxv":"\u2502","boxV":"\u2551","boxvh":"\u253C","boxvH":"\u256A","boxVh":"\u256B","boxVH":"\u256C","boxvl":"\u2524","boxvL":"\u2561","boxVl":"\u2562","boxVL":"\u2563","boxvr":"\u251C","boxvR":"\u255E","boxVr":"\u255F","boxVR":"\u2560","bprime":"\u2035","breve":"\u02D8","Breve":"\u02D8","brvbar":"\xA6","bscr":"\uD835\uDCB7","Bscr":"\u212C","bsemi":"\u204F","bsim":"\u223D","bsime":"\u22CD","bsolb":"\u29C5","bsol":"\\","bsolhsub":"\u27C8","bull":"\u2022","bullet":"\u2022","bump":"\u224E","bumpE":"\u2AAE","bumpe":"\u224F","Bumpeq":"\u224E","bumpeq":"\u224F","Cacute":"\u0106","cacute":"\u0107","capand":"\u2A44","capbrcup":"\u2A49","capcap":"\u2A4B","cap":"\u2229","Cap":"\u22D2","capcup":"\u2A47","capdot":"\u2A40","CapitalDifferentialD":"\u2145","caps":"\u2229\uFE00","caret":"\u2041","caron":"\u02C7","Cayleys":"\u212D","ccaps":"\u2A4D","Ccaron":"\u010C","ccaron":"\u010D","Ccedil":"\xC7","ccedil":"\xE7","Ccirc":"\u0108","ccirc":"\u0109","Cconint":"\u2230","ccups":"\u2A4C","ccupssm":"\u2A50","Cdot":"\u010A","cdot":"\u010B","cedil":"\xB8","Cedilla":"\xB8","cemptyv":"\u29B2","cent":"\xA2","centerdot":"\xB7","CenterDot":"\xB7","cfr":"\uD835\uDD20","Cfr":"\u212D","CHcy":"\u0427","chcy":"\u0447","check":"\u2713","checkmark":"\u2713","Chi":"\u03A7","chi":"\u03C7","circ":"\u02C6","circeq":"\u2257","circlearrowleft":"\u21BA","circlearrowright":"\u21BB","circledast":"\u229B","circledcirc":"\u229A","circleddash":"\u229D","CircleDot":"\u2299","circledR":"\xAE","circledS":"\u24C8","CircleMinus":"\u2296","CirclePlus":"\u2295","CircleTimes":"\u2297","cir":"\u25CB","cirE":"\u29C3","cire":"\u2257","cirfnint":"\u2A10","cirmid":"\u2AEF","cirscir":"\u29C2","ClockwiseContourIntegral":"\u2232","CloseCurlyDoubleQuote":"\u201D","CloseCurlyQuote":"\u2019","clubs":"\u2663","clubsuit":"\u2663","colon":":","Colon":"\u2237","Colone":"\u2A74","colone":"\u2254","coloneq":"\u2254","comma":",","commat":"@","comp":"\u2201","compfn":"\u2218","complement":"\u2201","complexes":"\u2102","cong":"\u2245","congdot":"\u2A6D","Congruent":"\u2261","conint":"\u222E","Conint":"\u222F","ContourIntegral":"\u222E","copf":"\uD835\uDD54","Copf":"\u2102","coprod":"\u2210","Coproduct":"\u2210","copy":"\xA9","COPY":"\xA9","copysr":"\u2117","CounterClockwiseContourIntegral":"\u2233","crarr":"\u21B5","cross":"\u2717","Cross":"\u2A2F","Cscr":"\uD835\uDC9E","cscr":"\uD835\uDCB8","csub":"\u2ACF","csube":"\u2AD1","csup":"\u2AD0","csupe":"\u2AD2","ctdot":"\u22EF","cudarrl":"\u2938","cudarrr":"\u2935","cuepr":"\u22DE","cuesc":"\u22DF","cularr":"\u21B6","cularrp":"\u293D","cupbrcap":"\u2A48","cupcap":"\u2A46","CupCap":"\u224D","cup":"\u222A","Cup":"\u22D3","cupcup":"\u2A4A","cupdot":"\u228D","cupor":"\u2A45","cups":"\u222A\uFE00","curarr":"\u21B7","curarrm":"\u293C","curlyeqprec":"\u22DE","curlyeqsucc":"\u22DF","curlyvee":"\u22CE","curlywedge":"\u22CF","curren":"\xA4","curvearrowleft":"\u21B6","curvearrowright":"\u21B7","cuvee":"\u22CE","cuwed":"\u22CF","cwconint":"\u2232","cwint":"\u2231","cylcty":"\u232D","dagger":"\u2020","Dagger":"\u2021","daleth":"\u2138","darr":"\u2193","Darr":"\u21A1","dArr":"\u21D3","dash":"\u2010","Dashv":"\u2AE4","dashv":"\u22A3","dbkarow":"\u290F","dblac":"\u02DD","Dcaron":"\u010E","dcaron":"\u010F","Dcy":"\u0414","dcy":"\u0434","ddagger":"\u2021","ddarr":"\u21CA","DD":"\u2145","dd":"\u2146","DDotrahd":"\u2911","ddotseq":"\u2A77","deg":"\xB0","Del":"\u2207","Delta":"\u0394","delta":"\u03B4","demptyv":"\u29B1","dfisht":"\u297F","Dfr":"\uD835\uDD07","dfr":"\uD835\uDD21","dHar":"\u2965","dharl":"\u21C3","dharr":"\u21C2","DiacriticalAcute":"\xB4","DiacriticalDot":"\u02D9","DiacriticalDoubleAcute":"\u02DD","DiacriticalGrave":"`","DiacriticalTilde":"\u02DC","diam":"\u22C4","diamond":"\u22C4","Diamond":"\u22C4","diamondsuit":"\u2666","diams":"\u2666","die":"\xA8","DifferentialD":"\u2146","digamma":"\u03DD","disin":"\u22F2","div":"\xF7","divide":"\xF7","divideontimes":"\u22C7","divonx":"\u22C7","DJcy":"\u0402","djcy":"\u0452","dlcorn":"\u231E","dlcrop":"\u230D","dollar":"$","Dopf":"\uD835\uDD3B","dopf":"\uD835\uDD55","Dot":"\xA8","dot":"\u02D9","DotDot":"\u20DC","doteq":"\u2250","doteqdot":"\u2251","DotEqual":"\u2250","dotminus":"\u2238","dotplus":"\u2214","dotsquare":"\u22A1","doublebarwedge":"\u2306","DoubleContourIntegral":"\u222F","DoubleDot":"\xA8","DoubleDownArrow":"\u21D3","DoubleLeftArrow":"\u21D0","DoubleLeftRightArrow":"\u21D4","DoubleLeftTee":"\u2AE4","DoubleLongLeftArrow":"\u27F8","DoubleLongLeftRightArrow":"\u27FA","DoubleLongRightArrow":"\u27F9","DoubleRightArrow":"\u21D2","DoubleRightTee":"\u22A8","DoubleUpArrow":"\u21D1","DoubleUpDownArrow":"\u21D5","DoubleVerticalBar":"\u2225","DownArrowBar":"\u2913","downarrow":"\u2193","DownArrow":"\u2193","Downarrow":"\u21D3","DownArrowUpArrow":"\u21F5","DownBreve":"\u0311","downdownarrows":"\u21CA","downharpoonleft":"\u21C3","downharpoonright":"\u21C2","DownLeftRightVector":"\u2950","DownLeftTeeVector":"\u295E","DownLeftVectorBar":"\u2956","DownLeftVector":"\u21BD","DownRightTeeVector":"\u295F","DownRightVectorBar":"\u2957","DownRightVector":"\u21C1","DownTeeArrow":"\u21A7","DownTee":"\u22A4","drbkarow":"\u2910","drcorn":"\u231F","drcrop":"\u230C","Dscr":"\uD835\uDC9F","dscr":"\uD835\uDCB9","DScy":"\u0405","dscy":"\u0455","dsol":"\u29F6","Dstrok":"\u0110","dstrok":"\u0111","dtdot":"\u22F1","dtri":"\u25BF","dtrif":"\u25BE","duarr":"\u21F5","duhar":"\u296F","dwangle":"\u29A6","DZcy":"\u040F","dzcy":"\u045F","dzigrarr":"\u27FF","Eacute":"\xC9","eacute":"\xE9","easter":"\u2A6E","Ecaron":"\u011A","ecaron":"\u011B","Ecirc":"\xCA","ecirc":"\xEA","ecir":"\u2256","ecolon":"\u2255","Ecy":"\u042D","ecy":"\u044D","eDDot":"\u2A77","Edot":"\u0116","edot":"\u0117","eDot":"\u2251","ee":"\u2147","efDot":"\u2252","Efr":"\uD835\uDD08","efr":"\uD835\uDD22","eg":"\u2A9A","Egrave":"\xC8","egrave":"\xE8","egs":"\u2A96","egsdot":"\u2A98","el":"\u2A99","Element":"\u2208","elinters":"\u23E7","ell":"\u2113","els":"\u2A95","elsdot":"\u2A97","Emacr":"\u0112","emacr":"\u0113","empty":"\u2205","emptyset":"\u2205","EmptySmallSquare":"\u25FB","emptyv":"\u2205","EmptyVerySmallSquare":"\u25AB","emsp13":"\u2004","emsp14":"\u2005","emsp":"\u2003","ENG":"\u014A","eng":"\u014B","ensp":"\u2002","Eogon":"\u0118","eogon":"\u0119","Eopf":"\uD835\uDD3C","eopf":"\uD835\uDD56","epar":"\u22D5","eparsl":"\u29E3","eplus":"\u2A71","epsi":"\u03B5","Epsilon":"\u0395","epsilon":"\u03B5","epsiv":"\u03F5","eqcirc":"\u2256","eqcolon":"\u2255","eqsim":"\u2242","eqslantgtr":"\u2A96","eqslantless":"\u2A95","Equal":"\u2A75","equals":"=","EqualTilde":"\u2242","equest":"\u225F","Equilibrium":"\u21CC","equiv":"\u2261","equivDD":"\u2A78","eqvparsl":"\u29E5","erarr":"\u2971","erDot":"\u2253","escr":"\u212F","Escr":"\u2130","esdot":"\u2250","Esim":"\u2A73","esim":"\u2242","Eta":"\u0397","eta":"\u03B7","ETH":"\xD0","eth":"\xF0","Euml":"\xCB","euml":"\xEB","euro":"\u20AC","excl":"!","exist":"\u2203","Exists":"\u2203","expectation":"\u2130","exponentiale":"\u2147","ExponentialE":"\u2147","fallingdotseq":"\u2252","Fcy":"\u0424","fcy":"\u0444","female":"\u2640","ffilig":"\uFB03","fflig":"\uFB00","ffllig":"\uFB04","Ffr":"\uD835\uDD09","ffr":"\uD835\uDD23","filig":"\uFB01","FilledSmallSquare":"\u25FC","FilledVerySmallSquare":"\u25AA","fjlig":"fj","flat":"\u266D","fllig":"\uFB02","fltns":"\u25B1","fnof":"\u0192","Fopf":"\uD835\uDD3D","fopf":"\uD835\uDD57","forall":"\u2200","ForAll":"\u2200","fork":"\u22D4","forkv":"\u2AD9","Fouriertrf":"\u2131","fpartint":"\u2A0D","frac12":"\xBD","frac13":"\u2153","frac14":"\xBC","frac15":"\u2155","frac16":"\u2159","frac18":"\u215B","frac23":"\u2154","frac25":"\u2156","frac34":"\xBE","frac35":"\u2157","frac38":"\u215C","frac45":"\u2158","frac56":"\u215A","frac58":"\u215D","frac78":"\u215E","frasl":"\u2044","frown":"\u2322","fscr":"\uD835\uDCBB","Fscr":"\u2131","gacute":"\u01F5","Gamma":"\u0393","gamma":"\u03B3","Gammad":"\u03DC","gammad":"\u03DD","gap":"\u2A86","Gbreve":"\u011E","gbreve":"\u011F","Gcedil":"\u0122","Gcirc":"\u011C","gcirc":"\u011D","Gcy":"\u0413","gcy":"\u0433","Gdot":"\u0120","gdot":"\u0121","ge":"\u2265","gE":"\u2267","gEl":"\u2A8C","gel":"\u22DB","geq":"\u2265","geqq":"\u2267","geqslant":"\u2A7E","gescc":"\u2AA9","ges":"\u2A7E","gesdot":"\u2A80","gesdoto":"\u2A82","gesdotol":"\u2A84","gesl":"\u22DB\uFE00","gesles":"\u2A94","Gfr":"\uD835\uDD0A","gfr":"\uD835\uDD24","gg":"\u226B","Gg":"\u22D9","ggg":"\u22D9","gimel":"\u2137","GJcy":"\u0403","gjcy":"\u0453","gla":"\u2AA5","gl":"\u2277","glE":"\u2A92","glj":"\u2AA4","gnap":"\u2A8A","gnapprox":"\u2A8A","gne":"\u2A88","gnE":"\u2269","gneq":"\u2A88","gneqq":"\u2269","gnsim":"\u22E7","Gopf":"\uD835\uDD3E","gopf":"\uD835\uDD58","grave":"`","GreaterEqual":"\u2265","GreaterEqualLess":"\u22DB","GreaterFullEqual":"\u2267","GreaterGreater":"\u2AA2","GreaterLess":"\u2277","GreaterSlantEqual":"\u2A7E","GreaterTilde":"\u2273","Gscr":"\uD835\uDCA2","gscr":"\u210A","gsim":"\u2273","gsime":"\u2A8E","gsiml":"\u2A90","gtcc":"\u2AA7","gtcir":"\u2A7A","gt":">","GT":">","Gt":"\u226B","gtdot":"\u22D7","gtlPar":"\u2995","gtquest":"\u2A7C","gtrapprox":"\u2A86","gtrarr":"\u2978","gtrdot":"\u22D7","gtreqless":"\u22DB","gtreqqless":"\u2A8C","gtrless":"\u2277","gtrsim":"\u2273","gvertneqq":"\u2269\uFE00","gvnE":"\u2269\uFE00","Hacek":"\u02C7","hairsp":"\u200A","half":"\xBD","hamilt":"\u210B","HARDcy":"\u042A","hardcy":"\u044A","harrcir":"\u2948","harr":"\u2194","hArr":"\u21D4","harrw":"\u21AD","Hat":"^","hbar":"\u210F","Hcirc":"\u0124","hcirc":"\u0125","hearts":"\u2665","heartsuit":"\u2665","hellip":"\u2026","hercon":"\u22B9","hfr":"\uD835\uDD25","Hfr":"\u210C","HilbertSpace":"\u210B","hksearow":"\u2925","hkswarow":"\u2926","hoarr":"\u21FF","homtht":"\u223B","hookleftarrow":"\u21A9","hookrightarrow":"\u21AA","hopf":"\uD835\uDD59","Hopf":"\u210D","horbar":"\u2015","HorizontalLine":"\u2500","hscr":"\uD835\uDCBD","Hscr":"\u210B","hslash":"\u210F","Hstrok":"\u0126","hstrok":"\u0127","HumpDownHump":"\u224E","HumpEqual":"\u224F","hybull":"\u2043","hyphen":"\u2010","Iacute":"\xCD","iacute":"\xED","ic":"\u2063","Icirc":"\xCE","icirc":"\xEE","Icy":"\u0418","icy":"\u0438","Idot":"\u0130","IEcy":"\u0415","iecy":"\u0435","iexcl":"\xA1","iff":"\u21D4","ifr":"\uD835\uDD26","Ifr":"\u2111","Igrave":"\xCC","igrave":"\xEC","ii":"\u2148","iiiint":"\u2A0C","iiint":"\u222D","iinfin":"\u29DC","iiota":"\u2129","IJlig":"\u0132","ijlig":"\u0133","Imacr":"\u012A","imacr":"\u012B","image":"\u2111","ImaginaryI":"\u2148","imagline":"\u2110","imagpart":"\u2111","imath":"\u0131","Im":"\u2111","imof":"\u22B7","imped":"\u01B5","Implies":"\u21D2","incare":"\u2105","in":"\u2208","infin":"\u221E","infintie":"\u29DD","inodot":"\u0131","intcal":"\u22BA","int":"\u222B","Int":"\u222C","integers":"\u2124","Integral":"\u222B","intercal":"\u22BA","Intersection":"\u22C2","intlarhk":"\u2A17","intprod":"\u2A3C","InvisibleComma":"\u2063","InvisibleTimes":"\u2062","IOcy":"\u0401","iocy":"\u0451","Iogon":"\u012E","iogon":"\u012F","Iopf":"\uD835\uDD40","iopf":"\uD835\uDD5A","Iota":"\u0399","iota":"\u03B9","iprod":"\u2A3C","iquest":"\xBF","iscr":"\uD835\uDCBE","Iscr":"\u2110","isin":"\u2208","isindot":"\u22F5","isinE":"\u22F9","isins":"\u22F4","isinsv":"\u22F3","isinv":"\u2208","it":"\u2062","Itilde":"\u0128","itilde":"\u0129","Iukcy":"\u0406","iukcy":"\u0456","Iuml":"\xCF","iuml":"\xEF","Jcirc":"\u0134","jcirc":"\u0135","Jcy":"\u0419","jcy":"\u0439","Jfr":"\uD835\uDD0D","jfr":"\uD835\uDD27","jmath":"\u0237","Jopf":"\uD835\uDD41","jopf":"\uD835\uDD5B","Jscr":"\uD835\uDCA5","jscr":"\uD835\uDCBF","Jsercy":"\u0408","jsercy":"\u0458","Jukcy":"\u0404","jukcy":"\u0454","Kappa":"\u039A","kappa":"\u03BA","kappav":"\u03F0","Kcedil":"\u0136","kcedil":"\u0137","Kcy":"\u041A","kcy":"\u043A","Kfr":"\uD835\uDD0E","kfr":"\uD835\uDD28","kgreen":"\u0138","KHcy":"\u0425","khcy":"\u0445","KJcy":"\u040C","kjcy":"\u045C","Kopf":"\uD835\uDD42","kopf":"\uD835\uDD5C","Kscr":"\uD835\uDCA6","kscr":"\uD835\uDCC0","lAarr":"\u21DA","Lacute":"\u0139","lacute":"\u013A","laemptyv":"\u29B4","lagran":"\u2112","Lambda":"\u039B","lambda":"\u03BB","lang":"\u27E8","Lang":"\u27EA","langd":"\u2991","langle":"\u27E8","lap":"\u2A85","Laplacetrf":"\u2112","laquo":"\xAB","larrb":"\u21E4","larrbfs":"\u291F","larr":"\u2190","Larr":"\u219E","lArr":"\u21D0","larrfs":"\u291D","larrhk":"\u21A9","larrlp":"\u21AB","larrpl":"\u2939","larrsim":"\u2973","larrtl":"\u21A2","latail":"\u2919","lAtail":"\u291B","lat":"\u2AAB","late":"\u2AAD","lates":"\u2AAD\uFE00","lbarr":"\u290C","lBarr":"\u290E","lbbrk":"\u2772","lbrace":"{","lbrack":"[","lbrke":"\u298B","lbrksld":"\u298F","lbrkslu":"\u298D","Lcaron":"\u013D","lcaron":"\u013E","Lcedil":"\u013B","lcedil":"\u013C","lceil":"\u2308","lcub":"{","Lcy":"\u041B","lcy":"\u043B","ldca":"\u2936","ldquo":"\u201C","ldquor":"\u201E","ldrdhar":"\u2967","ldrushar":"\u294B","ldsh":"\u21B2","le":"\u2264","lE":"\u2266","LeftAngleBracket":"\u27E8","LeftArrowBar":"\u21E4","leftarrow":"\u2190","LeftArrow":"\u2190","Leftarrow":"\u21D0","LeftArrowRightArrow":"\u21C6","leftarrowtail":"\u21A2","LeftCeiling":"\u2308","LeftDoubleBracket":"\u27E6","LeftDownTeeVector":"\u2961","LeftDownVectorBar":"\u2959","LeftDownVector":"\u21C3","LeftFloor":"\u230A","leftharpoondown":"\u21BD","leftharpoonup":"\u21BC","leftleftarrows":"\u21C7","leftrightarrow":"\u2194","LeftRightArrow":"\u2194","Leftrightarrow":"\u21D4","leftrightarrows":"\u21C6","leftrightharpoons":"\u21CB","leftrightsquigarrow":"\u21AD","LeftRightVector":"\u294E","LeftTeeArrow":"\u21A4","LeftTee":"\u22A3","LeftTeeVector":"\u295A","leftthreetimes":"\u22CB","LeftTriangleBar":"\u29CF","LeftTriangle":"\u22B2","LeftTriangleEqual":"\u22B4","LeftUpDownVector":"\u2951","LeftUpTeeVector":"\u2960","LeftUpVectorBar":"\u2958","LeftUpVector":"\u21BF","LeftVectorBar":"\u2952","LeftVector":"\u21BC","lEg":"\u2A8B","leg":"\u22DA","leq":"\u2264","leqq":"\u2266","leqslant":"\u2A7D","lescc":"\u2AA8","les":"\u2A7D","lesdot":"\u2A7F","lesdoto":"\u2A81","lesdotor":"\u2A83","lesg":"\u22DA\uFE00","lesges":"\u2A93","lessapprox":"\u2A85","lessdot":"\u22D6","lesseqgtr":"\u22DA","lesseqqgtr":"\u2A8B","LessEqualGreater":"\u22DA","LessFullEqual":"\u2266","LessGreater":"\u2276","lessgtr":"\u2276","LessLess":"\u2AA1","lesssim":"\u2272","LessSlantEqual":"\u2A7D","LessTilde":"\u2272","lfisht":"\u297C","lfloor":"\u230A","Lfr":"\uD835\uDD0F","lfr":"\uD835\uDD29","lg":"\u2276","lgE":"\u2A91","lHar":"\u2962","lhard":"\u21BD","lharu":"\u21BC","lharul":"\u296A","lhblk":"\u2584","LJcy":"\u0409","ljcy":"\u0459","llarr":"\u21C7","ll":"\u226A","Ll":"\u22D8","llcorner":"\u231E","Lleftarrow":"\u21DA","llhard":"\u296B","lltri":"\u25FA","Lmidot":"\u013F","lmidot":"\u0140","lmoustache":"\u23B0","lmoust":"\u23B0","lnap":"\u2A89","lnapprox":"\u2A89","lne":"\u2A87","lnE":"\u2268","lneq":"\u2A87","lneqq":"\u2268","lnsim":"\u22E6","loang":"\u27EC","loarr":"\u21FD","lobrk":"\u27E6","longleftarrow":"\u27F5","LongLeftArrow":"\u27F5","Longleftarrow":"\u27F8","longleftrightarrow":"\u27F7","LongLeftRightArrow":"\u27F7","Longleftrightarrow":"\u27FA","longmapsto":"\u27FC","longrightarrow":"\u27F6","LongRightArrow":"\u27F6","Longrightarrow":"\u27F9","looparrowleft":"\u21AB","looparrowright":"\u21AC","lopar":"\u2985","Lopf":"\uD835\uDD43","lopf":"\uD835\uDD5D","loplus":"\u2A2D","lotimes":"\u2A34","lowast":"\u2217","lowbar":"_","LowerLeftArrow":"\u2199","LowerRightArrow":"\u2198","loz":"\u25CA","lozenge":"\u25CA","lozf":"\u29EB","lpar":"(","lparlt":"\u2993","lrarr":"\u21C6","lrcorner":"\u231F","lrhar":"\u21CB","lrhard":"\u296D","lrm":"\u200E","lrtri":"\u22BF","lsaquo":"\u2039","lscr":"\uD835\uDCC1","Lscr":"\u2112","lsh":"\u21B0","Lsh":"\u21B0","lsim":"\u2272","lsime":"\u2A8D","lsimg":"\u2A8F","lsqb":"[","lsquo":"\u2018","lsquor":"\u201A","Lstrok":"\u0141","lstrok":"\u0142","ltcc":"\u2AA6","ltcir":"\u2A79","lt":"<","LT":"<","Lt":"\u226A","ltdot":"\u22D6","lthree":"\u22CB","ltimes":"\u22C9","ltlarr":"\u2976","ltquest":"\u2A7B","ltri":"\u25C3","ltrie":"\u22B4","ltrif":"\u25C2","ltrPar":"\u2996","lurdshar":"\u294A","luruhar":"\u2966","lvertneqq":"\u2268\uFE00","lvnE":"\u2268\uFE00","macr":"\xAF","male":"\u2642","malt":"\u2720","maltese":"\u2720","Map":"\u2905","map":"\u21A6","mapsto":"\u21A6","mapstodown":"\u21A7","mapstoleft":"\u21A4","mapstoup":"\u21A5","marker":"\u25AE","mcomma":"\u2A29","Mcy":"\u041C","mcy":"\u043C","mdash":"\u2014","mDDot":"\u223A","measuredangle":"\u2221","MediumSpace":"\u205F","Mellintrf":"\u2133","Mfr":"\uD835\uDD10","mfr":"\uD835\uDD2A","mho":"\u2127","micro":"\xB5","midast":"*","midcir":"\u2AF0","mid":"\u2223","middot":"\xB7","minusb":"\u229F","minus":"\u2212","minusd":"\u2238","minusdu":"\u2A2A","MinusPlus":"\u2213","mlcp":"\u2ADB","mldr":"\u2026","mnplus":"\u2213","models":"\u22A7","Mopf":"\uD835\uDD44","mopf":"\uD835\uDD5E","mp":"\u2213","mscr":"\uD835\uDCC2","Mscr":"\u2133","mstpos":"\u223E","Mu":"\u039C","mu":"\u03BC","multimap":"\u22B8","mumap":"\u22B8","nabla":"\u2207","Nacute":"\u0143","nacute":"\u0144","nang":"\u2220\u20D2","nap":"\u2249","napE":"\u2A70\u0338","napid":"\u224B\u0338","napos":"\u0149","napprox":"\u2249","natural":"\u266E","naturals":"\u2115","natur":"\u266E","nbsp":"\xA0","nbump":"\u224E\u0338","nbumpe":"\u224F\u0338","ncap":"\u2A43","Ncaron":"\u0147","ncaron":"\u0148","Ncedil":"\u0145","ncedil":"\u0146","ncong":"\u2247","ncongdot":"\u2A6D\u0338","ncup":"\u2A42","Ncy":"\u041D","ncy":"\u043D","ndash":"\u2013","nearhk":"\u2924","nearr":"\u2197","neArr":"\u21D7","nearrow":"\u2197","ne":"\u2260","nedot":"\u2250\u0338","NegativeMediumSpace":"\u200B","NegativeThickSpace":"\u200B","NegativeThinSpace":"\u200B","NegativeVeryThinSpace":"\u200B","nequiv":"\u2262","nesear":"\u2928","nesim":"\u2242\u0338","NestedGreaterGreater":"\u226B","NestedLessLess":"\u226A","NewLine":"\n","nexist":"\u2204","nexists":"\u2204","Nfr":"\uD835\uDD11","nfr":"\uD835\uDD2B","ngE":"\u2267\u0338","nge":"\u2271","ngeq":"\u2271","ngeqq":"\u2267\u0338","ngeqslant":"\u2A7E\u0338","nges":"\u2A7E\u0338","nGg":"\u22D9\u0338","ngsim":"\u2275","nGt":"\u226B\u20D2","ngt":"\u226F","ngtr":"\u226F","nGtv":"\u226B\u0338","nharr":"\u21AE","nhArr":"\u21CE","nhpar":"\u2AF2","ni":"\u220B","nis":"\u22FC","nisd":"\u22FA","niv":"\u220B","NJcy":"\u040A","njcy":"\u045A","nlarr":"\u219A","nlArr":"\u21CD","nldr":"\u2025","nlE":"\u2266\u0338","nle":"\u2270","nleftarrow":"\u219A","nLeftarrow":"\u21CD","nleftrightarrow":"\u21AE","nLeftrightarrow":"\u21CE","nleq":"\u2270","nleqq":"\u2266\u0338","nleqslant":"\u2A7D\u0338","nles":"\u2A7D\u0338","nless":"\u226E","nLl":"\u22D8\u0338","nlsim":"\u2274","nLt":"\u226A\u20D2","nlt":"\u226E","nltri":"\u22EA","nltrie":"\u22EC","nLtv":"\u226A\u0338","nmid":"\u2224","NoBreak":"\u2060","NonBreakingSpace":"\xA0","nopf":"\uD835\uDD5F","Nopf":"\u2115","Not":"\u2AEC","not":"\xAC","NotCongruent":"\u2262","NotCupCap":"\u226D","NotDoubleVerticalBar":"\u2226","NotElement":"\u2209","NotEqual":"\u2260","NotEqualTilde":"\u2242\u0338","NotExists":"\u2204","NotGreater":"\u226F","NotGreaterEqual":"\u2271","NotGreaterFullEqual":"\u2267\u0338","NotGreaterGreater":"\u226B\u0338","NotGreaterLess":"\u2279","NotGreaterSlantEqual":"\u2A7E\u0338","NotGreaterTilde":"\u2275","NotHumpDownHump":"\u224E\u0338","NotHumpEqual":"\u224F\u0338","notin":"\u2209","notindot":"\u22F5\u0338","notinE":"\u22F9\u0338","notinva":"\u2209","notinvb":"\u22F7","notinvc":"\u22F6","NotLeftTriangleBar":"\u29CF\u0338","NotLeftTriangle":"\u22EA","NotLeftTriangleEqual":"\u22EC","NotLess":"\u226E","NotLessEqual":"\u2270","NotLessGreater":"\u2278","NotLessLess":"\u226A\u0338","NotLessSlantEqual":"\u2A7D\u0338","NotLessTilde":"\u2274","NotNestedGreaterGreater":"\u2AA2\u0338","NotNestedLessLess":"\u2AA1\u0338","notni":"\u220C","notniva":"\u220C","notnivb":"\u22FE","notnivc":"\u22FD","NotPrecedes":"\u2280","NotPrecedesEqual":"\u2AAF\u0338","NotPrecedesSlantEqual":"\u22E0","NotReverseElement":"\u220C","NotRightTriangleBar":"\u29D0\u0338","NotRightTriangle":"\u22EB","NotRightTriangleEqual":"\u22ED","NotSquareSubset":"\u228F\u0338","NotSquareSubsetEqual":"\u22E2","NotSquareSuperset":"\u2290\u0338","NotSquareSupersetEqual":"\u22E3","NotSubset":"\u2282\u20D2","NotSubsetEqual":"\u2288","NotSucceeds":"\u2281","NotSucceedsEqual":"\u2AB0\u0338","NotSucceedsSlantEqual":"\u22E1","NotSucceedsTilde":"\u227F\u0338","NotSuperset":"\u2283\u20D2","NotSupersetEqual":"\u2289","NotTilde":"\u2241","NotTildeEqual":"\u2244","NotTildeFullEqual":"\u2247","NotTildeTilde":"\u2249","NotVerticalBar":"\u2224","nparallel":"\u2226","npar":"\u2226","nparsl":"\u2AFD\u20E5","npart":"\u2202\u0338","npolint":"\u2A14","npr":"\u2280","nprcue":"\u22E0","nprec":"\u2280","npreceq":"\u2AAF\u0338","npre":"\u2AAF\u0338","nrarrc":"\u2933\u0338","nrarr":"\u219B","nrArr":"\u21CF","nrarrw":"\u219D\u0338","nrightarrow":"\u219B","nRightarrow":"\u21CF","nrtri":"\u22EB","nrtrie":"\u22ED","nsc":"\u2281","nsccue":"\u22E1","nsce":"\u2AB0\u0338","Nscr":"\uD835\uDCA9","nscr":"\uD835\uDCC3","nshortmid":"\u2224","nshortparallel":"\u2226","nsim":"\u2241","nsime":"\u2244","nsimeq":"\u2244","nsmid":"\u2224","nspar":"\u2226","nsqsube":"\u22E2","nsqsupe":"\u22E3","nsub":"\u2284","nsubE":"\u2AC5\u0338","nsube":"\u2288","nsubset":"\u2282\u20D2","nsubseteq":"\u2288","nsubseteqq":"\u2AC5\u0338","nsucc":"\u2281","nsucceq":"\u2AB0\u0338","nsup":"\u2285","nsupE":"\u2AC6\u0338","nsupe":"\u2289","nsupset":"\u2283\u20D2","nsupseteq":"\u2289","nsupseteqq":"\u2AC6\u0338","ntgl":"\u2279","Ntilde":"\xD1","ntilde":"\xF1","ntlg":"\u2278","ntriangleleft":"\u22EA","ntrianglelefteq":"\u22EC","ntriangleright":"\u22EB","ntrianglerighteq":"\u22ED","Nu":"\u039D","nu":"\u03BD","num":"#","numero":"\u2116","numsp":"\u2007","nvap":"\u224D\u20D2","nvdash":"\u22AC","nvDash":"\u22AD","nVdash":"\u22AE","nVDash":"\u22AF","nvge":"\u2265\u20D2","nvgt":">\u20D2","nvHarr":"\u2904","nvinfin":"\u29DE","nvlArr":"\u2902","nvle":"\u2264\u20D2","nvlt":"<\u20D2","nvltrie":"\u22B4\u20D2","nvrArr":"\u2903","nvrtrie":"\u22B5\u20D2","nvsim":"\u223C\u20D2","nwarhk":"\u2923","nwarr":"\u2196","nwArr":"\u21D6","nwarrow":"\u2196","nwnear":"\u2927","Oacute":"\xD3","oacute":"\xF3","oast":"\u229B","Ocirc":"\xD4","ocirc":"\xF4","ocir":"\u229A","Ocy":"\u041E","ocy":"\u043E","odash":"\u229D","Odblac":"\u0150","odblac":"\u0151","odiv":"\u2A38","odot":"\u2299","odsold":"\u29BC","OElig":"\u0152","oelig":"\u0153","ofcir":"\u29BF","Ofr":"\uD835\uDD12","ofr":"\uD835\uDD2C","ogon":"\u02DB","Ograve":"\xD2","ograve":"\xF2","ogt":"\u29C1","ohbar":"\u29B5","ohm":"\u03A9","oint":"\u222E","olarr":"\u21BA","olcir":"\u29BE","olcross":"\u29BB","oline":"\u203E","olt":"\u29C0","Omacr":"\u014C","omacr":"\u014D","Omega":"\u03A9","omega":"\u03C9","Omicron":"\u039F","omicron":"\u03BF","omid":"\u29B6","ominus":"\u2296","Oopf":"\uD835\uDD46","oopf":"\uD835\uDD60","opar":"\u29B7","OpenCurlyDoubleQuote":"\u201C","OpenCurlyQuote":"\u2018","operp":"\u29B9","oplus":"\u2295","orarr":"\u21BB","Or":"\u2A54","or":"\u2228","ord":"\u2A5D","order":"\u2134","orderof":"\u2134","ordf":"\xAA","ordm":"\xBA","origof":"\u22B6","oror":"\u2A56","orslope":"\u2A57","orv":"\u2A5B","oS":"\u24C8","Oscr":"\uD835\uDCAA","oscr":"\u2134","Oslash":"\xD8","oslash":"\xF8","osol":"\u2298","Otilde":"\xD5","otilde":"\xF5","otimesas":"\u2A36","Otimes":"\u2A37","otimes":"\u2297","Ouml":"\xD6","ouml":"\xF6","ovbar":"\u233D","OverBar":"\u203E","OverBrace":"\u23DE","OverBracket":"\u23B4","OverParenthesis":"\u23DC","para":"\xB6","parallel":"\u2225","par":"\u2225","parsim":"\u2AF3","parsl":"\u2AFD","part":"\u2202","PartialD":"\u2202","Pcy":"\u041F","pcy":"\u043F","percnt":"%","period":".","permil":"\u2030","perp":"\u22A5","pertenk":"\u2031","Pfr":"\uD835\uDD13","pfr":"\uD835\uDD2D","Phi":"\u03A6","phi":"\u03C6","phiv":"\u03D5","phmmat":"\u2133","phone":"\u260E","Pi":"\u03A0","pi":"\u03C0","pitchfork":"\u22D4","piv":"\u03D6","planck":"\u210F","planckh":"\u210E","plankv":"\u210F","plusacir":"\u2A23","plusb":"\u229E","pluscir":"\u2A22","plus":"+","plusdo":"\u2214","plusdu":"\u2A25","pluse":"\u2A72","PlusMinus":"\xB1","plusmn":"\xB1","plussim":"\u2A26","plustwo":"\u2A27","pm":"\xB1","Poincareplane":"\u210C","pointint":"\u2A15","popf":"\uD835\uDD61","Popf":"\u2119","pound":"\xA3","prap":"\u2AB7","Pr":"\u2ABB","pr":"\u227A","prcue":"\u227C","precapprox":"\u2AB7","prec":"\u227A","preccurlyeq":"\u227C","Precedes":"\u227A","PrecedesEqual":"\u2AAF","PrecedesSlantEqual":"\u227C","PrecedesTilde":"\u227E","preceq":"\u2AAF","precnapprox":"\u2AB9","precneqq":"\u2AB5","precnsim":"\u22E8","pre":"\u2AAF","prE":"\u2AB3","precsim":"\u227E","prime":"\u2032","Prime":"\u2033","primes":"\u2119","prnap":"\u2AB9","prnE":"\u2AB5","prnsim":"\u22E8","prod":"\u220F","Product":"\u220F","profalar":"\u232E","profline":"\u2312","profsurf":"\u2313","prop":"\u221D","Proportional":"\u221D","Proportion":"\u2237","propto":"\u221D","prsim":"\u227E","prurel":"\u22B0","Pscr":"\uD835\uDCAB","pscr":"\uD835\uDCC5","Psi":"\u03A8","psi":"\u03C8","puncsp":"\u2008","Qfr":"\uD835\uDD14","qfr":"\uD835\uDD2E","qint":"\u2A0C","qopf":"\uD835\uDD62","Qopf":"\u211A","qprime":"\u2057","Qscr":"\uD835\uDCAC","qscr":"\uD835\uDCC6","quaternions":"\u210D","quatint":"\u2A16","quest":"?","questeq":"\u225F","quot":"\"","QUOT":"\"","rAarr":"\u21DB","race":"\u223D\u0331","Racute":"\u0154","racute":"\u0155","radic":"\u221A","raemptyv":"\u29B3","rang":"\u27E9","Rang":"\u27EB","rangd":"\u2992","range":"\u29A5","rangle":"\u27E9","raquo":"\xBB","rarrap":"\u2975","rarrb":"\u21E5","rarrbfs":"\u2920","rarrc":"\u2933","rarr":"\u2192","Rarr":"\u21A0","rArr":"\u21D2","rarrfs":"\u291E","rarrhk":"\u21AA","rarrlp":"\u21AC","rarrpl":"\u2945","rarrsim":"\u2974","Rarrtl":"\u2916","rarrtl":"\u21A3","rarrw":"\u219D","ratail":"\u291A","rAtail":"\u291C","ratio":"\u2236","rationals":"\u211A","rbarr":"\u290D","rBarr":"\u290F","RBarr":"\u2910","rbbrk":"\u2773","rbrace":"}","rbrack":"]","rbrke":"\u298C","rbrksld":"\u298E","rbrkslu":"\u2990","Rcaron":"\u0158","rcaron":"\u0159","Rcedil":"\u0156","rcedil":"\u0157","rceil":"\u2309","rcub":"}","Rcy":"\u0420","rcy":"\u0440","rdca":"\u2937","rdldhar":"\u2969","rdquo":"\u201D","rdquor":"\u201D","rdsh":"\u21B3","real":"\u211C","realine":"\u211B","realpart":"\u211C","reals":"\u211D","Re":"\u211C","rect":"\u25AD","reg":"\xAE","REG":"\xAE","ReverseElement":"\u220B","ReverseEquilibrium":"\u21CB","ReverseUpEquilibrium":"\u296F","rfisht":"\u297D","rfloor":"\u230B","rfr":"\uD835\uDD2F","Rfr":"\u211C","rHar":"\u2964","rhard":"\u21C1","rharu":"\u21C0","rharul":"\u296C","Rho":"\u03A1","rho":"\u03C1","rhov":"\u03F1","RightAngleBracket":"\u27E9","RightArrowBar":"\u21E5","rightarrow":"\u2192","RightArrow":"\u2192","Rightarrow":"\u21D2","RightArrowLeftArrow":"\u21C4","rightarrowtail":"\u21A3","RightCeiling":"\u2309","RightDoubleBracket":"\u27E7","RightDownTeeVector":"\u295D","RightDownVectorBar":"\u2955","RightDownVector":"\u21C2","RightFloor":"\u230B","rightharpoondown":"\u21C1","rightharpoonup":"\u21C0","rightleftarrows":"\u21C4","rightleftharpoons":"\u21CC","rightrightarrows":"\u21C9","rightsquigarrow":"\u219D","RightTeeArrow":"\u21A6","RightTee":"\u22A2","RightTeeVector":"\u295B","rightthreetimes":"\u22CC","RightTriangleBar":"\u29D0","RightTriangle":"\u22B3","RightTriangleEqual":"\u22B5","RightUpDownVector":"\u294F","RightUpTeeVector":"\u295C","RightUpVectorBar":"\u2954","RightUpVector":"\u21BE","RightVectorBar":"\u2953","RightVector":"\u21C0","ring":"\u02DA","risingdotseq":"\u2253","rlarr":"\u21C4","rlhar":"\u21CC","rlm":"\u200F","rmoustache":"\u23B1","rmoust":"\u23B1","rnmid":"\u2AEE","roang":"\u27ED","roarr":"\u21FE","robrk":"\u27E7","ropar":"\u2986","ropf":"\uD835\uDD63","Ropf":"\u211D","roplus":"\u2A2E","rotimes":"\u2A35","RoundImplies":"\u2970","rpar":")","rpargt":"\u2994","rppolint":"\u2A12","rrarr":"\u21C9","Rrightarrow":"\u21DB","rsaquo":"\u203A","rscr":"\uD835\uDCC7","Rscr":"\u211B","rsh":"\u21B1","Rsh":"\u21B1","rsqb":"]","rsquo":"\u2019","rsquor":"\u2019","rthree":"\u22CC","rtimes":"\u22CA","rtri":"\u25B9","rtrie":"\u22B5","rtrif":"\u25B8","rtriltri":"\u29CE","RuleDelayed":"\u29F4","ruluhar":"\u2968","rx":"\u211E","Sacute":"\u015A","sacute":"\u015B","sbquo":"\u201A","scap":"\u2AB8","Scaron":"\u0160","scaron":"\u0161","Sc":"\u2ABC","sc":"\u227B","sccue":"\u227D","sce":"\u2AB0","scE":"\u2AB4","Scedil":"\u015E","scedil":"\u015F","Scirc":"\u015C","scirc":"\u015D","scnap":"\u2ABA","scnE":"\u2AB6","scnsim":"\u22E9","scpolint":"\u2A13","scsim":"\u227F","Scy":"\u0421","scy":"\u0441","sdotb":"\u22A1","sdot":"\u22C5","sdote":"\u2A66","searhk":"\u2925","searr":"\u2198","seArr":"\u21D8","searrow":"\u2198","sect":"\xA7","semi":";","seswar":"\u2929","setminus":"\u2216","setmn":"\u2216","sext":"\u2736","Sfr":"\uD835\uDD16","sfr":"\uD835\uDD30","sfrown":"\u2322","sharp":"\u266F","SHCHcy":"\u0429","shchcy":"\u0449","SHcy":"\u0428","shcy":"\u0448","ShortDownArrow":"\u2193","ShortLeftArrow":"\u2190","shortmid":"\u2223","shortparallel":"\u2225","ShortRightArrow":"\u2192","ShortUpArrow":"\u2191","shy":"\xAD","Sigma":"\u03A3","sigma":"\u03C3","sigmaf":"\u03C2","sigmav":"\u03C2","sim":"\u223C","simdot":"\u2A6A","sime":"\u2243","simeq":"\u2243","simg":"\u2A9E","simgE":"\u2AA0","siml":"\u2A9D","simlE":"\u2A9F","simne":"\u2246","simplus":"\u2A24","simrarr":"\u2972","slarr":"\u2190","SmallCircle":"\u2218","smallsetminus":"\u2216","smashp":"\u2A33","smeparsl":"\u29E4","smid":"\u2223","smile":"\u2323","smt":"\u2AAA","smte":"\u2AAC","smtes":"\u2AAC\uFE00","SOFTcy":"\u042C","softcy":"\u044C","solbar":"\u233F","solb":"\u29C4","sol":"/","Sopf":"\uD835\uDD4A","sopf":"\uD835\uDD64","spades":"\u2660","spadesuit":"\u2660","spar":"\u2225","sqcap":"\u2293","sqcaps":"\u2293\uFE00","sqcup":"\u2294","sqcups":"\u2294\uFE00","Sqrt":"\u221A","sqsub":"\u228F","sqsube":"\u2291","sqsubset":"\u228F","sqsubseteq":"\u2291","sqsup":"\u2290","sqsupe":"\u2292","sqsupset":"\u2290","sqsupseteq":"\u2292","square":"\u25A1","Square":"\u25A1","SquareIntersection":"\u2293","SquareSubset":"\u228F","SquareSubsetEqual":"\u2291","SquareSuperset":"\u2290","SquareSupersetEqual":"\u2292","SquareUnion":"\u2294","squarf":"\u25AA","squ":"\u25A1","squf":"\u25AA","srarr":"\u2192","Sscr":"\uD835\uDCAE","sscr":"\uD835\uDCC8","ssetmn":"\u2216","ssmile":"\u2323","sstarf":"\u22C6","Star":"\u22C6","star":"\u2606","starf":"\u2605","straightepsilon":"\u03F5","straightphi":"\u03D5","strns":"\xAF","sub":"\u2282","Sub":"\u22D0","subdot":"\u2ABD","subE":"\u2AC5","sube":"\u2286","subedot":"\u2AC3","submult":"\u2AC1","subnE":"\u2ACB","subne":"\u228A","subplus":"\u2ABF","subrarr":"\u2979","subset":"\u2282","Subset":"\u22D0","subseteq":"\u2286","subseteqq":"\u2AC5","SubsetEqual":"\u2286","subsetneq":"\u228A","subsetneqq":"\u2ACB","subsim":"\u2AC7","subsub":"\u2AD5","subsup":"\u2AD3","succapprox":"\u2AB8","succ":"\u227B","succcurlyeq":"\u227D","Succeeds":"\u227B","SucceedsEqual":"\u2AB0","SucceedsSlantEqual":"\u227D","SucceedsTilde":"\u227F","succeq":"\u2AB0","succnapprox":"\u2ABA","succneqq":"\u2AB6","succnsim":"\u22E9","succsim":"\u227F","SuchThat":"\u220B","sum":"\u2211","Sum":"\u2211","sung":"\u266A","sup1":"\xB9","sup2":"\xB2","sup3":"\xB3","sup":"\u2283","Sup":"\u22D1","supdot":"\u2ABE","supdsub":"\u2AD8","supE":"\u2AC6","supe":"\u2287","supedot":"\u2AC4","Superset":"\u2283","SupersetEqual":"\u2287","suphsol":"\u27C9","suphsub":"\u2AD7","suplarr":"\u297B","supmult":"\u2AC2","supnE":"\u2ACC","supne":"\u228B","supplus":"\u2AC0","supset":"\u2283","Supset":"\u22D1","supseteq":"\u2287","supseteqq":"\u2AC6","supsetneq":"\u228B","supsetneqq":"\u2ACC","supsim":"\u2AC8","supsub":"\u2AD4","supsup":"\u2AD6","swarhk":"\u2926","swarr":"\u2199","swArr":"\u21D9","swarrow":"\u2199","swnwar":"\u292A","szlig":"\xDF","Tab":"\t","target":"\u2316","Tau":"\u03A4","tau":"\u03C4","tbrk":"\u23B4","Tcaron":"\u0164","tcaron":"\u0165","Tcedil":"\u0162","tcedil":"\u0163","Tcy":"\u0422","tcy":"\u0442","tdot":"\u20DB","telrec":"\u2315","Tfr":"\uD835\uDD17","tfr":"\uD835\uDD31","there4":"\u2234","therefore":"\u2234","Therefore":"\u2234","Theta":"\u0398","theta":"\u03B8","thetasym":"\u03D1","thetav":"\u03D1","thickapprox":"\u2248","thicksim":"\u223C","ThickSpace":"\u205F\u200A","ThinSpace":"\u2009","thinsp":"\u2009","thkap":"\u2248","thksim":"\u223C","THORN":"\xDE","thorn":"\xFE","tilde":"\u02DC","Tilde":"\u223C","TildeEqual":"\u2243","TildeFullEqual":"\u2245","TildeTilde":"\u2248","timesbar":"\u2A31","timesb":"\u22A0","times":"\xD7","timesd":"\u2A30","tint":"\u222D","toea":"\u2928","topbot":"\u2336","topcir":"\u2AF1","top":"\u22A4","Topf":"\uD835\uDD4B","topf":"\uD835\uDD65","topfork":"\u2ADA","tosa":"\u2929","tprime":"\u2034","trade":"\u2122","TRADE":"\u2122","triangle":"\u25B5","triangledown":"\u25BF","triangleleft":"\u25C3","trianglelefteq":"\u22B4","triangleq":"\u225C","triangleright":"\u25B9","trianglerighteq":"\u22B5","tridot":"\u25EC","trie":"\u225C","triminus":"\u2A3A","TripleDot":"\u20DB","triplus":"\u2A39","trisb":"\u29CD","tritime":"\u2A3B","trpezium":"\u23E2","Tscr":"\uD835\uDCAF","tscr":"\uD835\uDCC9","TScy":"\u0426","tscy":"\u0446","TSHcy":"\u040B","tshcy":"\u045B","Tstrok":"\u0166","tstrok":"\u0167","twixt":"\u226C","twoheadleftarrow":"\u219E","twoheadrightarrow":"\u21A0","Uacute":"\xDA","uacute":"\xFA","uarr":"\u2191","Uarr":"\u219F","uArr":"\u21D1","Uarrocir":"\u2949","Ubrcy":"\u040E","ubrcy":"\u045E","Ubreve":"\u016C","ubreve":"\u016D","Ucirc":"\xDB","ucirc":"\xFB","Ucy":"\u0423","ucy":"\u0443","udarr":"\u21C5","Udblac":"\u0170","udblac":"\u0171","udhar":"\u296E","ufisht":"\u297E","Ufr":"\uD835\uDD18","ufr":"\uD835\uDD32","Ugrave":"\xD9","ugrave":"\xF9","uHar":"\u2963","uharl":"\u21BF","uharr":"\u21BE","uhblk":"\u2580","ulcorn":"\u231C","ulcorner":"\u231C","ulcrop":"\u230F","ultri":"\u25F8","Umacr":"\u016A","umacr":"\u016B","uml":"\xA8","UnderBar":"_","UnderBrace":"\u23DF","UnderBracket":"\u23B5","UnderParenthesis":"\u23DD","Union":"\u22C3","UnionPlus":"\u228E","Uogon":"\u0172","uogon":"\u0173","Uopf":"\uD835\uDD4C","uopf":"\uD835\uDD66","UpArrowBar":"\u2912","uparrow":"\u2191","UpArrow":"\u2191","Uparrow":"\u21D1","UpArrowDownArrow":"\u21C5","updownarrow":"\u2195","UpDownArrow":"\u2195","Updownarrow":"\u21D5","UpEquilibrium":"\u296E","upharpoonleft":"\u21BF","upharpoonright":"\u21BE","uplus":"\u228E","UpperLeftArrow":"\u2196","UpperRightArrow":"\u2197","upsi":"\u03C5","Upsi":"\u03D2","upsih":"\u03D2","Upsilon":"\u03A5","upsilon":"\u03C5","UpTeeArrow":"\u21A5","UpTee":"\u22A5","upuparrows":"\u21C8","urcorn":"\u231D","urcorner":"\u231D","urcrop":"\u230E","Uring":"\u016E","uring":"\u016F","urtri":"\u25F9","Uscr":"\uD835\uDCB0","uscr":"\uD835\uDCCA","utdot":"\u22F0","Utilde":"\u0168","utilde":"\u0169","utri":"\u25B5","utrif":"\u25B4","uuarr":"\u21C8","Uuml":"\xDC","uuml":"\xFC","uwangle":"\u29A7","vangrt":"\u299C","varepsilon":"\u03F5","varkappa":"\u03F0","varnothing":"\u2205","varphi":"\u03D5","varpi":"\u03D6","varpropto":"\u221D","varr":"\u2195","vArr":"\u21D5","varrho":"\u03F1","varsigma":"\u03C2","varsubsetneq":"\u228A\uFE00","varsubsetneqq":"\u2ACB\uFE00","varsupsetneq":"\u228B\uFE00","varsupsetneqq":"\u2ACC\uFE00","vartheta":"\u03D1","vartriangleleft":"\u22B2","vartriangleright":"\u22B3","vBar":"\u2AE8","Vbar":"\u2AEB","vBarv":"\u2AE9","Vcy":"\u0412","vcy":"\u0432","vdash":"\u22A2","vDash":"\u22A8","Vdash":"\u22A9","VDash":"\u22AB","Vdashl":"\u2AE6","veebar":"\u22BB","vee":"\u2228","Vee":"\u22C1","veeeq":"\u225A","vellip":"\u22EE","verbar":"|","Verbar":"\u2016","vert":"|","Vert":"\u2016","VerticalBar":"\u2223","VerticalLine":"|","VerticalSeparator":"\u2758","VerticalTilde":"\u2240","VeryThinSpace":"\u200A","Vfr":"\uD835\uDD19","vfr":"\uD835\uDD33","vltri":"\u22B2","vnsub":"\u2282\u20D2","vnsup":"\u2283\u20D2","Vopf":"\uD835\uDD4D","vopf":"\uD835\uDD67","vprop":"\u221D","vrtri":"\u22B3","Vscr":"\uD835\uDCB1","vscr":"\uD835\uDCCB","vsubnE":"\u2ACB\uFE00","vsubne":"\u228A\uFE00","vsupnE":"\u2ACC\uFE00","vsupne":"\u228B\uFE00","Vvdash":"\u22AA","vzigzag":"\u299A","Wcirc":"\u0174","wcirc":"\u0175","wedbar":"\u2A5F","wedge":"\u2227","Wedge":"\u22C0","wedgeq":"\u2259","weierp":"\u2118","Wfr":"\uD835\uDD1A","wfr":"\uD835\uDD34","Wopf":"\uD835\uDD4E","wopf":"\uD835\uDD68","wp":"\u2118","wr":"\u2240","wreath":"\u2240","Wscr":"\uD835\uDCB2","wscr":"\uD835\uDCCC","xcap":"\u22C2","xcirc":"\u25EF","xcup":"\u22C3","xdtri":"\u25BD","Xfr":"\uD835\uDD1B","xfr":"\uD835\uDD35","xharr":"\u27F7","xhArr":"\u27FA","Xi":"\u039E","xi":"\u03BE","xlarr":"\u27F5","xlArr":"\u27F8","xmap":"\u27FC","xnis":"\u22FB","xodot":"\u2A00","Xopf":"\uD835\uDD4F","xopf":"\uD835\uDD69","xoplus":"\u2A01","xotime":"\u2A02","xrarr":"\u27F6","xrArr":"\u27F9","Xscr":"\uD835\uDCB3","xscr":"\uD835\uDCCD","xsqcup":"\u2A06","xuplus":"\u2A04","xutri":"\u25B3","xvee":"\u22C1","xwedge":"\u22C0","Yacute":"\xDD","yacute":"\xFD","YAcy":"\u042F","yacy":"\u044F","Ycirc":"\u0176","ycirc":"\u0177","Ycy":"\u042B","ycy":"\u044B","yen":"\xA5","Yfr":"\uD835\uDD1C","yfr":"\uD835\uDD36","YIcy":"\u0407","yicy":"\u0457","Yopf":"\uD835\uDD50","yopf":"\uD835\uDD6A","Yscr":"\uD835\uDCB4","yscr":"\uD835\uDCCE","YUcy":"\u042E","yucy":"\u044E","yuml":"\xFF","Yuml":"\u0178","Zacute":"\u0179","zacute":"\u017A","Zcaron":"\u017D","zcaron":"\u017E","Zcy":"\u0417","zcy":"\u0437","Zdot":"\u017B","zdot":"\u017C","zeetrf":"\u2128","ZeroWidthSpace":"\u200B","Zeta":"\u0396","zeta":"\u03B6","zfr":"\uD835\uDD37","Zfr":"\u2128","ZHcy":"\u0416","zhcy":"\u0436","zigrarr":"\u21DD","zopf":"\uD835\uDD6B","Zopf":"\u2124","Zscr":"\uD835\uDCB5","zscr":"\uD835\uDCCF","zwj":"\u200D","zwnj":"\u200C"};},{}],23:[function(require,module,exports){module.exports={"Aacute":"\xC1","aacute":"\xE1","Acirc":"\xC2","acirc":"\xE2","acute":"\xB4","AElig":"\xC6","aelig":"\xE6","Agrave":"\xC0","agrave":"\xE0","amp":"&","AMP":"&","Aring":"\xC5","aring":"\xE5","Atilde":"\xC3","atilde":"\xE3","Auml":"\xC4","auml":"\xE4","brvbar":"\xA6","Ccedil":"\xC7","ccedil":"\xE7","cedil":"\xB8","cent":"\xA2","copy":"\xA9","COPY":"\xA9","curren":"\xA4","deg":"\xB0","divide":"\xF7","Eacute":"\xC9","eacute":"\xE9","Ecirc":"\xCA","ecirc":"\xEA","Egrave":"\xC8","egrave":"\xE8","ETH":"\xD0","eth":"\xF0","Euml":"\xCB","euml":"\xEB","frac12":"\xBD","frac14":"\xBC","frac34":"\xBE","gt":">","GT":">","Iacute":"\xCD","iacute":"\xED","Icirc":"\xCE","icirc":"\xEE","iexcl":"\xA1","Igrave":"\xCC","igrave":"\xEC","iquest":"\xBF","Iuml":"\xCF","iuml":"\xEF","laquo":"\xAB","lt":"<","LT":"<","macr":"\xAF","micro":"\xB5","middot":"\xB7","nbsp":"\xA0","not":"\xAC","Ntilde":"\xD1","ntilde":"\xF1","Oacute":"\xD3","oacute":"\xF3","Ocirc":"\xD4","ocirc":"\xF4","Ograve":"\xD2","ograve":"\xF2","ordf":"\xAA","ordm":"\xBA","Oslash":"\xD8","oslash":"\xF8","Otilde":"\xD5","otilde":"\xF5","Ouml":"\xD6","ouml":"\xF6","para":"\xB6","plusmn":"\xB1","pound":"\xA3","quot":"\"","QUOT":"\"","raquo":"\xBB","reg":"\xAE","REG":"\xAE","sect":"\xA7","shy":"\xAD","sup1":"\xB9","sup2":"\xB2","sup3":"\xB3","szlig":"\xDF","THORN":"\xDE","thorn":"\xFE","times":"\xD7","Uacute":"\xDA","uacute":"\xFA","Ucirc":"\xDB","ucirc":"\xFB","Ugrave":"\xD9","ugrave":"\xF9","uml":"\xA8","Uuml":"\xDC","uuml":"\xFC","Yacute":"\xDD","yacute":"\xFD","yen":"\xA5","yuml":"\xFF"};},{}],24:[function(require,module,exports){module.exports={"amp":"&","apos":"'","gt":">","lt":"<","quot":"\""};},{}],25:[function(require,module,exports){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var objectCreate=Object.create||objectCreatePolyfill;var objectKeys=Object.keys||objectKeysPolyfill;var bind=Function.prototype.bind||functionBindPolyfill;function EventEmitter(){if(!this._events||!Object.prototype.hasOwnProperty.call(this,'_events')){this._events=objectCreate(null);this._eventsCount=0;}this._maxListeners=this._maxListeners||undefined;}module.exports=EventEmitter;// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter=EventEmitter;EventEmitter.prototype._events=undefined;EventEmitter.prototype._maxListeners=undefined;// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners=10;var hasDefineProperty;try{var o={};if(Object.defineProperty)Object.defineProperty(o,'x',{value:0});hasDefineProperty=o.x===0;}catch(err){hasDefineProperty=false;}if(hasDefineProperty){Object.defineProperty(EventEmitter,'defaultMaxListeners',{enumerable:true,get:function get(){return defaultMaxListeners;},set:function set(arg){// check whether the input is a positive number (whose value is zero or
// greater and not a NaN).
if(typeof arg!=='number'||arg<0||arg!==arg)throw new TypeError('"defaultMaxListeners" must be a positive number');defaultMaxListeners=arg;}});}else{EventEmitter.defaultMaxListeners=defaultMaxListeners;}// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners=function setMaxListeners(n){if(typeof n!=='number'||n<0||isNaN(n))throw new TypeError('"n" argument must be a positive number');this._maxListeners=n;return this;};function $getMaxListeners(that){if(that._maxListeners===undefined)return EventEmitter.defaultMaxListeners;return that._maxListeners;}EventEmitter.prototype.getMaxListeners=function getMaxListeners(){return $getMaxListeners(this);};// These standalone emit* functions are used to optimize calling of event
// handlers for fast cases because emit() itself often has a variable number of
// arguments and can be deoptimized because of that. These functions always have
// the same number of arguments and thus do not get deoptimized, so the code
// inside them can execute faster.
function emitNone(handler,isFn,self){if(isFn)handler.call(self);else{var len=handler.length;var listeners=arrayClone(handler,len);for(var i=0;i<len;++i){listeners[i].call(self);}}}function emitOne(handler,isFn,self,arg1){if(isFn)handler.call(self,arg1);else{var len=handler.length;var listeners=arrayClone(handler,len);for(var i=0;i<len;++i){listeners[i].call(self,arg1);}}}function emitTwo(handler,isFn,self,arg1,arg2){if(isFn)handler.call(self,arg1,arg2);else{var len=handler.length;var listeners=arrayClone(handler,len);for(var i=0;i<len;++i){listeners[i].call(self,arg1,arg2);}}}function emitThree(handler,isFn,self,arg1,arg2,arg3){if(isFn)handler.call(self,arg1,arg2,arg3);else{var len=handler.length;var listeners=arrayClone(handler,len);for(var i=0;i<len;++i){listeners[i].call(self,arg1,arg2,arg3);}}}function emitMany(handler,isFn,self,args){if(isFn)handler.apply(self,args);else{var len=handler.length;var listeners=arrayClone(handler,len);for(var i=0;i<len;++i){listeners[i].apply(self,args);}}}EventEmitter.prototype.emit=function emit(type){var er,handler,len,args,i,events;var doError=type==='error';events=this._events;if(events)doError=doError&&events.error==null;else if(!doError)return false;// If there is no 'error' event listener then throw.
if(doError){if(arguments.length>1)er=arguments[1];if(er instanceof Error){throw er;// Unhandled 'error' event
}else{// At least give some kind of context to the user
var err=new Error('Unhandled "error" event. ('+er+')');err.context=er;throw err;}return false;}handler=events[type];if(!handler)return false;var isFn=typeof handler==='function';len=arguments.length;switch(len){// fast cases
case 1:emitNone(handler,isFn,this);break;case 2:emitOne(handler,isFn,this,arguments[1]);break;case 3:emitTwo(handler,isFn,this,arguments[1],arguments[2]);break;case 4:emitThree(handler,isFn,this,arguments[1],arguments[2],arguments[3]);break;// slower
default:args=new Array(len-1);for(i=1;i<len;i++){args[i-1]=arguments[i];}emitMany(handler,isFn,this,args);}return true;};function _addListener(target,type,listener,prepend){var m;var events;var existing;if(typeof listener!=='function')throw new TypeError('"listener" argument must be a function');events=target._events;if(!events){events=target._events=objectCreate(null);target._eventsCount=0;}else{// To avoid recursion in the case that type === "newListener"! Before
// adding it to the listeners, first emit "newListener".
if(events.newListener){target.emit('newListener',type,listener.listener?listener.listener:listener);// Re-assign `events` because a newListener handler could have caused the
// this._events to be assigned to a new object
events=target._events;}existing=events[type];}if(!existing){// Optimize the case of one listener. Don't need the extra array object.
existing=events[type]=listener;++target._eventsCount;}else{if(typeof existing==='function'){// Adding the second element, need to change to array.
existing=events[type]=prepend?[listener,existing]:[existing,listener];}else{// If we've already got an array, just append.
if(prepend){existing.unshift(listener);}else{existing.push(listener);}}// Check for listener leak
if(!existing.warned){m=$getMaxListeners(target);if(m&&m>0&&existing.length>m){existing.warned=true;var w=new Error('Possible EventEmitter memory leak detected. '+existing.length+' "'+String(type)+'" listeners '+'added. Use emitter.setMaxListeners() to '+'increase limit.');w.name='MaxListenersExceededWarning';w.emitter=target;w.type=type;w.count=existing.length;if((typeof console==="undefined"?"undefined":_typeof(console))==='object'&&console.warn){console.warn('%s: %s',w.name,w.message);}}}}return target;}EventEmitter.prototype.addListener=function addListener(type,listener){return _addListener(this,type,listener,false);};EventEmitter.prototype.on=EventEmitter.prototype.addListener;EventEmitter.prototype.prependListener=function prependListener(type,listener){return _addListener(this,type,listener,true);};function onceWrapper(){if(!this.fired){this.target.removeListener(this.type,this.wrapFn);this.fired=true;switch(arguments.length){case 0:return this.listener.call(this.target);case 1:return this.listener.call(this.target,arguments[0]);case 2:return this.listener.call(this.target,arguments[0],arguments[1]);case 3:return this.listener.call(this.target,arguments[0],arguments[1],arguments[2]);default:var args=new Array(arguments.length);for(var i=0;i<args.length;++i){args[i]=arguments[i];}this.listener.apply(this.target,args);}}}function _onceWrap(target,type,listener){var state={fired:false,wrapFn:undefined,target:target,type:type,listener:listener};var wrapped=bind.call(onceWrapper,state);wrapped.listener=listener;state.wrapFn=wrapped;return wrapped;}EventEmitter.prototype.once=function once(type,listener){if(typeof listener!=='function')throw new TypeError('"listener" argument must be a function');this.on(type,_onceWrap(this,type,listener));return this;};EventEmitter.prototype.prependOnceListener=function prependOnceListener(type,listener){if(typeof listener!=='function')throw new TypeError('"listener" argument must be a function');this.prependListener(type,_onceWrap(this,type,listener));return this;};// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener=function removeListener(type,listener){var list,events,position,i,originalListener;if(typeof listener!=='function')throw new TypeError('"listener" argument must be a function');events=this._events;if(!events)return this;list=events[type];if(!list)return this;if(list===listener||list.listener===listener){if(--this._eventsCount===0)this._events=objectCreate(null);else{delete events[type];if(events.removeListener)this.emit('removeListener',type,list.listener||listener);}}else if(typeof list!=='function'){position=-1;for(i=list.length-1;i>=0;i--){if(list[i]===listener||list[i].listener===listener){originalListener=list[i].listener;position=i;break;}}if(position<0)return this;if(position===0)list.shift();else spliceOne(list,position);if(list.length===1)events[type]=list[0];if(events.removeListener)this.emit('removeListener',type,originalListener||listener);}return this;};EventEmitter.prototype.removeAllListeners=function removeAllListeners(type){var listeners,events,i;events=this._events;if(!events)return this;// not listening for removeListener, no need to emit
if(!events.removeListener){if(arguments.length===0){this._events=objectCreate(null);this._eventsCount=0;}else if(events[type]){if(--this._eventsCount===0)this._events=objectCreate(null);else delete events[type];}return this;}// emit removeListener for all listeners on all events
if(arguments.length===0){var keys=objectKeys(events);var key;for(i=0;i<keys.length;++i){key=keys[i];if(key==='removeListener')continue;this.removeAllListeners(key);}this.removeAllListeners('removeListener');this._events=objectCreate(null);this._eventsCount=0;return this;}listeners=events[type];if(typeof listeners==='function'){this.removeListener(type,listeners);}else if(listeners){// LIFO order
for(i=listeners.length-1;i>=0;i--){this.removeListener(type,listeners[i]);}}return this;};function _listeners(target,type,unwrap){var events=target._events;if(!events)return[];var evlistener=events[type];if(!evlistener)return[];if(typeof evlistener==='function')return unwrap?[evlistener.listener||evlistener]:[evlistener];return unwrap?unwrapListeners(evlistener):arrayClone(evlistener,evlistener.length);}EventEmitter.prototype.listeners=function listeners(type){return _listeners(this,type,true);};EventEmitter.prototype.rawListeners=function rawListeners(type){return _listeners(this,type,false);};EventEmitter.listenerCount=function(emitter,type){if(typeof emitter.listenerCount==='function'){return emitter.listenerCount(type);}else{return listenerCount.call(emitter,type);}};EventEmitter.prototype.listenerCount=listenerCount;function listenerCount(type){var events=this._events;if(events){var evlistener=events[type];if(typeof evlistener==='function'){return 1;}else if(evlistener){return evlistener.length;}}return 0;}EventEmitter.prototype.eventNames=function eventNames(){return this._eventsCount>0?Reflect.ownKeys(this._events):[];};// About 1.5x faster than the two-arg version of Array#splice().
function spliceOne(list,index){for(var i=index,k=i+1,n=list.length;k<n;i+=1,k+=1){list[i]=list[k];}list.pop();}function arrayClone(arr,n){var copy=new Array(n);for(var i=0;i<n;++i){copy[i]=arr[i];}return copy;}function unwrapListeners(arr){var ret=new Array(arr.length);for(var i=0;i<ret.length;++i){ret[i]=arr[i].listener||arr[i];}return ret;}function objectCreatePolyfill(proto){var F=function F(){};F.prototype=proto;return new F();}function objectKeysPolyfill(obj){var keys=[];for(var k in obj){if(Object.prototype.hasOwnProperty.call(obj,k)){keys.push(k);}}return k;}function functionBindPolyfill(context){var fn=this;return function(){return fn.apply(context,arguments);};}},{}],26:[function(require,module,exports){"use strict";var __extends=this&&this.__extends||function(){var _extendStatics2=function extendStatics(d,b){_extendStatics2=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b){if(b.hasOwnProperty(p))d[p]=b[p];}};return _extendStatics2(d,b);};return function(d,b){_extendStatics2(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod};};Object.defineProperty(exports,"__esModule",{value:true});var MultiplexHandler_1=__importDefault(require("./MultiplexHandler"));var CollectingHandler=/** @class */function(_super){__extends(CollectingHandler,_super);function CollectingHandler(cbs){if(cbs===void 0){cbs={};}var _this=_super.call(this,function(name){var _a;var args=[];for(var _i=1;_i<arguments.length;_i++){args[_i-1]=arguments[_i];}_this.events.push([name].concat(args));// @ts-ignore
if(_this._cbs[name])(_a=_this._cbs)[name].apply(_a,args);})||this;_this._cbs=cbs;_this.events=[];return _this;}CollectingHandler.prototype.onreset=function(){this.events=[];if(this._cbs.onreset)this._cbs.onreset();};CollectingHandler.prototype.restart=function(){var _a;if(this._cbs.onreset)this._cbs.onreset();for(var i=0;i<this.events.length;i++){var _b=this.events[i],name_1=_b[0],args=_b.slice(1);if(!this._cbs[name_1]){continue;}// @ts-ignore
(_a=this._cbs)[name_1].apply(_a,args);}};return CollectingHandler;}(MultiplexHandler_1["default"]);exports.CollectingHandler=CollectingHandler;},{"./MultiplexHandler":28}],27:[function(require,module,exports){"use strict";var __extends=this&&this.__extends||function(){var _extendStatics3=function extendStatics(d,b){_extendStatics3=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b){if(b.hasOwnProperty(p))d[p]=b[p];}};return _extendStatics3(d,b);};return function(d,b){_extendStatics3(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod};};var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod){if(Object.hasOwnProperty.call(mod,k))result[k]=mod[k];}result["default"]=mod;return result;};Object.defineProperty(exports,"__esModule",{value:true});var domhandler_1=__importDefault(require("domhandler"));var DomUtils=__importStar(require("domutils"));var Parser_1=require("./Parser");//TODO: Consume data as it is coming in
var FeedHandler=/** @class */function(_super){__extends(FeedHandler,_super);/**
     *
     * @param callback
     * @param options
     */function FeedHandler(callback,options){var _this=this;if(_typeof(callback)==="object"&&callback!==null){callback=undefined;options=callback;}_this=_super.call(this,callback,options)||this;return _this;}FeedHandler.prototype.onend=function(){var feed={};var feedRoot=getOneElement(isValidFeed,this.dom);if(feedRoot){if(feedRoot.name==="feed"){var childs=feedRoot.children;feed.type="atom";addConditionally(feed,"id","id",childs);addConditionally(feed,"title","title",childs);var href=getAttribute("href",getOneElement("link",childs));if(href){feed.link=href;}addConditionally(feed,"description","subtitle",childs);var updated=fetch("updated",childs);if(updated){feed.updated=new Date(updated);}addConditionally(feed,"author","email",childs,true);feed.items=getElements("entry",childs).map(function(item){var entry={};var children=item.children;addConditionally(entry,"id","id",children);addConditionally(entry,"title","title",children);var href=getAttribute("href",getOneElement("link",children));if(href){entry.link=href;}var description=fetch("summary",children)||fetch("content",children);if(description){entry.description=description;}var pubDate=fetch("updated",children);if(pubDate){entry.pubDate=new Date(pubDate);}return entry;});}else{var childs=getOneElement("channel",feedRoot.children).children;feed.type=feedRoot.name.substr(0,3);feed.id="";addConditionally(feed,"title","title",childs);addConditionally(feed,"link","link",childs);addConditionally(feed,"description","description",childs);var updated=fetch("lastBuildDate",childs);if(updated){feed.updated=new Date(updated);}addConditionally(feed,"author","managingEditor",childs,true);feed.items=getElements("item",feedRoot.children).map(function(item){var entry={};var children=item.children;addConditionally(entry,"id","guid",children);addConditionally(entry,"title","title",children);addConditionally(entry,"link","link",children);addConditionally(entry,"description","description",children);var pubDate=fetch("pubDate",children);if(pubDate)entry.pubDate=new Date(pubDate);return entry;});}}this.feed=feed;this.handleCallback(feedRoot?null:Error("couldn't find root of feed"));};return FeedHandler;}(domhandler_1["default"]);exports.FeedHandler=FeedHandler;function getElements(what,where){return DomUtils.getElementsByTagName(what,where,true);}function getOneElement(what,where){return DomUtils.getElementsByTagName(what,where,true,1)[0];}function fetch(what,where,recurse){if(recurse===void 0){recurse=false;}return DomUtils.getText(DomUtils.getElementsByTagName(what,where,recurse,1)).trim();}function getAttribute(name,elem){if(!elem){return null;}var attribs=elem.attribs;return attribs[name];}function addConditionally(obj,prop,what,where,recurse){if(recurse===void 0){recurse=false;}var tmp=fetch(what,where,recurse);// @ts-ignore
if(tmp)obj[prop]=tmp;}function isValidFeed(value){return value==="rss"||value==="feed"||value==="rdf:RDF";}var defaultOptions={xmlMode:true};/**
 * Parse a feed.
 *
 * @param feed The feed that should be parsed, as a string.
 * @param options Optionally, options for parsing. When using this option, you probably want to set `xmlMode` to `true`.
 */function parseFeed(feed,options){if(options===void 0){options=defaultOptions;}var handler=new FeedHandler(options);new Parser_1.Parser(handler,options).end(feed);return handler.feed;}exports.parseFeed=parseFeed;},{"./Parser":29,"domhandler":7,"domutils":10}],28:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});/**
 * Calls a specific handler function for all events that are encountered.
 *
 * @param func — The function to multiplex all events to.
 */var MultiplexHandler=/** @class */function(){function MultiplexHandler(func){this._func=func;}/* Format: eventname: number of arguments */MultiplexHandler.prototype.onattribute=function(name,value){this._func("onattribute",name,value);};MultiplexHandler.prototype.oncdatastart=function(){this._func("oncdatastart");};MultiplexHandler.prototype.oncdataend=function(){this._func("oncdataend");};MultiplexHandler.prototype.ontext=function(text){this._func("ontext",text);};MultiplexHandler.prototype.onprocessinginstruction=function(name,value){this._func("onprocessinginstruction",name,value);};MultiplexHandler.prototype.oncomment=function(comment){this._func("oncomment",comment);};MultiplexHandler.prototype.oncommentend=function(){this._func("oncommentend");};MultiplexHandler.prototype.onclosetag=function(name){this._func("onclosetag",name);};MultiplexHandler.prototype.onopentag=function(name,attribs){this._func("onopentag",name,attribs);};MultiplexHandler.prototype.onopentagname=function(name){this._func("onopentagname",name);};MultiplexHandler.prototype.onerror=function(error){this._func("onerror",error);};MultiplexHandler.prototype.onend=function(){this._func("onend");};MultiplexHandler.prototype.onparserinit=function(parser){this._func("onparserinit",parser);};MultiplexHandler.prototype.onreset=function(){this._func("onreset");};return MultiplexHandler;}();exports["default"]=MultiplexHandler;},{}],29:[function(require,module,exports){"use strict";var __extends=this&&this.__extends||function(){var _extendStatics4=function extendStatics(d,b){_extendStatics4=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b){if(b.hasOwnProperty(p))d[p]=b[p];}};return _extendStatics4(d,b);};return function(d,b){_extendStatics4(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod};};Object.defineProperty(exports,"__esModule",{value:true});var Tokenizer_1=__importDefault(require("./Tokenizer"));var events_1=require("events");var formTags=new Set(["input","option","optgroup","select","button","datalist","textarea"]);var pTag=new Set(["p"]);var openImpliesClose={tr:new Set(["tr","th","td"]),th:new Set(["th"]),td:new Set(["thead","th","td"]),body:new Set(["head","link","script"]),li:new Set(["li"]),p:pTag,h1:pTag,h2:pTag,h3:pTag,h4:pTag,h5:pTag,h6:pTag,select:formTags,input:formTags,output:formTags,button:formTags,datalist:formTags,textarea:formTags,option:new Set(["option"]),optgroup:new Set(["optgroup","option"]),dd:new Set(["dt","dd"]),dt:new Set(["dt","dd"]),address:pTag,article:pTag,aside:pTag,blockquote:pTag,details:pTag,div:pTag,dl:pTag,fieldset:pTag,figcaption:pTag,figure:pTag,footer:pTag,form:pTag,header:pTag,hr:pTag,main:pTag,nav:pTag,ol:pTag,pre:pTag,section:pTag,table:pTag,ul:pTag,rt:new Set(["rt","rp"]),rp:new Set(["rt","rp"]),tbody:new Set(["thead","tbody"]),tfoot:new Set(["thead","tbody"])};var voidElements=new Set(["area","base","basefont","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr"]);var foreignContextElements=new Set(["math","svg"]);var htmlIntegrationElements=new Set(["mi","mo","mn","ms","mtext","annotation-xml","foreignObject","desc","title"]);var reNameEnd=/\s|\//;var Parser=/** @class */function(_super){__extends(Parser,_super);function Parser(cbs,options){var _this=_super.call(this)||this;_this._tagname="";_this._attribname="";_this._attribvalue="";_this._attribs=null;_this._stack=[];_this._foreignContext=[];_this.startIndex=0;_this.endIndex=null;// Aliases for backwards compatibility
_this.parseChunk=Parser.prototype.write;_this.done=Parser.prototype.end;_this._options=options||{};_this._cbs=cbs||{};_this._tagname="";_this._attribname="";_this._attribvalue="";_this._attribs=null;_this._stack=[];_this._foreignContext=[];_this.startIndex=0;_this.endIndex=null;_this._lowerCaseTagNames="lowerCaseTags"in _this._options?!!_this._options.lowerCaseTags:!_this._options.xmlMode;_this._lowerCaseAttributeNames="lowerCaseAttributeNames"in _this._options?!!_this._options.lowerCaseAttributeNames:!_this._options.xmlMode;_this._tokenizer=new(_this._options.Tokenizer||Tokenizer_1["default"])(_this._options,_this);if(_this._cbs.onparserinit)_this._cbs.onparserinit(_this);return _this;}Parser.prototype._updatePosition=function(initialOffset){if(this.endIndex===null){if(this._tokenizer._sectionStart<=initialOffset){this.startIndex=0;}else{this.startIndex=this._tokenizer._sectionStart-initialOffset;}}else this.startIndex=this.endIndex+1;this.endIndex=this._tokenizer.getAbsoluteIndex();};//Tokenizer event handlers
Parser.prototype.ontext=function(data){this._updatePosition(1);// @ts-ignore
this.endIndex--;if(this._cbs.ontext)this._cbs.ontext(data);};Parser.prototype.onopentagname=function(name){if(this._lowerCaseTagNames){name=name.toLowerCase();}this._tagname=name;if(!this._options.xmlMode&&Object.prototype.hasOwnProperty.call(openImpliesClose,name)){for(var el=void 0;// @ts-ignore
openImpliesClose[name].has(el=this._stack[this._stack.length-1]);this.onclosetag(el)){;}}if(this._options.xmlMode||!voidElements.has(name)){this._stack.push(name);if(foreignContextElements.has(name)){this._foreignContext.push(true);}else if(htmlIntegrationElements.has(name)){this._foreignContext.push(false);}}if(this._cbs.onopentagname)this._cbs.onopentagname(name);if(this._cbs.onopentag)this._attribs={};};Parser.prototype.onopentagend=function(){this._updatePosition(1);if(this._attribs){if(this._cbs.onopentag){this._cbs.onopentag(this._tagname,this._attribs);}this._attribs=null;}if(!this._options.xmlMode&&this._cbs.onclosetag&&voidElements.has(this._tagname)){this._cbs.onclosetag(this._tagname);}this._tagname="";};Parser.prototype.onclosetag=function(name){this._updatePosition(1);if(this._lowerCaseTagNames){name=name.toLowerCase();}if(foreignContextElements.has(name)||htmlIntegrationElements.has(name)){this._foreignContext.pop();}if(this._stack.length&&(this._options.xmlMode||!voidElements.has(name))){var pos=this._stack.lastIndexOf(name);if(pos!==-1){if(this._cbs.onclosetag){pos=this._stack.length-pos;// @ts-ignore
while(pos--){this._cbs.onclosetag(this._stack.pop());}}else this._stack.length=pos;}else if(name==="p"&&!this._options.xmlMode){this.onopentagname(name);this._closeCurrentTag();}}else if(!this._options.xmlMode&&(name==="br"||name==="p")){this.onopentagname(name);this._closeCurrentTag();}};Parser.prototype.onselfclosingtag=function(){if(this._options.xmlMode||this._options.recognizeSelfClosing||this._foreignContext[this._foreignContext.length-1]){this._closeCurrentTag();}else{this.onopentagend();}};Parser.prototype._closeCurrentTag=function(){var name=this._tagname;this.onopentagend();//self-closing tags will be on the top of the stack
//(cheaper check than in onclosetag)
if(this._stack[this._stack.length-1]===name){if(this._cbs.onclosetag){this._cbs.onclosetag(name);}this._stack.pop();}};Parser.prototype.onattribname=function(name){if(this._lowerCaseAttributeNames){name=name.toLowerCase();}this._attribname=name;};Parser.prototype.onattribdata=function(value){this._attribvalue+=value;};Parser.prototype.onattribend=function(){if(this._cbs.onattribute)this._cbs.onattribute(this._attribname,this._attribvalue);if(this._attribs&&!Object.prototype.hasOwnProperty.call(this._attribs,this._attribname)){this._attribs[this._attribname]=this._attribvalue;}this._attribname="";this._attribvalue="";};Parser.prototype._getInstructionName=function(value){var idx=value.search(reNameEnd);var name=idx<0?value:value.substr(0,idx);if(this._lowerCaseTagNames){name=name.toLowerCase();}return name;};Parser.prototype.ondeclaration=function(value){if(this._cbs.onprocessinginstruction){var name_1=this._getInstructionName(value);this._cbs.onprocessinginstruction("!"+name_1,"!"+value);}};Parser.prototype.onprocessinginstruction=function(value){if(this._cbs.onprocessinginstruction){var name_2=this._getInstructionName(value);this._cbs.onprocessinginstruction("?"+name_2,"?"+value);}};Parser.prototype.oncomment=function(value){this._updatePosition(4);if(this._cbs.oncomment)this._cbs.oncomment(value);if(this._cbs.oncommentend)this._cbs.oncommentend();};Parser.prototype.oncdata=function(value){this._updatePosition(1);if(this._options.xmlMode||this._options.recognizeCDATA){if(this._cbs.oncdatastart)this._cbs.oncdatastart();if(this._cbs.ontext)this._cbs.ontext(value);if(this._cbs.oncdataend)this._cbs.oncdataend();}else{this.oncomment("[CDATA["+value+"]]");}};Parser.prototype.onerror=function(err){if(this._cbs.onerror)this._cbs.onerror(err);};Parser.prototype.onend=function(){if(this._cbs.onclosetag){for(var i=this._stack.length;i>0;this._cbs.onclosetag(this._stack[--i])){;}}if(this._cbs.onend)this._cbs.onend();};//Resets the parser to a blank state, ready to parse a new HTML document
Parser.prototype.reset=function(){if(this._cbs.onreset)this._cbs.onreset();this._tokenizer.reset();this._tagname="";this._attribname="";this._attribs=null;this._stack=[];if(this._cbs.onparserinit)this._cbs.onparserinit(this);};//Parses a complete HTML document and pushes it to the handler
Parser.prototype.parseComplete=function(data){this.reset();this.end(data);};Parser.prototype.write=function(chunk){this._tokenizer.write(chunk);};Parser.prototype.end=function(chunk){this._tokenizer.end(chunk);};Parser.prototype.pause=function(){this._tokenizer.pause();};Parser.prototype.resume=function(){this._tokenizer.resume();};return Parser;}(events_1.EventEmitter);exports.Parser=Parser;},{"./Tokenizer":30,"events":25}],30:[function(require,module,exports){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod};};Object.defineProperty(exports,"__esModule",{value:true});var decode_codepoint_1=__importDefault(require("entities/lib/decode_codepoint"));var entities_json_1=__importDefault(require("entities/lib/maps/entities.json"));var legacy_json_1=__importDefault(require("entities/lib/maps/legacy.json"));var xml_json_1=__importDefault(require("entities/lib/maps/xml.json"));function whitespace(c){return c===" "||c==="\n"||c==="\t"||c==="\f"||c==="\r";}function ifElseState(upper,SUCCESS,FAILURE){var lower=upper.toLowerCase();if(upper===lower){return function(t,c){if(c===lower){t._state=SUCCESS;}else{t._state=FAILURE;t._index--;}};}else{return function(t,c){if(c===lower||c===upper){t._state=SUCCESS;}else{t._state=FAILURE;t._index--;}};}}function consumeSpecialNameChar(upper,NEXT_STATE){var lower=upper.toLowerCase();return function(t,c){if(c===lower||c===upper){t._state=NEXT_STATE;}else{t._state=3/* InTagName */;t._index--;//consume the token again
}};}var stateBeforeCdata1=ifElseState("C",23/* BeforeCdata2 */,16/* InDeclaration */);var stateBeforeCdata2=ifElseState("D",24/* BeforeCdata3 */,16/* InDeclaration */);var stateBeforeCdata3=ifElseState("A",25/* BeforeCdata4 */,16/* InDeclaration */);var stateBeforeCdata4=ifElseState("T",26/* BeforeCdata5 */,16/* InDeclaration */);var stateBeforeCdata5=ifElseState("A",27/* BeforeCdata6 */,16/* InDeclaration */);var stateBeforeScript1=consumeSpecialNameChar("R",34/* BeforeScript2 */);var stateBeforeScript2=consumeSpecialNameChar("I",35/* BeforeScript3 */);var stateBeforeScript3=consumeSpecialNameChar("P",36/* BeforeScript4 */);var stateBeforeScript4=consumeSpecialNameChar("T",37/* BeforeScript5 */);var stateAfterScript1=ifElseState("R",39/* AfterScript2 */,1/* Text */);var stateAfterScript2=ifElseState("I",40/* AfterScript3 */,1/* Text */);var stateAfterScript3=ifElseState("P",41/* AfterScript4 */,1/* Text */);var stateAfterScript4=ifElseState("T",42/* AfterScript5 */,1/* Text */);var stateBeforeStyle1=consumeSpecialNameChar("Y",44/* BeforeStyle2 */);var stateBeforeStyle2=consumeSpecialNameChar("L",45/* BeforeStyle3 */);var stateBeforeStyle3=consumeSpecialNameChar("E",46/* BeforeStyle4 */);var stateAfterStyle1=ifElseState("Y",48/* AfterStyle2 */,1/* Text */);var stateAfterStyle2=ifElseState("L",49/* AfterStyle3 */,1/* Text */);var stateAfterStyle3=ifElseState("E",50/* AfterStyle4 */,1/* Text */);var stateBeforeEntity=ifElseState("#",52/* BeforeNumericEntity */,53/* InNamedEntity */);var stateBeforeNumericEntity=ifElseState("X",55/* InHexEntity */,54/* InNumericEntity */);var Tokenizer=/** @class */function(){function Tokenizer(options,cbs){/** The current state the tokenizer is in. */this._state=1/* Text */;/** The read buffer. */this._buffer="";/** The beginning of the section that is currently being read. */this._sectionStart=0;/** The index within the buffer that we are currently looking at. */this._index=0;/**
         * Data that has already been processed will be removed from the buffer occasionally.
         * `_bufferOffset` keeps track of how many characters have been removed, to make sure position information is accurate.
         */this._bufferOffset=0;/** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */this._baseState=1/* Text */;/** For special parsing behavior inside of script and style tags. */this._special=1/* None */;/** Indicates whether the tokenizer has been paused. */this._running=true;/** Indicates whether the tokenizer has finished running / `.end` has been called. */this._ended=false;this._cbs=cbs;this._xmlMode=!!(options&&options.xmlMode);this._decodeEntities=!!(options&&options.decodeEntities);}Tokenizer.prototype.reset=function(){this._state=1/* Text */;this._buffer="";this._sectionStart=0;this._index=0;this._bufferOffset=0;this._baseState=1/* Text */;this._special=1/* None */;this._running=true;this._ended=false;};Tokenizer.prototype._stateText=function(c){if(c==="<"){if(this._index>this._sectionStart){this._cbs.ontext(this._getSection());}this._state=2/* BeforeTagName */;this._sectionStart=this._index;}else if(this._decodeEntities&&this._special===1/* None */&&c==="&"){if(this._index>this._sectionStart){this._cbs.ontext(this._getSection());}this._baseState=1/* Text */;this._state=51/* BeforeEntity */;this._sectionStart=this._index;}};Tokenizer.prototype._stateBeforeTagName=function(c){if(c==="/"){this._state=5/* BeforeClosingTagName */;}else if(c==="<"){this._cbs.ontext(this._getSection());this._sectionStart=this._index;}else if(c===">"||this._special!==1/* None */||whitespace(c)){this._state=1/* Text */;}else if(c==="!"){this._state=15/* BeforeDeclaration */;this._sectionStart=this._index+1;}else if(c==="?"){this._state=17/* InProcessingInstruction */;this._sectionStart=this._index+1;}else{this._state=!this._xmlMode&&(c==="s"||c==="S")?31/* BeforeSpecial */:3/* InTagName */;this._sectionStart=this._index;}};Tokenizer.prototype._stateInTagName=function(c){if(c==="/"||c===">"||whitespace(c)){this._emitToken("onopentagname");this._state=8/* BeforeAttributeName */;this._index--;}};Tokenizer.prototype._stateBeforeClosingTagName=function(c){if(whitespace(c)){// ignore
}else if(c===">"){this._state=1/* Text */;}else if(this._special!==1/* None */){if(c==="s"||c==="S"){this._state=32/* BeforeSpecialEnd */;}else{this._state=1/* Text */;this._index--;}}else{this._state=6/* InClosingTagName */;this._sectionStart=this._index;}};Tokenizer.prototype._stateInClosingTagName=function(c){if(c===">"||whitespace(c)){this._emitToken("onclosetag");this._state=7/* AfterClosingTagName */;this._index--;}};Tokenizer.prototype._stateAfterClosingTagName=function(c){//skip everything until ">"
if(c===">"){this._state=1/* Text */;this._sectionStart=this._index+1;}};Tokenizer.prototype._stateBeforeAttributeName=function(c){if(c===">"){this._cbs.onopentagend();this._state=1/* Text */;this._sectionStart=this._index+1;}else if(c==="/"){this._state=4/* InSelfClosingTag */;}else if(!whitespace(c)){this._state=9/* InAttributeName */;this._sectionStart=this._index;}};Tokenizer.prototype._stateInSelfClosingTag=function(c){if(c===">"){this._cbs.onselfclosingtag();this._state=1/* Text */;this._sectionStart=this._index+1;}else if(!whitespace(c)){this._state=8/* BeforeAttributeName */;this._index--;}};Tokenizer.prototype._stateInAttributeName=function(c){if(c==="="||c==="/"||c===">"||whitespace(c)){this._cbs.onattribname(this._getSection());this._sectionStart=-1;this._state=10/* AfterAttributeName */;this._index--;}};Tokenizer.prototype._stateAfterAttributeName=function(c){if(c==="="){this._state=11/* BeforeAttributeValue */;}else if(c==="/"||c===">"){this._cbs.onattribend();this._state=8/* BeforeAttributeName */;this._index--;}else if(!whitespace(c)){this._cbs.onattribend();this._state=9/* InAttributeName */;this._sectionStart=this._index;}};Tokenizer.prototype._stateBeforeAttributeValue=function(c){if(c==='"'){this._state=12/* InAttributeValueDq */;this._sectionStart=this._index+1;}else if(c==="'"){this._state=13/* InAttributeValueSq */;this._sectionStart=this._index+1;}else if(!whitespace(c)){this._state=14/* InAttributeValueNq */;this._sectionStart=this._index;this._index--;//reconsume token
}};Tokenizer.prototype._stateInAttributeValueDoubleQuotes=function(c){if(c==='"'){this._emitToken("onattribdata");this._cbs.onattribend();this._state=8/* BeforeAttributeName */;}else if(this._decodeEntities&&c==="&"){this._emitToken("onattribdata");this._baseState=this._state;this._state=51/* BeforeEntity */;this._sectionStart=this._index;}};Tokenizer.prototype._stateInAttributeValueSingleQuotes=function(c){if(c==="'"){this._emitToken("onattribdata");this._cbs.onattribend();this._state=8/* BeforeAttributeName */;}else if(this._decodeEntities&&c==="&"){this._emitToken("onattribdata");this._baseState=this._state;this._state=51/* BeforeEntity */;this._sectionStart=this._index;}};Tokenizer.prototype._stateInAttributeValueNoQuotes=function(c){if(whitespace(c)||c===">"){this._emitToken("onattribdata");this._cbs.onattribend();this._state=8/* BeforeAttributeName */;this._index--;}else if(this._decodeEntities&&c==="&"){this._emitToken("onattribdata");this._baseState=this._state;this._state=51/* BeforeEntity */;this._sectionStart=this._index;}};Tokenizer.prototype._stateBeforeDeclaration=function(c){this._state=c==="["?22/* BeforeCdata1 */:c==="-"?18/* BeforeComment */:16/* InDeclaration */;};Tokenizer.prototype._stateInDeclaration=function(c){if(c===">"){this._cbs.ondeclaration(this._getSection());this._state=1/* Text */;this._sectionStart=this._index+1;}};Tokenizer.prototype._stateInProcessingInstruction=function(c){if(c===">"){this._cbs.onprocessinginstruction(this._getSection());this._state=1/* Text */;this._sectionStart=this._index+1;}};Tokenizer.prototype._stateBeforeComment=function(c){if(c==="-"){this._state=19/* InComment */;this._sectionStart=this._index+1;}else{this._state=16/* InDeclaration */;}};Tokenizer.prototype._stateInComment=function(c){if(c==="-")this._state=20/* AfterComment1 */;};Tokenizer.prototype._stateAfterComment1=function(c){if(c==="-"){this._state=21/* AfterComment2 */;}else{this._state=19/* InComment */;}};Tokenizer.prototype._stateAfterComment2=function(c){if(c===">"){//remove 2 trailing chars
this._cbs.oncomment(this._buffer.substring(this._sectionStart,this._index-2));this._state=1/* Text */;this._sectionStart=this._index+1;}else if(c!=="-"){this._state=19/* InComment */;}// else: stay in AFTER_COMMENT_2 (`--->`)
};Tokenizer.prototype._stateBeforeCdata6=function(c){if(c==="["){this._state=28/* InCdata */;this._sectionStart=this._index+1;}else{this._state=16/* InDeclaration */;this._index--;}};Tokenizer.prototype._stateInCdata=function(c){if(c==="]")this._state=29/* AfterCdata1 */;};Tokenizer.prototype._stateAfterCdata1=function(c){if(c==="]")this._state=30/* AfterCdata2 */;else this._state=28/* InCdata */;};Tokenizer.prototype._stateAfterCdata2=function(c){if(c===">"){//remove 2 trailing chars
this._cbs.oncdata(this._buffer.substring(this._sectionStart,this._index-2));this._state=1/* Text */;this._sectionStart=this._index+1;}else if(c!=="]"){this._state=28/* InCdata */;}//else: stay in AFTER_CDATA_2 (`]]]>`)
};Tokenizer.prototype._stateBeforeSpecial=function(c){if(c==="c"||c==="C"){this._state=33/* BeforeScript1 */;}else if(c==="t"||c==="T"){this._state=43/* BeforeStyle1 */;}else{this._state=3/* InTagName */;this._index--;//consume the token again
}};Tokenizer.prototype._stateBeforeSpecialEnd=function(c){if(this._special===2/* Script */&&(c==="c"||c==="C")){this._state=38/* AfterScript1 */;}else if(this._special===3/* Style */&&(c==="t"||c==="T")){this._state=47/* AfterStyle1 */;}else this._state=1/* Text */;};Tokenizer.prototype._stateBeforeScript5=function(c){if(c==="/"||c===">"||whitespace(c)){this._special=2/* Script */;}this._state=3/* InTagName */;this._index--;//consume the token again
};Tokenizer.prototype._stateAfterScript5=function(c){if(c===">"||whitespace(c)){this._special=1/* None */;this._state=6/* InClosingTagName */;this._sectionStart=this._index-6;this._index--;//reconsume the token
}else this._state=1/* Text */;};Tokenizer.prototype._stateBeforeStyle4=function(c){if(c==="/"||c===">"||whitespace(c)){this._special=3/* Style */;}this._state=3/* InTagName */;this._index--;//consume the token again
};Tokenizer.prototype._stateAfterStyle4=function(c){if(c===">"||whitespace(c)){this._special=1/* None */;this._state=6/* InClosingTagName */;this._sectionStart=this._index-5;this._index--;//reconsume the token
}else this._state=1/* Text */;};//for entities terminated with a semicolon
Tokenizer.prototype._parseNamedEntityStrict=function(){//offset = 1
if(this._sectionStart+1<this._index){var entity=this._buffer.substring(this._sectionStart+1,this._index),map=this._xmlMode?xml_json_1["default"]:entities_json_1["default"];if(Object.prototype.hasOwnProperty.call(map,entity)){// @ts-ignore
this._emitPartial(map[entity]);this._sectionStart=this._index+1;}}};//parses legacy entities (without trailing semicolon)
Tokenizer.prototype._parseLegacyEntity=function(){var start=this._sectionStart+1;var limit=this._index-start;if(limit>6)limit=6;// The max length of legacy entities is 6
while(limit>=2){// The min length of legacy entities is 2
var entity=this._buffer.substr(start,limit);if(Object.prototype.hasOwnProperty.call(legacy_json_1["default"],entity)){// @ts-ignore
this._emitPartial(legacy_json_1["default"][entity]);this._sectionStart+=limit+1;return;}else{limit--;}}};Tokenizer.prototype._stateInNamedEntity=function(c){if(c===";"){this._parseNamedEntityStrict();if(this._sectionStart+1<this._index&&!this._xmlMode){this._parseLegacyEntity();}this._state=this._baseState;}else if((c<"a"||c>"z")&&(c<"A"||c>"Z")&&(c<"0"||c>"9")){if(this._xmlMode||this._sectionStart+1===this._index){// ignore
}else if(this._baseState!==1/* Text */){if(c!=="="){this._parseNamedEntityStrict();}}else{this._parseLegacyEntity();}this._state=this._baseState;this._index--;}};Tokenizer.prototype._decodeNumericEntity=function(offset,base){var sectionStart=this._sectionStart+offset;if(sectionStart!==this._index){//parse entity
var entity=this._buffer.substring(sectionStart,this._index);var parsed=parseInt(entity,base);this._emitPartial(decode_codepoint_1["default"](parsed));this._sectionStart=this._index;}else{this._sectionStart--;}this._state=this._baseState;};Tokenizer.prototype._stateInNumericEntity=function(c){if(c===";"){this._decodeNumericEntity(2,10);this._sectionStart++;}else if(c<"0"||c>"9"){if(!this._xmlMode){this._decodeNumericEntity(2,10);}else{this._state=this._baseState;}this._index--;}};Tokenizer.prototype._stateInHexEntity=function(c){if(c===";"){this._decodeNumericEntity(3,16);this._sectionStart++;}else if((c<"a"||c>"f")&&(c<"A"||c>"F")&&(c<"0"||c>"9")){if(!this._xmlMode){this._decodeNumericEntity(3,16);}else{this._state=this._baseState;}this._index--;}};Tokenizer.prototype._cleanup=function(){if(this._sectionStart<0){this._buffer="";this._bufferOffset+=this._index;this._index=0;}else if(this._running){if(this._state===1/* Text */){if(this._sectionStart!==this._index){this._cbs.ontext(this._buffer.substr(this._sectionStart));}this._buffer="";this._bufferOffset+=this._index;this._index=0;}else if(this._sectionStart===this._index){//the section just started
this._buffer="";this._bufferOffset+=this._index;this._index=0;}else{//remove everything unnecessary
this._buffer=this._buffer.substr(this._sectionStart);this._index-=this._sectionStart;this._bufferOffset+=this._sectionStart;}this._sectionStart=0;}};//TODO make events conditional
Tokenizer.prototype.write=function(chunk){if(this._ended)this._cbs.onerror(Error(".write() after done!"));this._buffer+=chunk;this._parse();};// Iterates through the buffer, calling the function corresponding to the current state.
// States that are more likely to be hit are higher up, as a performance improvement.
Tokenizer.prototype._parse=function(){while(this._index<this._buffer.length&&this._running){var c=this._buffer.charAt(this._index);if(this._state===1/* Text */){this._stateText(c);}else if(this._state===12/* InAttributeValueDq */){this._stateInAttributeValueDoubleQuotes(c);}else if(this._state===9/* InAttributeName */){this._stateInAttributeName(c);}else if(this._state===19/* InComment */){this._stateInComment(c);}else if(this._state===8/* BeforeAttributeName */){this._stateBeforeAttributeName(c);}else if(this._state===3/* InTagName */){this._stateInTagName(c);}else if(this._state===6/* InClosingTagName */){this._stateInClosingTagName(c);}else if(this._state===2/* BeforeTagName */){this._stateBeforeTagName(c);}else if(this._state===10/* AfterAttributeName */){this._stateAfterAttributeName(c);}else if(this._state===13/* InAttributeValueSq */){this._stateInAttributeValueSingleQuotes(c);}else if(this._state===11/* BeforeAttributeValue */){this._stateBeforeAttributeValue(c);}else if(this._state===5/* BeforeClosingTagName */){this._stateBeforeClosingTagName(c);}else if(this._state===7/* AfterClosingTagName */){this._stateAfterClosingTagName(c);}else if(this._state===31/* BeforeSpecial */){this._stateBeforeSpecial(c);}else if(this._state===20/* AfterComment1 */){this._stateAfterComment1(c);}else if(this._state===14/* InAttributeValueNq */){this._stateInAttributeValueNoQuotes(c);}else if(this._state===4/* InSelfClosingTag */){this._stateInSelfClosingTag(c);}else if(this._state===16/* InDeclaration */){this._stateInDeclaration(c);}else if(this._state===15/* BeforeDeclaration */){this._stateBeforeDeclaration(c);}else if(this._state===21/* AfterComment2 */){this._stateAfterComment2(c);}else if(this._state===18/* BeforeComment */){this._stateBeforeComment(c);}else if(this._state===32/* BeforeSpecialEnd */){this._stateBeforeSpecialEnd(c);}else if(this._state===38/* AfterScript1 */){stateAfterScript1(this,c);}else if(this._state===39/* AfterScript2 */){stateAfterScript2(this,c);}else if(this._state===40/* AfterScript3 */){stateAfterScript3(this,c);}else if(this._state===33/* BeforeScript1 */){stateBeforeScript1(this,c);}else if(this._state===34/* BeforeScript2 */){stateBeforeScript2(this,c);}else if(this._state===35/* BeforeScript3 */){stateBeforeScript3(this,c);}else if(this._state===36/* BeforeScript4 */){stateBeforeScript4(this,c);}else if(this._state===37/* BeforeScript5 */){this._stateBeforeScript5(c);}else if(this._state===41/* AfterScript4 */){stateAfterScript4(this,c);}else if(this._state===42/* AfterScript5 */){this._stateAfterScript5(c);}else if(this._state===43/* BeforeStyle1 */){stateBeforeStyle1(this,c);}else if(this._state===28/* InCdata */){this._stateInCdata(c);}else if(this._state===44/* BeforeStyle2 */){stateBeforeStyle2(this,c);}else if(this._state===45/* BeforeStyle3 */){stateBeforeStyle3(this,c);}else if(this._state===46/* BeforeStyle4 */){this._stateBeforeStyle4(c);}else if(this._state===47/* AfterStyle1 */){stateAfterStyle1(this,c);}else if(this._state===48/* AfterStyle2 */){stateAfterStyle2(this,c);}else if(this._state===49/* AfterStyle3 */){stateAfterStyle3(this,c);}else if(this._state===50/* AfterStyle4 */){this._stateAfterStyle4(c);}else if(this._state===17/* InProcessingInstruction */){this._stateInProcessingInstruction(c);}else if(this._state===53/* InNamedEntity */){this._stateInNamedEntity(c);}else if(this._state===22/* BeforeCdata1 */){stateBeforeCdata1(this,c);}else if(this._state===51/* BeforeEntity */){stateBeforeEntity(this,c);}else if(this._state===23/* BeforeCdata2 */){stateBeforeCdata2(this,c);}else if(this._state===24/* BeforeCdata3 */){stateBeforeCdata3(this,c);}else if(this._state===29/* AfterCdata1 */){this._stateAfterCdata1(c);}else if(this._state===30/* AfterCdata2 */){this._stateAfterCdata2(c);}else if(this._state===25/* BeforeCdata4 */){stateBeforeCdata4(this,c);}else if(this._state===26/* BeforeCdata5 */){stateBeforeCdata5(this,c);}else if(this._state===27/* BeforeCdata6 */){this._stateBeforeCdata6(c);}else if(this._state===55/* InHexEntity */){this._stateInHexEntity(c);}else if(this._state===54/* InNumericEntity */){this._stateInNumericEntity(c);}else if(this._state===52/* BeforeNumericEntity */){stateBeforeNumericEntity(this,c);}else{this._cbs.onerror(Error("unknown _state"),this._state);}this._index++;}this._cleanup();};Tokenizer.prototype.pause=function(){this._running=false;};Tokenizer.prototype.resume=function(){this._running=true;if(this._index<this._buffer.length){this._parse();}if(this._ended){this._finish();}};Tokenizer.prototype.end=function(chunk){if(this._ended)this._cbs.onerror(Error(".end() after done!"));if(chunk)this.write(chunk);this._ended=true;if(this._running)this._finish();};Tokenizer.prototype._finish=function(){//if there is remaining data, emit it in a reasonable way
if(this._sectionStart<this._index){this._handleTrailingData();}this._cbs.onend();};Tokenizer.prototype._handleTrailingData=function(){var data=this._buffer.substr(this._sectionStart);if(this._state===28/* InCdata */||this._state===29/* AfterCdata1 */||this._state===30/* AfterCdata2 */){this._cbs.oncdata(data);}else if(this._state===19/* InComment */||this._state===20/* AfterComment1 */||this._state===21/* AfterComment2 */){this._cbs.oncomment(data);}else if(this._state===53/* InNamedEntity */&&!this._xmlMode){this._parseLegacyEntity();if(this._sectionStart<this._index){this._state=this._baseState;this._handleTrailingData();}}else if(this._state===54/* InNumericEntity */&&!this._xmlMode){this._decodeNumericEntity(2,10);if(this._sectionStart<this._index){this._state=this._baseState;this._handleTrailingData();}}else if(this._state===55/* InHexEntity */&&!this._xmlMode){this._decodeNumericEntity(3,16);if(this._sectionStart<this._index){this._state=this._baseState;this._handleTrailingData();}}else if(this._state!==3/* InTagName */&&this._state!==8/* BeforeAttributeName */&&this._state!==11/* BeforeAttributeValue */&&this._state!==10/* AfterAttributeName */&&this._state!==9/* InAttributeName */&&this._state!==13/* InAttributeValueSq */&&this._state!==12/* InAttributeValueDq */&&this._state!==14/* InAttributeValueNq */&&this._state!==6/* InClosingTagName */){this._cbs.ontext(data);}//else, ignore remaining data
//TODO add a way to remove current tag
};Tokenizer.prototype.getAbsoluteIndex=function(){return this._bufferOffset+this._index;};Tokenizer.prototype._getSection=function(){return this._buffer.substring(this._sectionStart,this._index);};Tokenizer.prototype._emitToken=function(name){this._cbs[name](this._getSection());this._sectionStart=-1;};Tokenizer.prototype._emitPartial=function(value){if(this._baseState!==1/* Text */){this._cbs.onattribdata(value);//TODO implement the new event
}else{this._cbs.ontext(value);}};return Tokenizer;}();exports["default"]=Tokenizer;},{"entities/lib/decode_codepoint":18,"entities/lib/maps/entities.json":22,"entities/lib/maps/legacy.json":23,"entities/lib/maps/xml.json":24}],31:[function(require,module,exports){"use strict";function __export(m){for(var p in m){if(!exports.hasOwnProperty(p))exports[p]=m[p];}}var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod){if(Object.hasOwnProperty.call(mod,k))result[k]=mod[k];}result["default"]=mod;return result;};Object.defineProperty(exports,"__esModule",{value:true});var Parser_1=require("./Parser");exports.Parser=Parser_1.Parser;var domhandler_1=require("domhandler");exports.DomHandler=domhandler_1.DomHandler;exports.DefaultHandler=domhandler_1.DomHandler;// Helper methods
/**
 * Parses data, returns the resulting DOM.
 *
 * @param data The data that should be parsed.
 * @param options Optional options for the parser and DOM builder.
 */function parseDOM(data,options){var handler=new domhandler_1.DomHandler(void 0,options);new Parser_1.Parser(handler,options).end(data);return handler.dom;}exports.parseDOM=parseDOM;/**
 * Creates a parser instance, with an attached DOM handler.
 *
 * @param cb A callback that will be called once parsing has been completed.
 * @param options Optional options for the parser and DOM builder.
 * @param elementCb An optional callback that will be called every time a tag has been completed inside of the DOM.
 */function createDomStream(cb,options,elementCb){var handler=new domhandler_1.DomHandler(cb,options,elementCb);return new Parser_1.Parser(handler,options);}exports.createDomStream=createDomStream;var Tokenizer_1=require("./Tokenizer");exports.Tokenizer=Tokenizer_1["default"];var ElementType=__importStar(require("domelementtype"));exports.ElementType=ElementType;/**
 * List of all events that the parser emits.
 *
 * Format: eventname: number of arguments.
 */exports.EVENTS={attribute:2,cdatastart:0,cdataend:0,text:1,processinginstruction:2,comment:1,commentend:0,closetag:1,opentag:2,opentagname:1,error:1,end:0};/*
    All of the following exports exist for backwards-compatibility.
    They should probably be removed eventually.
*/__export(require("./FeedHandler"));__export(require("./WritableStream"));__export(require("./CollectingHandler"));var DomUtils=__importStar(require("domutils"));exports.DomUtils=DomUtils;var FeedHandler_1=require("./FeedHandler");exports.RssHandler=FeedHandler_1.FeedHandler;},{"./CollectingHandler":26,"./FeedHandler":27,"./Parser":29,"./Tokenizer":30,"./WritableStream":2,"domelementtype":6,"domhandler":7,"domutils":10}],32:[function(require,module,exports){exports.read=function(buffer,offset,isLE,mLen,nBytes){var e,m;var eLen=nBytes*8-mLen-1;var eMax=(1<<eLen)-1;var eBias=eMax>>1;var nBits=-7;var i=isLE?nBytes-1:0;var d=isLE?-1:1;var s=buffer[offset+i];i+=d;e=s&(1<<-nBits)-1;s>>=-nBits;nBits+=eLen;for(;nBits>0;e=e*256+buffer[offset+i],i+=d,nBits-=8){}m=e&(1<<-nBits)-1;e>>=-nBits;nBits+=mLen;for(;nBits>0;m=m*256+buffer[offset+i],i+=d,nBits-=8){}if(e===0){e=1-eBias;}else if(e===eMax){return m?NaN:(s?-1:1)*Infinity;}else{m=m+Math.pow(2,mLen);e=e-eBias;}return(s?-1:1)*m*Math.pow(2,e-mLen);};exports.write=function(buffer,value,offset,isLE,mLen,nBytes){var e,m,c;var eLen=nBytes*8-mLen-1;var eMax=(1<<eLen)-1;var eBias=eMax>>1;var rt=mLen===23?Math.pow(2,-24)-Math.pow(2,-77):0;var i=isLE?0:nBytes-1;var d=isLE?1:-1;var s=value<0||value===0&&1/value<0?1:0;value=Math.abs(value);if(isNaN(value)||value===Infinity){m=isNaN(value)?1:0;e=eMax;}else{e=Math.floor(Math.log(value)/Math.LN2);if(value*(c=Math.pow(2,-e))<1){e--;c*=2;}if(e+eBias>=1){value+=rt/c;}else{value+=rt*Math.pow(2,1-eBias);}if(value*c>=2){e++;c/=2;}if(e+eBias>=eMax){m=0;e=eMax;}else if(e+eBias>=1){m=(value*c-1)*Math.pow(2,mLen);e=e+eBias;}else{m=value*Math.pow(2,eBias-1)*Math.pow(2,mLen);e=0;}}for(;mLen>=8;buffer[offset+i]=m&0xff,i+=d,m/=256,mLen-=8){}e=e<<mLen|m;eLen+=mLen;for(;eLen>0;buffer[offset+i]=e&0xff,i+=d,e/=256,eLen-=8){}buffer[offset+i-d]|=s*128;};},{}],33:[function(require,module,exports){(function(global){/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER=9007199254740991;/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',funcTag='[object Function]',genTag='[object GeneratorFunction]',mapTag='[object Map]',numberTag='[object Number]',objectTag='[object Object]',promiseTag='[object Promise]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]',weakMapTag='[object WeakMap]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g;/** Used to match `RegExp` flags from their coerced string values. */var reFlags=/\w*$/;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/** Used to identify `toStringTag` values supported by `_.clone`. */var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=true;cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=false;/** Detect free variable `global` from Node.js. */var freeGlobal=_typeof(global)=='object'&&global&&global.Object===Object&&global;/** Detect free variable `self`. */var freeSelf=(typeof self==="undefined"?"undefined":_typeof(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();/** Detect free variable `exports`. */var freeExports=_typeof(exports)=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&_typeof(module)=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */function addMapEntry(map,pair){// Don't return `map.set` because it's not chainable in IE 11.
map.set(pair[0],pair[1]);return map;}/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */function addSetEntry(set,value){// Don't return `set.add` because it's not chainable in IE 11.
set.add(value);return set;}/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */function arrayEach(array,iteratee){var index=-1,length=array?array.length:0;while(++index<length){if(iteratee(array[index],index,array)===false){break;}}return array;}/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=array?array.length:0;if(initAccum&&length){accumulator=array[++index];}while(++index<length){accumulator=iteratee(accumulator,array[index],index,array);}return accumulator;}/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function getValue(object,key){return object==null?undefined:object[key];}/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */function isHostObject(value){// Many host objects are `Object` objects that can coerce to strings
// despite having improperly defined `toString` methods.
var result=false;if(value!=null&&typeof value.toString!='function'){try{result=!!(value+'');}catch(e){}}return result;}/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result;}/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */function overArg(func,transform){return function(arg){return func(transform(arg));};}/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}/** Used for built-in method references. */var arrayProto=Array.prototype,funcProto=Function.prototype,objectProto=Object.prototype;/** Used to detect overreaching core-js shims. */var coreJsData=root['__core-js_shared__'];/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var objectToString=objectProto.toString;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/** Built-in value references. */var Buffer=moduleExports?root.Buffer:undefined,_Symbol=root.Symbol,Uint8Array=root.Uint8Array,getPrototype=overArg(Object.getPrototypeOf,Object),objectCreate=Object.create,propertyIsEnumerable=objectProto.propertyIsEnumerable,splice=arrayProto.splice;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeGetSymbols=Object.getOwnPropertySymbols,nativeIsBuffer=Buffer?Buffer.isBuffer:undefined,nativeKeys=overArg(Object.keys,Object);/* Built-in method references that are verified to be native. */var DataView=getNative(root,'DataView'),Map=getNative(root,'Map'),Promise=getNative(root,'Promise'),Set=getNative(root,'Set'),WeakMap=getNative(root,'WeakMap'),nativeCreate=getNative(Object,'create');/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);/** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol?_Symbol.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined;/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Hash(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};}/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function hashDelete(key){return this.has(key)&&delete this.__data__[key];}/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result;}return hasOwnProperty.call(data,key)?data[key]:undefined;}/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty.call(data,key);}/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */function hashSet(key,value){var data=this.__data__;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value;return this;}// Add methods to `Hash`.
Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function ListCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */function listCacheClear(){this.__data__=[];}/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}return true;}/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){data.push([key,value]);}else{data[index][1]=value;}return this;}// Add methods to `ListCache`.
ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function MapCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */function mapCacheClear(){this.__data__={'hash':new Hash(),'map':new(Map||ListCache)(),'string':new Hash()};}/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function mapCacheDelete(key){return getMapData(this,key)['delete'](key);}/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function mapCacheGet(key){return getMapData(this,key).get(key);}/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function mapCacheHas(key){return getMapData(this,key).has(key);}/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */function mapCacheSet(key,value){getMapData(this,key).set(key,value);return this;}// Add methods to `MapCache`.
MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Stack(entries){this.__data__=new ListCache(entries);}/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */function stackClear(){this.__data__=new ListCache();}/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function stackDelete(key){return this.__data__['delete'](key);}/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function stackGet(key){return this.__data__.get(key);}/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function stackHas(key){return this.__data__.has(key);}/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */function stackSet(key,value){var cache=this.__data__;if(cache instanceof ListCache){var pairs=cache.__data__;if(!Map||pairs.length<LARGE_ARRAY_SIZE-1){pairs.push([key,value]);return this;}cache=this.__data__=new MapCache(pairs);}cache.set(key,value);return this;}// Add methods to `Stack`.
Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function arrayLikeKeys(value,inherited){// Safari 8.1 makes `arguments.callee` enumerable in strict mode.
// Safari 9 makes `arguments.length` enumerable in strict mode.
var result=isArray(value)||isArguments(value)?baseTimes(value.length,String):[];var length=result.length,skipIndexes=!!length;for(var key in value){if((inherited||hasOwnProperty.call(value,key))&&!(skipIndexes&&(key=='length'||isIndex(key,length)))){result.push(key);}}return result;}/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||value===undefined&&!(key in object)){object[key]=value;}}/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return-1;}/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */function baseAssign(object,source){return object&&copyObject(source,keys(source),object);}/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */function baseClone(value,isDeep,isFull,customizer,key,object,stack){var result;if(customizer){result=object?customizer(value,key,object,stack):customizer(value);}if(result!==undefined){return result;}if(!isObject(value)){return value;}var isArr=isArray(value);if(isArr){result=initCloneArray(value);if(!isDeep){return copyArray(value,result);}}else{var tag=getTag(value),isFunc=tag==funcTag||tag==genTag;if(isBuffer(value)){return cloneBuffer(value,isDeep);}if(tag==objectTag||tag==argsTag||isFunc&&!object){if(isHostObject(value)){return object?value:{};}result=initCloneObject(isFunc?{}:value);if(!isDeep){return copySymbols(value,baseAssign(result,value));}}else{if(!cloneableTags[tag]){return object?value:{};}result=initCloneByTag(value,tag,baseClone,isDeep);}}// Check for circular references and return its corresponding clone.
stack||(stack=new Stack());var stacked=stack.get(value);if(stacked){return stacked;}stack.set(value,result);if(!isArr){var props=isFull?getAllKeys(value):keys(value);}arrayEach(props||value,function(subValue,key){if(props){key=subValue;subValue=value[key];}// Recursively populate clone (susceptible to call stack limits).
assignValue(result,key,baseClone(subValue,isDeep,isFull,customizer,key,value,stack));});return result;}/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */function baseCreate(proto){return isObject(proto)?objectCreate(proto):{};}/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object));}/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function baseGetTag(value){return objectToString.call(value);}/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)||isHostObject(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function baseKeys(object){if(!isPrototype(object)){return nativeKeys(object);}var result=[];for(var key in Object(object)){if(hasOwnProperty.call(object,key)&&key!='constructor'){result.push(key);}}return result;}/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */function cloneBuffer(buffer,isDeep){if(isDeep){return buffer.slice();}var result=new buffer.constructor(buffer.length);buffer.copy(result);return result;}/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);new Uint8Array(result).set(new Uint8Array(arrayBuffer));return result;}/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */function cloneDataView(dataView,isDeep){var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength);}/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */function cloneMap(map,isDeep,cloneFunc){var array=isDeep?cloneFunc(mapToArray(map),true):mapToArray(map);return arrayReduce(array,addMapEntry,new map.constructor());}/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));result.lastIndex=regexp.lastIndex;return result;}/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */function cloneSet(set,isDeep,cloneFunc){var array=isDeep?cloneFunc(setToArray(set),true):setToArray(set);return arrayReduce(array,addSetEntry,new set.constructor());}/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */function cloneSymbol(symbol){return symbolValueOf?Object(symbolValueOf.call(symbol)):{};}/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length);}/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */function copyArray(source,array){var index=-1,length=source.length;array||(array=Array(length));while(++index<length){array[index]=source[index];}return array;}/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */function copyObject(source,props,object,customizer){object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):undefined;assignValue(object,key,newValue===undefined?source[key]:newValue);}return object;}/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */function copySymbols(source,object){return copyObject(source,getSymbols(source),object);}/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols);}/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */var getSymbols=nativeGetSymbols?overArg(nativeGetSymbols,Object):stubArray;/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */var getTag=baseGetTag;// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map())!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set())!=setTag||WeakMap&&getTag(new WeakMap())!=weakMapTag){getTag=function getTag(value){var result=objectToString.call(value),Ctor=result==objectTag?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):undefined;if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag;}}return result;};}/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */function initCloneArray(array){var length=array.length,result=array.constructor(length);// Add properties assigned by `RegExp#exec`.
if(length&&typeof array[0]=='string'&&hasOwnProperty.call(array,'index')){result.index=array.index;result.input=array.input;}return result;}/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */function initCloneObject(object){return typeof object.constructor=='function'&&!isPrototype(object)?baseCreate(getPrototype(object)):{};}/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */function initCloneByTag(object,tag,cloneFunc,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag:return cloneArrayBuffer(object);case boolTag:case dateTag:return new Ctor(+object);case dataViewTag:return cloneDataView(object,isDeep);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(object,isDeep);case mapTag:return cloneMap(object,isDeep,cloneFunc);case numberTag:case stringTag:return new Ctor(object);case regexpTag:return cloneRegExp(object);case setTag:return cloneSet(object,isDeep,cloneFunc);case symbolTag:return cloneSymbol(object);}}/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */function isIndex(value,length){length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(typeof value=='number'||reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */function isKeyable(value){var type=_typeof(value);return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;return value===proto;}/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */function cloneDeep(value){return baseClone(value,true,true);}/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */function eq(value,other){return value===other||value!==value&&other!==other;}/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */function isArguments(value){// Safari 8.1 makes `arguments.callee` enumerable in strict mode.
return isArrayLikeObject(value)&&hasOwnProperty.call(value,'callee')&&(!propertyIsEnumerable.call(value,'callee')||objectToString.call(value)==argsTag);}/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */var isArray=Array.isArray;/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value);}/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */var isBuffer=nativeIsBuffer||stubFalse;/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */function isFunction(value){// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 8-9 which returns 'object' for typed array and other constructors.
var tag=isObject(value)?objectToString.call(value):'';return tag==funcTag||tag==genTag;}/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function isObject(value){var type=_typeof(value);return!!value&&(type=='object'||type=='function');}/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function isObjectLike(value){return!!value&&_typeof(value)=='object';}/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object);}/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */function stubArray(){return[];}/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */function stubFalse(){return false;}module.exports=cloneDeep;}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{}],34:[function(require,module,exports){(function(global){/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as references for various `Number` constants. */var INFINITY=1/0;/** `Object#toString` result references. */var symbolTag='[object Symbol]';/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
 */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reHasRegExpChar=RegExp(reRegExpChar.source);/** Detect free variable `global` from Node.js. */var freeGlobal=_typeof(global)=='object'&&global&&global.Object===Object&&global;/** Detect free variable `self`. */var freeSelf=(typeof self==="undefined"?"undefined":_typeof(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();/** Used for built-in method references. */var objectProto=Object.prototype;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */var objectToString=objectProto.toString;/** Built-in value references. */var _Symbol2=root.Symbol;/** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol2?_Symbol2.prototype:undefined,symbolToString=symbolProto?symbolProto.toString:undefined;/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */function baseToString(value){// Exit early for strings to avoid a performance hit in some environments.
if(typeof value=='string'){return value;}if(isSymbol(value)){return symbolToString?symbolToString.call(value):'';}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function isObjectLike(value){return!!value&&_typeof(value)=='object';}/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */function isSymbol(value){return _typeof(value)=='symbol'||isObjectLike(value)&&objectToString.call(value)==symbolTag;}/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */function toString(value){return value==null?'':baseToString(value);}/**
 * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
 * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escapeRegExp('[lodash](https://lodash.com/)');
 * // => '\[lodash\]\(https://lodash\.com/\)'
 */function escapeRegExp(string){string=toString(string);return string&&reHasRegExpChar.test(string)?string.replace(reRegExpChar,'\\$&'):string;}module.exports=escapeRegExp;}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{}],35:[function(require,module,exports){/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** `Object#toString` result references. */var objectTag='[object Object]';/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */function isHostObject(value){// Many host objects are `Object` objects that can coerce to strings
// despite having improperly defined `toString` methods.
var result=false;if(value!=null&&typeof value.toString!='function'){try{result=!!(value+'');}catch(e){}}return result;}/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */function overArg(func,transform){return function(arg){return func(transform(arg));};}/** Used for built-in method references. */var funcProto=Function.prototype,objectProto=Object.prototype;/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Used to infer the `Object` constructor. */var objectCtorString=funcToString.call(Object);/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var objectToString=objectProto.toString;/** Built-in value references. */var getPrototype=overArg(Object.getPrototypeOf,Object);/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function isObjectLike(value){return!!value&&_typeof(value)=='object';}/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */function isPlainObject(value){if(!isObjectLike(value)||objectToString.call(value)!=objectTag||isHostObject(value)){return false;}var proto=getPrototype(value);if(proto===null){return true;}var Ctor=hasOwnProperty.call(proto,'constructor')&&proto.constructor;return typeof Ctor=='function'&&Ctor instanceof Ctor&&funcToString.call(Ctor)==objectCtorString;}module.exports=isPlainObject;},{}],36:[function(require,module,exports){/**
 * lodash 4.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */ /** `Object#toString` result references. */var stringTag='[object String]';/** Used for built-in method references. */var objectProto=Object.prototype;/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */var objectToString=objectProto.toString;/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @type Function
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */var isArray=Array.isArray;/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function isObjectLike(value){return!!value&&_typeof(value)=='object';}/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */function isString(value){return typeof value=='string'||!isArray(value)&&isObjectLike(value)&&objectToString.call(value)==stringTag;}module.exports=isString;},{}],37:[function(require,module,exports){(function(global){/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/** Used to detect hot functions by number of calls within a span of milliseconds. */var HOT_COUNT=800,HOT_SPAN=16;/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER=9007199254740991;/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',asyncTag='[object AsyncFunction]',boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',funcTag='[object Function]',genTag='[object GeneratorFunction]',mapTag='[object Map]',numberTag='[object Number]',nullTag='[object Null]',objectTag='[object Object]',proxyTag='[object Proxy]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',undefinedTag='[object Undefined]',weakMapTag='[object WeakMap]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/** Used to identify `toStringTag` values of typed arrays. */var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;/** Detect free variable `global` from Node.js. */var freeGlobal=_typeof(global)=='object'&&global&&global.Object===Object&&global;/** Detect free variable `self`. */var freeSelf=(typeof self==="undefined"?"undefined":_typeof(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();/** Detect free variable `exports`. */var freeExports=_typeof(exports)=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&_typeof(module)=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Detect free variable `process` from Node.js. */var freeProcess=moduleExports&&freeGlobal.process;/** Used to access faster Node.js helpers. */var nodeUtil=function(){try{// Use `util.types` for Node.js 10+.
var types=freeModule&&freeModule.require&&freeModule.require('util').types;if(types){return types;}// Legacy `process.binding('util')` for Node.js < 10.
return freeProcess&&freeProcess.binding&&freeProcess.binding('util');}catch(e){}}();/* Node.js helper references. */var nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray;/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2]);}return func.apply(thisArg,args);}/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */function baseUnary(func){return function(value){return func(value);};}/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function getValue(object,key){return object==null?undefined:object[key];}/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */function overArg(func,transform){return function(arg){return func(transform(arg));};}/** Used for built-in method references. */var arrayProto=Array.prototype,funcProto=Function.prototype,objectProto=Object.prototype;/** Used to detect overreaching core-js shims. */var coreJsData=root['__core-js_shared__'];/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var nativeObjectToString=objectProto.toString;/** Used to infer the `Object` constructor. */var objectCtorString=funcToString.call(Object);/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/** Built-in value references. */var Buffer=moduleExports?root.Buffer:undefined,_Symbol3=root.Symbol,Uint8Array=root.Uint8Array,allocUnsafe=Buffer?Buffer.allocUnsafe:undefined,getPrototype=overArg(Object.getPrototypeOf,Object),objectCreate=Object.create,propertyIsEnumerable=objectProto.propertyIsEnumerable,splice=arrayProto.splice,symToStringTag=_Symbol3?_Symbol3.toStringTag:undefined;var defineProperty=function(){try{var func=getNative(Object,'defineProperty');func({},'',{});return func;}catch(e){}}();/* Built-in method references for those with the same name as other `lodash` methods. */var nativeIsBuffer=Buffer?Buffer.isBuffer:undefined,nativeMax=Math.max,nativeNow=Date.now;/* Built-in method references that are verified to be native. */var Map=getNative(root,'Map'),nativeCreate=getNative(Object,'create');/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */var baseCreate=function(){function object(){}return function(proto){if(!isObject(proto)){return{};}if(objectCreate){return objectCreate(proto);}object.prototype=proto;var result=new object();object.prototype=undefined;return result;};}();/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Hash(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};this.size=0;}/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function hashDelete(key){var result=this.has(key)&&delete this.__data__[key];this.size-=result?1:0;return result;}/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result;}return hasOwnProperty.call(data,key)?data[key]:undefined;}/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty.call(data,key);}/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */function hashSet(key,value){var data=this.__data__;this.size+=this.has(key)?0:1;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value;return this;}// Add methods to `Hash`.
Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function ListCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */function listCacheClear(){this.__data__=[];this.size=0;}/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}--this.size;return true;}/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){++this.size;data.push([key,value]);}else{data[index][1]=value;}return this;}// Add methods to `ListCache`.
ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function MapCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */function mapCacheClear(){this.size=0;this.__data__={'hash':new Hash(),'map':new(Map||ListCache)(),'string':new Hash()};}/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function mapCacheDelete(key){var result=getMapData(this,key)['delete'](key);this.size-=result?1:0;return result;}/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function mapCacheGet(key){return getMapData(this,key).get(key);}/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function mapCacheHas(key){return getMapData(this,key).has(key);}/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */function mapCacheSet(key,value){var data=getMapData(this,key),size=data.size;data.set(key,value);this.size+=data.size==size?0:1;return this;}// Add methods to `MapCache`.
MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Stack(entries){var data=this.__data__=new ListCache(entries);this.size=data.size;}/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */function stackClear(){this.__data__=new ListCache();this.size=0;}/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function stackDelete(key){var data=this.__data__,result=data['delete'](key);this.size=data.size;return result;}/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function stackGet(key){return this.__data__.get(key);}/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function stackHas(key){return this.__data__.has(key);}/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */function stackSet(key,value){var data=this.__data__;if(data instanceof ListCache){var pairs=data.__data__;if(!Map||pairs.length<LARGE_ARRAY_SIZE-1){pairs.push([key,value]);this.size=++data.size;return this;}data=this.__data__=new MapCache(pairs);}data.set(key,value);this.size=data.size;return this;}// Add methods to `Stack`.
Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function arrayLikeKeys(value,inherited){var isArr=isArray(value),isArg=!isArr&&isArguments(value),isBuff=!isArr&&!isArg&&isBuffer(value),isType=!isArr&&!isArg&&!isBuff&&isTypedArray(value),skipIndexes=isArr||isArg||isBuff||isType,result=skipIndexes?baseTimes(value.length,String):[],length=result.length;for(var key in value){if((inherited||hasOwnProperty.call(value,key))&&!(skipIndexes&&(// Safari 9 has enumerable `arguments.length` in strict mode.
key=='length'||// Node.js 0.10 has enumerable non-index properties on buffers.
isBuff&&(key=='offset'||key=='parent')||// PhantomJS 2 has enumerable non-index properties on typed arrays.
isType&&(key=='buffer'||key=='byteLength'||key=='byteOffset')||// Skip index properties.
isIndex(key,length)))){result.push(key);}}return result;}/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function assignMergeValue(object,key,value){if(value!==undefined&&!eq(object[key],value)||value===undefined&&!(key in object)){baseAssignValue(object,key,value);}}/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||value===undefined&&!(key in object)){baseAssignValue(object,key,value);}}/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return-1;}/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function baseAssignValue(object,key,value){if(key=='__proto__'&&defineProperty){defineProperty(object,key,{'configurable':true,'enumerable':true,'value':value,'writable':true});}else{object[key]=value;}}/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */var baseFor=createBaseFor();/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function baseGetTag(value){if(value==null){return value===undefined?undefinedTag:nullTag;}return symToStringTag&&symToStringTag in Object(value)?getRawTag(value):objectToString(value);}/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */function baseIsArguments(value){return isObjectLike(value)&&baseGetTag(value)==argsTag;}/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */function baseIsTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[baseGetTag(value)];}/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function baseKeysIn(object){if(!isObject(object)){return nativeKeysIn(object);}var isProto=isPrototype(object),result=[];for(var key in object){if(!(key=='constructor'&&(isProto||!hasOwnProperty.call(object,key)))){result.push(key);}}return result;}/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */function baseMerge(object,source,srcIndex,customizer,stack){if(object===source){return;}baseFor(source,function(srcValue,key){stack||(stack=new Stack());if(isObject(srcValue)){baseMergeDeep(object,source,key,srcIndex,baseMerge,customizer,stack);}else{var newValue=customizer?customizer(safeGet(object,key),srcValue,key+'',object,source,stack):undefined;if(newValue===undefined){newValue=srcValue;}assignMergeValue(object,key,newValue);}},keysIn);}/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */function baseMergeDeep(object,source,key,srcIndex,mergeFunc,customizer,stack){var objValue=safeGet(object,key),srcValue=safeGet(source,key),stacked=stack.get(srcValue);if(stacked){assignMergeValue(object,key,stacked);return;}var newValue=customizer?customizer(objValue,srcValue,key+'',object,source,stack):undefined;var isCommon=newValue===undefined;if(isCommon){var isArr=isArray(srcValue),isBuff=!isArr&&isBuffer(srcValue),isTyped=!isArr&&!isBuff&&isTypedArray(srcValue);newValue=srcValue;if(isArr||isBuff||isTyped){if(isArray(objValue)){newValue=objValue;}else if(isArrayLikeObject(objValue)){newValue=copyArray(objValue);}else if(isBuff){isCommon=false;newValue=cloneBuffer(srcValue,true);}else if(isTyped){isCommon=false;newValue=cloneTypedArray(srcValue,true);}else{newValue=[];}}else if(isPlainObject(srcValue)||isArguments(srcValue)){newValue=objValue;if(isArguments(objValue)){newValue=toPlainObject(objValue);}else if(!isObject(objValue)||isFunction(objValue)){newValue=initCloneObject(srcValue);}}else{isCommon=false;}}if(isCommon){// Recursively merge objects and arrays (susceptible to call stack limits).
stack.set(srcValue,newValue);mergeFunc(newValue,srcValue,srcIndex,customizer,stack);stack['delete'](srcValue);}assignMergeValue(object,key,newValue);}/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */function baseRest(func,start){return setToString(overRest(func,start,identity),func+'');}/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */var baseSetToString=!defineProperty?identity:function(func,string){return defineProperty(func,'toString',{'configurable':true,'enumerable':false,'value':constant(string),'writable':true});};/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */function cloneBuffer(buffer,isDeep){if(isDeep){return buffer.slice();}var length=buffer.length,result=allocUnsafe?allocUnsafe(length):new buffer.constructor(length);buffer.copy(result);return result;}/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);new Uint8Array(result).set(new Uint8Array(arrayBuffer));return result;}/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length);}/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */function copyArray(source,array){var index=-1,length=source.length;array||(array=Array(length));while(++index<length){array[index]=source[index];}return array;}/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */function copyObject(source,props,object,customizer){var isNew=!object;object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):undefined;if(newValue===undefined){newValue=source[key];}if(isNew){baseAssignValue(object,key,newValue);}else{assignValue(object,key,newValue);}}return object;}/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */function createAssigner(assigner){return baseRest(function(object,sources){var index=-1,length=sources.length,customizer=length>1?sources[length-1]:undefined,guard=length>2?sources[2]:undefined;customizer=assigner.length>3&&typeof customizer=='function'?(length--,customizer):undefined;if(guard&&isIterateeCall(sources[0],sources[1],guard)){customizer=length<3?undefined:customizer;length=1;}object=Object(object);while(++index<length){var source=sources[index];if(source){assigner(object,source,index,customizer);}}return object;});}/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */function createBaseFor(fromRight){return function(object,iteratee,keysFunc){var index=-1,iterable=Object(object),props=keysFunc(object),length=props.length;while(length--){var key=props[fromRight?length:++index];if(iteratee(iterable[key],key,iterable)===false){break;}}return object;};}/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function getRawTag(value){var isOwn=hasOwnProperty.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=undefined;var unmasked=true;}catch(e){}var result=nativeObjectToString.call(value);if(unmasked){if(isOwn){value[symToStringTag]=tag;}else{delete value[symToStringTag];}}return result;}/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */function initCloneObject(object){return typeof object.constructor=='function'&&!isPrototype(object)?baseCreate(getPrototype(object)):{};}/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */function isIndex(value,length){var type=_typeof(value);length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(type=='number'||type!='symbol'&&reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */function isIterateeCall(value,index,object){if(!isObject(object)){return false;}var type=_typeof(index);if(type=='number'?isArrayLike(object)&&isIndex(index,object.length):type=='string'&&index in object){return eq(object[index],value);}return false;}/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */function isKeyable(value){var type=_typeof(value);return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;return value===proto;}/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function nativeKeysIn(object){var result=[];if(object!=null){for(var key in Object(object)){result.push(key);}}return result;}/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function objectToString(value){return nativeObjectToString.call(value);}/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */function overRest(func,start,transform){start=nativeMax(start===undefined?func.length-1:start,0);return function(){var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);while(++index<length){array[index]=args[start+index];}index=-1;var otherArgs=Array(start+1);while(++index<start){otherArgs[index]=args[index];}otherArgs[start]=transform(array);return apply(func,this,otherArgs);};}/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function safeGet(object,key){if(key==='constructor'&&typeof object[key]==='function'){return;}if(key=='__proto__'){return;}return object[key];}/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */var setToString=shortOut(baseSetToString);/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */function shortOut(func){var count=0,lastCalled=0;return function(){var stamp=nativeNow(),remaining=HOT_SPAN-(stamp-lastCalled);lastCalled=stamp;if(remaining>0){if(++count>=HOT_COUNT){return arguments[0];}}else{count=0;}return func.apply(undefined,arguments);};}/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */function eq(value,other){return value===other||value!==value&&other!==other;}/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */var isArguments=baseIsArguments(function(){return arguments;}())?baseIsArguments:function(value){return isObjectLike(value)&&hasOwnProperty.call(value,'callee')&&!propertyIsEnumerable.call(value,'callee');};/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */var isArray=Array.isArray;/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value);}/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */var isBuffer=nativeIsBuffer||stubFalse;/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */function isFunction(value){if(!isObject(value)){return false;}// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var tag=baseGetTag(value);return tag==funcTag||tag==genTag||tag==asyncTag||tag==proxyTag;}/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function isObject(value){var type=_typeof(value);return value!=null&&(type=='object'||type=='function');}/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function isObjectLike(value){return value!=null&&_typeof(value)=='object';}/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */function isPlainObject(value){if(!isObjectLike(value)||baseGetTag(value)!=objectTag){return false;}var proto=getPrototype(value);if(proto===null){return true;}var Ctor=hasOwnProperty.call(proto,'constructor')&&proto.constructor;return typeof Ctor=='function'&&Ctor instanceof Ctor&&funcToString.call(Ctor)==objectCtorString;}/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */var isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */function toPlainObject(value){return copyObject(value,keysIn(value));}/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */function keysIn(object){return isArrayLike(object)?arrayLikeKeys(object,true):baseKeysIn(object);}/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */var mergeWith=createAssigner(function(object,source,srcIndex,customizer){baseMerge(object,source,srcIndex,customizer);});/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */function constant(value){return function(){return value;};}/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */function identity(value){return value;}/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */function stubFalse(){return false;}module.exports=mergeWith;}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{}],38:[function(require,module,exports){(function(process){// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts,allowAboveRoot){// if the path tries to go above the root, `up` ends up > 0
var up=0;for(var i=parts.length-1;i>=0;i--){var last=parts[i];if(last==='.'){parts.splice(i,1);}else if(last==='..'){parts.splice(i,1);up++;}else if(up){parts.splice(i,1);up--;}}// if the path is allowed to go above the root, restore leading ..s
if(allowAboveRoot){for(;up--;up){parts.unshift('..');}}return parts;}// path.resolve([from ...], to)
// posix version
exports.resolve=function(){var resolvedPath='',resolvedAbsolute=false;for(var i=arguments.length-1;i>=-1&&!resolvedAbsolute;i--){var path=i>=0?arguments[i]:process.cwd();// Skip empty and invalid entries
if(typeof path!=='string'){throw new TypeError('Arguments to path.resolve must be strings');}else if(!path){continue;}resolvedPath=path+'/'+resolvedPath;resolvedAbsolute=path.charAt(0)==='/';}// At this point the path should be resolved to a full absolute path, but
// handle relative paths to be safe (might happen when process.cwd() fails)
// Normalize the path
resolvedPath=normalizeArray(filter(resolvedPath.split('/'),function(p){return!!p;}),!resolvedAbsolute).join('/');return(resolvedAbsolute?'/':'')+resolvedPath||'.';};// path.normalize(path)
// posix version
exports.normalize=function(path){var isAbsolute=exports.isAbsolute(path),trailingSlash=substr(path,-1)==='/';// Normalize the path
path=normalizeArray(filter(path.split('/'),function(p){return!!p;}),!isAbsolute).join('/');if(!path&&!isAbsolute){path='.';}if(path&&trailingSlash){path+='/';}return(isAbsolute?'/':'')+path;};// posix version
exports.isAbsolute=function(path){return path.charAt(0)==='/';};// posix version
exports.join=function(){var paths=Array.prototype.slice.call(arguments,0);return exports.normalize(filter(paths,function(p,index){if(typeof p!=='string'){throw new TypeError('Arguments to path.join must be strings');}return p;}).join('/'));};// path.relative(from, to)
// posix version
exports.relative=function(from,to){from=exports.resolve(from).substr(1);to=exports.resolve(to).substr(1);function trim(arr){var start=0;for(;start<arr.length;start++){if(arr[start]!=='')break;}var end=arr.length-1;for(;end>=0;end--){if(arr[end]!=='')break;}if(start>end)return[];return arr.slice(start,end-start+1);}var fromParts=trim(from.split('/'));var toParts=trim(to.split('/'));var length=Math.min(fromParts.length,toParts.length);var samePartsLength=length;for(var i=0;i<length;i++){if(fromParts[i]!==toParts[i]){samePartsLength=i;break;}}var outputParts=[];for(var i=samePartsLength;i<fromParts.length;i++){outputParts.push('..');}outputParts=outputParts.concat(toParts.slice(samePartsLength));return outputParts.join('/');};exports.sep='/';exports.delimiter=':';exports.dirname=function(path){if(typeof path!=='string')path=path+'';if(path.length===0)return'.';var code=path.charCodeAt(0);var hasRoot=code===47/*/*/;var end=-1;var matchedSlash=true;for(var i=path.length-1;i>=1;--i){code=path.charCodeAt(i);if(code===47/*/*/){if(!matchedSlash){end=i;break;}}else{// We saw the first non-path separator
matchedSlash=false;}}if(end===-1)return hasRoot?'/':'.';if(hasRoot&&end===1){// return '//';
// Backwards-compat fix:
return'/';}return path.slice(0,end);};function basename(path){if(typeof path!=='string')path=path+'';var start=0;var end=-1;var matchedSlash=true;var i;for(i=path.length-1;i>=0;--i){if(path.charCodeAt(i)===47/*/*/){// If we reached a path separator that was not part of a set of path
// separators at the end of the string, stop now
if(!matchedSlash){start=i+1;break;}}else if(end===-1){// We saw the first non-path separator, mark this as the end of our
// path component
matchedSlash=false;end=i+1;}}if(end===-1)return'';return path.slice(start,end);}// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename=function(path,ext){var f=basename(path);if(ext&&f.substr(-1*ext.length)===ext){f=f.substr(0,f.length-ext.length);}return f;};exports.extname=function(path){if(typeof path!=='string')path=path+'';var startDot=-1;var startPart=0;var end=-1;var matchedSlash=true;// Track the state of characters (if any) we see before our first dot and
// after any path separator we find
var preDotState=0;for(var i=path.length-1;i>=0;--i){var code=path.charCodeAt(i);if(code===47/*/*/){// If we reached a path separator that was not part of a set of path
// separators at the end of the string, stop now
if(!matchedSlash){startPart=i+1;break;}continue;}if(end===-1){// We saw the first non-path separator, mark this as the end of our
// extension
matchedSlash=false;end=i+1;}if(code===46/*.*/){// If this is our first dot, mark it as the start of our extension
if(startDot===-1)startDot=i;else if(preDotState!==1)preDotState=1;}else if(startDot!==-1){// We saw a non-dot and non-path separator before our dot, so we should
// have a good chance at having a non-empty extension
preDotState=-1;}}if(startDot===-1||end===-1||// We saw a non-dot character immediately before the dot
preDotState===0||// The (right-most) trimmed path component is exactly '..'
preDotState===1&&startDot===end-1&&startDot===startPart+1){return'';}return path.slice(startDot,end);};function filter(xs,f){if(xs.filter)return xs.filter(f);var res=[];for(var i=0;i<xs.length;i++){if(f(xs[i],i,xs))res.push(xs[i]);}return res;}// String.prototype.substr - negative index don't work in IE8
var substr='ab'.substr(-1)==='b'?function(str,start,len){return str.substr(start,len);}:function(str,start,len){if(start<0)start=str.length+start;return str.substr(start,len);};}).call(this,require('_process'));},{"_process":63}],39:[function(require,module,exports){"use strict";exports.__esModule=true;exports["default"]=void 0;var _container=_interopRequireDefault(require("./container"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}/**
 * Represents an at-rule.
 *
 * If it’s followed in the CSS by a {} block, this node will have
 * a nodes property representing its children.
 *
 * @extends Container
 *
 * @example
 * const root = postcss.parse('@charset "UTF-8"; @media print {}')
 *
 * const charset = root.first
 * charset.type  //=> 'atrule'
 * charset.nodes //=> undefined
 *
 * const media = root.last
 * media.nodes   //=> []
 */var AtRule=/*#__PURE__*/function(_Container){_inheritsLoose(AtRule,_Container);function AtRule(defaults){var _this;_this=_Container.call(this,defaults)||this;_this.type='atrule';return _this;}var _proto=AtRule.prototype;_proto.append=function append(){var _Container$prototype$;if(!this.nodes)this.nodes=[];for(var _len=arguments.length,children=new Array(_len),_key=0;_key<_len;_key++){children[_key]=arguments[_key];}return(_Container$prototype$=_Container.prototype.append).call.apply(_Container$prototype$,[this].concat(children));};_proto.prepend=function prepend(){var _Container$prototype$2;if(!this.nodes)this.nodes=[];for(var _len2=arguments.length,children=new Array(_len2),_key2=0;_key2<_len2;_key2++){children[_key2]=arguments[_key2];}return(_Container$prototype$2=_Container.prototype.prepend).call.apply(_Container$prototype$2,[this].concat(children));}/**
   * @memberof AtRule#
   * @member {string} name The at-rule’s name immediately follows the `@`.
   *
   * @example
   * const root  = postcss.parse('@media print {}')
   * media.name //=> 'media'
   * const media = root.first
   */ /**
   * @memberof AtRule#
   * @member {string} params The at-rule’s parameters, the values
   *                         that follow the at-rule’s name but precede
   *                         any {} block.
   *
   * @example
   * const root  = postcss.parse('@media print, screen {}')
   * const media = root.first
   * media.params //=> 'print, screen'
   */ /**
   * @memberof AtRule#
   * @member {object} raws Information to generate byte-to-byte equal
   *                        node string as it was in the origin input.
   *
   * Every parser saves its own properties,
   * but the default CSS parser uses:
   *
   * * `before`: the space symbols before the node. It also stores `*`
   *   and `_` symbols before the declaration (IE hack).
   * * `after`: the space symbols after the last child of the node
   *   to the end of the node.
   * * `between`: the symbols between the property and value
   *   for declarations, selector and `{` for rules, or last parameter
   *   and `{` for at-rules.
   * * `semicolon`: contains true if the last child has
   *   an (optional) semicolon.
   * * `afterName`: the space between the at-rule name and its parameters.
   *
   * PostCSS cleans at-rule parameters from comments and extra spaces,
   * but it stores origin content in raws properties.
   * As such, if you don’t change a declaration’s value,
   * PostCSS will use the raw value with comments.
   *
   * @example
   * const root = postcss.parse('  @media\nprint {\n}')
   * root.first.first.raws //=> { before: '  ',
   *                       //     between: ' ',
   *                       //     afterName: '\n',
   *                       //     after: '\n' }
   */;return AtRule;}(_container["default"]);var _default=AtRule;exports["default"]=_default;module.exports=exports["default"];},{"./container":41}],40:[function(require,module,exports){"use strict";exports.__esModule=true;exports["default"]=void 0;var _node=_interopRequireDefault(require("./node"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}/**
 * Represents a comment between declarations or statements (rule and at-rules).
 *
 * Comments inside selectors, at-rule parameters, or declaration values
 * will be stored in the `raws` properties explained above.
 *
 * @extends Node
 */var Comment=/*#__PURE__*/function(_Node){_inheritsLoose(Comment,_Node);function Comment(defaults){var _this;_this=_Node.call(this,defaults)||this;_this.type='comment';return _this;}/**
   * @memberof Comment#
   * @member {string} text The comment’s text.
   */ /**
   * @memberof Comment#
   * @member {object} raws Information to generate byte-to-byte equal
   *                       node string as it was in the origin input.
   *
   * Every parser saves its own properties,
   * but the default CSS parser uses:
   *
   * * `before`: the space symbols before the node.
   * * `left`: the space symbols between `/*` and the comment’s text.
   * * `right`: the space symbols between the comment’s text.
   */return Comment;}(_node["default"]);var _default=Comment;exports["default"]=_default;module.exports=exports["default"];},{"./node":48}],41:[function(require,module,exports){"use strict";exports.__esModule=true;exports["default"]=void 0;var _declaration=_interopRequireDefault(require("./declaration"));var _comment=_interopRequireDefault(require("./comment"));var _node=_interopRequireDefault(require("./node"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}function cleanSource(nodes){return nodes.map(function(i){if(i.nodes)i.nodes=cleanSource(i.nodes);delete i.source;return i;});}/**
 * The {@link Root}, {@link AtRule}, and {@link Rule} container nodes
 * inherit some common methods to help work with their children.
 *
 * Note that all containers can store any content. If you write a rule inside
 * a rule, PostCSS will parse it.
 *
 * @extends Node
 * @abstract
 */var Container=/*#__PURE__*/function(_Node){_inheritsLoose(Container,_Node);function Container(){return _Node.apply(this,arguments)||this;}var _proto=Container.prototype;_proto.push=function push(child){child.parent=this;this.nodes.push(child);return this;}/**
   * Iterates through the container’s immediate children,
   * calling `callback` for each child.
   *
   * Returning `false` in the callback will break iteration.
   *
   * This method only iterates through the container’s immediate children.
   * If you need to recursively iterate through all the container’s descendant
   * nodes, use {@link Container#walk}.
   *
   * Unlike the for `{}`-cycle or `Array#forEach` this iterator is safe
   * if you are mutating the array of child nodes during iteration.
   * PostCSS will adjust the current index to match the mutations.
   *
   * @param {childIterator} callback Iterator receives each node and index.
   *
   * @return {false|undefined} Returns `false` if iteration was broke.
   *
   * @example
   * const root = postcss.parse('a { color: black; z-index: 1 }')
   * const rule = root.first
   *
   * for (const decl of rule.nodes) {
   *   decl.cloneBefore({ prop: '-webkit-' + decl.prop })
   *   // Cycle will be infinite, because cloneBefore moves the current node
   *   // to the next index
   * }
   *
   * rule.each(decl => {
   *   decl.cloneBefore({ prop: '-webkit-' + decl.prop })
   *   // Will be executed only for color and z-index
   * })
   */;_proto.each=function each(callback){if(!this.lastEach)this.lastEach=0;if(!this.indexes)this.indexes={};this.lastEach+=1;var id=this.lastEach;this.indexes[id]=0;if(!this.nodes)return undefined;var index,result;while(this.indexes[id]<this.nodes.length){index=this.indexes[id];result=callback(this.nodes[index],index);if(result===false)break;this.indexes[id]+=1;}delete this.indexes[id];return result;}/**
   * Traverses the container’s descendant nodes, calling callback
   * for each node.
   *
   * Like container.each(), this method is safe to use
   * if you are mutating arrays during iteration.
   *
   * If you only need to iterate through the container’s immediate children,
   * use {@link Container#each}.
   *
   * @param {childIterator} callback Iterator receives each node and index.
   *
   * @return {false|undefined} Returns `false` if iteration was broke.
   *
   * @example
   * root.walk(node => {
   *   // Traverses all descendant nodes.
   * })
   */;_proto.walk=function walk(callback){return this.each(function(child,i){var result;try{result=callback(child,i);}catch(e){e.postcssNode=child;if(e.stack&&child.source&&/\n\s{4}at /.test(e.stack)){var s=child.source;e.stack=e.stack.replace(/\n\s{4}at /,"$&"+s.input.from+":"+s.start.line+":"+s.start.column+"$&");}throw e;}if(result!==false&&child.walk){result=child.walk(callback);}return result;});}/**
   * Traverses the container’s descendant nodes, calling callback
   * for each declaration node.
   *
   * If you pass a filter, iteration will only happen over declarations
   * with matching properties.
   *
   * Like {@link Container#each}, this method is safe
   * to use if you are mutating arrays during iteration.
   *
   * @param {string|RegExp} [prop]   String or regular expression
   *                                 to filter declarations by property name.
   * @param {childIterator} callback Iterator receives each node and index.
   *
   * @return {false|undefined} Returns `false` if iteration was broke.
   *
   * @example
   * root.walkDecls(decl => {
   *   checkPropertySupport(decl.prop)
   * })
   *
   * root.walkDecls('border-radius', decl => {
   *   decl.remove()
   * })
   *
   * root.walkDecls(/^background/, decl => {
   *   decl.value = takeFirstColorFromGradient(decl.value)
   * })
   */;_proto.walkDecls=function walkDecls(prop,callback){if(!callback){callback=prop;return this.walk(function(child,i){if(child.type==='decl'){return callback(child,i);}});}if(prop instanceof RegExp){return this.walk(function(child,i){if(child.type==='decl'&&prop.test(child.prop)){return callback(child,i);}});}return this.walk(function(child,i){if(child.type==='decl'&&child.prop===prop){return callback(child,i);}});}/**
   * Traverses the container’s descendant nodes, calling callback
   * for each rule node.
   *
   * If you pass a filter, iteration will only happen over rules
   * with matching selectors.
   *
   * Like {@link Container#each}, this method is safe
   * to use if you are mutating arrays during iteration.
   *
   * @param {string|RegExp} [selector] String or regular expression
   *                                   to filter rules by selector.
   * @param {childIterator} callback   Iterator receives each node and index.
   *
   * @return {false|undefined} returns `false` if iteration was broke.
   *
   * @example
   * const selectors = []
   * root.walkRules(rule => {
   *   selectors.push(rule.selector)
   * })
   * console.log(`Your CSS uses ${ selectors.length } selectors`)
   */;_proto.walkRules=function walkRules(selector,callback){if(!callback){callback=selector;return this.walk(function(child,i){if(child.type==='rule'){return callback(child,i);}});}if(selector instanceof RegExp){return this.walk(function(child,i){if(child.type==='rule'&&selector.test(child.selector)){return callback(child,i);}});}return this.walk(function(child,i){if(child.type==='rule'&&child.selector===selector){return callback(child,i);}});}/**
   * Traverses the container’s descendant nodes, calling callback
   * for each at-rule node.
   *
   * If you pass a filter, iteration will only happen over at-rules
   * that have matching names.
   *
   * Like {@link Container#each}, this method is safe
   * to use if you are mutating arrays during iteration.
   *
   * @param {string|RegExp} [name]   String or regular expression
   *                                 to filter at-rules by name.
   * @param {childIterator} callback Iterator receives each node and index.
   *
   * @return {false|undefined} Returns `false` if iteration was broke.
   *
   * @example
   * root.walkAtRules(rule => {
   *   if (isOld(rule.name)) rule.remove()
   * })
   *
   * let first = false
   * root.walkAtRules('charset', rule => {
   *   if (!first) {
   *     first = true
   *   } else {
   *     rule.remove()
   *   }
   * })
   */;_proto.walkAtRules=function walkAtRules(name,callback){if(!callback){callback=name;return this.walk(function(child,i){if(child.type==='atrule'){return callback(child,i);}});}if(name instanceof RegExp){return this.walk(function(child,i){if(child.type==='atrule'&&name.test(child.name)){return callback(child,i);}});}return this.walk(function(child,i){if(child.type==='atrule'&&child.name===name){return callback(child,i);}});}/**
   * Traverses the container’s descendant nodes, calling callback
   * for each comment node.
   *
   * Like {@link Container#each}, this method is safe
   * to use if you are mutating arrays during iteration.
   *
   * @param {childIterator} callback Iterator receives each node and index.
   *
   * @return {false|undefined} Returns `false` if iteration was broke.
   *
   * @example
   * root.walkComments(comment => {
   *   comment.remove()
   * })
   */;_proto.walkComments=function walkComments(callback){return this.walk(function(child,i){if(child.type==='comment'){return callback(child,i);}});}/**
   * Inserts new nodes to the end of the container.
   *
   * @param {...(Node|object|string|Node[])} children New nodes.
   *
   * @return {Node} This node for methods chain.
   *
   * @example
   * const decl1 = postcss.decl({ prop: 'color', value: 'black' })
   * const decl2 = postcss.decl({ prop: 'background-color', value: 'white' })
   * rule.append(decl1, decl2)
   *
   * root.append({ name: 'charset', params: '"UTF-8"' })  // at-rule
   * root.append({ selector: 'a' })                       // rule
   * rule.append({ prop: 'color', value: 'black' })       // declaration
   * rule.append({ text: 'Comment' })                     // comment
   *
   * root.append('a {}')
   * root.first.append('color: black; z-index: 1')
   */;_proto.append=function append(){for(var _len=arguments.length,children=new Array(_len),_key=0;_key<_len;_key++){children[_key]=arguments[_key];}for(var _i=0,_children=children;_i<_children.length;_i++){var child=_children[_i];var nodes=this.normalize(child,this.last);for(var _iterator=nodes,_isArray=Array.isArray(_iterator),_i2=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i2>=_iterator.length)break;_ref=_iterator[_i2++];}else{_i2=_iterator.next();if(_i2.done)break;_ref=_i2.value;}var node=_ref;this.nodes.push(node);}}return this;}/**
   * Inserts new nodes to the start of the container.
   *
   * @param {...(Node|object|string|Node[])} children New nodes.
   *
   * @return {Node} This node for methods chain.
   *
   * @example
   * const decl1 = postcss.decl({ prop: 'color', value: 'black' })
   * const decl2 = postcss.decl({ prop: 'background-color', value: 'white' })
   * rule.prepend(decl1, decl2)
   *
   * root.append({ name: 'charset', params: '"UTF-8"' })  // at-rule
   * root.append({ selector: 'a' })                       // rule
   * rule.append({ prop: 'color', value: 'black' })       // declaration
   * rule.append({ text: 'Comment' })                     // comment
   *
   * root.append('a {}')
   * root.first.append('color: black; z-index: 1')
   */;_proto.prepend=function prepend(){for(var _len2=arguments.length,children=new Array(_len2),_key2=0;_key2<_len2;_key2++){children[_key2]=arguments[_key2];}children=children.reverse();for(var _iterator2=children,_isArray2=Array.isArray(_iterator2),_i3=0,_iterator2=_isArray2?_iterator2:_iterator2[Symbol.iterator]();;){var _ref2;if(_isArray2){if(_i3>=_iterator2.length)break;_ref2=_iterator2[_i3++];}else{_i3=_iterator2.next();if(_i3.done)break;_ref2=_i3.value;}var child=_ref2;var nodes=this.normalize(child,this.first,'prepend').reverse();for(var _iterator3=nodes,_isArray3=Array.isArray(_iterator3),_i4=0,_iterator3=_isArray3?_iterator3:_iterator3[Symbol.iterator]();;){var _ref3;if(_isArray3){if(_i4>=_iterator3.length)break;_ref3=_iterator3[_i4++];}else{_i4=_iterator3.next();if(_i4.done)break;_ref3=_i4.value;}var node=_ref3;this.nodes.unshift(node);}for(var id in this.indexes){this.indexes[id]=this.indexes[id]+nodes.length;}}return this;};_proto.cleanRaws=function cleanRaws(keepBetween){_Node.prototype.cleanRaws.call(this,keepBetween);if(this.nodes){for(var _iterator4=this.nodes,_isArray4=Array.isArray(_iterator4),_i5=0,_iterator4=_isArray4?_iterator4:_iterator4[Symbol.iterator]();;){var _ref4;if(_isArray4){if(_i5>=_iterator4.length)break;_ref4=_iterator4[_i5++];}else{_i5=_iterator4.next();if(_i5.done)break;_ref4=_i5.value;}var node=_ref4;node.cleanRaws(keepBetween);}}}/**
   * Insert new node before old node within the container.
   *
   * @param {Node|number} exist             Child or child’s index.
   * @param {Node|object|string|Node[]} add New node.
   *
   * @return {Node} This node for methods chain.
   *
   * @example
   * rule.insertBefore(decl, decl.clone({ prop: '-webkit-' + decl.prop }))
   */;_proto.insertBefore=function insertBefore(exist,add){exist=this.index(exist);var type=exist===0?'prepend':false;var nodes=this.normalize(add,this.nodes[exist],type).reverse();for(var _iterator5=nodes,_isArray5=Array.isArray(_iterator5),_i6=0,_iterator5=_isArray5?_iterator5:_iterator5[Symbol.iterator]();;){var _ref5;if(_isArray5){if(_i6>=_iterator5.length)break;_ref5=_iterator5[_i6++];}else{_i6=_iterator5.next();if(_i6.done)break;_ref5=_i6.value;}var node=_ref5;this.nodes.splice(exist,0,node);}var index;for(var id in this.indexes){index=this.indexes[id];if(exist<=index){this.indexes[id]=index+nodes.length;}}return this;}/**
   * Insert new node after old node within the container.
   *
   * @param {Node|number} exist             Child or child’s index.
   * @param {Node|object|string|Node[]} add New node.
   *
   * @return {Node} This node for methods chain.
   */;_proto.insertAfter=function insertAfter(exist,add){exist=this.index(exist);var nodes=this.normalize(add,this.nodes[exist]).reverse();for(var _iterator6=nodes,_isArray6=Array.isArray(_iterator6),_i7=0,_iterator6=_isArray6?_iterator6:_iterator6[Symbol.iterator]();;){var _ref6;if(_isArray6){if(_i7>=_iterator6.length)break;_ref6=_iterator6[_i7++];}else{_i7=_iterator6.next();if(_i7.done)break;_ref6=_i7.value;}var node=_ref6;this.nodes.splice(exist+1,0,node);}var index;for(var id in this.indexes){index=this.indexes[id];if(exist<index){this.indexes[id]=index+nodes.length;}}return this;}/**
   * Removes node from the container and cleans the parent properties
   * from the node and its children.
   *
   * @param {Node|number} child Child or child’s index.
   *
   * @return {Node} This node for methods chain
   *
   * @example
   * rule.nodes.length  //=> 5
   * rule.removeChild(decl)
   * rule.nodes.length  //=> 4
   * decl.parent        //=> undefined
   */;_proto.removeChild=function removeChild(child){child=this.index(child);this.nodes[child].parent=undefined;this.nodes.splice(child,1);var index;for(var id in this.indexes){index=this.indexes[id];if(index>=child){this.indexes[id]=index-1;}}return this;}/**
   * Removes all children from the container
   * and cleans their parent properties.
   *
   * @return {Node} This node for methods chain.
   *
   * @example
   * rule.removeAll()
   * rule.nodes.length //=> 0
   */;_proto.removeAll=function removeAll(){for(var _iterator7=this.nodes,_isArray7=Array.isArray(_iterator7),_i8=0,_iterator7=_isArray7?_iterator7:_iterator7[Symbol.iterator]();;){var _ref7;if(_isArray7){if(_i8>=_iterator7.length)break;_ref7=_iterator7[_i8++];}else{_i8=_iterator7.next();if(_i8.done)break;_ref7=_i8.value;}var node=_ref7;node.parent=undefined;}this.nodes=[];return this;}/**
   * Passes all declaration values within the container that match pattern
   * through callback, replacing those values with the returned result
   * of callback.
   *
   * This method is useful if you are using a custom unit or function
   * and need to iterate through all values.
   *
   * @param {string|RegExp} pattern      Replace pattern.
   * @param {object} opts                Options to speed up the search.
   * @param {string|string[]} opts.props An array of property names.
   * @param {string} opts.fast           String that’s used to narrow down
   *                                     values and speed up the regexp search.
   * @param {function|string} callback   String to replace pattern or callback
   *                                     that returns a new value. The callback
   *                                     will receive the same arguments
   *                                     as those passed to a function parameter
   *                                     of `String#replace`.
   *
   * @return {Node} This node for methods chain.
   *
   * @example
   * root.replaceValues(/\d+rem/, { fast: 'rem' }, string => {
   *   return 15 * parseInt(string) + 'px'
   * })
   */;_proto.replaceValues=function replaceValues(pattern,opts,callback){if(!callback){callback=opts;opts={};}this.walkDecls(function(decl){if(opts.props&&opts.props.indexOf(decl.prop)===-1)return;if(opts.fast&&decl.value.indexOf(opts.fast)===-1)return;decl.value=decl.value.replace(pattern,callback);});return this;}/**
   * Returns `true` if callback returns `true`
   * for all of the container’s children.
   *
   * @param {childCondition} condition Iterator returns true or false.
   *
   * @return {boolean} Is every child pass condition.
   *
   * @example
   * const noPrefixes = rule.every(i => i.prop[0] !== '-')
   */;_proto.every=function every(condition){return this.nodes.every(condition);}/**
   * Returns `true` if callback returns `true` for (at least) one
   * of the container’s children.
   *
   * @param {childCondition} condition Iterator returns true or false.
   *
   * @return {boolean} Is some child pass condition.
   *
   * @example
   * const hasPrefix = rule.some(i => i.prop[0] === '-')
   */;_proto.some=function some(condition){return this.nodes.some(condition);}/**
   * Returns a `child`’s index within the {@link Container#nodes} array.
   *
   * @param {Node} child Child of the current container.
   *
   * @return {number} Child index.
   *
   * @example
   * rule.index( rule.nodes[2] ) //=> 2
   */;_proto.index=function index(child){if(typeof child==='number'){return child;}return this.nodes.indexOf(child);}/**
   * The container’s first child.
   *
   * @type {Node}
   *
   * @example
   * rule.first === rules.nodes[0]
   */;_proto.normalize=function normalize(nodes,sample){var _this=this;if(typeof nodes==='string'){var parse=require('./parse');nodes=cleanSource(parse(nodes).nodes);}else if(Array.isArray(nodes)){nodes=nodes.slice(0);for(var _iterator8=nodes,_isArray8=Array.isArray(_iterator8),_i9=0,_iterator8=_isArray8?_iterator8:_iterator8[Symbol.iterator]();;){var _ref8;if(_isArray8){if(_i9>=_iterator8.length)break;_ref8=_iterator8[_i9++];}else{_i9=_iterator8.next();if(_i9.done)break;_ref8=_i9.value;}var i=_ref8;if(i.parent)i.parent.removeChild(i,'ignore');}}else if(nodes.type==='root'){nodes=nodes.nodes.slice(0);for(var _iterator9=nodes,_isArray9=Array.isArray(_iterator9),_i10=0,_iterator9=_isArray9?_iterator9:_iterator9[Symbol.iterator]();;){var _ref9;if(_isArray9){if(_i10>=_iterator9.length)break;_ref9=_iterator9[_i10++];}else{_i10=_iterator9.next();if(_i10.done)break;_ref9=_i10.value;}var _i11=_ref9;if(_i11.parent)_i11.parent.removeChild(_i11,'ignore');}}else if(nodes.type){nodes=[nodes];}else if(nodes.prop){if(typeof nodes.value==='undefined'){throw new Error('Value field is missed in node creation');}else if(typeof nodes.value!=='string'){nodes.value=String(nodes.value);}nodes=[new _declaration["default"](nodes)];}else if(nodes.selector){var Rule=require('./rule');nodes=[new Rule(nodes)];}else if(nodes.name){var AtRule=require('./at-rule');nodes=[new AtRule(nodes)];}else if(nodes.text){nodes=[new _comment["default"](nodes)];}else{throw new Error('Unknown node type in node creation');}var processed=nodes.map(function(i){if(i.parent)i.parent.removeChild(i);if(typeof i.raws.before==='undefined'){if(sample&&typeof sample.raws.before!=='undefined'){i.raws.before=sample.raws.before.replace(/[^\s]/g,'');}}i.parent=_this;return i;});return processed;}/**
   * @memberof Container#
   * @member {Node[]} nodes An array containing the container’s children.
   *
   * @example
   * const root = postcss.parse('a { color: black }')
   * root.nodes.length           //=> 1
   * root.nodes[0].selector      //=> 'a'
   * root.nodes[0].nodes[0].prop //=> 'color'
   */;_createClass(Container,[{key:"first",get:function get(){if(!this.nodes)return undefined;return this.nodes[0];}/**
     * The container’s last child.
     *
     * @type {Node}
     *
     * @example
     * rule.last === rule.nodes[rule.nodes.length - 1]
     */},{key:"last",get:function get(){if(!this.nodes)return undefined;return this.nodes[this.nodes.length-1];}}]);return Container;}(_node["default"]);var _default=Container;/**
 * @callback childCondition
 * @param {Node} node    Container child.
 * @param {number} index Child index.
 * @param {Node[]} nodes All container children.
 * @return {boolean}
 */ /**
 * @callback childIterator
 * @param {Node} node    Container child.
 * @param {number} index Child index.
 * @return {false|undefined} Returning `false` will break iteration.
 */exports["default"]=_default;module.exports=exports["default"];},{"./at-rule":39,"./comment":40,"./declaration":43,"./node":48,"./parse":49,"./rule":56}],42:[function(require,module,exports){"use strict";exports.__esModule=true;exports["default"]=void 0;var _supportsColor=_interopRequireDefault(require("supports-color"));var _chalk=_interopRequireDefault(require("chalk"));var _terminalHighlight=_interopRequireDefault(require("./terminal-highlight"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}function _wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return _construct(Class,arguments,_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return _setPrototypeOf(Wrapper,Class);};return _wrapNativeSuper(Class);}function isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function _construct(Parent,args,Class){if(isNativeReflectConstruct()){_construct=Reflect.construct;}else{_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)_setPrototypeOf(instance,Class.prototype);return instance;};}return _construct.apply(null,arguments);}function _isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}/**
 * The CSS parser throws this error for broken CSS.
 *
 * Custom parsers can throw this error for broken custom syntax using
 * the {@link Node#error} method.
 *
 * PostCSS will use the input source map to detect the original error location.
 * If you wrote a Sass file, compiled it to CSS and then parsed it with PostCSS,
 * PostCSS will show the original position in the Sass file.
 *
 * If you need the position in the PostCSS input
 * (e.g., to debug the previous compiler), use `error.input.file`.
 *
 * @example
 * // Catching and checking syntax error
 * try {
 *   postcss.parse('a{')
 * } catch (error) {
 *   if (error.name === 'CssSyntaxError') {
 *     error //=> CssSyntaxError
 *   }
 * }
 *
 * @example
 * // Raising error from plugin
 * throw node.error('Unknown variable', { plugin: 'postcss-vars' })
 */var CssSyntaxError=/*#__PURE__*/function(_Error){_inheritsLoose(CssSyntaxError,_Error);/**
   * @param {string} message  Error message.
   * @param {number} [line]   Source line of the error.
   * @param {number} [column] Source column of the error.
   * @param {string} [source] Source code of the broken file.
   * @param {string} [file]   Absolute path to the broken file.
   * @param {string} [plugin] PostCSS plugin name, if error came from plugin.
   */function CssSyntaxError(message,line,column,source,file,plugin){var _this;_this=_Error.call(this,message)||this;/**
     * Always equal to `'CssSyntaxError'`. You should always check error type
     * by `error.name === 'CssSyntaxError'`
     * instead of `error instanceof CssSyntaxError`,
     * because npm could have several PostCSS versions.
     *
     * @type {string}
     *
     * @example
     * if (error.name === 'CssSyntaxError') {
     *   error //=> CssSyntaxError
     * }
     */_this.name='CssSyntaxError';/**
     * Error message.
     *
     * @type {string}
     *
     * @example
     * error.message //=> 'Unclosed block'
     */_this.reason=message;if(file){/**
       * Absolute path to the broken file.
       *
       * @type {string}
       *
       * @example
       * error.file       //=> 'a.sass'
       * error.input.file //=> 'a.css'
       */_this.file=file;}if(source){/**
       * Source code of the broken file.
       *
       * @type {string}
       *
       * @example
       * error.source       //=> 'a { b {} }'
       * error.input.column //=> 'a b { }'
       */_this.source=source;}if(plugin){/**
       * Plugin name, if error came from plugin.
       *
       * @type {string}
       *
       * @example
       * error.plugin //=> 'postcss-vars'
       */_this.plugin=plugin;}if(typeof line!=='undefined'&&typeof column!=='undefined'){/**
       * Source line of the error.
       *
       * @type {number}
       *
       * @example
       * error.line       //=> 2
       * error.input.line //=> 4
       */_this.line=line;/**
       * Source column of the error.
       *
       * @type {number}
       *
       * @example
       * error.column       //=> 1
       * error.input.column //=> 4
       */_this.column=column;}_this.setMessage();if(Error.captureStackTrace){Error.captureStackTrace(_assertThisInitialized(_this),CssSyntaxError);}return _this;}var _proto=CssSyntaxError.prototype;_proto.setMessage=function setMessage(){/**
     * Full error text in the GNU error format
     * with plugin, file, line and column.
     *
     * @type {string}
     *
     * @example
     * error.message //=> 'a.css:1:1: Unclosed block'
     */this.message=this.plugin?this.plugin+': ':'';this.message+=this.file?this.file:'<css input>';if(typeof this.line!=='undefined'){this.message+=':'+this.line+':'+this.column;}this.message+=': '+this.reason;}/**
   * Returns a few lines of CSS source that caused the error.
   *
   * If the CSS has an input source map without `sourceContent`,
   * this method will return an empty string.
   *
   * @param {boolean} [color] Whether arrow will be colored red by terminal
   *                          color codes. By default, PostCSS will detect
   *                          color support by `process.stdout.isTTY`
   *                          and `process.env.NODE_DISABLE_COLORS`.
   *
   * @example
   * error.showSourceCode() //=> "  4 | }
   *                        //      5 | a {
   *                        //    > 6 |   bad
   *                        //        |   ^
   *                        //      7 | }
   *                        //      8 | b {"
   *
   * @return {string} Few lines of CSS source that caused the error.
   */;_proto.showSourceCode=function showSourceCode(color){var _this2=this;if(!this.source)return'';var css=this.source;if(_terminalHighlight["default"]){if(typeof color==='undefined')color=_supportsColor["default"].stdout;if(color)css=(0,_terminalHighlight["default"])(css);}var lines=css.split(/\r?\n/);var start=Math.max(this.line-3,0);var end=Math.min(this.line+2,lines.length);var maxWidth=String(end).length;function mark(text){if(color&&_chalk["default"].red){return _chalk["default"].red.bold(text);}return text;}function aside(text){if(color&&_chalk["default"].gray){return _chalk["default"].gray(text);}return text;}return lines.slice(start,end).map(function(line,index){var number=start+1+index;var gutter=' '+(' '+number).slice(-maxWidth)+' | ';if(number===_this2.line){var spacing=aside(gutter.replace(/\d/g,' '))+line.slice(0,_this2.column-1).replace(/[^\t]/g,' ');return mark('>')+aside(gutter)+line+'\n '+spacing+mark('^');}return' '+aside(gutter)+line;}).join('\n');}/**
   * Returns error position, message and source code of the broken part.
   *
   * @example
   * error.toString() //=> "CssSyntaxError: app.css:1:1: Unclosed block
   *                  //    > 1 | a {
   *                  //        | ^"
   *
   * @return {string} Error position, message and source code.
   */;_proto.toString=function toString(){var code=this.showSourceCode();if(code){code='\n\n'+code+'\n';}return this.name+': '+this.message+code;}/**
   * @memberof CssSyntaxError#
   * @member {Input} input Input object with PostCSS internal information
   *                       about input file. If input has source map
   *                       from previous tool, PostCSS will use origin
   *                       (for example, Sass) source. You can use this
   *                       object to get PostCSS input source.
   *
   * @example
   * error.input.file //=> 'a.css'
   * error.file       //=> 'a.sass'
   */;return CssSyntaxError;}(_wrapNativeSuper(Error));var _default=CssSyntaxError;exports["default"]=_default;module.exports=exports["default"];},{"./terminal-highlight":2,"chalk":2,"supports-color":2}],43:[function(require,module,exports){"use strict";exports.__esModule=true;exports["default"]=void 0;var _node=_interopRequireDefault(require("./node"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}/**
 * Represents a CSS declaration.
 *
 * @extends Node
 *
 * @example
 * const root = postcss.parse('a { color: black }')
 * const decl = root.first.first
 * decl.type       //=> 'decl'
 * decl.toString() //=> ' color: black'
 */var Declaration=/*#__PURE__*/function(_Node){_inheritsLoose(Declaration,_Node);function Declaration(defaults){var _this;_this=_Node.call(this,defaults)||this;_this.type='decl';return _this;}/**
   * @memberof Declaration#
   * @member {string} prop The declaration’s property name.
   *
   * @example
   * const root = postcss.parse('a { color: black }')
   * const decl = root.first.first
   * decl.prop //=> 'color'
   */ /**
   * @memberof Declaration#
   * @member {string} value The declaration’s value.
   *
   * @example
   * const root = postcss.parse('a { color: black }')
   * const decl = root.first.first
   * decl.value //=> 'black'
   */ /**
   * @memberof Declaration#
   * @member {boolean} important `true` if the declaration
   *                             has an !important annotation.
   *
   * @example
   * const root = postcss.parse('a { color: black !important; color: red }')
   * root.first.first.important //=> true
   * root.first.last.important  //=> undefined
   */ /**
   * @memberof Declaration#
   * @member {object} raws Information to generate byte-to-byte equal
   *                       node string as it was in the origin input.
   *
   * Every parser saves its own properties,
   * but the default CSS parser uses:
   *
   * * `before`: the space symbols before the node. It also stores `*`
   *   and `_` symbols before the declaration (IE hack).
   * * `between`: the symbols between the property and value
   *   for declarations.
   * * `important`: the content of the important statement,
   *   if it is not just `!important`.
   *
   * PostCSS cleans declaration from comments and extra spaces,
   * but it stores origin content in raws properties.
   * As such, if you don’t change a declaration’s value,
   * PostCSS will use the raw value with comments.
   *
   * @example
   * const root = postcss.parse('a {\n  color:black\n}')
   * root.first.first.raws //=> { before: '\n  ', between: ':' }
   */return Declaration;}(_node["default"]);var _default=Declaration;exports["default"]=_default;module.exports=exports["default"];},{"./node":48}],44:[function(require,module,exports){"use strict";exports.__esModule=true;exports["default"]=void 0;var _path=_interopRequireDefault(require("path"));var _cssSyntaxError=_interopRequireDefault(require("./css-syntax-error"));var _previousMap=_interopRequireDefault(require("./previous-map"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}var sequence=0;/**
 * Represents the source CSS.
 *
 * @example
 * const root  = postcss.parse(css, { from: file })
 * const input = root.source.input
 */var Input=/*#__PURE__*/function(){/**
   * @param {string} css    Input CSS source.
   * @param {object} [opts] {@link Processor#process} options.
   */function Input(css,opts){if(opts===void 0){opts={};}if(css===null||_typeof(css)==='object'&&!css.toString){throw new Error("PostCSS received "+css+" instead of CSS string");}/**
     * Input CSS source
     *
     * @type {string}
     *
     * @example
     * const input = postcss.parse('a{}', { from: file }).input
     * input.css //=> "a{}"
     */this.css=css.toString();if(this.css[0]==="\uFEFF"||this.css[0]==="\uFFFE"){this.hasBOM=true;this.css=this.css.slice(1);}else{this.hasBOM=false;}if(opts.from){if(/^\w+:\/\//.test(opts.from)||_path["default"].isAbsolute(opts.from)){/**
         * The absolute path to the CSS source file defined
         * with the `from` option.
         *
         * @type {string}
         *
         * @example
         * const root = postcss.parse(css, { from: 'a.css' })
         * root.source.input.file //=> '/home/ai/a.css'
         */this.file=opts.from;}else{this.file=_path["default"].resolve(opts.from);}}var map=new _previousMap["default"](this.css,opts);if(map.text){/**
       * The input source map passed from a compilation step before PostCSS
       * (for example, from Sass compiler).
       *
       * @type {PreviousMap}
       *
       * @example
       * root.source.input.map.consumer().sources //=> ['a.sass']
       */this.map=map;var file=map.consumer().file;if(!this.file&&file)this.file=this.mapResolve(file);}if(!this.file){sequence+=1;/**
       * The unique ID of the CSS source. It will be created if `from` option
       * is not provided (because PostCSS does not know the file path).
       *
       * @type {string}
       *
       * @example
       * const root = postcss.parse(css)
       * root.source.input.file //=> undefined
       * root.source.input.id   //=> "<input css 1>"
       */this.id='<input css '+sequence+'>';}if(this.map)this.map.file=this.from;}var _proto=Input.prototype;_proto.error=function error(message,line,column,opts){if(opts===void 0){opts={};}var result;var origin=this.origin(line,column);if(origin){result=new _cssSyntaxError["default"](message,origin.line,origin.column,origin.source,origin.file,opts.plugin);}else{result=new _cssSyntaxError["default"](message,line,column,this.css,this.file,opts.plugin);}result.input={line:line,column:column,source:this.css};if(this.file)result.input.file=this.file;return result;}/**
   * Reads the input source map and returns a symbol position
   * in the input source (e.g., in a Sass file that was compiled
   * to CSS before being passed to PostCSS).
   *
   * @param {number} line   Line in input CSS.
   * @param {number} column Column in input CSS.
   *
   * @return {filePosition} Position in input source.
   *
   * @example
   * root.source.input.origin(1, 1) //=> { file: 'a.css', line: 3, column: 1 }
   */;_proto.origin=function origin(line,column){if(!this.map)return false;var consumer=this.map.consumer();var from=consumer.originalPositionFor({line:line,column:column});if(!from.source)return false;var result={file:this.mapResolve(from.source),line:from.line,column:from.column};var source=consumer.sourceContentFor(from.source);if(source)result.source=source;return result;};_proto.mapResolve=function mapResolve(file){if(/^\w+:\/\//.test(file)){return file;}return _path["default"].resolve(this.map.consumer().sourceRoot||'.',file);}/**
   * The CSS source identifier. Contains {@link Input#file} if the user
   * set the `from` option, or {@link Input#id} if they did not.
   *
   * @type {string}
   *
   * @example
   * const root = postcss.parse(css, { from: 'a.css' })
   * root.source.input.from //=> "/home/ai/a.css"
   *
   * const root = postcss.parse(css)
   * root.source.input.from //=> "<input css 1>"
   */;_createClass(Input,[{key:"from",get:function get(){return this.file||this.id;}}]);return Input;}();var _default=Input;/**
 * @typedef  {object} filePosition
 * @property {string} file   Path to file.
 * @property {number} line   Source line in file.
 * @property {number} column Source column in file.
 */exports["default"]=_default;module.exports=exports["default"];},{"./css-syntax-error":42,"./previous-map":52,"path":38}],45:[function(require,module,exports){(function(process){"use strict";exports.__esModule=true;exports["default"]=void 0;var _mapGenerator=_interopRequireDefault(require("./map-generator"));var _stringify2=_interopRequireDefault(require("./stringify"));var _warnOnce=_interopRequireDefault(require("./warn-once"));var _result=_interopRequireDefault(require("./result"));var _parse=_interopRequireDefault(require("./parse"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function isPromise(obj){return _typeof(obj)==='object'&&typeof obj.then==='function';}/**
 * A Promise proxy for the result of PostCSS transformations.
 *
 * A `LazyResult` instance is returned by {@link Processor#process}.
 *
 * @example
 * const lazy = postcss([autoprefixer]).process(css)
 */var LazyResult=/*#__PURE__*/function(){function LazyResult(processor,css,opts){this.stringified=false;this.processed=false;var root;if(_typeof(css)==='object'&&css!==null&&css.type==='root'){root=css;}else if(css instanceof LazyResult||css instanceof _result["default"]){root=css.root;if(css.map){if(typeof opts.map==='undefined')opts.map={};if(!opts.map.inline)opts.map.inline=false;opts.map.prev=css.map;}}else{var parser=_parse["default"];if(opts.syntax)parser=opts.syntax.parse;if(opts.parser)parser=opts.parser;if(parser.parse)parser=parser.parse;try{root=parser(css,opts);}catch(error){this.error=error;}}this.result=new _result["default"](processor,root,opts);}/**
   * Returns a {@link Processor} instance, which will be used
   * for CSS transformations.
   *
   * @type {Processor}
   */var _proto=LazyResult.prototype;/**
   * Processes input CSS through synchronous plugins
   * and calls {@link Result#warnings()}.
   *
   * @return {Warning[]} Warnings from plugins.
   */_proto.warnings=function warnings(){return this.sync().warnings();}/**
   * Alias for the {@link LazyResult#css} property.
   *
   * @example
   * lazy + '' === lazy.css
   *
   * @return {string} Output CSS.
   */;_proto.toString=function toString(){return this.css;}/**
   * Processes input CSS through synchronous and asynchronous plugins
   * and calls `onFulfilled` with a Result instance. If a plugin throws
   * an error, the `onRejected` callback will be executed.
   *
   * It implements standard Promise API.
   *
   * @param {onFulfilled} onFulfilled Callback will be executed
   *                                  when all plugins will finish work.
   * @param {onRejected}  onRejected  Callback will be executed on any error.
   *
   * @return {Promise} Promise API to make queue.
   *
   * @example
   * postcss([autoprefixer]).process(css, { from: cssPath }).then(result => {
   *   console.log(result.css)
   * })
   */;_proto.then=function then(onFulfilled,onRejected){if(process.env.NODE_ENV!=='production'){if(!('from'in this.opts)){(0,_warnOnce["default"])('Without `from` option PostCSS could generate wrong source map '+'and will not find Browserslist config. Set it to CSS file path '+'or to `undefined` to prevent this warning.');}}return this.async().then(onFulfilled,onRejected);}/**
   * Processes input CSS through synchronous and asynchronous plugins
   * and calls onRejected for each error thrown in any plugin.
   *
   * It implements standard Promise API.
   *
   * @param {onRejected} onRejected Callback will be executed on any error.
   *
   * @return {Promise} Promise API to make queue.
   *
   * @example
   * postcss([autoprefixer]).process(css).then(result => {
   *   console.log(result.css)
   * }).catch(error => {
   *   console.error(error)
   * })
   */;_proto["catch"]=function _catch(onRejected){return this.async()["catch"](onRejected);}/**
   * Processes input CSS through synchronous and asynchronous plugins
   * and calls onFinally on any error or when all plugins will finish work.
   *
   * It implements standard Promise API.
   *
   * @param {onFinally} onFinally Callback will be executed on any error or
   *                              when all plugins will finish work.
   *
   * @return {Promise} Promise API to make queue.
   *
   * @example
   * postcss([autoprefixer]).process(css).finally(() => {
   *   console.log('processing ended')
   * })
   */;_proto["finally"]=function _finally(onFinally){return this.async().then(onFinally,onFinally);};_proto.handleError=function handleError(error,plugin){try{this.error=error;if(error.name==='CssSyntaxError'&&!error.plugin){error.plugin=plugin.postcssPlugin;error.setMessage();}else if(plugin.postcssVersion){if(process.env.NODE_ENV!=='production'){var pluginName=plugin.postcssPlugin;var pluginVer=plugin.postcssVersion;var runtimeVer=this.result.processor.version;var a=pluginVer.split('.');var b=runtimeVer.split('.');if(a[0]!==b[0]||parseInt(a[1])>parseInt(b[1])){console.error('Unknown error from PostCSS plugin. Your current PostCSS '+'version is '+runtimeVer+', but '+pluginName+' uses '+pluginVer+'. Perhaps this is the source of the error below.');}}}}catch(err){if(console&&console.error)console.error(err);}};_proto.asyncTick=function asyncTick(resolve,reject){var _this=this;if(this.plugin>=this.processor.plugins.length){this.processed=true;return resolve();}try{var plugin=this.processor.plugins[this.plugin];var promise=this.run(plugin);this.plugin+=1;if(isPromise(promise)){promise.then(function(){_this.asyncTick(resolve,reject);})["catch"](function(error){_this.handleError(error,plugin);_this.processed=true;reject(error);});}else{this.asyncTick(resolve,reject);}}catch(error){this.processed=true;reject(error);}};_proto.async=function async(){var _this2=this;if(this.processed){return new Promise(function(resolve,reject){if(_this2.error){reject(_this2.error);}else{resolve(_this2.stringify());}});}if(this.processing){return this.processing;}this.processing=new Promise(function(resolve,reject){if(_this2.error)return reject(_this2.error);_this2.plugin=0;_this2.asyncTick(resolve,reject);}).then(function(){_this2.processed=true;return _this2.stringify();});return this.processing;};_proto.sync=function sync(){if(this.processed)return this.result;this.processed=true;if(this.processing){throw new Error('Use process(css).then(cb) to work with async plugins');}if(this.error)throw this.error;for(var _iterator=this.result.processor.plugins,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var plugin=_ref;var promise=this.run(plugin);if(isPromise(promise)){throw new Error('Use process(css).then(cb) to work with async plugins');}}return this.result;};_proto.run=function run(plugin){this.result.lastPlugin=plugin;try{return plugin(this.result.root,this.result);}catch(error){this.handleError(error,plugin);throw error;}};_proto.stringify=function stringify(){if(this.stringified)return this.result;this.stringified=true;this.sync();var opts=this.result.opts;var str=_stringify2["default"];if(opts.syntax)str=opts.syntax.stringify;if(opts.stringifier)str=opts.stringifier;if(str.stringify)str=str.stringify;var map=new _mapGenerator["default"](str,this.result.root,this.result.opts);var data=map.generate();this.result.css=data[0];this.result.map=data[1];return this.result;};_createClass(LazyResult,[{key:"processor",get:function get(){return this.result.processor;}/**
     * Options from the {@link Processor#process} call.
     *
     * @type {processOptions}
     */},{key:"opts",get:function get(){return this.result.opts;}/**
     * Processes input CSS through synchronous plugins, converts `Root`
     * to a CSS string and returns {@link Result#css}.
     *
     * This property will only work with synchronous plugins.
     * If the processor contains any asynchronous plugins
     * it will throw an error. This is why this method is only
     * for debug purpose, you should always use {@link LazyResult#then}.
     *
     * @type {string}
     * @see Result#css
     */},{key:"css",get:function get(){return this.stringify().css;}/**
     * An alias for the `css` property. Use it with syntaxes
     * that generate non-CSS output.
     *
     * This property will only work with synchronous plugins.
     * If the processor contains any asynchronous plugins
     * it will throw an error. This is why this method is only
     * for debug purpose, you should always use {@link LazyResult#then}.
     *
     * @type {string}
     * @see Result#content
     */},{key:"content",get:function get(){return this.stringify().content;}/**
     * Processes input CSS through synchronous plugins
     * and returns {@link Result#map}.
     *
     * This property will only work with synchronous plugins.
     * If the processor contains any asynchronous plugins
     * it will throw an error. This is why this method is only
     * for debug purpose, you should always use {@link LazyResult#then}.
     *
     * @type {SourceMapGenerator}
     * @see Result#map
     */},{key:"map",get:function get(){return this.stringify().map;}/**
     * Processes input CSS through synchronous plugins
     * and returns {@link Result#root}.
     *
     * This property will only work with synchronous plugins. If the processor
     * contains any asynchronous plugins it will throw an error.
     *
     * This is why this method is only for debug purpose,
     * you should always use {@link LazyResult#then}.
     *
     * @type {Root}
     * @see Result#root
     */},{key:"root",get:function get(){return this.sync().root;}/**
     * Processes input CSS through synchronous plugins
     * and returns {@link Result#messages}.
     *
     * This property will only work with synchronous plugins. If the processor
     * contains any asynchronous plugins it will throw an error.
     *
     * This is why this method is only for debug purpose,
     * you should always use {@link LazyResult#then}.
     *
     * @type {Message[]}
     * @see Result#messages
     */},{key:"messages",get:function get(){return this.sync().messages;}}]);return LazyResult;}();var _default=LazyResult;/**
 * @callback onFulfilled
 * @param {Result} result
 */ /**
 * @callback onRejected
 * @param {Error} error
 */exports["default"]=_default;module.exports=exports["default"];}).call(this,require('_process'));},{"./map-generator":47,"./parse":49,"./result":54,"./stringify":58,"./warn-once":61,"_process":63}],46:[function(require,module,exports){"use strict";exports.__esModule=true;exports["default"]=void 0;/**
 * Contains helpers for safely splitting lists of CSS values,
 * preserving parentheses and quotes.
 *
 * @example
 * const list = postcss.list
 *
 * @namespace list
 */var list={split:function split(string,separators,last){var array=[];var current='';var split=false;var func=0;var quote=false;var escape=false;for(var i=0;i<string.length;i++){var letter=string[i];if(quote){if(escape){escape=false;}else if(letter==='\\'){escape=true;}else if(letter===quote){quote=false;}}else if(letter==='"'||letter==='\''){quote=letter;}else if(letter==='('){func+=1;}else if(letter===')'){if(func>0)func-=1;}else if(func===0){if(separators.indexOf(letter)!==-1)split=true;}if(split){if(current!=='')array.push(current.trim());current='';split=false;}else{current+=letter;}}if(last||current!=='')array.push(current.trim());return array;},/**
   * Safely splits space-separated values (such as those for `background`,
   * `border-radius`, and other shorthand properties).
   *
   * @param {string} string Space-separated values.
   *
   * @return {string[]} Split values.
   *
   * @example
   * postcss.list.space('1px calc(10% + 1px)') //=> ['1px', 'calc(10% + 1px)']
   */space:function space(string){var spaces=[' ','\n','\t'];return list.split(string,spaces);},/**
   * Safely splits comma-separated values (such as those for `transition-*`
   * and `background` properties).
   *
   * @param {string} string Comma-separated values.
   *
   * @return {string[]} Split values.
   *
   * @example
   * postcss.list.comma('black, linear-gradient(white, black)')
   * //=> ['black', 'linear-gradient(white, black)']
   */comma:function comma(string){return list.split(string,[','],true);}};var _default=list;exports["default"]=_default;module.exports=exports["default"];},{}],47:[function(require,module,exports){(function(Buffer){"use strict";exports.__esModule=true;exports["default"]=void 0;var _sourceMap=_interopRequireDefault(require("source-map"));var _path=_interopRequireDefault(require("path"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}var MapGenerator=/*#__PURE__*/function(){function MapGenerator(stringify,root,opts){this.stringify=stringify;this.mapOpts=opts.map||{};this.root=root;this.opts=opts;}var _proto=MapGenerator.prototype;_proto.isMap=function isMap(){if(typeof this.opts.map!=='undefined'){return!!this.opts.map;}return this.previous().length>0;};_proto.previous=function previous(){var _this=this;if(!this.previousMaps){this.previousMaps=[];this.root.walk(function(node){if(node.source&&node.source.input.map){var map=node.source.input.map;if(_this.previousMaps.indexOf(map)===-1){_this.previousMaps.push(map);}}});}return this.previousMaps;};_proto.isInline=function isInline(){if(typeof this.mapOpts.inline!=='undefined'){return this.mapOpts.inline;}var annotation=this.mapOpts.annotation;if(typeof annotation!=='undefined'&&annotation!==true){return false;}if(this.previous().length){return this.previous().some(function(i){return i.inline;});}return true;};_proto.isSourcesContent=function isSourcesContent(){if(typeof this.mapOpts.sourcesContent!=='undefined'){return this.mapOpts.sourcesContent;}if(this.previous().length){return this.previous().some(function(i){return i.withContent();});}return true;};_proto.clearAnnotation=function clearAnnotation(){if(this.mapOpts.annotation===false)return;var node;for(var i=this.root.nodes.length-1;i>=0;i--){node=this.root.nodes[i];if(node.type!=='comment')continue;if(node.text.indexOf('# sourceMappingURL=')===0){this.root.removeChild(i);}}};_proto.setSourcesContent=function setSourcesContent(){var _this2=this;var already={};this.root.walk(function(node){if(node.source){var from=node.source.input.from;if(from&&!already[from]){already[from]=true;var relative=_this2.relative(from);_this2.map.setSourceContent(relative,node.source.input.css);}}});};_proto.applyPrevMaps=function applyPrevMaps(){for(var _iterator=this.previous(),_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var prev=_ref;var from=this.relative(prev.file);var root=prev.root||_path["default"].dirname(prev.file);var map=void 0;if(this.mapOpts.sourcesContent===false){map=new _sourceMap["default"].SourceMapConsumer(prev.text);if(map.sourcesContent){map.sourcesContent=map.sourcesContent.map(function(){return null;});}}else{map=prev.consumer();}this.map.applySourceMap(map,from,this.relative(root));}};_proto.isAnnotation=function isAnnotation(){if(this.isInline()){return true;}if(typeof this.mapOpts.annotation!=='undefined'){return this.mapOpts.annotation;}if(this.previous().length){return this.previous().some(function(i){return i.annotation;});}return true;};_proto.toBase64=function toBase64(str){if(Buffer){return Buffer.from(str).toString('base64');}return window.btoa(unescape(encodeURIComponent(str)));};_proto.addAnnotation=function addAnnotation(){var content;if(this.isInline()){content='data:application/json;base64,'+this.toBase64(this.map.toString());}else if(typeof this.mapOpts.annotation==='string'){content=this.mapOpts.annotation;}else{content=this.outputFile()+'.map';}var eol='\n';if(this.css.indexOf('\r\n')!==-1)eol='\r\n';this.css+=eol+'/*# sourceMappingURL='+content+' */';};_proto.outputFile=function outputFile(){if(this.opts.to){return this.relative(this.opts.to);}if(this.opts.from){return this.relative(this.opts.from);}return'to.css';};_proto.generateMap=function generateMap(){this.generateString();if(this.isSourcesContent())this.setSourcesContent();if(this.previous().length>0)this.applyPrevMaps();if(this.isAnnotation())this.addAnnotation();if(this.isInline()){return[this.css];}return[this.css,this.map];};_proto.relative=function relative(file){if(file.indexOf('<')===0)return file;if(/^\w+:\/\//.test(file))return file;var from=this.opts.to?_path["default"].dirname(this.opts.to):'.';if(typeof this.mapOpts.annotation==='string'){from=_path["default"].dirname(_path["default"].resolve(from,this.mapOpts.annotation));}file=_path["default"].relative(from,file);if(_path["default"].sep==='\\'){return file.replace(/\\/g,'/');}return file;};_proto.sourcePath=function sourcePath(node){if(this.mapOpts.from){return this.mapOpts.from;}return this.relative(node.source.input.from);};_proto.generateString=function generateString(){var _this3=this;this.css='';this.map=new _sourceMap["default"].SourceMapGenerator({file:this.outputFile()});var line=1;var column=1;var lines,last;this.stringify(this.root,function(str,node,type){_this3.css+=str;if(node&&type!=='end'){if(node.source&&node.source.start){_this3.map.addMapping({source:_this3.sourcePath(node),generated:{line:line,column:column-1},original:{line:node.source.start.line,column:node.source.start.column-1}});}else{_this3.map.addMapping({source:'<no source>',original:{line:1,column:0},generated:{line:line,column:column-1}});}}lines=str.match(/\n/g);if(lines){line+=lines.length;last=str.lastIndexOf('\n');column=str.length-last;}else{column+=str.length;}if(node&&type!=='start'){var p=node.parent||{raws:{}};if(node.type!=='decl'||node!==p.last||p.raws.semicolon){if(node.source&&node.source.end){_this3.map.addMapping({source:_this3.sourcePath(node),generated:{line:line,column:column-2},original:{line:node.source.end.line,column:node.source.end.column-1}});}else{_this3.map.addMapping({source:'<no source>',original:{line:1,column:0},generated:{line:line,column:column-1}});}}}});};_proto.generate=function generate(){this.clearAnnotation();if(this.isMap()){return this.generateMap();}var result='';this.stringify(this.root,function(i){result+=i;});return[result];};return MapGenerator;}();var _default=MapGenerator;exports["default"]=_default;module.exports=exports["default"];}).call(this,require("buffer").Buffer);},{"buffer":3,"path":38,"source-map":78}],48:[function(require,module,exports){(function(process){"use strict";exports.__esModule=true;exports["default"]=void 0;var _cssSyntaxError=_interopRequireDefault(require("./css-syntax-error"));var _stringifier=_interopRequireDefault(require("./stringifier"));var _stringify=_interopRequireDefault(require("./stringify"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function cloneNode(obj,parent){var cloned=new obj.constructor();for(var i in obj){if(!obj.hasOwnProperty(i))continue;var value=obj[i];var type=_typeof(value);if(i==='parent'&&type==='object'){if(parent)cloned[i]=parent;}else if(i==='source'){cloned[i]=value;}else if(value instanceof Array){cloned[i]=value.map(function(j){return cloneNode(j,cloned);});}else{if(type==='object'&&value!==null)value=cloneNode(value);cloned[i]=value;}}return cloned;}/**
 * All node classes inherit the following common methods.
 *
 * @abstract
 */var Node=/*#__PURE__*/function(){/**
   * @param {object} [defaults] Value for node properties.
   */function Node(defaults){if(defaults===void 0){defaults={};}this.raws={};if(process.env.NODE_ENV!=='production'){if(_typeof(defaults)!=='object'&&typeof defaults!=='undefined'){throw new Error('PostCSS nodes constructor accepts object, not '+JSON.stringify(defaults));}}for(var name in defaults){this[name]=defaults[name];}}/**
   * Returns a `CssSyntaxError` instance containing the original position
   * of the node in the source, showing line and column numbers and also
   * a small excerpt to facilitate debugging.
   *
   * If present, an input source map will be used to get the original position
   * of the source, even from a previous compilation step
   * (e.g., from Sass compilation).
   *
   * This method produces very useful error messages.
   *
   * @param {string} message     Error description.
   * @param {object} [opts]      Options.
   * @param {string} opts.plugin Plugin name that created this error.
   *                             PostCSS will set it automatically.
   * @param {string} opts.word   A word inside a node’s string that should
   *                             be highlighted as the source of the error.
   * @param {number} opts.index  An index inside a node’s string that should
   *                             be highlighted as the source of the error.
   *
   * @return {CssSyntaxError} Error object to throw it.
   *
   * @example
   * if (!variables[name]) {
   *   throw decl.error('Unknown variable ' + name, { word: name })
   *   // CssSyntaxError: postcss-vars:a.sass:4:3: Unknown variable $black
   *   //   color: $black
   *   // a
   *   //          ^
   *   //   background: white
   * }
   */var _proto=Node.prototype;_proto.error=function error(message,opts){if(opts===void 0){opts={};}if(this.source){var pos=this.positionBy(opts);return this.source.input.error(message,pos.line,pos.column,opts);}return new _cssSyntaxError["default"](message);}/**
   * This method is provided as a convenience wrapper for {@link Result#warn}.
   *
   * @param {Result} result      The {@link Result} instance
   *                             that will receive the warning.
   * @param {string} text        Warning message.
   * @param {object} [opts]      Options
   * @param {string} opts.plugin Plugin name that created this warning.
   *                             PostCSS will set it automatically.
   * @param {string} opts.word   A word inside a node’s string that should
   *                             be highlighted as the source of the warning.
   * @param {number} opts.index  An index inside a node’s string that should
   *                             be highlighted as the source of the warning.
   *
   * @return {Warning} Created warning object.
   *
   * @example
   * const plugin = postcss.plugin('postcss-deprecated', () => {
   *   return (root, result) => {
   *     root.walkDecls('bad', decl => {
   *       decl.warn(result, 'Deprecated property bad')
   *     })
   *   }
   * })
   */;_proto.warn=function warn(result,text,opts){var data={node:this};for(var i in opts){data[i]=opts[i];}return result.warn(text,data);}/**
   * Removes the node from its parent and cleans the parent properties
   * from the node and its children.
   *
   * @example
   * if (decl.prop.match(/^-webkit-/)) {
   *   decl.remove()
   * }
   *
   * @return {Node} Node to make calls chain.
   */;_proto.remove=function remove(){if(this.parent){this.parent.removeChild(this);}this.parent=undefined;return this;}/**
   * Returns a CSS string representing the node.
   *
   * @param {stringifier|syntax} [stringifier] A syntax to use
   *                                           in string generation.
   *
   * @return {string} CSS string of this node.
   *
   * @example
   * postcss.rule({ selector: 'a' }).toString() //=> "a {}"
   */;_proto.toString=function toString(stringifier){if(stringifier===void 0){stringifier=_stringify["default"];}if(stringifier.stringify)stringifier=stringifier.stringify;var result='';stringifier(this,function(i){result+=i;});return result;}/**
   * Returns an exact clone of the node.
   *
   * The resulting cloned node and its (cloned) children will retain
   * code style properties.
   *
   * @param {object} [overrides] New properties to override in the clone.
   *
   * @example
   * decl.raws.before    //=> "\n  "
   * const cloned = decl.clone({ prop: '-moz-' + decl.prop })
   * cloned.raws.before  //=> "\n  "
   * cloned.toString()   //=> -moz-transform: scale(0)
   *
   * @return {Node} Clone of the node.
   */;_proto.clone=function clone(overrides){if(overrides===void 0){overrides={};}var cloned=cloneNode(this);for(var name in overrides){cloned[name]=overrides[name];}return cloned;}/**
   * Shortcut to clone the node and insert the resulting cloned node
   * before the current node.
   *
   * @param {object} [overrides] Mew properties to override in the clone.
   *
   * @example
   * decl.cloneBefore({ prop: '-moz-' + decl.prop })
   *
   * @return {Node} New node
   */;_proto.cloneBefore=function cloneBefore(overrides){if(overrides===void 0){overrides={};}var cloned=this.clone(overrides);this.parent.insertBefore(this,cloned);return cloned;}/**
   * Shortcut to clone the node and insert the resulting cloned node
   * after the current node.
   *
   * @param {object} [overrides] New properties to override in the clone.
   *
   * @return {Node} New node.
   */;_proto.cloneAfter=function cloneAfter(overrides){if(overrides===void 0){overrides={};}var cloned=this.clone(overrides);this.parent.insertAfter(this,cloned);return cloned;}/**
   * Inserts node(s) before the current node and removes the current node.
   *
   * @param {...Node} nodes Mode(s) to replace current one.
   *
   * @example
   * if (atrule.name === 'mixin') {
   *   atrule.replaceWith(mixinRules[atrule.params])
   * }
   *
   * @return {Node} Current node to methods chain.
   */;_proto.replaceWith=function replaceWith(){if(this.parent){for(var _len=arguments.length,nodes=new Array(_len),_key=0;_key<_len;_key++){nodes[_key]=arguments[_key];}for(var _i=0,_nodes=nodes;_i<_nodes.length;_i++){var node=_nodes[_i];this.parent.insertBefore(this,node);}this.remove();}return this;}/**
   * Returns the next child of the node’s parent.
   * Returns `undefined` if the current node is the last child.
   *
   * @return {Node|undefined} Next node.
   *
   * @example
   * if (comment.text === 'delete next') {
   *   const next = comment.next()
   *   if (next) {
   *     next.remove()
   *   }
   * }
   */;_proto.next=function next(){if(!this.parent)return undefined;var index=this.parent.index(this);return this.parent.nodes[index+1];}/**
   * Returns the previous child of the node’s parent.
   * Returns `undefined` if the current node is the first child.
   *
   * @return {Node|undefined} Previous node.
   *
   * @example
   * const annotation = decl.prev()
   * if (annotation.type === 'comment') {
   *   readAnnotation(annotation.text)
   * }
   */;_proto.prev=function prev(){if(!this.parent)return undefined;var index=this.parent.index(this);return this.parent.nodes[index-1];}/**
   * Insert new node before current node to current node’s parent.
   *
   * Just alias for `node.parent.insertBefore(node, add)`.
   *
   * @param {Node|object|string|Node[]} add New node.
   *
   * @return {Node} This node for methods chain.
   *
   * @example
   * decl.before('content: ""')
   */;_proto.before=function before(add){this.parent.insertBefore(this,add);return this;}/**
   * Insert new node after current node to current node’s parent.
   *
   * Just alias for `node.parent.insertAfter(node, add)`.
   *
   * @param {Node|object|string|Node[]} add New node.
   *
   * @return {Node} This node for methods chain.
   *
   * @example
   * decl.after('color: black')
   */;_proto.after=function after(add){this.parent.insertAfter(this,add);return this;};_proto.toJSON=function toJSON(){var fixed={};for(var name in this){if(!this.hasOwnProperty(name))continue;if(name==='parent')continue;var value=this[name];if(value instanceof Array){fixed[name]=value.map(function(i){if(_typeof(i)==='object'&&i.toJSON){return i.toJSON();}else{return i;}});}else if(_typeof(value)==='object'&&value.toJSON){fixed[name]=value.toJSON();}else{fixed[name]=value;}}return fixed;}/**
   * Returns a {@link Node#raws} value. If the node is missing
   * the code style property (because the node was manually built or cloned),
   * PostCSS will try to autodetect the code style property by looking
   * at other nodes in the tree.
   *
   * @param {string} prop          Name of code style property.
   * @param {string} [defaultType] Name of default value, it can be missed
   *                               if the value is the same as prop.
   *
   * @example
   * const root = postcss.parse('a { background: white }')
   * root.nodes[0].append({ prop: 'color', value: 'black' })
   * root.nodes[0].nodes[1].raws.before   //=> undefined
   * root.nodes[0].nodes[1].raw('before') //=> ' '
   *
   * @return {string} Code style value.
   */;_proto.raw=function raw(prop,defaultType){var str=new _stringifier["default"]();return str.raw(this,prop,defaultType);}/**
   * Finds the Root instance of the node’s tree.
   *
   * @example
   * root.nodes[0].nodes[0].root() === root
   *
   * @return {Root} Root parent.
   */;_proto.root=function root(){var result=this;while(result.parent){result=result.parent;}return result;}/**
   * Clear the code style properties for the node and its children.
   *
   * @param {boolean} [keepBetween] Keep the raws.between symbols.
   *
   * @return {undefined}
   *
   * @example
   * node.raws.before  //=> ' '
   * node.cleanRaws()
   * node.raws.before  //=> undefined
   */;_proto.cleanRaws=function cleanRaws(keepBetween){delete this.raws.before;delete this.raws.after;if(!keepBetween)delete this.raws.between;};_proto.positionInside=function positionInside(index){var string=this.toString();var column=this.source.start.column;var line=this.source.start.line;for(var i=0;i<index;i++){if(string[i]==='\n'){column=1;line+=1;}else{column+=1;}}return{line:line,column:column};};_proto.positionBy=function positionBy(opts){var pos=this.source.start;if(opts.index){pos=this.positionInside(opts.index);}else if(opts.word){var index=this.toString().indexOf(opts.word);if(index!==-1)pos=this.positionInside(index);}return pos;}/**
   * @memberof Node#
   * @member {string} type String representing the node’s type.
   *                       Possible values are `root`, `atrule`, `rule`,
   *                       `decl`, or `comment`.
   *
   * @example
   * postcss.decl({ prop: 'color', value: 'black' }).type //=> 'decl'
   */ /**
   * @memberof Node#
   * @member {Container} parent The node’s parent node.
   *
   * @example
   * root.nodes[0].parent === root
   */ /**
   * @memberof Node#
   * @member {source} source The input source of the node.
   *
   * The property is used in source map generation.
   *
   * If you create a node manually (e.g., with `postcss.decl()`),
   * that node will not have a `source` property and will be absent
   * from the source map. For this reason, the plugin developer should
   * consider cloning nodes to create new ones (in which case the new node’s
   * source will reference the original, cloned node) or setting
   * the `source` property manually.
   *
   * ```js
   * // Bad
   * const prefixed = postcss.decl({
   *   prop: '-moz-' + decl.prop,
   *   value: decl.value
   * })
   *
   * // Good
   * const prefixed = decl.clone({ prop: '-moz-' + decl.prop })
   * ```
   *
   * ```js
   * if (atrule.name === 'add-link') {
   *   const rule = postcss.rule({ selector: 'a', source: atrule.source })
   *   atrule.parent.insertBefore(atrule, rule)
   * }
   * ```
   *
   * @example
   * decl.source.input.from //=> '/home/ai/a.sass'
   * decl.source.start      //=> { line: 10, column: 2 }
   * decl.source.end        //=> { line: 10, column: 12 }
   */ /**
   * @memberof Node#
   * @member {object} raws Information to generate byte-to-byte equal
   *                       node string as it was in the origin input.
   *
   * Every parser saves its own properties,
   * but the default CSS parser uses:
   *
   * * `before`: the space symbols before the node. It also stores `*`
   *   and `_` symbols before the declaration (IE hack).
   * * `after`: the space symbols after the last child of the node
   *   to the end of the node.
   * * `between`: the symbols between the property and value
   *   for declarations, selector and `{` for rules, or last parameter
   *   and `{` for at-rules.
   * * `semicolon`: contains true if the last child has
   *   an (optional) semicolon.
   * * `afterName`: the space between the at-rule name and its parameters.
   * * `left`: the space symbols between `/*` and the comment’s text.
   * * `right`: the space symbols between the comment’s text
   *   and <code>*&#47;</code>.
   * * `important`: the content of the important statement,
   *   if it is not just `!important`.
   *
   * PostCSS cleans selectors, declaration values and at-rule parameters
   * from comments and extra spaces, but it stores origin content in raws
   * properties. As such, if you don’t change a declaration’s value,
   * PostCSS will use the raw value with comments.
   *
   * @example
   * const root = postcss.parse('a {\n  color:black\n}')
   * root.first.first.raws //=> { before: '\n  ', between: ':' }
   */;return Node;}();var _default=Node;/**
 * @typedef {object} position
 * @property {number} line   Source line in file.
 * @property {number} column Source column in file.
 */ /**
 * @typedef {object} source
 * @property {Input} input    {@link Input} with input file
 * @property {position} start The starting position of the node’s source.
 * @property {position} end   The ending position of the node’s source.
 */exports["default"]=_default;module.exports=exports["default"];}).call(this,require('_process'));},{"./css-syntax-error":42,"./stringifier":57,"./stringify":58,"_process":63}],49:[function(require,module,exports){(function(process){"use strict";exports.__esModule=true;exports["default"]=void 0;var _parser=_interopRequireDefault(require("./parser"));var _input=_interopRequireDefault(require("./input"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function parse(css,opts){var input=new _input["default"](css,opts);var parser=new _parser["default"](input);try{parser.parse();}catch(e){if(process.env.NODE_ENV!=='production'){if(e.name==='CssSyntaxError'&&opts&&opts.from){if(/\.scss$/i.test(opts.from)){e.message+='\nYou tried to parse SCSS with '+'the standard CSS parser; '+'try again with the postcss-scss parser';}else if(/\.sass/i.test(opts.from)){e.message+='\nYou tried to parse Sass with '+'the standard CSS parser; '+'try again with the postcss-sass parser';}else if(/\.less$/i.test(opts.from)){e.message+='\nYou tried to parse Less with '+'the standard CSS parser; '+'try again with the postcss-less parser';}}}throw e;}return parser.root;}var _default=parse;exports["default"]=_default;module.exports=exports["default"];}).call(this,require('_process'));},{"./input":44,"./parser":50,"_process":63}],50:[function(require,module,exports){"use strict";exports.__esModule=true;exports["default"]=void 0;var _declaration=_interopRequireDefault(require("./declaration"));var _tokenize=_interopRequireDefault(require("./tokenize"));var _comment=_interopRequireDefault(require("./comment"));var _atRule=_interopRequireDefault(require("./at-rule"));var _root=_interopRequireDefault(require("./root"));var _rule=_interopRequireDefault(require("./rule"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}var Parser=/*#__PURE__*/function(){function Parser(input){this.input=input;this.root=new _root["default"]();this.current=this.root;this.spaces='';this.semicolon=false;this.createTokenizer();this.root.source={input:input,start:{line:1,column:1}};}var _proto=Parser.prototype;_proto.createTokenizer=function createTokenizer(){this.tokenizer=(0,_tokenize["default"])(this.input);};_proto.parse=function parse(){var token;while(!this.tokenizer.endOfFile()){token=this.tokenizer.nextToken();switch(token[0]){case'space':this.spaces+=token[1];break;case';':this.freeSemicolon(token);break;case'}':this.end(token);break;case'comment':this.comment(token);break;case'at-word':this.atrule(token);break;case'{':this.emptyRule(token);break;default:this.other(token);break;}}this.endFile();};_proto.comment=function comment(token){var node=new _comment["default"]();this.init(node,token[2],token[3]);node.source.end={line:token[4],column:token[5]};var text=token[1].slice(2,-2);if(/^\s*$/.test(text)){node.text='';node.raws.left=text;node.raws.right='';}else{var match=text.match(/^(\s*)([^]*[^\s])(\s*)$/);node.text=match[2];node.raws.left=match[1];node.raws.right=match[3];}};_proto.emptyRule=function emptyRule(token){var node=new _rule["default"]();this.init(node,token[2],token[3]);node.selector='';node.raws.between='';this.current=node;};_proto.other=function other(start){var end=false;var type=null;var colon=false;var bracket=null;var brackets=[];var tokens=[];var token=start;while(token){type=token[0];tokens.push(token);if(type==='('||type==='['){if(!bracket)bracket=token;brackets.push(type==='('?')':']');}else if(brackets.length===0){if(type===';'){if(colon){this.decl(tokens);return;}else{break;}}else if(type==='{'){this.rule(tokens);return;}else if(type==='}'){this.tokenizer.back(tokens.pop());end=true;break;}else if(type===':'){colon=true;}}else if(type===brackets[brackets.length-1]){brackets.pop();if(brackets.length===0)bracket=null;}token=this.tokenizer.nextToken();}if(this.tokenizer.endOfFile())end=true;if(brackets.length>0)this.unclosedBracket(bracket);if(end&&colon){while(tokens.length){token=tokens[tokens.length-1][0];if(token!=='space'&&token!=='comment')break;this.tokenizer.back(tokens.pop());}this.decl(tokens);}else{this.unknownWord(tokens);}};_proto.rule=function rule(tokens){tokens.pop();var node=new _rule["default"]();this.init(node,tokens[0][2],tokens[0][3]);node.raws.between=this.spacesAndCommentsFromEnd(tokens);this.raw(node,'selector',tokens);this.current=node;};_proto.decl=function decl(tokens){var node=new _declaration["default"]();this.init(node);var last=tokens[tokens.length-1];if(last[0]===';'){this.semicolon=true;tokens.pop();}if(last[4]){node.source.end={line:last[4],column:last[5]};}else{node.source.end={line:last[2],column:last[3]};}while(tokens[0][0]!=='word'){if(tokens.length===1)this.unknownWord(tokens);node.raws.before+=tokens.shift()[1];}node.source.start={line:tokens[0][2],column:tokens[0][3]};node.prop='';while(tokens.length){var type=tokens[0][0];if(type===':'||type==='space'||type==='comment'){break;}node.prop+=tokens.shift()[1];}node.raws.between='';var token;while(tokens.length){token=tokens.shift();if(token[0]===':'){node.raws.between+=token[1];break;}else{if(token[0]==='word'&&/\w/.test(token[1])){this.unknownWord([token]);}node.raws.between+=token[1];}}if(node.prop[0]==='_'||node.prop[0]==='*'){node.raws.before+=node.prop[0];node.prop=node.prop.slice(1);}node.raws.between+=this.spacesAndCommentsFromStart(tokens);this.precheckMissedSemicolon(tokens);for(var i=tokens.length-1;i>0;i--){token=tokens[i];if(token[1].toLowerCase()==='!important'){node.important=true;var string=this.stringFrom(tokens,i);string=this.spacesFromEnd(tokens)+string;if(string!==' !important')node.raws.important=string;break;}else if(token[1].toLowerCase()==='important'){var cache=tokens.slice(0);var str='';for(var j=i;j>0;j--){var _type=cache[j][0];if(str.trim().indexOf('!')===0&&_type!=='space'){break;}str=cache.pop()[1]+str;}if(str.trim().indexOf('!')===0){node.important=true;node.raws.important=str;tokens=cache;}}if(token[0]!=='space'&&token[0]!=='comment'){break;}}this.raw(node,'value',tokens);if(node.value.indexOf(':')!==-1)this.checkMissedSemicolon(tokens);};_proto.atrule=function atrule(token){var node=new _atRule["default"]();node.name=token[1].slice(1);if(node.name===''){this.unnamedAtrule(node,token);}this.init(node,token[2],token[3]);var prev;var shift;var last=false;var open=false;var params=[];while(!this.tokenizer.endOfFile()){token=this.tokenizer.nextToken();if(token[0]===';'){node.source.end={line:token[2],column:token[3]};this.semicolon=true;break;}else if(token[0]==='{'){open=true;break;}else if(token[0]==='}'){if(params.length>0){shift=params.length-1;prev=params[shift];while(prev&&prev[0]==='space'){prev=params[--shift];}if(prev){node.source.end={line:prev[4],column:prev[5]};}}this.end(token);break;}else{params.push(token);}if(this.tokenizer.endOfFile()){last=true;break;}}node.raws.between=this.spacesAndCommentsFromEnd(params);if(params.length){node.raws.afterName=this.spacesAndCommentsFromStart(params);this.raw(node,'params',params);if(last){token=params[params.length-1];node.source.end={line:token[4],column:token[5]};this.spaces=node.raws.between;node.raws.between='';}}else{node.raws.afterName='';node.params='';}if(open){node.nodes=[];this.current=node;}};_proto.end=function end(token){if(this.current.nodes&&this.current.nodes.length){this.current.raws.semicolon=this.semicolon;}this.semicolon=false;this.current.raws.after=(this.current.raws.after||'')+this.spaces;this.spaces='';if(this.current.parent){this.current.source.end={line:token[2],column:token[3]};this.current=this.current.parent;}else{this.unexpectedClose(token);}};_proto.endFile=function endFile(){if(this.current.parent)this.unclosedBlock();if(this.current.nodes&&this.current.nodes.length){this.current.raws.semicolon=this.semicolon;}this.current.raws.after=(this.current.raws.after||'')+this.spaces;};_proto.freeSemicolon=function freeSemicolon(token){this.spaces+=token[1];if(this.current.nodes){var prev=this.current.nodes[this.current.nodes.length-1];if(prev&&prev.type==='rule'&&!prev.raws.ownSemicolon){prev.raws.ownSemicolon=this.spaces;this.spaces='';}}}// Helpers
;_proto.init=function init(node,line,column){this.current.push(node);node.source={start:{line:line,column:column},input:this.input};node.raws.before=this.spaces;this.spaces='';if(node.type!=='comment')this.semicolon=false;};_proto.raw=function raw(node,prop,tokens){var token,type;var length=tokens.length;var value='';var clean=true;var next,prev;var pattern=/^([.|#])?([\w])+/i;for(var i=0;i<length;i+=1){token=tokens[i];type=token[0];if(type==='comment'&&node.type==='rule'){prev=tokens[i-1];next=tokens[i+1];if(prev[0]!=='space'&&next[0]!=='space'&&pattern.test(prev[1])&&pattern.test(next[1])){value+=token[1];}else{clean=false;}continue;}if(type==='comment'||type==='space'&&i===length-1){clean=false;}else{value+=token[1];}}if(!clean){var raw=tokens.reduce(function(all,i){return all+i[1];},'');node.raws[prop]={value:value,raw:raw};}node[prop]=value;};_proto.spacesAndCommentsFromEnd=function spacesAndCommentsFromEnd(tokens){var lastTokenType;var spaces='';while(tokens.length){lastTokenType=tokens[tokens.length-1][0];if(lastTokenType!=='space'&&lastTokenType!=='comment')break;spaces=tokens.pop()[1]+spaces;}return spaces;};_proto.spacesAndCommentsFromStart=function spacesAndCommentsFromStart(tokens){var next;var spaces='';while(tokens.length){next=tokens[0][0];if(next!=='space'&&next!=='comment')break;spaces+=tokens.shift()[1];}return spaces;};_proto.spacesFromEnd=function spacesFromEnd(tokens){var lastTokenType;var spaces='';while(tokens.length){lastTokenType=tokens[tokens.length-1][0];if(lastTokenType!=='space')break;spaces=tokens.pop()[1]+spaces;}return spaces;};_proto.stringFrom=function stringFrom(tokens,from){var result='';for(var i=from;i<tokens.length;i++){result+=tokens[i][1];}tokens.splice(from,tokens.length-from);return result;};_proto.colon=function colon(tokens){var brackets=0;var token,type,prev;for(var i=0;i<tokens.length;i++){token=tokens[i];type=token[0];if(type==='('){brackets+=1;}if(type===')'){brackets-=1;}if(brackets===0&&type===':'){if(!prev){this.doubleColon(token);}else if(prev[0]==='word'&&prev[1]==='progid'){continue;}else{return i;}}prev=token;}return false;}// Errors
;_proto.unclosedBracket=function unclosedBracket(bracket){throw this.input.error('Unclosed bracket',bracket[2],bracket[3]);};_proto.unknownWord=function unknownWord(tokens){throw this.input.error('Unknown word',tokens[0][2],tokens[0][3]);};_proto.unexpectedClose=function unexpectedClose(token){throw this.input.error('Unexpected }',token[2],token[3]);};_proto.unclosedBlock=function unclosedBlock(){var pos=this.current.source.start;throw this.input.error('Unclosed block',pos.line,pos.column);};_proto.doubleColon=function doubleColon(token){throw this.input.error('Double colon',token[2],token[3]);};_proto.unnamedAtrule=function unnamedAtrule(node,token){throw this.input.error('At-rule without name',token[2],token[3]);};_proto.precheckMissedSemicolon=function precheckMissedSemicolon()/* tokens */{// Hook for Safe Parser
};_proto.checkMissedSemicolon=function checkMissedSemicolon(tokens){var colon=this.colon(tokens);if(colon===false)return;var founded=0;var token;for(var j=colon-1;j>=0;j--){token=tokens[j];if(token[0]!=='space'){founded+=1;if(founded===2)break;}}throw this.input.error('Missed semicolon',token[2],token[3]);};return Parser;}();exports["default"]=Parser;module.exports=exports["default"];},{"./at-rule":39,"./comment":40,"./declaration":43,"./root":55,"./rule":56,"./tokenize":59}],51:[function(require,module,exports){"use strict";exports.__esModule=true;exports["default"]=void 0;var _declaration=_interopRequireDefault(require("./declaration"));var _processor=_interopRequireDefault(require("./processor"));var _stringify=_interopRequireDefault(require("./stringify"));var _comment=_interopRequireDefault(require("./comment"));var _atRule=_interopRequireDefault(require("./at-rule"));var _vendor=_interopRequireDefault(require("./vendor"));var _parse=_interopRequireDefault(require("./parse"));var _list=_interopRequireDefault(require("./list"));var _rule=_interopRequireDefault(require("./rule"));var _root=_interopRequireDefault(require("./root"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}/**
 * Create a new {@link Processor} instance that will apply `plugins`
 * as CSS processors.
 *
 * @param {Array.<Plugin|pluginFunction>|Processor} plugins PostCSS plugins.
 *        See {@link Processor#use} for plugin format.
 *
 * @return {Processor} Processor to process multiple CSS.
 *
 * @example
 * import postcss from 'postcss'
 *
 * postcss(plugins).process(css, { from, to }).then(result => {
 *   console.log(result.css)
 * })
 *
 * @namespace postcss
 */function postcss(){for(var _len=arguments.length,plugins=new Array(_len),_key=0;_key<_len;_key++){plugins[_key]=arguments[_key];}if(plugins.length===1&&Array.isArray(plugins[0])){plugins=plugins[0];}return new _processor["default"](plugins);}/**
 * Creates a PostCSS plugin with a standard API.
 *
 * The newly-wrapped function will provide both the name and PostCSS
 * version of the plugin.
 *
 * ```js
 * const processor = postcss([replace])
 * processor.plugins[0].postcssPlugin  //=> 'postcss-replace'
 * processor.plugins[0].postcssVersion //=> '6.0.0'
 * ```
 *
 * The plugin function receives 2 arguments: {@link Root}
 * and {@link Result} instance. The function should mutate the provided
 * `Root` node. Alternatively, you can create a new `Root` node
 * and override the `result.root` property.
 *
 * ```js
 * const cleaner = postcss.plugin('postcss-cleaner', () => {
 *   return (root, result) => {
 *     result.root = postcss.root()
 *   }
 * })
 * ```
 *
 * As a convenience, plugins also expose a `process` method so that you can use
 * them as standalone tools.
 *
 * ```js
 * cleaner.process(css, processOpts, pluginOpts)
 * // This is equivalent to:
 * postcss([ cleaner(pluginOpts) ]).process(css, processOpts)
 * ```
 *
 * Asynchronous plugins should return a `Promise` instance.
 *
 * ```js
 * postcss.plugin('postcss-import', () => {
 *   return (root, result) => {
 *     return new Promise( (resolve, reject) => {
 *       fs.readFile('base.css', (base) => {
 *         root.prepend(base)
 *         resolve()
 *       })
 *     })
 *   }
 * })
 * ```
 *
 * Add warnings using the {@link Node#warn} method.
 * Send data to other plugins using the {@link Result#messages} array.
 *
 * ```js
 * postcss.plugin('postcss-caniuse-test', () => {
 *   return (root, result) => {
 *     root.walkDecls(decl => {
 *       if (!caniuse.support(decl.prop)) {
 *         decl.warn(result, 'Some browsers do not support ' + decl.prop)
 *       }
 *     })
 *   }
 * })
 * ```
 *
 * @param {string} name          PostCSS plugin name. Same as in `name`
 *                               property in `package.json`. It will be saved
 *                               in `plugin.postcssPlugin` property.
 * @param {function} initializer Will receive plugin options
 *                               and should return {@link pluginFunction}
 *
 * @return {Plugin} PostCSS plugin.
 */postcss.plugin=function plugin(name,initializer){function creator(){var transformer=initializer.apply(void 0,arguments);transformer.postcssPlugin=name;transformer.postcssVersion=new _processor["default"]().version;return transformer;}var cache;Object.defineProperty(creator,'postcss',{get:function get(){if(!cache)cache=creator();return cache;}});creator.process=function(css,processOpts,pluginOpts){return postcss([creator(pluginOpts)]).process(css,processOpts);};return creator;};/**
 * Default function to convert a node tree into a CSS string.
 *
 * @param {Node} node       Start node for stringifing. Usually {@link Root}.
 * @param {builder} builder Function to concatenate CSS from node’s parts
 *                          or generate string and source map.
 *
 * @return {void}
 *
 * @function
 */postcss.stringify=_stringify["default"];/**
 * Parses source css and returns a new {@link Root} node,
 * which contains the source CSS nodes.
 *
 * @param {string|toString} css   String with input CSS or any object
 *                                with toString() method, like a Buffer
 * @param {processOptions} [opts] Options with only `from` and `map` keys.
 *
 * @return {Root} PostCSS AST.
 *
 * @example
 * // Simple CSS concatenation with source map support
 * const root1 = postcss.parse(css1, { from: file1 })
 * const root2 = postcss.parse(css2, { from: file2 })
 * root1.append(root2).toResult().css
 *
 * @function
 */postcss.parse=_parse["default"];/**
 * Contains the {@link vendor} module.
 *
 * @type {vendor}
 *
 * @example
 * postcss.vendor.unprefixed('-moz-tab') //=> ['tab']
 */postcss.vendor=_vendor["default"];/**
 * Contains the {@link list} module.
 *
 * @member {list}
 *
 * @example
 * postcss.list.space('5px calc(10% + 5px)') //=> ['5px', 'calc(10% + 5px)']
 */postcss.list=_list["default"];/**
 * Creates a new {@link Comment} node.
 *
 * @param {object} [defaults] Properties for the new node.
 *
 * @return {Comment} New comment node
 *
 * @example
 * postcss.comment({ text: 'test' })
 */postcss.comment=function(defaults){return new _comment["default"](defaults);};/**
 * Creates a new {@link AtRule} node.
 *
 * @param {object} [defaults] Properties for the new node.
 *
 * @return {AtRule} new at-rule node
 *
 * @example
 * postcss.atRule({ name: 'charset' }).toString() //=> "@charset"
 */postcss.atRule=function(defaults){return new _atRule["default"](defaults);};/**
 * Creates a new {@link Declaration} node.
 *
 * @param {object} [defaults] Properties for the new node.
 *
 * @return {Declaration} new declaration node
 *
 * @example
 * postcss.decl({ prop: 'color', value: 'red' }).toString() //=> "color: red"
 */postcss.decl=function(defaults){return new _declaration["default"](defaults);};/**
 * Creates a new {@link Rule} node.
 *
 * @param {object} [defaults] Properties for the new node.
 *
 * @return {Rule} new rule node
 *
 * @example
 * postcss.rule({ selector: 'a' }).toString() //=> "a {\n}"
 */postcss.rule=function(defaults){return new _rule["default"](defaults);};/**
 * Creates a new {@link Root} node.
 *
 * @param {object} [defaults] Properties for the new node.
 *
 * @return {Root} new root node.
 *
 * @example
 * postcss.root({ after: '\n' }).toString() //=> "\n"
 */postcss.root=function(defaults){return new _root["default"](defaults);};var _default=postcss;exports["default"]=_default;module.exports=exports["default"];},{"./at-rule":39,"./comment":40,"./declaration":43,"./list":46,"./parse":49,"./processor":53,"./root":55,"./rule":56,"./stringify":58,"./vendor":60}],52:[function(require,module,exports){(function(Buffer){"use strict";exports.__esModule=true;exports["default"]=void 0;var _sourceMap=_interopRequireDefault(require("source-map"));var _path=_interopRequireDefault(require("path"));var _fs=_interopRequireDefault(require("fs"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function fromBase64(str){if(Buffer){return Buffer.from(str,'base64').toString();}else{return window.atob(str);}}/**
 * Source map information from input CSS.
 * For example, source map after Sass compiler.
 *
 * This class will automatically find source map in input CSS or in file system
 * near input file (according `from` option).
 *
 * @example
 * const root = postcss.parse(css, { from: 'a.sass.css' })
 * root.input.map //=> PreviousMap
 */var PreviousMap=/*#__PURE__*/function(){/**
   * @param {string}         css    Input CSS source.
   * @param {processOptions} [opts] {@link Processor#process} options.
   */function PreviousMap(css,opts){this.loadAnnotation(css);/**
     * Was source map inlined by data-uri to input CSS.
     *
     * @type {boolean}
     */this.inline=this.startWith(this.annotation,'data:');var prev=opts.map?opts.map.prev:undefined;var text=this.loadMap(opts.from,prev);if(text)this.text=text;}/**
   * Create a instance of `SourceMapGenerator` class
   * from the `source-map` library to work with source map information.
   *
   * It is lazy method, so it will create object only on first call
   * and then it will use cache.
   *
   * @return {SourceMapGenerator} Object with source map information.
   */var _proto=PreviousMap.prototype;_proto.consumer=function consumer(){if(!this.consumerCache){this.consumerCache=new _sourceMap["default"].SourceMapConsumer(this.text);}return this.consumerCache;}/**
   * Does source map contains `sourcesContent` with input source text.
   *
   * @return {boolean} Is `sourcesContent` present.
   */;_proto.withContent=function withContent(){return!!(this.consumer().sourcesContent&&this.consumer().sourcesContent.length>0);};_proto.startWith=function startWith(string,start){if(!string)return false;return string.substr(0,start.length)===start;};_proto.loadAnnotation=function loadAnnotation(css){var match=css.match(/\/\*\s*# sourceMappingURL=(.*)\s*\*\//);if(match)this.annotation=match[1].trim();};_proto.decodeInline=function decodeInline(text){var baseCharsetUri=/^data:application\/json;charset=utf-?8;base64,/;var baseUri=/^data:application\/json;base64,/;var uri='data:application/json,';if(this.startWith(text,uri)){return decodeURIComponent(text.substr(uri.length));}if(baseCharsetUri.test(text)||baseUri.test(text)){return fromBase64(text.substr(RegExp.lastMatch.length));}var encoding=text.match(/data:application\/json;([^,]+),/)[1];throw new Error('Unsupported source map encoding '+encoding);};_proto.loadMap=function loadMap(file,prev){if(prev===false)return false;if(prev){if(typeof prev==='string'){return prev;}else if(typeof prev==='function'){var prevPath=prev(file);if(prevPath&&_fs["default"].existsSync&&_fs["default"].existsSync(prevPath)){return _fs["default"].readFileSync(prevPath,'utf-8').toString().trim();}else{throw new Error('Unable to load previous source map: '+prevPath.toString());}}else if(prev instanceof _sourceMap["default"].SourceMapConsumer){return _sourceMap["default"].SourceMapGenerator.fromSourceMap(prev).toString();}else if(prev instanceof _sourceMap["default"].SourceMapGenerator){return prev.toString();}else if(this.isMap(prev)){return JSON.stringify(prev);}else{throw new Error('Unsupported previous source map format: '+prev.toString());}}else if(this.inline){return this.decodeInline(this.annotation);}else if(this.annotation){var map=this.annotation;if(file)map=_path["default"].join(_path["default"].dirname(file),map);this.root=_path["default"].dirname(map);if(_fs["default"].existsSync&&_fs["default"].existsSync(map)){return _fs["default"].readFileSync(map,'utf-8').toString().trim();}else{return false;}}};_proto.isMap=function isMap(map){if(_typeof(map)!=='object')return false;return typeof map.mappings==='string'||typeof map._mappings==='string';};return PreviousMap;}();var _default=PreviousMap;exports["default"]=_default;module.exports=exports["default"];}).call(this,require("buffer").Buffer);},{"buffer":3,"fs":2,"path":38,"source-map":78}],53:[function(require,module,exports){(function(process){"use strict";exports.__esModule=true;exports["default"]=void 0;var _lazyResult=_interopRequireDefault(require("./lazy-result"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}/**
 * Contains plugins to process CSS. Create one `Processor` instance,
 * initialize its plugins, and then use that instance on numerous CSS files.
 *
 * @example
 * const processor = postcss([autoprefixer, precss])
 * processor.process(css1).then(result => console.log(result.css))
 * processor.process(css2).then(result => console.log(result.css))
 */var Processor=/*#__PURE__*/function(){/**
   * @param {Array.<Plugin|pluginFunction>|Processor} plugins PostCSS plugins.
   *        See {@link Processor#use} for plugin format.
   */function Processor(plugins){if(plugins===void 0){plugins=[];}/**
     * Current PostCSS version.
     *
     * @type {string}
     *
     * @example
     * if (result.processor.version.split('.')[0] !== '6') {
     *   throw new Error('This plugin works only with PostCSS 6')
     * }
     */this.version='7.0.27';/**
     * Plugins added to this processor.
     *
     * @type {pluginFunction[]}
     *
     * @example
     * const processor = postcss([autoprefixer, precss])
     * processor.plugins.length //=> 2
     */this.plugins=this.normalize(plugins);}/**
   * Adds a plugin to be used as a CSS processor.
   *
   * PostCSS plugin can be in 4 formats:
   * * A plugin created by {@link postcss.plugin} method.
   * * A function. PostCSS will pass the function a @{link Root}
   *   as the first argument and current {@link Result} instance
   *   as the second.
   * * An object with a `postcss` method. PostCSS will use that method
   *   as described in #2.
   * * Another {@link Processor} instance. PostCSS will copy plugins
   *   from that instance into this one.
   *
   * Plugins can also be added by passing them as arguments when creating
   * a `postcss` instance (see [`postcss(plugins)`]).
   *
   * Asynchronous plugins should return a `Promise` instance.
   *
   * @param {Plugin|pluginFunction|Processor} plugin PostCSS plugin
   *                                                 or {@link Processor}
   *                                                 with plugins.
   *
   * @example
   * const processor = postcss()
   *   .use(autoprefixer)
   *   .use(precss)
   *
   * @return {Processes} Current processor to make methods chain.
   */var _proto=Processor.prototype;_proto.use=function use(plugin){this.plugins=this.plugins.concat(this.normalize([plugin]));return this;}/**
   * Parses source CSS and returns a {@link LazyResult} Promise proxy.
   * Because some plugins can be asynchronous it doesn’t make
   * any transformations. Transformations will be applied
   * in the {@link LazyResult} methods.
   *
   * @param {string|toString|Result} css String with input CSS or any object
   *                                     with a `toString()` method,
   *                                     like a Buffer. Optionally, send
   *                                     a {@link Result} instance
   *                                     and the processor will take
   *                                     the {@link Root} from it.
   * @param {processOptions} [opts]      Options.
   *
   * @return {LazyResult} Promise proxy.
   *
   * @example
   * processor.process(css, { from: 'a.css', to: 'a.out.css' })
   *   .then(result => {
   *      console.log(result.css)
   *   })
   */;_proto.process=function(_process){function process(_x){return _process.apply(this,arguments);}process.toString=function(){return _process.toString();};return process;}(function(css,opts){if(opts===void 0){opts={};}if(this.plugins.length===0&&opts.parser===opts.stringifier){if(process.env.NODE_ENV!=='production'){if(typeof console!=='undefined'&&console.warn){console.warn('You did not set any plugins, parser, or stringifier. '+'Right now, PostCSS does nothing. Pick plugins for your case '+'on https://www.postcss.parts/ and use them in postcss.config.js.');}}}return new _lazyResult["default"](this,css,opts);});_proto.normalize=function normalize(plugins){var normalized=[];for(var _iterator=plugins,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var i=_ref;if(i.postcss)i=i.postcss;if(_typeof(i)==='object'&&Array.isArray(i.plugins)){normalized=normalized.concat(i.plugins);}else if(typeof i==='function'){normalized.push(i);}else if(_typeof(i)==='object'&&(i.parse||i.stringify)){if(process.env.NODE_ENV!=='production'){throw new Error('PostCSS syntaxes cannot be used as plugins. Instead, please use '+'one of the syntax/parser/stringifier options as outlined '+'in your PostCSS runner documentation.');}}else{throw new Error(i+' is not a PostCSS plugin');}}return normalized;};return Processor;}();var _default=Processor;/**
 * @callback builder
 * @param {string} part          Part of generated CSS connected to this node.
 * @param {Node}   node          AST node.
 * @param {"start"|"end"} [type] Node’s part type.
 */ /**
 * @callback parser
 *
 * @param {string|toString} css   String with input CSS or any object
 *                                with toString() method, like a Buffer.
 * @param {processOptions} [opts] Options with only `from` and `map` keys.
 *
 * @return {Root} PostCSS AST
 */ /**
 * @callback stringifier
 *
 * @param {Node} node       Start node for stringifing. Usually {@link Root}.
 * @param {builder} builder Function to concatenate CSS from node’s parts
 *                          or generate string and source map.
 *
 * @return {void}
 */ /**
 * @typedef {object} syntax
 * @property {parser} parse          Function to generate AST by string.
 * @property {stringifier} stringify Function to generate string by AST.
 */ /**
 * @typedef {object} toString
 * @property {function} toString
 */ /**
 * @callback pluginFunction
 * @param {Root} root     Parsed input CSS.
 * @param {Result} result Result to set warnings or check other plugins.
 */ /**
 * @typedef {object} Plugin
 * @property {function} postcss PostCSS plugin function.
 */ /**
 * @typedef {object} processOptions
 * @property {string} from             The path of the CSS source file.
 *                                     You should always set `from`,
 *                                     because it is used in source map
 *                                     generation and syntax error messages.
 * @property {string} to               The path where you’ll put the output
 *                                     CSS file. You should always set `to`
 *                                     to generate correct source maps.
 * @property {parser} parser           Function to generate AST by string.
 * @property {stringifier} stringifier Class to generate string by AST.
 * @property {syntax} syntax           Object with `parse` and `stringify`.
 * @property {object} map              Source map options.
 * @property {boolean} map.inline                    Does source map should
 *                                                   be embedded in the output
 *                                                   CSS as a base64-encoded
 *                                                   comment.
 * @property {string|object|false|function} map.prev Source map content
 *                                                   from a previous
 *                                                   processing step
 *                                                   (for example, Sass).
 *                                                   PostCSS will try to find
 *                                                   previous map automatically,
 *                                                   so you could disable it by
 *                                                   `false` value.
 * @property {boolean} map.sourcesContent            Does PostCSS should set
 *                                                   the origin content to map.
 * @property {string|false} map.annotation           Does PostCSS should set
 *                                                   annotation comment to map.
 * @property {string} map.from                       Override `from` in map’s
 *                                                   sources`.
 */exports["default"]=_default;module.exports=exports["default"];}).call(this,require('_process'));},{"./lazy-result":45,"_process":63}],54:[function(require,module,exports){"use strict";exports.__esModule=true;exports["default"]=void 0;var _warning=_interopRequireDefault(require("./warning"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}/**
 * Provides the result of the PostCSS transformations.
 *
 * A Result instance is returned by {@link LazyResult#then}
 * or {@link Root#toResult} methods.
 *
 * @example
 * postcss([autoprefixer]).process(css).then(result => {
 *  console.log(result.css)
 * })
 *
 * @example
 * const result2 = postcss.parse(css).toResult()
 */var Result=/*#__PURE__*/function(){/**
   * @param {Processor} processor Processor used for this transformation.
   * @param {Root}      root      Root node after all transformations.
   * @param {processOptions} opts Options from the {@link Processor#process}
   *                              or {@link Root#toResult}.
   */function Result(processor,root,opts){/**
     * The Processor instance used for this transformation.
     *
     * @type {Processor}
     *
     * @example
     * for (const plugin of result.processor.plugins) {
     *   if (plugin.postcssPlugin === 'postcss-bad') {
     *     throw 'postcss-good is incompatible with postcss-bad'
     *   }
     * })
     */this.processor=processor;/**
     * Contains messages from plugins (e.g., warnings or custom messages).
     * Each message should have type and plugin properties.
     *
     * @type {Message[]}
     *
     * @example
     * postcss.plugin('postcss-min-browser', () => {
     *   return (root, result) => {
     *     const browsers = detectMinBrowsersByCanIUse(root)
     *     result.messages.push({
     *       type: 'min-browser',
     *       plugin: 'postcss-min-browser',
     *       browsers
     *     })
     *   }
     * })
     */this.messages=[];/**
     * Root node after all transformations.
     *
     * @type {Root}
     *
     * @example
     * root.toResult().root === root
     */this.root=root;/**
     * Options from the {@link Processor#process} or {@link Root#toResult} call
     * that produced this Result instance.
     *
     * @type {processOptions}
     *
     * @example
     * root.toResult(opts).opts === opts
     */this.opts=opts;/**
     * A CSS string representing of {@link Result#root}.
     *
     * @type {string}
     *
     * @example
     * postcss.parse('a{}').toResult().css //=> "a{}"
     */this.css=undefined;/**
     * An instance of `SourceMapGenerator` class from the `source-map` library,
     * representing changes to the {@link Result#root} instance.
     *
     * @type {SourceMapGenerator}
     *
     * @example
     * result.map.toJSON() //=> { version: 3, file: 'a.css', … }
     *
     * @example
     * if (result.map) {
     *   fs.writeFileSync(result.opts.to + '.map', result.map.toString())
     * }
     */this.map=undefined;}/**
   * Returns for @{link Result#css} content.
   *
   * @example
   * result + '' === result.css
   *
   * @return {string} String representing of {@link Result#root}.
   */var _proto=Result.prototype;_proto.toString=function toString(){return this.css;}/**
   * Creates an instance of {@link Warning} and adds it
   * to {@link Result#messages}.
   *
   * @param {string} text        Warning message.
   * @param {Object} [opts]      Warning options.
   * @param {Node}   opts.node   CSS node that caused the warning.
   * @param {string} opts.word   Word in CSS source that caused the warning.
   * @param {number} opts.index  Index in CSS node string that caused
   *                             the warning.
   * @param {string} opts.plugin Name of the plugin that created
   *                             this warning. {@link Result#warn} fills
   *                             this property automatically.
   *
   * @return {Warning} Created warning.
   */;_proto.warn=function warn(text,opts){if(opts===void 0){opts={};}if(!opts.plugin){if(this.lastPlugin&&this.lastPlugin.postcssPlugin){opts.plugin=this.lastPlugin.postcssPlugin;}}var warning=new _warning["default"](text,opts);this.messages.push(warning);return warning;}/**
     * Returns warnings from plugins. Filters {@link Warning} instances
     * from {@link Result#messages}.
     *
     * @example
     * result.warnings().forEach(warn => {
     *   console.warn(warn.toString())
     * })
     *
     * @return {Warning[]} Warnings from plugins.
     */;_proto.warnings=function warnings(){return this.messages.filter(function(i){return i.type==='warning';});}/**
   * An alias for the {@link Result#css} property.
   * Use it with syntaxes that generate non-CSS output.
   *
   * @type {string}
   *
   * @example
   * result.css === result.content
   */;_createClass(Result,[{key:"content",get:function get(){return this.css;}}]);return Result;}();var _default=Result;/**
 * @typedef  {object} Message
 * @property {string} type   Message type.
 * @property {string} plugin Source PostCSS plugin name.
 */exports["default"]=_default;module.exports=exports["default"];},{"./warning":62}],55:[function(require,module,exports){"use strict";exports.__esModule=true;exports["default"]=void 0;var _container=_interopRequireDefault(require("./container"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}/**
 * Represents a CSS file and contains all its parsed nodes.
 *
 * @extends Container
 *
 * @example
 * const root = postcss.parse('a{color:black} b{z-index:2}')
 * root.type         //=> 'root'
 * root.nodes.length //=> 2
 */var Root=/*#__PURE__*/function(_Container){_inheritsLoose(Root,_Container);function Root(defaults){var _this;_this=_Container.call(this,defaults)||this;_this.type='root';if(!_this.nodes)_this.nodes=[];return _this;}var _proto=Root.prototype;_proto.removeChild=function removeChild(child,ignore){var index=this.index(child);if(!ignore&&index===0&&this.nodes.length>1){this.nodes[1].raws.before=this.nodes[index].raws.before;}return _Container.prototype.removeChild.call(this,child);};_proto.normalize=function normalize(child,sample,type){var nodes=_Container.prototype.normalize.call(this,child);if(sample){if(type==='prepend'){if(this.nodes.length>1){sample.raws.before=this.nodes[1].raws.before;}else{delete sample.raws.before;}}else if(this.first!==sample){for(var _iterator=nodes,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var node=_ref;node.raws.before=sample.raws.before;}}}return nodes;}/**
   * Returns a {@link Result} instance representing the root’s CSS.
   *
   * @param {processOptions} [opts] Options with only `to` and `map` keys.
   *
   * @return {Result} Result with current root’s CSS.
   *
   * @example
   * const root1 = postcss.parse(css1, { from: 'a.css' })
   * const root2 = postcss.parse(css2, { from: 'b.css' })
   * root1.append(root2)
   * const result = root1.toResult({ to: 'all.css', map: true })
   */;_proto.toResult=function toResult(opts){if(opts===void 0){opts={};}var LazyResult=require('./lazy-result');var Processor=require('./processor');var lazy=new LazyResult(new Processor(),this,opts);return lazy.stringify();}/**
   * @memberof Root#
   * @member {object} raws Information to generate byte-to-byte equal
   *                       node string as it was in the origin input.
   *
   * Every parser saves its own properties,
   * but the default CSS parser uses:
   *
   * * `after`: the space symbols after the last child to the end of file.
   * * `semicolon`: is the last child has an (optional) semicolon.
   *
   * @example
   * postcss.parse('a {}\n').raws //=> { after: '\n' }
   * postcss.parse('a {}').raws   //=> { after: '' }
   */;return Root;}(_container["default"]);var _default=Root;exports["default"]=_default;module.exports=exports["default"];},{"./container":41,"./lazy-result":45,"./processor":53}],56:[function(require,module,exports){"use strict";exports.__esModule=true;exports["default"]=void 0;var _container=_interopRequireDefault(require("./container"));var _list=_interopRequireDefault(require("./list"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}/**
 * Represents a CSS rule: a selector followed by a declaration block.
 *
 * @extends Container
 *
 * @example
 * const root = postcss.parse('a{}')
 * const rule = root.first
 * rule.type       //=> 'rule'
 * rule.toString() //=> 'a{}'
 */var Rule=/*#__PURE__*/function(_Container){_inheritsLoose(Rule,_Container);function Rule(defaults){var _this;_this=_Container.call(this,defaults)||this;_this.type='rule';if(!_this.nodes)_this.nodes=[];return _this;}/**
   * An array containing the rule’s individual selectors.
   * Groups of selectors are split at commas.
   *
   * @type {string[]}
   *
   * @example
   * const root = postcss.parse('a, b { }')
   * const rule = root.first
   *
   * rule.selector  //=> 'a, b'
   * rule.selectors //=> ['a', 'b']
   *
   * rule.selectors = ['a', 'strong']
   * rule.selector //=> 'a, strong'
   */_createClass(Rule,[{key:"selectors",get:function get(){return _list["default"].comma(this.selector);},set:function set(values){var match=this.selector?this.selector.match(/,\s*/):null;var sep=match?match[0]:','+this.raw('between','beforeOpen');this.selector=values.join(sep);}/**
     * @memberof Rule#
     * @member {string} selector The rule’s full selector represented
     *                           as a string.
     *
     * @example
     * const root = postcss.parse('a, b { }')
     * const rule = root.first
     * rule.selector //=> 'a, b'
     */ /**
     * @memberof Rule#
     * @member {object} raws Information to generate byte-to-byte equal
     *                       node string as it was in the origin input.
     *
     * Every parser saves its own properties,
     * but the default CSS parser uses:
     *
     * * `before`: the space symbols before the node. It also stores `*`
     *   and `_` symbols before the declaration (IE hack).
     * * `after`: the space symbols after the last child of the node
     *   to the end of the node.
     * * `between`: the symbols between the property and value
     *   for declarations, selector and `{` for rules, or last parameter
     *   and `{` for at-rules.
     * * `semicolon`: contains `true` if the last child has
     *   an (optional) semicolon.
     * * `ownSemicolon`: contains `true` if there is semicolon after rule.
     *
     * PostCSS cleans selectors from comments and extra spaces,
     * but it stores origin content in raws properties.
     * As such, if you don’t change a declaration’s value,
     * PostCSS will use the raw value with comments.
     *
     * @example
     * const root = postcss.parse('a {\n  color:black\n}')
     * root.first.first.raws //=> { before: '', between: ' ', after: '\n' }
     */}]);return Rule;}(_container["default"]);var _default=Rule;exports["default"]=_default;module.exports=exports["default"];},{"./container":41,"./list":46}],57:[function(require,module,exports){"use strict";exports.__esModule=true;exports["default"]=void 0;var DEFAULT_RAW={colon:': ',indent:'    ',beforeDecl:'\n',beforeRule:'\n',beforeOpen:' ',beforeClose:'\n',beforeComment:'\n',after:'\n',emptyBody:'',commentLeft:' ',commentRight:' ',semicolon:false};function capitalize(str){return str[0].toUpperCase()+str.slice(1);}var Stringifier=/*#__PURE__*/function(){function Stringifier(builder){this.builder=builder;}var _proto=Stringifier.prototype;_proto.stringify=function stringify(node,semicolon){this[node.type](node,semicolon);};_proto.root=function root(node){this.body(node);if(node.raws.after)this.builder(node.raws.after);};_proto.comment=function comment(node){var left=this.raw(node,'left','commentLeft');var right=this.raw(node,'right','commentRight');this.builder('/*'+left+node.text+right+'*/',node);};_proto.decl=function decl(node,semicolon){var between=this.raw(node,'between','colon');var string=node.prop+between+this.rawValue(node,'value');if(node.important){string+=node.raws.important||' !important';}if(semicolon)string+=';';this.builder(string,node);};_proto.rule=function rule(node){this.block(node,this.rawValue(node,'selector'));if(node.raws.ownSemicolon){this.builder(node.raws.ownSemicolon,node,'end');}};_proto.atrule=function atrule(node,semicolon){var name='@'+node.name;var params=node.params?this.rawValue(node,'params'):'';if(typeof node.raws.afterName!=='undefined'){name+=node.raws.afterName;}else if(params){name+=' ';}if(node.nodes){this.block(node,name+params);}else{var end=(node.raws.between||'')+(semicolon?';':'');this.builder(name+params+end,node);}};_proto.body=function body(node){var last=node.nodes.length-1;while(last>0){if(node.nodes[last].type!=='comment')break;last-=1;}var semicolon=this.raw(node,'semicolon');for(var i=0;i<node.nodes.length;i++){var child=node.nodes[i];var before=this.raw(child,'before');if(before)this.builder(before);this.stringify(child,last!==i||semicolon);}};_proto.block=function block(node,start){var between=this.raw(node,'between','beforeOpen');this.builder(start+between+'{',node,'start');var after;if(node.nodes&&node.nodes.length){this.body(node);after=this.raw(node,'after');}else{after=this.raw(node,'after','emptyBody');}if(after)this.builder(after);this.builder('}',node,'end');};_proto.raw=function raw(node,own,detect){var value;if(!detect)detect=own;// Already had
if(own){value=node.raws[own];if(typeof value!=='undefined')return value;}var parent=node.parent;// Hack for first rule in CSS
if(detect==='before'){if(!parent||parent.type==='root'&&parent.first===node){return'';}}// Floating child without parent
if(!parent)return DEFAULT_RAW[detect];// Detect style by other nodes
var root=node.root();if(!root.rawCache)root.rawCache={};if(typeof root.rawCache[detect]!=='undefined'){return root.rawCache[detect];}if(detect==='before'||detect==='after'){return this.beforeAfter(node,detect);}else{var method='raw'+capitalize(detect);if(this[method]){value=this[method](root,node);}else{root.walk(function(i){value=i.raws[own];if(typeof value!=='undefined')return false;});}}if(typeof value==='undefined')value=DEFAULT_RAW[detect];root.rawCache[detect]=value;return value;};_proto.rawSemicolon=function rawSemicolon(root){var value;root.walk(function(i){if(i.nodes&&i.nodes.length&&i.last.type==='decl'){value=i.raws.semicolon;if(typeof value!=='undefined')return false;}});return value;};_proto.rawEmptyBody=function rawEmptyBody(root){var value;root.walk(function(i){if(i.nodes&&i.nodes.length===0){value=i.raws.after;if(typeof value!=='undefined')return false;}});return value;};_proto.rawIndent=function rawIndent(root){if(root.raws.indent)return root.raws.indent;var value;root.walk(function(i){var p=i.parent;if(p&&p!==root&&p.parent&&p.parent===root){if(typeof i.raws.before!=='undefined'){var parts=i.raws.before.split('\n');value=parts[parts.length-1];value=value.replace(/[^\s]/g,'');return false;}}});return value;};_proto.rawBeforeComment=function rawBeforeComment(root,node){var value;root.walkComments(function(i){if(typeof i.raws.before!=='undefined'){value=i.raws.before;if(value.indexOf('\n')!==-1){value=value.replace(/[^\n]+$/,'');}return false;}});if(typeof value==='undefined'){value=this.raw(node,null,'beforeDecl');}else if(value){value=value.replace(/[^\s]/g,'');}return value;};_proto.rawBeforeDecl=function rawBeforeDecl(root,node){var value;root.walkDecls(function(i){if(typeof i.raws.before!=='undefined'){value=i.raws.before;if(value.indexOf('\n')!==-1){value=value.replace(/[^\n]+$/,'');}return false;}});if(typeof value==='undefined'){value=this.raw(node,null,'beforeRule');}else if(value){value=value.replace(/[^\s]/g,'');}return value;};_proto.rawBeforeRule=function rawBeforeRule(root){var value;root.walk(function(i){if(i.nodes&&(i.parent!==root||root.first!==i)){if(typeof i.raws.before!=='undefined'){value=i.raws.before;if(value.indexOf('\n')!==-1){value=value.replace(/[^\n]+$/,'');}return false;}}});if(value)value=value.replace(/[^\s]/g,'');return value;};_proto.rawBeforeClose=function rawBeforeClose(root){var value;root.walk(function(i){if(i.nodes&&i.nodes.length>0){if(typeof i.raws.after!=='undefined'){value=i.raws.after;if(value.indexOf('\n')!==-1){value=value.replace(/[^\n]+$/,'');}return false;}}});if(value)value=value.replace(/[^\s]/g,'');return value;};_proto.rawBeforeOpen=function rawBeforeOpen(root){var value;root.walk(function(i){if(i.type!=='decl'){value=i.raws.between;if(typeof value!=='undefined')return false;}});return value;};_proto.rawColon=function rawColon(root){var value;root.walkDecls(function(i){if(typeof i.raws.between!=='undefined'){value=i.raws.between.replace(/[^\s:]/g,'');return false;}});return value;};_proto.beforeAfter=function beforeAfter(node,detect){var value;if(node.type==='decl'){value=this.raw(node,null,'beforeDecl');}else if(node.type==='comment'){value=this.raw(node,null,'beforeComment');}else if(detect==='before'){value=this.raw(node,null,'beforeRule');}else{value=this.raw(node,null,'beforeClose');}var buf=node.parent;var depth=0;while(buf&&buf.type!=='root'){depth+=1;buf=buf.parent;}if(value.indexOf('\n')!==-1){var indent=this.raw(node,null,'indent');if(indent.length){for(var step=0;step<depth;step++){value+=indent;}}}return value;};_proto.rawValue=function rawValue(node,prop){var value=node[prop];var raw=node.raws[prop];if(raw&&raw.value===value){return raw.raw;}return value;};return Stringifier;}();var _default=Stringifier;exports["default"]=_default;module.exports=exports["default"];},{}],58:[function(require,module,exports){"use strict";exports.__esModule=true;exports["default"]=void 0;var _stringifier=_interopRequireDefault(require("./stringifier"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function stringify(node,builder){var str=new _stringifier["default"](builder);str.stringify(node);}var _default=stringify;exports["default"]=_default;module.exports=exports["default"];},{"./stringifier":57}],59:[function(require,module,exports){"use strict";exports.__esModule=true;exports["default"]=tokenizer;var SINGLE_QUOTE='\''.charCodeAt(0);var DOUBLE_QUOTE='"'.charCodeAt(0);var BACKSLASH='\\'.charCodeAt(0);var SLASH='/'.charCodeAt(0);var NEWLINE='\n'.charCodeAt(0);var SPACE=' '.charCodeAt(0);var FEED='\f'.charCodeAt(0);var TAB='\t'.charCodeAt(0);var CR='\r'.charCodeAt(0);var OPEN_SQUARE='['.charCodeAt(0);var CLOSE_SQUARE=']'.charCodeAt(0);var OPEN_PARENTHESES='('.charCodeAt(0);var CLOSE_PARENTHESES=')'.charCodeAt(0);var OPEN_CURLY='{'.charCodeAt(0);var CLOSE_CURLY='}'.charCodeAt(0);var SEMICOLON=';'.charCodeAt(0);var ASTERISK='*'.charCodeAt(0);var COLON=':'.charCodeAt(0);var AT='@'.charCodeAt(0);var RE_AT_END=/[ \n\t\r\f{}()'"\\;/[\]#]/g;var RE_WORD_END=/[ \n\t\r\f(){}:;@!'"\\\][#]|\/(?=\*)/g;var RE_BAD_BRACKET=/.[\\/("'\n]/;var RE_HEX_ESCAPE=/[a-f0-9]/i;function tokenizer(input,options){if(options===void 0){options={};}var css=input.css.valueOf();var ignore=options.ignoreErrors;var code,next,quote,lines,last,content,escape;var nextLine,nextOffset,escaped,escapePos,prev,n,currentToken;var length=css.length;var offset=-1;var line=1;var pos=0;var buffer=[];var returned=[];function position(){return pos;}function unclosed(what){throw input.error('Unclosed '+what,line,pos-offset);}function endOfFile(){return returned.length===0&&pos>=length;}function nextToken(opts){if(returned.length)return returned.pop();if(pos>=length)return;var ignoreUnclosed=opts?opts.ignoreUnclosed:false;code=css.charCodeAt(pos);if(code===NEWLINE||code===FEED||code===CR&&css.charCodeAt(pos+1)!==NEWLINE){offset=pos;line+=1;}switch(code){case NEWLINE:case SPACE:case TAB:case CR:case FEED:next=pos;do{next+=1;code=css.charCodeAt(next);if(code===NEWLINE){offset=next;line+=1;}}while(code===SPACE||code===NEWLINE||code===TAB||code===CR||code===FEED);currentToken=['space',css.slice(pos,next)];pos=next-1;break;case OPEN_SQUARE:case CLOSE_SQUARE:case OPEN_CURLY:case CLOSE_CURLY:case COLON:case SEMICOLON:case CLOSE_PARENTHESES:var controlChar=String.fromCharCode(code);currentToken=[controlChar,controlChar,line,pos-offset];break;case OPEN_PARENTHESES:prev=buffer.length?buffer.pop()[1]:'';n=css.charCodeAt(pos+1);if(prev==='url'&&n!==SINGLE_QUOTE&&n!==DOUBLE_QUOTE&&n!==SPACE&&n!==NEWLINE&&n!==TAB&&n!==FEED&&n!==CR){next=pos;do{escaped=false;next=css.indexOf(')',next+1);if(next===-1){if(ignore||ignoreUnclosed){next=pos;break;}else{unclosed('bracket');}}escapePos=next;while(css.charCodeAt(escapePos-1)===BACKSLASH){escapePos-=1;escaped=!escaped;}}while(escaped);currentToken=['brackets',css.slice(pos,next+1),line,pos-offset,line,next-offset];pos=next;}else{next=css.indexOf(')',pos+1);content=css.slice(pos,next+1);if(next===-1||RE_BAD_BRACKET.test(content)){currentToken=['(','(',line,pos-offset];}else{currentToken=['brackets',content,line,pos-offset,line,next-offset];pos=next;}}break;case SINGLE_QUOTE:case DOUBLE_QUOTE:quote=code===SINGLE_QUOTE?'\'':'"';next=pos;do{escaped=false;next=css.indexOf(quote,next+1);if(next===-1){if(ignore||ignoreUnclosed){next=pos+1;break;}else{unclosed('string');}}escapePos=next;while(css.charCodeAt(escapePos-1)===BACKSLASH){escapePos-=1;escaped=!escaped;}}while(escaped);content=css.slice(pos,next+1);lines=content.split('\n');last=lines.length-1;if(last>0){nextLine=line+last;nextOffset=next-lines[last].length;}else{nextLine=line;nextOffset=offset;}currentToken=['string',css.slice(pos,next+1),line,pos-offset,nextLine,next-nextOffset];offset=nextOffset;line=nextLine;pos=next;break;case AT:RE_AT_END.lastIndex=pos+1;RE_AT_END.test(css);if(RE_AT_END.lastIndex===0){next=css.length-1;}else{next=RE_AT_END.lastIndex-2;}currentToken=['at-word',css.slice(pos,next+1),line,pos-offset,line,next-offset];pos=next;break;case BACKSLASH:next=pos;escape=true;while(css.charCodeAt(next+1)===BACKSLASH){next+=1;escape=!escape;}code=css.charCodeAt(next+1);if(escape&&code!==SLASH&&code!==SPACE&&code!==NEWLINE&&code!==TAB&&code!==CR&&code!==FEED){next+=1;if(RE_HEX_ESCAPE.test(css.charAt(next))){while(RE_HEX_ESCAPE.test(css.charAt(next+1))){next+=1;}if(css.charCodeAt(next+1)===SPACE){next+=1;}}}currentToken=['word',css.slice(pos,next+1),line,pos-offset,line,next-offset];pos=next;break;default:if(code===SLASH&&css.charCodeAt(pos+1)===ASTERISK){next=css.indexOf('*/',pos+2)+1;if(next===0){if(ignore||ignoreUnclosed){next=css.length;}else{unclosed('comment');}}content=css.slice(pos,next+1);lines=content.split('\n');last=lines.length-1;if(last>0){nextLine=line+last;nextOffset=next-lines[last].length;}else{nextLine=line;nextOffset=offset;}currentToken=['comment',content,line,pos-offset,nextLine,next-nextOffset];offset=nextOffset;line=nextLine;pos=next;}else{RE_WORD_END.lastIndex=pos+1;RE_WORD_END.test(css);if(RE_WORD_END.lastIndex===0){next=css.length-1;}else{next=RE_WORD_END.lastIndex-2;}currentToken=['word',css.slice(pos,next+1),line,pos-offset,line,next-offset];buffer.push(currentToken);pos=next;}break;}pos++;return currentToken;}function back(token){returned.push(token);}return{back:back,nextToken:nextToken,endOfFile:endOfFile,position:position};}module.exports=exports["default"];},{}],60:[function(require,module,exports){"use strict";exports.__esModule=true;exports["default"]=void 0;/**
 * Contains helpers for working with vendor prefixes.
 *
 * @example
 * const vendor = postcss.vendor
 *
 * @namespace vendor
 */var vendor={/**
   * Returns the vendor prefix extracted from an input string.
   *
   * @param {string} prop String with or without vendor prefix.
   *
   * @return {string} vendor prefix or empty string
   *
   * @example
   * postcss.vendor.prefix('-moz-tab-size') //=> '-moz-'
   * postcss.vendor.prefix('tab-size')      //=> ''
   */prefix:function prefix(prop){var match=prop.match(/^(-\w+-)/);if(match){return match[0];}return'';},/**
     * Returns the input string stripped of its vendor prefix.
     *
     * @param {string} prop String with or without vendor prefix.
     *
     * @return {string} String name without vendor prefixes.
     *
     * @example
     * postcss.vendor.unprefixed('-moz-tab-size') //=> 'tab-size'
     */unprefixed:function unprefixed(prop){return prop.replace(/^-\w+-/,'');}};var _default=vendor;exports["default"]=_default;module.exports=exports["default"];},{}],61:[function(require,module,exports){"use strict";exports.__esModule=true;exports["default"]=warnOnce;var printed={};function warnOnce(message){if(printed[message])return;printed[message]=true;if(typeof console!=='undefined'&&console.warn){console.warn(message);}}module.exports=exports["default"];},{}],62:[function(require,module,exports){"use strict";exports.__esModule=true;exports["default"]=void 0;/**
 * Represents a plugin’s warning. It can be created using {@link Node#warn}.
 *
 * @example
 * if (decl.important) {
 *   decl.warn(result, 'Avoid !important', { word: '!important' })
 * }
 */var Warning=/*#__PURE__*/function(){/**
   * @param {string} text        Warning message.
   * @param {Object} [opts]      Warning options.
   * @param {Node}   opts.node   CSS node that caused the warning.
   * @param {string} opts.word   Word in CSS source that caused the warning.
   * @param {number} opts.index  Index in CSS node string that caused
   *                             the warning.
   * @param {string} opts.plugin Name of the plugin that created
   *                             this warning. {@link Result#warn} fills
   *                             this property automatically.
   */function Warning(text,opts){if(opts===void 0){opts={};}/**
     * Type to filter warnings from {@link Result#messages}.
     * Always equal to `"warning"`.
     *
     * @type {string}
     *
     * @example
     * const nonWarning = result.messages.filter(i => i.type !== 'warning')
     */this.type='warning';/**
     * The warning message.
     *
     * @type {string}
     *
     * @example
     * warning.text //=> 'Try to avoid !important'
     */this.text=text;if(opts.node&&opts.node.source){var pos=opts.node.positionBy(opts);/**
       * Line in the input file with this warning’s source.
       * @type {number}
       *
       * @example
       * warning.line //=> 5
       */this.line=pos.line;/**
       * Column in the input file with this warning’s source.
       *
       * @type {number}
       *
       * @example
       * warning.column //=> 6
       */this.column=pos.column;}for(var opt in opts){this[opt]=opts[opt];}}/**
   * Returns a warning position and message.
   *
   * @example
   * warning.toString() //=> 'postcss-lint:a.css:10:14: Avoid !important'
   *
   * @return {string} Warning position and message.
   */var _proto=Warning.prototype;_proto.toString=function toString(){if(this.node){return this.node.error(this.text,{plugin:this.plugin,index:this.index,word:this.word}).message;}if(this.plugin){return this.plugin+': '+this.text;}return this.text;}/**
   * @memberof Warning#
   * @member {string} plugin The name of the plugin that created
   *                         it will fill this property automatically.
   *                         this warning. When you call {@link Node#warn}
   *
   * @example
   * warning.plugin //=> 'postcss-important'
   */ /**
   * @memberof Warning#
   * @member {Node} node Contains the CSS node that caused the warning.
   *
   * @example
   * warning.node.toString() //=> 'color: white !important'
   */;return Warning;}();var _default=Warning;exports["default"]=_default;module.exports=exports["default"];},{}],63:[function(require,module,exports){// shim for using process in browser
var process=module.exports={};// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error('setTimeout has not been defined');}function defaultClearTimeout(){throw new Error('clearTimeout has not been defined');}(function(){try{if(typeof setTimeout==='function'){cachedSetTimeout=setTimeout;}else{cachedSetTimeout=defaultSetTimout;}}catch(e){cachedSetTimeout=defaultSetTimout;}try{if(typeof clearTimeout==='function'){cachedClearTimeout=clearTimeout;}else{cachedClearTimeout=defaultClearTimeout;}}catch(e){cachedClearTimeout=defaultClearTimeout;}})();function runTimeout(fun){if(cachedSetTimeout===setTimeout){//normal enviroments in sane situations
return setTimeout(fun,0);}// if setTimeout wasn't available but was latter defined
if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedSetTimeout(fun,0);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return cachedSetTimeout.call(null,fun,0);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return cachedSetTimeout.call(this,fun,0);}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){//normal enviroments in sane situations
return clearTimeout(marker);}// if clearTimeout wasn't available but was latter defined
if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedClearTimeout(marker);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return cachedClearTimeout.call(null,marker);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return cachedClearTimeout.call(this,marker);}}}var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return;}draining=false;if(currentQueue.length){queue=currentQueue.concat(queue);}else{queueIndex=-1;}if(queue.length){drainQueue();}}function drainQueue(){if(draining){return;}var timeout=runTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run();}}queueIndex=-1;len=queue.length;}currentQueue=null;draining=false;runClearTimeout(timeout);}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i];}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue);}};// v8 likes predictible objects
function Item(fun,array){this.fun=fun;this.array=array;}Item.prototype.run=function(){this.fun.apply(null,this.array);};process.title='browser';process.browser=true;process.env={};process.argv=[];process.version='';// empty string to avoid regexp issues
process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.prependListener=noop;process.prependOnceListener=noop;process.listeners=function(name){return[];};process.binding=function(name){throw new Error('process.binding is not supported');};process.cwd=function(){return'/';};process.chdir=function(dir){throw new Error('process.chdir is not supported');};process.umask=function(){return 0;};},{}],64:[function(require,module,exports){(function(global){/*! https://mths.be/punycode v1.4.1 by @mathias */;(function(root){/** Detect free variables */var freeExports=_typeof(exports)=='object'&&exports&&!exports.nodeType&&exports;var freeModule=_typeof(module)=='object'&&module&&!module.nodeType&&module;var freeGlobal=_typeof(global)=='object'&&global;if(freeGlobal.global===freeGlobal||freeGlobal.window===freeGlobal||freeGlobal.self===freeGlobal){root=freeGlobal;}/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */var punycode,/** Highest positive signed 32-bit float value */maxInt=2147483647,// aka. 0x7FFFFFFF or 2^31-1
/** Bootstring parameters */base=36,tMin=1,tMax=26,skew=38,damp=700,initialBias=72,initialN=128,// 0x80
delimiter='-',// '\x2D'
/** Regular expressions */regexPunycode=/^xn--/,regexNonASCII=/[^\x20-\x7E]/,// unprintable ASCII chars + non-ASCII chars
regexSeparators=/[\x2E\u3002\uFF0E\uFF61]/g,// RFC 3490 separators
/** Error messages */errors={'overflow':'Overflow: input needs wider integers to process','not-basic':'Illegal input >= 0x80 (not a basic code point)','invalid-input':'Invalid input'},/** Convenience shortcuts */baseMinusTMin=base-tMin,floor=Math.floor,stringFromCharCode=String.fromCharCode,/** Temporary variable */key;/*--------------------------------------------------------------------------*/ /**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */function error(type){throw new RangeError(errors[type]);}/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */function map(array,fn){var length=array.length;var result=[];while(length--){result[length]=fn(array[length]);}return result;}/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */function mapDomain(string,fn){var parts=string.split('@');var result='';if(parts.length>1){// In email addresses, only the domain name should be punycoded. Leave
// the local part (i.e. everything up to `@`) intact.
result=parts[0]+'@';string=parts[1];}// Avoid `split(regex)` for IE8 compatibility. See #17.
string=string.replace(regexSeparators,'\x2E');var labels=string.split('.');var encoded=map(labels,fn).join('.');return result+encoded;}/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */function ucs2decode(string){var output=[],counter=0,length=string.length,value,extra;while(counter<length){value=string.charCodeAt(counter++);if(value>=0xD800&&value<=0xDBFF&&counter<length){// high surrogate, and there is a next character
extra=string.charCodeAt(counter++);if((extra&0xFC00)==0xDC00){// low surrogate
output.push(((value&0x3FF)<<10)+(extra&0x3FF)+0x10000);}else{// unmatched surrogate; only append this code unit, in case the next
// code unit is the high surrogate of a surrogate pair
output.push(value);counter--;}}else{output.push(value);}}return output;}/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */function ucs2encode(array){return map(array,function(value){var output='';if(value>0xFFFF){value-=0x10000;output+=stringFromCharCode(value>>>10&0x3FF|0xD800);value=0xDC00|value&0x3FF;}output+=stringFromCharCode(value);return output;}).join('');}/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */function basicToDigit(codePoint){if(codePoint-48<10){return codePoint-22;}if(codePoint-65<26){return codePoint-65;}if(codePoint-97<26){return codePoint-97;}return base;}/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */function digitToBasic(digit,flag){//  0..25 map to ASCII a..z or A..Z
// 26..35 map to ASCII 0..9
return digit+22+75*(digit<26)-((flag!=0)<<5);}/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */function adapt(delta,numPoints,firstTime){var k=0;delta=firstTime?floor(delta/damp):delta>>1;delta+=floor(delta/numPoints);for(;/* no initialization */delta>baseMinusTMin*tMax>>1;k+=base){delta=floor(delta/baseMinusTMin);}return floor(k+(baseMinusTMin+1)*delta/(delta+skew));}/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */function decode(input){// Don't use UCS-2
var output=[],inputLength=input.length,out,i=0,n=initialN,bias=initialBias,basic,j,index,oldi,w,k,digit,t,/** Cached calculation results */baseMinusT;// Handle the basic code points: let `basic` be the number of input code
// points before the last delimiter, or `0` if there is none, then copy
// the first basic code points to the output.
basic=input.lastIndexOf(delimiter);if(basic<0){basic=0;}for(j=0;j<basic;++j){// if it's not a basic code point
if(input.charCodeAt(j)>=0x80){error('not-basic');}output.push(input.charCodeAt(j));}// Main decoding loop: start just after the last delimiter if any basic code
// points were copied; start at the beginning otherwise.
for(index=basic>0?basic+1:0;index<inputLength;)/* no final expression */{// `index` is the index of the next character to be consumed.
// Decode a generalized variable-length integer into `delta`,
// which gets added to `i`. The overflow checking is easier
// if we increase `i` as we go, then subtract off its starting
// value at the end to obtain `delta`.
for(oldi=i,w=1,k=base;;/* no condition */k+=base){if(index>=inputLength){error('invalid-input');}digit=basicToDigit(input.charCodeAt(index++));if(digit>=base||digit>floor((maxInt-i)/w)){error('overflow');}i+=digit*w;t=k<=bias?tMin:k>=bias+tMax?tMax:k-bias;if(digit<t){break;}baseMinusT=base-t;if(w>floor(maxInt/baseMinusT)){error('overflow');}w*=baseMinusT;}out=output.length+1;bias=adapt(i-oldi,out,oldi==0);// `i` was supposed to wrap around from `out` to `0`,
// incrementing `n` each time, so we'll fix that now:
if(floor(i/out)>maxInt-n){error('overflow');}n+=floor(i/out);i%=out;// Insert `n` at position `i` of the output
output.splice(i++,0,n);}return ucs2encode(output);}/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */function encode(input){var n,delta,handledCPCount,basicLength,bias,j,m,q,k,t,currentValue,output=[],/** `inputLength` will hold the number of code points in `input`. */inputLength,/** Cached calculation results */handledCPCountPlusOne,baseMinusT,qMinusT;// Convert the input in UCS-2 to Unicode
input=ucs2decode(input);// Cache the length
inputLength=input.length;// Initialize the state
n=initialN;delta=0;bias=initialBias;// Handle the basic code points
for(j=0;j<inputLength;++j){currentValue=input[j];if(currentValue<0x80){output.push(stringFromCharCode(currentValue));}}handledCPCount=basicLength=output.length;// `handledCPCount` is the number of code points that have been handled;
// `basicLength` is the number of basic code points.
// Finish the basic string - if it is not empty - with a delimiter
if(basicLength){output.push(delimiter);}// Main encoding loop:
while(handledCPCount<inputLength){// All non-basic code points < n have been handled already. Find the next
// larger one:
for(m=maxInt,j=0;j<inputLength;++j){currentValue=input[j];if(currentValue>=n&&currentValue<m){m=currentValue;}}// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
// but guard against overflow
handledCPCountPlusOne=handledCPCount+1;if(m-n>floor((maxInt-delta)/handledCPCountPlusOne)){error('overflow');}delta+=(m-n)*handledCPCountPlusOne;n=m;for(j=0;j<inputLength;++j){currentValue=input[j];if(currentValue<n&&++delta>maxInt){error('overflow');}if(currentValue==n){// Represent delta as a generalized variable-length integer
for(q=delta,k=base;;/* no condition */k+=base){t=k<=bias?tMin:k>=bias+tMax?tMax:k-bias;if(q<t){break;}qMinusT=q-t;baseMinusT=base-t;output.push(stringFromCharCode(digitToBasic(t+qMinusT%baseMinusT,0)));q=floor(qMinusT/baseMinusT);}output.push(stringFromCharCode(digitToBasic(q,0)));bias=adapt(delta,handledCPCountPlusOne,handledCPCount==basicLength);delta=0;++handledCPCount;}}++delta;++n;}return output.join('');}/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */function toUnicode(input){return mapDomain(input,function(string){return regexPunycode.test(string)?decode(string.slice(4).toLowerCase()):string;});}/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */function toASCII(input){return mapDomain(input,function(string){return regexNonASCII.test(string)?'xn--'+encode(string):string;});}/*--------------------------------------------------------------------------*/ /** Define the public API */punycode={/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */'version':'1.4.1',/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */'ucs2':{'decode':ucs2decode,'encode':ucs2encode},'decode':decode,'encode':encode,'toASCII':toASCII,'toUnicode':toUnicode};/** Expose `punycode` */ // Some AMD build optimizers, like r.js, check for specific condition patterns
// like the following:
if(typeof define=='function'&&_typeof(define.amd)=='object'&&define.amd){define('punycode',function(){return punycode;});}else if(freeExports&&freeModule){if(module.exports==freeExports){// in Node.js, io.js, or RingoJS v0.8.0+
freeModule.exports=punycode;}else{// in Narwhal or RingoJS v0.7.0-
for(key in punycode){punycode.hasOwnProperty(key)&&(freeExports[key]=punycode[key]);}}}else{// in Rhino or a web browser
root.punycode=punycode;}})(this);}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{}],65:[function(require,module,exports){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop);}module.exports=function(qs,sep,eq,options){sep=sep||'&';eq=eq||'=';var obj={};if(typeof qs!=='string'||qs.length===0){return obj;}var regexp=/\+/g;qs=qs.split(sep);var maxKeys=1000;if(options&&typeof options.maxKeys==='number'){maxKeys=options.maxKeys;}var len=qs.length;// maxKeys <= 0 means that we should not limit keys count
if(maxKeys>0&&len>maxKeys){len=maxKeys;}for(var i=0;i<len;++i){var x=qs[i].replace(regexp,'%20'),idx=x.indexOf(eq),kstr,vstr,k,v;if(idx>=0){kstr=x.substr(0,idx);vstr=x.substr(idx+1);}else{kstr=x;vstr='';}k=decodeURIComponent(kstr);v=decodeURIComponent(vstr);if(!hasOwnProperty(obj,k)){obj[k]=v;}else if(isArray(obj[k])){obj[k].push(v);}else{obj[k]=[obj[k],v];}}return obj;};var isArray=Array.isArray||function(xs){return Object.prototype.toString.call(xs)==='[object Array]';};},{}],66:[function(require,module,exports){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';var stringifyPrimitive=function stringifyPrimitive(v){switch(_typeof(v)){case'string':return v;case'boolean':return v?'true':'false';case'number':return isFinite(v)?v:'';default:return'';}};module.exports=function(obj,sep,eq,name){sep=sep||'&';eq=eq||'=';if(obj===null){obj=undefined;}if(_typeof(obj)==='object'){return map(objectKeys(obj),function(k){var ks=encodeURIComponent(stringifyPrimitive(k))+eq;if(isArray(obj[k])){return map(obj[k],function(v){return ks+encodeURIComponent(stringifyPrimitive(v));}).join(sep);}else{return ks+encodeURIComponent(stringifyPrimitive(obj[k]));}}).join(sep);}if(!name)return'';return encodeURIComponent(stringifyPrimitive(name))+eq+encodeURIComponent(stringifyPrimitive(obj));};var isArray=Array.isArray||function(xs){return Object.prototype.toString.call(xs)==='[object Array]';};function map(xs,f){if(xs.map)return xs.map(f);var res=[];for(var i=0;i<xs.length;i++){res.push(f(xs[i],i));}return res;}var objectKeys=Object.keys||function(obj){var res=[];for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))res.push(key);}return res;};},{}],67:[function(require,module,exports){'use strict';exports.decode=exports.parse=require('./decode');exports.encode=exports.stringify=require('./encode');},{"./decode":65,"./encode":66}],68:[function(require,module,exports){/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */var util=require('./util');var has=Object.prototype.hasOwnProperty;var hasNativeMap=typeof Map!=="undefined";/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */function ArraySet(){this._array=[];this._set=hasNativeMap?new Map():Object.create(null);}/**
 * Static method for creating ArraySet instances from an existing array.
 */ArraySet.fromArray=function ArraySet_fromArray(aArray,aAllowDuplicates){var set=new ArraySet();for(var i=0,len=aArray.length;i<len;i++){set.add(aArray[i],aAllowDuplicates);}return set;};/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */ArraySet.prototype.size=function ArraySet_size(){return hasNativeMap?this._set.size:Object.getOwnPropertyNames(this._set).length;};/**
 * Add the given string to this set.
 *
 * @param String aStr
 */ArraySet.prototype.add=function ArraySet_add(aStr,aAllowDuplicates){var sStr=hasNativeMap?aStr:util.toSetString(aStr);var isDuplicate=hasNativeMap?this.has(aStr):has.call(this._set,sStr);var idx=this._array.length;if(!isDuplicate||aAllowDuplicates){this._array.push(aStr);}if(!isDuplicate){if(hasNativeMap){this._set.set(aStr,idx);}else{this._set[sStr]=idx;}}};/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */ArraySet.prototype.has=function ArraySet_has(aStr){if(hasNativeMap){return this._set.has(aStr);}else{var sStr=util.toSetString(aStr);return has.call(this._set,sStr);}};/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */ArraySet.prototype.indexOf=function ArraySet_indexOf(aStr){if(hasNativeMap){var idx=this._set.get(aStr);if(idx>=0){return idx;}}else{var sStr=util.toSetString(aStr);if(has.call(this._set,sStr)){return this._set[sStr];}}throw new Error('"'+aStr+'" is not in the set.');};/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */ArraySet.prototype.at=function ArraySet_at(aIdx){if(aIdx>=0&&aIdx<this._array.length){return this._array[aIdx];}throw new Error('No element indexed by '+aIdx);};/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */ArraySet.prototype.toArray=function ArraySet_toArray(){return this._array.slice();};exports.ArraySet=ArraySet;},{"./util":77}],69:[function(require,module,exports){/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */var base64=require('./base64');// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011
var VLQ_BASE_SHIFT=5;// binary: 100000
var VLQ_BASE=1<<VLQ_BASE_SHIFT;// binary: 011111
var VLQ_BASE_MASK=VLQ_BASE-1;// binary: 100000
var VLQ_CONTINUATION_BIT=VLQ_BASE;/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */function toVLQSigned(aValue){return aValue<0?(-aValue<<1)+1:(aValue<<1)+0;}/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */function fromVLQSigned(aValue){var isNegative=(aValue&1)===1;var shifted=aValue>>1;return isNegative?-shifted:shifted;}/**
 * Returns the base 64 VLQ encoded value.
 */exports.encode=function base64VLQ_encode(aValue){var encoded="";var digit;var vlq=toVLQSigned(aValue);do{digit=vlq&VLQ_BASE_MASK;vlq>>>=VLQ_BASE_SHIFT;if(vlq>0){// There are still more digits in this value, so we must make sure the
// continuation bit is marked.
digit|=VLQ_CONTINUATION_BIT;}encoded+=base64.encode(digit);}while(vlq>0);return encoded;};/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */exports.decode=function base64VLQ_decode(aStr,aIndex,aOutParam){var strLen=aStr.length;var result=0;var shift=0;var continuation,digit;do{if(aIndex>=strLen){throw new Error("Expected more digits in base 64 VLQ value.");}digit=base64.decode(aStr.charCodeAt(aIndex++));if(digit===-1){throw new Error("Invalid base64 digit: "+aStr.charAt(aIndex-1));}continuation=!!(digit&VLQ_CONTINUATION_BIT);digit&=VLQ_BASE_MASK;result=result+(digit<<shift);shift+=VLQ_BASE_SHIFT;}while(continuation);aOutParam.value=fromVLQSigned(result);aOutParam.rest=aIndex;};},{"./base64":70}],70:[function(require,module,exports){/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */var intToCharMap='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */exports.encode=function(number){if(0<=number&&number<intToCharMap.length){return intToCharMap[number];}throw new TypeError("Must be between 0 and 63: "+number);};/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */exports.decode=function(charCode){var bigA=65;// 'A'
var bigZ=90;// 'Z'
var littleA=97;// 'a'
var littleZ=122;// 'z'
var zero=48;// '0'
var nine=57;// '9'
var plus=43;// '+'
var slash=47;// '/'
var littleOffset=26;var numberOffset=52;// 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
if(bigA<=charCode&&charCode<=bigZ){return charCode-bigA;}// 26 - 51: abcdefghijklmnopqrstuvwxyz
if(littleA<=charCode&&charCode<=littleZ){return charCode-littleA+littleOffset;}// 52 - 61: 0123456789
if(zero<=charCode&&charCode<=nine){return charCode-zero+numberOffset;}// 62: +
if(charCode==plus){return 62;}// 63: /
if(charCode==slash){return 63;}// Invalid base64 digit.
return-1;};},{}],71:[function(require,module,exports){/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */exports.GREATEST_LOWER_BOUND=1;exports.LEAST_UPPER_BOUND=2;/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */function recursiveSearch(aLow,aHigh,aNeedle,aHaystack,aCompare,aBias){// This function terminates when one of the following is true:
//
//   1. We find the exact element we are looking for.
//
//   2. We did not find the exact element, but we can return the index of
//      the next-closest element.
//
//   3. We did not find the exact element, and there is no next-closest
//      element than the one we are searching for, so we return -1.
var mid=Math.floor((aHigh-aLow)/2)+aLow;var cmp=aCompare(aNeedle,aHaystack[mid],true);if(cmp===0){// Found the element we are looking for.
return mid;}else if(cmp>0){// Our needle is greater than aHaystack[mid].
if(aHigh-mid>1){// The element is in the upper half.
return recursiveSearch(mid,aHigh,aNeedle,aHaystack,aCompare,aBias);}// The exact needle element was not found in this haystack. Determine if
// we are in termination case (3) or (2) and return the appropriate thing.
if(aBias==exports.LEAST_UPPER_BOUND){return aHigh<aHaystack.length?aHigh:-1;}else{return mid;}}else{// Our needle is less than aHaystack[mid].
if(mid-aLow>1){// The element is in the lower half.
return recursiveSearch(aLow,mid,aNeedle,aHaystack,aCompare,aBias);}// we are in termination case (3) or (2) and return the appropriate thing.
if(aBias==exports.LEAST_UPPER_BOUND){return mid;}else{return aLow<0?-1:aLow;}}}/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */exports.search=function search(aNeedle,aHaystack,aCompare,aBias){if(aHaystack.length===0){return-1;}var index=recursiveSearch(-1,aHaystack.length,aNeedle,aHaystack,aCompare,aBias||exports.GREATEST_LOWER_BOUND);if(index<0){return-1;}// We have found either the exact element, or the next-closest element than
// the one we are searching for. However, there may be more than one such
// element. Make sure we always return the smallest of these.
while(index-1>=0){if(aCompare(aHaystack[index],aHaystack[index-1],true)!==0){break;}--index;}return index;};},{}],72:[function(require,module,exports){/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */var util=require('./util');/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */function generatedPositionAfter(mappingA,mappingB){// Optimized for most common case
var lineA=mappingA.generatedLine;var lineB=mappingB.generatedLine;var columnA=mappingA.generatedColumn;var columnB=mappingB.generatedColumn;return lineB>lineA||lineB==lineA&&columnB>=columnA||util.compareByGeneratedPositionsInflated(mappingA,mappingB)<=0;}/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */function MappingList(){this._array=[];this._sorted=true;// Serves as infimum
this._last={generatedLine:-1,generatedColumn:0};}/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */MappingList.prototype.unsortedForEach=function MappingList_forEach(aCallback,aThisArg){this._array.forEach(aCallback,aThisArg);};/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */MappingList.prototype.add=function MappingList_add(aMapping){if(generatedPositionAfter(this._last,aMapping)){this._last=aMapping;this._array.push(aMapping);}else{this._sorted=false;this._array.push(aMapping);}};/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */MappingList.prototype.toArray=function MappingList_toArray(){if(!this._sorted){this._array.sort(util.compareByGeneratedPositionsInflated);this._sorted=true;}return this._array;};exports.MappingList=MappingList;},{"./util":77}],73:[function(require,module,exports){/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ // It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.
/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */function swap(ary,x,y){var temp=ary[x];ary[x]=ary[y];ary[y]=temp;}/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */function randomIntInRange(low,high){return Math.round(low+Math.random()*(high-low));}/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */function doQuickSort(ary,comparator,p,r){// If our lower bound is less than our upper bound, we (1) partition the
// array into two pieces and (2) recurse on each half. If it is not, this is
// the empty array and our base case.
if(p<r){// (1) Partitioning.
//
// The partitioning chooses a pivot between `p` and `r` and moves all
// elements that are less than or equal to the pivot to the before it, and
// all the elements that are greater than it after it. The effect is that
// once partition is done, the pivot is in the exact place it will be when
// the array is put in sorted order, and it will not need to be moved
// again. This runs in O(n) time.
// Always choose a random pivot so that an input array which is reverse
// sorted does not cause O(n^2) running time.
var pivotIndex=randomIntInRange(p,r);var i=p-1;swap(ary,pivotIndex,r);var pivot=ary[r];// Immediately after `j` is incremented in this loop, the following hold
// true:
//
//   * Every element in `ary[p .. i]` is less than or equal to the pivot.
//
//   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
for(var j=p;j<r;j++){if(comparator(ary[j],pivot)<=0){i+=1;swap(ary,i,j);}}swap(ary,i+1,j);var q=i+1;// (2) Recurse on each half.
doQuickSort(ary,comparator,p,q-1);doQuickSort(ary,comparator,q+1,r);}}/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */exports.quickSort=function(ary,comparator){doQuickSort(ary,comparator,0,ary.length-1);};},{}],74:[function(require,module,exports){/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */var util=require('./util');var binarySearch=require('./binary-search');var ArraySet=require('./array-set').ArraySet;var base64VLQ=require('./base64-vlq');var quickSort=require('./quick-sort').quickSort;function SourceMapConsumer(aSourceMap,aSourceMapURL){var sourceMap=aSourceMap;if(typeof aSourceMap==='string'){sourceMap=util.parseSourceMapInput(aSourceMap);}return sourceMap.sections!=null?new IndexedSourceMapConsumer(sourceMap,aSourceMapURL):new BasicSourceMapConsumer(sourceMap,aSourceMapURL);}SourceMapConsumer.fromSourceMap=function(aSourceMap,aSourceMapURL){return BasicSourceMapConsumer.fromSourceMap(aSourceMap,aSourceMapURL);};/**
 * The version of the source mapping spec that we are consuming.
 */SourceMapConsumer.prototype._version=3;// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.
SourceMapConsumer.prototype.__generatedMappings=null;Object.defineProperty(SourceMapConsumer.prototype,'_generatedMappings',{configurable:true,enumerable:true,get:function get(){if(!this.__generatedMappings){this._parseMappings(this._mappings,this.sourceRoot);}return this.__generatedMappings;}});SourceMapConsumer.prototype.__originalMappings=null;Object.defineProperty(SourceMapConsumer.prototype,'_originalMappings',{configurable:true,enumerable:true,get:function get(){if(!this.__originalMappings){this._parseMappings(this._mappings,this.sourceRoot);}return this.__originalMappings;}});SourceMapConsumer.prototype._charIsMappingSeparator=function SourceMapConsumer_charIsMappingSeparator(aStr,index){var c=aStr.charAt(index);return c===";"||c===",";};/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */SourceMapConsumer.prototype._parseMappings=function SourceMapConsumer_parseMappings(aStr,aSourceRoot){throw new Error("Subclasses must implement _parseMappings");};SourceMapConsumer.GENERATED_ORDER=1;SourceMapConsumer.ORIGINAL_ORDER=2;SourceMapConsumer.GREATEST_LOWER_BOUND=1;SourceMapConsumer.LEAST_UPPER_BOUND=2;/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */SourceMapConsumer.prototype.eachMapping=function SourceMapConsumer_eachMapping(aCallback,aContext,aOrder){var context=aContext||null;var order=aOrder||SourceMapConsumer.GENERATED_ORDER;var mappings;switch(order){case SourceMapConsumer.GENERATED_ORDER:mappings=this._generatedMappings;break;case SourceMapConsumer.ORIGINAL_ORDER:mappings=this._originalMappings;break;default:throw new Error("Unknown order of iteration.");}var sourceRoot=this.sourceRoot;mappings.map(function(mapping){var source=mapping.source===null?null:this._sources.at(mapping.source);source=util.computeSourceURL(sourceRoot,source,this._sourceMapURL);return{source:source,generatedLine:mapping.generatedLine,generatedColumn:mapping.generatedColumn,originalLine:mapping.originalLine,originalColumn:mapping.originalColumn,name:mapping.name===null?null:this._names.at(mapping.name)};},this).forEach(aCallback,context);};/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */SourceMapConsumer.prototype.allGeneratedPositionsFor=function SourceMapConsumer_allGeneratedPositionsFor(aArgs){var line=util.getArg(aArgs,'line');// When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
// returns the index of the closest mapping less than the needle. By
// setting needle.originalColumn to 0, we thus find the last mapping for
// the given line, provided such a mapping exists.
var needle={source:util.getArg(aArgs,'source'),originalLine:line,originalColumn:util.getArg(aArgs,'column',0)};needle.source=this._findSourceIndex(needle.source);if(needle.source<0){return[];}var mappings=[];var index=this._findMapping(needle,this._originalMappings,"originalLine","originalColumn",util.compareByOriginalPositions,binarySearch.LEAST_UPPER_BOUND);if(index>=0){var mapping=this._originalMappings[index];if(aArgs.column===undefined){var originalLine=mapping.originalLine;// Iterate until either we run out of mappings, or we run into
// a mapping for a different line than the one we found. Since
// mappings are sorted, this is guaranteed to find all mappings for
// the line we found.
while(mapping&&mapping.originalLine===originalLine){mappings.push({line:util.getArg(mapping,'generatedLine',null),column:util.getArg(mapping,'generatedColumn',null),lastColumn:util.getArg(mapping,'lastGeneratedColumn',null)});mapping=this._originalMappings[++index];}}else{var originalColumn=mapping.originalColumn;// Iterate until either we run out of mappings, or we run into
// a mapping for a different line than the one we were searching for.
// Since mappings are sorted, this is guaranteed to find all mappings for
// the line we are searching for.
while(mapping&&mapping.originalLine===line&&mapping.originalColumn==originalColumn){mappings.push({line:util.getArg(mapping,'generatedLine',null),column:util.getArg(mapping,'generatedColumn',null),lastColumn:util.getArg(mapping,'lastGeneratedColumn',null)});mapping=this._originalMappings[++index];}}}return mappings;};exports.SourceMapConsumer=SourceMapConsumer;/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */function BasicSourceMapConsumer(aSourceMap,aSourceMapURL){var sourceMap=aSourceMap;if(typeof aSourceMap==='string'){sourceMap=util.parseSourceMapInput(aSourceMap);}var version=util.getArg(sourceMap,'version');var sources=util.getArg(sourceMap,'sources');// Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
// requires the array) to play nice here.
var names=util.getArg(sourceMap,'names',[]);var sourceRoot=util.getArg(sourceMap,'sourceRoot',null);var sourcesContent=util.getArg(sourceMap,'sourcesContent',null);var mappings=util.getArg(sourceMap,'mappings');var file=util.getArg(sourceMap,'file',null);// Once again, Sass deviates from the spec and supplies the version as a
// string rather than a number, so we use loose equality checking here.
if(version!=this._version){throw new Error('Unsupported version: '+version);}if(sourceRoot){sourceRoot=util.normalize(sourceRoot);}sources=sources.map(String)// Some source maps produce relative source paths like "./foo.js" instead of
// "foo.js".  Normalize these first so that future comparisons will succeed.
// See bugzil.la/1090768.
.map(util.normalize)// Always ensure that absolute sources are internally stored relative to
// the source root, if the source root is absolute. Not doing this would
// be particularly problematic when the source root is a prefix of the
// source (valid, but why??). See github issue #199 and bugzil.la/1188982.
.map(function(source){return sourceRoot&&util.isAbsolute(sourceRoot)&&util.isAbsolute(source)?util.relative(sourceRoot,source):source;});// Pass `true` below to allow duplicate names and sources. While source maps
// are intended to be compressed and deduplicated, the TypeScript compiler
// sometimes generates source maps with duplicates in them. See Github issue
// #72 and bugzil.la/889492.
this._names=ArraySet.fromArray(names.map(String),true);this._sources=ArraySet.fromArray(sources,true);this._absoluteSources=this._sources.toArray().map(function(s){return util.computeSourceURL(sourceRoot,s,aSourceMapURL);});this.sourceRoot=sourceRoot;this.sourcesContent=sourcesContent;this._mappings=mappings;this._sourceMapURL=aSourceMapURL;this.file=file;}BasicSourceMapConsumer.prototype=Object.create(SourceMapConsumer.prototype);BasicSourceMapConsumer.prototype.consumer=SourceMapConsumer;/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */BasicSourceMapConsumer.prototype._findSourceIndex=function(aSource){var relativeSource=aSource;if(this.sourceRoot!=null){relativeSource=util.relative(this.sourceRoot,relativeSource);}if(this._sources.has(relativeSource)){return this._sources.indexOf(relativeSource);}// Maybe aSource is an absolute URL as returned by |sources|.  In
// this case we can't simply undo the transform.
var i;for(i=0;i<this._absoluteSources.length;++i){if(this._absoluteSources[i]==aSource){return i;}}return-1;};/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */BasicSourceMapConsumer.fromSourceMap=function SourceMapConsumer_fromSourceMap(aSourceMap,aSourceMapURL){var smc=Object.create(BasicSourceMapConsumer.prototype);var names=smc._names=ArraySet.fromArray(aSourceMap._names.toArray(),true);var sources=smc._sources=ArraySet.fromArray(aSourceMap._sources.toArray(),true);smc.sourceRoot=aSourceMap._sourceRoot;smc.sourcesContent=aSourceMap._generateSourcesContent(smc._sources.toArray(),smc.sourceRoot);smc.file=aSourceMap._file;smc._sourceMapURL=aSourceMapURL;smc._absoluteSources=smc._sources.toArray().map(function(s){return util.computeSourceURL(smc.sourceRoot,s,aSourceMapURL);});// Because we are modifying the entries (by converting string sources and
// names to indices into the sources and names ArraySets), we have to make
// a copy of the entry or else bad things happen. Shared mutable state
// strikes again! See github issue #191.
var generatedMappings=aSourceMap._mappings.toArray().slice();var destGeneratedMappings=smc.__generatedMappings=[];var destOriginalMappings=smc.__originalMappings=[];for(var i=0,length=generatedMappings.length;i<length;i++){var srcMapping=generatedMappings[i];var destMapping=new Mapping();destMapping.generatedLine=srcMapping.generatedLine;destMapping.generatedColumn=srcMapping.generatedColumn;if(srcMapping.source){destMapping.source=sources.indexOf(srcMapping.source);destMapping.originalLine=srcMapping.originalLine;destMapping.originalColumn=srcMapping.originalColumn;if(srcMapping.name){destMapping.name=names.indexOf(srcMapping.name);}destOriginalMappings.push(destMapping);}destGeneratedMappings.push(destMapping);}quickSort(smc.__originalMappings,util.compareByOriginalPositions);return smc;};/**
 * The version of the source mapping spec that we are consuming.
 */BasicSourceMapConsumer.prototype._version=3;/**
 * The list of original sources.
 */Object.defineProperty(BasicSourceMapConsumer.prototype,'sources',{get:function get(){return this._absoluteSources.slice();}});/**
 * Provide the JIT with a nice shape / hidden class.
 */function Mapping(){this.generatedLine=0;this.generatedColumn=0;this.source=null;this.originalLine=null;this.originalColumn=null;this.name=null;}/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */BasicSourceMapConsumer.prototype._parseMappings=function SourceMapConsumer_parseMappings(aStr,aSourceRoot){var generatedLine=1;var previousGeneratedColumn=0;var previousOriginalLine=0;var previousOriginalColumn=0;var previousSource=0;var previousName=0;var length=aStr.length;var index=0;var cachedSegments={};var temp={};var originalMappings=[];var generatedMappings=[];var mapping,str,segment,end,value;while(index<length){if(aStr.charAt(index)===';'){generatedLine++;index++;previousGeneratedColumn=0;}else if(aStr.charAt(index)===','){index++;}else{mapping=new Mapping();mapping.generatedLine=generatedLine;// Because each offset is encoded relative to the previous one,
// many segments often have the same encoding. We can exploit this
// fact by caching the parsed variable length fields of each segment,
// allowing us to avoid a second parse if we encounter the same
// segment again.
for(end=index;end<length;end++){if(this._charIsMappingSeparator(aStr,end)){break;}}str=aStr.slice(index,end);segment=cachedSegments[str];if(segment){index+=str.length;}else{segment=[];while(index<end){base64VLQ.decode(aStr,index,temp);value=temp.value;index=temp.rest;segment.push(value);}if(segment.length===2){throw new Error('Found a source, but no line and column');}if(segment.length===3){throw new Error('Found a source and line, but no column');}cachedSegments[str]=segment;}// Generated column.
mapping.generatedColumn=previousGeneratedColumn+segment[0];previousGeneratedColumn=mapping.generatedColumn;if(segment.length>1){// Original source.
mapping.source=previousSource+segment[1];previousSource+=segment[1];// Original line.
mapping.originalLine=previousOriginalLine+segment[2];previousOriginalLine=mapping.originalLine;// Lines are stored 0-based
mapping.originalLine+=1;// Original column.
mapping.originalColumn=previousOriginalColumn+segment[3];previousOriginalColumn=mapping.originalColumn;if(segment.length>4){// Original name.
mapping.name=previousName+segment[4];previousName+=segment[4];}}generatedMappings.push(mapping);if(typeof mapping.originalLine==='number'){originalMappings.push(mapping);}}}quickSort(generatedMappings,util.compareByGeneratedPositionsDeflated);this.__generatedMappings=generatedMappings;quickSort(originalMappings,util.compareByOriginalPositions);this.__originalMappings=originalMappings;};/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */BasicSourceMapConsumer.prototype._findMapping=function SourceMapConsumer_findMapping(aNeedle,aMappings,aLineName,aColumnName,aComparator,aBias){// To return the position we are searching for, we must first find the
// mapping for the given position and then return the opposite position it
// points to. Because the mappings are sorted, we can use binary search to
// find the best mapping.
if(aNeedle[aLineName]<=0){throw new TypeError('Line must be greater than or equal to 1, got '+aNeedle[aLineName]);}if(aNeedle[aColumnName]<0){throw new TypeError('Column must be greater than or equal to 0, got '+aNeedle[aColumnName]);}return binarySearch.search(aNeedle,aMappings,aComparator,aBias);};/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */BasicSourceMapConsumer.prototype.computeColumnSpans=function SourceMapConsumer_computeColumnSpans(){for(var index=0;index<this._generatedMappings.length;++index){var mapping=this._generatedMappings[index];// Mappings do not contain a field for the last generated columnt. We
// can come up with an optimistic estimate, however, by assuming that
// mappings are contiguous (i.e. given two consecutive mappings, the
// first mapping ends where the second one starts).
if(index+1<this._generatedMappings.length){var nextMapping=this._generatedMappings[index+1];if(mapping.generatedLine===nextMapping.generatedLine){mapping.lastGeneratedColumn=nextMapping.generatedColumn-1;continue;}}// The last mapping for each line spans the entire line.
mapping.lastGeneratedColumn=Infinity;}};/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */BasicSourceMapConsumer.prototype.originalPositionFor=function SourceMapConsumer_originalPositionFor(aArgs){var needle={generatedLine:util.getArg(aArgs,'line'),generatedColumn:util.getArg(aArgs,'column')};var index=this._findMapping(needle,this._generatedMappings,"generatedLine","generatedColumn",util.compareByGeneratedPositionsDeflated,util.getArg(aArgs,'bias',SourceMapConsumer.GREATEST_LOWER_BOUND));if(index>=0){var mapping=this._generatedMappings[index];if(mapping.generatedLine===needle.generatedLine){var source=util.getArg(mapping,'source',null);if(source!==null){source=this._sources.at(source);source=util.computeSourceURL(this.sourceRoot,source,this._sourceMapURL);}var name=util.getArg(mapping,'name',null);if(name!==null){name=this._names.at(name);}return{source:source,line:util.getArg(mapping,'originalLine',null),column:util.getArg(mapping,'originalColumn',null),name:name};}}return{source:null,line:null,column:null,name:null};};/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */BasicSourceMapConsumer.prototype.hasContentsOfAllSources=function BasicSourceMapConsumer_hasContentsOfAllSources(){if(!this.sourcesContent){return false;}return this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some(function(sc){return sc==null;});};/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */BasicSourceMapConsumer.prototype.sourceContentFor=function SourceMapConsumer_sourceContentFor(aSource,nullOnMissing){if(!this.sourcesContent){return null;}var index=this._findSourceIndex(aSource);if(index>=0){return this.sourcesContent[index];}var relativeSource=aSource;if(this.sourceRoot!=null){relativeSource=util.relative(this.sourceRoot,relativeSource);}var url;if(this.sourceRoot!=null&&(url=util.urlParse(this.sourceRoot))){// XXX: file:// URIs and absolute paths lead to unexpected behavior for
// many users. We can help them out when they expect file:// URIs to
// behave like it would if they were running a local HTTP server. See
// https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
var fileUriAbsPath=relativeSource.replace(/^file:\/\//,"");if(url.scheme=="file"&&this._sources.has(fileUriAbsPath)){return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];}if((!url.path||url.path=="/")&&this._sources.has("/"+relativeSource)){return this.sourcesContent[this._sources.indexOf("/"+relativeSource)];}}// This function is used recursively from
// IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
// don't want to throw if we can't find the source - we just want to
// return null, so we provide a flag to exit gracefully.
if(nullOnMissing){return null;}else{throw new Error('"'+relativeSource+'" is not in the SourceMap.');}};/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */BasicSourceMapConsumer.prototype.generatedPositionFor=function SourceMapConsumer_generatedPositionFor(aArgs){var source=util.getArg(aArgs,'source');source=this._findSourceIndex(source);if(source<0){return{line:null,column:null,lastColumn:null};}var needle={source:source,originalLine:util.getArg(aArgs,'line'),originalColumn:util.getArg(aArgs,'column')};var index=this._findMapping(needle,this._originalMappings,"originalLine","originalColumn",util.compareByOriginalPositions,util.getArg(aArgs,'bias',SourceMapConsumer.GREATEST_LOWER_BOUND));if(index>=0){var mapping=this._originalMappings[index];if(mapping.source===needle.source){return{line:util.getArg(mapping,'generatedLine',null),column:util.getArg(mapping,'generatedColumn',null),lastColumn:util.getArg(mapping,'lastGeneratedColumn',null)};}}return{line:null,column:null,lastColumn:null};};exports.BasicSourceMapConsumer=BasicSourceMapConsumer;/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */function IndexedSourceMapConsumer(aSourceMap,aSourceMapURL){var sourceMap=aSourceMap;if(typeof aSourceMap==='string'){sourceMap=util.parseSourceMapInput(aSourceMap);}var version=util.getArg(sourceMap,'version');var sections=util.getArg(sourceMap,'sections');if(version!=this._version){throw new Error('Unsupported version: '+version);}this._sources=new ArraySet();this._names=new ArraySet();var lastOffset={line:-1,column:0};this._sections=sections.map(function(s){if(s.url){// The url field will require support for asynchronicity.
// See https://github.com/mozilla/source-map/issues/16
throw new Error('Support for url field in sections not implemented.');}var offset=util.getArg(s,'offset');var offsetLine=util.getArg(offset,'line');var offsetColumn=util.getArg(offset,'column');if(offsetLine<lastOffset.line||offsetLine===lastOffset.line&&offsetColumn<lastOffset.column){throw new Error('Section offsets must be ordered and non-overlapping.');}lastOffset=offset;return{generatedOffset:{// The offset fields are 0-based, but we use 1-based indices when
// encoding/decoding from VLQ.
generatedLine:offsetLine+1,generatedColumn:offsetColumn+1},consumer:new SourceMapConsumer(util.getArg(s,'map'),aSourceMapURL)};});}IndexedSourceMapConsumer.prototype=Object.create(SourceMapConsumer.prototype);IndexedSourceMapConsumer.prototype.constructor=SourceMapConsumer;/**
 * The version of the source mapping spec that we are consuming.
 */IndexedSourceMapConsumer.prototype._version=3;/**
 * The list of original sources.
 */Object.defineProperty(IndexedSourceMapConsumer.prototype,'sources',{get:function get(){var sources=[];for(var i=0;i<this._sections.length;i++){for(var j=0;j<this._sections[i].consumer.sources.length;j++){sources.push(this._sections[i].consumer.sources[j]);}}return sources;}});/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */IndexedSourceMapConsumer.prototype.originalPositionFor=function IndexedSourceMapConsumer_originalPositionFor(aArgs){var needle={generatedLine:util.getArg(aArgs,'line'),generatedColumn:util.getArg(aArgs,'column')};// Find the section containing the generated position we're trying to map
// to an original position.
var sectionIndex=binarySearch.search(needle,this._sections,function(needle,section){var cmp=needle.generatedLine-section.generatedOffset.generatedLine;if(cmp){return cmp;}return needle.generatedColumn-section.generatedOffset.generatedColumn;});var section=this._sections[sectionIndex];if(!section){return{source:null,line:null,column:null,name:null};}return section.consumer.originalPositionFor({line:needle.generatedLine-(section.generatedOffset.generatedLine-1),column:needle.generatedColumn-(section.generatedOffset.generatedLine===needle.generatedLine?section.generatedOffset.generatedColumn-1:0),bias:aArgs.bias});};/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */IndexedSourceMapConsumer.prototype.hasContentsOfAllSources=function IndexedSourceMapConsumer_hasContentsOfAllSources(){return this._sections.every(function(s){return s.consumer.hasContentsOfAllSources();});};/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */IndexedSourceMapConsumer.prototype.sourceContentFor=function IndexedSourceMapConsumer_sourceContentFor(aSource,nullOnMissing){for(var i=0;i<this._sections.length;i++){var section=this._sections[i];var content=section.consumer.sourceContentFor(aSource,true);if(content){return content;}}if(nullOnMissing){return null;}else{throw new Error('"'+aSource+'" is not in the SourceMap.');}};/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */IndexedSourceMapConsumer.prototype.generatedPositionFor=function IndexedSourceMapConsumer_generatedPositionFor(aArgs){for(var i=0;i<this._sections.length;i++){var section=this._sections[i];// Only consider this section if the requested source is in the list of
// sources of the consumer.
if(section.consumer._findSourceIndex(util.getArg(aArgs,'source'))===-1){continue;}var generatedPosition=section.consumer.generatedPositionFor(aArgs);if(generatedPosition){var ret={line:generatedPosition.line+(section.generatedOffset.generatedLine-1),column:generatedPosition.column+(section.generatedOffset.generatedLine===generatedPosition.line?section.generatedOffset.generatedColumn-1:0)};return ret;}}return{line:null,column:null};};/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */IndexedSourceMapConsumer.prototype._parseMappings=function IndexedSourceMapConsumer_parseMappings(aStr,aSourceRoot){this.__generatedMappings=[];this.__originalMappings=[];for(var i=0;i<this._sections.length;i++){var section=this._sections[i];var sectionMappings=section.consumer._generatedMappings;for(var j=0;j<sectionMappings.length;j++){var mapping=sectionMappings[j];var source=section.consumer._sources.at(mapping.source);source=util.computeSourceURL(section.consumer.sourceRoot,source,this._sourceMapURL);this._sources.add(source);source=this._sources.indexOf(source);var name=null;if(mapping.name){name=section.consumer._names.at(mapping.name);this._names.add(name);name=this._names.indexOf(name);}// The mappings coming from the consumer for the section have
// generated positions relative to the start of the section, so we
// need to offset them to be relative to the start of the concatenated
// generated file.
var adjustedMapping={source:source,generatedLine:mapping.generatedLine+(section.generatedOffset.generatedLine-1),generatedColumn:mapping.generatedColumn+(section.generatedOffset.generatedLine===mapping.generatedLine?section.generatedOffset.generatedColumn-1:0),originalLine:mapping.originalLine,originalColumn:mapping.originalColumn,name:name};this.__generatedMappings.push(adjustedMapping);if(typeof adjustedMapping.originalLine==='number'){this.__originalMappings.push(adjustedMapping);}}}quickSort(this.__generatedMappings,util.compareByGeneratedPositionsDeflated);quickSort(this.__originalMappings,util.compareByOriginalPositions);};exports.IndexedSourceMapConsumer=IndexedSourceMapConsumer;},{"./array-set":68,"./base64-vlq":69,"./binary-search":71,"./quick-sort":73,"./util":77}],75:[function(require,module,exports){/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */var base64VLQ=require('./base64-vlq');var util=require('./util');var ArraySet=require('./array-set').ArraySet;var MappingList=require('./mapping-list').MappingList;/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */function SourceMapGenerator(aArgs){if(!aArgs){aArgs={};}this._file=util.getArg(aArgs,'file',null);this._sourceRoot=util.getArg(aArgs,'sourceRoot',null);this._skipValidation=util.getArg(aArgs,'skipValidation',false);this._sources=new ArraySet();this._names=new ArraySet();this._mappings=new MappingList();this._sourcesContents=null;}SourceMapGenerator.prototype._version=3;/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */SourceMapGenerator.fromSourceMap=function SourceMapGenerator_fromSourceMap(aSourceMapConsumer){var sourceRoot=aSourceMapConsumer.sourceRoot;var generator=new SourceMapGenerator({file:aSourceMapConsumer.file,sourceRoot:sourceRoot});aSourceMapConsumer.eachMapping(function(mapping){var newMapping={generated:{line:mapping.generatedLine,column:mapping.generatedColumn}};if(mapping.source!=null){newMapping.source=mapping.source;if(sourceRoot!=null){newMapping.source=util.relative(sourceRoot,newMapping.source);}newMapping.original={line:mapping.originalLine,column:mapping.originalColumn};if(mapping.name!=null){newMapping.name=mapping.name;}}generator.addMapping(newMapping);});aSourceMapConsumer.sources.forEach(function(sourceFile){var sourceRelative=sourceFile;if(sourceRoot!==null){sourceRelative=util.relative(sourceRoot,sourceFile);}if(!generator._sources.has(sourceRelative)){generator._sources.add(sourceRelative);}var content=aSourceMapConsumer.sourceContentFor(sourceFile);if(content!=null){generator.setSourceContent(sourceFile,content);}});return generator;};/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */SourceMapGenerator.prototype.addMapping=function SourceMapGenerator_addMapping(aArgs){var generated=util.getArg(aArgs,'generated');var original=util.getArg(aArgs,'original',null);var source=util.getArg(aArgs,'source',null);var name=util.getArg(aArgs,'name',null);if(!this._skipValidation){this._validateMapping(generated,original,source,name);}if(source!=null){source=String(source);if(!this._sources.has(source)){this._sources.add(source);}}if(name!=null){name=String(name);if(!this._names.has(name)){this._names.add(name);}}this._mappings.add({generatedLine:generated.line,generatedColumn:generated.column,originalLine:original!=null&&original.line,originalColumn:original!=null&&original.column,source:source,name:name});};/**
 * Set the source content for a source file.
 */SourceMapGenerator.prototype.setSourceContent=function SourceMapGenerator_setSourceContent(aSourceFile,aSourceContent){var source=aSourceFile;if(this._sourceRoot!=null){source=util.relative(this._sourceRoot,source);}if(aSourceContent!=null){// Add the source content to the _sourcesContents map.
// Create a new _sourcesContents map if the property is null.
if(!this._sourcesContents){this._sourcesContents=Object.create(null);}this._sourcesContents[util.toSetString(source)]=aSourceContent;}else if(this._sourcesContents){// Remove the source file from the _sourcesContents map.
// If the _sourcesContents map is empty, set the property to null.
delete this._sourcesContents[util.toSetString(source)];if(Object.keys(this._sourcesContents).length===0){this._sourcesContents=null;}}};/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */SourceMapGenerator.prototype.applySourceMap=function SourceMapGenerator_applySourceMap(aSourceMapConsumer,aSourceFile,aSourceMapPath){var sourceFile=aSourceFile;// If aSourceFile is omitted, we will use the file property of the SourceMap
if(aSourceFile==null){if(aSourceMapConsumer.file==null){throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, '+'or the source map\'s "file" property. Both were omitted.');}sourceFile=aSourceMapConsumer.file;}var sourceRoot=this._sourceRoot;// Make "sourceFile" relative if an absolute Url is passed.
if(sourceRoot!=null){sourceFile=util.relative(sourceRoot,sourceFile);}// Applying the SourceMap can add and remove items from the sources and
// the names array.
var newSources=new ArraySet();var newNames=new ArraySet();// Find mappings for the "sourceFile"
this._mappings.unsortedForEach(function(mapping){if(mapping.source===sourceFile&&mapping.originalLine!=null){// Check if it can be mapped by the source map, then update the mapping.
var original=aSourceMapConsumer.originalPositionFor({line:mapping.originalLine,column:mapping.originalColumn});if(original.source!=null){// Copy mapping
mapping.source=original.source;if(aSourceMapPath!=null){mapping.source=util.join(aSourceMapPath,mapping.source);}if(sourceRoot!=null){mapping.source=util.relative(sourceRoot,mapping.source);}mapping.originalLine=original.line;mapping.originalColumn=original.column;if(original.name!=null){mapping.name=original.name;}}}var source=mapping.source;if(source!=null&&!newSources.has(source)){newSources.add(source);}var name=mapping.name;if(name!=null&&!newNames.has(name)){newNames.add(name);}},this);this._sources=newSources;this._names=newNames;// Copy sourcesContents of applied map.
aSourceMapConsumer.sources.forEach(function(sourceFile){var content=aSourceMapConsumer.sourceContentFor(sourceFile);if(content!=null){if(aSourceMapPath!=null){sourceFile=util.join(aSourceMapPath,sourceFile);}if(sourceRoot!=null){sourceFile=util.relative(sourceRoot,sourceFile);}this.setSourceContent(sourceFile,content);}},this);};/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */SourceMapGenerator.prototype._validateMapping=function SourceMapGenerator_validateMapping(aGenerated,aOriginal,aSource,aName){// When aOriginal is truthy but has empty values for .line and .column,
// it is most likely a programmer error. In this case we throw a very
// specific error message to try to guide them the right way.
// For example: https://github.com/Polymer/polymer-bundler/pull/519
if(aOriginal&&typeof aOriginal.line!=='number'&&typeof aOriginal.column!=='number'){throw new Error('original.line and original.column are not numbers -- you probably meant to omit '+'the original mapping entirely and only map the generated position. If so, pass '+'null for the original mapping instead of an object with empty or null values.');}if(aGenerated&&'line'in aGenerated&&'column'in aGenerated&&aGenerated.line>0&&aGenerated.column>=0&&!aOriginal&&!aSource&&!aName){// Case 1.
return;}else if(aGenerated&&'line'in aGenerated&&'column'in aGenerated&&aOriginal&&'line'in aOriginal&&'column'in aOriginal&&aGenerated.line>0&&aGenerated.column>=0&&aOriginal.line>0&&aOriginal.column>=0&&aSource){// Cases 2 and 3.
return;}else{throw new Error('Invalid mapping: '+JSON.stringify({generated:aGenerated,source:aSource,original:aOriginal,name:aName}));}};/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */SourceMapGenerator.prototype._serializeMappings=function SourceMapGenerator_serializeMappings(){var previousGeneratedColumn=0;var previousGeneratedLine=1;var previousOriginalColumn=0;var previousOriginalLine=0;var previousName=0;var previousSource=0;var result='';var next;var mapping;var nameIdx;var sourceIdx;var mappings=this._mappings.toArray();for(var i=0,len=mappings.length;i<len;i++){mapping=mappings[i];next='';if(mapping.generatedLine!==previousGeneratedLine){previousGeneratedColumn=0;while(mapping.generatedLine!==previousGeneratedLine){next+=';';previousGeneratedLine++;}}else{if(i>0){if(!util.compareByGeneratedPositionsInflated(mapping,mappings[i-1])){continue;}next+=',';}}next+=base64VLQ.encode(mapping.generatedColumn-previousGeneratedColumn);previousGeneratedColumn=mapping.generatedColumn;if(mapping.source!=null){sourceIdx=this._sources.indexOf(mapping.source);next+=base64VLQ.encode(sourceIdx-previousSource);previousSource=sourceIdx;// lines are stored 0-based in SourceMap spec version 3
next+=base64VLQ.encode(mapping.originalLine-1-previousOriginalLine);previousOriginalLine=mapping.originalLine-1;next+=base64VLQ.encode(mapping.originalColumn-previousOriginalColumn);previousOriginalColumn=mapping.originalColumn;if(mapping.name!=null){nameIdx=this._names.indexOf(mapping.name);next+=base64VLQ.encode(nameIdx-previousName);previousName=nameIdx;}}result+=next;}return result;};SourceMapGenerator.prototype._generateSourcesContent=function SourceMapGenerator_generateSourcesContent(aSources,aSourceRoot){return aSources.map(function(source){if(!this._sourcesContents){return null;}if(aSourceRoot!=null){source=util.relative(aSourceRoot,source);}var key=util.toSetString(source);return Object.prototype.hasOwnProperty.call(this._sourcesContents,key)?this._sourcesContents[key]:null;},this);};/**
 * Externalize the source map.
 */SourceMapGenerator.prototype.toJSON=function SourceMapGenerator_toJSON(){var map={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};if(this._file!=null){map.file=this._file;}if(this._sourceRoot!=null){map.sourceRoot=this._sourceRoot;}if(this._sourcesContents){map.sourcesContent=this._generateSourcesContent(map.sources,map.sourceRoot);}return map;};/**
 * Render the source map being generated to a string.
 */SourceMapGenerator.prototype.toString=function SourceMapGenerator_toString(){return JSON.stringify(this.toJSON());};exports.SourceMapGenerator=SourceMapGenerator;},{"./array-set":68,"./base64-vlq":69,"./mapping-list":72,"./util":77}],76:[function(require,module,exports){/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */var SourceMapGenerator=require('./source-map-generator').SourceMapGenerator;var util=require('./util');// Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).
var REGEX_NEWLINE=/(\r?\n)/;// Newline character code for charCodeAt() comparisons
var NEWLINE_CODE=10;// Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!
var isSourceNode="$$$isSourceNode$$$";/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */function SourceNode(aLine,aColumn,aSource,aChunks,aName){this.children=[];this.sourceContents={};this.line=aLine==null?null:aLine;this.column=aColumn==null?null:aColumn;this.source=aSource==null?null:aSource;this.name=aName==null?null:aName;this[isSourceNode]=true;if(aChunks!=null)this.add(aChunks);}/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */SourceNode.fromStringWithSourceMap=function SourceNode_fromStringWithSourceMap(aGeneratedCode,aSourceMapConsumer,aRelativePath){// The SourceNode we want to fill with the generated code
// and the SourceMap
var node=new SourceNode();// All even indices of this array are one line of the generated code,
// while all odd indices are the newlines between two adjacent lines
// (since `REGEX_NEWLINE` captures its match).
// Processed fragments are accessed by calling `shiftNextLine`.
var remainingLines=aGeneratedCode.split(REGEX_NEWLINE);var remainingLinesIndex=0;var shiftNextLine=function shiftNextLine(){var lineContents=getNextLine();// The last line of a file might not have a newline.
var newLine=getNextLine()||"";return lineContents+newLine;function getNextLine(){return remainingLinesIndex<remainingLines.length?remainingLines[remainingLinesIndex++]:undefined;}};// We need to remember the position of "remainingLines"
var lastGeneratedLine=1,lastGeneratedColumn=0;// The generate SourceNodes we need a code range.
// To extract it current and last mapping is used.
// Here we store the last mapping.
var lastMapping=null;aSourceMapConsumer.eachMapping(function(mapping){if(lastMapping!==null){// We add the code from "lastMapping" to "mapping":
// First check if there is a new line in between.
if(lastGeneratedLine<mapping.generatedLine){// Associate first line with "lastMapping"
addMappingWithCode(lastMapping,shiftNextLine());lastGeneratedLine++;lastGeneratedColumn=0;// The remaining code is added without mapping
}else{// There is no new line in between.
// Associate the code between "lastGeneratedColumn" and
// "mapping.generatedColumn" with "lastMapping"
var nextLine=remainingLines[remainingLinesIndex]||'';var code=nextLine.substr(0,mapping.generatedColumn-lastGeneratedColumn);remainingLines[remainingLinesIndex]=nextLine.substr(mapping.generatedColumn-lastGeneratedColumn);lastGeneratedColumn=mapping.generatedColumn;addMappingWithCode(lastMapping,code);// No more remaining code, continue
lastMapping=mapping;return;}}// We add the generated code until the first mapping
// to the SourceNode without any mapping.
// Each line is added as separate string.
while(lastGeneratedLine<mapping.generatedLine){node.add(shiftNextLine());lastGeneratedLine++;}if(lastGeneratedColumn<mapping.generatedColumn){var nextLine=remainingLines[remainingLinesIndex]||'';node.add(nextLine.substr(0,mapping.generatedColumn));remainingLines[remainingLinesIndex]=nextLine.substr(mapping.generatedColumn);lastGeneratedColumn=mapping.generatedColumn;}lastMapping=mapping;},this);// We have processed all mappings.
if(remainingLinesIndex<remainingLines.length){if(lastMapping){// Associate the remaining code in the current line with "lastMapping"
addMappingWithCode(lastMapping,shiftNextLine());}// and add the remaining lines without any mapping
node.add(remainingLines.splice(remainingLinesIndex).join(""));}// Copy sourcesContent into SourceNode
aSourceMapConsumer.sources.forEach(function(sourceFile){var content=aSourceMapConsumer.sourceContentFor(sourceFile);if(content!=null){if(aRelativePath!=null){sourceFile=util.join(aRelativePath,sourceFile);}node.setSourceContent(sourceFile,content);}});return node;function addMappingWithCode(mapping,code){if(mapping===null||mapping.source===undefined){node.add(code);}else{var source=aRelativePath?util.join(aRelativePath,mapping.source):mapping.source;node.add(new SourceNode(mapping.originalLine,mapping.originalColumn,source,code,mapping.name));}}};/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */SourceNode.prototype.add=function SourceNode_add(aChunk){if(Array.isArray(aChunk)){aChunk.forEach(function(chunk){this.add(chunk);},this);}else if(aChunk[isSourceNode]||typeof aChunk==="string"){if(aChunk){this.children.push(aChunk);}}else{throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+aChunk);}return this;};/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */SourceNode.prototype.prepend=function SourceNode_prepend(aChunk){if(Array.isArray(aChunk)){for(var i=aChunk.length-1;i>=0;i--){this.prepend(aChunk[i]);}}else if(aChunk[isSourceNode]||typeof aChunk==="string"){this.children.unshift(aChunk);}else{throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+aChunk);}return this;};/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */SourceNode.prototype.walk=function SourceNode_walk(aFn){var chunk;for(var i=0,len=this.children.length;i<len;i++){chunk=this.children[i];if(chunk[isSourceNode]){chunk.walk(aFn);}else{if(chunk!==''){aFn(chunk,{source:this.source,line:this.line,column:this.column,name:this.name});}}}};/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */SourceNode.prototype.join=function SourceNode_join(aSep){var newChildren;var i;var len=this.children.length;if(len>0){newChildren=[];for(i=0;i<len-1;i++){newChildren.push(this.children[i]);newChildren.push(aSep);}newChildren.push(this.children[i]);this.children=newChildren;}return this;};/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */SourceNode.prototype.replaceRight=function SourceNode_replaceRight(aPattern,aReplacement){var lastChild=this.children[this.children.length-1];if(lastChild[isSourceNode]){lastChild.replaceRight(aPattern,aReplacement);}else if(typeof lastChild==='string'){this.children[this.children.length-1]=lastChild.replace(aPattern,aReplacement);}else{this.children.push(''.replace(aPattern,aReplacement));}return this;};/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */SourceNode.prototype.setSourceContent=function SourceNode_setSourceContent(aSourceFile,aSourceContent){this.sourceContents[util.toSetString(aSourceFile)]=aSourceContent;};/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */SourceNode.prototype.walkSourceContents=function SourceNode_walkSourceContents(aFn){for(var i=0,len=this.children.length;i<len;i++){if(this.children[i][isSourceNode]){this.children[i].walkSourceContents(aFn);}}var sources=Object.keys(this.sourceContents);for(var i=0,len=sources.length;i<len;i++){aFn(util.fromSetString(sources[i]),this.sourceContents[sources[i]]);}};/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */SourceNode.prototype.toString=function SourceNode_toString(){var str="";this.walk(function(chunk){str+=chunk;});return str;};/**
 * Returns the string representation of this source node along with a source
 * map.
 */SourceNode.prototype.toStringWithSourceMap=function SourceNode_toStringWithSourceMap(aArgs){var generated={code:"",line:1,column:0};var map=new SourceMapGenerator(aArgs);var sourceMappingActive=false;var lastOriginalSource=null;var lastOriginalLine=null;var lastOriginalColumn=null;var lastOriginalName=null;this.walk(function(chunk,original){generated.code+=chunk;if(original.source!==null&&original.line!==null&&original.column!==null){if(lastOriginalSource!==original.source||lastOriginalLine!==original.line||lastOriginalColumn!==original.column||lastOriginalName!==original.name){map.addMapping({source:original.source,original:{line:original.line,column:original.column},generated:{line:generated.line,column:generated.column},name:original.name});}lastOriginalSource=original.source;lastOriginalLine=original.line;lastOriginalColumn=original.column;lastOriginalName=original.name;sourceMappingActive=true;}else if(sourceMappingActive){map.addMapping({generated:{line:generated.line,column:generated.column}});lastOriginalSource=null;sourceMappingActive=false;}for(var idx=0,length=chunk.length;idx<length;idx++){if(chunk.charCodeAt(idx)===NEWLINE_CODE){generated.line++;generated.column=0;// Mappings end at eol
if(idx+1===length){lastOriginalSource=null;sourceMappingActive=false;}else if(sourceMappingActive){map.addMapping({source:original.source,original:{line:original.line,column:original.column},generated:{line:generated.line,column:generated.column},name:original.name});}}else{generated.column++;}}});this.walkSourceContents(function(sourceFile,sourceContent){map.setSourceContent(sourceFile,sourceContent);});return{code:generated.code,map:map};};exports.SourceNode=SourceNode;},{"./source-map-generator":75,"./util":77}],77:[function(require,module,exports){/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ /**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */function getArg(aArgs,aName,aDefaultValue){if(aName in aArgs){return aArgs[aName];}else if(arguments.length===3){return aDefaultValue;}else{throw new Error('"'+aName+'" is a required argument.');}}exports.getArg=getArg;var urlRegexp=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;var dataUrlRegexp=/^data:.+\,.+$/;function urlParse(aUrl){var match=aUrl.match(urlRegexp);if(!match){return null;}return{scheme:match[1],auth:match[2],host:match[3],port:match[4],path:match[5]};}exports.urlParse=urlParse;function urlGenerate(aParsedUrl){var url='';if(aParsedUrl.scheme){url+=aParsedUrl.scheme+':';}url+='//';if(aParsedUrl.auth){url+=aParsedUrl.auth+'@';}if(aParsedUrl.host){url+=aParsedUrl.host;}if(aParsedUrl.port){url+=":"+aParsedUrl.port;}if(aParsedUrl.path){url+=aParsedUrl.path;}return url;}exports.urlGenerate=urlGenerate;/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */function normalize(aPath){var path=aPath;var url=urlParse(aPath);if(url){if(!url.path){return aPath;}path=url.path;}var isAbsolute=exports.isAbsolute(path);var parts=path.split(/\/+/);for(var part,up=0,i=parts.length-1;i>=0;i--){part=parts[i];if(part==='.'){parts.splice(i,1);}else if(part==='..'){up++;}else if(up>0){if(part===''){// The first part is blank if the path is absolute. Trying to go
// above the root is a no-op. Therefore we can remove all '..' parts
// directly after the root.
parts.splice(i+1,up);up=0;}else{parts.splice(i,2);up--;}}}path=parts.join('/');if(path===''){path=isAbsolute?'/':'.';}if(url){url.path=path;return urlGenerate(url);}return path;}exports.normalize=normalize;/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */function join(aRoot,aPath){if(aRoot===""){aRoot=".";}if(aPath===""){aPath=".";}var aPathUrl=urlParse(aPath);var aRootUrl=urlParse(aRoot);if(aRootUrl){aRoot=aRootUrl.path||'/';}// `join(foo, '//www.example.org')`
if(aPathUrl&&!aPathUrl.scheme){if(aRootUrl){aPathUrl.scheme=aRootUrl.scheme;}return urlGenerate(aPathUrl);}if(aPathUrl||aPath.match(dataUrlRegexp)){return aPath;}// `join('http://', 'www.example.com')`
if(aRootUrl&&!aRootUrl.host&&!aRootUrl.path){aRootUrl.host=aPath;return urlGenerate(aRootUrl);}var joined=aPath.charAt(0)==='/'?aPath:normalize(aRoot.replace(/\/+$/,'')+'/'+aPath);if(aRootUrl){aRootUrl.path=joined;return urlGenerate(aRootUrl);}return joined;}exports.join=join;exports.isAbsolute=function(aPath){return aPath.charAt(0)==='/'||urlRegexp.test(aPath);};/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */function relative(aRoot,aPath){if(aRoot===""){aRoot=".";}aRoot=aRoot.replace(/\/$/,'');// It is possible for the path to be above the root. In this case, simply
// checking whether the root is a prefix of the path won't work. Instead, we
// need to remove components from the root one by one, until either we find
// a prefix that fits, or we run out of components to remove.
var level=0;while(aPath.indexOf(aRoot+'/')!==0){var index=aRoot.lastIndexOf("/");if(index<0){return aPath;}// If the only part of the root that is left is the scheme (i.e. http://,
// file:///, etc.), one or more slashes (/), or simply nothing at all, we
// have exhausted all components, so the path is not relative to the root.
aRoot=aRoot.slice(0,index);if(aRoot.match(/^([^\/]+:\/)?\/*$/)){return aPath;}++level;}// Make sure we add a "../" for each component we removed from the root.
return Array(level+1).join("../")+aPath.substr(aRoot.length+1);}exports.relative=relative;var supportsNullProto=function(){var obj=Object.create(null);return!('__proto__'in obj);}();function identity(s){return s;}/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */function toSetString(aStr){if(isProtoString(aStr)){return'$'+aStr;}return aStr;}exports.toSetString=supportsNullProto?identity:toSetString;function fromSetString(aStr){if(isProtoString(aStr)){return aStr.slice(1);}return aStr;}exports.fromSetString=supportsNullProto?identity:fromSetString;function isProtoString(s){if(!s){return false;}var length=s.length;if(length<9/* "__proto__".length */){return false;}if(s.charCodeAt(length-1)!==95/* '_' */||s.charCodeAt(length-2)!==95/* '_' */||s.charCodeAt(length-3)!==111/* 'o' */||s.charCodeAt(length-4)!==116/* 't' */||s.charCodeAt(length-5)!==111/* 'o' */||s.charCodeAt(length-6)!==114/* 'r' */||s.charCodeAt(length-7)!==112/* 'p' */||s.charCodeAt(length-8)!==95/* '_' */||s.charCodeAt(length-9)!==95/* '_' */){return false;}for(var i=length-10;i>=0;i--){if(s.charCodeAt(i)!==36/* '$' */){return false;}}return true;}/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */function compareByOriginalPositions(mappingA,mappingB,onlyCompareOriginal){var cmp=strcmp(mappingA.source,mappingB.source);if(cmp!==0){return cmp;}cmp=mappingA.originalLine-mappingB.originalLine;if(cmp!==0){return cmp;}cmp=mappingA.originalColumn-mappingB.originalColumn;if(cmp!==0||onlyCompareOriginal){return cmp;}cmp=mappingA.generatedColumn-mappingB.generatedColumn;if(cmp!==0){return cmp;}cmp=mappingA.generatedLine-mappingB.generatedLine;if(cmp!==0){return cmp;}return strcmp(mappingA.name,mappingB.name);}exports.compareByOriginalPositions=compareByOriginalPositions;/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */function compareByGeneratedPositionsDeflated(mappingA,mappingB,onlyCompareGenerated){var cmp=mappingA.generatedLine-mappingB.generatedLine;if(cmp!==0){return cmp;}cmp=mappingA.generatedColumn-mappingB.generatedColumn;if(cmp!==0||onlyCompareGenerated){return cmp;}cmp=strcmp(mappingA.source,mappingB.source);if(cmp!==0){return cmp;}cmp=mappingA.originalLine-mappingB.originalLine;if(cmp!==0){return cmp;}cmp=mappingA.originalColumn-mappingB.originalColumn;if(cmp!==0){return cmp;}return strcmp(mappingA.name,mappingB.name);}exports.compareByGeneratedPositionsDeflated=compareByGeneratedPositionsDeflated;function strcmp(aStr1,aStr2){if(aStr1===aStr2){return 0;}if(aStr1===null){return 1;// aStr2 !== null
}if(aStr2===null){return-1;// aStr1 !== null
}if(aStr1>aStr2){return 1;}return-1;}/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */function compareByGeneratedPositionsInflated(mappingA,mappingB){var cmp=mappingA.generatedLine-mappingB.generatedLine;if(cmp!==0){return cmp;}cmp=mappingA.generatedColumn-mappingB.generatedColumn;if(cmp!==0){return cmp;}cmp=strcmp(mappingA.source,mappingB.source);if(cmp!==0){return cmp;}cmp=mappingA.originalLine-mappingB.originalLine;if(cmp!==0){return cmp;}cmp=mappingA.originalColumn-mappingB.originalColumn;if(cmp!==0){return cmp;}return strcmp(mappingA.name,mappingB.name);}exports.compareByGeneratedPositionsInflated=compareByGeneratedPositionsInflated;/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */function parseSourceMapInput(str){return JSON.parse(str.replace(/^\)]}'[^\n]*\n/,''));}exports.parseSourceMapInput=parseSourceMapInput;/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */function computeSourceURL(sourceRoot,sourceURL,sourceMapURL){sourceURL=sourceURL||'';if(sourceRoot){// This follows what Chrome does.
if(sourceRoot[sourceRoot.length-1]!=='/'&&sourceURL[0]!=='/'){sourceRoot+='/';}// The spec says:
//   Line 4: An optional source root, useful for relocating source
//   files on a server or removing repeated values in the
//   “sources” entry.  This value is prepended to the individual
//   entries in the “source” field.
sourceURL=sourceRoot+sourceURL;}// Historically, SourceMapConsumer did not take the sourceMapURL as
// a parameter.  This mode is still somewhat supported, which is why
// this code block is conditional.  However, it's preferable to pass
// the source map URL to SourceMapConsumer, so that this function
// can implement the source URL resolution algorithm as outlined in
// the spec.  This block is basically the equivalent of:
//    new URL(sourceURL, sourceMapURL).toString()
// ... except it avoids using URL, which wasn't available in the
// older releases of node still supported by this library.
//
// The spec says:
//   If the sources are not absolute URLs after prepending of the
//   “sourceRoot”, the sources are resolved relative to the
//   SourceMap (like resolving script src in a html document).
if(sourceMapURL){var parsed=urlParse(sourceMapURL);if(!parsed){throw new Error("sourceMapURL could not be parsed");}if(parsed.path){// Strip the last path component, but keep the "/".
var index=parsed.path.lastIndexOf('/');if(index>=0){parsed.path=parsed.path.substring(0,index+1);}}sourceURL=join(urlGenerate(parsed),sourceURL);}return normalize(sourceURL);}exports.computeSourceURL=computeSourceURL;},{}],78:[function(require,module,exports){/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */exports.SourceMapGenerator=require('./lib/source-map-generator').SourceMapGenerator;exports.SourceMapConsumer=require('./lib/source-map-consumer').SourceMapConsumer;exports.SourceNode=require('./lib/source-node').SourceNode;},{"./lib/source-map-consumer":74,"./lib/source-map-generator":75,"./lib/source-node":76}],79:[function(require,module,exports){'use strict';var integerRegex=/^\d+$/;function deepUnique(array){return array.sort().filter(function(element,index){return JSON.stringify(element)!==JSON.stringify(array[index-1]);});}exports.parse=function(string){return deepUnique(string.split(',').map(function(part){var result={};part.trim().split(/\s+/).forEach(function(element,index){if(index===0){result.url=element;return;}var value=element.slice(0,element.length-1);var postfix=element[element.length-1];var integerValue=parseInt(value,10);var floatValue=parseFloat(value);if(postfix==='w'&&integerRegex.test(value)){result.width=integerValue;}else if(postfix==='h'&&integerRegex.test(value)){result.height=integerValue;}else if(postfix==='x'&&!Number.isNaN(floatValue)){result.density=floatValue;}else{throw new Error("Invalid srcset descriptor: ".concat(element));}});return result;}));};exports.stringify=function(array){return _toConsumableArray(new Set(array.map(function(element){if(!element.url){throw new Error('URL is required');}var result=[element.url];if(element.width){result.push("".concat(element.width,"w"));}if(element.height){result.push("".concat(element.height,"h"));}if(element.density){result.push("".concat(element.density,"x"));}return result.join(' ');}))).join(', ');};},{}],80:[function(require,module,exports){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';var punycode=require('punycode');var util=require('./util');exports.parse=urlParse;exports.resolve=urlResolve;exports.resolveObject=urlResolveObject;exports.format=urlFormat;exports.Url=Url;function Url(){this.protocol=null;this.slashes=null;this.auth=null;this.host=null;this.port=null;this.hostname=null;this.hash=null;this.search=null;this.query=null;this.pathname=null;this.path=null;this.href=null;}// Reference: RFC 3986, RFC 1808, RFC 2396
// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern=/^([a-z0-9.+-]+:)/i,portPattern=/:[0-9]*$/,// Special case for a simple path URL
simplePathPattern=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,// RFC 2396: characters reserved for delimiting URLs.
// We actually just auto-escape these.
delims=['<','>','"','`',' ','\r','\n','\t'],// RFC 2396: characters not allowed for various reasons.
unwise=['{','}','|','\\','^','`'].concat(delims),// Allowed by RFCs, but cause of XSS attacks.  Always escape these.
autoEscape=['\''].concat(unwise),// Characters that are never ever allowed in a hostname.
// Note that any invalid chars are also handled, but these
// are the ones that are *expected* to be seen, so we fast-path
// them.
nonHostChars=['%','/','?',';','#'].concat(autoEscape),hostEndingChars=['/','?','#'],hostnameMaxLen=255,hostnamePartPattern=/^[+a-z0-9A-Z_-]{0,63}$/,hostnamePartStart=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,// protocols that can allow "unsafe" and "unwise" chars.
unsafeProtocol={'javascript':true,'javascript:':true},// protocols that never have a hostname.
hostlessProtocol={'javascript':true,'javascript:':true},// protocols that always contain a // bit.
slashedProtocol={'http':true,'https':true,'ftp':true,'gopher':true,'file':true,'http:':true,'https:':true,'ftp:':true,'gopher:':true,'file:':true},querystring=require('querystring');function urlParse(url,parseQueryString,slashesDenoteHost){if(url&&util.isObject(url)&&url instanceof Url)return url;var u=new Url();u.parse(url,parseQueryString,slashesDenoteHost);return u;}Url.prototype.parse=function(url,parseQueryString,slashesDenoteHost){if(!util.isString(url)){throw new TypeError("Parameter 'url' must be a string, not "+_typeof(url));}// Copy chrome, IE, opera backslash-handling behavior.
// Back slashes before the query string get converted to forward slashes
// See: https://code.google.com/p/chromium/issues/detail?id=25916
var queryIndex=url.indexOf('?'),splitter=queryIndex!==-1&&queryIndex<url.indexOf('#')?'?':'#',uSplit=url.split(splitter),slashRegex=/\\/g;uSplit[0]=uSplit[0].replace(slashRegex,'/');url=uSplit.join(splitter);var rest=url;// trim before proceeding.
// This is to support parse stuff like "  http://foo.com  \n"
rest=rest.trim();if(!slashesDenoteHost&&url.split('#').length===1){// Try fast path regexp
var simplePath=simplePathPattern.exec(rest);if(simplePath){this.path=rest;this.href=rest;this.pathname=simplePath[1];if(simplePath[2]){this.search=simplePath[2];if(parseQueryString){this.query=querystring.parse(this.search.substr(1));}else{this.query=this.search.substr(1);}}else if(parseQueryString){this.search='';this.query={};}return this;}}var proto=protocolPattern.exec(rest);if(proto){proto=proto[0];var lowerProto=proto.toLowerCase();this.protocol=lowerProto;rest=rest.substr(proto.length);}// figure out if it's got a host
// user@server is *always* interpreted as a hostname, and url
// resolution will treat //foo/bar as host=foo,path=bar because that's
// how the browser resolves relative URLs.
if(slashesDenoteHost||proto||rest.match(/^\/\/[^@\/]+@[^@\/]+/)){var slashes=rest.substr(0,2)==='//';if(slashes&&!(proto&&hostlessProtocol[proto])){rest=rest.substr(2);this.slashes=true;}}if(!hostlessProtocol[proto]&&(slashes||proto&&!slashedProtocol[proto])){// there's a hostname.
// the first instance of /, ?, ;, or # ends the host.
//
// If there is an @ in the hostname, then non-host chars *are* allowed
// to the left of the last @ sign, unless some host-ending character
// comes *before* the @-sign.
// URLs are obnoxious.
//
// ex:
// http://a@b@c/ => user:a@b host:c
// http://a@b?@c => user:a host:c path:/?@c
// v0.12 TODO(isaacs): This is not quite how Chrome does things.
// Review our test case against browsers more comprehensively.
// find the first instance of any hostEndingChars
var hostEnd=-1;for(var i=0;i<hostEndingChars.length;i++){var hec=rest.indexOf(hostEndingChars[i]);if(hec!==-1&&(hostEnd===-1||hec<hostEnd))hostEnd=hec;}// at this point, either we have an explicit point where the
// auth portion cannot go past, or the last @ char is the decider.
var auth,atSign;if(hostEnd===-1){// atSign can be anywhere.
atSign=rest.lastIndexOf('@');}else{// atSign must be in auth portion.
// http://a@b/c@d => host:b auth:a path:/c@d
atSign=rest.lastIndexOf('@',hostEnd);}// Now we have a portion which is definitely the auth.
// Pull that off.
if(atSign!==-1){auth=rest.slice(0,atSign);rest=rest.slice(atSign+1);this.auth=decodeURIComponent(auth);}// the host is the remaining to the left of the first non-host char
hostEnd=-1;for(var i=0;i<nonHostChars.length;i++){var hec=rest.indexOf(nonHostChars[i]);if(hec!==-1&&(hostEnd===-1||hec<hostEnd))hostEnd=hec;}// if we still have not hit it, then the entire thing is a host.
if(hostEnd===-1)hostEnd=rest.length;this.host=rest.slice(0,hostEnd);rest=rest.slice(hostEnd);// pull out port.
this.parseHost();// we've indicated that there is a hostname,
// so even if it's empty, it has to be present.
this.hostname=this.hostname||'';// if hostname begins with [ and ends with ]
// assume that it's an IPv6 address.
var ipv6Hostname=this.hostname[0]==='['&&this.hostname[this.hostname.length-1]===']';// validate a little.
if(!ipv6Hostname){var hostparts=this.hostname.split(/\./);for(var i=0,l=hostparts.length;i<l;i++){var part=hostparts[i];if(!part)continue;if(!part.match(hostnamePartPattern)){var newpart='';for(var j=0,k=part.length;j<k;j++){if(part.charCodeAt(j)>127){// we replace non-ASCII char with a temporary placeholder
// we need this to make sure size of hostname is not
// broken by replacing non-ASCII by nothing
newpart+='x';}else{newpart+=part[j];}}// we test again with ASCII char only
if(!newpart.match(hostnamePartPattern)){var validParts=hostparts.slice(0,i);var notHost=hostparts.slice(i+1);var bit=part.match(hostnamePartStart);if(bit){validParts.push(bit[1]);notHost.unshift(bit[2]);}if(notHost.length){rest='/'+notHost.join('.')+rest;}this.hostname=validParts.join('.');break;}}}}if(this.hostname.length>hostnameMaxLen){this.hostname='';}else{// hostnames are always lower case.
this.hostname=this.hostname.toLowerCase();}if(!ipv6Hostname){// IDNA Support: Returns a punycoded representation of "domain".
// It only converts parts of the domain name that
// have non-ASCII characters, i.e. it doesn't matter if
// you call it with a domain that already is ASCII-only.
this.hostname=punycode.toASCII(this.hostname);}var p=this.port?':'+this.port:'';var h=this.hostname||'';this.host=h+p;this.href+=this.host;// strip [ and ] from the hostname
// the host field still retains them, though
if(ipv6Hostname){this.hostname=this.hostname.substr(1,this.hostname.length-2);if(rest[0]!=='/'){rest='/'+rest;}}}// now rest is set to the post-host stuff.
// chop off any delim chars.
if(!unsafeProtocol[lowerProto]){// First, make 100% sure that any "autoEscape" chars get
// escaped, even if encodeURIComponent doesn't think they
// need to be.
for(var i=0,l=autoEscape.length;i<l;i++){var ae=autoEscape[i];if(rest.indexOf(ae)===-1)continue;var esc=encodeURIComponent(ae);if(esc===ae){esc=escape(ae);}rest=rest.split(ae).join(esc);}}// chop off from the tail first.
var hash=rest.indexOf('#');if(hash!==-1){// got a fragment string.
this.hash=rest.substr(hash);rest=rest.slice(0,hash);}var qm=rest.indexOf('?');if(qm!==-1){this.search=rest.substr(qm);this.query=rest.substr(qm+1);if(parseQueryString){this.query=querystring.parse(this.query);}rest=rest.slice(0,qm);}else if(parseQueryString){// no query string, but parseQueryString still requested
this.search='';this.query={};}if(rest)this.pathname=rest;if(slashedProtocol[lowerProto]&&this.hostname&&!this.pathname){this.pathname='/';}//to support http.request
if(this.pathname||this.search){var p=this.pathname||'';var s=this.search||'';this.path=p+s;}// finally, reconstruct the href based on what has been validated.
this.href=this.format();return this;};// format a parsed object into a url string
function urlFormat(obj){// ensure it's an object, and not a string url.
// If it's an obj, this is a no-op.
// this way, you can call url_format() on strings
// to clean up potentially wonky urls.
if(util.isString(obj))obj=urlParse(obj);if(!(obj instanceof Url))return Url.prototype.format.call(obj);return obj.format();}Url.prototype.format=function(){var auth=this.auth||'';if(auth){auth=encodeURIComponent(auth);auth=auth.replace(/%3A/i,':');auth+='@';}var protocol=this.protocol||'',pathname=this.pathname||'',hash=this.hash||'',host=false,query='';if(this.host){host=auth+this.host;}else if(this.hostname){host=auth+(this.hostname.indexOf(':')===-1?this.hostname:'['+this.hostname+']');if(this.port){host+=':'+this.port;}}if(this.query&&util.isObject(this.query)&&Object.keys(this.query).length){query=querystring.stringify(this.query);}var search=this.search||query&&'?'+query||'';if(protocol&&protocol.substr(-1)!==':')protocol+=':';// only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
// unless they had them to begin with.
if(this.slashes||(!protocol||slashedProtocol[protocol])&&host!==false){host='//'+(host||'');if(pathname&&pathname.charAt(0)!=='/')pathname='/'+pathname;}else if(!host){host='';}if(hash&&hash.charAt(0)!=='#')hash='#'+hash;if(search&&search.charAt(0)!=='?')search='?'+search;pathname=pathname.replace(/[?#]/g,function(match){return encodeURIComponent(match);});search=search.replace('#','%23');return protocol+host+pathname+search+hash;};function urlResolve(source,relative){return urlParse(source,false,true).resolve(relative);}Url.prototype.resolve=function(relative){return this.resolveObject(urlParse(relative,false,true)).format();};function urlResolveObject(source,relative){if(!source)return relative;return urlParse(source,false,true).resolveObject(relative);}Url.prototype.resolveObject=function(relative){if(util.isString(relative)){var rel=new Url();rel.parse(relative,false,true);relative=rel;}var result=new Url();var tkeys=Object.keys(this);for(var tk=0;tk<tkeys.length;tk++){var tkey=tkeys[tk];result[tkey]=this[tkey];}// hash is always overridden, no matter what.
// even href="" will remove it.
result.hash=relative.hash;// if the relative url is empty, then there's nothing left to do here.
if(relative.href===''){result.href=result.format();return result;}// hrefs like //foo/bar always cut to the protocol.
if(relative.slashes&&!relative.protocol){// take everything except the protocol from relative
var rkeys=Object.keys(relative);for(var rk=0;rk<rkeys.length;rk++){var rkey=rkeys[rk];if(rkey!=='protocol')result[rkey]=relative[rkey];}//urlParse appends trailing / to urls like http://www.example.com
if(slashedProtocol[result.protocol]&&result.hostname&&!result.pathname){result.path=result.pathname='/';}result.href=result.format();return result;}if(relative.protocol&&relative.protocol!==result.protocol){// if it's a known url protocol, then changing
// the protocol does weird things
// first, if it's not file:, then we MUST have a host,
// and if there was a path
// to begin with, then we MUST have a path.
// if it is file:, then the host is dropped,
// because that's known to be hostless.
// anything else is assumed to be absolute.
if(!slashedProtocol[relative.protocol]){var keys=Object.keys(relative);for(var v=0;v<keys.length;v++){var k=keys[v];result[k]=relative[k];}result.href=result.format();return result;}result.protocol=relative.protocol;if(!relative.host&&!hostlessProtocol[relative.protocol]){var relPath=(relative.pathname||'').split('/');while(relPath.length&&!(relative.host=relPath.shift())){;}if(!relative.host)relative.host='';if(!relative.hostname)relative.hostname='';if(relPath[0]!=='')relPath.unshift('');if(relPath.length<2)relPath.unshift('');result.pathname=relPath.join('/');}else{result.pathname=relative.pathname;}result.search=relative.search;result.query=relative.query;result.host=relative.host||'';result.auth=relative.auth;result.hostname=relative.hostname||relative.host;result.port=relative.port;// to support http.request
if(result.pathname||result.search){var p=result.pathname||'';var s=result.search||'';result.path=p+s;}result.slashes=result.slashes||relative.slashes;result.href=result.format();return result;}var isSourceAbs=result.pathname&&result.pathname.charAt(0)==='/',isRelAbs=relative.host||relative.pathname&&relative.pathname.charAt(0)==='/',mustEndAbs=isRelAbs||isSourceAbs||result.host&&relative.pathname,removeAllDots=mustEndAbs,srcPath=result.pathname&&result.pathname.split('/')||[],relPath=relative.pathname&&relative.pathname.split('/')||[],psychotic=result.protocol&&!slashedProtocol[result.protocol];// if the url is a non-slashed url, then relative
// links like ../.. should be able
// to crawl up to the hostname, as well.  This is strange.
// result.protocol has already been set by now.
// Later on, put the first path part into the host field.
if(psychotic){result.hostname='';result.port=null;if(result.host){if(srcPath[0]==='')srcPath[0]=result.host;else srcPath.unshift(result.host);}result.host='';if(relative.protocol){relative.hostname=null;relative.port=null;if(relative.host){if(relPath[0]==='')relPath[0]=relative.host;else relPath.unshift(relative.host);}relative.host=null;}mustEndAbs=mustEndAbs&&(relPath[0]===''||srcPath[0]==='');}if(isRelAbs){// it's absolute.
result.host=relative.host||relative.host===''?relative.host:result.host;result.hostname=relative.hostname||relative.hostname===''?relative.hostname:result.hostname;result.search=relative.search;result.query=relative.query;srcPath=relPath;// fall through to the dot-handling below.
}else if(relPath.length){// it's relative
// throw away the existing file, and take the new path instead.
if(!srcPath)srcPath=[];srcPath.pop();srcPath=srcPath.concat(relPath);result.search=relative.search;result.query=relative.query;}else if(!util.isNullOrUndefined(relative.search)){// just pull out the search.
// like href='?foo'.
// Put this after the other two cases because it simplifies the booleans
if(psychotic){result.hostname=result.host=srcPath.shift();//occationaly the auth can get stuck only in host
//this especially happens in cases like
//url.resolveObject('mailto:local1@domain1', 'local2@domain2')
var authInHost=result.host&&result.host.indexOf('@')>0?result.host.split('@'):false;if(authInHost){result.auth=authInHost.shift();result.host=result.hostname=authInHost.shift();}}result.search=relative.search;result.query=relative.query;//to support http.request
if(!util.isNull(result.pathname)||!util.isNull(result.search)){result.path=(result.pathname?result.pathname:'')+(result.search?result.search:'');}result.href=result.format();return result;}if(!srcPath.length){// no path at all.  easy.
// we've already handled the other stuff above.
result.pathname=null;//to support http.request
if(result.search){result.path='/'+result.search;}else{result.path=null;}result.href=result.format();return result;}// if a url ENDs in . or .., then it must get a trailing slash.
// however, if it ends in anything else non-slashy,
// then it must NOT get a trailing slash.
var last=srcPath.slice(-1)[0];var hasTrailingSlash=(result.host||relative.host||srcPath.length>1)&&(last==='.'||last==='..')||last==='';// strip single dots, resolve double dots to parent dir
// if the path tries to go above the root, `up` ends up > 0
var up=0;for(var i=srcPath.length;i>=0;i--){last=srcPath[i];if(last==='.'){srcPath.splice(i,1);}else if(last==='..'){srcPath.splice(i,1);up++;}else if(up){srcPath.splice(i,1);up--;}}// if the path is allowed to go above the root, restore leading ..s
if(!mustEndAbs&&!removeAllDots){for(;up--;up){srcPath.unshift('..');}}if(mustEndAbs&&srcPath[0]!==''&&(!srcPath[0]||srcPath[0].charAt(0)!=='/')){srcPath.unshift('');}if(hasTrailingSlash&&srcPath.join('/').substr(-1)!=='/'){srcPath.push('');}var isAbsolute=srcPath[0]===''||srcPath[0]&&srcPath[0].charAt(0)==='/';// put the host back
if(psychotic){result.hostname=result.host=isAbsolute?'':srcPath.length?srcPath.shift():'';//occationaly the auth can get stuck only in host
//this especially happens in cases like
//url.resolveObject('mailto:local1@domain1', 'local2@domain2')
var authInHost=result.host&&result.host.indexOf('@')>0?result.host.split('@'):false;if(authInHost){result.auth=authInHost.shift();result.host=result.hostname=authInHost.shift();}}mustEndAbs=mustEndAbs||result.host&&srcPath.length;if(mustEndAbs&&!isAbsolute){srcPath.unshift('');}if(!srcPath.length){result.pathname=null;result.path=null;}else{result.pathname=srcPath.join('/');}//to support request.http
if(!util.isNull(result.pathname)||!util.isNull(result.search)){result.path=(result.pathname?result.pathname:'')+(result.search?result.search:'');}result.auth=relative.auth||result.auth;result.slashes=result.slashes||relative.slashes;result.href=result.format();return result;};Url.prototype.parseHost=function(){var host=this.host;var port=portPattern.exec(host);if(port){port=port[0];if(port!==':'){this.port=port.substr(1);}host=host.substr(0,host.length-port.length);}if(host)this.hostname=host;};},{"./util":81,"punycode":64,"querystring":67}],81:[function(require,module,exports){'use strict';module.exports={isString:function isString(arg){return typeof arg==='string';},isObject:function isObject(arg){return _typeof(arg)==='object'&&arg!==null;},isNull:function isNull(arg){return arg===null;},isNullOrUndefined:function isNullOrUndefined(arg){return arg==null;}};},{}],82:[function(require,module,exports){module.exports=extend;var hasOwnProperty=Object.prototype.hasOwnProperty;function extend(){var target={};for(var i=0;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;}},{}],83:[function(require,module,exports){var htmlparser=require('htmlparser2');var extend=require('xtend');var quoteRegexp=require('lodash.escaperegexp');var cloneDeep=require('lodash.clonedeep');var mergeWith=require('lodash.mergewith');var isString=require('lodash.isstring');var isPlainObject=require('lodash.isplainobject');var srcset=require('srcset');var postcss=require('postcss');var url=require('url');function each(obj,cb){if(obj)Object.keys(obj).forEach(function(key){cb(obj[key],key);});}// Avoid false positives with .__proto__, .hasOwnProperty, etc.
function has(obj,key){return{}.hasOwnProperty.call(obj,key);}// Returns those elements of `a` for which `cb(a)` returns truthy
function filter(a,cb){var n=[];each(a,function(v){if(cb(v)){n.push(v);}});return n;}function isEmptyObject(obj){for(var key in obj){if(has(obj,key)){return false;}}return true;}module.exports=sanitizeHtml;// A valid attribute name.
// We use a tolerant definition based on the set of strings defined by
// html.spec.whatwg.org/multipage/parsing.html#before-attribute-name-state
// and html.spec.whatwg.org/multipage/parsing.html#attribute-name-state .
// The characters accepted are ones which can be appended to the attribute
// name buffer without triggering a parse error:
//   * unexpected-equals-sign-before-attribute-name
//   * unexpected-null-character
//   * unexpected-character-in-attribute-name
// We exclude the empty string because it's impossible to get to the after
// attribute name state with an empty attribute name buffer.
var VALID_HTML_ATTRIBUTE_NAME=/^[^\0\t\n\f\r /<=>]+$/;// Ignore the _recursing flag; it's there for recursive
// invocation as a guard against this exploit:
// https://github.com/fb55/htmlparser2/issues/105
function sanitizeHtml(html,options,_recursing){var result='';// Used for hot swapping the result variable with an empty string in order to "capture" the text written to it.
var tempResult='';function Frame(tag,attribs){var that=this;this.tag=tag;this.attribs=attribs||{};this.tagPosition=result.length;this.text='';// Node inner text
this.updateParentNodeText=function(){if(stack.length){var parentFrame=stack[stack.length-1];parentFrame.text+=that.text;}};}if(!options){options=sanitizeHtml.defaults;options.parser=htmlParserDefaults;}else{options=extend(sanitizeHtml.defaults,options);if(options.parser){options.parser=extend(htmlParserDefaults,options.parser);}else{options.parser=htmlParserDefaults;}}// Tags that contain something other than HTML, or where discarding
// the text when the tag is disallowed makes sense for other reasons.
// If we are not allowing these tags, we should drop their content too.
// For other tags you would drop the tag but keep its content.
var nonTextTagsArray=options.nonTextTags||['script','style','textarea'];var allowedAttributesMap;var allowedAttributesGlobMap;if(options.allowedAttributes){allowedAttributesMap={};allowedAttributesGlobMap={};each(options.allowedAttributes,function(attributes,tag){allowedAttributesMap[tag]=[];var globRegex=[];attributes.forEach(function(obj){if(isString(obj)&&obj.indexOf('*')>=0){globRegex.push(quoteRegexp(obj).replace(/\\\*/g,'.*'));}else{allowedAttributesMap[tag].push(obj);}});allowedAttributesGlobMap[tag]=new RegExp('^('+globRegex.join('|')+')$');});}var allowedClassesMap={};each(options.allowedClasses,function(classes,tag){// Implicitly allows the class attribute
if(allowedAttributesMap){if(!has(allowedAttributesMap,tag)){allowedAttributesMap[tag]=[];}allowedAttributesMap[tag].push('class');}allowedClassesMap[tag]=classes;});var transformTagsMap={};var transformTagsAll;each(options.transformTags,function(transform,tag){var transFun;if(typeof transform==='function'){transFun=transform;}else if(typeof transform==="string"){transFun=sanitizeHtml.simpleTransform(transform);}if(tag==='*'){transformTagsAll=transFun;}else{transformTagsMap[tag]=transFun;}});var depth=0;var stack=[];var skipMap={};var transformMap={};var skipText=false;var skipTextDepth=0;var parser=new htmlparser.Parser({onopentag:function onopentag(name,attribs){if(skipText){skipTextDepth++;return;}var frame=new Frame(name,attribs);stack.push(frame);var skip=false;var hasText=frame.text?true:false;var transformedTag;if(has(transformTagsMap,name)){transformedTag=transformTagsMap[name](name,attribs);frame.attribs=attribs=transformedTag.attribs;if(transformedTag.text!==undefined){frame.innerText=transformedTag.text;}if(name!==transformedTag.tagName){frame.name=name=transformedTag.tagName;transformMap[depth]=transformedTag.tagName;}}if(transformTagsAll){transformedTag=transformTagsAll(name,attribs);frame.attribs=attribs=transformedTag.attribs;if(name!==transformedTag.tagName){frame.name=name=transformedTag.tagName;transformMap[depth]=transformedTag.tagName;}}if(options.allowedTags&&options.allowedTags.indexOf(name)===-1||options.disallowedTagsMode==='recursiveEscape'&&!isEmptyObject(skipMap)){skip=true;skipMap[depth]=true;if(options.disallowedTagsMode==='discard'){if(nonTextTagsArray.indexOf(name)!==-1){skipText=true;skipTextDepth=1;}}skipMap[depth]=true;}depth++;if(skip){if(options.disallowedTagsMode==='discard'){// We want the contents but not this tag
return;}tempResult=result;result='';}result+='<'+name;if(!allowedAttributesMap||has(allowedAttributesMap,name)||allowedAttributesMap['*']){each(attribs,function(value,a){if(!VALID_HTML_ATTRIBUTE_NAME.test(a)){// This prevents part of an attribute name in the output from being
// interpreted as the end of an attribute, or end of a tag.
delete frame.attribs[a];return;}var parsed;// check allowedAttributesMap for the element and attribute and modify the value
// as necessary if there are specific values defined.
var passedAllowedAttributesMapCheck=false;if(!allowedAttributesMap||has(allowedAttributesMap,name)&&allowedAttributesMap[name].indexOf(a)!==-1||allowedAttributesMap['*']&&allowedAttributesMap['*'].indexOf(a)!==-1||has(allowedAttributesGlobMap,name)&&allowedAttributesGlobMap[name].test(a)||allowedAttributesGlobMap['*']&&allowedAttributesGlobMap['*'].test(a)){passedAllowedAttributesMapCheck=true;}else if(allowedAttributesMap&&allowedAttributesMap[name]){var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator10=allowedAttributesMap[name][Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator10.next()).done);_iteratorNormalCompletion=true){var o=_step.value;if(isPlainObject(o)&&o.name&&o.name===a){passedAllowedAttributesMapCheck=true;var newValue='';if(o.multiple===true){// verify the values that are allowed
var splitStrArray=value.split(' ');var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator11=splitStrArray[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator11.next()).done);_iteratorNormalCompletion2=true){var s=_step2.value;if(o.values.indexOf(s)!==-1){if(newValue===''){newValue=s;}else{newValue+=' '+s;}}}}catch(err){_didIteratorError2=true;_iteratorError2=err;}finally{try{if(!_iteratorNormalCompletion2&&_iterator11["return"]!=null){_iterator11["return"]();}}finally{if(_didIteratorError2){throw _iteratorError2;}}}}else if(o.values.indexOf(value)>=0){// verified an allowed value matches the entire attribute value
newValue=value;}value=newValue;}}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator10["return"]!=null){_iterator10["return"]();}}finally{if(_didIteratorError){throw _iteratorError;}}}}if(passedAllowedAttributesMapCheck){if(options.allowedSchemesAppliedToAttributes.indexOf(a)!==-1){if(naughtyHref(name,value)){delete frame.attribs[a];return;}}if(name==='iframe'&&a==='src'){var allowed=true;try{// naughtyHref is in charge of whether protocol relative URLs
// are cool. We should just accept them
parsed=url.parse(value,false,true);var isRelativeUrl=parsed&&parsed.host===null&&parsed.protocol===null;if(isRelativeUrl){// default value of allowIframeRelativeUrls is true unless allowIframeHostnames specified
allowed=has(options,"allowIframeRelativeUrls")?options.allowIframeRelativeUrls:!options.allowedIframeHostnames;}else if(options.allowedIframeHostnames){allowed=options.allowedIframeHostnames.find(function(hostname){return hostname===parsed.hostname;});}}catch(e){// Unparseable iframe src
allowed=false;}if(!allowed){delete frame.attribs[a];return;}}if(a==='srcset'){try{parsed=srcset.parse(value);each(parsed,function(value){if(naughtyHref('srcset',value.url)){value.evil=true;}});parsed=filter(parsed,function(v){return!v.evil;});if(!parsed.length){delete frame.attribs[a];return;}else{value=srcset.stringify(filter(parsed,function(v){return!v.evil;}));frame.attribs[a]=value;}}catch(e){// Unparseable srcset
delete frame.attribs[a];return;}}if(a==='class'){value=filterClasses(value,allowedClassesMap[name]);if(!value.length){delete frame.attribs[a];return;}}if(a==='style'){try{var abstractSyntaxTree=postcss.parse(name+" {"+value+"}");var filteredAST=filterCss(abstractSyntaxTree,options.allowedStyles);value=stringifyStyleAttributes(filteredAST);if(value.length===0){delete frame.attribs[a];return;}}catch(e){delete frame.attribs[a];return;}}result+=' '+a;if(value&&value.length){result+='="'+escapeHtml(value,true)+'"';}}else{delete frame.attribs[a];}});}if(options.selfClosing.indexOf(name)!==-1){result+=" />";}else{result+=">";if(frame.innerText&&!hasText&&!options.textFilter){result+=frame.innerText;}}if(skip){result=tempResult+escapeHtml(result);tempResult='';}},ontext:function ontext(text){if(skipText){return;}var lastFrame=stack[stack.length-1];var tag;if(lastFrame){tag=lastFrame.tag;// If inner text was set by transform function then let's use it
text=lastFrame.innerText!==undefined?lastFrame.innerText:text;}if(options.disallowedTagsMode==='discard'&&(tag==='script'||tag==='style')){// htmlparser2 gives us these as-is. Escaping them ruins the content. Allowing
// script tags is, by definition, game over for XSS protection, so if that's
// your concern, don't allow them. The same is essentially true for style tags
// which have their own collection of XSS vectors.
result+=text;}else{var escaped=escapeHtml(text,false);if(options.textFilter){result+=options.textFilter(escaped);}else{result+=escaped;}}if(stack.length){var frame=stack[stack.length-1];frame.text+=text;}},onclosetag:function onclosetag(name){if(skipText){skipTextDepth--;if(!skipTextDepth){skipText=false;}else{return;}}var frame=stack.pop();if(!frame){// Do not crash on bad markup
return;}skipText=false;depth--;var skip=skipMap[depth];if(skip){delete skipMap[depth];if(options.disallowedTagsMode==='discard'){frame.updateParentNodeText();return;}tempResult=result;result='';}if(transformMap[depth]){name=transformMap[depth];delete transformMap[depth];}if(options.exclusiveFilter&&options.exclusiveFilter(frame)){result=result.substr(0,frame.tagPosition);return;}frame.updateParentNodeText();if(options.selfClosing.indexOf(name)!==-1){// Already output />
return;}result+="</"+name+">";if(skip){result=tempResult+escapeHtml(result);tempResult='';}}},options.parser);parser.write(html);parser.end();return result;function escapeHtml(s,quote){if(typeof s!=='string'){s=s+'';}if(options.parser.decodeEntities){s=s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/\>/g,'&gt;');if(quote){s=s.replace(/\"/g,'&quot;');}}// TODO: this is inadequate because it will pass `&0;`. This approach
// will not work, each & must be considered with regard to whether it
// is followed by a 100% syntactically valid entity or not, and escaped
// if it is not. If this bothers you, don't set parser.decodeEntities
// to false. (The default is true.)
s=s.replace(/&(?![a-zA-Z0-9#]{1,20};)/g,'&amp;')// Match ampersands not part of existing HTML entity
.replace(/</g,'&lt;').replace(/\>/g,'&gt;');if(quote){s=s.replace(/\"/g,'&quot;');}return s;}function naughtyHref(name,href){// Browsers ignore character codes of 32 (space) and below in a surprising
// number of situations. Start reading here:
// https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet#Embedded_tab
href=href.replace(/[\x00-\x20]+/g,'');// Clobber any comments in URLs, which the browser might
// interpret inside an XML data island, allowing
// a javascript: URL to be snuck through
href=href.replace(/<\!\-\-.*?\-\-\>/g,'');// Case insensitive so we don't get faked out by JAVASCRIPT #1
var matches=href.match(/^([a-zA-Z]+)\:/);if(!matches){// Protocol-relative URL starting with any combination of '/' and '\'
if(href.match(/^[\/\\]{2}/)){return!options.allowProtocolRelative;}// No scheme
return false;}var scheme=matches[1].toLowerCase();if(has(options.allowedSchemesByTag,name)){return options.allowedSchemesByTag[name].indexOf(scheme)===-1;}return!options.allowedSchemes||options.allowedSchemes.indexOf(scheme)===-1;}/**
   * Filters user input css properties by whitelisted regex attributes.
   *
   * @param {object} abstractSyntaxTree  - Object representation of CSS attributes.
   * @property {array[Declaration]} abstractSyntaxTree.nodes[0] - Each object cointains prop and value key, i.e { prop: 'color', value: 'red' }.
   * @param {object} allowedStyles       - Keys are properties (i.e color), value is list of permitted regex rules (i.e /green/i).
   * @return {object}                    - Abstract Syntax Tree with filtered style attributes.
   */function filterCss(abstractSyntaxTree,allowedStyles){if(!allowedStyles){return abstractSyntaxTree;}var filteredAST=cloneDeep(abstractSyntaxTree);var astRules=abstractSyntaxTree.nodes[0];var selectedRule;// Merge global and tag-specific styles into new AST.
if(allowedStyles[astRules.selector]&&allowedStyles['*']){selectedRule=mergeWith(cloneDeep(allowedStyles[astRules.selector]),allowedStyles['*'],function(objValue,srcValue){if(Array.isArray(objValue)){return objValue.concat(srcValue);}});}else{selectedRule=allowedStyles[astRules.selector]||allowedStyles['*'];}if(selectedRule){filteredAST.nodes[0].nodes=astRules.nodes.reduce(filterDeclarations(selectedRule),[]);}return filteredAST;}/**
   * Extracts the style attribues from an AbstractSyntaxTree and formats those
   * values in the inline style attribute format.
   *
   * @param  {AbstractSyntaxTree} filteredAST
   * @return {string}             - Example: "color:yellow;text-align:center;font-family:helvetica;"
   */function stringifyStyleAttributes(filteredAST){return filteredAST.nodes[0].nodes.reduce(function(extractedAttributes,attributeObject){extractedAttributes.push(attributeObject.prop+':'+attributeObject.value);return extractedAttributes;},[]).join(';');}/**
    * Filters the existing attributes for the given property. Discards any attributes
    * which don't match the whitelist.
    *
    * @param  {object} selectedRule             - Example: { color: red, font-family: helvetica }
    * @param  {array} allowedDeclarationsList   - List of declarations which pass whitelisting.
    * @param  {object} attributeObject          - Object representing the current css property.
    * @property {string} attributeObject.type   - Typically 'declaration'.
    * @property {string} attributeObject.prop   - The CSS property, i.e 'color'.
    * @property {string} attributeObject.value  - The corresponding value to the css property, i.e 'red'.
    * @return {function}                        - When used in Array.reduce, will return an array of Declaration objects
    */function filterDeclarations(selectedRule){return function(allowedDeclarationsList,attributeObject){// If this property is whitelisted...
if(selectedRule.hasOwnProperty(attributeObject.prop)){var matchesRegex=selectedRule[attributeObject.prop].some(function(regularExpression){return regularExpression.test(attributeObject.value);});if(matchesRegex){allowedDeclarationsList.push(attributeObject);}}return allowedDeclarationsList;};}function filterClasses(classes,allowed){if(!allowed){// The class attribute is allowed without filtering on this tag
return classes;}classes=classes.split(/\s+/);return classes.filter(function(clss){return allowed.indexOf(clss)!==-1;}).join(' ');}}// Defaults are accessible to you so that you can use them as a starting point
// programmatically if you wish
var htmlParserDefaults={decodeEntities:true};sanitizeHtml.defaults={allowedTags:['h3','h4','h5','h6','blockquote','p','a','ul','ol','nl','li','b','i','strong','em','strike','code','hr','br','div','table','thead','caption','tbody','tr','th','td','pre','iframe'],disallowedTagsMode:'discard',allowedAttributes:{a:['href','name','target'],// We don't currently allow img itself by default, but this
// would make sense if we did. You could add srcset here,
// and if you do the URL is checked for safety
img:['src']},// Lots of these won't come up by default because we don't allow them
selfClosing:['img','br','hr','area','base','basefont','input','link','meta'],// URL schemes we permit
allowedSchemes:['http','https','ftp','mailto'],allowedSchemesByTag:{},allowedSchemesAppliedToAttributes:['href','src','cite'],allowProtocolRelative:true};sanitizeHtml.simpleTransform=function(newTagName,newAttribs,merge){merge=merge===undefined?true:merge;newAttribs=newAttribs||{};return function(tagName,attribs){var attrib;if(merge){for(attrib in newAttribs){attribs[attrib]=newAttribs[attrib];}}else{attribs=newAttribs;}return{tagName:newTagName,attribs:attribs};};};},{"htmlparser2":31,"lodash.clonedeep":33,"lodash.escaperegexp":34,"lodash.isplainobject":35,"lodash.isstring":36,"lodash.mergewith":37,"postcss":51,"srcset":79,"url":80,"xtend":82}]},{},[83])(83);});


/***/ }),

/***/ "../node_modules/showdown/dist/showdown.js":
/*!*************************************************!*\
  !*** ../node_modules/showdown/dist/showdown.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;/*! showdown v 1.9.1 - 02-11-2019 */
(function(){
/**
 * Created by Tivie on 13-07-2015.
 */

function getDefaultOpts (simple) {
  'use strict';

  var defaultOptions = {
    omitExtraWLInCodeBlocks: {
      defaultValue: false,
      describe: 'Omit the default extra whiteline added to code blocks',
      type: 'boolean'
    },
    noHeaderId: {
      defaultValue: false,
      describe: 'Turn on/off generated header id',
      type: 'boolean'
    },
    prefixHeaderId: {
      defaultValue: false,
      describe: 'Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic \'section-\' prefix',
      type: 'string'
    },
    rawPrefixHeaderId: {
      defaultValue: false,
      describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
      type: 'boolean'
    },
    ghCompatibleHeaderId: {
      defaultValue: false,
      describe: 'Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)',
      type: 'boolean'
    },
    rawHeaderId: {
      defaultValue: false,
      describe: 'Remove only spaces, \' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids',
      type: 'boolean'
    },
    headerLevelStart: {
      defaultValue: false,
      describe: 'The header blocks level start',
      type: 'integer'
    },
    parseImgDimensions: {
      defaultValue: false,
      describe: 'Turn on/off image dimension parsing',
      type: 'boolean'
    },
    simplifiedAutoLink: {
      defaultValue: false,
      describe: 'Turn on/off GFM autolink style',
      type: 'boolean'
    },
    excludeTrailingPunctuationFromURLs: {
      defaultValue: false,
      describe: 'Excludes trailing punctuation from links generated with autoLinking',
      type: 'boolean'
    },
    literalMidWordUnderscores: {
      defaultValue: false,
      describe: 'Parse midword underscores as literal underscores',
      type: 'boolean'
    },
    literalMidWordAsterisks: {
      defaultValue: false,
      describe: 'Parse midword asterisks as literal asterisks',
      type: 'boolean'
    },
    strikethrough: {
      defaultValue: false,
      describe: 'Turn on/off strikethrough support',
      type: 'boolean'
    },
    tables: {
      defaultValue: false,
      describe: 'Turn on/off tables support',
      type: 'boolean'
    },
    tablesHeaderId: {
      defaultValue: false,
      describe: 'Add an id to table headers',
      type: 'boolean'
    },
    ghCodeBlocks: {
      defaultValue: true,
      describe: 'Turn on/off GFM fenced code blocks support',
      type: 'boolean'
    },
    tasklists: {
      defaultValue: false,
      describe: 'Turn on/off GFM tasklist support',
      type: 'boolean'
    },
    smoothLivePreview: {
      defaultValue: false,
      describe: 'Prevents weird effects in live previews due to incomplete input',
      type: 'boolean'
    },
    smartIndentationFix: {
      defaultValue: false,
      description: 'Tries to smartly fix indentation in es6 strings',
      type: 'boolean'
    },
    disableForced4SpacesIndentedSublists: {
      defaultValue: false,
      description: 'Disables the requirement of indenting nested sublists by 4 spaces',
      type: 'boolean'
    },
    simpleLineBreaks: {
      defaultValue: false,
      description: 'Parses simple line breaks as <br> (GFM Style)',
      type: 'boolean'
    },
    requireSpaceBeforeHeadingText: {
      defaultValue: false,
      description: 'Makes adding a space between `#` and the header text mandatory (GFM Style)',
      type: 'boolean'
    },
    ghMentions: {
      defaultValue: false,
      description: 'Enables github @mentions',
      type: 'boolean'
    },
    ghMentionsLink: {
      defaultValue: 'https://github.com/{u}',
      description: 'Changes the link generated by @mentions. Only applies if ghMentions option is enabled.',
      type: 'string'
    },
    encodeEmails: {
      defaultValue: true,
      description: 'Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities',
      type: 'boolean'
    },
    openLinksInNewWindow: {
      defaultValue: false,
      description: 'Open all links in new windows',
      type: 'boolean'
    },
    backslashEscapesHTMLTags: {
      defaultValue: false,
      description: 'Support for HTML Tag escaping. ex: \<div>foo\</div>',
      type: 'boolean'
    },
    emoji: {
      defaultValue: false,
      description: 'Enable emoji support. Ex: `this is a :smile: emoji`',
      type: 'boolean'
    },
    underline: {
      defaultValue: false,
      description: 'Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`',
      type: 'boolean'
    },
    completeHTMLDocument: {
      defaultValue: false,
      description: 'Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags',
      type: 'boolean'
    },
    metadata: {
      defaultValue: false,
      description: 'Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).',
      type: 'boolean'
    },
    splitAdjacentBlockquotes: {
      defaultValue: false,
      description: 'Split adjacent blockquote blocks',
      type: 'boolean'
    }
  };
  if (simple === false) {
    return JSON.parse(JSON.stringify(defaultOptions));
  }
  var ret = {};
  for (var opt in defaultOptions) {
    if (defaultOptions.hasOwnProperty(opt)) {
      ret[opt] = defaultOptions[opt].defaultValue;
    }
  }
  return ret;
}

function allOptionsOn () {
  'use strict';
  var options = getDefaultOpts(true),
      ret = {};
  for (var opt in options) {
    if (options.hasOwnProperty(opt)) {
      ret[opt] = true;
    }
  }
  return ret;
}

/**
 * Created by Tivie on 06-01-2015.
 */

// Private properties
var showdown = {},
    parsers = {},
    extensions = {},
    globalOptions = getDefaultOpts(true),
    setFlavor = 'vanilla',
    flavor = {
      github: {
        omitExtraWLInCodeBlocks:              true,
        simplifiedAutoLink:                   true,
        excludeTrailingPunctuationFromURLs:   true,
        literalMidWordUnderscores:            true,
        strikethrough:                        true,
        tables:                               true,
        tablesHeaderId:                       true,
        ghCodeBlocks:                         true,
        tasklists:                            true,
        disableForced4SpacesIndentedSublists: true,
        simpleLineBreaks:                     true,
        requireSpaceBeforeHeadingText:        true,
        ghCompatibleHeaderId:                 true,
        ghMentions:                           true,
        backslashEscapesHTMLTags:             true,
        emoji:                                true,
        splitAdjacentBlockquotes:             true
      },
      original: {
        noHeaderId:                           true,
        ghCodeBlocks:                         false
      },
      ghost: {
        omitExtraWLInCodeBlocks:              true,
        parseImgDimensions:                   true,
        simplifiedAutoLink:                   true,
        excludeTrailingPunctuationFromURLs:   true,
        literalMidWordUnderscores:            true,
        strikethrough:                        true,
        tables:                               true,
        tablesHeaderId:                       true,
        ghCodeBlocks:                         true,
        tasklists:                            true,
        smoothLivePreview:                    true,
        simpleLineBreaks:                     true,
        requireSpaceBeforeHeadingText:        true,
        ghMentions:                           false,
        encodeEmails:                         true
      },
      vanilla: getDefaultOpts(true),
      allOn: allOptionsOn()
    };

/**
 * helper namespace
 * @type {{}}
 */
showdown.helper = {};

/**
 * TODO LEGACY SUPPORT CODE
 * @type {{}}
 */
showdown.extensions = {};

/**
 * Set a global option
 * @static
 * @param {string} key
 * @param {*} value
 * @returns {showdown}
 */
showdown.setOption = function (key, value) {
  'use strict';
  globalOptions[key] = value;
  return this;
};

/**
 * Get a global option
 * @static
 * @param {string} key
 * @returns {*}
 */
showdown.getOption = function (key) {
  'use strict';
  return globalOptions[key];
};

/**
 * Get the global options
 * @static
 * @returns {{}}
 */
showdown.getOptions = function () {
  'use strict';
  return globalOptions;
};

/**
 * Reset global options to the default values
 * @static
 */
showdown.resetOptions = function () {
  'use strict';
  globalOptions = getDefaultOpts(true);
};

/**
 * Set the flavor showdown should use as default
 * @param {string} name
 */
showdown.setFlavor = function (name) {
  'use strict';
  if (!flavor.hasOwnProperty(name)) {
    throw Error(name + ' flavor was not found');
  }
  showdown.resetOptions();
  var preset = flavor[name];
  setFlavor = name;
  for (var option in preset) {
    if (preset.hasOwnProperty(option)) {
      globalOptions[option] = preset[option];
    }
  }
};

/**
 * Get the currently set flavor
 * @returns {string}
 */
showdown.getFlavor = function () {
  'use strict';
  return setFlavor;
};

/**
 * Get the options of a specified flavor. Returns undefined if the flavor was not found
 * @param {string} name Name of the flavor
 * @returns {{}|undefined}
 */
showdown.getFlavorOptions = function (name) {
  'use strict';
  if (flavor.hasOwnProperty(name)) {
    return flavor[name];
  }
};

/**
 * Get the default options
 * @static
 * @param {boolean} [simple=true]
 * @returns {{}}
 */
showdown.getDefaultOptions = function (simple) {
  'use strict';
  return getDefaultOpts(simple);
};

/**
 * Get or set a subParser
 *
 * subParser(name)       - Get a registered subParser
 * subParser(name, func) - Register a subParser
 * @static
 * @param {string} name
 * @param {function} [func]
 * @returns {*}
 */
showdown.subParser = function (name, func) {
  'use strict';
  if (showdown.helper.isString(name)) {
    if (typeof func !== 'undefined') {
      parsers[name] = func;
    } else {
      if (parsers.hasOwnProperty(name)) {
        return parsers[name];
      } else {
        throw Error('SubParser named ' + name + ' not registered!');
      }
    }
  }
};

/**
 * Gets or registers an extension
 * @static
 * @param {string} name
 * @param {object|function=} ext
 * @returns {*}
 */
showdown.extension = function (name, ext) {
  'use strict';

  if (!showdown.helper.isString(name)) {
    throw Error('Extension \'name\' must be a string');
  }

  name = showdown.helper.stdExtName(name);

  // Getter
  if (showdown.helper.isUndefined(ext)) {
    if (!extensions.hasOwnProperty(name)) {
      throw Error('Extension named ' + name + ' is not registered!');
    }
    return extensions[name];

    // Setter
  } else {
    // Expand extension if it's wrapped in a function
    if (typeof ext === 'function') {
      ext = ext();
    }

    // Ensure extension is an array
    if (!showdown.helper.isArray(ext)) {
      ext = [ext];
    }

    var validExtension = validate(ext, name);

    if (validExtension.valid) {
      extensions[name] = ext;
    } else {
      throw Error(validExtension.error);
    }
  }
};

/**
 * Gets all extensions registered
 * @returns {{}}
 */
showdown.getAllExtensions = function () {
  'use strict';
  return extensions;
};

/**
 * Remove an extension
 * @param {string} name
 */
showdown.removeExtension = function (name) {
  'use strict';
  delete extensions[name];
};

/**
 * Removes all extensions
 */
showdown.resetExtensions = function () {
  'use strict';
  extensions = {};
};

/**
 * Validate extension
 * @param {array} extension
 * @param {string} name
 * @returns {{valid: boolean, error: string}}
 */
function validate (extension, name) {
  'use strict';

  var errMsg = (name) ? 'Error in ' + name + ' extension->' : 'Error in unnamed extension',
      ret = {
        valid: true,
        error: ''
      };

  if (!showdown.helper.isArray(extension)) {
    extension = [extension];
  }

  for (var i = 0; i < extension.length; ++i) {
    var baseMsg = errMsg + ' sub-extension ' + i + ': ',
        ext = extension[i];
    if (typeof ext !== 'object') {
      ret.valid = false;
      ret.error = baseMsg + 'must be an object, but ' + typeof ext + ' given';
      return ret;
    }

    if (!showdown.helper.isString(ext.type)) {
      ret.valid = false;
      ret.error = baseMsg + 'property "type" must be a string, but ' + typeof ext.type + ' given';
      return ret;
    }

    var type = ext.type = ext.type.toLowerCase();

    // normalize extension type
    if (type === 'language') {
      type = ext.type = 'lang';
    }

    if (type === 'html') {
      type = ext.type = 'output';
    }

    if (type !== 'lang' && type !== 'output' && type !== 'listener') {
      ret.valid = false;
      ret.error = baseMsg + 'type ' + type + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"';
      return ret;
    }

    if (type === 'listener') {
      if (showdown.helper.isUndefined(ext.listeners)) {
        ret.valid = false;
        ret.error = baseMsg + '. Extensions of type "listener" must have a property called "listeners"';
        return ret;
      }
    } else {
      if (showdown.helper.isUndefined(ext.filter) && showdown.helper.isUndefined(ext.regex)) {
        ret.valid = false;
        ret.error = baseMsg + type + ' extensions must define either a "regex" property or a "filter" method';
        return ret;
      }
    }

    if (ext.listeners) {
      if (typeof ext.listeners !== 'object') {
        ret.valid = false;
        ret.error = baseMsg + '"listeners" property must be an object but ' + typeof ext.listeners + ' given';
        return ret;
      }
      for (var ln in ext.listeners) {
        if (ext.listeners.hasOwnProperty(ln)) {
          if (typeof ext.listeners[ln] !== 'function') {
            ret.valid = false;
            ret.error = baseMsg + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + ln +
              ' must be a function but ' + typeof ext.listeners[ln] + ' given';
            return ret;
          }
        }
      }
    }

    if (ext.filter) {
      if (typeof ext.filter !== 'function') {
        ret.valid = false;
        ret.error = baseMsg + '"filter" must be a function, but ' + typeof ext.filter + ' given';
        return ret;
      }
    } else if (ext.regex) {
      if (showdown.helper.isString(ext.regex)) {
        ext.regex = new RegExp(ext.regex, 'g');
      }
      if (!(ext.regex instanceof RegExp)) {
        ret.valid = false;
        ret.error = baseMsg + '"regex" property must either be a string or a RegExp object, but ' + typeof ext.regex + ' given';
        return ret;
      }
      if (showdown.helper.isUndefined(ext.replace)) {
        ret.valid = false;
        ret.error = baseMsg + '"regex" extensions must implement a replace string or function';
        return ret;
      }
    }
  }
  return ret;
}

/**
 * Validate extension
 * @param {object} ext
 * @returns {boolean}
 */
showdown.validateExtension = function (ext) {
  'use strict';

  var validateExtension = validate(ext, null);
  if (!validateExtension.valid) {
    console.warn(validateExtension.error);
    return false;
  }
  return true;
};

/**
 * showdownjs helper functions
 */

if (!showdown.hasOwnProperty('helper')) {
  showdown.helper = {};
}

/**
 * Check if var is string
 * @static
 * @param {string} a
 * @returns {boolean}
 */
showdown.helper.isString = function (a) {
  'use strict';
  return (typeof a === 'string' || a instanceof String);
};

/**
 * Check if var is a function
 * @static
 * @param {*} a
 * @returns {boolean}
 */
showdown.helper.isFunction = function (a) {
  'use strict';
  var getType = {};
  return a && getType.toString.call(a) === '[object Function]';
};

/**
 * isArray helper function
 * @static
 * @param {*} a
 * @returns {boolean}
 */
showdown.helper.isArray = function (a) {
  'use strict';
  return Array.isArray(a);
};

/**
 * Check if value is undefined
 * @static
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 */
showdown.helper.isUndefined = function (value) {
  'use strict';
  return typeof value === 'undefined';
};

/**
 * ForEach helper function
 * Iterates over Arrays and Objects (own properties only)
 * @static
 * @param {*} obj
 * @param {function} callback Accepts 3 params: 1. value, 2. key, 3. the original array/object
 */
showdown.helper.forEach = function (obj, callback) {
  'use strict';
  // check if obj is defined
  if (showdown.helper.isUndefined(obj)) {
    throw new Error('obj param is required');
  }

  if (showdown.helper.isUndefined(callback)) {
    throw new Error('callback param is required');
  }

  if (!showdown.helper.isFunction(callback)) {
    throw new Error('callback param must be a function/closure');
  }

  if (typeof obj.forEach === 'function') {
    obj.forEach(callback);
  } else if (showdown.helper.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      callback(obj[i], i, obj);
    }
  } else if (typeof (obj) === 'object') {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        callback(obj[prop], prop, obj);
      }
    }
  } else {
    throw new Error('obj does not seem to be an array or an iterable object');
  }
};

/**
 * Standardidize extension name
 * @static
 * @param {string} s extension name
 * @returns {string}
 */
showdown.helper.stdExtName = function (s) {
  'use strict';
  return s.replace(/[_?*+\/\\.^-]/g, '').replace(/\s/g, '').toLowerCase();
};

function escapeCharactersCallback (wholeMatch, m1) {
  'use strict';
  var charCodeToEscape = m1.charCodeAt(0);
  return '¨E' + charCodeToEscape + 'E';
}

/**
 * Callback used to escape characters when passing through String.replace
 * @static
 * @param {string} wholeMatch
 * @param {string} m1
 * @returns {string}
 */
showdown.helper.escapeCharactersCallback = escapeCharactersCallback;

/**
 * Escape characters in a string
 * @static
 * @param {string} text
 * @param {string} charsToEscape
 * @param {boolean} afterBackslash
 * @returns {XML|string|void|*}
 */
showdown.helper.escapeCharacters = function (text, charsToEscape, afterBackslash) {
  'use strict';
  // First we have to escape the escape characters so that
  // we can build a character class out of them
  var regexString = '([' + charsToEscape.replace(/([\[\]\\])/g, '\\$1') + '])';

  if (afterBackslash) {
    regexString = '\\\\' + regexString;
  }

  var regex = new RegExp(regexString, 'g');
  text = text.replace(regex, escapeCharactersCallback);

  return text;
};

/**
 * Unescape HTML entities
 * @param txt
 * @returns {string}
 */
showdown.helper.unescapeHTMLEntities = function (txt) {
  'use strict';

  return txt
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
};

var rgxFindMatchPos = function (str, left, right, flags) {
  'use strict';
  var f = flags || '',
      g = f.indexOf('g') > -1,
      x = new RegExp(left + '|' + right, 'g' + f.replace(/g/g, '')),
      l = new RegExp(left, f.replace(/g/g, '')),
      pos = [],
      t, s, m, start, end;

  do {
    t = 0;
    while ((m = x.exec(str))) {
      if (l.test(m[0])) {
        if (!(t++)) {
          s = x.lastIndex;
          start = s - m[0].length;
        }
      } else if (t) {
        if (!--t) {
          end = m.index + m[0].length;
          var obj = {
            left: {start: start, end: s},
            match: {start: s, end: m.index},
            right: {start: m.index, end: end},
            wholeMatch: {start: start, end: end}
          };
          pos.push(obj);
          if (!g) {
            return pos;
          }
        }
      }
    }
  } while (t && (x.lastIndex = s));

  return pos;
};

/**
 * matchRecursiveRegExp
 *
 * (c) 2007 Steven Levithan <stevenlevithan.com>
 * MIT License
 *
 * Accepts a string to search, a left and right format delimiter
 * as regex patterns, and optional regex flags. Returns an array
 * of matches, allowing nested instances of left/right delimiters.
 * Use the "g" flag to return all matches, otherwise only the
 * first is returned. Be careful to ensure that the left and
 * right format delimiters produce mutually exclusive matches.
 * Backreferences are not supported within the right delimiter
 * due to how it is internally combined with the left delimiter.
 * When matching strings whose format delimiters are unbalanced
 * to the left or right, the output is intentionally as a
 * conventional regex library with recursion support would
 * produce, e.g. "<<x>" and "<x>>" both produce ["x"] when using
 * "<" and ">" as the delimiters (both strings contain a single,
 * balanced instance of "<x>").
 *
 * examples:
 * matchRecursiveRegExp("test", "\\(", "\\)")
 * returns: []
 * matchRecursiveRegExp("<t<<e>><s>>t<>", "<", ">", "g")
 * returns: ["t<<e>><s>", ""]
 * matchRecursiveRegExp("<div id=\"x\">test</div>", "<div\\b[^>]*>", "</div>", "gi")
 * returns: ["test"]
 */
showdown.helper.matchRecursiveRegExp = function (str, left, right, flags) {
  'use strict';

  var matchPos = rgxFindMatchPos (str, left, right, flags),
      results = [];

  for (var i = 0; i < matchPos.length; ++i) {
    results.push([
      str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
      str.slice(matchPos[i].match.start, matchPos[i].match.end),
      str.slice(matchPos[i].left.start, matchPos[i].left.end),
      str.slice(matchPos[i].right.start, matchPos[i].right.end)
    ]);
  }
  return results;
};

/**
 *
 * @param {string} str
 * @param {string|function} replacement
 * @param {string} left
 * @param {string} right
 * @param {string} flags
 * @returns {string}
 */
showdown.helper.replaceRecursiveRegExp = function (str, replacement, left, right, flags) {
  'use strict';

  if (!showdown.helper.isFunction(replacement)) {
    var repStr = replacement;
    replacement = function () {
      return repStr;
    };
  }

  var matchPos = rgxFindMatchPos(str, left, right, flags),
      finalStr = str,
      lng = matchPos.length;

  if (lng > 0) {
    var bits = [];
    if (matchPos[0].wholeMatch.start !== 0) {
      bits.push(str.slice(0, matchPos[0].wholeMatch.start));
    }
    for (var i = 0; i < lng; ++i) {
      bits.push(
        replacement(
          str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
          str.slice(matchPos[i].match.start, matchPos[i].match.end),
          str.slice(matchPos[i].left.start, matchPos[i].left.end),
          str.slice(matchPos[i].right.start, matchPos[i].right.end)
        )
      );
      if (i < lng - 1) {
        bits.push(str.slice(matchPos[i].wholeMatch.end, matchPos[i + 1].wholeMatch.start));
      }
    }
    if (matchPos[lng - 1].wholeMatch.end < str.length) {
      bits.push(str.slice(matchPos[lng - 1].wholeMatch.end));
    }
    finalStr = bits.join('');
  }
  return finalStr;
};

/**
 * Returns the index within the passed String object of the first occurrence of the specified regex,
 * starting the search at fromIndex. Returns -1 if the value is not found.
 *
 * @param {string} str string to search
 * @param {RegExp} regex Regular expression to search
 * @param {int} [fromIndex = 0] Index to start the search
 * @returns {Number}
 * @throws InvalidArgumentError
 */
showdown.helper.regexIndexOf = function (str, regex, fromIndex) {
  'use strict';
  if (!showdown.helper.isString(str)) {
    throw 'InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string';
  }
  if (regex instanceof RegExp === false) {
    throw 'InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp';
  }
  var indexOf = str.substring(fromIndex || 0).search(regex);
  return (indexOf >= 0) ? (indexOf + (fromIndex || 0)) : indexOf;
};

/**
 * Splits the passed string object at the defined index, and returns an array composed of the two substrings
 * @param {string} str string to split
 * @param {int} index index to split string at
 * @returns {[string,string]}
 * @throws InvalidArgumentError
 */
showdown.helper.splitAtIndex = function (str, index) {
  'use strict';
  if (!showdown.helper.isString(str)) {
    throw 'InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string';
  }
  return [str.substring(0, index), str.substring(index)];
};

/**
 * Obfuscate an e-mail address through the use of Character Entities,
 * transforming ASCII characters into their equivalent decimal or hex entities.
 *
 * Since it has a random component, subsequent calls to this function produce different results
 *
 * @param {string} mail
 * @returns {string}
 */
showdown.helper.encodeEmailAddress = function (mail) {
  'use strict';
  var encode = [
    function (ch) {
      return '&#' + ch.charCodeAt(0) + ';';
    },
    function (ch) {
      return '&#x' + ch.charCodeAt(0).toString(16) + ';';
    },
    function (ch) {
      return ch;
    }
  ];

  mail = mail.replace(/./g, function (ch) {
    if (ch === '@') {
      // this *must* be encoded. I insist.
      ch = encode[Math.floor(Math.random() * 2)](ch);
    } else {
      var r = Math.random();
      // roughly 10% raw, 45% hex, 45% dec
      ch = (
        r > 0.9 ? encode[2](ch) : r > 0.45 ? encode[1](ch) : encode[0](ch)
      );
    }
    return ch;
  });

  return mail;
};

/**
 *
 * @param str
 * @param targetLength
 * @param padString
 * @returns {string}
 */
showdown.helper.padEnd = function padEnd (str, targetLength, padString) {
  'use strict';
  /*jshint bitwise: false*/
  // eslint-disable-next-line space-infix-ops
  targetLength = targetLength>>0; //floor if number or convert non-number to 0;
  /*jshint bitwise: true*/
  padString = String(padString || ' ');
  if (str.length > targetLength) {
    return String(str);
  } else {
    targetLength = targetLength - str.length;
    if (targetLength > padString.length) {
      padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
    }
    return String(str) + padString.slice(0,targetLength);
  }
};

/**
 * POLYFILLS
 */
// use this instead of builtin is undefined for IE8 compatibility
if (typeof console === 'undefined') {
  console = {
    warn: function (msg) {
      'use strict';
      alert(msg);
    },
    log: function (msg) {
      'use strict';
      alert(msg);
    },
    error: function (msg) {
      'use strict';
      throw msg;
    }
  };
}

/**
 * Common regexes.
 * We declare some common regexes to improve performance
 */
showdown.helper.regexes = {
  asteriskDashAndColon: /([*_:~])/g
};

/**
 * EMOJIS LIST
 */
showdown.helper.emojis = {
  '+1':'\ud83d\udc4d',
  '-1':'\ud83d\udc4e',
  '100':'\ud83d\udcaf',
  '1234':'\ud83d\udd22',
  '1st_place_medal':'\ud83e\udd47',
  '2nd_place_medal':'\ud83e\udd48',
  '3rd_place_medal':'\ud83e\udd49',
  '8ball':'\ud83c\udfb1',
  'a':'\ud83c\udd70\ufe0f',
  'ab':'\ud83c\udd8e',
  'abc':'\ud83d\udd24',
  'abcd':'\ud83d\udd21',
  'accept':'\ud83c\ude51',
  'aerial_tramway':'\ud83d\udea1',
  'airplane':'\u2708\ufe0f',
  'alarm_clock':'\u23f0',
  'alembic':'\u2697\ufe0f',
  'alien':'\ud83d\udc7d',
  'ambulance':'\ud83d\ude91',
  'amphora':'\ud83c\udffa',
  'anchor':'\u2693\ufe0f',
  'angel':'\ud83d\udc7c',
  'anger':'\ud83d\udca2',
  'angry':'\ud83d\ude20',
  'anguished':'\ud83d\ude27',
  'ant':'\ud83d\udc1c',
  'apple':'\ud83c\udf4e',
  'aquarius':'\u2652\ufe0f',
  'aries':'\u2648\ufe0f',
  'arrow_backward':'\u25c0\ufe0f',
  'arrow_double_down':'\u23ec',
  'arrow_double_up':'\u23eb',
  'arrow_down':'\u2b07\ufe0f',
  'arrow_down_small':'\ud83d\udd3d',
  'arrow_forward':'\u25b6\ufe0f',
  'arrow_heading_down':'\u2935\ufe0f',
  'arrow_heading_up':'\u2934\ufe0f',
  'arrow_left':'\u2b05\ufe0f',
  'arrow_lower_left':'\u2199\ufe0f',
  'arrow_lower_right':'\u2198\ufe0f',
  'arrow_right':'\u27a1\ufe0f',
  'arrow_right_hook':'\u21aa\ufe0f',
  'arrow_up':'\u2b06\ufe0f',
  'arrow_up_down':'\u2195\ufe0f',
  'arrow_up_small':'\ud83d\udd3c',
  'arrow_upper_left':'\u2196\ufe0f',
  'arrow_upper_right':'\u2197\ufe0f',
  'arrows_clockwise':'\ud83d\udd03',
  'arrows_counterclockwise':'\ud83d\udd04',
  'art':'\ud83c\udfa8',
  'articulated_lorry':'\ud83d\ude9b',
  'artificial_satellite':'\ud83d\udef0',
  'astonished':'\ud83d\ude32',
  'athletic_shoe':'\ud83d\udc5f',
  'atm':'\ud83c\udfe7',
  'atom_symbol':'\u269b\ufe0f',
  'avocado':'\ud83e\udd51',
  'b':'\ud83c\udd71\ufe0f',
  'baby':'\ud83d\udc76',
  'baby_bottle':'\ud83c\udf7c',
  'baby_chick':'\ud83d\udc24',
  'baby_symbol':'\ud83d\udebc',
  'back':'\ud83d\udd19',
  'bacon':'\ud83e\udd53',
  'badminton':'\ud83c\udff8',
  'baggage_claim':'\ud83d\udec4',
  'baguette_bread':'\ud83e\udd56',
  'balance_scale':'\u2696\ufe0f',
  'balloon':'\ud83c\udf88',
  'ballot_box':'\ud83d\uddf3',
  'ballot_box_with_check':'\u2611\ufe0f',
  'bamboo':'\ud83c\udf8d',
  'banana':'\ud83c\udf4c',
  'bangbang':'\u203c\ufe0f',
  'bank':'\ud83c\udfe6',
  'bar_chart':'\ud83d\udcca',
  'barber':'\ud83d\udc88',
  'baseball':'\u26be\ufe0f',
  'basketball':'\ud83c\udfc0',
  'basketball_man':'\u26f9\ufe0f',
  'basketball_woman':'\u26f9\ufe0f&zwj;\u2640\ufe0f',
  'bat':'\ud83e\udd87',
  'bath':'\ud83d\udec0',
  'bathtub':'\ud83d\udec1',
  'battery':'\ud83d\udd0b',
  'beach_umbrella':'\ud83c\udfd6',
  'bear':'\ud83d\udc3b',
  'bed':'\ud83d\udecf',
  'bee':'\ud83d\udc1d',
  'beer':'\ud83c\udf7a',
  'beers':'\ud83c\udf7b',
  'beetle':'\ud83d\udc1e',
  'beginner':'\ud83d\udd30',
  'bell':'\ud83d\udd14',
  'bellhop_bell':'\ud83d\udece',
  'bento':'\ud83c\udf71',
  'biking_man':'\ud83d\udeb4',
  'bike':'\ud83d\udeb2',
  'biking_woman':'\ud83d\udeb4&zwj;\u2640\ufe0f',
  'bikini':'\ud83d\udc59',
  'biohazard':'\u2623\ufe0f',
  'bird':'\ud83d\udc26',
  'birthday':'\ud83c\udf82',
  'black_circle':'\u26ab\ufe0f',
  'black_flag':'\ud83c\udff4',
  'black_heart':'\ud83d\udda4',
  'black_joker':'\ud83c\udccf',
  'black_large_square':'\u2b1b\ufe0f',
  'black_medium_small_square':'\u25fe\ufe0f',
  'black_medium_square':'\u25fc\ufe0f',
  'black_nib':'\u2712\ufe0f',
  'black_small_square':'\u25aa\ufe0f',
  'black_square_button':'\ud83d\udd32',
  'blonde_man':'\ud83d\udc71',
  'blonde_woman':'\ud83d\udc71&zwj;\u2640\ufe0f',
  'blossom':'\ud83c\udf3c',
  'blowfish':'\ud83d\udc21',
  'blue_book':'\ud83d\udcd8',
  'blue_car':'\ud83d\ude99',
  'blue_heart':'\ud83d\udc99',
  'blush':'\ud83d\ude0a',
  'boar':'\ud83d\udc17',
  'boat':'\u26f5\ufe0f',
  'bomb':'\ud83d\udca3',
  'book':'\ud83d\udcd6',
  'bookmark':'\ud83d\udd16',
  'bookmark_tabs':'\ud83d\udcd1',
  'books':'\ud83d\udcda',
  'boom':'\ud83d\udca5',
  'boot':'\ud83d\udc62',
  'bouquet':'\ud83d\udc90',
  'bowing_man':'\ud83d\ude47',
  'bow_and_arrow':'\ud83c\udff9',
  'bowing_woman':'\ud83d\ude47&zwj;\u2640\ufe0f',
  'bowling':'\ud83c\udfb3',
  'boxing_glove':'\ud83e\udd4a',
  'boy':'\ud83d\udc66',
  'bread':'\ud83c\udf5e',
  'bride_with_veil':'\ud83d\udc70',
  'bridge_at_night':'\ud83c\udf09',
  'briefcase':'\ud83d\udcbc',
  'broken_heart':'\ud83d\udc94',
  'bug':'\ud83d\udc1b',
  'building_construction':'\ud83c\udfd7',
  'bulb':'\ud83d\udca1',
  'bullettrain_front':'\ud83d\ude85',
  'bullettrain_side':'\ud83d\ude84',
  'burrito':'\ud83c\udf2f',
  'bus':'\ud83d\ude8c',
  'business_suit_levitating':'\ud83d\udd74',
  'busstop':'\ud83d\ude8f',
  'bust_in_silhouette':'\ud83d\udc64',
  'busts_in_silhouette':'\ud83d\udc65',
  'butterfly':'\ud83e\udd8b',
  'cactus':'\ud83c\udf35',
  'cake':'\ud83c\udf70',
  'calendar':'\ud83d\udcc6',
  'call_me_hand':'\ud83e\udd19',
  'calling':'\ud83d\udcf2',
  'camel':'\ud83d\udc2b',
  'camera':'\ud83d\udcf7',
  'camera_flash':'\ud83d\udcf8',
  'camping':'\ud83c\udfd5',
  'cancer':'\u264b\ufe0f',
  'candle':'\ud83d\udd6f',
  'candy':'\ud83c\udf6c',
  'canoe':'\ud83d\udef6',
  'capital_abcd':'\ud83d\udd20',
  'capricorn':'\u2651\ufe0f',
  'car':'\ud83d\ude97',
  'card_file_box':'\ud83d\uddc3',
  'card_index':'\ud83d\udcc7',
  'card_index_dividers':'\ud83d\uddc2',
  'carousel_horse':'\ud83c\udfa0',
  'carrot':'\ud83e\udd55',
  'cat':'\ud83d\udc31',
  'cat2':'\ud83d\udc08',
  'cd':'\ud83d\udcbf',
  'chains':'\u26d3',
  'champagne':'\ud83c\udf7e',
  'chart':'\ud83d\udcb9',
  'chart_with_downwards_trend':'\ud83d\udcc9',
  'chart_with_upwards_trend':'\ud83d\udcc8',
  'checkered_flag':'\ud83c\udfc1',
  'cheese':'\ud83e\uddc0',
  'cherries':'\ud83c\udf52',
  'cherry_blossom':'\ud83c\udf38',
  'chestnut':'\ud83c\udf30',
  'chicken':'\ud83d\udc14',
  'children_crossing':'\ud83d\udeb8',
  'chipmunk':'\ud83d\udc3f',
  'chocolate_bar':'\ud83c\udf6b',
  'christmas_tree':'\ud83c\udf84',
  'church':'\u26ea\ufe0f',
  'cinema':'\ud83c\udfa6',
  'circus_tent':'\ud83c\udfaa',
  'city_sunrise':'\ud83c\udf07',
  'city_sunset':'\ud83c\udf06',
  'cityscape':'\ud83c\udfd9',
  'cl':'\ud83c\udd91',
  'clamp':'\ud83d\udddc',
  'clap':'\ud83d\udc4f',
  'clapper':'\ud83c\udfac',
  'classical_building':'\ud83c\udfdb',
  'clinking_glasses':'\ud83e\udd42',
  'clipboard':'\ud83d\udccb',
  'clock1':'\ud83d\udd50',
  'clock10':'\ud83d\udd59',
  'clock1030':'\ud83d\udd65',
  'clock11':'\ud83d\udd5a',
  'clock1130':'\ud83d\udd66',
  'clock12':'\ud83d\udd5b',
  'clock1230':'\ud83d\udd67',
  'clock130':'\ud83d\udd5c',
  'clock2':'\ud83d\udd51',
  'clock230':'\ud83d\udd5d',
  'clock3':'\ud83d\udd52',
  'clock330':'\ud83d\udd5e',
  'clock4':'\ud83d\udd53',
  'clock430':'\ud83d\udd5f',
  'clock5':'\ud83d\udd54',
  'clock530':'\ud83d\udd60',
  'clock6':'\ud83d\udd55',
  'clock630':'\ud83d\udd61',
  'clock7':'\ud83d\udd56',
  'clock730':'\ud83d\udd62',
  'clock8':'\ud83d\udd57',
  'clock830':'\ud83d\udd63',
  'clock9':'\ud83d\udd58',
  'clock930':'\ud83d\udd64',
  'closed_book':'\ud83d\udcd5',
  'closed_lock_with_key':'\ud83d\udd10',
  'closed_umbrella':'\ud83c\udf02',
  'cloud':'\u2601\ufe0f',
  'cloud_with_lightning':'\ud83c\udf29',
  'cloud_with_lightning_and_rain':'\u26c8',
  'cloud_with_rain':'\ud83c\udf27',
  'cloud_with_snow':'\ud83c\udf28',
  'clown_face':'\ud83e\udd21',
  'clubs':'\u2663\ufe0f',
  'cocktail':'\ud83c\udf78',
  'coffee':'\u2615\ufe0f',
  'coffin':'\u26b0\ufe0f',
  'cold_sweat':'\ud83d\ude30',
  'comet':'\u2604\ufe0f',
  'computer':'\ud83d\udcbb',
  'computer_mouse':'\ud83d\uddb1',
  'confetti_ball':'\ud83c\udf8a',
  'confounded':'\ud83d\ude16',
  'confused':'\ud83d\ude15',
  'congratulations':'\u3297\ufe0f',
  'construction':'\ud83d\udea7',
  'construction_worker_man':'\ud83d\udc77',
  'construction_worker_woman':'\ud83d\udc77&zwj;\u2640\ufe0f',
  'control_knobs':'\ud83c\udf9b',
  'convenience_store':'\ud83c\udfea',
  'cookie':'\ud83c\udf6a',
  'cool':'\ud83c\udd92',
  'policeman':'\ud83d\udc6e',
  'copyright':'\u00a9\ufe0f',
  'corn':'\ud83c\udf3d',
  'couch_and_lamp':'\ud83d\udecb',
  'couple':'\ud83d\udc6b',
  'couple_with_heart_woman_man':'\ud83d\udc91',
  'couple_with_heart_man_man':'\ud83d\udc68&zwj;\u2764\ufe0f&zwj;\ud83d\udc68',
  'couple_with_heart_woman_woman':'\ud83d\udc69&zwj;\u2764\ufe0f&zwj;\ud83d\udc69',
  'couplekiss_man_man':'\ud83d\udc68&zwj;\u2764\ufe0f&zwj;\ud83d\udc8b&zwj;\ud83d\udc68',
  'couplekiss_man_woman':'\ud83d\udc8f',
  'couplekiss_woman_woman':'\ud83d\udc69&zwj;\u2764\ufe0f&zwj;\ud83d\udc8b&zwj;\ud83d\udc69',
  'cow':'\ud83d\udc2e',
  'cow2':'\ud83d\udc04',
  'cowboy_hat_face':'\ud83e\udd20',
  'crab':'\ud83e\udd80',
  'crayon':'\ud83d\udd8d',
  'credit_card':'\ud83d\udcb3',
  'crescent_moon':'\ud83c\udf19',
  'cricket':'\ud83c\udfcf',
  'crocodile':'\ud83d\udc0a',
  'croissant':'\ud83e\udd50',
  'crossed_fingers':'\ud83e\udd1e',
  'crossed_flags':'\ud83c\udf8c',
  'crossed_swords':'\u2694\ufe0f',
  'crown':'\ud83d\udc51',
  'cry':'\ud83d\ude22',
  'crying_cat_face':'\ud83d\ude3f',
  'crystal_ball':'\ud83d\udd2e',
  'cucumber':'\ud83e\udd52',
  'cupid':'\ud83d\udc98',
  'curly_loop':'\u27b0',
  'currency_exchange':'\ud83d\udcb1',
  'curry':'\ud83c\udf5b',
  'custard':'\ud83c\udf6e',
  'customs':'\ud83d\udec3',
  'cyclone':'\ud83c\udf00',
  'dagger':'\ud83d\udde1',
  'dancer':'\ud83d\udc83',
  'dancing_women':'\ud83d\udc6f',
  'dancing_men':'\ud83d\udc6f&zwj;\u2642\ufe0f',
  'dango':'\ud83c\udf61',
  'dark_sunglasses':'\ud83d\udd76',
  'dart':'\ud83c\udfaf',
  'dash':'\ud83d\udca8',
  'date':'\ud83d\udcc5',
  'deciduous_tree':'\ud83c\udf33',
  'deer':'\ud83e\udd8c',
  'department_store':'\ud83c\udfec',
  'derelict_house':'\ud83c\udfda',
  'desert':'\ud83c\udfdc',
  'desert_island':'\ud83c\udfdd',
  'desktop_computer':'\ud83d\udda5',
  'male_detective':'\ud83d\udd75\ufe0f',
  'diamond_shape_with_a_dot_inside':'\ud83d\udca0',
  'diamonds':'\u2666\ufe0f',
  'disappointed':'\ud83d\ude1e',
  'disappointed_relieved':'\ud83d\ude25',
  'dizzy':'\ud83d\udcab',
  'dizzy_face':'\ud83d\ude35',
  'do_not_litter':'\ud83d\udeaf',
  'dog':'\ud83d\udc36',
  'dog2':'\ud83d\udc15',
  'dollar':'\ud83d\udcb5',
  'dolls':'\ud83c\udf8e',
  'dolphin':'\ud83d\udc2c',
  'door':'\ud83d\udeaa',
  'doughnut':'\ud83c\udf69',
  'dove':'\ud83d\udd4a',
  'dragon':'\ud83d\udc09',
  'dragon_face':'\ud83d\udc32',
  'dress':'\ud83d\udc57',
  'dromedary_camel':'\ud83d\udc2a',
  'drooling_face':'\ud83e\udd24',
  'droplet':'\ud83d\udca7',
  'drum':'\ud83e\udd41',
  'duck':'\ud83e\udd86',
  'dvd':'\ud83d\udcc0',
  'e-mail':'\ud83d\udce7',
  'eagle':'\ud83e\udd85',
  'ear':'\ud83d\udc42',
  'ear_of_rice':'\ud83c\udf3e',
  'earth_africa':'\ud83c\udf0d',
  'earth_americas':'\ud83c\udf0e',
  'earth_asia':'\ud83c\udf0f',
  'egg':'\ud83e\udd5a',
  'eggplant':'\ud83c\udf46',
  'eight_pointed_black_star':'\u2734\ufe0f',
  'eight_spoked_asterisk':'\u2733\ufe0f',
  'electric_plug':'\ud83d\udd0c',
  'elephant':'\ud83d\udc18',
  'email':'\u2709\ufe0f',
  'end':'\ud83d\udd1a',
  'envelope_with_arrow':'\ud83d\udce9',
  'euro':'\ud83d\udcb6',
  'european_castle':'\ud83c\udff0',
  'european_post_office':'\ud83c\udfe4',
  'evergreen_tree':'\ud83c\udf32',
  'exclamation':'\u2757\ufe0f',
  'expressionless':'\ud83d\ude11',
  'eye':'\ud83d\udc41',
  'eye_speech_bubble':'\ud83d\udc41&zwj;\ud83d\udde8',
  'eyeglasses':'\ud83d\udc53',
  'eyes':'\ud83d\udc40',
  'face_with_head_bandage':'\ud83e\udd15',
  'face_with_thermometer':'\ud83e\udd12',
  'fist_oncoming':'\ud83d\udc4a',
  'factory':'\ud83c\udfed',
  'fallen_leaf':'\ud83c\udf42',
  'family_man_woman_boy':'\ud83d\udc6a',
  'family_man_boy':'\ud83d\udc68&zwj;\ud83d\udc66',
  'family_man_boy_boy':'\ud83d\udc68&zwj;\ud83d\udc66&zwj;\ud83d\udc66',
  'family_man_girl':'\ud83d\udc68&zwj;\ud83d\udc67',
  'family_man_girl_boy':'\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc66',
  'family_man_girl_girl':'\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc67',
  'family_man_man_boy':'\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc66',
  'family_man_man_boy_boy':'\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc66&zwj;\ud83d\udc66',
  'family_man_man_girl':'\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc67',
  'family_man_man_girl_boy':'\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc66',
  'family_man_man_girl_girl':'\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc67',
  'family_man_woman_boy_boy':'\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc66&zwj;\ud83d\udc66',
  'family_man_woman_girl':'\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc67',
  'family_man_woman_girl_boy':'\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc66',
  'family_man_woman_girl_girl':'\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc67',
  'family_woman_boy':'\ud83d\udc69&zwj;\ud83d\udc66',
  'family_woman_boy_boy':'\ud83d\udc69&zwj;\ud83d\udc66&zwj;\ud83d\udc66',
  'family_woman_girl':'\ud83d\udc69&zwj;\ud83d\udc67',
  'family_woman_girl_boy':'\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc66',
  'family_woman_girl_girl':'\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc67',
  'family_woman_woman_boy':'\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc66',
  'family_woman_woman_boy_boy':'\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc66&zwj;\ud83d\udc66',
  'family_woman_woman_girl':'\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc67',
  'family_woman_woman_girl_boy':'\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc66',
  'family_woman_woman_girl_girl':'\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc67',
  'fast_forward':'\u23e9',
  'fax':'\ud83d\udce0',
  'fearful':'\ud83d\ude28',
  'feet':'\ud83d\udc3e',
  'female_detective':'\ud83d\udd75\ufe0f&zwj;\u2640\ufe0f',
  'ferris_wheel':'\ud83c\udfa1',
  'ferry':'\u26f4',
  'field_hockey':'\ud83c\udfd1',
  'file_cabinet':'\ud83d\uddc4',
  'file_folder':'\ud83d\udcc1',
  'film_projector':'\ud83d\udcfd',
  'film_strip':'\ud83c\udf9e',
  'fire':'\ud83d\udd25',
  'fire_engine':'\ud83d\ude92',
  'fireworks':'\ud83c\udf86',
  'first_quarter_moon':'\ud83c\udf13',
  'first_quarter_moon_with_face':'\ud83c\udf1b',
  'fish':'\ud83d\udc1f',
  'fish_cake':'\ud83c\udf65',
  'fishing_pole_and_fish':'\ud83c\udfa3',
  'fist_raised':'\u270a',
  'fist_left':'\ud83e\udd1b',
  'fist_right':'\ud83e\udd1c',
  'flags':'\ud83c\udf8f',
  'flashlight':'\ud83d\udd26',
  'fleur_de_lis':'\u269c\ufe0f',
  'flight_arrival':'\ud83d\udeec',
  'flight_departure':'\ud83d\udeeb',
  'floppy_disk':'\ud83d\udcbe',
  'flower_playing_cards':'\ud83c\udfb4',
  'flushed':'\ud83d\ude33',
  'fog':'\ud83c\udf2b',
  'foggy':'\ud83c\udf01',
  'football':'\ud83c\udfc8',
  'footprints':'\ud83d\udc63',
  'fork_and_knife':'\ud83c\udf74',
  'fountain':'\u26f2\ufe0f',
  'fountain_pen':'\ud83d\udd8b',
  'four_leaf_clover':'\ud83c\udf40',
  'fox_face':'\ud83e\udd8a',
  'framed_picture':'\ud83d\uddbc',
  'free':'\ud83c\udd93',
  'fried_egg':'\ud83c\udf73',
  'fried_shrimp':'\ud83c\udf64',
  'fries':'\ud83c\udf5f',
  'frog':'\ud83d\udc38',
  'frowning':'\ud83d\ude26',
  'frowning_face':'\u2639\ufe0f',
  'frowning_man':'\ud83d\ude4d&zwj;\u2642\ufe0f',
  'frowning_woman':'\ud83d\ude4d',
  'middle_finger':'\ud83d\udd95',
  'fuelpump':'\u26fd\ufe0f',
  'full_moon':'\ud83c\udf15',
  'full_moon_with_face':'\ud83c\udf1d',
  'funeral_urn':'\u26b1\ufe0f',
  'game_die':'\ud83c\udfb2',
  'gear':'\u2699\ufe0f',
  'gem':'\ud83d\udc8e',
  'gemini':'\u264a\ufe0f',
  'ghost':'\ud83d\udc7b',
  'gift':'\ud83c\udf81',
  'gift_heart':'\ud83d\udc9d',
  'girl':'\ud83d\udc67',
  'globe_with_meridians':'\ud83c\udf10',
  'goal_net':'\ud83e\udd45',
  'goat':'\ud83d\udc10',
  'golf':'\u26f3\ufe0f',
  'golfing_man':'\ud83c\udfcc\ufe0f',
  'golfing_woman':'\ud83c\udfcc\ufe0f&zwj;\u2640\ufe0f',
  'gorilla':'\ud83e\udd8d',
  'grapes':'\ud83c\udf47',
  'green_apple':'\ud83c\udf4f',
  'green_book':'\ud83d\udcd7',
  'green_heart':'\ud83d\udc9a',
  'green_salad':'\ud83e\udd57',
  'grey_exclamation':'\u2755',
  'grey_question':'\u2754',
  'grimacing':'\ud83d\ude2c',
  'grin':'\ud83d\ude01',
  'grinning':'\ud83d\ude00',
  'guardsman':'\ud83d\udc82',
  'guardswoman':'\ud83d\udc82&zwj;\u2640\ufe0f',
  'guitar':'\ud83c\udfb8',
  'gun':'\ud83d\udd2b',
  'haircut_woman':'\ud83d\udc87',
  'haircut_man':'\ud83d\udc87&zwj;\u2642\ufe0f',
  'hamburger':'\ud83c\udf54',
  'hammer':'\ud83d\udd28',
  'hammer_and_pick':'\u2692',
  'hammer_and_wrench':'\ud83d\udee0',
  'hamster':'\ud83d\udc39',
  'hand':'\u270b',
  'handbag':'\ud83d\udc5c',
  'handshake':'\ud83e\udd1d',
  'hankey':'\ud83d\udca9',
  'hatched_chick':'\ud83d\udc25',
  'hatching_chick':'\ud83d\udc23',
  'headphones':'\ud83c\udfa7',
  'hear_no_evil':'\ud83d\ude49',
  'heart':'\u2764\ufe0f',
  'heart_decoration':'\ud83d\udc9f',
  'heart_eyes':'\ud83d\ude0d',
  'heart_eyes_cat':'\ud83d\ude3b',
  'heartbeat':'\ud83d\udc93',
  'heartpulse':'\ud83d\udc97',
  'hearts':'\u2665\ufe0f',
  'heavy_check_mark':'\u2714\ufe0f',
  'heavy_division_sign':'\u2797',
  'heavy_dollar_sign':'\ud83d\udcb2',
  'heavy_heart_exclamation':'\u2763\ufe0f',
  'heavy_minus_sign':'\u2796',
  'heavy_multiplication_x':'\u2716\ufe0f',
  'heavy_plus_sign':'\u2795',
  'helicopter':'\ud83d\ude81',
  'herb':'\ud83c\udf3f',
  'hibiscus':'\ud83c\udf3a',
  'high_brightness':'\ud83d\udd06',
  'high_heel':'\ud83d\udc60',
  'hocho':'\ud83d\udd2a',
  'hole':'\ud83d\udd73',
  'honey_pot':'\ud83c\udf6f',
  'horse':'\ud83d\udc34',
  'horse_racing':'\ud83c\udfc7',
  'hospital':'\ud83c\udfe5',
  'hot_pepper':'\ud83c\udf36',
  'hotdog':'\ud83c\udf2d',
  'hotel':'\ud83c\udfe8',
  'hotsprings':'\u2668\ufe0f',
  'hourglass':'\u231b\ufe0f',
  'hourglass_flowing_sand':'\u23f3',
  'house':'\ud83c\udfe0',
  'house_with_garden':'\ud83c\udfe1',
  'houses':'\ud83c\udfd8',
  'hugs':'\ud83e\udd17',
  'hushed':'\ud83d\ude2f',
  'ice_cream':'\ud83c\udf68',
  'ice_hockey':'\ud83c\udfd2',
  'ice_skate':'\u26f8',
  'icecream':'\ud83c\udf66',
  'id':'\ud83c\udd94',
  'ideograph_advantage':'\ud83c\ude50',
  'imp':'\ud83d\udc7f',
  'inbox_tray':'\ud83d\udce5',
  'incoming_envelope':'\ud83d\udce8',
  'tipping_hand_woman':'\ud83d\udc81',
  'information_source':'\u2139\ufe0f',
  'innocent':'\ud83d\ude07',
  'interrobang':'\u2049\ufe0f',
  'iphone':'\ud83d\udcf1',
  'izakaya_lantern':'\ud83c\udfee',
  'jack_o_lantern':'\ud83c\udf83',
  'japan':'\ud83d\uddfe',
  'japanese_castle':'\ud83c\udfef',
  'japanese_goblin':'\ud83d\udc7a',
  'japanese_ogre':'\ud83d\udc79',
  'jeans':'\ud83d\udc56',
  'joy':'\ud83d\ude02',
  'joy_cat':'\ud83d\ude39',
  'joystick':'\ud83d\udd79',
  'kaaba':'\ud83d\udd4b',
  'key':'\ud83d\udd11',
  'keyboard':'\u2328\ufe0f',
  'keycap_ten':'\ud83d\udd1f',
  'kick_scooter':'\ud83d\udef4',
  'kimono':'\ud83d\udc58',
  'kiss':'\ud83d\udc8b',
  'kissing':'\ud83d\ude17',
  'kissing_cat':'\ud83d\ude3d',
  'kissing_closed_eyes':'\ud83d\ude1a',
  'kissing_heart':'\ud83d\ude18',
  'kissing_smiling_eyes':'\ud83d\ude19',
  'kiwi_fruit':'\ud83e\udd5d',
  'koala':'\ud83d\udc28',
  'koko':'\ud83c\ude01',
  'label':'\ud83c\udff7',
  'large_blue_circle':'\ud83d\udd35',
  'large_blue_diamond':'\ud83d\udd37',
  'large_orange_diamond':'\ud83d\udd36',
  'last_quarter_moon':'\ud83c\udf17',
  'last_quarter_moon_with_face':'\ud83c\udf1c',
  'latin_cross':'\u271d\ufe0f',
  'laughing':'\ud83d\ude06',
  'leaves':'\ud83c\udf43',
  'ledger':'\ud83d\udcd2',
  'left_luggage':'\ud83d\udec5',
  'left_right_arrow':'\u2194\ufe0f',
  'leftwards_arrow_with_hook':'\u21a9\ufe0f',
  'lemon':'\ud83c\udf4b',
  'leo':'\u264c\ufe0f',
  'leopard':'\ud83d\udc06',
  'level_slider':'\ud83c\udf9a',
  'libra':'\u264e\ufe0f',
  'light_rail':'\ud83d\ude88',
  'link':'\ud83d\udd17',
  'lion':'\ud83e\udd81',
  'lips':'\ud83d\udc44',
  'lipstick':'\ud83d\udc84',
  'lizard':'\ud83e\udd8e',
  'lock':'\ud83d\udd12',
  'lock_with_ink_pen':'\ud83d\udd0f',
  'lollipop':'\ud83c\udf6d',
  'loop':'\u27bf',
  'loud_sound':'\ud83d\udd0a',
  'loudspeaker':'\ud83d\udce2',
  'love_hotel':'\ud83c\udfe9',
  'love_letter':'\ud83d\udc8c',
  'low_brightness':'\ud83d\udd05',
  'lying_face':'\ud83e\udd25',
  'm':'\u24c2\ufe0f',
  'mag':'\ud83d\udd0d',
  'mag_right':'\ud83d\udd0e',
  'mahjong':'\ud83c\udc04\ufe0f',
  'mailbox':'\ud83d\udceb',
  'mailbox_closed':'\ud83d\udcea',
  'mailbox_with_mail':'\ud83d\udcec',
  'mailbox_with_no_mail':'\ud83d\udced',
  'man':'\ud83d\udc68',
  'man_artist':'\ud83d\udc68&zwj;\ud83c\udfa8',
  'man_astronaut':'\ud83d\udc68&zwj;\ud83d\ude80',
  'man_cartwheeling':'\ud83e\udd38&zwj;\u2642\ufe0f',
  'man_cook':'\ud83d\udc68&zwj;\ud83c\udf73',
  'man_dancing':'\ud83d\udd7a',
  'man_facepalming':'\ud83e\udd26&zwj;\u2642\ufe0f',
  'man_factory_worker':'\ud83d\udc68&zwj;\ud83c\udfed',
  'man_farmer':'\ud83d\udc68&zwj;\ud83c\udf3e',
  'man_firefighter':'\ud83d\udc68&zwj;\ud83d\ude92',
  'man_health_worker':'\ud83d\udc68&zwj;\u2695\ufe0f',
  'man_in_tuxedo':'\ud83e\udd35',
  'man_judge':'\ud83d\udc68&zwj;\u2696\ufe0f',
  'man_juggling':'\ud83e\udd39&zwj;\u2642\ufe0f',
  'man_mechanic':'\ud83d\udc68&zwj;\ud83d\udd27',
  'man_office_worker':'\ud83d\udc68&zwj;\ud83d\udcbc',
  'man_pilot':'\ud83d\udc68&zwj;\u2708\ufe0f',
  'man_playing_handball':'\ud83e\udd3e&zwj;\u2642\ufe0f',
  'man_playing_water_polo':'\ud83e\udd3d&zwj;\u2642\ufe0f',
  'man_scientist':'\ud83d\udc68&zwj;\ud83d\udd2c',
  'man_shrugging':'\ud83e\udd37&zwj;\u2642\ufe0f',
  'man_singer':'\ud83d\udc68&zwj;\ud83c\udfa4',
  'man_student':'\ud83d\udc68&zwj;\ud83c\udf93',
  'man_teacher':'\ud83d\udc68&zwj;\ud83c\udfeb',
  'man_technologist':'\ud83d\udc68&zwj;\ud83d\udcbb',
  'man_with_gua_pi_mao':'\ud83d\udc72',
  'man_with_turban':'\ud83d\udc73',
  'tangerine':'\ud83c\udf4a',
  'mans_shoe':'\ud83d\udc5e',
  'mantelpiece_clock':'\ud83d\udd70',
  'maple_leaf':'\ud83c\udf41',
  'martial_arts_uniform':'\ud83e\udd4b',
  'mask':'\ud83d\ude37',
  'massage_woman':'\ud83d\udc86',
  'massage_man':'\ud83d\udc86&zwj;\u2642\ufe0f',
  'meat_on_bone':'\ud83c\udf56',
  'medal_military':'\ud83c\udf96',
  'medal_sports':'\ud83c\udfc5',
  'mega':'\ud83d\udce3',
  'melon':'\ud83c\udf48',
  'memo':'\ud83d\udcdd',
  'men_wrestling':'\ud83e\udd3c&zwj;\u2642\ufe0f',
  'menorah':'\ud83d\udd4e',
  'mens':'\ud83d\udeb9',
  'metal':'\ud83e\udd18',
  'metro':'\ud83d\ude87',
  'microphone':'\ud83c\udfa4',
  'microscope':'\ud83d\udd2c',
  'milk_glass':'\ud83e\udd5b',
  'milky_way':'\ud83c\udf0c',
  'minibus':'\ud83d\ude90',
  'minidisc':'\ud83d\udcbd',
  'mobile_phone_off':'\ud83d\udcf4',
  'money_mouth_face':'\ud83e\udd11',
  'money_with_wings':'\ud83d\udcb8',
  'moneybag':'\ud83d\udcb0',
  'monkey':'\ud83d\udc12',
  'monkey_face':'\ud83d\udc35',
  'monorail':'\ud83d\ude9d',
  'moon':'\ud83c\udf14',
  'mortar_board':'\ud83c\udf93',
  'mosque':'\ud83d\udd4c',
  'motor_boat':'\ud83d\udee5',
  'motor_scooter':'\ud83d\udef5',
  'motorcycle':'\ud83c\udfcd',
  'motorway':'\ud83d\udee3',
  'mount_fuji':'\ud83d\uddfb',
  'mountain':'\u26f0',
  'mountain_biking_man':'\ud83d\udeb5',
  'mountain_biking_woman':'\ud83d\udeb5&zwj;\u2640\ufe0f',
  'mountain_cableway':'\ud83d\udea0',
  'mountain_railway':'\ud83d\ude9e',
  'mountain_snow':'\ud83c\udfd4',
  'mouse':'\ud83d\udc2d',
  'mouse2':'\ud83d\udc01',
  'movie_camera':'\ud83c\udfa5',
  'moyai':'\ud83d\uddff',
  'mrs_claus':'\ud83e\udd36',
  'muscle':'\ud83d\udcaa',
  'mushroom':'\ud83c\udf44',
  'musical_keyboard':'\ud83c\udfb9',
  'musical_note':'\ud83c\udfb5',
  'musical_score':'\ud83c\udfbc',
  'mute':'\ud83d\udd07',
  'nail_care':'\ud83d\udc85',
  'name_badge':'\ud83d\udcdb',
  'national_park':'\ud83c\udfde',
  'nauseated_face':'\ud83e\udd22',
  'necktie':'\ud83d\udc54',
  'negative_squared_cross_mark':'\u274e',
  'nerd_face':'\ud83e\udd13',
  'neutral_face':'\ud83d\ude10',
  'new':'\ud83c\udd95',
  'new_moon':'\ud83c\udf11',
  'new_moon_with_face':'\ud83c\udf1a',
  'newspaper':'\ud83d\udcf0',
  'newspaper_roll':'\ud83d\uddde',
  'next_track_button':'\u23ed',
  'ng':'\ud83c\udd96',
  'no_good_man':'\ud83d\ude45&zwj;\u2642\ufe0f',
  'no_good_woman':'\ud83d\ude45',
  'night_with_stars':'\ud83c\udf03',
  'no_bell':'\ud83d\udd15',
  'no_bicycles':'\ud83d\udeb3',
  'no_entry':'\u26d4\ufe0f',
  'no_entry_sign':'\ud83d\udeab',
  'no_mobile_phones':'\ud83d\udcf5',
  'no_mouth':'\ud83d\ude36',
  'no_pedestrians':'\ud83d\udeb7',
  'no_smoking':'\ud83d\udead',
  'non-potable_water':'\ud83d\udeb1',
  'nose':'\ud83d\udc43',
  'notebook':'\ud83d\udcd3',
  'notebook_with_decorative_cover':'\ud83d\udcd4',
  'notes':'\ud83c\udfb6',
  'nut_and_bolt':'\ud83d\udd29',
  'o':'\u2b55\ufe0f',
  'o2':'\ud83c\udd7e\ufe0f',
  'ocean':'\ud83c\udf0a',
  'octopus':'\ud83d\udc19',
  'oden':'\ud83c\udf62',
  'office':'\ud83c\udfe2',
  'oil_drum':'\ud83d\udee2',
  'ok':'\ud83c\udd97',
  'ok_hand':'\ud83d\udc4c',
  'ok_man':'\ud83d\ude46&zwj;\u2642\ufe0f',
  'ok_woman':'\ud83d\ude46',
  'old_key':'\ud83d\udddd',
  'older_man':'\ud83d\udc74',
  'older_woman':'\ud83d\udc75',
  'om':'\ud83d\udd49',
  'on':'\ud83d\udd1b',
  'oncoming_automobile':'\ud83d\ude98',
  'oncoming_bus':'\ud83d\ude8d',
  'oncoming_police_car':'\ud83d\ude94',
  'oncoming_taxi':'\ud83d\ude96',
  'open_file_folder':'\ud83d\udcc2',
  'open_hands':'\ud83d\udc50',
  'open_mouth':'\ud83d\ude2e',
  'open_umbrella':'\u2602\ufe0f',
  'ophiuchus':'\u26ce',
  'orange_book':'\ud83d\udcd9',
  'orthodox_cross':'\u2626\ufe0f',
  'outbox_tray':'\ud83d\udce4',
  'owl':'\ud83e\udd89',
  'ox':'\ud83d\udc02',
  'package':'\ud83d\udce6',
  'page_facing_up':'\ud83d\udcc4',
  'page_with_curl':'\ud83d\udcc3',
  'pager':'\ud83d\udcdf',
  'paintbrush':'\ud83d\udd8c',
  'palm_tree':'\ud83c\udf34',
  'pancakes':'\ud83e\udd5e',
  'panda_face':'\ud83d\udc3c',
  'paperclip':'\ud83d\udcce',
  'paperclips':'\ud83d\udd87',
  'parasol_on_ground':'\u26f1',
  'parking':'\ud83c\udd7f\ufe0f',
  'part_alternation_mark':'\u303d\ufe0f',
  'partly_sunny':'\u26c5\ufe0f',
  'passenger_ship':'\ud83d\udef3',
  'passport_control':'\ud83d\udec2',
  'pause_button':'\u23f8',
  'peace_symbol':'\u262e\ufe0f',
  'peach':'\ud83c\udf51',
  'peanuts':'\ud83e\udd5c',
  'pear':'\ud83c\udf50',
  'pen':'\ud83d\udd8a',
  'pencil2':'\u270f\ufe0f',
  'penguin':'\ud83d\udc27',
  'pensive':'\ud83d\ude14',
  'performing_arts':'\ud83c\udfad',
  'persevere':'\ud83d\ude23',
  'person_fencing':'\ud83e\udd3a',
  'pouting_woman':'\ud83d\ude4e',
  'phone':'\u260e\ufe0f',
  'pick':'\u26cf',
  'pig':'\ud83d\udc37',
  'pig2':'\ud83d\udc16',
  'pig_nose':'\ud83d\udc3d',
  'pill':'\ud83d\udc8a',
  'pineapple':'\ud83c\udf4d',
  'ping_pong':'\ud83c\udfd3',
  'pisces':'\u2653\ufe0f',
  'pizza':'\ud83c\udf55',
  'place_of_worship':'\ud83d\uded0',
  'plate_with_cutlery':'\ud83c\udf7d',
  'play_or_pause_button':'\u23ef',
  'point_down':'\ud83d\udc47',
  'point_left':'\ud83d\udc48',
  'point_right':'\ud83d\udc49',
  'point_up':'\u261d\ufe0f',
  'point_up_2':'\ud83d\udc46',
  'police_car':'\ud83d\ude93',
  'policewoman':'\ud83d\udc6e&zwj;\u2640\ufe0f',
  'poodle':'\ud83d\udc29',
  'popcorn':'\ud83c\udf7f',
  'post_office':'\ud83c\udfe3',
  'postal_horn':'\ud83d\udcef',
  'postbox':'\ud83d\udcee',
  'potable_water':'\ud83d\udeb0',
  'potato':'\ud83e\udd54',
  'pouch':'\ud83d\udc5d',
  'poultry_leg':'\ud83c\udf57',
  'pound':'\ud83d\udcb7',
  'rage':'\ud83d\ude21',
  'pouting_cat':'\ud83d\ude3e',
  'pouting_man':'\ud83d\ude4e&zwj;\u2642\ufe0f',
  'pray':'\ud83d\ude4f',
  'prayer_beads':'\ud83d\udcff',
  'pregnant_woman':'\ud83e\udd30',
  'previous_track_button':'\u23ee',
  'prince':'\ud83e\udd34',
  'princess':'\ud83d\udc78',
  'printer':'\ud83d\udda8',
  'purple_heart':'\ud83d\udc9c',
  'purse':'\ud83d\udc5b',
  'pushpin':'\ud83d\udccc',
  'put_litter_in_its_place':'\ud83d\udeae',
  'question':'\u2753',
  'rabbit':'\ud83d\udc30',
  'rabbit2':'\ud83d\udc07',
  'racehorse':'\ud83d\udc0e',
  'racing_car':'\ud83c\udfce',
  'radio':'\ud83d\udcfb',
  'radio_button':'\ud83d\udd18',
  'radioactive':'\u2622\ufe0f',
  'railway_car':'\ud83d\ude83',
  'railway_track':'\ud83d\udee4',
  'rainbow':'\ud83c\udf08',
  'rainbow_flag':'\ud83c\udff3\ufe0f&zwj;\ud83c\udf08',
  'raised_back_of_hand':'\ud83e\udd1a',
  'raised_hand_with_fingers_splayed':'\ud83d\udd90',
  'raised_hands':'\ud83d\ude4c',
  'raising_hand_woman':'\ud83d\ude4b',
  'raising_hand_man':'\ud83d\ude4b&zwj;\u2642\ufe0f',
  'ram':'\ud83d\udc0f',
  'ramen':'\ud83c\udf5c',
  'rat':'\ud83d\udc00',
  'record_button':'\u23fa',
  'recycle':'\u267b\ufe0f',
  'red_circle':'\ud83d\udd34',
  'registered':'\u00ae\ufe0f',
  'relaxed':'\u263a\ufe0f',
  'relieved':'\ud83d\ude0c',
  'reminder_ribbon':'\ud83c\udf97',
  'repeat':'\ud83d\udd01',
  'repeat_one':'\ud83d\udd02',
  'rescue_worker_helmet':'\u26d1',
  'restroom':'\ud83d\udebb',
  'revolving_hearts':'\ud83d\udc9e',
  'rewind':'\u23ea',
  'rhinoceros':'\ud83e\udd8f',
  'ribbon':'\ud83c\udf80',
  'rice':'\ud83c\udf5a',
  'rice_ball':'\ud83c\udf59',
  'rice_cracker':'\ud83c\udf58',
  'rice_scene':'\ud83c\udf91',
  'right_anger_bubble':'\ud83d\uddef',
  'ring':'\ud83d\udc8d',
  'robot':'\ud83e\udd16',
  'rocket':'\ud83d\ude80',
  'rofl':'\ud83e\udd23',
  'roll_eyes':'\ud83d\ude44',
  'roller_coaster':'\ud83c\udfa2',
  'rooster':'\ud83d\udc13',
  'rose':'\ud83c\udf39',
  'rosette':'\ud83c\udff5',
  'rotating_light':'\ud83d\udea8',
  'round_pushpin':'\ud83d\udccd',
  'rowing_man':'\ud83d\udea3',
  'rowing_woman':'\ud83d\udea3&zwj;\u2640\ufe0f',
  'rugby_football':'\ud83c\udfc9',
  'running_man':'\ud83c\udfc3',
  'running_shirt_with_sash':'\ud83c\udfbd',
  'running_woman':'\ud83c\udfc3&zwj;\u2640\ufe0f',
  'sa':'\ud83c\ude02\ufe0f',
  'sagittarius':'\u2650\ufe0f',
  'sake':'\ud83c\udf76',
  'sandal':'\ud83d\udc61',
  'santa':'\ud83c\udf85',
  'satellite':'\ud83d\udce1',
  'saxophone':'\ud83c\udfb7',
  'school':'\ud83c\udfeb',
  'school_satchel':'\ud83c\udf92',
  'scissors':'\u2702\ufe0f',
  'scorpion':'\ud83e\udd82',
  'scorpius':'\u264f\ufe0f',
  'scream':'\ud83d\ude31',
  'scream_cat':'\ud83d\ude40',
  'scroll':'\ud83d\udcdc',
  'seat':'\ud83d\udcba',
  'secret':'\u3299\ufe0f',
  'see_no_evil':'\ud83d\ude48',
  'seedling':'\ud83c\udf31',
  'selfie':'\ud83e\udd33',
  'shallow_pan_of_food':'\ud83e\udd58',
  'shamrock':'\u2618\ufe0f',
  'shark':'\ud83e\udd88',
  'shaved_ice':'\ud83c\udf67',
  'sheep':'\ud83d\udc11',
  'shell':'\ud83d\udc1a',
  'shield':'\ud83d\udee1',
  'shinto_shrine':'\u26e9',
  'ship':'\ud83d\udea2',
  'shirt':'\ud83d\udc55',
  'shopping':'\ud83d\udecd',
  'shopping_cart':'\ud83d\uded2',
  'shower':'\ud83d\udebf',
  'shrimp':'\ud83e\udd90',
  'signal_strength':'\ud83d\udcf6',
  'six_pointed_star':'\ud83d\udd2f',
  'ski':'\ud83c\udfbf',
  'skier':'\u26f7',
  'skull':'\ud83d\udc80',
  'skull_and_crossbones':'\u2620\ufe0f',
  'sleeping':'\ud83d\ude34',
  'sleeping_bed':'\ud83d\udecc',
  'sleepy':'\ud83d\ude2a',
  'slightly_frowning_face':'\ud83d\ude41',
  'slightly_smiling_face':'\ud83d\ude42',
  'slot_machine':'\ud83c\udfb0',
  'small_airplane':'\ud83d\udee9',
  'small_blue_diamond':'\ud83d\udd39',
  'small_orange_diamond':'\ud83d\udd38',
  'small_red_triangle':'\ud83d\udd3a',
  'small_red_triangle_down':'\ud83d\udd3b',
  'smile':'\ud83d\ude04',
  'smile_cat':'\ud83d\ude38',
  'smiley':'\ud83d\ude03',
  'smiley_cat':'\ud83d\ude3a',
  'smiling_imp':'\ud83d\ude08',
  'smirk':'\ud83d\ude0f',
  'smirk_cat':'\ud83d\ude3c',
  'smoking':'\ud83d\udeac',
  'snail':'\ud83d\udc0c',
  'snake':'\ud83d\udc0d',
  'sneezing_face':'\ud83e\udd27',
  'snowboarder':'\ud83c\udfc2',
  'snowflake':'\u2744\ufe0f',
  'snowman':'\u26c4\ufe0f',
  'snowman_with_snow':'\u2603\ufe0f',
  'sob':'\ud83d\ude2d',
  'soccer':'\u26bd\ufe0f',
  'soon':'\ud83d\udd1c',
  'sos':'\ud83c\udd98',
  'sound':'\ud83d\udd09',
  'space_invader':'\ud83d\udc7e',
  'spades':'\u2660\ufe0f',
  'spaghetti':'\ud83c\udf5d',
  'sparkle':'\u2747\ufe0f',
  'sparkler':'\ud83c\udf87',
  'sparkles':'\u2728',
  'sparkling_heart':'\ud83d\udc96',
  'speak_no_evil':'\ud83d\ude4a',
  'speaker':'\ud83d\udd08',
  'speaking_head':'\ud83d\udde3',
  'speech_balloon':'\ud83d\udcac',
  'speedboat':'\ud83d\udea4',
  'spider':'\ud83d\udd77',
  'spider_web':'\ud83d\udd78',
  'spiral_calendar':'\ud83d\uddd3',
  'spiral_notepad':'\ud83d\uddd2',
  'spoon':'\ud83e\udd44',
  'squid':'\ud83e\udd91',
  'stadium':'\ud83c\udfdf',
  'star':'\u2b50\ufe0f',
  'star2':'\ud83c\udf1f',
  'star_and_crescent':'\u262a\ufe0f',
  'star_of_david':'\u2721\ufe0f',
  'stars':'\ud83c\udf20',
  'station':'\ud83d\ude89',
  'statue_of_liberty':'\ud83d\uddfd',
  'steam_locomotive':'\ud83d\ude82',
  'stew':'\ud83c\udf72',
  'stop_button':'\u23f9',
  'stop_sign':'\ud83d\uded1',
  'stopwatch':'\u23f1',
  'straight_ruler':'\ud83d\udccf',
  'strawberry':'\ud83c\udf53',
  'stuck_out_tongue':'\ud83d\ude1b',
  'stuck_out_tongue_closed_eyes':'\ud83d\ude1d',
  'stuck_out_tongue_winking_eye':'\ud83d\ude1c',
  'studio_microphone':'\ud83c\udf99',
  'stuffed_flatbread':'\ud83e\udd59',
  'sun_behind_large_cloud':'\ud83c\udf25',
  'sun_behind_rain_cloud':'\ud83c\udf26',
  'sun_behind_small_cloud':'\ud83c\udf24',
  'sun_with_face':'\ud83c\udf1e',
  'sunflower':'\ud83c\udf3b',
  'sunglasses':'\ud83d\ude0e',
  'sunny':'\u2600\ufe0f',
  'sunrise':'\ud83c\udf05',
  'sunrise_over_mountains':'\ud83c\udf04',
  'surfing_man':'\ud83c\udfc4',
  'surfing_woman':'\ud83c\udfc4&zwj;\u2640\ufe0f',
  'sushi':'\ud83c\udf63',
  'suspension_railway':'\ud83d\ude9f',
  'sweat':'\ud83d\ude13',
  'sweat_drops':'\ud83d\udca6',
  'sweat_smile':'\ud83d\ude05',
  'sweet_potato':'\ud83c\udf60',
  'swimming_man':'\ud83c\udfca',
  'swimming_woman':'\ud83c\udfca&zwj;\u2640\ufe0f',
  'symbols':'\ud83d\udd23',
  'synagogue':'\ud83d\udd4d',
  'syringe':'\ud83d\udc89',
  'taco':'\ud83c\udf2e',
  'tada':'\ud83c\udf89',
  'tanabata_tree':'\ud83c\udf8b',
  'taurus':'\u2649\ufe0f',
  'taxi':'\ud83d\ude95',
  'tea':'\ud83c\udf75',
  'telephone_receiver':'\ud83d\udcde',
  'telescope':'\ud83d\udd2d',
  'tennis':'\ud83c\udfbe',
  'tent':'\u26fa\ufe0f',
  'thermometer':'\ud83c\udf21',
  'thinking':'\ud83e\udd14',
  'thought_balloon':'\ud83d\udcad',
  'ticket':'\ud83c\udfab',
  'tickets':'\ud83c\udf9f',
  'tiger':'\ud83d\udc2f',
  'tiger2':'\ud83d\udc05',
  'timer_clock':'\u23f2',
  'tipping_hand_man':'\ud83d\udc81&zwj;\u2642\ufe0f',
  'tired_face':'\ud83d\ude2b',
  'tm':'\u2122\ufe0f',
  'toilet':'\ud83d\udebd',
  'tokyo_tower':'\ud83d\uddfc',
  'tomato':'\ud83c\udf45',
  'tongue':'\ud83d\udc45',
  'top':'\ud83d\udd1d',
  'tophat':'\ud83c\udfa9',
  'tornado':'\ud83c\udf2a',
  'trackball':'\ud83d\uddb2',
  'tractor':'\ud83d\ude9c',
  'traffic_light':'\ud83d\udea5',
  'train':'\ud83d\ude8b',
  'train2':'\ud83d\ude86',
  'tram':'\ud83d\ude8a',
  'triangular_flag_on_post':'\ud83d\udea9',
  'triangular_ruler':'\ud83d\udcd0',
  'trident':'\ud83d\udd31',
  'triumph':'\ud83d\ude24',
  'trolleybus':'\ud83d\ude8e',
  'trophy':'\ud83c\udfc6',
  'tropical_drink':'\ud83c\udf79',
  'tropical_fish':'\ud83d\udc20',
  'truck':'\ud83d\ude9a',
  'trumpet':'\ud83c\udfba',
  'tulip':'\ud83c\udf37',
  'tumbler_glass':'\ud83e\udd43',
  'turkey':'\ud83e\udd83',
  'turtle':'\ud83d\udc22',
  'tv':'\ud83d\udcfa',
  'twisted_rightwards_arrows':'\ud83d\udd00',
  'two_hearts':'\ud83d\udc95',
  'two_men_holding_hands':'\ud83d\udc6c',
  'two_women_holding_hands':'\ud83d\udc6d',
  'u5272':'\ud83c\ude39',
  'u5408':'\ud83c\ude34',
  'u55b6':'\ud83c\ude3a',
  'u6307':'\ud83c\ude2f\ufe0f',
  'u6708':'\ud83c\ude37\ufe0f',
  'u6709':'\ud83c\ude36',
  'u6e80':'\ud83c\ude35',
  'u7121':'\ud83c\ude1a\ufe0f',
  'u7533':'\ud83c\ude38',
  'u7981':'\ud83c\ude32',
  'u7a7a':'\ud83c\ude33',
  'umbrella':'\u2614\ufe0f',
  'unamused':'\ud83d\ude12',
  'underage':'\ud83d\udd1e',
  'unicorn':'\ud83e\udd84',
  'unlock':'\ud83d\udd13',
  'up':'\ud83c\udd99',
  'upside_down_face':'\ud83d\ude43',
  'v':'\u270c\ufe0f',
  'vertical_traffic_light':'\ud83d\udea6',
  'vhs':'\ud83d\udcfc',
  'vibration_mode':'\ud83d\udcf3',
  'video_camera':'\ud83d\udcf9',
  'video_game':'\ud83c\udfae',
  'violin':'\ud83c\udfbb',
  'virgo':'\u264d\ufe0f',
  'volcano':'\ud83c\udf0b',
  'volleyball':'\ud83c\udfd0',
  'vs':'\ud83c\udd9a',
  'vulcan_salute':'\ud83d\udd96',
  'walking_man':'\ud83d\udeb6',
  'walking_woman':'\ud83d\udeb6&zwj;\u2640\ufe0f',
  'waning_crescent_moon':'\ud83c\udf18',
  'waning_gibbous_moon':'\ud83c\udf16',
  'warning':'\u26a0\ufe0f',
  'wastebasket':'\ud83d\uddd1',
  'watch':'\u231a\ufe0f',
  'water_buffalo':'\ud83d\udc03',
  'watermelon':'\ud83c\udf49',
  'wave':'\ud83d\udc4b',
  'wavy_dash':'\u3030\ufe0f',
  'waxing_crescent_moon':'\ud83c\udf12',
  'wc':'\ud83d\udebe',
  'weary':'\ud83d\ude29',
  'wedding':'\ud83d\udc92',
  'weight_lifting_man':'\ud83c\udfcb\ufe0f',
  'weight_lifting_woman':'\ud83c\udfcb\ufe0f&zwj;\u2640\ufe0f',
  'whale':'\ud83d\udc33',
  'whale2':'\ud83d\udc0b',
  'wheel_of_dharma':'\u2638\ufe0f',
  'wheelchair':'\u267f\ufe0f',
  'white_check_mark':'\u2705',
  'white_circle':'\u26aa\ufe0f',
  'white_flag':'\ud83c\udff3\ufe0f',
  'white_flower':'\ud83d\udcae',
  'white_large_square':'\u2b1c\ufe0f',
  'white_medium_small_square':'\u25fd\ufe0f',
  'white_medium_square':'\u25fb\ufe0f',
  'white_small_square':'\u25ab\ufe0f',
  'white_square_button':'\ud83d\udd33',
  'wilted_flower':'\ud83e\udd40',
  'wind_chime':'\ud83c\udf90',
  'wind_face':'\ud83c\udf2c',
  'wine_glass':'\ud83c\udf77',
  'wink':'\ud83d\ude09',
  'wolf':'\ud83d\udc3a',
  'woman':'\ud83d\udc69',
  'woman_artist':'\ud83d\udc69&zwj;\ud83c\udfa8',
  'woman_astronaut':'\ud83d\udc69&zwj;\ud83d\ude80',
  'woman_cartwheeling':'\ud83e\udd38&zwj;\u2640\ufe0f',
  'woman_cook':'\ud83d\udc69&zwj;\ud83c\udf73',
  'woman_facepalming':'\ud83e\udd26&zwj;\u2640\ufe0f',
  'woman_factory_worker':'\ud83d\udc69&zwj;\ud83c\udfed',
  'woman_farmer':'\ud83d\udc69&zwj;\ud83c\udf3e',
  'woman_firefighter':'\ud83d\udc69&zwj;\ud83d\ude92',
  'woman_health_worker':'\ud83d\udc69&zwj;\u2695\ufe0f',
  'woman_judge':'\ud83d\udc69&zwj;\u2696\ufe0f',
  'woman_juggling':'\ud83e\udd39&zwj;\u2640\ufe0f',
  'woman_mechanic':'\ud83d\udc69&zwj;\ud83d\udd27',
  'woman_office_worker':'\ud83d\udc69&zwj;\ud83d\udcbc',
  'woman_pilot':'\ud83d\udc69&zwj;\u2708\ufe0f',
  'woman_playing_handball':'\ud83e\udd3e&zwj;\u2640\ufe0f',
  'woman_playing_water_polo':'\ud83e\udd3d&zwj;\u2640\ufe0f',
  'woman_scientist':'\ud83d\udc69&zwj;\ud83d\udd2c',
  'woman_shrugging':'\ud83e\udd37&zwj;\u2640\ufe0f',
  'woman_singer':'\ud83d\udc69&zwj;\ud83c\udfa4',
  'woman_student':'\ud83d\udc69&zwj;\ud83c\udf93',
  'woman_teacher':'\ud83d\udc69&zwj;\ud83c\udfeb',
  'woman_technologist':'\ud83d\udc69&zwj;\ud83d\udcbb',
  'woman_with_turban':'\ud83d\udc73&zwj;\u2640\ufe0f',
  'womans_clothes':'\ud83d\udc5a',
  'womans_hat':'\ud83d\udc52',
  'women_wrestling':'\ud83e\udd3c&zwj;\u2640\ufe0f',
  'womens':'\ud83d\udeba',
  'world_map':'\ud83d\uddfa',
  'worried':'\ud83d\ude1f',
  'wrench':'\ud83d\udd27',
  'writing_hand':'\u270d\ufe0f',
  'x':'\u274c',
  'yellow_heart':'\ud83d\udc9b',
  'yen':'\ud83d\udcb4',
  'yin_yang':'\u262f\ufe0f',
  'yum':'\ud83d\ude0b',
  'zap':'\u26a1\ufe0f',
  'zipper_mouth_face':'\ud83e\udd10',
  'zzz':'\ud83d\udca4',

  /* special emojis :P */
  'octocat':  '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
  'showdown': '<span style="font-family: \'Anonymous Pro\', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>'
};

/**
 * Created by Estevao on 31-05-2015.
 */

/**
 * Showdown Converter class
 * @class
 * @param {object} [converterOptions]
 * @returns {Converter}
 */
showdown.Converter = function (converterOptions) {
  'use strict';

  var
      /**
       * Options used by this converter
       * @private
       * @type {{}}
       */
      options = {},

      /**
       * Language extensions used by this converter
       * @private
       * @type {Array}
       */
      langExtensions = [],

      /**
       * Output modifiers extensions used by this converter
       * @private
       * @type {Array}
       */
      outputModifiers = [],

      /**
       * Event listeners
       * @private
       * @type {{}}
       */
      listeners = {},

      /**
       * The flavor set in this converter
       */
      setConvFlavor = setFlavor,

      /**
       * Metadata of the document
       * @type {{parsed: {}, raw: string, format: string}}
       */
      metadata = {
        parsed: {},
        raw: '',
        format: ''
      };

  _constructor();

  /**
   * Converter constructor
   * @private
   */
  function _constructor () {
    converterOptions = converterOptions || {};

    for (var gOpt in globalOptions) {
      if (globalOptions.hasOwnProperty(gOpt)) {
        options[gOpt] = globalOptions[gOpt];
      }
    }

    // Merge options
    if (typeof converterOptions === 'object') {
      for (var opt in converterOptions) {
        if (converterOptions.hasOwnProperty(opt)) {
          options[opt] = converterOptions[opt];
        }
      }
    } else {
      throw Error('Converter expects the passed parameter to be an object, but ' + typeof converterOptions +
      ' was passed instead.');
    }

    if (options.extensions) {
      showdown.helper.forEach(options.extensions, _parseExtension);
    }
  }

  /**
   * Parse extension
   * @param {*} ext
   * @param {string} [name='']
   * @private
   */
  function _parseExtension (ext, name) {

    name = name || null;
    // If it's a string, the extension was previously loaded
    if (showdown.helper.isString(ext)) {
      ext = showdown.helper.stdExtName(ext);
      name = ext;

      // LEGACY_SUPPORT CODE
      if (showdown.extensions[ext]) {
        console.warn('DEPRECATION WARNING: ' + ext + ' is an old extension that uses a deprecated loading method.' +
          'Please inform the developer that the extension should be updated!');
        legacyExtensionLoading(showdown.extensions[ext], ext);
        return;
        // END LEGACY SUPPORT CODE

      } else if (!showdown.helper.isUndefined(extensions[ext])) {
        ext = extensions[ext];

      } else {
        throw Error('Extension "' + ext + '" could not be loaded. It was either not found or is not a valid extension.');
      }
    }

    if (typeof ext === 'function') {
      ext = ext();
    }

    if (!showdown.helper.isArray(ext)) {
      ext = [ext];
    }

    var validExt = validate(ext, name);
    if (!validExt.valid) {
      throw Error(validExt.error);
    }

    for (var i = 0; i < ext.length; ++i) {
      switch (ext[i].type) {

        case 'lang':
          langExtensions.push(ext[i]);
          break;

        case 'output':
          outputModifiers.push(ext[i]);
          break;
      }
      if (ext[i].hasOwnProperty('listeners')) {
        for (var ln in ext[i].listeners) {
          if (ext[i].listeners.hasOwnProperty(ln)) {
            listen(ln, ext[i].listeners[ln]);
          }
        }
      }
    }

  }

  /**
   * LEGACY_SUPPORT
   * @param {*} ext
   * @param {string} name
   */
  function legacyExtensionLoading (ext, name) {
    if (typeof ext === 'function') {
      ext = ext(new showdown.Converter());
    }
    if (!showdown.helper.isArray(ext)) {
      ext = [ext];
    }
    var valid = validate(ext, name);

    if (!valid.valid) {
      throw Error(valid.error);
    }

    for (var i = 0; i < ext.length; ++i) {
      switch (ext[i].type) {
        case 'lang':
          langExtensions.push(ext[i]);
          break;
        case 'output':
          outputModifiers.push(ext[i]);
          break;
        default:// should never reach here
          throw Error('Extension loader error: Type unrecognized!!!');
      }
    }
  }

  /**
   * Listen to an event
   * @param {string} name
   * @param {function} callback
   */
  function listen (name, callback) {
    if (!showdown.helper.isString(name)) {
      throw Error('Invalid argument in converter.listen() method: name must be a string, but ' + typeof name + ' given');
    }

    if (typeof callback !== 'function') {
      throw Error('Invalid argument in converter.listen() method: callback must be a function, but ' + typeof callback + ' given');
    }

    if (!listeners.hasOwnProperty(name)) {
      listeners[name] = [];
    }
    listeners[name].push(callback);
  }

  function rTrimInputText (text) {
    var rsp = text.match(/^\s*/)[0].length,
        rgx = new RegExp('^\\s{0,' + rsp + '}', 'gm');
    return text.replace(rgx, '');
  }

  /**
   * Dispatch an event
   * @private
   * @param {string} evtName Event name
   * @param {string} text Text
   * @param {{}} options Converter Options
   * @param {{}} globals
   * @returns {string}
   */
  this._dispatch = function dispatch (evtName, text, options, globals) {
    if (listeners.hasOwnProperty(evtName)) {
      for (var ei = 0; ei < listeners[evtName].length; ++ei) {
        var nText = listeners[evtName][ei](evtName, text, this, options, globals);
        if (nText && typeof nText !== 'undefined') {
          text = nText;
        }
      }
    }
    return text;
  };

  /**
   * Listen to an event
   * @param {string} name
   * @param {function} callback
   * @returns {showdown.Converter}
   */
  this.listen = function (name, callback) {
    listen(name, callback);
    return this;
  };

  /**
   * Converts a markdown string into HTML
   * @param {string} text
   * @returns {*}
   */
  this.makeHtml = function (text) {
    //check if text is not falsy
    if (!text) {
      return text;
    }

    var globals = {
      gHtmlBlocks:     [],
      gHtmlMdBlocks:   [],
      gHtmlSpans:      [],
      gUrls:           {},
      gTitles:         {},
      gDimensions:     {},
      gListLevel:      0,
      hashLinkCounts:  {},
      langExtensions:  langExtensions,
      outputModifiers: outputModifiers,
      converter:       this,
      ghCodeBlocks:    [],
      metadata: {
        parsed: {},
        raw: '',
        format: ''
      }
    };

    // This lets us use ¨ trema as an escape char to avoid md5 hashes
    // The choice of character is arbitrary; anything that isn't
    // magic in Markdown will work.
    text = text.replace(/¨/g, '¨T');

    // Replace $ with ¨D
    // RegExp interprets $ as a special character
    // when it's in a replacement string
    text = text.replace(/\$/g, '¨D');

    // Standardize line endings
    text = text.replace(/\r\n/g, '\n'); // DOS to Unix
    text = text.replace(/\r/g, '\n'); // Mac to Unix

    // Stardardize line spaces
    text = text.replace(/\u00A0/g, '&nbsp;');

    if (options.smartIndentationFix) {
      text = rTrimInputText(text);
    }

    // Make sure text begins and ends with a couple of newlines:
    text = '\n\n' + text + '\n\n';

    // detab
    text = showdown.subParser('detab')(text, options, globals);

    /**
     * Strip any lines consisting only of spaces and tabs.
     * This makes subsequent regexs easier to write, because we can
     * match consecutive blank lines with /\n+/ instead of something
     * contorted like /[ \t]*\n+/
     */
    text = text.replace(/^[ \t]+$/mg, '');

    //run languageExtensions
    showdown.helper.forEach(langExtensions, function (ext) {
      text = showdown.subParser('runExtension')(ext, text, options, globals);
    });

    // run the sub parsers
    text = showdown.subParser('metadata')(text, options, globals);
    text = showdown.subParser('hashPreCodeTags')(text, options, globals);
    text = showdown.subParser('githubCodeBlocks')(text, options, globals);
    text = showdown.subParser('hashHTMLBlocks')(text, options, globals);
    text = showdown.subParser('hashCodeTags')(text, options, globals);
    text = showdown.subParser('stripLinkDefinitions')(text, options, globals);
    text = showdown.subParser('blockGamut')(text, options, globals);
    text = showdown.subParser('unhashHTMLSpans')(text, options, globals);
    text = showdown.subParser('unescapeSpecialChars')(text, options, globals);

    // attacklab: Restore dollar signs
    text = text.replace(/¨D/g, '$$');

    // attacklab: Restore tremas
    text = text.replace(/¨T/g, '¨');

    // render a complete html document instead of a partial if the option is enabled
    text = showdown.subParser('completeHTMLDocument')(text, options, globals);

    // Run output modifiers
    showdown.helper.forEach(outputModifiers, function (ext) {
      text = showdown.subParser('runExtension')(ext, text, options, globals);
    });

    // update metadata
    metadata = globals.metadata;
    return text;
  };

  /**
   * Converts an HTML string into a markdown string
   * @param src
   * @param [HTMLParser] A WHATWG DOM and HTML parser, such as JSDOM. If none is supplied, window.document will be used.
   * @returns {string}
   */
  this.makeMarkdown = this.makeMd = function (src, HTMLParser) {

    // replace \r\n with \n
    src = src.replace(/\r\n/g, '\n');
    src = src.replace(/\r/g, '\n'); // old macs

    // due to an edge case, we need to find this: > <
    // to prevent removing of non silent white spaces
    // ex: <em>this is</em> <strong>sparta</strong>
    src = src.replace(/>[ \t]+</, '>¨NBSP;<');

    if (!HTMLParser) {
      if (window && window.document) {
        HTMLParser = window.document;
      } else {
        throw new Error('HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM');
      }
    }

    var doc = HTMLParser.createElement('div');
    doc.innerHTML = src;

    var globals = {
      preList: substitutePreCodeTags(doc)
    };

    // remove all newlines and collapse spaces
    clean(doc);

    // some stuff, like accidental reference links must now be escaped
    // TODO
    // doc.innerHTML = doc.innerHTML.replace(/\[[\S\t ]]/);

    var nodes = doc.childNodes,
        mdDoc = '';

    for (var i = 0; i < nodes.length; i++) {
      mdDoc += showdown.subParser('makeMarkdown.node')(nodes[i], globals);
    }

    function clean (node) {
      for (var n = 0; n < node.childNodes.length; ++n) {
        var child = node.childNodes[n];
        if (child.nodeType === 3) {
          if (!/\S/.test(child.nodeValue)) {
            node.removeChild(child);
            --n;
          } else {
            child.nodeValue = child.nodeValue.split('\n').join(' ');
            child.nodeValue = child.nodeValue.replace(/(\s)+/g, '$1');
          }
        } else if (child.nodeType === 1) {
          clean(child);
        }
      }
    }

    // find all pre tags and replace contents with placeholder
    // we need this so that we can remove all indentation from html
    // to ease up parsing
    function substitutePreCodeTags (doc) {

      var pres = doc.querySelectorAll('pre'),
          presPH = [];

      for (var i = 0; i < pres.length; ++i) {

        if (pres[i].childElementCount === 1 && pres[i].firstChild.tagName.toLowerCase() === 'code') {
          var content = pres[i].firstChild.innerHTML.trim(),
              language = pres[i].firstChild.getAttribute('data-language') || '';

          // if data-language attribute is not defined, then we look for class language-*
          if (language === '') {
            var classes = pres[i].firstChild.className.split(' ');
            for (var c = 0; c < classes.length; ++c) {
              var matches = classes[c].match(/^language-(.+)$/);
              if (matches !== null) {
                language = matches[1];
                break;
              }
            }
          }

          // unescape html entities in content
          content = showdown.helper.unescapeHTMLEntities(content);

          presPH.push(content);
          pres[i].outerHTML = '<precode language="' + language + '" precodenum="' + i.toString() + '"></precode>';
        } else {
          presPH.push(pres[i].innerHTML);
          pres[i].innerHTML = '';
          pres[i].setAttribute('prenum', i.toString());
        }
      }
      return presPH;
    }

    return mdDoc;
  };

  /**
   * Set an option of this Converter instance
   * @param {string} key
   * @param {*} value
   */
  this.setOption = function (key, value) {
    options[key] = value;
  };

  /**
   * Get the option of this Converter instance
   * @param {string} key
   * @returns {*}
   */
  this.getOption = function (key) {
    return options[key];
  };

  /**
   * Get the options of this Converter instance
   * @returns {{}}
   */
  this.getOptions = function () {
    return options;
  };

  /**
   * Add extension to THIS converter
   * @param {{}} extension
   * @param {string} [name=null]
   */
  this.addExtension = function (extension, name) {
    name = name || null;
    _parseExtension(extension, name);
  };

  /**
   * Use a global registered extension with THIS converter
   * @param {string} extensionName Name of the previously registered extension
   */
  this.useExtension = function (extensionName) {
    _parseExtension(extensionName);
  };

  /**
   * Set the flavor THIS converter should use
   * @param {string} name
   */
  this.setFlavor = function (name) {
    if (!flavor.hasOwnProperty(name)) {
      throw Error(name + ' flavor was not found');
    }
    var preset = flavor[name];
    setConvFlavor = name;
    for (var option in preset) {
      if (preset.hasOwnProperty(option)) {
        options[option] = preset[option];
      }
    }
  };

  /**
   * Get the currently set flavor of this converter
   * @returns {string}
   */
  this.getFlavor = function () {
    return setConvFlavor;
  };

  /**
   * Remove an extension from THIS converter.
   * Note: This is a costly operation. It's better to initialize a new converter
   * and specify the extensions you wish to use
   * @param {Array} extension
   */
  this.removeExtension = function (extension) {
    if (!showdown.helper.isArray(extension)) {
      extension = [extension];
    }
    for (var a = 0; a < extension.length; ++a) {
      var ext = extension[a];
      for (var i = 0; i < langExtensions.length; ++i) {
        if (langExtensions[i] === ext) {
          langExtensions[i].splice(i, 1);
        }
      }
      for (var ii = 0; ii < outputModifiers.length; ++i) {
        if (outputModifiers[ii] === ext) {
          outputModifiers[ii].splice(i, 1);
        }
      }
    }
  };

  /**
   * Get all extension of THIS converter
   * @returns {{language: Array, output: Array}}
   */
  this.getAllExtensions = function () {
    return {
      language: langExtensions,
      output: outputModifiers
    };
  };

  /**
   * Get the metadata of the previously parsed document
   * @param raw
   * @returns {string|{}}
   */
  this.getMetadata = function (raw) {
    if (raw) {
      return metadata.raw;
    } else {
      return metadata.parsed;
    }
  };

  /**
   * Get the metadata format of the previously parsed document
   * @returns {string}
   */
  this.getMetadataFormat = function () {
    return metadata.format;
  };

  /**
   * Private: set a single key, value metadata pair
   * @param {string} key
   * @param {string} value
   */
  this._setMetadataPair = function (key, value) {
    metadata.parsed[key] = value;
  };

  /**
   * Private: set metadata format
   * @param {string} format
   */
  this._setMetadataFormat = function (format) {
    metadata.format = format;
  };

  /**
   * Private: set metadata raw text
   * @param {string} raw
   */
  this._setMetadataRaw = function (raw) {
    metadata.raw = raw;
  };
};

/**
 * Turn Markdown link shortcuts into XHTML <a> tags.
 */
showdown.subParser('anchors', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('anchors.before', text, options, globals);

  var writeAnchorTag = function (wholeMatch, linkText, linkId, url, m5, m6, title) {
    if (showdown.helper.isUndefined(title)) {
      title = '';
    }
    linkId = linkId.toLowerCase();

    // Special case for explicit empty url
    if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
      url = '';
    } else if (!url) {
      if (!linkId) {
        // lower-case and turn embedded newlines into spaces
        linkId = linkText.toLowerCase().replace(/ ?\n/g, ' ');
      }
      url = '#' + linkId;

      if (!showdown.helper.isUndefined(globals.gUrls[linkId])) {
        url = globals.gUrls[linkId];
        if (!showdown.helper.isUndefined(globals.gTitles[linkId])) {
          title = globals.gTitles[linkId];
        }
      } else {
        return wholeMatch;
      }
    }

    //url = showdown.helper.escapeCharacters(url, '*_', false); // replaced line to improve performance
    url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);

    var result = '<a href="' + url + '"';

    if (title !== '' && title !== null) {
      title = title.replace(/"/g, '&quot;');
      //title = showdown.helper.escapeCharacters(title, '*_', false); // replaced line to improve performance
      title = title.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
      result += ' title="' + title + '"';
    }

    // optionLinksInNewWindow only applies
    // to external links. Hash links (#) open in same page
    if (options.openLinksInNewWindow && !/^#/.test(url)) {
      // escaped _
      result += ' rel="noopener noreferrer" target="¨E95Eblank"';
    }

    result += '>' + linkText + '</a>';

    return result;
  };

  // First, handle reference-style links: [link text] [id]
  text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, writeAnchorTag);

  // Next, inline-style links: [link text](url "optional title")
  // cases with crazy urls like ./image/cat1).png
  text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
    writeAnchorTag);

  // normal cases
  text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
    writeAnchorTag);

  // handle reference-style shortcuts: [link text]
  // These must come last in case you've also got [link test][1]
  // or [link test](/foo)
  text = text.replace(/\[([^\[\]]+)]()()()()()/g, writeAnchorTag);

  // Lastly handle GithubMentions if option is enabled
  if (options.ghMentions) {
    text = text.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function (wm, st, escape, mentions, username) {
      if (escape === '\\') {
        return st + mentions;
      }

      //check if options.ghMentionsLink is a string
      if (!showdown.helper.isString(options.ghMentionsLink)) {
        throw new Error('ghMentionsLink option must be a string');
      }
      var lnk = options.ghMentionsLink.replace(/\{u}/g, username),
          target = '';
      if (options.openLinksInNewWindow) {
        target = ' rel="noopener noreferrer" target="¨E95Eblank"';
      }
      return st + '<a href="' + lnk + '"' + target + '>' + mentions + '</a>';
    });
  }

  text = globals.converter._dispatch('anchors.after', text, options, globals);
  return text;
});

// url allowed chars [a-z\d_.~:/?#[]@!$&'()*+,;=-]

var simpleURLRegex  = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,
    simpleURLRegex2 = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,
    delimUrlRegex   = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,
    simpleMailRegex = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi,
    delimMailRegex  = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,

    replaceLink = function (options) {
      'use strict';
      return function (wm, leadingMagicChars, link, m2, m3, trailingPunctuation, trailingMagicChars) {
        link = link.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
        var lnkTxt = link,
            append = '',
            target = '',
            lmc    = leadingMagicChars || '',
            tmc    = trailingMagicChars || '';
        if (/^www\./i.test(link)) {
          link = link.replace(/^www\./i, 'http://www.');
        }
        if (options.excludeTrailingPunctuationFromURLs && trailingPunctuation) {
          append = trailingPunctuation;
        }
        if (options.openLinksInNewWindow) {
          target = ' rel="noopener noreferrer" target="¨E95Eblank"';
        }
        return lmc + '<a href="' + link + '"' + target + '>' + lnkTxt + '</a>' + append + tmc;
      };
    },

    replaceMail = function (options, globals) {
      'use strict';
      return function (wholeMatch, b, mail) {
        var href = 'mailto:';
        b = b || '';
        mail = showdown.subParser('unescapeSpecialChars')(mail, options, globals);
        if (options.encodeEmails) {
          href = showdown.helper.encodeEmailAddress(href + mail);
          mail = showdown.helper.encodeEmailAddress(mail);
        } else {
          href = href + mail;
        }
        return b + '<a href="' + href + '">' + mail + '</a>';
      };
    };

showdown.subParser('autoLinks', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('autoLinks.before', text, options, globals);

  text = text.replace(delimUrlRegex, replaceLink(options));
  text = text.replace(delimMailRegex, replaceMail(options, globals));

  text = globals.converter._dispatch('autoLinks.after', text, options, globals);

  return text;
});

showdown.subParser('simplifiedAutoLinks', function (text, options, globals) {
  'use strict';

  if (!options.simplifiedAutoLink) {
    return text;
  }

  text = globals.converter._dispatch('simplifiedAutoLinks.before', text, options, globals);

  if (options.excludeTrailingPunctuationFromURLs) {
    text = text.replace(simpleURLRegex2, replaceLink(options));
  } else {
    text = text.replace(simpleURLRegex, replaceLink(options));
  }
  text = text.replace(simpleMailRegex, replaceMail(options, globals));

  text = globals.converter._dispatch('simplifiedAutoLinks.after', text, options, globals);

  return text;
});

/**
 * These are all the transformations that form block-level
 * tags like paragraphs, headers, and list items.
 */
showdown.subParser('blockGamut', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('blockGamut.before', text, options, globals);

  // we parse blockquotes first so that we can have headings and hrs
  // inside blockquotes
  text = showdown.subParser('blockQuotes')(text, options, globals);
  text = showdown.subParser('headers')(text, options, globals);

  // Do Horizontal Rules:
  text = showdown.subParser('horizontalRule')(text, options, globals);

  text = showdown.subParser('lists')(text, options, globals);
  text = showdown.subParser('codeBlocks')(text, options, globals);
  text = showdown.subParser('tables')(text, options, globals);

  // We already ran _HashHTMLBlocks() before, in Markdown(), but that
  // was to escape raw HTML in the original Markdown source. This time,
  // we're escaping the markup we've just created, so that we don't wrap
  // <p> tags around block-level tags.
  text = showdown.subParser('hashHTMLBlocks')(text, options, globals);
  text = showdown.subParser('paragraphs')(text, options, globals);

  text = globals.converter._dispatch('blockGamut.after', text, options, globals);

  return text;
});

showdown.subParser('blockQuotes', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('blockQuotes.before', text, options, globals);

  // add a couple extra lines after the text and endtext mark
  text = text + '\n\n';

  var rgx = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;

  if (options.splitAdjacentBlockquotes) {
    rgx = /^ {0,3}>[\s\S]*?(?:\n\n)/gm;
  }

  text = text.replace(rgx, function (bq) {
    // attacklab: hack around Konqueror 3.5.4 bug:
    // "----------bug".replace(/^-/g,"") == "bug"
    bq = bq.replace(/^[ \t]*>[ \t]?/gm, ''); // trim one level of quoting

    // attacklab: clean up hack
    bq = bq.replace(/¨0/g, '');

    bq = bq.replace(/^[ \t]+$/gm, ''); // trim whitespace-only lines
    bq = showdown.subParser('githubCodeBlocks')(bq, options, globals);
    bq = showdown.subParser('blockGamut')(bq, options, globals); // recurse

    bq = bq.replace(/(^|\n)/g, '$1  ');
    // These leading spaces screw with <pre> content, so we need to fix that:
    bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function (wholeMatch, m1) {
      var pre = m1;
      // attacklab: hack around Konqueror 3.5.4 bug:
      pre = pre.replace(/^  /mg, '¨0');
      pre = pre.replace(/¨0/g, '');
      return pre;
    });

    return showdown.subParser('hashBlock')('<blockquote>\n' + bq + '\n</blockquote>', options, globals);
  });

  text = globals.converter._dispatch('blockQuotes.after', text, options, globals);
  return text;
});

/**
 * Process Markdown `<pre><code>` blocks.
 */
showdown.subParser('codeBlocks', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('codeBlocks.before', text, options, globals);

  // sentinel workarounds for lack of \A and \Z, safari\khtml bug
  text += '¨0';

  var pattern = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
  text = text.replace(pattern, function (wholeMatch, m1, m2) {
    var codeblock = m1,
        nextChar = m2,
        end = '\n';

    codeblock = showdown.subParser('outdent')(codeblock, options, globals);
    codeblock = showdown.subParser('encodeCode')(codeblock, options, globals);
    codeblock = showdown.subParser('detab')(codeblock, options, globals);
    codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines
    codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing newlines

    if (options.omitExtraWLInCodeBlocks) {
      end = '';
    }

    codeblock = '<pre><code>' + codeblock + end + '</code></pre>';

    return showdown.subParser('hashBlock')(codeblock, options, globals) + nextChar;
  });

  // strip sentinel
  text = text.replace(/¨0/, '');

  text = globals.converter._dispatch('codeBlocks.after', text, options, globals);
  return text;
});

/**
 *
 *   *  Backtick quotes are used for <code></code> spans.
 *
 *   *  You can use multiple backticks as the delimiters if you want to
 *     include literal backticks in the code span. So, this input:
 *
 *         Just type ``foo `bar` baz`` at the prompt.
 *
 *       Will translate to:
 *
 *         <p>Just type <code>foo `bar` baz</code> at the prompt.</p>
 *
 *    There's no arbitrary limit to the number of backticks you
 *    can use as delimters. If you need three consecutive backticks
 *    in your code, use four for delimiters, etc.
 *
 *  *  You can use spaces to get literal backticks at the edges:
 *
 *         ... type `` `bar` `` ...
 *
 *       Turns to:
 *
 *         ... type <code>`bar`</code> ...
 */
showdown.subParser('codeSpans', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('codeSpans.before', text, options, globals);

  if (typeof text === 'undefined') {
    text = '';
  }
  text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
    function (wholeMatch, m1, m2, m3) {
      var c = m3;
      c = c.replace(/^([ \t]*)/g, '');	// leading whitespace
      c = c.replace(/[ \t]*$/g, '');	// trailing whitespace
      c = showdown.subParser('encodeCode')(c, options, globals);
      c = m1 + '<code>' + c + '</code>';
      c = showdown.subParser('hashHTMLSpans')(c, options, globals);
      return c;
    }
  );

  text = globals.converter._dispatch('codeSpans.after', text, options, globals);
  return text;
});

/**
 * Create a full HTML document from the processed markdown
 */
showdown.subParser('completeHTMLDocument', function (text, options, globals) {
  'use strict';

  if (!options.completeHTMLDocument) {
    return text;
  }

  text = globals.converter._dispatch('completeHTMLDocument.before', text, options, globals);

  var doctype = 'html',
      doctypeParsed = '<!DOCTYPE HTML>\n',
      title = '',
      charset = '<meta charset="utf-8">\n',
      lang = '',
      metadata = '';

  if (typeof globals.metadata.parsed.doctype !== 'undefined') {
    doctypeParsed = '<!DOCTYPE ' +  globals.metadata.parsed.doctype + '>\n';
    doctype = globals.metadata.parsed.doctype.toString().toLowerCase();
    if (doctype === 'html' || doctype === 'html5') {
      charset = '<meta charset="utf-8">';
    }
  }

  for (var meta in globals.metadata.parsed) {
    if (globals.metadata.parsed.hasOwnProperty(meta)) {
      switch (meta.toLowerCase()) {
        case 'doctype':
          break;

        case 'title':
          title = '<title>' +  globals.metadata.parsed.title + '</title>\n';
          break;

        case 'charset':
          if (doctype === 'html' || doctype === 'html5') {
            charset = '<meta charset="' + globals.metadata.parsed.charset + '">\n';
          } else {
            charset = '<meta name="charset" content="' + globals.metadata.parsed.charset + '">\n';
          }
          break;

        case 'language':
        case 'lang':
          lang = ' lang="' + globals.metadata.parsed[meta] + '"';
          metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
          break;

        default:
          metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
      }
    }
  }

  text = doctypeParsed + '<html' + lang + '>\n<head>\n' + title + charset + metadata + '</head>\n<body>\n' + text.trim() + '\n</body>\n</html>';

  text = globals.converter._dispatch('completeHTMLDocument.after', text, options, globals);
  return text;
});

/**
 * Convert all tabs to spaces
 */
showdown.subParser('detab', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('detab.before', text, options, globals);

  // expand first n-1 tabs
  text = text.replace(/\t(?=\t)/g, '    '); // g_tab_width

  // replace the nth with two sentinels
  text = text.replace(/\t/g, '¨A¨B');

  // use the sentinel to anchor our regex so it doesn't explode
  text = text.replace(/¨B(.+?)¨A/g, function (wholeMatch, m1) {
    var leadingText = m1,
        numSpaces = 4 - leadingText.length % 4;  // g_tab_width

    // there *must* be a better way to do this:
    for (var i = 0; i < numSpaces; i++) {
      leadingText += ' ';
    }

    return leadingText;
  });

  // clean up sentinels
  text = text.replace(/¨A/g, '    ');  // g_tab_width
  text = text.replace(/¨B/g, '');

  text = globals.converter._dispatch('detab.after', text, options, globals);
  return text;
});

showdown.subParser('ellipsis', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('ellipsis.before', text, options, globals);

  text = text.replace(/\.\.\./g, '…');

  text = globals.converter._dispatch('ellipsis.after', text, options, globals);

  return text;
});

/**
 * Turn emoji codes into emojis
 *
 * List of supported emojis: https://github.com/showdownjs/showdown/wiki/Emojis
 */
showdown.subParser('emoji', function (text, options, globals) {
  'use strict';

  if (!options.emoji) {
    return text;
  }

  text = globals.converter._dispatch('emoji.before', text, options, globals);

  var emojiRgx = /:([\S]+?):/g;

  text = text.replace(emojiRgx, function (wm, emojiCode) {
    if (showdown.helper.emojis.hasOwnProperty(emojiCode)) {
      return showdown.helper.emojis[emojiCode];
    }
    return wm;
  });

  text = globals.converter._dispatch('emoji.after', text, options, globals);

  return text;
});

/**
 * Smart processing for ampersands and angle brackets that need to be encoded.
 */
showdown.subParser('encodeAmpsAndAngles', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('encodeAmpsAndAngles.before', text, options, globals);

  // Ampersand-encoding based entirely on Nat Irons's Amputator MT plugin:
  // http://bumppo.net/projects/amputator/
  text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, '&amp;');

  // Encode naked <'s
  text = text.replace(/<(?![a-z\/?$!])/gi, '&lt;');

  // Encode <
  text = text.replace(/</g, '&lt;');

  // Encode >
  text = text.replace(/>/g, '&gt;');

  text = globals.converter._dispatch('encodeAmpsAndAngles.after', text, options, globals);
  return text;
});

/**
 * Returns the string, with after processing the following backslash escape sequences.
 *
 * attacklab: The polite way to do this is with the new escapeCharacters() function:
 *
 *    text = escapeCharacters(text,"\\",true);
 *    text = escapeCharacters(text,"`*_{}[]()>#+-.!",true);
 *
 * ...but we're sidestepping its use of the (slow) RegExp constructor
 * as an optimization for Firefox.  This function gets called a LOT.
 */
showdown.subParser('encodeBackslashEscapes', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('encodeBackslashEscapes.before', text, options, globals);

  text = text.replace(/\\(\\)/g, showdown.helper.escapeCharactersCallback);
  text = text.replace(/\\([`*_{}\[\]()>#+.!~=|-])/g, showdown.helper.escapeCharactersCallback);

  text = globals.converter._dispatch('encodeBackslashEscapes.after', text, options, globals);
  return text;
});

/**
 * Encode/escape certain characters inside Markdown code runs.
 * The point is that in code, these characters are literals,
 * and lose their special Markdown meanings.
 */
showdown.subParser('encodeCode', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('encodeCode.before', text, options, globals);

  // Encode all ampersands; HTML entities are not
  // entities within a Markdown code span.
  text = text
    .replace(/&/g, '&amp;')
  // Do the angle bracket song and dance:
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  // Now, escape characters that are magic in Markdown:
    .replace(/([*_{}\[\]\\=~-])/g, showdown.helper.escapeCharactersCallback);

  text = globals.converter._dispatch('encodeCode.after', text, options, globals);
  return text;
});

/**
 * Within tags -- meaning between < and > -- encode [\ ` * _ ~ =] so they
 * don't conflict with their use in Markdown for code, italics and strong.
 */
showdown.subParser('escapeSpecialCharsWithinTagAttributes', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('escapeSpecialCharsWithinTagAttributes.before', text, options, globals);

  // Build a regex to find HTML tags.
  var tags     = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,
      comments = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;

  text = text.replace(tags, function (wholeMatch) {
    return wholeMatch
      .replace(/(.)<\/?code>(?=.)/g, '$1`')
      .replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
  });

  text = text.replace(comments, function (wholeMatch) {
    return wholeMatch
      .replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
  });

  text = globals.converter._dispatch('escapeSpecialCharsWithinTagAttributes.after', text, options, globals);
  return text;
});

/**
 * Handle github codeblocks prior to running HashHTML so that
 * HTML contained within the codeblock gets escaped properly
 * Example:
 * ```ruby
 *     def hello_world(x)
 *       puts "Hello, #{x}"
 *     end
 * ```
 */
showdown.subParser('githubCodeBlocks', function (text, options, globals) {
  'use strict';

  // early exit if option is not enabled
  if (!options.ghCodeBlocks) {
    return text;
  }

  text = globals.converter._dispatch('githubCodeBlocks.before', text, options, globals);

  text += '¨0';

  text = text.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function (wholeMatch, delim, language, codeblock) {
    var end = (options.omitExtraWLInCodeBlocks) ? '' : '\n';

    // First parse the github code block
    codeblock = showdown.subParser('encodeCode')(codeblock, options, globals);
    codeblock = showdown.subParser('detab')(codeblock, options, globals);
    codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines
    codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing whitespace

    codeblock = '<pre><code' + (language ? ' class="' + language + ' language-' + language + '"' : '') + '>' + codeblock + end + '</code></pre>';

    codeblock = showdown.subParser('hashBlock')(codeblock, options, globals);

    // Since GHCodeblocks can be false positives, we need to
    // store the primitive text and the parsed text in a global var,
    // and then return a token
    return '\n\n¨G' + (globals.ghCodeBlocks.push({text: wholeMatch, codeblock: codeblock}) - 1) + 'G\n\n';
  });

  // attacklab: strip sentinel
  text = text.replace(/¨0/, '');

  return globals.converter._dispatch('githubCodeBlocks.after', text, options, globals);
});

showdown.subParser('hashBlock', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('hashBlock.before', text, options, globals);
  text = text.replace(/(^\n+|\n+$)/g, '');
  text = '\n\n¨K' + (globals.gHtmlBlocks.push(text) - 1) + 'K\n\n';
  text = globals.converter._dispatch('hashBlock.after', text, options, globals);
  return text;
});

/**
 * Hash and escape <code> elements that should not be parsed as markdown
 */
showdown.subParser('hashCodeTags', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('hashCodeTags.before', text, options, globals);

  var repFunc = function (wholeMatch, match, left, right) {
    var codeblock = left + showdown.subParser('encodeCode')(match, options, globals) + right;
    return '¨C' + (globals.gHtmlSpans.push(codeblock) - 1) + 'C';
  };

  // Hash naked <code>
  text = showdown.helper.replaceRecursiveRegExp(text, repFunc, '<code\\b[^>]*>', '</code>', 'gim');

  text = globals.converter._dispatch('hashCodeTags.after', text, options, globals);
  return text;
});

showdown.subParser('hashElement', function (text, options, globals) {
  'use strict';

  return function (wholeMatch, m1) {
    var blockText = m1;

    // Undo double lines
    blockText = blockText.replace(/\n\n/g, '\n');
    blockText = blockText.replace(/^\n/, '');

    // strip trailing blank lines
    blockText = blockText.replace(/\n+$/g, '');

    // Replace the element text with a marker ("¨KxK" where x is its key)
    blockText = '\n\n¨K' + (globals.gHtmlBlocks.push(blockText) - 1) + 'K\n\n';

    return blockText;
  };
});

showdown.subParser('hashHTMLBlocks', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('hashHTMLBlocks.before', text, options, globals);

  var blockTags = [
        'pre',
        'div',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'blockquote',
        'table',
        'dl',
        'ol',
        'ul',
        'script',
        'noscript',
        'form',
        'fieldset',
        'iframe',
        'math',
        'style',
        'section',
        'header',
        'footer',
        'nav',
        'article',
        'aside',
        'address',
        'audio',
        'canvas',
        'figure',
        'hgroup',
        'output',
        'video',
        'p'
      ],
      repFunc = function (wholeMatch, match, left, right) {
        var txt = wholeMatch;
        // check if this html element is marked as markdown
        // if so, it's contents should be parsed as markdown
        if (left.search(/\bmarkdown\b/) !== -1) {
          txt = left + globals.converter.makeHtml(match) + right;
        }
        return '\n\n¨K' + (globals.gHtmlBlocks.push(txt) - 1) + 'K\n\n';
      };

  if (options.backslashEscapesHTMLTags) {
    // encode backslash escaped HTML tags
    text = text.replace(/\\<(\/?[^>]+?)>/g, function (wm, inside) {
      return '&lt;' + inside + '&gt;';
    });
  }

  // hash HTML Blocks
  for (var i = 0; i < blockTags.length; ++i) {

    var opTagPos,
        rgx1     = new RegExp('^ {0,3}(<' + blockTags[i] + '\\b[^>]*>)', 'im'),
        patLeft  = '<' + blockTags[i] + '\\b[^>]*>',
        patRight = '</' + blockTags[i] + '>';
    // 1. Look for the first position of the first opening HTML tag in the text
    while ((opTagPos = showdown.helper.regexIndexOf(text, rgx1)) !== -1) {

      // if the HTML tag is \ escaped, we need to escape it and break


      //2. Split the text in that position
      var subTexts = showdown.helper.splitAtIndex(text, opTagPos),
          //3. Match recursively
          newSubText1 = showdown.helper.replaceRecursiveRegExp(subTexts[1], repFunc, patLeft, patRight, 'im');

      // prevent an infinite loop
      if (newSubText1 === subTexts[1]) {
        break;
      }
      text = subTexts[0].concat(newSubText1);
    }
  }
  // HR SPECIAL CASE
  text = text.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
    showdown.subParser('hashElement')(text, options, globals));

  // Special case for standalone HTML comments
  text = showdown.helper.replaceRecursiveRegExp(text, function (txt) {
    return '\n\n¨K' + (globals.gHtmlBlocks.push(txt) - 1) + 'K\n\n';
  }, '^ {0,3}<!--', '-->', 'gm');

  // PHP and ASP-style processor instructions (<?...?> and <%...%>)
  text = text.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
    showdown.subParser('hashElement')(text, options, globals));

  text = globals.converter._dispatch('hashHTMLBlocks.after', text, options, globals);
  return text;
});

/**
 * Hash span elements that should not be parsed as markdown
 */
showdown.subParser('hashHTMLSpans', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('hashHTMLSpans.before', text, options, globals);

  function hashHTMLSpan (html) {
    return '¨C' + (globals.gHtmlSpans.push(html) - 1) + 'C';
  }

  // Hash Self Closing tags
  text = text.replace(/<[^>]+?\/>/gi, function (wm) {
    return hashHTMLSpan(wm);
  });

  // Hash tags without properties
  text = text.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function (wm) {
    return hashHTMLSpan(wm);
  });

  // Hash tags with properties
  text = text.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function (wm) {
    return hashHTMLSpan(wm);
  });

  // Hash self closing tags without />
  text = text.replace(/<[^>]+?>/gi, function (wm) {
    return hashHTMLSpan(wm);
  });

  /*showdown.helper.matchRecursiveRegExp(text, '<code\\b[^>]*>', '</code>', 'gi');*/

  text = globals.converter._dispatch('hashHTMLSpans.after', text, options, globals);
  return text;
});

/**
 * Unhash HTML spans
 */
showdown.subParser('unhashHTMLSpans', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('unhashHTMLSpans.before', text, options, globals);

  for (var i = 0; i < globals.gHtmlSpans.length; ++i) {
    var repText = globals.gHtmlSpans[i],
        // limiter to prevent infinite loop (assume 10 as limit for recurse)
        limit = 0;

    while (/¨C(\d+)C/.test(repText)) {
      var num = RegExp.$1;
      repText = repText.replace('¨C' + num + 'C', globals.gHtmlSpans[num]);
      if (limit === 10) {
        console.error('maximum nesting of 10 spans reached!!!');
        break;
      }
      ++limit;
    }
    text = text.replace('¨C' + i + 'C', repText);
  }

  text = globals.converter._dispatch('unhashHTMLSpans.after', text, options, globals);
  return text;
});

/**
 * Hash and escape <pre><code> elements that should not be parsed as markdown
 */
showdown.subParser('hashPreCodeTags', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('hashPreCodeTags.before', text, options, globals);

  var repFunc = function (wholeMatch, match, left, right) {
    // encode html entities
    var codeblock = left + showdown.subParser('encodeCode')(match, options, globals) + right;
    return '\n\n¨G' + (globals.ghCodeBlocks.push({text: wholeMatch, codeblock: codeblock}) - 1) + 'G\n\n';
  };

  // Hash <pre><code>
  text = showdown.helper.replaceRecursiveRegExp(text, repFunc, '^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>', '^ {0,3}</code>\\s*</pre>', 'gim');

  text = globals.converter._dispatch('hashPreCodeTags.after', text, options, globals);
  return text;
});

showdown.subParser('headers', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('headers.before', text, options, globals);

  var headerLevelStart = (isNaN(parseInt(options.headerLevelStart))) ? 1 : parseInt(options.headerLevelStart),

      // Set text-style headers:
      //	Header 1
      //	========
      //
      //	Header 2
      //	--------
      //
      setextRegexH1 = (options.smoothLivePreview) ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
      setextRegexH2 = (options.smoothLivePreview) ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;

  text = text.replace(setextRegexH1, function (wholeMatch, m1) {

    var spanGamut = showdown.subParser('spanGamut')(m1, options, globals),
        hID = (options.noHeaderId) ? '' : ' id="' + headerId(m1) + '"',
        hLevel = headerLevelStart,
        hashBlock = '<h' + hLevel + hID + '>' + spanGamut + '</h' + hLevel + '>';
    return showdown.subParser('hashBlock')(hashBlock, options, globals);
  });

  text = text.replace(setextRegexH2, function (matchFound, m1) {
    var spanGamut = showdown.subParser('spanGamut')(m1, options, globals),
        hID = (options.noHeaderId) ? '' : ' id="' + headerId(m1) + '"',
        hLevel = headerLevelStart + 1,
        hashBlock = '<h' + hLevel + hID + '>' + spanGamut + '</h' + hLevel + '>';
    return showdown.subParser('hashBlock')(hashBlock, options, globals);
  });

  // atx-style headers:
  //  # Header 1
  //  ## Header 2
  //  ## Header 2 with closing hashes ##
  //  ...
  //  ###### Header 6
  //
  var atxStyle = (options.requireSpaceBeforeHeadingText) ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;

  text = text.replace(atxStyle, function (wholeMatch, m1, m2) {
    var hText = m2;
    if (options.customizedHeaderId) {
      hText = m2.replace(/\s?\{([^{]+?)}\s*$/, '');
    }

    var span = showdown.subParser('spanGamut')(hText, options, globals),
        hID = (options.noHeaderId) ? '' : ' id="' + headerId(m2) + '"',
        hLevel = headerLevelStart - 1 + m1.length,
        header = '<h' + hLevel + hID + '>' + span + '</h' + hLevel + '>';

    return showdown.subParser('hashBlock')(header, options, globals);
  });

  function headerId (m) {
    var title,
        prefix;

    // It is separate from other options to allow combining prefix and customized
    if (options.customizedHeaderId) {
      var match = m.match(/\{([^{]+?)}\s*$/);
      if (match && match[1]) {
        m = match[1];
      }
    }

    title = m;

    // Prefix id to prevent causing inadvertent pre-existing style matches.
    if (showdown.helper.isString(options.prefixHeaderId)) {
      prefix = options.prefixHeaderId;
    } else if (options.prefixHeaderId === true) {
      prefix = 'section-';
    } else {
      prefix = '';
    }

    if (!options.rawPrefixHeaderId) {
      title = prefix + title;
    }

    if (options.ghCompatibleHeaderId) {
      title = title
        .replace(/ /g, '-')
        // replace previously escaped chars (&, ¨ and $)
        .replace(/&amp;/g, '')
        .replace(/¨T/g, '')
        .replace(/¨D/g, '')
        // replace rest of the chars (&~$ are repeated as they might have been escaped)
        // borrowed from github's redcarpet (some they should produce similar results)
        .replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, '')
        .toLowerCase();
    } else if (options.rawHeaderId) {
      title = title
        .replace(/ /g, '-')
        // replace previously escaped chars (&, ¨ and $)
        .replace(/&amp;/g, '&')
        .replace(/¨T/g, '¨')
        .replace(/¨D/g, '$')
        // replace " and '
        .replace(/["']/g, '-')
        .toLowerCase();
    } else {
      title = title
        .replace(/[^\w]/g, '')
        .toLowerCase();
    }

    if (options.rawPrefixHeaderId) {
      title = prefix + title;
    }

    if (globals.hashLinkCounts[title]) {
      title = title + '-' + (globals.hashLinkCounts[title]++);
    } else {
      globals.hashLinkCounts[title] = 1;
    }
    return title;
  }

  text = globals.converter._dispatch('headers.after', text, options, globals);
  return text;
});

/**
 * Turn Markdown link shortcuts into XHTML <a> tags.
 */
showdown.subParser('horizontalRule', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('horizontalRule.before', text, options, globals);

  var key = showdown.subParser('hashBlock')('<hr />', options, globals);
  text = text.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, key);
  text = text.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, key);
  text = text.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, key);

  text = globals.converter._dispatch('horizontalRule.after', text, options, globals);
  return text;
});

/**
 * Turn Markdown image shortcuts into <img> tags.
 */
showdown.subParser('images', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('images.before', text, options, globals);

  var inlineRegExp      = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
      crazyRegExp       = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,
      base64RegExp      = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
      referenceRegExp   = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,
      refShortcutRegExp = /!\[([^\[\]]+)]()()()()()/g;

  function writeImageTagBase64 (wholeMatch, altText, linkId, url, width, height, m5, title) {
    url = url.replace(/\s/g, '');
    return writeImageTag (wholeMatch, altText, linkId, url, width, height, m5, title);
  }

  function writeImageTag (wholeMatch, altText, linkId, url, width, height, m5, title) {

    var gUrls   = globals.gUrls,
        gTitles = globals.gTitles,
        gDims   = globals.gDimensions;

    linkId = linkId.toLowerCase();

    if (!title) {
      title = '';
    }
    // Special case for explicit empty url
    if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
      url = '';

    } else if (url === '' || url === null) {
      if (linkId === '' || linkId === null) {
        // lower-case and turn embedded newlines into spaces
        linkId = altText.toLowerCase().replace(/ ?\n/g, ' ');
      }
      url = '#' + linkId;

      if (!showdown.helper.isUndefined(gUrls[linkId])) {
        url = gUrls[linkId];
        if (!showdown.helper.isUndefined(gTitles[linkId])) {
          title = gTitles[linkId];
        }
        if (!showdown.helper.isUndefined(gDims[linkId])) {
          width = gDims[linkId].width;
          height = gDims[linkId].height;
        }
      } else {
        return wholeMatch;
      }
    }

    altText = altText
      .replace(/"/g, '&quot;')
    //altText = showdown.helper.escapeCharacters(altText, '*_', false);
      .replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
    //url = showdown.helper.escapeCharacters(url, '*_', false);
    url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
    var result = '<img src="' + url + '" alt="' + altText + '"';

    if (title && showdown.helper.isString(title)) {
      title = title
        .replace(/"/g, '&quot;')
      //title = showdown.helper.escapeCharacters(title, '*_', false);
        .replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
      result += ' title="' + title + '"';
    }

    if (width && height) {
      width  = (width === '*') ? 'auto' : width;
      height = (height === '*') ? 'auto' : height;

      result += ' width="' + width + '"';
      result += ' height="' + height + '"';
    }

    result += ' />';

    return result;
  }

  // First, handle reference-style labeled images: ![alt text][id]
  text = text.replace(referenceRegExp, writeImageTag);

  // Next, handle inline images:  ![alt text](url =<width>x<height> "optional title")

  // base64 encoded images
  text = text.replace(base64RegExp, writeImageTagBase64);

  // cases with crazy urls like ./image/cat1).png
  text = text.replace(crazyRegExp, writeImageTag);

  // normal cases
  text = text.replace(inlineRegExp, writeImageTag);

  // handle reference-style shortcuts: ![img text]
  text = text.replace(refShortcutRegExp, writeImageTag);

  text = globals.converter._dispatch('images.after', text, options, globals);
  return text;
});

showdown.subParser('italicsAndBold', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('italicsAndBold.before', text, options, globals);

  // it's faster to have 3 separate regexes for each case than have just one
  // because of backtracing, in some cases, it could lead to an exponential effect
  // called "catastrophic backtrace". Ominous!

  function parseInside (txt, left, right) {
    /*
    if (options.simplifiedAutoLink) {
      txt = showdown.subParser('simplifiedAutoLinks')(txt, options, globals);
    }
    */
    return left + txt + right;
  }

  // Parse underscores
  if (options.literalMidWordUnderscores) {
    text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function (wm, txt) {
      return parseInside (txt, '<strong><em>', '</em></strong>');
    });
    text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function (wm, txt) {
      return parseInside (txt, '<strong>', '</strong>');
    });
    text = text.replace(/\b_(\S[\s\S]*?)_\b/g, function (wm, txt) {
      return parseInside (txt, '<em>', '</em>');
    });
  } else {
    text = text.replace(/___(\S[\s\S]*?)___/g, function (wm, m) {
      return (/\S$/.test(m)) ? parseInside (m, '<strong><em>', '</em></strong>') : wm;
    });
    text = text.replace(/__(\S[\s\S]*?)__/g, function (wm, m) {
      return (/\S$/.test(m)) ? parseInside (m, '<strong>', '</strong>') : wm;
    });
    text = text.replace(/_([^\s_][\s\S]*?)_/g, function (wm, m) {
      // !/^_[^_]/.test(m) - test if it doesn't start with __ (since it seems redundant, we removed it)
      return (/\S$/.test(m)) ? parseInside (m, '<em>', '</em>') : wm;
    });
  }

  // Now parse asterisks
  if (options.literalMidWordAsterisks) {
    text = text.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function (wm, lead, txt) {
      return parseInside (txt, lead + '<strong><em>', '</em></strong>');
    });
    text = text.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function (wm, lead, txt) {
      return parseInside (txt, lead + '<strong>', '</strong>');
    });
    text = text.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function (wm, lead, txt) {
      return parseInside (txt, lead + '<em>', '</em>');
    });
  } else {
    text = text.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function (wm, m) {
      return (/\S$/.test(m)) ? parseInside (m, '<strong><em>', '</em></strong>') : wm;
    });
    text = text.replace(/\*\*(\S[\s\S]*?)\*\*/g, function (wm, m) {
      return (/\S$/.test(m)) ? parseInside (m, '<strong>', '</strong>') : wm;
    });
    text = text.replace(/\*([^\s*][\s\S]*?)\*/g, function (wm, m) {
      // !/^\*[^*]/.test(m) - test if it doesn't start with ** (since it seems redundant, we removed it)
      return (/\S$/.test(m)) ? parseInside (m, '<em>', '</em>') : wm;
    });
  }


  text = globals.converter._dispatch('italicsAndBold.after', text, options, globals);
  return text;
});

/**
 * Form HTML ordered (numbered) and unordered (bulleted) lists.
 */
showdown.subParser('lists', function (text, options, globals) {
  'use strict';

  /**
   * Process the contents of a single ordered or unordered list, splitting it
   * into individual list items.
   * @param {string} listStr
   * @param {boolean} trimTrailing
   * @returns {string}
   */
  function processListItems (listStr, trimTrailing) {
    // The $g_list_level global keeps track of when we're inside a list.
    // Each time we enter a list, we increment it; when we leave a list,
    // we decrement. If it's zero, we're not in a list anymore.
    //
    // We do this because when we're not inside a list, we want to treat
    // something like this:
    //
    //    I recommend upgrading to version
    //    8. Oops, now this line is treated
    //    as a sub-list.
    //
    // As a single paragraph, despite the fact that the second line starts
    // with a digit-period-space sequence.
    //
    // Whereas when we're inside a list (or sub-list), that line will be
    // treated as the start of a sub-list. What a kludge, huh? This is
    // an aspect of Markdown's syntax that's hard to parse perfectly
    // without resorting to mind-reading. Perhaps the solution is to
    // change the syntax rules such that sub-lists must start with a
    // starting cardinal number; e.g. "1." or "a.".
    globals.gListLevel++;

    // trim trailing blank lines:
    listStr = listStr.replace(/\n{2,}$/, '\n');

    // attacklab: add sentinel to emulate \z
    listStr += '¨0';

    var rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,
        isParagraphed = (/\n[ \t]*\n(?!¨0)/.test(listStr));

    // Since version 1.5, nesting sublists requires 4 spaces (or 1 tab) indentation,
    // which is a syntax breaking change
    // activating this option reverts to old behavior
    if (options.disableForced4SpacesIndentedSublists) {
      rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm;
    }

    listStr = listStr.replace(rgx, function (wholeMatch, m1, m2, m3, m4, taskbtn, checked) {
      checked = (checked && checked.trim() !== '');

      var item = showdown.subParser('outdent')(m4, options, globals),
          bulletStyle = '';

      // Support for github tasklists
      if (taskbtn && options.tasklists) {
        bulletStyle = ' class="task-list-item" style="list-style-type: none;"';
        item = item.replace(/^[ \t]*\[(x|X| )?]/m, function () {
          var otp = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
          if (checked) {
            otp += ' checked';
          }
          otp += '>';
          return otp;
        });
      }

      // ISSUE #312
      // This input: - - - a
      // causes trouble to the parser, since it interprets it as:
      // <ul><li><li><li>a</li></li></li></ul>
      // instead of:
      // <ul><li>- - a</li></ul>
      // So, to prevent it, we will put a marker (¨A)in the beginning of the line
      // Kind of hackish/monkey patching, but seems more effective than overcomplicating the list parser
      item = item.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function (wm2) {
        return '¨A' + wm2;
      });

      // m1 - Leading line or
      // Has a double return (multi paragraph) or
      // Has sublist
      if (m1 || (item.search(/\n{2,}/) > -1)) {
        item = showdown.subParser('githubCodeBlocks')(item, options, globals);
        item = showdown.subParser('blockGamut')(item, options, globals);
      } else {
        // Recursion for sub-lists:
        item = showdown.subParser('lists')(item, options, globals);
        item = item.replace(/\n$/, ''); // chomp(item)
        item = showdown.subParser('hashHTMLBlocks')(item, options, globals);

        // Colapse double linebreaks
        item = item.replace(/\n\n+/g, '\n\n');
        if (isParagraphed) {
          item = showdown.subParser('paragraphs')(item, options, globals);
        } else {
          item = showdown.subParser('spanGamut')(item, options, globals);
        }
      }

      // now we need to remove the marker (¨A)
      item = item.replace('¨A', '');
      // we can finally wrap the line in list item tags
      item =  '<li' + bulletStyle + '>' + item + '</li>\n';

      return item;
    });

    // attacklab: strip sentinel
    listStr = listStr.replace(/¨0/g, '');

    globals.gListLevel--;

    if (trimTrailing) {
      listStr = listStr.replace(/\s+$/, '');
    }

    return listStr;
  }

  function styleStartNumber (list, listType) {
    // check if ol and starts by a number different than 1
    if (listType === 'ol') {
      var res = list.match(/^ *(\d+)\./);
      if (res && res[1] !== '1') {
        return ' start="' + res[1] + '"';
      }
    }
    return '';
  }

  /**
   * Check and parse consecutive lists (better fix for issue #142)
   * @param {string} list
   * @param {string} listType
   * @param {boolean} trimTrailing
   * @returns {string}
   */
  function parseConsecutiveLists (list, listType, trimTrailing) {
    // check if we caught 2 or more consecutive lists by mistake
    // we use the counterRgx, meaning if listType is UL we look for OL and vice versa
    var olRgx = (options.disableForced4SpacesIndentedSublists) ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm,
        ulRgx = (options.disableForced4SpacesIndentedSublists) ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm,
        counterRxg = (listType === 'ul') ? olRgx : ulRgx,
        result = '';

    if (list.search(counterRxg) !== -1) {
      (function parseCL (txt) {
        var pos = txt.search(counterRxg),
            style = styleStartNumber(list, listType);
        if (pos !== -1) {
          // slice
          result += '\n\n<' + listType + style + '>\n' + processListItems(txt.slice(0, pos), !!trimTrailing) + '</' + listType + '>\n';

          // invert counterType and listType
          listType = (listType === 'ul') ? 'ol' : 'ul';
          counterRxg = (listType === 'ul') ? olRgx : ulRgx;

          //recurse
          parseCL(txt.slice(pos));
        } else {
          result += '\n\n<' + listType + style + '>\n' + processListItems(txt, !!trimTrailing) + '</' + listType + '>\n';
        }
      })(list);
    } else {
      var style = styleStartNumber(list, listType);
      result = '\n\n<' + listType + style + '>\n' + processListItems(list, !!trimTrailing) + '</' + listType + '>\n';
    }

    return result;
  }

  /** Start of list parsing **/
  text = globals.converter._dispatch('lists.before', text, options, globals);
  // add sentinel to hack around khtml/safari bug:
  // http://bugs.webkit.org/show_bug.cgi?id=11231
  text += '¨0';

  if (globals.gListLevel) {
    text = text.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
      function (wholeMatch, list, m2) {
        var listType = (m2.search(/[*+-]/g) > -1) ? 'ul' : 'ol';
        return parseConsecutiveLists(list, listType, true);
      }
    );
  } else {
    text = text.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
      function (wholeMatch, m1, list, m3) {
        var listType = (m3.search(/[*+-]/g) > -1) ? 'ul' : 'ol';
        return parseConsecutiveLists(list, listType, false);
      }
    );
  }

  // strip sentinel
  text = text.replace(/¨0/, '');
  text = globals.converter._dispatch('lists.after', text, options, globals);
  return text;
});

/**
 * Parse metadata at the top of the document
 */
showdown.subParser('metadata', function (text, options, globals) {
  'use strict';

  if (!options.metadata) {
    return text;
  }

  text = globals.converter._dispatch('metadata.before', text, options, globals);

  function parseMetadataContents (content) {
    // raw is raw so it's not changed in any way
    globals.metadata.raw = content;

    // escape chars forbidden in html attributes
    // double quotes
    content = content
      // ampersand first
      .replace(/&/g, '&amp;')
      // double quotes
      .replace(/"/g, '&quot;');

    content = content.replace(/\n {4}/g, ' ');
    content.replace(/^([\S ]+): +([\s\S]+?)$/gm, function (wm, key, value) {
      globals.metadata.parsed[key] = value;
      return '';
    });
  }

  text = text.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function (wholematch, format, content) {
    parseMetadataContents(content);
    return '¨M';
  });

  text = text.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function (wholematch, format, content) {
    if (format) {
      globals.metadata.format = format;
    }
    parseMetadataContents(content);
    return '¨M';
  });

  text = text.replace(/¨M/g, '');

  text = globals.converter._dispatch('metadata.after', text, options, globals);
  return text;
});

/**
 * Remove one level of line-leading tabs or spaces
 */
showdown.subParser('outdent', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('outdent.before', text, options, globals);

  // attacklab: hack around Konqueror 3.5.4 bug:
  // "----------bug".replace(/^-/g,"") == "bug"
  text = text.replace(/^(\t|[ ]{1,4})/gm, '¨0'); // attacklab: g_tab_width

  // attacklab: clean up hack
  text = text.replace(/¨0/g, '');

  text = globals.converter._dispatch('outdent.after', text, options, globals);
  return text;
});

/**
 *
 */
showdown.subParser('paragraphs', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('paragraphs.before', text, options, globals);
  // Strip leading and trailing lines:
  text = text.replace(/^\n+/g, '');
  text = text.replace(/\n+$/g, '');

  var grafs = text.split(/\n{2,}/g),
      grafsOut = [],
      end = grafs.length; // Wrap <p> tags

  for (var i = 0; i < end; i++) {
    var str = grafs[i];
    // if this is an HTML marker, copy it
    if (str.search(/¨(K|G)(\d+)\1/g) >= 0) {
      grafsOut.push(str);

    // test for presence of characters to prevent empty lines being parsed
    // as paragraphs (resulting in undesired extra empty paragraphs)
    } else if (str.search(/\S/) >= 0) {
      str = showdown.subParser('spanGamut')(str, options, globals);
      str = str.replace(/^([ \t]*)/g, '<p>');
      str += '</p>';
      grafsOut.push(str);
    }
  }

  /** Unhashify HTML blocks */
  end = grafsOut.length;
  for (i = 0; i < end; i++) {
    var blockText = '',
        grafsOutIt = grafsOut[i],
        codeFlag = false;
    // if this is a marker for an html block...
    // use RegExp.test instead of string.search because of QML bug
    while (/¨(K|G)(\d+)\1/.test(grafsOutIt)) {
      var delim = RegExp.$1,
          num   = RegExp.$2;

      if (delim === 'K') {
        blockText = globals.gHtmlBlocks[num];
      } else {
        // we need to check if ghBlock is a false positive
        if (codeFlag) {
          // use encoded version of all text
          blockText = showdown.subParser('encodeCode')(globals.ghCodeBlocks[num].text, options, globals);
        } else {
          blockText = globals.ghCodeBlocks[num].codeblock;
        }
      }
      blockText = blockText.replace(/\$/g, '$$$$'); // Escape any dollar signs

      grafsOutIt = grafsOutIt.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, blockText);
      // Check if grafsOutIt is a pre->code
      if (/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(grafsOutIt)) {
        codeFlag = true;
      }
    }
    grafsOut[i] = grafsOutIt;
  }
  text = grafsOut.join('\n');
  // Strip leading and trailing lines:
  text = text.replace(/^\n+/g, '');
  text = text.replace(/\n+$/g, '');
  return globals.converter._dispatch('paragraphs.after', text, options, globals);
});

/**
 * Run extension
 */
showdown.subParser('runExtension', function (ext, text, options, globals) {
  'use strict';

  if (ext.filter) {
    text = ext.filter(text, globals.converter, options);

  } else if (ext.regex) {
    // TODO remove this when old extension loading mechanism is deprecated
    var re = ext.regex;
    if (!(re instanceof RegExp)) {
      re = new RegExp(re, 'g');
    }
    text = text.replace(re, ext.replace);
  }

  return text;
});

/**
 * These are all the transformations that occur *within* block-level
 * tags like paragraphs, headers, and list items.
 */
showdown.subParser('spanGamut', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('spanGamut.before', text, options, globals);
  text = showdown.subParser('codeSpans')(text, options, globals);
  text = showdown.subParser('escapeSpecialCharsWithinTagAttributes')(text, options, globals);
  text = showdown.subParser('encodeBackslashEscapes')(text, options, globals);

  // Process anchor and image tags. Images must come first,
  // because ![foo][f] looks like an anchor.
  text = showdown.subParser('images')(text, options, globals);
  text = showdown.subParser('anchors')(text, options, globals);

  // Make links out of things like `<http://example.com/>`
  // Must come after anchors, because you can use < and >
  // delimiters in inline links like [this](<url>).
  text = showdown.subParser('autoLinks')(text, options, globals);
  text = showdown.subParser('simplifiedAutoLinks')(text, options, globals);
  text = showdown.subParser('emoji')(text, options, globals);
  text = showdown.subParser('underline')(text, options, globals);
  text = showdown.subParser('italicsAndBold')(text, options, globals);
  text = showdown.subParser('strikethrough')(text, options, globals);
  text = showdown.subParser('ellipsis')(text, options, globals);

  // we need to hash HTML tags inside spans
  text = showdown.subParser('hashHTMLSpans')(text, options, globals);

  // now we encode amps and angles
  text = showdown.subParser('encodeAmpsAndAngles')(text, options, globals);

  // Do hard breaks
  if (options.simpleLineBreaks) {
    // GFM style hard breaks
    // only add line breaks if the text does not contain a block (special case for lists)
    if (!/\n\n¨K/.test(text)) {
      text = text.replace(/\n+/g, '<br />\n');
    }
  } else {
    // Vanilla hard breaks
    text = text.replace(/  +\n/g, '<br />\n');
  }

  text = globals.converter._dispatch('spanGamut.after', text, options, globals);
  return text;
});

showdown.subParser('strikethrough', function (text, options, globals) {
  'use strict';

  function parseInside (txt) {
    if (options.simplifiedAutoLink) {
      txt = showdown.subParser('simplifiedAutoLinks')(txt, options, globals);
    }
    return '<del>' + txt + '</del>';
  }

  if (options.strikethrough) {
    text = globals.converter._dispatch('strikethrough.before', text, options, globals);
    text = text.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function (wm, txt) { return parseInside(txt); });
    text = globals.converter._dispatch('strikethrough.after', text, options, globals);
  }

  return text;
});

/**
 * Strips link definitions from text, stores the URLs and titles in
 * hash references.
 * Link defs are in the form: ^[id]: url "optional title"
 */
showdown.subParser('stripLinkDefinitions', function (text, options, globals) {
  'use strict';

  var regex       = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,
      base64Regex = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;

  // attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
  text += '¨0';

  var replaceFunc = function (wholeMatch, linkId, url, width, height, blankLines, title) {
    linkId = linkId.toLowerCase();
    if (url.match(/^data:.+?\/.+?;base64,/)) {
      // remove newlines
      globals.gUrls[linkId] = url.replace(/\s/g, '');
    } else {
      globals.gUrls[linkId] = showdown.subParser('encodeAmpsAndAngles')(url, options, globals);  // Link IDs are case-insensitive
    }

    if (blankLines) {
      // Oops, found blank lines, so it's not a title.
      // Put back the parenthetical statement we stole.
      return blankLines + title;

    } else {
      if (title) {
        globals.gTitles[linkId] = title.replace(/"|'/g, '&quot;');
      }
      if (options.parseImgDimensions && width && height) {
        globals.gDimensions[linkId] = {
          width:  width,
          height: height
        };
      }
    }
    // Completely remove the definition from the text
    return '';
  };

  // first we try to find base64 link references
  text = text.replace(base64Regex, replaceFunc);

  text = text.replace(regex, replaceFunc);

  // attacklab: strip sentinel
  text = text.replace(/¨0/, '');

  return text;
});

showdown.subParser('tables', function (text, options, globals) {
  'use strict';

  if (!options.tables) {
    return text;
  }

  var tableRgx       = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,
      //singeColTblRgx = /^ {0,3}\|.+\|\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n(?: {0,3}\|.+\|\n)+(?:\n\n|¨0)/gm;
      singeColTblRgx = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;

  function parseStyles (sLine) {
    if (/^:[ \t]*--*$/.test(sLine)) {
      return ' style="text-align:left;"';
    } else if (/^--*[ \t]*:[ \t]*$/.test(sLine)) {
      return ' style="text-align:right;"';
    } else if (/^:[ \t]*--*[ \t]*:$/.test(sLine)) {
      return ' style="text-align:center;"';
    } else {
      return '';
    }
  }

  function parseHeaders (header, style) {
    var id = '';
    header = header.trim();
    // support both tablesHeaderId and tableHeaderId due to error in documentation so we don't break backwards compatibility
    if (options.tablesHeaderId || options.tableHeaderId) {
      id = ' id="' + header.replace(/ /g, '_').toLowerCase() + '"';
    }
    header = showdown.subParser('spanGamut')(header, options, globals);

    return '<th' + id + style + '>' + header + '</th>\n';
  }

  function parseCells (cell, style) {
    var subText = showdown.subParser('spanGamut')(cell, options, globals);
    return '<td' + style + '>' + subText + '</td>\n';
  }

  function buildTable (headers, cells) {
    var tb = '<table>\n<thead>\n<tr>\n',
        tblLgn = headers.length;

    for (var i = 0; i < tblLgn; ++i) {
      tb += headers[i];
    }
    tb += '</tr>\n</thead>\n<tbody>\n';

    for (i = 0; i < cells.length; ++i) {
      tb += '<tr>\n';
      for (var ii = 0; ii < tblLgn; ++ii) {
        tb += cells[i][ii];
      }
      tb += '</tr>\n';
    }
    tb += '</tbody>\n</table>\n';
    return tb;
  }

  function parseTable (rawTable) {
    var i, tableLines = rawTable.split('\n');

    for (i = 0; i < tableLines.length; ++i) {
      // strip wrong first and last column if wrapped tables are used
      if (/^ {0,3}\|/.test(tableLines[i])) {
        tableLines[i] = tableLines[i].replace(/^ {0,3}\|/, '');
      }
      if (/\|[ \t]*$/.test(tableLines[i])) {
        tableLines[i] = tableLines[i].replace(/\|[ \t]*$/, '');
      }
      // parse code spans first, but we only support one line code spans
      tableLines[i] = showdown.subParser('codeSpans')(tableLines[i], options, globals);
    }

    var rawHeaders = tableLines[0].split('|').map(function (s) { return s.trim();}),
        rawStyles = tableLines[1].split('|').map(function (s) { return s.trim();}),
        rawCells = [],
        headers = [],
        styles = [],
        cells = [];

    tableLines.shift();
    tableLines.shift();

    for (i = 0; i < tableLines.length; ++i) {
      if (tableLines[i].trim() === '') {
        continue;
      }
      rawCells.push(
        tableLines[i]
          .split('|')
          .map(function (s) {
            return s.trim();
          })
      );
    }

    if (rawHeaders.length < rawStyles.length) {
      return rawTable;
    }

    for (i = 0; i < rawStyles.length; ++i) {
      styles.push(parseStyles(rawStyles[i]));
    }

    for (i = 0; i < rawHeaders.length; ++i) {
      if (showdown.helper.isUndefined(styles[i])) {
        styles[i] = '';
      }
      headers.push(parseHeaders(rawHeaders[i], styles[i]));
    }

    for (i = 0; i < rawCells.length; ++i) {
      var row = [];
      for (var ii = 0; ii < headers.length; ++ii) {
        if (showdown.helper.isUndefined(rawCells[i][ii])) {

        }
        row.push(parseCells(rawCells[i][ii], styles[ii]));
      }
      cells.push(row);
    }

    return buildTable(headers, cells);
  }

  text = globals.converter._dispatch('tables.before', text, options, globals);

  // find escaped pipe characters
  text = text.replace(/\\(\|)/g, showdown.helper.escapeCharactersCallback);

  // parse multi column tables
  text = text.replace(tableRgx, parseTable);

  // parse one column tables
  text = text.replace(singeColTblRgx, parseTable);

  text = globals.converter._dispatch('tables.after', text, options, globals);

  return text;
});

showdown.subParser('underline', function (text, options, globals) {
  'use strict';

  if (!options.underline) {
    return text;
  }

  text = globals.converter._dispatch('underline.before', text, options, globals);

  if (options.literalMidWordUnderscores) {
    text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function (wm, txt) {
      return '<u>' + txt + '</u>';
    });
    text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function (wm, txt) {
      return '<u>' + txt + '</u>';
    });
  } else {
    text = text.replace(/___(\S[\s\S]*?)___/g, function (wm, m) {
      return (/\S$/.test(m)) ? '<u>' + m + '</u>' : wm;
    });
    text = text.replace(/__(\S[\s\S]*?)__/g, function (wm, m) {
      return (/\S$/.test(m)) ? '<u>' + m + '</u>' : wm;
    });
  }

  // escape remaining underscores to prevent them being parsed by italic and bold
  text = text.replace(/(_)/g, showdown.helper.escapeCharactersCallback);

  text = globals.converter._dispatch('underline.after', text, options, globals);

  return text;
});

/**
 * Swap back in all the special characters we've hidden.
 */
showdown.subParser('unescapeSpecialChars', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('unescapeSpecialChars.before', text, options, globals);

  text = text.replace(/¨E(\d+)E/g, function (wholeMatch, m1) {
    var charCodeToReplace = parseInt(m1);
    return String.fromCharCode(charCodeToReplace);
  });

  text = globals.converter._dispatch('unescapeSpecialChars.after', text, options, globals);
  return text;
});

showdown.subParser('makeMarkdown.blockquote', function (node, globals) {
  'use strict';

  var txt = '';
  if (node.hasChildNodes()) {
    var children = node.childNodes,
        childrenLength = children.length;

    for (var i = 0; i < childrenLength; ++i) {
      var innerTxt = showdown.subParser('makeMarkdown.node')(children[i], globals);

      if (innerTxt === '') {
        continue;
      }
      txt += innerTxt;
    }
  }
  // cleanup
  txt = txt.trim();
  txt = '> ' + txt.split('\n').join('\n> ');
  return txt;
});

showdown.subParser('makeMarkdown.codeBlock', function (node, globals) {
  'use strict';

  var lang = node.getAttribute('language'),
      num  = node.getAttribute('precodenum');
  return '```' + lang + '\n' + globals.preList[num] + '\n```';
});

showdown.subParser('makeMarkdown.codeSpan', function (node) {
  'use strict';

  return '`' + node.innerHTML + '`';
});

showdown.subParser('makeMarkdown.emphasis', function (node, globals) {
  'use strict';

  var txt = '';
  if (node.hasChildNodes()) {
    txt += '*';
    var children = node.childNodes,
        childrenLength = children.length;
    for (var i = 0; i < childrenLength; ++i) {
      txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
    }
    txt += '*';
  }
  return txt;
});

showdown.subParser('makeMarkdown.header', function (node, globals, headerLevel) {
  'use strict';

  var headerMark = new Array(headerLevel + 1).join('#'),
      txt = '';

  if (node.hasChildNodes()) {
    txt = headerMark + ' ';
    var children = node.childNodes,
        childrenLength = children.length;

    for (var i = 0; i < childrenLength; ++i) {
      txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
    }
  }
  return txt;
});

showdown.subParser('makeMarkdown.hr', function () {
  'use strict';

  return '---';
});

showdown.subParser('makeMarkdown.image', function (node) {
  'use strict';

  var txt = '';
  if (node.hasAttribute('src')) {
    txt += '![' + node.getAttribute('alt') + '](';
    txt += '<' + node.getAttribute('src') + '>';
    if (node.hasAttribute('width') && node.hasAttribute('height')) {
      txt += ' =' + node.getAttribute('width') + 'x' + node.getAttribute('height');
    }

    if (node.hasAttribute('title')) {
      txt += ' "' + node.getAttribute('title') + '"';
    }
    txt += ')';
  }
  return txt;
});

showdown.subParser('makeMarkdown.links', function (node, globals) {
  'use strict';

  var txt = '';
  if (node.hasChildNodes() && node.hasAttribute('href')) {
    var children = node.childNodes,
        childrenLength = children.length;
    txt = '[';
    for (var i = 0; i < childrenLength; ++i) {
      txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
    }
    txt += '](';
    txt += '<' + node.getAttribute('href') + '>';
    if (node.hasAttribute('title')) {
      txt += ' "' + node.getAttribute('title') + '"';
    }
    txt += ')';
  }
  return txt;
});

showdown.subParser('makeMarkdown.list', function (node, globals, type) {
  'use strict';

  var txt = '';
  if (!node.hasChildNodes()) {
    return '';
  }
  var listItems       = node.childNodes,
      listItemsLenght = listItems.length,
      listNum = node.getAttribute('start') || 1;

  for (var i = 0; i < listItemsLenght; ++i) {
    if (typeof listItems[i].tagName === 'undefined' || listItems[i].tagName.toLowerCase() !== 'li') {
      continue;
    }

    // define the bullet to use in list
    var bullet = '';
    if (type === 'ol') {
      bullet = listNum.toString() + '. ';
    } else {
      bullet = '- ';
    }

    // parse list item
    txt += bullet + showdown.subParser('makeMarkdown.listItem')(listItems[i], globals);
    ++listNum;
  }

  // add comment at the end to prevent consecutive lists to be parsed as one
  txt += '\n<!-- -->\n';
  return txt.trim();
});

showdown.subParser('makeMarkdown.listItem', function (node, globals) {
  'use strict';

  var listItemTxt = '';

  var children = node.childNodes,
      childrenLenght = children.length;

  for (var i = 0; i < childrenLenght; ++i) {
    listItemTxt += showdown.subParser('makeMarkdown.node')(children[i], globals);
  }
  // if it's only one liner, we need to add a newline at the end
  if (!/\n$/.test(listItemTxt)) {
    listItemTxt += '\n';
  } else {
    // it's multiparagraph, so we need to indent
    listItemTxt = listItemTxt
      .split('\n')
      .join('\n    ')
      .replace(/^ {4}$/gm, '')
      .replace(/\n\n+/g, '\n\n');
  }

  return listItemTxt;
});



showdown.subParser('makeMarkdown.node', function (node, globals, spansOnly) {
  'use strict';

  spansOnly = spansOnly || false;

  var txt = '';

  // edge case of text without wrapper paragraph
  if (node.nodeType === 3) {
    return showdown.subParser('makeMarkdown.txt')(node, globals);
  }

  // HTML comment
  if (node.nodeType === 8) {
    return '<!--' + node.data + '-->\n\n';
  }

  // process only node elements
  if (node.nodeType !== 1) {
    return '';
  }

  var tagName = node.tagName.toLowerCase();

  switch (tagName) {

    //
    // BLOCKS
    //
    case 'h1':
      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.header')(node, globals, 1) + '\n\n'; }
      break;
    case 'h2':
      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.header')(node, globals, 2) + '\n\n'; }
      break;
    case 'h3':
      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.header')(node, globals, 3) + '\n\n'; }
      break;
    case 'h4':
      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.header')(node, globals, 4) + '\n\n'; }
      break;
    case 'h5':
      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.header')(node, globals, 5) + '\n\n'; }
      break;
    case 'h6':
      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.header')(node, globals, 6) + '\n\n'; }
      break;

    case 'p':
      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.paragraph')(node, globals) + '\n\n'; }
      break;

    case 'blockquote':
      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.blockquote')(node, globals) + '\n\n'; }
      break;

    case 'hr':
      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.hr')(node, globals) + '\n\n'; }
      break;

    case 'ol':
      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.list')(node, globals, 'ol') + '\n\n'; }
      break;

    case 'ul':
      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.list')(node, globals, 'ul') + '\n\n'; }
      break;

    case 'precode':
      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.codeBlock')(node, globals) + '\n\n'; }
      break;

    case 'pre':
      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.pre')(node, globals) + '\n\n'; }
      break;

    case 'table':
      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.table')(node, globals) + '\n\n'; }
      break;

    //
    // SPANS
    //
    case 'code':
      txt = showdown.subParser('makeMarkdown.codeSpan')(node, globals);
      break;

    case 'em':
    case 'i':
      txt = showdown.subParser('makeMarkdown.emphasis')(node, globals);
      break;

    case 'strong':
    case 'b':
      txt = showdown.subParser('makeMarkdown.strong')(node, globals);
      break;

    case 'del':
      txt = showdown.subParser('makeMarkdown.strikethrough')(node, globals);
      break;

    case 'a':
      txt = showdown.subParser('makeMarkdown.links')(node, globals);
      break;

    case 'img':
      txt = showdown.subParser('makeMarkdown.image')(node, globals);
      break;

    default:
      txt = node.outerHTML + '\n\n';
  }

  // common normalization
  // TODO eventually

  return txt;
});

showdown.subParser('makeMarkdown.paragraph', function (node, globals) {
  'use strict';

  var txt = '';
  if (node.hasChildNodes()) {
    var children = node.childNodes,
        childrenLength = children.length;
    for (var i = 0; i < childrenLength; ++i) {
      txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
    }
  }

  // some text normalization
  txt = txt.trim();

  return txt;
});

showdown.subParser('makeMarkdown.pre', function (node, globals) {
  'use strict';

  var num  = node.getAttribute('prenum');
  return '<pre>' + globals.preList[num] + '</pre>';
});

showdown.subParser('makeMarkdown.strikethrough', function (node, globals) {
  'use strict';

  var txt = '';
  if (node.hasChildNodes()) {
    txt += '~~';
    var children = node.childNodes,
        childrenLength = children.length;
    for (var i = 0; i < childrenLength; ++i) {
      txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
    }
    txt += '~~';
  }
  return txt;
});

showdown.subParser('makeMarkdown.strong', function (node, globals) {
  'use strict';

  var txt = '';
  if (node.hasChildNodes()) {
    txt += '**';
    var children = node.childNodes,
        childrenLength = children.length;
    for (var i = 0; i < childrenLength; ++i) {
      txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
    }
    txt += '**';
  }
  return txt;
});

showdown.subParser('makeMarkdown.table', function (node, globals) {
  'use strict';

  var txt = '',
      tableArray = [[], []],
      headings   = node.querySelectorAll('thead>tr>th'),
      rows       = node.querySelectorAll('tbody>tr'),
      i, ii;
  for (i = 0; i < headings.length; ++i) {
    var headContent = showdown.subParser('makeMarkdown.tableCell')(headings[i], globals),
        allign = '---';

    if (headings[i].hasAttribute('style')) {
      var style = headings[i].getAttribute('style').toLowerCase().replace(/\s/g, '');
      switch (style) {
        case 'text-align:left;':
          allign = ':---';
          break;
        case 'text-align:right;':
          allign = '---:';
          break;
        case 'text-align:center;':
          allign = ':---:';
          break;
      }
    }
    tableArray[0][i] = headContent.trim();
    tableArray[1][i] = allign;
  }

  for (i = 0; i < rows.length; ++i) {
    var r = tableArray.push([]) - 1,
        cols = rows[i].getElementsByTagName('td');

    for (ii = 0; ii < headings.length; ++ii) {
      var cellContent = ' ';
      if (typeof cols[ii] !== 'undefined') {
        cellContent = showdown.subParser('makeMarkdown.tableCell')(cols[ii], globals);
      }
      tableArray[r].push(cellContent);
    }
  }

  var cellSpacesCount = 3;
  for (i = 0; i < tableArray.length; ++i) {
    for (ii = 0; ii < tableArray[i].length; ++ii) {
      var strLen = tableArray[i][ii].length;
      if (strLen > cellSpacesCount) {
        cellSpacesCount = strLen;
      }
    }
  }

  for (i = 0; i < tableArray.length; ++i) {
    for (ii = 0; ii < tableArray[i].length; ++ii) {
      if (i === 1) {
        if (tableArray[i][ii].slice(-1) === ':') {
          tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii].slice(-1), cellSpacesCount - 1, '-') + ':';
        } else {
          tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii], cellSpacesCount, '-');
        }
      } else {
        tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii], cellSpacesCount);
      }
    }
    txt += '| ' + tableArray[i].join(' | ') + ' |\n';
  }

  return txt.trim();
});

showdown.subParser('makeMarkdown.tableCell', function (node, globals) {
  'use strict';

  var txt = '';
  if (!node.hasChildNodes()) {
    return '';
  }
  var children = node.childNodes,
      childrenLength = children.length;

  for (var i = 0; i < childrenLength; ++i) {
    txt += showdown.subParser('makeMarkdown.node')(children[i], globals, true);
  }
  return txt.trim();
});

showdown.subParser('makeMarkdown.txt', function (node) {
  'use strict';

  var txt = node.nodeValue;

  // multiple spaces are collapsed
  txt = txt.replace(/ +/g, ' ');

  // replace the custom ¨NBSP; with a space
  txt = txt.replace(/¨NBSP;/g, ' ');

  // ", <, > and & should replace escaped html entities
  txt = showdown.helper.unescapeHTMLEntities(txt);

  // escape markdown magic characters
  // emphasis, strong and strikethrough - can appear everywhere
  // we also escape pipe (|) because of tables
  // and escape ` because of code blocks and spans
  txt = txt.replace(/([*_~|`])/g, '\\$1');

  // escape > because of blockquotes
  txt = txt.replace(/^(\s*)>/g, '\\$1>');

  // hash character, only troublesome at the beginning of a line because of headers
  txt = txt.replace(/^#/gm, '\\#');

  // horizontal rules
  txt = txt.replace(/^(\s*)([-=]{3,})(\s*)$/, '$1\\$2$3');

  // dot, because of ordered lists, only troublesome at the beginning of a line when preceded by an integer
  txt = txt.replace(/^( {0,3}\d+)\./gm, '$1\\.');

  // +, * and -, at the beginning of a line becomes a list, so we need to escape them also (asterisk was already escaped)
  txt = txt.replace(/^( {0,3})([+-])/gm, '$1\\$2');

  // images and links, ] followed by ( is problematic, so we escape it
  txt = txt.replace(/]([\s]*)\(/g, '\\]$1\\(');

  // reference URIs must also be escaped
  txt = txt.replace(/^ {0,3}\[([\S \t]*?)]:/gm, '\\[$1]:');

  return txt;
});

var root = this;

// AMD Loader
if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    'use strict';
    return showdown;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

// CommonJS/nodeJS Loader
} else {}
}).call(this);



/***/ })

}]);
//# sourceMappingURL=57.bundle.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ "../node_modules/@theia/editor-preview/lib/browser/editor-preview-factory.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@theia/editor-preview/lib/browser/editor-preview-factory.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Google and others.
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
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var editor_preview_widget_1 = __webpack_require__(/*! ./editor-preview-widget */ "../node_modules/@theia/editor-preview/lib/browser/editor-preview-widget.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var coreutils_1 = __webpack_require__(/*! @phosphor/coreutils */ "../node_modules/@phosphor/coreutils/lib/index.js");
var EditorPreviewWidgetFactory = /** @class */ (function () {
    function EditorPreviewWidgetFactory() {
        this.id = EditorPreviewWidgetFactory_1.ID;
    }
    EditorPreviewWidgetFactory_1 = EditorPreviewWidgetFactory;
    EditorPreviewWidgetFactory.generateUniqueId = function () {
        return coreutils_1.UUID.uuid4();
    };
    EditorPreviewWidgetFactory.prototype.createWidget = function (options) {
        return this.doCreate(options);
    };
    EditorPreviewWidgetFactory.prototype.doCreate = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var widget, _a, previewWidget;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(options.session === EditorPreviewWidgetFactory_1.sessionId)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.editorManager.getOrCreateByUri(new uri_1.default(options.initialUri))];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = undefined;
                        _b.label = 3;
                    case 3:
                        widget = _a;
                        previewWidget = new editor_preview_widget_1.EditorPreviewWidget(this.widgetManager, widget);
                        previewWidget.id = options.id;
                        return [2 /*return*/, previewWidget];
                }
            });
        });
    };
    var EditorPreviewWidgetFactory_1;
    EditorPreviewWidgetFactory.ID = 'editor-preview-widget';
    EditorPreviewWidgetFactory.sessionId = EditorPreviewWidgetFactory_1.generateUniqueId();
    __decorate([
        inversify_1.inject(browser_1.WidgetManager),
        __metadata("design:type", browser_1.WidgetManager)
    ], EditorPreviewWidgetFactory.prototype, "widgetManager", void 0);
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], EditorPreviewWidgetFactory.prototype, "editorManager", void 0);
    EditorPreviewWidgetFactory = EditorPreviewWidgetFactory_1 = __decorate([
        inversify_1.injectable()
    ], EditorPreviewWidgetFactory);
    return EditorPreviewWidgetFactory;
}());
exports.EditorPreviewWidgetFactory = EditorPreviewWidgetFactory;


/***/ }),

/***/ "../node_modules/@theia/editor-preview/lib/browser/editor-preview-frontend-module.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/@theia/editor-preview/lib/browser/editor-preview-frontend-module.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Google and others.
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var editor_preview_manager_1 = __webpack_require__(/*! ./editor-preview-manager */ "../node_modules/@theia/editor-preview/lib/browser/editor-preview-manager.js");
var editor_preview_factory_1 = __webpack_require__(/*! ./editor-preview-factory */ "../node_modules/@theia/editor-preview/lib/browser/editor-preview-factory.js");
var editor_preview_preferences_1 = __webpack_require__(/*! ./editor-preview-preferences */ "../node_modules/@theia/editor-preview/lib/browser/editor-preview-preferences.js");
__webpack_require__(/*! ../../src/browser/style/index.css */ "../node_modules/@theia/editor-preview/src/browser/style/index.css");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(browser_1.WidgetFactory).to(editor_preview_factory_1.EditorPreviewWidgetFactory).inSingletonScope();
    bind(editor_preview_manager_1.EditorPreviewManager).toSelf().inSingletonScope();
    bind(browser_1.OpenHandler).to(editor_preview_manager_1.EditorPreviewManager);
    editor_preview_preferences_1.bindEditorPreviewPreferences(bind);
});


/***/ }),

/***/ "../node_modules/@theia/editor-preview/lib/browser/editor-preview-manager.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@theia/editor-preview/lib/browser/editor-preview-manager.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Google and others.
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var editor_preview_widget_1 = __webpack_require__(/*! ./editor-preview-widget */ "../node_modules/@theia/editor-preview/lib/browser/editor-preview-widget.js");
var editor_preview_factory_1 = __webpack_require__(/*! ./editor-preview-factory */ "../node_modules/@theia/editor-preview/lib/browser/editor-preview-factory.js");
var editor_preview_preferences_1 = __webpack_require__(/*! ./editor-preview-preferences */ "../node_modules/@theia/editor-preview/lib/browser/editor-preview-preferences.js");
var browser_3 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
/**
 * Class for managing an editor preview widget.
 */
var EditorPreviewManager = /** @class */ (function (_super) {
    __extends(EditorPreviewManager, _super);
    function EditorPreviewManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = editor_preview_factory_1.EditorPreviewWidgetFactory.ID;
        _this.label = 'Code Editor Preview';
        return _this;
    }
    EditorPreviewManager.prototype.init = function () {
        var _this = this;
        _super.prototype.init.call(this);
        this.onCreated(function (widget) {
            if (widget instanceof editor_preview_widget_1.EditorPreviewWidget) {
                return _this.handlePreviewWidgetCreated(widget);
            }
        });
        this.preferences.onPreferenceChanged(function (change) {
            if (_this.currentEditorPreview) {
                _this.currentEditorPreview.then(function (editorPreview) {
                    if (!change.newValue && editorPreview) {
                        editorPreview.pinEditorWidget();
                    }
                });
            }
        });
    };
    EditorPreviewManager.prototype.handlePreviewWidgetCreated = function (widget) {
        return __awaiter(this, void 0, void 0, function () {
            var editorPreview;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.currentEditorPreview];
                    case 1:
                        editorPreview = _a.sent();
                        if (editorPreview && editorPreview !== widget) {
                            editorPreview.pinEditorWidget();
                        }
                        this.currentEditorPreview = Promise.resolve(widget);
                        widget.disposed.connect(function () { return _this.currentEditorPreview = Promise.resolve(undefined); });
                        widget.onPinned(function (_a) {
                            var preview = _a.preview, editorWidget = _a.editorWidget;
                            // TODO(caseyflynn): I don't believe there is ever a case where
                            // this will not hold true.
                            if (preview.parent && preview.parent instanceof browser_1.DockPanel) {
                                preview.parent.addWidget(editorWidget, { ref: preview });
                            }
                            else {
                                _this.shell.addWidget(editorWidget, { area: 'main' });
                            }
                            preview.dispose();
                            _this.shell.activateWidget(editorWidget.id);
                            _this.currentEditorPreview = Promise.resolve(undefined);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    EditorPreviewManager.prototype.isCurrentPreviewUri = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var editorPreview, currentUri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.currentEditorPreview];
                    case 1:
                        editorPreview = _a.sent();
                        currentUri = editorPreview && editorPreview.getResourceUri();
                        return [2 /*return*/, !!currentUri && currentUri.isEqualOrParent(uri)];
                }
            });
        });
    };
    EditorPreviewManager.prototype.canHandle = function (uri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.preferences['editor.enablePreview'];
                        if (!_a) return [3 /*break*/, 3];
                        _b = options && options.preview;
                        if (_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.isCurrentPreviewUri(uri)];
                    case 1:
                        _b = (_c.sent());
                        _c.label = 2;
                    case 2:
                        _a = (_b);
                        _c.label = 3;
                    case 3:
                        if (_a) {
                            return [2 /*return*/, 200];
                        }
                        return [2 /*return*/, 0];
                }
            });
        });
    };
    EditorPreviewManager.prototype.open = function (uri, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var widget, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.pinCurrentEditor(uri, options)];
                    case 1:
                        widget = _b.sent();
                        if (widget) {
                            return [2 /*return*/, widget];
                        }
                        return [4 /*yield*/, this.replaceCurrentPreview(uri, options)];
                    case 2:
                        _a = (_b.sent());
                        if (_a) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.openNewPreview(uri, options)];
                    case 3:
                        _a = (_b.sent());
                        _b.label = 4;
                    case 4:
                        widget = _a;
                        return [4 /*yield*/, this.editorManager.open(uri, options)];
                    case 5:
                        _b.sent();
                        return [2 /*return*/, widget];
                }
            });
        });
    };
    EditorPreviewManager.prototype.pinCurrentEditor = function (uri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var editorWidget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.editorManager.getByUri(uri)];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.editorManager.open(uri, options)];
                    case 2:
                        editorWidget = _a.sent();
                        if (editorWidget.parent instanceof editor_preview_widget_1.EditorPreviewWidget) {
                            if (!options.preview) {
                                editorWidget.parent.pinEditorWidget();
                            }
                            return [2 /*return*/, editorWidget.parent];
                        }
                        return [2 /*return*/, editorWidget];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EditorPreviewManager.prototype.replaceCurrentPreview = function (uri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var currentPreview, editorWidget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.currentEditorPreview];
                    case 1:
                        currentPreview = _a.sent();
                        if (!currentPreview) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.editorManager.getOrCreateByUri(uri)];
                    case 2:
                        editorWidget = _a.sent();
                        currentPreview.replaceEditorWidget(editorWidget);
                        return [2 /*return*/, currentPreview];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EditorPreviewManager.prototype.openNewPreview = function (uri, options) {
        return this.currentEditorPreview = _super.prototype.open.call(this, uri, options);
    };
    EditorPreviewManager.prototype.createWidgetOptions = function (uri, options) {
        return {
            kind: 'editor-preview-widget',
            id: editor_preview_factory_1.EditorPreviewWidgetFactory.generateUniqueId(),
            initialUri: uri.withoutFragment().toString(),
            session: editor_preview_factory_1.EditorPreviewWidgetFactory.sessionId
        };
    };
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], EditorPreviewManager.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(browser_1.ApplicationShell),
        __metadata("design:type", browser_1.ApplicationShell)
    ], EditorPreviewManager.prototype, "shell", void 0);
    __decorate([
        inversify_1.inject(editor_preview_preferences_1.EditorPreviewPreferences),
        __metadata("design:type", Object)
    ], EditorPreviewManager.prototype, "preferences", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], EditorPreviewManager.prototype, "init", null);
    EditorPreviewManager = __decorate([
        inversify_1.injectable()
    ], EditorPreviewManager);
    return EditorPreviewManager;
}(browser_3.WidgetOpenHandler));
exports.EditorPreviewManager = EditorPreviewManager;


/***/ }),

/***/ "../node_modules/@theia/editor-preview/lib/browser/editor-preview-preferences.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@theia/editor-preview/lib/browser/editor-preview-preferences.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Google and others.
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
exports.EditorPreviewConfigSchema = {
    'type': 'object',
    properties: {
        'editor.enablePreview': {
            type: 'boolean',
            description: 'Controls whether editors are opened as previews when selected or single-clicked.',
            default: true
        },
    }
};
exports.EditorPreviewPreferences = Symbol('EditorPreviewPreferences');
function createEditorPreviewPreferences(preferences) {
    return browser_1.createPreferenceProxy(preferences, exports.EditorPreviewConfigSchema);
}
exports.createEditorPreviewPreferences = createEditorPreviewPreferences;
function bindEditorPreviewPreferences(bind) {
    bind(exports.EditorPreviewPreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(browser_1.PreferenceService);
        return createEditorPreviewPreferences(preferences);
    }).inSingletonScope();
    bind(browser_1.PreferenceContribution).toConstantValue({ schema: exports.EditorPreviewConfigSchema });
}
exports.bindEditorPreviewPreferences = bindEditorPreviewPreferences;


/***/ }),

/***/ "../node_modules/@theia/editor-preview/lib/browser/editor-preview-widget.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@theia/editor-preview/lib/browser/editor-preview-widget.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Google and others.
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
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var messaging_1 = __webpack_require__(/*! @phosphor/messaging */ "../node_modules/@phosphor/messaging/lib/index.js");
var algorithm_1 = __webpack_require__(/*! @phosphor/algorithm */ "../node_modules/@phosphor/algorithm/lib/index.js");
/** The class name added to Editor Preview Widget titles. */
var PREVIEW_TITLE_CLASS = ' theia-editor-preview-title-unpinned';
var EditorPreviewWidget = /** @class */ (function (_super) {
    __extends(EditorPreviewWidget, _super);
    function EditorPreviewWidget(widgetManager, editorWidget_) {
        var _this = _super.call(this) || this;
        _this.widgetManager = widgetManager;
        _this.editorWidget_ = editorWidget_;
        _this.pinListeners = new common_1.DisposableCollection();
        _this.onDidChangeTrackableWidgetsEmitter = new common_1.Emitter();
        _this.onDidChangeTrackableWidgets = _this.onDidChangeTrackableWidgetsEmitter.event;
        _this.onPinnedEmitter = new common_1.Emitter();
        _this.onPinned = _this.onPinnedEmitter.event;
        _this.title.closable = true;
        _this.title.className += PREVIEW_TITLE_CLASS;
        _this.layout = new browser_1.PanelLayout();
        _this.toDispose.push(_this.onDidChangeTrackableWidgetsEmitter);
        _this.toDispose.push(_this.onPinnedEmitter);
        _this.toDispose.push(_this.pinListeners);
        return _this;
    }
    Object.defineProperty(EditorPreviewWidget.prototype, "editorWidget", {
        get: function () {
            return this.editorWidget_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorPreviewWidget.prototype, "pinned", {
        get: function () {
            return this.pinned_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorPreviewWidget.prototype, "saveable", {
        get: function () {
            if (this.editorWidget_) {
                return this.editorWidget_.saveable;
            }
        },
        enumerable: true,
        configurable: true
    });
    EditorPreviewWidget.prototype.getResourceUri = function () {
        return this.editorWidget_ && this.editorWidget_.getResourceUri();
    };
    EditorPreviewWidget.prototype.createMoveToUri = function (resourceUri) {
        return this.editorWidget_ && this.editorWidget_.createMoveToUri(resourceUri);
    };
    EditorPreviewWidget.prototype.pinEditorWidget = function () {
        this.title.className = this.title.className.replace(PREVIEW_TITLE_CLASS, '');
        this.pinListeners.dispose();
        this.pinned_ = true;
        this.onPinnedEmitter.fire({ preview: this, editorWidget: this.editorWidget_ });
    };
    EditorPreviewWidget.prototype.replaceEditorWidget = function (editorWidget) {
        if (editorWidget === this.editorWidget_) {
            return;
        }
        if (this.editorWidget_) {
            this.editorWidget_.dispose();
        }
        this.editorWidget_ = editorWidget;
        this.attachPreviewWidget(this.editorWidget_);
        this.onResize(browser_1.Widget.ResizeMessage.UnknownSize);
    };
    EditorPreviewWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        if (this.editorWidget_) {
            this.editorWidget_.activate();
        }
    };
    EditorPreviewWidget.prototype.attachPreviewWidget = function (w) {
        var _this = this;
        this.layout.addWidget(w);
        this.title.label = w.title.label;
        this.title.iconClass = w.title.iconClass;
        this.title.caption = w.title.caption;
        if (browser_1.Saveable.isSource(w)) {
            browser_1.Saveable.apply(this);
            var dirtyListener_1 = w.saveable.onDirtyChanged(function () {
                dirtyListener_1.dispose();
                _this.pinEditorWidget();
            });
            this.toDispose.push(dirtyListener_1);
        }
        w.parent = this;
        this.onDidChangeTrackableWidgetsEmitter.fire([w]);
    };
    EditorPreviewWidget.prototype.onAfterAttach = function (msg) {
        _super.prototype.onAfterAttach.call(this, msg);
        if (this.editorWidget_ && !this.editorWidget_.isAttached) {
            this.attachPreviewWidget(this.editorWidget_);
        }
        this.addTabPinningLogic();
    };
    EditorPreviewWidget.prototype.addTabPinningLogic = function () {
        var _this = this;
        var parent = this.parent;
        if (!this.pinned_ && parent instanceof browser_1.DockPanel) {
            if (!this.lastParent) {
                this.lastParent = parent;
            }
            var tabBar_1 = algorithm_1.find(parent.tabBars(), function (bar) { return bar.titles.indexOf(_this.title) !== -1; });
            // Widget has been dragged into a different panel
            if (this.lastParent !== parent || !tabBar_1) {
                this.pinEditorWidget();
                return;
            }
            var layoutListener_1 = function (panel) {
                if (tabBar_1 !== algorithm_1.find(panel.tabBars(), function (bar) { return bar.titles.indexOf(_this.title) !== -1; })) {
                    _this.pinEditorWidget();
                }
            };
            parent.layoutModified.connect(layoutListener_1);
            this.pinListeners.push({ dispose: function () { return parent.layoutModified.disconnect(layoutListener_1); } });
            var tabMovedListener_1 = function (w, args) {
                if (args.title === _this.title) {
                    _this.pinEditorWidget();
                }
            };
            tabBar_1.tabMoved.connect(tabMovedListener_1);
            this.pinListeners.push({ dispose: function () { return tabBar_1.tabMoved.disconnect(tabMovedListener_1); } });
            var attachDoubleClickListener_1 = function (attempt) {
                var tabNode = tabBar_1.contentNode.children.item(tabBar_1.currentIndex);
                if (!tabNode) {
                    return attempt < 60 ? requestAnimationFrame(function () { return attachDoubleClickListener_1(++attempt); }) : undefined;
                }
                var dblClickListener = function (event) { return _this.pinEditorWidget(); };
                tabNode.addEventListener('dblclick', dblClickListener);
                _this.pinListeners.push({ dispose: function () { return tabNode.removeEventListener('dblclick', dblClickListener); } });
            };
            requestAnimationFrame(function () { return attachDoubleClickListener_1(0); });
        }
    };
    EditorPreviewWidget.prototype.onResize = function (msg) {
        if (this.editorWidget_) {
            // Currently autosizing does not work with the Monaco Editor Widget
            // https://github.com/eclipse-theia/theia/blob/c86a33b9ee0e5bb1dc49c66def123ffb2cadbfe4/packages/monaco/src/browser/monaco-editor.ts#L461
            // After this is supported we can rely on the underlying widget to resize and remove
            // the following if statement. (Without it, the editor will be initialized to its
            // minimum size)
            if (msg.width < 0 || msg.height < 0) {
                var width = parseInt(this.node.style.width || '');
                var height = parseInt(this.node.style.height || '');
                if (width && height) {
                    this.editorWidget_.editor.setSize({ width: width, height: height });
                }
            }
            messaging_1.MessageLoop.sendMessage(this.editorWidget_, msg);
        }
    };
    EditorPreviewWidget.prototype.getTrackableWidgets = function () {
        var _this = this;
        return new Promise(function (resolve) { return resolve(_this.editorWidget_ ? [_this.editorWidget_] : []); });
    };
    EditorPreviewWidget.prototype.storeState = function () {
        return {
            pinned: this.pinned_,
            editorState: this.editorWidget_ ? this.editorWidget_.storeState() : undefined,
            previewDescription: this.editorWidget_ ? this.widgetManager.getDescription(this.editorWidget_) : undefined
        };
    };
    EditorPreviewWidget.prototype.restoreState = function (state) {
        return __awaiter(this, void 0, void 0, function () {
            var pinned, editorState, previewDescription, factoryId, options, editorWidget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pinned = state.pinned, editorState = state.editorState, previewDescription = state.previewDescription;
                        if (!(!this.editorWidget_ && previewDescription)) return [3 /*break*/, 2];
                        factoryId = previewDescription.factoryId, options = previewDescription.options;
                        return [4 /*yield*/, this.widgetManager.getOrCreateWidget(factoryId, options)];
                    case 1:
                        editorWidget = _a.sent();
                        this.replaceEditorWidget(editorWidget);
                        _a.label = 2;
                    case 2:
                        if (this.editorWidget && editorState) {
                            this.editorWidget.restoreState(editorState);
                        }
                        if (pinned) {
                            this.pinEditorWidget();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return EditorPreviewWidget;
}(browser_1.BaseWidget));
exports.EditorPreviewWidget = EditorPreviewWidget;


/***/ }),

/***/ "../node_modules/@theia/editor-preview/src/browser/style/index.css":
/*!*************************************************************************!*\
  !*** ../node_modules/@theia/editor-preview/src/browser/style/index.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/@theia/editor-preview/src/browser/style/index.css");

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

/***/ "../node_modules/css-loader/index.js!../node_modules/@theia/editor-preview/src/browser/style/editor-preview-widget.css":
/*!********************************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@theia/editor-preview/src/browser/style/editor-preview-widget.css ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 Google and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.theia-editor-preview-title-unpinned .p-TabBar-tabLabel {\n  font-style: italic;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@theia/editor-preview/src/browser/style/index.css":
/*!****************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@theia/editor-preview/src/browser/style/index.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../../css-loader!./editor-preview-widget.css */ "../node_modules/css-loader/index.js!../node_modules/@theia/editor-preview/src/browser/style/editor-preview-widget.css"), "");

// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 Google and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=72.bundle.js.map
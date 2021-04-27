(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ "../node_modules/@theia/typehierarchy/lib/browser/tree/typehierarchy-tree-container.js":
/*!*********************************************************************************************!*\
  !*** ../node_modules/@theia/typehierarchy/lib/browser/tree/typehierarchy-tree-container.js ***!
  \*********************************************************************************************/
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
var tree_1 = __webpack_require__(/*! @theia/core/lib/browser/tree */ "../node_modules/@theia/core/lib/browser/tree/index.js");
var typehierarchy_tree_1 = __webpack_require__(/*! ./typehierarchy-tree */ "../node_modules/@theia/typehierarchy/lib/browser/tree/typehierarchy-tree.js");
var typehierarchy_tree_model_1 = __webpack_require__(/*! ./typehierarchy-tree-model */ "../node_modules/@theia/typehierarchy/lib/browser/tree/typehierarchy-tree-model.js");
var typehierarchy_tree_widget_1 = __webpack_require__(/*! ./typehierarchy-tree-widget */ "../node_modules/@theia/typehierarchy/lib/browser/tree/typehierarchy-tree-widget.js");
function createHierarchyTreeContainer(parent) {
    var child = tree_1.createTreeContainer(parent);
    child.unbind(tree_1.TreeImpl);
    child.bind(typehierarchy_tree_1.TypeHierarchyTree).toSelf();
    child.rebind(tree_1.Tree).toService(typehierarchy_tree_1.TypeHierarchyTree);
    child.unbind(tree_1.TreeModelImpl);
    child.bind(typehierarchy_tree_model_1.TypeHierarchyTreeModel).toSelf();
    child.rebind(tree_1.TreeModel).toService(typehierarchy_tree_model_1.TypeHierarchyTreeModel);
    child.bind(typehierarchy_tree_widget_1.TypeHierarchyTreeWidget).toSelf();
    child.rebind(tree_1.TreeWidget).toService(typehierarchy_tree_widget_1.TypeHierarchyTreeWidget);
    return child;
}
function createHierarchyTreeWidget(parent) {
    return createHierarchyTreeContainer(parent).get(typehierarchy_tree_widget_1.TypeHierarchyTreeWidget);
}
exports.createHierarchyTreeWidget = createHierarchyTreeWidget;


/***/ }),

/***/ "../node_modules/@theia/typehierarchy/lib/browser/tree/typehierarchy-tree-model.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@theia/typehierarchy/lib/browser/tree/typehierarchy-tree-model.js ***!
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
var tree_model_1 = __webpack_require__(/*! @theia/core/lib/browser/tree/tree-model */ "../node_modules/@theia/core/lib/browser/tree/tree-model.js");
var typehierarchy_protocol_1 = __webpack_require__(/*! @theia/languages/lib/browser/typehierarchy/typehierarchy-protocol */ "../node_modules/@theia/languages/lib/browser/typehierarchy/typehierarchy-protocol.js");
var typehierarchy_service_1 = __webpack_require__(/*! ../typehierarchy-service */ "../node_modules/@theia/typehierarchy/lib/browser/typehierarchy-service.js");
var typehierarchy_tree_1 = __webpack_require__(/*! ./typehierarchy-tree */ "../node_modules/@theia/typehierarchy/lib/browser/tree/typehierarchy-tree.js");
var TypeHierarchyTreeModel = /** @class */ (function (_super) {
    __extends(TypeHierarchyTreeModel, _super);
    function TypeHierarchyTreeModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypeHierarchyTreeModel.prototype.doOpenNode = function (node) {
        // do nothing (in particular do not expand the node)
    };
    /**
     * Initializes the tree by calculating and setting a new tree root node.
     */
    TypeHierarchyTreeModel.prototype.initialize = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var location, languageId, direction, service, params, symbol, root;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.tree.root = undefined;
                        this.tree.service = undefined;
                        location = options.location, languageId = options.languageId, direction = options.direction;
                        if (!(languageId && location)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.typeHierarchyServiceProvider.get(languageId)];
                    case 1:
                        service = _a.sent();
                        if (!service) return [3 /*break*/, 3];
                        params = {
                            textDocument: {
                                uri: location.uri
                            },
                            position: location.range.start,
                            direction: direction,
                            resolve: 1
                        };
                        return [4 /*yield*/, service.get(params)];
                    case 2:
                        symbol = _a.sent();
                        if (symbol) {
                            root = typehierarchy_tree_1.TypeHierarchyTree.RootNode.create(symbol, direction);
                            root.expanded = true;
                            this.tree.root = root;
                            this.tree.service = service;
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * If the tree root is set, it resets it with the inverse type hierarchy direction.
     */
    TypeHierarchyTreeModel.prototype.flipDirection = function () {
        return __awaiter(this, void 0, void 0, function () {
            var root, service, direction, item, uri, selectionRange, location_1;
            return __generator(this, function (_a) {
                root = this.tree.root;
                service = this.tree.service;
                if (typehierarchy_tree_1.TypeHierarchyTree.RootNode.is(root) && !!service) {
                    direction = root.direction, item = root.item;
                    uri = item.uri, selectionRange = item.selectionRange;
                    location_1 = {
                        uri: uri,
                        range: selectionRange
                    };
                    this.initialize({
                        direction: direction === typehierarchy_protocol_1.TypeHierarchyDirection.Children ? typehierarchy_protocol_1.TypeHierarchyDirection.Parents : typehierarchy_protocol_1.TypeHierarchyDirection.Children,
                        location: location_1,
                        languageId: service.languageId
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        inversify_1.inject(typehierarchy_service_1.TypeHierarchyServiceProvider),
        __metadata("design:type", typehierarchy_service_1.TypeHierarchyServiceProvider)
    ], TypeHierarchyTreeModel.prototype, "typeHierarchyServiceProvider", void 0);
    TypeHierarchyTreeModel = __decorate([
        inversify_1.injectable()
    ], TypeHierarchyTreeModel);
    return TypeHierarchyTreeModel;
}(tree_model_1.TreeModelImpl));
exports.TypeHierarchyTreeModel = TypeHierarchyTreeModel;


/***/ }),

/***/ "../node_modules/@theia/typehierarchy/lib/browser/tree/typehierarchy-tree-widget.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/@theia/typehierarchy/lib/browser/tree/typehierarchy-tree-widget.js ***!
  \******************************************************************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var widgets_1 = __webpack_require__(/*! @phosphor/widgets */ "../node_modules/@phosphor/widgets/lib/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var browser_1 = __webpack_require__(/*! @theia/languages/lib/browser */ "../node_modules/@theia/languages/lib/browser/index.js");
var editor_manager_1 = __webpack_require__(/*! @theia/editor/lib/browser/editor-manager */ "../node_modules/@theia/editor/lib/browser/editor-manager.js");
var context_menu_renderer_1 = __webpack_require__(/*! @theia/core/lib/browser/context-menu-renderer */ "../node_modules/@theia/core/lib/browser/context-menu-renderer.js");
var tree_widget_1 = __webpack_require__(/*! @theia/core/lib/browser/tree/tree-widget */ "../node_modules/@theia/core/lib/browser/tree/tree-widget.js");
var typehierarchy_tree_model_1 = __webpack_require__(/*! ./typehierarchy-tree-model */ "../node_modules/@theia/typehierarchy/lib/browser/tree/typehierarchy-tree-model.js");
var typehierarchy_tree_1 = __webpack_require__(/*! ./typehierarchy-tree */ "../node_modules/@theia/typehierarchy/lib/browser/tree/typehierarchy-tree.js");
var TypeHierarchyTreeWidget = /** @class */ (function (_super) {
    __extends(TypeHierarchyTreeWidget, _super);
    function TypeHierarchyTreeWidget(props, model, contextMenuRenderer, editorManager) {
        var _this = _super.call(this, props, model, contextMenuRenderer) || this;
        _this.props = props;
        _this.model = model;
        _this.contextMenuRenderer = contextMenuRenderer;
        _this.editorManager = editorManager;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _this.icons = new Map(Array.from(Object.keys(browser_1.SymbolKind)).map(function (key) { return [browser_1.SymbolKind[key], key.toLocaleLowerCase()]; }));
        _this.id = TypeHierarchyTreeWidget_1.WIDGET_ID;
        _this.title.label = TypeHierarchyTreeWidget_1.WIDGET_LABEL;
        _this.title.caption = TypeHierarchyTreeWidget_1.WIDGET_LABEL;
        _this.addClass(TypeHierarchyTreeWidget_1.Styles.TYPE_HIERARCHY_TREE_CLASS);
        _this.title.closable = true;
        _this.title.iconClass = 'fa fa-sitemap';
        _this.toDispose.push(_this.model.onSelectionChanged(function (selection) {
            var node = selection[0];
            if (node) {
                _this.openEditor(node, true);
            }
        }));
        _this.toDispose.push(_this.model.onOpenNode(function (node) { return _this.openEditor(node); }));
        return _this;
    }
    TypeHierarchyTreeWidget_1 = TypeHierarchyTreeWidget;
    /**
     * Initializes the widget with the new input.
     */
    TypeHierarchyTreeWidget.prototype.initialize = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.initialize(options)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * See: `TreeWidget#renderIcon`.
     */
    TypeHierarchyTreeWidget.prototype.renderIcon = function (node) {
        if (typehierarchy_tree_1.TypeHierarchyTree.Node.is(node)) {
            return React.createElement("div", { className: 'symbol-icon ' + this.icons.get(node.item.kind) || false });
        }
        return undefined;
    };
    /**
     * Opens up the node in the editor. On demand (`keepFocus`) it reveals the location in the editor.
     */
    TypeHierarchyTreeWidget.prototype.openEditor = function (node, keepFocus) {
        if (keepFocus === void 0) { keepFocus = false; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, selectionRange, uri, editorWidget;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!typehierarchy_tree_1.TypeHierarchyTree.Node.is(node)) return [3 /*break*/, 2];
                        _a = node.item, selectionRange = _a.selectionRange, uri = _a.uri;
                        return [4 /*yield*/, this.editorManager.open(new uri_1.default(uri), {
                                mode: keepFocus ? 'reveal' : 'activate',
                                selection: browser_1.Range.create(selectionRange.start, selectionRange.end)
                            })];
                    case 1:
                        editorWidget = _b.sent();
                        if (editorWidget.parent instanceof widgets_1.DockPanel) {
                            editorWidget.parent.selectWidget(editorWidget);
                        }
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    var TypeHierarchyTreeWidget_1;
    TypeHierarchyTreeWidget = TypeHierarchyTreeWidget_1 = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(tree_widget_1.TreeProps)),
        __param(1, inversify_1.inject(typehierarchy_tree_model_1.TypeHierarchyTreeModel)),
        __param(2, inversify_1.inject(context_menu_renderer_1.ContextMenuRenderer)),
        __param(3, inversify_1.inject(editor_manager_1.EditorManager)),
        __metadata("design:paramtypes", [Object, typehierarchy_tree_model_1.TypeHierarchyTreeModel, Object, editor_manager_1.EditorManager])
    ], TypeHierarchyTreeWidget);
    return TypeHierarchyTreeWidget;
}(tree_widget_1.TreeWidget));
exports.TypeHierarchyTreeWidget = TypeHierarchyTreeWidget;
(function (TypeHierarchyTreeWidget) {
    TypeHierarchyTreeWidget.WIDGET_ID = 'theia-typehierarchy';
    TypeHierarchyTreeWidget.WIDGET_LABEL = 'Type Hierarchy';
    /**
     * CSS styles for the `Type Hierarchy` widget.
     */
    var Styles;
    (function (Styles) {
        Styles.TYPE_HIERARCHY_TREE_CLASS = 'theia-type-hierarchy-tree';
    })(Styles = TypeHierarchyTreeWidget.Styles || (TypeHierarchyTreeWidget.Styles = {}));
})(TypeHierarchyTreeWidget = exports.TypeHierarchyTreeWidget || (exports.TypeHierarchyTreeWidget = {}));
exports.TypeHierarchyTreeWidget = TypeHierarchyTreeWidget;


/***/ }),

/***/ "../node_modules/@theia/typehierarchy/lib/browser/tree/typehierarchy-tree.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@theia/typehierarchy/lib/browser/tree/typehierarchy-tree.js ***!
  \***********************************************************************************/
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
var uuid_1 = __webpack_require__(/*! uuid */ "../node_modules/uuid/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var editor_1 = __webpack_require__(/*! @theia/editor/lib/browser/editor */ "../node_modules/@theia/editor/lib/browser/editor.js");
var tree_1 = __webpack_require__(/*! @theia/core/lib/browser/tree */ "../node_modules/@theia/core/lib/browser/tree/index.js");
var typehierarchy_protocol_1 = __webpack_require__(/*! @theia/languages/lib/browser/typehierarchy/typehierarchy-protocol */ "../node_modules/@theia/languages/lib/browser/typehierarchy/typehierarchy-protocol.js");
var TypeHierarchyTree = /** @class */ (function (_super) {
    __extends(TypeHierarchyTree, _super);
    function TypeHierarchyTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypeHierarchyTree_1 = TypeHierarchyTree;
    TypeHierarchyTree.prototype.resolveChildren = function (parent) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!TypeHierarchyTree_1.Node.is(parent)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.ensureResolved(parent)];
                    case 1:
                        _a.sent();
                        if (parent.children.length === 0) {
                            delete parent.children;
                            delete parent.expanded;
                            return [2 /*return*/, []];
                        }
                        return [2 /*return*/, parent.children.slice()];
                    case 2: return [2 /*return*/, []];
                }
            });
        });
    };
    Object.defineProperty(TypeHierarchyTree.prototype, "direction", {
        /**
         * Returns with the direction of the type hierarchy attached to the root node. `undefined` if the root is not set.
         */
        get: function () {
            if (TypeHierarchyTree_1.RootNode.is(this.root)) {
                return this.root.direction;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Makes sure, the node and its children are resolved. Resolves it on demand.
     */
    TypeHierarchyTree.prototype.ensureResolved = function (node) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, service, direction_1, item, param, resolvedItem, items;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!node.resolved) return [3 /*break*/, 2];
                        _a = this, service = _a.service, direction_1 = _a.direction;
                        if (!(service && direction_1 !== undefined)) return [3 /*break*/, 2];
                        item = node.item;
                        param = {
                            item: item,
                            direction: direction_1,
                            resolve: 1
                        };
                        return [4 /*yield*/, service.resolve(param)];
                    case 1:
                        resolvedItem = _b.sent();
                        if (resolvedItem) {
                            node.resolved = true;
                            items = typehierarchy_protocol_1.TypeHierarchyDirection.Children === direction_1 ? resolvedItem.children : resolvedItem.parents;
                            if (items) {
                                node.children = items.map(function (child) { return TypeHierarchyTree_1.Node.create(child, direction_1, false); });
                            }
                            else {
                                node.children = [];
                            }
                        }
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    var TypeHierarchyTree_1;
    TypeHierarchyTree = TypeHierarchyTree_1 = __decorate([
        inversify_1.injectable()
    ], TypeHierarchyTree);
    return TypeHierarchyTree;
}(tree_1.TreeImpl));
exports.TypeHierarchyTree = TypeHierarchyTree;
(function (TypeHierarchyTree) {
    var RootNode;
    (function (RootNode) {
        function is(node) {
            if (Node.is(node) && 'direction' in node) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                var direction = node.direction;
                return direction === typehierarchy_protocol_1.TypeHierarchyDirection.Children || direction === typehierarchy_protocol_1.TypeHierarchyDirection.Parents;
            }
            return false;
        }
        RootNode.is = is;
        function create(item, direction) {
            return __assign({}, Node.create(item, direction, true), { direction: direction });
        }
        RootNode.create = create;
    })(RootNode = TypeHierarchyTree.RootNode || (TypeHierarchyTree.RootNode = {}));
    var Node;
    (function (Node) {
        function is(node) {
            if (!!node && 'resolved' in node && 'item' in node) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                var _a = node, resolved = _a.resolved, item = _a.item;
                return typeof resolved === 'boolean' && !!item;
            }
            return false;
        }
        Node.is = is;
        function create(item, direction, resolved) {
            if (resolved === void 0) { resolved = true; }
            var items = typehierarchy_protocol_1.TypeHierarchyDirection.Children === direction ? item.children : item.parents;
            if (items && items.length > 0) {
                // If the server sent more levels than requested, use them.
                resolved = true;
            }
            var node = {
                id: uuid_1.v4(),
                name: item.name,
                description: item.detail,
                parent: undefined,
                location: editor_1.Location.create(item.uri, item.selectionRange),
                resolved: resolved,
                children: items ? items.map(function (child) { return create(child, direction, false); }) : [],
                expanded: false,
                visible: true,
                selected: false,
                kind: item.kind,
                decorationData: decorationData(item, direction),
                item: item
            };
            // Trick: if the node is `resolved` and have zero `children`, make the node non-expandable.
            if (resolved && node.children.length === 0) {
                delete node.expanded;
            }
            return node;
        }
        Node.create = create;
        function decorationData(item, direction) {
            var captionSuffixes = [{
                    data: new uri_1.default(item.uri).displayName,
                    fontData: {
                        color: 'var(--theia-descriptionForeground)',
                    }
                }];
            if (item.detail) {
                captionSuffixes.unshift({
                    data: item.detail,
                    fontData: {
                        color: 'var(--theia-list-highlightForeground)',
                        style: 'italic'
                    }
                });
            }
            var data = "" + (typehierarchy_protocol_1.TypeHierarchyDirection.Children === direction ? '▼' : '▲');
            var color = "var(" + (typehierarchy_protocol_1.TypeHierarchyDirection.Children === direction ? '--theia-errorForeground' : '--theia-successBackground') + ")";
            return {
                captionSuffixes: captionSuffixes,
                captionPrefixes: [{
                        data: data,
                        fontData: {
                            color: color,
                            style: 'bold'
                        }
                    }]
            };
        }
    })(Node = TypeHierarchyTree.Node || (TypeHierarchyTree.Node = {}));
})(TypeHierarchyTree = exports.TypeHierarchyTree || (exports.TypeHierarchyTree = {}));
exports.TypeHierarchyTree = TypeHierarchyTree;


/***/ }),

/***/ "../node_modules/@theia/typehierarchy/lib/browser/typehierarchy-contribution.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@theia/typehierarchy/lib/browser/typehierarchy-contribution.js ***!
  \**************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var shell_1 = __webpack_require__(/*! @theia/core/lib/browser/shell */ "../node_modules/@theia/core/lib/browser/shell/index.js");
var editor_menu_1 = __webpack_require__(/*! @theia/editor/lib/browser/editor-menu */ "../node_modules/@theia/editor/lib/browser/editor-menu.js");
var editor_manager_1 = __webpack_require__(/*! @theia/editor/lib/browser/editor-manager */ "../node_modules/@theia/editor/lib/browser/editor-manager.js");
var view_contribution_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/view-contribution */ "../node_modules/@theia/core/lib/browser/shell/view-contribution.js");
var typehierarchy_tree_1 = __webpack_require__(/*! ./tree/typehierarchy-tree */ "../node_modules/@theia/typehierarchy/lib/browser/tree/typehierarchy-tree.js");
var typehierarchy_tree_widget_1 = __webpack_require__(/*! ./tree/typehierarchy-tree-widget */ "../node_modules/@theia/typehierarchy/lib/browser/tree/typehierarchy-tree-widget.js");
var typehierarchy_protocol_1 = __webpack_require__(/*! @theia/languages/lib/browser/typehierarchy/typehierarchy-protocol */ "../node_modules/@theia/languages/lib/browser/typehierarchy/typehierarchy-protocol.js");
var TypeHierarchyContribution = /** @class */ (function (_super) {
    __extends(TypeHierarchyContribution, _super);
    function TypeHierarchyContribution() {
        return _super.call(this, {
            widgetId: typehierarchy_tree_widget_1.TypeHierarchyTreeWidget.WIDGET_ID,
            widgetName: typehierarchy_tree_widget_1.TypeHierarchyTreeWidget.WIDGET_LABEL,
            defaultWidgetOptions: {
                area: 'bottom'
            },
            toggleCommandId: TypeHierarchyCommands.TOGGLE_VIEW.id,
            toggleKeybinding: 'ctrlcmd+shift+h'
        }) || this;
    }
    TypeHierarchyContribution.prototype.openView = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var widget, _a, selection, languageId, direction;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, _super.prototype.openView.call(this, args)];
                    case 1:
                        widget = _b.sent();
                        _a = this.editorAccess, selection = _a.selection, languageId = _a.languageId;
                        direction = this.getDirection(args);
                        return [4 /*yield*/, widget.initialize({ location: selection, languageId: languageId, direction: direction })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, widget];
                }
            });
        });
    };
    TypeHierarchyContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        _super.prototype.registerCommands.call(this, commands);
        commands.registerCommand(TypeHierarchyCommands.OPEN_SUBTYPE, {
            execute: function () { return _this.openViewOrFlipHierarchyDirection(typehierarchy_protocol_1.TypeHierarchyDirection.Children); },
            isEnabled: this.isEnabled.bind(this)
        });
        commands.registerCommand(TypeHierarchyCommands.OPEN_SUPERTYPE, {
            execute: function () { return _this.openViewOrFlipHierarchyDirection(typehierarchy_protocol_1.TypeHierarchyDirection.Parents); },
            isEnabled: this.isEnabled.bind(this)
        });
    };
    TypeHierarchyContribution.prototype.registerMenus = function (menus) {
        _super.prototype.registerMenus.call(this, menus);
        var menuPath = __spread(editor_menu_1.EDITOR_CONTEXT_MENU, ['type-hierarchy']);
        menus.registerMenuAction(menuPath, {
            commandId: TypeHierarchyCommands.OPEN_SUBTYPE.id
        });
        menus.registerMenuAction(menuPath, {
            commandId: TypeHierarchyCommands.OPEN_SUPERTYPE.id
        });
    };
    TypeHierarchyContribution.prototype.registerKeybindings = function (keybindings) {
        _super.prototype.registerKeybindings.call(this, keybindings);
        keybindings.registerKeybinding({
            command: TypeHierarchyCommands.OPEN_SUBTYPE.id,
            keybinding: 'ctrlcmd+alt+h'
        });
    };
    /**
     * Flips the hierarchy direction in the `Type Hierarchy` view, if it is active and has a valid root.
     * Otherwise, calculates the type hierarchy based on the selection of the current editor.
     */
    TypeHierarchyContribution.prototype.openViewOrFlipHierarchyDirection = function (direction) {
        return __awaiter(this, void 0, void 0, function () {
            var activeWidget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isEnabled()) return [3 /*break*/, 4];
                        activeWidget = this.shell.activeWidget;
                        if (!(activeWidget instanceof typehierarchy_tree_widget_1.TypeHierarchyTreeWidget && typehierarchy_tree_1.TypeHierarchyTree.RootNode.is(activeWidget.model.root))) return [3 /*break*/, 2];
                        return [4 /*yield*/, activeWidget.model.flipDirection()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.openView({
                            toggle: false,
                            activate: true,
                            direction: direction
                        })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Enabled if the `current` editor has the `languageId` or the `Type Hierarchy` widget is the active one.
     */
    TypeHierarchyContribution.prototype.isEnabled = function (languageId) {
        if (languageId === void 0) { languageId = this.editorAccess.languageId; }
        return !!languageId || this.shell.activeWidget instanceof typehierarchy_tree_widget_1.TypeHierarchyTreeWidget;
    };
    /**
     * Extracts the type hierarchy direction from the argument. If the direction cannot be extracted, returns with the `Children` as the default type.
     */
    TypeHierarchyContribution.prototype.getDirection = function (args) {
        return !!args && !!args.direction ? args.direction : typehierarchy_protocol_1.TypeHierarchyDirection.Children;
    };
    __decorate([
        inversify_1.inject(editor_manager_1.EditorAccess),
        inversify_1.named(editor_manager_1.EditorAccess.CURRENT),
        __metadata("design:type", editor_manager_1.EditorAccess)
    ], TypeHierarchyContribution.prototype, "editorAccess", void 0);
    __decorate([
        inversify_1.inject(shell_1.ApplicationShell),
        __metadata("design:type", shell_1.ApplicationShell)
    ], TypeHierarchyContribution.prototype, "shell", void 0);
    TypeHierarchyContribution = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], TypeHierarchyContribution);
    return TypeHierarchyContribution;
}(view_contribution_1.AbstractViewContribution));
exports.TypeHierarchyContribution = TypeHierarchyContribution;
var TypeHierarchyCommands;
(function (TypeHierarchyCommands) {
    TypeHierarchyCommands.TOGGLE_VIEW = {
        id: 'typehierarchy:toggle'
    };
    TypeHierarchyCommands.OPEN_SUBTYPE = {
        id: 'typehierarchy:open-subtype',
        label: 'Subtype Hierarchy'
    };
    TypeHierarchyCommands.OPEN_SUPERTYPE = {
        id: 'typehierarchy:open-supertype',
        label: 'Supertype Hierarchy'
    };
})(TypeHierarchyCommands = exports.TypeHierarchyCommands || (exports.TypeHierarchyCommands = {}));


/***/ }),

/***/ "../node_modules/@theia/typehierarchy/lib/browser/typehierarchy-frontend-module.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@theia/typehierarchy/lib/browser/typehierarchy-frontend-module.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var widget_manager_1 = __webpack_require__(/*! @theia/core/lib/browser/widget-manager */ "../node_modules/@theia/core/lib/browser/widget-manager.js");
var view_contribution_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/view-contribution */ "../node_modules/@theia/core/lib/browser/shell/view-contribution.js");
var typehierarchy_service_1 = __webpack_require__(/*! ./typehierarchy-service */ "../node_modules/@theia/typehierarchy/lib/browser/typehierarchy-service.js");
var typehierarchy_contribution_1 = __webpack_require__(/*! ./typehierarchy-contribution */ "../node_modules/@theia/typehierarchy/lib/browser/typehierarchy-contribution.js");
var typehierarchy_tree_widget_1 = __webpack_require__(/*! ./tree/typehierarchy-tree-widget */ "../node_modules/@theia/typehierarchy/lib/browser/tree/typehierarchy-tree-widget.js");
var typehierarchy_tree_container_1 = __webpack_require__(/*! ./tree/typehierarchy-tree-container */ "../node_modules/@theia/typehierarchy/lib/browser/tree/typehierarchy-tree-container.js");
__webpack_require__(/*! ../../src/browser/style/index.css */ "../node_modules/@theia/typehierarchy/src/browser/style/index.css");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(typehierarchy_service_1.TypeHierarchyServiceProvider).toSelf().inSingletonScope();
    view_contribution_1.bindViewContribution(bind, typehierarchy_contribution_1.TypeHierarchyContribution);
    bind(widget_manager_1.WidgetFactory).toDynamicValue(function (context) { return ({
        id: typehierarchy_tree_widget_1.TypeHierarchyTreeWidget.WIDGET_ID,
        createWidget: function () { return typehierarchy_tree_container_1.createHierarchyTreeWidget(context.container); }
    }); });
});


/***/ }),

/***/ "../node_modules/@theia/typehierarchy/lib/browser/typehierarchy-service.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@theia/typehierarchy/lib/browser/typehierarchy-service.js ***!
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
var language_client_provider_1 = __webpack_require__(/*! @theia/languages/lib/browser/language-client-provider */ "../node_modules/@theia/languages/lib/browser/language-client-provider.js");
var typehierarchy_protocol_1 = __webpack_require__(/*! @theia/languages/lib/browser/typehierarchy/typehierarchy-protocol */ "../node_modules/@theia/languages/lib/browser/typehierarchy/typehierarchy-protocol.js");
var TypeHierarchyServiceProvider = /** @class */ (function () {
    function TypeHierarchyServiceProvider() {
    }
    TypeHierarchyServiceProvider.prototype.get = function (languageId) {
        return __awaiter(this, void 0, void 0, function () {
            var client, typeHierarchyProvider;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!languageId) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.clientProvider.getLanguageClient(languageId)];
                    case 1:
                        client = _a.sent();
                        if (client && client.initializeResult) {
                            typeHierarchyProvider = client.initializeResult.capabilities.typeHierarchyProvider;
                            if (!!typeHierarchyProvider) {
                                return [2 /*return*/, new TypeHierarchyService(client, languageId)];
                            }
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, undefined];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(language_client_provider_1.LanguageClientProvider),
        __metadata("design:type", Object)
    ], TypeHierarchyServiceProvider.prototype, "clientProvider", void 0);
    TypeHierarchyServiceProvider = __decorate([
        inversify_1.injectable()
    ], TypeHierarchyServiceProvider);
    return TypeHierarchyServiceProvider;
}());
exports.TypeHierarchyServiceProvider = TypeHierarchyServiceProvider;
var TypeHierarchyService = /** @class */ (function () {
    function TypeHierarchyService(client, languageId) {
        this.client = client;
        this.languageId = languageId;
    }
    /**
     * Performs the `textDocument/typeHierarchy` LS method invocations.
     */
    TypeHierarchyService.prototype.get = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.sendRequest(typehierarchy_protocol_1.TypeHierarchyRequest.type, params)];
                    case 1:
                        item = _a.sent();
                        return [2 /*return*/, item ? item : undefined];
                }
            });
        });
    };
    /**
     * Performs the `typeHierarchy/resolve` LS method call.
     */
    TypeHierarchyService.prototype.resolve = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.sendRequest(typehierarchy_protocol_1.ResolveTypeHierarchyRequest.type, params)];
                    case 1:
                        item = _a.sent();
                        return [2 /*return*/, item ? item : undefined];
                }
            });
        });
    };
    return TypeHierarchyService;
}());
exports.TypeHierarchyService = TypeHierarchyService;


/***/ }),

/***/ "../node_modules/@theia/typehierarchy/src/browser/style/index.css":
/*!************************************************************************!*\
  !*** ../node_modules/@theia/typehierarchy/src/browser/style/index.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/@theia/typehierarchy/src/browser/style/index.css");

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

/***/ "../node_modules/css-loader/index.js!../node_modules/@theia/typehierarchy/src/browser/style/index.css":
/*!***************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@theia/typehierarchy/src/browser/style/index.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2019 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.theia-type-hierarchy-tree {\n    font-size: var(--theia-ui-font-size0);\n}\n\n.theia-type-hierarchy-tree .theia-caption-suffix {\n    padding-left: 10px !important;\n}\n\n.theia-type-hierarchy-tree .theia-caption-prefix {\n    padding-right: 5px !important;\n    padding-left: 1px !important;\n}\n", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=69.bundle.js.map
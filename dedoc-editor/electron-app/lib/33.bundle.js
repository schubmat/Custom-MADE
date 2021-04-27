(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "../node_modules/@theia/debug/lib/browser/debug-call-stack-item-type-key.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@theia/debug/lib/browser/debug-call-stack-item-type-key.js ***!
  \**********************************************************************************/
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
exports.DebugCallStackItemTypeKey = Symbol('DebugCallStackItemTypeKey');


/***/ }),

/***/ "../node_modules/@theia/debug/lib/browser/debug-watch-manager.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@theia/debug/lib/browser/debug-watch-manager.js ***!
  \***********************************************************************/
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../node_modules/@theia/core/lib/common/event.js");
var storage_service_1 = __webpack_require__(/*! @theia/core/lib/browser/storage-service */ "../node_modules/@theia/core/lib/browser/storage-service.js");
var DebugWatchManager = /** @class */ (function () {
    function DebugWatchManager() {
        this.onDidChangeEmitter = new event_1.Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
        this.idSequence = 0;
        this._watchExpressions = new Map();
    }
    Object.defineProperty(DebugWatchManager.prototype, "watchExpressions", {
        get: function () {
            return this._watchExpressions.entries();
        },
        enumerable: true,
        configurable: true
    });
    DebugWatchManager.prototype.addWatchExpression = function (expression) {
        var id = this.idSequence++;
        this._watchExpressions.set(id, expression);
        this.onDidChangeEmitter.fire(undefined);
        return id;
    };
    DebugWatchManager.prototype.removeWatchExpression = function (id) {
        if (!this._watchExpressions.has(id)) {
            return false;
        }
        this._watchExpressions.delete(id);
        this.onDidChangeEmitter.fire(undefined);
        return true;
    };
    DebugWatchManager.prototype.removeWatchExpressions = function () {
        if (this._watchExpressions.size) {
            this.idSequence = 0;
            this._watchExpressions.clear();
            this.onDidChangeEmitter.fire(undefined);
        }
    };
    DebugWatchManager.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.getData(this.storageKey, {
                            expressions: []
                        })];
                    case 1:
                        data = _a.sent();
                        this.restoreState(data);
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugWatchManager.prototype.save = function () {
        var data = this.storeState();
        this.storage.setData(this.storageKey, data);
    };
    Object.defineProperty(DebugWatchManager.prototype, "storageKey", {
        get: function () {
            return 'debug:watch';
        },
        enumerable: true,
        configurable: true
    });
    DebugWatchManager.prototype.storeState = function () {
        return {
            expressions: __spread(this._watchExpressions.values())
        };
    };
    DebugWatchManager.prototype.restoreState = function (state) {
        var e_1, _a;
        try {
            for (var _b = __values(state.expressions), _c = _b.next(); !_c.done; _c = _b.next()) {
                var expression = _c.value;
                this.addWatchExpression(expression);
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
    __decorate([
        inversify_1.inject(storage_service_1.StorageService),
        __metadata("design:type", Object)
    ], DebugWatchManager.prototype, "storage", void 0);
    DebugWatchManager = __decorate([
        inversify_1.injectable()
    ], DebugWatchManager);
    return DebugWatchManager;
}());
exports.DebugWatchManager = DebugWatchManager;


/***/ }),

/***/ "../node_modules/@theia/debug/lib/browser/view/debug-stack-frames-source.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@theia/debug/lib/browser/view/debug-stack-frames-source.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var source_tree_1 = __webpack_require__(/*! @theia/core/lib/browser/source-tree */ "../node_modules/@theia/core/lib/browser/source-tree/index.js");
var debug_view_model_1 = __webpack_require__(/*! ./debug-view-model */ "../node_modules/@theia/debug/lib/browser/view/debug-view-model.js");
var debounce = __webpack_require__(/*! p-debounce */ "../node_modules/p-debounce/index.js");
var DebugStackFramesSource = /** @class */ (function (_super) {
    __extends(DebugStackFramesSource, _super);
    function DebugStackFramesSource() {
        var _this = _super.call(this, {
            placeholder: 'Not paused'
        }) || this;
        _this.refresh = debounce(function () { return _this.fireDidChange(); }, 100);
        return _this;
    }
    DebugStackFramesSource.prototype.init = function () {
        var _this = this;
        this.refresh();
        this.toDispose.push(this.model.onDidChange(function () { return _this.refresh(); }));
    };
    DebugStackFramesSource.prototype.getElements = function () {
        var thread, _a, _b, frame, e_1_1, _c, framesErrorMessage_1, totalFrames;
        var e_1, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    thread = this.model.currentThread;
                    if (!thread) {
                        return [2 /*return*/];
                    }
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 6, 7, 8]);
                    _a = __values(thread.frames), _b = _a.next();
                    _e.label = 2;
                case 2:
                    if (!!_b.done) return [3 /*break*/, 5];
                    frame = _b.value;
                    return [4 /*yield*/, frame];
                case 3:
                    _e.sent();
                    _e.label = 4;
                case 4:
                    _b = _a.next();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_1_1 = _e.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 8:
                    if (!thread.stoppedDetails) return [3 /*break*/, 12];
                    _c = thread.stoppedDetails, framesErrorMessage_1 = _c.framesErrorMessage, totalFrames = _c.totalFrames;
                    if (!framesErrorMessage_1) return [3 /*break*/, 10];
                    return [4 /*yield*/, {
                            render: function () { return React.createElement("span", { title: framesErrorMessage_1 }, framesErrorMessage_1); }
                        }];
                case 9:
                    _e.sent();
                    _e.label = 10;
                case 10:
                    if (!(totalFrames && totalFrames > thread.frameCount)) return [3 /*break*/, 12];
                    return [4 /*yield*/, new LoadMoreStackFrames(thread)];
                case 11:
                    _e.sent();
                    _e.label = 12;
                case 12: return [2 /*return*/];
            }
        });
    };
    __decorate([
        inversify_1.inject(debug_view_model_1.DebugViewModel),
        __metadata("design:type", debug_view_model_1.DebugViewModel)
    ], DebugStackFramesSource.prototype, "model", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugStackFramesSource.prototype, "init", null);
    DebugStackFramesSource = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], DebugStackFramesSource);
    return DebugStackFramesSource;
}(source_tree_1.TreeSource));
exports.DebugStackFramesSource = DebugStackFramesSource;
var LoadMoreStackFrames = /** @class */ (function () {
    function LoadMoreStackFrames(thread) {
        this.thread = thread;
    }
    LoadMoreStackFrames.prototype.render = function () {
        return React.createElement("span", { className: 'theia-load-more-frames' }, "Load More Stack Frames");
    };
    LoadMoreStackFrames.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            var frames;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.thread.fetchFrames()];
                    case 1:
                        frames = _a.sent();
                        if (frames[0]) {
                            this.thread.currentFrame = frames[0];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return LoadMoreStackFrames;
}());
exports.LoadMoreStackFrames = LoadMoreStackFrames;


/***/ }),

/***/ "../node_modules/@theia/debug/lib/browser/view/debug-stack-frames-widget.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@theia/debug/lib/browser/view/debug-stack-frames-widget.js ***!
  \**********************************************************************************/
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
var source_tree_1 = __webpack_require__(/*! @theia/core/lib/browser/source-tree */ "../node_modules/@theia/core/lib/browser/source-tree/index.js");
var debug_stack_frames_source_1 = __webpack_require__(/*! ./debug-stack-frames-source */ "../node_modules/@theia/debug/lib/browser/view/debug-stack-frames-source.js");
var debug_stack_frame_1 = __webpack_require__(/*! ../model/debug-stack-frame */ "../node_modules/@theia/debug/lib/browser/model/debug-stack-frame.js");
var debug_view_model_1 = __webpack_require__(/*! ./debug-view-model */ "../node_modules/@theia/debug/lib/browser/view/debug-view-model.js");
var debug_call_stack_item_type_key_1 = __webpack_require__(/*! ../debug-call-stack-item-type-key */ "../node_modules/@theia/debug/lib/browser/debug-call-stack-item-type-key.js");
var DebugStackFramesWidget = /** @class */ (function (_super) {
    __extends(DebugStackFramesWidget, _super);
    function DebugStackFramesWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.updatingSelection = false;
        return _this;
    }
    DebugStackFramesWidget_1 = DebugStackFramesWidget;
    DebugStackFramesWidget.createContainer = function (parent) {
        var child = source_tree_1.SourceTreeWidget.createContainer(parent, {
            contextMenuPath: DebugStackFramesWidget_1.CONTEXT_MENU,
            virtualized: false,
            scrollIfActive: true
        });
        child.bind(debug_stack_frames_source_1.DebugStackFramesSource).toSelf();
        child.unbind(source_tree_1.SourceTreeWidget);
        child.bind(DebugStackFramesWidget_1).toSelf();
        return child;
    };
    DebugStackFramesWidget.createWidget = function (parent) {
        return DebugStackFramesWidget_1.createContainer(parent).get(DebugStackFramesWidget_1);
    };
    DebugStackFramesWidget.prototype.init = function () {
        var _this = this;
        _super.prototype.init.call(this);
        this.id = 'debug:frames:' + this.viewModel.id;
        this.title.label = 'Call Stack';
        this.toDispose.push(this.frames);
        this.source = this.frames;
        this.toDispose.push(this.viewModel.onDidChange(function () { return _this.updateWidgetSelection(); }));
        this.toDispose.push(this.model.onNodeRefreshed(function () { return _this.updateWidgetSelection(); }));
        this.toDispose.push(this.model.onSelectionChanged(function () { return _this.updateModelSelection(); }));
    };
    DebugStackFramesWidget.prototype.updateWidgetSelection = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentFrame, node;
            return __generator(this, function (_a) {
                if (this.updatingSelection) {
                    return [2 /*return*/];
                }
                this.updatingSelection = true;
                try {
                    currentFrame = this.viewModel.currentFrame;
                    if (currentFrame) {
                        node = this.model.getNode(currentFrame.id);
                        if (browser_1.SelectableTreeNode.is(node)) {
                            this.model.selectNode(node);
                        }
                    }
                }
                finally {
                    this.updatingSelection = false;
                }
                return [2 /*return*/];
            });
        });
    };
    DebugStackFramesWidget.prototype.updateModelSelection = function () {
        return __awaiter(this, void 0, void 0, function () {
            var node;
            return __generator(this, function (_a) {
                if (this.updatingSelection) {
                    return [2 /*return*/];
                }
                this.updatingSelection = true;
                try {
                    node = this.model.selectedNodes[0];
                    if (source_tree_1.TreeElementNode.is(node)) {
                        if (node.element instanceof debug_stack_frame_1.DebugStackFrame) {
                            node.element.thread.currentFrame = node.element;
                            this.debugCallStackItemTypeKey.set('stackFrame');
                        }
                    }
                }
                finally {
                    this.updatingSelection = false;
                }
                return [2 /*return*/];
            });
        });
    };
    DebugStackFramesWidget.prototype.toContextMenuArgs = function (node) {
        if (source_tree_1.TreeElementNode.is(node)) {
            if (node.element instanceof debug_stack_frame_1.DebugStackFrame) {
                var source = node.element.source;
                if (source) {
                    if (source.inMemory) {
                        var path = source.raw.path || source.raw.sourceReference;
                        if (path !== undefined) {
                            return [path];
                        }
                    }
                    else {
                        return [source.uri.toString()];
                    }
                }
            }
        }
        return undefined;
    };
    DebugStackFramesWidget.prototype.handleClickEvent = function (node, event) {
        if (source_tree_1.TreeElementNode.is(node) && node.element instanceof debug_stack_frames_source_1.LoadMoreStackFrames) {
            node.element.open();
        }
        _super.prototype.handleClickEvent.call(this, node, event);
    };
    DebugStackFramesWidget.prototype.getDefaultNodeStyle = function (node, props) {
        return undefined;
    };
    var DebugStackFramesWidget_1;
    DebugStackFramesWidget.CONTEXT_MENU = ['debug-frames-context-menu'];
    __decorate([
        inversify_1.inject(debug_stack_frames_source_1.DebugStackFramesSource),
        __metadata("design:type", debug_stack_frames_source_1.DebugStackFramesSource)
    ], DebugStackFramesWidget.prototype, "frames", void 0);
    __decorate([
        inversify_1.inject(debug_view_model_1.DebugViewModel),
        __metadata("design:type", debug_view_model_1.DebugViewModel)
    ], DebugStackFramesWidget.prototype, "viewModel", void 0);
    __decorate([
        inversify_1.inject(debug_call_stack_item_type_key_1.DebugCallStackItemTypeKey),
        __metadata("design:type", Object)
    ], DebugStackFramesWidget.prototype, "debugCallStackItemTypeKey", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugStackFramesWidget.prototype, "init", null);
    DebugStackFramesWidget = DebugStackFramesWidget_1 = __decorate([
        inversify_1.injectable()
    ], DebugStackFramesWidget);
    return DebugStackFramesWidget;
}(source_tree_1.SourceTreeWidget));
exports.DebugStackFramesWidget = DebugStackFramesWidget;


/***/ }),

/***/ "../node_modules/@theia/debug/lib/browser/view/debug-threads-source.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@theia/debug/lib/browser/view/debug-threads-source.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var debug_view_model_1 = __webpack_require__(/*! ./debug-view-model */ "../node_modules/@theia/debug/lib/browser/view/debug-view-model.js");
var DebugThreadsSource = /** @class */ (function (_super) {
    __extends(DebugThreadsSource, _super);
    function DebugThreadsSource() {
        return _super.call(this, {
            placeholder: 'Not running'
        }) || this;
    }
    DebugThreadsSource.prototype.init = function () {
        var _this = this;
        this.fireDidChange();
        this.toDispose.push(this.model.onDidChange(function () { return _this.fireDidChange(); }));
    };
    Object.defineProperty(DebugThreadsSource.prototype, "multiSession", {
        get: function () {
            return this.model.sessionCount > 1;
        },
        enumerable: true,
        configurable: true
    });
    DebugThreadsSource.prototype.getElements = function () {
        if (this.model.sessionCount === 1 && this.model.session && this.model.session.threadCount) {
            return this.model.session.threads;
        }
        return this.model.sessions;
    };
    __decorate([
        inversify_1.inject(debug_view_model_1.DebugViewModel),
        __metadata("design:type", debug_view_model_1.DebugViewModel)
    ], DebugThreadsSource.prototype, "model", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugThreadsSource.prototype, "init", null);
    DebugThreadsSource = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], DebugThreadsSource);
    return DebugThreadsSource;
}(source_tree_1.TreeSource));
exports.DebugThreadsSource = DebugThreadsSource;


/***/ }),

/***/ "../node_modules/@theia/debug/lib/browser/view/debug-threads-widget.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@theia/debug/lib/browser/view/debug-threads-widget.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var source_tree_1 = __webpack_require__(/*! @theia/core/lib/browser/source-tree */ "../node_modules/@theia/core/lib/browser/source-tree/index.js");
var debug_threads_source_1 = __webpack_require__(/*! ./debug-threads-source */ "../node_modules/@theia/debug/lib/browser/view/debug-threads-source.js");
var debug_session_1 = __webpack_require__(/*! ../debug-session */ "../node_modules/@theia/debug/lib/browser/debug-session.js");
var debug_thread_1 = __webpack_require__(/*! ../model/debug-thread */ "../node_modules/@theia/debug/lib/browser/model/debug-thread.js");
var debug_view_model_1 = __webpack_require__(/*! ../view/debug-view-model */ "../node_modules/@theia/debug/lib/browser/view/debug-view-model.js");
var debug_call_stack_item_type_key_1 = __webpack_require__(/*! ../debug-call-stack-item-type-key */ "../node_modules/@theia/debug/lib/browser/debug-call-stack-item-type-key.js");
var DebugThreadsWidget = /** @class */ (function (_super) {
    __extends(DebugThreadsWidget, _super);
    function DebugThreadsWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.updatingSelection = false;
        return _this;
    }
    DebugThreadsWidget_1 = DebugThreadsWidget;
    DebugThreadsWidget.createContainer = function (parent) {
        var child = source_tree_1.SourceTreeWidget.createContainer(parent, {
            contextMenuPath: DebugThreadsWidget_1.CONTEXT_MENU,
            virtualized: false,
            scrollIfActive: true
        });
        child.bind(debug_threads_source_1.DebugThreadsSource).toSelf();
        child.unbind(source_tree_1.SourceTreeWidget);
        child.bind(DebugThreadsWidget_1).toSelf();
        return child;
    };
    DebugThreadsWidget.createWidget = function (parent) {
        return DebugThreadsWidget_1.createContainer(parent).get(DebugThreadsWidget_1);
    };
    DebugThreadsWidget.prototype.init = function () {
        var _this = this;
        _super.prototype.init.call(this);
        this.id = 'debug:threads:' + this.viewModel.id;
        this.title.label = 'Threads';
        this.toDispose.push(this.threads);
        this.source = this.threads;
        this.toDispose.push(this.viewModel.onDidChange(function () { return _this.updateWidgetSelection(); }));
        this.toDispose.push(this.model.onSelectionChanged(function () { return _this.updateModelSelection(); }));
    };
    DebugThreadsWidget.prototype.updateWidgetSelection = function () {
        if (this.updatingSelection) {
            return;
        }
        this.updatingSelection = true;
        try {
            var currentThread = this.viewModel.currentThread;
            if (currentThread) {
                var node = this.model.getNode(currentThread.id);
                if (browser_1.SelectableTreeNode.is(node)) {
                    this.model.selectNode(node);
                }
            }
        }
        finally {
            this.updatingSelection = false;
        }
    };
    DebugThreadsWidget.prototype.updateModelSelection = function () {
        if (this.updatingSelection) {
            return;
        }
        this.updatingSelection = true;
        try {
            var node = this.model.selectedNodes[0];
            if (source_tree_1.TreeElementNode.is(node)) {
                if (node.element instanceof debug_session_1.DebugSession) {
                    this.viewModel.currentSession = node.element;
                    this.debugCallStackItemTypeKey.set('session');
                }
                else if (node.element instanceof debug_thread_1.DebugThread) {
                    node.element.session.currentThread = node.element;
                    this.debugCallStackItemTypeKey.set('thread');
                }
            }
        }
        finally {
            this.updatingSelection = false;
        }
    };
    DebugThreadsWidget.prototype.toContextMenuArgs = function (node) {
        if (source_tree_1.TreeElementNode.is(node) && node.element instanceof debug_thread_1.DebugThread) {
            return [node.element.raw.id];
        }
        return undefined;
    };
    DebugThreadsWidget.prototype.getDefaultNodeStyle = function (node, props) {
        if (this.threads.multiSession) {
            return _super.prototype.getDefaultNodeStyle.call(this, node, props);
        }
        return undefined;
    };
    var DebugThreadsWidget_1;
    DebugThreadsWidget.CONTEXT_MENU = ['debug-threads-context-menu'];
    DebugThreadsWidget.CONTROL_MENU = __spread(DebugThreadsWidget_1.CONTEXT_MENU, ['a_control']);
    DebugThreadsWidget.TERMINATE_MENU = __spread(DebugThreadsWidget_1.CONTEXT_MENU, ['b_terminate']);
    DebugThreadsWidget.OPEN_MENU = __spread(DebugThreadsWidget_1.CONTEXT_MENU, ['c_open']);
    __decorate([
        inversify_1.inject(debug_threads_source_1.DebugThreadsSource),
        __metadata("design:type", debug_threads_source_1.DebugThreadsSource)
    ], DebugThreadsWidget.prototype, "threads", void 0);
    __decorate([
        inversify_1.inject(debug_view_model_1.DebugViewModel),
        __metadata("design:type", debug_view_model_1.DebugViewModel)
    ], DebugThreadsWidget.prototype, "viewModel", void 0);
    __decorate([
        inversify_1.inject(debug_call_stack_item_type_key_1.DebugCallStackItemTypeKey),
        __metadata("design:type", Object)
    ], DebugThreadsWidget.prototype, "debugCallStackItemTypeKey", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugThreadsWidget.prototype, "init", null);
    DebugThreadsWidget = DebugThreadsWidget_1 = __decorate([
        inversify_1.injectable()
    ], DebugThreadsWidget);
    return DebugThreadsWidget;
}(source_tree_1.SourceTreeWidget));
exports.DebugThreadsWidget = DebugThreadsWidget;


/***/ }),

/***/ "../node_modules/@theia/debug/lib/browser/view/debug-view-model.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@theia/debug/lib/browser/view/debug-view-model.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var p_debounce_1 = __webpack_require__(/*! p-debounce */ "../node_modules/p-debounce/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var debug_session_1 = __webpack_require__(/*! ../debug-session */ "../node_modules/@theia/debug/lib/browser/debug-session.js");
var debug_session_manager_1 = __webpack_require__(/*! ../debug-session-manager */ "../node_modules/@theia/debug/lib/browser/debug-session-manager.js");
var debug_watch_expression_1 = __webpack_require__(/*! ./debug-watch-expression */ "../node_modules/@theia/debug/lib/browser/view/debug-watch-expression.js");
var debug_watch_manager_1 = __webpack_require__(/*! ../debug-watch-manager */ "../node_modules/@theia/debug/lib/browser/debug-watch-manager.js");
exports.DebugViewOptions = Symbol('DebugViewOptions');
var DebugViewModel = /** @class */ (function () {
    function DebugViewModel() {
        var _this = this;
        this.onDidChangeEmitter = new common_1.Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
        this.onDidChangeBreakpointsEmitter = new common_1.Emitter();
        this.onDidChangeBreakpoints = this.onDidChangeBreakpointsEmitter.event;
        this._watchExpressions = new Map();
        this.onDidChangeWatchExpressionsEmitter = new common_1.Emitter();
        this.onDidChangeWatchExpressions = this.onDidChangeWatchExpressionsEmitter.event;
        this.toDispose = new common_1.DisposableCollection(this.onDidChangeEmitter, this.onDidChangeBreakpointsEmitter, this.onDidChangeWatchExpressionsEmitter);
        this._sessions = new Set();
        this.refreshWatchExpressionsQueue = Promise.resolve();
        this.refreshWatchExpressions = p_debounce_1.default(function () {
            _this.refreshWatchExpressionsQueue = _this.refreshWatchExpressionsQueue.then(function () { return __awaiter(_this, void 0, void 0, function () {
                var _a, _b, watchExpression, e_1_1, e_2;
                var e_1, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _d.trys.push([0, 9, , 10]);
                            _d.label = 1;
                        case 1:
                            _d.trys.push([1, 6, 7, 8]);
                            _a = __values(this.watchExpressions), _b = _a.next();
                            _d.label = 2;
                        case 2:
                            if (!!_b.done) return [3 /*break*/, 5];
                            watchExpression = _b.value;
                            return [4 /*yield*/, watchExpression.evaluate()];
                        case 3:
                            _d.sent();
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
                        case 8: return [3 /*break*/, 10];
                        case 9:
                            e_2 = _d.sent();
                            console.error('Failed to refresh watch expressions: ', e_2);
                            return [3 /*break*/, 10];
                        case 10: return [2 /*return*/];
                    }
                });
            }); });
        }, 50);
    }
    DebugViewModel.prototype.fireDidChange = function () {
        this.refreshWatchExpressions();
        this.onDidChangeEmitter.fire(undefined);
    };
    DebugViewModel.prototype.fireDidChangeBreakpoints = function (uri) {
        this.onDidChangeBreakpointsEmitter.fire(uri);
    };
    DebugViewModel.prototype.fireDidChangeWatchExpressions = function () {
        this.onDidChangeWatchExpressionsEmitter.fire(undefined);
    };
    Object.defineProperty(DebugViewModel.prototype, "sessions", {
        get: function () {
            return this._sessions.values();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugViewModel.prototype, "sessionCount", {
        get: function () {
            return this._sessions.size;
        },
        enumerable: true,
        configurable: true
    });
    DebugViewModel.prototype.push = function (session) {
        if (this._sessions.has(session)) {
            return;
        }
        this._sessions.add(session);
        this.fireDidChange();
    };
    DebugViewModel.prototype.delete = function (session) {
        if (this._sessions.delete(session)) {
            this.fireDidChange();
            return true;
        }
        return false;
    };
    Object.defineProperty(DebugViewModel.prototype, "session", {
        get: function () {
            return this.sessions.next().value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugViewModel.prototype, "id", {
        get: function () {
            return this.session && this.session.id || '-1';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugViewModel.prototype, "label", {
        get: function () {
            return this.session && this.session.label || 'Unknown Session';
        },
        enumerable: true,
        configurable: true
    });
    DebugViewModel.prototype.has = function (session) {
        return !!session && this._sessions.has(session);
    };
    DebugViewModel.prototype.init = function () {
        var _this = this;
        if (this.options.session) {
            this.push(this.options.session);
        }
        this.toDispose.push(this.manager.onDidChangeActiveDebugSession(function (_a) {
            var previous = _a.previous, current = _a.current;
            if (_this.has(previous) && !_this.has(current)) {
                _this.fireDidChange();
            }
        }));
        this.toDispose.push(this.manager.onDidChange(function (current) {
            if (_this.has(current)) {
                _this.fireDidChange();
            }
        }));
        this.toDispose.push(this.manager.onDidChangeBreakpoints(function (_a) {
            var session = _a.session, uri = _a.uri;
            if (!session || session === _this.currentSession) {
                _this.fireDidChangeBreakpoints(uri);
            }
        }));
        this.updateWatchExpressions();
        this.toDispose.push(this.watch.onDidChange(function () { return _this.updateWatchExpressions(); }));
    };
    DebugViewModel.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    Object.defineProperty(DebugViewModel.prototype, "currentSession", {
        get: function () {
            var currentSession = this.manager.currentSession;
            return this.has(currentSession) && currentSession || this.session;
        },
        set: function (currentSession) {
            this.manager.currentSession = currentSession;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugViewModel.prototype, "state", {
        get: function () {
            var currentSession = this.currentSession;
            return currentSession && currentSession.state || debug_session_1.DebugState.Inactive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugViewModel.prototype, "currentThread", {
        get: function () {
            var currentSession = this.currentSession;
            return currentSession && currentSession.currentThread;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugViewModel.prototype, "currentFrame", {
        get: function () {
            var currentThread = this.currentThread;
            return currentThread && currentThread.currentFrame;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugViewModel.prototype, "breakpoints", {
        get: function () {
            return this.manager.getBreakpoints(this.currentSession);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugViewModel.prototype, "functionBreakpoints", {
        get: function () {
            return this.manager.getFunctionBreakpoints(this.currentSession);
        },
        enumerable: true,
        configurable: true
    });
    DebugViewModel.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var session, newSession;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        session = this.session;
                        if (!session) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.manager.start(session.options)];
                    case 1:
                        newSession = _a.sent();
                        if (newSession) {
                            this._sessions.delete(session);
                            this._sessions.add(newSession);
                            this.fireDidChange();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugViewModel.prototype.restart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var session, newSession;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        session = this.session;
                        if (!session) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.manager.restart(session)];
                    case 1:
                        newSession = _a.sent();
                        if (newSession !== session) {
                            this._sessions.delete(session);
                            this._sessions.add(newSession);
                        }
                        this.fireDidChange();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(DebugViewModel.prototype, "watchExpressions", {
        get: function () {
            return this._watchExpressions.values();
        },
        enumerable: true,
        configurable: true
    });
    DebugViewModel.prototype.addWatchExpression = function (expression) {
        if (expression === void 0) { expression = ''; }
        return __awaiter(this, void 0, void 0, function () {
            var watchExpression, id;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        watchExpression = new debug_watch_expression_1.DebugWatchExpression({
                            id: Number.MAX_SAFE_INTEGER,
                            expression: expression,
                            session: function () { return _this.currentSession; },
                            onDidChange: function () { }
                        });
                        return [4 /*yield*/, watchExpression.open()];
                    case 1:
                        _a.sent();
                        if (!watchExpression.expression) {
                            return [2 /*return*/, undefined];
                        }
                        id = this.watch.addWatchExpression(watchExpression.expression);
                        return [2 /*return*/, this._watchExpressions.get(id)];
                }
            });
        });
    };
    DebugViewModel.prototype.removeWatchExpressions = function () {
        this.watch.removeWatchExpressions();
    };
    DebugViewModel.prototype.removeWatchExpression = function (expression) {
        this.watch.removeWatchExpression(expression.id);
    };
    DebugViewModel.prototype.updateWatchExpressions = function () {
        var e_3, _a, e_4, _b;
        var _this = this;
        var added = false;
        var toRemove = new Set(this._watchExpressions.keys());
        try {
            for (var _c = __values(this.watch.watchExpressions), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2), id = _e[0], expression = _e[1];
                toRemove.delete(id);
                if (!this._watchExpressions.has(id)) {
                    added = true;
                    var watchExpression = new debug_watch_expression_1.DebugWatchExpression({
                        id: id,
                        expression: expression,
                        session: function () { return _this.currentSession; },
                        onDidChange: function () { return _this.fireDidChangeWatchExpressions(); }
                    });
                    this._watchExpressions.set(id, watchExpression);
                    watchExpression.evaluate();
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
        try {
            for (var toRemove_1 = __values(toRemove), toRemove_1_1 = toRemove_1.next(); !toRemove_1_1.done; toRemove_1_1 = toRemove_1.next()) {
                var id = toRemove_1_1.value;
                this._watchExpressions.delete(id);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (toRemove_1_1 && !toRemove_1_1.done && (_b = toRemove_1.return)) _b.call(toRemove_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
        if (added || toRemove.size) {
            this.fireDidChangeWatchExpressions();
        }
    };
    __decorate([
        inversify_1.inject(exports.DebugViewOptions),
        __metadata("design:type", Object)
    ], DebugViewModel.prototype, "options", void 0);
    __decorate([
        inversify_1.inject(debug_session_manager_1.DebugSessionManager),
        __metadata("design:type", debug_session_manager_1.DebugSessionManager)
    ], DebugViewModel.prototype, "manager", void 0);
    __decorate([
        inversify_1.inject(debug_watch_manager_1.DebugWatchManager),
        __metadata("design:type", debug_watch_manager_1.DebugWatchManager)
    ], DebugViewModel.prototype, "watch", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugViewModel.prototype, "init", null);
    DebugViewModel = __decorate([
        inversify_1.injectable()
    ], DebugViewModel);
    return DebugViewModel;
}());
exports.DebugViewModel = DebugViewModel;


/***/ }),

/***/ "../node_modules/@theia/debug/lib/browser/view/debug-watch-expression.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@theia/debug/lib/browser/view/debug-watch-expression.js ***!
  \*******************************************************************************/
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
var dialogs_1 = __webpack_require__(/*! @theia/core/lib/browser/dialogs */ "../node_modules/@theia/core/lib/browser/dialogs.js");
var debug_console_items_1 = __webpack_require__(/*! ../console/debug-console-items */ "../node_modules/@theia/debug/lib/browser/console/debug-console-items.js");
var DebugWatchExpression = /** @class */ (function (_super) {
    __extends(DebugWatchExpression, _super);
    function DebugWatchExpression(options) {
        var _this = _super.call(this, options.expression, options.session) || this;
        _this.options = options;
        _this.setValueRef = function (valueRef) { return _this.valueRef = valueRef || undefined; };
        _this.id = options.id;
        return _this;
    }
    DebugWatchExpression.prototype.evaluate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.evaluate.call(this, 'watch')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugWatchExpression.prototype.setResult = function (body) {
        // overridden to ignore error
        _super.prototype.setResult.call(this, body);
        this.options.onDidChange();
    };
    DebugWatchExpression.prototype.render = function () {
        return React.createElement("div", { className: 'theia-debug-console-variable' },
            React.createElement("span", { title: this.type || this._expression, className: 'name' },
                this._expression,
                ": "),
            React.createElement("span", { title: this._value, ref: this.setValueRef }, this._value));
    };
    DebugWatchExpression.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            var input, newValue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        input = new dialogs_1.SingleTextInputDialog({
                            title: 'Edit Watch Expression',
                            initialValue: this.expression
                        });
                        return [4 /*yield*/, input.open()];
                    case 1:
                        newValue = _a.sent();
                        if (!(newValue !== undefined)) return [3 /*break*/, 3];
                        this._expression = newValue;
                        return [4 /*yield*/, this.evaluate()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(DebugWatchExpression.prototype, "supportCopyValue", {
        get: function () {
            return !!this.valueRef && document.queryCommandSupported('copy');
        },
        enumerable: true,
        configurable: true
    });
    DebugWatchExpression.prototype.copyValue = function () {
        var selection = document.getSelection();
        if (this.valueRef && selection) {
            selection.selectAllChildren(this.valueRef);
            document.execCommand('copy');
        }
    };
    return DebugWatchExpression;
}(debug_console_items_1.ExpressionItem));
exports.DebugWatchExpression = DebugWatchExpression;


/***/ })

}]);
//# sourceMappingURL=33.bundle.js.map
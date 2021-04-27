(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ "../node_modules/@theia/core/lib/node/file-uri.js":
/*!********************************************************!*\
  !*** ../node_modules/@theia/core/lib/node/file-uri.js ***!
  \********************************************************/
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
var vscode_uri_1 = __webpack_require__(/*! vscode-uri */ "../node_modules/vscode-uri/lib/esm/index.js");
var uri_1 = __webpack_require__(/*! ../common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var os_1 = __webpack_require__(/*! ../common/os */ "../node_modules/@theia/core/lib/common/os.js");
var FileUri;
(function (FileUri) {
    var windowsDriveRegex = /^([^:/?#]+?):$/;
    /**
     * Creates a new file URI from the filesystem path argument.
     * @param fsPath the filesystem path.
     */
    function create(fsPath_) {
        return new uri_1.default(vscode_uri_1.default.file(fsPath_));
    }
    FileUri.create = create;
    /**
     * Returns with the platform specific FS path that is represented by the URI argument.
     *
     * @param uri the file URI that has to be resolved to a platform specific FS path.
     */
    function fsPath(uri) {
        if (typeof uri === 'string') {
            return fsPath(new uri_1.default(uri));
        }
        else {
            /*
             * A uri for the root of a Windows drive, eg file:\\\c%3A, is converted to c:
             * by the Uri class.  However file:\\\c%3A is unambiguously a uri to the root of
             * the drive and c: is interpreted as the default directory for the c drive
             * (by, for example, the readdir function in the fs-extra module).
             * A backslash must be appended to the drive, eg c:\, to ensure the correct path.
             */
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var fsPathFromVsCodeUri = uri.codeUri.fsPath;
            if (os_1.isWindows) {
                var isWindowsDriveRoot = windowsDriveRegex.exec(fsPathFromVsCodeUri);
                if (isWindowsDriveRoot) {
                    return fsPathFromVsCodeUri + '\\';
                }
            }
            return fsPathFromVsCodeUri;
        }
    }
    FileUri.fsPath = fsPath;
})(FileUri = exports.FileUri || (exports.FileUri = {}));


/***/ }),

/***/ "../node_modules/@theia/filesystem/lib/common/filesystem-utils.js":
/*!************************************************************************!*\
  !*** ../node_modules/@theia/filesystem/lib/common/filesystem-utils.js ***!
  \************************************************************************/
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
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var FileSystemUtils;
(function (FileSystemUtils) {
    /**
     * Tildify path, replacing `home` with `~` if user's `home` is present at the beginning of the path.
     * This is a non-operation for Windows.
     *
     * @param resourcePath
     * @param home
     */
    function tildifyPath(resourcePath, home) {
        var path = new common_1.Path(resourcePath);
        var isWindows = path.root && common_1.Path.isDrive(path.root.base);
        if (!isWindows && home && resourcePath.indexOf(home + "/") === 0) {
            return resourcePath.replace(home + "/", '~/');
        }
        return resourcePath;
    }
    FileSystemUtils.tildifyPath = tildifyPath;
    /**
     * Generate unique URI for a given parent which does not collide
     *
     * @param parentUri the `URI` of the parent
     * @param parent the `FileStat` of the parent
     * @param name the resource name
     * @param ext the resource extension
     */
    function generateUniqueResourceURI(parentUri, parent, name, ext) {
        if (ext === void 0) { ext = ''; }
        var children = !parent.children ? [] : parent.children.map(function (child) { return new uri_1.default(child.uri); });
        var index = 1;
        var base = name + ext;
        while (children.some(function (child) { return child.path.base === base; })) {
            index = index + 1;
            base = name + '_' + index + ext;
        }
        return parentUri.resolve(base);
    }
    FileSystemUtils.generateUniqueResourceURI = generateUniqueResourceURI;
})(FileSystemUtils = exports.FileSystemUtils || (exports.FileSystemUtils = {}));


/***/ }),

/***/ "../node_modules/@theia/filesystem/lib/common/index.js":
/*!*************************************************************!*\
  !*** ../node_modules/@theia/filesystem/lib/common/index.js ***!
  \*************************************************************/
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
__export(__webpack_require__(/*! ./filesystem */ "../node_modules/@theia/filesystem/lib/common/filesystem.js"));
__export(__webpack_require__(/*! ./filesystem-utils */ "../node_modules/@theia/filesystem/lib/common/filesystem-utils.js"));


/***/ }),

/***/ "../node_modules/@theia/filesystem/lib/electron-browser/file-dialog/electron-file-dialog-module.js":
/*!*********************************************************************************************************!*\
  !*** ../node_modules/@theia/filesystem/lib/electron-browser/file-dialog/electron-file-dialog-module.js ***!
  \*********************************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var file_dialog_service_1 = __webpack_require__(/*! ../../browser/file-dialog/file-dialog-service */ "../node_modules/@theia/filesystem/lib/browser/file-dialog/file-dialog-service.js");
var electron_file_dialog_service_1 = __webpack_require__(/*! ./electron-file-dialog-service */ "../node_modules/@theia/filesystem/lib/electron-browser/file-dialog/electron-file-dialog-service.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(electron_file_dialog_service_1.ElectronFileDialogService).toSelf().inSingletonScope();
    bind(file_dialog_service_1.FileDialogService).toService(electron_file_dialog_service_1.ElectronFileDialogService);
});


/***/ }),

/***/ "../node_modules/@theia/filesystem/lib/electron-browser/file-dialog/electron-file-dialog-service.js":
/*!**********************************************************************************************************!*\
  !*** ../node_modules/@theia/filesystem/lib/electron-browser/file-dialog/electron-file-dialog-service.js ***!
  \**********************************************************************************************************/
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
var electron_1 = __webpack_require__(/*! electron */ "electron");
var os_1 = __webpack_require__(/*! @theia/core/lib/common/os */ "../node_modules/@theia/core/lib/common/os.js");
var message_service_1 = __webpack_require__(/*! @theia/core/lib/common/message-service */ "../node_modules/@theia/core/lib/common/message-service.js");
var filesystem_1 = __webpack_require__(/*! ../../common/filesystem */ "../node_modules/@theia/filesystem/lib/common/filesystem.js");
var file_dialog_1 = __webpack_require__(/*! ../../browser/file-dialog */ "../node_modules/@theia/filesystem/lib/browser/file-dialog/index.js");
//
// We are OK to use this here because the electron backend and frontend are on the same host.
// If required, we can move this single service (and its module) to a dedicated Theia extension,
// and at packaging time, clients can decide whether they need the native or the browser-based
// solution.
//
var file_uri_1 = __webpack_require__(/*! @theia/core/lib/node/file-uri */ "../node_modules/@theia/core/lib/node/file-uri.js");
var ElectronFileDialogService = /** @class */ (function (_super) {
    __extends(ElectronFileDialogService, _super);
    function ElectronFileDialogService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElectronFileDialogService.prototype.showOpenDialog = function (props, folder) {
        return __awaiter(this, void 0, void 0, function () {
            var rootNode;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRootNode(folder)];
                    case 1:
                        rootNode = _a.sent();
                        if (rootNode) {
                            return [2 /*return*/, new Promise(function (resolve) {
                                    electron_1.remote.dialog.showOpenDialog(_this.toOpenDialogOptions(rootNode.uri, props), function (filePaths) { return __awaiter(_this, void 0, void 0, function () {
                                        var uris, canAccess, result;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    if (!filePaths || filePaths.length === 0) {
                                                        resolve(undefined);
                                                        return [2 /*return*/];
                                                    }
                                                    uris = filePaths.map(function (path) { return file_uri_1.FileUri.create(path); });
                                                    return [4 /*yield*/, this.canReadWrite(uris)];
                                                case 1:
                                                    canAccess = _a.sent();
                                                    result = canAccess ? uris.length === 1 ? uris[0] : uris : undefined;
                                                    resolve(result);
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                })];
                        }
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    ElectronFileDialogService.prototype.showSaveDialog = function (props, folder) {
        return __awaiter(this, void 0, void 0, function () {
            var rootNode;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRootNode(folder)];
                    case 1:
                        rootNode = _a.sent();
                        if (rootNode) {
                            return [2 /*return*/, new Promise(function (resolve) {
                                    electron_1.remote.dialog.showSaveDialog(_this.toSaveDialogOptions(rootNode.uri, props), function (filename) { return __awaiter(_this, void 0, void 0, function () {
                                        var uri, exists, canAccess;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    if (!filename) {
                                                        resolve(undefined);
                                                        return [2 /*return*/];
                                                    }
                                                    uri = file_uri_1.FileUri.create(filename);
                                                    return [4 /*yield*/, this.fileSystem.exists(uri.toString())];
                                                case 1:
                                                    exists = _a.sent();
                                                    if (!exists) {
                                                        resolve(uri);
                                                        return [2 /*return*/];
                                                    }
                                                    return [4 /*yield*/, this.canReadWrite(uri)];
                                                case 2:
                                                    canAccess = _a.sent();
                                                    resolve(canAccess ? uri : undefined);
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                })];
                        }
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    ElectronFileDialogService.prototype.canReadWrite = function (uris) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, uri, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, 6, 7]);
                        _a = __values(Array.isArray(uris) ? uris : [uris]), _b = _a.next();
                        _d.label = 1;
                    case 1:
                        if (!!_b.done) return [3 /*break*/, 4];
                        uri = _b.value;
                        return [4 /*yield*/, this.fileSystem.access(uri.toString(), filesystem_1.FileAccess.Constants.R_OK | filesystem_1.FileAccess.Constants.W_OK)];
                    case 2:
                        if (!(_d.sent())) {
                            this.messageService.error("Cannot access resource at " + uri.path + ".");
                            return [2 /*return*/, false];
                        }
                        _d.label = 3;
                    case 3:
                        _b = _a.next();
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 7];
                    case 6:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/, true];
                }
            });
        });
    };
    ElectronFileDialogService.prototype.toDialogOptions = function (uri, props, dialogTitle) {
        var title = props.title || dialogTitle;
        var defaultPath = file_uri_1.FileUri.fsPath(uri);
        var filters = [{ name: 'All Files', extensions: ['*'] }];
        if (props.filters) {
            filters.push.apply(filters, __spread(Object.keys(props.filters).map(function (key) { return ({ name: key, extensions: props.filters[key] }); })));
        }
        return { title: title, defaultPath: defaultPath, filters: filters };
    };
    ElectronFileDialogService.prototype.toOpenDialogOptions = function (uri, props) {
        var properties = electron.dialog.toDialogProperties(props);
        var buttonLabel = props.openLabel;
        return __assign({}, this.toDialogOptions(uri, props, 'Open'), { properties: properties, buttonLabel: buttonLabel });
    };
    ElectronFileDialogService.prototype.toSaveDialogOptions = function (uri, props) {
        var buttonLabel = props.saveLabel;
        var defaultPath = props.inputValue;
        return __assign({}, this.toDialogOptions(uri, props, 'Save'), { buttonLabel: buttonLabel, defaultPath: defaultPath });
    };
    __decorate([
        inversify_1.inject(message_service_1.MessageService),
        __metadata("design:type", message_service_1.MessageService)
    ], ElectronFileDialogService.prototype, "messageService", void 0);
    ElectronFileDialogService = __decorate([
        inversify_1.injectable()
    ], ElectronFileDialogService);
    return ElectronFileDialogService;
}(file_dialog_1.DefaultFileDialogService));
exports.ElectronFileDialogService = ElectronFileDialogService;
var electron;
(function (electron) {
    var dialog;
    (function (dialog) {
        /**
         * Converts the Theia specific `OpenFileDialogProps` into an electron specific array.
         *
         * Note: On Windows and Linux an open dialog can not be both a file selector and a directory selector,
         * so if you set properties to ['openFile', 'openDirectory'] on these platforms, a directory selector will be shown.
         *
         * See: https://github.com/electron/electron/issues/10252#issuecomment-322012159
         */
        function toDialogProperties(props) {
            if (!os_1.isOSX && props.canSelectFiles !== false && props.canSelectFolders === true) {
                throw new Error("Illegal props. Cannot have 'canSelectFiles' and 'canSelectFolders' at the same times. Props was: " + JSON.stringify(props) + ".");
            }
            var properties = [];
            if (!os_1.isOSX) {
                if (props.canSelectFiles !== false && props.canSelectFolders !== true) {
                    properties.push('openFile');
                }
                if (props.canSelectFolders === true && props.canSelectFiles === false) {
                    properties.push('openDirectory');
                }
            }
            else {
                if (props.canSelectFiles !== false) {
                    properties.push('openFile');
                }
                if (props.canSelectFolders === true) {
                    properties.push('openDirectory');
                    properties.push('createDirectory');
                }
            }
            if (props.canSelectMany === true) {
                properties.push('multiSelections');
            }
            return properties;
        }
        dialog.toDialogProperties = toDialogProperties;
    })(dialog = electron.dialog || (electron.dialog = {}));
})(electron = exports.electron || (exports.electron = {}));


/***/ })

}]);
//# sourceMappingURL=79.bundle.js.map
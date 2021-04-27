(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

/***/ "../node_modules/@theia/core/lib/browser/clipboard-service.js":
/*!********************************************************************!*\
  !*** ../node_modules/@theia/core/lib/browser/clipboard-service.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 RedHat and others.
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
exports.ClipboardService = Symbol('ClipboardService');


/***/ }),

/***/ "../node_modules/@theia/core/lib/browser/window/default-window-service.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@theia/core/lib/browser/window/default-window-service.js ***!
  \********************************************************************************/
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
var core_preferences_1 = __webpack_require__(/*! ../core-preferences */ "../node_modules/@theia/core/lib/browser/core-preferences.js");
var contribution_provider_1 = __webpack_require__(/*! ../../common/contribution-provider */ "../node_modules/@theia/core/lib/common/contribution-provider.js");
var frontend_application_1 = __webpack_require__(/*! ../frontend-application */ "../node_modules/@theia/core/lib/browser/frontend-application.js");
var DefaultWindowService = /** @class */ (function () {
    function DefaultWindowService() {
    }
    DefaultWindowService.prototype.onStart = function (app) {
        var _this = this;
        this.frontendApplication = app;
        window.addEventListener('beforeunload', function (event) {
            if (!_this.canUnload()) {
                return _this.preventUnload(event);
            }
        });
    };
    DefaultWindowService.prototype.openNewWindow = function (url) {
        window.open(url, undefined, 'noopener');
        return undefined;
    };
    DefaultWindowService.prototype.canUnload = function () {
        var e_1, _a;
        var confirmExit = this.corePreferences['application.confirmExit'];
        if (confirmExit === 'never') {
            return true;
        }
        try {
            for (var _b = __values(this.contributions.getContributions()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var contribution = _c.value;
                if (contribution.onWillStop) {
                    if (!!contribution.onWillStop(this.frontendApplication)) {
                        return false;
                    }
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
        return confirmExit !== 'always';
    };
    /**
     * Ask the user to confirm if they want to unload the window. Prevent it if they do not.
     * @param event The beforeunload event
     */
    DefaultWindowService.prototype.preventUnload = function (event) {
        event.returnValue = '';
        event.preventDefault();
        return '';
    };
    __decorate([
        inversify_1.inject(core_preferences_1.CorePreferences),
        __metadata("design:type", Object)
    ], DefaultWindowService.prototype, "corePreferences", void 0);
    __decorate([
        inversify_1.inject(contribution_provider_1.ContributionProvider),
        inversify_1.named(frontend_application_1.FrontendApplicationContribution),
        __metadata("design:type", Object)
    ], DefaultWindowService.prototype, "contributions", void 0);
    DefaultWindowService = __decorate([
        inversify_1.injectable()
    ], DefaultWindowService);
    return DefaultWindowService;
}());
exports.DefaultWindowService = DefaultWindowService;


/***/ }),

/***/ "../node_modules/@theia/core/lib/electron-browser/electron-clipboard-service.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@theia/core/lib/electron-browser/electron-clipboard-service.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 RedHat and others.
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
var electron_1 = __webpack_require__(/*! electron */ "electron");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var ElectronClipboardService = /** @class */ (function () {
    function ElectronClipboardService() {
    }
    ElectronClipboardService.prototype.readText = function () {
        return electron_1.clipboard.readText();
    };
    ElectronClipboardService.prototype.writeText = function (value) {
        electron_1.clipboard.writeText(value);
    };
    ElectronClipboardService = __decorate([
        inversify_1.injectable()
    ], ElectronClipboardService);
    return ElectronClipboardService;
}());
exports.ElectronClipboardService = ElectronClipboardService;


/***/ }),

/***/ "../node_modules/@theia/core/lib/electron-browser/window/electron-window-module.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@theia/core/lib/electron-browser/window/electron-window-module.js ***!
  \*****************************************************************************************/
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var window_service_1 = __webpack_require__(/*! ../../browser/window/window-service */ "../node_modules/@theia/core/lib/browser/window/window-service.js");
var electron_window_service_1 = __webpack_require__(/*! ./electron-window-service */ "../node_modules/@theia/core/lib/electron-browser/window/electron-window-service.js");
var frontend_application_1 = __webpack_require__(/*! ../../browser/frontend-application */ "../node_modules/@theia/core/lib/browser/frontend-application.js");
var electron_clipboard_service_1 = __webpack_require__(/*! ../electron-clipboard-service */ "../node_modules/@theia/core/lib/electron-browser/electron-clipboard-service.js");
var clipboard_service_1 = __webpack_require__(/*! ../../browser/clipboard-service */ "../node_modules/@theia/core/lib/browser/clipboard-service.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(window_service_1.WindowService).to(electron_window_service_1.ElectronWindowService).inSingletonScope();
    bind(frontend_application_1.FrontendApplicationContribution).toService(window_service_1.WindowService);
    bind(clipboard_service_1.ClipboardService).to(electron_clipboard_service_1.ElectronClipboardService).inSingletonScope();
});


/***/ }),

/***/ "../node_modules/@theia/core/lib/electron-browser/window/electron-window-service.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/@theia/core/lib/electron-browser/window/electron-window-service.js ***!
  \******************************************************************************************/
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
var electron_1 = __webpack_require__(/*! electron */ "electron");
var default_window_service_1 = __webpack_require__(/*! ../../browser/window/default-window-service */ "../node_modules/@theia/core/lib/browser/window/default-window-service.js");
var ElectronWindowService = /** @class */ (function (_super) {
    __extends(ElectronWindowService, _super);
    function ElectronWindowService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElectronWindowService.prototype.openNewWindow = function (url, _a) {
        var external = (_a === void 0 ? {} : _a).external;
        if (external) {
            electron_1.ipcRenderer.send('open-external', url);
        }
        else {
            electron_1.ipcRenderer.send('create-new-window', url);
        }
        return undefined;
    };
    ElectronWindowService.prototype.preventUnload = function (event) {
        // The user will be shown a confirmation dialog by the will-prevent-unload handler in the Electron main script
        event.returnValue = false;
    };
    ElectronWindowService = __decorate([
        inversify_1.injectable()
    ], ElectronWindowService);
    return ElectronWindowService;
}(default_window_service_1.DefaultWindowService));
exports.ElectronWindowService = ElectronWindowService;


/***/ })

}]);
//# sourceMappingURL=78.bundle.js.map
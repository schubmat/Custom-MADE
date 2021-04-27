(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "../node_modules/@theia/plugin-ext/lib/main/browser/commands.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/main/browser/commands.js ***!
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
var command_1 = __webpack_require__(/*! @theia/core/lib/common/command */ "../node_modules/@theia/core/lib/common/command.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var window_service_1 = __webpack_require__(/*! @theia/core/lib/browser/window/window-service */ "../node_modules/@theia/core/lib/browser/window/window-service.js");
var OpenUriCommandHandler = /** @class */ (function () {
    function OpenUriCommandHandler(windowService, commandService) {
        this.windowService = windowService;
        this.commandService = commandService;
        this.openNewTabDialog = new OpenNewTabDialog(windowService);
    }
    OpenUriCommandHandler.prototype.execute = function (resource) {
        if (!resource) {
            return;
        }
        var uriString = resource.toString();
        if (uriString.startsWith('http://') || uriString.startsWith('https://')) {
            this.openWebUri(uriString);
        }
        else {
            this.commandService.executeCommand('editor.action.openLink', uriString);
        }
    };
    OpenUriCommandHandler.prototype.openWebUri = function (uri) {
        try {
            this.windowService.openNewWindow(uri);
        }
        catch (err) {
            // browser has blocked opening of a new tab
            this.openNewTabDialog.showOpenNewTabDialog(uri);
        }
    };
    OpenUriCommandHandler.COMMAND_METADATA = {
        id: 'theia.open'
    };
    OpenUriCommandHandler = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(window_service_1.WindowService)),
        __param(1, inversify_1.inject(command_1.CommandService)),
        __metadata("design:paramtypes", [Object, Object])
    ], OpenUriCommandHandler);
    return OpenUriCommandHandler;
}());
exports.OpenUriCommandHandler = OpenUriCommandHandler;
var OpenNewTabDialog = /** @class */ (function (_super) {
    __extends(OpenNewTabDialog, _super);
    function OpenNewTabDialog(windowService) {
        var _this = _super.call(this, {
            title: 'Your browser prevented opening of a new tab'
        }) || this;
        _this.windowService = windowService;
        _this.linkNode = document.createElement('a');
        _this.linkNode.target = '_blank';
        _this.linkNode.setAttribute('style', 'color: var(--theia-editorWidget-foreground);');
        _this.contentNode.appendChild(_this.linkNode);
        var messageNode = document.createElement('div');
        messageNode.innerText = 'You are going to open: ';
        messageNode.appendChild(_this.linkNode);
        _this.contentNode.appendChild(messageNode);
        _this.appendCloseButton();
        _this.openButton = _this.appendAcceptButton('Open');
        return _this;
    }
    OpenNewTabDialog.prototype.showOpenNewTabDialog = function (uri) {
        var _this = this;
        this.value = uri;
        this.linkNode.innerHTML = uri;
        this.linkNode.href = uri;
        this.openButton.onclick = function () {
            _this.windowService.openNewWindow(uri);
        };
        // show dialog window to user
        this.open();
    };
    return OpenNewTabDialog;
}(browser_1.AbstractDialog));


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/main/browser/language-provider/language-client-contribution-provider-impl.js":
/*!**************************************************************************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/main/browser/language-provider/language-client-contribution-provider-impl.js ***!
  \**************************************************************************************************************************/
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
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var logger_1 = __webpack_require__(/*! @theia/core/lib/common/logger */ "../node_modules/@theia/core/lib/common/logger.js");
var browser_2 = __webpack_require__(/*! @theia/languages/lib/browser */ "../node_modules/@theia/languages/lib/browser/index.js");
var LanguageClientContributionProviderImpl = /** @class */ (function () {
    function LanguageClientContributionProviderImpl() {
        this.languageClientContributors = new Map();
    }
    LanguageClientContributionProviderImpl.prototype.collectContributions = function () {
        var e_1, _a;
        try {
            for (var _b = __values(this.contributions.getContributions()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var contribution = _c.value;
                this.languageClientContributors.set(contribution.id, contribution);
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
    LanguageClientContributionProviderImpl.prototype.getLanguageClientContributions = function () {
        return this.languageClientContributors.values();
    };
    LanguageClientContributionProviderImpl.prototype.registerLanguageClientContribution = function (clientContribution) {
        var _this = this;
        var id = clientContribution.id;
        if (this.languageClientContributors.has(id)) {
            this.logger.warn("The language contribution with type '" + id + "' was already registered.");
            return disposable_1.Disposable.NULL;
        }
        this.languageClientContributors.set(clientContribution.id, clientContribution);
        clientContribution.waitForActivation(this.app).then(function () {
            return clientContribution.activate(_this.app);
        });
        this.logger.info("The language contribution with type '" + id + "' was activated.");
        return disposable_1.Disposable.create(function () { return _this.unregisterLanguageClientContribution(id); });
    };
    LanguageClientContributionProviderImpl.prototype.unregisterLanguageClientContribution = function (id) {
        var contribution = this.languageClientContributors.get(id);
        if (!contribution) {
            return;
        }
        contribution.deactivate();
        this.languageClientContributors.delete(id);
        this.logger.info("The language contribution with type '" + id + "' was deactivated.");
    };
    __decorate([
        inversify_1.inject(browser_1.FrontendApplication),
        __metadata("design:type", browser_1.FrontendApplication)
    ], LanguageClientContributionProviderImpl.prototype, "app", void 0);
    __decorate([
        inversify_1.inject(logger_1.ILogger),
        __metadata("design:type", Object)
    ], LanguageClientContributionProviderImpl.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(common_1.ContributionProvider), inversify_1.named(browser_2.LanguageClientContribution),
        __metadata("design:type", Object)
    ], LanguageClientContributionProviderImpl.prototype, "contributions", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LanguageClientContributionProviderImpl.prototype, "collectContributions", null);
    LanguageClientContributionProviderImpl = __decorate([
        inversify_1.injectable()
    ], LanguageClientContributionProviderImpl);
    return LanguageClientContributionProviderImpl;
}());
exports.LanguageClientContributionProviderImpl = LanguageClientContributionProviderImpl;


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/main/browser/language-provider/plugin-language-client-provider.js":
/*!***************************************************************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/main/browser/language-provider/plugin-language-client-provider.js ***!
  \***************************************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var language_client_contribution_provider_1 = __webpack_require__(/*! ./language-client-contribution-provider */ "../node_modules/@theia/plugin-ext/lib/main/browser/language-provider/language-client-contribution-provider.js");
var LanguageClientProviderImpl = /** @class */ (function () {
    function LanguageClientProviderImpl() {
    }
    LanguageClientProviderImpl.prototype.getLanguageClient = function (languageId) {
        return __awaiter(this, void 0, void 0, function () {
            var contribution;
            return __generator(this, function (_a) {
                contribution = this.getLanguageContribution(languageId);
                if (contribution) {
                    return [2 /*return*/, contribution.languageClient];
                }
                return [2 /*return*/];
            });
        });
    };
    LanguageClientProviderImpl.prototype.getLanguageContribution = function (languageId) {
        var e_1, _a;
        var contributions = this.languageClientContribution.getLanguageClientContributions();
        if (contributions) {
            try {
                for (var contributions_1 = __values(contributions), contributions_1_1 = contributions_1.next(); !contributions_1_1.done; contributions_1_1 = contributions_1.next()) {
                    var contribution = contributions_1_1.value;
                    if (contribution.id === languageId) {
                        return contribution;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (contributions_1_1 && !contributions_1_1.done && (_a = contributions_1.return)) _a.call(contributions_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return undefined;
    };
    __decorate([
        inversify_1.inject(language_client_contribution_provider_1.LanguageClientContributionProvider),
        __metadata("design:type", Object)
    ], LanguageClientProviderImpl.prototype, "languageClientContribution", void 0);
    LanguageClientProviderImpl = __decorate([
        inversify_1.injectable()
    ], LanguageClientProviderImpl);
    return LanguageClientProviderImpl;
}());
exports.LanguageClientProviderImpl = LanguageClientProviderImpl;


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/main/browser/output-channel-registry-main.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/main/browser/output-channel-registry-main.js ***!
  \******************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var output_contribution_1 = __webpack_require__(/*! @theia/output/lib/browser/output-contribution */ "../node_modules/@theia/output/lib/browser/output-contribution.js");
var output_channel_1 = __webpack_require__(/*! @theia/output/lib/common/output-channel */ "../node_modules/@theia/output/lib/common/output-channel.js");
var OutputChannelRegistryMainImpl = /** @class */ (function () {
    function OutputChannelRegistryMainImpl() {
        this.channels = new Map();
    }
    OutputChannelRegistryMainImpl.prototype.$append = function (channelName, value, pluginInfo) {
        var outputChannel = this.getChannel(channelName);
        if (outputChannel) {
            outputChannel.append(value);
        }
        return Promise.resolve();
    };
    OutputChannelRegistryMainImpl.prototype.$clear = function (channelName) {
        var outputChannel = this.getChannel(channelName);
        if (outputChannel) {
            outputChannel.clear();
        }
        return Promise.resolve();
    };
    OutputChannelRegistryMainImpl.prototype.$dispose = function (channelName) {
        this.outputChannelManager.deleteChannel(channelName);
        if (this.channels.has(channelName)) {
            this.channels.delete(channelName);
        }
        return Promise.resolve();
    };
    OutputChannelRegistryMainImpl.prototype.$reveal = function (channelName, preserveFocus) {
        return __awaiter(this, void 0, void 0, function () {
            var outputChannel, activate, reveal, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        outputChannel = this.getChannel(channelName);
                        if (!outputChannel) return [3 /*break*/, 2];
                        activate = !preserveFocus;
                        reveal = preserveFocus;
                        _a = this;
                        return [4 /*yield*/, this.outputContribution.openView({ activate: activate, reveal: reveal })];
                    case 1:
                        _a.commonOutputWidget = _b.sent();
                        outputChannel.setVisibility(true);
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    OutputChannelRegistryMainImpl.prototype.$close = function (channelName) {
        var outputChannel = this.getChannel(channelName);
        if (outputChannel) {
            outputChannel.setVisibility(false);
        }
        var channels = this.outputChannelManager.getChannels();
        var isEmpty = channels.findIndex(function (channel) { return channel.isVisible; }) === -1;
        if (isEmpty && this.commonOutputWidget) {
            this.commonOutputWidget.close();
        }
        return Promise.resolve();
    };
    OutputChannelRegistryMainImpl.prototype.getChannel = function (channelName) {
        var outputChannel;
        if (this.channels.has(channelName)) {
            outputChannel = this.channels.get(channelName);
        }
        else {
            outputChannel = this.outputChannelManager.getChannel(channelName);
            this.channels.set(channelName, outputChannel);
        }
        return outputChannel;
    };
    __decorate([
        inversify_1.inject(output_channel_1.OutputChannelManager),
        __metadata("design:type", output_channel_1.OutputChannelManager)
    ], OutputChannelRegistryMainImpl.prototype, "outputChannelManager", void 0);
    __decorate([
        inversify_1.inject(output_contribution_1.OutputContribution),
        __metadata("design:type", output_contribution_1.OutputContribution)
    ], OutputChannelRegistryMainImpl.prototype, "outputContribution", void 0);
    OutputChannelRegistryMainImpl = __decorate([
        inversify_1.injectable()
    ], OutputChannelRegistryMainImpl);
    return OutputChannelRegistryMainImpl;
}());
exports.OutputChannelRegistryMainImpl = OutputChannelRegistryMainImpl;


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/main/browser/plugin-command-open-handler.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/main/browser/plugin-command-open-handler.js ***!
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
var uri_components_1 = __webpack_require__(/*! ../../common/uri-components */ "../node_modules/@theia/plugin-ext/lib/common/uri-components.js");
var command_1 = __webpack_require__(/*! @theia/core/lib/common/command */ "../node_modules/@theia/core/lib/common/command.js");
var PluginCommandOpenHandler = /** @class */ (function () {
    function PluginCommandOpenHandler() {
        this.id = 'plugin-command';
    }
    PluginCommandOpenHandler.prototype.canHandle = function (uri) {
        return uri.scheme === uri_components_1.Schemes.COMMAND ? 500 : -1;
    };
    PluginCommandOpenHandler.prototype.open = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var args;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        args = [];
                        try {
                            args = JSON.parse(uri.query);
                            if (!Array.isArray(args)) {
                                args = [args];
                            }
                        }
                        catch (e) {
                            // ignore error
                        }
                        return [4 /*yield*/, (_a = this.commands).executeCommand.apply(_a, __spread([uri.path.toString()], args))];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(command_1.CommandService),
        __metadata("design:type", Object)
    ], PluginCommandOpenHandler.prototype, "commands", void 0);
    PluginCommandOpenHandler = __decorate([
        inversify_1.injectable()
    ], PluginCommandOpenHandler);
    return PluginCommandOpenHandler;
}());
exports.PluginCommandOpenHandler = PluginCommandOpenHandler;


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/main/browser/plugin-ext-deploy-command.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/main/browser/plugin-ext-deploy-command.js ***!
  \***************************************************************************************/
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
var common_1 = __webpack_require__(/*! ../../common */ "../node_modules/@theia/plugin-ext/lib/common/index.js");
var PluginExtDeployCommandService = /** @class */ (function () {
    function PluginExtDeployCommandService() {
        /**
         * Whether the dialog is currently open.
         */
        this.isOpen = false;
        this.items = [];
    }
    PluginExtDeployCommandService.prototype.deploy = function () {
        var _this = this;
        var placeholderText = "Plugin's id to deploy.";
        this.isOpen = true;
        this.quickOpenService.open(this, {
            placeholder: placeholderText,
            fuzzyMatchLabel: true,
            fuzzyMatchDescription: true,
            fuzzySort: true,
            onClose: function () {
                _this.isOpen = false;
            },
        });
    };
    PluginExtDeployCommandService.prototype.onType = function (lookFor, acceptor) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.items = [];
                if (lookFor || lookFor.length > 0) {
                    this.items.push(new DeployQuickOpenItem(lookFor, this.pluginServer, 'Deploy this plugin'));
                }
                acceptor(this.items);
                return [2 /*return*/];
            });
        });
    };
    PluginExtDeployCommandService.COMMAND = {
        id: 'plugin-ext:deploy-plugin-id',
        category: 'Plugin',
        label: 'Deploy Plugin by Id',
    };
    __decorate([
        inversify_1.inject(browser_1.QuickOpenService),
        __metadata("design:type", browser_1.QuickOpenService)
    ], PluginExtDeployCommandService.prototype, "quickOpenService", void 0);
    __decorate([
        inversify_1.inject(common_1.PluginServer),
        __metadata("design:type", Object)
    ], PluginExtDeployCommandService.prototype, "pluginServer", void 0);
    PluginExtDeployCommandService = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], PluginExtDeployCommandService);
    return PluginExtDeployCommandService;
}());
exports.PluginExtDeployCommandService = PluginExtDeployCommandService;
var DeployQuickOpenItem = /** @class */ (function (_super) {
    __extends(DeployQuickOpenItem, _super);
    function DeployQuickOpenItem(name, pluginServer, description) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.pluginServer = pluginServer;
        _this.description = description;
        return _this;
    }
    DeployQuickOpenItem.prototype.getLabel = function () {
        return this.name;
    };
    DeployQuickOpenItem.prototype.getDetail = function () {
        return this.description || '';
    };
    DeployQuickOpenItem.prototype.run = function (mode) {
        if (mode !== browser_1.QuickOpenMode.OPEN) {
            return false;
        }
        this.pluginServer.deploy(this.name);
        return true;
    };
    return DeployQuickOpenItem;
}(browser_1.QuickOpenItem));
exports.DeployQuickOpenItem = DeployQuickOpenItem;


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/main/browser/plugin-ext-frontend-module.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/main/browser/plugin-ext-frontend-module.js ***!
  \****************************************************************************************/
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ../../../src/main/style/status-bar.css */ "../node_modules/@theia/plugin-ext/src/main/style/status-bar.css");
__webpack_require__(/*! ../../../src/main/browser/style/index.css */ "../node_modules/@theia/plugin-ext/src/main/browser/style/index.css");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var messaging_1 = __webpack_require__(/*! @theia/core/lib/browser/messaging */ "../node_modules/@theia/core/lib/browser/messaging/index.js");
var hosted_plugin_1 = __webpack_require__(/*! ../../hosted/browser/hosted-plugin */ "../node_modules/@theia/plugin-ext/lib/hosted/browser/hosted-plugin.js");
var hosted_plugin_watcher_1 = __webpack_require__(/*! ../../hosted/browser/hosted-plugin-watcher */ "../node_modules/@theia/plugin-ext/lib/hosted/browser/hosted-plugin-watcher.js");
var commands_1 = __webpack_require__(/*! ./commands */ "../node_modules/@theia/plugin-ext/lib/main/browser/commands.js");
var plugin_frontend_contribution_1 = __webpack_require__(/*! ./plugin-frontend-contribution */ "../node_modules/@theia/plugin-ext/lib/main/browser/plugin-frontend-contribution.js");
var plugin_protocol_1 = __webpack_require__(/*! ../../common/plugin-protocol */ "../node_modules/@theia/plugin-ext/lib/common/plugin-protocol.js");
var modal_notification_1 = __webpack_require__(/*! ./dialogs/modal-notification */ "../node_modules/@theia/plugin-ext/lib/main/browser/dialogs/modal-notification.js");
var plugin_ext_widget_1 = __webpack_require__(/*! ./plugin-ext-widget */ "../node_modules/@theia/plugin-ext/lib/main/browser/plugin-ext-widget.js");
var plugin_frontend_view_contribution_1 = __webpack_require__(/*! ./plugin-frontend-view-contribution */ "../node_modules/@theia/plugin-ext/lib/main/browser/plugin-frontend-view-contribution.js");
var plugin_ext_deploy_command_1 = __webpack_require__(/*! ./plugin-ext-deploy-command */ "../node_modules/@theia/plugin-ext/lib/main/browser/plugin-ext-deploy-command.js");
var text_editor_service_1 = __webpack_require__(/*! ./text-editor-service */ "../node_modules/@theia/plugin-ext/lib/main/browser/text-editor-service.js");
var text_editor_model_service_1 = __webpack_require__(/*! ./text-editor-model-service */ "../node_modules/@theia/plugin-ext/lib/main/browser/text-editor-model-service.js");
var untitled_resource_1 = __webpack_require__(/*! ./editor/untitled-resource */ "../node_modules/@theia/plugin-ext/lib/main/browser/editor/untitled-resource.js");
var menus_contribution_handler_1 = __webpack_require__(/*! ./menus/menus-contribution-handler */ "../node_modules/@theia/plugin-ext/lib/main/browser/menus/menus-contribution-handler.js");
var plugin_contribution_handler_1 = __webpack_require__(/*! ./plugin-contribution-handler */ "../node_modules/@theia/plugin-ext/lib/main/browser/plugin-contribution-handler.js");
var plugin_view_registry_1 = __webpack_require__(/*! ./view/plugin-view-registry */ "../node_modules/@theia/plugin-ext/lib/main/browser/view/plugin-view-registry.js");
var workspace_main_1 = __webpack_require__(/*! ./workspace-main */ "../node_modules/@theia/plugin-ext/lib/main/browser/workspace-main.js");
var plugin_ext_api_contribution_1 = __webpack_require__(/*! ../../common/plugin-ext-api-contribution */ "../node_modules/@theia/plugin-ext/lib/common/plugin-ext-api-contribution.js");
var plugin_paths_protocol_1 = __webpack_require__(/*! ../common/plugin-paths-protocol */ "../node_modules/@theia/plugin-ext/lib/main/common/plugin-paths-protocol.js");
var keybindings_contribution_handler_1 = __webpack_require__(/*! ./keybindings/keybindings-contribution-handler */ "../node_modules/@theia/plugin-ext/lib/main/browser/keybindings/keybindings-contribution-handler.js");
var language_client_provider_1 = __webpack_require__(/*! @theia/languages/lib/browser/language-client-provider */ "../node_modules/@theia/languages/lib/browser/language-client-provider.js");
var plugin_language_client_provider_1 = __webpack_require__(/*! ./language-provider/plugin-language-client-provider */ "../node_modules/@theia/plugin-ext/lib/main/browser/language-provider/plugin-language-client-provider.js");
var language_client_contribution_provider_impl_1 = __webpack_require__(/*! ./language-provider/language-client-contribution-provider-impl */ "../node_modules/@theia/plugin-ext/lib/main/browser/language-provider/language-client-contribution-provider-impl.js");
var language_client_contribution_provider_1 = __webpack_require__(/*! ./language-provider/language-client-contribution-provider */ "../node_modules/@theia/plugin-ext/lib/main/browser/language-provider/language-client-contribution-provider.js");
var debug_session_contribution_1 = __webpack_require__(/*! @theia/debug/lib/browser/debug-session-contribution */ "../node_modules/@theia/debug/lib/browser/debug-session-contribution.js");
var plugin_debug_session_contribution_registry_1 = __webpack_require__(/*! ./debug/plugin-debug-session-contribution-registry */ "../node_modules/@theia/plugin-ext/lib/main/browser/debug/plugin-debug-session-contribution-registry.js");
var plugin_debug_service_1 = __webpack_require__(/*! ./debug/plugin-debug-service */ "../node_modules/@theia/plugin-ext/lib/main/browser/debug/plugin-debug-service.js");
var debug_service_1 = __webpack_require__(/*! @theia/debug/lib/common/debug-service */ "../node_modules/@theia/debug/lib/common/debug-service.js");
var plugin_shared_style_1 = __webpack_require__(/*! ./plugin-shared-style */ "../node_modules/@theia/plugin-ext/lib/main/browser/plugin-shared-style.js");
var file_system_main_1 = __webpack_require__(/*! ./file-system-main */ "../node_modules/@theia/plugin-ext/lib/main/browser/file-system-main.js");
var selection_provider_command_1 = __webpack_require__(/*! ./selection-provider-command */ "../node_modules/@theia/plugin-ext/lib/main/browser/selection-provider-command.js");
var view_column_service_1 = __webpack_require__(/*! ./view-column-service */ "../node_modules/@theia/plugin-ext/lib/main/browser/view-column-service.js");
var view_context_key_service_1 = __webpack_require__(/*! ./view/view-context-key-service */ "../node_modules/@theia/plugin-ext/lib/main/browser/view/view-context-key-service.js");
var plugin_view_widget_1 = __webpack_require__(/*! ./view/plugin-view-widget */ "../node_modules/@theia/plugin-ext/lib/main/browser/view/plugin-view-widget.js");
var tree_view_widget_1 = __webpack_require__(/*! ./view/tree-view-widget */ "../node_modules/@theia/plugin-ext/lib/main/browser/view/tree-view-widget.js");
var rpc_protocol_1 = __webpack_require__(/*! ../../common/rpc-protocol */ "../node_modules/@theia/plugin-ext/lib/common/rpc-protocol.js");
var common_2 = __webpack_require__(/*! ../../common */ "../node_modules/@theia/plugin-ext/lib/common/index.js");
var languages_main_1 = __webpack_require__(/*! ./languages-main */ "../node_modules/@theia/plugin-ext/lib/main/browser/languages-main.js");
var output_channel_registry_main_1 = __webpack_require__(/*! ./output-channel-registry-main */ "../node_modules/@theia/plugin-ext/lib/main/browser/output-channel-registry-main.js");
var in_plugin_filesystem_watcher_manager_1 = __webpack_require__(/*! ./in-plugin-filesystem-watcher-manager */ "../node_modules/@theia/plugin-ext/lib/main/browser/in-plugin-filesystem-watcher-manager.js");
var webview_1 = __webpack_require__(/*! ./webview/webview */ "../node_modules/@theia/plugin-ext/lib/main/browser/webview/webview.js");
var webview_environment_1 = __webpack_require__(/*! ./webview/webview-environment */ "../node_modules/@theia/plugin-ext/lib/main/browser/webview/webview-environment.js");
var webview_theme_data_provider_1 = __webpack_require__(/*! ./webview/webview-theme-data-provider */ "../node_modules/@theia/plugin-ext/lib/main/browser/webview/webview-theme-data-provider.js");
var plugin_command_open_handler_1 = __webpack_require__(/*! ./plugin-command-open-handler */ "../node_modules/@theia/plugin-ext/lib/main/browser/plugin-command-open-handler.js");
var webview_preferences_1 = __webpack_require__(/*! ./webview/webview-preferences */ "../node_modules/@theia/plugin-ext/lib/main/browser/webview/webview-preferences.js");
var webview_protocol_1 = __webpack_require__(/*! ../common/webview-protocol */ "../node_modules/@theia/plugin-ext/lib/main/common/webview-protocol.js");
var webview_resource_cache_1 = __webpack_require__(/*! ./webview/webview-resource-cache */ "../node_modules/@theia/plugin-ext/lib/main/browser/webview/webview-resource-cache.js");
var plugin_icon_theme_service_1 = __webpack_require__(/*! ./plugin-icon-theme-service */ "../node_modules/@theia/plugin-ext/lib/main/browser/plugin-icon-theme-service.js");
var plugin_tree_view_node_label_provider_1 = __webpack_require__(/*! ./view/plugin-tree-view-node-label-provider */ "../node_modules/@theia/plugin-ext/lib/main/browser/view/plugin-tree-view-node-label-provider.js");
exports.default = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    bind(languages_main_1.LanguagesMainImpl).toSelf().inTransientScope();
    bind(common_2.LanguagesMainFactory).toFactory(function (context) { return function (rpc) {
        var child = context.container.createChild();
        child.bind(rpc_protocol_1.RPCProtocol).toConstantValue(rpc);
        return child.get(languages_main_1.LanguagesMainImpl);
    }; });
    bind(output_channel_registry_main_1.OutputChannelRegistryMainImpl).toSelf().inTransientScope();
    bind(common_2.OutputChannelRegistryFactory).toFactory(function (context) { return function () {
        var child = context.container.createChild();
        return child.get(output_channel_registry_main_1.OutputChannelRegistryMainImpl);
    }; });
    bind(modal_notification_1.ModalNotification).toSelf().inSingletonScope();
    bind(hosted_plugin_1.HostedPluginSupport).toSelf().inSingletonScope();
    bind(hosted_plugin_watcher_1.HostedPluginWatcher).toSelf().inSingletonScope();
    bind(selection_provider_command_1.SelectionProviderCommandContribution).toSelf().inSingletonScope();
    bind(common_1.CommandContribution).toService(selection_provider_command_1.SelectionProviderCommandContribution);
    bind(commands_1.OpenUriCommandHandler).toSelf().inSingletonScope();
    bind(plugin_frontend_contribution_1.PluginApiFrontendContribution).toSelf().inSingletonScope();
    bind(common_1.CommandContribution).toService(plugin_frontend_contribution_1.PluginApiFrontendContribution);
    bind(text_editor_service_1.TextEditorService).toSelf().inSingletonScope();
    bind(text_editor_model_service_1.EditorModelService).toSelf().inSingletonScope();
    bind(untitled_resource_1.UntitledResourceResolver).toSelf().inSingletonScope();
    bind(common_1.ResourceResolver).toService(untitled_resource_1.UntitledResourceResolver);
    bind(browser_1.FrontendApplicationContribution).toDynamicValue(function (ctx) { return ({
        onStart: function (app) {
            ctx.container.get(hosted_plugin_1.HostedPluginSupport).onStart(ctx.container);
        }
    }); });
    bind(plugin_protocol_1.HostedPluginServer).toDynamicValue(function (ctx) {
        var connection = ctx.container.get(messaging_1.WebSocketConnectionProvider);
        var hostedWatcher = ctx.container.get(hosted_plugin_watcher_1.HostedPluginWatcher);
        return connection.createProxy(plugin_protocol_1.hostedServicePath, hostedWatcher.getHostedPluginClient());
    }).inSingletonScope();
    bind(plugin_paths_protocol_1.PluginPathsService).toDynamicValue(function (ctx) {
        var connection = ctx.container.get(messaging_1.WebSocketConnectionProvider);
        return connection.createProxy(plugin_paths_protocol_1.pluginPathsServicePath);
    }).inSingletonScope();
    browser_1.bindViewContribution(bind, plugin_frontend_view_contribution_1.PluginFrontendViewContribution);
    bind(plugin_ext_widget_1.PluginWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (ctx) { return ({
        id: plugin_frontend_view_contribution_1.PluginFrontendViewContribution.PLUGINS_WIDGET_FACTORY_ID,
        createWidget: function () { return ctx.container.get(plugin_ext_widget_1.PluginWidget); }
    }); });
    bind(plugin_ext_deploy_command_1.PluginExtDeployCommandService).toSelf().inSingletonScope();
    bind(plugin_protocol_1.PluginServer).toDynamicValue(function (ctx) {
        var provider = ctx.container.get(messaging_1.WebSocketConnectionProvider);
        return provider.createProxy(plugin_protocol_1.pluginServerJsonRpcPath);
    }).inSingletonScope();
    bind(view_context_key_service_1.ViewContextKeyService).toSelf().inSingletonScope();
    bind(plugin_tree_view_node_label_provider_1.PluginTreeViewNodeLabelProvider).toSelf().inSingletonScope();
    bind(browser_1.LabelProviderContribution).toService(plugin_tree_view_node_label_provider_1.PluginTreeViewNodeLabelProvider);
    bind(browser_1.WidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return ({
            id: plugin_view_registry_1.PLUGIN_VIEW_DATA_FACTORY_ID,
            createWidget: function (identifier) {
                var child = browser_1.createTreeContainer(container, {
                    contextMenuPath: tree_view_widget_1.VIEW_ITEM_CONTEXT_MENU,
                    globalSelection: true
                });
                child.bind(tree_view_widget_1.TreeViewWidgetIdentifier).toConstantValue(identifier);
                child.bind(tree_view_widget_1.PluginTree).toSelf();
                child.rebind(browser_1.TreeImpl).toService(tree_view_widget_1.PluginTree);
                child.bind(tree_view_widget_1.PluginTreeModel).toSelf();
                child.rebind(browser_1.TreeModelImpl).toService(tree_view_widget_1.PluginTreeModel);
                child.bind(tree_view_widget_1.TreeViewWidget).toSelf();
                child.rebind(browser_1.TreeWidget).toService(tree_view_widget_1.TreeViewWidget);
                return child.get(browser_1.TreeWidget);
            }
        });
    }).inSingletonScope();
    bind(plugin_command_open_handler_1.PluginCommandOpenHandler).toSelf().inSingletonScope();
    bind(browser_1.OpenHandler).toService(plugin_command_open_handler_1.PluginCommandOpenHandler);
    webview_preferences_1.bindWebviewPreferences(bind);
    bind(webview_environment_1.WebviewEnvironment).toSelf().inSingletonScope();
    bind(webview_theme_data_provider_1.WebviewThemeDataProvider).toSelf().inSingletonScope();
    bind(webview_protocol_1.WebviewResourceLoader).toDynamicValue(function (ctx) {
        return messaging_1.WebSocketConnectionProvider.createProxy(ctx.container, webview_protocol_1.WebviewResourceLoaderPath);
    }).inSingletonScope();
    bind(webview_resource_cache_1.WebviewResourceCache).toSelf().inSingletonScope();
    bind(webview_1.WebviewWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return ({
            id: webview_1.WebviewWidget.FACTORY_ID,
            createWidget: function (identifier) { return __awaiter(_this, void 0, void 0, function () {
                var externalEndpoint, endpoint, child;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, container.get(webview_environment_1.WebviewEnvironment).externalEndpoint()];
                        case 1:
                            externalEndpoint = _a.sent();
                            endpoint = externalEndpoint.replace('{{uuid}}', identifier.id);
                            if (endpoint[endpoint.length - 1] === '/') {
                                endpoint = endpoint.slice(0, endpoint.length - 1);
                            }
                            child = container.createChild();
                            child.bind(webview_1.WebviewWidgetIdentifier).toConstantValue(identifier);
                            child.bind(webview_1.WebviewWidgetExternalEndpoint).toConstantValue(endpoint);
                            return [2 /*return*/, child.get(webview_1.WebviewWidget)];
                    }
                });
            }); }
        });
    }).inSingletonScope();
    bind(plugin_view_widget_1.PluginViewWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return ({
            id: plugin_view_registry_1.PLUGIN_VIEW_FACTORY_ID,
            createWidget: function (identifier) {
                var child = container.createChild();
                child.bind(plugin_view_widget_1.PluginViewWidgetIdentifier).toConstantValue(identifier);
                return child.get(plugin_view_widget_1.PluginViewWidget);
            }
        });
    }).inSingletonScope();
    bind(browser_1.WidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return ({
            id: plugin_view_registry_1.PLUGIN_VIEW_CONTAINER_FACTORY_ID,
            createWidget: function (identifier) {
                return container.get(browser_1.ViewContainer.Factory)(identifier);
            }
        });
    }).inSingletonScope();
    bind(plugin_shared_style_1.PluginSharedStyle).toSelf().inSingletonScope();
    bind(plugin_view_registry_1.PluginViewRegistry).toSelf().inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).toService(plugin_view_registry_1.PluginViewRegistry);
    bind(plugin_icon_theme_service_1.PluginIconThemeFactory).toFactory(function (_a) {
        var container = _a.container;
        return function (definition) {
            var child = container.createChild();
            child.bind(plugin_icon_theme_service_1.PluginIconThemeDefinition).toConstantValue(definition);
            child.bind(plugin_icon_theme_service_1.PluginIconTheme).toSelf().inSingletonScope();
            return child.get(plugin_icon_theme_service_1.PluginIconTheme);
        };
    });
    bind(plugin_icon_theme_service_1.PluginIconThemeService).toSelf().inSingletonScope();
    bind(browser_1.LabelProviderContribution).toService(plugin_icon_theme_service_1.PluginIconThemeService);
    bind(menus_contribution_handler_1.MenusContributionPointHandler).toSelf().inSingletonScope();
    bind(keybindings_contribution_handler_1.KeybindingsContributionPointHandler).toSelf().inSingletonScope();
    bind(plugin_contribution_handler_1.PluginContributionHandler).toSelf().inSingletonScope();
    bind(in_plugin_filesystem_watcher_manager_1.InPluginFileSystemWatcherManager).toSelf().inSingletonScope();
    bind(workspace_main_1.TextContentResourceResolver).toSelf().inSingletonScope();
    bind(common_1.ResourceResolver).toService(workspace_main_1.TextContentResourceResolver);
    bind(file_system_main_1.FSResourceResolver).toSelf().inSingletonScope();
    bind(common_1.ResourceResolver).toService(file_system_main_1.FSResourceResolver);
    common_1.bindContributionProvider(bind, plugin_ext_api_contribution_1.MainPluginApiProvider);
    bind(language_client_contribution_provider_impl_1.LanguageClientContributionProviderImpl).toSelf().inSingletonScope();
    bind(language_client_contribution_provider_1.LanguageClientContributionProvider).toService(language_client_contribution_provider_impl_1.LanguageClientContributionProviderImpl);
    bind(plugin_language_client_provider_1.LanguageClientProviderImpl).toSelf().inSingletonScope();
    rebind(language_client_provider_1.LanguageClientProvider).toService(plugin_language_client_provider_1.LanguageClientProviderImpl);
    bind(plugin_debug_service_1.PluginDebugService).toSelf().inSingletonScope();
    rebind(debug_service_1.DebugService).toService(plugin_debug_service_1.PluginDebugService);
    bind(plugin_debug_session_contribution_registry_1.PluginDebugSessionContributionRegistry).toSelf().inSingletonScope();
    rebind(debug_session_contribution_1.DebugSessionContributionRegistry).toService(plugin_debug_session_contribution_registry_1.PluginDebugSessionContributionRegistry);
    bind(view_column_service_1.ViewColumnService).toSelf().inSingletonScope();
});


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/main/browser/plugin-ext-widget.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/main/browser/plugin-ext-widget.js ***!
  \*******************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var react_widget_1 = __webpack_require__(/*! @theia/core/lib/browser/widgets/react-widget */ "../node_modules/@theia/core/lib/browser/widgets/react-widget.js");
var alert_message_1 = __webpack_require__(/*! @theia/core/lib/browser/widgets/alert-message */ "../node_modules/@theia/core/lib/browser/widgets/alert-message.js");
var hosted_plugin_1 = __webpack_require__(/*! ../../hosted/browser/hosted-plugin */ "../node_modules/@theia/plugin-ext/lib/hosted/browser/hosted-plugin.js");
var progress_bar_factory_1 = __webpack_require__(/*! @theia/core/lib/browser/progress-bar-factory */ "../node_modules/@theia/core/lib/browser/progress-bar-factory.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
var PluginWidget = /** @class */ (function (_super) {
    __extends(PluginWidget, _super);
    function PluginWidget() {
        var _this = _super.call(this) || this;
        _this.toDisposeProgress = new disposable_1.DisposableCollection();
        _this.id = 'plugins';
        _this.title.label = 'Plugins';
        _this.title.caption = 'Plugins';
        _this.title.iconClass = 'fa plugins-tab-icon';
        _this.title.closable = true;
        _this.node.tabIndex = 0;
        _this.addClass('theia-plugins');
        _this.update();
        return _this;
    }
    PluginWidget.prototype.init = function () {
        var _this = this;
        this.toDispose.push(this.pluginService.onDidChangePlugins(function () { return _this.update(); }));
    };
    PluginWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this.node.focus();
    };
    PluginWidget.prototype.render = function () {
        var _this = this;
        return React.createElement("div", { ref: function (ref) {
                _this.toDisposeProgress.dispose();
                _this.toDispose.push(_this.toDisposeProgress);
                if (ref) {
                    _this.toDispose.push(_this.progressBarFactory({ container: _this.node, insertMode: 'prepend', locationId: hosted_plugin_1.PluginProgressLocation }));
                }
            } }, this.doRender());
    };
    PluginWidget.prototype.doRender = function () {
        var plugins = this.pluginService.plugins;
        if (!plugins.length) {
            return React.createElement(alert_message_1.AlertMessage, { type: 'INFO', header: 'No plugins currently available.' });
        }
        return React.createElement(React.Fragment, null, this.renderPlugins(plugins));
    };
    PluginWidget.prototype.renderPlugins = function (plugins) {
        var _this = this;
        return React.createElement("div", { id: 'pluginListContainer' }, plugins.map(function (plugin) { return _this.renderPlugin(plugin); }));
    };
    PluginWidget.prototype.renderPlugin = function (plugin) {
        return React.createElement("div", { key: plugin.model.name, className: this.createPluginClassName(plugin) },
            React.createElement("div", { className: 'column flexcontainer pluginInformationContainer' },
                React.createElement("div", { className: 'row flexcontainer' },
                    React.createElement("div", { className: 'fa fa-puzzle-piece fa-2x fa-fw' }),
                    React.createElement("div", { title: plugin.model.name, className: 'pluginName noWrapInfo' }, plugin.model.name)),
                React.createElement("div", { className: 'row flexcontainer' },
                    React.createElement("div", { className: 'pluginVersion' }, plugin.model.version)),
                React.createElement("div", { className: 'row flexcontainer' },
                    React.createElement("div", { className: 'pluginDescription noWrapInfo' }, plugin.model.description)),
                React.createElement("div", { className: 'row flexcontainer' },
                    React.createElement("div", { className: 'pluginPublisher noWrapInfo flexcontainer' }, plugin.model.publisher))));
    };
    PluginWidget.prototype.createPluginClassName = function (plugin) {
        var classNames = ['pluginHeaderContainer'];
        return classNames.join(' ');
    };
    __decorate([
        inversify_1.inject(hosted_plugin_1.HostedPluginSupport),
        __metadata("design:type", hosted_plugin_1.HostedPluginSupport)
    ], PluginWidget.prototype, "pluginService", void 0);
    __decorate([
        inversify_1.inject(progress_bar_factory_1.ProgressBarFactory),
        __metadata("design:type", Function)
    ], PluginWidget.prototype, "progressBarFactory", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PluginWidget.prototype, "init", null);
    PluginWidget = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], PluginWidget);
    return PluginWidget;
}(react_widget_1.ReactWidget));
exports.PluginWidget = PluginWidget;


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/main/browser/plugin-frontend-contribution.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/main/browser/plugin-frontend-contribution.js ***!
  \******************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var plugin_ext_deploy_command_1 = __webpack_require__(/*! ./plugin-ext-deploy-command */ "../node_modules/@theia/plugin-ext/lib/main/browser/plugin-ext-deploy-command.js");
var commands_1 = __webpack_require__(/*! ./commands */ "../node_modules/@theia/plugin-ext/lib/main/browser/commands.js");
var PluginApiFrontendContribution = /** @class */ (function () {
    function PluginApiFrontendContribution() {
    }
    PluginApiFrontendContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(plugin_ext_deploy_command_1.PluginExtDeployCommandService.COMMAND, {
            execute: function () { return _this.pluginExtDeployCommandService.deploy(); }
        });
        commands.registerCommand(commands_1.OpenUriCommandHandler.COMMAND_METADATA, {
            execute: function (arg) { return _this.openUriCommandHandler.execute(arg); },
            isVisible: function () { return false; }
        });
    };
    __decorate([
        inversify_1.inject(plugin_ext_deploy_command_1.PluginExtDeployCommandService),
        __metadata("design:type", plugin_ext_deploy_command_1.PluginExtDeployCommandService)
    ], PluginApiFrontendContribution.prototype, "pluginExtDeployCommandService", void 0);
    __decorate([
        inversify_1.inject(commands_1.OpenUriCommandHandler),
        __metadata("design:type", commands_1.OpenUriCommandHandler)
    ], PluginApiFrontendContribution.prototype, "openUriCommandHandler", void 0);
    PluginApiFrontendContribution = __decorate([
        inversify_1.injectable()
    ], PluginApiFrontendContribution);
    return PluginApiFrontendContribution;
}());
exports.PluginApiFrontendContribution = PluginApiFrontendContribution;


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/main/browser/plugin-frontend-view-contribution.js":
/*!***********************************************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/main/browser/plugin-frontend-view-contribution.js ***!
  \***********************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var view_contribution_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/view-contribution */ "../node_modules/@theia/core/lib/browser/shell/view-contribution.js");
var PluginFrontendViewContribution = /** @class */ (function (_super) {
    __extends(PluginFrontendViewContribution, _super);
    function PluginFrontendViewContribution() {
        return _super.call(this, {
            widgetId: PluginFrontendViewContribution_1.PLUGINS_WIDGET_FACTORY_ID,
            widgetName: 'Plugins',
            defaultWidgetOptions: {
                area: 'left',
                rank: 400
            },
            toggleCommandId: 'pluginsView:toggle',
            toggleKeybinding: 'ctrlcmd+shift+l'
        }) || this;
    }
    PluginFrontendViewContribution_1 = PluginFrontendViewContribution;
    var PluginFrontendViewContribution_1;
    PluginFrontendViewContribution.PLUGINS_WIDGET_FACTORY_ID = 'plugins';
    PluginFrontendViewContribution = PluginFrontendViewContribution_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], PluginFrontendViewContribution);
    return PluginFrontendViewContribution;
}(view_contribution_1.AbstractViewContribution));
exports.PluginFrontendViewContribution = PluginFrontendViewContribution;


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/main/browser/selection-provider-command.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/main/browser/selection-provider-command.js ***!
  \****************************************************************************************/
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
var uri_command_handler_1 = __webpack_require__(/*! @theia/core/lib/common/uri-command-handler */ "../node_modules/@theia/core/lib/common/uri-command-handler.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var uri_components_1 = __webpack_require__(/*! ../../common/uri-components */ "../node_modules/@theia/plugin-ext/lib/common/uri-components.js");
var SelectionProviderCommands;
(function (SelectionProviderCommands) {
    SelectionProviderCommands.GET_SELECTED_CONTEXT = {
        id: 'theia.plugin.workspace.selectedContext'
    };
})(SelectionProviderCommands = exports.SelectionProviderCommands || (exports.SelectionProviderCommands = {}));
var SelectionProviderCommandContribution = /** @class */ (function () {
    function SelectionProviderCommandContribution() {
    }
    SelectionProviderCommandContribution.prototype.registerCommands = function (commands) {
        commands.registerCommand(SelectionProviderCommands.GET_SELECTED_CONTEXT, this.newMultiUriAwareCommandHandler({
            isEnabled: function () { return true; },
            isVisible: function () { return false; },
            execute: function (selectedUris) { return selectedUris.map(function (uri) { return uri_components_1.theiaUritoUriComponents(uri); }); }
        }));
    };
    SelectionProviderCommandContribution.prototype.newMultiUriAwareCommandHandler = function (handler) {
        return new uri_command_handler_1.UriAwareCommandHandler(this.selectionService, handler, { multi: true });
    };
    __decorate([
        inversify_1.inject(core_1.SelectionService),
        __metadata("design:type", core_1.SelectionService)
    ], SelectionProviderCommandContribution.prototype, "selectionService", void 0);
    SelectionProviderCommandContribution = __decorate([
        inversify_1.injectable()
    ], SelectionProviderCommandContribution);
    return SelectionProviderCommandContribution;
}());
exports.SelectionProviderCommandContribution = SelectionProviderCommandContribution;


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/main/browser/view/plugin-tree-view-node-label-provider.js":
/*!*******************************************************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/main/browser/view/plugin-tree-view-node-label-provider.js ***!
  \*******************************************************************************************************/
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
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var label_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/label-provider */ "../node_modules/@theia/core/lib/browser/label-provider.js");
var tree_label_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/tree/tree-label-provider */ "../node_modules/@theia/core/lib/browser/tree/tree-label-provider.js");
var tree_1 = __webpack_require__(/*! @theia/core/lib/browser/tree/tree */ "../node_modules/@theia/core/lib/browser/tree/tree.js");
var PluginTreeViewNodeLabelProvider = /** @class */ (function () {
    function PluginTreeViewNodeLabelProvider() {
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    PluginTreeViewNodeLabelProvider.prototype.canHandle = function (element) {
        if (tree_1.TreeNode.is(element) && ('resourceUri' in element || 'themeIconId' in element)) {
            return this.treeLabelProvider.canHandle(element) + 1;
        }
        return 0;
    };
    PluginTreeViewNodeLabelProvider.prototype.getIcon = function (node) {
        if (node.icon) {
            return node.icon;
        }
        if (node.themeIconId) {
            var uri = node.resourceUri && new uri_1.default(node.resourceUri) || undefined;
            return this.labelProvider.getIcon(label_provider_1.URIIconReference.create(node.themeIconId, uri));
        }
        if (node.resourceUri) {
            return this.labelProvider.getIcon(new uri_1.default(node.resourceUri));
        }
        return undefined;
    };
    PluginTreeViewNodeLabelProvider.prototype.getName = function (node) {
        if (node.name) {
            return node.name;
        }
        if (node.resourceUri) {
            return this.labelProvider.getName(new uri_1.default(node.resourceUri));
        }
        return undefined;
    };
    PluginTreeViewNodeLabelProvider.prototype.getLongName = function (node) {
        if (typeof node.description === 'string') {
            return node.description;
        }
        if (node.description === true && node.resourceUri) {
            return this.labelProvider.getLongName(new uri_1.default(node.resourceUri));
        }
        return undefined;
    };
    __decorate([
        inversify_1.inject(label_provider_1.LabelProvider),
        __metadata("design:type", label_provider_1.LabelProvider)
    ], PluginTreeViewNodeLabelProvider.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(tree_label_provider_1.TreeLabelProvider),
        __metadata("design:type", tree_label_provider_1.TreeLabelProvider)
    ], PluginTreeViewNodeLabelProvider.prototype, "treeLabelProvider", void 0);
    PluginTreeViewNodeLabelProvider = __decorate([
        inversify_1.injectable()
    ], PluginTreeViewNodeLabelProvider);
    return PluginTreeViewNodeLabelProvider;
}());
exports.PluginTreeViewNodeLabelProvider = PluginTreeViewNodeLabelProvider;


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/plugin-ext-frontend-module.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/plugin-ext-frontend-module.js ***!
  \***************************************************************************/
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
var plugin_ext_frontend_module_1 = __webpack_require__(/*! ./main/browser/plugin-ext-frontend-module */ "../node_modules/@theia/plugin-ext/lib/main/browser/plugin-ext-frontend-module.js");
exports.default = plugin_ext_frontend_module_1.default;


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/src/main/browser/style/index.css":
/*!**************************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/src/main/browser/style/index.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/@theia/plugin-ext/src/main/browser/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../node_modules/@theia/plugin-ext/src/main/browser/style/test.svg":
/*!*************************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/src/main/browser/style/test.svg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE5IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+Cjxzdmcgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxnIGlkPSJDYW52YXMiIGZpbGw9Im5vbmUiPgo8ZyBpZD0iYmVha2VyIj4KPGcgaWQ9IlNoYXBlIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0gMjAuNzU5NiAyMS44ODVMIDE1LjY4OTYgMTAuNUwgMTUuNjg5NiA0LjVMIDE3LjE4OTYgNC41TCAxNy4xODk2IDNMIDMuNjg5NTkgM0wgMy42ODk1OSA0LjVMIDUuMTg5NTkgNC41TCA1LjE4OTU5IDEwLjVMIDAuMTM0NTg4IDIxLjg4NUMgLTAuMzE1NDEyIDIyLjg3NSAwLjQxOTU4OCAyNCAxLjQ5OTU5IDI0TCAxOS40MDk2IDI0QyAyMC40ODk2IDI0IDIxLjIwOTYgMjIuODc1IDIwLjc3NDYgMjEuODg1TCAyMC43NTk2IDIxLjg4NVpNIDQuODE0NTggMTVMIDYuNjg5NTggMTAuNUwgNi42ODk1OCA0LjVMIDE0LjE4OTYgNC41TCAxNC4xODk2IDEwLjVMIDE2LjA2NDYgMTVMIDQuODE0NTggMTVaTSAxMS4xODk2IDEyTCAxMi42ODk2IDEyTCAxMi42ODk2IDEzLjVMIDExLjE4OTYgMTMuNUwgMTEuMTg5NiAxMlpNIDkuNjg5NTggMTAuNUwgOC4xODk1OCAxMC41TCA4LjE4OTU4IDlMIDkuNjg5NTggOUwgOS42ODk1OCAxMC41Wk0gOS42ODk1OCA2TCAxMS4xODk2IDZMIDExLjE4OTYgNy41TCA5LjY4OTU4IDcuNUwgOS42ODk1OCA2Wk0gOS42ODk1OCAxLjVMIDguMTg5NTggMS41TCA4LjE4OTU4IDBMIDkuNjg5NTggMEwgOS42ODk1OCAxLjVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjgxMDA1OSAwKSIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L2c+CjwvZz4KPC9zdmc+Cgo="

/***/ }),

/***/ "../node_modules/@theia/plugin-ext/src/main/style/status-bar.css":
/*!***********************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/src/main/style/status-bar.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./status-bar.css */ "../node_modules/css-loader/index.js!../node_modules/@theia/plugin-ext/src/main/style/status-bar.css");

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

/***/ "../node_modules/css-loader/index.js!../node_modules/@theia/plugin-ext/src/main/browser/style/index.css":
/*!*****************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@theia/plugin-ext/src/main/browser/style/index.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../../css-loader/lib/url/escape.js */ "../node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../../../css-loader!./plugin-sidebar.css */ "../node_modules/css-loader/index.js!../node_modules/@theia/plugin-ext/src/main/browser/style/plugin-sidebar.css"), "");
exports.i(__webpack_require__(/*! -!../../../../../../css-loader!./webview.css */ "../node_modules/css-loader/index.js!../node_modules/@theia/plugin-ext/src/main/browser/style/webview.css"), "");
exports.i(__webpack_require__(/*! -!../../../../../../css-loader!./tree.css */ "../node_modules/css-loader/index.js!../node_modules/@theia/plugin-ext/src/main/browser/style/tree.css"), "");

// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 Red Hat, Inc. and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.spinnerContainer {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.flexcontainer {\n    display: flex;\n}\n\n.row {\n    width: 100%;\n}\n\n.column {\n    flex-direction: column;\n}\n\n.theia-plugin-test-tab-icon {\n    -webkit-mask: url(" + escape(__webpack_require__(/*! ./test.svg */ "../node_modules/@theia/plugin-ext/src/main/browser/style/test.svg")) + ");\n    mask: url(" + escape(__webpack_require__(/*! ./test.svg */ "../node_modules/@theia/plugin-ext/src/main/browser/style/test.svg")) + ");\n}\n\n.theia-plugin-file-icon,\n.theia-plugin-file-icon::before,\n.theia-plugin-folder-icon,\n.theia-plugin-folder-icon::before,\n.theia-plugin-folder-expanded-icon,\n.theia-plugin-folder-expanded-icon::before,\n.theia-plugin-root-folder-icon,\n.theia-plugin-root-folder-icon::before,\n.theia-plugin-root-folder-expanded-icon,\n.theia-plugin-root-folder-expanded-icon::before {\n    padding-right: var(--theia-ui-padding);\n\twidth: var(--theia-icon-size);\n\theight: var(--theia-content-line-height);\n\tline-height: inherit !important;\n\tdisplay: inline-block;\n}\n\n.p-TabBar.theia-app-sides .theia-plugin-file-icon,\n.p-TabBar.theia-app-sides .theia-plugin-file-icon::before,\n.p-TabBar.theia-app-sides .theia-plugin-folder-icon,\n.p-TabBar.theia-app-sides .theia-plugin-folder-icon::before,\n.p-TabBar.theia-app-sides .theia-plugin-folder-expanded-icon,\n.p-TabBar.theia-app-sides .theia-plugin-folder-expanded-icon::before,\n.p-TabBar.theia-app-sides .theia-plugin-root-folder-icon,\n.p-TabBar.theia-app-sides .theia-plugin-root-folder-icon::before,\n.p-TabBar.theia-app-sides .theia-plugin-root-folder-expanded-icon,\n.p-TabBar.theia-app-sides .theia-plugin-root-folder-expanded-icon::before {\n    padding: 0px !important;\n    width: var(--theia-private-sidebar-icon-size) !important;\n    height: var(--theia-private-sidebar-icon-size) !important;\n    background-size: var(--theia-private-sidebar-icon-size) !important;\n    font-size: var(--theia-private-sidebar-icon-size) !important;\t\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@theia/plugin-ext/src/main/browser/style/plugin-sidebar.css":
/*!**************************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@theia/plugin-ext/src/main/browser/style/plugin-sidebar.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 Red Hat, Inc. and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.theia-plugins {\n    min-width: 250px !important;\n    display: flex;\n    flex-direction: column;\n}\n\n#pluginListContainer {\n    width: 100%;\n    box-sizing: border-box;\n    overflow-y: auto;\n    flex-grow: 1;\n}\n\n.theia-plugins .pluginHeaderContainer {\n    padding: 5px 15px;\n    font-size: var(--theia-ui-font-size0);\n    border-bottom: 1px solid;\n}\n\n.theia-side-panel .theia-plugins .pluginHeaderContainer {\n    padding-left: 20px;\n}\n\n.theia-plugins .pluginHeaderContainer:hover {\n    background: var(--theia-list-hoverBackground);\n}\n\n.theia-plugins .pluginHeaderContainer .row {\n    margin: 3px 0;\n}\n\n.theia-plugins .pluginName {\n    flex: 1;\n    margin-right: 5px;\n    font-size: var(--theia-ui-font-size1);\n    font-weight: 400;\n}\n\n.theia-plugins .pluginVersion {\n    flex: 1;\n    text-align: left;\n    font-size: var(--theia-ui-font-size0)\n}\n\n.theia-plugins .pluginDescription {\n    flex: 1;\n}\n\n.theia-plugins .pluginPublisher {\n    font-size: var(--theia-ui-font-size0);\n    flex: 5;\n    align-items: center;\n}\n\n.plugins-tab-icon::before {\n    content: \"\\F0FE\"\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@theia/plugin-ext/src/main/browser/style/tree.css":
/*!****************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@theia/plugin-ext/src/main/browser/style/tree.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 Red Hat, Inc. and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.theia-tree-view-icon {\n    padding-right: var(--theia-ui-padding);\n    -webkit-font-smoothing: antialiased;\n    flex-shrink: 0;\n}\n\n.theia-tree-view-inline-action {\n    padding: 2px;\n}\n\n.theia-tree-view-description {\n    color: var(--theia-descriptionForeground);\n    font-size: var(--theia-ui-font-size0);\n    margin-left: var(--theia-ui-padding);\n}\n\n.theia-tree-view .theia-TreeNodeSegment {\n    display: flex;\n}\n\n.theia-tree-view .theia-TreeNodeContent {\n    align-items: center;\n    height: 100%;\n}\n\n.theia-tree-view  .theia-TreeContainer .theia-TreeViewInfo {\n    margin-top: 7px;\n    margin-bottom: 10px;\n    margin-left: 17px;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@theia/plugin-ext/src/main/browser/style/webview.css":
/*!*******************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@theia/plugin-ext/src/main/browser/style/webview.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 Red Hat, Inc. and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.theia-webview.p-mod-hidden {\n    visibility: hidden;\n    display: flex !important;\n}\n\n.theia-webview {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.theia-webview iframe {\n    flex-grow: 1;\n    border: none; margin: 0; padding: 0;\n}\n\n.theia-webview-icon {\n    background: none !important;\n    min-height: 20px;\n}\n\n.theia-webview-icon::before {\n    background-size: 13px;\n    background-repeat: no-repeat;\n    vertical-align: middle;\n    display: inline-block;\n    text-align: center;\n    height: 15px;\n    width: 15px;\n    content: \"\";\n}\n\n.p-TabBar.theia-app-sides .theia-webview-icon::before {\n    width: var(--theia-private-sidebar-icon-size);\n    height: var(--theia-private-sidebar-icon-size);\n    background-size: contain;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@theia/plugin-ext/src/main/style/status-bar.css":
/*!**************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@theia/plugin-ext/src/main/style/status-bar.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 Red Hat, Inc. and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n#theia-statusBar .development-host {\n    background-color: var(--theia-successBackground);\n}\n\n#theia-statusBar .development-host-offline {\n    background-color: var(--theia-errorBackground);\n}\n\n#theia-statusBar .hosted-plugin {\n    background-color: var(--theia-inputValidation-infoBackground);\n}\n\n#theia-statusBar .hosted-plugin:hover {\n    background-color: var(--theia-editorInfo-foreground);\n}\n\n#theia-statusBar .hosted-plugin-failed {\n    background-color: var(--theia-errorBackground);\n}\n", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=53.bundle.js.map
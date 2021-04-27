(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75],{

/***/ "../node_modules/@theia/getting-started/lib/browser/getting-started-contribution.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/@theia/getting-started/lib/browser/getting-started-contribution.js ***!
  \******************************************************************************************/
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var getting_started_widget_1 = __webpack_require__(/*! ./getting-started-widget */ "../node_modules/@theia/getting-started/lib/browser/getting-started-widget.js");
var frontend_application_state_1 = __webpack_require__(/*! @theia/core/lib/browser/frontend-application-state */ "../node_modules/@theia/core/lib/browser/frontend-application-state.js");
var browser_2 = __webpack_require__(/*! @theia/workspace/lib/browser */ "../node_modules/@theia/workspace/lib/browser/index.js");
/**
 * Triggers opening the `GettingStartedWidget`.
 */
exports.GettingStartedCommand = {
    id: getting_started_widget_1.GettingStartedWidget.ID,
    label: getting_started_widget_1.GettingStartedWidget.LABEL
};
var GettingStartedContribution = /** @class */ (function (_super) {
    __extends(GettingStartedContribution, _super);
    function GettingStartedContribution() {
        return _super.call(this, {
            widgetId: getting_started_widget_1.GettingStartedWidget.ID,
            widgetName: getting_started_widget_1.GettingStartedWidget.LABEL,
            defaultWidgetOptions: {
                area: 'main',
            }
        }) || this;
    }
    GettingStartedContribution.prototype.onStart = function (app) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!this.workspaceService.opened) {
                    this.stateService.reachedState('ready').then(function () { return _this.openView({ reveal: true }); });
                }
                return [2 /*return*/];
            });
        });
    };
    GettingStartedContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        registry.registerCommand(exports.GettingStartedCommand, {
            execute: function () { return _this.openView({ reveal: true }); },
        });
    };
    GettingStartedContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(browser_1.CommonMenus.HELP, {
            commandId: exports.GettingStartedCommand.id,
            label: exports.GettingStartedCommand.label,
            order: 'a10'
        });
    };
    __decorate([
        inversify_1.inject(frontend_application_state_1.FrontendApplicationStateService),
        __metadata("design:type", frontend_application_state_1.FrontendApplicationStateService)
    ], GettingStartedContribution.prototype, "stateService", void 0);
    __decorate([
        inversify_1.inject(browser_2.WorkspaceService),
        __metadata("design:type", browser_2.WorkspaceService)
    ], GettingStartedContribution.prototype, "workspaceService", void 0);
    GettingStartedContribution = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], GettingStartedContribution);
    return GettingStartedContribution;
}(browser_1.AbstractViewContribution));
exports.GettingStartedContribution = GettingStartedContribution;


/***/ }),

/***/ "../node_modules/@theia/getting-started/lib/browser/getting-started-frontend-module.js":
/*!*********************************************************************************************!*\
  !*** ../node_modules/@theia/getting-started/lib/browser/getting-started-frontend-module.js ***!
  \*********************************************************************************************/
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
var getting_started_contribution_1 = __webpack_require__(/*! ./getting-started-contribution */ "../node_modules/@theia/getting-started/lib/browser/getting-started-contribution.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var getting_started_widget_1 = __webpack_require__(/*! ./getting-started-widget */ "../node_modules/@theia/getting-started/lib/browser/getting-started-widget.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
__webpack_require__(/*! ../../src/browser/style/index.css */ "../node_modules/@theia/getting-started/src/browser/style/index.css");
exports.default = new inversify_1.ContainerModule(function (bind) {
    browser_1.bindViewContribution(bind, getting_started_contribution_1.GettingStartedContribution);
    bind(browser_1.FrontendApplicationContribution).toService(getting_started_contribution_1.GettingStartedContribution);
    bind(getting_started_widget_1.GettingStartedWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (context) { return ({
        id: getting_started_widget_1.GettingStartedWidget.ID,
        createWidget: function () { return context.container.get(getting_started_widget_1.GettingStartedWidget); },
    }); }).inSingletonScope();
});


/***/ }),

/***/ "../node_modules/@theia/getting-started/lib/browser/getting-started-widget.js":
/*!************************************************************************************!*\
  !*** ../node_modules/@theia/getting-started/lib/browser/getting-started-widget.js ***!
  \************************************************************************************/
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
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var react_widget_1 = __webpack_require__(/*! @theia/core/lib/browser/widgets/react-widget */ "../node_modules/@theia/core/lib/browser/widgets/react-widget.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/workspace/lib/browser */ "../node_modules/@theia/workspace/lib/browser/index.js");
var filesystem_1 = __webpack_require__(/*! @theia/filesystem/lib/common/filesystem */ "../node_modules/@theia/filesystem/lib/common/filesystem.js");
var filesystem_utils_1 = __webpack_require__(/*! @theia/filesystem/lib/common/filesystem-utils */ "../node_modules/@theia/filesystem/lib/common/filesystem-utils.js");
var browser_2 = __webpack_require__(/*! @theia/keymaps/lib/browser */ "../node_modules/@theia/keymaps/lib/browser/index.js");
var browser_3 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var application_protocol_1 = __webpack_require__(/*! @theia/core/lib/common/application-protocol */ "../node_modules/@theia/core/lib/common/application-protocol.js");
var frontend_application_config_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/frontend-application-config-provider */ "../node_modules/@theia/core/lib/browser/frontend-application-config-provider.js");
/**
 * Default implementation of the `GettingStartedWidget`.
 * The widget is displayed when there are currently no workspaces present.
 * Some of the features displayed include:
 * - `open` commands.
 * - `recently used workspaces`.
 * - `settings` commands.
 * - `help` commands.
 * - helpful links.
 */
var GettingStartedWidget = /** @class */ (function (_super) {
    __extends(GettingStartedWidget, _super);
    function GettingStartedWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * The application name which is used for display purposes.
         */
        _this.applicationName = frontend_application_config_provider_1.FrontendApplicationConfigProvider.get().applicationName;
        /**
         * The recently used workspaces limit.
         * Used in order to limit the number of recently used workspaces to display.
         */
        _this.recentLimit = 5;
        /**
         * The list of recently used workspaces.
         */
        _this.recentWorkspaces = [];
        /**
         * Collection of useful links to display for end users.
         */
        _this.documentationUrl = 'https://www.theia-ide.org/doc/';
        _this.extensionUrl = 'https://www.theia-ide.org/doc/Authoring_Extensions.html';
        _this.pluginUrl = 'https://www.theia-ide.org/doc/Authoring_Plugins.html';
        /**
         * Trigger the open command.
         */
        _this.doOpen = function () { return _this.commandRegistry.executeCommand(browser_1.WorkspaceCommands.OPEN.id); };
        /**
         * Trigger the open file command.
         */
        _this.doOpenFile = function () { return _this.commandRegistry.executeCommand(browser_1.WorkspaceCommands.OPEN_FILE.id); };
        /**
         * Trigger the open folder command.
         */
        _this.doOpenFolder = function () { return _this.commandRegistry.executeCommand(browser_1.WorkspaceCommands.OPEN_FOLDER.id); };
        /**
         * Trigger the open workspace command.
         */
        _this.doOpenWorkspace = function () { return _this.commandRegistry.executeCommand(browser_1.WorkspaceCommands.OPEN_WORKSPACE.id); };
        /**
         * Trigger the open recent workspace command.
         */
        _this.doOpenRecentWorkspace = function () { return _this.commandRegistry.executeCommand(browser_1.WorkspaceCommands.OPEN_RECENT_WORKSPACE.id); };
        /**
         * Trigger the open preferences command.
         * Used to open the preferences widget.
         */
        _this.doOpenPreferences = function () { return _this.commandRegistry.executeCommand(browser_3.CommonCommands.OPEN_PREFERENCES.id); };
        /**
         * Trigger the open keyboard shortcuts command.
         * Used to open the keyboard shortcuts widget.
         */
        _this.doOpenKeyboardShortcuts = function () { return _this.commandRegistry.executeCommand(browser_2.KeymapsCommands.OPEN_KEYMAPS.id); };
        /**
         * Open a workspace given its uri.
         * @param uri {URI} the workspace uri.
         */
        _this.open = function (uri) { return _this.workspaceService.open(uri); };
        return _this;
    }
    GettingStartedWidget_1 = GettingStartedWidget;
    GettingStartedWidget.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.id = GettingStartedWidget_1.ID;
                        this.title.label = GettingStartedWidget_1.LABEL;
                        this.title.caption = GettingStartedWidget_1.LABEL;
                        this.title.closable = true;
                        _a = this;
                        return [4 /*yield*/, this.appServer.getApplicationInfo()];
                    case 1:
                        _a.applicationInfo = _d.sent();
                        _b = this;
                        return [4 /*yield*/, this.workspaceService.recentWorkspaces()];
                    case 2:
                        _b.recentWorkspaces = _d.sent();
                        _c = this;
                        return [4 /*yield*/, this.fileSystem.getCurrentUserHome()];
                    case 3:
                        _c.stat = _d.sent();
                        this.home = this.stat ? new uri_1.default(this.stat.uri).path.toString() : undefined;
                        this.update();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Render the content of the widget.
     */
    GettingStartedWidget.prototype.render = function () {
        return React.createElement("div", { className: 'gs-container' },
            this.renderHeader(),
            React.createElement("hr", { className: 'gs-hr' }),
            React.createElement("div", { className: 'flex-grid' },
                React.createElement("div", { className: 'col' }, this.renderOpen())),
            React.createElement("div", { className: 'flex-grid' },
                React.createElement("div", { className: 'col' }, this.renderRecentWorkspaces())),
            React.createElement("div", { className: 'flex-grid' },
                React.createElement("div", { className: 'col' }, this.renderSettings())),
            React.createElement("div", { className: 'flex-grid' },
                React.createElement("div", { className: 'col' }, this.renderHelp())),
            React.createElement("div", { className: 'flex-grid' },
                React.createElement("div", { className: 'col' }, this.renderVersion())));
    };
    /**
     * Render the widget header.
     * Renders the title `{applicationName} Getting Started`.
     */
    GettingStartedWidget.prototype.renderHeader = function () {
        return React.createElement("div", { className: 'gs-header' },
            React.createElement("h1", null,
                this.applicationName,
                React.createElement("span", { className: 'gs-sub-header' }, " Getting Started")));
    };
    /**
     * Render the `open` section.
     * Displays a collection of `open` commands.
     */
    GettingStartedWidget.prototype.renderOpen = function () {
        var requireSingleOpen = common_1.isOSX || !common_1.environment.electron.is();
        var open = requireSingleOpen && React.createElement("div", { className: 'gs-action-container' },
            React.createElement("a", { href: '#', onClick: this.doOpen }, "Open"));
        var openFile = !requireSingleOpen && React.createElement("div", { className: 'gs-action-container' },
            React.createElement("a", { href: '#', onClick: this.doOpenFile }, "Open File"));
        var openFolder = !requireSingleOpen && React.createElement("div", { className: 'gs-action-container' },
            React.createElement("a", { href: '#', onClick: this.doOpenFolder }, "Open Folder"));
        var openWorkspace = React.createElement("a", { href: '#', onClick: this.doOpenWorkspace }, "Open Workspace");
        return React.createElement("div", { className: 'gs-section' },
            React.createElement("h3", { className: 'gs-section-header' },
                React.createElement("i", { className: 'fa fa-folder-open' }),
                "Open"),
            open,
            openFile,
            openFolder,
            openWorkspace);
    };
    /**
     * Render the recently used workspaces section.
     */
    GettingStartedWidget.prototype.renderRecentWorkspaces = function () {
        var _this = this;
        var items = this.recentWorkspaces;
        var paths = this.buildPaths(items);
        var content = paths.slice(0, this.recentLimit).map(function (item, index) {
            return React.createElement("div", { className: 'gs-action-container', key: index },
                React.createElement("a", { href: '#', onClick: function (a) { return _this.open(new uri_1.default(items[index])); } }, new uri_1.default(items[index]).path.base),
                React.createElement("span", { className: 'gs-action-details' }, item));
        });
        // If the recently used workspaces list exceeds the limit, display `More...` which triggers the recently used workspaces quick-open menu upon selection.
        var more = paths.length > this.recentLimit && React.createElement("div", { className: 'gs-action-container' },
            React.createElement("a", { href: '#', onClick: this.doOpenRecentWorkspace }, "More..."));
        return React.createElement("div", { className: 'gs-section' },
            React.createElement("h3", { className: 'gs-section-header' },
                React.createElement("i", { className: 'fa fa-clock-o' }),
                "Recent Workspaces"),
            items.length > 0 ? content : React.createElement("p", { className: 'gs-no-recent' }, "No Recent Workspaces"),
            more);
    };
    /**
     * Render the settings section.
     * Generally used to display useful links.
     */
    GettingStartedWidget.prototype.renderSettings = function () {
        return React.createElement("div", { className: 'gs-section' },
            React.createElement("h3", { className: 'gs-section-header' },
                React.createElement("i", { className: 'fa fa-cog' }),
                "Settings"),
            React.createElement("div", { className: 'gs-action-container' },
                React.createElement("a", { href: '#', onClick: this.doOpenPreferences }, "Open Preferences")),
            React.createElement("div", { className: 'gs-action-container' },
                React.createElement("a", { href: '#', onClick: this.doOpenKeyboardShortcuts }, "Open Keyboard Shortcuts")));
    };
    /**
     * Render the help section.
     */
    GettingStartedWidget.prototype.renderHelp = function () {
        return React.createElement("div", { className: 'gs-section' },
            React.createElement("h3", { className: 'gs-section-header' },
                React.createElement("i", { className: 'fa fa-question-circle' }),
                "Help"),
            React.createElement("div", { className: 'gs-action-container' },
                React.createElement("a", { href: this.documentationUrl, target: '_blank' }, "Documentation")),
            React.createElement("div", { className: 'gs-action-container' },
                React.createElement("a", { href: this.extensionUrl, target: '_blank' }, "Building a New Extension")),
            React.createElement("div", { className: 'gs-action-container' },
                React.createElement("a", { href: this.pluginUrl, target: '_blank' }, "Building a New Plugin")));
    };
    /**
     * Render the version section.
     */
    GettingStartedWidget.prototype.renderVersion = function () {
        return React.createElement("div", { className: 'gs-section' },
            React.createElement("div", { className: 'gs-action-container' },
                React.createElement("p", { className: 'gs-sub-header' }, this.applicationInfo ? 'Version ' + this.applicationInfo.version : '')));
    };
    /**
     * Build the list of workspace paths.
     * @param workspaces {string[]} the list of workspaces.
     * @returns {string[]} the list of workspace paths.
     */
    GettingStartedWidget.prototype.buildPaths = function (workspaces) {
        var _this = this;
        var paths = [];
        workspaces.forEach(function (workspace) {
            var uri = new uri_1.default(workspace);
            var pathLabel = _this.labelProvider.getLongName(uri);
            var path = _this.home ? filesystem_utils_1.FileSystemUtils.tildifyPath(pathLabel, _this.home) : pathLabel;
            paths.push(path);
        });
        return paths;
    };
    var GettingStartedWidget_1;
    /**
     * The widget `id`.
     */
    GettingStartedWidget.ID = 'getting.started.widget';
    /**
     * The widget `label` which is used for display purposes.
     */
    GettingStartedWidget.LABEL = 'Getting Started';
    __decorate([
        inversify_1.inject(application_protocol_1.ApplicationServer),
        __metadata("design:type", Object)
    ], GettingStartedWidget.prototype, "appServer", void 0);
    __decorate([
        inversify_1.inject(common_1.CommandRegistry),
        __metadata("design:type", common_1.CommandRegistry)
    ], GettingStartedWidget.prototype, "commandRegistry", void 0);
    __decorate([
        inversify_1.inject(filesystem_1.FileSystem),
        __metadata("design:type", Object)
    ], GettingStartedWidget.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(browser_3.LabelProvider),
        __metadata("design:type", browser_3.LabelProvider)
    ], GettingStartedWidget.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(browser_1.WorkspaceService),
        __metadata("design:type", browser_1.WorkspaceService)
    ], GettingStartedWidget.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GettingStartedWidget.prototype, "init", null);
    GettingStartedWidget = GettingStartedWidget_1 = __decorate([
        inversify_1.injectable()
    ], GettingStartedWidget);
    return GettingStartedWidget;
}(react_widget_1.ReactWidget));
exports.GettingStartedWidget = GettingStartedWidget;


/***/ }),

/***/ "../node_modules/@theia/getting-started/src/browser/style/index.css":
/*!**************************************************************************!*\
  !*** ../node_modules/@theia/getting-started/src/browser/style/index.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/@theia/getting-started/src/browser/style/index.css");

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

/***/ "../node_modules/@theia/keymaps/lib/browser/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/@theia/keymaps/lib/browser/index.js ***!
  \***********************************************************/
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
__export(__webpack_require__(/*! ./keymaps-frontend-module */ "../node_modules/@theia/keymaps/lib/browser/keymaps-frontend-module.js"));
__export(__webpack_require__(/*! ./keymaps-service */ "../node_modules/@theia/keymaps/lib/browser/keymaps-service.js"));
__export(__webpack_require__(/*! ./keymaps-frontend-contribution */ "../node_modules/@theia/keymaps/lib/browser/keymaps-frontend-contribution.js"));


/***/ }),

/***/ "../node_modules/@theia/workspace/lib/browser/index.js":
/*!*************************************************************!*\
  !*** ../node_modules/@theia/workspace/lib/browser/index.js ***!
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
__export(__webpack_require__(/*! ./workspace-commands */ "../node_modules/@theia/workspace/lib/browser/workspace-commands.js"));
__export(__webpack_require__(/*! ./workspace-service */ "../node_modules/@theia/workspace/lib/browser/workspace-service.js"));
__export(__webpack_require__(/*! ./workspace-frontend-contribution */ "../node_modules/@theia/workspace/lib/browser/workspace-frontend-contribution.js"));
__export(__webpack_require__(/*! ./workspace-frontend-module */ "../node_modules/@theia/workspace/lib/browser/workspace-frontend-module.js"));
__export(__webpack_require__(/*! ./workspace-preferences */ "../node_modules/@theia/workspace/lib/browser/workspace-preferences.js"));


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@theia/getting-started/src/browser/style/index.css":
/*!*****************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@theia/getting-started/src/browser/style/index.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 Ericsson and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\nhtml, body {\n    font-family: var(--theia-ui-font-family);\n}\n\n.col {\n    flex: 1;\n    align-items: center;\n    justify-content: center;\n}\n\n.flex-grid {\n    display: flex;\n}\n\n.gs-action-container {\n    line-height: 20px;\n}\n\n.gs-action-details {\n    padding-left: 5px;\n    color: var(--theia-descriptionForeground);\n}\n\n.gs-container {\n    padding: 20px;\n}\n\n.gs-header h1 {\n    flex: 1;\n    font-weight: 600;\n}\n\n.gs-hr {\n    background-color: var(--theia-contrastBorder);\n    height: 1px;\n    border: 0;\n    margin: 0px;\n}\n\n.gs-no-recent {\n    color: var(--theia-descriptionForeground);\n}\n\n.gs-section a {\n    border: none;\n    font-weight: 500;\n    text-decoration: none;\n}\n\n.gs-section a:hover {\n    text-decoration: underline;\n}\n\n.gs-section-header {\n    font-size: var(--theia-ui-font-size2);\n    font-weight: 600;\n    margin-bottom: 5px;\n}\n\n.gs-section-header i {\n    padding-right: 5px;\n}\n\n.gs-sub-header {\n    color: var(--theia-descriptionForeground);\n    text-transform: capitalize;\n    font-weight: 400;\n}\n", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=75.bundle.js.map
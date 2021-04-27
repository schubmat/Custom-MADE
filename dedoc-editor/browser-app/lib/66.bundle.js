(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "../node_modules/@theia/plugin-dev/lib/browser/hosted-plugin-controller.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@theia/plugin-dev/lib/browser/hosted-plugin-controller.js ***!
  \*********************************************************************************/
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
var timers_1 = __webpack_require__(/*! timers */ "../node_modules/timers-browserify/main.js");
var status_bar_1 = __webpack_require__(/*! @theia/core/lib/browser/status-bar/status-bar */ "../node_modules/@theia/core/lib/browser/status-bar/status-bar.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var commands_1 = __webpack_require__(/*! @phosphor/commands */ "../node_modules/@phosphor/commands/lib/index.js");
var widgets_1 = __webpack_require__(/*! @phosphor/widgets */ "../node_modules/@phosphor/widgets/lib/index.js");
var frontend_application_state_1 = __webpack_require__(/*! @theia/core/lib/browser/frontend-application-state */ "../node_modules/@theia/core/lib/browser/frontend-application-state.js");
var connection_status_service_1 = __webpack_require__(/*! @theia/core/lib/browser/connection-status-service */ "../node_modules/@theia/core/lib/browser/connection-status-service.js");
var plugin_dev_protocol_1 = __webpack_require__(/*! ../common/plugin-dev-protocol */ "../node_modules/@theia/plugin-dev/lib/common/plugin-dev-protocol.js");
var hosted_plugin_manager_client_1 = __webpack_require__(/*! ./hosted-plugin-manager-client */ "../node_modules/@theia/plugin-dev/lib/browser/hosted-plugin-manager-client.js");
var hosted_plugin_log_viewer_1 = __webpack_require__(/*! ./hosted-plugin-log-viewer */ "../node_modules/@theia/plugin-dev/lib/browser/hosted-plugin-log-viewer.js");
var hosted_plugin_preferences_1 = __webpack_require__(/*! ./hosted-plugin-preferences */ "../node_modules/@theia/plugin-dev/lib/browser/hosted-plugin-preferences.js");
/**
 * Adds a status bar element displaying the state of secondary Theia instance with hosted plugin and
 * allows controlling the instance by simple clicking on the status bar element.
 */
var HostedPluginController = /** @class */ (function () {
    function HostedPluginController() {
        this.pluginState = hosted_plugin_manager_client_1.HostedInstanceState.STOPPED;
    }
    HostedPluginController_1 = HostedPluginController;
    HostedPluginController.prototype.initialize = function () {
        var _this = this;
        this.hostedPluginServer.getHostedPlugin().then(function (pluginMetadata) {
            if (!pluginMetadata) {
                _this.frontendApplicationStateService.reachedState('ready').then(function () {
                    // handles status bar item
                    _this.hostedPluginManagerClient.onStateChanged(function (e) {
                        if (e.state === hosted_plugin_manager_client_1.HostedInstanceState.STARTING) {
                            _this.onHostedPluginStarting();
                        }
                        else if (e.state === hosted_plugin_manager_client_1.HostedInstanceState.RUNNING) {
                            _this.onHostedPluginRunning();
                        }
                        else if (e.state === hosted_plugin_manager_client_1.HostedInstanceState.STOPPED) {
                            _this.onHostedPluginStopped();
                        }
                        else if (e.state === hosted_plugin_manager_client_1.HostedInstanceState.FAILED) {
                            _this.onHostedPluginFailed();
                        }
                    });
                    // handles watch compilation
                    _this.hostedPluginManagerClient.onStateChanged(function (e) { return _this.handleWatchers(e); });
                    // updates status bar if page is loading when hosted instance is already running
                    _this.hostedPluginServer.isHostedPluginInstanceRunning().then(function (running) {
                        if (running) {
                            _this.onHostedPluginRunning();
                        }
                    });
                });
                _this.connectionStatusService.onStatusChange(function () { return _this.onConnectionStatusChanged(); });
                _this.preferenceService.onPreferenceChanged(function (preference) { return _this.onPreferencesChanged(preference); });
            }
            else {
                console.error("Need to load plugin " + pluginMetadata.model.id);
            }
        });
    };
    /**
     * Display status bar element for stopped plugin.
     */
    HostedPluginController.prototype.onHostedPluginStopped = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.pluginState = hosted_plugin_manager_client_1.HostedInstanceState.STOPPED;
                        this.entry = {
                            text: 'Hosted Plugin: Stopped $(angle-up)',
                            alignment: browser_1.StatusBarAlignment.LEFT,
                            priority: 100,
                            onclick: function (e) {
                                _this.showMenu(e.clientX, e.clientY);
                            }
                        };
                        this.entry.className = HostedPluginController_1.HOSTED_PLUGIN;
                        return [4 /*yield*/, this.statusBar.setElement(HostedPluginController_1.HOSTED_PLUGIN, this.entry)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Display status bar element for starting plugin.
     */
    HostedPluginController.prototype.onHostedPluginStarting = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.pluginState = hosted_plugin_manager_client_1.HostedInstanceState.STARTING;
                        this.hostedPluginLogViewer.showLogConsole();
                        this.entry = {
                            text: '$(cog~spin) Hosted Plugin: Starting',
                            alignment: browser_1.StatusBarAlignment.LEFT,
                            priority: 100
                        };
                        this.entry.className = HostedPluginController_1.HOSTED_PLUGIN;
                        return [4 /*yield*/, this.statusBar.setElement(HostedPluginController_1.HOSTED_PLUGIN, this.entry)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Display status bar element for running plugin.
     */
    HostedPluginController.prototype.onHostedPluginRunning = function () {
        return __awaiter(this, void 0, void 0, function () {
            var entryText;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.pluginState = hosted_plugin_manager_client_1.HostedInstanceState.RUNNING;
                        if (this.hostedPluginPreferences['hosted-plugin.watchMode'] && this.watcherSuccess) {
                            entryText = '$(cog~spin) Hosted Plugin: Watching $(angle-up)';
                        }
                        else {
                            entryText = '$(cog~spin) Hosted Plugin: Running $(angle-up)';
                        }
                        this.entry = {
                            text: entryText,
                            alignment: browser_1.StatusBarAlignment.LEFT,
                            priority: 100,
                            onclick: function (e) {
                                _this.showMenu(e.clientX, e.clientY);
                            }
                        };
                        this.entry.className = HostedPluginController_1.HOSTED_PLUGIN;
                        return [4 /*yield*/, this.statusBar.setElement(HostedPluginController_1.HOSTED_PLUGIN, this.entry)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Display status bar element for failed plugin.
     */
    HostedPluginController.prototype.onHostedPluginFailed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.pluginState = hosted_plugin_manager_client_1.HostedInstanceState.FAILED;
                        this.entry = {
                            text: 'Hosted Plugin: Stopped $(angle-up)',
                            alignment: browser_1.StatusBarAlignment.LEFT,
                            priority: 100,
                            onclick: function (e) {
                                _this.showMenu(e.clientX, e.clientY);
                            }
                        };
                        this.entry.className = HostedPluginController_1.HOSTED_PLUGIN_FAILED;
                        return [4 /*yield*/, this.statusBar.setElement(HostedPluginController_1.HOSTED_PLUGIN, this.entry)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HostedPluginController.prototype.onPreferencesChanged = function (preference) {
        return __awaiter(this, void 0, void 0, function () {
            var pluginLocation, isWatchCompilationRunning;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(preference.preferenceName === 'hosted-plugin.watchMode')) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.hostedPluginServer.isHostedPluginInstanceRunning()];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.hostedPluginServer.getHostedPluginURI()];
                    case 2:
                        pluginLocation = _a.sent();
                        return [4 /*yield*/, this.hostedPluginServer.isWatchCompilationRunning(pluginLocation)];
                    case 3:
                        isWatchCompilationRunning = _a.sent();
                        if (!(preference.newValue === true)) return [3 /*break*/, 6];
                        if (!!isWatchCompilationRunning) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.runWatchCompilation(pluginLocation.toString())];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        if (!isWatchCompilationRunning) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.hostedPluginServer.stopWatchCompilation(pluginLocation.toString())];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8:
                        // update status bar
                        this.onHostedPluginRunning();
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Starts / stops watchers on hosted instance state change.
     *
     * @param event hosted instance state change event
     */
    HostedPluginController.prototype.handleWatchers = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var isRunning, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(event.state === hosted_plugin_manager_client_1.HostedInstanceState.RUNNING)) return [3 /*break*/, 3];
                        if (!this.hostedPluginPreferences['hosted-plugin.watchMode']) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.runWatchCompilation(event.pluginLocation.toString())];
                    case 1:
                        _a.sent();
                        // update status bar
                        this.onHostedPluginRunning();
                        _a.label = 2;
                    case 2: return [3 /*break*/, 8];
                    case 3:
                        if (!(event.state === hosted_plugin_manager_client_1.HostedInstanceState.STOPPING)) return [3 /*break*/, 8];
                        if (!this.hostedPluginPreferences['hosted-plugin.watchMode']) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.hostedPluginServer.isWatchCompilationRunning(event.pluginLocation.toString())];
                    case 4:
                        isRunning = _a.sent();
                        if (!isRunning) return [3 /*break*/, 8];
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, this.hostedPluginServer.stopWatchCompilation(event.pluginLocation.toString())];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        error_1 = _a.sent();
                        this.messageService.error(this.getErrorMessage(error_1.message));
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    HostedPluginController.prototype.runWatchCompilation = function (pluginLocation) {
        return __awaiter(this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.hostedPluginServer.runWatchCompilation(pluginLocation)];
                    case 1:
                        _a.sent();
                        this.watcherSuccess = true;
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        this.messageService.error(this.getErrorMessage(error_2));
                        this.watcherSuccess = false;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HostedPluginController.prototype.getErrorMessage = function (error) {
        return error.message.substring(error.message.indexOf(':') + 1);
    };
    /**
     * Updating status bar element when changing connection status.
     */
    HostedPluginController.prototype.onConnectionStatusChanged = function () {
        var _this = this;
        if (this.connectionStatusService.currentStatus === connection_status_service_1.ConnectionStatus.OFFLINE) {
            // Re-set the element only if it's visible on status bar
            if (this.entry) {
                var offlineElement = {
                    text: 'Hosted Plugin: Stopped',
                    alignment: browser_1.StatusBarAlignment.LEFT,
                    priority: 100
                };
                this.entry.className = HostedPluginController_1.HOSTED_PLUGIN_OFFLINE;
                this.statusBar.setElement(HostedPluginController_1.HOSTED_PLUGIN, offlineElement);
            }
        }
        else {
            // ask state of hosted plugin when switching to Online
            if (this.entry) {
                this.hostedPluginServer.isHostedPluginInstanceRunning().then(function (running) {
                    if (running) {
                        _this.onHostedPluginRunning();
                    }
                    else {
                        _this.onHostedPluginStopped();
                    }
                });
            }
        }
    };
    /**
     * Show menu containing actions to start/stop/restart hosted plugin.
     */
    HostedPluginController.prototype.showMenu = function (x, y) {
        var commands = new commands_1.CommandRegistry();
        var menu = new widgets_1.Menu({
            commands: commands
        });
        if (this.pluginState === hosted_plugin_manager_client_1.HostedInstanceState.RUNNING) {
            this.addCommandsForRunningPlugin(commands, menu);
        }
        else if (this.pluginState === hosted_plugin_manager_client_1.HostedInstanceState.STOPPED || this.pluginState === hosted_plugin_manager_client_1.HostedInstanceState.FAILED) {
            this.addCommandsForStoppedPlugin(commands, menu);
        }
        menu.open(x, y);
    };
    /**
     * Adds commands to the menu for running plugin.
     */
    HostedPluginController.prototype.addCommandsForRunningPlugin = function (commands, menu) {
        var _this = this;
        commands.addCommand(hosted_plugin_manager_client_1.HostedPluginCommands.STOP.id, {
            label: 'Stop Instance',
            icon: 'fa fa-stop',
            execute: function () { return timers_1.setTimeout(function () { return _this.hostedPluginManagerClient.stop(); }, 100); }
        });
        menu.addItem({
            type: 'command',
            command: hosted_plugin_manager_client_1.HostedPluginCommands.STOP.id
        });
        commands.addCommand(hosted_plugin_manager_client_1.HostedPluginCommands.RESTART.id, {
            label: 'Restart Instance',
            icon: 'fa fa-repeat',
            execute: function () { return timers_1.setTimeout(function () { return _this.hostedPluginManagerClient.restart(); }, 100); }
        });
        menu.addItem({
            type: 'command',
            command: hosted_plugin_manager_client_1.HostedPluginCommands.RESTART.id
        });
    };
    /**
     * Adds command to the menu for stopped plugin.
     */
    HostedPluginController.prototype.addCommandsForStoppedPlugin = function (commands, menu) {
        var _this = this;
        commands.addCommand(hosted_plugin_manager_client_1.HostedPluginCommands.START.id, {
            label: 'Start Instance',
            icon: 'fa fa-play',
            execute: function () { return timers_1.setTimeout(function () { return _this.hostedPluginManagerClient.start(); }, 100); }
        });
        menu.addItem({
            type: 'command',
            command: hosted_plugin_manager_client_1.HostedPluginCommands.START.id
        });
        commands.addCommand(hosted_plugin_manager_client_1.HostedPluginCommands.DEBUG.id, {
            label: 'Debug Instance',
            icon: 'fa fa-bug',
            execute: function () { return timers_1.setTimeout(function () { return _this.hostedPluginManagerClient.debug(); }, 100); }
        });
        menu.addItem({
            type: 'command',
            command: hosted_plugin_manager_client_1.HostedPluginCommands.DEBUG.id
        });
    };
    var HostedPluginController_1;
    HostedPluginController.HOSTED_PLUGIN = 'hosted-plugin';
    HostedPluginController.HOSTED_PLUGIN_OFFLINE = 'hosted-plugin-offline';
    HostedPluginController.HOSTED_PLUGIN_FAILED = 'hosted-plugin-failed';
    __decorate([
        inversify_1.inject(status_bar_1.StatusBar),
        __metadata("design:type", Object)
    ], HostedPluginController.prototype, "statusBar", void 0);
    __decorate([
        inversify_1.inject(frontend_application_state_1.FrontendApplicationStateService),
        __metadata("design:type", frontend_application_state_1.FrontendApplicationStateService)
    ], HostedPluginController.prototype, "frontendApplicationStateService", void 0);
    __decorate([
        inversify_1.inject(plugin_dev_protocol_1.HostedPluginServer),
        __metadata("design:type", Object)
    ], HostedPluginController.prototype, "hostedPluginServer", void 0);
    __decorate([
        inversify_1.inject(hosted_plugin_manager_client_1.HostedPluginManagerClient),
        __metadata("design:type", hosted_plugin_manager_client_1.HostedPluginManagerClient)
    ], HostedPluginController.prototype, "hostedPluginManagerClient", void 0);
    __decorate([
        inversify_1.inject(connection_status_service_1.ConnectionStatusService),
        __metadata("design:type", Object)
    ], HostedPluginController.prototype, "connectionStatusService", void 0);
    __decorate([
        inversify_1.inject(hosted_plugin_log_viewer_1.HostedPluginLogViewer),
        __metadata("design:type", hosted_plugin_log_viewer_1.HostedPluginLogViewer)
    ], HostedPluginController.prototype, "hostedPluginLogViewer", void 0);
    __decorate([
        inversify_1.inject(hosted_plugin_preferences_1.HostedPluginPreferences),
        __metadata("design:type", Object)
    ], HostedPluginController.prototype, "hostedPluginPreferences", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceServiceImpl),
        __metadata("design:type", browser_1.PreferenceServiceImpl)
    ], HostedPluginController.prototype, "preferenceService", void 0);
    __decorate([
        inversify_1.inject(common_1.MessageService),
        __metadata("design:type", common_1.MessageService)
    ], HostedPluginController.prototype, "messageService", void 0);
    HostedPluginController = HostedPluginController_1 = __decorate([
        inversify_1.injectable()
    ], HostedPluginController);
    return HostedPluginController;
}());
exports.HostedPluginController = HostedPluginController;


/***/ }),

/***/ "../node_modules/@theia/plugin-dev/lib/browser/hosted-plugin-frontend-contribution.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@theia/plugin-dev/lib/browser/hosted-plugin-frontend-contribution.js ***!
  \********************************************************************************************/
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
var hosted_plugin_manager_client_1 = __webpack_require__(/*! ./hosted-plugin-manager-client */ "../node_modules/@theia/plugin-dev/lib/browser/hosted-plugin-manager-client.js");
var HostedPluginFrontendContribution = /** @class */ (function () {
    function HostedPluginFrontendContribution() {
    }
    HostedPluginFrontendContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(hosted_plugin_manager_client_1.HostedPluginCommands.START, {
            execute: function () { return _this.hostedPluginManagerClient.start(); }
        });
        commands.registerCommand(hosted_plugin_manager_client_1.HostedPluginCommands.DEBUG, {
            execute: function () { return _this.hostedPluginManagerClient.debug(); }
        });
        commands.registerCommand(hosted_plugin_manager_client_1.HostedPluginCommands.STOP, {
            execute: function () { return _this.hostedPluginManagerClient.stop(); }
        });
        commands.registerCommand(hosted_plugin_manager_client_1.HostedPluginCommands.RESTART, {
            execute: function () { return _this.hostedPluginManagerClient.restart(); }
        });
        commands.registerCommand(hosted_plugin_manager_client_1.HostedPluginCommands.SELECT_PATH, {
            execute: function () { return _this.hostedPluginManagerClient.selectPluginPath(); }
        });
    };
    __decorate([
        inversify_1.inject(hosted_plugin_manager_client_1.HostedPluginManagerClient),
        __metadata("design:type", hosted_plugin_manager_client_1.HostedPluginManagerClient)
    ], HostedPluginFrontendContribution.prototype, "hostedPluginManagerClient", void 0);
    HostedPluginFrontendContribution = __decorate([
        inversify_1.injectable()
    ], HostedPluginFrontendContribution);
    return HostedPluginFrontendContribution;
}());
exports.HostedPluginFrontendContribution = HostedPluginFrontendContribution;


/***/ }),

/***/ "../node_modules/@theia/plugin-dev/lib/browser/hosted-plugin-informer.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@theia/plugin-dev/lib/browser/hosted-plugin-informer.js ***!
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
var status_bar_1 = __webpack_require__(/*! @theia/core/lib/browser/status-bar/status-bar */ "../node_modules/@theia/core/lib/browser/status-bar/status-bar.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/workspace/lib/browser */ "../node_modules/@theia/workspace/lib/browser/index.js");
var plugin_dev_protocol_1 = __webpack_require__(/*! ../common/plugin-dev-protocol */ "../node_modules/@theia/plugin-dev/lib/common/plugin-dev-protocol.js");
var connection_status_service_1 = __webpack_require__(/*! @theia/core/lib/browser/connection-status-service */ "../node_modules/@theia/core/lib/browser/connection-status-service.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var frontend_application_state_1 = __webpack_require__(/*! @theia/core/lib/browser/frontend-application-state */ "../node_modules/@theia/core/lib/browser/frontend-application-state.js");
/**
 * Informs the user whether Theia is running with hosted plugin.
 * Adds 'Development Host' status bar element and appends the same prefix to window title.
 */
var HostedPluginInformer = /** @class */ (function () {
    function HostedPluginInformer() {
    }
    HostedPluginInformer_1 = HostedPluginInformer;
    HostedPluginInformer.prototype.initialize = function () {
        var _this = this;
        this.workspaceService.roots.then(function (roots) {
            var workspaceFolder = roots[0];
            _this.hostedPluginServer.getHostedPlugin().then(function (pluginMetadata) {
                if (pluginMetadata) {
                    _this.updateTitle(workspaceFolder);
                    _this.entry = {
                        text: "$(cube) " + HostedPluginInformer_1.DEVELOPMENT_HOST_TITLE,
                        tooltip: "Hosted Plugin '" + pluginMetadata.model.name + "'",
                        alignment: browser_1.StatusBarAlignment.LEFT,
                        priority: 100
                    };
                    _this.frontendApplicationStateService.reachedState('ready').then(function () {
                        _this.updateStatusBarElement();
                    });
                    _this.connectionStatusService.onStatusChange(function () { return _this.updateStatusBarElement(); });
                }
            });
        });
    };
    HostedPluginInformer.prototype.updateStatusBarElement = function () {
        if (this.connectionStatusService.currentStatus === connection_status_service_1.ConnectionStatus.OFFLINE) {
            this.entry.className = HostedPluginInformer_1.DEVELOPMENT_HOST_OFFLINE;
        }
        else {
            this.entry.className = HostedPluginInformer_1.DEVELOPMENT_HOST;
        }
        this.statusBar.setElement(HostedPluginInformer_1.DEVELOPMENT_HOST, this.entry);
    };
    HostedPluginInformer.prototype.updateTitle = function (root) {
        if (root) {
            var uri = new uri_1.default(root.uri);
            document.title = HostedPluginInformer_1.DEVELOPMENT_HOST_TITLE + ' - ' + uri.displayName;
        }
        else {
            document.title = HostedPluginInformer_1.DEVELOPMENT_HOST_TITLE;
        }
    };
    var HostedPluginInformer_1;
    HostedPluginInformer.DEVELOPMENT_HOST_TITLE = 'Development Host';
    HostedPluginInformer.DEVELOPMENT_HOST = 'development-host';
    HostedPluginInformer.DEVELOPMENT_HOST_OFFLINE = 'development-host-offline';
    __decorate([
        inversify_1.inject(status_bar_1.StatusBar),
        __metadata("design:type", Object)
    ], HostedPluginInformer.prototype, "statusBar", void 0);
    __decorate([
        inversify_1.inject(browser_2.WorkspaceService),
        __metadata("design:type", browser_2.WorkspaceService)
    ], HostedPluginInformer.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(plugin_dev_protocol_1.HostedPluginServer),
        __metadata("design:type", Object)
    ], HostedPluginInformer.prototype, "hostedPluginServer", void 0);
    __decorate([
        inversify_1.inject(connection_status_service_1.ConnectionStatusService),
        __metadata("design:type", Object)
    ], HostedPluginInformer.prototype, "connectionStatusService", void 0);
    __decorate([
        inversify_1.inject(frontend_application_state_1.FrontendApplicationStateService),
        __metadata("design:type", frontend_application_state_1.FrontendApplicationStateService)
    ], HostedPluginInformer.prototype, "frontendApplicationStateService", void 0);
    HostedPluginInformer = HostedPluginInformer_1 = __decorate([
        inversify_1.injectable()
    ], HostedPluginInformer);
    return HostedPluginInformer;
}());
exports.HostedPluginInformer = HostedPluginInformer;


/***/ }),

/***/ "../node_modules/@theia/plugin-dev/lib/browser/hosted-plugin-log-viewer.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@theia/plugin-dev/lib/browser/hosted-plugin-log-viewer.js ***!
  \*********************************************************************************/
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
var output_channel_1 = __webpack_require__(/*! @theia/output/lib/common/output-channel */ "../node_modules/@theia/output/lib/common/output-channel.js");
var output_contribution_1 = __webpack_require__(/*! @theia/output/lib/browser/output-contribution */ "../node_modules/@theia/output/lib/browser/output-contribution.js");
var hosted_plugin_watcher_1 = __webpack_require__(/*! @theia/plugin-ext/lib/hosted/browser/hosted-plugin-watcher */ "../node_modules/@theia/plugin-ext/lib/hosted/browser/hosted-plugin-watcher.js");
var HostedPluginLogViewer = /** @class */ (function () {
    function HostedPluginLogViewer() {
    }
    HostedPluginLogViewer_1 = HostedPluginLogViewer;
    HostedPluginLogViewer.prototype.showLogConsole = function () {
        this.outputContribution.openView({ reveal: true }).then(function (view) {
            view.activate();
        });
    };
    HostedPluginLogViewer.prototype.init = function () {
        var _this = this;
        this.channel = this.outputChannelManager.getChannel(HostedPluginLogViewer_1.OUTPUT_CHANNEL_NAME);
        this.watcher.onLogMessageEvent(function (event) { return _this.logMessageEventHandler(event); });
    };
    HostedPluginLogViewer.prototype.logMessageEventHandler = function (event) {
        this.channel.appendLine(event.data);
    };
    var HostedPluginLogViewer_1;
    HostedPluginLogViewer.OUTPUT_CHANNEL_NAME = 'hosted-instance-log';
    __decorate([
        inversify_1.inject(hosted_plugin_watcher_1.HostedPluginWatcher),
        __metadata("design:type", hosted_plugin_watcher_1.HostedPluginWatcher)
    ], HostedPluginLogViewer.prototype, "watcher", void 0);
    __decorate([
        inversify_1.inject(output_channel_1.OutputChannelManager),
        __metadata("design:type", output_channel_1.OutputChannelManager)
    ], HostedPluginLogViewer.prototype, "outputChannelManager", void 0);
    __decorate([
        inversify_1.inject(output_contribution_1.OutputContribution),
        __metadata("design:type", output_contribution_1.OutputContribution)
    ], HostedPluginLogViewer.prototype, "outputContribution", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HostedPluginLogViewer.prototype, "init", null);
    HostedPluginLogViewer = HostedPluginLogViewer_1 = __decorate([
        inversify_1.injectable()
    ], HostedPluginLogViewer);
    return HostedPluginLogViewer;
}());
exports.HostedPluginLogViewer = HostedPluginLogViewer;


/***/ }),

/***/ "../node_modules/@theia/plugin-dev/lib/browser/hosted-plugin-manager-client.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@theia/plugin-dev/lib/browser/hosted-plugin-manager-client.js ***!
  \*************************************************************************************/
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
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var path_1 = __webpack_require__(/*! @theia/core/lib/common/path */ "../node_modules/@theia/core/lib/common/path.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var window_service_1 = __webpack_require__(/*! @theia/core/lib/browser/window/window-service */ "../node_modules/@theia/core/lib/browser/window/window-service.js");
var browser_2 = __webpack_require__(/*! @theia/workspace/lib/browser */ "../node_modules/@theia/workspace/lib/browser/index.js");
var common_2 = __webpack_require__(/*! @theia/filesystem/lib/common */ "../node_modules/@theia/filesystem/lib/common/index.js");
var browser_3 = __webpack_require__(/*! @theia/filesystem/lib/browser */ "../node_modules/@theia/filesystem/lib/browser/index.js");
var plugin_dev_protocol_1 = __webpack_require__(/*! ../common/plugin-dev-protocol */ "../node_modules/@theia/plugin-dev/lib/common/plugin-dev-protocol.js");
var debug_session_manager_1 = __webpack_require__(/*! @theia/debug/lib/browser/debug-session-manager */ "../node_modules/@theia/debug/lib/browser/debug-session-manager.js");
var hosted_plugin_preferences_1 = __webpack_require__(/*! ./hosted-plugin-preferences */ "../node_modules/@theia/plugin-dev/lib/browser/hosted-plugin-preferences.js");
/**
 * Commands to control Hosted plugin instances.
 */
var HostedPluginCommands;
(function (HostedPluginCommands) {
    var HOSTED_PLUGIN_CATEGORY = 'Hosted Plugin';
    HostedPluginCommands.START = {
        id: 'hosted-plugin:start',
        category: HOSTED_PLUGIN_CATEGORY,
        label: 'Start Instance'
    };
    HostedPluginCommands.DEBUG = {
        id: 'hosted-plugin:debug',
        category: HOSTED_PLUGIN_CATEGORY,
        label: 'Debug Instance'
    };
    HostedPluginCommands.STOP = {
        id: 'hosted-plugin:stop',
        category: HOSTED_PLUGIN_CATEGORY,
        label: 'Stop Instance'
    };
    HostedPluginCommands.RESTART = {
        id: 'hosted-plugin:restart',
        category: HOSTED_PLUGIN_CATEGORY,
        label: 'Restart Instance'
    };
    HostedPluginCommands.SELECT_PATH = {
        id: 'hosted-plugin:select-path',
        category: HOSTED_PLUGIN_CATEGORY,
        label: 'Select Path'
    };
})(HostedPluginCommands = exports.HostedPluginCommands || (exports.HostedPluginCommands = {}));
/**
 * Available states of hosted plugin instance.
 */
var HostedInstanceState;
(function (HostedInstanceState) {
    HostedInstanceState["STOPPED"] = "stopped";
    HostedInstanceState["STARTING"] = "starting";
    HostedInstanceState["RUNNING"] = "running";
    HostedInstanceState["STOPPING"] = "stopping";
    HostedInstanceState["FAILED"] = "failed";
})(HostedInstanceState = exports.HostedInstanceState || (exports.HostedInstanceState = {}));
/**
 * Responsible for UI to set up and control Hosted Plugin Instance.
 */
var HostedPluginManagerClient = /** @class */ (function () {
    function HostedPluginManagerClient() {
        this.isDebug = false;
        this.stateChanged = new common_1.Emitter();
    }
    Object.defineProperty(HostedPluginManagerClient.prototype, "onStateChanged", {
        get: function () {
            return this.stateChanged.event;
        },
        enumerable: true,
        configurable: true
    });
    HostedPluginManagerClient.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.openNewTabAskDialog = new OpenHostedInstanceLinkDialog(this.windowService);
                        return [4 /*yield*/, this.hostedPluginServer.isHostedPluginInstanceRunning()];
                    case 1:
                        if (!_c.sent()) return [3 /*break*/, 3];
                        _a = this;
                        _b = uri_1.default.bind;
                        return [4 /*yield*/, this.hostedPluginServer.getHostedPluginURI()];
                    case 2:
                        _a.pluginLocation = new (_b.apply(uri_1.default, [void 0, _c.sent()]))();
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(HostedPluginManagerClient.prototype, "lastPluginLocation", {
        get: function () {
            if (this.pluginLocation) {
                return this.pluginLocation.toString();
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    HostedPluginManagerClient.prototype.start = function (debugConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.hostedPluginServer.isHostedPluginInstanceRunning()];
                    case 1:
                        if (_c.sent()) {
                            this.messageService.warn('Hosted instance is already running.');
                            return [2 /*return*/];
                        }
                        if (!!this.pluginLocation) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.selectPluginPath()];
                    case 2:
                        _c.sent();
                        if (!this.pluginLocation) {
                            // selection was cancelled
                            return [2 /*return*/];
                        }
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 9, , 10]);
                        this.stateChanged.fire({ state: HostedInstanceState.STARTING, pluginLocation: this.pluginLocation });
                        this.messageService.info('Starting hosted instance server ...');
                        if (!debugConfig) return [3 /*break*/, 5];
                        this.isDebug = true;
                        _a = this;
                        return [4 /*yield*/, this.hostedPluginServer.runDebugHostedPluginInstance(this.pluginLocation.toString(), debugConfig)];
                    case 4:
                        _a.pluginInstanceURL = _c.sent();
                        return [3 /*break*/, 7];
                    case 5:
                        this.isDebug = false;
                        _b = this;
                        return [4 /*yield*/, this.hostedPluginServer.runHostedPluginInstance(this.pluginLocation.toString())];
                    case 6:
                        _b.pluginInstanceURL = _c.sent();
                        _c.label = 7;
                    case 7: return [4 /*yield*/, this.openPluginWindow()];
                    case 8:
                        _c.sent();
                        this.messageService.info('Hosted instance is running at: ' + this.pluginInstanceURL);
                        this.stateChanged.fire({ state: HostedInstanceState.RUNNING, pluginLocation: this.pluginLocation });
                        return [3 /*break*/, 10];
                    case 9:
                        error_1 = _c.sent();
                        this.messageService.error('Failed to run hosted plugin instance: ' + this.getErrorMessage(error_1));
                        this.stateChanged.fire({ state: HostedInstanceState.FAILED, pluginLocation: this.pluginLocation });
                        this.stop();
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    HostedPluginManagerClient.prototype.debug = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.start({ debugMode: this.hostedPluginPreferences['hosted-plugin.debugMode'] })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.startDebugSessionManager()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HostedPluginManagerClient.prototype.startDebugSessionManager = function () {
        return __awaiter(this, void 0, void 0, function () {
            var outFiles, fsPath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        outFiles = undefined;
                        if (!this.pluginLocation) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fileSystem.getFsPath(this.pluginLocation.toString())];
                    case 1:
                        fsPath = _a.sent();
                        if (fsPath) {
                            outFiles = [new path_1.Path(fsPath).join('**', '*.js').toString()];
                        }
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.debugSessionManager.start({
                            configuration: {
                                type: 'node',
                                request: 'attach',
                                timeout: 30000,
                                name: 'Hosted Plugin',
                                smartStep: true,
                                sourceMaps: !!outFiles,
                                outFiles: outFiles
                            }
                        })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HostedPluginManagerClient.prototype.stop = function (checkRunning) {
        if (checkRunning === void 0) { checkRunning = true; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = checkRunning;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.hostedPluginServer.isHostedPluginInstanceRunning()];
                    case 1:
                        _a = !(_b.sent());
                        _b.label = 2;
                    case 2:
                        if (_a) {
                            this.messageService.warn('Hosted instance is not running.');
                            return [2 /*return*/];
                        }
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        this.stateChanged.fire({ state: HostedInstanceState.STOPPING, pluginLocation: this.pluginLocation });
                        return [4 /*yield*/, this.hostedPluginServer.terminateHostedPluginInstance()];
                    case 4:
                        _b.sent();
                        this.messageService.info((this.pluginInstanceURL ? this.pluginInstanceURL : 'The instance') + ' has been terminated.');
                        this.stateChanged.fire({ state: HostedInstanceState.STOPPED, pluginLocation: this.pluginLocation });
                        return [3 /*break*/, 6];
                    case 5:
                        error_2 = _b.sent();
                        this.messageService.error(this.getErrorMessage(error_2));
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HostedPluginManagerClient.prototype.restart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var lastError, tries, _a, _b, error_3;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.hostedPluginServer.isHostedPluginInstanceRunning()];
                    case 1:
                        if (!_c.sent()) return [3 /*break*/, 15];
                        return [4 /*yield*/, this.stop(false)];
                    case 2:
                        _c.sent();
                        this.messageService.info('Starting hosted instance server ...');
                        // It takes some time before OS released all resources e.g. port.
                        // Keep trying to run hosted instance with delay.
                        this.stateChanged.fire({ state: HostedInstanceState.STARTING, pluginLocation: this.pluginLocation });
                        lastError = void 0;
                        tries = 0;
                        _c.label = 3;
                    case 3:
                        if (!(tries < 15)) return [3 /*break*/, 14];
                        _c.label = 4;
                    case 4:
                        _c.trys.push([4, 11, , 13]);
                        if (!this.isDebug) return [3 /*break*/, 7];
                        _a = this;
                        return [4 /*yield*/, this.hostedPluginServer.runDebugHostedPluginInstance(this.pluginLocation.toString(), {
                                debugMode: this.hostedPluginPreferences['hosted-plugin.debugMode']
                            })];
                    case 5:
                        _a.pluginInstanceURL = _c.sent();
                        return [4 /*yield*/, this.startDebugSessionManager()];
                    case 6:
                        _c.sent();
                        return [3 /*break*/, 9];
                    case 7:
                        _b = this;
                        return [4 /*yield*/, this.hostedPluginServer.runHostedPluginInstance(this.pluginLocation.toString())];
                    case 8:
                        _b.pluginInstanceURL = _c.sent();
                        _c.label = 9;
                    case 9: return [4 /*yield*/, this.openPluginWindow()];
                    case 10:
                        _c.sent();
                        this.messageService.info('Hosted instance is running at: ' + this.pluginInstanceURL);
                        this.stateChanged.fire({
                            state: HostedInstanceState.RUNNING,
                            pluginLocation: this.pluginLocation
                        });
                        return [2 /*return*/];
                    case 11:
                        error_3 = _c.sent();
                        lastError = error_3;
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 500); })];
                    case 12:
                        _c.sent();
                        return [3 /*break*/, 13];
                    case 13:
                        tries++;
                        return [3 /*break*/, 3];
                    case 14:
                        this.messageService.error('Failed to run hosted plugin instance: ' + this.getErrorMessage(lastError));
                        this.stateChanged.fire({ state: HostedInstanceState.FAILED, pluginLocation: this.pluginLocation });
                        this.stop();
                        return [3 /*break*/, 16];
                    case 15:
                        this.messageService.warn('Hosted Plugin instance was not running.');
                        this.start();
                        _c.label = 16;
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Creates directory choose dialog and set selected folder into pluginLocation field.
     */
    HostedPluginManagerClient.prototype.selectPluginPath = function () {
        return __awaiter(this, void 0, void 0, function () {
            var workspaceFolder, _a, rootNode, dialog, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.workspaceService.roots];
                    case 1:
                        _a = (_b.sent())[0];
                        if (_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.fileSystem.getCurrentUserHome()];
                    case 2:
                        _a = (_b.sent());
                        _b.label = 3;
                    case 3:
                        workspaceFolder = _a;
                        if (!workspaceFolder) {
                            throw new Error('Unable to find the root');
                        }
                        rootNode = browser_3.DirNode.createRoot(workspaceFolder);
                        dialog = this.openFileDialogFactory({
                            title: HostedPluginCommands.SELECT_PATH.label,
                            openLabel: 'Select',
                            canSelectFiles: false,
                            canSelectFolders: true,
                            canSelectMany: false
                        });
                        dialog.model.navigateTo(rootNode);
                        return [4 /*yield*/, dialog.open()];
                    case 4:
                        result = _b.sent();
                        if (!common_1.UriSelection.is(result)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.hostedPluginServer.isPluginValid(result.uri.toString())];
                    case 5:
                        if (_b.sent()) {
                            this.pluginLocation = result.uri;
                            this.messageService.info('Plugin folder is set to: ' + this.labelProvider.getLongName(result.uri));
                        }
                        else {
                            this.messageService.error('Specified folder does not contain valid plugin.');
                        }
                        _b.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Opens window with URL to the running plugin instance.
     */
    HostedPluginManagerClient.prototype.openPluginWindow = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // do nothing for electron browser
                if (browser_1.isNative) {
                    return [2 /*return*/];
                }
                if (this.pluginInstanceURL) {
                    try {
                        this.windowService.openNewWindow(this.pluginInstanceURL);
                    }
                    catch (err) {
                        // browser blocked opening of a new tab
                        this.openNewTabAskDialog.showOpenNewTabAskDialog(this.pluginInstanceURL);
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    HostedPluginManagerClient.prototype.getErrorMessage = function (error) {
        return error.message.substring(error.message.indexOf(':') + 1);
    };
    __decorate([
        inversify_1.inject(plugin_dev_protocol_1.HostedPluginServer),
        __metadata("design:type", Object)
    ], HostedPluginManagerClient.prototype, "hostedPluginServer", void 0);
    __decorate([
        inversify_1.inject(common_1.MessageService),
        __metadata("design:type", common_1.MessageService)
    ], HostedPluginManagerClient.prototype, "messageService", void 0);
    __decorate([
        inversify_1.inject(browser_3.OpenFileDialogFactory),
        __metadata("design:type", Function)
    ], HostedPluginManagerClient.prototype, "openFileDialogFactory", void 0);
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], HostedPluginManagerClient.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(window_service_1.WindowService),
        __metadata("design:type", Object)
    ], HostedPluginManagerClient.prototype, "windowService", void 0);
    __decorate([
        inversify_1.inject(common_2.FileSystem),
        __metadata("design:type", Object)
    ], HostedPluginManagerClient.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(browser_2.WorkspaceService),
        __metadata("design:type", browser_2.WorkspaceService)
    ], HostedPluginManagerClient.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(debug_session_manager_1.DebugSessionManager),
        __metadata("design:type", debug_session_manager_1.DebugSessionManager)
    ], HostedPluginManagerClient.prototype, "debugSessionManager", void 0);
    __decorate([
        inversify_1.inject(hosted_plugin_preferences_1.HostedPluginPreferences),
        __metadata("design:type", Object)
    ], HostedPluginManagerClient.prototype, "hostedPluginPreferences", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], HostedPluginManagerClient.prototype, "init", null);
    HostedPluginManagerClient = __decorate([
        inversify_1.injectable()
    ], HostedPluginManagerClient);
    return HostedPluginManagerClient;
}());
exports.HostedPluginManagerClient = HostedPluginManagerClient;
var OpenHostedInstanceLinkDialog = /** @class */ (function (_super) {
    __extends(OpenHostedInstanceLinkDialog, _super);
    function OpenHostedInstanceLinkDialog(windowService) {
        var _this = _super.call(this, {
            title: 'Your browser prevented opening of a new tab'
        }) || this;
        _this.windowService = windowService;
        _this.linkNode = document.createElement('a');
        _this.linkNode.target = '_blank';
        _this.linkNode.setAttribute('style', 'color: var(--theia-editorWidget-foreground);');
        _this.contentNode.appendChild(_this.linkNode);
        var messageNode = document.createElement('div');
        messageNode.innerText = 'Hosted instance is started at: ';
        messageNode.appendChild(_this.linkNode);
        _this.contentNode.appendChild(messageNode);
        _this.appendCloseButton();
        _this.openButton = _this.appendAcceptButton('Open');
        return _this;
    }
    OpenHostedInstanceLinkDialog.prototype.showOpenNewTabAskDialog = function (uri) {
        var _this = this;
        this.value = uri;
        this.linkNode.innerHTML = uri;
        this.linkNode.href = uri;
        this.openButton.onclick = function () {
            _this.windowService.openNewWindow(uri);
        };
        this.open();
    };
    return OpenHostedInstanceLinkDialog;
}(browser_1.AbstractDialog));


/***/ }),

/***/ "../node_modules/@theia/plugin-dev/lib/browser/hosted-plugin-preferences.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@theia/plugin-dev/lib/browser/hosted-plugin-preferences.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
exports.HostedPluginConfigSchema = {
    'type': 'object',
    properties: {
        'hosted-plugin.watchMode': {
            type: 'boolean',
            description: 'Run watcher on plugin under development',
            default: true
        },
        'hosted-plugin.debugMode': {
            type: 'string',
            description: 'Using inspect or inspect-brk for Node.js debug',
            default: 'inspect',
            enum: ['inspect', 'inspect-brk']
        }
    }
};
exports.HostedPluginPreferences = Symbol('HostedPluginPreferences');
function createNavigatorPreferences(preferences) {
    return browser_1.createPreferenceProxy(preferences, exports.HostedPluginConfigSchema);
}
exports.createNavigatorPreferences = createNavigatorPreferences;
function bindHostedPluginPreferences(bind) {
    bind(exports.HostedPluginPreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(browser_1.PreferenceService);
        return createNavigatorPreferences(preferences);
    });
    bind(browser_1.PreferenceContribution).toConstantValue({ schema: exports.HostedPluginConfigSchema });
}
exports.bindHostedPluginPreferences = bindHostedPluginPreferences;


/***/ }),

/***/ "../node_modules/@theia/plugin-dev/lib/browser/plugin-dev-frontend-module.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@theia/plugin-dev/lib/browser/plugin-dev-frontend-module.js ***!
  \***********************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var hosted_plugin_log_viewer_1 = __webpack_require__(/*! ./hosted-plugin-log-viewer */ "../node_modules/@theia/plugin-dev/lib/browser/hosted-plugin-log-viewer.js");
var hosted_plugin_manager_client_1 = __webpack_require__(/*! ./hosted-plugin-manager-client */ "../node_modules/@theia/plugin-dev/lib/browser/hosted-plugin-manager-client.js");
var hosted_plugin_informer_1 = __webpack_require__(/*! ./hosted-plugin-informer */ "../node_modules/@theia/plugin-dev/lib/browser/hosted-plugin-informer.js");
var hosted_plugin_preferences_1 = __webpack_require__(/*! ./hosted-plugin-preferences */ "../node_modules/@theia/plugin-dev/lib/browser/hosted-plugin-preferences.js");
var hosted_plugin_controller_1 = __webpack_require__(/*! ./hosted-plugin-controller */ "../node_modules/@theia/plugin-dev/lib/browser/hosted-plugin-controller.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var hosted_plugin_frontend_contribution_1 = __webpack_require__(/*! ./hosted-plugin-frontend-contribution */ "../node_modules/@theia/plugin-dev/lib/browser/hosted-plugin-frontend-contribution.js");
var command_1 = __webpack_require__(/*! @theia/core/lib/common/command */ "../node_modules/@theia/core/lib/common/command.js");
var plugin_dev_protocol_1 = __webpack_require__(/*! ../common/plugin-dev-protocol */ "../node_modules/@theia/plugin-dev/lib/common/plugin-dev-protocol.js");
var hosted_plugin_watcher_1 = __webpack_require__(/*! @theia/plugin-ext/lib/hosted/browser/hosted-plugin-watcher */ "../node_modules/@theia/plugin-ext/lib/hosted/browser/hosted-plugin-watcher.js");
exports.default = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    hosted_plugin_preferences_1.bindHostedPluginPreferences(bind);
    bind(hosted_plugin_log_viewer_1.HostedPluginLogViewer).toSelf().inSingletonScope();
    bind(hosted_plugin_manager_client_1.HostedPluginManagerClient).toSelf().inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).to(hosted_plugin_informer_1.HostedPluginInformer).inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).to(hosted_plugin_controller_1.HostedPluginController).inSingletonScope();
    bind(hosted_plugin_frontend_contribution_1.HostedPluginFrontendContribution).toSelf().inSingletonScope();
    bind(command_1.CommandContribution).toService(hosted_plugin_frontend_contribution_1.HostedPluginFrontendContribution);
    bind(plugin_dev_protocol_1.HostedPluginServer).toDynamicValue(function (ctx) {
        var connection = ctx.container.get(browser_1.WebSocketConnectionProvider);
        var hostedWatcher = ctx.container.get(hosted_plugin_watcher_1.HostedPluginWatcher);
        return connection.createProxy(plugin_dev_protocol_1.hostedServicePath, hostedWatcher.getHostedPluginClient());
    }).inSingletonScope();
});


/***/ }),

/***/ "../node_modules/@theia/plugin-dev/lib/common/plugin-dev-protocol.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@theia/plugin-dev/lib/common/plugin-dev-protocol.js ***!
  \***************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.hostedServicePath = '/services/plugin-dev';
exports.HostedPluginServer = Symbol('HostedPluginServer');


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/hosted/browser/hosted-plugin-watcher.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/hosted/browser/hosted-plugin-watcher.js ***!
  \*************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../node_modules/@theia/core/lib/common/event.js");
var HostedPluginWatcher = /** @class */ (function () {
    function HostedPluginWatcher() {
        this.onPostMessage = new event_1.Emitter();
        this.onLogMessage = new event_1.Emitter();
        this.onDidDeployEmitter = new event_1.Emitter();
        this.onDidDeploy = this.onDidDeployEmitter.event;
    }
    HostedPluginWatcher.prototype.getHostedPluginClient = function () {
        var _this = this;
        var messageEmitter = this.onPostMessage;
        var logEmitter = this.onLogMessage;
        return {
            postMessage: function (message) {
                messageEmitter.fire(JSON.parse(message));
                return Promise.resolve();
            },
            log: function (logPart) {
                logEmitter.fire(logPart);
                return Promise.resolve();
            },
            onDidDeploy: function () { return _this.onDidDeployEmitter.fire(undefined); }
        };
    };
    Object.defineProperty(HostedPluginWatcher.prototype, "onPostMessageEvent", {
        get: function () {
            return this.onPostMessage.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HostedPluginWatcher.prototype, "onLogMessageEvent", {
        get: function () {
            return this.onLogMessage.event;
        },
        enumerable: true,
        configurable: true
    });
    HostedPluginWatcher = __decorate([
        inversify_1.injectable()
    ], HostedPluginWatcher);
    return HostedPluginWatcher;
}());
exports.HostedPluginWatcher = HostedPluginWatcher;


/***/ })

}]);
//# sourceMappingURL=66.bundle.js.map
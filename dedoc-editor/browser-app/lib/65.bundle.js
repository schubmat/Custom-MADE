(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "../node_modules/@theia/markers/lib/browser/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/@theia/markers/lib/browser/index.js ***!
  \***********************************************************/
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
__export(__webpack_require__(/*! ./marker-manager */ "../node_modules/@theia/markers/lib/browser/marker-manager.js"));
__export(__webpack_require__(/*! ./problem/problem-manager */ "../node_modules/@theia/markers/lib/browser/problem/problem-manager.js"));


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

/***/ "../node_modules/@theia/plugin-metrics/lib/browser/plugin-metrics-creator.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@theia/plugin-metrics/lib/browser/plugin-metrics-creator.js ***!
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
var metrics_protocol_1 = __webpack_require__(/*! ../common/metrics-protocol */ "../node_modules/@theia/plugin-metrics/lib/common/metrics-protocol.js");
var plugin_metrics_types_1 = __webpack_require__(/*! ../common/plugin-metrics-types */ "../node_modules/@theia/plugin-metrics/lib/common/plugin-metrics-types.js");
var PluginMetricsCreator = /** @class */ (function () {
    function PluginMetricsCreator() {
        this.NODE_BASED_REGEX = /Request(.*?)failed/;
        this.setPluginMetrics();
        this._extensionIDAnalytics = {};
    }
    /**
     * Create an error metric for requestData.pluginID by attempting to extract the erroring
     * language server method from the requestData.errorContentsOrMethod. If it cannot extract the
     * error language server method from requestData.errorContentsOrMethod then it will not
     * create a metric.
     *
     * @param pluginID The id of the plugin
     * @param errorContents The contents that the langauge server error has produced
     */
    PluginMetricsCreator.prototype.createErrorMetric = function (requestData) {
        return __awaiter(this, void 0, void 0, function () {
            var method, createdMetric;
            return __generator(this, function (_a) {
                if (!requestData.pluginID) {
                    return [2 /*return*/];
                }
                method = this.extractMethodFromValue(requestData.errorContentsOrMethod);
                // only log the metric if we can find the method that it occured in
                if (method) {
                    createdMetric = plugin_metrics_types_1.createRequestData(requestData.pluginID, method, requestData.timeTaken);
                    this.createMetric(createdMetric, false);
                    this.decreaseExtensionRequests(requestData.pluginID, method);
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Decreases the total requests and the successful responses for pluginID with method by 1.
     *
     * This is needed because an error and a successful language server request aren't currently
     * associated together because of https://github.com/microsoft/vscode-languageserver-node/issues/517.
     * That means that every language server request that resolves counts as a successful language server request.
     * Therefore, we need to decrease the extension requests for pluginID when we know there is an error.
     * Otherwise, for every language server request that errors we would count it as both a success and a failure.
     *
     * @param pluginID The id of the plugin that should have the decreased requests
     */
    PluginMetricsCreator.prototype.decreaseExtensionRequests = function (pluginID, method) {
        var thisExtension = this._extensionIDAnalytics[pluginID];
        if (thisExtension) {
            var currentAnalytics = thisExtension[method];
            if (currentAnalytics) {
                currentAnalytics.totalRequests -= 1;
                currentAnalytics.succesfulResponses -= 1;
            }
        }
    };
    /**
     * Update the internal metrics structure for pluginID with method when a request is made
     *
     * @param requestData The data from the request that was made
     * @param isRequestSuccessful If the language server request was successful or not
     */
    PluginMetricsCreator.prototype.createMetric = function (requestData, isRequestSuccessful) {
        return __awaiter(this, void 0, void 0, function () {
            var method, defaultAnalytic, thisExtension, currentAnalytic;
            return __generator(this, function (_a) {
                if (!requestData.pluginID) {
                    return [2 /*return*/];
                }
                method = requestData.errorContentsOrMethod;
                defaultAnalytic = plugin_metrics_types_1.createDefaultAnalytics(requestData.timeTaken, isRequestSuccessful);
                this.createExtensionIDAnalyticIfNotFound(requestData, defaultAnalytic);
                this.createExtensionIDMethodIfNotFound(requestData, defaultAnalytic);
                thisExtension = this._extensionIDAnalytics[requestData.pluginID];
                if (thisExtension) {
                    currentAnalytic = thisExtension[method];
                    if (currentAnalytic) {
                        currentAnalytic.totalRequests += 1;
                        if (isRequestSuccessful) {
                            currentAnalytic.succesfulResponses += 1;
                        }
                        if (isRequestSuccessful) {
                            currentAnalytic.sumOfTimeForSuccess = currentAnalytic.sumOfTimeForSuccess + requestData.timeTaken;
                        }
                        else {
                            currentAnalytic.sumOfTimeForFailure = currentAnalytic.sumOfTimeForFailure + requestData.timeTaken;
                        }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Create an entry in _extensionIDAnalytics with createdAnalytic if there does not exist one
     *
     * @param requestData data that we will turn into metrics
     * @param createdAnalytic the analytic being created
     */
    PluginMetricsCreator.prototype.createExtensionIDAnalyticIfNotFound = function (requestData, createdAnalytic) {
        var _a;
        var method = requestData.errorContentsOrMethod; // We know its a metric if this is being called
        if (!this._extensionIDAnalytics[requestData.pluginID]) {
            this._extensionIDAnalytics[requestData.pluginID] = (_a = {},
                _a[method] = createdAnalytic,
                _a);
        }
    };
    /**
     * Create an entry in _extensionIDAnalytics for requestData.pluginID with requestData.errorContentsOrMethod as the method
     * if there does not exist one
     *
     * @param requestData data that we will turn into metrics
     * @param createdAnalytic the analytic being created
     */
    PluginMetricsCreator.prototype.createExtensionIDMethodIfNotFound = function (requestData, createdAnalytic) {
        var method = requestData.errorContentsOrMethod; // We know its a metric if this is being called
        if (this._extensionIDAnalytics[requestData.pluginID]) {
            var methodToAnalyticMap = this._extensionIDAnalytics[requestData.pluginID];
            if (!methodToAnalyticMap[method]) {
                methodToAnalyticMap[method] = createdAnalytic;
            }
        }
    };
    /**
     * setPluginMetrics is a constant running function that sets
     * pluginMetrics every {$METRICS_TIMEOUT} seconds so that it doesn't
     * update /metrics on every request
     */
    PluginMetricsCreator.prototype.setPluginMetrics = function () {
        var self = this;
        setInterval(function () {
            if (Object.keys(self._extensionIDAnalytics).length !== 0) {
                self.pluginMetrics.setMetrics(JSON.stringify(self._extensionIDAnalytics));
            }
        }, metrics_protocol_1.METRICS_TIMEOUT);
    };
    Object.defineProperty(PluginMetricsCreator.prototype, "extensionIDAnalytics", {
        // Map of plugin extension id to method to analytic
        get: function () {
            return this._extensionIDAnalytics;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Attempts to extract the method name from the current errorContents using the
     * vscode-languageclient matching regex.
     *
     * If it cannot find a match in the errorContents it returns undefined
     *
     * @param errorContents The contents of the current error or undefined
     */
    PluginMetricsCreator.prototype.extractMethodFromValue = function (errorContents) {
        if (!errorContents) {
            return undefined;
        }
        var matches = errorContents.match(this.NODE_BASED_REGEX);
        if (matches) {
            return matches[1].trim();
        }
        return undefined;
    };
    __decorate([
        inversify_1.inject(metrics_protocol_1.PluginMetrics),
        __metadata("design:type", Object)
    ], PluginMetricsCreator.prototype, "pluginMetrics", void 0);
    PluginMetricsCreator = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], PluginMetricsCreator);
    return PluginMetricsCreator;
}());
exports.PluginMetricsCreator = PluginMetricsCreator;


/***/ }),

/***/ "../node_modules/@theia/plugin-metrics/lib/browser/plugin-metrics-frontend-module.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/@theia/plugin-metrics/lib/browser/plugin-metrics-frontend-module.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Red Hat and others.
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
var plugin_metrics_languages_main_1 = __webpack_require__(/*! ./plugin-metrics-languages-main */ "../node_modules/@theia/plugin-metrics/lib/browser/plugin-metrics-languages-main.js");
var metrics_protocol_1 = __webpack_require__(/*! ../common/metrics-protocol */ "../node_modules/@theia/plugin-metrics/lib/common/metrics-protocol.js");
var ws_connection_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/messaging/ws-connection-provider */ "../node_modules/@theia/core/lib/browser/messaging/ws-connection-provider.js");
var plugin_metrics_creator_1 = __webpack_require__(/*! ./plugin-metrics-creator */ "../node_modules/@theia/plugin-metrics/lib/browser/plugin-metrics-creator.js");
var plugin_metrics_resolver_1 = __webpack_require__(/*! ./plugin-metrics-resolver */ "../node_modules/@theia/plugin-metrics/lib/browser/plugin-metrics-resolver.js");
var plugin_metrics_output_registry_1 = __webpack_require__(/*! ./plugin-metrics-output-registry */ "../node_modules/@theia/plugin-metrics/lib/browser/plugin-metrics-output-registry.js");
var languages_main_1 = __webpack_require__(/*! @theia/plugin-ext/lib/main/browser/languages-main */ "../node_modules/@theia/plugin-ext/lib/main/browser/languages-main.js");
var output_channel_registry_main_1 = __webpack_require__(/*! @theia/plugin-ext/lib/main/browser/output-channel-registry-main */ "../node_modules/@theia/plugin-ext/lib/main/browser/output-channel-registry-main.js");
exports.default = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    bind(plugin_metrics_resolver_1.PluginMetricsResolver).toSelf().inSingletonScope();
    bind(plugin_metrics_creator_1.PluginMetricsCreator).toSelf().inSingletonScope();
    rebind(languages_main_1.LanguagesMainImpl).to(plugin_metrics_languages_main_1.LanguagesMainPluginMetrics).inTransientScope();
    rebind(output_channel_registry_main_1.OutputChannelRegistryMainImpl).to(plugin_metrics_output_registry_1.PluginMetricsOutputChannelRegistry).inTransientScope();
    bind(metrics_protocol_1.PluginMetrics).toDynamicValue(function (ctx) {
        var connection = ctx.container.get(ws_connection_provider_1.WebSocketConnectionProvider);
        return connection.createProxy(metrics_protocol_1.metricsJsonRpcPath);
    }).inSingletonScope();
});


/***/ }),

/***/ "../node_modules/@theia/plugin-metrics/lib/browser/plugin-metrics-languages-main.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/@theia/plugin-metrics/lib/browser/plugin-metrics-languages-main.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Red Hat and others.
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
var plugin_metrics_resolver_1 = __webpack_require__(/*! ./plugin-metrics-resolver */ "../node_modules/@theia/plugin-metrics/lib/browser/plugin-metrics-resolver.js");
var languages_main_1 = __webpack_require__(/*! @theia/plugin-ext/lib/main/browser/languages-main */ "../node_modules/@theia/plugin-ext/lib/main/browser/languages-main.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var vst = __webpack_require__(/*! vscode-languageserver-protocol */ "../node_modules/vscode-languageserver-protocol/lib/main.js");
var LanguagesMainPluginMetrics = /** @class */ (function (_super) {
    __extends(LanguagesMainPluginMetrics, _super);
    function LanguagesMainPluginMetrics() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Map of handle to extension id
        _this.handleToExtensionID = new Map();
        return _this;
    }
    LanguagesMainPluginMetrics.prototype.$unregister = function (handle) {
        this.handleToExtensionID.delete(handle);
        _super.prototype.$unregister.call(this, handle);
    };
    LanguagesMainPluginMetrics.prototype.provideCompletionItems = function (handle, model, position, context, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.CompletionRequest.type.method, _super.prototype.provideCompletionItems.call(this, handle, model, position, context, token));
    };
    LanguagesMainPluginMetrics.prototype.resolveCompletionItem = function (handle, model, position, item, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.CompletionRequest.type.method, _super.prototype.resolveCompletionItem.call(this, handle, model, position, item, token));
    };
    LanguagesMainPluginMetrics.prototype.provideReferences = function (handle, model, position, context, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.ReferencesRequest.type.method, _super.prototype.provideReferences.call(this, handle, model, position, context, token));
    };
    LanguagesMainPluginMetrics.prototype.provideImplementation = function (handle, model, position, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.ImplementationRequest.type.method, _super.prototype.provideImplementation.call(this, handle, model, position, token));
    };
    LanguagesMainPluginMetrics.prototype.provideTypeDefinition = function (handle, model, position, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.TypeDefinitionRequest.type.method, _super.prototype.provideTypeDefinition.call(this, handle, model, position, token));
    };
    LanguagesMainPluginMetrics.prototype.provideHover = function (handle, model, position, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.HoverRequest.type.method, _super.prototype.provideHover.call(this, handle, model, position, token));
    };
    LanguagesMainPluginMetrics.prototype.provideDocumentHighlights = function (handle, model, position, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.DocumentHighlightRequest.type.method, _super.prototype.provideDocumentHighlights.call(this, handle, model, position, token));
    };
    LanguagesMainPluginMetrics.prototype.provideWorkspaceSymbols = function (handle, params, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.WorkspaceSymbolRequest.type.method, _super.prototype.provideWorkspaceSymbols.call(this, handle, params, token));
    };
    LanguagesMainPluginMetrics.prototype.resolveWorkspaceSymbol = function (handle, symbol, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.WorkspaceSymbolRequest.type.method, _super.prototype.resolveWorkspaceSymbol.call(this, handle, symbol, token));
    };
    LanguagesMainPluginMetrics.prototype.provideLinks = function (handle, model, token) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.DocumentLinkRequest.type.method, _super.prototype.provideLinks.call(this, handle, model, token))];
            });
        });
    };
    LanguagesMainPluginMetrics.prototype.resolveLink = function (handle, link, token) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.DocumentLinkRequest.type.method, _super.prototype.resolveLink.call(this, handle, link, token))];
            });
        });
    };
    LanguagesMainPluginMetrics.prototype.provideCodeLenses = function (handle, model, token) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.CodeLensRequest.type.method, _super.prototype.provideCodeLenses.call(this, handle, model, token))];
            });
        });
    };
    LanguagesMainPluginMetrics.prototype.resolveCodeLens = function (handle, model, codeLens, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.CodeLensResolveRequest.type.method, _super.prototype.resolveCodeLens.call(this, handle, model, codeLens, token));
    };
    LanguagesMainPluginMetrics.prototype.provideDocumentSymbols = function (handle, model, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.DocumentSymbolRequest.type.method, _super.prototype.provideDocumentSymbols.call(this, handle, model, token));
    };
    LanguagesMainPluginMetrics.prototype.provideDefinition = function (handle, model, position, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.DefinitionRequest.type.method, _super.prototype.provideDefinition.call(this, handle, model, position, token));
    };
    LanguagesMainPluginMetrics.prototype.provideSignatureHelp = function (handle, model, position, token, context) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.SignatureHelpRequest.type.method, _super.prototype.provideSignatureHelp.call(this, handle, model, position, token, context))];
            });
        });
    };
    LanguagesMainPluginMetrics.prototype.provideDocumentFormattingEdits = function (handle, model, options, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.DocumentFormattingRequest.type.method, _super.prototype.provideDocumentFormattingEdits.call(this, handle, model, options, token));
    };
    LanguagesMainPluginMetrics.prototype.provideDocumentRangeFormattingEdits = function (handle, model, range, options, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.DocumentRangeFormattingRequest.type.method, _super.prototype.provideDocumentRangeFormattingEdits.call(this, handle, model, range, options, token));
    };
    LanguagesMainPluginMetrics.prototype.provideOnTypeFormattingEdits = function (handle, model, position, ch, options, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.DocumentOnTypeFormattingRequest.type.method, _super.prototype.provideOnTypeFormattingEdits.call(this, handle, model, position, ch, options, token));
    };
    LanguagesMainPluginMetrics.prototype.provideFoldingRanges = function (handle, model, context, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.FoldingRangeRequest.type.method, _super.prototype.provideFoldingRanges.call(this, handle, model, context, token));
    };
    LanguagesMainPluginMetrics.prototype.provideDocumentColors = function (handle, model, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.DocumentColorRequest.type.method, _super.prototype.provideDocumentColors.call(this, handle, model, token));
    };
    LanguagesMainPluginMetrics.prototype.provideColorPresentations = function (handle, model, colorInfo, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.ColorPresentationRequest.type.method, _super.prototype.provideColorPresentations.call(this, handle, model, colorInfo, token));
    };
    LanguagesMainPluginMetrics.prototype.provideCodeActions = function (handle, model, rangeOrSelection, context, token) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.CodeActionRequest.type.method, _super.prototype.provideCodeActions.call(this, handle, model, rangeOrSelection, context, token))];
            });
        });
    };
    LanguagesMainPluginMetrics.prototype.provideRenameEdits = function (handle, model, position, newName, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.RenameRequest.type.method, _super.prototype.provideRenameEdits.call(this, handle, model, position, newName, token));
    };
    LanguagesMainPluginMetrics.prototype.resolveRenameLocation = function (handle, model, position, token) {
        return this.pluginMetricsResolver.resolveRequest(this.handleToExtensionName(handle), vst.RenameRequest.type.method, _super.prototype.resolveRenameLocation.call(this, handle, model, position, token));
    };
    LanguagesMainPluginMetrics.prototype.$registerCompletionSupport = function (handle, pluginInfo, selector, triggerCharacters, supportsResolveDetails) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerCompletionSupport.call(this, handle, pluginInfo, selector, triggerCharacters, supportsResolveDetails);
    };
    LanguagesMainPluginMetrics.prototype.$registerDefinitionProvider = function (handle, pluginInfo, selector) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerDefinitionProvider.call(this, handle, pluginInfo, selector);
    };
    LanguagesMainPluginMetrics.prototype.$registerDeclarationProvider = function (handle, pluginInfo, selector) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerDeclarationProvider.call(this, handle, pluginInfo, selector);
    };
    LanguagesMainPluginMetrics.prototype.$registerReferenceProvider = function (handle, pluginInfo, selector) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerReferenceProvider.call(this, handle, pluginInfo, selector);
    };
    LanguagesMainPluginMetrics.prototype.$registerSignatureHelpProvider = function (handle, pluginInfo, selector, metadata) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerSignatureHelpProvider.call(this, handle, pluginInfo, selector, metadata);
    };
    LanguagesMainPluginMetrics.prototype.$registerImplementationProvider = function (handle, pluginInfo, selector) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerImplementationProvider.call(this, handle, pluginInfo, selector);
    };
    LanguagesMainPluginMetrics.prototype.$registerTypeDefinitionProvider = function (handle, pluginInfo, selector) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerTypeDefinitionProvider.call(this, handle, pluginInfo, selector);
    };
    LanguagesMainPluginMetrics.prototype.$registerHoverProvider = function (handle, pluginInfo, selector) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerHoverProvider.call(this, handle, pluginInfo, selector);
    };
    LanguagesMainPluginMetrics.prototype.$registerDocumentHighlightProvider = function (handle, pluginInfo, selector) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerDocumentHighlightProvider.call(this, handle, pluginInfo, selector);
    };
    LanguagesMainPluginMetrics.prototype.$registerWorkspaceSymbolProvider = function (handle, pluginInfo) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerWorkspaceSymbolProvider.call(this, handle, pluginInfo);
    };
    LanguagesMainPluginMetrics.prototype.$registerDocumentLinkProvider = function (handle, pluginInfo, selector) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerDocumentLinkProvider.call(this, handle, pluginInfo, selector);
    };
    LanguagesMainPluginMetrics.prototype.$registerCodeLensSupport = function (handle, pluginInfo, selector, eventHandle) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerCodeLensSupport.call(this, handle, pluginInfo, selector, eventHandle);
    };
    LanguagesMainPluginMetrics.prototype.$registerOutlineSupport = function (handle, pluginInfo, selector) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerOutlineSupport.call(this, handle, pluginInfo, selector);
    };
    LanguagesMainPluginMetrics.prototype.$registerDocumentFormattingSupport = function (handle, pluginInfo, selector) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerDocumentFormattingSupport.call(this, handle, pluginInfo, selector);
    };
    LanguagesMainPluginMetrics.prototype.$registerRangeFormattingProvider = function (handle, pluginInfo, selector) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerRangeFormattingProvider.call(this, handle, pluginInfo, selector);
    };
    LanguagesMainPluginMetrics.prototype.$registerOnTypeFormattingProvider = function (handle, pluginInfo, selector, autoFormatTriggerCharacters) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerOnTypeFormattingProvider.call(this, handle, pluginInfo, selector, autoFormatTriggerCharacters);
    };
    LanguagesMainPluginMetrics.prototype.$registerFoldingRangeProvider = function (handle, pluginInfo, selector) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerFoldingRangeProvider.call(this, handle, pluginInfo, selector);
    };
    LanguagesMainPluginMetrics.prototype.$registerDocumentColorProvider = function (handle, pluginInfo, selector) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerDocumentColorProvider.call(this, handle, pluginInfo, selector);
    };
    LanguagesMainPluginMetrics.prototype.$registerQuickFixProvider = function (handle, pluginInfo, selector, codeActionKinds) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerQuickFixProvider.call(this, handle, pluginInfo, selector);
    };
    LanguagesMainPluginMetrics.prototype.$registerRenameProvider = function (handle, pluginInfo, selector, supportsResolveLocation) {
        this.registerPluginWithFeatureHandle(handle, pluginInfo.id);
        _super.prototype.$registerRenameProvider.call(this, handle, pluginInfo, selector, supportsResolveLocation);
    };
    LanguagesMainPluginMetrics.prototype.registerPluginWithFeatureHandle = function (handle, pluginID) {
        this.handleToExtensionID.set(handle, pluginID);
    };
    LanguagesMainPluginMetrics.prototype.handleToExtensionName = function (handle) {
        return this.handleToExtensionID.get(handle);
    };
    __decorate([
        inversify_1.inject(plugin_metrics_resolver_1.PluginMetricsResolver),
        __metadata("design:type", plugin_metrics_resolver_1.PluginMetricsResolver)
    ], LanguagesMainPluginMetrics.prototype, "pluginMetricsResolver", void 0);
    LanguagesMainPluginMetrics = __decorate([
        inversify_1.injectable()
    ], LanguagesMainPluginMetrics);
    return LanguagesMainPluginMetrics;
}(languages_main_1.LanguagesMainImpl));
exports.LanguagesMainPluginMetrics = LanguagesMainPluginMetrics;


/***/ }),

/***/ "../node_modules/@theia/plugin-metrics/lib/browser/plugin-metrics-output-registry.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/@theia/plugin-metrics/lib/browser/plugin-metrics-output-registry.js ***!
  \*******************************************************************************************/
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
var output_channel_registry_main_1 = __webpack_require__(/*! @theia/plugin-ext/lib/main/browser/output-channel-registry-main */ "../node_modules/@theia/plugin-ext/lib/main/browser/output-channel-registry-main.js");
var plugin_metrics_creator_1 = __webpack_require__(/*! ./plugin-metrics-creator */ "../node_modules/@theia/plugin-metrics/lib/browser/plugin-metrics-creator.js");
var plugin_metrics_types_1 = __webpack_require__(/*! ../common/plugin-metrics-types */ "../node_modules/@theia/plugin-metrics/lib/common/plugin-metrics-types.js");
var PluginMetricsOutputChannelRegistry = /** @class */ (function (_super) {
    __extends(PluginMetricsOutputChannelRegistry, _super);
    function PluginMetricsOutputChannelRegistry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PluginMetricsOutputChannelRegistry.prototype.$append = function (channelName, errorOrValue, pluginInfo) {
        if (errorOrValue.startsWith('[Error')) {
            var createdMetric = plugin_metrics_types_1.createDefaultRequestData(pluginInfo.id, errorOrValue);
            this.pluginMetricsCreator.createErrorMetric(createdMetric);
        }
        return _super.prototype.$append.call(this, channelName, errorOrValue, pluginInfo);
    };
    __decorate([
        inversify_1.inject(plugin_metrics_creator_1.PluginMetricsCreator),
        __metadata("design:type", plugin_metrics_creator_1.PluginMetricsCreator)
    ], PluginMetricsOutputChannelRegistry.prototype, "pluginMetricsCreator", void 0);
    PluginMetricsOutputChannelRegistry = __decorate([
        inversify_1.injectable()
    ], PluginMetricsOutputChannelRegistry);
    return PluginMetricsOutputChannelRegistry;
}(output_channel_registry_main_1.OutputChannelRegistryMainImpl));
exports.PluginMetricsOutputChannelRegistry = PluginMetricsOutputChannelRegistry;


/***/ }),

/***/ "../node_modules/@theia/plugin-metrics/lib/browser/plugin-metrics-resolver.js":
/*!************************************************************************************!*\
  !*** ../node_modules/@theia/plugin-metrics/lib/browser/plugin-metrics-resolver.js ***!
  \************************************************************************************/
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
var plugin_metrics_creator_1 = __webpack_require__(/*! ./plugin-metrics-creator */ "../node_modules/@theia/plugin-metrics/lib/browser/plugin-metrics-creator.js");
var plugin_metrics_types_1 = __webpack_require__(/*! ../common/plugin-metrics-types */ "../node_modules/@theia/plugin-metrics/lib/common/plugin-metrics-types.js");
/**
 * This class helps resolve language server requests into successess or failures
 * and sends the data to the metricsExtractor
 */
var PluginMetricsResolver = /** @class */ (function () {
    function PluginMetricsResolver() {
    }
    /**
     * Resolve a request for pluginID and create a metric based on whether or not
     * the language server errored.
     *
     * @param pluginID the ID of the plugin that made the request
     * @param method  the method that was request
     * @param request the result of the language server request
     */
    PluginMetricsResolver.prototype.resolveRequest = function (pluginID, method, request) {
        return __awaiter(this, void 0, void 0, function () {
            var currentTime, value, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentTime = performance.now();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, request];
                    case 2:
                        value = _a.sent();
                        this.createAndSetMetric(pluginID, method, performance.now() - currentTime, true);
                        return [2 /*return*/, value];
                    case 3:
                        error_1 = _a.sent();
                        this.createAndSetMetric(pluginID, method, performance.now() - currentTime, false);
                        return [2 /*return*/, Promise.reject(error_1)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PluginMetricsResolver.prototype.createAndSetMetric = function (pluginID, method, time, successful) {
        var createdSuccessMetric = plugin_metrics_types_1.createRequestData(pluginID, method, time);
        this.metricsCreator.createMetric(createdSuccessMetric, successful);
    };
    __decorate([
        inversify_1.inject(plugin_metrics_creator_1.PluginMetricsCreator),
        __metadata("design:type", plugin_metrics_creator_1.PluginMetricsCreator)
    ], PluginMetricsResolver.prototype, "metricsCreator", void 0);
    PluginMetricsResolver = __decorate([
        inversify_1.injectable()
    ], PluginMetricsResolver);
    return PluginMetricsResolver;
}());
exports.PluginMetricsResolver = PluginMetricsResolver;


/***/ }),

/***/ "../node_modules/@theia/plugin-metrics/lib/common/metrics-protocol.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@theia/plugin-metrics/lib/common/metrics-protocol.js ***!
  \****************************************************************************/
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
/**
 * The JSON-RPC interface for plugin metrics
 */
exports.metricsJsonRpcPath = '/services/plugin-ext/metrics';
exports.PluginMetrics = Symbol('PluginMetrics');
exports.METRICS_TIMEOUT = 10000;


/***/ }),

/***/ "../node_modules/@theia/plugin-metrics/lib/common/plugin-metrics-types.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@theia/plugin-metrics/lib/common/plugin-metrics-types.js ***!
  \********************************************************************************/
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
/**
 * Helper functions for creating an object that corresponds to the DataFromRequest interface
 */
function createRequestData(pluginID, errorContentsOrMethod, timeTaken) {
    return {
        pluginID: pluginID,
        errorContentsOrMethod: errorContentsOrMethod,
        timeTaken: timeTaken
    };
}
exports.createRequestData = createRequestData;
function createDefaultRequestData(pluginID, errorContentsOrMethod) {
    return {
        pluginID: pluginID,
        errorContentsOrMethod: errorContentsOrMethod,
        timeTaken: 0
    };
}
exports.createDefaultRequestData = createDefaultRequestData;
function createDefaultAnalytics(timeTaken, isRequestSuccessful) {
    if (isRequestSuccessful) {
        return {
            sumOfTimeForSuccess: timeTaken,
            sumOfTimeForFailure: 0,
            succesfulResponses: 0,
            totalRequests: 0
        };
    }
    else {
        return {
            sumOfTimeForSuccess: 0,
            sumOfTimeForFailure: timeTaken,
            succesfulResponses: 0,
            totalRequests: 0
        };
    }
}
exports.createDefaultAnalytics = createDefaultAnalytics;


/***/ })

}]);
//# sourceMappingURL=65.bundle.js.map
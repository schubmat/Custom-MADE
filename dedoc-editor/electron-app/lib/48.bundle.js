(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "../node_modules/@theia/core/lib/browser/widgets/alert-message.js":
/*!************************************************************************!*\
  !*** ../node_modules/@theia/core/lib/browser/widgets/alert-message.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var AlertMessageIcon = {
    INFO: 'fa fa-info-circle',
    SUCCESS: 'fa fa-check-circle',
    WARNING: 'fa fa-exclamation-circle',
    ERROR: 'fa fa-times-circle'
};
var AlertMessage = /** @class */ (function (_super) {
    __extends(AlertMessage, _super);
    function AlertMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AlertMessage.prototype.render = function () {
        return React.createElement("div", { className: 'theia-alert-message-container' },
            React.createElement("div", { className: "theia-" + this.props.type.toLowerCase() + "-alert" },
                React.createElement("div", { className: 'theia-message-header' },
                    React.createElement("i", { className: AlertMessageIcon[this.props.type] }),
                    "\u00A0",
                    this.props.header),
                React.createElement("div", { className: 'theia-message-content' }, this.props.children)));
    };
    return AlertMessage;
}(React.Component));
exports.AlertMessage = AlertMessage;


/***/ }),

/***/ "../node_modules/@theia/keymaps/lib/browser/keybindings-widget.js":
/*!************************************************************************!*\
  !*** ../node_modules/@theia/keymaps/lib/browser/keybindings-widget.js ***!
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
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var debounce = __webpack_require__(/*! lodash.debounce */ "../node_modules/lodash.debounce/index.js");
var fuzzy = __webpack_require__(/*! fuzzy */ "../node_modules/fuzzy/lib/fuzzy.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../node_modules/@theia/core/lib/common/event.js");
var command_1 = __webpack_require__(/*! @theia/core/lib/common/command */ "../node_modules/@theia/core/lib/common/command.js");
var react_widget_1 = __webpack_require__(/*! @theia/core/lib/browser/widgets/react-widget */ "../node_modules/@theia/core/lib/browser/widgets/react-widget.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var keymaps_service_1 = __webpack_require__(/*! ./keymaps-service */ "../node_modules/@theia/keymaps/lib/browser/keymaps-service.js");
var alert_message_1 = __webpack_require__(/*! @theia/core/lib/browser/widgets/alert-message */ "../node_modules/@theia/core/lib/browser/widgets/alert-message.js");
var KeybindingWidget = /** @class */ (function (_super) {
    __extends(KeybindingWidget, _super);
    function KeybindingWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * The list of all available keybindings.
         */
        _this.items = [];
        /**
         * The current user search query.
         */
        _this.query = '';
        /**
         * The regular expression used to extract values between fuzzy results.
         */
        _this.regexp = /<match>(.*?)<\/match>/g;
        /**
         * The regular expression used to extract values between the keybinding separator.
         */
        _this.keybindingSeparator = /<match>\+<\/match>/g;
        /**
         * The fuzzy search options.
         * The `pre` and `post` options are used to wrap fuzzy matches.
         */
        _this.fuzzyOptions = {
            pre: '<match>',
            post: '</match>',
        };
        _this.onDidUpdateEmitter = new event_1.Emitter();
        _this.onDidUpdate = _this.onDidUpdateEmitter.event;
        /**
         * Search keybindings.
         */
        _this.searchKeybindings = debounce(function () { return _this.doSearchKeybindings(); }, 50);
        return _this;
    }
    KeybindingWidget_1 = KeybindingWidget;
    /**
     * Initialize the widget.
     */
    KeybindingWidget.prototype.init = function () {
        var _this = this;
        this.id = KeybindingWidget_1.ID;
        this.title.label = KeybindingWidget_1.LABEL;
        this.title.caption = KeybindingWidget_1.LABEL;
        this.title.iconClass = 'fa fa-bars';
        this.title.closable = true;
        this.update();
        // Initialize the list of keybinding items.
        this.items = this.getItems();
        // Listen to changes made in the `keymaps.json` and update the view accordingly.
        if (this.keymapsService.onDidChangeKeymaps) {
            this.toDispose.push(this.keymapsService.onDidChangeKeymaps(function () {
                _this.doSearchKeybindings();
                _this.update();
            }));
        }
    };
    /**
     * Determine if there currently is a search term.
     * @returns `true` if a search term is present.
     */
    KeybindingWidget.prototype.hasSearch = function () {
        return !!this.query.length;
    };
    /**
     * Clear the search and reset the view.
     */
    KeybindingWidget.prototype.clearSearch = function () {
        var search = this.findSearchField();
        if (search) {
            search.value = '';
            this.query = '';
            this.doSearchKeybindings();
        }
    };
    KeybindingWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this.focusInputField();
    };
    /**
     * Perform a search based on the user's search query.
     */
    KeybindingWidget.prototype.doSearchKeybindings = function () {
        var _this = this;
        this.onDidUpdateEmitter.fire(undefined);
        this.items = [];
        var searchField = this.findSearchField();
        this.query = searchField ? searchField.value.trim().toLocaleLowerCase() : '';
        var items = this.getItems();
        items.forEach(function (item) {
            var e_1, _a;
            var keys = ['command', 'keybinding', 'context', 'source'];
            var matched = false;
            var _loop_1 = function (key) {
                var string = item.labels[key];
                if (string) {
                    var fuzzyMatch = fuzzy.match(_this.query, string, _this.fuzzyOptions);
                    if (fuzzyMatch) {
                        item.labels[key] = fuzzyMatch.rendered;
                        matched = true;
                    }
                    else {
                        // Match identical keybindings that have different orders.
                        if (key === 'keybinding') {
                            var queryItems = _this.query.split('+');
                            // Handle key chords.
                            var tempItems = string.split(' ');
                            // Store positions of `space` in the keybinding string.
                            var spaceIndexArr_1 = [0];
                            var bindingItems_1 = [];
                            if (tempItems.length > 1) {
                                tempItems.forEach(function (tItem) {
                                    var tKeys = tItem.split('+');
                                    spaceIndexArr_1.push(tKeys.length + spaceIndexArr_1[-1]);
                                    bindingItems_1.push.apply(bindingItems_1, __spread(tKeys));
                                });
                            }
                            else {
                                bindingItems_1 = string.split('+');
                            }
                            spaceIndexArr_1.shift();
                            var renderedResult_1 = __spread(bindingItems_1);
                            var matchCounter_1 = 0;
                            queryItems.forEach(function (queryItem) {
                                var keyFuzzyMatch = { rendered: '', score: 0 };
                                var keyIndex = -1;
                                if (string) {
                                    bindingItems_1.forEach(function (bindingItem) {
                                        // Match every key in user query with every key in keybinding string.
                                        var tempFuzzyMatch = fuzzy.match(queryItem, bindingItem, _this.fuzzyOptions);
                                        // Select the match with the highest matching score.
                                        if (tempFuzzyMatch && tempFuzzyMatch.score > keyFuzzyMatch.score) {
                                            keyFuzzyMatch = tempFuzzyMatch;
                                            // Get index in the keybinding array.
                                            keyIndex = renderedResult_1.indexOf(bindingItem);
                                        }
                                    });
                                    var keyRendered = keyFuzzyMatch.rendered;
                                    if (keyRendered) {
                                        if (keyIndex > -1) {
                                            renderedResult_1[keyIndex] = keyRendered;
                                        }
                                        // Remove key from keybinding items if it is matched.
                                        bindingItems_1.splice(keyIndex, 1, '');
                                        matchCounter_1 += 1;
                                    }
                                }
                            });
                            if (matchCounter_1 === queryItems.length) {
                                // Handle rendering of key chords.
                                if (spaceIndexArr_1.length > 0) {
                                    var chordRenderedResult_1 = '';
                                    renderedResult_1.forEach(function (resultKey, index) {
                                        if (index === 0) {
                                            chordRenderedResult_1.concat(resultKey);
                                        }
                                        else if (spaceIndexArr_1.indexOf(index) !== -1) {
                                            chordRenderedResult_1.concat(' ' + resultKey);
                                        }
                                        else {
                                            chordRenderedResult_1.concat('+' + resultKey);
                                        }
                                    });
                                    item.labels[key] = chordRenderedResult_1;
                                }
                                item.labels[key] = renderedResult_1.join('+');
                                matched = true;
                            }
                        }
                    }
                }
            };
            try {
                for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                    var key = keys_1_1.value;
                    _loop_1(key);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (matched) {
                _this.items.push(item);
            }
        });
        this.update();
    };
    /**
     * Get the search input if available.
     * @returns the search input if available.
     */
    KeybindingWidget.prototype.findSearchField = function () {
        return document.getElementById('search-kb');
    };
    /**
     * Set the focus the search input field if available.
     */
    KeybindingWidget.prototype.focusInputField = function () {
        var input = document.getElementById('search-kb');
        if (input) {
            input.focus();
            input.select();
        }
    };
    /**
     * Render the view.
     */
    KeybindingWidget.prototype.render = function () {
        return React.createElement("div", { id: 'kb-main-container' },
            this.renderSearch(),
            (this.items.length > 0) ? this.renderTable() : this.renderMessage());
    };
    /**
     * Render the search container with the search input.
     */
    KeybindingWidget.prototype.renderSearch = function () {
        return React.createElement("div", null,
            React.createElement("div", { className: 'search-kb-container' },
                React.createElement("input", { id: 'search-kb', className: "theia-input" + ((this.items.length > 0) ? '' : ' no-kb'), type: 'text', placeholder: 'Search keybindings', autoComplete: 'off', onKeyUp: this.searchKeybindings })));
    };
    /**
     * Render the warning message when no search results are found.
     */
    KeybindingWidget.prototype.renderMessage = function () {
        return React.createElement(alert_message_1.AlertMessage, { type: 'WARNING', header: 'No results found!' });
    };
    /**
     * Render the keybindings table.
     */
    KeybindingWidget.prototype.renderTable = function () {
        return React.createElement("div", { id: 'kb-table-container' },
            React.createElement("div", { className: 'kb' },
                React.createElement("table", null,
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement("th", { className: 'th-action' }),
                            React.createElement("th", { className: 'th-label' }, "Command"),
                            React.createElement("th", { className: 'th-keybinding' }, "Keybinding"),
                            React.createElement("th", { className: 'th-context' }, "Context / When"),
                            React.createElement("th", { className: 'th-source' }, "Source"))),
                    React.createElement("tbody", null, this.renderRows()))));
    };
    /**
     * Render the table rows.
     */
    KeybindingWidget.prototype.renderRows = function () {
        var _this = this;
        return React.createElement(React.Fragment, null, this.items.map(function (item, index) { return _this.renderRow(item, index); }));
    };
    KeybindingWidget.prototype.renderRow = function (item, index) {
        var _this = this;
        var command = item.command, keybinding = item.keybinding;
        // TODO get rid of array functions in event handlers
        return React.createElement("tr", { className: 'kb-item-row', key: index, onDoubleClick: function () { return _this.editKeybinding(item); } },
            React.createElement("td", { className: 'kb-actions' }, this.renderActions(item)),
            React.createElement("td", { className: 'kb-label', title: this.getCommandLabel(command) }, this.renderMatchedData(item.labels.command)),
            React.createElement("td", { title: this.getKeybindingLabel(keybinding), className: 'kb-keybinding monaco-keybinding' }, this.renderKeybinding(item.labels.keybinding)),
            React.createElement("td", { className: 'kb-context', title: this.getContextLabel(keybinding) },
                React.createElement("code", null, this.renderMatchedData(item.labels.context))),
            React.createElement("td", { className: 'kb-source', title: this.getScopeLabel(keybinding) },
                React.createElement("code", { className: 'td-source' }, this.renderMatchedData(item.labels.source))));
    };
    /**
     * Render the actions container with action icons.
     * @param item the keybinding item for the row.
     */
    KeybindingWidget.prototype.renderActions = function (item) {
        return React.createElement("span", { className: 'kb-actions-icons' },
            this.renderEdit(item),
            this.renderReset(item));
    };
    /**
     * Render the edit action used to update a keybinding.
     * @param item the keybinding item for the row.
     */
    KeybindingWidget.prototype.renderEdit = function (item) {
        var _this = this;
        return React.createElement("a", { title: 'Edit Keybinding', href: '#', onClick: function (a) { return _this.editKeybinding(item); } },
            React.createElement("i", { className: 'fa fa-pencil kb-action-item' }));
    };
    /**
     * Render the reset action to reset the custom keybinding.
     * Only visible if a keybinding has a `user` scope.
     * @param item the keybinding item for the row.
     */
    KeybindingWidget.prototype.renderReset = function (item) {
        var _this = this;
        return (item.keybinding && item.keybinding.scope === browser_1.KeybindingScope.USER)
            ? React.createElement("a", { title: 'Reset Keybinding', href: '#', onClick: function (a) { return _this.resetKeybinding(item); } },
                React.createElement("i", { className: 'fa fa-undo kb-action-item' })) : '';
    };
    /**
     * Render the keybinding.
     * @param keybinding the keybinding value.
     */
    KeybindingWidget.prototype.renderKeybinding = function (keybinding) {
        var _this = this;
        if (!keybinding.length) {
            return undefined;
        }
        var regex = new RegExp(this.keybindingSeparator);
        keybinding = keybinding.replace(regex, '+');
        var keys = keybinding.split('+');
        return React.createElement(React.Fragment, null, keys.map(function (key, index) {
            if (index === 0) {
                return React.createElement("span", { key: index, className: 'monaco-keybinding-key' }, _this.renderMatchedData(key));
            }
            else if (key.includes(' ')) {
                // Handle key chords, which have space as the separator
                // Example: `k Ctrl` in key chords `Ctrl+k Ctrl+p`
                var chordKeys = key.split('<match> </match>');
                if (chordKeys.length === 1) {
                    chordKeys = key.split(' ');
                }
                return React.createElement(React.Fragment, { key: index },
                    React.createElement("span", { className: 'monaco-keybinding-separator' }, "+"),
                    React.createElement("span", { className: 'monaco-keybinding-key' }, _this.renderKeybinding(chordKeys[0])),
                    React.createElement("span", { className: 'monaco-keybinding-separator' }, "\u00A0\u00A0"),
                    React.createElement("span", { className: 'monaco-keybinding-key' }, _this.renderKeybinding(chordKeys[1])));
            }
            else {
                return React.createElement(React.Fragment, { key: index },
                    React.createElement("span", { className: 'monaco-keybinding-separator' }, "+"),
                    React.createElement("span", { className: 'monaco-keybinding-key' }, _this.renderKeybinding(key)));
            }
        }));
    };
    /**
     * Get the list of keybinding items.
     *
     * @returns the list of keybinding items.
     */
    KeybindingWidget.prototype.getItems = function () {
        var _this = this;
        // Sort the commands alphabetically.
        var commands = this.commandRegistry.commands;
        var items = [];
        // Build the keybinding items.
        for (var i = 0; i < commands.length; i++) {
            var command = commands[i];
            // Skip internal commands prefixed by `_`.
            if (command.id.startsWith('_')) {
                continue;
            }
            var keybinding = this.keybindingRegistry.getKeybindingsForCommand(command.id)[0];
            items.push({
                command: command,
                keybinding: keybinding,
                labels: {
                    id: command.id,
                    command: this.getCommandLabel(command),
                    keybinding: this.getKeybindingLabel(keybinding) || '',
                    context: this.getContextLabel(keybinding) || '',
                    source: this.getScopeLabel(keybinding) || ''
                }
            });
        }
        // Sort the keybinding item by label.
        var sorted = items.sort(function (a, b) { return _this.compareItem(a.labels.id, b.labels.id); });
        // Get the list of keybinding item with keybindings (visually put them at the top of the table).
        var keyItems = sorted.filter(function (a) { return !!a.labels.keybinding; });
        // Get the remaining keybinding items (without keybindings).
        var otherItems = sorted.filter(function (a) { return !a.labels.keybinding; });
        // Return the list of keybinding items prioritizing those with a defined keybinding.
        return __spread(keyItems, otherItems);
    };
    KeybindingWidget.prototype.getCommandLabel = function (command) {
        return command.label || command.id;
    };
    KeybindingWidget.prototype.getKeybindingLabel = function (keybinding) {
        return keybinding && keybinding.keybinding;
    };
    KeybindingWidget.prototype.getContextLabel = function (keybinding) {
        return keybinding ? keybinding.context || keybinding.when : undefined;
    };
    KeybindingWidget.prototype.getScopeLabel = function (keybinding) {
        var scope = keybinding && keybinding.scope;
        if (scope !== undefined) {
            if (scope < browser_1.KeybindingScope.USER) {
                scope = browser_1.KeybindingScope.DEFAULT;
            }
            return browser_1.KeybindingScope[scope].toLocaleLowerCase();
        }
        return undefined;
    };
    /**
     * Compare two strings.
     * - Strings are first normalized before comparison (`toLowerCase`).
     * @param a the optional first string.
     * @param b the optional second string.
     *
     * @returns an integer indicating whether `a` comes before, after or is equivalent to `b`.
     * - returns `-1` if `a` occurs before `b`.
     * - returns `1` if `a` occurs after `b`.
     * - returns `0` if they are equivalent.
     */
    KeybindingWidget.prototype.compareItem = function (a, b) {
        if (a && b) {
            return (a.toLowerCase()).localeCompare(b.toLowerCase());
        }
        return 0;
    };
    /**
     * Prompt users to update the keybinding for the given command.
     * @param item the keybinding item.
     */
    KeybindingWidget.prototype.editKeybinding = function (item) {
        var _this = this;
        var command = item.command.id;
        var oldKeybinding = item.keybinding && item.keybinding.keybinding;
        var dialog = new EditKeybindingDialog({
            title: "Edit Keybinding For " + command,
            initialValue: oldKeybinding,
            validate: function (newKeybinding) { return _this.validateKeybinding(command, oldKeybinding, newKeybinding); },
        }, this.keymapsService, item);
        dialog.open().then(function (keybinding) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!keybinding) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.keymapsService.setKeybinding(__assign({}, item.keybinding, { command: command,
                                keybinding: keybinding }), oldKeybinding)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     * Prompt users for confirmation before resetting.
     * @param command the command label.
     *
     * @returns a Promise which resolves to `true` if a user accepts resetting.
     */
    KeybindingWidget.prototype.confirmResetKeybinding = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var dialog;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dialog = new browser_1.ConfirmDialog({
                            title: "Reset keybinding for '" + this.getCommandLabel(item.command) + "'",
                            msg: 'Do you really want to reset this keybinding to its default value?'
                        });
                        return [4 /*yield*/, dialog.open()];
                    case 1: return [2 /*return*/, !!(_a.sent())];
                }
            });
        });
    };
    /**
     * Reset the keybinding to its default value.
     * @param item the keybinding item.
     */
    KeybindingWidget.prototype.resetKeybinding = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var confirmed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.confirmResetKeybinding(item)];
                    case 1:
                        confirmed = _a.sent();
                        if (confirmed) {
                            this.keymapsService.removeKeybinding(item.command.id);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Validate the provided keybinding value against its previous value.
     * @param command the command label.
     * @param oldKeybinding the old keybinding value.
     * @param keybinding the new keybinding value.
     *
     * @returns the end user message to display.
     */
    KeybindingWidget.prototype.validateKeybinding = function (command, oldKeybinding, keybinding) {
        if (!keybinding) {
            return 'keybinding value is required';
        }
        try {
            var binding = { command: command, keybinding: keybinding };
            browser_1.KeySequence.parse(keybinding);
            if (oldKeybinding === keybinding) {
                return ' '; // if old and new keybindings match, quietly reject update
            }
            if (this.keybindingRegistry.containsKeybindingInScope(binding)) {
                return 'keybinding currently collides';
            }
            return '';
        }
        catch (error) {
            return error;
        }
    };
    /**
     * Build the cell data with highlights if applicable.
     * @param raw the raw cell value.
     *
     * @returns the list of cell data.
     */
    KeybindingWidget.prototype.buildCellData = function (raw) {
        var data = [];
        if (this.query === '') {
            return data;
        }
        var following = raw;
        var leading;
        var result;
        var regexp = new RegExp(this.regexp);
        while (result = regexp.exec(raw)) {
            var splitLeftIndex = following.indexOf(result[0]);
            var splitRightIndex = splitLeftIndex + result[0].length;
            leading = following.slice(0, splitLeftIndex);
            following = following.slice(splitRightIndex);
            if (leading) {
                data.push({ value: leading, highlighted: false });
            }
            data.push({ value: result[1], highlighted: true });
        }
        if (following) {
            data.push({ value: following, highlighted: false });
        }
        return data;
    };
    /**
     * Render the fuzzy representation of a matched result.
     * @param property one of the `KeybindingItem` properties.
     */
    KeybindingWidget.prototype.renderMatchedData = function (property) {
        if (this.query !== '') {
            var cellData = this.buildCellData(property);
            return React.createElement(React.Fragment, null, cellData.map(function (data, index) { return (data.highlighted) ? React.createElement("span", { key: index, className: 'fuzzy-match' }, data.value) : React.createElement("span", { key: index }, data.value); }));
        }
        else {
            return property;
        }
    };
    var KeybindingWidget_1;
    KeybindingWidget.ID = 'keybindings.view.widget';
    KeybindingWidget.LABEL = 'Keyboard Shortcuts';
    __decorate([
        inversify_1.inject(command_1.CommandRegistry),
        __metadata("design:type", command_1.CommandRegistry)
    ], KeybindingWidget.prototype, "commandRegistry", void 0);
    __decorate([
        inversify_1.inject(browser_1.KeybindingRegistry),
        __metadata("design:type", browser_1.KeybindingRegistry)
    ], KeybindingWidget.prototype, "keybindingRegistry", void 0);
    __decorate([
        inversify_1.inject(keymaps_service_1.KeymapsService),
        __metadata("design:type", keymaps_service_1.KeymapsService)
    ], KeybindingWidget.prototype, "keymapsService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], KeybindingWidget.prototype, "init", null);
    KeybindingWidget = KeybindingWidget_1 = __decorate([
        inversify_1.injectable()
    ], KeybindingWidget);
    return KeybindingWidget;
}(react_widget_1.ReactWidget));
exports.KeybindingWidget = KeybindingWidget;
/**
 * Dialog used to edit keybindings, and reset custom keybindings.
 */
var EditKeybindingDialog = /** @class */ (function (_super) {
    __extends(EditKeybindingDialog, _super);
    function EditKeybindingDialog(props, keymapsService, item) {
        var _this = _super.call(this, props) || this;
        _this.props = props;
        _this.keymapsService = keymapsService;
        _this.item = item;
        // Add the `Reset` button if the command currently has a custom keybinding.
        if (_this.item.keybinding && _this.item.keybinding.scope === browser_1.KeybindingScope.USER) {
            _this.appendResetButton();
        }
        return _this;
    }
    EditKeybindingDialog.prototype.onAfterAttach = function (msg) {
        _super.prototype.onAfterAttach.call(this, msg);
        if (this.resetButton) {
            this.addResetAction(this.resetButton, 'click');
        }
    };
    /**
     * Add `Reset` action used to reset a custom keybinding, and close the dialog.
     * @param element the HTML element in question.
     * @param additionalEventTypes additional event types.
     */
    EditKeybindingDialog.prototype.addResetAction = function (element) {
        var _this = this;
        var additionalEventTypes = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additionalEventTypes[_i - 1] = arguments[_i];
        }
        this.addKeyListener.apply(this, __spread([element, browser_1.Key.ENTER, function () {
                _this.reset();
                _this.close();
            }], additionalEventTypes));
    };
    /**
     * Create the `Reset` button, and append it to the dialog.
     *
     * @returns the `Reset` button.
     */
    EditKeybindingDialog.prototype.appendResetButton = function () {
        // Create the `Reset` button.
        this.resetButton = this.createButton('Reset');
        // Add the `Reset` button to the dialog control panel, before the `Accept` button.
        this.controlPanel.insertBefore(this.resetButton, this.acceptButton);
        this.resetButton.title = 'Reset Keybinding';
        this.resetButton.classList.add('secondary');
        return this.resetButton;
    };
    /**
     * Perform keybinding reset.
     */
    EditKeybindingDialog.prototype.reset = function () {
        this.keymapsService.removeKeybinding(this.item.command.id);
    };
    EditKeybindingDialog = __decorate([
        __param(0, inversify_1.inject(browser_1.SingleTextInputDialogProps)),
        __param(1, inversify_1.inject(keymaps_service_1.KeymapsService)),
        __metadata("design:paramtypes", [browser_1.SingleTextInputDialogProps,
            keymaps_service_1.KeymapsService, Object])
    ], EditKeybindingDialog);
    return EditKeybindingDialog;
}(browser_1.SingleTextInputDialog));


/***/ }),

/***/ "../node_modules/@theia/keymaps/lib/browser/keymaps-frontend-contribution.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@theia/keymaps/lib/browser/keymaps-frontend-contribution.js ***!
  \***********************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var common_frontend_contribution_1 = __webpack_require__(/*! @theia/core/lib/browser/common-frontend-contribution */ "../node_modules/@theia/core/lib/browser/common-frontend-contribution.js");
var keymaps_service_1 = __webpack_require__(/*! ./keymaps-service */ "../node_modules/@theia/keymaps/lib/browser/keymaps-service.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var keybindings_widget_1 = __webpack_require__(/*! ./keybindings-widget */ "../node_modules/@theia/keymaps/lib/browser/keybindings-widget.js");
var KeymapsCommands;
(function (KeymapsCommands) {
    KeymapsCommands.OPEN_KEYMAPS = {
        id: 'keymaps:open',
        category: 'Settings',
        label: 'Open Keyboard Shortcuts',
    };
    KeymapsCommands.OPEN_KEYMAPS_JSON = {
        id: 'keymaps:openJson',
        category: 'Settings',
        label: 'Open Keyboard Shortcuts (JSON)',
    };
    KeymapsCommands.OPEN_KEYMAPS_JSON_TOOLBAR = {
        id: 'keymaps:openJson.toolbar',
        iconClass: 'theia-open-json-icon'
    };
    KeymapsCommands.CLEAR_KEYBINDINGS_SEARCH = {
        id: 'keymaps.clearSearch',
        iconClass: 'clear-all'
    };
})(KeymapsCommands = exports.KeymapsCommands || (exports.KeymapsCommands = {}));
var KeymapsFrontendContribution = /** @class */ (function (_super) {
    __extends(KeymapsFrontendContribution, _super);
    function KeymapsFrontendContribution() {
        return _super.call(this, {
            widgetId: keybindings_widget_1.KeybindingWidget.ID,
            widgetName: keybindings_widget_1.KeybindingWidget.LABEL,
            defaultWidgetOptions: {
                area: 'main'
            },
        }) || this;
    }
    KeymapsFrontendContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(KeymapsCommands.OPEN_KEYMAPS, {
            isEnabled: function () { return true; },
            execute: function () { return _this.openView({ activate: true }); }
        });
        commands.registerCommand(KeymapsCommands.OPEN_KEYMAPS_JSON, {
            isEnabled: function () { return true; },
            execute: function () { return _this.keymaps.open(); }
        });
        commands.registerCommand(KeymapsCommands.OPEN_KEYMAPS_JSON_TOOLBAR, {
            isEnabled: function (w) { return _this.withWidget(w, function () { return true; }); },
            isVisible: function (w) { return _this.withWidget(w, function () { return true; }); },
            execute: function (w) { return _this.withWidget(w, function (widget) { return _this.keymaps.open(widget); }); },
        });
        commands.registerCommand(KeymapsCommands.CLEAR_KEYBINDINGS_SEARCH, {
            isEnabled: function (w) { return _this.withWidget(w, function (widget) { return widget.hasSearch(); }); },
            isVisible: function (w) { return _this.withWidget(w, function () { return true; }); },
            execute: function (w) { return _this.withWidget(w, function (widget) { return widget.clearSearch(); }); },
        });
    };
    KeymapsFrontendContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(common_frontend_contribution_1.CommonMenus.FILE_SETTINGS_SUBMENU_OPEN, {
            commandId: KeymapsCommands.OPEN_KEYMAPS.id,
            order: 'a20'
        });
    };
    KeymapsFrontendContribution.prototype.registerKeybindings = function (keybindings) {
        keybindings.registerKeybinding({
            command: KeymapsCommands.OPEN_KEYMAPS.id,
            keybinding: 'ctrl+alt+,'
        });
    };
    KeymapsFrontendContribution.prototype.registerToolbarItems = function (toolbar) {
        return __awaiter(this, void 0, void 0, function () {
            var widget, onDidChange;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.widget];
                    case 1:
                        widget = _a.sent();
                        onDidChange = widget.onDidUpdate;
                        toolbar.registerItem({
                            id: KeymapsCommands.OPEN_KEYMAPS_JSON_TOOLBAR.id,
                            command: KeymapsCommands.OPEN_KEYMAPS_JSON_TOOLBAR.id,
                            tooltip: 'Open Keyboard Shortcuts in JSON',
                            priority: 0,
                        });
                        toolbar.registerItem({
                            id: KeymapsCommands.CLEAR_KEYBINDINGS_SEARCH.id,
                            command: KeymapsCommands.CLEAR_KEYBINDINGS_SEARCH.id,
                            tooltip: 'Clear Keybindings Search Input',
                            priority: 1,
                            onDidChange: onDidChange,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Determine if the current widget is the keybindings widget.
     */
    KeymapsFrontendContribution.prototype.withWidget = function (widget, fn) {
        if (widget === void 0) { widget = this.tryGetWidget(); }
        if (widget instanceof keybindings_widget_1.KeybindingWidget && widget.id === keybindings_widget_1.KeybindingWidget.ID) {
            return fn(widget);
        }
        return false;
    };
    __decorate([
        inversify_1.inject(keymaps_service_1.KeymapsService),
        __metadata("design:type", keymaps_service_1.KeymapsService)
    ], KeymapsFrontendContribution.prototype, "keymaps", void 0);
    KeymapsFrontendContribution = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], KeymapsFrontendContribution);
    return KeymapsFrontendContribution;
}(browser_1.AbstractViewContribution));
exports.KeymapsFrontendContribution = KeymapsFrontendContribution;


/***/ }),

/***/ "../node_modules/@theia/keymaps/lib/browser/keymaps-frontend-module.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@theia/keymaps/lib/browser/keymaps-frontend-module.js ***!
  \*****************************************************************************/
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var keymaps_service_1 = __webpack_require__(/*! ./keymaps-service */ "../node_modules/@theia/keymaps/lib/browser/keymaps-service.js");
var keymaps_frontend_contribution_1 = __webpack_require__(/*! ./keymaps-frontend-contribution */ "../node_modules/@theia/keymaps/lib/browser/keymaps-frontend-contribution.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var keybinding_1 = __webpack_require__(/*! @theia/core/lib/browser/keybinding */ "../node_modules/@theia/core/lib/browser/keybinding.js");
var tab_bar_toolbar_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/tab-bar-toolbar */ "../node_modules/@theia/core/lib/browser/shell/tab-bar-toolbar.js");
__webpack_require__(/*! ./keymaps-monaco-contribution */ "../node_modules/@theia/keymaps/lib/browser/keymaps-monaco-contribution.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var keybindings_widget_1 = __webpack_require__(/*! ./keybindings-widget */ "../node_modules/@theia/keymaps/lib/browser/keybindings-widget.js");
__webpack_require__(/*! ../../src/browser/style/index.css */ "../node_modules/@theia/keymaps/src/browser/style/index.css");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(keymaps_service_1.KeymapsService).toSelf().inSingletonScope();
    bind(keymaps_frontend_contribution_1.KeymapsFrontendContribution).toSelf().inSingletonScope();
    bind(common_1.CommandContribution).toService(keymaps_frontend_contribution_1.KeymapsFrontendContribution);
    bind(keybinding_1.KeybindingContribution).toService(keymaps_frontend_contribution_1.KeymapsFrontendContribution);
    bind(common_1.MenuContribution).toService(keymaps_frontend_contribution_1.KeymapsFrontendContribution);
    bind(keybindings_widget_1.KeybindingWidget).toSelf();
    bind(tab_bar_toolbar_1.TabBarToolbarContribution).toService(keymaps_frontend_contribution_1.KeymapsFrontendContribution);
    bind(browser_1.WidgetFactory).toDynamicValue(function (context) { return ({
        id: keybindings_widget_1.KeybindingWidget.ID,
        createWidget: function () { return context.container.get(keybindings_widget_1.KeybindingWidget); },
    }); }).inSingletonScope();
});


/***/ }),

/***/ "../node_modules/@theia/keymaps/lib/browser/keymaps-monaco-contribution.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@theia/keymaps/lib/browser/keymaps-monaco-contribution.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
monaco.languages.register({
    id: 'jsonc',
    'aliases': [
        'JSON with Comments'
    ],
    'filenames': [
        'keymaps.json'
    ]
});


/***/ }),

/***/ "../node_modules/@theia/keymaps/lib/browser/keymaps-service.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@theia/keymaps/lib/browser/keymaps-service.js ***!
  \*********************************************************************/
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
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var resource_1 = __webpack_require__(/*! @theia/core/lib/common/resource */ "../node_modules/@theia/core/lib/common/resource.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var keybinding_1 = __webpack_require__(/*! @theia/core/lib/browser/keybinding */ "../node_modules/@theia/core/lib/browser/keybinding.js");
var keybinding_2 = __webpack_require__(/*! @theia/core/lib/common/keybinding */ "../node_modules/@theia/core/lib/common/keybinding.js");
var browser_2 = __webpack_require__(/*! @theia/userstorage/lib/browser */ "../node_modules/@theia/userstorage/lib/browser/index.js");
var jsoncparser = __webpack_require__(/*! jsonc-parser */ "../node_modules/jsonc-parser/lib/esm/main.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../node_modules/@theia/core/lib/common/event.js");
var KeymapsService = /** @class */ (function () {
    function KeymapsService() {
        this.changeKeymapEmitter = new event_1.Emitter();
        this.onDidChangeKeymaps = this.changeKeymapEmitter.event;
    }
    /**
     * Initialize the keybinding service.
     */
    KeymapsService.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.resourceProvider(new uri_1.default().withScheme(browser_2.UserStorageUri.SCHEME).withPath('keymaps.json'))];
                    case 1:
                        _a.resource = _b.sent();
                        this.reconcile();
                        if (this.resource.onDidChangeContents) {
                            this.resource.onDidChangeContents(function () { return _this.reconcile(); });
                        }
                        this.keyBindingRegistry.onKeybindingsChanged(function () { return _this.changeKeymapEmitter.fire(undefined); });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Reconcile all the keybindings, registering them to the registry.
     */
    KeymapsService.prototype.reconcile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var keybindings;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.parseKeybindings()];
                    case 1:
                        keybindings = _a.sent();
                        this.keyBindingRegistry.setKeymap(keybinding_1.KeybindingScope.USER, keybindings);
                        this.changeKeymapEmitter.fire(undefined);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Parsed the read keybindings.
     */
    KeymapsService.prototype.parseKeybindings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var content, keybindings, json, json_1, json_1_1, value;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.resource.readContents()];
                    case 1:
                        content = _b.sent();
                        keybindings = [];
                        json = jsoncparser.parse(content, undefined, { disallowComments: false });
                        if (Array.isArray(json)) {
                            try {
                                for (json_1 = __values(json), json_1_1 = json_1.next(); !json_1_1.done; json_1_1 = json_1.next()) {
                                    value = json_1_1.value;
                                    if (keybinding_2.Keybinding.is(value)) {
                                        keybindings.push(value);
                                    }
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (json_1_1 && !json_1_1.done && (_a = json_1.return)) _a.call(json_1);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                        }
                        return [2 /*return*/, keybindings];
                }
            });
        });
    };
    /**
     * Open the keybindings widget.
     * @param ref the optional reference for opening the widget.
     */
    KeymapsService.prototype.open = function (ref) {
        var options = {
            widgetOptions: ref ? { area: 'main', mode: 'split-right', ref: ref } : { area: 'main' },
            mode: 'activate'
        };
        browser_1.open(this.opener, this.resource.uri, options);
    };
    /**
     * Set the keybinding in the JSON.
     * @param newKeybinding the JSON keybindings.
     */
    KeymapsService.prototype.setKeybinding = function (newKeybinding, oldKeybinding) {
        return __awaiter(this, void 0, void 0, function () {
            var keybindings, newAdded, oldRemoved, keybindings_1, keybindings_1_1, keybinding;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.resource.saveContents) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.parseKeybindings()];
                    case 1:
                        keybindings = _b.sent();
                        newAdded = false;
                        oldRemoved = false;
                        try {
                            for (keybindings_1 = __values(keybindings), keybindings_1_1 = keybindings_1.next(); !keybindings_1_1.done; keybindings_1_1 = keybindings_1.next()) {
                                keybinding = keybindings_1_1.value;
                                if (keybinding.command === newKeybinding.command &&
                                    (keybinding.context || '') === (newKeybinding.context || '') &&
                                    (keybinding.when || '') === (newKeybinding.when || '')) {
                                    newAdded = true;
                                    keybinding.keybinding = newKeybinding.keybinding;
                                }
                                if (oldKeybinding && keybinding.keybinding === oldKeybinding &&
                                    keybinding.command === '-' + newKeybinding.command &&
                                    (keybinding.context || '') === (newKeybinding.context || '') &&
                                    (keybinding.when || '') === (newKeybinding.when || '')) {
                                    oldRemoved = true;
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (keybindings_1_1 && !keybindings_1_1.done && (_a = keybindings_1.return)) _a.call(keybindings_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        if (!newAdded) {
                            keybindings.push({
                                command: newKeybinding.command,
                                keybinding: newKeybinding.keybinding,
                                context: newKeybinding.context,
                                when: newKeybinding.when,
                                args: newKeybinding.args
                            });
                        }
                        if (!oldRemoved && oldKeybinding) {
                            keybindings.push({
                                command: '-' + newKeybinding.command,
                                // TODO key: oldKeybinding, see https://github.com/eclipse-theia/theia/issues/6879
                                keybinding: oldKeybinding,
                                context: newKeybinding.context,
                                when: newKeybinding.when,
                                args: newKeybinding.args
                            });
                        }
                        // TODO use preference values to get proper json settings
                        // TODO handle dirty models properly
                        // TODO handle race conditions properly
                        // TODO only apply minimal edits
                        return [4 /*yield*/, this.resource.saveContents(JSON.stringify(keybindings, undefined, 4))];
                    case 2:
                        // TODO use preference values to get proper json settings
                        // TODO handle dirty models properly
                        // TODO handle race conditions properly
                        // TODO only apply minimal edits
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Remove the given keybinding with the given command id from the JSON.
     * @param commandId the keybinding command id.
     */
    KeymapsService.prototype.removeKeybinding = function (commandId) {
        return __awaiter(this, void 0, void 0, function () {
            var keybindings, removedCommand, filtered;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.resource.saveContents) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.parseKeybindings()];
                    case 1:
                        keybindings = _a.sent();
                        removedCommand = '-' + commandId;
                        filtered = keybindings.filter(function (a) { return a.command !== commandId && a.command !== removedCommand; });
                        // TODO use preference values to get proper json settings
                        // TODO handle dirty models properly
                        // TODO handle race conditions properly
                        // TODO only apply minimal edits
                        return [4 /*yield*/, this.resource.saveContents(JSON.stringify(filtered, undefined, 4))];
                    case 2:
                        // TODO use preference values to get proper json settings
                        // TODO handle dirty models properly
                        // TODO handle race conditions properly
                        // TODO only apply minimal edits
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(resource_1.ResourceProvider),
        __metadata("design:type", Function)
    ], KeymapsService.prototype, "resourceProvider", void 0);
    __decorate([
        inversify_1.inject(keybinding_1.KeybindingRegistry),
        __metadata("design:type", keybinding_1.KeybindingRegistry)
    ], KeymapsService.prototype, "keyBindingRegistry", void 0);
    __decorate([
        inversify_1.inject(browser_1.OpenerService),
        __metadata("design:type", Object)
    ], KeymapsService.prototype, "opener", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], KeymapsService.prototype, "init", null);
    KeymapsService = __decorate([
        inversify_1.injectable()
    ], KeymapsService);
    return KeymapsService;
}());
exports.KeymapsService = KeymapsService;


/***/ }),

/***/ "../node_modules/@theia/keymaps/src/browser/style/index.css":
/*!******************************************************************!*\
  !*** ../node_modules/@theia/keymaps/src/browser/style/index.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/@theia/keymaps/src/browser/style/index.css");

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

/***/ "../node_modules/@theia/userstorage/lib/browser/index.js":
/*!***************************************************************!*\
  !*** ../node_modules/@theia/userstorage/lib/browser/index.js ***!
  \***************************************************************/
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
__export(__webpack_require__(/*! ./user-storage-service */ "../node_modules/@theia/userstorage/lib/browser/user-storage-service.js"));
__export(__webpack_require__(/*! ./user-storage-resource */ "../node_modules/@theia/userstorage/lib/browser/user-storage-resource.js"));
__export(__webpack_require__(/*! ./user-storage-uri */ "../node_modules/@theia/userstorage/lib/browser/user-storage-uri.js"));
__export(__webpack_require__(/*! ./user-storage-service-filesystem */ "../node_modules/@theia/userstorage/lib/browser/user-storage-service-filesystem.js"));
__export(__webpack_require__(/*! ./user-storage-frontend-module */ "../node_modules/@theia/userstorage/lib/browser/user-storage-frontend-module.js"));


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@theia/keymaps/src/browser/style/index.css":
/*!*********************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@theia/keymaps/src/browser/style/index.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 Ericsson and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n#kb-main-container {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n#kb-table-container {\n    flex: 1;\n    overflow: auto;\n}\n\n.fuzzy-match {\n    font-weight: 600;\n    color: var(--theia-list-highlightForeground);\n}\n\n.kb-actions {\n    text-align: center;\n    vertical-align: middle;\n}\n\n.kb-action-item {\n    visibility: hidden;\n    padding-right: 5px;\n}\n\n.kb table {\n    border-spacing: 0;\n    border-collapse: separate;\n    background-color: var(--theia-editor-background);\n    width: 100%;\n    table-layout: fixed;\n}\n\n.kb table tr {\n    min-height: var(--theia-icon-size);\n}\n\n.th-action, .th-keybinding,\n.kb-actions, .kb-keybinding {\n    min-height: 18px;\n    overflow: hidden;\n    vertical-align: middle;\n    white-space: nowrap;\n}\n\n.th-action,\n.kb-actions {\n    padding: 2px 0px 5px 0px;\n}\n\n.th-keybinding,\n.kb-keybinding {\n    padding: 2px 10px 5px 10px;\n}\n\n.th-label, .th-source, .th-context, .th-keybinding, \n.kb-label, .kb-source, .kb-context {\n    padding: 2px 10px 5px 10px;\n    min-height: 18px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    vertical-align: middle;\n    white-space: nowrap;\n}\n\n.kb table th {\n    font-size: var(--theia-ui-font-size1);\n}\n\n.kb table td code {\n    font-size: 90%;\n}\n\n.td-source {\n    text-transform: lowercase;\n}\n\n.kb table tr:nth-child(odd) {\n    background-color: rgba(130, 130, 130, 0.04);\n}\n\n.kb table tbody tr:hover {\n    background-color: var(--theia-list-focusBackground);\n}\n\n.kb table tbody tr:hover .kb-action-item {\n    visibility: visible;\n    color: var(--theia-icon-foreground);\n    text-decoration: none;\n}\n\n.kb table th {\n    word-break: keep-all;\n    padding-bottom: 5px;\n    padding-top: 5px;\n    text-align: left;\n    vertical-align: middle;\n    position: sticky;\n    top: 0;\n    background-color: var(--theia-editorWidget-background);\n}\n\n.kb table .th-action {\n    width: 4%;\n}\n\n.kb table .th-label {\n    width: 25%;\n}\n\n.kb table .th-keybinding {\n    width: 20%;\n}\n\n.kb table .th-source {\n    width: 10%;\n}\n\n.kb table .th-context {\n    width: 25%;\n}\n\n.no-kb {\n    border: 1px solid  var(--theia-editorWarning-foreground);\n}\n\n#search-kb {\n    height: 25px;\n    flex: 1;\n}\n\n.vs #search-kb {\n    border: 1px solid #ddd;\n}\n\n.search-kb-container {\n    padding: 10px;\n    display: flex;\n}\n\n.kb-item-row td a,\n.kb-item-row td a:active,\n.kb-item-row td a:focus {\n    outline: 0;\n    border: none;\n}\n\n.kb-actions-icons {\n    display: block;\n    width: 50%;\n    margin-left: auto;\n    margin-right: auto;\n}\n", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=48.bundle.js.map
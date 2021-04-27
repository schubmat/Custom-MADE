(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "../node_modules/@theia/plugin-ext/lib/common/errors.js":
/*!**************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/common/errors.js ***!
  \**************************************************************/
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
function illegalArgument(message) {
    if (message) {
        return new Error("Illegal argument: " + message);
    }
    else {
        return new Error('Illegal argument');
    }
}
exports.illegalArgument = illegalArgument;
function readonly(name) {
    if (name) {
        return new Error("readonly property '" + name + " cannot be changed'");
    }
    else {
        return new Error('readonly property cannot be changed');
    }
}
exports.readonly = readonly;
function disposed(what) {
    var result = new Error(what + " has been disposed");
    result.name = 'DISPOSED';
    return result;
}
exports.disposed = disposed;


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/common/paths-util.js":
/*!******************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/common/paths-util.js ***!
  \******************************************************************/
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
// file copied from https://github.com/wjordan/browser-path/blob/master/src/node_path.ts
// Original license:
/*
====

Copyright (c) 2015 John Vilk and other contributors.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

====
*/
var paths_1 = __webpack_require__(/*! @theia/languages/lib/common/language-selector/paths */ "../node_modules/@theia/languages/lib/common/language-selector/paths.js");
var replaceRegex = new RegExp('//+', 'g');
function resolve() {
    var e_1, _a;
    var paths = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        paths[_i] = arguments[_i];
    }
    var processed = [];
    try {
        for (var paths_2 = __values(paths), paths_2_1 = paths_2.next(); !paths_2_1.done; paths_2_1 = paths_2.next()) {
            var p = paths_2_1.value;
            if (typeof p !== 'string') {
                throw new TypeError('Invalid argument type to path.join: ' + (typeof p));
            }
            else if (p !== '') {
                if (p.charAt(0) === paths_1.sep) {
                    processed = [];
                }
                processed.push(p);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (paths_2_1 && !paths_2_1.done && (_a = paths_2.return)) _a.call(paths_2);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var resolved = normalize(processed.join(paths_1.sep));
    if (resolved.length > 1 && resolved.charAt(resolved.length - 1) === paths_1.sep) {
        return resolved.substr(0, resolved.length - 1);
    }
    return resolved;
}
exports.resolve = resolve;
function relative(from, to) {
    var i;
    from = resolve(from);
    to = resolve(to);
    var fromSegments = from.split(paths_1.sep);
    var toSegments = to.split(paths_1.sep);
    toSegments.shift();
    fromSegments.shift();
    var upCount = 0;
    var downSegments = [];
    for (i = 0; i < fromSegments.length; i++) {
        var seg = fromSegments[i];
        if (seg === toSegments[i]) {
            continue;
        }
        upCount = fromSegments.length - i;
        break;
    }
    downSegments = toSegments.slice(i);
    if (fromSegments.length === 1 && fromSegments[0] === '') {
        upCount = 0;
    }
    if (upCount > fromSegments.length) {
        upCount = fromSegments.length;
    }
    var rv = '';
    for (i = 0; i < upCount; i++) {
        rv += '../';
    }
    rv += downSegments.join(paths_1.sep);
    if (rv.length > 1 && rv.charAt(rv.length - 1) === paths_1.sep) {
        rv = rv.substr(0, rv.length - 1);
    }
    return rv;
}
exports.relative = relative;
function normalize(p) {
    var e_2, _a;
    if (p === '') {
        p = '.';
    }
    var absolute = p.charAt(0) === paths_1.sep;
    p = removeDuplicateSeparators(p);
    var components = p.split(paths_1.sep);
    var goodComponents = [];
    try {
        for (var components_1 = __values(components), components_1_1 = components_1.next(); !components_1_1.done; components_1_1 = components_1.next()) {
            var c = components_1_1.value;
            if (c === '.') {
                continue;
            }
            else if (c === '..' && (absolute || (!absolute && goodComponents.length > 0 && goodComponents[0] !== '..'))) {
                goodComponents.pop();
            }
            else {
                goodComponents.push(c);
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (components_1_1 && !components_1_1.done && (_a = components_1.return)) _a.call(components_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    if (!absolute && goodComponents.length < 2) {
        switch (goodComponents.length) {
            case 1:
                if (goodComponents[0] === '') {
                    goodComponents.unshift('.');
                }
                break;
            default:
                goodComponents.push('.');
        }
    }
    p = goodComponents.join(paths_1.sep);
    if (absolute && p.charAt(0) !== paths_1.sep) {
        p = paths_1.sep + p;
    }
    return p;
}
exports.normalize = normalize;
function removeDuplicateSeparators(p) {
    p = p.replace(replaceRegex, paths_1.sep);
    return p;
}


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc-model.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc-model.js ***!
  \****************************************************************************/
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
var CompletionTriggerKind;
(function (CompletionTriggerKind) {
    CompletionTriggerKind[CompletionTriggerKind["Invoke"] = 0] = "Invoke";
    CompletionTriggerKind[CompletionTriggerKind["TriggerCharacter"] = 1] = "TriggerCharacter";
    CompletionTriggerKind[CompletionTriggerKind["TriggerForIncompleteCompletions"] = 2] = "TriggerForIncompleteCompletions";
})(CompletionTriggerKind = exports.CompletionTriggerKind || (exports.CompletionTriggerKind = {}));
var CompletionItemInsertTextRule;
(function (CompletionItemInsertTextRule) {
    CompletionItemInsertTextRule[CompletionItemInsertTextRule["KeepWhitespace"] = 1] = "KeepWhitespace";
    CompletionItemInsertTextRule[CompletionItemInsertTextRule["InsertAsSnippet"] = 4] = "InsertAsSnippet";
})(CompletionItemInsertTextRule = exports.CompletionItemInsertTextRule || (exports.CompletionItemInsertTextRule = {}));
var CompletionItemKind;
(function (CompletionItemKind) {
    CompletionItemKind[CompletionItemKind["Method"] = 0] = "Method";
    CompletionItemKind[CompletionItemKind["Function"] = 1] = "Function";
    CompletionItemKind[CompletionItemKind["Constructor"] = 2] = "Constructor";
    CompletionItemKind[CompletionItemKind["Field"] = 3] = "Field";
    CompletionItemKind[CompletionItemKind["Variable"] = 4] = "Variable";
    CompletionItemKind[CompletionItemKind["Class"] = 5] = "Class";
    CompletionItemKind[CompletionItemKind["Struct"] = 6] = "Struct";
    CompletionItemKind[CompletionItemKind["Interface"] = 7] = "Interface";
    CompletionItemKind[CompletionItemKind["Module"] = 8] = "Module";
    CompletionItemKind[CompletionItemKind["Property"] = 9] = "Property";
    CompletionItemKind[CompletionItemKind["Event"] = 10] = "Event";
    CompletionItemKind[CompletionItemKind["Operator"] = 11] = "Operator";
    CompletionItemKind[CompletionItemKind["Unit"] = 12] = "Unit";
    CompletionItemKind[CompletionItemKind["Value"] = 13] = "Value";
    CompletionItemKind[CompletionItemKind["Constant"] = 14] = "Constant";
    CompletionItemKind[CompletionItemKind["Enum"] = 15] = "Enum";
    CompletionItemKind[CompletionItemKind["EnumMember"] = 16] = "EnumMember";
    CompletionItemKind[CompletionItemKind["Keyword"] = 17] = "Keyword";
    CompletionItemKind[CompletionItemKind["Text"] = 18] = "Text";
    CompletionItemKind[CompletionItemKind["Color"] = 19] = "Color";
    CompletionItemKind[CompletionItemKind["File"] = 20] = "File";
    CompletionItemKind[CompletionItemKind["Reference"] = 21] = "Reference";
    CompletionItemKind[CompletionItemKind["Customcolor"] = 22] = "Customcolor";
    CompletionItemKind[CompletionItemKind["Folder"] = 23] = "Folder";
    CompletionItemKind[CompletionItemKind["TypeParameter"] = 24] = "TypeParameter";
    CompletionItemKind[CompletionItemKind["Snippet"] = 25] = "Snippet";
})(CompletionItemKind = exports.CompletionItemKind || (exports.CompletionItemKind = {}));
var IdObject = /** @class */ (function () {
    function IdObject() {
    }
    return IdObject;
}());
exports.IdObject = IdObject;
var MarkerSeverity;
(function (MarkerSeverity) {
    MarkerSeverity[MarkerSeverity["Hint"] = 1] = "Hint";
    MarkerSeverity[MarkerSeverity["Info"] = 2] = "Info";
    MarkerSeverity[MarkerSeverity["Warning"] = 4] = "Warning";
    MarkerSeverity[MarkerSeverity["Error"] = 8] = "Error";
})(MarkerSeverity = exports.MarkerSeverity || (exports.MarkerSeverity = {}));
var MarkerTag;
(function (MarkerTag) {
    MarkerTag[MarkerTag["Unnecessary"] = 1] = "Unnecessary";
})(MarkerTag = exports.MarkerTag || (exports.MarkerTag = {}));
var DocumentHighlightKind;
(function (DocumentHighlightKind) {
    DocumentHighlightKind[DocumentHighlightKind["Text"] = 0] = "Text";
    DocumentHighlightKind[DocumentHighlightKind["Read"] = 1] = "Read";
    DocumentHighlightKind[DocumentHighlightKind["Write"] = 2] = "Write";
})(DocumentHighlightKind = exports.DocumentHighlightKind || (exports.DocumentHighlightKind = {}));
var SymbolKind;
(function (SymbolKind) {
    SymbolKind[SymbolKind["File"] = 0] = "File";
    SymbolKind[SymbolKind["Module"] = 1] = "Module";
    SymbolKind[SymbolKind["Namespace"] = 2] = "Namespace";
    SymbolKind[SymbolKind["Package"] = 3] = "Package";
    SymbolKind[SymbolKind["Class"] = 4] = "Class";
    SymbolKind[SymbolKind["Method"] = 5] = "Method";
    SymbolKind[SymbolKind["Property"] = 6] = "Property";
    SymbolKind[SymbolKind["Field"] = 7] = "Field";
    SymbolKind[SymbolKind["Constructor"] = 8] = "Constructor";
    SymbolKind[SymbolKind["Enum"] = 9] = "Enum";
    SymbolKind[SymbolKind["Interface"] = 10] = "Interface";
    SymbolKind[SymbolKind["Function"] = 11] = "Function";
    SymbolKind[SymbolKind["Variable"] = 12] = "Variable";
    SymbolKind[SymbolKind["Constant"] = 13] = "Constant";
    SymbolKind[SymbolKind["String"] = 14] = "String";
    SymbolKind[SymbolKind["Number"] = 15] = "Number";
    SymbolKind[SymbolKind["Boolean"] = 16] = "Boolean";
    SymbolKind[SymbolKind["Array"] = 17] = "Array";
    SymbolKind[SymbolKind["Object"] = 18] = "Object";
    SymbolKind[SymbolKind["Key"] = 19] = "Key";
    SymbolKind[SymbolKind["Null"] = 20] = "Null";
    SymbolKind[SymbolKind["EnumMember"] = 21] = "EnumMember";
    SymbolKind[SymbolKind["Struct"] = 22] = "Struct";
    SymbolKind[SymbolKind["Event"] = 23] = "Event";
    SymbolKind[SymbolKind["Operator"] = 24] = "Operator";
    SymbolKind[SymbolKind["TypeParameter"] = 25] = "TypeParameter";
})(SymbolKind = exports.SymbolKind || (exports.SymbolKind = {}));
var FoldingRangeKind = /** @class */ (function () {
    function FoldingRangeKind(value) {
        this.value = value;
    }
    FoldingRangeKind.Comment = new FoldingRangeKind('comment');
    FoldingRangeKind.Imports = new FoldingRangeKind('imports');
    FoldingRangeKind.Region = new FoldingRangeKind('region');
    return FoldingRangeKind;
}());
exports.FoldingRangeKind = FoldingRangeKind;


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
var rpc_protocol_1 = __webpack_require__(/*! ./rpc-protocol */ "../node_modules/@theia/plugin-ext/lib/common/rpc-protocol.js");
exports.emptyPlugin = {
    lifecycle: {
        startMethod: 'empty',
        stopMethod: 'empty'
    },
    model: {
        id: 'emptyPlugin',
        name: 'emptyPlugin',
        publisher: 'Theia',
        version: 'empty',
        displayName: 'empty',
        description: 'empty',
        engine: {
            type: 'empty',
            version: 'empty'
        },
        packagePath: 'empty',
        entryPoint: {}
    },
    pluginPath: 'empty',
    pluginFolder: 'empty',
    rawModel: {
        name: 'emptyPlugin',
        publisher: 'Theia',
        version: 'empty',
        displayName: 'empty',
        description: 'empty',
        engines: {
            type: 'empty',
            version: 'empty'
        },
        packagePath: 'empty'
    }
};
var MainMessageType;
(function (MainMessageType) {
    MainMessageType[MainMessageType["Error"] = 0] = "Error";
    MainMessageType[MainMessageType["Warning"] = 1] = "Warning";
    MainMessageType[MainMessageType["Info"] = 2] = "Info";
})(MainMessageType = exports.MainMessageType || (exports.MainMessageType = {}));
var TreeViewSelection;
(function (TreeViewSelection) {
    function is(arg) {
        return !!arg && typeof arg === 'object' && 'treeViewId' in arg && 'treeItemId' in arg;
    }
    TreeViewSelection.is = is;
})(TreeViewSelection = exports.TreeViewSelection || (exports.TreeViewSelection = {}));
/**
 * Collapsible state of the tree item
 */
var TreeViewItemCollapsibleState;
(function (TreeViewItemCollapsibleState) {
    /**
     * Determines an item can be neither collapsed nor expanded. Implies it has no children.
     */
    TreeViewItemCollapsibleState[TreeViewItemCollapsibleState["None"] = 0] = "None";
    /**
     * Determines an item is collapsed
     */
    TreeViewItemCollapsibleState[TreeViewItemCollapsibleState["Collapsed"] = 1] = "Collapsed";
    /**
     * Determines an item is expanded
     */
    TreeViewItemCollapsibleState[TreeViewItemCollapsibleState["Expanded"] = 2] = "Expanded";
})(TreeViewItemCollapsibleState = exports.TreeViewItemCollapsibleState || (exports.TreeViewItemCollapsibleState = {}));
var ScmCommandArg;
(function (ScmCommandArg) {
    function is(arg) {
        return !!arg && typeof arg === 'object' && 'sourceControlHandle' in arg;
    }
    ScmCommandArg.is = is;
})(ScmCommandArg = exports.ScmCommandArg || (exports.ScmCommandArg = {}));
var EditorPosition;
(function (EditorPosition) {
    EditorPosition[EditorPosition["ONE"] = 0] = "ONE";
    EditorPosition[EditorPosition["TWO"] = 1] = "TWO";
    EditorPosition[EditorPosition["THREE"] = 2] = "THREE";
    EditorPosition[EditorPosition["FOUR"] = 3] = "FOUR";
    EditorPosition[EditorPosition["FIVE"] = 4] = "FIVE";
    EditorPosition[EditorPosition["SIX"] = 5] = "SIX";
    EditorPosition[EditorPosition["SEVEN"] = 6] = "SEVEN";
    EditorPosition[EditorPosition["EIGHT"] = 7] = "EIGHT";
    EditorPosition[EditorPosition["NINE"] = 8] = "NINE";
})(EditorPosition = exports.EditorPosition || (exports.EditorPosition = {}));
var TextEditorRevealType;
(function (TextEditorRevealType) {
    TextEditorRevealType[TextEditorRevealType["Default"] = 0] = "Default";
    TextEditorRevealType[TextEditorRevealType["InCenter"] = 1] = "InCenter";
    TextEditorRevealType[TextEditorRevealType["InCenterIfOutsideViewport"] = 2] = "InCenterIfOutsideViewport";
    TextEditorRevealType[TextEditorRevealType["AtTop"] = 3] = "AtTop";
})(TextEditorRevealType = exports.TextEditorRevealType || (exports.TextEditorRevealType = {}));
/**
 * Describes the behavior of decorations when typing/editing near their edges.
 */
var TrackedRangeStickiness;
(function (TrackedRangeStickiness) {
    TrackedRangeStickiness[TrackedRangeStickiness["AlwaysGrowsWhenTypingAtEdges"] = 0] = "AlwaysGrowsWhenTypingAtEdges";
    TrackedRangeStickiness[TrackedRangeStickiness["NeverGrowsWhenTypingAtEdges"] = 1] = "NeverGrowsWhenTypingAtEdges";
    TrackedRangeStickiness[TrackedRangeStickiness["GrowsOnlyWhenTypingBefore"] = 2] = "GrowsOnlyWhenTypingBefore";
    TrackedRangeStickiness[TrackedRangeStickiness["GrowsOnlyWhenTypingAfter"] = 3] = "GrowsOnlyWhenTypingAfter";
})(TrackedRangeStickiness = exports.TrackedRangeStickiness || (exports.TrackedRangeStickiness = {}));
var ResourceTextEditDto;
(function (ResourceTextEditDto) {
    function is(arg) {
        return !!arg && typeof arg === 'object' && 'resource' in arg && 'edits' in arg;
    }
    ResourceTextEditDto.is = is;
})(ResourceTextEditDto = exports.ResourceTextEditDto || (exports.ResourceTextEditDto = {}));
exports.LanguagesMainFactory = Symbol('LanguagesMainFactory');
exports.OutputChannelRegistryFactory = Symbol('OutputChannelRegistryFactory');
exports.PLUGIN_RPC_CONTEXT = {
    COMMAND_REGISTRY_MAIN: rpc_protocol_1.createProxyIdentifier('CommandRegistryMain'),
    QUICK_OPEN_MAIN: rpc_protocol_1.createProxyIdentifier('QuickOpenMain'),
    DIALOGS_MAIN: rpc_protocol_1.createProxyIdentifier('DialogsMain'),
    WORKSPACE_MAIN: rpc_protocol_1.createProxyIdentifier('WorkspaceMain'),
    MESSAGE_REGISTRY_MAIN: rpc_protocol_1.createProxyIdentifier('MessageRegistryMain'),
    TEXT_EDITORS_MAIN: rpc_protocol_1.createProxyIdentifier('TextEditorsMain'),
    DOCUMENTS_MAIN: rpc_protocol_1.createProxyIdentifier('DocumentsMain'),
    STATUS_BAR_MESSAGE_REGISTRY_MAIN: rpc_protocol_1.createProxyIdentifier('StatusBarMessageRegistryMain'),
    ENV_MAIN: rpc_protocol_1.createProxyIdentifier('EnvMain'),
    NOTIFICATION_MAIN: rpc_protocol_1.createProxyIdentifier('NotificationMain'),
    TERMINAL_MAIN: rpc_protocol_1.createProxyIdentifier('TerminalServiceMain'),
    TREE_VIEWS_MAIN: rpc_protocol_1.createProxyIdentifier('TreeViewsMain'),
    PREFERENCE_REGISTRY_MAIN: rpc_protocol_1.createProxyIdentifier('PreferenceRegistryMain'),
    OUTPUT_CHANNEL_REGISTRY_MAIN: rpc_protocol_1.createProxyIdentifier('OutputChannelRegistryMain'),
    LANGUAGES_MAIN: rpc_protocol_1.createProxyIdentifier('LanguagesMain'),
    CONNECTION_MAIN: rpc_protocol_1.createProxyIdentifier('ConnectionMain'),
    WEBVIEWS_MAIN: rpc_protocol_1.createProxyIdentifier('WebviewsMain'),
    STORAGE_MAIN: rpc_protocol_1.createProxyIdentifier('StorageMain'),
    TASKS_MAIN: rpc_protocol_1.createProxyIdentifier('TasksMain'),
    LANGUAGES_CONTRIBUTION_MAIN: rpc_protocol_1.createProxyIdentifier('LanguagesContributionMain'),
    DEBUG_MAIN: rpc_protocol_1.createProxyIdentifier('DebugMain'),
    FILE_SYSTEM_MAIN: rpc_protocol_1.createProxyIdentifier('FileSystemMain'),
    SCM_MAIN: rpc_protocol_1.createProxyIdentifier('ScmMain'),
    DECORATIONS_MAIN: rpc_protocol_1.createProxyIdentifier('DecorationsMain'),
    WINDOW_MAIN: rpc_protocol_1.createProxyIdentifier('WindowMain'),
    CLIPBOARD_MAIN: rpc_protocol_1.createProxyIdentifier('ClipboardMain')
};
exports.MAIN_RPC_CONTEXT = {
    HOSTED_PLUGIN_MANAGER_EXT: rpc_protocol_1.createProxyIdentifier('PluginManagerExt'),
    COMMAND_REGISTRY_EXT: rpc_protocol_1.createProxyIdentifier('CommandRegistryExt'),
    QUICK_OPEN_EXT: rpc_protocol_1.createProxyIdentifier('QuickOpenExt'),
    WINDOW_STATE_EXT: rpc_protocol_1.createProxyIdentifier('WindowStateExt'),
    NOTIFICATION_EXT: rpc_protocol_1.createProxyIdentifier('NotificationExt'),
    WORKSPACE_EXT: rpc_protocol_1.createProxyIdentifier('WorkspaceExt'),
    TEXT_EDITORS_EXT: rpc_protocol_1.createProxyIdentifier('TextEditorsExt'),
    EDITORS_AND_DOCUMENTS_EXT: rpc_protocol_1.createProxyIdentifier('EditorsAndDocumentsExt'),
    DOCUMENTS_EXT: rpc_protocol_1.createProxyIdentifier('DocumentsExt'),
    TERMINAL_EXT: rpc_protocol_1.createProxyIdentifier('TerminalServiceExt'),
    OUTPUT_CHANNEL_REGISTRY_EXT: rpc_protocol_1.createProxyIdentifier('OutputChannelRegistryExt'),
    TREE_VIEWS_EXT: rpc_protocol_1.createProxyIdentifier('TreeViewsExt'),
    PREFERENCE_REGISTRY_EXT: rpc_protocol_1.createProxyIdentifier('PreferenceRegistryExt'),
    LANGUAGES_EXT: rpc_protocol_1.createProxyIdentifier('LanguagesExt'),
    CONNECTION_EXT: rpc_protocol_1.createProxyIdentifier('ConnectionExt'),
    WEBVIEWS_EXT: rpc_protocol_1.createProxyIdentifier('WebviewsExt'),
    STORAGE_EXT: rpc_protocol_1.createProxyIdentifier('StorageExt'),
    TASKS_EXT: rpc_protocol_1.createProxyIdentifier('TasksExt'),
    LANGUAGES_CONTRIBUTION_EXT: rpc_protocol_1.createProxyIdentifier('LanguagesContributionExt'),
    DEBUG_EXT: rpc_protocol_1.createProxyIdentifier('DebugExt'),
    FILE_SYSTEM_EXT: rpc_protocol_1.createProxyIdentifier('FileSystemExt'),
    SCM_EXT: rpc_protocol_1.createProxyIdentifier('ScmExt'),
    DECORATIONS_EXT: rpc_protocol_1.createProxyIdentifier('DecorationsExt')
};


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/common/rpc-protocol.js":
/*!********************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/common/rpc-protocol.js ***!
  \********************************************************************/
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
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// copied from https://github.com/Microsoft/vscode/blob/master/src/vs/workbench/services/extensions/node/rpcProtocol.ts
// with small modifications
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
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
var promise_util_1 = __webpack_require__(/*! @theia/core/lib/common/promise-util */ "../node_modules/@theia/core/lib/common/promise-util.js");
var vscode_uri_1 = __webpack_require__(/*! vscode-uri */ "../node_modules/vscode-uri/lib/esm/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ "../node_modules/vscode-languageserver-protocol/lib/main.js");
var types_impl_1 = __webpack_require__(/*! ../plugin/types-impl */ "../node_modules/@theia/plugin-ext/lib/plugin/types-impl.js");
exports.RPCProtocol = Symbol('RPCProtocol');
var ProxyIdentifier = /** @class */ (function () {
    function ProxyIdentifier(isMain, id) {
        this.isMain = isMain;
        // TODO this is nasty, rewrite this
        this.id = id.toString();
    }
    return ProxyIdentifier;
}());
exports.ProxyIdentifier = ProxyIdentifier;
function createProxyIdentifier(identifier) {
    return new ProxyIdentifier(false, identifier);
}
exports.createProxyIdentifier = createProxyIdentifier;
var ConnectionClosedError;
(function (ConnectionClosedError) {
    var code = 'RPC_PROTOCOL_CLOSED';
    function create(message) {
        if (message === void 0) { message = 'connection is closed'; }
        return Object.assign(new Error(message), { code: code });
    }
    ConnectionClosedError.create = create;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function is(error) {
        return !!error && typeof error === 'object' && 'code' in error && error['code'] === code;
    }
    ConnectionClosedError.is = is;
})(ConnectionClosedError = exports.ConnectionClosedError || (exports.ConnectionClosedError = {}));
var RPCProtocolImpl = /** @class */ (function () {
    function RPCProtocolImpl(connection, remoteHostID) {
        var _this = this;
        this.remoteHostID = remoteHostID;
        this.locals = new Map();
        this.proxies = new Map();
        this.lastMessageId = 0;
        this.cancellationTokenSources = new Map();
        this.pendingRPCReplies = new Map();
        this.toDispose = new disposable_1.DisposableCollection(disposable_1.Disposable.create(function () { }));
        this.toDispose.push(this.multiplexor = new RPCMultiplexer(connection, function (msg) { return _this.receiveOneMessage(msg); }, remoteHostID));
        this.toDispose.push(disposable_1.Disposable.create(function () {
            var e_1, _a;
            _this.proxies.clear();
            try {
                for (var _b = __values(_this.pendingRPCReplies.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var reply = _c.value;
                    reply.reject(ConnectionClosedError.create());
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _this.pendingRPCReplies.clear();
        }));
    }
    Object.defineProperty(RPCProtocolImpl.prototype, "isDisposed", {
        get: function () {
            return this.toDispose.disposed;
        },
        enumerable: true,
        configurable: true
    });
    RPCProtocolImpl.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    RPCProtocolImpl.prototype.getProxy = function (proxyId) {
        if (this.isDisposed) {
            throw ConnectionClosedError.create();
        }
        var proxy = this.proxies.get(proxyId.id);
        if (!proxy) {
            proxy = this.createProxy(proxyId.id);
            this.proxies.set(proxyId.id, proxy);
        }
        return proxy;
    };
    RPCProtocolImpl.prototype.set = function (identifier, instance) {
        var _this = this;
        if (this.isDisposed) {
            throw ConnectionClosedError.create();
        }
        this.locals.set(identifier.id, instance);
        if (disposable_1.Disposable.is(instance)) {
            this.toDispose.push(instance);
        }
        this.toDispose.push(disposable_1.Disposable.create(function () { return _this.locals.delete(identifier.id); }));
        return instance;
    };
    RPCProtocolImpl.prototype.createProxy = function (proxyId) {
        var _this = this;
        var handler = {
            get: function (target, name) {
                if (!target[name] && name.charCodeAt(0) === 36 /* CharCode.DollarSign */) {
                    target[name] = function () {
                        var myArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            myArgs[_i] = arguments[_i];
                        }
                        return _this.remoteCall(proxyId, name, myArgs);
                    };
                }
                return target[name];
            }
        };
        return new Proxy(Object.create(null), handler);
    };
    RPCProtocolImpl.prototype.remoteCall = function (proxyId, methodName, args) {
        var _this = this;
        if (this.isDisposed) {
            return Promise.reject(ConnectionClosedError.create());
        }
        var cancellationToken = args.length && vscode_languageserver_protocol_1.CancellationToken.is(args[args.length - 1]) ? args.pop() : undefined;
        if (cancellationToken && cancellationToken.isCancellationRequested) {
            return Promise.reject(canceled());
        }
        var callId = String(++this.lastMessageId);
        var result = new promise_util_1.Deferred();
        if (cancellationToken) {
            args.push('add.cancellation.token');
            cancellationToken.onCancellationRequested(function () {
                return _this.multiplexor.send(MessageFactory.cancel(callId, _this.messageToSendHostId));
            });
        }
        this.pendingRPCReplies.set(callId, result);
        this.multiplexor.send(MessageFactory.request(callId, proxyId, methodName, args, this.messageToSendHostId));
        return result.promise;
    };
    RPCProtocolImpl.prototype.receiveOneMessage = function (rawmsg) {
        if (this.isDisposed) {
            return;
        }
        var msg = JSON.parse(rawmsg, ObjectsTransferrer.reviver);
        // handle message that sets the Host ID
        if (msg.setHostID) {
            this.messageToSendHostId = msg.setHostID;
            return;
        }
        // skip message if not matching host
        if (this.remoteHostID && msg.hostID && this.remoteHostID !== msg.hostID) {
            return;
        }
        switch (msg.type) {
            case 1 /* Request */:
                this.receiveRequest(msg);
                break;
            case 2 /* Reply */:
                this.receiveReply(msg);
                break;
            case 3 /* ReplyErr */:
                this.receiveReplyErr(msg);
                break;
            case 4 /* Cancel */:
                this.receiveCancel(msg);
                break;
        }
    };
    RPCProtocolImpl.prototype.receiveCancel = function (msg) {
        var cancellationTokenSource = this.cancellationTokenSources.get(msg.id);
        if (cancellationTokenSource) {
            cancellationTokenSource.cancel();
        }
    };
    RPCProtocolImpl.prototype.receiveRequest = function (msg) {
        var _this = this;
        var callId = msg.id;
        var proxyId = msg.proxyId;
        // convert `null` to `undefined`, since we don't use `null` in internal plugin APIs
        var args = msg.args.map(function (arg) { return arg === null ? undefined : arg; }); // eslint-disable-line no-null/no-null
        var addToken = args.length && args[args.length - 1] === 'add.cancellation.token' ? args.pop() : false;
        if (addToken) {
            var tokenSource = new vscode_languageserver_protocol_1.CancellationTokenSource();
            this.cancellationTokenSources.set(callId, tokenSource);
            args.push(tokenSource.token);
        }
        var invocation = this.invokeHandler(proxyId, msg.method, args);
        invocation.then(function (result) {
            _this.cancellationTokenSources.delete(callId);
            _this.multiplexor.send(MessageFactory.replyOK(callId, result, _this.messageToSendHostId));
        }, function (error) {
            _this.cancellationTokenSources.delete(callId);
            _this.multiplexor.send(MessageFactory.replyErr(callId, error, _this.messageToSendHostId));
        });
    };
    RPCProtocolImpl.prototype.receiveReply = function (msg) {
        var callId = msg.id;
        var pendingReply = this.pendingRPCReplies.get(callId);
        if (!pendingReply) {
            return;
        }
        this.pendingRPCReplies.delete(callId);
        pendingReply.resolve(msg.res);
    };
    RPCProtocolImpl.prototype.receiveReplyErr = function (msg) {
        var callId = msg.id;
        var pendingReply = this.pendingRPCReplies.get(callId);
        if (!pendingReply) {
            return;
        }
        this.pendingRPCReplies.delete(callId);
        var err = undefined;
        if (msg.err && msg.err.$isError) {
            err = new Error();
            err.name = msg.err.name;
            err.message = msg.err.message;
            err.stack = msg.err.stack;
        }
        pendingReply.reject(err);
    };
    RPCProtocolImpl.prototype.invokeHandler = function (proxyId, methodName, args) {
        try {
            return Promise.resolve(this.doInvokeHandler(proxyId, methodName, args));
        }
        catch (err) {
            return Promise.reject(err);
        }
    };
    RPCProtocolImpl.prototype.doInvokeHandler = function (proxyId, methodName, args) {
        var actor = this.locals.get(proxyId);
        if (!actor) {
            throw new Error('Unknown actor ' + proxyId);
        }
        var method = actor[methodName];
        if (typeof method !== 'function') {
            throw new Error('Unknown method ' + methodName + ' on actor ' + proxyId);
        }
        return method.apply(actor, args);
    };
    return RPCProtocolImpl;
}());
exports.RPCProtocolImpl = RPCProtocolImpl;
function canceled() {
    var error = new Error('Canceled');
    error.name = error.message;
    return error;
}
/**
 * Sends/Receives multiple messages in one go:
 *  - multiple messages to be sent from one stack get sent in bulk at `process.nextTick`.
 *  - each incoming message is handled in a separate `process.nextTick`.
 */
var RPCMultiplexer = /** @class */ (function () {
    function RPCMultiplexer(connection, onMessage, remoteHostId) {
        var _this = this;
        this.toDispose = new disposable_1.DisposableCollection();
        this.connection = connection;
        this.sendAccumulatedBound = this.sendAccumulated.bind(this);
        this.toDispose.push(disposable_1.Disposable.create(function () { return _this.messagesToSend = []; }));
        this.toDispose.push(this.connection.onMessage(function (data) {
            var len = data.length;
            for (var i = 0; i < len; i++) {
                onMessage(data[i]);
            }
        }));
        this.messagesToSend = [];
        if (remoteHostId) {
            this.send("{\"setHostID\":\"" + remoteHostId + "\"}");
        }
    }
    RPCMultiplexer.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    RPCMultiplexer.prototype.sendAccumulated = function () {
        var tmp = this.messagesToSend;
        this.messagesToSend = [];
        this.connection.send(tmp);
    };
    RPCMultiplexer.prototype.send = function (msg) {
        if (this.toDispose.disposed) {
            throw ConnectionClosedError.create();
        }
        if (this.messagesToSend.length === 0) {
            if (typeof setImmediate !== 'undefined') {
                setImmediate(this.sendAccumulatedBound);
            }
            else {
                setTimeout(this.sendAccumulatedBound, 0);
            }
        }
        this.messagesToSend.push(msg);
    };
    return RPCMultiplexer;
}());
var MessageFactory = /** @class */ (function () {
    function MessageFactory() {
    }
    MessageFactory.cancel = function (req, messageToSendHostId) {
        var prefix = '';
        if (messageToSendHostId) {
            prefix = "\"hostID\":\"" + messageToSendHostId + "\",";
        }
        return "{" + prefix + "\"type\":" + 4 /* Cancel */ + ",\"id\":\"" + req + "\"}";
    };
    MessageFactory.request = function (req, rpcId, method, args, messageToSendHostId) {
        var prefix = '';
        if (messageToSendHostId) {
            prefix = "\"hostID\":\"" + messageToSendHostId + "\",";
        }
        return "{" + prefix + "\"type\":" + 1 /* Request */ + ",\"id\":\"" + req + "\",\"proxyId\":\"" + rpcId + "\",\"method\":\"" + method + "\",\"args\":" + JSON.stringify(args, ObjectsTransferrer.replacer) + "}";
    };
    MessageFactory.replyOK = function (req, res, messageToSendHostId) {
        var prefix = '';
        if (messageToSendHostId) {
            prefix = "\"hostID\":\"" + messageToSendHostId + "\",";
        }
        if (typeof res === 'undefined') {
            return "{" + prefix + "\"type\":" + 2 /* Reply */ + ",\"id\":\"" + req + "\"}";
        }
        return "{" + prefix + "\"type\":" + 2 /* Reply */ + ",\"id\":\"" + req + "\",\"res\":" + JSON.stringify(res, ObjectsTransferrer.replacer) + "}";
    };
    MessageFactory.replyErr = function (req, err, messageToSendHostId) {
        var prefix = '';
        if (messageToSendHostId) {
            prefix = "\"hostID\":\"" + messageToSendHostId + "\",";
        }
        err = typeof err === 'string' ? new Error(err) : err;
        if (err instanceof Error) {
            return "{" + prefix + "\"type\":" + 3 /* ReplyErr */ + ",\"id\":\"" + req + "\",\"err\":" + JSON.stringify(transformErrorForSerialization(err)) + "}";
        }
        return "{" + prefix + "\"type\":" + 3 /* ReplyErr */ + ",\"id\":\"" + req + "\",\"err\":null}";
    };
    return MessageFactory;
}());
/**
 * These functions are responsible for correct transferring objects via rpc channel.
 *
 * To reach that some specific kind of objects is converted to json in some custom way
 * and then, after receiving, revived to objects again,
 * so there is feeling that object was transferred via rpc channel.
 *
 * To distinguish between regular and altered objects, field $type is added to altered ones.
 * Also value of that field specifies kind of the object.
 */
var ObjectsTransferrer;
(function (ObjectsTransferrer) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function replacer(key, value) {
        if (value instanceof uri_1.default) {
            return {
                $type: SerializedObjectType.THEIA_URI,
                data: value.toString()
            };
        }
        else if (value instanceof types_impl_1.Range) {
            var range = value;
            var serializedValue = {
                start: {
                    line: range.start.line,
                    character: range.start.character
                },
                end: {
                    line: range.end.line,
                    character: range.end.character
                }
            };
            return {
                $type: SerializedObjectType.THEIA_RANGE,
                data: JSON.stringify(serializedValue)
            };
        }
        else if (value && value['$mid'] === 1) {
            // Given value is VSCode URI
            // We cannot use instanceof here because VSCode URI has toJSON method which is invoked before this replacer.
            var uri = vscode_uri_1.default.revive(value);
            return {
                $type: SerializedObjectType.VSCODE_URI,
                data: uri.toString()
            };
        }
        return value;
    }
    ObjectsTransferrer.replacer = replacer;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function reviver(key, value) {
        if (isSerializedObject(value)) {
            switch (value.$type) {
                case SerializedObjectType.THEIA_URI:
                    return new uri_1.default(value.data);
                case SerializedObjectType.VSCODE_URI:
                    return vscode_uri_1.default.parse(value.data);
                case SerializedObjectType.THEIA_RANGE:
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    var obj = JSON.parse(value.data);
                    var start = new types_impl_1.Position(obj.start.line, obj.start.character);
                    var end = new types_impl_1.Position(obj.end.line, obj.end.character);
                    return new types_impl_1.Range(start, end);
            }
        }
        return value;
    }
    ObjectsTransferrer.reviver = reviver;
})(ObjectsTransferrer || (ObjectsTransferrer = {}));
var SerializedObjectType;
(function (SerializedObjectType) {
    SerializedObjectType[SerializedObjectType["THEIA_URI"] = 0] = "THEIA_URI";
    SerializedObjectType[SerializedObjectType["VSCODE_URI"] = 1] = "VSCODE_URI";
    SerializedObjectType[SerializedObjectType["THEIA_RANGE"] = 2] = "THEIA_RANGE";
})(SerializedObjectType || (SerializedObjectType = {}));
function isSerializedObject(obj) {
    return obj && obj.$type !== undefined && obj.data !== undefined;
}
var CancelMessage = /** @class */ (function () {
    function CancelMessage() {
    }
    return CancelMessage;
}());
var RequestMessage = /** @class */ (function () {
    function RequestMessage() {
    }
    return RequestMessage;
}());
var ReplyMessage = /** @class */ (function () {
    function ReplyMessage() {
    }
    return ReplyMessage;
}());
var ReplyErrMessage = /** @class */ (function () {
    function ReplyErrMessage() {
    }
    return ReplyErrMessage;
}());
function transformErrorForSerialization(error) {
    if (error instanceof Error) {
        var name_1 = error.name, message = error.message;
        var stack = error.stacktrace || error.stack;
        return {
            $isError: true,
            name: name_1,
            message: message,
            stack: stack
        };
    }
    // return as is
    return error;
}
exports.transformErrorForSerialization = transformErrorForSerialization;


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/plugin/markdown-string.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/plugin/markdown-string.js ***!
  \***********************************************************************/
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
var MarkdownString = /** @class */ (function () {
    function MarkdownString(value) {
        this.value = value || '';
    }
    MarkdownString.prototype.appendText = function (value) {
        // escape markdown syntax tokens: http://daringfireball.net/projects/markdown/syntax#backslash
        this.value += value.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&');
        return this;
    };
    MarkdownString.prototype.appendMarkdown = function (value) {
        this.value += value;
        return this;
    };
    MarkdownString.prototype.appendCodeblock = function (code, language) {
        if (language === void 0) { language = ''; }
        this.value += '\n```';
        this.value += language;
        this.value += '\n';
        this.value += code;
        this.value += '\n```\n';
        return this;
    };
    return MarkdownString;
}());
exports.MarkdownString = MarkdownString;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isMarkdownString(thing) {
    if (thing instanceof MarkdownString) {
        return true;
    }
    else if (thing && typeof thing === 'object') {
        return typeof thing.value === 'string'
            && (typeof thing.isTrusted === 'boolean' || thing.isTrusted === undefined);
    }
    return false;
}
exports.isMarkdownString = isMarkdownString;


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/plugin/type-converters.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/plugin/type-converters.js ***!
  \***********************************************************************/
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
var vscode_languageserver_types_1 = __webpack_require__(/*! vscode-languageserver-types */ "../node_modules/vscode-languageserver-types/lib/esm/main.js");
var vscode_uri_1 = __webpack_require__(/*! vscode-uri */ "../node_modules/vscode-uri/lib/esm/index.js");
var rpc = __webpack_require__(/*! ../common/plugin-api-rpc */ "../node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc.js");
var plugin_api_rpc_1 = __webpack_require__(/*! ../common/plugin-api-rpc */ "../node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc.js");
var model = __webpack_require__(/*! ../common/plugin-api-rpc-model */ "../node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc-model.js");
var markdown_string_1 = __webpack_require__(/*! ./markdown-string */ "../node_modules/@theia/plugin-ext/lib/plugin/markdown-string.js");
var types = __webpack_require__(/*! ./types-impl */ "../node_modules/@theia/plugin-ext/lib/plugin/types-impl.js");
var SIDE_GROUP = -2;
var ACTIVE_GROUP = -1;
function toViewColumn(ep) {
    if (typeof ep !== 'number') {
        return undefined;
    }
    if (ep === plugin_api_rpc_1.EditorPosition.ONE) {
        return types.ViewColumn.One;
    }
    else if (ep === plugin_api_rpc_1.EditorPosition.TWO) {
        return types.ViewColumn.Two;
    }
    else if (ep === plugin_api_rpc_1.EditorPosition.THREE) {
        return types.ViewColumn.Three;
    }
    else if (ep === plugin_api_rpc_1.EditorPosition.FOUR) {
        return types.ViewColumn.Four;
    }
    else if (ep === plugin_api_rpc_1.EditorPosition.FIVE) {
        return types.ViewColumn.Five;
    }
    else if (ep === plugin_api_rpc_1.EditorPosition.SIX) {
        return types.ViewColumn.Six;
    }
    else if (ep === plugin_api_rpc_1.EditorPosition.SEVEN) {
        return types.ViewColumn.Seven;
    }
    else if (ep === plugin_api_rpc_1.EditorPosition.EIGHT) {
        return types.ViewColumn.Eight;
    }
    else if (ep === plugin_api_rpc_1.EditorPosition.NINE) {
        return types.ViewColumn.Nine;
    }
    return undefined;
}
exports.toViewColumn = toViewColumn;
function fromViewColumn(column) {
    if (typeof column === 'number' && column >= types.ViewColumn.One) {
        return column - 1;
    }
    if (column === types.ViewColumn.Beside) {
        return SIDE_GROUP;
    }
    return ACTIVE_GROUP;
}
exports.fromViewColumn = fromViewColumn;
function toWebviewPanelShowOptions(options) {
    if (typeof options === 'object') {
        var showOptions = options;
        return {
            area: showOptions.area ? showOptions.area : types.WebviewPanelTargetArea.Main,
            viewColumn: showOptions.viewColumn ? fromViewColumn(showOptions.viewColumn) : undefined,
            preserveFocus: showOptions.preserveFocus ? showOptions.preserveFocus : false
        };
    }
    return {
        area: types.WebviewPanelTargetArea.Main,
        viewColumn: fromViewColumn(options),
        preserveFocus: false
    };
}
exports.toWebviewPanelShowOptions = toWebviewPanelShowOptions;
function toSelection(selection) {
    var selectionStartLineNumber = selection.selectionStartLineNumber, selectionStartColumn = selection.selectionStartColumn, positionLineNumber = selection.positionLineNumber, positionColumn = selection.positionColumn;
    var start = new types.Position(selectionStartLineNumber - 1, selectionStartColumn - 1);
    var end = new types.Position(positionLineNumber - 1, positionColumn - 1);
    return new types.Selection(start, end);
}
exports.toSelection = toSelection;
function fromSelection(selection) {
    var active = selection.active, anchor = selection.anchor;
    return {
        selectionStartLineNumber: anchor.line + 1,
        selectionStartColumn: anchor.character + 1,
        positionLineNumber: active.line + 1,
        positionColumn: active.character + 1
    };
}
exports.fromSelection = fromSelection;
function toRange(range) {
    // if (!range) {
    //     return undefined;
    // }
    var startLineNumber = range.startLineNumber, startColumn = range.startColumn, endLineNumber = range.endLineNumber, endColumn = range.endColumn;
    return new types.Range(startLineNumber - 1, startColumn - 1, endLineNumber - 1, endColumn - 1);
}
exports.toRange = toRange;
function fromRange(range) {
    if (!range) {
        return undefined;
    }
    var start = range.start, end = range.end;
    return {
        startLineNumber: start.line + 1,
        startColumn: start.character + 1,
        endLineNumber: end.line + 1,
        endColumn: end.character + 1
    };
}
exports.fromRange = fromRange;
function fromPosition(position) {
    return { lineNumber: position.line + 1, column: position.character + 1 };
}
exports.fromPosition = fromPosition;
function toPosition(position) {
    return new types.Position(position.lineNumber - 1, position.column - 1);
}
exports.toPosition = toPosition;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isDecorationOptions(something) {
    return (typeof something.range !== 'undefined');
}
function isDecorationOptionsArr(something) {
    if (something.length === 0) {
        return true;
    }
    return isDecorationOptions(something[0]) ? true : false;
}
exports.isDecorationOptionsArr = isDecorationOptionsArr;
function fromRangeOrRangeWithMessage(ranges) {
    if (isDecorationOptionsArr(ranges)) {
        return ranges.map(function (r) {
            var hoverMessage;
            if (Array.isArray(r.hoverMessage)) {
                hoverMessage = fromManyMarkdown(r.hoverMessage);
            }
            else if (r.hoverMessage) {
                hoverMessage = fromMarkdown(r.hoverMessage);
            }
            else {
                hoverMessage = undefined;
            }
            return {
                range: fromRange(r.range),
                hoverMessage: hoverMessage,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                renderOptions: r.renderOptions
            };
        });
    }
    else {
        return ranges.map(function (r) {
            return ({
                range: fromRange(r)
            });
        });
    }
}
exports.fromRangeOrRangeWithMessage = fromRangeOrRangeWithMessage;
function fromManyMarkdown(markup) {
    return markup.map(fromMarkdown);
}
exports.fromManyMarkdown = fromManyMarkdown;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isCodeblock(thing) {
    return thing && typeof thing === 'object'
        && typeof thing.language === 'string'
        && typeof thing.value === 'string';
}
function fromMarkdown(markup) {
    if (isCodeblock(markup)) {
        var language = markup.language, value = markup.value;
        return { value: '```' + language + '\n' + value + '\n```\n' };
    }
    else if (markdown_string_1.isMarkdownString(markup)) {
        return markup;
    }
    else if (typeof markup === 'string') {
        return { value: markup };
    }
    else {
        return { value: '' };
    }
}
exports.fromMarkdown = fromMarkdown;
function toMarkdown(value) {
    var ret = new markdown_string_1.MarkdownString(value.value);
    ret.isTrusted = value.isTrusted;
    return ret;
}
exports.toMarkdown = toMarkdown;
function fromDocumentSelector(selector) {
    if (!selector) {
        return undefined;
    }
    else if (Array.isArray(selector)) {
        return selector.map(fromDocumentSelector);
    }
    else if (typeof selector === 'string') {
        return selector;
    }
    else {
        return {
            language: selector.language,
            scheme: selector.scheme,
            pattern: fromGlobPattern(selector.pattern)
        };
    }
}
exports.fromDocumentSelector = fromDocumentSelector;
function fromGlobPattern(pattern) {
    if (typeof pattern === 'string') {
        return pattern;
    }
    if (isRelativePattern(pattern)) {
        return new types.RelativePattern(pattern.base, pattern.pattern);
    }
    return pattern;
}
exports.fromGlobPattern = fromGlobPattern;
function isRelativePattern(obj) {
    var rp = obj;
    return rp && typeof rp.base === 'string' && typeof rp.pattern === 'string';
}
function fromCompletionItemKind(kind) {
    switch (kind) {
        case types.CompletionItemKind.Method: return model.CompletionItemKind.Method;
        case types.CompletionItemKind.Function: return model.CompletionItemKind.Function;
        case types.CompletionItemKind.Constructor: return model.CompletionItemKind.Constructor;
        case types.CompletionItemKind.Field: return model.CompletionItemKind.Field;
        case types.CompletionItemKind.Variable: return model.CompletionItemKind.Variable;
        case types.CompletionItemKind.Class: return model.CompletionItemKind.Class;
        case types.CompletionItemKind.Interface: return model.CompletionItemKind.Interface;
        case types.CompletionItemKind.Struct: return model.CompletionItemKind.Struct;
        case types.CompletionItemKind.Module: return model.CompletionItemKind.Module;
        case types.CompletionItemKind.Property: return model.CompletionItemKind.Property;
        case types.CompletionItemKind.Unit: return model.CompletionItemKind.Unit;
        case types.CompletionItemKind.Value: return model.CompletionItemKind.Value;
        case types.CompletionItemKind.Constant: return model.CompletionItemKind.Constant;
        case types.CompletionItemKind.Enum: return model.CompletionItemKind.Enum;
        case types.CompletionItemKind.EnumMember: return model.CompletionItemKind.EnumMember;
        case types.CompletionItemKind.Keyword: return model.CompletionItemKind.Keyword;
        case types.CompletionItemKind.Snippet: return model.CompletionItemKind.Snippet;
        case types.CompletionItemKind.Text: return model.CompletionItemKind.Text;
        case types.CompletionItemKind.Color: return model.CompletionItemKind.Color;
        case types.CompletionItemKind.File: return model.CompletionItemKind.File;
        case types.CompletionItemKind.Reference: return model.CompletionItemKind.Reference;
        case types.CompletionItemKind.Folder: return model.CompletionItemKind.Folder;
        case types.CompletionItemKind.Event: return model.CompletionItemKind.Event;
        case types.CompletionItemKind.Operator: return model.CompletionItemKind.Operator;
        case types.CompletionItemKind.TypeParameter: return model.CompletionItemKind.TypeParameter;
    }
    return model.CompletionItemKind.Property;
}
exports.fromCompletionItemKind = fromCompletionItemKind;
function toCompletionItemKind(kind) {
    switch (kind) {
        case model.CompletionItemKind.Method: return types.CompletionItemKind.Method;
        case model.CompletionItemKind.Function: return types.CompletionItemKind.Function;
        case model.CompletionItemKind.Constructor: return types.CompletionItemKind.Constructor;
        case model.CompletionItemKind.Field: return types.CompletionItemKind.Field;
        case model.CompletionItemKind.Variable: return types.CompletionItemKind.Variable;
        case model.CompletionItemKind.Class: return types.CompletionItemKind.Class;
        case model.CompletionItemKind.Interface: return types.CompletionItemKind.Interface;
        case model.CompletionItemKind.Struct: return types.CompletionItemKind.Struct;
        case model.CompletionItemKind.Module: return types.CompletionItemKind.Module;
        case model.CompletionItemKind.Property: return types.CompletionItemKind.Property;
        case model.CompletionItemKind.Unit: return types.CompletionItemKind.Unit;
        case model.CompletionItemKind.Value: return types.CompletionItemKind.Value;
        case model.CompletionItemKind.Constant: return types.CompletionItemKind.Constant;
        case model.CompletionItemKind.Enum: return types.CompletionItemKind.Enum;
        case model.CompletionItemKind.EnumMember: return types.CompletionItemKind.EnumMember;
        case model.CompletionItemKind.Keyword: return types.CompletionItemKind.Keyword;
        case model.CompletionItemKind.Snippet: return types.CompletionItemKind.Snippet;
        case model.CompletionItemKind.Text: return types.CompletionItemKind.Text;
        case model.CompletionItemKind.Color: return types.CompletionItemKind.Color;
        case model.CompletionItemKind.File: return types.CompletionItemKind.File;
        case model.CompletionItemKind.Reference: return types.CompletionItemKind.Reference;
        case model.CompletionItemKind.Folder: return types.CompletionItemKind.Folder;
        case model.CompletionItemKind.Event: return types.CompletionItemKind.Event;
        case model.CompletionItemKind.Operator: return types.CompletionItemKind.Operator;
        case model.CompletionItemKind.TypeParameter: return types.CompletionItemKind.TypeParameter;
    }
    return types.CompletionItemKind.Property;
}
exports.toCompletionItemKind = toCompletionItemKind;
function fromTextEdit(edit) {
    return {
        text: edit.newText,
        range: fromRange(edit.range)
    };
}
exports.fromTextEdit = fromTextEdit;
function fromLanguageSelector(selector) {
    if (!selector) {
        return undefined;
    }
    else if (Array.isArray(selector)) {
        return selector.map(fromLanguageSelector);
    }
    else if (typeof selector === 'string') {
        return selector;
    }
    else {
        return {
            language: selector.language,
            scheme: selector.scheme,
            pattern: fromGlobPattern(selector.pattern)
        };
    }
}
exports.fromLanguageSelector = fromLanguageSelector;
function convertDiagnosticToMarkerData(diagnostic) {
    return {
        code: convertCode(diagnostic.code),
        severity: convertSeverity(diagnostic.severity),
        message: diagnostic.message,
        source: diagnostic.source,
        startLineNumber: diagnostic.range.start.line + 1,
        startColumn: diagnostic.range.start.character + 1,
        endLineNumber: diagnostic.range.end.line + 1,
        endColumn: diagnostic.range.end.character + 1,
        relatedInformation: convertRelatedInformation(diagnostic.relatedInformation),
        tags: convertTags(diagnostic.tags)
    };
}
exports.convertDiagnosticToMarkerData = convertDiagnosticToMarkerData;
function convertCode(code) {
    if (typeof code === 'number') {
        return String(code);
    }
    else {
        return code;
    }
}
function convertSeverity(severity) {
    switch (severity) {
        case types.DiagnosticSeverity.Error: return types.MarkerSeverity.Error;
        case types.DiagnosticSeverity.Warning: return types.MarkerSeverity.Warning;
        case types.DiagnosticSeverity.Information: return types.MarkerSeverity.Info;
        case types.DiagnosticSeverity.Hint: return types.MarkerSeverity.Hint;
    }
}
function convertRelatedInformation(diagnosticsRelatedInformation) {
    var e_1, _a;
    if (!diagnosticsRelatedInformation) {
        return undefined;
    }
    var relatedInformation = [];
    try {
        for (var diagnosticsRelatedInformation_1 = __values(diagnosticsRelatedInformation), diagnosticsRelatedInformation_1_1 = diagnosticsRelatedInformation_1.next(); !diagnosticsRelatedInformation_1_1.done; diagnosticsRelatedInformation_1_1 = diagnosticsRelatedInformation_1.next()) {
            var item = diagnosticsRelatedInformation_1_1.value;
            relatedInformation.push({
                resource: item.location.uri.toString(),
                message: item.message,
                startLineNumber: item.location.range.start.line + 1,
                startColumn: item.location.range.start.character + 1,
                endLineNumber: item.location.range.end.line + 1,
                endColumn: item.location.range.end.character + 1
            });
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (diagnosticsRelatedInformation_1_1 && !diagnosticsRelatedInformation_1_1.done && (_a = diagnosticsRelatedInformation_1.return)) _a.call(diagnosticsRelatedInformation_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return relatedInformation;
}
function convertTags(tags) {
    var e_2, _a;
    if (!tags) {
        return undefined;
    }
    var markerTags = [];
    try {
        for (var tags_1 = __values(tags), tags_1_1 = tags_1.next(); !tags_1_1.done; tags_1_1 = tags_1.next()) {
            var tag = tags_1_1.value;
            switch (tag) {
                case types.DiagnosticTag.Unnecessary: markerTags.push(types.MarkerTag.Unnecessary);
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (tags_1_1 && !tags_1_1.done && (_a = tags_1.return)) _a.call(tags_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return markerTags;
}
function fromHover(hover) {
    return {
        range: fromRange(hover.range),
        contents: fromManyMarkdown(hover.contents)
    };
}
exports.fromHover = fromHover;
function fromLocation(location) {
    return {
        uri: location.uri,
        range: fromRange(location.range)
    };
}
exports.fromLocation = fromLocation;
function fromDefinitionLink(definitionLink) {
    return {
        uri: definitionLink.targetUri,
        range: fromRange(definitionLink.targetRange),
        origin: definitionLink.originSelectionRange ? fromRange(definitionLink.originSelectionRange) : undefined,
        selectionRange: definitionLink.targetSelectionRange ? fromRange(definitionLink.targetSelectionRange) : undefined
    };
}
exports.fromDefinitionLink = fromDefinitionLink;
function fromDocumentLink(definitionLink) {
    return {
        range: fromRange(definitionLink.range),
        url: definitionLink.target && definitionLink.target.toString()
    };
}
exports.fromDocumentLink = fromDocumentLink;
function fromDocumentHighlightKind(kind) {
    switch (kind) {
        case types.DocumentHighlightKind.Text: return model.DocumentHighlightKind.Text;
        case types.DocumentHighlightKind.Read: return model.DocumentHighlightKind.Read;
        case types.DocumentHighlightKind.Write: return model.DocumentHighlightKind.Write;
    }
    return model.DocumentHighlightKind.Text;
}
exports.fromDocumentHighlightKind = fromDocumentHighlightKind;
function fromDocumentHighlight(documentHighlight) {
    return {
        range: fromRange(documentHighlight.range),
        kind: fromDocumentHighlightKind(documentHighlight.kind)
    };
}
exports.fromDocumentHighlight = fromDocumentHighlight;
var ParameterInformation;
(function (ParameterInformation) {
    function from(info) {
        return {
            label: info.label,
            documentation: info.documentation ? fromMarkdown(info.documentation) : undefined
        };
    }
    ParameterInformation.from = from;
    function to(info) {
        return {
            label: info.label,
            documentation: markdown_string_1.isMarkdownString(info.documentation) ? toMarkdown(info.documentation) : info.documentation
        };
    }
    ParameterInformation.to = to;
})(ParameterInformation = exports.ParameterInformation || (exports.ParameterInformation = {}));
var SignatureInformation;
(function (SignatureInformation) {
    function from(info) {
        return {
            label: info.label,
            documentation: info.documentation ? fromMarkdown(info.documentation) : undefined,
            parameters: info.parameters && info.parameters.map(ParameterInformation.from)
        };
    }
    SignatureInformation.from = from;
    function to(info) {
        return {
            label: info.label,
            documentation: markdown_string_1.isMarkdownString(info.documentation) ? toMarkdown(info.documentation) : info.documentation,
            parameters: info.parameters && info.parameters.map(ParameterInformation.to)
        };
    }
    SignatureInformation.to = to;
})(SignatureInformation = exports.SignatureInformation || (exports.SignatureInformation = {}));
var SignatureHelp;
(function (SignatureHelp) {
    function from(id, help) {
        return {
            id: id,
            activeSignature: help.activeSignature,
            activeParameter: help.activeParameter,
            signatures: help.signatures && help.signatures.map(SignatureInformation.from)
        };
    }
    SignatureHelp.from = from;
    function to(help) {
        return {
            activeSignature: help.activeSignature,
            activeParameter: help.activeParameter,
            signatures: help.signatures && help.signatures.map(SignatureInformation.to)
        };
    }
    SignatureHelp.to = to;
})(SignatureHelp = exports.SignatureHelp || (exports.SignatureHelp = {}));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function fromWorkspaceEdit(value, documents) {
    var e_3, _a;
    var result = {
        edits: []
    };
    try {
        for (var _b = __values(value._allEntries()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var entry = _c.value;
            var _d = __read(entry, 2), uri = _d[0], uriOrEdits = _d[1];
            if (Array.isArray(uriOrEdits)) {
                // text edits
                var doc = documents ? documents.getDocument(uri.toString()) : undefined;
                result.edits.push({ resource: uri, modelVersionId: doc && doc.version, edits: uriOrEdits.map(fromTextEdit) });
            }
            else {
                // resource edits
                result.edits.push({ oldUri: uri, newUri: uriOrEdits, options: entry[2] });
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return result;
}
exports.fromWorkspaceEdit = fromWorkspaceEdit;
var SymbolKind;
(function (SymbolKind) {
    var fromMapping = Object.create(null);
    fromMapping[model.SymbolKind.File] = model.SymbolKind.File;
    fromMapping[model.SymbolKind.Module] = model.SymbolKind.Module;
    fromMapping[model.SymbolKind.Namespace] = model.SymbolKind.Namespace;
    fromMapping[model.SymbolKind.Package] = model.SymbolKind.Package;
    fromMapping[model.SymbolKind.Class] = model.SymbolKind.Class;
    fromMapping[model.SymbolKind.Method] = model.SymbolKind.Method;
    fromMapping[model.SymbolKind.Property] = model.SymbolKind.Property;
    fromMapping[model.SymbolKind.Field] = model.SymbolKind.Field;
    fromMapping[model.SymbolKind.Constructor] = model.SymbolKind.Constructor;
    fromMapping[model.SymbolKind.Enum] = model.SymbolKind.Enum;
    fromMapping[model.SymbolKind.Interface] = model.SymbolKind.Interface;
    fromMapping[model.SymbolKind.Function] = model.SymbolKind.Function;
    fromMapping[model.SymbolKind.Variable] = model.SymbolKind.Variable;
    fromMapping[model.SymbolKind.Constant] = model.SymbolKind.Constant;
    fromMapping[model.SymbolKind.String] = model.SymbolKind.String;
    fromMapping[model.SymbolKind.Number] = model.SymbolKind.Number;
    fromMapping[model.SymbolKind.Boolean] = model.SymbolKind.Boolean;
    fromMapping[model.SymbolKind.Array] = model.SymbolKind.Array;
    fromMapping[model.SymbolKind.Object] = model.SymbolKind.Object;
    fromMapping[model.SymbolKind.Key] = model.SymbolKind.Key;
    fromMapping[model.SymbolKind.Null] = model.SymbolKind.Null;
    fromMapping[model.SymbolKind.EnumMember] = model.SymbolKind.EnumMember;
    fromMapping[model.SymbolKind.Struct] = model.SymbolKind.Struct;
    fromMapping[model.SymbolKind.Event] = model.SymbolKind.Event;
    fromMapping[model.SymbolKind.Operator] = model.SymbolKind.Operator;
    fromMapping[model.SymbolKind.TypeParameter] = model.SymbolKind.TypeParameter;
    function fromSymbolKind(kind) {
        return fromMapping[kind] || model.SymbolKind.Property;
    }
    SymbolKind.fromSymbolKind = fromSymbolKind;
    function toSymbolKind(kind) {
        for (var k in fromMapping) {
            if (fromMapping[k] === kind) {
                return Number(k);
            }
        }
        return model.SymbolKind.Property;
    }
    SymbolKind.toSymbolKind = toSymbolKind;
})(SymbolKind = exports.SymbolKind || (exports.SymbolKind = {}));
function fromDocumentSymbol(info) {
    var result = {
        name: info.name,
        detail: info.detail,
        range: fromRange(info.range),
        selectionRange: fromRange(info.selectionRange),
        kind: SymbolKind.fromSymbolKind(info.kind)
    };
    if (info.children) {
        result.children = info.children.map(fromDocumentSymbol);
    }
    return result;
}
exports.fromDocumentSymbol = fromDocumentSymbol;
function toDocumentSymbol(symbol) {
    return {
        name: symbol.name,
        detail: symbol.detail,
        range: toRange(symbol.range),
        selectionRange: toRange(symbol.selectionRange),
        children: symbol.children ? symbol.children.map(toDocumentSymbol) : [],
        kind: SymbolKind.toSymbolKind(symbol.kind)
    };
}
exports.toDocumentSymbol = toDocumentSymbol;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isModelLocation(thing) {
    if (!thing) {
        return false;
    }
    return isModelRange(thing.range) &&
        isUriComponents(thing.uri);
}
exports.isModelLocation = isModelLocation;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isModelRange(thing) {
    if (!thing) {
        return false;
    }
    return (('startLineNumber' in thing) && typeof thing.startLineNumber === 'number') &&
        (('startColumn' in thing) && typeof thing.startColumn === 'number') &&
        (('endLineNumber' in thing) && typeof thing.endLineNumber === 'number') &&
        (('endColumn' in thing) && typeof thing.endColumn === 'number');
}
exports.isModelRange = isModelRange;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isUriComponents(thing) {
    if (!thing) {
        return false;
    }
    return (('scheme' in thing) && typeof thing.scheme === 'string') &&
        (('path' in thing) && typeof thing.path === 'string') &&
        (('query' in thing) && typeof thing.query === 'string') &&
        (('fragment' in thing) && typeof thing.fragment === 'string');
}
exports.isUriComponents = isUriComponents;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isModelCallHierarchyItem(thing) {
    if (!thing) {
        return false;
    }
    return false;
}
exports.isModelCallHierarchyItem = isModelCallHierarchyItem;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isModelCallHierarchyIncomingCall(thing) {
    if (!thing) {
        return false;
    }
    return false;
}
exports.isModelCallHierarchyIncomingCall = isModelCallHierarchyIncomingCall;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isModelCallHierarchyOutgoingCall(thing) {
    if (!thing) {
        return false;
    }
    return false;
}
exports.isModelCallHierarchyOutgoingCall = isModelCallHierarchyOutgoingCall;
function toLocation(value) {
    return new types.Location(vscode_uri_1.default.revive(value.uri), toRange(value.range));
}
exports.toLocation = toLocation;
function fromCallHierarchyItem(item) {
    return {
        kind: SymbolKind.fromSymbolKind(item.kind),
        name: item.name,
        detail: item.detail,
        uri: item.uri,
        range: fromRange(item.range),
        selectionRange: fromRange(item.selectionRange)
    };
}
exports.fromCallHierarchyItem = fromCallHierarchyItem;
function toCallHierarchyItem(value) {
    return new types.CallHierarchyItem(SymbolKind.toSymbolKind(value.kind), value.name, value.detail ? value.detail : '', vscode_uri_1.default.revive(value.uri), toRange(value.range), toRange(value.selectionRange));
}
exports.toCallHierarchyItem = toCallHierarchyItem;
function toCallHierarchyIncomingCall(value) {
    return new types.CallHierarchyIncomingCall(toCallHierarchyItem(value.from), value.fromRanges && value.fromRanges.map(toRange));
}
exports.toCallHierarchyIncomingCall = toCallHierarchyIncomingCall;
function toCallHierarchyOutgoingCall(value) {
    return new types.CallHierarchyOutgoingCall(toCallHierarchyItem(value.to), value.fromRanges && value.fromRanges.map(toRange));
}
exports.toCallHierarchyOutgoingCall = toCallHierarchyOutgoingCall;
function toWorkspaceFolder(folder) {
    return {
        uri: vscode_uri_1.default.revive(folder.uri),
        name: folder.name,
        index: folder.index
    };
}
exports.toWorkspaceFolder = toWorkspaceFolder;
function fromTask(task) {
    if (!task) {
        return undefined;
    }
    var taskDto = {};
    taskDto.label = task.name;
    taskDto.source = task.source;
    taskDto.scope = typeof task.scope === 'object' ? task.scope.uri.toString() : undefined;
    var taskDefinition = task.definition;
    if (!taskDefinition) {
        return taskDto;
    }
    taskDto.type = taskDefinition.type;
    var type = taskDefinition.type, properties = __rest(taskDefinition, ["type"]);
    for (var key in properties) {
        if (properties.hasOwnProperty(key)) {
            taskDto[key] = properties[key];
        }
    }
    var execution = task.execution;
    if (!execution) {
        return taskDto;
    }
    if (taskDefinition.type === 'shell' || types.ShellExecution.is(execution)) {
        return fromShellExecution(execution, taskDto);
    }
    if (taskDefinition.type === 'process' || types.ProcessExecution.is(execution)) {
        return fromProcessExecution(execution, taskDto);
    }
    return taskDto;
}
exports.fromTask = fromTask;
function toTask(taskDto) {
    if (!taskDto) {
        throw new Error('Task should be provided for converting');
    }
    var type = taskDto.type, label = taskDto.label, source = taskDto.source, scope = taskDto.scope, command = taskDto.command, args = taskDto.args, options = taskDto.options, windows = taskDto.windows, properties = __rest(taskDto, ["type", "label", "source", "scope", "command", "args", "options", "windows"]);
    var result = {};
    result.name = label;
    result.source = source;
    if (scope) {
        var uri = vscode_uri_1.default.parse(scope);
        result.scope = {
            uri: uri,
            name: uri.toString(),
            index: 0
        };
    }
    var taskType = type;
    var taskDefinition = {
        type: taskType
    };
    result.definition = taskDefinition;
    if (taskType === 'process') {
        result.execution = getProcessExecution(taskDto);
    }
    var execution = { command: command, args: args, options: options };
    if (taskType === 'shell' || types.ShellExecution.is(execution)) {
        result.execution = getShellExecution(taskDto);
    }
    if (!properties) {
        return result;
    }
    for (var key in properties) {
        if (properties.hasOwnProperty(key)) {
            taskDefinition[key] = properties[key];
        }
    }
    return result;
}
exports.toTask = toTask;
function fromProcessExecution(execution, taskDto) {
    taskDto.command = execution.process;
    taskDto.args = execution.args;
    var options = execution.options;
    if (options) {
        taskDto.options = options;
    }
    return taskDto;
}
exports.fromProcessExecution = fromProcessExecution;
function fromShellExecution(execution, taskDto) {
    var options = execution.options;
    if (options) {
        taskDto.options = getShellExecutionOptions(options);
    }
    var commandLine = execution.commandLine;
    if (commandLine) {
        taskDto.command = commandLine;
        return taskDto;
    }
    var command = execution.command;
    if (typeof command === 'string') {
        taskDto.command = command;
        taskDto.args = getShellArgs(execution.args);
        return taskDto;
    }
    else {
        throw new Error('Converting ShellQuotedString command is not implemented');
    }
}
exports.fromShellExecution = fromShellExecution;
function getProcessExecution(taskDto) {
    return new types.ProcessExecution(taskDto.command, taskDto.args || [], taskDto.options || {});
}
exports.getProcessExecution = getProcessExecution;
function getShellExecution(taskDto) {
    if (taskDto.command && Array.isArray(taskDto.args) && taskDto.args.length !== 0) {
        return new types.ShellExecution(taskDto.command, taskDto.args, taskDto.options || {});
    }
    return new types.ShellExecution(taskDto.command || taskDto.commandLine, taskDto.options || {});
}
exports.getShellExecution = getShellExecution;
function getShellArgs(args) {
    if (!args || args.length === 0) {
        return [];
    }
    var element = args[0];
    if (typeof element === 'string') {
        return args;
    }
    var result = [];
    var shellQuotedArgs = args;
    shellQuotedArgs.forEach(function (arg) {
        result.push(arg.value);
    });
    return result;
}
exports.getShellArgs = getShellArgs;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getShellExecutionOptions(options) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var result = {};
    var env = options.env;
    if (env) {
        result['env'] = env;
    }
    var executable = options.executable;
    if (executable) {
        result['executable'] = executable;
    }
    var shellQuoting = options.shellQuoting;
    if (shellQuoting) {
        result['shellQuoting'] = shellQuoting;
    }
    var shellArgs = options.shellArgs;
    if (shellArgs) {
        result['shellArgs'] = shellArgs;
    }
    var cwd = options.cwd;
    if (cwd) {
        Object.assign(result, { cwd: cwd });
    }
    return result;
}
exports.getShellExecutionOptions = getShellExecutionOptions;
function fromSymbolInformation(symbolInformation) {
    if (!symbolInformation) {
        return undefined;
    }
    if (symbolInformation.location && symbolInformation.location.range) {
        var p1 = vscode_languageserver_types_1.Position.create(symbolInformation.location.range.start.line, symbolInformation.location.range.start.character);
        var p2 = vscode_languageserver_types_1.Position.create(symbolInformation.location.range.end.line, symbolInformation.location.range.end.character);
        return vscode_languageserver_types_1.SymbolInformation.create(symbolInformation.name, symbolInformation.kind++, vscode_languageserver_types_1.Range.create(p1, p2), symbolInformation.location.uri.toString(), symbolInformation.containerName);
    }
    return {
        name: symbolInformation.name,
        containerName: symbolInformation.containerName,
        kind: symbolInformation.kind++,
        location: {
            uri: symbolInformation.location.uri.toString()
        }
    };
}
exports.fromSymbolInformation = fromSymbolInformation;
function toSymbolInformation(symbolInformation) {
    if (!symbolInformation) {
        return undefined;
    }
    return {
        name: symbolInformation.name,
        containerName: symbolInformation.containerName,
        kind: symbolInformation.kind,
        location: {
            uri: vscode_uri_1.default.parse(symbolInformation.location.uri),
            range: symbolInformation.location.range
        }
    };
}
exports.toSymbolInformation = toSymbolInformation;
function fromFoldingRange(foldingRange) {
    var range = {
        start: foldingRange.start + 1,
        end: foldingRange.end + 1
    };
    if (foldingRange.kind) {
        range.kind = fromFoldingRangeKind(foldingRange.kind);
    }
    return range;
}
exports.fromFoldingRange = fromFoldingRange;
function fromFoldingRangeKind(kind) {
    if (kind) {
        switch (kind) {
            case types.FoldingRangeKind.Comment:
                return model.FoldingRangeKind.Comment;
            case types.FoldingRangeKind.Imports:
                return model.FoldingRangeKind.Imports;
            case types.FoldingRangeKind.Region:
                return model.FoldingRangeKind.Region;
        }
    }
    return undefined;
}
exports.fromFoldingRangeKind = fromFoldingRangeKind;
function fromColor(color) {
    return [color.red, color.green, color.blue, color.alpha];
}
exports.fromColor = fromColor;
function toColor(color) {
    return new types.Color(color[0], color[1], color[2], color[3]);
}
exports.toColor = toColor;
function fromColorPresentation(colorPresentation) {
    return {
        label: colorPresentation.label,
        textEdit: colorPresentation.textEdit ? fromTextEdit(colorPresentation.textEdit) : undefined,
        additionalTextEdits: colorPresentation.additionalTextEdits ? colorPresentation.additionalTextEdits.map(function (value) { return fromTextEdit(value); }) : undefined
    };
}
exports.fromColorPresentation = fromColorPresentation;
function quickPickItemToPickOpenItem(items) {
    var pickItems = [];
    for (var handle = 0; handle < items.length; handle++) {
        var item = items[handle];
        var label = void 0;
        var description = void 0;
        var detail = void 0;
        var picked = void 0;
        var groupLabel = void 0;
        var showBorder = void 0;
        if (typeof item === 'string') {
            label = item;
        }
        else {
            (label = item.label, description = item.description, detail = item.detail, picked = item.picked, groupLabel = item.groupLabel, showBorder = item.showBorder);
        }
        pickItems.push({
            label: label,
            description: description,
            handle: handle,
            detail: detail,
            picked: picked,
            groupLabel: groupLabel,
            showBorder: showBorder
        });
    }
    return pickItems;
}
exports.quickPickItemToPickOpenItem = quickPickItemToPickOpenItem;
var DecorationRenderOptions;
(function (DecorationRenderOptions) {
    function from(options) {
        return {
            isWholeLine: options.isWholeLine,
            rangeBehavior: options.rangeBehavior ? DecorationRangeBehavior.from(options.rangeBehavior) : undefined,
            overviewRulerLane: options.overviewRulerLane,
            light: options.light ? ThemableDecorationRenderOptions.from(options.light) : undefined,
            dark: options.dark ? ThemableDecorationRenderOptions.from(options.dark) : undefined,
            backgroundColor: options.backgroundColor,
            outline: options.outline,
            outlineColor: options.outlineColor,
            outlineStyle: options.outlineStyle,
            outlineWidth: options.outlineWidth,
            border: options.border,
            borderColor: options.borderColor,
            borderRadius: options.borderRadius,
            borderSpacing: options.borderSpacing,
            borderStyle: options.borderStyle,
            borderWidth: options.borderWidth,
            fontStyle: options.fontStyle,
            fontWeight: options.fontWeight,
            textDecoration: options.textDecoration,
            cursor: options.cursor,
            color: options.color,
            opacity: options.opacity,
            letterSpacing: options.letterSpacing,
            gutterIconPath: options.gutterIconPath ? pathOrURIToURI(options.gutterIconPath) : undefined,
            gutterIconSize: options.gutterIconSize,
            overviewRulerColor: options.overviewRulerColor,
            before: options.before ? ThemableDecorationAttachmentRenderOptions.from(options.before) : undefined,
            after: options.after ? ThemableDecorationAttachmentRenderOptions.from(options.after) : undefined,
        };
    }
    DecorationRenderOptions.from = from;
})(DecorationRenderOptions = exports.DecorationRenderOptions || (exports.DecorationRenderOptions = {}));
var DecorationRangeBehavior;
(function (DecorationRangeBehavior) {
    function from(value) {
        if (typeof value === 'undefined') {
            return value;
        }
        switch (value) {
            case types.DecorationRangeBehavior.OpenOpen:
                return rpc.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges;
            case types.DecorationRangeBehavior.ClosedClosed:
                return rpc.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges;
            case types.DecorationRangeBehavior.OpenClosed:
                return rpc.TrackedRangeStickiness.GrowsOnlyWhenTypingBefore;
            case types.DecorationRangeBehavior.ClosedOpen:
                return rpc.TrackedRangeStickiness.GrowsOnlyWhenTypingAfter;
        }
    }
    DecorationRangeBehavior.from = from;
})(DecorationRangeBehavior = exports.DecorationRangeBehavior || (exports.DecorationRangeBehavior = {}));
var ThemableDecorationRenderOptions;
(function (ThemableDecorationRenderOptions) {
    function from(options) {
        if (typeof options === 'undefined') {
            return options;
        }
        return {
            backgroundColor: options.backgroundColor,
            outline: options.outline,
            outlineColor: options.outlineColor,
            outlineStyle: options.outlineStyle,
            outlineWidth: options.outlineWidth,
            border: options.border,
            borderColor: options.borderColor,
            borderRadius: options.borderRadius,
            borderSpacing: options.borderSpacing,
            borderStyle: options.borderStyle,
            borderWidth: options.borderWidth,
            fontStyle: options.fontStyle,
            fontWeight: options.fontWeight,
            textDecoration: options.textDecoration,
            cursor: options.cursor,
            color: options.color,
            opacity: options.opacity,
            letterSpacing: options.letterSpacing,
            gutterIconPath: options.gutterIconPath ? pathOrURIToURI(options.gutterIconPath) : undefined,
            gutterIconSize: options.gutterIconSize,
            overviewRulerColor: options.overviewRulerColor,
            before: options.before ? ThemableDecorationAttachmentRenderOptions.from(options.before) : undefined,
            after: options.after ? ThemableDecorationAttachmentRenderOptions.from(options.after) : undefined,
        };
    }
    ThemableDecorationRenderOptions.from = from;
})(ThemableDecorationRenderOptions = exports.ThemableDecorationRenderOptions || (exports.ThemableDecorationRenderOptions = {}));
var ThemableDecorationAttachmentRenderOptions;
(function (ThemableDecorationAttachmentRenderOptions) {
    function from(options) {
        if (typeof options === 'undefined') {
            return options;
        }
        return {
            contentText: options.contentText,
            contentIconPath: options.contentIconPath ? pathOrURIToURI(options.contentIconPath) : undefined,
            border: options.border,
            borderColor: options.borderColor,
            fontStyle: options.fontStyle,
            fontWeight: options.fontWeight,
            textDecoration: options.textDecoration,
            color: options.color,
            backgroundColor: options.backgroundColor,
            margin: options.margin,
            width: options.width,
            height: options.height,
        };
    }
    ThemableDecorationAttachmentRenderOptions.from = from;
})(ThemableDecorationAttachmentRenderOptions = exports.ThemableDecorationAttachmentRenderOptions || (exports.ThemableDecorationAttachmentRenderOptions = {}));
function pathOrURIToURI(value) {
    if (typeof value === 'undefined') {
        return value;
    }
    if (typeof value === 'string') {
        return vscode_uri_1.default.file(value);
    }
    else {
        return value;
    }
}
exports.pathOrURIToURI = pathOrURIToURI;
function pluginToPluginInfo(plugin) {
    return {
        id: plugin.model.id,
        name: plugin.model.name
    };
}
exports.pluginToPluginInfo = pluginToPluginInfo;


/***/ }),

/***/ "../node_modules/@theia/plugin-ext/lib/plugin/types-impl.js":
/*!******************************************************************!*\
  !*** ../node_modules/@theia/plugin-ext/lib/plugin/types-impl.js ***!
  \******************************************************************/
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
// copied from https://github.com/microsoft/vscode/blob/1.37.0/src/vs/workbench/api/common/extHostTypes.ts
/*---------------------------------------------------------------------------------------------
*  Copyright (c) Microsoft Corporation. All rights reserved.
*  Licensed under the MIT License. See License.txt in the project root for license information.
*--------------------------------------------------------------------------------------------*/
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
/* eslint-disable no-null/no-null */
var uuid_1 = __webpack_require__(/*! @phosphor/coreutils/lib/uuid */ "../node_modules/@phosphor/coreutils/lib/uuid.js");
var errors_1 = __webpack_require__(/*! ../common/errors */ "../node_modules/@theia/plugin-ext/lib/common/errors.js");
var crypto = __webpack_require__(/*! crypto */ "crypto");
var vscode_uri_1 = __webpack_require__(/*! vscode-uri */ "../node_modules/vscode-uri/lib/esm/index.js");
var paths_util_1 = __webpack_require__(/*! ../common/paths-util */ "../node_modules/@theia/plugin-ext/lib/common/paths-util.js");
var strings_1 = __webpack_require__(/*! @theia/languages/lib/common/language-selector/strings */ "../node_modules/@theia/languages/lib/common/language-selector/strings.js");
var markdown_string_1 = __webpack_require__(/*! ./markdown-string */ "../node_modules/@theia/plugin-ext/lib/plugin/markdown-string.js");
var plugin_api_rpc_model_1 = __webpack_require__(/*! ../common/plugin-api-rpc-model */ "../node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc-model.js");
var Disposable = /** @class */ (function () {
    function Disposable(func) {
        this.disposable = func;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Disposable.from = function () {
        var disposables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            disposables[_i] = arguments[_i];
        }
        return new Disposable(function () {
            var e_1, _a;
            if (disposables) {
                try {
                    for (var disposables_1 = __values(disposables), disposables_1_1 = disposables_1.next(); !disposables_1_1.done; disposables_1_1 = disposables_1.next()) {
                        var disposable = disposables_1_1.value;
                        if (disposable && typeof disposable.dispose === 'function') {
                            disposable.dispose();
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (disposables_1_1 && !disposables_1_1.done && (_a = disposables_1.return)) _a.call(disposables_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
    };
    /**
     * Dispose this object.
     */
    Disposable.prototype.dispose = function () {
        if (this.disposable) {
            this.disposable();
            this.disposable = undefined;
        }
    };
    Disposable.create = function (func) {
        return new Disposable(func);
    };
    return Disposable;
}());
exports.Disposable = Disposable;
var StatusBarAlignment;
(function (StatusBarAlignment) {
    StatusBarAlignment[StatusBarAlignment["Left"] = 1] = "Left";
    StatusBarAlignment[StatusBarAlignment["Right"] = 2] = "Right";
})(StatusBarAlignment = exports.StatusBarAlignment || (exports.StatusBarAlignment = {}));
var TextEditorLineNumbersStyle;
(function (TextEditorLineNumbersStyle) {
    TextEditorLineNumbersStyle[TextEditorLineNumbersStyle["Off"] = 0] = "Off";
    TextEditorLineNumbersStyle[TextEditorLineNumbersStyle["On"] = 1] = "On";
    TextEditorLineNumbersStyle[TextEditorLineNumbersStyle["Relative"] = 2] = "Relative";
})(TextEditorLineNumbersStyle = exports.TextEditorLineNumbersStyle || (exports.TextEditorLineNumbersStyle = {}));
/**
 * Denotes a column in the editor window.
 * Columns are used to show editors side by side.
 */
var ViewColumn;
(function (ViewColumn) {
    ViewColumn[ViewColumn["Active"] = -1] = "Active";
    ViewColumn[ViewColumn["Beside"] = -2] = "Beside";
    ViewColumn[ViewColumn["One"] = 1] = "One";
    ViewColumn[ViewColumn["Two"] = 2] = "Two";
    ViewColumn[ViewColumn["Three"] = 3] = "Three";
    ViewColumn[ViewColumn["Four"] = 4] = "Four";
    ViewColumn[ViewColumn["Five"] = 5] = "Five";
    ViewColumn[ViewColumn["Six"] = 6] = "Six";
    ViewColumn[ViewColumn["Seven"] = 7] = "Seven";
    ViewColumn[ViewColumn["Eight"] = 8] = "Eight";
    ViewColumn[ViewColumn["Nine"] = 9] = "Nine";
})(ViewColumn = exports.ViewColumn || (exports.ViewColumn = {}));
/**
 * Represents sources that can cause `window.onDidChangeEditorSelection`
 */
var TextEditorSelectionChangeKind;
(function (TextEditorSelectionChangeKind) {
    TextEditorSelectionChangeKind[TextEditorSelectionChangeKind["Keyboard"] = 1] = "Keyboard";
    TextEditorSelectionChangeKind[TextEditorSelectionChangeKind["Mouse"] = 2] = "Mouse";
    TextEditorSelectionChangeKind[TextEditorSelectionChangeKind["Command"] = 3] = "Command";
})(TextEditorSelectionChangeKind = exports.TextEditorSelectionChangeKind || (exports.TextEditorSelectionChangeKind = {}));
(function (TextEditorSelectionChangeKind) {
    function fromValue(s) {
        switch (s) {
            case 'keyboard': return TextEditorSelectionChangeKind.Keyboard;
            case 'mouse': return TextEditorSelectionChangeKind.Mouse;
            case 'api': return TextEditorSelectionChangeKind.Command;
        }
        return undefined;
    }
    TextEditorSelectionChangeKind.fromValue = fromValue;
})(TextEditorSelectionChangeKind = exports.TextEditorSelectionChangeKind || (exports.TextEditorSelectionChangeKind = {}));
var Position = /** @class */ (function () {
    function Position(line, char) {
        if (line < 0) {
            throw new Error('line number cannot be negative');
        }
        if (char < 0) {
            throw new Error('char number cannot be negative');
        }
        this._line = line;
        this._character = char;
    }
    Object.defineProperty(Position.prototype, "line", {
        get: function () {
            return this._line;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Position.prototype, "character", {
        get: function () {
            return this._character;
        },
        enumerable: true,
        configurable: true
    });
    Position.prototype.isBefore = function (other) {
        if (this._line < other._line) {
            return true;
        }
        if (other._line < this._line) {
            return false;
        }
        return this._character < other._character;
    };
    Position.prototype.isBeforeOrEqual = function (other) {
        if (this._line < other._line) {
            return true;
        }
        if (other._line < this._line) {
            return false;
        }
        return this._character <= other._character;
    };
    Position.prototype.isAfter = function (other) {
        return !this.isBeforeOrEqual(other);
    };
    Position.prototype.isAfterOrEqual = function (other) {
        return !this.isBefore(other);
    };
    Position.prototype.isEqual = function (other) {
        return this._line === other._line && this._character === other._character;
    };
    Position.prototype.compareTo = function (other) {
        if (this._line < other._line) {
            return -1;
        }
        else if (this._line > other.line) {
            return 1;
        }
        else {
            // equal line
            if (this._character < other._character) {
                return -1;
            }
            else if (this._character > other._character) {
                return 1;
            }
            else {
                // equal line and character
                return 0;
            }
        }
    };
    Position.prototype.translate = function (lineDeltaOrChange, characterDelta) {
        if (characterDelta === void 0) { characterDelta = 0; }
        if (lineDeltaOrChange === null || characterDelta === null) {
            throw errors_1.illegalArgument();
        }
        var lineDelta;
        if (typeof lineDeltaOrChange === 'undefined') {
            lineDelta = 0;
        }
        else if (typeof lineDeltaOrChange === 'number') {
            lineDelta = lineDeltaOrChange;
        }
        else {
            lineDelta = typeof lineDeltaOrChange.lineDelta === 'number' ? lineDeltaOrChange.lineDelta : 0;
            characterDelta = typeof lineDeltaOrChange.characterDelta === 'number' ? lineDeltaOrChange.characterDelta : 0;
        }
        if (lineDelta === 0 && characterDelta === 0) {
            return this;
        }
        return new Position(this.line + lineDelta, this.character + characterDelta);
    };
    Position.prototype.with = function (lineOrChange, character) {
        if (character === void 0) { character = this.character; }
        if (lineOrChange === null || character === null) {
            throw errors_1.illegalArgument();
        }
        var line;
        if (typeof lineOrChange === 'undefined') {
            line = this.line;
        }
        else if (typeof lineOrChange === 'number') {
            line = lineOrChange;
        }
        else {
            line = typeof lineOrChange.line === 'number' ? lineOrChange.line : this.line;
            character = typeof lineOrChange.character === 'number' ? lineOrChange.character : this.character;
        }
        if (line === this.line && character === this.character) {
            return this;
        }
        return new Position(line, character);
    };
    Position.Min = function () {
        var e_2, _a;
        var positions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            positions[_i] = arguments[_i];
        }
        var result = positions.pop();
        try {
            for (var positions_1 = __values(positions), positions_1_1 = positions_1.next(); !positions_1_1.done; positions_1_1 = positions_1.next()) {
                var p = positions_1_1.value;
                if (p.isBefore(result)) {
                    result = p;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (positions_1_1 && !positions_1_1.done && (_a = positions_1.return)) _a.call(positions_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return result;
    };
    Position.Max = function () {
        var e_3, _a;
        var positions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            positions[_i] = arguments[_i];
        }
        var result = positions.pop();
        try {
            for (var positions_2 = __values(positions), positions_2_1 = positions_2.next(); !positions_2_1.done; positions_2_1 = positions_2.next()) {
                var p = positions_2_1.value;
                if (p.isAfter(result)) {
                    result = p;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (positions_2_1 && !positions_2_1.done && (_a = positions_2.return)) _a.call(positions_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return result;
    };
    Position.isPosition = function (other) {
        if (!other) {
            return false;
        }
        if (other instanceof Position) {
            return true;
        }
        var _a = other, line = _a.line, character = _a.character;
        if (typeof line === 'number' && typeof character === 'number') {
            return true;
        }
        return false;
    };
    return Position;
}());
exports.Position = Position;
var Range = /** @class */ (function () {
    function Range(startLineOrStart, startColumnOrEnd, endLine, endColumn) {
        var start = undefined;
        var end = undefined;
        if (typeof startLineOrStart === 'number' && typeof startColumnOrEnd === 'number' && typeof endLine === 'number' && typeof endColumn === 'number') {
            start = new Position(startLineOrStart, startColumnOrEnd);
            end = new Position(endLine, endColumn);
        }
        else if (startLineOrStart instanceof Position && startColumnOrEnd instanceof Position) {
            start = startLineOrStart;
            end = startColumnOrEnd;
        }
        if (!start || !end) {
            throw new Error('Invalid arguments');
        }
        if (start.isBefore(end)) {
            this._start = start;
            this._end = end;
        }
        else {
            this._start = end;
            this._end = start;
        }
    }
    Object.defineProperty(Range.prototype, "start", {
        get: function () {
            return this._start;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "end", {
        get: function () {
            return this._end;
        },
        enumerable: true,
        configurable: true
    });
    Range.prototype.contains = function (positionOrRange) {
        if (positionOrRange instanceof Range) {
            return this.contains(positionOrRange._start)
                && this.contains(positionOrRange._end);
        }
        else if (positionOrRange instanceof Position) {
            if (positionOrRange.isBefore(this._start)) {
                return false;
            }
            if (this._end.isBefore(positionOrRange)) {
                return false;
            }
            return true;
        }
        return false;
    };
    Range.prototype.isEqual = function (other) {
        return this._start.isEqual(other._start) && this._end.isEqual(other._end);
    };
    Range.prototype.intersection = function (other) {
        var start = Position.Max(other.start, this._start);
        var end = Position.Min(other.end, this._end);
        if (start.isAfter(end)) {
            // this happens when there is no overlap:
            // |-----|
            //          |----|
            return undefined;
        }
        return new Range(start, end);
    };
    Range.prototype.union = function (other) {
        if (this.contains(other)) {
            return this;
        }
        else if (other.contains(this)) {
            return other;
        }
        var start = Position.Min(other.start, this._start);
        var end = Position.Max(other.end, this.end);
        return new Range(start, end);
    };
    Object.defineProperty(Range.prototype, "isEmpty", {
        get: function () {
            return this._start.isEqual(this._end);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "isSingleLine", {
        get: function () {
            return this._start.line === this._end.line;
        },
        enumerable: true,
        configurable: true
    });
    Range.prototype.with = function (startOrChange, end) {
        if (end === void 0) { end = this.end; }
        if (startOrChange === null || end === null) {
            throw errors_1.illegalArgument();
        }
        var start;
        if (!startOrChange) {
            start = this.start;
        }
        else if (Position.isPosition(startOrChange)) {
            start = startOrChange;
        }
        else {
            start = startOrChange.start || this.start;
            end = startOrChange.end || this.end;
        }
        if (start.isEqual(this._start) && end.isEqual(this.end)) {
            return this;
        }
        return new Range(start, end);
    };
    Range.isRange = function (thing) {
        if (thing instanceof Range) {
            return true;
        }
        if (!thing) {
            return false;
        }
        return Position.isPosition(thing.start)
            && Position.isPosition(thing.end);
    };
    return Range;
}());
exports.Range = Range;
var Selection = /** @class */ (function (_super) {
    __extends(Selection, _super);
    function Selection(anchorLineOrAnchor, anchorColumnOrActive, activeLine, activeColumn) {
        var _this = this;
        var anchor = undefined;
        var active = undefined;
        if (typeof anchorLineOrAnchor === 'number' && typeof anchorColumnOrActive === 'number' && typeof activeLine === 'number' && typeof activeColumn === 'number') {
            anchor = new Position(anchorLineOrAnchor, anchorColumnOrActive);
            active = new Position(activeLine, activeColumn);
        }
        else if (anchorLineOrAnchor instanceof Position && anchorColumnOrActive instanceof Position) {
            anchor = anchorLineOrAnchor;
            active = anchorColumnOrActive;
        }
        if (!anchor || !active) {
            throw new Error('Invalid arguments');
        }
        _this = _super.call(this, anchor, active) || this;
        _this._anchor = anchor;
        _this._active = active;
        return _this;
    }
    Object.defineProperty(Selection.prototype, "active", {
        get: function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Selection.prototype, "anchor", {
        get: function () {
            return this._anchor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Selection.prototype, "isReversed", {
        get: function () {
            return this._anchor === this._end;
        },
        enumerable: true,
        configurable: true
    });
    return Selection;
}(Range));
exports.Selection = Selection;
var EndOfLine;
(function (EndOfLine) {
    EndOfLine[EndOfLine["LF"] = 1] = "LF";
    EndOfLine[EndOfLine["CRLF"] = 2] = "CRLF";
})(EndOfLine = exports.EndOfLine || (exports.EndOfLine = {}));
var SnippetString = /** @class */ (function () {
    function SnippetString(value) {
        this._tabstop = 1;
        this.value = value || '';
    }
    SnippetString.isSnippetString = function (thing) {
        if (thing instanceof SnippetString) {
            return true;
        }
        if (!thing) {
            return false;
        }
        return typeof thing.value === 'string';
    };
    SnippetString._escape = function (value) {
        return value.replace(/\$|}|\\/g, '\\$&');
    };
    SnippetString.prototype.appendText = function (string) {
        this.value += SnippetString._escape(string);
        return this;
    };
    SnippetString.prototype.appendTabstop = function (number) {
        if (number === void 0) { number = this._tabstop++; }
        this.value += '$';
        this.value += number;
        return this;
    };
    SnippetString.prototype.appendPlaceholder = function (value, number) {
        if (number === void 0) { number = this._tabstop++; }
        if (typeof value === 'function') {
            var nested = new SnippetString();
            nested._tabstop = this._tabstop;
            value(nested);
            this._tabstop = nested._tabstop;
            value = nested.value;
        }
        else {
            value = SnippetString._escape(value);
        }
        this.value += '${';
        this.value += number;
        this.value += ':';
        this.value += value;
        this.value += '}';
        return this;
    };
    SnippetString.prototype.appendVariable = function (name, defaultValue) {
        if (typeof defaultValue === 'function') {
            var nested = new SnippetString();
            nested._tabstop = this._tabstop;
            defaultValue(nested);
            this._tabstop = nested._tabstop;
            defaultValue = nested.value;
        }
        else if (typeof defaultValue === 'string') {
            defaultValue = defaultValue.replace(/\$|}/g, '\\$&');
        }
        this.value += '${';
        this.value += name;
        if (defaultValue) {
            this.value += ':';
            this.value += defaultValue;
        }
        this.value += '}';
        return this;
    };
    return SnippetString;
}());
exports.SnippetString = SnippetString;
var ThemeColor = /** @class */ (function () {
    function ThemeColor(id) {
        this.id = id;
    }
    return ThemeColor;
}());
exports.ThemeColor = ThemeColor;
var ThemeIcon = /** @class */ (function () {
    function ThemeIcon(id) {
        this.id = id;
    }
    ThemeIcon.File = new ThemeIcon('file');
    ThemeIcon.Folder = new ThemeIcon('folder');
    return ThemeIcon;
}());
exports.ThemeIcon = ThemeIcon;
var TextEditorRevealType;
(function (TextEditorRevealType) {
    TextEditorRevealType[TextEditorRevealType["Default"] = 0] = "Default";
    TextEditorRevealType[TextEditorRevealType["InCenter"] = 1] = "InCenter";
    TextEditorRevealType[TextEditorRevealType["InCenterIfOutsideViewport"] = 2] = "InCenterIfOutsideViewport";
    TextEditorRevealType[TextEditorRevealType["AtTop"] = 3] = "AtTop";
})(TextEditorRevealType = exports.TextEditorRevealType || (exports.TextEditorRevealType = {}));
/**
 * These values match very carefully the values of `TrackedRangeStickiness`
 */
var DecorationRangeBehavior;
(function (DecorationRangeBehavior) {
    /**
     * TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges
     */
    DecorationRangeBehavior[DecorationRangeBehavior["OpenOpen"] = 0] = "OpenOpen";
    /**
     * TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges
     */
    DecorationRangeBehavior[DecorationRangeBehavior["ClosedClosed"] = 1] = "ClosedClosed";
    /**
     * TrackedRangeStickiness.GrowsOnlyWhenTypingBefore
     */
    DecorationRangeBehavior[DecorationRangeBehavior["OpenClosed"] = 2] = "OpenClosed";
    /**
     * TrackedRangeStickiness.GrowsOnlyWhenTypingAfter
     */
    DecorationRangeBehavior[DecorationRangeBehavior["ClosedOpen"] = 3] = "ClosedOpen";
})(DecorationRangeBehavior = exports.DecorationRangeBehavior || (exports.DecorationRangeBehavior = {}));
/**
 * Vertical Lane in the overview ruler of the editor.
 */
var OverviewRulerLane;
(function (OverviewRulerLane) {
    OverviewRulerLane[OverviewRulerLane["Left"] = 1] = "Left";
    OverviewRulerLane[OverviewRulerLane["Center"] = 2] = "Center";
    OverviewRulerLane[OverviewRulerLane["Right"] = 4] = "Right";
    OverviewRulerLane[OverviewRulerLane["Full"] = 7] = "Full";
})(OverviewRulerLane = exports.OverviewRulerLane || (exports.OverviewRulerLane = {}));
var ConfigurationTarget;
(function (ConfigurationTarget) {
    ConfigurationTarget[ConfigurationTarget["Global"] = 1] = "Global";
    ConfigurationTarget[ConfigurationTarget["Workspace"] = 2] = "Workspace";
    ConfigurationTarget[ConfigurationTarget["WorkspaceFolder"] = 3] = "WorkspaceFolder";
    ConfigurationTarget[ConfigurationTarget["Default"] = 4] = "Default";
    ConfigurationTarget[ConfigurationTarget["Memory"] = 5] = "Memory";
})(ConfigurationTarget = exports.ConfigurationTarget || (exports.ConfigurationTarget = {}));
var RelativePattern = /** @class */ (function () {
    function RelativePattern(base, pattern) {
        this.pattern = pattern;
        if (typeof base !== 'string') {
            if (!base || !vscode_uri_1.default.isUri(base.uri)) {
                throw errors_1.illegalArgument('base');
            }
        }
        if (typeof pattern !== 'string') {
            throw errors_1.illegalArgument('pattern');
        }
        this.base = typeof base === 'string' ? base : base.uri.fsPath;
    }
    RelativePattern.prototype.pathToRelative = function (from, to) {
        return paths_util_1.relative(from, to);
    };
    return RelativePattern;
}());
exports.RelativePattern = RelativePattern;
var IndentAction;
(function (IndentAction) {
    IndentAction[IndentAction["None"] = 0] = "None";
    IndentAction[IndentAction["Indent"] = 1] = "Indent";
    IndentAction[IndentAction["IndentOutdent"] = 2] = "IndentOutdent";
    IndentAction[IndentAction["Outdent"] = 3] = "Outdent";
})(IndentAction = exports.IndentAction || (exports.IndentAction = {}));
var TextEdit = /** @class */ (function () {
    function TextEdit(range, newText) {
        this.range = range;
        this.newText = newText;
    }
    Object.defineProperty(TextEdit.prototype, "range", {
        get: function () {
            return this._range;
        },
        set: function (value) {
            if (value && !Range.isRange(value)) {
                throw errors_1.illegalArgument('range');
            }
            this._range = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextEdit.prototype, "newText", {
        get: function () {
            return this._newText || '';
        },
        set: function (value) {
            if (value && typeof value !== 'string') {
                throw errors_1.illegalArgument('newText');
            }
            this._newText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextEdit.prototype, "newEol", {
        get: function () {
            return this._newEol;
        },
        set: function (value) {
            if (value && typeof value !== 'number') {
                throw errors_1.illegalArgument('newEol');
            }
            this._newEol = value;
        },
        enumerable: true,
        configurable: true
    });
    TextEdit.isTextEdit = function (thing) {
        if (thing instanceof TextEdit) {
            return true;
        }
        if (!thing) {
            return false;
        }
        return Range.isRange(thing.range)
            && typeof thing.newText === 'string';
    };
    TextEdit.replace = function (range, newText) {
        return new TextEdit(range, newText);
    };
    TextEdit.insert = function (position, newText) {
        return TextEdit.replace(new Range(position, position), newText);
    };
    TextEdit.delete = function (range) {
        return TextEdit.replace(range, '');
    };
    TextEdit.setEndOfLine = function (eol) {
        var ret = new TextEdit(undefined, undefined);
        ret.newEol = eol;
        return ret;
    };
    return TextEdit;
}());
exports.TextEdit = TextEdit;
var CompletionTriggerKind;
(function (CompletionTriggerKind) {
    CompletionTriggerKind[CompletionTriggerKind["Invoke"] = 0] = "Invoke";
    CompletionTriggerKind[CompletionTriggerKind["TriggerCharacter"] = 1] = "TriggerCharacter";
    CompletionTriggerKind[CompletionTriggerKind["TriggerForIncompleteCompletions"] = 2] = "TriggerForIncompleteCompletions";
})(CompletionTriggerKind = exports.CompletionTriggerKind || (exports.CompletionTriggerKind = {}));
var CompletionItemKind;
(function (CompletionItemKind) {
    CompletionItemKind[CompletionItemKind["Text"] = 0] = "Text";
    CompletionItemKind[CompletionItemKind["Method"] = 1] = "Method";
    CompletionItemKind[CompletionItemKind["Function"] = 2] = "Function";
    CompletionItemKind[CompletionItemKind["Constructor"] = 3] = "Constructor";
    CompletionItemKind[CompletionItemKind["Field"] = 4] = "Field";
    CompletionItemKind[CompletionItemKind["Variable"] = 5] = "Variable";
    CompletionItemKind[CompletionItemKind["Class"] = 6] = "Class";
    CompletionItemKind[CompletionItemKind["Interface"] = 7] = "Interface";
    CompletionItemKind[CompletionItemKind["Module"] = 8] = "Module";
    CompletionItemKind[CompletionItemKind["Property"] = 9] = "Property";
    CompletionItemKind[CompletionItemKind["Unit"] = 10] = "Unit";
    CompletionItemKind[CompletionItemKind["Value"] = 11] = "Value";
    CompletionItemKind[CompletionItemKind["Enum"] = 12] = "Enum";
    CompletionItemKind[CompletionItemKind["Keyword"] = 13] = "Keyword";
    CompletionItemKind[CompletionItemKind["Snippet"] = 14] = "Snippet";
    CompletionItemKind[CompletionItemKind["Color"] = 15] = "Color";
    CompletionItemKind[CompletionItemKind["File"] = 16] = "File";
    CompletionItemKind[CompletionItemKind["Reference"] = 17] = "Reference";
    CompletionItemKind[CompletionItemKind["Folder"] = 18] = "Folder";
    CompletionItemKind[CompletionItemKind["EnumMember"] = 19] = "EnumMember";
    CompletionItemKind[CompletionItemKind["Constant"] = 20] = "Constant";
    CompletionItemKind[CompletionItemKind["Struct"] = 21] = "Struct";
    CompletionItemKind[CompletionItemKind["Event"] = 22] = "Event";
    CompletionItemKind[CompletionItemKind["Operator"] = 23] = "Operator";
    CompletionItemKind[CompletionItemKind["TypeParameter"] = 24] = "TypeParameter";
})(CompletionItemKind = exports.CompletionItemKind || (exports.CompletionItemKind = {}));
var CompletionItem = /** @class */ (function () {
    function CompletionItem(label, kind) {
        this.label = label;
        this.kind = kind;
    }
    return CompletionItem;
}());
exports.CompletionItem = CompletionItem;
var CompletionList = /** @class */ (function () {
    function CompletionList(items, isIncomplete) {
        if (items === void 0) { items = []; }
        if (isIncomplete === void 0) { isIncomplete = false; }
        this.items = items;
        this.isIncomplete = isIncomplete;
    }
    return CompletionList;
}());
exports.CompletionList = CompletionList;
var DiagnosticSeverity;
(function (DiagnosticSeverity) {
    DiagnosticSeverity[DiagnosticSeverity["Error"] = 0] = "Error";
    DiagnosticSeverity[DiagnosticSeverity["Warning"] = 1] = "Warning";
    DiagnosticSeverity[DiagnosticSeverity["Information"] = 2] = "Information";
    DiagnosticSeverity[DiagnosticSeverity["Hint"] = 3] = "Hint";
})(DiagnosticSeverity = exports.DiagnosticSeverity || (exports.DiagnosticSeverity = {}));
var DiagnosticRelatedInformation = /** @class */ (function () {
    function DiagnosticRelatedInformation(location, message) {
        this.location = location;
        this.message = message;
    }
    return DiagnosticRelatedInformation;
}());
exports.DiagnosticRelatedInformation = DiagnosticRelatedInformation;
var Location = /** @class */ (function () {
    function Location(uri, rangeOrPosition) {
        this.uri = uri;
        if (rangeOrPosition instanceof Range) {
            this.range = rangeOrPosition;
        }
        else if (rangeOrPosition instanceof Position) {
            this.range = new Range(rangeOrPosition, rangeOrPosition);
        }
    }
    Location.isLocation = function (thing) {
        if (thing instanceof Location) {
            return true;
        }
        if (!thing) {
            return false;
        }
        return Range.isRange(thing.range)
            && vscode_uri_1.default.isUri(thing.uri);
    };
    return Location;
}());
exports.Location = Location;
var DiagnosticTag;
(function (DiagnosticTag) {
    DiagnosticTag[DiagnosticTag["Unnecessary"] = 1] = "Unnecessary";
})(DiagnosticTag = exports.DiagnosticTag || (exports.DiagnosticTag = {}));
var Diagnostic = /** @class */ (function () {
    function Diagnostic(range, message, severity) {
        if (severity === void 0) { severity = DiagnosticSeverity.Error; }
        this.range = range;
        this.message = message;
        this.severity = severity;
    }
    return Diagnostic;
}());
exports.Diagnostic = Diagnostic;
var MarkerSeverity;
(function (MarkerSeverity) {
    MarkerSeverity[MarkerSeverity["Hint"] = 1] = "Hint";
    MarkerSeverity[MarkerSeverity["Info"] = 2] = "Info";
    MarkerSeverity[MarkerSeverity["Warning"] = 4] = "Warning";
    MarkerSeverity[MarkerSeverity["Error"] = 8] = "Error";
})(MarkerSeverity = exports.MarkerSeverity || (exports.MarkerSeverity = {}));
var MarkerTag;
(function (MarkerTag) {
    MarkerTag[MarkerTag["Unnecessary"] = 1] = "Unnecessary";
})(MarkerTag = exports.MarkerTag || (exports.MarkerTag = {}));
var ParameterInformation = /** @class */ (function () {
    function ParameterInformation(label, documentation) {
        this.label = label;
        this.documentation = documentation;
    }
    return ParameterInformation;
}());
exports.ParameterInformation = ParameterInformation;
var SignatureInformation = /** @class */ (function () {
    function SignatureInformation(label, documentation) {
        this.label = label;
        this.documentation = documentation;
        this.parameters = [];
    }
    return SignatureInformation;
}());
exports.SignatureInformation = SignatureInformation;
var SignatureHelpTriggerKind;
(function (SignatureHelpTriggerKind) {
    SignatureHelpTriggerKind[SignatureHelpTriggerKind["Invoke"] = 1] = "Invoke";
    SignatureHelpTriggerKind[SignatureHelpTriggerKind["TriggerCharacter"] = 2] = "TriggerCharacter";
    SignatureHelpTriggerKind[SignatureHelpTriggerKind["ContentChange"] = 3] = "ContentChange";
})(SignatureHelpTriggerKind = exports.SignatureHelpTriggerKind || (exports.SignatureHelpTriggerKind = {}));
var SignatureHelp = /** @class */ (function () {
    function SignatureHelp() {
        this.signatures = [];
    }
    return SignatureHelp;
}());
exports.SignatureHelp = SignatureHelp;
var Hover = /** @class */ (function () {
    function Hover(contents, range) {
        if (!contents) {
            errors_1.illegalArgument('contents must be defined');
        }
        if (Array.isArray(contents)) {
            this.contents = contents;
        }
        else if (markdown_string_1.isMarkdownString(contents)) {
            this.contents = [contents];
        }
        else {
            this.contents = [contents];
        }
        this.range = range;
    }
    return Hover;
}());
exports.Hover = Hover;
var DocumentHighlightKind;
(function (DocumentHighlightKind) {
    DocumentHighlightKind[DocumentHighlightKind["Text"] = 0] = "Text";
    DocumentHighlightKind[DocumentHighlightKind["Read"] = 1] = "Read";
    DocumentHighlightKind[DocumentHighlightKind["Write"] = 2] = "Write";
})(DocumentHighlightKind = exports.DocumentHighlightKind || (exports.DocumentHighlightKind = {}));
var DocumentHighlight = /** @class */ (function () {
    function DocumentHighlight(range, kind) {
        this.range = range;
        this.kind = kind;
    }
    return DocumentHighlight;
}());
exports.DocumentHighlight = DocumentHighlight;
var DocumentLink = /** @class */ (function () {
    function DocumentLink(range, target) {
        if (target && !(target instanceof vscode_uri_1.default)) {
            throw errors_1.illegalArgument('target');
        }
        if (!Range.isRange(range) || range.isEmpty) {
            throw errors_1.illegalArgument('range');
        }
        this.range = range;
        this.target = target;
    }
    return DocumentLink;
}());
exports.DocumentLink = DocumentLink;
var CodeLens = /** @class */ (function () {
    function CodeLens(range, command) {
        this.range = range;
        this.command = command;
    }
    Object.defineProperty(CodeLens.prototype, "isResolved", {
        get: function () {
            return !!this.command;
        },
        enumerable: true,
        configurable: true
    });
    return CodeLens;
}());
exports.CodeLens = CodeLens;
var CodeActionTrigger;
(function (CodeActionTrigger) {
    CodeActionTrigger[CodeActionTrigger["Automatic"] = 1] = "Automatic";
    CodeActionTrigger[CodeActionTrigger["Manual"] = 2] = "Manual";
})(CodeActionTrigger = exports.CodeActionTrigger || (exports.CodeActionTrigger = {}));
var CodeActionKind = /** @class */ (function () {
    function CodeActionKind(value) {
        this.value = value;
    }
    CodeActionKind.prototype.append = function (parts) {
        return new CodeActionKind(this.value ? this.value + CodeActionKind.sep + parts : parts);
    };
    CodeActionKind.prototype.contains = function (other) {
        return this.value === other.value || strings_1.startsWithIgnoreCase(other.value, this.value + CodeActionKind.sep);
    };
    CodeActionKind.prototype.intersects = function (other) {
        return this.contains(other) || other.contains(this);
    };
    CodeActionKind.sep = '.';
    CodeActionKind.Empty = new CodeActionKind('');
    CodeActionKind.QuickFix = CodeActionKind.Empty.append('quickfix');
    CodeActionKind.Refactor = CodeActionKind.Empty.append('refactor');
    CodeActionKind.RefactorExtract = CodeActionKind.Refactor.append('extract');
    CodeActionKind.RefactorInline = CodeActionKind.Refactor.append('inline');
    CodeActionKind.RefactorRewrite = CodeActionKind.Refactor.append('rewrite');
    CodeActionKind.Source = CodeActionKind.Empty.append('source');
    CodeActionKind.SourceOrganizeImports = CodeActionKind.Source.append('organizeImports');
    CodeActionKind.SourceFixAll = CodeActionKind.Source.append('fixAll');
    return CodeActionKind;
}());
exports.CodeActionKind = CodeActionKind;
var TextDocumentSaveReason;
(function (TextDocumentSaveReason) {
    TextDocumentSaveReason[TextDocumentSaveReason["Manual"] = 1] = "Manual";
    TextDocumentSaveReason[TextDocumentSaveReason["AfterDelay"] = 2] = "AfterDelay";
    TextDocumentSaveReason[TextDocumentSaveReason["FocusOut"] = 3] = "FocusOut";
})(TextDocumentSaveReason = exports.TextDocumentSaveReason || (exports.TextDocumentSaveReason = {}));
var CodeAction = /** @class */ (function () {
    function CodeAction(title, kind) {
        this.title = title;
        this.kind = kind;
    }
    return CodeAction;
}());
exports.CodeAction = CodeAction;
var WorkspaceEdit = /** @class */ (function () {
    function WorkspaceEdit() {
        this._edits = new Array();
    }
    WorkspaceEdit.prototype.renameFile = function (from, to, options) {
        this._edits.push({ _type: 1, from: from, to: to, options: options });
    };
    WorkspaceEdit.prototype.createFile = function (uri, options) {
        this._edits.push({ _type: 1, from: undefined, to: uri, options: options });
    };
    WorkspaceEdit.prototype.deleteFile = function (uri, options) {
        this._edits.push({ _type: 1, from: uri, to: undefined, options: options });
    };
    WorkspaceEdit.prototype.replace = function (uri, range, newText) {
        this._edits.push({ _type: 2, uri: uri, edit: new TextEdit(range, newText) });
    };
    WorkspaceEdit.prototype.insert = function (resource, position, newText) {
        this.replace(resource, new Range(position, position), newText);
    };
    WorkspaceEdit.prototype.delete = function (resource, range) {
        this.replace(resource, range, '');
    };
    WorkspaceEdit.prototype.has = function (uri) {
        var e_4, _a;
        try {
            for (var _b = __values(this._edits), _c = _b.next(); !_c.done; _c = _b.next()) {
                var edit = _c.value;
                if (edit && edit._type === 2 && edit.uri.toString() === uri.toString()) {
                    return true;
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return false;
    };
    WorkspaceEdit.prototype.set = function (uri, edits) {
        var e_5, _a;
        if (!edits) {
            // remove all text edits for `uri`
            for (var i = 0; i < this._edits.length; i++) {
                var element = this._edits[i];
                if (element && element._type === 2 && element.uri.toString() === uri.toString()) {
                    this._edits[i] = undefined;
                }
            }
            this._edits = this._edits.filter(function (e) { return !!e; });
        }
        else {
            try {
                // append edit to the end
                for (var edits_1 = __values(edits), edits_1_1 = edits_1.next(); !edits_1_1.done; edits_1_1 = edits_1.next()) {
                    var edit = edits_1_1.value;
                    if (edit) {
                        this._edits.push({ _type: 2, uri: uri, edit: edit });
                    }
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (edits_1_1 && !edits_1_1.done && (_a = edits_1.return)) _a.call(edits_1);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
    };
    WorkspaceEdit.prototype.get = function (uri) {
        var e_6, _a;
        var res = [];
        try {
            for (var _b = __values(this._edits), _c = _b.next(); !_c.done; _c = _b.next()) {
                var candidate = _c.value;
                if (candidate && candidate._type === 2 && candidate.uri.toString() === uri.toString()) {
                    res.push(candidate.edit);
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        if (res.length === 0) {
            return undefined;
        }
        return res;
    };
    WorkspaceEdit.prototype.entries = function () {
        var e_7, _a;
        var textEdits = new Map();
        try {
            for (var _b = __values(this._edits), _c = _b.next(); !_c.done; _c = _b.next()) {
                var candidate = _c.value;
                if (candidate && candidate._type === 2) {
                    var textEdit = textEdits.get(candidate.uri.toString());
                    if (!textEdit) {
                        textEdit = [candidate.uri, []];
                        textEdits.set(candidate.uri.toString(), textEdit);
                    }
                    textEdit[1].push(candidate.edit);
                }
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
        var result = [];
        textEdits.forEach(function (v) { return result.push(v); });
        return result;
    };
    WorkspaceEdit.prototype._allEntries = function () {
        var e_8, _a;
        var res = [];
        try {
            for (var _b = __values(this._edits), _c = _b.next(); !_c.done; _c = _b.next()) {
                var edit = _c.value;
                if (!edit) {
                    continue;
                }
                if (edit._type === 1) {
                    res.push([edit.from, edit.to, edit.options]);
                }
                else {
                    res.push([edit.uri, [edit.edit]]);
                }
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_8) throw e_8.error; }
        }
        return res;
    };
    Object.defineProperty(WorkspaceEdit.prototype, "size", {
        get: function () {
            return this.entries().length;
        },
        enumerable: true,
        configurable: true
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    WorkspaceEdit.prototype.toJSON = function () {
        return this.entries();
    };
    return WorkspaceEdit;
}());
exports.WorkspaceEdit = WorkspaceEdit;
var TreeItem = /** @class */ (function () {
    function TreeItem(arg1, collapsibleState) {
        if (collapsibleState === void 0) { collapsibleState = TreeItemCollapsibleState.None; }
        this.collapsibleState = collapsibleState;
        if (arg1 instanceof vscode_uri_1.default) {
            this.resourceUri = arg1;
        }
        else {
            this.label = arg1;
        }
    }
    return TreeItem;
}());
exports.TreeItem = TreeItem;
var TreeItemCollapsibleState;
(function (TreeItemCollapsibleState) {
    TreeItemCollapsibleState[TreeItemCollapsibleState["None"] = 0] = "None";
    TreeItemCollapsibleState[TreeItemCollapsibleState["Collapsed"] = 1] = "Collapsed";
    TreeItemCollapsibleState[TreeItemCollapsibleState["Expanded"] = 2] = "Expanded";
})(TreeItemCollapsibleState = exports.TreeItemCollapsibleState || (exports.TreeItemCollapsibleState = {}));
var SymbolInformation = /** @class */ (function () {
    function SymbolInformation(name, kind, rangeOrContainer, locationOrUri, containerName) {
        this.name = name;
        this.kind = kind;
        this.containerName = containerName;
        if (typeof rangeOrContainer === 'string') {
            this.containerName = rangeOrContainer;
        }
        if (locationOrUri instanceof Location) {
            this.location = locationOrUri;
        }
        else if (rangeOrContainer instanceof Range) {
            this.location = new Location(locationOrUri, rangeOrContainer);
        }
        SymbolInformation.validate(this);
    }
    SymbolInformation.validate = function (candidate) {
        if (!candidate.name) {
            throw new Error('Should provide a name inside candidate field');
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    SymbolInformation.prototype.toJSON = function () {
        return {
            name: this.name,
            kind: plugin_api_rpc_model_1.SymbolKind[this.kind],
            location: this.location,
            containerName: this.containerName
        };
    };
    return SymbolInformation;
}());
exports.SymbolInformation = SymbolInformation;
var DocumentSymbol = /** @class */ (function () {
    function DocumentSymbol(name, detail, kind, range, selectionRange) {
        this.name = name;
        this.detail = detail;
        this.kind = kind;
        this.range = range;
        this.selectionRange = selectionRange;
        this.children = [];
        DocumentSymbol.validate(this);
    }
    DocumentSymbol.validate = function (candidate) {
        if (!candidate.name) {
            throw new Error('Should provide a name inside candidate field');
        }
        if (!candidate.range.contains(candidate.selectionRange)) {
            throw new Error('selectionRange must be contained in fullRange');
        }
        if (candidate.children) {
            candidate.children.forEach(DocumentSymbol.validate);
        }
    };
    return DocumentSymbol;
}());
exports.DocumentSymbol = DocumentSymbol;
var FileChangeType;
(function (FileChangeType) {
    FileChangeType[FileChangeType["Changed"] = 1] = "Changed";
    FileChangeType[FileChangeType["Created"] = 2] = "Created";
    FileChangeType[FileChangeType["Deleted"] = 3] = "Deleted";
})(FileChangeType = exports.FileChangeType || (exports.FileChangeType = {}));
var CommentThreadCollapsibleState;
(function (CommentThreadCollapsibleState) {
    CommentThreadCollapsibleState[CommentThreadCollapsibleState["Collapsed"] = 0] = "Collapsed";
    CommentThreadCollapsibleState[CommentThreadCollapsibleState["Expanded"] = 1] = "Expanded";
})(CommentThreadCollapsibleState = exports.CommentThreadCollapsibleState || (exports.CommentThreadCollapsibleState = {}));
var QuickInputButtons = /** @class */ (function () {
    function QuickInputButtons() {
    }
    QuickInputButtons.Back = {
        iconPath: {
            id: 'Back'
        },
        tooltip: 'Back'
    };
    return QuickInputButtons;
}());
exports.QuickInputButtons = QuickInputButtons;
var CommentMode;
(function (CommentMode) {
    CommentMode[CommentMode["Editing"] = 0] = "Editing";
    CommentMode[CommentMode["Preview"] = 1] = "Preview";
})(CommentMode = exports.CommentMode || (exports.CommentMode = {}));
var FileSystemError = /** @class */ (function (_super) {
    __extends(FileSystemError, _super);
    function FileSystemError(uriOrMessage, code, terminator) {
        var _this = _super.call(this, vscode_uri_1.default.isUri(uriOrMessage) ? uriOrMessage.toString(true) : uriOrMessage) || this;
        _this.name = code ? code + " (FileSystemError)" : 'FileSystemError';
        if (typeof Object.setPrototypeOf === 'function') {
            Object.setPrototypeOf(_this, FileSystemError.prototype);
        }
        if (typeof Error.captureStackTrace === 'function' && typeof terminator === 'function') {
            Error.captureStackTrace(_this, terminator);
        }
        return _this;
    }
    FileSystemError.FileExists = function (messageOrUri) {
        return new FileSystemError(messageOrUri, 'EntryExists', FileSystemError.FileExists);
    };
    FileSystemError.FileNotFound = function (messageOrUri) {
        return new FileSystemError(messageOrUri, 'EntryNotFound', FileSystemError.FileNotFound);
    };
    FileSystemError.FileNotADirectory = function (messageOrUri) {
        return new FileSystemError(messageOrUri, 'EntryNotADirectory', FileSystemError.FileNotADirectory);
    };
    FileSystemError.FileIsADirectory = function (messageOrUri) {
        return new FileSystemError(messageOrUri, 'EntryIsADirectory', FileSystemError.FileIsADirectory);
    };
    FileSystemError.NoPermissions = function (messageOrUri) {
        return new FileSystemError(messageOrUri, 'NoPermissions', FileSystemError.NoPermissions);
    };
    FileSystemError.Unavailable = function (messageOrUri) {
        return new FileSystemError(messageOrUri, 'Unavailable', FileSystemError.Unavailable);
    };
    return FileSystemError;
}(Error));
exports.FileSystemError = FileSystemError;
var FileType;
(function (FileType) {
    FileType[FileType["Unknown"] = 0] = "Unknown";
    FileType[FileType["File"] = 1] = "File";
    FileType[FileType["Directory"] = 2] = "Directory";
    FileType[FileType["SymbolicLink"] = 64] = "SymbolicLink";
})(FileType = exports.FileType || (exports.FileType = {}));
var ProgressOptions = /** @class */ (function () {
    function ProgressOptions(location, title, cancellable) {
        this.location = location;
    }
    return ProgressOptions;
}());
exports.ProgressOptions = ProgressOptions;
var Progress = /** @class */ (function () {
    function Progress() {
    }
    /**
     * Report a progress update.
     * @param value A progress item, like a message and/or an
     * report on how much work finished
     */
    Progress.prototype.report = function (value) {
    };
    return Progress;
}());
exports.Progress = Progress;
var ProgressLocation;
(function (ProgressLocation) {
    /**
     * Show progress for the source control viewlet, as overlay for the icon and as progress bar
     * inside the viewlet (when visible). Neither supports cancellation nor discrete progress.
     */
    ProgressLocation[ProgressLocation["SourceControl"] = 1] = "SourceControl";
    /**
     * Show progress in the status bar of the editor. Neither supports cancellation nor discrete progress.
     */
    ProgressLocation[ProgressLocation["Window"] = 10] = "Window";
    /**
     * Show progress as notification with an optional cancel button. Supports to show infinite and discrete progress.
     */
    ProgressLocation[ProgressLocation["Notification"] = 15] = "Notification";
})(ProgressLocation = exports.ProgressLocation || (exports.ProgressLocation = {}));
var ProcessExecution = /** @class */ (function () {
    function ProcessExecution(process, varg1, varg2) {
        if (typeof process !== 'string') {
            throw errors_1.illegalArgument('process');
        }
        this.executionProcess = process;
        if (varg1 !== undefined) {
            if (Array.isArray(varg1)) {
                this.arguments = varg1;
                this.executionOptions = varg2;
            }
            else {
                this.executionOptions = varg1;
            }
        }
        if (this.arguments === undefined) {
            this.arguments = [];
        }
    }
    Object.defineProperty(ProcessExecution.prototype, "process", {
        get: function () {
            return this.executionProcess;
        },
        set: function (value) {
            if (typeof value !== 'string') {
                throw errors_1.illegalArgument('process');
            }
            this.executionProcess = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProcessExecution.prototype, "args", {
        get: function () {
            return this.arguments;
        },
        set: function (value) {
            if (!Array.isArray(value)) {
                value = [];
            }
            this.arguments = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProcessExecution.prototype, "options", {
        get: function () {
            return this.executionOptions;
        },
        set: function (value) {
            this.executionOptions = value;
        },
        enumerable: true,
        configurable: true
    });
    ProcessExecution.prototype.computeId = function () {
        var e_9, _a;
        var hash = crypto.createHash('md5');
        hash.update('process');
        if (this.executionProcess !== undefined) {
            hash.update(this.executionProcess);
        }
        if (this.arguments && this.arguments.length > 0) {
            try {
                for (var _b = __values(this.arguments), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var arg = _c.value;
                    hash.update(arg);
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_9) throw e_9.error; }
            }
        }
        return hash.digest('hex');
    };
    ProcessExecution.is = function (value) {
        var candidate = value;
        return candidate && !!candidate.process;
    };
    return ProcessExecution;
}());
exports.ProcessExecution = ProcessExecution;
var ShellQuoting;
(function (ShellQuoting) {
    ShellQuoting[ShellQuoting["Escape"] = 1] = "Escape";
    ShellQuoting[ShellQuoting["Strong"] = 2] = "Strong";
    ShellQuoting[ShellQuoting["Weak"] = 3] = "Weak";
})(ShellQuoting = exports.ShellQuoting || (exports.ShellQuoting = {}));
var TaskPanelKind;
(function (TaskPanelKind) {
    TaskPanelKind[TaskPanelKind["Shared"] = 1] = "Shared";
    TaskPanelKind[TaskPanelKind["Dedicated"] = 2] = "Dedicated";
    TaskPanelKind[TaskPanelKind["New"] = 3] = "New";
})(TaskPanelKind = exports.TaskPanelKind || (exports.TaskPanelKind = {}));
var TaskRevealKind;
(function (TaskRevealKind) {
    TaskRevealKind[TaskRevealKind["Always"] = 1] = "Always";
    TaskRevealKind[TaskRevealKind["Silent"] = 2] = "Silent";
    TaskRevealKind[TaskRevealKind["Never"] = 3] = "Never";
})(TaskRevealKind = exports.TaskRevealKind || (exports.TaskRevealKind = {}));
var ShellExecution = /** @class */ (function () {
    function ShellExecution(arg0, arg1, arg2) {
        if (Array.isArray(arg1) || typeof arg1 === 'string') {
            if (!arg0) {
                throw errors_1.illegalArgument('command can\'t be undefined or null');
            }
            if (typeof arg0 !== 'string' && typeof arg0.value !== 'string') {
                throw errors_1.illegalArgument('command');
            }
            this.shellCommand = arg0;
            this.arguments = arg1;
            this.shellOptions = arg2;
        }
        else {
            if (typeof arg0 !== 'string') {
                throw errors_1.illegalArgument('commandLine');
            }
            this.shellCommandLine = arg0;
            this.shellOptions = arg1;
        }
    }
    Object.defineProperty(ShellExecution.prototype, "commandLine", {
        get: function () {
            return this.shellCommandLine;
        },
        set: function (value) {
            if (typeof value !== 'string') {
                throw errors_1.illegalArgument('commandLine');
            }
            this.shellCommandLine = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShellExecution.prototype, "command", {
        get: function () {
            return this.shellCommand;
        },
        set: function (value) {
            if (typeof value !== 'string' && typeof value.value !== 'string') {
                throw errors_1.illegalArgument('command');
            }
            this.shellCommand = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShellExecution.prototype, "args", {
        get: function () {
            return this.arguments;
        },
        set: function (value) {
            this.arguments = value || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShellExecution.prototype, "options", {
        get: function () {
            return this.shellOptions;
        },
        set: function (value) {
            this.shellOptions = value;
        },
        enumerable: true,
        configurable: true
    });
    ShellExecution.prototype.computeId = function () {
        var e_10, _a;
        var hash = crypto.createHash('md5');
        hash.update('shell');
        if (this.shellCommandLine !== undefined) {
            hash.update(this.shellCommandLine);
        }
        if (this.shellCommand !== undefined) {
            hash.update(typeof this.shellCommand === 'string' ? this.shellCommand : this.shellCommand.value);
        }
        if (this.arguments && this.arguments.length > 0) {
            try {
                for (var _b = __values(this.arguments), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var arg = _c.value;
                    hash.update(typeof arg === 'string' ? arg : arg.value);
                }
            }
            catch (e_10_1) { e_10 = { error: e_10_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_10) throw e_10.error; }
            }
        }
        return hash.digest('hex');
    };
    ShellExecution.is = function (value) {
        var candidate = value;
        return candidate && (!!candidate.commandLine || !!candidate.command);
    };
    return ShellExecution;
}());
exports.ShellExecution = ShellExecution;
var TaskGroup = /** @class */ (function () {
    function TaskGroup(id, label) {
        if (typeof id !== 'string') {
            throw errors_1.illegalArgument('id');
        }
        if (typeof label !== 'string') {
            throw errors_1.illegalArgument('name');
        }
        this.groupId = id;
    }
    TaskGroup.from = function (value) {
        switch (value) {
            case 'clean':
                return TaskGroup.Clean;
            case 'build':
                return TaskGroup.Build;
            case 'rebuild':
                return TaskGroup.Rebuild;
            case 'test':
                return TaskGroup.Test;
            default:
                return undefined;
        }
    };
    Object.defineProperty(TaskGroup.prototype, "id", {
        get: function () {
            return this.groupId;
        },
        enumerable: true,
        configurable: true
    });
    TaskGroup.Clean = new TaskGroup('clean', 'Clean');
    TaskGroup.Build = new TaskGroup('build', 'Build');
    TaskGroup.Rebuild = new TaskGroup('rebuild', 'Rebuild');
    TaskGroup.Test = new TaskGroup('test', 'Test');
    return TaskGroup;
}());
exports.TaskGroup = TaskGroup;
var TaskScope;
(function (TaskScope) {
    TaskScope[TaskScope["Global"] = 1] = "Global";
    TaskScope[TaskScope["Workspace"] = 2] = "Workspace";
})(TaskScope = exports.TaskScope || (exports.TaskScope = {}));
var Task = /** @class */ (function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function Task() {
        var _a, _b;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var taskDefinition;
        var scope;
        var name;
        var source;
        var execution;
        var problemMatchers;
        if (typeof args[1] === 'string') {
            _a = __read(args, 5), taskDefinition = _a[0], name = _a[1], source = _a[2], execution = _a[3], problemMatchers = _a[4];
        }
        else {
            _b = __read(args, 6), taskDefinition = _b[0], scope = _b[1], name = _b[2], source = _b[3], execution = _b[4], problemMatchers = _b[5];
        }
        this.definition = taskDefinition;
        this.scope = scope;
        this.name = name;
        this.source = source;
        this.execution = execution;
        if (typeof problemMatchers === 'string') {
            this.taskProblemMatchers = [problemMatchers];
            this.hasTaskProblemMatchers = true;
        }
        else if (Array.isArray(problemMatchers)) {
            this.taskProblemMatchers = problemMatchers;
            this.hasTaskProblemMatchers = true;
        }
        else {
            this.taskProblemMatchers = [];
            this.hasTaskProblemMatchers = false;
        }
        this.isTaskBackground = false;
    }
    Object.defineProperty(Task.prototype, "definition", {
        get: function () {
            return this.taskDefinition;
        },
        set: function (value) {
            if (value === undefined || value === null) {
                throw errors_1.illegalArgument('Kind can\'t be undefined or null');
            }
            this.taskDefinition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "scope", {
        get: function () {
            return this.taskScope;
        },
        set: function (value) {
            if (value === null) {
                value = undefined;
            }
            this.taskScope = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "name", {
        get: function () {
            return this.taskName;
        },
        set: function (value) {
            if (typeof value !== 'string') {
                throw errors_1.illegalArgument('name');
            }
            this.taskName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "execution", {
        get: function () {
            return this.taskExecution;
        },
        set: function (value) {
            if (value === null) {
                value = undefined;
            }
            this.taskExecution = value;
            this.updateDefinitionBasedOnExecution();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "problemMatchers", {
        get: function () {
            return this.taskProblemMatchers;
        },
        set: function (value) {
            if (!Array.isArray(value)) {
                this.taskProblemMatchers = [];
                this.hasTaskProblemMatchers = false;
                return;
            }
            this.taskProblemMatchers = value;
            this.hasTaskProblemMatchers = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "hasProblemMatchers", {
        get: function () {
            return this.hasTaskProblemMatchers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "isBackground", {
        get: function () {
            return this.isTaskBackground;
        },
        set: function (value) {
            if (value !== true && value !== false) {
                value = false;
            }
            this.isTaskBackground = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "source", {
        get: function () {
            return this.taskSource;
        },
        set: function (value) {
            if (typeof value !== 'string' || value.length === 0) {
                throw errors_1.illegalArgument('source must be a string of length > 0');
            }
            this.taskSource = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "group", {
        get: function () {
            return this.taskGroup;
        },
        set: function (value) {
            if (value === undefined || value === null) {
                this.taskGroup = undefined;
                return;
            }
            this.taskGroup = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "presentationOptions", {
        get: function () {
            return this.taskPresentationOptions;
        },
        set: function (value) {
            if (value === null) {
                value = undefined;
            }
            this.taskPresentationOptions = value;
        },
        enumerable: true,
        configurable: true
    });
    Task.prototype.updateDefinitionBasedOnExecution = function () {
        if (this.taskExecution instanceof ProcessExecution) {
            Object.assign(this.taskDefinition, {
                type: 'process',
                id: this.taskExecution.computeId(),
                taskType: this.taskDefinition.type
            });
        }
        else if (this.taskExecution instanceof ShellExecution) {
            Object.assign(this.taskDefinition, {
                type: 'shell',
                id: this.taskExecution.computeId(),
                taskType: this.taskDefinition.type
            });
        }
    };
    return Task;
}());
exports.Task = Task;
var DebugAdapterExecutable = /** @class */ (function () {
    /**
     * Creates a description for a debug adapter based on an executable program.
     *
     * @param command The command or executable path that implements the debug adapter.
     * @param args Optional arguments to be passed to the command or executable.
     * @param options Optional options to be used when starting the command or executable.
     */
    function DebugAdapterExecutable(command, args, options) {
        this.command = command;
        this.args = args;
        this.options = options;
    }
    return DebugAdapterExecutable;
}());
exports.DebugAdapterExecutable = DebugAdapterExecutable;
/**
 * Represents a debug adapter running as a socket based server.
 */
var DebugAdapterServer = /** @class */ (function () {
    /**
     * Create a description for a debug adapter running as a socket based server.
     */
    function DebugAdapterServer(port, host) {
        this.port = port;
        this.host = host;
    }
    return DebugAdapterServer;
}());
exports.DebugAdapterServer = DebugAdapterServer;
/**
 * The base class of all breakpoint types.
 */
var Breakpoint = /** @class */ (function () {
    function Breakpoint(enabled, condition, hitCondition, logMessage) {
        this.enabled = enabled || false;
        this.condition = condition;
        this.hitCondition = hitCondition;
        this.logMessage = logMessage;
    }
    Object.defineProperty(Breakpoint.prototype, "id", {
        /**
         * The unique ID of the breakpoint.
         */
        get: function () {
            if (!this._id) {
                this._id = uuid_1.UUID.uuid4();
            }
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    return Breakpoint;
}());
exports.Breakpoint = Breakpoint;
/**
 * A breakpoint specified by a source location.
 */
var SourceBreakpoint = /** @class */ (function (_super) {
    __extends(SourceBreakpoint, _super);
    /**
     * Create a new breakpoint for a source location.
     */
    function SourceBreakpoint(location, enabled, condition, hitCondition, logMessage) {
        var _this = _super.call(this, enabled, condition, hitCondition, logMessage) || this;
        _this.location = location;
        return _this;
    }
    return SourceBreakpoint;
}(Breakpoint));
exports.SourceBreakpoint = SourceBreakpoint;
/**
 * A breakpoint specified by a function name.
 */
var FunctionBreakpoint = /** @class */ (function (_super) {
    __extends(FunctionBreakpoint, _super);
    /**
     * Create a new function breakpoint.
     */
    function FunctionBreakpoint(functionName, enabled, condition, hitCondition, logMessage) {
        var _this = _super.call(this, enabled, condition, hitCondition, logMessage) || this;
        _this.functionName = functionName;
        return _this;
    }
    return FunctionBreakpoint;
}(Breakpoint));
exports.FunctionBreakpoint = FunctionBreakpoint;
var Color = /** @class */ (function () {
    function Color(red, green, blue, alpha) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }
    return Color;
}());
exports.Color = Color;
var ColorInformation = /** @class */ (function () {
    function ColorInformation(range, color) {
        if (color && !(color instanceof Color)) {
            throw errors_1.illegalArgument('color');
        }
        if (!Range.isRange(range)) {
            throw errors_1.illegalArgument('range');
        }
        this.range = range;
        this.color = color;
    }
    return ColorInformation;
}());
exports.ColorInformation = ColorInformation;
var ColorPresentation = /** @class */ (function () {
    function ColorPresentation(label) {
        if (!label || typeof label !== 'string') {
            throw errors_1.illegalArgument('label');
        }
        this.label = label;
    }
    return ColorPresentation;
}());
exports.ColorPresentation = ColorPresentation;
var ColorFormat;
(function (ColorFormat) {
    ColorFormat[ColorFormat["RGB"] = 0] = "RGB";
    ColorFormat[ColorFormat["HEX"] = 1] = "HEX";
    ColorFormat[ColorFormat["HSL"] = 2] = "HSL";
})(ColorFormat = exports.ColorFormat || (exports.ColorFormat = {}));
var FoldingRange = /** @class */ (function () {
    function FoldingRange(start, end, kind) {
        this.start = start;
        this.end = end;
        this.kind = kind;
    }
    return FoldingRange;
}());
exports.FoldingRange = FoldingRange;
var FoldingRangeKind;
(function (FoldingRangeKind) {
    FoldingRangeKind[FoldingRangeKind["Comment"] = 1] = "Comment";
    FoldingRangeKind[FoldingRangeKind["Imports"] = 2] = "Imports";
    FoldingRangeKind[FoldingRangeKind["Region"] = 3] = "Region";
})(FoldingRangeKind = exports.FoldingRangeKind || (exports.FoldingRangeKind = {}));
/**
 * Enumeration of the supported operating systems.
 */
var OperatingSystem;
(function (OperatingSystem) {
    OperatingSystem["Windows"] = "Windows";
    OperatingSystem["Linux"] = "Linux";
    OperatingSystem["OSX"] = "OSX";
})(OperatingSystem = exports.OperatingSystem || (exports.OperatingSystem = {}));
/** The areas of the application shell where webview panel can reside. */
var WebviewPanelTargetArea;
(function (WebviewPanelTargetArea) {
    WebviewPanelTargetArea["Main"] = "main";
    WebviewPanelTargetArea["Left"] = "left";
    WebviewPanelTargetArea["Right"] = "right";
    WebviewPanelTargetArea["Bottom"] = "bottom";
})(WebviewPanelTargetArea = exports.WebviewPanelTargetArea || (exports.WebviewPanelTargetArea = {}));
var CallHierarchyItem = /** @class */ (function () {
    function CallHierarchyItem(kind, name, detail, uri, range, selectionRange) {
        this.kind = kind;
        this.name = name;
        this.detail = detail;
        this.uri = uri;
        this.range = range;
        this.selectionRange = selectionRange;
    }
    CallHierarchyItem.isCallHierarchyItem = function (thing) {
        if (thing instanceof CallHierarchyItem) {
            return true;
        }
        if (!thing) {
            return false;
        }
        return typeof thing.kind === 'number' &&
            typeof thing.name === 'string' &&
            vscode_uri_1.default.isUri(thing.uri) &&
            Range.isRange(thing.range) &&
            Range.isRange(thing.selectionRange);
    };
    return CallHierarchyItem;
}());
exports.CallHierarchyItem = CallHierarchyItem;
var CallHierarchyIncomingCall = /** @class */ (function () {
    function CallHierarchyIncomingCall(item, fromRanges) {
        this.fromRanges = fromRanges;
        this.from = item;
    }
    return CallHierarchyIncomingCall;
}());
exports.CallHierarchyIncomingCall = CallHierarchyIncomingCall;
var CallHierarchyOutgoingCall = /** @class */ (function () {
    function CallHierarchyOutgoingCall(item, fromRanges) {
        this.fromRanges = fromRanges;
        this.to = item;
    }
    return CallHierarchyOutgoingCall;
}());
exports.CallHierarchyOutgoingCall = CallHierarchyOutgoingCall;


/***/ })

}]);
//# sourceMappingURL=34.bundle.js.map
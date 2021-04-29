(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "../mdr-dsl/lib/browser/diagram/mdr-diagram-configuration.js":
/*!*******************************************************************!*\
  !*** ../mdr-dsl/lib/browser/diagram/mdr-diagram-configuration.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var sprotty_theia_1 = __webpack_require__(/*! sprotty-theia */ "../node_modules/sprotty-theia/lib/index.js");
var di_config_1 = __webpack_require__(/*! mdr-sprotty/lib/di.config */ "../mdr-sprotty/lib/di.config.js");
var html_views_1 = __webpack_require__(/*! mdr-sprotty/lib/html-views */ "../mdr-sprotty/lib/html-views.js");
var mdr_diagram_server_1 = __webpack_require__(/*! ./mdr-diagram-server */ "../mdr-dsl/lib/browser/diagram/mdr-diagram-server.js");
__webpack_require__(/*! sprotty-theia/css/theia-sprotty.css */ "../node_modules/sprotty-theia/css/theia-sprotty.css");
exports.MDR_DIAGRAM_TYPE = 'flex-dr-based-diagram';
var MdrDiagramConfiguration = /** @class */ (function () {
    function MdrDiagramConfiguration() {
        this.diagramType = exports.MDR_DIAGRAM_TYPE;
    }
    MdrDiagramConfiguration.prototype.createContainer = function (widgetId) {
        var container = di_config_1.createStateDiagramContainer(widgetId);
        container.bind(mdr_diagram_server_1.MdrDiagramServer).toSelf().inSingletonScope();
        container.bind(sprotty_theia_1.TheiaDiagramServer).toService(mdr_diagram_server_1.MdrDiagramServer);
        container.bind(sprotty_theia_1.LSTheiaDiagramServer).toService(mdr_diagram_server_1.MdrDiagramServer);
        container.bind(sprotty_1.TYPES.ModelSource).toService(sprotty_theia_1.TheiaDiagramServer);
        container.rebind(sprotty_1.KeyTool).to(sprotty_theia_1.TheiaKeyTool).inSingletonScope();
        container.bind(sprotty_theia_1.LSTheiaDiagramServerProvider).toProvider(function (context) {
            return function () {
                return new Promise(function (resolve) {
                    resolve(context.container.get(sprotty_theia_1.LSTheiaDiagramServer));
                });
            };
        });
        container.bind(sprotty_theia_1.CodeActionProvider).toSelf().inSingletonScope();
        container.bind(sprotty_theia_1.IRootPopupModelProvider).to(sprotty_theia_1.CodeActionPalettePopupProvider).inSingletonScope();
        container.bind(sprotty_theia_1.PaletteMouseListener).toSelf().inSingletonScope();
        container.rebind(sprotty_1.TYPES.PopupMouseListener).to(sprotty_theia_1.PaletteMouseListener);
        sprotty_1.configureModelElement(container, 'button:create', sprotty_theia_1.PaletteButton, html_views_1.PaletteButtonView);
        sprotty_1.configureCommand(container, sprotty_theia_1.DeleteWithWorkspaceEditCommand);
        sprotty_1.configureCommand(container, sprotty_theia_1.WorkspaceEditCommand);
        container.bind(sprotty_theia_1.CompletionLabelEditor).toSelf().inSingletonScope();
        container.bind(sprotty_theia_1.RenameLabelEditor).toSelf().inSingletonScope();
        container.bind(sprotty_theia_1.EditDiagramLocker).toSelf().inSingletonScope();
        container.rebind(sprotty_1.TYPES.IDiagramLocker).toService(sprotty_theia_1.EditDiagramLocker);
        return container;
    };
    MdrDiagramConfiguration = __decorate([
        inversify_1.injectable()
    ], MdrDiagramConfiguration);
    return MdrDiagramConfiguration;
}());
exports.MdrDiagramConfiguration = MdrDiagramConfiguration;


/***/ }),

/***/ "../mdr-dsl/lib/browser/diagram/mdr-diagram-language-client.js":
/*!*********************************************************************!*\
  !*** ../mdr-dsl/lib/browser/diagram/mdr-diagram-language-client.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_theia_1 = __webpack_require__(/*! sprotty-theia */ "../node_modules/sprotty-theia/lib/index.js");
var mdr_dsl_language_client_contribution_1 = __webpack_require__(/*! ../mdr-dsl-language-client-contribution */ "../mdr-dsl/lib/browser/mdr-dsl-language-client-contribution.js");
var MdrDiagramLanguageClient = /** @class */ (function (_super) {
    __extends(MdrDiagramLanguageClient, _super);
    function MdrDiagramLanguageClient(languageClientContribution, editorManager) {
        return _super.call(this, languageClientContribution, editorManager) || this;
    }
    MdrDiagramLanguageClient = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(mdr_dsl_language_client_contribution_1.MdrLanguageClientContribution)),
        __param(1, inversify_1.inject(browser_1.EditorManager)),
        __metadata("design:paramtypes", [mdr_dsl_language_client_contribution_1.MdrLanguageClientContribution,
            browser_1.EditorManager])
    ], MdrDiagramLanguageClient);
    return MdrDiagramLanguageClient;
}(sprotty_theia_1.DiagramLanguageClient));
exports.MdrDiagramLanguageClient = MdrDiagramLanguageClient;


/***/ }),

/***/ "../mdr-dsl/lib/browser/diagram/mdr-diagram-manager.js":
/*!*************************************************************!*\
  !*** ../mdr-dsl/lib/browser/diagram/mdr-diagram-manager.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var monaco_workspace_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-workspace */ "../node_modules/@theia/monaco/lib/browser/monaco-workspace.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_theia_1 = __webpack_require__(/*! sprotty-theia */ "../node_modules/sprotty-theia/lib/index.js");
var mdr_diagram_configuration_1 = __webpack_require__(/*! ./mdr-diagram-configuration */ "../mdr-dsl/lib/browser/diagram/mdr-diagram-configuration.js");
var mdr_diagram_language_client_1 = __webpack_require__(/*! ./mdr-diagram-language-client */ "../mdr-dsl/lib/browser/diagram/mdr-diagram-language-client.js");
var MdrDiagramManager = /** @class */ (function (_super) {
    __extends(MdrDiagramManager, _super);
    function MdrDiagramManager(diagramLanguageClient, fileSaver, widgetManager, editorManager, workspace, quickPickService) {
        var _this = _super.call(this) || this;
        _this.diagramType = mdr_diagram_configuration_1.MDR_DIAGRAM_TYPE;
        _this.iconClass = 'fa fa-sitemap';
        _this._diagramConnector = new sprotty_theia_1.LSTheiaSprottyConnector({ diagramLanguageClient: diagramLanguageClient, fileSaver: fileSaver, editorManager: editorManager, widgetManager: widgetManager, workspace: workspace, quickPickService: quickPickService, diagramManager: _this });
        return _this;
    }
    Object.defineProperty(MdrDiagramManager.prototype, "diagramConnector", {
        get: function () {
            return this._diagramConnector;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdrDiagramManager.prototype, "label", {
        get: function () {
            return 'MDR Diagram';
        },
        enumerable: true,
        configurable: true
    });
    MdrDiagramManager = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(mdr_diagram_language_client_1.MdrDiagramLanguageClient)),
        __param(1, inversify_1.inject(sprotty_theia_1.TheiaFileSaver)),
        __param(2, inversify_1.inject(browser_1.WidgetManager)),
        __param(3, inversify_1.inject(browser_2.EditorManager)),
        __param(4, inversify_1.inject(monaco_workspace_1.MonacoWorkspace)),
        __param(5, inversify_1.inject(browser_1.QuickPickService)),
        __metadata("design:paramtypes", [mdr_diagram_language_client_1.MdrDiagramLanguageClient,
            sprotty_theia_1.TheiaFileSaver,
            browser_1.WidgetManager,
            browser_2.EditorManager,
            monaco_workspace_1.MonacoWorkspace, Object])
    ], MdrDiagramManager);
    return MdrDiagramManager;
}(sprotty_theia_1.DiagramManager));
exports.MdrDiagramManager = MdrDiagramManager;


/***/ }),

/***/ "../mdr-dsl/lib/browser/diagram/mdr-diagram-server.js":
/*!************************************************************!*\
  !*** ../mdr-dsl/lib/browser/diagram/mdr-diagram-server.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var sprotty_theia_1 = __webpack_require__(/*! sprotty-theia */ "../node_modules/sprotty-theia/lib/index.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var MdrDiagramServer = /** @class */ (function (_super) {
    __extends(MdrDiagramServer, _super);
    function MdrDiagramServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdrDiagramServer.prototype.initialize = function (registry) {
        _super.prototype.initialize.call(this, registry);
        registry.register(sprotty_1.ReconnectCommand.KIND, this);
        registry.register(sprotty_1.EditLabelAction.KIND, this);
    };
    MdrDiagramServer.prototype.handleLocally = function (action) {
        if (action.kind === sprotty_1.EditLabelAction.KIND) {
            var label = this.getElement(action.labelId);
            if (label instanceof sprotty_1.SLabel && sprotty_theia_1.isTraceable(label)) {
                if (sprotty_1.getSubType(label) === 'xref')
                    this.completionLabelEditor.edit(label);
                else
                    this.renameLabelEditor.edit(label);
                return false;
            }
        }
        return _super.prototype.handleLocally.call(this, action);
    };
    MdrDiagramServer.prototype.getElement = function (elementId) {
        var root = (this.currentRoot instanceof sprotty_1.SModelRoot)
            ? this.currentRoot
            : this.modelFactory.createRoot(this.currentRoot);
        return root.index.getById(elementId);
    };
    __decorate([
        inversify_1.inject(sprotty_theia_1.CompletionLabelEditor),
        __metadata("design:type", sprotty_theia_1.CompletionLabelEditor)
    ], MdrDiagramServer.prototype, "completionLabelEditor", void 0);
    __decorate([
        inversify_1.inject(sprotty_theia_1.RenameLabelEditor),
        __metadata("design:type", sprotty_theia_1.RenameLabelEditor)
    ], MdrDiagramServer.prototype, "renameLabelEditor", void 0);
    __decorate([
        inversify_1.inject(sprotty_1.TYPES.IModelFactory),
        __metadata("design:type", Object)
    ], MdrDiagramServer.prototype, "modelFactory", void 0);
    MdrDiagramServer = __decorate([
        inversify_1.injectable()
    ], MdrDiagramServer);
    return MdrDiagramServer;
}(sprotty_theia_1.LSTheiaDiagramServer));
exports.MdrDiagramServer = MdrDiagramServer;


/***/ }),

/***/ "../mdr-dsl/lib/browser/mdr-dsl-contribution.js":
/*!******************************************************!*\
  !*** ../mdr-dsl/lib/browser/mdr-dsl-contribution.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
exports.MdrDslCommand = {
    id: 'MdrDsl.command',
    label: "Shows a message"
};
var MdrDslCommandContribution = /** @class */ (function () {
    function MdrDslCommandContribution(messageService) {
        this.messageService = messageService;
    }
    MdrDslCommandContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        registry.registerCommand(exports.MdrDslCommand, {
            execute: function () { return _this.messageService.info('Hello World!'); }
        });
    };
    MdrDslCommandContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(common_1.MessageService)),
        __metadata("design:paramtypes", [common_1.MessageService])
    ], MdrDslCommandContribution);
    return MdrDslCommandContribution;
}());
exports.MdrDslCommandContribution = MdrDslCommandContribution;
var MdrDslMenuContribution = /** @class */ (function () {
    function MdrDslMenuContribution() {
    }
    MdrDslMenuContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(browser_1.CommonMenus.EDIT_FIND, {
            commandId: exports.MdrDslCommand.id,
            label: 'Say Hello'
        });
    };
    MdrDslMenuContribution = __decorate([
        inversify_1.injectable()
    ], MdrDslMenuContribution);
    return MdrDslMenuContribution;
}());
exports.MdrDslMenuContribution = MdrDslMenuContribution;


/***/ }),

/***/ "../mdr-dsl/lib/browser/mdr-dsl-frontend-module.js":
/*!*********************************************************!*\
  !*** ../mdr-dsl/lib/browser/mdr-dsl-frontend-module.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Generated using theia-extension-generator
 */
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var browser_2 = __webpack_require__(/*! @theia/languages/lib/browser */ "../node_modules/@theia/languages/lib/browser/index.js");
var textmate_1 = __webpack_require__(/*! @theia/monaco/lib/browser/textmate */ "../node_modules/@theia/monaco/lib/browser/textmate/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_theia_1 = __webpack_require__(/*! sprotty-theia */ "../node_modules/sprotty-theia/lib/index.js");
var mdr_diagram_configuration_1 = __webpack_require__(/*! ./diagram/mdr-diagram-configuration */ "../mdr-dsl/lib/browser/diagram/mdr-diagram-configuration.js");
var mdr_diagram_language_client_1 = __webpack_require__(/*! ./diagram/mdr-diagram-language-client */ "../mdr-dsl/lib/browser/diagram/mdr-diagram-language-client.js");
var mdr_diagram_manager_1 = __webpack_require__(/*! ./diagram/mdr-diagram-manager */ "../mdr-dsl/lib/browser/diagram/mdr-diagram-manager.js");
var mdr_dsl_contribution_1 = __webpack_require__(/*! ./mdr-dsl-contribution */ "../mdr-dsl/lib/browser/mdr-dsl-contribution.js");
var mdr_dsl_grammar_contribution_1 = __webpack_require__(/*! ./mdr-dsl-grammar-contribution */ "../mdr-dsl/lib/browser/mdr-dsl-grammar-contribution.js");
var mdr_dsl_language_client_contribution_1 = __webpack_require__(/*! ./mdr-dsl-language-client-contribution */ "../mdr-dsl/lib/browser/mdr-dsl-language-client-contribution.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    // add your contribution bindings here
    bind(common_1.CommandContribution).to(mdr_dsl_contribution_1.MdrDslCommandContribution);
    bind(common_1.MenuContribution).to(mdr_dsl_contribution_1.MdrDslMenuContribution);
    bind(mdr_dsl_language_client_contribution_1.MdrLanguageClientContribution).toSelf().inSingletonScope();
    bind(browser_2.LanguageClientContribution).toService(mdr_dsl_language_client_contribution_1.MdrLanguageClientContribution);
    bind(textmate_1.LanguageGrammarDefinitionContribution).to(mdr_dsl_grammar_contribution_1.MdrGrammarContribution).inSingletonScope();
    bind(mdr_diagram_language_client_1.MdrDiagramLanguageClient).toSelf().inSingletonScope();
    bind(common_1.CommandContribution).to(sprotty_theia_1.LSDiagramCommandContribution).inSingletonScope();
    bind(browser_1.KeybindingContribution).to(sprotty_theia_1.LSDiagramKeybindingContribution).inSingletonScope();
    bind(sprotty_theia_1.DiagramConfiguration).to(mdr_diagram_configuration_1.MdrDiagramConfiguration).inSingletonScope();
    bind(mdr_diagram_manager_1.MdrDiagramManager).toSelf().inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).toService(mdr_diagram_manager_1.MdrDiagramManager);
    bind(browser_1.OpenHandler).toService(mdr_diagram_manager_1.MdrDiagramManager);
    bind(browser_1.WidgetFactory).toService(mdr_diagram_manager_1.MdrDiagramManager);
    bind(sprotty_theia_1.DiagramManagerProvider).toProvider(function (context) {
        return function () {
            return new Promise(function (resolve) {
                var diagramManager = context.container.get(mdr_diagram_manager_1.MdrDiagramManager);
                resolve(diagramManager);
            });
        };
    });
});


/***/ }),

/***/ "../mdr-dsl/lib/browser/mdr-dsl-grammar-contribution.js":
/*!**************************************************************!*\
  !*** ../mdr-dsl/lib/browser/mdr-dsl-grammar-contribution.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
var common_1 = __webpack_require__(/*! ../common */ "../mdr-dsl/lib/common/index.js");
var MdrGrammarContribution = /** @class */ (function () {
    function MdrGrammarContribution() {
        this.configuration = {
            'comments': {
                'lineComment': '//',
                'blockComment': ['/*', '*/']
            },
            'brackets': [
                ['{', '}'],
                ['[', ']'],
                ['(', ')']
            ],
            'autoClosingPairs': [
                { 'open': '{', 'close': '}' },
                { 'open': '[', 'close': ']' },
                { 'open': '(', 'close': ')' },
                { 'open': "'", 'close': "'", 'notIn': ['string', 'comment'] },
                { 'open': '"', 'close': '"', 'notIn': ['string'] },
                { 'open': '/**', 'close': ' */', 'notIn': ['string'] }
            ],
            'surroundingPairs': [
                { 'open': '{', 'close': '}' },
                { 'open': '[', 'close': ']' },
                { 'open': '(', 'close': ')' },
                { 'open': "'", 'close': "'" },
                { 'open': '"', 'close': '"' },
                { 'open': '`', 'close': '`' }
            ],
            'folding': {
                'markers': {
                    'start': new RegExp('^\\s*//\\s*#?region\\b'),
                    'end': new RegExp('^\\s*//\\s*#?endregion\\b')
                }
            }
        };
    }
    MdrGrammarContribution.prototype.registerTextmateLanguage = function (registry) {
        monaco.languages.register({
            id: common_1.MDR_LANGUAGE_SERVER_ID,
            aliases: [
                common_1.MDR_LANGUAGE_SERVER_NAME, common_1.MDR_LANGUAGE_SERVER_ID
            ],
            extensions: [
                common_1.MDR_LANGUAGE_FILE_EXTENSION,
            ],
            mimetypes: [
                'text/mdr'
            ]
        });
        monaco.languages.setLanguageConfiguration(common_1.MDR_LANGUAGE_SERVER_ID, this.configuration);
        var mdrGrammar = __webpack_require__(/*! ../../syntaxes/mdr.tmLanguage.json */ "../mdr-dsl/syntaxes/mdr.tmLanguage.json");
        registry.registerTextmateGrammarScope('source.mdr', {
            getGrammarDefinition: function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, {
                                format: 'json',
                                content: mdrGrammar,
                            }];
                    });
                });
            }
        });
        registry.mapLanguageIdToTextmateGrammar(common_1.MDR_LANGUAGE_SERVER_ID, 'source.mdr');
    };
    MdrGrammarContribution = __decorate([
        inversify_1.injectable()
    ], MdrGrammarContribution);
    return MdrGrammarContribution;
}());
exports.MdrGrammarContribution = MdrGrammarContribution;


/***/ }),

/***/ "../mdr-dsl/lib/browser/mdr-dsl-language-client-contribution.js":
/*!**********************************************************************!*\
  !*** ../mdr-dsl/lib/browser/mdr-dsl-language-client-contribution.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var browser_1 = __webpack_require__(/*! @theia/languages/lib/browser */ "../node_modules/@theia/languages/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_theia_1 = __webpack_require__(/*! sprotty-theia */ "../node_modules/sprotty-theia/lib/index.js");
var common_1 = __webpack_require__(/*! ../common */ "../mdr-dsl/lib/common/index.js");
var MdrLanguageClientContribution = /** @class */ (function (_super) {
    __extends(MdrLanguageClientContribution, _super);
    function MdrLanguageClientContribution(workspace, languages, languageClientFactory, diagramManagerProviders) {
        var _this = _super.call(this, workspace, languages, languageClientFactory, diagramManagerProviders) || this;
        _this.workspace = workspace;
        _this.languages = languages;
        _this.languageClientFactory = languageClientFactory;
        _this.diagramManagerProviders = diagramManagerProviders;
        _this.id = common_1.MDR_LANGUAGE_SERVER_ID;
        _this.name = common_1.MDR_LANGUAGE_SERVER_NAME;
        return _this;
    }
    Object.defineProperty(MdrLanguageClientContribution.prototype, "globPatterns", {
        get: function () {
            return [
                '**/*' + common_1.MDR_LANGUAGE_FILE_EXTENSION,
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdrLanguageClientContribution.prototype, "documentSelector", {
        get: function () {
            return [
                common_1.MDR_LANGUAGE_SERVER_ID
            ];
        },
        enumerable: true,
        configurable: true
    });
    MdrLanguageClientContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_1.Workspace)),
        __param(1, inversify_1.inject(browser_1.Languages)),
        __param(2, inversify_1.inject(browser_1.LanguageClientFactory)),
        __param(3, inversify_1.multiInject(sprotty_theia_1.DiagramManagerProvider)),
        __metadata("design:paramtypes", [Object, Object, browser_1.LanguageClientFactory, Array])
    ], MdrLanguageClientContribution);
    return MdrLanguageClientContribution;
}(sprotty_theia_1.DiagramLanguageClientContribution));
exports.MdrLanguageClientContribution = MdrLanguageClientContribution;


/***/ }),

/***/ "../mdr-dsl/lib/common/index.js":
/*!**************************************!*\
  !*** ../mdr-dsl/lib/common/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MDR_LANGUAGE_FILE_EXTENSION = '.mydsl';
exports.MDR_LANGUAGE_SERVER_ID = 'MDR';
exports.MDR_LANGUAGE_SERVER_NAME = 'MDR DSL';


/***/ }),

/***/ "../mdr-dsl/syntaxes/mdr.tmLanguage.json":
/*!***********************************************!*\
  !*** ../mdr-dsl/syntaxes/mdr.tmLanguage.json ***!
  \***********************************************/
/*! exports provided: $schema, name, patterns, repository, scopeName, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json\",\"name\":\"MDR-DSL\",\"patterns\":[{\"include\":\"#keywords\"},{\"include\":\"#strings\"},{\"include\":\"#comments\"}],\"repository\":{\"keywords\":{\"name\":\"constant.language.mdr\",\"patterns\":[{\"name\":\"constant.language.mdr\",\"match\":\"\\\\b(Title:|User story:|Summary:|Considered alternatives:|We chose:|Because:)\\\\b\"}]},\"strings\":{\"name\":\"string.quoted.double.mdr\",\"begin\":\"\\\"\",\"end\":\"\\\"\",\"patterns\":[{\"name\":\"constant.character.escape.mdr\",\"match\":\"\\\\\\\\.\"}]}},\"scopeName\":\"source.mdr\"}");

/***/ }),

/***/ "../mdr-sprotty/css/diagram.css":
/*!**************************************!*\
  !*** ../mdr-sprotty/css/diagram.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./diagram.css */ "../node_modules/css-loader/index.js!../mdr-sprotty/css/diagram.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../mdr-sprotty/lib/custom-edge-router.js":
/*!************************************************!*\
  !*** ../mdr-sprotty/lib/custom-edge-router.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var CustomRouter = /** @class */ (function (_super) {
    __extends(CustomRouter, _super);
    function CustomRouter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomRouter.prototype.getOptions = function (edge) {
        var defaultOptions = _super.prototype.getOptions.call(this, edge);
        return edge.id === sprotty_1.edgeInProgressID
            ? __assign(__assign({}, defaultOptions), { standardDistance: 1 }) : defaultOptions;
    };
    return CustomRouter;
}(sprotty_1.ManhattanEdgeRouter));
exports.CustomRouter = CustomRouter;


/***/ }),

/***/ "../mdr-sprotty/lib/di.config.js":
/*!***************************************!*\
  !*** ../mdr-sprotty/lib/di.config.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
__webpack_require__(/*! sprotty/css/sprotty.css */ "../node_modules/sprotty/css/sprotty.css");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
__webpack_require__(/*! ../css/diagram.css */ "../mdr-sprotty/css/diagram.css");
var views_1 = __webpack_require__(/*! ./views */ "../mdr-sprotty/lib/views.js");
var model_1 = __webpack_require__(/*! ./model */ "../mdr-sprotty/lib/model.js");
var custom_edge_router_1 = __webpack_require__(/*! ./custom-edge-router */ "../mdr-sprotty/lib/custom-edge-router.js");
var mdrDiagramModule = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    rebind(sprotty_1.TYPES.ILogger).to(sprotty_1.ConsoleLogger).inSingletonScope();
    rebind(sprotty_1.TYPES.LogLevel).toConstantValue(sprotty_1.LogLevel.warn);
    rebind(sprotty_1.TYPES.IModelFactory).to(model_1.MdrModelFactory);
    unbind(sprotty_1.ManhattanEdgeRouter);
    bind(sprotty_1.ManhattanEdgeRouter).to(custom_edge_router_1.CustomRouter).inSingletonScope();
    var context = { bind: bind, unbind: unbind, isBound: isBound, rebind: rebind };
    sprotty_1.configureModelElement(context, 'graph', model_1.MdrDiagram, sprotty_1.SGraphView);
    sprotty_1.configureModelElement(context, 'node', model_1.MdrNode, sprotty_1.RectangularNodeView);
    sprotty_1.configureModelElement(context, 'label', model_1.MdrLabel, sprotty_1.SLabelView);
    sprotty_1.configureModelElement(context, 'label:xref', model_1.MdrLabel, sprotty_1.SLabelView);
    sprotty_1.configureModelElement(context, 'edge', sprotty_1.SEdge, views_1.PolylineArrowEdgeView);
    sprotty_1.configureModelElement(context, 'html', sprotty_1.HtmlRoot, sprotty_1.HtmlRootView);
    sprotty_1.configureModelElement(context, 'pre-rendered', sprotty_1.PreRenderedElement, sprotty_1.PreRenderedView);
    sprotty_1.configureModelElement(context, 'palette', sprotty_1.SModelRoot, sprotty_1.HtmlRootView);
    sprotty_1.configureModelElement(context, 'routing-point', sprotty_1.SRoutingHandle, sprotty_1.SRoutingHandleView);
    sprotty_1.configureModelElement(context, 'volatile-routing-point', sprotty_1.SRoutingHandle, sprotty_1.SRoutingHandleView);
    sprotty_1.configureModelElement(context, 'port', model_1.CreateTransitionPort, views_1.TriangleButtonView);
    // FlexDRMetaModel Configuration
    sprotty_1.configureModelElement(context, 'drobject', model_1.MdrDiagram, views_1.DRObjectView);
    sprotty_1.configureModelElement(context, 'statement', model_1.MdrNode, views_1.StatementView);
    sprotty_1.configureModelElement(context, 'decision_problem_or_result', model_1.MdrNode, views_1.DecisionProblemOrResultView);
    sprotty_1.configureModelElement(context, 'decision_problem', model_1.MdrNode, views_1.DecisionProblemView);
    sprotty_1.configureModelElement(context, 'decision_result', model_1.MdrNode, views_1.DecisionResultView);
    sprotty_1.configureModelElement(context, 'decision_option', model_1.MdrNode, views_1.DecisionOptionView);
    sprotty_1.configureModelElement(context, 'generic_relationship', sprotty_1.SEdge, views_1.GenericRelationshipView);
    sprotty_1.configureModelElement(context, 'argumentative_relationship', sprotty_1.SEdge, views_1.ArgumentativeRelationshipView);
    sprotty_1.configureModelElement(context, 'derivative_relationship', sprotty_1.SEdge, views_1.DerivativeRelationshipView);
    sprotty_1.configureModelElement(context, 'consequence_relationship', sprotty_1.SEdge, views_1.ConsequenceRelationshipView);
    sprotty_1.configureModelElement(context, 'option_relationship', sprotty_1.SEdge, views_1.OptionRelationshipView);
    sprotty_1.configureCommand(context, sprotty_1.CreateElementCommand);
});
function createStateDiagramContainer(widgetId) {
    var container = new inversify_1.Container();
    container.load(sprotty_1.defaultModule, sprotty_1.selectModule, sprotty_1.moveModule, sprotty_1.boundsModule, sprotty_1.undoRedoModule, sprotty_1.viewportModule, sprotty_1.hoverModule, sprotty_1.fadeModule, sprotty_1.exportModule, sprotty_1.expandModule, sprotty_1.openModule, sprotty_1.buttonModule, sprotty_1.modelSourceModule, sprotty_1.decorationModule, sprotty_1.edgeEditModule, sprotty_1.edgeLayoutModule, sprotty_1.labelEditModule, sprotty_1.updateModule, sprotty_1.routingModule, mdrDiagramModule, sprotty_1.zorderModule);
    sprotty_1.overrideViewerOptions(container, {
        needsClientLayout: true,
        needsServerLayout: true,
        baseDiv: widgetId,
        hiddenDiv: widgetId + '_hidden'
    });
    return container;
}
exports.createStateDiagramContainer = createStateDiagramContainer;


/***/ }),

/***/ "../mdr-sprotty/lib/html-views.js":
/*!****************************************!*\
  !*** ../mdr-sprotty/lib/html-views.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx html */
var snabbdom_jsx_1 = __webpack_require__(/*! snabbdom-jsx */ "../node_modules/snabbdom-jsx/snabbdom-jsx.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var PaletteButtonView = /** @class */ (function () {
    function PaletteButtonView() {
    }
    PaletteButtonView.prototype.render = function (button, context) {
        return snabbdom_jsx_1.html("div", null, button.id);
    };
    PaletteButtonView = __decorate([
        inversify_1.injectable()
    ], PaletteButtonView);
    return PaletteButtonView;
}());
exports.PaletteButtonView = PaletteButtonView;


/***/ }),

/***/ "../mdr-sprotty/lib/model.js":
/*!***********************************!*\
  !*** ../mdr-sprotty/lib/model.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var MdrModelFactory = /** @class */ (function (_super) {
    __extends(MdrModelFactory, _super);
    function MdrModelFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdrModelFactory.prototype.initializeChild = function (child, schema, parent) {
        _super.prototype.initializeChild.call(this, child, schema, parent);
        if (child instanceof sprotty_1.SEdge) {
            child.routerKind = sprotty_1.ManhattanEdgeRouter.KIND;
            child.targetAnchorCorrection = Math.sqrt(5);
        }
        else if (child instanceof sprotty_1.SLabel) {
            child.edgePlacement = {
                rotate: true,
                position: 0.6
            };
        }
        return child;
    };
    MdrModelFactory = __decorate([
        inversify_1.injectable()
    ], MdrModelFactory);
    return MdrModelFactory;
}(sprotty_1.SGraphFactory));
exports.MdrModelFactory = MdrModelFactory;
var MdrDiagram = /** @class */ (function (_super) {
    __extends(MdrDiagram, _super);
    function MdrDiagram() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdrDiagram.prototype.hasFeature = function (feature) {
        return feature === sprotty_1.hoverFeedbackFeature || feature === sprotty_1.popupFeature || _super.prototype.hasFeature.call(this, feature);
    };
    return MdrDiagram;
}(sprotty_1.SGraph));
exports.MdrDiagram = MdrDiagram;
var MdrNode = /** @class */ (function (_super) {
    __extends(MdrNode, _super);
    function MdrNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdrNode.prototype.canConnect = function (routable, role) {
        return true;
    };
    return MdrNode;
}(sprotty_1.RectangularNode));
exports.MdrNode = MdrNode;
var CreateTransitionPort = /** @class */ (function (_super) {
    __extends(CreateTransitionPort, _super);
    function CreateTransitionPort() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreateTransitionPort.prototype.createAction = function (id) {
        return new sprotty_1.CreateElementAction(this.root.id, {
            id: id, type: 'edge', sourceId: this.parent.id, targetId: this.id
        });
    };
    CreateTransitionPort.prototype.hasFeature = function (feature) {
        return feature === sprotty_1.popupFeature || feature === sprotty_1.creatingOnDragFeature || _super.prototype.hasFeature.call(this, feature);
    };
    return CreateTransitionPort;
}(sprotty_1.RectangularPort));
exports.CreateTransitionPort = CreateTransitionPort;
var MdrLabel = /** @class */ (function (_super) {
    __extends(MdrLabel, _super);
    function MdrLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdrLabel.prototype.hasFeature = function (feature) {
        return feature === sprotty_1.editLabelFeature || _super.prototype.hasFeature.call(this, feature);
    };
    return MdrLabel;
}(sprotty_1.SLabel));
exports.MdrLabel = MdrLabel;


/***/ }),

/***/ "../mdr-sprotty/lib/views.js":
/*!***********************************!*\
  !*** ../mdr-sprotty/lib/views.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
/** @jsx svg */
var snabbdom_jsx_1 = __webpack_require__(/*! snabbdom-jsx */ "../node_modules/snabbdom-jsx/snabbdom-jsx.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var PolylineArrowEdgeView = /** @class */ (function (_super) {
    __extends(PolylineArrowEdgeView, _super);
    function PolylineArrowEdgeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PolylineArrowEdgeView.prototype.renderAdditionals = function (edge, segments, context) {
        var p1 = segments[segments.length - 2];
        var p2 = segments[segments.length - 1];
        return [
            snabbdom_jsx_1.svg("path", { "class-sprotty-edge-arrow": true, d: "M 6,-3 L 0,0 L 6,3 Z", transform: "rotate(" + this.angle(p2, p1) + " " + p2.x + " " + p2.y + ") translate(" + p2.x + " " + p2.y + ")" })
        ];
    };
    PolylineArrowEdgeView.prototype.angle = function (x0, x1) {
        return sprotty_1.toDegrees(Math.atan2(x1.y - x0.y, x1.x - x0.x));
    };
    PolylineArrowEdgeView = __decorate([
        inversify_1.injectable()
    ], PolylineArrowEdgeView);
    return PolylineArrowEdgeView;
}(sprotty_1.PolylineEdgeView));
exports.PolylineArrowEdgeView = PolylineArrowEdgeView;
var TriangleButtonView = /** @class */ (function () {
    function TriangleButtonView() {
    }
    TriangleButtonView.prototype.render = function (model, context, args) {
        return snabbdom_jsx_1.svg("path", { "class-sprotty-button": true, d: "M 0,0 L 8,4 L 0,8 Z" });
    };
    TriangleButtonView = __decorate([
        inversify_1.injectable()
    ], TriangleButtonView);
    return TriangleButtonView;
}());
exports.TriangleButtonView = TriangleButtonView;
/**
 * Flex DR Meta Model Class Representations
 */
// Structural Elements
var DRObjectView = /** @class */ (function (_super) {
    __extends(DRObjectView, _super);
    function DRObjectView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DRObjectView = __decorate([
        inversify_1.injectable()
    ], DRObjectView);
    return DRObjectView;
}(sprotty_1.RectangularNodeView));
exports.DRObjectView = DRObjectView;
var StatementView = /** @class */ (function () {
    function StatementView() {
    }
    StatementView.prototype.render = function (node, context) {
        return snabbdom_jsx_1.svg("g", null,
            snabbdom_jsx_1.svg("rect", { x: "0", y: "0", width: Math.max(node.size.width, 0), height: Math.max(node.size.height, 0), style: { fill: "skyblue" } }),
            context.renderChildren(node));
    };
    StatementView = __decorate([
        inversify_1.injectable()
    ], StatementView);
    return StatementView;
}());
exports.StatementView = StatementView;
var DecisionProblemOrResultView = /** @class */ (function () {
    function DecisionProblemOrResultView() {
    }
    DecisionProblemOrResultView.prototype.render = function (node, context, args) {
        return getTwoPartedNode("Decision Option", node, context);
    };
    DecisionProblemOrResultView = __decorate([
        inversify_1.injectable()
    ], DecisionProblemOrResultView);
    return DecisionProblemOrResultView;
}());
exports.DecisionProblemOrResultView = DecisionProblemOrResultView;
var DecisionProblemView = /** @class */ (function () {
    function DecisionProblemView() {
    }
    DecisionProblemView.prototype.render = function (node, context, args) {
        return getTwoPartedNode("Decision Problem", node, context);
    };
    DecisionProblemView = __decorate([
        inversify_1.injectable()
    ], DecisionProblemView);
    return DecisionProblemView;
}());
exports.DecisionProblemView = DecisionProblemView;
var DecisionResultView = /** @class */ (function () {
    function DecisionResultView() {
    }
    DecisionResultView.prototype.render = function (node, context, args) {
        return getTwoPartedNode("Decision Result", node, context);
    };
    DecisionResultView = __decorate([
        inversify_1.injectable()
    ], DecisionResultView);
    return DecisionResultView;
}());
exports.DecisionResultView = DecisionResultView;
var DecisionOptionView = /** @class */ (function () {
    function DecisionOptionView() {
    }
    DecisionOptionView.prototype.render = function (node, context, args) {
        return getTwoPartedNode("Decision Option", node, context);
    };
    DecisionOptionView = __decorate([
        inversify_1.injectable()
    ], DecisionOptionView);
    return DecisionOptionView;
}());
exports.DecisionOptionView = DecisionOptionView;
// Connection Elements
var GenericRelationshipView = /** @class */ (function (_super) {
    __extends(GenericRelationshipView, _super);
    function GenericRelationshipView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GenericRelationshipView.prototype.renderLine = function (edge, segments, context) {
        var firstPoint = segments[0];
        var path = "M " + firstPoint.x + "," + firstPoint.y;
        for (var i = 1; i < segments.length; i++) {
            var p = segments[i];
            path += " L " + p.x + "," + p.y;
        }
        return snabbdom_jsx_1.svg("path", { d: path, stroke: "green" });
    };
    GenericRelationshipView = __decorate([
        inversify_1.injectable()
    ], GenericRelationshipView);
    return GenericRelationshipView;
}(sprotty_1.PolylineEdgeView));
exports.GenericRelationshipView = GenericRelationshipView;
var ArgumentativeRelationshipView = /** @class */ (function (_super) {
    __extends(ArgumentativeRelationshipView, _super);
    function ArgumentativeRelationshipView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArgumentativeRelationshipView = __decorate([
        inversify_1.injectable()
    ], ArgumentativeRelationshipView);
    return ArgumentativeRelationshipView;
}(sprotty_1.PolylineEdgeView));
exports.ArgumentativeRelationshipView = ArgumentativeRelationshipView;
var DerivativeRelationshipView = /** @class */ (function (_super) {
    __extends(DerivativeRelationshipView, _super);
    function DerivativeRelationshipView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DerivativeRelationshipView = __decorate([
        inversify_1.injectable()
    ], DerivativeRelationshipView);
    return DerivativeRelationshipView;
}(PolylineArrowEdgeView));
exports.DerivativeRelationshipView = DerivativeRelationshipView;
var ConsequenceRelationshipView = /** @class */ (function (_super) {
    __extends(ConsequenceRelationshipView, _super);
    function ConsequenceRelationshipView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gap = 10;
        return _this;
    }
    // Draw a double stroke line
    ConsequenceRelationshipView.prototype.renderLine = function (edge, segments, context) {
        console.log("Rendering Line.");
        var firstPoint = segments[0];
        var path = "M " + (firstPoint.x + 1) + "," + firstPoint.y;
        for (var i = 1; i < segments.length; i++) {
            var p = segments[i];
            path += " L " + p.x + "," + p.y;
            if (segments[i - 1].x === segments[i].x) {
                // A horizontal line.
                console.log("Horizontal part!");
                var lastPoint = segments[i - 1];
                var currPoint = segments[i];
                // Draw second line slightly to the side of the current line.
                path += " M " + lastPoint.x + "," + (lastPoint.y + this.gap) + " L " + currPoint.x + "," + (currPoint.y + this.gap);
            }
            else {
                // A vertical line.
                console.log("Vertical part!");
                var lastPoint = segments[i - 1];
                var currPoint = segments[i];
                path += " M " + (lastPoint.x + this.gap) + "," + lastPoint.y + " L " + (currPoint.x + this.gap) + "," + currPoint.y;
            }
            // Move back
            path += " M " + p.x + "," + p.y;
        }
        return snabbdom_jsx_1.svg("path", { d: path });
    };
    ConsequenceRelationshipView = __decorate([
        inversify_1.injectable()
    ], ConsequenceRelationshipView);
    return ConsequenceRelationshipView;
}(sprotty_1.PolylineEdgeView));
exports.ConsequenceRelationshipView = ConsequenceRelationshipView;
var OptionRelationshipView = /** @class */ (function (_super) {
    __extends(OptionRelationshipView, _super);
    /**
     * Copied from the sprotty library @PolylineEdgeView and changed a bit.
     *
     * For reference on svg paths: https://developer.mozilla.org/de/docs/Web/SVG/Tutorial/Paths.
     */
    function OptionRelationshipView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @Override
    OptionRelationshipView.prototype.renderLine = function (edge, segments, context) {
        var firstPoint = segments[0];
        // Defines an aggregation arrow head at the beginning of the line.
        // Move to the beginning of the line.
        var path = "M " + firstPoint.x + "," + firstPoint.y;
        // Draw the rhombus.
        path = path + (" L " + (firstPoint.x + 3) + " " + (firstPoint.y + 5));
        path = path + (" L " + firstPoint.x + " " + (firstPoint.y + 10));
        path = path + (" L " + (firstPoint.x - 3) + " " + (firstPoint.y + 5));
        path = path + (" L " + firstPoint.x + " " + firstPoint.y);
        path = path + (" M " + firstPoint.x + " " + (firstPoint.y + 10));
        // Draw the rest of the line.
        for (var i = 1; i < segments.length; i++) {
            var p = segments[i];
            path += " L " + p.x + "," + p.y;
        }
        // Put the line into a path.
        return snabbdom_jsx_1.svg("path", { d: path, "stroke-width": "1" });
    };
    OptionRelationshipView = __decorate([
        inversify_1.injectable()
        /**
         * Copied from the sprotty library @PolylineEdgeView and changed a bit.
         *
         * For reference on svg paths: https://developer.mozilla.org/de/docs/Web/SVG/Tutorial/Paths.
         */
    ], OptionRelationshipView);
    return OptionRelationshipView;
}(sprotty_1.PolylineEdgeView));
exports.OptionRelationshipView = OptionRelationshipView;
function getTwoPartedNode(text, node, context) {
    var height = Math.max(node.size.height, 0);
    var width = Math.max(node.size.width, 0);
    return snabbdom_jsx_1.svg("g", null,
        snabbdom_jsx_1.svg("rect", { x: "0", y: "0", width: width, height: height, style: { fill: "skyblue" } }),
        context.renderChildren(node),
        snabbdom_jsx_1.svg("rect", { x: "0", y: height, width: width, height: 0.5 * height, style: { fill: "#A5A4A5" } }),
        snabbdom_jsx_1.svg("text", { x: "10", y: 1.37 * height, style: { textDecorationLine: 'underline' } }, text));
}


/***/ }),

/***/ "../node_modules/css-loader/index.js!../mdr-sprotty/css/diagram.css":
/*!*****************************************************************!*\
  !*** ../node_modules/css-loader!../mdr-sprotty/css/diagram.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sprotty-node {\n    fill: lightblue\n}\n\n.sprotty-node.selected {\n    stroke-width: 2;\n    stroke: #0070be;\n}\n\n.sprotty-label {\n    fill: black;\n    stroke-width: 0;\n}\n\n.sprotty-button {\n    fill: #B4B4B488;\n}\n\n.sprotty-edge .sprotty-label {\n    fill: var(--theia-foreground);\n}\n\n.sprotty-edge {\n    fill:none;\n    stroke: var(--theia-foreground);\n    stroke-width: 2px;\n}\n\n.sprotty-edge-arrow {\n    fill:#B4B4B4;\n}\n\n.sprotty-edge > .sprotty-routing-handle {\n    r: 5px;\n    fill: #888;\n    stroke: none;\n    z-index: 1000;\n}\n\n.sprotty-edge > .sprotty-routing-handle[data-kind='line'] {\n    opacity: 0.35;\n}\n\n.sprotty-edge > .sprotty-routing-handle.selected {\n    fill: #0070be;\n}\n\n.sprotty-edge > .sprotty-routing-handle.mouseover {\n    stroke: #0191f8;\n    stroke-width: 1;\n}\n\n.sprotty-edge.mouseover:not(.selected) {\n    stroke-width: 3px;\n}\n\n.sprotty-hidden {\n    font-size: var(--theia-ui-font-size1);\n    width: 0px;\n    height: 0px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ../node_modules/moment/locale sync ^\.\/.*$ ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../node_modules/moment/locale/af.js",
	"./af.js": "../node_modules/moment/locale/af.js",
	"./ar": "../node_modules/moment/locale/ar.js",
	"./ar-dz": "../node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "../node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "../node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "../node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "../node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "../node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "../node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "../node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "../node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "../node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "../node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "../node_modules/moment/locale/ar-tn.js",
	"./ar.js": "../node_modules/moment/locale/ar.js",
	"./az": "../node_modules/moment/locale/az.js",
	"./az.js": "../node_modules/moment/locale/az.js",
	"./be": "../node_modules/moment/locale/be.js",
	"./be.js": "../node_modules/moment/locale/be.js",
	"./bg": "../node_modules/moment/locale/bg.js",
	"./bg.js": "../node_modules/moment/locale/bg.js",
	"./bm": "../node_modules/moment/locale/bm.js",
	"./bm.js": "../node_modules/moment/locale/bm.js",
	"./bn": "../node_modules/moment/locale/bn.js",
	"./bn.js": "../node_modules/moment/locale/bn.js",
	"./bo": "../node_modules/moment/locale/bo.js",
	"./bo.js": "../node_modules/moment/locale/bo.js",
	"./br": "../node_modules/moment/locale/br.js",
	"./br.js": "../node_modules/moment/locale/br.js",
	"./bs": "../node_modules/moment/locale/bs.js",
	"./bs.js": "../node_modules/moment/locale/bs.js",
	"./ca": "../node_modules/moment/locale/ca.js",
	"./ca.js": "../node_modules/moment/locale/ca.js",
	"./cs": "../node_modules/moment/locale/cs.js",
	"./cs.js": "../node_modules/moment/locale/cs.js",
	"./cv": "../node_modules/moment/locale/cv.js",
	"./cv.js": "../node_modules/moment/locale/cv.js",
	"./cy": "../node_modules/moment/locale/cy.js",
	"./cy.js": "../node_modules/moment/locale/cy.js",
	"./da": "../node_modules/moment/locale/da.js",
	"./da.js": "../node_modules/moment/locale/da.js",
	"./de": "../node_modules/moment/locale/de.js",
	"./de-at": "../node_modules/moment/locale/de-at.js",
	"./de-at.js": "../node_modules/moment/locale/de-at.js",
	"./de-ch": "../node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "../node_modules/moment/locale/de-ch.js",
	"./de.js": "../node_modules/moment/locale/de.js",
	"./dv": "../node_modules/moment/locale/dv.js",
	"./dv.js": "../node_modules/moment/locale/dv.js",
	"./el": "../node_modules/moment/locale/el.js",
	"./el.js": "../node_modules/moment/locale/el.js",
	"./en-SG": "../node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "../node_modules/moment/locale/en-SG.js",
	"./en-au": "../node_modules/moment/locale/en-au.js",
	"./en-au.js": "../node_modules/moment/locale/en-au.js",
	"./en-ca": "../node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "../node_modules/moment/locale/en-ca.js",
	"./en-gb": "../node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "../node_modules/moment/locale/en-gb.js",
	"./en-ie": "../node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "../node_modules/moment/locale/en-ie.js",
	"./en-il": "../node_modules/moment/locale/en-il.js",
	"./en-il.js": "../node_modules/moment/locale/en-il.js",
	"./en-nz": "../node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "../node_modules/moment/locale/en-nz.js",
	"./eo": "../node_modules/moment/locale/eo.js",
	"./eo.js": "../node_modules/moment/locale/eo.js",
	"./es": "../node_modules/moment/locale/es.js",
	"./es-do": "../node_modules/moment/locale/es-do.js",
	"./es-do.js": "../node_modules/moment/locale/es-do.js",
	"./es-us": "../node_modules/moment/locale/es-us.js",
	"./es-us.js": "../node_modules/moment/locale/es-us.js",
	"./es.js": "../node_modules/moment/locale/es.js",
	"./et": "../node_modules/moment/locale/et.js",
	"./et.js": "../node_modules/moment/locale/et.js",
	"./eu": "../node_modules/moment/locale/eu.js",
	"./eu.js": "../node_modules/moment/locale/eu.js",
	"./fa": "../node_modules/moment/locale/fa.js",
	"./fa.js": "../node_modules/moment/locale/fa.js",
	"./fi": "../node_modules/moment/locale/fi.js",
	"./fi.js": "../node_modules/moment/locale/fi.js",
	"./fo": "../node_modules/moment/locale/fo.js",
	"./fo.js": "../node_modules/moment/locale/fo.js",
	"./fr": "../node_modules/moment/locale/fr.js",
	"./fr-ca": "../node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "../node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "../node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "../node_modules/moment/locale/fr-ch.js",
	"./fr.js": "../node_modules/moment/locale/fr.js",
	"./fy": "../node_modules/moment/locale/fy.js",
	"./fy.js": "../node_modules/moment/locale/fy.js",
	"./ga": "../node_modules/moment/locale/ga.js",
	"./ga.js": "../node_modules/moment/locale/ga.js",
	"./gd": "../node_modules/moment/locale/gd.js",
	"./gd.js": "../node_modules/moment/locale/gd.js",
	"./gl": "../node_modules/moment/locale/gl.js",
	"./gl.js": "../node_modules/moment/locale/gl.js",
	"./gom-latn": "../node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "../node_modules/moment/locale/gom-latn.js",
	"./gu": "../node_modules/moment/locale/gu.js",
	"./gu.js": "../node_modules/moment/locale/gu.js",
	"./he": "../node_modules/moment/locale/he.js",
	"./he.js": "../node_modules/moment/locale/he.js",
	"./hi": "../node_modules/moment/locale/hi.js",
	"./hi.js": "../node_modules/moment/locale/hi.js",
	"./hr": "../node_modules/moment/locale/hr.js",
	"./hr.js": "../node_modules/moment/locale/hr.js",
	"./hu": "../node_modules/moment/locale/hu.js",
	"./hu.js": "../node_modules/moment/locale/hu.js",
	"./hy-am": "../node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "../node_modules/moment/locale/hy-am.js",
	"./id": "../node_modules/moment/locale/id.js",
	"./id.js": "../node_modules/moment/locale/id.js",
	"./is": "../node_modules/moment/locale/is.js",
	"./is.js": "../node_modules/moment/locale/is.js",
	"./it": "../node_modules/moment/locale/it.js",
	"./it-ch": "../node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "../node_modules/moment/locale/it-ch.js",
	"./it.js": "../node_modules/moment/locale/it.js",
	"./ja": "../node_modules/moment/locale/ja.js",
	"./ja.js": "../node_modules/moment/locale/ja.js",
	"./jv": "../node_modules/moment/locale/jv.js",
	"./jv.js": "../node_modules/moment/locale/jv.js",
	"./ka": "../node_modules/moment/locale/ka.js",
	"./ka.js": "../node_modules/moment/locale/ka.js",
	"./kk": "../node_modules/moment/locale/kk.js",
	"./kk.js": "../node_modules/moment/locale/kk.js",
	"./km": "../node_modules/moment/locale/km.js",
	"./km.js": "../node_modules/moment/locale/km.js",
	"./kn": "../node_modules/moment/locale/kn.js",
	"./kn.js": "../node_modules/moment/locale/kn.js",
	"./ko": "../node_modules/moment/locale/ko.js",
	"./ko.js": "../node_modules/moment/locale/ko.js",
	"./ku": "../node_modules/moment/locale/ku.js",
	"./ku.js": "../node_modules/moment/locale/ku.js",
	"./ky": "../node_modules/moment/locale/ky.js",
	"./ky.js": "../node_modules/moment/locale/ky.js",
	"./lb": "../node_modules/moment/locale/lb.js",
	"./lb.js": "../node_modules/moment/locale/lb.js",
	"./lo": "../node_modules/moment/locale/lo.js",
	"./lo.js": "../node_modules/moment/locale/lo.js",
	"./lt": "../node_modules/moment/locale/lt.js",
	"./lt.js": "../node_modules/moment/locale/lt.js",
	"./lv": "../node_modules/moment/locale/lv.js",
	"./lv.js": "../node_modules/moment/locale/lv.js",
	"./me": "../node_modules/moment/locale/me.js",
	"./me.js": "../node_modules/moment/locale/me.js",
	"./mi": "../node_modules/moment/locale/mi.js",
	"./mi.js": "../node_modules/moment/locale/mi.js",
	"./mk": "../node_modules/moment/locale/mk.js",
	"./mk.js": "../node_modules/moment/locale/mk.js",
	"./ml": "../node_modules/moment/locale/ml.js",
	"./ml.js": "../node_modules/moment/locale/ml.js",
	"./mn": "../node_modules/moment/locale/mn.js",
	"./mn.js": "../node_modules/moment/locale/mn.js",
	"./mr": "../node_modules/moment/locale/mr.js",
	"./mr.js": "../node_modules/moment/locale/mr.js",
	"./ms": "../node_modules/moment/locale/ms.js",
	"./ms-my": "../node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "../node_modules/moment/locale/ms-my.js",
	"./ms.js": "../node_modules/moment/locale/ms.js",
	"./mt": "../node_modules/moment/locale/mt.js",
	"./mt.js": "../node_modules/moment/locale/mt.js",
	"./my": "../node_modules/moment/locale/my.js",
	"./my.js": "../node_modules/moment/locale/my.js",
	"./nb": "../node_modules/moment/locale/nb.js",
	"./nb.js": "../node_modules/moment/locale/nb.js",
	"./ne": "../node_modules/moment/locale/ne.js",
	"./ne.js": "../node_modules/moment/locale/ne.js",
	"./nl": "../node_modules/moment/locale/nl.js",
	"./nl-be": "../node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "../node_modules/moment/locale/nl-be.js",
	"./nl.js": "../node_modules/moment/locale/nl.js",
	"./nn": "../node_modules/moment/locale/nn.js",
	"./nn.js": "../node_modules/moment/locale/nn.js",
	"./pa-in": "../node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "../node_modules/moment/locale/pa-in.js",
	"./pl": "../node_modules/moment/locale/pl.js",
	"./pl.js": "../node_modules/moment/locale/pl.js",
	"./pt": "../node_modules/moment/locale/pt.js",
	"./pt-br": "../node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "../node_modules/moment/locale/pt-br.js",
	"./pt.js": "../node_modules/moment/locale/pt.js",
	"./ro": "../node_modules/moment/locale/ro.js",
	"./ro.js": "../node_modules/moment/locale/ro.js",
	"./ru": "../node_modules/moment/locale/ru.js",
	"./ru.js": "../node_modules/moment/locale/ru.js",
	"./sd": "../node_modules/moment/locale/sd.js",
	"./sd.js": "../node_modules/moment/locale/sd.js",
	"./se": "../node_modules/moment/locale/se.js",
	"./se.js": "../node_modules/moment/locale/se.js",
	"./si": "../node_modules/moment/locale/si.js",
	"./si.js": "../node_modules/moment/locale/si.js",
	"./sk": "../node_modules/moment/locale/sk.js",
	"./sk.js": "../node_modules/moment/locale/sk.js",
	"./sl": "../node_modules/moment/locale/sl.js",
	"./sl.js": "../node_modules/moment/locale/sl.js",
	"./sq": "../node_modules/moment/locale/sq.js",
	"./sq.js": "../node_modules/moment/locale/sq.js",
	"./sr": "../node_modules/moment/locale/sr.js",
	"./sr-cyrl": "../node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "../node_modules/moment/locale/sr.js",
	"./ss": "../node_modules/moment/locale/ss.js",
	"./ss.js": "../node_modules/moment/locale/ss.js",
	"./sv": "../node_modules/moment/locale/sv.js",
	"./sv.js": "../node_modules/moment/locale/sv.js",
	"./sw": "../node_modules/moment/locale/sw.js",
	"./sw.js": "../node_modules/moment/locale/sw.js",
	"./ta": "../node_modules/moment/locale/ta.js",
	"./ta.js": "../node_modules/moment/locale/ta.js",
	"./te": "../node_modules/moment/locale/te.js",
	"./te.js": "../node_modules/moment/locale/te.js",
	"./tet": "../node_modules/moment/locale/tet.js",
	"./tet.js": "../node_modules/moment/locale/tet.js",
	"./tg": "../node_modules/moment/locale/tg.js",
	"./tg.js": "../node_modules/moment/locale/tg.js",
	"./th": "../node_modules/moment/locale/th.js",
	"./th.js": "../node_modules/moment/locale/th.js",
	"./tl-ph": "../node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "../node_modules/moment/locale/tl-ph.js",
	"./tlh": "../node_modules/moment/locale/tlh.js",
	"./tlh.js": "../node_modules/moment/locale/tlh.js",
	"./tr": "../node_modules/moment/locale/tr.js",
	"./tr.js": "../node_modules/moment/locale/tr.js",
	"./tzl": "../node_modules/moment/locale/tzl.js",
	"./tzl.js": "../node_modules/moment/locale/tzl.js",
	"./tzm": "../node_modules/moment/locale/tzm.js",
	"./tzm-latn": "../node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "../node_modules/moment/locale/tzm.js",
	"./ug-cn": "../node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "../node_modules/moment/locale/ug-cn.js",
	"./uk": "../node_modules/moment/locale/uk.js",
	"./uk.js": "../node_modules/moment/locale/uk.js",
	"./ur": "../node_modules/moment/locale/ur.js",
	"./ur.js": "../node_modules/moment/locale/ur.js",
	"./uz": "../node_modules/moment/locale/uz.js",
	"./uz-latn": "../node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "../node_modules/moment/locale/uz-latn.js",
	"./uz.js": "../node_modules/moment/locale/uz.js",
	"./vi": "../node_modules/moment/locale/vi.js",
	"./vi.js": "../node_modules/moment/locale/vi.js",
	"./x-pseudo": "../node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../node_modules/moment/locale/x-pseudo.js",
	"./yo": "../node_modules/moment/locale/yo.js",
	"./yo.js": "../node_modules/moment/locale/yo.js",
	"./zh-cn": "../node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "../node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "../node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "../node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "../node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "../node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "../node_modules/vscode-textmate/release sync recursive":
/*!****************************************************!*\
  !*** ../node_modules/vscode-textmate/release sync ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../node_modules/vscode-textmate/release sync recursive";

/***/ })

}]);
//# sourceMappingURL=55.bundle.js.map
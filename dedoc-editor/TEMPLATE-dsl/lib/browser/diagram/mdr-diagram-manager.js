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
var browser_1 = require("@theia/core/lib/browser");
var browser_2 = require("@theia/editor/lib/browser");
var monaco_workspace_1 = require("@theia/monaco/lib/browser/monaco-workspace");
var inversify_1 = require("inversify");
var sprotty_theia_1 = require("sprotty-theia");
var mdr_diagram_configuration_1 = require("./mdr-diagram-configuration");
var mdr_diagram_language_client_1 = require("./mdr-diagram-language-client");
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
//# sourceMappingURL=mdr-diagram-manager.js.map
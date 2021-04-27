"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var sprotty_1 = require("sprotty");
var sprotty_theia_1 = require("sprotty-theia");
var di_config_1 = require("mdr-sprotty/lib/di.config");
var html_views_1 = require("mdr-sprotty/lib/html-views");
var mdr_diagram_server_1 = require("./mdr-diagram-server");
require("sprotty-theia/css/theia-sprotty.css");
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
//# sourceMappingURL=mdr-diagram-configuration.js.map
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
var inversify_1 = require("inversify");
var sprotty_theia_1 = require("sprotty-theia");
var sprotty_1 = require("sprotty");
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
//# sourceMappingURL=mdr-diagram-server.js.map
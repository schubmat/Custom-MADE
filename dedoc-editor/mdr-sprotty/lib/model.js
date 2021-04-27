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
var inversify_1 = require("inversify");
var sprotty_1 = require("sprotty");
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
//# sourceMappingURL=model.js.map
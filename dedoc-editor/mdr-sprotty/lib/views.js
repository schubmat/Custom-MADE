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
var snabbdom_jsx_1 = require("snabbdom-jsx");
var sprotty_1 = require("sprotty");
var inversify_1 = require("inversify");
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
var StatementView = /** @class */ (function (_super) {
    __extends(StatementView, _super);
    function StatementView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StatementView = __decorate([
        inversify_1.injectable()
    ], StatementView);
    return StatementView;
}(sprotty_1.RectangularNodeView));
exports.StatementView = StatementView;
var DecisionProblemOrResultView = /** @class */ (function (_super) {
    __extends(DecisionProblemOrResultView, _super);
    function DecisionProblemOrResultView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DecisionProblemOrResultView = __decorate([
        inversify_1.injectable()
    ], DecisionProblemOrResultView);
    return DecisionProblemOrResultView;
}(sprotty_1.RectangularNodeView));
exports.DecisionProblemOrResultView = DecisionProblemOrResultView;
var DecisionProblemView = /** @class */ (function (_super) {
    __extends(DecisionProblemView, _super);
    function DecisionProblemView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DecisionProblemView = __decorate([
        inversify_1.injectable()
    ], DecisionProblemView);
    return DecisionProblemView;
}(sprotty_1.RectangularNodeView));
exports.DecisionProblemView = DecisionProblemView;
var DecisionResultView = /** @class */ (function (_super) {
    __extends(DecisionResultView, _super);
    function DecisionResultView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DecisionResultView = __decorate([
        inversify_1.injectable()
    ], DecisionResultView);
    return DecisionResultView;
}(sprotty_1.RectangularNodeView));
exports.DecisionResultView = DecisionResultView;
var DecisionOptionView = /** @class */ (function (_super) {
    __extends(DecisionOptionView, _super);
    function DecisionOptionView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DecisionOptionView = __decorate([
        inversify_1.injectable()
    ], DecisionOptionView);
    return DecisionOptionView;
}(sprotty_1.RectangularNodeView));
exports.DecisionOptionView = DecisionOptionView;
// Connection Elements
var GenericRelationshipView = /** @class */ (function (_super) {
    __extends(GenericRelationshipView, _super);
    function GenericRelationshipView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GenericRelationshipView = __decorate([
        inversify_1.injectable()
    ], GenericRelationshipView);
    return GenericRelationshipView;
}(PolylineArrowEdgeView));
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
}(PolylineArrowEdgeView));
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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConsequenceRelationshipView = __decorate([
        inversify_1.injectable()
    ], ConsequenceRelationshipView);
    return ConsequenceRelationshipView;
}(PolylineArrowEdgeView));
exports.ConsequenceRelationshipView = ConsequenceRelationshipView;
var OptionRelationshipView = /** @class */ (function (_super) {
    __extends(OptionRelationshipView, _super);
    function OptionRelationshipView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OptionRelationshipView = __decorate([
        inversify_1.injectable()
    ], OptionRelationshipView);
    return OptionRelationshipView;
}(PolylineArrowEdgeView));
exports.OptionRelationshipView = OptionRelationshipView;
//# sourceMappingURL=views.js.map
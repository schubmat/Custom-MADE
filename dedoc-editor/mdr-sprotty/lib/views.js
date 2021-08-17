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
var PolylineClosedArrowEdgeView = /** @class */ (function (_super) {
    __extends(PolylineClosedArrowEdgeView, _super);
    function PolylineClosedArrowEdgeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PolylineClosedArrowEdgeView.prototype.renderAdditionals = function (edge, segments, context) {
        var p1 = segments[segments.length - 2];
        var p2 = segments[segments.length - 1];
        return [
            snabbdom_jsx_1.svg("path", { "class-sprotty-edge-arrow": true, d: "M 6,-3 L 0,0 L 6,3 Z", transform: "rotate(" + this.angle(p2, p1) + " " + p2.x + " " + p2.y + ") translate(" + p2.x + " " + p2.y + ")" })
        ];
    };
    PolylineClosedArrowEdgeView.prototype.angle = function (x0, x1) {
        return sprotty_1.toDegrees(Math.atan2(x1.y - x0.y, x1.x - x0.x));
    };
    PolylineClosedArrowEdgeView = __decorate([
        inversify_1.injectable()
    ], PolylineClosedArrowEdgeView);
    return PolylineClosedArrowEdgeView;
}(sprotty_1.PolylineEdgeView));
exports.PolylineClosedArrowEdgeView = PolylineClosedArrowEdgeView;
var PolylineOpenArrowEdgeView = /** @class */ (function (_super) {
    __extends(PolylineOpenArrowEdgeView, _super);
    function PolylineOpenArrowEdgeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PolylineOpenArrowEdgeView.prototype.renderAdditionals = function (edge, segments, context) {
        var p1 = segments[segments.length - 2];
        var p2 = segments[segments.length - 1];
        return [
            snabbdom_jsx_1.svg("path", { "class-sprotty-edge-arrow": true, d: "M 6,-3 L 0,0 L 6,3 M 6,-3 Z", fill: "white", stroke: "black", transform: "rotate(" + this.angle(p2, p1) + " " + p2.x + " " + p2.y + ") translate(" + p2.x + " " + p2.y + ")" })
        ];
    };
    PolylineOpenArrowEdgeView.prototype.angle = function (x0, x1) {
        return sprotty_1.toDegrees(Math.atan2(x1.y - x0.y, x1.x - x0.x));
    };
    PolylineOpenArrowEdgeView = __decorate([
        inversify_1.injectable()
    ], PolylineOpenArrowEdgeView);
    return PolylineOpenArrowEdgeView;
}(sprotty_1.PolylineEdgeView));
exports.PolylineOpenArrowEdgeView = PolylineOpenArrowEdgeView;
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
        var width = node.size.width;
        var height = node.size.height;
        var trianglePath = [
            "M", width / 4 - 15, height,
            "L", width / 4, height + 20,
            "L", width / 4 + 15, height
        ].join(" ");
        return (snabbdom_jsx_1.svg("g", null,
            snabbdom_jsx_1.svg("rect", { x: "0", y: "0", width: width, height: height, fill: "#F5F7CF", stroke: "none", "pointer-events": "all" }),
            snabbdom_jsx_1.svg("path", { d: trianglePath, fill: "#F5F7CF" }),
            context.renderChildren(node)));
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
        return getTwoPartedNode("DecisionProbOrRes", node, context);
    };
    DecisionProblemOrResultView = __decorate([
        inversify_1.injectable()
    ], DecisionProblemOrResultView);
    return DecisionProblemOrResultView;
}());
exports.DecisionProblemOrResultView = DecisionProblemOrResultView;
var DecisionProblemView = /** @class */ (function () {
    function DecisionProblemView() {
        this.color = "#DAE8FC";
    }
    DecisionProblemView.prototype.render = function (node, context, args) {
        var width = node.size.width;
        var height = node.size.height;
        return (snabbdom_jsx_1.svg("g", null,
            snabbdom_jsx_1.svg("rect", { x: "0", y: "0", width: width, height: height, fill: this.color }),
            snabbdom_jsx_1.svg("g", { transform: "translate(-15,0)" },
                snabbdom_jsx_1.svg("rect", { id: "svg_2", height: "3", width: "20", y: "0", x: "0", stroke: "#000", fill: "#000000" }),
                snabbdom_jsx_1.svg("rect", { id: "svg_3", height: "13", width: "3", y: "0", x: "0", stroke: "#000", fill: "#000000" }),
                snabbdom_jsx_1.svg("rect", { id: "svg_4", height: "20", width: "3", y: "0", x: "17", stroke: "#000", fill: "#000000" }),
                snabbdom_jsx_1.svg("rect", { id: "svg_5", height: "3", width: "20", y: "18", x: "0", stroke: "#000", fill: "#000000" }),
                snabbdom_jsx_1.svg("rect", { id: "svg_6", height: "15", width: "3", y: "18", x: "0", stroke: "#000", fill: "#000000" }),
                snabbdom_jsx_1.svg("rect", { id: "svg_7", height: "3", width: "20", y: "30", x: "0", stroke: "#000", fill: "#000000" }),
                snabbdom_jsx_1.svg("rect", { id: "svg_8", height: "3", width: "3", y: "37", x: "8.6", stroke: "#000", fill: "#000000" })),
            context.renderChildren(node)));
    };
    DecisionProblemView = __decorate([
        inversify_1.injectable()
    ], DecisionProblemView);
    return DecisionProblemView;
}());
exports.DecisionProblemView = DecisionProblemView;
var DecisionResultView = /** @class */ (function () {
    function DecisionResultView() {
        this.color = "#D5E8D4";
        this.decoratorBoxBorderColor = "#97D077";
        this.decoratorBoxSize = 8;
    }
    DecisionResultView.prototype.render = function (node, context, args) {
        var width = node.size.width;
        var height = node.size.height;
        return (snabbdom_jsx_1.svg("g", null,
            snabbdom_jsx_1.svg("rect", { x: "-23", y: "-3", width: width + 26, height: height + 6, fill: this.color, stroke: this.decoratorBoxBorderColor }),
            snabbdom_jsx_1.svg("rect", { x: "-20", y: "0", width: width + 20, height: height, fill: this.color, stroke: this.decoratorBoxBorderColor }),
            snabbdom_jsx_1.svg("g", null,
                snabbdom_jsx_1.svg("rect", { height: this.decoratorBoxSize, width: this.decoratorBoxSize, y: "3", x: -20 + this.decoratorBoxSize, fill: this.color, stroke: this.decoratorBoxBorderColor }),
                snabbdom_jsx_1.svg("rect", { height: this.decoratorBoxSize, width: this.decoratorBoxSize, y: 3 + this.decoratorBoxSize + 2, x: -20 + this.decoratorBoxSize, fill: this.color, stroke: this.decoratorBoxBorderColor }),
                snabbdom_jsx_1.svg("rect", { height: this.decoratorBoxSize, width: this.decoratorBoxSize, y: 3 + this.decoratorBoxSize * 2 + 4, x: -20 + this.decoratorBoxSize, fill: this.color, stroke: this.decoratorBoxBorderColor })
            // The tick.
            ,
                "// The tick.",
                snabbdom_jsx_1.svg("path", { d: "M-12 8 L-9 11 L-4 3 M-12 8 Z", fill: "none", stroke: "black" })),
            context.renderChildren(node)));
    };
    DecisionResultView = __decorate([
        inversify_1.injectable()
    ], DecisionResultView);
    return DecisionResultView;
}());
exports.DecisionResultView = DecisionResultView;
var DecisionOptionView = /** @class */ (function () {
    function DecisionOptionView() {
        this.color = "#D5E8D4";
        this.decoratorBoxBorderColor = "#97D077";
        this.decoratorBoxSize = 8;
    }
    DecisionOptionView.prototype.render = function (node, context, args) {
        var width = node.size.width;
        var height = node.size.height;
        return (snabbdom_jsx_1.svg("g", null,
            snabbdom_jsx_1.svg("rect", { x: "-20", y: "0", width: width + 20, height: height, fill: this.color }),
            snabbdom_jsx_1.svg("g", null,
                snabbdom_jsx_1.svg("rect", { height: this.decoratorBoxSize, width: this.decoratorBoxSize, y: "3", x: -20 + this.decoratorBoxSize, fill: this.color, stroke: this.decoratorBoxBorderColor }),
                snabbdom_jsx_1.svg("rect", { height: this.decoratorBoxSize, width: this.decoratorBoxSize, y: 3 + this.decoratorBoxSize + 2, x: -20 + this.decoratorBoxSize, fill: this.color, stroke: this.decoratorBoxBorderColor }),
                snabbdom_jsx_1.svg("rect", { height: this.decoratorBoxSize, width: this.decoratorBoxSize, y: 3 + this.decoratorBoxSize * 2 + 4, x: -20 + this.decoratorBoxSize, fill: this.color, stroke: this.decoratorBoxBorderColor })),
            context.renderChildren(node)));
    };
    DecisionOptionView = __decorate([
        inversify_1.injectable()
    ], DecisionOptionView);
    return DecisionOptionView;
}());
exports.DecisionOptionView = DecisionOptionView;
// Connection Elements         // </g><line  stroke="#5184AF" stroke-width="5" stroke-linecap="butt" stroke-dasharray="10,5" fill="none" />
var GenericRelationshipView = /** @class */ (function (_super) {
    __extends(GenericRelationshipView, _super);
    function GenericRelationshipView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.stepSize = 2;
        return _this;
    }
    GenericRelationshipView.prototype.renderLine = function (edge, segments, context) {
        var firstPoint = segments[0];
        var lastPoint = segments[segments.length - 1];
        return (snabbdom_jsx_1.svg("g", { fill: "none", stroke: "black", "stroke-width": "4" },
            snabbdom_jsx_1.svg("line", { x1: firstPoint.x, x2: lastPoint.x, y1: firstPoint.y, y2: lastPoint.y, stroke: "black", id: "stroke-dasharray-generic" })));
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
}(PolylineClosedArrowEdgeView));
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
}(PolylineOpenArrowEdgeView));
exports.ConsequenceRelationshipView = ConsequenceRelationshipView;
var OptionRelationshipView = /** @class */ (function (_super) {
    __extends(OptionRelationshipView, _super);
    function OptionRelationshipView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OptionRelationshipView.prototype.renderAdditionals = function (edge, segments, context) {
        var leftPointX = segments[0].x + 10;
        var rightPointX = segments[0].x - 10;
        var leftPointY = segments[0].y;
        var arc = "M " + leftPointX + " " + leftPointY + " A 10 10 0 1 1 " + rightPointX + " " + leftPointY;
        return [
            snabbdom_jsx_1.svg("g", { fill: "none", stroke: "black" },
                snabbdom_jsx_1.svg("path", { d: arc }))
        ];
    };
    OptionRelationshipView = __decorate([
        inversify_1.injectable()
    ], OptionRelationshipView);
    return OptionRelationshipView;
}(sprotty_1.PolylineEdgeView));
exports.OptionRelationshipView = OptionRelationshipView;
function getTwoPartedNode(text, node, context) {
    var height = Math.max(node.size.height, 0);
    // 110 is the space taken up by the bottom node.
    var width = Math.max(node.size.width, 110);
    return snabbdom_jsx_1.svg("g", null,
        snabbdom_jsx_1.svg("rect", { x: "0", y: "0", width: width, height: height, style: { fill: "skyblue" } }),
        context.renderChildren(node),
        snabbdom_jsx_1.svg("rect", { x: "0", y: height, width: width, height: 0.5 * height, style: { fill: "#A5A4A5" } }),
        snabbdom_jsx_1.svg("text", { x: "10", y: 1.37 * height, style: { textDecorationLine: 'underline' } }, text));
}
//# sourceMappingURL=views.js.map
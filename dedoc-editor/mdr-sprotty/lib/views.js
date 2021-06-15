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
    // 110 is the space taken up by the bottom node.
    var width = Math.max(node.size.width, 110);
    return snabbdom_jsx_1.svg("g", null,
        snabbdom_jsx_1.svg("rect", { x: "0", y: "0", width: width, height: height, style: { fill: "skyblue" } }),
        context.renderChildren(node),
        snabbdom_jsx_1.svg("rect", { x: "0", y: height, width: width, height: 0.5 * height, style: { fill: "#A5A4A5" } }),
        snabbdom_jsx_1.svg("text", { x: "10", y: 1.37 * height, style: { textDecorationLine: 'underline' } }, text));
}
//# sourceMappingURL=views.js.map
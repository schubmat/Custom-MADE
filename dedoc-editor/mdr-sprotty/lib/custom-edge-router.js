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
var sprotty_1 = require("sprotty");
var CustomManhattanRouter = /** @class */ (function (_super) {
    __extends(CustomManhattanRouter, _super);
    function CustomManhattanRouter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomManhattanRouter.prototype.getOptions = function (edge) {
        var defaultOptions = _super.prototype.getOptions.call(this, edge);
        return edge.id === sprotty_1.edgeInProgressID
            ? __assign(__assign({}, defaultOptions), { standardDistance: 1 }) : defaultOptions;
    };
    return CustomManhattanRouter;
}(sprotty_1.ManhattanEdgeRouter));
exports.CustomManhattanRouter = CustomManhattanRouter;
var CustomLinearRouter = /** @class */ (function (_super) {
    __extends(CustomLinearRouter, _super);
    function CustomLinearRouter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomLinearRouter.prototype.route = function (edge) {
        // Use the result from the PolylineEdgeRouter.
        var polyline = _super.prototype.route.call(this, edge);
        return [
            polyline[0],
            polyline[polyline.length - 1]
        ];
    };
    return CustomLinearRouter;
}(sprotty_1.PolylineEdgeRouter));
exports.CustomLinearRouter = CustomLinearRouter;
//# sourceMappingURL=custom-edge-router.js.map
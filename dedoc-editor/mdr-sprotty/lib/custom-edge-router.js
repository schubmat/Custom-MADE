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
//# sourceMappingURL=custom-edge-router.js.map
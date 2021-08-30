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
var browser_1 = require("@theia/languages/lib/browser");
var inversify_1 = require("inversify");
var sprotty_theia_1 = require("sprotty-theia");
var common_1 = require("../common");
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
//# sourceMappingURL=mdr-dsl-language-client-contribution.js.map
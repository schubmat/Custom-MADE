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
var browser_1 = require("@theia/editor/lib/browser");
var inversify_1 = require("inversify");
var sprotty_theia_1 = require("sprotty-theia");
var mdr_dsl_language_client_contribution_1 = require("../mdr-dsl-language-client-contribution");
var MdrDiagramLanguageClient = /** @class */ (function (_super) {
    __extends(MdrDiagramLanguageClient, _super);
    function MdrDiagramLanguageClient(languageClientContribution, editorManager) {
        return _super.call(this, languageClientContribution, editorManager) || this;
    }
    MdrDiagramLanguageClient = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(mdr_dsl_language_client_contribution_1.MdrLanguageClientContribution)),
        __param(1, inversify_1.inject(browser_1.EditorManager)),
        __metadata("design:paramtypes", [mdr_dsl_language_client_contribution_1.MdrLanguageClientContribution,
            browser_1.EditorManager])
    ], MdrDiagramLanguageClient);
    return MdrDiagramLanguageClient;
}(sprotty_theia_1.DiagramLanguageClient));
exports.MdrDiagramLanguageClient = MdrDiagramLanguageClient;
//# sourceMappingURL=mdr-diagram-language-client.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var node_1 = require("@theia/languages/lib/node");
var mdr_dsl_language_server_contribution_1 = require("./mdr-dsl-language-server-contribution");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(node_1.LanguageServerContribution).to(mdr_dsl_language_server_contribution_1.MdrLanguageServerContribution).inSingletonScope();
});
//# sourceMappingURL=mdr-dsl-backend-module.js.map
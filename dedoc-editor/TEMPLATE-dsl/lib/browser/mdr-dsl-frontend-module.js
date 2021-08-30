"use strict";
/**
 * Generated using theia-extension-generator
 */
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = require("@theia/core/lib/browser");
var common_1 = require("@theia/core/lib/common");
var browser_2 = require("@theia/languages/lib/browser");
var textmate_1 = require("@theia/monaco/lib/browser/textmate");
var inversify_1 = require("inversify");
var sprotty_theia_1 = require("sprotty-theia");
var mdr_diagram_configuration_1 = require("./diagram/mdr-diagram-configuration");
var mdr_diagram_language_client_1 = require("./diagram/mdr-diagram-language-client");
var mdr_diagram_manager_1 = require("./diagram/mdr-diagram-manager");
var mdr_dsl_contribution_1 = require("./mdr-dsl-contribution");
var mdr_dsl_grammar_contribution_1 = require("./mdr-dsl-grammar-contribution");
var mdr_dsl_language_client_contribution_1 = require("./mdr-dsl-language-client-contribution");
exports.default = new inversify_1.ContainerModule(function (bind) {
    // add your contribution bindings here
    bind(common_1.CommandContribution).to(mdr_dsl_contribution_1.MdrDslCommandContribution);
    bind(common_1.MenuContribution).to(mdr_dsl_contribution_1.MdrDslMenuContribution);
    bind(mdr_dsl_language_client_contribution_1.MdrLanguageClientContribution).toSelf().inSingletonScope();
    bind(browser_2.LanguageClientContribution).toService(mdr_dsl_language_client_contribution_1.MdrLanguageClientContribution);
    bind(textmate_1.LanguageGrammarDefinitionContribution).to(mdr_dsl_grammar_contribution_1.MdrGrammarContribution).inSingletonScope();
    bind(mdr_diagram_language_client_1.MdrDiagramLanguageClient).toSelf().inSingletonScope();
    bind(common_1.CommandContribution).to(sprotty_theia_1.LSDiagramCommandContribution).inSingletonScope();
    bind(browser_1.KeybindingContribution).to(sprotty_theia_1.LSDiagramKeybindingContribution).inSingletonScope();
    bind(sprotty_theia_1.DiagramConfiguration).to(mdr_diagram_configuration_1.MdrDiagramConfiguration).inSingletonScope();
    bind(mdr_diagram_manager_1.MdrDiagramManager).toSelf().inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).toService(mdr_diagram_manager_1.MdrDiagramManager);
    bind(browser_1.OpenHandler).toService(mdr_diagram_manager_1.MdrDiagramManager);
    bind(browser_1.WidgetFactory).toService(mdr_diagram_manager_1.MdrDiagramManager);
    bind(sprotty_theia_1.DiagramManagerProvider).toProvider(function (context) {
        return function () {
            return new Promise(function (resolve) {
                var diagramManager = context.container.get(mdr_diagram_manager_1.MdrDiagramManager);
                resolve(diagramManager);
            });
        };
    });
});
//# sourceMappingURL=mdr-dsl-frontend-module.js.map
/**
 * Generated using theia-extension-generator
 */

import { FrontendApplicationContribution, KeybindingContribution, OpenHandler, WidgetFactory } from '@theia/core/lib/browser';
import { CommandContribution, MenuContribution } from "@theia/core/lib/common";
import { LanguageClientContribution } from '@theia/languages/lib/browser';
import { LanguageGrammarDefinitionContribution } from '@theia/monaco/lib/browser/textmate';
import { ContainerModule } from "inversify";
import { DiagramConfiguration, DiagramManager, DiagramManagerProvider, LSDiagramCommandContribution, 
    LSDiagramKeybindingContribution } from 'sprotty-theia';
import { MdrDiagramConfiguration } from './diagram/diagram-configuration';
import { MdrDiagramLanguageClient } from './diagram/diagram-language-client';
import { MdrDiagramManager } from './diagram/diagram-manager';
import { MdrDslCommandContribution, MdrDslMenuContribution } from './dsl-contribution';
import { MdrGrammarContribution } from './dsl-grammar-contribution';
import { MdrLanguageClientContribution } from './dsl-language-client-contribution';

export default new ContainerModule(bind => {
    // add your contribution bindings here
    bind(CommandContribution).to(MdrDslCommandContribution);
    bind(MenuContribution).to(MdrDslMenuContribution);
    
    bind(MdrLanguageClientContribution).toSelf().inSingletonScope();
    bind(LanguageClientContribution).toService(MdrLanguageClientContribution);
    bind(LanguageGrammarDefinitionContribution).to(MdrGrammarContribution).inSingletonScope();

    bind(MdrDiagramLanguageClient).toSelf().inSingletonScope();
    bind(CommandContribution).to(LSDiagramCommandContribution).inSingletonScope();
    bind(KeybindingContribution).to(LSDiagramKeybindingContribution).inSingletonScope();

    bind(DiagramConfiguration).to(MdrDiagramConfiguration).inSingletonScope();
    bind(MdrDiagramManager).toSelf().inSingletonScope();
    bind(FrontendApplicationContribution).toService(MdrDiagramManager);
    bind(OpenHandler).toService(MdrDiagramManager);
    bind(WidgetFactory).toService(MdrDiagramManager);
    bind(DiagramManagerProvider).toProvider<DiagramManager>((context) => {
        return () => {
            return new Promise<DiagramManager>((resolve) => {
                let diagramManager = context.container.get<MdrDiagramManager>(MdrDiagramManager);
                resolve(diagramManager);
            });
        };
    });
});
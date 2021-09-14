import { LanguageClientFactory, Languages, Workspace } from '@theia/languages/lib/browser';
import { inject, injectable, multiInject } from 'inversify';
import { DiagramLanguageClientContribution, DiagramManagerProvider } from 'sprotty-theia';
import { DSL_LANGUAGE_FILE_EXTENSION, DSL_LANGUAGE_SERVER_ID, DSL_LANGUAGE_SERVER_NAME } from '../common';

@injectable()
export class MdrLanguageClientContribution extends DiagramLanguageClientContribution {

    readonly id = DSL_LANGUAGE_SERVER_ID;
    readonly name = DSL_LANGUAGE_SERVER_NAME;

    constructor(
        @inject(Workspace) protected readonly workspace: Workspace,
        @inject(Languages) protected readonly languages: Languages,
        @inject(LanguageClientFactory) protected readonly languageClientFactory: LanguageClientFactory,
        @multiInject(DiagramManagerProvider) protected diagramManagerProviders: DiagramManagerProvider[]) {
        super(workspace, languages, languageClientFactory, diagramManagerProviders)
    }

    protected get globPatterns(): string[] {
        return [
            '**/*' + DSL_LANGUAGE_FILE_EXTENSION,
        ];
    }

    protected get documentSelector(): string[] {
        return [
            DSL_LANGUAGE_SERVER_ID
        ];
    }
}

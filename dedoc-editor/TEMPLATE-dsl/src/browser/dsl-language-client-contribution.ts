import { LanguageClientFactory, Languages, Workspace } from '@theia/languages/lib/browser';
import { inject, injectable, multiInject } from 'inversify';
import { DiagramLanguageClientContribution, DiagramManagerProvider } from 'sprotty-theia';
import { MDR_LANGUAGE_FILE_EXTENSION, MDR_LANGUAGE_SERVER_ID, MDR_LANGUAGE_SERVER_NAME } from '../common';

@injectable()
export class MdrLanguageClientContribution extends DiagramLanguageClientContribution {

    readonly id = MDR_LANGUAGE_SERVER_ID;
    readonly name = MDR_LANGUAGE_SERVER_NAME;

    constructor(
        @inject(Workspace) protected readonly workspace: Workspace,
        @inject(Languages) protected readonly languages: Languages,
        @inject(LanguageClientFactory) protected readonly languageClientFactory: LanguageClientFactory,
        @multiInject(DiagramManagerProvider) protected diagramManagerProviders: DiagramManagerProvider[]) {
        super(workspace, languages, languageClientFactory, diagramManagerProviders)
    }

    protected get globPatterns(): string[] {
        return [
            '**/*' + MDR_LANGUAGE_FILE_EXTENSION,
        ];
    }

    protected get documentSelector(): string[] {
        return [
            MDR_LANGUAGE_SERVER_ID
        ];
    }
}

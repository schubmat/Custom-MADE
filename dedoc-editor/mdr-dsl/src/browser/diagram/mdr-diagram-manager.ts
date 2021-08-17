import { QuickPickService, WidgetManager } from '@theia/core/lib/browser';
import { EditorManager } from '@theia/editor/lib/browser';
import { MonacoWorkspace } from '@theia/monaco/lib/browser/monaco-workspace';
import { inject, injectable } from 'inversify';
import { DiagramManager, LSTheiaSprottyConnector, TheiaFileSaver, TheiaSprottyConnector } from 'sprotty-theia';
import { MDR_DIAGRAM_TYPE } from './mdr-diagram-configuration';
import { MdrDiagramLanguageClient } from './mdr-diagram-language-client';

@injectable()
export class MdrDiagramManager extends DiagramManager {

    readonly diagramType = MDR_DIAGRAM_TYPE;
    readonly iconClass = 'fa fa-sitemap';

    _diagramConnector: TheiaSprottyConnector;

    constructor(@inject(MdrDiagramLanguageClient) diagramLanguageClient: MdrDiagramLanguageClient,
                @inject(TheiaFileSaver) fileSaver: TheiaFileSaver,
                @inject(WidgetManager) widgetManager: WidgetManager,
                @inject(EditorManager) editorManager: EditorManager,
                @inject(MonacoWorkspace) workspace: MonacoWorkspace,
                @inject(QuickPickService) quickPickService: QuickPickService) {
        super();
        this._diagramConnector = new LSTheiaSprottyConnector({diagramLanguageClient, fileSaver, editorManager, widgetManager, workspace, quickPickService, diagramManager: this});
    }

    get diagramConnector() {
        return this._diagramConnector;
    }

    get label() {
        return 'MDR Diagram';
    }
}
import { Container, injectable } from "inversify";
import { configureCommand, configureModelElement, KeyTool, TYPES } from 'sprotty';
import { CodeActionPalettePopupProvider, CodeActionProvider, CompletionLabelEditor, 
    DeleteWithWorkspaceEditCommand, DiagramConfiguration, IRootPopupModelProvider, 
    LSTheiaDiagramServer, LSTheiaDiagramServerProvider, PaletteButton, PaletteMouseListener, 
    RenameLabelEditor, TheiaDiagramServer, TheiaKeyTool, WorkspaceEditCommand, EditDiagramLocker } from "sprotty-vscode";
import { createStateDiagramContainer } from 'mdr-sprotty/lib/di.config';
import { PaletteButtonView } from 'mdr-sprotty/lib/html-views';
import { MdrDiagramServer } from "./diagram-server";
import "sprotty-theia/css/theia-sprotty.css"
export const MDR_DIAGRAM_TYPE = 'flex-dr-based-diagram';

@injectable()
export class MdrDiagramConfiguration implements DiagramConfiguration {
    diagramType = MDR_DIAGRAM_TYPE;

    createContainer(widgetId: string): Container {
        const container = createStateDiagramContainer(widgetId);
        container.bind(MdrDiagramServer).toSelf().inSingletonScope();
        container.bind(TheiaDiagramServer).toService(MdrDiagramServer);
        container.bind(LSTheiaDiagramServer).toService(MdrDiagramServer);
        container.bind(TYPES.ModelSource).toService(TheiaDiagramServer);
        container.rebind(KeyTool).to(TheiaKeyTool).inSingletonScope();

        container.bind(LSTheiaDiagramServerProvider).toProvider<LSTheiaDiagramServer>((context) => {
            return () => {
                return new Promise<LSTheiaDiagramServer>((resolve) => {
                    resolve(context.container.get(LSTheiaDiagramServer));
                });
            };
        });
        container.bind(CodeActionProvider).toSelf().inSingletonScope();
        container.bind(IRootPopupModelProvider).to(CodeActionPalettePopupProvider).inSingletonScope();
        container.bind(PaletteMouseListener).toSelf().inSingletonScope();
        container.rebind(TYPES.PopupMouseListener).to(PaletteMouseListener);
        configureModelElement(container, 'button:create', PaletteButton, PaletteButtonView);
        
        configureCommand(container, DeleteWithWorkspaceEditCommand);
        configureCommand(container, WorkspaceEditCommand);

        container.bind(CompletionLabelEditor).toSelf().inSingletonScope();
        container.bind(RenameLabelEditor).toSelf().inSingletonScope();
        
        container.bind(EditDiagramLocker).toSelf().inSingletonScope();
        container.rebind(TYPES.IDiagramLocker).toService(EditDiagramLocker);
        
        return container;
    }
}
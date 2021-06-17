import { Container, ContainerModule } from "inversify";
import 'sprotty/css/sprotty.css';
import { boundsModule, buttonModule, configureModelElement, ConsoleLogger, defaultModule, expandModule, 
    exportModule, fadeModule, hoverModule, HtmlRoot, HtmlRootView, LogLevel, modelSourceModule, moveModule, 
    openModule, overrideViewerOptions, PreRenderedElement, PreRenderedView, RectangularNodeView, SEdge, 
    selectModule, SGraphView, SLabelView, TYPES, undoRedoModule, viewportModule, decorationModule, 
    SModelRoot, edgeEditModule, SRoutingHandle, SRoutingHandleView, CreateElementCommand, labelEditModule, 
    configureCommand, updateModule, routingModule, edgeLayoutModule, zorderModule, PolylineEdgeRouter } from 'sprotty';
import "../css/diagram.css";
import {
    ArgumentativeRelationshipView, ConsequenceRelationshipView,
    DecisionOptionView,
    DecisionProblemOrResultView, DecisionProblemView, DecisionResultView, DerivativeRelationshipView,
    DRObjectView, GenericRelationshipView, OptionRelationshipView,
    PolylineClosedArrowEdgeView,
    StatementView,
    TriangleButtonView
} from "./views";
import { MdrModelFactory, MdrDiagram, MdrNode, CreateTransitionPort, MdrLabel } from "./model";
import { CustomLinearRouter } from "./custom-edge-router";

const mdrDiagramModule = new ContainerModule((bind, unbind, isBound, rebind) => {
    rebind(TYPES.ILogger).to(ConsoleLogger).inSingletonScope();
    rebind(TYPES.LogLevel).toConstantValue(LogLevel.warn);
    rebind(TYPES.IModelFactory).to(MdrModelFactory);
    unbind(PolylineEdgeRouter);
    bind(PolylineEdgeRouter).to(CustomLinearRouter).inSingletonScope();

    const context = { bind, unbind, isBound, rebind };
    configureModelElement(context, 'graph', MdrDiagram, SGraphView);
    configureModelElement(context, 'node', MdrNode, RectangularNodeView);
    configureModelElement(context, 'label', MdrLabel, SLabelView);
    configureModelElement(context, 'label:xref', MdrLabel, SLabelView);
    configureModelElement(context, 'edge', SEdge, PolylineClosedArrowEdgeView);
    configureModelElement(context, 'html', HtmlRoot, HtmlRootView);
    configureModelElement(context, 'pre-rendered', PreRenderedElement, PreRenderedView);
    configureModelElement(context, 'palette', SModelRoot, HtmlRootView);
    configureModelElement(context, 'routing-point', SRoutingHandle, SRoutingHandleView);
    configureModelElement(context, 'volatile-routing-point', SRoutingHandle, SRoutingHandleView);
    configureModelElement(context, 'port', CreateTransitionPort, TriangleButtonView)

    // FlexDRMetaModel Configuration
    configureModelElement(context, 'drobject', MdrDiagram, DRObjectView);
    configureModelElement(context, 'statement', MdrNode, StatementView);
    configureModelElement(context, 'decision_problem_or_result', MdrNode, DecisionProblemOrResultView);
    configureModelElement(context, 'decision_problem', MdrNode, DecisionProblemView);
    configureModelElement(context, 'decision_result', MdrNode, DecisionResultView);
    configureModelElement(context, 'decision_option', MdrNode, DecisionOptionView);
    configureModelElement(context, 'generic_relationship', SEdge, GenericRelationshipView);
    configureModelElement(context, 'argumentative_relationship', SEdge, ArgumentativeRelationshipView);
    configureModelElement(context, 'derivative_relationship', SEdge, DerivativeRelationshipView);
    configureModelElement(context, 'consequence_relationship', SEdge, ConsequenceRelationshipView);
    configureModelElement(context, 'option_relationship', SEdge, OptionRelationshipView);

    configureCommand(context, CreateElementCommand);
});

export function createStateDiagramContainer(widgetId: string): Container {
    const container = new Container();
    container.load(defaultModule, selectModule, moveModule, boundsModule, undoRedoModule, viewportModule,
        hoverModule, fadeModule, exportModule, expandModule, openModule, buttonModule, modelSourceModule,
        decorationModule, edgeEditModule, edgeLayoutModule, labelEditModule, updateModule, routingModule,
        mdrDiagramModule, zorderModule);
    overrideViewerOptions(container, {
        needsClientLayout: true,
        needsServerLayout: true,
        baseDiv: widgetId,
        hiddenDiv: widgetId + '_hidden'
    });
    return container;
}

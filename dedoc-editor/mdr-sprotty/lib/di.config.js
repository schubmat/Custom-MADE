"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
require("sprotty/css/sprotty.css");
var sprotty_1 = require("sprotty");
require("../css/diagram.css");
var views_1 = require("./views");
var model_1 = require("./model");
var custom_edge_router_1 = require("./custom-edge-router");
var mdrDiagramModule = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    rebind(sprotty_1.TYPES.ILogger).to(sprotty_1.ConsoleLogger).inSingletonScope();
    rebind(sprotty_1.TYPES.LogLevel).toConstantValue(sprotty_1.LogLevel.warn);
    rebind(sprotty_1.TYPES.IModelFactory).to(model_1.MdrModelFactory);
    unbind(sprotty_1.PolylineEdgeRouter);
    bind(sprotty_1.PolylineEdgeRouter).to(custom_edge_router_1.CustomLinearRouter).inSingletonScope();
    var context = { bind: bind, unbind: unbind, isBound: isBound, rebind: rebind };
    sprotty_1.configureModelElement(context, 'graph', model_1.MdrDiagram, sprotty_1.SGraphView);
    sprotty_1.configureModelElement(context, 'node', model_1.MdrNode, sprotty_1.RectangularNodeView);
    sprotty_1.configureModelElement(context, 'label', model_1.MdrLabel, sprotty_1.SLabelView);
    sprotty_1.configureModelElement(context, 'label:xref', model_1.MdrLabel, sprotty_1.SLabelView);
    sprotty_1.configureModelElement(context, 'edge', sprotty_1.SEdge, views_1.PolylineClosedArrowEdgeView);
    sprotty_1.configureModelElement(context, 'html', sprotty_1.HtmlRoot, sprotty_1.HtmlRootView);
    sprotty_1.configureModelElement(context, 'pre-rendered', sprotty_1.PreRenderedElement, sprotty_1.PreRenderedView);
    sprotty_1.configureModelElement(context, 'palette', sprotty_1.SModelRoot, sprotty_1.HtmlRootView);
    sprotty_1.configureModelElement(context, 'routing-point', sprotty_1.SRoutingHandle, sprotty_1.SRoutingHandleView);
    sprotty_1.configureModelElement(context, 'volatile-routing-point', sprotty_1.SRoutingHandle, sprotty_1.SRoutingHandleView);
    sprotty_1.configureModelElement(context, 'port', model_1.CreateTransitionPort, views_1.TriangleButtonView);
    // FlexDRMetaModel Configuration
    sprotty_1.configureModelElement(context, 'drobject', model_1.MdrNode, views_1.DRObjectView);
    sprotty_1.configureModelElement(context, 'statement', model_1.MdrNode, views_1.StatementView);
    sprotty_1.configureModelElement(context, 'decision_problem_or_result', model_1.MdrNode, views_1.DecisionProblemOrResultView);
    sprotty_1.configureModelElement(context, 'decision_problem', model_1.MdrNode, views_1.DecisionProblemView);
    sprotty_1.configureModelElement(context, 'decision_result', model_1.MdrNode, views_1.DecisionResultView);
    sprotty_1.configureModelElement(context, 'decision_option', model_1.MdrNode, views_1.DecisionOptionView);
    sprotty_1.configureModelElement(context, 'generic_relationship', sprotty_1.SEdge, views_1.GenericRelationshipView);
    sprotty_1.configureModelElement(context, 'argumentative_relationship', sprotty_1.SEdge, views_1.ArgumentativeRelationshipView);
    sprotty_1.configureModelElement(context, 'derivative_relationship', sprotty_1.SEdge, views_1.DerivativeRelationshipView);
    sprotty_1.configureModelElement(context, 'consequence_relationship', sprotty_1.SEdge, views_1.ConsequenceRelationshipView);
    sprotty_1.configureModelElement(context, 'option_relationship', sprotty_1.SEdge, views_1.OptionRelationshipView);
    sprotty_1.configureCommand(context, sprotty_1.CreateElementCommand);
});
function createStateDiagramContainer(widgetId) {
    var container = new inversify_1.Container();
    container.load(sprotty_1.defaultModule, sprotty_1.selectModule, sprotty_1.moveModule, sprotty_1.boundsModule, sprotty_1.undoRedoModule, sprotty_1.viewportModule, sprotty_1.hoverModule, sprotty_1.fadeModule, sprotty_1.exportModule, sprotty_1.expandModule, sprotty_1.openModule, sprotty_1.buttonModule, sprotty_1.modelSourceModule, sprotty_1.decorationModule, sprotty_1.edgeEditModule, sprotty_1.edgeLayoutModule, sprotty_1.labelEditModule, sprotty_1.updateModule, sprotty_1.routingModule, mdrDiagramModule, sprotty_1.zorderModule);
    sprotty_1.overrideViewerOptions(container, {
        needsClientLayout: true,
        needsServerLayout: true,
        baseDiv: widgetId,
        hiddenDiv: widgetId + '_hidden'
    });
    return container;
}
exports.createStateDiagramContainer = createStateDiagramContainer;
//# sourceMappingURL=di.config.js.map
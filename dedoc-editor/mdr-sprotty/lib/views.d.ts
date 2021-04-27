import { VNode } from "snabbdom/vnode";
import { Point, PolylineEdgeView, RenderingContext, SEdge, IView, SPort, RectangularNodeView } from "sprotty";
export declare class PolylineArrowEdgeView extends PolylineEdgeView {
    protected renderAdditionals(edge: SEdge, segments: Point[], context: RenderingContext): VNode[];
    angle(x0: Point, x1: Point): number;
}
export declare class TriangleButtonView implements IView {
    render(model: SPort, context: RenderingContext, args?: object): VNode;
}
/**
 * Flex DR Meta Model Class Representations
 */
export declare class DRObjectView extends RectangularNodeView {
}
export declare class StatementView extends RectangularNodeView {
}
export declare class DecisionProblemOrResultView extends RectangularNodeView {
}
export declare class DecisionProblemView extends RectangularNodeView {
}
export declare class DecisionResultView extends RectangularNodeView {
}
export declare class DecisionOptionView extends RectangularNodeView {
}
export declare class GenericRelationshipView extends PolylineArrowEdgeView {
}
export declare class ArgumentativeRelationshipView extends PolylineArrowEdgeView {
}
export declare class DerivativeRelationshipView extends PolylineArrowEdgeView {
}
export declare class ConsequenceRelationshipView extends PolylineArrowEdgeView {
}
export declare class OptionRelationshipView extends PolylineArrowEdgeView {
}
//# sourceMappingURL=views.d.ts.map
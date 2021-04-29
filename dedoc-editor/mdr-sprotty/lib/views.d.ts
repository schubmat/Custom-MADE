import { VNode } from "snabbdom/vnode";
import { Point, PolylineEdgeView, RenderingContext, SEdge, IView, SPort, RectangularNodeView } from "sprotty";
import { MdrNode } from "./model";
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
export declare class StatementView implements IView {
    render(node: Readonly<MdrNode>, context: RenderingContext): VNode;
}
export declare class DecisionProblemOrResultView implements IView {
    render(node: MdrNode, context: RenderingContext, args?: object): VNode;
}
export declare class DecisionProblemView implements IView {
    render(node: MdrNode, context: RenderingContext, args?: object): VNode;
}
export declare class DecisionResultView implements IView {
    render(node: MdrNode, context: RenderingContext, args?: object): VNode;
}
export declare class DecisionOptionView implements IView {
    render(node: MdrNode, context: RenderingContext, args?: object): VNode;
}
export declare class GenericRelationshipView extends PolylineEdgeView {
    protected renderLine(edge: SEdge, segments: Point[], context: RenderingContext): VNode;
}
export declare class ArgumentativeRelationshipView extends PolylineEdgeView {
}
export declare class DerivativeRelationshipView extends PolylineArrowEdgeView {
}
export declare class ConsequenceRelationshipView extends PolylineEdgeView {
    gap: number;
    protected renderLine(edge: SEdge, segments: Point[], context: RenderingContext): VNode;
}
export declare class OptionRelationshipView extends PolylineEdgeView {
    protected renderLine(edge: SEdge, segments: Point[], context: RenderingContext): VNode;
}
//# sourceMappingURL=views.d.ts.map
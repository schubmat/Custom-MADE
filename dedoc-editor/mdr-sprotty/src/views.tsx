/** @jsx svg */
import { svg } from 'snabbdom-jsx';

import { VNode } from "snabbdom/vnode";
import {
    Point,
    PolylineEdgeView,
    RenderingContext,
    SEdge,
    IView,
    toDegrees,
    SPort,
    RectangularNodeView, RectangularNode
} from "sprotty";
import {injectable} from "inversify";
import {MdrNode} from "./model";

@injectable()
export class PolylineArrowEdgeView extends PolylineEdgeView {

    protected renderAdditionals(edge: SEdge, segments: Point[], context: RenderingContext): VNode[] {
        const p1 = segments[segments.length - 2]
        const p2 = segments[segments.length - 1]
        return [
            <path class-sprotty-edge-arrow={true} d="M 6,-3 L 0,0 L 6,3 Z"
                  transform={`rotate(${this.angle(p2, p1)} ${p2.x} ${p2.y}) translate(${p2.x} ${p2.y})`}/>
        ]
    }

    angle(x0: Point, x1: Point): number {
        return toDegrees(Math.atan2(x1.y - x0.y, x1.x - x0.x))
    }
}

@injectable()
export class TriangleButtonView implements IView {
    render(model: SPort, context: RenderingContext, args?: object): VNode {
        return <path class-sprotty-button={true} d="M 0,0 L 8,4 L 0,8 Z" />
    }
}

/**
 * Flex DR Meta Model Class Representations
 */

// Structural Elements
@injectable()
export class DRObjectView extends RectangularNodeView {

}

@injectable()
export class StatementView implements IView {
    render(node: Readonly<MdrNode>, context: RenderingContext): VNode {
        return <g>
            <rect
                x="0" y="0" width={Math.max(node.size.width, 0)} height={Math.max(node.size.height, 0)}
                style={{fill: "skyblue"}}
            ></rect>
            { context.renderChildren(node) }
        </g>
    }
}

@injectable()
export class DecisionProblemOrResultView implements IView {
    render(node: MdrNode, context: RenderingContext, args?: object): VNode {
        return getTwoPartedNode("Decision Option", node, context);
    }
}

@injectable()
export class DecisionProblemView implements IView {
    render(node: MdrNode, context: RenderingContext, args?: object): VNode {
        return getTwoPartedNode("Decision Problem", node, context);
    }
}

@injectable()
export class DecisionResultView implements IView {
    render(node: MdrNode, context: RenderingContext, args?: object): VNode {
        return getTwoPartedNode("Decision Result", node, context);
    }
}

@injectable()
export class DecisionOptionView implements IView {
    render(node: MdrNode, context: RenderingContext, args?: object): VNode {
        return getTwoPartedNode("Decision Option", node, context);
    }
}

// Connection Elements
@injectable()
export class GenericRelationshipView extends PolylineArrowEdgeView {

}

@injectable()
export class ArgumentativeRelationshipView extends PolylineArrowEdgeView {

}

@injectable()
export class DerivativeRelationshipView extends PolylineArrowEdgeView {

}

@injectable()
export class ConsequenceRelationshipView extends PolylineArrowEdgeView {

}

@injectable()
export class OptionRelationshipView extends PolylineArrowEdgeView {

}

function getTwoPartedNode(text : String, node : RectangularNode, context : RenderingContext) : VNode {
    let height = Math.max(node.size.height, 0)
    let width = Math.max(node.size.width, 0)

    return <g>
        <rect
            x="0" y="0" width={width} height={height}
            style={{fill: "skyblue"}}></rect>
        {context.renderChildren(node)}
        <rect
            x="0" y={height} width={width} height={0.5*height}
            style={{fill: "#A5A4A5"}}
        ></rect>
        <text x="10" y={1.37 * height} style={{textDecorationLine: 'underline'}}>
            { text }
        </text>
    </g>;
}
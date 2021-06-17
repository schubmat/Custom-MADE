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
export class PolylineClosedArrowEdgeView extends PolylineEdgeView {

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
export class PolylineOpenArrowEdgeView extends PolylineEdgeView {

    protected renderAdditionals(edge: SEdge, segments: Point[], context: RenderingContext): VNode[] {
        const p1 = segments[segments.length - 2]
        const p2 = segments[segments.length - 1]
        return [
            <path class-sprotty-edge-arrow={true} d="M 6,-3 L 0,0 L 6,3 M 6,-3 Z" fill="white" stroke="black"
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
    render(node: MdrNode, context: RenderingContext, args?: object): VNode {
        const width = node.size.width;
        const height = node.size.height;
        return (
            <g>
                <rect
                    x="0" y="0" width={width} height={height}
                ></rect>
                {context.renderChildren(node)}
            </g>
        );
    }
}

@injectable()
export class StatementView implements IView {

    // TODO
    render(node: Readonly<MdrNode>, context: RenderingContext): VNode {
        return (
            <g>
                <path d="M 30 20 C 6 20 0 40 19.2 44 C 0 52.8 21.6 72 37.2 64 C 48 80 84 80 96 64 C 120 64 120 48 105 40 C 120 24 96 8 75 16 C 60 4 36 4 30 20 Z" 
                fill="#ffffff" stroke="#000000" stroke-miterlimit="10" pointer-events="all"
                id="statement"
                />
                { context.renderChildren(node) }
            </g>
        );
    }
}

@injectable()
export class DecisionProblemOrResultView implements IView {
    render(node: MdrNode, context: RenderingContext, args?: object): VNode {
        return getTwoPartedNode("DecisionProbOrRes", node, context);
    }
}

@injectable()
export class DecisionProblemView implements IView {

    readonly color: string = "#DAE8FC";

    render(node: MdrNode, context: RenderingContext, args?: object): VNode {
        const width = node.size.width;
        const height = node.size.height;
        return (
            <g>
                <rect
                    x="0" y="0" width={width} height={height}
                    fill={this.color}
                ></rect>
                <g transform="translate(-15,0)">
                    <rect id="svg_2" height="3" width="20" y="0" x="0" stroke="#000" fill="#000000"/>
                    <rect id="svg_3" height="13" width="3" y="0" x="0" stroke="#000" fill="#000000"/>
                    <rect id="svg_4" height="20" width="3" y="0" x="17" stroke="#000" fill="#000000"/>
                    <rect id="svg_5" height="3" width="20" y="18" x="0" stroke="#000" fill="#000000"/>
                    <rect id="svg_6" height="15" width="3" y="18" x="0" stroke="#000"  fill="#000000"/>
                    <rect id="svg_7" height="3" width="20" y="30" x="0" stroke="#000" fill="#000000"/>
                    <rect id="svg_8" height="3" width="3" y="37" x="8.6" stroke="#000" fill="#000000"/>
                </g>
                { context.renderChildren(node) }
            </g>
        );
    }
}

@injectable()
export class DecisionResultView implements IView {
    
    readonly color: string = "#D5E8D4";
    
    readonly decoratorBoxBorderColor : string = "#97D077";
    readonly decoratorBoxSize : number = 8; 

    render(node: MdrNode, context: RenderingContext, args?: object): VNode {
        const width = node.size.width;
        const height = node.size.height;
        
        return (
            <g> 
                <rect
                    x="-23" y="-3" width={width + 26} height={height + 6}
                    fill={this.color} stroke={this.decoratorBoxBorderColor}
                ></rect>
                <rect 
                    x="-20" y="0" width={width + 20} height={height}
                    fill={this.color} stroke={this.decoratorBoxBorderColor}
                ></rect>
                <g>
                    <rect 
                        height={this.decoratorBoxSize} width={this.decoratorBoxSize} y="3" x={-20 + this.decoratorBoxSize}
                        fill={this.color} stroke={this.decoratorBoxBorderColor}
                    ></rect>
                    <rect 
                        height={this.decoratorBoxSize} width={this.decoratorBoxSize} y={3 + this.decoratorBoxSize + 2} x={-20 + this.decoratorBoxSize}
                        fill={this.color} stroke={this.decoratorBoxBorderColor}
                    ></rect>
                    <rect 
                        height={this.decoratorBoxSize} width={this.decoratorBoxSize} y={3 + this.decoratorBoxSize*2 + 4} x={-20 + this.decoratorBoxSize}
                        fill={this.color} stroke={this.decoratorBoxBorderColor}
                    ></rect>
                    // The tick.
                    <path d="M-12 8 L-9 11 L-4 3 M-12 8 Z" fill="none" stroke="black" />
                </g>
                { context.renderChildren(node) }
            </g>
        );

    }
}

@injectable()
export class DecisionOptionView implements IView {
    
    readonly color: string = "#D5E8D4";
    
    readonly decoratorBoxBorderColor : string = "#97D077";
    readonly decoratorBoxSize : number = 8; 

    render(node: MdrNode, context: RenderingContext, args?: object): VNode {
        const width = node.size.width;
        const height = node.size.height;
        
        return (
            <g>
                <rect 
                    x="-20" y="0" width={width} height={height}
                    fill={this.color}
                ></rect>
                <g>
                    <rect 
                        height={this.decoratorBoxSize} width={this.decoratorBoxSize} y="3" x={-20 + this.decoratorBoxSize}
                        fill={this.color} stroke={this.decoratorBoxBorderColor}
                    ></rect>
                    <rect 
                        height={this.decoratorBoxSize} width={this.decoratorBoxSize} y={3 + this.decoratorBoxSize + 2} x={-20 + this.decoratorBoxSize}
                        fill={this.color} stroke={this.decoratorBoxBorderColor}
                    ></rect>
                    <rect 
                        height={this.decoratorBoxSize} width={this.decoratorBoxSize} y={3 + this.decoratorBoxSize*2 + 4} x={-20 + this.decoratorBoxSize}
                        fill={this.color} stroke={this.decoratorBoxBorderColor}
                    ></rect>
                </g>
                { context.renderChildren(node) }
            </g>
        );

    }
}

// Connection Elements         // </g><line  stroke="#5184AF" stroke-width="5" stroke-linecap="butt" stroke-dasharray="10,5" fill="none" />
@injectable()
export class GenericRelationshipView extends PolylineEdgeView {

    readonly stepSize: number = 2;

    protected renderLine(edge: SEdge, segments: Point[], context: RenderingContext): VNode {
        const firstPoint = segments[0];
        const lastPoint = segments[segments.length - 1];

        // Calculate the line for the two points.
        /*
        const m = (lastPoint.x - firstPoint.x) / (lastPoint.y - firstPoint.y);
        const n = - m * firstPoint.x;

        this.stepSize = */

        return (
            <g fill="none" stroke="black" stroke-width="4">
                <line x1={firstPoint.x} x2={lastPoint.x} y1={firstPoint.y} y2={lastPoint.y} stroke="black" id="stroke-dasharray-generic" />
            </g>            
        );

    }
}

@injectable()
export class ArgumentativeRelationshipView extends PolylineEdgeView {
    // Correctly defined by super class.
}

@injectable()
export class DerivativeRelationshipView extends PolylineClosedArrowEdgeView {
    // Correctly defined by super class.
}

@injectable()
export class ConsequenceRelationshipView extends PolylineOpenArrowEdgeView {
    // Correctly defined by super class.
}


@injectable()
export class OptionRelationshipView extends PolylineEdgeView {

    protected renderAdditionals(edge: SEdge, segments: Point[], context: RenderingContext): VNode[] {

        const leftPointX = segments[0].x + 10
        const rightPointX = segments[0].x - 10
        const leftPointY = segments[0].y
        
        const arc = "M " + leftPointX + " " + leftPointY + " A 10 10 0 1 1 " + rightPointX + " " + leftPointY;

        return [
            <g fill="none" stroke="black">
                <path d={arc} />
            </g>
        ]
    }

}

function getTwoPartedNode(text : String, node : RectangularNode, context : RenderingContext) : VNode {

    let height = Math.max(node.size.height, 0)
    // 110 is the space taken up by the bottom node.
    let width = Math.max(node.size.width, 110)

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
import { ManhattanEdgeRouter, SRoutableElement, ManhattanRouterOptions, edgeInProgressID, PolylineEdgeRouter, RoutedPoint } from "sprotty";

export class CustomManhattanRouter extends ManhattanEdgeRouter {
    getOptions(edge: SRoutableElement): ManhattanRouterOptions {
        const defaultOptions = super.getOptions(edge)
        return edge.id === edgeInProgressID
            ? { ...defaultOptions, standardDistance: 1 }
            : defaultOptions;
    }
}

export class CustomLinearRouter extends PolylineEdgeRouter {

    route(edge: SRoutableElement): RoutedPoint[] {
        // Use the result from the PolylineEdgeRouter.
        const polyline = super.route(edge);
        return [
            polyline[0],
            polyline[polyline.length - 1]
        ]
    } 

}
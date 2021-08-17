import { ManhattanEdgeRouter, SRoutableElement, ManhattanRouterOptions, PolylineEdgeRouter, RoutedPoint } from "sprotty";
export declare class CustomManhattanRouter extends ManhattanEdgeRouter {
    getOptions(edge: SRoutableElement): ManhattanRouterOptions;
}
export declare class CustomLinearRouter extends PolylineEdgeRouter {
    route(edge: SRoutableElement): RoutedPoint[];
}
//# sourceMappingURL=custom-edge-router.d.ts.map
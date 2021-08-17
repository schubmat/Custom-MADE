import { Action, CreatingOnDrag, EditableLabel, RectangularNode, RectangularPort, SChildElement, SGraph, SGraphFactory, SLabel, SModelElementSchema, SParentElement, SRoutableElement } from "sprotty";
export declare class MdrModelFactory extends SGraphFactory {
    protected initializeChild(child: SChildElement, schema: SModelElementSchema, parent?: SParentElement): SChildElement;
}
export declare class MdrDiagram extends SGraph {
    hasFeature(feature: symbol): boolean;
}
export declare class MdrNode extends RectangularNode {
    readonly description: string;
    canConnect(routable: SRoutableElement, role: string): boolean;
}
export declare class CreateTransitionPort extends RectangularPort implements CreatingOnDrag {
    createAction(id: string): Action;
    hasFeature(feature: symbol): boolean;
}
export declare class MdrLabel extends SLabel implements EditableLabel {
    hasFeature(feature: symbol): boolean;
}
//# sourceMappingURL=model.d.ts.map
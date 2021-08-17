import { injectable } from "inversify";
import { Action, CreateElementAction, CreatingOnDrag, creatingOnDragFeature, EditableLabel, 
    editLabelFeature, hoverFeedbackFeature, popupFeature, RectangularNode, 
    RectangularPort, SChildElement, SEdge, SGraph, SGraphFactory, SLabel, SModelElementSchema, 
    SParentElement, SRoutableElement, EdgePlacement } from "sprotty";
import { CustomLinearRouter } from "./custom-edge-router";

@injectable()
export class MdrModelFactory extends SGraphFactory {

    protected initializeChild(child: SChildElement, schema: SModelElementSchema, parent?: SParentElement): SChildElement {
        super.initializeChild(child, schema, parent);
        if (child instanceof SEdge) {
            child.routerKind = CustomLinearRouter.KIND;
            child.targetAnchorCorrection = Math.sqrt(5)
        } else if (child instanceof SLabel) {
            child.edgePlacement = <EdgePlacement> {
                rotate: true,
                position: 0.6
            }
        }
        return child
    }
}

export class MdrDiagram extends SGraph {
    hasFeature(feature: symbol): boolean {
        return feature === hoverFeedbackFeature || feature === popupFeature || super.hasFeature(feature);
    }
}

export class MdrNode extends RectangularNode {
    readonly description: string = "";

    canConnect(routable: SRoutableElement, role: string) {
        return true;
    }
}

export class CreateTransitionPort extends RectangularPort implements CreatingOnDrag {
    createAction(id: string): Action {
        return new CreateElementAction(this.root.id, <SModelElementSchema> {
            id, type: 'edge', sourceId: this.parent.id, targetId: this.id
        });
    }

    hasFeature(feature: symbol): boolean {
        return feature === popupFeature || feature === creatingOnDragFeature || super.hasFeature(feature);
    }
}

export class MdrLabel extends SLabel implements EditableLabel {
    hasFeature(feature: symbol): boolean {
        return feature === editLabelFeature || super.hasFeature(feature);
    }
}

/** @jsx html */
import { html } from 'sprotty';

import { RenderingContext, IView, SButton } from "sprotty";
import { VNode } from 'snabbdom';
import { injectable } from 'inversify';

@injectable()
export class PaletteButtonView implements IView {
    render(button: SButton, context: RenderingContext): VNode {
        return <div>{button.id}</div>;
    }
}

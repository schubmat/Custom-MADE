import { EditorManager } from "@theia/editor/lib/browser";
import { inject, injectable } from "inversify";
import { DiagramLanguageClient } from "sprotty-theia";
import { MdrLanguageClientContribution } from "../mdr-dsl-language-client-contribution";

@injectable()
export class MdrDiagramLanguageClient extends DiagramLanguageClient {
    constructor(
        @inject(MdrLanguageClientContribution) languageClientContribution: MdrLanguageClientContribution,
        @inject(EditorManager) editorManager: EditorManager) {
        super(languageClientContribution, editorManager)
    }
}
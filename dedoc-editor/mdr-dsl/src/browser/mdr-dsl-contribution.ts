import { injectable, inject } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from "@theia/core/lib/common";
import { CommonMenus } from "@theia/core/lib/browser";

export const MdrDslCommand = {
    id: 'MdrDsl.command',
    label: "Shows a message"
};

@injectable()
export class MdrDslCommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(MdrDslCommand, {
            execute: () => this.messageService.info('Hello World!')
        });
    }
}

@injectable()
export class MdrDslMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: MdrDslCommand.id,
            label: 'Say Hello'
        });
    }
}
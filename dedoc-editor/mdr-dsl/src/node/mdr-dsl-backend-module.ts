import { ContainerModule } from 'inversify';
import { LanguageServerContribution } from '@theia/languages/lib/node';
import { MdrLanguageServerContribution } from './mdr-dsl-language-server-contribution';

export default new ContainerModule(bind => {
    bind(LanguageServerContribution).to(MdrLanguageServerContribution).inSingletonScope();
});
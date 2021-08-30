import { LanguageGrammarDefinitionContribution, TextmateRegistry } from '@theia/monaco/lib/browser/textmate';
import { injectable } from 'inversify';
import { MDR_LANGUAGE_FILE_EXTENSION, MDR_LANGUAGE_SERVER_ID, MDR_LANGUAGE_SERVER_NAME } from '../common';

@injectable()
export class MdrGrammarContribution implements LanguageGrammarDefinitionContribution {

    registerTextmateLanguage(registry: TextmateRegistry) {
        monaco.languages.register({
            id: MDR_LANGUAGE_SERVER_ID,
            aliases: [
                MDR_LANGUAGE_SERVER_NAME, MDR_LANGUAGE_SERVER_ID, 'MYDSL'
            ],
            extensions: [
                MDR_LANGUAGE_FILE_EXTENSION,
            ],
            mimetypes: [
                'application/myDsl'
            ]
        });
        monaco.languages.setLanguageConfiguration(MDR_LANGUAGE_SERVER_ID, this.configuration);

        const mdrGrammar = require('../../syntaxes/dsl.tmLanguage.json');
        registry.registerTextmateGrammarScope('source.dsl', {
            async getGrammarDefinition() {
                return {
                    format: 'json',
                    content: mdrGrammar,
                };
            }
        });
        registry.mapLanguageIdToTextmateGrammar(MDR_LANGUAGE_SERVER_ID, 'source.dsl');
    }

    protected configuration: monaco.languages.LanguageConfiguration = {
        'comments': {
            'lineComment': '//',
            'blockComment': ['/*', '*/']
        },
        'brackets': [
            ['{', '}'],
            ['[', ']'],
            ['(', ')']
        ],
        'autoClosingPairs': [
            { 'open': '{', 'close': '}' },
            { 'open': '[', 'close': ']' },
            { 'open': '(', 'close': ')' },
            { 'open': "'", 'close': "'", 'notIn': ['string', 'comment'] },
            { 'open': '"', 'close': '"', 'notIn': ['string'] },
            { 'open': '/**', 'close': ' */', 'notIn': ['string'] }
        ],
        'surroundingPairs': [
            { 'open': '{', 'close': '}' },
            { 'open': '[', 'close': ']' },
            { 'open': '(', 'close': ')' },
            { 'open': "'", 'close': "'" },
            { 'open': '"', 'close': '"' },
            { 'open': '`', 'close': '`' }
        ],
        'folding': {
            'markers': {
                'start': new RegExp('^\\s*//\\s*#?region\\b'),
                'end': new RegExp('^\\s*//\\s*#?endregion\\b')
            }
        }
    };
}

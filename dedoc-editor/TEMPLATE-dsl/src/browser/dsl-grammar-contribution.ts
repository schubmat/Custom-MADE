import { LanguageGrammarDefinitionContribution, TextmateRegistry } from '@theia/monaco/lib/browser/textmate';
import { injectable } from 'inversify';
import { DSL_LANGUAGE_FILE_EXTENSION, DSL_LANGUAGE_SERVER_ID, DSL_LANGUAGE_SERVER_NAME } from '../common';

@injectable()
export class MdrGrammarContribution implements LanguageGrammarDefinitionContribution {

    registerTextmateLanguage(registry: TextmateRegistry) {
        monaco.languages.register({
            id: DSL_LANGUAGE_SERVER_ID,
            aliases: [
                DSL_LANGUAGE_SERVER_NAME, DSL_LANGUAGE_SERVER_ID, 'MYDSL'
            ],
            extensions: [
                DSL_LANGUAGE_FILE_EXTENSION,
            ],
            mimetypes: [
                'application/myDsl'
            ]
        });
        monaco.languages.setLanguageConfiguration(DSL_LANGUAGE_SERVER_ID, this.configuration);

        const dslGrammar = require('../../syntaxes/dsl.tmLanguage.json');
        registry.registerTextmateGrammarScope('source.dsl', {
            async getGrammarDefinition() {
                return {
                    format: 'json',
                    content: dslGrammar,
                };
            }
        });
        registry.mapLanguageIdToTextmateGrammar(DSL_LANGUAGE_SERVER_ID, 'source.dsl');
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

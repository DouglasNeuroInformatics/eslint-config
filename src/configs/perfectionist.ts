import { filesFactory } from '../utils.js';

import type { Config, Options } from '../types.js';

export const perfectionistConfig = async ({ fileRoots }: Pick<Options, 'fileRoots'>): Promise<Config[]> => {
  const { default: perfectionistPlugin } = await import('eslint-plugin-perfectionist');
  return [
    {
      files: filesFactory(['**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs', '**/*.ts', '**/*.tsx'], fileRoots),
      plugins: {
        perfectionist: perfectionistPlugin
      },
      rules: {
        ...perfectionistPlugin.configs['recommended-natural'].rules,
        'perfectionist/sort-classes': [
          'error',
          {
            groups: [
              'index-signature',
              'static-property',
              'property',
              'private-property',
              'constructor',
              'static-method',
              'static-private-method',
              ['get-method', 'set-method'],
              'method',
              'private-method',
              'unknown'
            ],
            order: 'asc',
            type: 'natural'
          }
        ],
        'perfectionist/sort-imports': [
          'error',
          {
            customGroups: {
              type: {
                react: ['react', 'react-dom/*'],
                runtime: '/**/!(*.css)'
              },
              value: {
                react: ['react', 'react-dom/*'],
                runtime: '/**/!(*.css)'
              }
            },
            groups: [
              'runtime',
              'react',
              ['builtin', 'builtin-type'],
              ['external', 'external-type'],
              ['internal', 'internal-type'],
              ['index', 'sibling', 'parent'],
              'type',
              'style',
              ['side-effect', 'side-effect-style'],
              'unknown'
            ],
            internalPattern: ['@/**'],
            newlinesBetween: 'always',
            type: 'natural'
          }
        ],
        'perfectionist/sort-jsx-props': [
          'error',
          {
            customGroups: {
              callback: 'on*'
            },
            groups: ['shorthand', 'unknown', 'callback'],
            order: 'asc',
            type: 'natural'
          }
        ]
      }
    }
  ];
};

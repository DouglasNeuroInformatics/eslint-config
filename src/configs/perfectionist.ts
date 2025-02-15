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
        'perfectionist/sort-array-includes': ['error', { order: 'asc', type: 'natural' }],
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
        'perfectionist/sort-decorators': ['error', { order: 'asc', type: 'natural' }],
        'perfectionist/sort-enums': ['error', { order: 'asc', type: 'natural' }],
        'perfectionist/sort-exports': ['error', { order: 'asc', type: 'natural' }],
        'perfectionist/sort-heritage-clauses': ['error', { order: 'asc', type: 'natural' }],
        'perfectionist/sort-imports': [
          'error',
          {
            customGroups: {
              type: {
                react: ['^react$', '^react-dom/.+'],
                runtime: '^(?!.*.css$)/runtime/.+$'
              },
              value: {
                react: ['^react$', '^react-dom/.+'],
                runtime: '^(?!.*.css$)/runtime/.+$'
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
            internalPattern: ['^@/.+'],
            newlinesBetween: 'always',
            type: 'natural'
          }
        ],
        'perfectionist/sort-interfaces': ['error', { order: 'asc', type: 'natural' }],
        'perfectionist/sort-intersection-types': [
          'error',
          {
            groups: ['named', 'unknown'],
            ignoreCase: true,
            order: 'asc',
            partitionByComment: false,
            partitionByNewLine: false,
            specialCharacters: 'keep',
            type: 'alphabetical'
          }
        ],
        'perfectionist/sort-jsx-props': [
          'error',
          {
            customGroups: {
              callback: '^on.+'
            },
            groups: ['shorthand', 'unknown', 'callback'],
            order: 'asc',
            type: 'natural'
          }
        ],
        'perfectionist/sort-maps': ['error', { order: 'asc', type: 'natural' }],
        'perfectionist/sort-named-exports': ['error', { order: 'asc', type: 'natural' }],
        'perfectionist/sort-named-imports': ['error', { order: 'asc', type: 'natural' }],
        'perfectionist/sort-object-types': ['error', { order: 'asc', type: 'natural' }],
        'perfectionist/sort-objects': ['error', { order: 'asc', type: 'natural' }],
        'perfectionist/sort-sets': ['error', { order: 'asc', type: 'natural' }],
        'perfectionist/sort-switch-case': ['error', { order: 'asc', type: 'natural' }],
        'perfectionist/sort-union-types': ['error', { order: 'asc', type: 'natural' }],
        'perfectionist/sort-variable-declarations': ['error', { order: 'asc', type: 'natural' }]
      }
    }
  ];
};

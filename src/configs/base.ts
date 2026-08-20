import { filesFactory, scriptFiles } from '../utils.js';

import type { Config, ResolvedOptions } from '../types.js';

export const baseConfig = async ({
  astro,
  env,
  exclude,
  fileRoots,
  svelte
}: Pick<ResolvedOptions, 'astro' | 'env' | 'exclude' | 'fileRoots' | 'svelte'>): Promise<Config[]> => {
  const { default: js } = await import('@eslint/js');
  const { default: globals } = await import('globals');
  return [
    {
      ignores: ['**/.astro/*', '**/build', '**/dist', '**/node_modules', '**/.svelte-kit', ...exclude]
    },
    {
      files: filesFactory(scriptFiles({ astro, svelte }), fileRoots),
      languageOptions: {
        ecmaVersion: 'latest',
        globals: {
          ...(env.browser ? globals.browser : null),
          ...(env.es2021 ? globals.es2021 : null),
          ...(env.node ? globals.node : null)
        },
        sourceType: 'module'
      },
      rules: {
        ...js.configs.recommended.rules,
        'max-depth': [
          'error',
          {
            max: 4
          }
        ],
        'no-alert': 'error',
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'no-var': 'error',
        'prefer-const': 'error'
      }
    },
    {
      files: filesFactory(['**/*.cjs'], fileRoots),
      languageOptions: {
        globals: {
          ...globals.commonjs,
          ...globals.node,
          ...(env.es2021 ? globals.es2021 : null)
        },
        sourceType: 'commonjs'
      }
    }
  ];
};

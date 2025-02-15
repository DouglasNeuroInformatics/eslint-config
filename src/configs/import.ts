import { filesFactory } from '../utils.js';

import type { Config, Options } from '../types.js';

export const importConfig = async ({ fileRoots }: Pick<Options, 'fileRoots'>): Promise<Config[]> => {
  const { default: importPlugin } = await import('eslint-plugin-import');
  return [
    {
      files: filesFactory(['**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs', '**/*.ts', '**/*.tsx'], fileRoots),
      plugins: {
        import: importPlugin
      },
      rules: {
        'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
        'import/exports-last': 'error',
        'import/no-duplicates': 'error'
      }
    }
  ];
};

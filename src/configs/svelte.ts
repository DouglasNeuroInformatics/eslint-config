import { applyFilesFactory, filesFactory } from '../utils.js';

import type { Config, ResolvedOptions } from '../types.js';

export const svelteConfig = async ({ fileRoots }: Pick<ResolvedOptions, 'fileRoots'>): Promise<Config[]> => {
  const { default: sveltePlugin } = await import('eslint-plugin-svelte');
  const { parser } = await import('typescript-eslint');
  return [
    ...applyFilesFactory(sveltePlugin.configs['flat/recommended'] as Config[], fileRoots),
    ...applyFilesFactory(sveltePlugin.configs['flat/prettier'] as Config[], fileRoots),
    {
      files: filesFactory(['**/*.svelte'], fileRoots),
      languageOptions: {
        parserOptions: {
          parser
        }
      },
      rules: {
        // The script block is parsed as TypeScript, so `no-undef` and `no-unused-vars` report
        // against type-only syntax they cannot resolve (the compiler covers both), and `$:`
        // reactive statements read as unused labels
        'no-undef': 'off',
        'no-unused-labels': 'off',
        'no-unused-vars': 'off'
      }
    }
  ];
};

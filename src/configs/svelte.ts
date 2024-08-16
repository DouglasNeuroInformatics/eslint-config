import { applyFilesFactory, filesFactory } from '../utils.js';

import type { Config, Options } from '../types.js';

export const svelteConfig = async ({ fileRoots }: Pick<Options, 'fileRoots'>): Promise<Config[]> => {
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
      }
    }
  ];
};

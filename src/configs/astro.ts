import { applyFilesFactory, filesFactory } from '../utils.js';

import type { Config, Options } from '../types.js';

export const astroConfig = async ({ fileRoots }: Pick<Options, 'fileRoots'>): Promise<Config[]> => {
  const { default: astroPlugin } = await import('eslint-plugin-astro');
  return [
    ...applyFilesFactory(astroPlugin.configs.recommended as Config[], fileRoots),
    {
      files: filesFactory(['**/*.astro'], fileRoots),
      rules: {
        'no-alert': 'error',
        'no-console': ['error', { allow: ['warn', 'error'] }]
      }
    }
  ];
};

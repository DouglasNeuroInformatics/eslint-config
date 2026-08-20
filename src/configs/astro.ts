import { applyFilesFactory, filesFactory } from '../utils.js';

import type { Config, ResolvedOptions } from '../types.js';

export const astroConfig = async ({ fileRoots }: Pick<ResolvedOptions, 'fileRoots'>): Promise<Config[]> => {
  const { default: astroPlugin } = await import('eslint-plugin-astro');
  return [
    ...applyFilesFactory(astroPlugin.configs.recommended as Config[], fileRoots),
    {
      files: filesFactory(['**/*.astro'], fileRoots),
      rules: {
        // The frontmatter is parsed as TypeScript, so these core rules report against type-only
        // syntax that they cannot resolve; the compiler covers both cases instead
        'no-undef': 'off',
        'no-unused-vars': 'off'
      }
    }
  ];
};

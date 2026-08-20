import { filesFactory, scriptFiles } from '../utils.js';

import type { Config, ResolvedOptions } from '../types.js';

export const importConfig = async ({
  astro,
  fileRoots,
  svelte
}: Pick<ResolvedOptions, 'astro' | 'fileRoots' | 'svelte'>): Promise<Config[]> => {
  const { default: importPlugin } = await import('eslint-plugin-import');
  return [
    {
      files: filesFactory(scriptFiles({ astro, svelte }), fileRoots),
      plugins: {
        import: importPlugin
      },
      rules: {
        'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
        'import/no-duplicates': 'error'
      }
    },
    {
      // Component files legitimately mix exports into the rest of their top-level code (e.g., an
      // Astro `export const prerender`, or Svelte props), so this is limited to plain scripts
      files: filesFactory(scriptFiles(), fileRoots),
      rules: {
        'import/exports-last': 'error'
      }
    }
  ];
};

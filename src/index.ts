import { astroConfig } from './configs/astro.js';
import { baseConfig } from './configs/base.js';
import { jsdocConfig } from './configs/jsdoc.js';
import { jsonConfig } from './configs/json.js';
import { perfectionistConfig } from './configs/perfectionist.js';
import { reactConfig } from './configs/react.js';
import { svelteConfig } from './configs/svelte.js';
import { typescriptConfig } from './configs/typescript.js';

import type { Config, ConfigDef, Options } from './types.js';

/** Create an array of eslint config objects based on the provided options */
export const config = async (
  {
    astro = { enabled: false },
    env = { browser: true, es2021: true, node: true },
    exclude = [],
    fileRoots = undefined,
    jsdoc = { enabled: false },
    json = { enabled: true, sort: { packageJson: true, tsconfig: true } },
    perfectionist = { enabled: true },
    react = { enabled: false, version: 'detect' },
    svelte = { enabled: false },
    typescript = { enabled: true }
  }: Options = {},
  ...args: ConfigDef[]
): Promise<Config[]> => {
  const items: ConfigDef[] = [];
  items.push(baseConfig({ env, exclude, fileRoots }));
  if (astro.enabled) {
    items.push(astroConfig({ fileRoots }));
  }
  if (jsdoc.enabled) {
    items.push(jsdocConfig({ fileRoots, typescript }));
  }
  if (json.enabled) {
    items.push(jsonConfig({ fileRoots, json }));
  }
  if (perfectionist.enabled) {
    items.push(perfectionistConfig({ fileRoots }));
  }
  if (react.enabled) {
    items.push(reactConfig({ fileRoots, react, typescript }));
  }
  if (svelte.enabled) {
    items.push(svelteConfig({ fileRoots }));
  }
  if (typescript.enabled) {
    items.push(typescriptConfig({ fileRoots, react, svelte, typescript }));
  }
  items.push(...args);
  return (await Promise.all(items)).flat();
};

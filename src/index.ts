import { astroConfig } from './configs/astro.js';
import { baseConfig } from './configs/base.js';
import { importConfig } from './configs/import.js';
import { jsdocConfig } from './configs/jsdoc.js';
import { jsonConfig } from './configs/json.js';
import { perfectionistConfig } from './configs/perfectionist.js';
import { reactConfig } from './configs/react.js';
import { svelteConfig } from './configs/svelte.js';
import { typescriptConfig } from './configs/typescript.js';
import { resolveOptions } from './utils.js';

import type { Config, ConfigDef, Options } from './types.js';

/** Create an array of eslint config objects based on the provided options */
export const config = async (options: Options = {}, ...args: ConfigDef[]): Promise<Config[]> => {
  const { astro, env, exclude, fileRoots, jsdoc, json, perfectionist, react, svelte, typescript } =
    resolveOptions(options);
  const items: ConfigDef[] = [];
  items.push(baseConfig({ astro, env, exclude, fileRoots, svelte }), importConfig({ astro, fileRoots, svelte }));
  if (astro.enabled) {
    items.push(astroConfig({ fileRoots }));
  }
  if (jsdoc.enabled) {
    items.push(jsdocConfig({ astro, fileRoots, svelte, typescript }));
  }
  if (json.enabled) {
    items.push(jsonConfig({ fileRoots, json }));
  }
  if (perfectionist.enabled) {
    items.push(perfectionistConfig({ astro, fileRoots, svelte }));
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
  return (await Promise.all(items.map(async (item) => await item))).flat();
};

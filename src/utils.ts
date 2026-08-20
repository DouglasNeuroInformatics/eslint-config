import path from 'path';

import type { Config, ConfigFiles, Options, ResolvedOptions } from './types.js';

/** Extensions whose top-level code is always linted as a script */
const SCRIPT_EXTENSIONS = ['js', 'jsx', 'cjs', 'mjs', 'ts', 'tsx'];

export function applyFilesFactory(configs: Config[], roots?: string[]): Config[] {
  if (!roots) {
    return configs;
  }
  return configs.map((config) => {
    const files = config.files;
    if (!files) {
      return config;
    }
    return { ...config, files: filesFactory(files, roots) };
  });
}

/** Apply roots to files, if applicable */
export function filesFactory(files: ConfigFiles, roots?: string[]): ConfigFiles {
  if (!roots) {
    return files;
  }
  const result: ConfigFiles = [];
  for (const root of roots) {
    for (const item of files) {
      if (typeof item === 'string') {
        result.push(path.join(root, item));
      } else {
        result.push(filesFactory(item, [root]) as string[]);
      }
    }
  }
  return result;
}

/**
 * Apply the default for every option the user omitted. Defaults are resolved one value at a time,
 * so supplying a single key (e.g., `react.enabled`) never discards the defaults for its siblings.
 */
export function resolveOptions(options: Options = {}): ResolvedOptions {
  return {
    astro: {
      enabled: options.astro?.enabled ?? false
    },
    env: {
      browser: options.env?.browser ?? true,
      es2021: options.env?.es2021 ?? true,
      node: options.env?.node ?? true
    },
    exclude: options.exclude ?? [],
    fileRoots: options.fileRoots,
    jsdoc: {
      enabled: options.jsdoc?.enabled ?? false
    },
    json: {
      enabled: options.json?.enabled ?? true,
      sort: {
        packageJson: options.json?.sort?.packageJson ?? true,
        tsconfig: options.json?.sort?.tsconfig ?? true
      }
    },
    perfectionist: {
      enabled: options.perfectionist?.enabled ?? true
    },
    react: {
      enabled: options.react?.enabled ?? false,
      version: options.react?.version ?? 'detect'
    },
    svelte: {
      enabled: options.svelte?.enabled ?? false
    },
    typescript: {
      enabled: options.typescript?.enabled ?? true,
      explicitReturnTypes: options.typescript?.explicitReturnTypes ?? false,
      project: options.typescript?.project
    }
  };
}

/**
 * Globs matching every file whose top-level code should be linted as a script, including the
 * single-file component extensions of any enabled framework. Script blocks within those components
 * are linted through the virtual filenames the framework processor emits (e.g., `Foo.astro/0.ts`),
 * which the plain script globs already match.
 */
export function scriptFiles({ astro, svelte }: Partial<Pick<ResolvedOptions, 'astro' | 'svelte'>> = {}): string[] {
  const extensions = [...SCRIPT_EXTENSIONS];
  if (astro?.enabled) {
    extensions.push('astro');
  }
  if (svelte?.enabled) {
    extensions.push('svelte');
  }
  return extensions.map((extension) => `**/*.${extension}`);
}

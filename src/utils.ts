import path from 'path';

import type { Config, ConfigFiles } from './types.js';

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

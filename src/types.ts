import { Linter } from 'eslint';

export type Config = Linter.Config;

export type ConfigDef = Config | Config[] | Promise<Config> | Promise<Config[]>;

export type ConfigFiles = NonNullable<Config['files']>;

/** User configuration options for ESLint */
export type Options = {
  astro?: {
    enabled: boolean;
  };
  env?: {
    browser?: boolean;
    es2021?: boolean;
    node?: boolean;
  };
  exclude?: string[];
  fileRoots?: string[];
  jsdoc?: {
    enabled: boolean;
  };
  json?: {
    enabled: boolean;
    sort: {
      packageJson: boolean;
      tsconfig: boolean;
    };
  };
  perfectionist?: {
    enabled: boolean;
  };
  react?: {
    enabled: boolean;
    version?: string;
  };
  svelte?: {
    enabled: boolean;
  };
  typescript?: {
    enabled: boolean;
    explicitReturnTypes?: boolean;
    project?: string;
  };
};

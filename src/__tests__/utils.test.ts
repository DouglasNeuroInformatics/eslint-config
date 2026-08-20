import { describe, expect, it } from 'vitest';

import { filesFactory, resolveOptions, scriptFiles } from '../utils.js';

describe('filesFactory', () => {
  it('should return the files unmodified if roots is undefined', () => {
    expect(filesFactory(['*.js', '*.ts'])).toMatchObject(['*.js', '*.ts']);
  });
  it('should apply the roots to all files in an array', () => {
    expect(filesFactory(['*.js', '*.ts'], ['/app', '/root'])).toMatchObject([
      '/app/*.js',
      '/app/*.ts',
      '/root/*.js',
      '/root/*.ts'
    ]);
  });
  it('should apply the roots to all files in a 2D array', () => {
    expect(filesFactory(['*.js', '*.ts', ['internal/*.cjs']], ['/app', '/root'])).toMatchObject([
      '/app/*.js',
      '/app/*.ts',
      ['/app/internal/*.cjs'],
      '/root/*.js',
      '/root/*.ts',
      ['/root/internal/*.cjs']
    ]);
  });
});

describe('resolveOptions', () => {
  it('should apply all defaults when no options are provided', () => {
    expect(resolveOptions()).toMatchObject({
      astro: { enabled: false },
      env: { browser: true, es2021: true, node: true },
      exclude: [],
      json: { enabled: true, sort: { packageJson: true, tsconfig: true } },
      perfectionist: { enabled: true },
      react: { enabled: false, version: 'detect' },
      typescript: { enabled: true }
    });
  });
  it('should preserve the defaults of sibling values when one value is provided', () => {
    expect(resolveOptions({ react: { enabled: true } }).react).toMatchObject({
      enabled: true,
      version: 'detect'
    });
    expect(resolveOptions({ env: { node: false } }).env).toMatchObject({
      browser: true,
      es2021: true,
      node: false
    });
  });
  it('should preserve the defaults of nested sibling values', () => {
    expect(resolveOptions({ json: { sort: { tsconfig: false } } }).json).toMatchObject({
      enabled: true,
      sort: { packageJson: true, tsconfig: false }
    });
  });
  it('should allow an explicitly provided value to override its default', () => {
    expect(resolveOptions({ perfectionist: { enabled: false } }).perfectionist.enabled).toBe(false);
    expect(resolveOptions({ react: { version: '18.2' } }).react.version).toBe('18.2');
  });
});

describe('scriptFiles', () => {
  it('should return only the plain script globs by default', () => {
    expect(scriptFiles()).toMatchObject(['**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs', '**/*.ts', '**/*.tsx']);
  });
  it('should not include component globs for a disabled framework', () => {
    expect(scriptFiles({ astro: { enabled: false }, svelte: { enabled: false } })).not.toContain('**/*.astro');
  });
  it('should include the component glob of each enabled framework', () => {
    expect(scriptFiles({ astro: { enabled: true } })).toContain('**/*.astro');
    expect(scriptFiles({ svelte: { enabled: true } })).toContain('**/*.svelte');
    expect(scriptFiles({ astro: { enabled: true }, svelte: { enabled: true } })).toMatchObject([
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
      '**/*.ts',
      '**/*.tsx',
      '**/*.astro',
      '**/*.svelte'
    ]);
  });
});

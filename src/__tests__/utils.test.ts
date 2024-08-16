import { describe, expect, it } from 'vitest';

import { filesFactory } from '../utils.js';

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

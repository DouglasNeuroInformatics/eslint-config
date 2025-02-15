declare module 'eslint-plugin-import' {
  const plugin: {
    configs: {
      [key: string]: any;
    };
    flatConfigs: {
      [key: string]: any;
    };
    rules: {
      [key: string]: any;
    };
  };
  export = plugin;
}

// {
//   rules: {
//     'no-unresolved': { meta: [Object], create: [Function: create] },
//     named: { meta: [Object], create: [Function: create] },
//     default: { meta: [Object], create: [Function: create] },
//     namespace: { meta: [Object], create: [Function: namespaceRule] },
//     'no-namespace': { meta: [Object], create: [Function: create] },
//     export: { meta: [Object], create: [Function: create] },
//     'no-mutable-exports': { meta: [Object], create: [Function: create] },
//     extensions: { meta: [Object], create: [Function: create] },
//     'no-restricted-paths': { meta: [Object], create: [Function: noRestrictedPaths] },
//     'no-internal-modules': { meta: [Object], create: [Function: noReachingInside] },
//     'group-exports': { meta: [Object], create: [Function: create] },
//     'no-relative-packages': { meta: [Object], create: [Function: create] },
//     'no-relative-parent-imports': { meta: [Object], create: [Function: noRelativePackages] },
//     'consistent-type-specifier-style': { meta: [Object], create: [Function: create] },
//     'no-self-import': { meta: [Object], create: [Function: create] },
//     'no-cycle': { meta: [Object], create: [Function: create] },
//     'no-named-default': { meta: [Object], create: [Function: create] },
//     'no-named-as-default': { meta: [Object], create: [Function: create] },
//     'no-named-as-default-member': { meta: [Object], create: [Function: create] },
//     'no-anonymous-default-export': { meta: [Object], create: [Function: create] },
//     'no-unused-modules': { meta: [Object], create: [Function: create] },
//     'no-commonjs': { meta: [Object], create: [Function: create] },
//     'no-amd': { meta: [Object], create: [Function: create] },
//     'no-duplicates': { meta: [Object], create: [Function: create] },
//     first: { meta: [Object], create: [Function: create] },
//     'max-dependencies': { meta: [Object], create: [Function: create] },
//     'no-extraneous-dependencies': {
//       meta: [Object],
//       create: [Function: create],
//       'Program:exit': [Function: ProgramExit]
//     },
//     'no-absolute-path': { meta: [Object], create: [Function: create] },
//     'no-nodejs-modules': { meta: [Object], create: [Function: create] },
//     'no-webpack-loader-syntax': { meta: [Object], create: [Function: create] },
//     order: { meta: [Object], create: [Function: create] },
//     'newline-after-import': { meta: [Object], create: [Function: create] },
//     'prefer-default-export': { meta: [Object], create: [Function: create] },
//     'no-default-export': { meta: [Object], create: [Function: create] },
//     'no-named-export': { meta: [Object], create: [Function: create] },
//     'no-dynamic-require': { meta: [Object], create: [Function: create] },
//     unambiguous: { meta: [Object], create: [Function: create] },
//     'no-unassigned-import': { create: [Function: create], meta: [Object] },
//     'no-useless-path-segments': { meta: [Object], create: [Function: create] },
//     'dynamic-import-chunkname': { meta: [Object], create: [Function: create] },
//     'no-import-module-exports': { meta: [Object], create: [Function: create] },
//     'no-empty-named-blocks': { meta: [Object], create: [Function: create] },
//     'exports-last': { meta: [Object], create: [Function: create] },
//     'no-deprecated': { meta: [Object], create: [Function: create] },
//     'imports-first': { meta: [Object], create: [Function: create] }
//   },
//   configs: {
//     recommended: { plugins: [Array], rules: [Object], parserOptions: [Object] },
//     errors: { plugins: [Array], rules: [Object] },
//     warnings: { plugins: [Array], rules: [Object] },
//     'stage-0': { plugins: [Array], rules: [Object] },
//     react: { settings: [Object], parserOptions: [Object] },
//     'react-native': { settings: [Object] },
//     electron: { settings: [Object] },
//     typescript: { settings: [Object], rules: [Object] }
//   },
//   flatConfigs: {
//     recommended: {
//       rules: [Object],
//       languageOptions: [Object],
//       name: 'import/recommended',
//       plugins: [Object]
//     },
//     errors: { rules: [Object], name: 'import/errors', plugins: [Object] },
//     warnings: { rules: [Object], name: 'import/warnings', plugins: [Object] },
//     react: { settings: [Object], languageOptions: [Object] },
//     'react-native': { settings: [Object] },
//     electron: { settings: [Object] },
//     typescript: { settings: [Object], rules: [Object] }
//   }
// }

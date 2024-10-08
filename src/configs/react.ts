import { filesFactory } from '../utils.js';

import type { Config, Options } from '../types.js';

export const reactConfig = async ({
  fileRoots,
  react,
  typescript
}: Pick<Options, 'fileRoots'> & Required<Pick<Options, 'react' | 'typescript'>>): Promise<Config[]> => {
  const { default: jsxA11yPlugin } = await import('eslint-plugin-jsx-a11y');
  const { default: reactPlugin } = await import('eslint-plugin-react');
  return [
    {
      files: typescript.enabled
        ? filesFactory(['**/*.jsx', '**/*.tsx'], fileRoots)
        : filesFactory(['**/*.jsx'], fileRoots),
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          }
        }
      },
      plugins: {
        'jsx-a11y': jsxA11yPlugin,
        react: reactPlugin
      },
      rules: {
        ...reactPlugin.configs.recommended?.rules,
        ...jsxA11yPlugin.configs.recommended?.rules,
        'react/function-component-definition': [
          'error',
          {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function'
          }
        ],
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off'
      },
      settings: {
        react: {
          version: react.version
        }
      }
    },
    {
      files: filesFactory(['**/*.stories.jsx', '**/*.stories.tsx'], fileRoots),
      rules: {
        'no-alert': 'off'
      }
    }
  ];
};

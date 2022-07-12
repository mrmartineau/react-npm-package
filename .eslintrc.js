const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  // We're using vitest which has a very similar API to jest
  // (so the linting plugins work nicely), but we have to
  // set the jest version explicitly.
  settings: {
    jest: {
      version: 28,
    },
  },
  overrides: [
    // TypeScript
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // TS does this for us - see https://typescript-eslint.io/docs/linting/troubleshooting/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
        'no-undef': 'off',
      },
    }, // React
    {
      files: ['*.tsx'],
      rules: {
        // Use tsx file extension for React components
        'react/jsx-filename-extension': [
          2,
          {
            extensions: ['.tsx'],
          },
        ],
      },
    },
    // Cypress
    // {
    //   files: ['**/cypress/**'],
    //   extends: ['plugin:cypress/recommended'],
    //   env: {
    //     node: true,
    //     mocha: true,
    //   },
    // },
  ],
}

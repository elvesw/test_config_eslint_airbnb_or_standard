module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'class-methods-use-this': 'off', // enforce that class methods utilize `this`
    '@typescript-eslint/no-unused-vars': ['error', { // Disallow unused variables
      argsIgnorePattern: '_',
    }], // This rule aims to ensure that the values returned from a module are of the expected type.
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {}, // load <rootdir>/tsconfig.json to eslint
    },
  },
};

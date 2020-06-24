module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-base',
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
    'class-methods-use-this': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error', { argsIgnorePattern: '_' },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {}, // faz o load <rootdir>/tsconfig.json para eslint
    },
  },
};

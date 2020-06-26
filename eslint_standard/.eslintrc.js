module.exports = {
  env: {
    es2020: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { // Disallow unused variables
      argsIgnorePattern: '_'
    }],
    '@typescript-eslint/explicit-module-boundary-types': 'off' // This rule aims to ensure that the values returned from a module are of the expected type.
  }
}

const rules = require('./rules')

module.exports = {
  extends: [
    '@lacussoft',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2021,
  },
  plugins: [
    '@typescript-eslint', // https://github.com/typescript-eslint/typescript-eslint
  ],
  rules,
}

const plugins = require('./plugins')
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
  plugins,
  rules,
}

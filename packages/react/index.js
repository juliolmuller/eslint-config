const plugins = require('./plugins')
const rules = require('./rules')

module.exports = {
  extends: [
    '@lacussoft',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins,
  rules,
}

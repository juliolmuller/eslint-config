const rules = require('./rules')

module.exports = {
  extends: [
    '@lacussoft',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-control-statements/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react', // https://github.com/yannickcr/eslint-plugin-react
    'react-hooks', // https://www.npmjs.com/package/eslint-plugin-react-hooks
    'jsx-control-statements', // https://www.npmjs.com/package/eslint-plugin-jsx-control-statements
  ],
  rules,
}

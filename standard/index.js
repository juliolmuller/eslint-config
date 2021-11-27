const rules = require('./rules')

module.exports = {
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: [
    'import', // https://github.com/benmosher/eslint-plugin-import
    'import-helpers', // https://github.com/Tibfib/eslint-plugin-import-helpers
  ],
  rules,
}

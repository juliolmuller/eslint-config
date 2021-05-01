const rules = require('./rules')

module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: [
    'import', // https://github.com/benmosher/eslint-plugin-import
  ],
  rules,
}

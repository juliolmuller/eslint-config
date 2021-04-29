const plugins = require('./plugins')
const rules = require('./rules')

module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins,
  rules,
}

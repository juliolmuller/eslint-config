const requirePlugins = require('../../utils/require-plugins')
const pluginsRules = requirePlugins(`${__dirname}/plugins`)
const overrides = require('./overrides')

module.exports = {
  ...pluginsRules,
  ...overrides, // <<< MUST BE THE LAST ONE
}

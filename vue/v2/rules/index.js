const requirePlugins = require('../../../utils/require-plugins')
const pluginsRules = requirePlugins(`${__dirname}/plugins`)
const sharedRules = require('../../shared/rules')
const overrides = require('./overrides')

module.exports = {
  ...sharedRules,
  ...pluginsRules,
  ...overrides, // <<< MUST BE THE LAST ONE
}

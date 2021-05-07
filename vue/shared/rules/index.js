const requirePlugins = require('../../../utils/require-plugins')
const sharedPluginsOverrides = requirePlugins(`${__dirname}/plugins`)
const sharedOverrides = require('./overrides')

module.exports = {
  ...sharedPluginsOverrides,
  ...sharedOverrides, // <<< MUST BE THE LAST ONE
}

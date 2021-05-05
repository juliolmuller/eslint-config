const requireContext = require('require-context')
const prefixRules = require('./prefix-rules')

/**
 * Require all plugins rules within a directory
 *
 * @param {string} absolutePath
 * @param {boolean} ignoreIndex
 * @return {object}
 */
function requirePlugins(absolutePath, ignoreIndex = false) {
  const rulesModules = requireContext(absolutePath, false, /\.js$/)
  const rulesSet = {}

  rulesModules.keys().forEach((fileName) => {
    if (!ignoreIndex || fileName !== 'index.js') {
      const requirePath = `./${fileName}`
      const rules = rulesModules(requirePath).default || rulesModules(requirePath)
      const pluginName = fileName.replace(/\.js$/, '')

      Object.assign(rulesSet, prefixRules(pluginName, rules))
    }
  })

  return rulesSet
}

module.exports = requirePlugins

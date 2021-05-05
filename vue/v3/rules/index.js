const vueRules = require('./plugins/vue')
const sharedRules = require('../../shared/rules')
const overrides = require('./overrides')

const prefixRules = (prefix, rules) => {
  const rulesEntries = Object.entries(rules)
  const prefixed = rulesEntries.map(([key, value]) => [`${prefix}/${key}`, value])

  return Object.fromEntries(prefixed)
}

const pluginsRules = {
  ...prefixRules('vue', vueRules),
}

module.exports = {
  ...sharedRules,
  ...pluginsRules,
  ...overrides, // <<< MUST BE THE LAST ONE
}

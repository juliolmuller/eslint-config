const reactHooksRules = require('./plugins/react-hooks')
const reactRules = require('./plugins/react')
const overrides = require('./overrides')

const prefixRules = (prefix, rules) => {
  const rulesEntries = Object.entries(rules)
  const prefixed = rulesEntries.map(([key, value]) => [`${prefix}/${key}`, value])

  return Object.fromEntries(prefixed)
}

const pluginsRules = {
  ...prefixRules('react', reactRules),
  ...prefixRules('react-hooks', reactHooksRules),
}

module.exports = {
  ...pluginsRules,
  ...overrides, // <<< MUST BE THE LAST ONE
}

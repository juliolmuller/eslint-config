const typescriptRules = require('./plugins/typescript')
const overrides = require('./overrides')

const prefixRules = (prefix, rules) => {
  const rulesEntries = Object.entries(rules)
  const prefixed = rulesEntries.map(([key, value]) => [`${prefix}/${key}`, value])

  return Object.fromEntries(prefixed)
}

const pluginsRules = {
  ...prefixRules('@typescript-eslint', typescriptRules),
}

module.exports = {
  ...pluginsRules,
  ...overrides, // <<< MUST BE THE LAST ONE
}

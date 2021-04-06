const importRules = require('./plugins/import')
const possibleErrors = require('./possible-errors')
const bestPractices = require('./best-practices')
const variables = require('./variables')
const style = require('./style')
const es6 = require('./es6')

const prefixKeys = (object, prefix) => {
  const objEntries = Object.entries(object)
  const prefixed = objEntries.map(([key, value]) => [`${prefix}/${key}`, value])

  return Object.fromEntries(prefixed)
}

const pluginsRules = {
  ...prefixKeys(importRules, 'import')
}

module.exports = {
  ...pluginsRules,
  ...possibleErrors,
  ...bestPractices,
  ...variables,
  ...style,
  ...es6,
}

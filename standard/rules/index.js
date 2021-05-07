const requirePlugins = require('../../utils/require-plugins')
const pluginsRules = requirePlugins(`${__dirname}/plugins`)
const possibleErrors = require('./possible-errors')
const bestPractices = require('./best-practices')
const variables = require('./variables')
const style = require('./style')
const es6 = require('./es6')

module.exports = {
  ...pluginsRules,
  ...possibleErrors,
  ...bestPractices,
  ...variables,
  ...style,
  ...es6,
}

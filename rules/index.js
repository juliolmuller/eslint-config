const bestPractices = require('./best-practices')
const variables = require('./variables')
const errors = require('./errors')
const style = require('./style')
const es6 = require('./es6')

module.exports = {
  ...bestPractices,
  ...variables,
  ...errors,
  ...style,
  ...es6,
}

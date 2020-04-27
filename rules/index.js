var bestPractices = require('./best-practices')
var variables = require('./variables')
var errors = require('./errors')
var style = require('./style')
var node = require('./node')
var es6 = require('./es6')

module.exports = Object.assign({},
  bestPractices,
  variables,
  errors,
  style,
  node,
  es6,
)

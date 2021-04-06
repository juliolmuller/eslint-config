const config = require('./index')

module.exports = {
  root: true,
  env: {
    node: true,
    amd: true,
    es6: true,
  },
  ...config,
}

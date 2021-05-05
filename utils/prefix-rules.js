
/**
 * Used to prefix linting rules from plugins
 *
 * @param {string} prefix
 * @param {object} rules
 * @return {object}
 */
function prefixRules(prefix, rules) {
  const rulesEntries = Object.entries(rules)
  const prefixed = rulesEntries.map(([key, value]) => [`${prefix}/${key}`, value])

  return Object.fromEntries(prefixed)
}

module.exports = prefixRules

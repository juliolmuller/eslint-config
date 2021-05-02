const rules = require('./rules')

module.exports = {
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
  },
  plugins: [
    'vue', // https://eslint.vuejs.org/
  ],
  rules,
}

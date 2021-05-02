const rules = require('./rules')

module.exports = {
  extends: [
    '../react',
    'plugin:react-native/all',
  ],
  plugins: [
    'react-native', // https://github.com/Intellicode/eslint-plugin-react-native
  ],
  rules,
}

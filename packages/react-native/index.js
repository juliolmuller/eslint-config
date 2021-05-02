const rules = require('./rules')

module.exports = {
  extends: [
    '@lacussoft/react',
    'plugin:react-native/all',
  ],
  plugins: [
    'react-native', // https://github.com/Intellicode/eslint-plugin-react-native
  ],
  rules,
}

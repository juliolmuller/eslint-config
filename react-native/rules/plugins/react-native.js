module.exports = {
  // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-color-literals.md
  'no-color-literals': 'warn',

  // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-inline-styles.md
  'no-inline-styles': 'off',

  // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-raw-text.md
  'no-raw-text': ['error', {
    skip: [],
  }],

  // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-single-element-style-arrays.md
  'no-single-element-style-arrays': 'off',

  // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-unused-styles.md
  'no-unused-styles': 'warn',

  // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/sort-styles.md
  'sort-styles': 'off',

  // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/split-platform-components.md
  'split-platform-components': ['warn', {
    androidPathRegex: '\\.android.(js|jsx|ts|tsx)$',
    iosPathRegex: '\\.ios.(js|jsx|ts|tsx)$',
  }],
}

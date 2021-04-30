module.exports = {
  // TODO: review all rules

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
  'jsx-boolean-value': ['error', 'never'],

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
  'jsx-child-element-spacing': 'warn',

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
  'jsx-closing-bracket-location': ['error', {
    selfClosing: 'line-aligned',
    nonEmpty: 'line-aligned',
  }],

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
  'jsx-curly-spacing': ['error', {
    when: 'never',
  }],

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
  'jsx-filename-extension': [1, {
    allow: 'as-needed',
  }],

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
  'jsx-max-props-per-line': ['warn', {
    maximum: 3,
    when: 'always',
  }],

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
  'jsx-equals-spacing': ['error', 'never'],

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
  'jsx-indent': ['error', 2, {
    checkAttributes: true,
    indentLogicalExpressions: true,
  }],

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
  'jsx-indent-props': ['error', 2],

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
  'jsx-no-target-blank': ['error', {
    enforceDynamicLinks: 'never',
    warnOnSpreadAttributes: true,
    allowReferrer: false,
  }],

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
  'jsx-props-no-spreading': 'off',

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
  'react-in-jsx-scope': 'off',
}

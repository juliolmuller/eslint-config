module.exports = {
  // TODO: review all rules

  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
  'explicit-module-boundary-types': 'off',

  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
  'indent': require('../../../../standard/rules').indent,

  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
  'no-array-constructor': require('../../../../standard/rules')['no-array-constructor'],

  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
  'no-empty-function': require('../../../../standard/rules')['no-empty-function'],

  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
  'no-explicit-any': ['warn', {
    fixToUnknown: false,
    ignoreRestArgs: false,
  }],

  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
  'no-extra-semi': require('../../../../standard/rules')['no-extra-semi'],

  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
  'no-unused-vars': require('../../../../standard/rules')['no-unused-vars'],

  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
  'member-delimiter-style': ['error', {
    multiline: {
      delimiter: 'none',
      requireLast: true,
    },
    singleline: {
      delimiter: 'semi',
      requireLast: false,
    },
  }],

  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
  'quotes': require('../../../../standard/rules').quotes,

  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
  'semi': require('../../../../standard/rules').semi,
}

module.exports = {

  // https://eslint.org/docs/rules/for-direction
  'for-direction': 'error',

  // https://eslint.org/docs/rules/getter-return
  'getter-return': ['error', { allowImplicit: true }],

  // https://eslint.org/docs/rules/no-async-promise-executor
  'no-async-promise-executor': 'error',

  // https://eslint.org/docs/rules/no-await-in-loop
  'no-await-in-loop': 'error',

  // https://eslint.org/docs/rules/no-compare-neg-zero
  'no-compare-neg-zero': 'error',

  // https://eslint.org/docs/rules/no-cond-assign
  'no-cond-assign': ['error', 'always'],

  // https://eslint.org/docs/rules/no-console
  'no-console': 'warn',

  // https://eslint.org/docs/rules/no-constant-condition
  'no-constant-condition': ['error', {
    checkLoops: false,
  }],

  // https://eslint.org/docs/rules/no-control-regex
  'no-control-regex': 'error',

  // https://eslint.org/docs/rules/no-debugger
  'no-debugger': 'error',

  // disallow duplicate arguments in functions
  'no-dupe-args': 'error',

  // Disallow duplicate conditions in if-else-if chains
  // https://eslint.org/docs/rules/no-dupe-else-if
  // TODO: enable, semver-major
  'no-dupe-else-if': 'off',

  // disallow duplicate keys when creating object literals
  'no-dupe-keys': 'error',

  // disallow a duplicate case label.
  'no-duplicate-case': 'error',

  // https://eslint.org/docs/rules/no-empty
  'no-empty': 'error',

  // https://eslint.org/docs/rules/no-empty-character-class
  'no-empty-character-class': 'error',

  // https://eslint.org/docs/rules/no-ex-assign
  'no-ex-assign': 'error',

  // https://eslint.org/docs/rules/no-extra-boolean-cast
  'no-extra-boolean-cast': 'error',

  // disallow unnecessary parentheses
  // https://eslint.org/docs/rules/no-extra-parens
  'no-extra-parens': ['off', 'all', {
    conditionalAssign: true,
    nestedBinaryExpressions: false,
    returnAssign: false,
    ignoreJSX: 'all', // delegate to eslint-plugin-react
    enforceForArrowConditionals: false,
  }],

  // disallow unnecessary semicolons
  'no-extra-semi': 'error',

  // disallow overwriting functions written as function declarations
  'no-func-assign': 'error',

  // https://eslint.org/docs/rules/no-import-assign
  // TODO: enable, semver-minor, once eslint v6.4 is required (which is a major)
  'no-import-assign': 'off',

  // disallow function or variable declarations in nested blocks
  'no-inner-declarations': 'error',

  // disallow invalid regular expression strings in the RegExp constructor
  'no-invalid-regexp': 'error',

  // disallow irregular whitespace outside of strings and comments
  'no-irregular-whitespace': 'error',

  // Disallow characters which are made with multiple code points in character class syntax
  // https://eslint.org/docs/rules/no-misleading-character-class
  'no-misleading-character-class': 'error',

  // disallow the use of object properties of the global object (Math and JSON) as functions
  'no-obj-calls': 'error',

  // disallow use of Object.prototypes builtins directly
  // https://eslint.org/docs/rules/no-prototype-builtins
  'no-prototype-builtins': 'error',

  // disallow multiple spaces in a regular expression literal
  'no-regex-spaces': 'error',

  // Disallow returning values from setters
  // https://eslint.org/docs/rules/no-setter-return
  // TODO: enable, semver-major (altho the guide forbids getters/setters already)
  'no-setter-return': 'off',

  // disallow sparse arrays
  'no-sparse-arrays': 'error',

  // Disallow template literal placeholder syntax in regular strings
  // https://eslint.org/docs/rules/no-template-curly-in-string
  'no-template-curly-in-string': 'error',

  // Avoid code that looks like two expressions but is actually one
  // https://eslint.org/docs/rules/no-unexpected-multiline
  'no-unexpected-multiline': 'error',

  // disallow unreachable statements after a return, throw, continue, or break statement
  'no-unreachable': 'error',

  // disallow return/throw/break/continue inside finally blocks
  // https://eslint.org/docs/rules/no-unsafe-finally
  'no-unsafe-finally': 'error',

  // disallow negating the left operand of relational operators
  // https://eslint.org/docs/rules/no-unsafe-negation
  'no-unsafe-negation': 'error',
  // disallow negation of the left operand of an in expression
  // deprecated in favor of no-unsafe-negation
  'no-negated-in-lhs': 'off',

  // Disallow assignments that can lead to race conditions due to usage of await or yield
  // https://eslint.org/docs/rules/require-atomic-updates
  // TODO: enable, semver-major
  'require-atomic-updates': 'off',

  // disallow comparisons with the value NaN
  'use-isnan': 'error',

  // ensure JSDoc comments are valid
  // https://eslint.org/docs/rules/valid-jsdoc
  'valid-jsdoc': 'off',

  // ensure that the results of typeof are compared against a valid string
  // https://eslint.org/docs/rules/valid-typeof
  'valid-typeof': ['error', {
    requireStringLiterals: true,
  }],
}

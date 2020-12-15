/* eslint-disable no-magic-numbers */

module.exports = {

  // https://eslint.org/docs/rules/array-bracket-newline
  'array-bracket-newline': ['off', 'consistent'], // object option alternative: { multiline: true, minItems: 3 }

  // https://eslint.org/docs/rules/array-element-newline
  'array-element-newline': ['off', {
    multiline: true,
    minItems: 3,
  }],

  // https://eslint.org/docs/rules/array-bracket-spacing
  'array-bracket-spacing': ['error', 'never'],

  // https://eslint.org/docs/rules/block-spacing
  'block-spacing': ['error', 'always'],

  // https://eslint.org/docs/rules/brace-style
  'brace-style': ['error', '1tbs', {
    allowSingleLine: true,
  }],

  // https://eslint.org/docs/rules/camelcase
  'camelcase': ['error', {
    properties: 'never',
    ignoreDestructuring: false,
  }],

  // https://eslint.org/docs/rules/capitalized-comments
  'capitalized-comments': ['off', 'never', {
    line: {
      ignorePattern: '.*',
      ignoreInlineComments: true,
      ignoreConsecutiveComments: true,
    },
    block: {
      ignorePattern: '.*',
      ignoreInlineComments: true,
      ignoreConsecutiveComments: true,
    },
  }],

  // https://eslint.org/docs/rules/comma-dangle
  'comma-dangle': ['error', {
    arrays: 'always-multiline',
    objects: 'always-multiline',
    imports: 'always-multiline',
    exports: 'always-multiline',
    functions: 'always-multiline',
  }],

  // https://eslint.org/docs/rules/comma-spacing
  'comma-spacing': ['error', {
    before: false,
    after: true,
  }],

  // https://eslint.org/docs/rules/comma-style
  'comma-style': ['error', 'last', {
    exceptions: {
      ArrayExpression: false,
      ArrayPattern: false,
      ArrowFunctionExpression: false,
      CallExpression: false,
      FunctionDeclaration: false,
      FunctionExpression: false,
      ImportDeclaration: false,
      ObjectExpression: false,
      ObjectPattern: false,
      VariableDeclaration: false,
      NewExpression: false,
    },
  }],

  // https://eslint.org/docs/rules/computed-property-spacing
  'computed-property-spacing': ['error', 'never'],

  // https://eslint.org/docs/rules/consistent-this
  'consistent-this': 'off',

  // https://eslint.org/docs/rules/eol-last
  'eol-last': ['error', 'always'],

  // https://eslint.org/docs/rules/function-call-argument-newline
  'function-call-argument-newline': ['off', 'consistent'],

  // https://eslint.org/docs/rules/func-call-spacing
  'func-call-spacing': ['error', 'never'],

  // https://eslint.org/docs/rules/func-name-matching
  'func-name-matching': ['off', 'always', {
    includeCommonJSModuleExports: false,
    considerPropertyDescriptor: true,
  }],

  // https://eslint.org/docs/rules/func-names
  'func-names': ['error', 'never', {
    generators: 'as-needed',
  }],

  // https://eslint.org/docs/rules/func-style
  'func-style': ['error', 'expression'],

  // https://eslint.org/docs/rules/function-paren-newline
  'function-paren-newline': ['error', 'consistent'],

  // https://eslint.org/docs/rules/id-blacklist
  'id-blacklist': 'off',

  // https://eslint.org/docs/rules/id-length
  'id-length': 'off',

  // https://eslint.org/docs/rules/id-match
  'id-match': 'off',

  // https://eslint.org/docs/rules/implicit-arrow-linebreak
  'implicit-arrow-linebreak': ['error', 'beside'],

  // https://eslint.org/docs/rules/indent
  'indent': ['error', 2, {
    SwitchCase: 1,
    VariableDeclarator: 1,
    outerIIFEBody: 1,
    // MemberExpression: null,
    FunctionDeclaration: {
      parameters: 1,
      body: 1,
    },
    FunctionExpression: {
      parameters: 1,
      body: 1,
    },
    CallExpression: {
      arguments: 1,
    },
    ArrayExpression: 1,
    ObjectExpression: 1,
    ImportDeclaration: 1,
    flatTernaryExpressions: false,
    // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
    ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
    ignoreComments: false,
  }],

  // https://eslint.org/docs/rules/jsx-quotes
  'jsx-quotes': ['off', 'prefer-double'],

  // https://eslint.org/docs/rules/key-spacing
  'key-spacing': ['error', {
    beforeColon: false,
    afterColon: true,
  }],

  // https://eslint.org/docs/rules/keyword-spacing
  'keyword-spacing': ['error', {
    before: true,
    after: true,
    overrides: {
      return: { after: true },
      throw: { after: true },
      case: { after: true },
    },
  }],

  // https://eslint.org/docs/rules/line-comment-position
  'line-comment-position': ['off', {
    position: 'above',
    ignorePattern: '',
    applyDefaultPatterns: true,
  }],

  // https://eslint.org/docs/rules/linebreak-style
  'linebreak-style': ['error', 'windows'], // CRLF

  // https://eslint.org/docs/rules/lines-between-class-members
  'lines-between-class-members': ['error', 'always', {
    exceptAfterSingleLine: false,
  }],

  // https://eslint.org/docs/rules/lines-around-comment
  'lines-around-comment': 'off',

  // https://eslint.org/docs/rules/lines-around-directive
  'lines-around-directive': ['error', {
    before: 'always',
    after: 'always',
  }],

  // https://eslint.org/docs/rules/max-depth
  'max-depth': ['off', 4],

  // https://eslint.org/docs/rules/max-len
  'max-len': ['error', {
    code: 120,
    tabWidth: 2,
    ignoreUrls: true,
    ignoreComments: false,
    ignoreRegExpLiterals: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true,
    ignoreTrailingComments: true,
  }],

  // https://eslint.org/docs/rules/max-lines
  'max-lines': ['off', {
    max: 300,
    skipBlankLines: true,
    skipComments: true,
  }],

  // https://eslint.org/docs/rules/max-lines-per-function
  'max-lines-per-function': ['off', {
    max: 50,
    skipBlankLines: true,
    skipComments: true,
    IIFEs: true,
  }],

  // https://eslint.org/docs/rules/max-nested-callbacks
  'max-nested-callbacks': 'off',

  // https://eslint.org/docs/rules/max-params
  'max-params': ['off', 3],

  // https://eslint.org/docs/rules/max-statements
  'max-statements': ['off', 10],

  // https://eslint.org/docs/rules/max-statements-per-line
  'max-statements-per-line': ['off', { max: 1 }],

  // https://eslint.org/docs/rules/multiline-comment-style
  'multiline-comment-style': ['off', 'starred-block'],

  // https://eslint.org/docs/rules/multiline-ternary
  'multiline-ternary': ['off', 'never'],

  // https://eslint.org/docs/rules/new-cap
  'new-cap': ['error', {
    newIsCap: true,
    newIsCapExceptions: [],
    capIsNew: false,
    capIsNewExceptions: [
      'Immutable.Map',
      'Immutable.Set',
      'Immutable.List',
    ],
  }],

  // https://eslint.org/docs/rules/new-parens
  'new-parens': 'error',

  // https://eslint.org/docs/rules/newline-after-var
  'newline-after-var': 'off',

  // https://eslint.org/docs/rules/newline-before-return
  'newline-before-return': 'off',

  // https://eslint.org/docs/rules/newline-per-chained-call
  'newline-per-chained-call': ['error', {
    ignoreChainWithDepth: 4,
  }],

  // https://eslint.org/docs/rules/no-array-constructor
  'no-array-constructor': 'error',

  // https://eslint.org/docs/rules/no-bitwise
  'no-bitwise': 'error',

  // https://eslint.org/docs/rules/no-continue
  'no-continue': 'error',

  // https://eslint.org/docs/rules/no-inline-comments
  'no-inline-comments': 'off',

  // https://eslint.org/docs/rules/no-lonely-if
  'no-lonely-if': 'error',

  // https://eslint.org/docs/rules/no-mixed-operators
  'no-mixed-operators': ['error', {
    allowSamePrecedence: false,
    groups: [
      ['%', '**'],
      ['%', '+'],
      ['%', '-'],
      ['%', '*'],
      ['%', '/'],
      ['&', '|', '<<', '>>', '>>>'],
      ['==', '!=', '===', '!=='],
      ['&&', '||'],
    ],
  }],

  // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
  'no-mixed-spaces-and-tabs': 'error',

  // https://eslint.org/docs/rules/no-multi-assign
  'no-multi-assign': ['error'],

  // https://eslint.org/docs/rules/no-multiple-empty-lines
  'no-multiple-empty-lines': ['error', {
    max: 2,
    maxBOF: 1,
    maxEOF: 1,
  }],

  // https://eslint.org/docs/rules/no-negated-condition
  'no-negated-condition': 'off',

  // https://eslint.org/docs/rules/no-nested-ternary
  'no-nested-ternary': 'error',

  // https://eslint.org/docs/rules/no-new-object
  'no-new-object': 'error',

  // https://eslint.org/docs/rules/no-plusplus
  'no-plusplus': 'off',

  // https://eslint.org/docs/rules/no-restricted-syntax
  'no-restricted-syntax': ['error', {
    selector: 'ForInStatement',
    message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
  }, {
    selector: 'ForOfStatement',
    message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
  }, {
    selector: 'LabeledStatement',
    message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
  }, {
    selector: 'WithStatement',
    message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
  }],

  // https://eslint.org/docs/rules/no-spaced-func
  'no-spaced-func': 'error',

  // https://eslint.org/docs/rules/no-tabs
  'no-tabs': 'error',

  // https://eslint.org/docs/rules/no-ternary
  'no-ternary': 'off',

  // https://eslint.org/docs/rules/no-trailing-spaces
  'no-trailing-spaces': ['error', {
    skipBlankLines: false,
    ignoreComments: false,
  }],

  // https://eslint.org/docs/rules/no-underscore-dangle
  'no-underscore-dangle': ['error', {
    allow: [],
    allowAfterThis: false,
    allowAfterSuper: false,
    enforceInMethodNames: true,
  }],

  // https://eslint.org/docs/rules/no-unneeded-ternary
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],

  // https://eslint.org/docs/rules/no-whitespace-before-property
  'no-whitespace-before-property': 'error',

  // https://eslint.org/docs/rules/nonblock-statement-body-position
  'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],

  // https://eslint.org/docs/rules/object-curly-spacing
  'object-curly-spacing': ['error', 'always'],

  // https://eslint.org/docs/rules/object-curly-newline
  'object-curly-newline': ['error', {
    ObjectExpression: {
      minProperties: 5,
      multiline: true,
      consistent: true,
    },
    ObjectPattern: {
      minProperties: 5,
      multiline: true,
      consistent: true,
    },
    ImportDeclaration: {
      minProperties: 5,
      multiline: true,
      consistent: true,
    },
    ExportDeclaration: {
      minProperties: 5,
      multiline: true,
      consistent: true,
    },
  }],

  // https://eslint.org/docs/rules/object-property-newline
  'object-property-newline': ['error', {
    allowAllPropertiesOnSameLine: true,
  }],

  // https://eslint.org/docs/rules/one-var
  'one-var': ['error', 'never'],

  // https://eslint.org/docs/rules/one-var-declaration-per-line
  'one-var-declaration-per-line': ['error', 'always'],

  // https://eslint.org/docs/rules/operator-assignment
  'operator-assignment': ['error', 'always'],

  // https://eslint.org/docs/rules/operator-linebreak
  'operator-linebreak': ['error', 'before', {
    overrides: { '=': 'none' },
  }],

  // https://eslint.org/docs/rules/padded-blocks
  'padded-blocks': 'off',

  // https://eslint.org/docs/rules/padding-line-between-statements
  'padding-line-between-statements': [
    'error',
    { blankLine: 'always', prev: ['const', 'let', 'block', 'block-like'], next: 'return' },
    { blankLine: 'always', prev: 'break', next: ['case', 'default'] },
  ],

  // https://eslint.org/docs/rules/prefer-exponentiation-operator
  'prefer-exponentiation-operator': 'off',

  // https://eslint.org/docs/rules/prefer-object-spread
  'prefer-object-spread': 'error',

  // https://eslint.org/docs/rules/quote-props
  'quote-props': ['error', 'consistent-as-needed'],

  // https://eslint.org/docs/rules/quotes
  'quotes': ['error', 'single', {
    avoidEscape: true,
  }],

  // https://eslint.org/docs/rules/require-jsdoc
  'require-jsdoc': 'off',

  // https://eslint.org/docs/rules/semi
  'semi': ['error', 'never'],

  // https://eslint.org/docs/rules/semi-spacing
  'semi-spacing': ['error', {
    before: false,
    after: true,
  }],

  // https://eslint.org/docs/rules/semi-style
  'semi-style': ['error', 'first'],

  // https://eslint.org/docs/rules/sort-keys
  'sort-keys': ['off', 'asc', {
    caseSensitive: false,
    natural: true,
  }],

  // https://eslint.org/docs/rules/sort-vars
  'sort-vars': 'off',

  // https://eslint.org/docs/rules/space-before-blocks
  'space-before-blocks': 'error',

  // https://eslint.org/docs/rules/space-before-function-paren
  'space-before-function-paren': ['error', {
    anonymous: 'always',
    named: 'never',
    asyncArrow: 'always',
  }],

  // https://eslint.org/docs/rules/space-in-parens
  'space-in-parens': ['error', 'never'],

  // https://eslint.org/docs/rules/space-infix-ops
  'space-infix-ops': 'error',

  // https://eslint.org/docs/rules/space-unary-ops
  'space-unary-ops': ['error', {
    words: true,
    nonwords: false,
    overrides: {
    },
  }],

  // https://eslint.org/docs/rules/spaced-comment
  'spaced-comment': ['error', 'always', {
    line: {
      exceptions: ['-', '+'],
      markers: ['=', '!', '/'], // space here to support sprockets directives, slash for TS /// comments
    },
    block: {
      exceptions: ['-', '+'],
      markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
      balanced: true,
    },
  }],

  // https://eslint.org/docs/rules/switch-colon-spacing
  'switch-colon-spacing': ['error', {
    after: true,
    before: false,
  }],

  // https://eslint.org/docs/rules/template-tag-spacing
  'template-tag-spacing': ['error', 'never'],

  // https://eslint.org/docs/rules/unicode-bom
  'unicode-bom': ['error', 'never'],

  // https://eslint.org/docs/rules/wrap-regex
  'wrap-regex': 'off',
}

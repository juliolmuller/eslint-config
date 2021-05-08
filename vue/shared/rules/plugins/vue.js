module.exports = {
  // TODO: review all rules

  // https://eslint.vuejs.org/rules/html-closing-bracket-newline.html
  'html-closing-bracket-newline': ['error', {
    singleline: 'never',
    multiline: 'always',
  }],

  // https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html
  'html-closing-bracket-spacing': ['error', {
    selfClosingTag: 'always',
    startTag: 'never',
    endTag: 'never',
  }],

  // https://eslint.vuejs.org/rules/html-comment-indent.html
  'html-comment-indent': ['error', 2],

  // https://eslint.vuejs.org/rules/html-end-tags.html
  'html-end-tags': 'error',

  // https://eslint.vuejs.org/rules/html-indent.html
  'html-indent': ['error', 2, {
    attribute: 1,
    baseIndent: 1,
    closeBracket: 0,
    alignAttributesVertically: true,
    ignores: [],
  }],

  // https://eslint.vuejs.org/rules/html-self-closing.html
  'html-self-closing': ['error', {
    svg: 'always',
    math: 'always',
    html: {
      void: 'always',
      normal: 'any',
      component: 'always',
    },
  }],

  // https://eslint.vuejs.org/rules/html-quotes.html
  'html-quotes': ['error', 'double', {
    avoidEscape: false,
  }],

  // https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html
  'mustache-interpolation-spacing': ['error', 'always'],

  // https://eslint.vuejs.org/rules/order-in-components.html
  'order-in-components': ['error', {
    order: [
      'el',
      'name',
      'key',
      'parent',
      'functional',
      ['delimiters', 'comments'],
      ['components', 'directives', 'filters'],
      'extends',
      'mixins',
      ['provide', 'inject'],
      'ROUTER_GUARDS',
      'layout',
      'middleware',
      'validate',
      'scrollToTop',
      'transition',
      'loading',
      'inheritAttrs',
      'model',
      ['props', 'propsData'],
      'emits',
      'setup',
      'asyncData',
      'data',
      'fetch',
      'head',
      'computed',
      'watch',
      'watchQuery',
      'methods',
      'LIFECYCLE_HOOKS',
      ['template', 'render'],
      'renderError',
    ],
  }],

  // https://eslint.vuejs.org/rules/require-name-property.html
  'require-name-property': 'error',

  // https://eslint.vuejs.org/rules/script-indent.html
  'script-indent': ['error', 2, {
    baseIndent: 0,
  }],
}

module.exports = {

  // https://github.com/Tibfib/eslint-plugin-import-helpers
  'order-imports': ['warn', {
    alphabetize: {
      order: 'asc',
      ignoreCase: true,
    },
    groups: [
      'module',
      ['/^@//', '/^~//'],
      ['parent', 'sibling', 'index'],
    ],
    newlinesBetween: 'always',
  }],
}

/* eslint-env jest */

const prefixRules = require('../../utils/prefix-rules')

describe('Evaluate function output', () => {
  const rulesSet = { rule: 'dummy-value' }

  it('should prefix properties with "123"', () => {
    expect(prefixRules('123', rulesSet)).toEqual({
      '123/rule': 'dummy-value',
    })
  })

  it('should prefix properties with "abc"', () => {
    expect(prefixRules('abc', rulesSet)).toEqual({
      'abc/rule': 'dummy-value',
    })
  })
})

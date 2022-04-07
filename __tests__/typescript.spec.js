/* eslint-env jest */
/* eslint-disable no-magic-numbers */

const eslintRulesOriginal = require('eslint/lib/rules')
const tsRulesOriginal = require('@typescript-eslint/eslint-plugin').rules
const configFile = require('../typescript')

describe('Check overall configuration', () => {
  it('It is extending all plugin\'s configurations', () => {
    expect(configFile.extends).toContain('plugin:@typescript-eslint/recommended')
  })

  it('It configures parser', () => {
    expect(configFile.parserOptions.parser).toBe('@typescript-eslint/parser')
    expect(configFile.parserOptions.sourceType).toBe('module')
    expect(configFile.parserOptions.ecmaVersion).toBe(2021)
  })

  it('It configures plugins: ["@typescript-eslint"]', () => {
    const expectedPlugins = ['@typescript-eslint']

    expect(configFile.plugins).toEqual(expect.arrayContaining(expectedPlugins))
  })
})

describe('Check ESlint rules', () => {
  const originalRulesName = Array.from(eslintRulesOriginal.keys())
  const configRulesName = Object.keys(configFile.rules).filter((key) => !key.match(/\//))

  it('There are 8 rules being overridden', () => {
    expect(configRulesName.length).toBe(8)
  })

  configRulesName.forEach((rule) => {
    it(`Rule "${rule}" exists`, () => {
      expect(originalRulesName).toContain(rule)
    })
  })
})

describe('Check TypeScript rules', () => {
  const originalRulesName = Object.keys(tsRulesOriginal).map((rule) => `@typescript-eslint/${rule}`)
  const configRulesName = Object.keys(configFile.rules).filter((key) => key.match(/^@typescript-eslint\//))

  it('There are 11 rules configured', () => {
    expect(configRulesName.length).toBe(11)
  })

  configRulesName.forEach((rule) => {
    it(`Rule "${rule}" exists`, () => {
      expect(originalRulesName).toContain(rule)
    })
  })
})

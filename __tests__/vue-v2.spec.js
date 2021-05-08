/* eslint-env jest */
/* eslint-disable no-magic-numbers */

const eslintRulesOriginal = require('eslint/lib/rules')
const tsRulesOriginal = require('eslint-plugin-vue').rules
const configFile = require('../vue/v2')

describe('Check overall configuration', () => {
  it('It is extending all plugin\'s configurations', () => {
    expect(configFile.extends).toContain('plugin:vue/essential')
  })

  it('It configures parser', () => {
    expect(configFile.parserOptions.sourceType).toBe('module')
    expect(configFile.parserOptions.ecmaVersion).toBe(2021)
  })

  it('It configures plugins: ["vue"]', () => {
    const expectedPlugins = ['vue']

    expect(configFile.plugins).toEqual(expect.arrayContaining(expectedPlugins))
  })
})

describe('Check ESlint rules', () => {
  const originalRulesName = Array.from(eslintRulesOriginal.keys())
  const configRulesName = Object.keys(configFile.rules).filter((key) => !key.match(/\//))

  it('There are 0 rules being overridden', () => {
    expect(configRulesName.length).toBe(0)
  })

  configRulesName.forEach((rule) => {
    it(`Rule "${rule}" exists`, () => {
      expect(originalRulesName).toContain(rule)
    })
  })
})

describe('Check Vue rules', () => {
  const originalRulesName = Object.keys(tsRulesOriginal).map((rule) => `vue/${rule}`)
  const configRulesName = Object.keys(configFile.rules).filter((key) => key.match(/^vue\//))

  it('There are 11 rules configured', () => {
    expect(configRulesName.length).toBe(11)
  })

  configRulesName.forEach((rule) => {
    it(`Rule "${rule}" exists`, () => {
      expect(originalRulesName).toContain(rule)
    })
  })
})

/* eslint-env jest */
/* eslint-disable no-magic-numbers */

const eslintRulesOriginal = require('eslint/lib/rules')
const reactNativeRulesOriginal = require('eslint-plugin-react-native').rules
const configFile = require('../react-native')

describe('Check overall configuration', () => {
  it('It is extending all plugin\'s configurations', () => {
    const expectedExtending = [
      '../react',
      'plugin:react-native/all',
    ]

    expect(configFile.extends).toEqual(expect.arrayContaining(expectedExtending))
  })

  it('It does not configure a parser', () => {
    expect(configFile).not.toHaveProperty('parser')
    expect(configFile).not.toHaveProperty('parserOptions')
  })

  it('It configures plugins: ["@typescript-eslint"]', () => {
    const expectedPlugins = ['react-native']

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

describe('Check React Native rules', () => {
  const originalRulesName = Object.keys(reactNativeRulesOriginal).map((rule) => `react-native/${rule}`)
  const configRulesName = Object.keys(configFile.rules).filter((key) => key.match(/^react-native\//))

  it('There are 7 rules configured', () => {
    expect(configRulesName.length).toBe(7)
  })

  configRulesName.forEach((rule) => {
    it(`Rule "${rule}" exists`, () => {
      expect(originalRulesName).toContain(rule)
    })
  })
})

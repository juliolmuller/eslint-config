/* eslint-env jest */
/* eslint-disable no-magic-numbers */

const eslintRulesOriginal = require('eslint/lib/rules')
const reactRulesOriginal = require('eslint-plugin-react').rules
const reactHooksRulesOriginal = require('eslint-plugin-react-hooks').rules
const configFile = require('../react')

describe('Check overall configuration', () => {
  it('It is extending all plugin\'s configurations', () => {
    const expectedExtending = [
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
    ]

    expect(configFile.extends).toEqual(expect.arrayContaining(expectedExtending))
  })

  it('It configures source type to "module"', () => {
    expect(configFile.parserOptions.sourceType).toBe('module')
  })

  it('It configures ECMA version as 2021', () => {
    expect(configFile.parserOptions.ecmaVersion).toBe(2021)
  })

  it('It enables JSX feature', () => {
    expect(configFile.parserOptions).toHaveProperty('ecmaFeatures')
    expect(configFile.parserOptions.ecmaFeatures).toHaveProperty('jsx')
    expect(configFile.parserOptions.ecmaFeatures.jsx).toBe(true)
  })

  it('It configures React version detection', () => {
    expect(configFile.settings).toHaveProperty('react')
    expect(configFile.settings.react).toHaveProperty('version')
    expect(configFile.settings.react.version).toBe('detect')
  })

  it('It does not configure a parser', () => {
    expect(configFile.parserOptions).not.toHaveProperty('parser')
    expect(configFile).not.toHaveProperty('parser')
  })

  it('It configures plugins: ["react", "react-hooks"', () => {
    const expectedPlugins = ['react', 'react-hooks']

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

describe('Check React rules', () => {
  const originalRulesName = Object.keys(reactRulesOriginal).map((rule) => `react/${rule}`)
  const configRulesName = Object.keys(configFile.rules).filter((key) => key.match(/^react\//))

  it('There are 13 rules configured', () => {
    expect(configRulesName.length).toBe(14)
  })

  configRulesName.forEach((rule) => {
    it(`Rule "${rule}" exists`, () => {
      expect(originalRulesName).toContain(rule)
    })
  })
})

describe('Check React Hooks rules', () => {
  const originalRulesName = Object.keys(reactHooksRulesOriginal).map((rule) => `react-hooks/${rule}`)
  const configRulesName = Object.keys(configFile.rules).filter((key) => key.match(/^react-hooks\//))

  it('There are 2 rules configured', () => {
    expect(configRulesName.length).toBe(2)
  })

  configRulesName.forEach((rule) => {
    it(`Rule "${rule}" exists`, () => {
      expect(originalRulesName).toContain(rule)
    })
  })
})

/* eslint-env jest */
/* eslint-disable no-magic-numbers */

const eslintRulesOriginal = require('eslint/lib/rules')
const importRulesOriginal = require('eslint-plugin-import').rules
const importHelpersRulesOriginal = require('eslint-plugin-import-helpers').rules
const configFile = require('../standard')

describe('Check overall configuration', () => {
  it('It is extending all ESlint configurations', () => {
    expect(configFile.extends).toContain('eslint:recommended')
  })

  it('It configures ECMA version as 2018', () => {
    expect(configFile.parserOptions.ecmaVersion).toBe(2018)
  })

  it('It does not configure a parser', () => {
    expect(configFile.parserOptions).not.toHaveProperty('parser')
    expect(configFile).not.toHaveProperty('parser')
  })

  it('It configures plugins: ["import", "import-helpers"]', () => {
    const expectedPlugins = ['import', 'import-helpers']

    expect(configFile.plugins).toEqual(expect.arrayContaining(expectedPlugins))
  })
})

describe('Check ESlint rules', () => {
  const originalRulesName = Array.from(eslintRulesOriginal.keys())
  const configRulesName = Object.keys(configFile.rules).filter((key) => !key.match(/\//))

  it('There are 260 rules configured', () => {
    expect(configRulesName.length).toBe(260)
  })

  configRulesName.forEach((rule) => {
    it(`Rule "${rule}" exists`, () => {
      expect(originalRulesName).toContain(rule)
    })
  })
})

describe('Check Import-Plugin rules', () => {
  const originalRulesName = Object.keys(importRulesOriginal).map((rule) => `import/${rule}`)
  const configRulesName = Object.keys(configFile.rules).filter((key) => key.match(/^import\//))

  it('There are 0 rules configured', () => {
    expect(configRulesName.length).toBe(0)
  })

  configRulesName.forEach((rule) => {
    it(`Rule "${rule}" exists`, () => {
      expect(originalRulesName).toContain(rule)
    })
  })
})

describe('Check Import-Helpers-Plugin rules', () => {
  const originalRulesName = Object.keys(importHelpersRulesOriginal).map((rule) => `import-helpers/${rule}`)
  const configRulesName = Object.keys(configFile.rules).filter((key) => key.match(/^import-helpers\//))

  it('There are 1 rule configured', () => {
    expect(configRulesName.length).toBe(1)
  })

  configRulesName.forEach((rule) => {
    it(`Rule "${rule}" exists`, () => {
      expect(originalRulesName).toContain(rule)
    })
  })
})

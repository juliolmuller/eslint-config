/* eslint-env jest */
/* eslint-disable no-magic-numbers */

const defaultVuePreset = require('../vue')
const vuePresetV3 = require('../vue/v3')

describe('Check default preset for Vue', () => {
  it('It default preset is equal v3\'s', () => {
    expect(defaultVuePreset).toStrictEqual(vuePresetV3)
  })
})

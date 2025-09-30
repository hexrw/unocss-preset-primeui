
import { describe, it, expect } from 'vitest'
import { presetPrimeUI } from '../src/index'
import { createGenerator, presetAttributify, presetUno, presetMini } from 'unocss'

describe('presetPrimeUI', () => {
  it('should generate PrimeVue variants (with presetUno and presetMini)', async () => {
    const uno = createGenerator({ presets: [presetUno(), presetMini(), presetAttributify(), presetPrimeUI()] })
    const { css } = await uno.generate('<div class="p-invalid:text-color"></div>')
  expect(css).toContain('[data-p~="invalid"].p-invalid:text-color{color:var(--p-text-color);}')
  })

  // TODO: Volt/PrimeVue integration test
  // To test with Volt/PrimeVue components, you would typically use volt-vue CLI to add a component, e.g.:
  //   bunx volt-vue add Button
  // and then import/use it in a Vue test file. This requires a Vue test runner (e.g. Vitest + @vue/test-utils).
  // For now, we only test UnoCSS output. See README for Volt/PrimeVue integration instructions.
})

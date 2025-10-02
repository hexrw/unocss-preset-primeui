import { beforeAll, describe, expect, it } from "vitest"
import { createGenerator, presetAttributify, presetMini, presetUno } from "unocss"
import { presetPrimeUI, primeVariantDefinitions } from "../src/index"

let uno: ReturnType<typeof createGenerator>

beforeAll(() => {
	uno = createGenerator({ presets: [presetUno(), presetMini(), presetAttributify(), presetPrimeUI()] })
})

describe("presetPrimeUI", () => {
	it("generates PrimeVue variants", async () => {
		const { css } = await uno.generate('<div class="p-invalid:text-color"></div>')
		expect(css).toContain('[data-p~="invalid"].p-invalid\\:text-color{color:var(--p-text-color);}')
	})

	it("supports multi-selector variants", async () => {
		const { css } = await uno.generate('<div class="p-disabled:bg-emphasis"></div>')
		expect(css).toContain(
			'[data-p~="disabled"].p-disabled\\:bg-emphasis,[data-p-disabled="true"].p-disabled\\:bg-emphasis{background:var(--p-content-hover-background);color:var(--p-content-hover-color);}'
		)
	})

	it("handles attribute variants with ~ equals checks", async () => {
		const { css } = await uno.generate('<div class="p-flipped:text-color"></div>')
		expect(css).toContain('[data-p-popover-flipped~="true"].p-flipped\\:text-color{color:var(--p-text-color);}')
	})

	it("includes placeholder selector support", async () => {
		const { css } = await uno.generate('<input class="p-placeholder:text-muted-color"/>')
		expect(css).toContain(
			'::placeholder.p-placeholder\\:text-muted-color,[data-p~="placeholder"].p-placeholder\\:text-muted-color{color:var(--p-text-muted-color);}'
		)
	})
})

describe("primeVariantDefinitions", () => {
	it("contains unique variant names", () => {
		const names = primeVariantDefinitions.map(([name]) => name)
		expect(new Set(names).size).toBe(names.length)
	})

	it("trims selectors", () => {
		for (const [, selectors] of primeVariantDefinitions) {
			expect(selectors.every(selector => selector === selector.trim())).toBe(true)
		}
	})
})

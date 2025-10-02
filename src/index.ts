import { definePreset, type PresetOptions, type Variant } from "unocss"

type VariantDefinition = readonly [name: string, selectors: readonly string[]]

const variantTuples = [
    ["p-invalid", ['[data-p~="invalid"]']],
    ["p-small", ['[data-p~="small"]']],
    ["p-large", ['[data-p~="large"]']],
    ["p-xlarge", ['[data-p~="xlarge"]']],
    ["p-fluid", ['[data-p~="fluid"]']],
    ["p-filled", ['[data-p~="filled"]']],
    ["p-horizontal", ['[data-p~="horizontal"]']],
    ["p-vertical", ['[data-p~="vertical"]']],
    ["p-stacked", ['[data-p~="stacked"]']],
    ["p-checked", ['[data-p~="checked"]']],
    ["p-disabled", ['[data-p~="disabled"]', '[data-p-disabled="true"]']],
    ["p-enabled", [':not([data-p~="disabled"])']],
    ["p-selected", ['[data-p~="selected"]', '[data-p-selected="true"]']],
    ["p-selectable", ['[data-p~="selectable"]', '[data-p-selectable="true"]', '[data-p-selectable-row="true"]']],
    ["p-left", ['[data-p~="left"]', '[data-p-left="true"]']],
    ["p-right", ['[data-p~="right"]', '[data-p-right="true"]']],
    ["p-top", ['[data-p~="top"]', '[data-p-top="true"]']],
    ["p-bottom", ['[data-p~="bottom"]', '[data-p-bottom="true"]']],
    ["p-alternate", ['[data-p~="alternate"]']],
    ["p-center", ['[data-p~="center"]']],
    ["p-top-center", ['[data-p~="top-center"]']],
    ["p-bottom-center", ['[data-p~="bottom-center"]']],
    ["p-active", ['[data-p~="active"]', '[data-p-active="true"]']],
    ["p-focus", ['[data-p~="focus"]', '[data-p-focused="true"]']],
    ["p-focus-visible", ['[data-p~="focus-visible"]']],
    ["p-readonly", ['[data-p~="readonly"]']],
    ["p-removable", ['[data-p~="removable"]']],
    ["p-circle", ['[data-p~="circle"]']],
    ["p-empty", ['[data-p~="empty"]']],
    ["p-determinate", ['[data-p~="determinate"]']],
    ["p-indeterminate", ['[data-p~="indeterminate"]']],
    ["p-icon-only", ['[data-p~="icon-only"]']],
    ["p-rounded", ['[data-p~="rounded"]']],
    ["p-raised", ['[data-p~="raised"]']],
    ["p-toggleable", ['[data-p~="toggleable"]']],
    ["p-solid", ['[data-p~="solid"]']],
    ["p-dashed", ['[data-p~="dashed"]']],
    ["p-dotted", ['[data-p~="dotted"]']],
    ["p-secondary", ['[data-p~="secondary"]']],
    ["p-contrast", ['[data-p~="contrast"]']],
    ["p-success", ['[data-p~="success"]']],
    ["p-info", ['[data-p~="info"]']],
    ["p-warn", ['[data-p~="warn"]']],
    ["p-danger", ['[data-p~="danger"]']],
    ["p-error", ['[data-p~="error"]']],
    ["p-custom", ['[data-p~="custom"]']],
    ["p-outlined", ['[data-p~="outlined"]']],
    ["p-text", ['[data-p~="text"]']],
    ["p-simple", ['[data-p~="simple"]']],
    ["p-maximized", ['[data-p~="maximized"]']],
    ["p-modal", ['[data-p~="modal"]']],
    ["p-flipped", ['[data-p-popover-flipped~="true"]']],
    ["p-nested", ['[data-p~="nested"]']],
    ["p-weak", ['[data-p~="weak"]']],
    ["p-medium", ['[data-p~="medium"]']],
    ["p-strong", ['[data-p~="strong"]']],
    ["p-portal-body", ['[data-p~="portal-body"]']],
    ["p-portal-self", ['[data-p~="portal-self"]']],
    ["p-has-s-icon", ['[data-p-has-s-icon~="true"]']],
    ["p-has-e-icon", ['[data-p-has-e-icon~="true"]']],
    ["p-full-screen", ['[data-p~="full-screen"]']],
    ["p-open", ['[data-p~="open"]']],
    ["p-popup", ['[data-p~="popup"]']],
    ["p-placeholder", ['::placeholder', '[data-p~="placeholder"]']],
    ["p-clearable", ['[data-p~="clearable"]']],
    ["p-editable", ['[data-p~="editable"]']],
    ["p-has-dropdown", ['[data-p-has-dropdown="true"]']],
    ["p-has-chip", ['[data-p~="has-chip"]']],
    ["p-inline", ['[data-p~="inline"]']],
    ["p-today", ['[data-p~="today"]']],
    ["p-other-month", ['[data-p~="other-month"]']],
    ["p-time-only", ['[data-p~="time-only"]']],
    ["p-completed", ['[data-p~="completed"]']],
    ["p-loading", ['[data-p~="loading"]']],
    ["p-leaf", ['[data-p~="leaf"]', '[data-p-leaf="true"]']],
    ["p-sortable", ['[data-p~="sortable"]', '[data-p-sortable-column="true"]', '[data-p-sortable="true"]']],
    ["p-sorted", ['[data-p~="sorted"]', '[data-p-sorted="true"]']],
    ["p-resizable", ['[data-p~="resizable"]', '[data-p-resizable-column="true"]', '[data-p-resizable="true"]']],
    ["p-hoverable", ['[data-p~="hoverable"]']],
    ["p-scrollable", ['[data-p~="scrollable"]', '[data-p-scrollable="true"]']],
    ["p-flex-scrollable", ['[data-p~="flex-scrollable"]', '[data-p-flex-scrollable="true"]']],
    ["p-frozen", ['[data-p~="frozen"]', '[data-p-frozen="true"]', '[data-p-frozen-column="true"]']],
] as const

export const primeVariantDefinitions: ReadonlyArray<VariantDefinition> = variantTuples


const primeVariants: Variant[] = primeVariantDefinitions.map(([name, selectors]) => {
    return (matcher) => {
        if (!matcher.startsWith(`${name}:`)) return undefined
        return {
            matcher: matcher.slice(name.length + 1),
            selector: (s) => selectors.map(selector => `${selector}${s}`).join(","),
        }
    }
})

export const presetPrimeUI = definePreset((_options?: PresetOptions) => {
    return {
        name: "preset-primeui",
        variants: [...primeVariants],
        rules: [
            [/^backface-(hidden|visible)$/, ([_, value]) => ({ "backface-visibility": value })],

            // [/^animate-(.+)$/, ([_, value]) => {
            //     if (value === "slidedown") return "slidedown 0.45s ease-in-out"
            //     if (value === "slideup") return "slideup 0.45s cubic-bezier(0, 1, 0, 1)"
            //     return { "animation": `${value} 0.15s linear` }
            // }],
            [
                "border-surface",
                {
                    "border-color": "var(--p-content-border-color)",
                },
            ],

            [
                "bg-emphasis",
                {
                    background: "var(--p-content-hover-background)",
                    color: "var(--p-content-hover-color)",
                },
            ],

            [
                "bg-highlight",
                {
                    background: "var(--p-highlight-background)",
                    color: "var(--p-highlight-color)",
                },
            ],

            [
                "bg-highlight-emphasis",
                {
                    background: "var(--p-highlight-focus-background)",
                    color: "var(--p-highlight-focus-color)",
                },
            ],

            [
                "rounded-border",
                {
                    "border-radius": "var(--p-content-border-radius)",
                },
            ],

            [
                "text-color",
                {
                    color: "var(--p-text-color)",
                },
            ],

            [
                "text-color-emphasis",
                {
                    color: "var(--p-text-hover-color)",
                },
            ],

            [
                "text-muted-color",
                {
                    color: "var(--p-text-muted-color)",
                },
            ],

            [
                "text-muted-color-emphasis",
                {
                    color: "var(--p-text-hover-muted-color)",
                },
            ],
        ],
    }
})

# unocss-preset-primeui

<!-- Badges -->
<p align="left">
  <!-- NPM version -->
  <a href="https://www.npmjs.com/package/unocss-preset-primeui">
    <img src="https://img.shields.io/npm/v/unocss-preset-primeui.svg?style=flat-square" alt="npm version" />
  </a>
  <!-- NPM downloads -->
  <a href="https://www.npmjs.com/package/unocss-preset-primeui">
    <img src="https://img.shields.io/npm/dm/unocss-preset-primeui.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://www.npmjs.com/package/unocss-preset-primeui">
    <img src="https://img.shields.io/npm/dt/unocss-preset-primeui.svg?style=flat-square" alt="npm total downloads" />
  </a>
  <!-- GitHub Actions CI -->
  <a href="https://github.com/hexrw/unocss-preset-primeui/actions/workflows/ci-release.yaml?query=branch%3Amain">
    <img src="https://github.com/hexrw/unocss-preset-primeui/actions/workflows/ci-release.yaml/badge.svg?branch=main" alt="CI Status" />
  </a>
</p>

A super-modern, single-file UnoCSS plugin for PrimeVue. Instantly adds PrimeVue-specific variants and rules to UnoCSS, enabling seamless integration with PrimeVue's data attributes and design tokens.

## Features
- **Single-file, zero-dependency plugin**
- **PrimeVue attribute variants** (e.g. `p-invalid:bg-red-500`)
- **PrimeVue design token rules** (e.g. `border-surface`, `bg-emphasis`)
- **Ultra-simple build & release powered by Bun**
- **Automatic versioning, changelog, and npm publish via GitHub Actions (release-please)**

## Installation

```sh
bun add unocss-preset-primeui
# or
npm install unocss-preset-primeui
```

## Usage

```ts
// uno.config.ts
import { presetPrimeUI } from 'unocss-preset-primeui'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [presetPrimeUI()],
})
```

## Development
- Built with [Bun](https://bun.sh/) for scripts and dependency management
- TypeScript for type safety
- Minimal, single-file source (`src/index.ts`)
- Modern CI/CD with GitHub Actions and release-please

## Releasing
- All releases, changelogs, and npm publishing are fully automated from `main` via GitHub Actions
- Versioning and changelog powered by [release-please](https://github.com/googleapis/release-please)

## License
MIT

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
- **Hands-free dependency care with Dependabot auto-merging safe updates**

> **Status:** Public beta (`0.x`) while the API solidifies. Expect rapid iteration and semver-breaking updates until the first stable release.

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
- All npm publishes use the `beta` dist-tag until the project graduates from the `0.x` beta series

### Publishing to npm

To enable automatic publishing to npm, you must add an `NPM_TOKEN` secret to your repository:

1. Create a new npm access token ([npm docs](https://docs.npmjs.com/creating-and-viewing-access-tokens))
2. Go to your GitHub repository → Settings → Secrets and variables → Actions
3. Add a new secret named `NPM_TOKEN` with your npm token value

Without this, the publish step will fail and your package will not appear on npm.

## Automated maintenance
- Dependabot opens weekly dependency PRs, auto-merging all passing patch and minor updates after the PR Checks workflow succeeds.
- Major (breaking) upgrades are still proposed automatically but require a manual review before merging; the workflow labels these PRs with `dependabot-major-review` for quick triage.
- Every merged dependency update flows through release-please, creating a beta patch release once changes land on `main`.

## License
MIT

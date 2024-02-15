# Base16 schemes for Tailwind CSS

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://standardjs.com/)

This library makes it easy to use [Base16 color schemes](https://github.com/tinted-theming/schemes) from tinted-theming with your Tailwind CSS project.

## Features

- All the latest base16 color schemes

## Installation

- npm: `npm install base16-tailwind`
- pnpm: `pnpm add base16-tailwind`
- yarn: `yarn add base16-tailwind`
- bun: `bun add base16-tailwind`

## Usage

### Use a single color scheme

```typescript
import type { Config } from 'tailwindcss'
import { monokai } from 'base16-tailwind'

const tailwindConfig: Config = {
  theme: {
    colors: monokai
  }
}

export default tailwindConfig
```

### Use light and dark color schemes

> TODO

### Switch between multiple color schemes

> TODO

## Contributing

Initial setup:

```fish
git submodule update --init   # Fetch the tinted-theming/schemes repository
pnpm install                  # Install dependencies
pnpm prepare                  # Generate the initial JSON file for schemes
```

Make sure you're using an editor with an [ESLint language server](https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md#eslint) enabled.

Tests use [Jest](https://jestjs.io/) and can be ran with `pnpm test`.

Compile the TypeScript code for usage in client-side browsers and server-side Node/Bun/etc. with `pnpm build`.

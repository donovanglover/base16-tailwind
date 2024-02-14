# Base16 schemes for Tailwind CSS

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

const tailwindConfig = {
  theme: {
    colors: monokai
  }
} satisfies Config

export default tailwindConfig
```

### Use light and dark color schemes

> TODO

### Switch between multiple color schemes

> TODO

## Contributing

> TODO

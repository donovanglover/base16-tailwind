# base16-tailwind

Easily use [base16 color schemes](https://github.com/tinted-theming/schemes) with Tailwind CSS.

## Features

- All base16 color schemes, including the new ones
- Light to dark shades in order from `text-100` to `text-800`
- [No links in imported code](https://github.com/gaearon/base16-js/issues/5)
- Only import what you use

## Installation

```fish
npm add donovanglover/base16-tailwind
```

## Usage

Color schemes are handled with CSS variables. Tailwind only imports the ones you use, minimizing the bundle size.

### Basic usage

### Extending with your own config

```typescript
import type { Config } from 'tailwindcss'
import base16Tailwind from 'base16-tailwind'

const tailwindConfig: Config = {
  /* Project-specific tailwind config here */
}

export default { ...base16Tailwind, ...tailwindConfig }
```

### Use a single color scheme

Example with TypeScript and Next.js App Router:

```typescript
import "base16-tailwind/dist/schemes.css"

export interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout ({ children }: RootLayoutProps) {
  return (
    <html lang="en-US" className="base16-monokai">
      {children}
    </html>
  )
}
```

### Use light and dark color schemes

```typescript
import "base16-tailwind/dist/schemes.css"

export interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout ({ children }: RootLayoutProps) {
  return (
    <html lang="en-US" className="base16-emil dark:base16-oceanicnext">
      {children}
    </html>
  )
}
```

### Switch between multiple color schemes with CSS variables

## Contributing

```fish
npm ci
```

Make sure you're using an editor with an [ESLint language server](https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md#eslint) enabled.

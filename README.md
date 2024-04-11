# base16-tailwind

Easily use [base16 color schemes](https://github.com/tinted-theming/schemes) with Tailwind CSS.

## Features

- All base16 color schemes, including the new ones
- Light to dark shades in order from `text-100` to `text-800`
- [No links in imported code](https://github.com/gaearon/base16-js/issues/5)

## Installation

See the [jsr.io page](https://jsr.io/@donovanglover/base16).

## Usage

### Use a single color scheme

tailwind.config.ts:

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

### Switch between multiple color schemes with CSS variables

tailwind.config.ts:

```typescript
import type { Config } from 'tailwindcss'
import { css } from 'base16-tailwind/css'

const tailwindConfig: Config = {
  theme: {
    colors: css
  }
}

export default tailwindConfig
```

main.css:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
@import 'base16-tailwind/monokai';
```

Available with `<div data-theme="monokai"></div>`

## Contributing

Initial setup:

```fish
bun install
```

Make sure you're using an editor with an [ESLint language server](https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md#eslint) enabled.

Compile the TypeScript code for usage in client-side browsers and server-side Node/Bun/etc. with `bun build`.

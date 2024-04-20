# base16-tailwind

Easily use base16 color schemes with Tailwind CSS.

## Features

- All the latest [base16 color schemes](https://tinted-theming.github.io/base16-gallery/) with `base16-${name}`, or bring your own
- Light to dark shades in order from `text-100` to `text-800`
- Human-friendly class names like `bg-orange` and `text-red`
- Interoperability with the base24 system and support for bright styles like `bg-green-bright`
- Tailwind only imports color schemes you use, minimizing the bundle size
- Support for `dark:` and other Tailwind variants with modern CSS variables
- Built-in support for [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography) with the `withTypography` option

## Installation

```fish
npx jsr add @donovanglover/base16-tailwind
```

## Usage

See [Base16Options](./src/Base16Options.ts) for the list of available options.

tailwind.config.ts:

```tsx
import { base16Tailwind } from 'base16-tailwind'
import type { Config } from 'tailwindcss/types/config'

const tailwindConfig: Partial<Config> = {
  plugins: [
    base16Tailwind
  ]
}

export default tailwindConfig
```

app/layout.tsx:

```tsx
import '@/app/globals.css'

export interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout ({ children }: RootLayoutProps): React.ReactElement {
  return (
    <html lang='en-US' className='base16-emil dark:base16-monokai'>
      <body className='text-100 bg-800'>
        {children}
      </body>
    </html>
  )
}
```

components/ChangeThemeButton.tsx:

```tsx
'use client'

const themes = [
  'base16-danqing',
  'base16-tarot',
  'base16-embers'
]

function changeTheme (): void {
  document.documentElement.className = themes[Math.floor(Math.random() * themes.length)]
}

export default function ChangeThemeButton (): React.ReactElement {
  return (
    <button onClick={changeTheme}>Change Theme</button>
  )
}
```

## Contributing

Run `npm ci` to do a clean install and use the `lint` and `test` scripts to check your work.

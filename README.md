# base16-tailwind

Easily use [base16 color schemes](https://tinted-theming.github.io/base16-gallery/) with Tailwind CSS.

## Features

- All the latest base16 color schemes with `base16-${name}`
- Light to dark shades in order from `text-100` to `text-800`
- Human-friendly class names like `bg-orange` and `text-red`
- Tailwind only imports color schemes you use, minimizing the bundle size
- [No links in imported code](https://github.com/gaearon/base16-js/issues/5)
- Automatically change the entire color scheme with `dark:` support from Tailwind
- Color schemes are handled with modern CSS variables
- Built-in support for TypeScript, Next.js, and [`@tailwindcss/typography`](https://github.com/tailwindlabs/tailwindcss-typography)

## Installation

```fish
npm add donovanglover/base16-tailwind
```

## Usage

tailwind.config.ts:

```tsx
import type { Config } from 'tailwindcss'
import { base16Config } from 'base16-tailwind'

const projectConfig: Config = {
  future: {
    hoverOnlyWhenSupported: true
  }
}

const tailwindConfig: Config = {
  ...base16Config,
  ...projectConfig
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

```fish
npm ci
npm run lint
npm run test
```

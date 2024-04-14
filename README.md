# base16-tailwind

Easily use [base16 color schemes](https://github.com/tinted-theming/schemes) with Tailwind CSS.

## Features

- All the latest base16 color schemes
- Light to dark shades in order from `text-100` to `text-800`
- Human-friendly variable names like `bg-orange` and `text-red`
- [No links in imported code](https://github.com/gaearon/base16-js/issues/5)
- Automatically change the entire color scheme with `dark:` support from Tailwind
- Color schemes are handled with modern CSS variables
- Tailwind only imports color schemes you use, minimizing the bundle size
- Built-in support for [`@tailwindcss/typography`](https://github.com/tailwindlabs/tailwindcss-typography)
- Native support for TypeScript and Next.js App Router projects

## Installation

```fish
npm add donovanglover/base16-tailwind
```

## Usage

tailwind.config.ts:

```tsx
import type { Config } from 'tailwindcss'
import base16Tailwind from 'base16-tailwind'

const tailwindConfig: Config = {
  ...base16Tailwind,

  future: {
    hoverOnlyWhenSupported: true
  }
}

export default tailwindConfig
```

app/layout.tsx:

```tsx
import "base16-tailwind/dist/schemes.css"

export interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout ({ children }: RootLayoutProps): React.ReactElement {
  return (
    <html lang="en-US" className="base16-emil dark:base16-monokai">
      <body className="text-100 bg-800">
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
  "base16-monokai",
  "base16-tarot",
  "base16-embers"
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

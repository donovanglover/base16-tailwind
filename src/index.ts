import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import typographyPlugin from '@tailwindcss/typography'
import { type PluginAPI } from 'tailwindcss/types/config'
import { getSchemesFromPath } from './lib/getSchemesFromPath'
import { hexToRgb } from './lib/hexToRgb'
import { type Palette } from './types'

interface typographyProps {
  theme: (tailwindClass: string) => string
}

const schemes: Record<string, Palette> = getSchemesFromPath('./schemes/base16')

export const base16Plugin = ({ addUtilities }: PluginAPI): void => {
  for (const [colorName, colorValues] of Object.entries(schemes)) {
    addUtilities({
      ['.base16-' + colorName]: {
        '--color-100': hexToRgb(colorValues.base07),
        '--color-200': hexToRgb(colorValues.base06),
        '--color-300': hexToRgb(colorValues.base05),
        '--color-400': hexToRgb(colorValues.base04),
        '--color-500': hexToRgb(colorValues.base03),
        '--color-600': hexToRgb(colorValues.base02),
        '--color-700': hexToRgb(colorValues.base01),
        '--color-800': hexToRgb(colorValues.base00),

        '--color-red': hexToRgb(colorValues.base08),
        '--color-orange': hexToRgb(colorValues.base09),
        '--color-yellow': hexToRgb(colorValues.base0A),
        '--color-green': hexToRgb(colorValues.base0B),
        '--color-cyan': hexToRgb(colorValues.base0C),
        '--color-blue': hexToRgb(colorValues.base0D),
        '--color-purple': hexToRgb(colorValues.base0E),
        '--color-pink': hexToRgb(colorValues.base0F)
      }
    })
  }
}

export const base16Tailwind: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],

  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      100: 'rgb(var(--color-100) / <alpha-value>)',
      200: 'rgb(var(--color-200) / <alpha-value>)',
      300: 'rgb(var(--color-300) / <alpha-value>)',
      400: 'rgb(var(--color-400) / <alpha-value>)',
      500: 'rgb(var(--color-500) / <alpha-value>)',
      600: 'rgb(var(--color-600) / <alpha-value>)',
      700: 'rgb(var(--color-700) / <alpha-value>)',
      800: 'rgb(var(--color-800) / <alpha-value>)',

      red: 'rgb(var(--color-red) / <alpha-value>)',
      orange: 'rgb(var(--color-orange) / <alpha-value>)',
      yellow: 'rgb(var(--color-yellow) / <alpha-value>)',
      green: 'rgb(var(--color-green) / <alpha-value>)',
      cyan: 'rgb(var(--color-cyan) / <alpha-value>)',
      blue: 'rgb(var(--color-blue) / <alpha-value>)',
      purple: 'rgb(var(--color-purple) / <alpha-value>)',
      pink: 'rgb(var(--color-pink) / <alpha-value>)'
    },

    extend: {
      typography: ({ theme }: typographyProps) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors[100]'),
            '--tw-prose-headings': theme('colors[100]'),
            '--tw-prose-lead': theme('colors[100]'),
            '--tw-prose-links': theme('colors.blue'),
            '--tw-prose-bold': theme('colors[100]'),
            '--tw-prose-counters': theme('colors[100]'),
            '--tw-prose-bullets': theme('colors[100]'),
            '--tw-prose-hr': theme('colors[100]'),
            '--tw-prose-quotes': theme('colors[100]'),
            '--tw-prose-quote-borders': theme('colors[100]'),
            '--tw-prose-captions': theme('colors[100]'),
            '--tw-prose-code': theme('colors[100]'),
            '--tw-prose-pre-code': theme('colors[100]'),
            '--tw-prose-pre-bg': theme('colors[100]'),
            '--tw-prose-th-borders': theme('colors[100]'),
            '--tw-prose-td-borders': theme('colors[100]')
          }
        }
      }),

      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
        mono: ['var(--font-mono)']
      }
    }
  },

  plugins: [
    typographyPlugin,
    plugin(base16Plugin)
  ]
}

export default base16Tailwind

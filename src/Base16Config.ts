import typographyPlugin from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
import type { ContentConfig, CustomThemeConfig, PluginAPI, PluginsConfig } from 'tailwindcss/types/config'
import { base16Plugin } from './base16Plugin.ts'

export interface Base16ConfigOptions {
  withTypography: boolean
  withFontOverride: boolean
}

export class Base16Config implements Config {
  content: ContentConfig = [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ]

  theme: Partial<CustomThemeConfig> = {
    colors: {
      transparent: 'transparent',
      current: 'currentColor'
    }
  }

  plugins: PluginsConfig = []

  constructor (options: Base16ConfigOptions) {
    this.plugins.push(base16Plugin)

    this.theme.colors = {
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
    }

    if (options.withFontOverride) {
      this.theme.extend.fontFamily = {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
        mono: ['var(--font-mono)']
      }
    }

    if (options.withTypography) {
      this.plugins.push(typographyPlugin)

      this.theme.extend.typography = ({ theme }: PluginAPI) => ({
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
      })
    }
  }
}
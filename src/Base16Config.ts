import typographyPlugin from '@tailwindcss/typography'
import type { Config, CustomThemeConfig, PluginAPI, PluginsConfig } from 'tailwindcss/types/config'
import { type Base16Options } from './Base16Options.ts'

export class Base16Config implements Partial<Config> {
  theme: Partial<CustomThemeConfig> = {
    colors: {
      transparent: 'transparent',
      current: 'currentColor'
    }
  }

  plugins: PluginsConfig = []

  constructor (options?: Base16Options) {
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

    if (options?.withTypography === true) {
      this.plugins.push(typographyPlugin)

      this.theme.extend = {
        typography: ({ theme }: PluginAPI) => ({
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
}

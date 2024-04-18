import typographyPlugin from '@tailwindcss/typography'
import type { Config, CustomThemeConfig, PluginAPI, PluginsConfig } from 'tailwindcss/types/config'
import { Base16Css } from './Base16Css.ts'
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
    const css = new Base16Css('base16')

    css.variables.forEach(key => {
      (this.theme.colors as Record<string, string>)[key] = `rgb(var(--color-${key}) / <alpha-value>)`
    })

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

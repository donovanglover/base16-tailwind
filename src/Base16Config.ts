import typographyPlugin from '@tailwindcss/typography'
import type { Config, CustomThemeConfig, PluginAPI, PluginsConfig } from 'tailwindcss/types/config'
import type { Base16ColorSpace } from './Base16ColorSpace.ts'
import { Base16Css } from './Base16Css.ts'
import type { Base16Options } from './Base16Options.ts'

export class Base16Config implements Partial<Config> {
  theme: Partial<CustomThemeConfig> = {}
  plugins: PluginsConfig = []
  colorSpace: Base16ColorSpace

  constructor (options?: Base16Options) {
    const css = new Base16Css(options?.system ?? 'base16')

    this.colorSpace = options?.colorSpace ?? 'rgb'

    options?.extendOnly === true ? this.extendColors(css) : this.overrideColors(css)

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

  extendColors (css: Base16Css): void {
    this.theme.extend = {}
    this.theme.extend.colors = {}

    css.variables.forEach(key => {
      ((this.theme.extend as CustomThemeConfig).colors as Record<string, string>)[key] =
        this.colorSpaceWithKey(key)
    })
  }

  overrideColors (css: Base16Css): void {
    this.theme.colors = {
      transparent: 'transparent',
      current: 'currentColor'
    }

    css.variables.forEach(key => {
      (this.theme.colors as Record<string, string>)[key] = this.colorSpaceWithKey(key)
    })
  }

  colorSpaceWithKey (key: string): string {
    return `${this.colorSpace}(var(--color-${key}) / <alpha-value>)`
  }
}

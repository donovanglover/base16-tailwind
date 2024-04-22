import type { Config, CustomThemeConfig } from 'tailwindcss/types/config'
import type { Base16ColorSpace } from './Base16ColorSpace.ts'
import { Base16Css } from './Base16Css.ts'
import type { Base16Options } from './Base16Options.ts'

export class Base16Config implements Partial<Config> {
  theme: Partial<CustomThemeConfig> = {}
  colorSpace: Base16ColorSpace

  constructor (options?: Base16Options) {
    const css = new Base16Css(options?.system ?? 'base16', options)

    this.colorSpace = options?.colorSpace ?? 'rgb'

    options?.extendOnly === true ? this.extendColors(css) : this.overrideColors(css)

    if (options?.withTypography === true) {
      this.theme.extend = {
        typography: {
          DEFAULT: {
            css: {
              '--tw-prose-body': this.colorSpaceWithKey('100', false),
              '--tw-prose-headings': this.colorSpaceWithKey('100', false),
              '--tw-prose-lead': this.colorSpaceWithKey('100', false),
              '--tw-prose-links': this.colorSpaceWithKey('blue', false),
              '--tw-prose-bold': this.colorSpaceWithKey('100', false),
              '--tw-prose-counters': this.colorSpaceWithKey('100', false),
              '--tw-prose-bullets': this.colorSpaceWithKey('100', false),
              '--tw-prose-hr': this.colorSpaceWithKey('100', false),
              '--tw-prose-quotes': this.colorSpaceWithKey('100', false),
              '--tw-prose-quote-borders': this.colorSpaceWithKey('100', false),
              '--tw-prose-captions': this.colorSpaceWithKey('100', false),
              '--tw-prose-code': this.colorSpaceWithKey('100', false),
              '--tw-prose-pre-code': this.colorSpaceWithKey('100', false),
              '--tw-prose-pre-bg': this.colorSpaceWithKey('100', false),
              '--tw-prose-th-borders': this.colorSpaceWithKey('100', false),
              '--tw-prose-td-borders': this.colorSpaceWithKey('100', false)
            }
          }
        }
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
      current: 'currentColor',
      inherit: 'inherit'
    }

    css.variables.forEach(key => {
      (this.theme.colors as Record<string, string>)[key] = this.colorSpaceWithKey(key)
    })
  }

  colorSpaceWithKey (key: string, alpha: boolean = true): string {
    return `${this.colorSpace}(var(--color-${key})${alpha ? ' / <alpha-value>' : ''})`
  }
}

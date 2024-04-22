import type { Config, CustomThemeConfig } from 'tailwindcss/types/config'
import type { Base16ColorSpace } from './Base16ColorSpace.ts'
import { Base16Css } from './Base16Css.ts'
import type { Base16Options } from './Base16Options.ts'

export class Base16Config implements Partial<Config> {
  theme: Partial<CustomThemeConfig> = {}
  colorSpace: Base16ColorSpace
  readonly #typography: Record<string, string> = {}
  readonly #text = [
    '--tw-prose-body',
    '--tw-prose-headings',
    '--tw-prose-lead',
    '--tw-prose-bold',
    '--tw-prose-counters',
    '--tw-prose-bullets',
    '--tw-prose-hr',
    '--tw-prose-quotes',
    '--tw-prose-quote-borders',
    '--tw-prose-captions',
    '--tw-prose-code',
    '--tw-prose-pre-code',
    '--tw-prose-pre-bg',
    '--tw-prose-th-borders',
    '--tw-prose-td-borders'
  ]

  constructor (options?: Base16Options) {
    const css = new Base16Css(options?.system ?? 'base16', options)

    this.colorSpace = options?.colorSpace ?? 'rgb'

    options?.extendOnly === true ? this.extendColors(css) : this.overrideColors(css)

    if (options?.withTypography === true) {
      this.generateVariables(options?.invert ?? false)

      this.theme.extend = {
        typography: {
          DEFAULT: {
            css: this.#typography
          }
        }
      }
    }
  }

  generateVariables (invert: boolean): void {
    this.#text.forEach(cssVariable => {
      this.#typography[cssVariable] = this.colorSpaceWithKey(invert ? '800' : '100', false)
    })

    this.#typography['--tw-prose-links'] = this.colorSpaceWithKey('blue', false)
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

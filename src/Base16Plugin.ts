import type { PluginCreator } from 'tailwindcss/types/config'
import { Base16Css } from './Base16Css.ts'
import type { Base16Options } from './Base16Options.ts'
import { Base16Path } from './Base16Path.ts'
import type { Base16Scheme } from './Base16Scheme.ts'

export class Base16Plugin {
  readonly creator: PluginCreator
  private readonly _base16Path: Base16Path

  constructor (options?: Base16Options) {
    this._base16Path = new Base16Path(options?.customPath, options)

    this.creator = ({ addUtilities }) => {
      for (const scheme of this._base16Path.schemes) {
        const css = new Base16Css(scheme.system, options)

        addUtilities({
          ['.' + scheme.slug]: css.fromPalette(scheme.palette, options?.colorSpace)
        })
      }
    }
  }

  get schemes (): Base16Scheme[] {
    return this._base16Path.schemes
  }
}

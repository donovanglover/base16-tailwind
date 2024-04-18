import { type PluginCreator } from 'tailwindcss/types/config'
import { Base16Css } from './Base16Css.ts'
import { type Base16Options } from './Base16Options.ts'
import { Base16Path } from './Base16Path.ts'

export class Base16Plugin {
  readonly creator: PluginCreator
  readonly #base16Path: Base16Path

  constructor (options?: Base16Options) {
    this.#base16Path = new Base16Path(options?.customPath)

    this.creator = ({ addUtilities }) => {
      for (const scheme of this.#base16Path.schemes) {
        const css = new Base16Css(scheme.system)

        addUtilities({
          ['.' + scheme.slug]: css.fromPalette(scheme.palette)
        })
      }
    }
  }
}

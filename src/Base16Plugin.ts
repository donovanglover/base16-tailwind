import { type PluginCreator } from 'tailwindcss/types/config'
import { type Base16Options } from './Base16Options.ts'
import { Base16Path } from './Base16Path.ts'

export class Base16Plugin {
  readonly creator: PluginCreator
  readonly #base16Path: Base16Path
  static readonly #colors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple', 'pink']

  constructor (options?: Base16Options) {
    this.#base16Path = new Base16Path(options?.customPath)

    this.creator = ({ addUtilities }) => {
      for (const scheme of this.#base16Path.schemes) {
        const cssVariables: Record<string, string> = {}

        for (let i = 0; i < 16; i++) {
          const key = i < 8 ? `${8 - i}00` : Base16Plugin.#colors[i - 8]

          cssVariables[`--color-${key}`] = scheme.palette.colors[i].rgb
        }

        addUtilities({
          ['.' + scheme.slug]: cssVariables
        })
      }
    }
  }
}

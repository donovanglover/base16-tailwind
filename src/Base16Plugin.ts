import { type PluginCreator } from 'tailwindcss/types/config'
import { type Base16Options } from './Base16Options.ts'
import { Base16Path } from './Base16Path.ts'

export class Base16Plugin {
  readonly creator: PluginCreator
  readonly #base16Path: Base16Path

  constructor (options?: Base16Options) {
    this.#base16Path = new Base16Path(options?.customPath)

    this.creator = ({ addUtilities }) => {
      for (const scheme of this.#base16Path.schemes) {
        addUtilities({
          ['.' + scheme.name]: {
            '--color-100': scheme.base16Colors.base07.rgb,
            '--color-200': scheme.base16Colors.base06.rgb,
            '--color-300': scheme.base16Colors.base05.rgb,
            '--color-400': scheme.base16Colors.base04.rgb,
            '--color-500': scheme.base16Colors.base03.rgb,
            '--color-600': scheme.base16Colors.base02.rgb,
            '--color-700': scheme.base16Colors.base01.rgb,
            '--color-800': scheme.base16Colors.base00.rgb,

            '--color-red': scheme.base16Colors.base08.rgb,
            '--color-orange': scheme.base16Colors.base09.rgb,
            '--color-yellow': scheme.base16Colors.base0A.rgb,
            '--color-green': scheme.base16Colors.base0B.rgb,
            '--color-cyan': scheme.base16Colors.base0C.rgb,
            '--color-blue': scheme.base16Colors.base0D.rgb,
            '--color-purple': scheme.base16Colors.base0E.rgb,
            '--color-pink': scheme.base16Colors.base0F.rgb
          }
        })
      }
    }
  }
}

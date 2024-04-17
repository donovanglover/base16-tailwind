import path from 'node:path'
import { type PluginCreator } from 'tailwindcss/types/config'
import { type Base16ConfigOptions } from './Base16Config.ts'
import { getSchemesFromPath } from './getSchemesFromPath.ts'

const schemes = getSchemesFromPath(path.join(__dirname, '../schemes/base16'))

export class Base16Plugin {
  creator: PluginCreator

  constructor (options?: Base16ConfigOptions) {
    this.creator = ({ addUtilities }) => {
      for (const scheme of schemes) {
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

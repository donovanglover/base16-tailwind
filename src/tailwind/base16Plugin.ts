import path from 'node:path'
import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import type { PluginAPI, PluginCreator } from 'tailwindcss/types/config'
import { getSchemesFromPath } from '../lib/getSchemesFromPath.ts'

interface Base16Plugin {
  handler: PluginCreator
  config?: Partial<Config> | undefined
}

const schemes = getSchemesFromPath(path.join(__dirname, '../../schemes/base16'))

export const base16Plugin: Base16Plugin = plugin(({ addUtilities }: PluginAPI): void => {
  for (const scheme of schemes) {
    addUtilities({
      ['.' + scheme.name]: {
        '--color-100': scheme.base16Colors.base07,
        '--color-200': scheme.base16Colors.base06,
        '--color-300': scheme.base16Colors.base05,
        '--color-400': scheme.base16Colors.base04,
        '--color-500': scheme.base16Colors.base03,
        '--color-600': scheme.base16Colors.base02,
        '--color-700': scheme.base16Colors.base01,
        '--color-800': scheme.base16Colors.base00,

        '--color-red': scheme.base16Colors.base08,
        '--color-orange': scheme.base16Colors.base09,
        '--color-yellow': scheme.base16Colors.base0A,
        '--color-green': scheme.base16Colors.base0B,
        '--color-cyan': scheme.base16Colors.base0C,
        '--color-blue': scheme.base16Colors.base0D,
        '--color-purple': scheme.base16Colors.base0E,
        '--color-pink': scheme.base16Colors.base0F
      }
    })
  }
})

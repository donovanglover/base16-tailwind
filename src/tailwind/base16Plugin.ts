import path from 'node:path'
import plugin from 'tailwindcss/plugin'
import type { PluginAPI } from 'tailwindcss/types/config'
import { getSchemesFromPath } from '../lib/getSchemesFromPath'
import { hexToRgb } from '../lib/hexToRgb'
import type { Base16Plugin } from '../types/Base16Plugin'
import type { Base16Scheme } from '../types/Base16Scheme.d.ts'

const schemes: Base16Scheme[] = getSchemesFromPath(path.join(__dirname, '../../schemes/base16'))

export const base16Plugin: Base16Plugin = plugin(({ addUtilities }: PluginAPI): void => {
  for (const scheme of schemes) {
    addUtilities({
      ['.' + scheme.name]: {
        '--color-100': hexToRgb(scheme.base16Colors.base07),
        '--color-200': hexToRgb(scheme.base16Colors.base06),
        '--color-300': hexToRgb(scheme.base16Colors.base05),
        '--color-400': hexToRgb(scheme.base16Colors.base04),
        '--color-500': hexToRgb(scheme.base16Colors.base03),
        '--color-600': hexToRgb(scheme.base16Colors.base02),
        '--color-700': hexToRgb(scheme.base16Colors.base01),
        '--color-800': hexToRgb(scheme.base16Colors.base00),

        '--color-red': hexToRgb(scheme.base16Colors.base08),
        '--color-orange': hexToRgb(scheme.base16Colors.base09),
        '--color-yellow': hexToRgb(scheme.base16Colors.base0A),
        '--color-green': hexToRgb(scheme.base16Colors.base0B),
        '--color-cyan': hexToRgb(scheme.base16Colors.base0C),
        '--color-blue': hexToRgb(scheme.base16Colors.base0D),
        '--color-purple': hexToRgb(scheme.base16Colors.base0E),
        '--color-pink': hexToRgb(scheme.base16Colors.base0F)
      }
    })
  }
})

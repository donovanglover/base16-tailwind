import { type PluginAPI } from 'tailwindcss/types/config'
import plugin from 'tailwindcss/plugin'
import { hexToRgb } from '../lib/hexToRgb'
import { getSchemesFromPath } from '../lib/getSchemesFromPath'
import { type Base16ColorScheme } from '../types/Base16ColorScheme'

const schemes: Record<string, Base16ColorScheme> = getSchemesFromPath('../../schemes/base16')

export const base16Plugin = plugin(({ addUtilities }: PluginAPI): void => {
  for (const [colorName, colorValues] of Object.entries(schemes)) {
    addUtilities({
      ['.base16-' + colorName]: {
        '--color-100': hexToRgb(colorValues.base07),
        '--color-200': hexToRgb(colorValues.base06),
        '--color-300': hexToRgb(colorValues.base05),
        '--color-400': hexToRgb(colorValues.base04),
        '--color-500': hexToRgb(colorValues.base03),
        '--color-600': hexToRgb(colorValues.base02),
        '--color-700': hexToRgb(colorValues.base01),
        '--color-800': hexToRgb(colorValues.base00),

        '--color-red': hexToRgb(colorValues.base08),
        '--color-orange': hexToRgb(colorValues.base09),
        '--color-yellow': hexToRgb(colorValues.base0A),
        '--color-green': hexToRgb(colorValues.base0B),
        '--color-cyan': hexToRgb(colorValues.base0C),
        '--color-blue': hexToRgb(colorValues.base0D),
        '--color-purple': hexToRgb(colorValues.base0E),
        '--color-pink': hexToRgb(colorValues.base0F)
      }
    })
  }
})

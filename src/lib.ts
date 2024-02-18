import schemes from '@/dist/schemes.json'
import { isLight } from 'color-2-name'

export interface Colors {
  transparent: 'transparent'
  current: 'currentColor'
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  red: string
  orange: string
  yellow: string
  green: string
  cyan: string
  blue: string
  purple: string
  pink: string
}

const colorsArray: Record<string, Colors> = {}

for (const [colorName, colorValues] of Object.entries(schemes)) {
  const colorShades = isLight(colorValues.base00)
    ? {
        800: colorValues.base07,
        700: colorValues.base06,
        600: colorValues.base05,
        500: colorValues.base04,
        400: colorValues.base03,
        300: colorValues.base02,
        200: colorValues.base01,
        100: colorValues.base00
      }
    : {
        800: colorValues.base00,
        700: colorValues.base01,
        600: colorValues.base02,
        500: colorValues.base03,
        400: colorValues.base04,
        300: colorValues.base05,
        200: colorValues.base06,
        100: colorValues.base07
      }

  colorsArray[colorName] = {
    transparent: 'transparent',
    current: 'currentColor',
    ...colorShades,
    red: colorValues.base08,
    orange: colorValues.base09,
    yellow: colorValues.base0A,
    green: colorValues.base0B,
    cyan: colorValues.base0C,
    blue: colorValues.base0D,
    purple: colorValues.base0E,
    pink: colorValues.base0F
  }
}

export const colors = colorsArray

import { Base16Color } from './Base16Color'

export interface Base16Palette {
  base00: Base16Color
  base01: Base16Color
  base02: Base16Color
  base03: Base16Color
  base04: Base16Color
  base05: Base16Color
  base06: Base16Color
  base07: Base16Color
  base08: Base16Color
  base09: Base16Color
  base0A: Base16Color
  base0B: Base16Color
  base0C: Base16Color
  base0D: Base16Color
  base0E: Base16Color
  base0F: Base16Color
}

export const BASE16_PALETTE_KEYS = JSON.stringify(Array.from({ length: 16 }, (_, i) => `base0${i.toString(16).toUpperCase()}`))

export function isBase16Palette (maybeBase16Palette: unknown): maybeBase16Palette is Base16Palette {
  const palette = maybeBase16Palette

  if (palette === null || typeof palette !== 'object') {
    return false
  }

  for (const value of Object.values(palette)) {
    if (typeof value !== 'string' || !Base16Color.isValid(value)) {
      return false
    }
  }

  return JSON.stringify(Object.keys(palette)) === BASE16_PALETTE_KEYS
}

import { isHexColor } from './isHexColor'

export interface Base16Palette {
  base00: string
  base01: string
  base02: string
  base03: string
  base04: string
  base05: string
  base06: string
  base07: string
  base08: string
  base09: string
  base0A: string
  base0B: string
  base0C: string
  base0D: string
  base0E: string
  base0F: string
}

const BASE16_PALETTE_KEYS = JSON.stringify(
  Array.from(
    { length: 16 },
    (_, i) => `base0${i.toString(16).toUpperCase()}`
  )
)

export function isBase16Palette (maybeBase16Palette: unknown): maybeBase16Palette is Base16Palette {
  const palette = maybeBase16Palette

  if (palette === null || typeof palette !== 'object') {
    return false
  }

  for (const value of Object.values(palette)) {
    if (typeof value !== 'string' || !isHexColor(value)) {
      return false
    }
  }

  return JSON.stringify(Object.keys(palette)) === BASE16_PALETTE_KEYS
}

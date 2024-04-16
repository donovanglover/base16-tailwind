import { Base16Color } from './Base16Color.ts'

export class Base16Palette {
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
  static readonly #BASE16_PALETTE_KEYS = JSON.stringify(Array.from({ length: 16 }, (_, i) => `base0${i.toString(16).toUpperCase()}`))

  constructor (maybeBase16Palette: unknown) {
    if (!Base16Palette.isValid(maybeBase16Palette)) {
      throw new Error('Invalid palette specified')
    }

    this.base00 = maybeBase16Palette.base00
    this.base01 = maybeBase16Palette.base01
    this.base02 = maybeBase16Palette.base02
    this.base03 = maybeBase16Palette.base03
    this.base04 = maybeBase16Palette.base04
    this.base05 = maybeBase16Palette.base05
    this.base06 = maybeBase16Palette.base06
    this.base07 = maybeBase16Palette.base07
    this.base08 = maybeBase16Palette.base08
    this.base09 = maybeBase16Palette.base09
    this.base0A = maybeBase16Palette.base0A
    this.base0B = maybeBase16Palette.base0B
    this.base0C = maybeBase16Palette.base0C
    this.base0D = maybeBase16Palette.base0D
    this.base0E = maybeBase16Palette.base0E
    this.base0F = maybeBase16Palette.base0F
  }

  static isValid (maybeBase16Palette: unknown): maybeBase16Palette is Base16Palette {
    const palette = maybeBase16Palette

    if (palette === null || typeof palette !== 'object') {
      return false
    }

    for (const value of Object.values(palette)) {
      if (typeof value !== 'string' || !Base16Color.isValid(value)) {
        return false
      }
    }

    return JSON.stringify(Object.keys(palette)) === this.#BASE16_PALETTE_KEYS
  }
}

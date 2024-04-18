import { Base16Color } from './Base16Color.ts'

export class Base16Palette {
  colors: Base16Color[] = []

  constructor (maybeBase16Palette: unknown) {
    const palette = maybeBase16Palette

    if (palette === null || typeof palette !== 'object') {
      throw new Error('Palette must be an object.')
    }

    for (const value of Object.values(palette)) {
      this.colors.push(new Base16Color(value))
    }

    if (this.colors.length < 16) {
      throw new Error('Less than 16 colors were given.')
    }
  }
}

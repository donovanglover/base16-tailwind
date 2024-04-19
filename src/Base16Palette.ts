import { Base16Color } from './Base16Color.ts'
import type { Base16Options } from './Base16Options.ts'
import { type Base16System } from './Base16System.ts'

export class Base16Palette {
  colors: Base16Color[] = []
  readonly #system: Base16System

  constructor (maybeBase16Palette: unknown, options?: Base16Options) {
    const palette = maybeBase16Palette

    if (palette === null || typeof palette !== 'object') {
      throw new Error('Palette must be an object.')
    }

    this.#system = options?.system ?? 'base16'

    for (const value of Object.values(palette)) {
      this.colors.push(new Base16Color(value))
    }

    if (this.colors.length !== 16 && this.colors.length !== 24) {
      throw new Error(`Palette ${JSON.stringify(this.colors)} does not have exactly 16 or 24 colors.`)
    }

    if (this.#system === 'base16' && this.colors.length === 24) {
      this.colors.length = 16
    }

    if (this.#system === 'base24' && this.colors.length === 16) {
      this.colors.push(this.colors[0], this.colors[0], this.colors[8])

      for (let i = 10; i < 15; i++) {
        this.colors.push(this.colors[i])
      }
    }
  }
}

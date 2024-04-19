import type { Base16ColorSpace } from './Base16ColorSpace.ts'
import type { Base16Palette } from './Base16Palette.ts'

export class Base16Css {
  static readonly #colors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple', 'pink']
  readonly variables: string[] = []

  constructor (maybeSystem: unknown) {
    if (typeof maybeSystem !== 'string') {
      throw new Error('Base16 css must be derived from system.')
    }

    if (maybeSystem !== 'base16') {
      throw new Error('Only base16 is supported for now.')
    }

    for (let i = 0; i < 16; i++) {
      this.variables.push(i < 8 ? `${8 - i}00` : Base16Css.#colors[i - 8])
    }
  }

  fromPalette (palette: Base16Palette, colorSpace?: Base16ColorSpace): Record<string, string> {
    const cssVariables: Record<string, string> = {}

    this.variables.forEach((key, i) => {
      cssVariables[`--color-${key}`] = palette.colors[i][colorSpace ?? 'rgb']
    })

    return cssVariables
  }
}

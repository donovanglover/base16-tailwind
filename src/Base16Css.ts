import type { Base16ColorSpace } from './Base16ColorSpace.ts'
import type { Base16Options } from './Base16Options.ts'
import type { Base16Palette } from './Base16Palette.ts'

export class Base16Css {
  static readonly #colors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple', 'pink']
  readonly variables: string[] = []

  constructor (maybeSystem: unknown, options?: Base16Options) {
    if (typeof maybeSystem !== 'string') {
      throw new Error('Base16 css must be derived from system.')
    }

    if (maybeSystem !== 'base16' && maybeSystem !== 'base24') {
      throw new Error('Given system is not base16 or base24.')
    }

    for (let i = 0; i < 16; i++) {
      this.variables.push(i < 8 ? `${8 - i}00` : Base16Css.#colors[i - 8])
    }

    if (options?.system === 'base24') {
      this.variables.push('800-darker')
      this.variables.push('800-darkest')
      this.variables.push(`${Base16Css.#colors[0]}-bright`)

      for (let i = 19; i < 24; i++) {
        this.variables.push(`${Base16Css.#colors[i - 17]}-bright`)
      }
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

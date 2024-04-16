import { colord } from 'colord'

export class Base16Color {
  readonly #color: string

  constructor (maybeBase16Color: string) {
    if (!Base16Color.isValid(maybeBase16Color)) {
      throw new Error(`Invalid Base16 color "${maybeBase16Color}" was given. Make sure that your color is in the format "FA113D" where there are 6 hexadecimal numbers without "#" at the beginning.`)
    }

    this.#color = maybeBase16Color

    return this
  }

  static isValid (maybeBase16Color: string): boolean {
    return /^[0-9A-F]{6}$/i.test(maybeBase16Color)
  }

  get rgb (): string {
    return colord(`#${this.#color}`).toRgbString().split('(')[1].split(')')[0].replaceAll(',', '')
  }
}

import { colord } from 'colord'

export class Base16Color {
  readonly #color: string

  static readonly #HELP =
    'Make sure that your color is in the format "FA113D" ' +
    'where there are 6 hexadecimal numbers without "#" at the beginning.'

  constructor (maybeBase16Color: unknown) {
    if (typeof maybeBase16Color !== 'string') {
      throw new Error(`A non-string value was given as a Base16 color. ${Base16Color.#HELP}`)
    }

    if (!/^(?:#)?[0-9A-F]{6}$/i.test(maybeBase16Color)) {
      throw new Error(`Invalid Base16 color "${maybeBase16Color}" was given. ${Base16Color.#HELP}`)
    }

    this.#color = maybeBase16Color.replace('#', '')
  }

  get rgb (): string {
    return colord(`#${this.#color}`).toRgbString().split('(')[1].split(')')[0].replaceAll(',', '')
  }

  get hsl (): string {
    return colord(`#${this.#color}`).toHslString().split('(')[1].split(')')[0].replaceAll(',', '')
  }

  get rgba (): string {
    return colord(`#${this.#color}`).toRgbString().split('(')[1].split(')')[0]
  }

  get hsla (): string {
    return colord(`#${this.#color}`).toHslString().split('(')[1].split(')')[0]
  }
}

import { colord } from 'colord'

export class Base16Color {
  private readonly _color: string

  constructor (maybeBase16Color: unknown) {
    if (typeof maybeBase16Color !== 'string') {
      throw new Error('A non-string value was given as a Base16 color.')
    }

    if (!/^(?:#)?[0-9A-F]{3,6}$/i.test(maybeBase16Color)) {
      throw new Error(`Invalid Base16 color "${maybeBase16Color}" was given.`)
    }

    this._color = maybeBase16Color.replace('#', '')
  }

  get rgb (): string {
    return colord(`#${this._color}`).toRgbString().split('(')[1].split(')')[0].replaceAll(',', '')
  }

  get hsl (): string {
    return colord(`#${this._color}`).toHslString().split('(')[1].split(')')[0].replaceAll(',', '')
  }

  get rgba (): string {
    return colord(`#${this._color}`).toRgbString().split('(')[1].split(')')[0]
  }

  get hsla (): string {
    return colord(`#${this._color}`).toHslString().split('(')[1].split(')')[0]
  }
}

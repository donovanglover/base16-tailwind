import { colord } from 'colord'

export class Base16Color {
  readonly #color?: string
  readonly #valid: boolean = false

  constructor (maybeBase16Color: unknown) {
    if (typeof maybeBase16Color === 'string' && /^[0-9A-F]{6}$/i.test(maybeBase16Color)) {
      this.#valid = true
      this.#color = maybeBase16Color
    }

    return this
  }

  get valid (): boolean {
    return this.#valid
  }

  get rgb (): string {
    return colord(`#${this.#color}`).toRgbString().split('(')[1].split(')')[0].replaceAll(',', '')
  }
}

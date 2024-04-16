import slug from 'slug'
import { Base16Color } from './Base16Color.ts'
import { Base16Palette } from './Base16Palette.ts'
import { Base16Yaml } from './Base16Yaml.ts'

export class Base16Scheme {
  readonly name: `base16-${string}`
  readonly base16Colors: Base16Palette

  constructor (maybeBase16Yaml: unknown) {
    if (!Base16Scheme.isValid(maybeBase16Yaml)) {
      throw new Error('Invalid yaml specified')
    }

    if (maybeBase16Yaml.slug !== undefined) {
      this.name = `base16-${maybeBase16Yaml.slug}`
    } else {
      this.name = `base16-${slug(maybeBase16Yaml.name)}`
    }

    this.base16Colors = new Base16Palette(Object.entries(maybeBase16Yaml.palette).reduce(
      (p, [k, v]) => ({ ...p, [k]: new Base16Color(v) }), {}
    ))
  }

  static isValid (maybeBase16Yaml: unknown): maybeBase16Yaml is Base16Yaml {
    return Base16Yaml.isValid(maybeBase16Yaml)
  }
}

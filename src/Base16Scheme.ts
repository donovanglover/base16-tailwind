import slug from 'slug'
import { Base16Color } from './Base16Color.ts'
import { type Base16Palette } from './Base16Palette.ts'
import { type Base16Yaml } from './Base16Yaml.ts'

export class Base16Scheme {
  readonly name: `base16-${string}`
  readonly base16Colors: Base16Palette

  constructor (yaml: Base16Yaml) {
    if (yaml.slug !== undefined) {
      this.name = `base16-${yaml.slug}`
    } else {
      this.name = `base16-${slug(yaml.name)}`
    }

    this.base16Colors = Object.entries(yaml.palette).reduce(
      (p, [k, v]) => ({ ...p, [k]: new Base16Color(v) }), {}
    ) as Base16Palette
  }
}

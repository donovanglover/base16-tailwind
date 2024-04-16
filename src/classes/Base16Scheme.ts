import { colord } from 'colord'
import slug from 'slug'
import { type Base16Palette } from '../helpers/isBase16Palette'
import { type Base16Yaml } from '../helpers/isBase16Yaml'

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
      (p, [k, v]) => ({ ...p, [k]: colord(`#${v}`).toRgbString().split('(')[1].split(')')[0].replaceAll(',', '') }), {}
    ) as Base16Palette
  }
}

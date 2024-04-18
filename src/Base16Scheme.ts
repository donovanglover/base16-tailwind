import slug from 'slug'
import { Base16Palette } from './Base16Palette.ts'

export class Base16Scheme {
  readonly system? = 'base16'
  readonly name: string
  readonly slug?: string
  readonly author: string
  readonly variant: 'light' | 'dark'
  readonly palette: Base16Palette
  readonly base16Colors: Base16Palette
  static readonly #BASE16_SCHEME_HELP = 'Are you sure your imported file or JSON object follows standards?'

  constructor (maybeBase16Scheme: unknown) {
    if (maybeBase16Scheme === null || typeof maybeBase16Scheme !== 'object') {
      throw new Error(`A non-object value was given as a Base16 scheme. ${Base16Scheme.#BASE16_SCHEME_HELP}`)
    }

    if (!Base16Scheme.isValid(maybeBase16Scheme)) {
      throw new Error(`Invalid Base16 scheme "${JSON.stringify(maybeBase16Scheme)}" was given. ${Base16Scheme.#BASE16_SCHEME_HELP}`)
    }

    this.name = maybeBase16Scheme.slug !== undefined ? `base16-${maybeBase16Scheme.slug}` : `base16-${slug(maybeBase16Scheme.name)}`

    this.base16Colors = new Base16Palette(maybeBase16Scheme.palette)

    this.slug = maybeBase16Scheme.slug
    this.author = maybeBase16Scheme.author
    this.variant = maybeBase16Scheme.variant
    this.palette = maybeBase16Scheme.palette
  }

  static isValid (maybeBase16Scheme: unknown): maybeBase16Scheme is Base16Scheme {
    const scheme = maybeBase16Scheme

    return (
      scheme !== null && typeof scheme === 'object' &&
      ('system' in scheme ? scheme.system === 'base16' : true) &&
      'name' in scheme && typeof scheme.name === 'string' &&
      ('slug' in scheme ? typeof scheme.slug === 'string' : true) &&
      'author' in scheme && typeof scheme.author === 'string' &&
      'variant' in scheme && (scheme.variant === 'light' || scheme.variant === 'dark') &&
      'palette' in scheme && Base16Palette.isValid(scheme.palette)
    )
  }
}

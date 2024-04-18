import slug from 'slug'
import { Base16Palette } from './Base16Palette.ts'

export class Base16Scheme {
  readonly system: 'base16'
  readonly name: string
  readonly slug: string
  readonly author: string
  readonly variant: 'light' | 'dark'
  readonly palette: Base16Palette

  constructor (maybeBase16Scheme: unknown) {
    if (maybeBase16Scheme === null || typeof maybeBase16Scheme !== 'object') {
      throw new Error('A non-object value was given as a Base16 scheme.')
    }

    if ('system' in maybeBase16Scheme && maybeBase16Scheme.system === 'base16') {
      this.system = 'base16'
    } else {
      throw new Error('The key "system" must be set to "base16" for Base16 schemes.')
    }

    if ('name' in maybeBase16Scheme && typeof maybeBase16Scheme.name === 'string') {
      this.name = maybeBase16Scheme.name
    } else {
      throw new Error('No name was given for the Base16 scheme.')
    }

    if ('slug' in maybeBase16Scheme && typeof maybeBase16Scheme.slug === 'string') {
      this.slug = `base16-${maybeBase16Scheme.slug}`
    } else {
      this.slug = `base16-${slug(this.name)}`
    }

    if ('author' in maybeBase16Scheme && typeof maybeBase16Scheme.author === 'string') {
      this.author = maybeBase16Scheme.author
    } else {
      throw new Error('No author was given for Base16 scheme.')
    }

    if ('variant' in maybeBase16Scheme && (maybeBase16Scheme.variant === 'light' || maybeBase16Scheme.variant === 'dark')) {
      this.variant = maybeBase16Scheme.variant
    } else {
      throw new Error('No variant was given for Base16 scheme.')
    }

    if ('palette' in maybeBase16Scheme) {
      this.palette = new Base16Palette(maybeBase16Scheme.palette)
    } else {
      throw new Error('No palette was given for Base16 scheme.')
    }
  }
}

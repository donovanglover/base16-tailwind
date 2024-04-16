import { Base16Palette } from './Base16Palette.ts'

export class Base16Yaml {
  readonly system = 'base16'
  readonly name: string
  readonly slug?: string
  readonly author: string
  readonly variant: 'light' | 'dark'
  readonly palette: Base16Palette
  static readonly #BASE16_YAML_HELP = 'Are you sure your .yaml file follows standards?'

  constructor (maybeBase16Yaml: unknown) {
    if (maybeBase16Yaml === null || typeof maybeBase16Yaml !== 'object') {
      throw new Error(`A non-object value was given as a Base16 yaml. ${Base16Yaml.#BASE16_YAML_HELP}`)
    }

    if (!Base16Yaml.isValid(maybeBase16Yaml)) {
      throw new Error(`Invalid Base16 yaml "${JSON.stringify(maybeBase16Yaml)}" was given. ${Base16Yaml.#BASE16_YAML_HELP}`)
    }

    this.name = maybeBase16Yaml.name
    this.slug = maybeBase16Yaml.slug
    this.author = maybeBase16Yaml.author
    this.variant = maybeBase16Yaml.variant
    this.palette = maybeBase16Yaml.palette
  }

  static isValid (maybeBase16Yaml: unknown): maybeBase16Yaml is Base16Yaml {
    const yaml = maybeBase16Yaml

    return (
      yaml !== null && typeof yaml === 'object' &&
      'system' in yaml && yaml.system === 'base16' &&
      'name' in yaml && typeof yaml.name === 'string' &&
      ('slug' in yaml ? typeof yaml.slug === 'string' : true) &&
      'author' in yaml && typeof yaml.author === 'string' &&
      'variant' in yaml && (yaml.variant === 'light' || yaml.variant === 'dark') &&
      'palette' in yaml && Base16Palette.isValid(yaml.palette)
    )
  }
}

enum Base16ColorName {
  base00 = 'base00',
  base01 = 'base01',
  base02 = 'base02',
  base03 = 'base03',
  base04 = 'base04',
  base05 = 'base05',
  base06 = 'base06',
  base07 = 'base07',
  base08 = 'base08',
  base09 = 'base09',
  base0A = 'base0A',
  base0B = 'base0B',
  base0C = 'base0C',
  base0D = 'base0D',
  base0E = 'base0E',
  base0F = 'base0F',
}

type Base16ColorValue = `#${string}`
type Base16SchemeColors = Record<Base16ColorName, Base16ColorValue>
type Base16Palette = Record<Base16ColorName, string>

interface Base16Yaml {
  system: 'base16'
  name: string
  slug?: string
  author: string
  variant: 'light' | 'dark'
  palette: Base16Palette
}

function isBase16Yaml (yaml: unknown): yaml is Base16Yaml {
  if (yaml === null || typeof yaml !== 'object') return false
  if (!('system' in yaml) || yaml.system !== 'base16') return false
  if (!('name' in yaml) || typeof yaml.name !== 'string') return false
  if ('slug' in yaml && typeof yaml.slug !== 'string') return false
  if (!('author' in yaml) || typeof yaml.author !== 'string') return false
  if (!('variant' in yaml) || (yaml.variant !== 'light' && yaml.variant !== 'dark')) return false
  if (!('palette' in yaml) || !isBase16Palette(yaml.palette)) return false

  return true
}

const expectedKeys = Array.from({ length: 16 }, (_, i) => `base0${i.toString(16).toUpperCase()}`)

function isBase16Palette (palette: unknown): palette is Base16Palette {
  if (palette === null || typeof palette !== 'object') return false

  for (const value of Object.values(palette)) {
    if (typeof value !== 'string' || !isHexColor(value)) return false
  }

  return JSON.stringify(expectedKeys) === JSON.stringify(Object.keys(palette))
}

function isHexColor (maybeHexColor: string): boolean {
  return /^[0-9A-F]{6}$/i.test(maybeHexColor)
}

export class Base16Scheme {
  readonly name: `base16-${string}`
  base16Colors: Base16SchemeColors

  constructor (yaml: unknown) {
    if (!isBase16Yaml(yaml)) {
      throw Error('Invalid yaml')
    }

    // TODO: Parse slug or slugify name if slug not found
    this.name = `base16-${yaml.name}`

    this.base16Colors = {
      base00: `#${yaml.palette.base00}`,
      base01: `#${yaml.palette.base01}`,
      base02: `#${yaml.palette.base02}`,
      base03: `#${yaml.palette.base03}`,
      base04: `#${yaml.palette.base04}`,
      base05: `#${yaml.palette.base05}`,
      base06: `#${yaml.palette.base06}`,
      base07: `#${yaml.palette.base07}`,
      base08: `#${yaml.palette.base08}`,
      base09: `#${yaml.palette.base09}`,
      base0A: `#${yaml.palette.base0A}`,
      base0B: `#${yaml.palette.base0B}`,
      base0C: `#${yaml.palette.base0C}`,
      base0D: `#${yaml.palette.base0D}`,
      base0E: `#${yaml.palette.base0E}`,
      base0F: `#${yaml.palette.base0F}`
    }
  }
}

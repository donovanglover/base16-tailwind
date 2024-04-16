import { colord } from 'colord'
import slug from 'slug'

interface Base16Yaml {
  system: 'base16'
  name: string
  slug?: string
  author: string
  variant: 'light' | 'dark'
  palette: Base16Palette
}

interface Base16Palette {
  base00: string
  base01: string
  base02: string
  base03: string
  base04: string
  base05: string
  base06: string
  base07: string
  base08: string
  base09: string
  base0A: string
  base0B: string
  base0C: string
  base0D: string
  base0E: string
  base0F: string
}

const BASE16_PALETTE_KEYS = JSON.stringify(
  Array.from(
    { length: 16 },
    (_, i) => `base0${i.toString(16).toUpperCase()}`
  )
)

export function isBase16Yaml (maybeBase16Yaml: unknown): maybeBase16Yaml is Base16Yaml {
  const yaml = maybeBase16Yaml

  return (
    yaml !== null && typeof yaml === 'object' &&
    'system' in yaml && yaml.system === 'base16' &&
    'name' in yaml && typeof yaml.name === 'string' &&
    ('slug' in yaml ? typeof yaml.slug === 'string' : true) &&
    'author' in yaml && typeof yaml.author === 'string' &&
    'variant' in yaml && (yaml.variant === 'light' || yaml.variant === 'dark') &&
    'palette' in yaml && isBase16Palette(yaml.palette)
  )
}

function isBase16Palette (maybeBase16Palette: unknown): maybeBase16Palette is Base16Palette {
  const palette = maybeBase16Palette

  if (palette === null || typeof palette !== 'object') {
    return false
  }

  for (const value of Object.values(palette)) {
    if (typeof value !== 'string' || !isHexColor(value)) {
      return false
    }
  }

  return JSON.stringify(Object.keys(palette)) === BASE16_PALETTE_KEYS
}

function isHexColor (maybeHexColor: string): boolean {
  return /^[0-9A-F]{6}$/i.test(maybeHexColor)
}

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

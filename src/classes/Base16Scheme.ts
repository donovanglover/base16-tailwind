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
  // TODO: Only parse what's needed; add plugin customization options?
  readonly base16Colors: Base16Palette

  constructor (yaml: Base16Yaml) {
    if (yaml.slug !== undefined) {
      this.name = `base16-${yaml.slug}`
    } else {
      this.name = `base16-${yaml.name
        .toLowerCase()
        .replaceAll(' ', '-')
        .replaceAll('(', '')
        .replaceAll(')', '')}`
    }

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

import { type Base16Palette, isBase16Palette } from './Base16Palette.ts'

export interface Base16Yaml {
  system: 'base16'
  name: string
  slug?: string
  author: string
  variant: 'light' | 'dark'
  palette: Base16Palette
}

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

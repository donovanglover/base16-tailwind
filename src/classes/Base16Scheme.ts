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

type Base16ColorValue =  `#${string}`
type Base16SchemeColors = Record<Base16ColorName, Base16ColorValue>
type Base16SchemeVariant = 'light' | 'dark'

interface Base16Yaml {
  system: 'base16'
  name: string
  author: string
  slug?: string
  variant: Base16SchemeVariant
  palette: Record<Base16ColorName, string>
}

export class Base16Scheme {
  name: `base16-${string}`
  base16Colors: Base16SchemeColors

  constructor (yaml: Base16Yaml) {
    this.name = `base16-${schemeName}`,
  }
}

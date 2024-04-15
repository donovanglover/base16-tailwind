import type { Base16ColorName } from './Base16ColorName.d.ts'
import type { Base16SchemeVariant } from './Base16SchemeVariant.d.ts'

export interface Base16Yaml {
  system: 'base16'
  name: string
  author: string
  variant: Base16SchemeVariant
  palette: Record<Base16ColorName, string>
}

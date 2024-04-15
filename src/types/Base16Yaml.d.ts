import { type Base16ColorName } from './Base16ColorName'
import { type Base16SchemeVariant } from './Base16SchemeVariant'

export interface Base16Yaml {
  system: 'base16'
  name: string
  author: string
  variant: Base16SchemeVariant
  palette: Record<Base16ColorName, string>
}

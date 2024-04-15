import { colord } from 'colord'
import type { Base16ColorValue } from '../types/Base16ColorValue.d.ts'

export function hexToRgb (color: Base16ColorValue): string {
  return colord(color).toRgbString().split('(')[1].split(')')[0].replaceAll(',', '')
}

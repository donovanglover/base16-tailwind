import { type Base16ColorValue } from '../types/Base16ColorValue'
import { colord } from 'colord'

// Given: color in "#AABBCC"
// Returns: "38 94 122"
export function hexToRgb (color: Base16ColorValue): string {
  return colord(color).toRgbString().split('(')[1].split(')')[0].replaceAll(',', '')
}

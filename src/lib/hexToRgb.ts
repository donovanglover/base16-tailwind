import { type HEX } from '@/types'
import { colord } from 'colord'

// Given: color in "#AABBCC"
// Returns: "38 94 122"
export function hexToRgb (color: HEX): string {
  return colord(color).toRgbString().split('(')[1].split(')')[0].replaceAll(',', '')
}

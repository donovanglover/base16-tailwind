import { colord } from 'colord'

export function hexToRgb (color: string): string {
  return colord(color).toRgbString().split('(')[1].split(')')[0].replaceAll(',', '')
}

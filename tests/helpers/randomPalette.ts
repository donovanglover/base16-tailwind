import crypto from 'node:crypto'

export function randomPalette (size: number = 16): Record<string, string> {
  return Array.from(
    { length: size },
    (_, i) => `base0${i.toString(size).toUpperCase()}`
  ).reduce((a, v) => (
    { ...a, [v]: crypto.randomBytes(3).toString('hex') }
  ), {})
}

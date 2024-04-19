import crypto from 'node:crypto'

export function randomPalette (): Record<string, string> {
  return Array.from(
    { length: 16 },
    (_, i) => `base0${i.toString(16).toUpperCase()}`
  ).reduce((a, v) => (
    { ...a, [v]: crypto.randomBytes(3).toString('hex') }
  ), {})
}

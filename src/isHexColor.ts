export function isHexColor (maybeHexColor: string): boolean {
  return /^[0-9A-F]{6}$/i.test(maybeHexColor)
}

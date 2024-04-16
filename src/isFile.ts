import { lstatSync } from 'node:fs'

export function isFile (fileName: string): boolean {
  return lstatSync(fileName).isFile()
}

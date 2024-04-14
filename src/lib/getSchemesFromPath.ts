import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import YAML from 'yaml'
import { isFile } from './isFile'
import type { Base16ColorName } from '../types/Base16ColorName'
import type { Base16ColorValue } from '../types/Base16ColorValue'
import type { Base16ColorScheme } from '../types/Base16ColorScheme'

export function getSchemesFromPath (folderPath: string): Record<string, Base16ColorScheme> {
  const schemes: Record<string, Base16ColorScheme> = {}
  const files = readdirSync(folderPath)

  for (const fileName of files) {
    const filePath = join(folderPath, fileName)

    if (isFile(filePath) && filePath.endsWith('.yaml')) {
      const fileContents = readFileSync(filePath, 'utf-8')
      const schemeName = fileName.split('.yaml')[0]
      const { palette }: { palette: Base16ColorScheme } = YAML.parse(fileContents)

      for (const [key, value] of Object.entries(palette) as Array<[Base16ColorName, Base16ColorValue]>) {
        palette[key] = `#${value}`
      }

      schemes[schemeName] = palette
    }
  }

  return schemes
}

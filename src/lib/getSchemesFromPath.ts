import fs from 'node:fs/promises'
import { join } from 'node:path'
import YAML from 'yaml'
import { isFile } from './isFile'
import type { Color, HEX, Palette } from '../types'

export async function getSchemesFromPath (folderPath: string): Promise<Record<string, Palette>> {
  const schemes: Record<string, Palette> = {}
  const files = await fs.readdir(folderPath)

  for (const fileName of files) {
    const filePath = join(folderPath, fileName)

    if (await isFile(filePath) && filePath.endsWith('.yaml')) {
      const fileContents = await fs.readFile(filePath, 'utf-8')
      const schemeName = fileName.split('.yaml')[0]
      const { palette }: { palette: Palette } = YAML.parse(fileContents)

      for (const [key, value] of Object.entries(palette) as Array<[Color, HEX]>) {
        palette[key] = `#${value}`
      }

      schemes[schemeName] = palette
    }
  }

  return schemes
}

import { readdirSync, readFileSync, lstatSync } from 'fs'
import { join } from 'path'
import YAML from 'yaml'
import { Color, Palette, HEX } from './types'

const isFile = (fileName: string): boolean => {
  return lstatSync(fileName).isFile()
}

export function getSchemesFromPath(folderPath: string): Record<string, Palette> {
  const schemes: Record<string, Palette> = {}

  readdirSync(folderPath).forEach(fileName => {
    const filePath = join(folderPath, fileName)

    if (isFile(filePath) && filePath.endsWith('.yaml')) {
      const fileContents = readFileSync(filePath, 'utf-8')
      const schemeName = fileName.split('.yaml')[0]
      const { palette }: { palette: Palette } = YAML.parse(fileContents)

      for (const [key, value] of Object.entries(palette) as Array<[Color, HEX]>) {
        palette[key] = `#${value}`
      }

      schemes[schemeName] = palette
    }
  })

  return schemes
}

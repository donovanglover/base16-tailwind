import { readdir, readFile, lstat } from 'fs/promises'
import { join } from 'path'
import YAML from 'yaml'

export enum Color {
  base00 = 'base00',
  base01 = 'base01',
  base02 = 'base02',
  base03 = 'base03',
  base04 = 'base04',
  base05 = 'base05',
  base06 = 'base06',
  base07 = 'base07',
  base08 = 'base08',
  base09 = 'base09',
  base0A = 'base0A',
  base0B = 'base0B',
  base0C = 'base0C',
  base0D = 'base0D',
  base0E = 'base0E',
  base0F = 'base0F'
}

export type HEX = `#${string}`

export type Palette = Record<Color, HEX>

const isFile = async (fileName: string): Promise<boolean> => {
  return (await lstat(fileName)).isFile()
}

export async function getSchemesFromPath (folderPath: string): Promise<Record<string, Palette>> {
  const schemes: Record<string, Palette> = {}
  const files = await readdir(folderPath)

  for (const fileName of files) {
    const filePath = join(folderPath, fileName)

    if (await isFile(filePath) && filePath.endsWith('.yaml')) {
      const fileContents = await readFile(filePath, 'utf-8')
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

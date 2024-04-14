import fs from 'fs/promises'
import { join } from 'path'
import YAML from 'yaml'
import { isLight } from 'color-2-name'
import { colord } from 'colord'

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
  return (await fs.lstat(fileName)).isFile()
}

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

void (async () => {
  const schemes = await getSchemesFromPath('./schemes/base16')

  interface Colors {
    transparent: 'transparent'
    current: 'currentColor'
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    red: string
    orange: string
    yellow: string
    green: string
    cyan: string
    blue: string
    purple: string
    pink: string
  }

  const colorsArray: Record<string, Colors> = {}

  for (const [colorName, colorValues] of Object.entries(schemes)) {
    const colorShades = isLight(colorValues.base00)
      ? {
          800: rgb(colorValues.base07),
          700: rgb(colorValues.base06),
          600: rgb(colorValues.base05),
          500: rgb(colorValues.base04),
          400: rgb(colorValues.base03),
          300: rgb(colorValues.base02),
          200: rgb(colorValues.base01),
          100: rgb(colorValues.base00)
        }
      : {
          800: rgb(colorValues.base00),
          700: rgb(colorValues.base01),
          600: rgb(colorValues.base02),
          500: rgb(colorValues.base03),
          400: rgb(colorValues.base04),
          300: rgb(colorValues.base05),
          200: rgb(colorValues.base06),
          100: rgb(colorValues.base07)
        }

    colorsArray[colorName] = {
      transparent: 'transparent',
      current: 'currentColor',
      ...colorShades,
      red: rgb(colorValues.base08),
      orange: rgb(colorValues.base09),
      yellow: rgb(colorValues.base0A),
      green: rgb(colorValues.base0B),
      cyan: rgb(colorValues.base0C),
      blue: rgb(colorValues.base0D),
      purple: rgb(colorValues.base0E),
      pink: rgb(colorValues.base0F)
    }
  }

  console.log(colorsArray)

  // await fs.mkdir('./dist', { recursive: true })
  // await fs.writeFile('./dist/schemes.json', JSON.stringify(schemes) + '\n', 'utf-8')
})()

// Given: color in "#AABBCC"
// Returns: "38 94 122"
function rgb (color: HEX): string {
  return colord(color).toRgbString().split('(')[1].split(')')[0].replaceAll(',', '')
}

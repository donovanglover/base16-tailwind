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

// Given: color in "#AABBCC"
// Returns: "38 94 122"
function rgb (color: HEX): string {
  return colord(color).toRgbString().split('(')[1].split(')')[0].replaceAll(',', '')
}

void (async () => {
  const schemes = await getSchemesFromPath('./schemes/base16')

  const colorsArray = []

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

    colorsArray.push(`
      @layer base {
        [data-theme="${colorName}"] {
          --color-100: ${colorShades['100']};
          --color-200: ${colorShades['200']};
          --color-300: ${colorShades['300']};
          --color-400: ${colorShades['400']};
          --color-500: ${colorShades['500']};
          --color-600: ${colorShades['600']};
          --color-700: ${colorShades['700']};
          --color-800: ${colorShades['800']};

          --color-red: ${rgb(colorValues.base08)};
          --color-orange: ${rgb(colorValues.base09)};
          --color-yellow: ${rgb(colorValues.base0A)};
          --color-green: ${rgb(colorValues.base0B)};
          --color-cyan: ${rgb(colorValues.base0C)};
          --color-blue: ${rgb(colorValues.base0D)};
          --color-purple: ${rgb(colorValues.base0E)};
          --color-pink: ${rgb(colorValues.base0F)};
        }
      }
    `)
  }

  await fs.mkdir('./dist', { recursive: true })
  await fs.writeFile('./dist/schemes.css', colorsArray.join('\n'), 'utf-8')
})()

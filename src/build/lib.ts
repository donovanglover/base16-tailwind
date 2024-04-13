import fs from 'fs/promises'
import { join } from 'path'
import YAML from 'yaml'
import { isLight } from 'color-2-name'

type Palette = Record<string, string>

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

      for (const [key, value] of Object.entries(palette)) {
        palette[key] = `#${value}`
      }

      schemes[schemeName] = palette
    }
  }

  return schemes
}

const outputDirectory = './src/dist'

void (async () => {
  const schemes = await getSchemesFromPath('./schemes/base16')

  const colorsArray: Record<string, Record<string, string>> = {}

  for (const [colorName, colorValues] of Object.entries(schemes)) {
    const colorShades = isLight(colorValues.base00)
      ? {
          800: colorValues.base07,
          700: colorValues.base06,
          600: colorValues.base05,
          500: colorValues.base04,
          400: colorValues.base03,
          300: colorValues.base02,
          200: colorValues.base01,
          100: colorValues.base00
        }
      : {
          800: colorValues.base00,
          700: colorValues.base01,
          600: colorValues.base02,
          500: colorValues.base03,
          400: colorValues.base04,
          300: colorValues.base05,
          200: colorValues.base06,
          100: colorValues.base07
        }

    colorsArray[colorName] = {
      transparent: 'transparent',
      current: 'currentColor',
      ...colorShades,
      red: colorValues.base08,
      orange: colorValues.base09,
      yellow: colorValues.base0A,
      green: colorValues.base0B,
      cyan: colorValues.base0C,
      blue: colorValues.base0D,
      purple: colorValues.base0E,
      pink: colorValues.base0F
    }
  }

  console.log(colorsArray)

  await fs.mkdir(outputDirectory, { recursive: true })
  await fs.writeFile(`${outputDirectory}/schemes.json`, JSON.stringify(schemes) + '\n', 'utf-8')
})()

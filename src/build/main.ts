import fs from 'fs'
import path from 'path'
import YAML from 'yaml'

const folderPath = './schemes/base16'

const isFile = (fileName: string): boolean => {
  return fs.lstatSync(fileName).isFile()
}

enum Color {
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

type HEX = `#${string}`;
type Palette = Record<Color, HEX>

const schemes: Record<string, Palette> = {}

fs.readdirSync(folderPath).forEach(fileName => {
  const filePath = path.join(folderPath, fileName)

  if (isFile(filePath) && filePath.endsWith('.yaml')) {
    const fileContents = fs.readFileSync(filePath, 'utf-8')
    const schemeName = fileName.split('.yaml')[0]
    const { palette }: { palette: Palette } = YAML.parse(fileContents)

    for (const [key, value] of Object.entries(palette) as Array<[Color, HEX]>) {
      palette[key] = `#${value}`
    }

    schemes[schemeName] = palette
  }
})

fs.writeFileSync('schemes.json', JSON.stringify(schemes) + '\n', 'utf-8')

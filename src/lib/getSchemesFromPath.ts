import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import YAML from 'yaml'
import type { Base16Scheme } from '../types/Base16Scheme.d.ts'
import type { Base16Yaml } from '../types/Base16Yaml.d.ts'
import { isFile } from './isFile.ts'

export function getSchemesFromPath (folderPath: string): Base16Scheme[] {
  const schemes: Base16Scheme[] = []
  const files = readdirSync(folderPath)

  for (const fileName of files) {
    const filePath = join(folderPath, fileName)

    if (isFile(filePath) && filePath.endsWith('.yaml')) {
      const fileContents = readFileSync(filePath, 'utf-8')
      const schemeName = fileName.split('.yaml')[0]
      const yaml: Base16Yaml = YAML.parse(fileContents)

      schemes.push({
        name: `base16-${schemeName}`,

        base16Colors: {
          base00: `#${yaml.palette.base00}`,
          base01: `#${yaml.palette.base01}`,
          base02: `#${yaml.palette.base02}`,
          base03: `#${yaml.palette.base03}`,
          base04: `#${yaml.palette.base04}`,
          base05: `#${yaml.palette.base05}`,
          base06: `#${yaml.palette.base06}`,
          base07: `#${yaml.palette.base07}`,
          base08: `#${yaml.palette.base08}`,
          base09: `#${yaml.palette.base09}`,
          base0A: `#${yaml.palette.base0A}`,
          base0B: `#${yaml.palette.base0B}`,
          base0C: `#${yaml.palette.base0C}`,
          base0D: `#${yaml.palette.base0D}`,
          base0E: `#${yaml.palette.base0E}`,
          base0F: `#${yaml.palette.base0F}`
        }
      })
    }
  }

  return schemes
}

import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import YAML from 'yaml'
import { Base16Scheme, isBase16Yaml } from '../classes/Base16Scheme.ts'
import { isFile } from './isFile.ts'

export function getSchemesFromPath (folderPath: string): Base16Scheme[] {
  const schemes = []
  const files = readdirSync(folderPath)

  for (const fileName of files) {
    const filePath = join(folderPath, fileName)

    if (isFile(filePath) && filePath.endsWith('.yaml')) {
      const fileContents = readFileSync(filePath, 'utf-8')
      const yaml = YAML.parse(fileContents)

      if (isBase16Yaml(yaml)) {
        const scheme = new Base16Scheme(yaml)

        schemes.push(scheme)
      } else {
        console.warn(`WARNING: Got invalid Base16Yaml from file ${fileName}. It will not be included in the Tailwind CSS output.`)
      }
    }
  }

  return schemes
}

import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import YAML from 'yaml'
import { Base16Scheme } from './Base16Scheme.ts'
import { isBase16Yaml } from './Base16Yaml.ts'
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
        const fileNameSlug = fileName.replace('.yaml', '')

        if (!scheme.name.includes(fileNameSlug)) {
          console.warn(`WARNING(base16-tailwind): Got a className of ${scheme.name} for ${fileName}. This means that the slug from the YAML data differs from the slug of the file name.`)
        }

        schemes.push(scheme)
      } else {
        console.warn(`WARNING(base16-tailwind): Got invalid Base16Yaml from file ${fileName}. It will not be included in the Tailwind CSS output.`)
      }
    }
  }

  return schemes
}

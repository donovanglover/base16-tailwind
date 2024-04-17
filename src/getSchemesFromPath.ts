import { lstatSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import YAML from 'yaml'
import { Base16Scheme } from './Base16Scheme.ts'

export function getSchemesFromPath (folderPath: string): Base16Scheme[] {
  const schemes = []
  const files = readdirSync(folderPath)

  for (const fileName of files) {
    const filePath = join(folderPath, fileName)

    if (lstatSync(filePath).isFile() && filePath.endsWith('.yaml')) {
      const fileContents = readFileSync(filePath, 'utf-8')
      const yaml = YAML.parse(fileContents)
      const scheme = new Base16Scheme(yaml)
      const fileNameSlug = fileName.replace('.yaml', '')

      if (!scheme.name.includes(fileNameSlug)) {
        console.warn(`WARNING(base16-tailwind): Got a className of ${scheme.name} for ${fileName}. This means that the slug from the YAML data differs from the slug of the file name.`)
      }

      schemes.push(scheme)
    }
  }

  return schemes
}

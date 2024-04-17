import { existsSync, lstatSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import YAML from 'yaml'
import { Base16Scheme } from './Base16Scheme.ts'

export class Base16Path {
  readonly schemes: Base16Scheme[] = []

  constructor (maybeBase16Path: unknown) {
    if (maybeBase16Path === null || typeof maybeBase16Path !== 'string') {
      throw new Error('A non-string value was given as a Base16 path.')
    }

    if (!existsSync(maybeBase16Path)) {
      throw new Error(`Invalid Base16 path "${JSON.stringify(maybeBase16Path)}" was given.`)
    }

    const files = readdirSync(maybeBase16Path)

    for (const fileName of files) {
      const filePath = join(maybeBase16Path, fileName)

      if (lstatSync(filePath).isFile() && filePath.endsWith('.yaml')) {
        const fileContents = readFileSync(filePath, 'utf-8')
        const yaml = YAML.parse(fileContents)
        const scheme = new Base16Scheme(yaml)
        const fileNameSlug = fileName.replace('.yaml', '')

        if (!scheme.name.includes(fileNameSlug)) {
          console.warn(`WARNING(base16-tailwind): Got a className of ${scheme.name} for ${fileName}. This means that the slug from the YAML data differs from the slug of the file name.`)
        }

        this.schemes.push(scheme)
      }
    }
  }
}

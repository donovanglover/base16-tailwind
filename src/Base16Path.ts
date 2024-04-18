import { existsSync, lstatSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { cwd } from 'node:process'
import YAML from 'yaml'
import { Base16Scheme } from './Base16Scheme.ts'

export class Base16Path {
  static readonly DEFAULT_PATH = join(__dirname, '../schemes/base16')
  readonly schemes: Base16Scheme[] = []
  readonly path: string

  constructor (maybePath?: unknown) {
    this.path = typeof maybePath === 'string' ? join(cwd(), maybePath) : Base16Path.DEFAULT_PATH

    if (!existsSync(this.path)) {
      throw new Error(`Invalid Base16 path "${JSON.stringify(this.path)}" was given.`)
    }

    const files = readdirSync(this.path)

    for (const fileName of files) {
      const filePath = join(this.path, fileName)

      if (lstatSync(filePath).isFile() && filePath.endsWith('.yaml')) {
        const fileContents = readFileSync(filePath, 'utf-8')
        const yaml = YAML.parse(fileContents)
        const scheme = new Base16Scheme(yaml)
        const fileNameSlug = fileName.replace('.yaml', '')

        if (scheme.slug !== `base16-${fileNameSlug}`) {
          throw new Error(`File "${fileName}" is invalid. The slug from the YAML data differs from the slug of the file name.`)
        }

        this.schemes.push(scheme)
      }
    }
  }
}

import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { cwd } from 'node:process'
import { globSync } from 'glob'
import YAML from 'yaml'
import { Base16Scheme } from './Base16Scheme.ts'

export class Base16Path {
  static readonly DEFAULT_PATH = join(__dirname, '../schemes')
  readonly schemes: Base16Scheme[] = []
  readonly path: string

  constructor (maybePath?: unknown) {
    this.path = typeof maybePath === 'string' ? join(cwd(), maybePath) : Base16Path.DEFAULT_PATH

    if (!existsSync(this.path)) {
      throw new Error(`Invalid Base16 path "${JSON.stringify(this.path)}" was given.`)
    }

    const files = globSync(this.path + '/**/*.yaml')

    for (const file of files) {
      const fileContents = readFileSync(file, 'utf-8')
      const yaml = YAML.parse(fileContents)
      const scheme = new Base16Scheme(yaml)
      const fileNameSlug = file.split('/').reverse()[0].replace('.yaml', '')

      if (scheme.slug !== `${scheme.system}-${fileNameSlug}`) {
        throw new Error(`File "${file}" is invalid. The slug from the YAML data differs from the slug of the file name.`)
      }

      this.schemes.push(scheme)
    }
  }
}

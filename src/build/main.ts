import { getSchemesFromPath } from './lib'
import { mkdir, writeFile } from 'fs/promises'

const outputDirectory = './src/dist'

void (async () => {
  const schemes = await getSchemesFromPath('./schemes/base16')

  await mkdir(outputDirectory, { recursive: true })
  await writeFile(`${outputDirectory}/schemes.json`, JSON.stringify(schemes) + '\n', 'utf-8')
})()

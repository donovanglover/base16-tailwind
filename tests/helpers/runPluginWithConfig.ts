import path from 'node:path'
import postcss from 'postcss'
import tailwind, { type Config } from 'tailwindcss'
import { type Base16Options } from '../../src/Base16Options.ts'
import { Base16Plugin } from '../../src/Base16Plugin.ts'

type PostCSSResult = postcss.Result<postcss.Root>

export async function runPluginWithConfig (config: Config, options?: Base16Options): Promise<PostCSSResult> {
  const { currentTestName } = expect.getState()

  config = {
    ...{ plugins: [new Base16Plugin(options).creator], corePlugins: { preflight: false } },
    ...config
  }

  return await postcss(tailwind(config)).process(
    [
      '@tailwind base;',
      '@tailwind components;',
      '@tailwind utilities'
    ].join('\n'),

    {
      from: `${path.resolve(__filename)}?test=${currentTestName}`
    }
  )
}

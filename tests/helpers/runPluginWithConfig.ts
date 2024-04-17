import path from 'node:path'
import postcss from 'postcss'
import tailwind, { type Config } from 'tailwindcss'
import { Base16Plugin } from '../../src/Base16Plugin.ts'

type PostCSSResult = postcss.Result<postcss.Root>

export async function runPluginWithConfig (config: Config, plugin = tailwind): Promise<PostCSSResult> {
  const { currentTestName } = expect.getState()

  config = {
    ...{ plugins: [new Base16Plugin().creator], corePlugins: { preflight: false } },
    ...config
  }

  return await postcss(plugin(config)).process(
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

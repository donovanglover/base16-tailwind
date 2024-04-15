import path from 'node:path'
import tailwind, { type Config } from 'tailwindcss'
import postcss from 'postcss'
import { base16Plugin } from '../../src'

type PostCSSResult = postcss.Result<postcss.Root>

export async function runPluginWithConfig (config: Config, plugin = tailwind): Promise<PostCSSResult> {
  const { currentTestName } = expect.getState()

  config = {
    ...{ plugins: [base16Plugin], corePlugins: { preflight: false } },
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
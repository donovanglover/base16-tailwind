import plugin from 'tailwindcss/plugin'
import type { Config, PluginCreator } from 'tailwindcss/types/config'
import { Base16Config } from './Base16Config.ts'
import type { Base16Options } from './Base16Options.ts'
import { Base16Plugin } from './Base16Plugin.ts'

export const base16Tailwind: {
  (options?: Base16Options): {
    handler: PluginCreator,
    config?: Partial<Config>
  }

  __isOptionsFunction: true
} = plugin.withOptions(
  (options?: Base16Options): PluginCreator => {
    return new Base16Plugin(options).creator
  },

  (options?: Base16Options): Partial<Config> => {
    return new Base16Config(options)
  }
)

export default base16Tailwind

import plugin from 'tailwindcss/plugin'
import type { Config, PluginCreator } from 'tailwindcss/types/config'
import { Base16Config } from './Base16Config.ts'
import { type Base16Options } from './Base16Options.ts'
import { Base16Plugin } from './Base16Plugin.ts'

function base16Handler (options?: Base16Options): PluginCreator {
  return new Base16Plugin(options).creator
}

function base16Config (options?: Base16Options): Config {
  return new Base16Config(options)
}

export const base16Tailwind = plugin.withOptions(base16Handler, base16Config)

export default base16Tailwind

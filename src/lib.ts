import plugin from 'tailwindcss/plugin'
import type { Config, PluginCreator } from 'tailwindcss/types/config'
import { Base16Config, type Base16ConfigOptions } from './Base16Config.ts'
import { Base16Plugin } from './base16Plugin.ts'

function base16Handler (options?: Base16ConfigOptions): PluginCreator {
  return new Base16Plugin(options).creator
}

function base16Config (options?: Base16ConfigOptions): Config {
  return new Base16Config(options)
}

export const base16Tailwind = plugin.withOptions(base16Handler, base16Config)

export default base16Tailwind

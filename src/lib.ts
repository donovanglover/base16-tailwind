import plugin from 'tailwindcss/plugin'
import type { Config, PluginCreator } from 'tailwindcss/types/config'
import { Base16Config } from './Base16Config.ts'
import type { Base16Options } from './Base16Options.ts'
import { Base16Plugin } from './Base16Plugin.ts'
import type { Base16Scheme } from './Base16Scheme.ts'

/** Usage:
 *
 * ```ts
 * import { base16Tailwind } from '@donovanglover/base16-tailwind'
 * ```
 *
 * @param options The options to customize base16-tailwind with.
 */
export const base16Tailwind: {
  (options?: Base16Options): {
    handler: PluginCreator
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

/** Helper function to iterate over base16 schemes.
 *
 * This is useful when you're statically rendering a theme selector and
 * want users to choose from a list of available schemes.
 *
 * @param options The same options you used to customize base16-tailwind.
 * @returns An array of available color schemes and their associated properties.
 */
export function base16Schemes (options?: Base16Options): Base16Scheme[] {
  return new Base16Plugin(options).schemes
}

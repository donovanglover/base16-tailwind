import { type Config } from 'tailwindcss'
import { type PluginCreator } from 'tailwindcss/types/config'

export interface Base16Plugin {
  handler: PluginCreator
  config?: Partial<Config> | undefined
}

import type { Base16ColorSpace } from './Base16ColorSpace.ts'
import type { Base16System } from './Base16System.ts'

export interface Base16Options {
  /** Which color scheme system to use.
   *
   * Currently, there are two standards: base16 and base24.
   *
   * base24 is backwards-compatible with base16, so you can use base24
   * color schemes and limit yourself to 16 colors.
   *
   * Use `'base24'` if you want `-bright` variants for colors.
   *
   * @default 'base16'
   */
  system?: Base16System

  /** Whether or not to style prose classes as well.
   *
   * @default false
   **/
  withTypography?: boolean

  /** Only extend colors instead of override them.
   *
   * This lets you use base16 colors with existing Tailwind CSS colors.
   *
   * @default false
   */
  extendOnly?: boolean

  /** Custom directory for color schemes in .yaml files.
   *
   * If `undefined`, color schemes from tinted-theming are used.
   *
   * Scheme gallery: <https://tinted-theming.github.io/base16-gallery/>
   * Upstream repository: <https://github.com/tinted-theming/schemes>
   *
   * @default '/path/to/base16-tailwind/schemes'
   **/
  customPath?: string

  /** Which color space to use for the CSS variables.
  *
  * @default 'rgb'
  **/
  colorSpace?: Base16ColorSpace
}
